[Diff 算法核心原理](https://juejin.cn/post/6994959998283907102)
[图解Diff算法](https://mp.weixin.qq.com/s/8M-pJdKjF6bx5ijtSFKIcw)
# 图解Diff算法
## 虚拟dom
1. 虚拟 dom 是什么？

虚拟dom是一个对象，一个用js来模拟真实dom的对象；
```js
// 真实的dom结构
<ul id='list'>
    <li class='item1'>111</li>
    <li class='item2'>222</li>
    <li class='item3'>333</li>
</ul>
```
那么上述dom结构，在虚拟dom中是如何进行展示的呢？

```js
// 旧的虚拟dom结构
const oldVDom = { 
     tagName: 'ul', // 标签名
     props: {  // 标签属性
        id: 'list' 
     },
     children: [ // 标签子节点
        { tagName: 'li', props: { class: 'item1' }, children: ['111'] },
        { tagName: 'li', props: { class: 'item2' }, children: ['222'] },
        { tagName: 'li', props: { class: 'item3' }, children: ['333'] },
     ]
}
```
此时我修改一下真实的dom结构后：
```js
<ul id='list'>
    <li class='item1'>111</li>
    <li class='item2'>222</li>
    <li class='item3'>three-three</li>
</ul>
```
之后会生成新的虚拟dom：

```js
// 新的虚拟dom结构
const newVDom = { 
     tagName: 'ul', // 标签名
     props: {  // 标签属性
        id: 'list' 
     },
     children: [ // 标签子节点
         // 在diff中，会通过patch发现此处两个节点没有变化，并将其复用
        { tagName: 'li', props: { class: 'item1' }, children: ['111'] },
        { tagName: 'li', props: { class: 'item2' }, children: ['222'] },
        // 在diff的过程中，会通过patch来找出此处发生了更改，并将其替换
        { tagName: 'li', props: { class: 'item3' }, children: ['three-three']},
     ]
}
```
此时看到的两个dom结构就是我们常说的 新旧虚拟dom

## 为什么要有虚拟 dom ？解决了什么问题？

这里先来了解一下浏览器的渲染原理：

![RBAC](../image/diff-1.png)

由图可以发现触发一次重排的代价还是比较大的；如果频繁触发浏览器的重排，无疑会造成很大的性能成本。

我们都知道，在每一次事件循环后浏览器会有一个UI的渲染过程，那么在一次事件循环内触发的所有dom操作都会被当作为异步任务被放进异步任务队列中等待被处理。

那么此例子只是更改了一次dom结构，如果更改100+次呢？

虽然浏览器做了优化，在一段时间内频繁触发的dom不会被立即执行，浏览器会积攒变动以最高60HZ的频率更新视图；但是难免还是会造成一定次数的重排。

这时候，虚拟dom就派上了用场：不管更改多少次，多少个地方的结构，都会映射到新的虚拟dom结构中去，然后进行diff的对比，最终渲染成真实的dom，在这一次render中只会操作一次真实的dom结构，所以只会造成一次重排。

同时，采用JS对象去模拟DOM结构的好处是，页面的更新完全可以映射到JS对象中去处理，而操作内存中的JS对象速度也会更快。

> 所以才有了虚拟dom的出现，可以看下图虚拟dom工作原理：
* 先根据初始的dom结构，生成一个 旧的虚拟dom：oldVDom；
* 再根据修改后的dom结构，生成 一个新的虚拟dom：newVDom；
* 然后通过diff算法来对比新旧虚拟DOM，从而找出需要替换的节点，然后将其渲染为真实的dom结构；

![RBAC](../image/diff-2.png)

> 虚拟dom的缺点？
1. 首屏加载时间更长

由于我们需要根据当前的节点，来生成对应的虚拟dom，我们都知道虚拟dom是一个JS对象，所以在项目初始化的时候去生成对应的虚拟节点也是一笔时间上的开销；因此项目的首次加载可能耗费更多时间

2.极端场景下性能不是最优解

如果当前页面的节点基本全都改变了，那我们去做了一次diff的patch过程相当于做了无效操作

## Diff算法
了解了虚拟dom结构之后，我们都清楚了diff的触发时机是在新旧VDom进行对比的时候。

tips：既然所有的更改都被映射到了新的VDom上，那么为何不直接将新的VDom渲染成真实的dom呢？

answer：如果直接渲染的话，会默认把所有节点都更新一遍，造成不必要的节点更新；而经过了diff的比较后可以精确的找出那些节点需要更新，从而实现按需更新的理念，节省性能；

那么Diff算法的比较规则有哪些呢？

> 同层比较
为什么要同层比较？

如果不同层比较的话，全部的对比完一整个dom结构，时间复杂度是 O(n^3) ; 时间成本太大了；所以改用同层比较这样的方法去牺牲了精度而提高了时间效率。

可以看到图中每一层的节点，都是同层在进行对比，这样的好处就是，不会每一层的对比都是相对独立的，不会影响到下一层的对比；同时同层对比的时间复杂度也是 O(n)；

同时也是遵循一个深度优先的原则；diff的过程是一个深度优先遍历节点，然后将该节点与newVDom中的同层节点进行对比，如果有差异，则记录该节点到JS对象中。

![RBAC](../image/diff-3.png)

在同层对比的过程中有这样几种情况：

```js
<div>
    <p>ppp</p>
    <ul id='list' >
        <li class='item1'>111</li>   
        <li class='item2'>222</li>  
        <li class='item3'>333</li>
    </ul>
    <div>div</div>
</div>
```
```js
<div>
    // 1. 节点类型发生了改变
    <h3>ppp</h3>
    // 2. 节点类型一样，属性发生变化
    <ul id='list-change'>
        <li class='item1'>111</li>   
        <li class='item2'>222</li>  
        // 3. 节点被删除
        // <li class='item3'>333</li> 
        // 4. 新增节点
        <li class='item4'>444</li>  
    </ul>
    // 4. 文本变化
    <div>属性变化</div>
</div>
```
>1.节点类型变了

节点p标签 变成了h3标签，此时diff的过程中p节点会被直接销毁，然后挂载新的节点 h3，同时p标签的子节点也会被全部销毁；虽然可能造成一些不必要的销毁，但是为了实现同层比较的方法节省时间成本只能这样做咯；同时这样也告诫我们在写代码的时候，可以规避一些不必要的父节点的类型替换，比如将p标签换成了div等。

>2. 节点类型一样，属性或者属性值发生变化

此时不会触发节点的卸载和挂载，只会触发当前节点的更新

>3. 删除/新增/改变 节点

这时候就需要找出这些节点并在newVDom中进行插入/删除，这个过程请看下面vue和react是如何利用key值来处理的吧！

>4. 文本变化

只会触发文本的改变

## vue中的diff算法
在了解了虚拟dom和diff算法的相关内容后，我们来看看各大框架中是如何做处理的吧！

>vue2--双端比较

这里你需要提前了解vue2内部的响应式原理是如何运作的，推荐文章：vue2的响应式原理[1]。那么，当触发了vue的数据的响应式后，其内部的一系列变化又是如何呢？

首先，数据改变会触发 setter，然后调用 Dep.notify(), 并且通过Dep.notify去通知所有订阅者Watcher ， 订阅者们就会调用patch方法 ， 给真实 DOM 打补丁，更新相应的视图。

![RBAC](../image/diff-4.png)

接下来我们来分析几个核心函数吧：

> patch () diff的入口函数
```js
function patch(oldVnode, newVnode) { // 传入新、旧节点
  // 比较是否为一个类型的节点
  if (sameVnode(oldVnode, newVnode)) {
    // 是：继续进行深层比较
    patchVnode(oldVnode, newVnode)
  } else {
    // 否
    const oldEl = oldVnode.el // 旧虚拟节点的真实DOM节点
    const parentEle = api.parentNode(oldEl) // 获取父节点
    createEle(newVnode) // 创建新虚拟节点对应的真实DOM节点
    if (parentEle !== null) {
      api.insertBefore(parentEle, newVnode.el, api.nextSibling(oldEl)) // 将新元素添加进父元素
      api.removeChild(parentEle, oldVnode.el)  // 移除以前的旧元素节点
      // 设置null，释放内存
      oldVnode = null
    }
  }
  return newVnode
}
```
>sameVNode () 主要用来判断两个节点是否完全相同，那么满足什么条件才能判断两个节点完全相同呢？
```js
function sameVnode(oldVnode, newVnode) {
  return (
    oldVnode.key === newVnode.key && // key值是否一样
    oldVnode.tagName === newVnode.tagName && // 标签名是否一样
    oldVnode.isComment === newVnode.isComment && // 是否都为注释节点
    isDef(oldVnode.data) === isDef(newVnode.data) && // 是否都定义了data
    sameInputType(oldVnode, newVnode) // 当标签为input时，type必须是否相同
  )
}
```
>patchVNode () 此阶段我们已经找到了需要去对比的节点，那么该方法主要做了什么呢？
* 拿到真实的dom节点el（即oldVnode）
* 判断当前newVnode和oldVnode是否指向同一个对象，如果是则直接return
* 如果是文本节点，且文本有变化，则直接调用api 将文本替换；若文本没有变化，则继续对比新旧节点的子节点children
* 如果oldVnode有子节点而newVnode没有，则删除el的子节点
* 如果oldVnode没有子节点而newVnode有，则将newVnode的子节点真实化之后添加到el
* 如果两者都有子节点，则执行updateChildren函数比较子节点，这一步很重要---diff的核心

```js
function patchVnode(oldVnode, newVnode) {
  const el = newVnode.el = oldVnode.el // 获取真实DOM对象
  // 获取新旧虚拟节点的子节点数组
  const oldCh = oldVnode.children, newCh = newVnode.children
  // 如果新旧虚拟节点是同一个对象，则终止
  if (oldVnode === newVnode) return
  // 如果新旧虚拟节点是文本节点，且文本不一样
  if (oldVnode.text !== null && newVnode.text !== null && oldVnode.text !== newVnode.text) {
    // 则直接将真实DOM中文本更新为新虚拟节点的文本
    api.setTextContent(el, newVnode.text)
  } else {
    if (oldCh && newCh && oldCh !== newCh) {
      // 新旧虚拟节点都有子节点，且子节点不一样
      // 对比子节点，并更新
      /*  diff核心！！*/  
      updateChildren(el, oldCh, newCh) 
    } else if (newCh) {
      // 新虚拟节点有子节点，旧虚拟节点没有
      // 创建新虚拟节点的子节点，并更新到真实DOM上去
      createEle(newVnode)
    } else if (oldCh) {
      // 旧虚拟节点有子节点，新虚拟节点没有
      // 直接删除真实DOM里对应的子节点
      api.removeChild(el)
    }
  }
}
```
> updateChildren ()
此方法就是diff算法的核心部分，当发现新旧虚拟节点的的子节点都存在时候，我们就需要通过一些方法来判断哪些节点是需要移动的，哪些节点是可以直接复用的，来提高我们整个diff的效率;

下面就通过一些图解来讲解吧：

主要是通过 首尾指针法 ： 通过在新旧子节点的首尾定义四个指针，然后不断的对比找到可复用的节点，同时判断需要移动的节点
```js
<ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
 </ul>
修改数据后 ⬇️ // a,b,c,d  ->  d,b,a,c
<ul>
    <li>d</li>
    <li>b</li>
    <li>a</li>
    <li>c</li>
</ul>
```
1、理想情况下

经过四次比较可以找到替换的节点，可以看到图中第四次找到了可替换的节点；

![RBAC](../image/diff-5.png)

可以看到在 oldCh 和 newCh 的首尾定义了四个指针：

1、oldS和 newS使用sameVnode方法进行比较，sameVnode(oldS, newS) ；如果相同，则 oldS++，newS++

2、oldE 和newE使用sameVnode方法进行比较，sameVnode(oldE, newE)；如果相同，则 oldE--，newS --

3、oldS和 newE使用sameVnode方法进行比较，sameVnode(oldS, newE)；如果相同，则 oldS ++，newS --

4、oldE 和 newS使用sameVnode方法进行比较，sameVnode(oldE, newS)；如果相同，则 oldE --，newS ++

这是一个不断向内部收缩的过程，直到对比完所有的节点；
```js
function vue2Diff(prevChildren, nextChildren, parent) {
  // 在新旧首尾，分别定义四个指针
  let oldStartIndex = 0,
    oldEndIndex = prevChildren.length - 1
    newStartIndex = 0,
    newEndIndex = nextChildren.length - 1;
  let oldStartNode = prevChildren[oldStartIndex],
    oldEndNode = prevChildren[oldEndIndex],
    newStartNode = nextChildren[newStartIndex],
    newEndNode = nextChildren[newEndIndex];
   // 不断向内收缩
  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
      if (oldStartNode.key === newStartNode.key) {
        ...
      } else if (oldEndNode.key === newEndNode.key) {
        ...
      } else if (oldStartNode.key === newEndNode.key) {
        ...
      } else if (oldEndNode.key === newStartNode.key) {
        ...
      }
  }
}
```
在经历了上面的循环后，我们可以找出一些节点并将其复用，但是我们复用的过程中，需要怎么插入这些节点呢？

以上图中的为第一步，我们可以发现，d 节点原本在旧列表末尾的节点，却是新列表中的开头节点，没有人比它更靠前，因为他是第一个，所以我们只需要把当前的节点移动到原本旧列表中的第一个节点之前，让它成为第一个节点即可。

第二步：

![RBAC](../image/diff-6.png)

第二步我们可以发现了key相同的 c 节点，旧列表的尾节点oldE和新列表的尾节点newE为复用节点。原本在旧列表中就是尾节点，在新列表中也是尾节点，说明该节点不需要移动，所以我们什么都不需要做。

第三步：

![RBAC](../image/diff-7.png)

在第三步中我们可以看到 a 节点是可以复用的，旧列表的头节点oldS和新列表的尾节点newE为复用节点，我们只要将DOM-a移动到DOM-b后面就可以了。原本旧列表中是头节点，然后在新列表中是尾节点。那么只要在旧列表中把当前的节点移动到原本尾节点的后面，就可以了。

第四步：这一步不需要移动节点，直接复用；

![RBAC](../image/diff-8.png)

最终呢，我们就得到了对比后的 dbac 啦，同时发现只有 d 和 a 节点需要进行移动，而b 、c节点都是不需要移动的；那么至此，一个理想状态下的diff比较过程就结束了，是不是感觉很清晰易懂呢？

2.非理想状态下

如果这四种方式都没有找到该怎么处理呢？

![RBAC](../image/diff-9.png)

可以看到图中四次比较都没有找到可以复用的节点，那么我们只能把所有旧子节点的 key 做一个映射到旧节点下标的 key -> index 表，然后用新 vnode 的 key 去找出在旧节点中可以复用的位置；可以看下图的处理。拿新列表的第一个节点去旧列表中找与其key相同的节点。

![RBAC](../image/diff-10.png)

那么我们就以 newCh 的首节点的key值，去到 oldCh 的 key - index 的映射表中，去根据key值找到对应的节点，同时将 b 节点移动到首部去，因为在新列表中 b 就属于首部，所以在oldCh中也需要移动到首部 ；同时，还需要将 oldCh 中的 b 节点设为 undefined , 因为已经复用过了，就可以跳过比较了。

这个非理想的状态下的对比时间复杂度为 O(n^2):

```js
function vue2Diff(prevChildren, nextChildren, parent) {
  //...
  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
    if (oldStartNode.key === newStartNode.key) {
    //...
    } else if (oldEndNode.key === newEndNode.key) {
    //...
    } else if (oldStartNode.key === newEndNode.key) {
    //...
    } else if (oldEndNode.key === newStartNode.key) {
    //...
    } else {
      // 在旧列表中找到 和新列表头节点key 相同的节点
      let newtKey = newStartNode.key,
        oldIndex = prevChildren.findIndex(child => child.key === newKey);
      
      if (oldIndex > -1) {
        let oldNode = prevChildren[oldIndex];
        patch(oldNode, newStartNode, parent)
        parent.insertBefore(oldNode.el, oldStartNode.el)
        // 复用后，设置为 undefined 
        prevChildren[oldIndex] = undefined
      }
      newStartNode = nextChildren[++newStartIndex]
    }
  }
}
```

> vue3--最长递增子序列

那么相比vue2中的双端对比，在vue3中的diff算法，又做了哪些优化呢？

以下面的例子来看：

![RBAC](../image/diff-11.png)

1. 从头对比找到有相同的节点 patch ，发现不同，立即跳出。
2. 如果第一步没有patch完，立即，从后往前开始patch ,如果发现不同立即跳出循环。
3. 如果新的节点大于老的节点数 ，对于剩下的节点全部以新的vnode处理（这种情况说明已经patch完相同的vnode）。
4. 对于老的节点大于新的节点的情况 ， 对于超出的节点全部卸载（这种情况说明已经patch完相同的vnode）。
5. 不确定的元素（这种情况说明没有patch完相同的vnode） 与 3 ，4对立关系。

前面的逻辑跟vue2还是比较像，逐渐向中间收缩，那么关键点就在判断哪些节点是需要变动的。

在经历上述操作后，会出现以下节点需要判断（即图中圈起来的节点）：

![RBAC](../image/diff-12.png)

首先，我们以新节点的数量创建一个 source 数组，并用 -1 填满；

这个source数组就是用来做新旧节点的对应关系的，我们将新节点在旧列表的位置存储在该数组中，我们再根据source计算出它的最长递增子序列用于移动DOM节点。

其次，我们先建立一个对象存储当前新列表中的节点与index的关系：

```js
const newVNodeMap = {
    c: '1', 
    d: '2',
    b: '3',
    i: '4'
}
```
然后再去旧列表中去找相同的节点，并记录其index的位置。

在找节点时，如果旧节点在新列表中没有的话，直接删除就好。除此之外，我们还需要一个数量表示记录我们已经patch过的节点，如果数量已经与新列表剩余的节点数量一样，那么剩下的旧节点我们就直接删除了就可以了。

![RBAC](../image/diff-13.png)

> Dom如何移动？
首先，我们需要定义一个Lis数组来存储source中的最长连续递增子序列的下标：-   然后从后往前遍历 source 数组；这个过程中会发生三种情况：

* 当前数值为 -1 ，也就说明该节点是新增的，我们直接将其插入到队尾就好了，同时 i--。
* 当前的索引和 Lis 中的值一致，即 i == Lis[j] ，同时 i --, j --。
* 当前的索引不是 Lis 中的值，那么该节点就需要进行移动，我们只需要将该节点插入到队尾就可以了，因为队尾是排好序的。

![RBAC](../image/diff-14.png)

tips：没看懂这三种情况？不要慌：

我们来一步一步拆解：

1.首先，i = 3，即上图中，值为 -1 为第一种情况，节点需要新增，i--；

![RBAC](../image/diff-15.png)

2.i = 2，索引为 2 != Lis[j] ****为第三种情况，节点需要移动，直接在旧列表中，将b节点插入到尾部位置，i --

![RBAC](../image/diff-16.png)

![RBAC](../image/diff-17.png)

3.i = 1，此时索引 i == Lis[j] 为第二种情况，我们的节点不需要移动；

![RBAC](../image/diff-18.png)

4.i = 0，此时索引 i == Lis[j] 为第二种情况，我们的节点也不需要移动；

至此 vue3的diff的对比过程就已经完成了，相比于2中的首尾指针法，在这种非理想情况下的节点对比采用了最长递增子序列的算法思想来做处理；

这三种情况对应在源码中 ：

```js
function vue3Diff(prevChildren, nextChildren, parent) {
  //...
  if (move) {
    // 需要移动
    const seq = lis(source); // [0, 1]
    let j = seq.length - 1;  // 最长子序列的指针
    // 从后向前遍历
    for (let i = nextLeft - 1；i >= 0; i--) {
      let pos = nextStart + i, // 对应新列表的index
        nextNode = nextChildren[pos], // 找到vnode
        nextPos = pos + 1，    // 下一个节点的位置，用于移动DOM
        refNode = nextPos >= nextChildren.length ? null : nextChildren[nextPos].el, //DOM节点
        cur = source[i];      // 当前source的值，用来判断节点是否需要移动
      if (cur === -1) {
        // 情况1，该节点是全新节点
        mount(nextNode, parent, refNode)
      } else if (cur === seq[j]) {
        // 情况2，是递增子序列，该节点不需要移动
        // 让j指向下一个
        j--
      } else {
        // 情况3，不是递增子序列，该节点需要移动
        parent.insetBefore(nextNode.el, refNode)
      }
    }
  } else {
  // 不需要移动
  for (let i = nextLeft - 1；i >= 0; i--) {
      let cur = source[i];              // 当前source的值，用来判断节点是否需要移动
    
      if (cur === -1) {
       let pos = nextStart + i,         // 对应新列表的index
          nextNode = nextChildren[pos], // 找到vnode
          nextPos = pos + 1，           // 下一个节点的位置，用于移动DOM
          refNode = nextPos >= nextChildren.length ? null : nextChildren[nextPos].el, //DOM节点
          mount(nextNode, parent, refNode)
      }
    }
}
```

你可能会问，你这边递增的子序列需要连续吗，那么这里给你将例子稍微变动一下：这时候你会发现连续递增的节点是 c, d, e 他们不是紧密连续的，但是在整个list中却是保持index递增的，也不需要移动。

思考题

参考上面的图解，结合源码，看看下面例子中的虚拟dom节点是怎么移动的。

![RBAC](../image/diff-19.png)

时间复杂度的优化

这里我们只需要找出source中的最长连续递增子序列 就ok了：

* 最长连续递增子序列
* [leetcode 最长连续递增子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

举个例子：[10,5,6,7,4,1,2,8,9]

那么在该此例子中，连续递增的子序列是 [5,6,7,8,9], 所以返回的个数是5；

可以参考该算法的基础实现：
```js
const arr = [10,5,6,7,4,1,2,8,9]
function lis(arr) {
  let len = arr.length,
    dp = new Array(len).fill(1); // 用于保存长度
  // i = 0 => O(n^2) ;  i != 0 =>  O(nlogn)
  for (let i = len - 1; i >= 0; i--) { 
    let cur = arr[i]
    for(let j = i + 1; j < len; j++) {
      let next = arr[j]
      // 如果是递增 取更大的长度值
      if (cur < next) dp[i] = Math.max(dp[j]+1, dp[i])
    }
  }
  return Math.max(...dp)
}
lis(arr) // 5
```
由算法可以看出：在最好的情况下即 i != 0 的条件下，平均的时间复杂度是O(nlgn) 那么在 i = 0 时，时间复杂度为O(n^2)

在vue2中关于的这种节点的查找和替换的时间复杂度稳定为O(n^2)

在vue3中依赖于最长递增子序列去做节点的移动和删除/新增，时间复杂度为O(nlgn)～O(n^2)

## key值的作用，为什么不能使用index作为key值？

key的作用--性能更高

> 在Vue中判断节点是否可复用都是以key值作为判断的前提条件，如果不使用key值判断，会默认更新所有节点，而Vue中组件的更新过程也是极其复杂的，所以会造成一些不必要性能的成本；所以key可以更高效的帮助我们判断节点的可复用性。

为什么不能使用index作为key？

很简单，来看个例子：
```js
<ul>                      <ul>
    <li key= 0 >a</li>        <li key= 0 >new</li>  // 新增
    <li key= 1 >b</li>        <li key= 1 >a</li>
    <li key= 2 >c</li>        <li key= 2 >b</li>
                              <li key= 3 >c</li></ul>                                               
</ul>
```
按理来说，我们应该会复用里面的 a、b、c 三个节点对吧；

![RBAC](../image/diff-20.png)

看这个例子，我们直接unshift() 插入列表一个新元素，这时候index发生了变化！！即key也会发生变化！！

但是我们知道：按照Vue中的比较思路，这样的话，我们就无法复用哪些本来可以复用的节点，导致该节点被重新渲染一次，造成vue组件内一些列的更新，如果列表一旦很大，开销成本巨大！

![RBAC](../image/diff-21.png)

只要此时你的列表是一个动态的列表：而且使用了index作为key值，当你新增或者删除列表时候，key的排序总是以0、1、2、3...去排序的，而这样也会导致列表元素的key值在不断变化；导致 Vue 不能准确的找到可复用的节点，而是去直接做了patch操作，造成很多额外的工作。

解决办法--唯一值

这也是我们为什么要用一个唯一的值去作为列表的key值的原因了！所以我们一般可以用id/唯一值作为key，这是规范问题，所以大家以后再看到项目中有index作为key的情况，请让他去学习diff算法吧哈哈哈！

>所以在学习了diff之后要警示我们：
>1、key值要选择一个唯一值，通常用id来做key
>2、不要做一些无谓的dom结构修改或者跨层级去操作一些dom

## 总结

* 我们学习了虚拟dom和diff算法的基本概念，了解了为什么要存在虚拟dom和diff算法；
* 同时我们也了解了vue2和vue3中关于diff算法的处理过程，这可以更好的帮助我们理解vue的更新机制原理，同时也了解到了为什么diff可以如此高效的提升性能；
* 最后，我一直认为学习原理是为了让我们更好的和更高效的去运用框架，可以避免一些不必要的bug问题，同时也是提升自我的一种方式途径！

![RBAC](../image/diff-22.png)

你能说一说 Vue 的 patch 算法吗？

Vue 的 patch 算法有三个作用：负责首次渲染和后续更新或者销毁组件

如果老的 VNode 是真实元素，则表示首次渲染，创建整棵 DOM 树，并插入 body，然后移除老的模版节点

如果老的 VNode 不是真实元素，并且新的 VNode 也存在，则表示更新阶段，执行 patchVnode

首先是全量更新所有的属性

如果新老 VNode 都有孩子，则递归执行 updateChildren，进行 diff 过程

针对前端操作 DOM 节点的特点进行如下优化：

同层比较（降低时间复杂度）深度优先（递归）

而且前端很少有完全打乱节点顺序的情况，所以做了四种假设，假设新老 VNode 的开头结尾存在相同节点，一旦命中假设，就避免了一次循环，降低了 diff 的时间复杂度，提高执行效率。如果不幸没有命中假设，则执行遍历，从老的 VNode 中找到新的 VNode 的开始节点

找到相同节点，则执行 patchVnode，然后将老节点移动到正确的位置

如果老的 VNode 先于新的 VNode 遍历结束，则剩余的新的 VNode 执行新增节点操作

如果新的 VNode 先于老的 VNode 遍历结束，则剩余的老的 VNode 执行删除操纵，移除这些老节点

如果新的 VNode 有孩子，老的 VNode 没孩子，则新增这些新孩子节点

如果老的 VNode 有孩子，新的 VNode 没孩子，则删除这些老孩子节点

剩下一种就是更新文本节点

如果新的 VNode 不存在，老的 VNode 存在，则调用 destroy，销毁老节点
