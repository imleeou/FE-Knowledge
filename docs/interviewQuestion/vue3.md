# Vue3相关面试题

## ref 和 reactive 的区别

reactive更适合定义复杂的数据类型（json/arr）、ref适合定义基本数据类型（可接收基本数据类型和对象）

### ref:

1.函数参数可以是基本数据类型，也可以接受对象类型
2.如果参数是对象类型时，其实底层的本质还是reactive,系统会自动根据我们给ref传入的值转换成：
```js
// ref函数只能操作浅层次的数据，把基本数据类型当作自己的属性值；深层次依赖于reactive
ref(1) -> reactive({ value: 1 })
```
3.在template中访问，系统会自动添加.value;在js中需要手动.value
4.ref响应式原理是依赖于Object.defineProperty()的get()和set()的。

### reactive

1.它的响应式是更加‘深层次’的，底层本质是将传入的数据包装成一个Proxy。
2.参数必须是对象或者数组，如果要让对象的某个元素实现响应式时比较麻烦。需要使用toRefs