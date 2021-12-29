# js异步解决方案

## 常用的解决js异步方法

1. callback回调，简单粗暴，但是有回调地狱

```js
function a(call){
    console.log('方法a返回的结果')
        call && call()
}

function b(){
    console.log('方法b返回的结果')
}
// 方法a执行完，执行方法b

a(b)
```

- 这种写法最大的问题是：如果存在这样的一个业务场景，有三个异步函数A,B,C，其中B的执行需要在A执行结束之后，C的执行需要在B之后，这样的场景模拟成代码就是（jquery中ajax方法为例） 

```js
ajax(url, () => {
    // 处理逻辑
    ajax(url1, () => {
        // 处理逻辑
        ajax(url2, () => {
            // 处理逻辑
        })
    })
})
```

2. 事件监听

```
a.on('done', b);
```



```js
let Event = function (){
    this.handler = {}
}

Event.prototype.emit = function(eventName,eventDate){
    let eventHandler = this.handler[eventName]
    if(!eventHandler) {
        return
    }
    eventHandler(eventDate)
    // eventHandler.map(fn=>fn(eventDate))
}


Event.prototype.on =function(eventName,callback){
    if(!this.handler[eventName]){
        this.handler[eventName] = callback
    }
    // this.handler[eventName].push(callback)
}

let eventCenter = new Event()
eventCenter.on('aEnd',function(res){
    b(res)
})

function b(res){
    console.log(res)
}

function a(x){
    eventCenter.emit('aEnd',x)
}

a('a返回的参数')
```

3. 发布订阅模式

```js
var salesOffices = {};

salesOffices.clientList = []; // 缓存列表，存放订阅者的回调函数,也就是花名册

salesOffices.listen = function( fn ){ // 增加订阅者
    this.clientList.push( fn ); // 订阅的消息添加进缓存列表
};

salesOffices.trigger = function(){ // 发布消息
    for(var i = 0;i<this.clientList.length;i++){
        this.clientList[i].apply(this,arguments)
    }
};
function a(){
    console.log('方法a返回的结果')
}

function b(res){
    res()
    console.log('方法b返回的结果')
}
salesOffices.listen(b)
salesOffices.trigger(a)

```

- 事件监听是将一个**回调函数**和**事件**绑定在一起，触发了相应事件，就会执行相应的回调函数
- 发布/订阅模式是将**订阅函数**放入了**发布者**的订阅者列表中，更新时，遍历订阅者列表，执行所有的订阅者函数

4. promise

```js
function a(){
    console.log('方法a返回的结果')
    return Promise.resolve()
}
a().then(()=>{
    b()
})

function b(res){
    console.log('方法b返回的结果')
}
```

5. Generators/ yield

```js
function a(){
    console.log('方法a返回的结果')
}

function *b(){
    yield a()
    console.log('方法b返回的结果')
}
let b1 = b()
b1.next()
b1.next()
```

6.  async/await

```js
    function fnA(){
        return new Promise(resolve=>{
            ...//异步操作中resolve
        })
    }
    function fnB(){
        return new Promise(resolve=>{
            ...//异步操作中resolve
        })
    }
    function fnC(){
        return new Promise(resolve=>{
            ...//异步操作中resolve
        })
    }

    async function gen(){
        let resA=await fnA()
        let resB=await fnB(resA)
        let resC=await fnC(resB)
    }
    gen()
```

## 常见面试题，手写Promise

```js
const PEDDING = 'PEDDING'
const RESOLVE = 'RESOLVE'
const REJECT = 'REJECT'
const handlePromise = (result, newPromise, resolve, reject) => {
  if (typeof result === 'object' && result !== null || typeof result === 'function') {
    const then = result.then
    if (typeof then === 'function') {
      then.call(result, r => {
        handlePromise(r, newPromise, resolve, reject)
      }, err => {
        reject(err)
      })
    } else {
      resolve(result)
    }
  } else {
    resolve(result)
  }
}
class NewPromise {
  status = PEDDING
  result = undefined
  reason = undefined
  onResolvedCallBacks = []
  onRejectedCallBacks = []
  constructor(exc) {
    const resolve = result => {
      if (this.status === PEDDING) {
        this.result = result
        this.status = RESOLVE
        this.onResolvedCallBacks.forEach(fn => fn())
      }
    }
    const reject = reason => {
      if (this.status === PEDDING) {
        this.reason = reason
        this.status = REJECT
        this.onRejectedCallBacks.forEach(fn => fn())
      }
    }
    exc(resolve, reject)
  }

  then(onResolve, onReject) {

    const newPromse = new NewPromise((resolve, reject) => {
      if (this.status === RESOLVE) {
        setTimeout(() => {
          let result = onResolve(this.result)
          handlePromise(result, newPromse, resolve, reject)
        }, 0);

      }
      if (this.status === REJECT) {
        setTimeout(() => {
          let result = onReject(this.reason)
          handlePromise(result, newPromse, resolve, reject)
        }, 0);
      }
      if (this.status === PEDDING) {
        this.onResolvedCallBacks.push(() => {
          let result = onResolve(this.result)
          handlePromise(result, newPromse, resolve, reject)
        })
        this.onRejectedCallBacks.push(() => {
          let result = onReject(this.reason)
          handlePromise(result, newPromse, resolve, reject)
        })
      }

    })
    return newPromse
  }
  catch(onReject){
    return this.then(null, onReject);
  }
  finally(onFinally) {
	return this.then(onFinally, onFinally);
  }
}
NewPromise.all = function(allp){
  let list = []
  let len = 0
  let hasErr = false
  return new NewPromise((resolve,reject)=>{
    for (let i = 0; i < allp.length; i++) {
      allp[i].then(res=>{
        list[i] = res
        len++
        len === allp.length && resolve(list)

      },err=>{
        !hasErr && reject(err)
        hasErr = true
      })
    }
  })
}

NewPromise.race = function(allp){
  let hasValue = false
  let hasErr = false
  return new NewPromise((resolve,reject)=>{
    for (let i = 0; i < allp.length; i++) {
      allp[i].then(res=>{
       !hasValue && !hasErr && resolve(res)
       hasValue = true
      },err=>{
        !hasValue && !hasErr && reject(err)
        hasErr = true
      })
    }
  })
}
```

