[Diff 算法核心原理](https://juejin.cn/post/6994959998283907102)
# vue2 diff 算法

>思考：为什么需要diff？

## 历史
1.x 版本的 Vue 没有 VNode 和 diff 算法，那个版本的 Vue 的核心只有响应式原理：Object.defineProperty、Dep、Watcher。
* Object.defineProperty: 负责数据的拦截。getter 时进行依赖收集，setter 时让 dep 通知 watcher 去更新
* Dep：Vue data 选项返回的对象，对象的 key 和 dep 一一对应
* Watcher：key 和 watcher 时一对多的关系，组件模版中每使用一次 key 就会生成一个 watcher
```js
<template>
  <div class="wrapper">
    <!-- 模版中每引用一次响应式数据，就会生成一个 watcher -->
    <!-- watcher 1 -->
    <div class="msg1">{{ msg }}</div>
    <!-- watcher 2 -->
    <div class="msg2">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 和 dep 一一对应，和 watcher 一 对 多
      msg: 'Hello Vue 1.0'
    }
  }
}
</script>
```
当数据更新时，dep 通知 watcher 去直接更新 DOM，因为这个版本的 watcher 和 DOM 时一一对应关系，watcher 可以非常明确的知道这个 key 在组件模版中的位置，因此可以做到定向更新，所以它的更新效率是非常高的。

虽然更新效率高，但随之也产生了严重的问题，无法完成一个企业级应用，理由很简单：当你的页面足够复杂时，会包含很多的组件，在这种架构下就意味这一个页面会产生大量的 watcher，这非常耗资源。

这时就在 Vue 2.0 中通过引入 VNode 和 diff 算法去解决 1.x 中的问题。将 watcher 的粒度放大，变成一个组件一个 watcher（就是我们说的渲染 watcher），这时候你页面再大，watcher 也很少，这就解决了复杂页面 watcher 太多导致性能下降的问题。

当响应式数据更新时，dep 通知 watcher 去更新，这时候问题就来了，Vue 1.x 中 watcher 和 key 一一对应，可以明确知道去更新什么地方，但是 Vue 2.0 中 watcher 对应的是一整个组件，更新的数据在组件的的什么位置，watcher 并不知道。这时候就需要 VNode 出来解决问题。

通过引入 VNode，当组件中数据更新时，会为组件生成一个新的 VNode，通过比对新老两个 VNode，找出不一样的地方，然后执行 DOM 操作更新发生变化的节点，这个过程就是大家熟知的 diff。

以上就是 Vue 2.0 为什么会引入 VNode 和 diff 算法的历史原因了，也是 Vue 1.x 到 2.x 的一个发展历程。

## 目标
* 深入理解 Vue 的 patch 阶段，理解其 diff 算法的原理。

### 1.入口
> /src/core/instance/lifecycle.js
```js
const updateComponent = () => {
  // 执行 vm._render() 函数，得到 VNode，并将 VNode 传递给 _update 方法，接下来就该到 patch 阶段了
  vm._update(vm._render(), hydrating)
}
```
### 2.vm._update
> /src/core/instance/lifecycle.js
```js
/**
 * 页面首次渲染和后续更新的入口位置，也是 patch 的入口位置 
 */
Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
  const vm: Component = this
  // 页面的挂载点，真实的元素
  const prevEl = vm.$el
  // 老 VNode
  const prevVnode = vm._vnode
  const restoreActiveInstance = setActiveInstance(vm)
  // 新 VNode
  vm._vnode = vnode
  // Vue.prototype.__patch__ is injected in entry points
  // based on the rendering backend used.
  if (!prevVnode) {
    // 老 VNode 不存在，表示首次渲染，即初始化页面时走这里
    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
  } else {
    // 响应式数据更新时，即更新页面时走这里
    vm.$el = vm.__patch__(prevVnode, vnode)
  }
  restoreActiveInstance()
  // update __vue__ reference
  if (prevEl) {
    prevEl.__vue__ = null
  }
  if (vm.$el) {
    vm.$el.__vue__ = vm
  }
  // if parent is an HOC, update its $el as well
  if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
    vm.$parent.$el = vm.$el
  }
  // updated hook is called by the scheduler to ensure that children are
  // updated in a parent's updated hook.
}
```
### 3.vm.__patch__
>/src/platforms/web/runtime/index.js
```js
/ 在 Vue 原型链上安装 web 平台的 patch 函数
Vue.prototype.__patch__ = inBrowser ? patch : noop
```
### 4.patch
>/src/platforms/web/runtime/patch.js
```js
// patch 工厂函数，为其传入平台特有的一些操作，然后返回一个 patch 函数
export const patch: Function = createPatchFunction({ nodeOps, modules })
```
