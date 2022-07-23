# Vue2相关面试题

## v-if 和 v-show 的区别

- v-show 只是简单的控制元素的 display 属性，而 v-if 才是条件渲染（条件为真，元素将会被渲染，条件为假，元素会被销毁）
- v-show 有更高的首次渲染开销，而 v-if 的首次渲染开销要小的多
- v-if 有更高的切换开销，v-show 切换开销小
- v-if 有配套的 v-else-if 和 v-else，而 v-show 没有
- v-if 可以搭配 template 使用，而 v-show 不行


## $router 和 $route 的区别

- **$router**是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。相当于一个全局的路由器对象，里面含有很多属性和子对象。

![An image](/images/$router.png)
  
- **$route**是一个跳转的路由对象，每一个路由都会有一个 **\$route** 对象，是一个局部的对象，可以获取对应的name,path,params,query等。**$route**相当于当前正在跳转的路由对象。

![An image](/images/$route.png)

## 什么是SPA？

**SPA**，即单页面应用(Single Page Application)。所谓单页 Web 应用，就是只有一张 Web 页面的应用。单页应用程序 (SPA) 是加载单个 HTML 页面并在用户与应用程序交互时动态更新该页面的 Web 应用程序。浏览器一开始会加载必需的 HTML 、 CSS 和 JavaScript ，所有的操作都在这张页面上完成，都由 JavaScript 来控制。

## 如何实现路由懒加载？

### 为什么需要路由懒加载？

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。

### 实现方式

Vue Router 支持开箱即用的动态导入，这意味着你可以用动态导入代替静态导入：

```js
// 将
// import UserDetails from './views/UserDetails'
// 替换成
const UserDetails = () => import('./views/UserDetails')

const router = createRouter({
  // ...
  routes: [{ path: '/users/:id', component: UserDetails }],
})
```
component (和 components) 配置接收一个返回 Promise 组件的函数，Vue Router 只会在第一次进入页面时才会获取这个函数，然后使用缓存数据。这意味着你也可以使用更复杂的函数，只要它们返回一个 Promise ：
```js
const UserDetails = () =>
  Promise.resolve({
    /* 组件定义 */
  })
```
::: tip 注意
不要在路由中使用异步组件。异步组件仍然可以在路由组件中使用，但路由组件本身就是动态导入的。
:::

## hash和history路由模式的区别

### - hash模式

`hash` 模式是一种把前端路由的路径用井号 # 拼接在真实 url 后面的模式。当井号 # 后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发 [onhashchange](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/hashchange_event) 事件。

也就是说hash值是用来指导浏览器动作的，对服务器没有影响，HTTP 请求中也不会包括hash值，同时每一次改变hash值，都会在浏览器的访问历史中增加一个记录，使用“后退”按钮，就可以回到上一个位置。所以，hash 模式是根据hash值来发生改变，根据不同的值，渲染指定DOM位置的不同数据。

**hash的特点：**

- hash变化会触发网页跳转，即浏览器的前进和后退。
- hash 可以改变 url ，但是不会触发页面重新加载（hash的改变是记录在 window.history 中），即不会刷新页面。也就是说，所有页面的跳转都是在客户端进行操作。因此，这并不算是一次 http 请求，所以这种模式不利于 SEO 优化。hash 只能修改 # 后面的部分，所以只能跳转到与当前 url 同文档的 url 。
- hash 通过 window.onhashchange 的方式，来监听 hash 的改变，借此实现无刷新跳转的功能。
- hash 永远不会提交到 server 端（可以理解为只在前端自生自灭）。

**优缺点：**

- ✅ 只需要前端配置路由表, 不需要后端的参与
- ✅ 兼容性好, 浏览器都能支持
- ✅ hash值改变不会向后端发送请求, 完全属于前端路由
- ❌ hash值前面需要加#, 不符合url规范,也不美观

### - history模式

`history` API 是 H5 提供的新特性（[pushState](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState)、[replaceState](https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState)），允许开发者直接更改前端路由，即更新浏览器 URL 地址而不重新发起请求(将url替换并且不刷新页面)。
这两个API可以在不进行刷新的情况下，操作浏览器的历史记录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录

```js
window.history.pushState(null,null,path)
window.history.replaceState(null,null,path)
// 我们可以使用popstate事件来监听URL的变化，从而对页面进行跳转（渲染）
// history.pushState()和history.replaceState()不会触发popstate事件，这时我们需要手动触发页面跳转（渲染）
```

**history的特点：**

- 新的 url 可以是与当前 url 同源的任意 url ，也可以是与当前 url 一样的地址，但是这样会导致的一个问题是，会把重复的这一次操作记录到栈当中。
- 通过 history.state ，添加任意类型的数据到记录中。
- 可以额外设置 title 属性，以便后续使用。
- 通过 pushState 、 replaceState 来实现无刷新跳转的功能。

**优缺点：**

- ✅ 符合url地址规范, 不需要#, 使用起来比较美观
- ✅ history修改的url可以是同域的任意url，hash只能是同文档的url
- ❌ 兼容性不如 hash，且需要服务端支持重定向，否则一刷新页面就404了
- ❌ 利用了 HTML5 History对象中新增的 pushState() 和 replaceState() 方法,需要特定浏览器的支持