# Vue2 相关面试题

## v-if 和 v-show 的区别{#v-if-and-v-show-difference}

- v-show 只是简单的控制元素的 display 属性，而 v-if 才是条件渲染（条件为真，元素将会被渲染，条件为假，元素会被销毁）
- v-show 有更高的首次渲染开销，而 v-if 的首次渲染开销要小的多
- v-if 有更高的切换开销，v-show 切换开销小
- v-if 有配套的 v-else-if 和 v-else，而 v-show 没有
- v-if 可以搭配 template 使用，而 v-show 不行

## $router 和 $route 的区别{#router-and-route-difference}

- **$router**是 VueRouter 的一个对象，通过 Vue.use(VueRouter)和 VueRouter 构造函数得到一个 router 的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。相当于一个全局的路由器对象，里面含有很多属性和子对象。

![An image](/images/$router.png)

- **$route**是一个跳转的路由对象，每一个路由都会有一个 **\$route** 对象，是一个局部的对象，可以获取对应的 name,path,params,query 等。**$route**相当于当前正在跳转的路由对象。

![An image](/images/$route.png)

## 什么是 SPA？{#what-is-spa}

**_单页 Web 应用（single page web application，SPA）_**，就是只有一张 Web 页面的应用。单页应用程序 (SPA) 是加载单个 HTML 页面并在用户与应用程序交互时动态更新该页面的 Web 应用程序。浏览器一开始会加载必需的 HTML 、 CSS 和 JavaScript ，所有的操作都在这张页面上完成，都由 JavaScript 来控制。

它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验在单页应用中，所有必要的代码（HTML、JavaScript 和 CSS）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面页面在任何时间点都不会重新加载，也不会将控制转移到其他页面

我们熟知的 JS 框架如`react`、`vue`、`angular`都属于 SPA

### 优点

1. `有良好的交互体验`
   能提升页面切换体验，内容的改变不需要重新加载整个页面，用户在访问应用页面是不会频繁的去切换浏览页面，从而避免了页面的重新加载；
2. `前后端分离开发`
   单页 Web 应用可以和 RESTful 规约一起使用，通过 REST API 提供接口数据，并使用 Ajax 异步获取，这样有助于分离客户端和服务器端工作。更进一步，可以在客户端也可以分解为静态页面和页面交互两个部分；
3. `减轻服务器压力`
   服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍；
4. `共用一套后端程序代码`
   不用修改后端程序代码就可以同时用于 Web 界面、手机、平板等多种客户端；

### 缺点

1. `SEO难度较高`
   由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势，不利于搜索引擎的抓取。
1. `初次加载耗时多`
   为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面可以在需要的时候加载。所以必须对 JavaScript 及 CSS 代码进行合并压缩处理；

## 如何实现路由懒加载？{#router-lazy-loading}

### 为什么需要路由懒加载？

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。

### 实现方式

Vue Router 支持开箱即用的动态导入，这意味着你可以用动态导入代替静态导入：

```js
// 将
// import UserDetails from './views/UserDetails'
// 替换成
const UserDetails = () => import("./views/UserDetails");

const router = createRouter({
  // ...
  routes: [{ path: "/users/:id", component: UserDetails }],
});
```

component (和 components) 配置接收一个返回 Promise 组件的函数，Vue Router 只会在第一次进入页面时才会获取这个函数，然后使用缓存数据。这意味着你也可以使用更复杂的函数，只要它们返回一个 Promise ：

```js
const UserDetails = () =>
  Promise.resolve({
    /* 组件定义 */
  });
```

::: tip 注意
不要在路由中使用异步组件。异步组件仍然可以在路由组件中使用，但路由组件本身就是动态导入的。
:::

## hash 和 history 路由模式的区别{#hash-and-history-route}

### - hash 模式

`hash` 模式是一种把前端路由的路径用井号 # 拼接在真实 url 后面的模式。当井号 # 后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发 [onhashchange](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/hashchange_event) 事件。

也就是说 hash 值是用来指导浏览器动作的，对服务器没有影响，HTTP 请求中也不会包括 hash 值，同时每一次改变 hash 值，都会在浏览器的访问历史中增加一个记录，使用“后退”按钮，就可以回到上一个位置。所以，hash 模式是根据 hash 值来发生改变，根据不同的值，渲染指定 DOM 位置的不同数据。

**hash 的特点：**

- hash 变化会触发网页跳转，即浏览器的前进和后退。
- hash 可以改变 url ，但是不会触发页面重新加载（hash 的改变是记录在 window.history 中），即不会刷新页面。也就是说，所有页面的跳转都是在客户端进行操作。因此，这并不算是一次 http 请求，所以这种模式不利于 SEO 优化。hash 只能修改 # 后面的部分，所以只能跳转到与当前 url 同文档的 url 。
- hash 通过 window.onhashchange 的方式，来监听 hash 的改变，借此实现无刷新跳转的功能。
- hash 永远不会提交到 server 端（可以理解为只在前端自生自灭）。

**优缺点：**

- ✅ 只需要前端配置路由表, 不需要后端的参与
- ✅ 兼容性好, 浏览器都能支持
- ✅ hash 值改变不会向后端发送请求, 完全属于前端路由
- ❌ hash 值前面需要加#, 不符合 url 规范,也不美观

### - history 模式

`history` API 是 H5 提供的新特性（[pushState](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState)、[replaceState](https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState)），允许开发者直接更改前端路由，即更新浏览器 URL 地址而不重新发起请求(将 url 替换并且不刷新页面)。
这两个 API 可以在不进行刷新的情况下，操作浏览器的历史记录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录

```js
window.history.pushState(null, null, path);
window.history.replaceState(null, null, path);
// 我们可以使用popstate事件来监听URL的变化，从而对页面进行跳转（渲染）
// history.pushState()和history.replaceState()不会触发popstate事件，这时我们需要手动触发页面跳转（渲染）
```

**history 的特点：**

- 新的 url 可以是与当前 url 同源的任意 url ，也可以是与当前 url 一样的地址，但是这样会导致的一个问题是，会把重复的这一次操作记录到栈当中。
- 通过 history.state ，添加任意类型的数据到记录中。
- 可以额外设置 title 属性，以便后续使用。
- 通过 pushState 、 replaceState 来实现无刷新跳转的功能。

**优缺点：**

- ✅ 符合 url 地址规范, 不需要#, 使用起来比较美观
- ✅ history 修改的 url 可以是同域的任意 url，hash 只能是同文档的 url
- ❌ 兼容性不如 hash，且需要服务端支持重定向，否则一刷新页面就 404 了
- ❌ 利用了 HTML5 History 对象中新增的 pushState() 和 replaceState() 方法,需要特定浏览器的支持

## v-if 和 v-for 一起使用？{#v-if-v-for}

在使用之前，首先我们要知道这两个 **指令** 的作用。

`v-for` 基于原始数据多次渲染元素或模板块。

期望的绑定值类型：`Array | Object | number | string | Iterable`。

```html
<div v-for="item in items" :key="item.id">{{ item.text }}</div>
```

`v-if` 基于表达式值的真假性，来条件性地渲染元素或者模板片段。

当 v-if 元素被触发，元素及其所包含的指令/组件都会销毁和重构。如果初始条件是假，那么其内部的内容根本都不会被渲染。

```html
<p v-if="true">元素</p>
```

### 优先级对比

- 在 2.x 版本中同时使用时， `v-for`的优先级高于`v-if`。
- 在 3.x 版本中同时使用时， `v-if`的优先级高于`v-for`。

:::warning 警告
同时使用 `v-if` 和 `v-for` 是不推荐的，因为这样二者的优先级不明显。更多细节可查阅 Vue 官方风格指南：[Vue2.x 风格指南](https://v2.cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%BF%85%E8%A6%81)、[Vue3.x 风格指南](https://cn.vuejs.org/style-guide/)。
:::

### vue 2.x 中

当它们处于同一节点，`v-for` 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 `v-for` 循环中。

每次渲染都会先循环再进行条件判断，可能会带来性能方面的浪费。

当你只想为部分项渲染节点时，这种优先级的机制会十分有用，如下：

```html
<li v-for="todo in todos" v-if="!todo.isComplete">{{ todo }}</li>
```

上面的代码将只渲染未完成的 todo。

为了避免渲染本应该被隐藏的列表或你的目的是有条件地跳过循环的执行，那么可以将 `v-if` 置于外层元素 (或 `<template>`) 上。如：

```html
<ul v-if="todos.length">
  <li v-for="todo in todos">{{ todo }}</li>
</ul>
<p v-else>No todos left!</p>
```

### vue 3.x 中

当它们同时存在于一个节点上时，`v-if` 比 `v-for` 的优先级更高。这意味着 `v-if` 的条件将无法访问到 `v-for` 作用域内定义的变量别名：

```html
// 这会抛出一个错误，因为属性 todo 此时没有在该实例上定义
<li v-for="todo in todos" v-if="!todo.isComplete">{{ todo.name }}</li>
```

在外新包装一层 `<template>` 再在其上使用 `v-for` 可以解决这个问题 (这也更加明显易读)：

```vue
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```

## v-for `key`的作用{#v-for-key}

Vue 默认按照 **“就地更新”** 的策略来更新通过 `v-for` 渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。

默认模式是高效的，但 **只适用于列表渲染输出的结果不依赖子组件状态或者临时 DOM 状态 (例如表单输入值) 的情况**。

为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的 key attribute：

```html
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

:::tip 提示

- 推荐在任何可行的时候为 v-for 提供一个 key attribute，除非所迭代的 DOM 内容非常简单 (例如：不包含组件或有状态的 DOM 元素)，或者你想有意采用默认行为来提高性能。
- 不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。
  :::

`key` 这个特殊的 attribute 主要作为 Vue 的虚拟 DOM 算法提示，在比较新旧节点列表时用于识别 vnode。

在没有 key 的情况下，Vue 将使用一种最小化元素移动的算法，并尽可能地就地更新/复用相同类型的元素。如果传了 key，则将根据 key 的变化顺序来重新排列元素，并且将始终移除/销毁 key 已经不存在的元素。

同一个父元素下的子元素必须具有 **唯一的 key** 。重复的 key 将会导致渲染异常。

### 用 `index` 作为 `key` 的值会怎么样？

我们写了一个简单的例子来对比一下。

```vue
<template>
  <ul>
    <li v-for="(item, index) in source" :key="index">
      <input type="checkbox" :value="index" />
      <span>内容：{{ item.text }}，id：{{ item.id }}</span>
      <button @click="deleteItem(index)">删除</button>
    </li>
  </ul>
  <button @click="addItem()">添加</button>
</template>
<script>
import { ref } from "vue";
interface sourceType {
  [x: string]: string | number;
}
const source = ref<sourceType[]>([
  {
    id: 1,
    text: "11",
  },
  {
    id: 2,
    text: "22",
  },
  {
    id: 3,
    text: "33",
  },
  {
    id: 4,
    text: "44",
  },
]);
const deleteItem = (index: number) => {
  source.value.splice(index, 1);
};
const addItem = () => {
  source.value.unshift({
    id: source.value.length + 1,
    text: (source.value.length + 1).toString().repeat(2),
  });
};
</script>
```

![demo](/images/vue2/key-index-demo.png)

我们使用`index`作为 key，尝试添加一条数据，在 dom 的最上面一条添加`li`元素，我们希望原来的 dom 不发生变化。

![demo](/images/vue2/key-index-demo-1.png)

我们展开下标为 **1** 的这个`li`，内容：22。我们点击新增，在列表最上方添加一项。

![demo](/images/vue2/key-index-demo-2.png)

我们发现除了第一项 `li` 是新增的外，其他 `li` 都发生了更新。

由于我们使用 index 作为`li`的 key，那么在 differ 比较的时候，index 随着插入数据发生了变化，原来第二个`li`的 index 从 1 变成了 2 ，会被认为 dom 发生了变化，所以执行了更新过程。造成了不必要的性能开销，我们知道 dom 更新是特别消耗浏览器性能的，特别是如果 for 里面 dom 比较复杂，多层嵌套的情况下，对性能的开销还是不容小觑的。

使用 index 作为 key 导致了上面的问题，那么我们使用固定的 id 去验证一下是否可以避免上述问题。

```html
<ul>
  <li v-for="(item, index) in source" :key="item.id">
    <input type="checkbox" :value="index" />
    <span>内容：{{ item.text }}，id：{{ item.id }}</span>
    <button @click="deleteItem(index)">删除</button>
  </li>
</ul>
```

**我们一样选中第二项，点击添加。**

![demo](/images/vue2/key-index-demo-3.png)

我们会发现选中的第二项变成了第三项，只是插入了一个`li`在最上方，当前`li`和后面的`li`内容都没有发生变化。

**在使用`index`作为 key 时，我们去使用`checkbox`会是什么情况呢？**

![demo](/images/vue2/key-index-demo-4.png)

我们勾选第二项的`checkbox`，点击删除。

![demo](/images/vue2/key-index-demo-5.png)

我们发现第二项还是会被勾选。

原因是虚拟 dom 在比较元素的时候，因为 dom 上的 key 等属性均未发生变化，所以其自身和内部的 checkbox 均被复用了，导致了错误的显示。

![demo](/images/vue2/key-index-demo-6.png)

使用`id`可以避免这种情况发生，正常删除且不会被继续选中。

:::tip 备注

- 版本：Vue：3.2.37
- 如果可以保证数据列表不会出现增删 DOM 更改，可看情况使用 index。
  :::

## 为什么 data 要是一个函数？{#data-function}

`Vue` 的 `data` 数据其实是 `Vue` 原型上的属性，数据存在于内存当中。 `Vue`为了保证每个实例上的`data`数据的独立性，规定了必须使用函数，而不是对象。

`Vue` 实例的数据对象。`Vue` 会递归地把 `data` 的 property 转换为 getter/setter，从而让 `data` 的 property 能够响应数据变化。对象必须是纯粹的对象 (含有零个或多个的 key/value 对)：浏览器 API 创建的原生对象，原型上的 property 会被忽略。大概来说，`data` 应该只能是数据 - 不推荐观察拥有状态行为的对象。

当一个组件被定义，`data` 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 `data` 仍然是一个纯粹的对象，则所有的实例将**共享**引用同一个数据对象！通过提供 `data` 函数，每次创建一个新实例后，我们能够调用 `data` 函数，从而返回初始数据的一个全新副本数据对象。

:::warning 注意
如果你为 `data` 使用了箭头函数，则 this 不会指向这个组件的实例
:::

## style scoped 的作用和原理及深度选择{#style-scoped}

### 写法

```vue
<style scoped></style>
```

### 作用

实现组件样式私有化，全局和组件之间不会造成样式污染，表示当前 style 属性只属于当前模块。

### 原理

我们先看例子 🌰：

```vue
// Header.vue （Home组件也基本相同）
<template>
  <div>Header</div>
</template>

<style scoped>
div {
  background-color: aqua;
}
</style>
```

![style-scoped](/images/vue2/style-scoped.png)

通过观察 DOM 结构可以发现：vue 通过在 DOM 结构以及 css 样式上加上唯一的 attribute 标记`data-v-xxxx`为组件内 CSS 指定作用域，达到样式私有化，不污染全局的作用。

点击 dom 也能看到对应的 style：

```css
div[data-v-08e32229] {
  background-color: pink;
}
```

### 深度选择

在 Vue2 可以使用 `/deep/(不推荐)`、`>>>(不使用预处理器的情况)`、`::v-deep`

```css
/deep/.child {
  background-color: pink;
}

.container >>> .child {
  background-color: pink;
}

::v-deep .child {
  background-color: pink;
}
```

在 Vue3 中，我们不再支持 `>>>` 和 `/deep/` ，推荐大家使用 `::v-deep`，而且为了更加符合 CSS 的书写习惯，希望大家使用 `​::v-deep(.class)`​ 的书写规则。

```css
::v-deep(.child) {
  background-color: pink;
}
```

## dependencies 和 devDependencies 有什么不同？{#dependencies-devDependencies}

- `dependencies`该配置项用来放置一些项目中实际运行需要用到的代码，如果没有该模块，项目会运行出错。
- `devDependencies`放置本地开发过程中需要使用到的编译、打包、测试、格式化模块等。

示例：

```js
npm install *** --save
npm install ***  --save-dev
```

:::info 简写
`--save` 可以简写为 -S，`--save-dev` 可以简写为 -D
:::

### 安装在 devDependencies 中的依赖，在项目执行 `build` 的时候会不会被打包进 dist 产物中？

我们从正常的项目打包流程分析（不管是 webpack 还是 vite，打包的核心步骤都类似），这里从最简化的进行分析，只为了针对上述问题。

1. 初始化配置
2. 项目入口
3. 依赖解析
4. loader 处理
5. ... ...

看到这样的打包流程（集中关注 **第 2、3 点**），大家应该也意识到一点：项目打包跟 `devDependencies` 这个字段并没什么关系。这样一来，上述问题的答案也就很清晰了。只要是项目中用到的依赖（且安装到 node_modules 中），不管这个依赖是放在 `devDependencies` 还是放在 `dependencies` ，都会被打包工具解析、构建，最后都打进 dist 产物中。

总结：生产打包 与 `devDependencies` 字段无关。`devDependencies` 中的 dev 并不是指我们 dev server 时候的 dev ，不能简单的把 dev 理解成当前项目的 “开发环境” 。

`devDependencies` 和 `dependencies` 的区别核心体现在 npm 包 中。只要开发的项目是发 npm 包提供给外部、其他业务项目使用的，需要非常注意依赖的安装地方，因为搞不好很容易在业务使用中会出现 bug。而如果只是自己项目用，不需要发 npm 包的话，把依赖安装到 `devDependencies` 或者 `dependencies` 中，实质上是没有任何区别的。

npm 依赖对比实验见下方原文地址。

> 引用地址
>
> [你真的理解 devDependencies 和 dependencies 的区别吗？](https://juejin.cn/post/7135795969370619918)
