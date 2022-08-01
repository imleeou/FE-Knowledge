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
| 属性   | 描述                           |
| ------ | ------------------------------ |
| length | 返回存储对象中包含多少条数据。 |

存储对象方法：
| 方法                    | 描述                                               |
| ----------------------- | -------------------------------------------------- |
| key(n)                  | 返回存储对象中第 n 个键的名称。                    |
| getItem(keyname)        | 返回指定键的值。                                   |
| setItem(keyname, value) | 添加键和值，如果对应的值存在，则更新该键对应的值。 |
| removeItem(keyname)     | 移除键                                             |
| clear()                 | 清除存储对象中所有的键                             |

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

2. 箭头函数继承来的 this 指向永远不会改变

3. call()、apply()、bind()等方法不能改变箭头函数中的 this 指向

4. 箭头函数不能作为构造函数使用

5. 箭头函数没有自己的 arguments

6. 箭头函数没有 prototype

7. 箭头函数不能用作 Generator 函数,不能使用 yeild 关键字
