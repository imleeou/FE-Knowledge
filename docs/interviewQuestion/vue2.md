# Vue2相关面试题

## v-if 和 v-show 的区别

- v-show 只是简单的控制元素的 display 属性，而 v-if 才是条件渲染（条件为真，元素将会被渲染，条件为假，元素会被销毁）
- v-show 有更高的首次渲染开销，而 v-if 的首次渲染开销要小的多
- v-if 有更高的切换开销，v-show 切换开销小
- v-if 有配套的 v-else-if 和 v-else，而 v-show 没有
- v-if 可以搭配 template 使用，而 v-show 不行

