# HTML 相关面试题

## html5 有哪些新增标签？{#html5-new-tags}

为了更好地处理今天的互联网应用，HTML5 添加了很多新元素及功能，比如: 图形的绘制，多媒体内容，更好的页面结构，更好的形式处理，和几个 api 拖放元素，定位，包括网页应用程序缓存，存储，网络工作等。

### 新的语义和结构元素

| 标签           | 描述                                                           |
| -------------- | -------------------------------------------------------------- |
| `<article>`    | 定义页面独立的内容区域。                                       |
| `<aside>`      | 定义页面的侧边栏内容。                                         |
| `<bdi>`        | 允许您设置一段文本，使其脱离其父元素的文本方向设置。           |
| `<command>`    | 定义命令按钮，比如单选按钮、复选框或按钮。                     |
| `<details>`    | 用于描述文档或文档某个部分的细节。                             |
| `<dialog>`     | 用于描述文档或文档某个部分的细节。                             |
| `<summary>`    | 标签包含 details 元素的标题。                                  |
| `<figure>`     | 规定独立的流内容（图像、图表、照片、代码等等）。               |
| `<figcaption>` | 定义 `<figure>` 元素的标题。                                   |
| `<footer>`     | 定义 section 或 document 的页脚。                              |
| `<header>`     | 定义了文档的头部区域。                                         |
| `<mark>`       | 定义带有记号的文本。                                           |
| `<meter>`      | 定义度量衡。仅用于已知最大和最小值的度量。                     |
| `<nav>`        | 定义导航链接的部分。                                           |
| `<progress>`   | 定义任何类型的任务的进度。                                     |
| `<ruby>`       | 定义 ruby 注释（中文注音或字符）。                             |
| `<rt>`         | 定义字符（中文注音或字符）的解释或发音。                       |
| `<rp>`         | 在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。 |
| `<section>`    | 定义文档中的节（section、区段）。                              |
| `<time>`       | 定义日期或时间。                                               |
| `<wbr>`        | 规定在文本中的何处适合添加换行符。                             |

### `<canvas>` 新元素

| 标签       | 描述                                                                 |
| ---------- | -------------------------------------------------------------------- |
| `<canvas>` | 标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API。 |

### 新多媒体元素

| 标签       | 描述                                                       |
| ---------- | ---------------------------------------------------------- |
| `<audio>`  | 定义音频内容                                               |
| `<video>`  | 定义视频（video 或者 movie）                               |
| `<source>` | 定义多媒体资源 `<video>` 和`<audio>`                          |
| `<embed>`  | 定义嵌入的内容，比如插件。                                 |
| `<track>`  | 为诸如 `<video>` 和 `<audio>` 元素之类的媒介规定外部文本轨道。 |

### 新表单元素

| 标签         | 描述                                                                 |
| ------------ | -------------------------------------------------------------------- |
| `<datalist>` | 定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。 |
| `<keygen>`   | 规定用于表单的密钥对生成器字段。                                     |
| `<output>`   | 定义不同类型的输出，比如脚本的输出。                                 |

### 已移除的元素

```js
// 以下的 HTML 4.01 元素在HTML5中已经被删除:
<acronym>、<applet>、<basefont>、<big>、<center>、<dir>、<font>、<frame>、<frameset>、<noframes>、<strike>、<tt>
```

## 浏览器渲染机制{#browser-render}

浏览器使用流式布局模型 (Flow Based Layout)

1. 解析 HTML 生成 DOM 树
2. 解析 CSS 生成 CSSOM 规则树
3. 将 DOM 树与 CSSOM 规则树合并在一起生成渲染树 Render Tree
4. Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
5. Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素
6. 将渲染树每个节点绘制到屏幕

![browser-render](/images/browser-render.png)

## 回流与重绘 (Reflow & Repaint){#reflow-repaint}

在页面初始[`渲染阶段`](#browser-render)，回流不可避免的触发，可以理解成页面一开始是空白的元素，后面添加了新的元素使页面布局发生改变

当我们对 DOM 的修改引发了 DOM 几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性，然后再将计算的结果绘制出来。

当我们对 DOM 的修改导致了样式的变化（color 或 background-color），却并未影响其几何属性时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式，这里就仅仅触发了重绘。

### 回流（Reflow）

当我们的节点发生改变（页面布局和几何信息）时，浏览器重新渲染部分节点或者全部文档，我们称这个过程为回流。
:::info 一些会导致回流的操作：

- 页面首次渲染
- 浏览器窗口大小发生改变
- 元素尺寸或位置发生改变
- 元素内容变化（文字数量或图片大小等等）
- 元素字体大小变化
- 添加或者删除可见的 DOM 元素
- 激活 CSS 伪类（例如：:hover）
- 查询某些属性或调用某些方法
  :::

还有一些容易被忽略的操作：**获取一些特定属性的值**

> offsetTop、 offsetLeft、 offsetWidth、offsetHeight、 scrollTop、scrollLeft、 scrollWidth、 scrollHeight、 clientTop、clientLeft、clientWidth、clientHeight

这些属性有一个共性，就是需要通过即时计算得到。因此浏览器为了获取这些值，也会进行回流。除此还包括 getComputedStyle 方法，原理是一样的。

### 重绘（Repaint）

当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

一些其他引起重绘行为：
颜色的修改、文本方向的修改、阴影的修改等。

### 影响

**回流比重绘的代价要更高。**

**回流必将引起重绘，重绘不一定会引起回流。**

现代浏览器会对频繁的回流或重绘操作进行优化：

浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。

当你访问以下属性或方法时，浏览器会立刻清空队列：

- clientWidth、clientHeight、clientTop、clientLeft
- offsetWidth、offsetHeight、offsetTop、offsetLeft
- scrollWidth、scrollHeight、scrollTop、scrollLeft
- width、height
- getComputedStyle()
- getBoundingClientRect()

**当你获取布局信息的操作的时候，浏览器不得不清空队列，触发回流重绘来返回正确的值。**

### 如何减少回流重绘？

- 如果想设定元素的样式，通过改变元素的 class 类名 (尽可能在 DOM 树的最里层)
- 避免设置多项内联样式
- 应用元素的动画，使用 position 属性的 fixed 值或 absolute 值(如前文示例所提)
- 避免使用 table 布局，table 中每个元素的大小以及内容的改动，都会导致整个 table 的重新计算
- 对于那些复杂的动画，对其设置 position: fixed/absolute，尽可能地使元素脱离文档流，从而减少对其他元素的影响
- 使用 css3 硬件加速，可以让 transform、opacity、filters 这些动画不会引起回流重绘
- 避免使用 CSS 的表达式（如：calc()）
- 避免 js 频繁操作样式，最好一次性重写 style 属性或定义 class 一次性更改。
- 避免频繁操作 DOM，创建一个[documentFragment](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment)（Dom 子树），在它上面应用所有 DOM 操作，最后再把它添加到文档中。

但有时候，我们会无可避免地进行回流或者重绘，我们可以更好使用它们。

例如：

你需要修改一个元素的布局。

```js
const el = document.getElementById("el");
for (let i = 0; i < 10; i++) {
  el.style.top = el.offsetTop + 10 + "px";
  el.style.left = el.offsetLeft + 10 + "px";
}
// 上述代码每次循环都要获取`offset`，可以优化为变量形式保存起来，计算完毕再提交给浏览器发出重新计算的请求

const el = document.getElementById("el");
let offLeft = el.offsetLeft,
  offTop = el.offsetTop;

for (let i = 0; i < 10; i++) {
  offLeft += 10;
  offTop += 10;
}

el.style.left = offLeft + "px";
el.style.top = offTop + "px";
```

避免 js 改变样式，使用 class 合并去修改样式

```js
const container = document.getElementById("container");
container.style.width = "100px";
container.style.height = "200px";
container.style.border = "10px solid red";
container.style.color = "red";
```

```html
<style>
  .container_style {
    width: 100px;
    height: 200px;
    border: 10px solid red;
    color: red;
  }
</style>
<script>
  const container = document.getElementById("container");
  container.classList.add("container_style");
</script>
```

前者每次单独操作，都去触发一次渲染树更改（新浏览器不会），都去触发一次渲染树更改，从而导致相应的回流与重绘过程。合并之后，等于我们将所有的更改一次性发出。

我们还可以设置`display:none`进行离线操作，从页面取出后操作也不会触发回流重绘。

```js
let container = document.getElementById('container')
container.style.display = 'none'  // 离线操作
container.style.width = '100px'
container.style.height = '200px'
container.style.border = '10px solid red'
container.style.color = 'red'
...（省略了许多类似的后续操作）
container.style.display = 'block'
```
