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
