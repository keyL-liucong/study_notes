webpack的执行

## 一、 webapck的本质

-  本质上就是打包工具,不是框架也不是库 
- 实质上是一个nodejs运行程序
- webpack 是一个现代 JavaScript 应用程序的静态模块打包器。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
  

## 二、手写webpack

1. 初始化项目

   `yarn init -y`

2. 安装webpack和webpack-cli

   `yarn add webpack webpack-cli -D`

3. 编写webpack.config.js

   ```
   const path = require('path')
   
   const RunPlugins = require('./plugins/run-plugins')
   const DonePlugins = require('./plugins/done-plugins')
   
   module.exports = {
     entry: './src/index.js',
     output: {
       path: path.resolve(__dirname, './dist'),
       filename: 'main.js'
     },
     module:{
       rules:[
           {
               test:/\.js/,
               use:[
                   path.resolve(__dirname,'loaders','loader1.js'),
                   path.resolve(__dirname,'loaders','loader2.js')
               ]
           }
       ]
   },
   plugins:[
       new RunPlugins(),
       new DonePlugins()
   ]
   }
   ```

4. nodejs入口

   app.js

   ```
   const webpack = require('./webpack')
   const config = require('./webpack.config')
   
   
   const compiler = webpack(config)
   
   compiler.run()
   ```

   

5. webpack.js(自己定义的)

   ```
   const Compiler = require('./compiler')
   
   function webpack(config){
   
       const shellOptions = process.argv.slice(2).reduce((config,arg)=>{
           let [key,value] = arg.split('=')
           config[key.slice(2)] = value
           return config
       },{})
       const finallOptions =  {...config,...shellOptions}
       const compiler = new Compiler(finallOptions)
   
       // 创建完comppiler后  挂载插件
   
       finallOptions.plugins.forEach(plugin => {
           plugin.apply(compiler)
       });
   
   
       return compiler
   } 
   
   module.exports = webpack
   ```

6. compiler.js

   编译的核心   webpack的功能实现

   ```
   const fs = require('fs')
   const path = require('path')
   const options = require('./webpack.config')
   const parser = require('@babel/parser')
   const traverse = require('@babel/traverse').default
   const {
     transformFromAst
   } = require('@babel/core')
   const {
     SyncHook
   } = require('tapable')
   const Parser = {
     getAst: path => {
       // 读取入口文件
       const content = fs.readFileSync(path, 'utf-8')
       // 将文件内容转为AST抽象语法树
       return parser.parse(content, {
         sourceType: 'module'
       })
     },
     getDependecies: (ast, filename) => {
       const dependecies = {}
       // 遍历所有的 import 模块,存入dependecies
       traverse(ast, {
         // 类型为 ImportDeclaration 的 AST 节点 (即为import 语句)
         ImportDeclaration({
           node
         }) {
           const dirname = path.dirname(filename)
           // 保存依赖模块路径,之后生成依赖关系图需要用到
           const filepath = './' + path.join(dirname, node.source.value)
           dependecies[node.source.value] = filepath
         }
       })
       return dependecies
     },
     getCode: ast => {
       // AST转换为code
       const {
         code
       } = transformFromAst(ast, null, {
         presets: ['@babel/preset-env']
       })
       return code
     }
   }
   
   class Compiler {
     constructor(options) {
       this.options = options
       // webpack 配置
       const {
         entry,
         output
       } = options
       // 入口
       this.entry = entry
       // 出口
       this.output = output
       // 模块
       this.modules = []
       this.hooks = {
         run: new SyncHook(),
         done: new SyncHook(),
         emit: new SyncHook()
       }
     }
     // 构建启动
     run() {
       // 解析入口文件
       this.hooks.run.call()
   
       this.build(this.entry)
   
       this.hooks.done.call()
   
       // 生成依赖关系图
       const dependencyGraph = this.modules.reduce(
         (graph, item) => ({
           ...graph,
           // 使用文件路径作为每个模块的唯一标识符,保存对应模块的依赖对象和文件内容
           [item.filename]: {
             dependecies: item.dependecies,
             code: item.code
           }
         }), {}
       )
       this.generate(dependencyGraph)
     }
     build(filename) {
       
       const {
         getAst,
         getDependecies,
         getCode
       } = Parser
       const ast = getAst(filename)
       const dependecies = getDependecies(ast, filename)
       let code = getCode(ast)
   
       // 加载loader
       let loaders = []
   
       const rules = this.options.module.rules
   
       for (let i = 0; i < rules.length; i++) {
         if (rules[i].test.test(filename)) {
           loaders = [...loaders, ...rules[i].use]
         }
       }
       for (let i = loaders.length - 1; i >= 0; i--) {
         code = require(loaders[i])(code)
       }
       const obj = {
         // 文件路径,可以作为每个模块的唯一标识符
         filename,
         // 依赖对象,保存着依赖模块路径
         dependecies,
         // 文件内容
         code
       }
       this.modules.push(obj)
       for (let key in dependecies) {
         if (dependecies[key]) {
           this.build(dependecies[key])
         }
       }
     }
     // 重写 require函数 (浏览器不能识别commonjs语法),输出bundle
     generate(code) {
       // 输出文件路径
       const filePath = path.join(this.output.path, this.output.filename)
       const bundle = `(function(graph){
         function require(module){
           function localRequire(relativePath){
             return require(graph[module].dependecies[relativePath])
           }
           var exports = {};
           (function(require,exports,code){
             eval(code)
           })(localRequire,exports,graph[module].code);
           return exports;
         }
         require('${this.entry}')
       })(${JSON.stringify(code)})`
   
   
       // 把文件内容写入到文件系统
       fs.writeFileSync(filePath, bundle, 'utf-8')
     }
   }
   
   
   module.exports = Compiler
   ```

## 三、loader

- loader的本质
- 他就是一个函数,参数为转换过的js代码，然后在这个函数里面做处理，然后返回更改后的代码。
- 后续会更新一篇手写loader的文章

    ```
function loader(source){
    console.log('loader1 执行了')
    return source 
}

module.exports = loader
    ```

## 四、plugin

- 插件的本质

  plugin的本质是一个类，类里面有一个apply方法，apply的参数为compiler，在其上面会有一些hooks，不同的hooks对应不同的tapable实例。

```
class DonePlugin{
    apply(compiler){
        compiler.hooks.done.tap('DonePlugin',()=>{
            console.log('done-plugin钩子触发了')
        })
    }
}


module.exports = DonePlugin
```

