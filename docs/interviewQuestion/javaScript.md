# JavaScript 相关面试题

## JS 基本数据类型与引用数据类型有哪些？

- 基本数据类型：String、Number、Boolean、Null、undefined、Symbol
- 引用数据类型：Array、Function、RegExp、Date 等

## 基本数据类型与引用数据类型的区别有哪些？

基本数据类型存储在栈（Stack）内存中，引用数据类型存储在堆（Heap）内存中。

基本数据类型存放在栈中，是一段简单的数据段，数据大小确定，内存空间大小可以分配，是直接按值存放的，可以按值访问。

引用数据类型存放在堆中，变量在栈中保存的是指向堆内存的地址值，这个地址值指向对应的对象类型，访问堆内存中的对象是通过地址值访问的。

## 常用数组去重的方法

```js
const arr = [1, 12, 24, 41, 43, 101, 12, 41];

// 去重结果 [1, 12, 24, 41, 43, 101]
```

1. 利用 ES6 的 Set 对象

```js
console.log([...new Set(arr)]);
```

2. 双层循环对比配合 splice

```js
const removeDuplicate = (array) => {
  array.forEach((x, y) => {
    array.forEach((a, b) => {
      if (x === a && y !== b) {
        array.splice(b, 1);
      }
    });
  });
  return array;
};
```

3. filter 方法配合 indexOf()

```js
const removeDuplicate = (array) => {
  return array.filter((number, index) => {
    return array.indexOf(number) === index;
  });
};
```

4. 遍历数组配合 includes 方法

```js
const removeDuplicate = (array) => {
  let newArr = [];
  array.forEach((number) => {
    if (!newArr.includes(number)) {
      newArr.push(number);
    }
  });
  return newArr;
};
```

5. 遍历数组配合 indexOf（与第 3 种类似）

```js
const removeDuplicate = (array) => {
  let newArr = [];
  array.forEach((number) => {
    if (newArr.indexOf(number) === -1) {
      newArr.push(number);
    }
  });
  return newArr;
};
```

6. 利用对象 key 的唯一性

```js
const removeDuplicate = (array) => {
  let newArr = [];
  let obj = {};
  array.forEach((number) => {
    obj[number] = number;
  });
  for (let key in obj) {
    newArr.push(obj[key]);
  }
  return newArr;
};
```

## 常用数组排序方法

```js
const arr = [10010, 1, 12, 24, 41, 43, 101, 10086, 12];

// 排序结果 [1, 12, 24, 41, 43, 101]
```

1. sort 方法

```js
const sortArray = (array) => {
  return array.sort((a, b) => {
    return a - b; // 升序
    // return b - a;  降序
  });
};
```

2. 双重循环更改数组顺序

```js
const sortArray = (array) => {
  array.forEach((n, i) => {
    array.forEach((m, idx) => {
      if (n < m) {
        // 升序
        // if (n > m) {   // 降序
        const arrI = array[i];
        array[i] = m;
        array[idx] = arrI;
      }
    });
  });
  return array;
};
```

3. 插入排序

```js
const sortArray = (array) => {
  if (array.length) {
    let newArr = [];
    array.forEach((n, i) => {
      newArr.push(n);
      newArr.forEach((m, idx) => {
        if (n < m) {
          // 升序
          //  if (n > m) {      // 降序
          const arrI = newArr[i];
          newArr[i] = m;
          newArr[idx] = arrI;
        }
      });
    });
    return newArr;
  } else {
    return [];
  }
};
```

## JS 存储对象（localStorage 和 sessionStorage）

Web 存储 API 提供了 `sessionStorage` （会话存储） 和 `localStorage`（本地存储）两个存储对象来对网页的数据进行添加、删除、修改、查询操作。

> - **localStorage** 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
> - **sessionStorage** 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。

存储对象属性：
| 属性 | 描述 |
| ------ | ------------------------------ |
| length | 返回存储对象中包含多少条数据。 |

存储对象方法：
| 方法 | 描述 |
| ----------------------- | -------------------------------------------------- |
| key(n) | 返回存储对象中第 n 个键的名称。 |
| getItem(keyname) | 返回指定键的值。 |
| setItem(keyname, value) | 添加键和值，如果对应的值存在，则更新该键对应的值。 |
| removeItem(keyname) | 移除键 |
| clear() | 清除存储对象中所有的键 |

## Cookie

`Cookie` 是客户端与服务器端进行会话使用的一个能够在浏览器本地化存储的技术。简言之，cookie 是服务器端发给客户端的文本文件,但只能储存 4kb 的数据;目的是用于辨别用户身份，记录跟踪购物车的商品信息（如数量）、记录用户访问次数等。

> cookie 的内容主要包括：名字 name，值 value，过期时间 expires，路径 path 和域 domain。路径和域一起构成 cookie 的作用范围。一般 cookie 储存在内存里，若设置了过期时间则储存在硬盘里，浏览器页面关闭也不会失效，直到设置的过期时间后才失效。若不设置 cookie 的过期时间，则有效期为浏览器窗口的会话期间，关闭浏览器窗口就失效。

::: info 原理
客户端请求服务器时，如果服务器需要记录该用户状态，就使用 response 向客户端浏览器颁发一个 Cookie。而客户端浏览器会把 Cookie 保存起来。当浏览器再请求服务器时，浏览器把请求的网址连同该 Cookie 一同提交给服务器。服务器通过检查该 Cookie 来获取用户状态。
:::

## 箭头函数和普通函数有什么区别？

1. 箭头函数比普通函数更加简洁，如果没有参数，就直接写一个空括号即可，如果只有一个参数，可以省去参数括号，如果有多个参数，用逗号分，如果函数体的返回值只有一句，可以省略大括号，如果函数体不需要返回值，且只有一句话，可以给这个语句前面加一个 void 关键字。最常用的就是调用一个函数：let fn = () => void doesNotReturn()

1. 箭头函数没有自己的 this。
   箭头函数不会创建自己的 this,所以它没有自己的 this,它只会在自己作用域的上一层继承 this。所以箭头函数中的 this 的指向在它在定义时一家确定了，之后不会改变。

1. 箭头函数继承来的 this 指向永远不会改变

1. call()、apply()、bind()等方法不能改变箭头函数中的 this 指向

1. 箭头函数不能作为构造函数使用

1. 箭头函数没有自己的 arguments

1. 箭头函数没有 prototype

1. 箭头函数不能用作 Generator 函数,不能使用 yeild 关键字

TODO:

## JS事件循环(event loop)

JavaScript 语言的一大特点就是***单线程***。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。
### 任务队列

> 在JavaScript中，所有的任务都可以分为
>
> - 同步任务：立即执行的任务，同步任务一般会直接进入到主线程中执行
>
> - 异步任务：异步执行的任务，比如ajax网络请求，setTimeout定时函数等


1. 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。

2. 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

3. 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

4. 主线程不断重复上面的第三步。

主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。

![eventLoop](/images/event-loop.png)

从上面我们可以看到，同步任务进入主线程，即主执行栈，异步任务进入任务队列，主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行。上述过程的不断重复就事件循环。

> 引用地址
>
> https://www.ruanyifeng.com/blog/2014/10/event-loop.html
>
> https://vue3js.cn/interview/JavaScript/event_loop.html

## 哪些是宏任务，哪些是微任务？

### 宏任务（macro-task）:

- script(整体代码)

- setTimeout

- setInterval

- setImmediate

- I/O (比如 Ajax 操作从网络读取数据)

- UI render

### 微任务（micro-task）:

- process.nextTick

- Promise.then()、Promise.catch()、Promise.finally()

- Async/Await(实际就是 promise)

- MutationObserver(html5 新特性)

## 节流和防抖

### 节流（throttle）

`节流`函数的作用是规定一个单位时间，在这个单位时间内最多只能触发一次函数执行，如果这个单位时间内多次触发函数，只能有一次生效。

```js
const throttle = (func, wait = 1000) => {
  let timer = null;
  return function (...args) {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      clearTimeout(timer);
      timer = null;
    }, wait);
  };
};
```

### 防抖（debounce）

`防抖`函数的作用就是控制函数在一定时间内的执行次数。防抖意味着 N 秒内函数只会被执行一次（最后一次），如果 N 秒内再次被触发，则重新计算延迟时间。

```js
const debounce = (func, wait = 1000) => {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};
```

## for...of 和 for...in 的区别

两者都可以用于遍历，不过 for in 遍历的是数组的索引（index），而 for of 遍历的是数组元素值（value）。

### for...in

`for in`可以遍历数组或对象。

```js
Array.prototype.methods = function () {
  console.log(this.length);
};
const arr = [1, 3, 5, "a"];
for (const index in arr) {
  console.log("index->", index, typeof index);
}
// index-> 0 string
// index-> 1 string
// index-> 2 string
// index-> 3 string
// index-> methods string

const obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (const key in obj) {
  console.log("key->", key);
}
// key-> a
// key-> b
// key-> c
```

- for in 会遍历数组所有的可枚举属性，包括原型。
- 遍历的索引为字符串类型。遍历对象返回的对象的 key 值,遍历数组返回的数组的下标(key)。
- 特别情况下, for ... in 循环会以任意的顺序遍历键名。

  :::tip 总结
  for...in 更适合遍历对象
  :::

### for...of

一个数据结构只要部署了 Symbol.iterator 属性，就被视为具有 iterator 接口，就可以用 `for...of` 循环遍历它的成员。也就是说，`for...of` 循环内部调用的是数据结构的 Symbol.iterator 方法。

```js
Array.prototype.methods = function () {
  console.log(this.length);
};
const arr = [1, 3, 5, "a"];
for (const value of arr) {
  console.log("value->", value);
}
// value-> 1
// value-> 3
// value-> 5
// value-> a

const obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (const v of obj) {
  console.log("v->", v);
}
// TypeError: obj is not iterable
```
- for...of 循环用来获取一对键值对中的值，而 for in 获取的是 键名。
- for...of 提供了遍历所有数据结构的统一接口。
- for...of 不同与 forEach， 它可以与 break、continue 和 return 配合使用，也就是说 for...of 循环可以随时退出循环。
- 一个数据结构只要部署了 Symbol.iterator 属性， 就被视为具有 iterator 接口， 就可以使用 for...of 循环。

  :::tip 提示
  我也想用 for...of 遍历对象怎么办？可以使用 Object.keys() 获取对象的 key 值集合后，再使用 for...of。
  
  如果要通过for...of循环，获取数组的索引，可以借助数组实例的entries方法和keys方法。
  :::
