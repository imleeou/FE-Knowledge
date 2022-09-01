# Vue3 相关面试题

## ref 和 reactive 的区别{#ref-and-reactive-difference}

reactive 更适合定义复杂的数据类型（json/arr）、ref 适合定义基本数据类型（可接收基本数据类型和对象）

### ref:

1. 函数参数可以是基本数据类型，也可以接受对象类型
2. 如果参数是对象类型时，其实底层的本质还是 reactive,系统会自动根据我们给 ref 传入的值转换成：

```js
// ref函数只能操作浅层次的数据，把基本数据类型当作自己的属性值；深层次依赖于reactive
ref(1) -> reactive({ value: 1 })
```

3. 在 template 中访问，系统会自动添加.value;在 js 中需要手动.value
4. ref 响应式原理是依赖于 Object.defineProperty()的 get()和 set()的。

### reactive

1. 它的响应式是更加‘深层次’的，底层本质是将传入的数据包装成一个 Proxy。
2. 参数必须是对象或者数组，如果要让对象的某个元素实现响应式时比较麻烦。需要使用 toRefs

## options api 和 composition api 的区别{#options-api-and-composition-api}

通常使用 Vue2 开发的项目，普遍会存在以下问题：

- 代码的可读性随着组件变大而变差
- 每一种代码复用的方式，都存在缺点
- TypeScript 支持有限
  以上通过使用`Composition Api`都能迎刃而解

### options api(选项式 API)

`Options API`，即大家常说的选项 API，即以 vue 为后缀的文件，通过定义 methods，computed，watch，data 等属性与方法，共同处理页面逻辑。
如下图：

![optionsApi](/images/options-api.png)

- 属性和方法等放在固定的位置，关联性降低，组件功能强大时代码量大，可读性差，
- 需要使用 this，当逻辑过多时可能会出现指向不明等问题。
- 无法从自动检查和类型检查中收益。
- vue2 代码复用需要使用 mixin，代码量大会出现变量来源不明、命名冲突等问题。

### composition api(组合式 API)

在 `Composition API` 中，我们的组件代码根据逻辑功能来组织的，一个功能所定义的所有 API 会放在一起（更加的高内聚，低耦合）。这样做即使项目很大，功能很多，我们都能快速的定位到这个功能所用到的所有 API。

![compositionApi](/images/composition-api.png)

- 在逻辑组织和逻辑复用方面，Composition API 是优于 Options API
- 因为 Composition API 几乎是函数，会有更好的类型推断。
- Composition API 对 tree-shaking 友好，代码也更容易压缩
- Composition API 中见不到 this 的使用，减少了 this 指向不明的情况

### 对比

使用一张图进行对比，可以很直观地感受到 Composition API 在逻辑组织方面的优势，以后修改一个属性功能的时候，只需要跳到控制该属性的方法中即可。

![contrast](/images/api-contrast.png)

> 引用来源：https://vue3js.cn/interview/vue3/composition.html

## watch 和 watchEffect 的使用和区别{#watch-watch-effect}

### watch()

侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。

```ts
// 侦听单个来源
function watch<T>(
  source: WatchSource<T>,
  callback: WatchCallback<T>,
  options?: WatchOptions
): StopHandle;

// 侦听多个来源
function watch<T>(
  sources: WatchSource<T>[],
  callback: WatchCallback<T[]>,
  options?: WatchOptions
): StopHandle;

type WatchCallback<T> = (
  value: T,
  oldValue: T,
  onCleanup: (cleanupFn: () => void) => void
) => void;

type WatchSource<T> =
  | Ref<T> // ref
  | (() => T) // getter
  | T extends object
  ? T
  : never; // 响应式对象

interface WatchOptions extends WatchEffectOptions {
  immediate?: boolean; // 默认：false
  deep?: boolean; // 默认：false
  flush?: "pre" | "post" | "sync"; // 默认：'pre'
  onTrack?: (event: DebuggerEvent) => void;
  onTrigger?: (event: DebuggerEvent) => void;
}
```

`watch()` 默认是懒侦听的，即仅在侦听源发生变化时才执行回调函数。

第一个参数是侦听器的源。这个来源可以是以下几种：

- 一个函数，返回一个值
- 一个 ref
- 一个响应式对象
- ...或是由以上类型的值组成的数组

第二个参数是在发生变化时要调用的回调函数。这个回调函数接受三个参数：新值、旧值，以及一个用于注册副作用清理的回调函数。该回调函数会在副作用下一次重新执行前调用，可以用来清除无效的副作用，例如等待中的异步请求。

当侦听多个来源时，回调函数接受两个数组，分别对应来源数组中的新值和旧值。

第三个可选的参数是一个对象，支持以下这些选项：

- `immediate`：在侦听器创建时立即触发回调。第一次调用时旧值是 `undefined`。
- `deep`：如果源是对象，强制深度遍历，以便在深层级变更时触发回调。
- `flush`：调整回调函数的刷新时机。
- `onTrack / onTrigger`：调试侦听器的依赖。

**示例：**

1. 侦听一个 getter 函数：

```ts
const state = reactive({ count: 0 });
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
);
```

2. 侦听一个 ref：

```ts
const count = ref(0);
watch(count, (count, prevCount) => {
  /* ... */
});
```

3. 侦听多个来源。

```ts
// 回调函数接受两个数组，分别对应来源数组中的新值和旧值：
watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
  /* ... */
});
```

需要注意的，watch 不能直接监听响应式对象的属性。

错误示范：

```ts
const number = reactive({ count: 0 });
const countAdd = () => {
  number.count++;
};
watch(number.count, (newValue, oldValue) => {
  console.log("新的值:", newValue);
  console.log("旧的值:", oldValue);
});
```

上段代码中相当于你直接向 `watch` 传递了一个非响应式的数字，然而 `watch` 只能监听响应式数据。

如果我们非要监听响应式对象中的某个属性，我们可以使用 `getter` 函数的形式。

:::tip 注意

- 当使用 `getter` 函数作为源时，回调只在此函数的返回值变化时才会触发。如果你想让回调在深层级变更时也能触发，你需要使用 `{ deep: true }` 强制侦听器进入深层级模式。在深层级模式时，如果回调函数由于深层级的变更而被触发，那么新值和旧值将是同一个对象。
- 当直接侦听一个响应式对象时，侦听器会自动启用深层模式。
  :::

### watchEffect()

立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。

```ts
function watchEffect(
  effect: (onCleanup: OnCleanup) => void,
  options?: WatchEffectOptions
): StopHandle;

type OnCleanup = (cleanupFn: () => void) => void;

interface WatchEffectOptions {
  flush?: "pre" | "post" | "sync"; // 默认：'pre'
  onTrack?: (event: DebuggerEvent) => void;
  onTrigger?: (event: DebuggerEvent) => void;
}

type StopHandle = () => void;
```

第一个参数就是要运行的副作用函数。这个副作用函数的参数也是一个函数，用来注册清理回调。清理回调会在该副作用下一次执行前被调用，可以用来清理无效的副作用，例如等待中的异步请求 (参见下面的示例)。

第二个参数是一个可选的选项，可以用来调整副作用的刷新时机或调试副作用的依赖。

默认情况下，侦听器将在组件渲染之前执行。设置 `flush: 'post'` 将会使侦听器延迟到组件渲染之后再执行。在某些特殊情况下 (例如要使缓存失效)，可能有必要在响应式依赖发生改变时立即触发侦听器。这可以通过设置 `flush: 'sync'` 来实现。然而，该设置应谨慎使用，因为如果有多个属性同时更新，这将导致一些性能和数据一致性的问题。

返回值是一个用来停止该副作用的函数。

**示例：**

```ts
const count = ref(0);

watchEffect(() => console.log(count.value));
// -> 输出 0

count.value++;
// -> 输出 1
```

副作用清除：

```ts
watchEffect(async (onCleanup) => {
  const { response, cancel } = doAsyncWork(id.value);
  // `cancel` 会在 `id` 更改时调用
  // 以便取消之前
  // 未完成的请求
  onCleanup(cancel);
  data.value = await response;
});
```

停止侦听器：

```ts
const stop = watchEffect(() => {});

// 当不再需要此侦听器时:
stop();
```

### watch 和 watchEffect 区别

- `watch` 和 `watchEffect` 都能监听响应式数据的变化，不同的是它们监听数据变化的方式不同。
- `watch` 会明确监听某一个响应数据，而 `watchEffect` 则是隐式的监听回调函数中响应数据。
- `watch` 在响应数据初始化时是不会执行回调函数的，`watchEffect` 在响应数据初始化时就会立即执行回调函数。
