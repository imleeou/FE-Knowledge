# JavaScript 相关面试题

## JS 基本数据类型与引用数据类型有哪些？{#js-data-type}

- 基本数据类型：String、Number、Boolean、Null、undefined、Symbol
- 引用数据类型：Array、Function、RegExp、Date 等

## 基本数据类型与引用数据类型的区别有哪些？{#js-data-type-difference}

基本数据类型存储在栈（Stack）内存中，引用数据类型存储在堆（Heap）内存中。

基本数据类型存放在栈中，是一段简单的数据段，数据大小确定，内存空间大小可以分配，是直接按值存放的，可以按值访问。

引用数据类型存放在堆中，变量在栈中保存的是指向堆内存的地址值，这个地址值指向对应的对象类型，访问堆内存中的对象是通过地址值访问的。

## 常用数组去重的方法{#array-unique}

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

## 常用数组排序方法{#array-sort}

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

## JS 存储对象（localStorage 和 sessionStorage）{#web-storage}

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

## Cookie{#cookie}

`Cookie` 是客户端与服务器端进行会话使用的一个能够在浏览器本地化存储的技术。简言之，cookie 是服务器端发给客户端的文本文件,但只能储存 4kb 的数据;目的是用于辨别用户身份，记录跟踪购物车的商品信息（如数量）、记录用户访问次数等。

> cookie 的内容主要包括：名字 name，值 value，过期时间 expires，路径 path 和域 domain。路径和域一起构成 cookie 的作用范围。一般 cookie 储存在内存里，若设置了过期时间则储存在硬盘里，浏览器页面关闭也不会失效，直到设置的过期时间后才失效。若不设置 cookie 的过期时间，则有效期为浏览器窗口的会话期间，关闭浏览器窗口就失效。

::: info 原理
客户端请求服务器时，如果服务器需要记录该用户状态，就使用 response 向客户端浏览器颁发一个 Cookie。而客户端浏览器会把 Cookie 保存起来。当浏览器再请求服务器时，浏览器把请求的网址连同该 Cookie 一同提交给服务器。服务器通过检查该 Cookie 来获取用户状态。
:::

## 箭头函数和普通函数有什么区别？{#arrow-function}

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

## JS 事件循环(event loop){#event-loop}

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

## 哪些是宏任务，哪些是微任务？{#micro-task-macro-task}

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

## 节流和防抖{#throttle-debounce}

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

## for...of 和 for...in 的区别{#for-of-for-in}

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

## 事件冒泡和事件捕获{#event-bubbling-event-capturing}

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

## 什么是闭包?闭包的作用是什么？{#closure}

当一个内部函数被调用，就会形成闭包，闭包就是能够读取其他函数内部变量的函数。

### 闭包作用：

局部变量无法共享和长久的保存，而全局变量可能造成变量污染，所以我们希望有一种机制既可以长久的保存变量又不会造成全局污染。

## typeof 和 instanceof 的使用和区别{#typeof-instanceof}

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
## 浏览器垃圾回收机制 {#browser-garbage-collection}

在JavaScript中，数据类型分为两类，[基本类型和引用类型](#js-data-type)，而对于栈的内存空间，只保存简单数据类型的内存，由操作系统自动分配和自动释放。而堆空间中的内存，由于大小不固定，系统无法无法进行自动释放，这个时候就需要JS引擎来手动的释放这些内存。

### 为什么需要垃圾回收？

在Chrome中，v8被限制了内存的使用（64位约1.4G/1464MB ， 32位约0.7G/732MB），为什么要限制呢？

- 表层原因是，V8最初为浏览器而设计，不太可能遇到用大量内存的场景
- 深层原因是，V8的垃圾回收机制的限制（如果清理大量的内存垃圾是很耗时间，这样回引起JavaScript线程暂停执行的时间，那么性能和应用直线下降）

前面说到栈内的内存，操作系统会自动进行内存分配和内存释放，而堆中的内存，由JS引擎（如Chrome的V8）手动进行释放，当我们的代码没有按照正确的写法时，会使得JS引擎的垃圾回收机制无法正确的对内存进行释放（内存泄露），从而使得浏览器占用的内存不断增加，进而导致JavaScript和应用、操作系统性能下降。

:::info 内存泄露
对于持续运行的服务进程（daemon），必须及时释放不再用到的内存。否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。由于某种原因没有被释放仍然被不必要的占有，就叫做**内存泄漏**（memory leak）。
:::

### 内存生命周期
不管什么程序语言，内存生命周期基本是一致的：
1. 分配你所需要的内存
2. 使用分配到的内存（读、写）
3. 不需要时将其释/归还

与其他需要手动管理内存的语言不通，在JavaScript中，当我们创建变量（对象，字符串等）的时候，系统会自动给对象分配对应的内存。当系统发现这些变量不再被使用的时候，会自动释放（垃圾回收）这些变量的内存，开发者不用过多的关心内存问题。

### 内存回收

JavaScript有自动垃圾收集机制，垃圾收集器会每隔一段时间就执行一次释放操作，找出那些不再继续使用的值，然后释放其占用的内存。

- 局部变量和全局变量的销毁
  - **局部变量**：局部作用域中，当函数执行完毕，局部变量也就没有存在的必要了，因此垃圾收集器很容易做出判断并回收。
  - **全局变量**：全局变量什么时候需要自动释放内存空间则很难判断，所以在开发中尽量避免使用全局变量。
- 以Google的V8引擎为例，V8引擎中所有的JS对象都是通过堆来进行内存分配的
  - **初始分配**：当声明变量并赋值时，V8引擎就会在堆内存中分配给这个变量。
  - **继续申请**：当已申请的内存不足以存储这个变量时，V8引擎就会继续申请内存，直到堆的大小达到了V8引擎的内存上限为止。
- V8引擎对堆内存中的JS对象进行分代管理
  - **新生代**：存活周期较短的JS对象，如临时变量、字符串等。
  - **老生代**：经过多次垃圾回收仍然存活，存活周期较长的对象，如主控制器、服务器对象等。

### 垃圾回收算法

对垃圾回收算法来说，核心思想就是如何判断内存已经不再使用，常用垃圾回收算法有下面两种。

- 引用计数（现代浏览器不再使用）
- 标记清除（常用）

#### 引用计数

引用计数算法定义“内存不再使用”的标准很简单，就是看一个对象是否有指向它的引用。如果没有其他对象指向它了，说明该对象已经不再需要了。

```js
// 创建一个对象person，他有两个指向属性age和name的引用
var person = {
    age: 12,
    name: 'aaaa'
};

person.name = null; // 虽然name设置为null，但因为person对象还有指向name的引用，因此name不会回收

var p = person; 
person = 1;         //原来的person对象被赋值为1，但因为有新引用p指向原person对象，因此它不会被回收

p = null;           //原person对象已经没有引用，很快会被回收
```

引用计数有一个致命的问题，那就是循环引用

如果两个对象相互引用，尽管他们已不再使用，但是垃圾回收器不会进行回收，最终可能会导致内存泄露。

```js
function cycle() {
    var o1 = {};
    var o2 = {};
    o1.a = o2;
    o2.a = o1; 

    return "cycle reference!"
}

cycle();
```

`cycle`函数执行完成之后，对象`o1`和`o2`实际上已经不再需要了，但根据引用计数的原则，他们之间的相互引用依然存在，因此这部分内存不会被回收。所以现代浏览器**不再使用**这个算法。

但是**IE**依旧使用。

```js
var div = document.createElement("div");
div.onclick = function() {
    console.log("click");
};
```

上面的写法很常见，但是上面的例子就是一个循环引用。

变量div有事件处理函数的引用，同时事件处理函数也有div的引用，因为div变量可在函数内被访问，所以循环引用就出现了。

#### 标记清除（常用）
标记清除算法将“不再使用的对象”定义为“无法到达的对象”。即从根部（在JS中就是全局对象）出发定时扫描内存中的对象，凡是能从根部到达的对象，保留。那些从根部出发无法触及到的对象被标记为不再使用，稍后进行回收。

无法触及的对象包含了没有引用的对象这个概念，但反之未必成立。

引擎在执行 GC（使用标记清除算法）时，需要从出发点去遍历内存中所有的对象去打标记，而这个出发点有很多，我们称之为一组 根 对象，而所谓的根对象，其实在浏览器环境中包括又不止于 全局Window对象、文档DOM树 等

整个标记清除算法大致过程就像下面这样：
>1. 垃圾收集器在运行时会给内存中的所有变量都加上一个标记，假设内存中所有对象都是垃圾，全标记为0
>2. 然后从各个根对象开始遍历，把不是垃圾的节点改成1
>3. 清理所有标记为0的垃圾，销毁并回收它们所占用的内存空间
>4. 最后，把所有内存中对象标记修改为0，等待下一轮垃圾回收


所以上面的例子就可以正确被垃圾回收处理了。

所以现在对于主流浏览器来说，只需要切断需要回收的对象与根部的联系。最常见的内存泄露一般都与DOM元素绑定有关：

```js
email.message = document.createElement(“div”);
displayList.appendChild(email.message);

// 稍后从displayList中清除DOM元素
displayList.removeAllChildren();
```
上面代码中，div元素已经从DOM树中清除，但是该div元素还绑定在email对象中，所以如果email对象存在，那么该div元素就会一直保存在内存中。


### Chrome 垃圾回收算法

在JavaScript中，其实绝大多数的对象存活周期都很短，大部分在经过一次的垃圾回收之后，内存就会被释放掉，而少部分的对象存活周期将会很长，一直是活跃的对象，不需要被回收。为了提高回收效率，V8 将堆分为两类`新生代`和`老生代`，新生代中存放的是生存时间短的对象，老生代中存放的生存时间久的对象。

新生区通常只支持 1～8M 的容量，而老生区支持的容量就大很多了。对于这两块区域，V8 分别使用两个不同的垃圾回收器，以便更高效地实施垃圾回收。

- 副垃圾回收器 - Scavenge：主要负责新生代的垃圾回收。
- 主垃圾回收器 - Mark-Sweep & Mark-Compact：主要负责老生代的垃圾回收。

V8 的垃圾回收策略主要基于分代式垃圾回收机制，V8 中将堆内存分为新生代和老生代两区域，采用不同的垃圾回收器也就是不同的策略管理垃圾回收。
V8 整个堆内存的大小就等于新生代加上老生代的内存（如下图）：

![新老生代](/images/xlsd.png)

### 新生代垃圾回收 - Scavenge

在JavaScript中，任何对象的声明分配到的内存，将会先被放置在新生代中，而因为大部分对象在内存中存活的周期很短，所以需要一个效率非常高的算法。在新生代中，主要使用Scavenge算法进行垃圾回收，Scavenge算法是一个典型的牺牲空间换取时间的复制算法，在占用空间不大的场景上非常适用。

Scavenge算法将新生代堆分为两部分，分别叫`from-space`（使用区）和`to-space`（空闲区），工作方式也很简单，就是将`from-space`中存活的活动对象复制到to-space中，并将这些对象的内存有序的排列起来，然后将`from-space`中的非活动对象的内存进行释放，完成之后，将`from space` 和`to space`进行互换，这样可以使得新生代中的这两块区域可以重复利用。

![新生代垃圾回收](/images/scavenge.png)

当一个对象经过多次复制后依然存活，它将会被认为是生命周期较长的对象，随后会被移动到老生代中，采用老生代的垃圾回收策略进行管理。

另外还有一种情况，如果复制一个对象到空闲区时，空闲区空间占用超过了 25%，那么这个对象会被直接晋升到老生代空间中，设置为 25% 的比例的原因是，当完成 Scavenge 回收后，空闲区将翻转成使用区，继续进行对象内存的分配，若占比过大，将会影响后续内存分配。

__那么，垃圾回收器是怎么知道哪些对象是活动对象和非活动对象的呢？__

有一个概念叫对象的可达性，表示从初始的根对象（window，global）的指针开始，这个根指针对象被称为根集（root set），从这个根集向下搜索其子节点，被搜索到的子节点说明该节点的引用对象可达，并为其留下标记，然后递归这个搜索的过程，直到所有子节点都被遍历结束，那么没有被标记的对象节点，说明该对象没有被任何地方引用，可以证明这是一个需要被释放内存的对象，可以被垃圾回收器回收。

***新生代中的对象什么时候变成老生代的对象呢？***

在新生代中，还进一步进行了细分，分为nursery子代和intermediate子代两个区域，一个对象第一次分配内存时会被分配到新生代中的nursery子代，如果进过下一次垃圾回收这个对象还存在新生代中，这时候我们移动到 intermediate 子代，再经过下一次垃圾回收，如果这个对象还在新生代中，副垃圾回收器会将该对象移动到老生代中，这个移动的过程被称为`晋升`。

### 老生代垃圾回收 - Mark-Sweep & Mark-Compact

新生代空间中的对象满足一定条件后，晋升到老生代空间中，在老生代空间中的对象都已经至少经历过一次或者多次的回收所以它们的存活概率会更大，如果这个时候再使用scavenge算法的话，会出现两个问题：

- scavenge为复制算法，重复复制活动对象会使得效率低下
- scavenge是牺牲空间来换取时间效率的算法，而老生代支持的容量较大，会出现空间资源浪费问题
  
所以在老生代空间中采用了 Mark-Sweep（标记清除） 和 Mark-Compact（标记整理） 算法。

__标记清除（Mark-Sweep）__

Mark-Sweep处理时分为两阶段，标记阶段和清理阶段，看起来与Scavenge类似，不同的是，Scavenge算法是复制活动对象，而由于在老生代中活动对象占大多数，所以Mark-Sweep在标记了活动对象和非活动对象之后，直接把非活动对象清除。

- 标记阶段：对老生代进行第一次扫描，标记活动对象
- 清理阶段：对老生代进行第二次扫描，清除未被标记的对象，即清理非活动对象

![mark-sweep](/images/mark-sweep.png)

这里遗留了一个问题，被清除的对象遍布于各内存地址，产生很多内存碎片。

__标记整理（Mark-Compact）__

由于Mark-Sweep完成之后，老生代的内存中产生了很多内存碎片，若不清理这些内存碎片，如果出现需要分配一个大对象的时候，这时所有的碎片空间都完全无法完成分配，就会提前触发垃圾回收，而这次回收其实不是必要的。

为了解决内存碎片问题，Mark-Compact被提出，它是在 Mark-Sweep的基础上演进而来的，相比Mark-Sweep，Mark-Compact添加了活动对象整理阶段，将所有的活动对象往一端移动，移动完成后，直接清理掉边界外的内存。

![mark-compact](/images/mark-compact.png)

> 引用地址：
> 
> https://muyiy.cn/blog/1/1.4.html#%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95
> 
> https://juejin.cn/post/6981588276356317214#heading-4
> 
> https://github.com/yacan8/blog/issues/33