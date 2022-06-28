# JavaScript 手写函数

现如今这个时代，已经有很多现成的库了，为什么还要手写？当然这并不是必须的，在实际的开发过程中，我也会去优先选择一些优秀的库，并不会到处造轮子，因为那会增加维护的成本。

对于手写代码，谈一点自己的思考。很多时候大家会谈论「CURD 工程师 / API 工程师」。没错，通过这些操作确实能够应付大部分业务开发了（好吧~我们面对的很多问题都达不到科研的层面）。但如果能在工作中多一些思考，对一些自己经常使用的东西多一些学习和思考，一方面能加深自己的理解，例如 Promise 的 resolve 函数不执行会发生什么？另一方面了解其背后实现，也可以反思是否有待优化的空间，优秀的项目不都是不断的总结、迭代优化的吗？

所谓的「手撕代码」并非最终目的，在写代码时，变量名定义、函数或接口设计、代码可读性和细节处理这些点也可体现出一名开发者的代码水平和习惯。在平常的工作中要养成一个良好的习惯，不要只是为了面试而面试。

<div style="text-align: right">
  <svg t="1595948360275" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11728" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><defs><style type="text/css"></style></defs><path d="M238.592 155.648H399.36v450.56C399.36 809.984 302.08 880.64 146.432 880.64c-37.888 0-87.04-6.144-118.784-17.408l18.432-130.048c22.528 7.168 51.2 12.288 82.944 12.288 67.584 0 110.592-30.72 110.592-141.312V155.648h-1.024z m301.056 547.84c41.984 22.528 110.592 44.032 179.2 44.032 73.728 0 113.664-30.72 113.664-78.848 0-43.008-33.792-69.632-119.808-99.328-118.784-40.96-197.632-107.52-197.632-211.968C515.072 235.52 617.472 143.36 785.408 143.36c81.92 0 139.264 16.384 182.272 35.84L931.84 308.224c-27.648-13.312-79.872-33.792-148.48-33.792-69.632 0-103.424 32.768-103.424 68.608 0 45.056 38.912 65.536 132.096 101.376 125.952 46.08 184.32 112.64 184.32 214.016 0 119.808-91.136 221.184-286.72 221.184-81.92 0-161.792-22.528-201.728-44.032l31.744-132.096z" fill="#F4DE51" p-id="11729"></path></svg>
</div>