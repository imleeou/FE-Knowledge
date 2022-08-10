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

<!-- TODO: -->

## JS 事件循环(event loop)

JavaScript 语言的一大特点就是**_单线程_**。作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

所以，为了避免复杂性，从一诞生，JavaScript 就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM。所以，这个新标准并没有改变 JavaScript 单线程的本质。

### 任务队列

> 在 JavaScript 中，所有的任务都可以分为
>
> - 同步任务：立即执行的任务，同步任务一般会直接进入到主线程中执行
>
> - 异步任务：异步执行的任务，比如 ajax 网络请求，setTimeout 定时函数等

1. 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。

2. 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

3. 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

4. 主线程不断重复上面的第三步。

主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为 Event Loop（事件循环）。

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

  如果要通过 for...of 循环，获取数组的索引，可以借助数组实例的 entries 方法和 keys 方法。
  :::

## 事件冒泡和事件捕获

### 事件冒泡（bubbling）

`冒泡`:当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序。

![bubbling](/images/bubbling.png)

点击内部的`<p>`会弹出 p -> 弹出 div -> 弹出 form。

这个过程被称为“冒泡（bubbling）”，因为事件从内部元素“冒泡”到所有父级，就像在水里的气泡一样。

> 阻止冒泡
>
> ```js
> // 非IE
> event.stopPropagation();
> // IE
> window.event.cancelBubble = true;
> ```

:::warning 不要在没有需要的情况下停止冒泡！
冒泡很方便。不要在没有真实需求时阻止它：除非是显而易见的，并且在架构上经过深思熟虑的。

有时 event.stopPropagation() 会产生隐藏的陷阱，以后可能会成为问题。

例如：

1. 我们创建了一个嵌套菜单，每个子菜单各自处理对自己的元素的点击事件，并调用 stopPropagation，以便不会触发外部菜单。
2. 之后，我们决定捕获在整个窗口上的点击，以追踪用户的行为（用户点击的位置）。有些分析系统会这样做。通常，代码会使用 document.addEventListener('click'…) 来捕获所有的点击。
3. 我们的分析不适用于被 stopPropagation 所阻止点击的区域。太伤心了，我们有一个“死区”。

通常，没有真正的必要去阻止冒泡。一项看似需要阻止冒泡的任务，可以通过其他方法解决。其中之一就是使用自定义事件，稍后我们会介绍它们此外，我们还可以将我们的数据写入一个处理程序中的 event 对象，并在另一个处理程序中读取该数据，这样我们就可以向父处理程序传递有关下层处理程序的信息。
:::

### 事件捕获（capturing）

网景提出另一种事件流名为事件捕获(event capturing)。与事件冒泡相反，事件会从最外层开始发生，直到最具体的元素。

按照上面的例子触发顺序应该为：点击内部的`<p>`会弹出 form -> 弹出 div -> 弹出 p。

使用 `on<event>` 属性或使用 HTML 特性（attribute）或使用两个参数的 addEventListener(event, handler) 添加的处理程序，对捕获一无所知，它们仅在第二阶段和第三阶段运行。

为了在捕获阶段捕获事件，我们需要将处理程序的 capture 选项设置为 true：

```js
// addEventListener有三个参数
// element.addEventListener(event, function, capture)

elem.addEventListener(..., {capture: true})
// 或者
elem.addEventListener(..., true)
```

> capture 选项有两个可能的值：
>
> - 如果为 false（默认值），则在冒泡阶段设置处理程序。
> - 如果为 true，则在捕获阶段设置处理程序。

## 什么是闭包?闭包的作用是什么？

当一个内部函数被调用，就会形成闭包，闭包就是能够读取其他函数内部变量的函数。

### 闭包作用：

局部变量无法共享和长久的保存，而全局变量可能造成变量污染，所以我们希望有一种机制既可以长久的保存变量又不会造成全局污染。

## typeof 和 instanceof 的使用和区别

`typeof`与`instanceof`都是判断数据类型的方法。

### typeof

`typeof` 是一个一元操作符不是函数，所以不需要传递参数，使用方法非常简单：typeof A，使用typeof会直接返回类型结果

```js
const fn = () => {};
const arr = [1, 2, "a"];
console.log(typeof 1314);               // number
console.log(typeof "");                 // string
console.log(typeof false);              // boolean
console.log(typeof undefined);          // undefined
console.log(typeof null);               // object
console.log(typeof {});                 // object
console.log(typeof fn);                 // function
console.log(typeof arr);                // object
console.log(typeof Symbol("symbol"));   // symbol
```

js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息

- 000：对象
- 010：浮点数
- 100：字符串
- 110：布尔
- 1：整数

但是undefined 和 null 这两个值却比较特殊。
1. null：null的机器码是0，所以typeof null返回object
2. undefined：用 −2^30 整数来表示

 **typeof** 判断函数返回结果就是函数，这其实还好理解，函数也是对象，因为函数比较重要，有自己特殊的属性，所以我们用 **typeof** 判断函数时会区分与对象，单独显示。
但是万一我们要判断这个实例属于哪个对象，那显然这时 **typeof** 已经失去作用了，因为除了函数，它都会判断为对象，这时我们就需要用到`instanceof`了。

### instanceof

`instanceof` 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

```js
// object为实例对象，constructor为构造函数
object instanceof constructor

// 构造函数通过new可以实例对象，instanceof 能判断这个对象是否是之前那个构造函数生成的对象
```
instanceof的判断就是根据原型链进行搜寻，在对象obj1的原型链上如果存在另一个对象obj2的原型属性，那么表达式（obj1 instanceof obj2）返回值为true；否则返回false。

```js
function Parent(){};
function Child(){};
function Other(){};

Child.prototype = new Parent();
let child = new Child();

child instanceof Child; // true
child instanceof Parent; // true
child instanceof Object; // true
child instanceof Other; // false
```
### typeof 和 instanceof 的区别

1. typeof会返回一个变量的基本类型，instanceof返回的是一个布尔值
2. instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型
3. 而typeof 也存在弊端，它虽然可以判断基础数据类型（null 除外），但是引用数据类型中，除了function 类型以外，其他的也无法判断

上述两种方法都有弊端，并不能满足所有场景的需求,如果需要通用检测数据类型，可以采用Object.prototype.toString，调用该方法，统一返回格式“[object Xxx]” 的字符串。

如下
```js
Object.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call({})  // 同上结果，加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(function(){})  // "[object Function]"
Object.prototype.toString.call(null)   //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([])       //"[object Array]"
Object.prototype.toString.call(document)  //"[object HTMLDocument]"
Object.prototype.toString.call(window)   //"[object Window]"
```

了解了toString的基本用法，下面就实现一个全局通用的数据类型判断方法。
  
```js
function getType(obj){
  let type  = typeof obj;
  if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1'); 
}

getType([])     // "Array" typeof []是object，因此toString返回
getType('123')  // "string" typeof 直接返回
getType(window) // "Window" toString返回
getType(null)   // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined)   // "undefined" typeof 直接返回
getType()            // "undefined" typeof 直接返回
getType(function(){}) // "function" typeof能判断，因此首字母小写
getType(/123/g)      //"RegExp" toString返回
```

> 引用地址
> https://github.com/febobo/web-interview/issues/65