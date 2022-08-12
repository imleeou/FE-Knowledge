# Vue3相关面试题

## ref 和 reactive 的区别{#ref-and-reactive-difference}

reactive更适合定义复杂的数据类型（json/arr）、ref适合定义基本数据类型（可接收基本数据类型和对象）

### ref:

1. 函数参数可以是基本数据类型，也可以接受对象类型
2. 如果参数是对象类型时，其实底层的本质还是reactive,系统会自动根据我们给ref传入的值转换成：
```js
// ref函数只能操作浅层次的数据，把基本数据类型当作自己的属性值；深层次依赖于reactive
ref(1) -> reactive({ value: 1 })
```
3. 在template中访问，系统会自动添加.value;在js中需要手动.value
4. ref响应式原理是依赖于Object.defineProperty()的get()和set()的。

### reactive

1. 它的响应式是更加‘深层次’的，底层本质是将传入的数据包装成一个Proxy。
2. 参数必须是对象或者数组，如果要让对象的某个元素实现响应式时比较麻烦。需要使用toRefs

## options api 和 composition api 的区别{#options-api-and-composition-api}

通常使用Vue2开发的项目，普遍会存在以下问题：

- 代码的可读性随着组件变大而变差
- 每一种代码复用的方式，都存在缺点
- TypeScript支持有限
以上通过使用`Composition Api`都能迎刃而解

### options api(选项式API)
`Options API`，即大家常说的选项API，即以vue为后缀的文件，通过定义methods，computed，watch，data等属性与方法，共同处理页面逻辑。
如下图：

![optionsApi](/images/options-api.png)

- 属性和方法等放在固定的位置，关联性降低，组件功能强大时代码量大，可读性差，
- 需要使用this，当逻辑过多时可能会出现指向不明等问题。
- 无法从自动检查和类型检查中收益。
- vue2代码复用需要使用mixin，代码量大会出现变量来源不明、命名冲突等问题。

### composition api(组合式API)

在 `Composition API` 中，我们的组件代码根据逻辑功能来组织的，一个功能所定义的所有 API 会放在一起（更加的高内聚，低耦合）。这样做即使项目很大，功能很多，我们都能快速的定位到这个功能所用到的所有API。

![compositionApi](/images/composition-api.png)

- 在逻辑组织和逻辑复用方面，Composition API是优于Options API
- 因为Composition API几乎是函数，会有更好的类型推断。
- Composition API对 tree-shaking 友好，代码也更容易压缩
- Composition API中见不到this的使用，减少了this指向不明的情况

### 对比

使用一张图进行对比，可以很直观地感受到 Composition API在逻辑组织方面的优势，以后修改一个属性功能的时候，只需要跳到控制该属性的方法中即可。

![contrast](/images/api-contrast.png)


> 引用来源：https://vue3js.cn/interview/vue3/composition.html