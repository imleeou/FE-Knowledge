# css 相关面试题

## 使用 css 画一个三角形 {#css-triangle}

```css
.triangle {
  border: 10px solid transparent;
  border-left-color: red;
  background-color: transparent;
}
```

## 实现文本超出显示省略号(...) {#text-ellipsis}

### 单行文本超出

```css
/* 超出隐藏 */
overflow: hidden;
/* 显示省略符号来代表被修剪的文本 */
text-overflow: ellipsis;
/* 禁止换行 */
white-space: nowrap;
```

### 多行文本超出

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-box-orient: vertical;
/*  这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。 */
-webkit-line-clamp: 2;
```

## :last-child 与: last-of-type 的区别{#last-child-last-of-type}

### `last-child`

`:last-child` CSS 伪类 代表父元素的最后一个子元素。

```vue
<template>
  <div>
    <p>11111</p>
    <p>11111</p>
    <p>11111</p>
    <!-- <span>11111</span> -->
  </div>
</template>

<style scoped lang="less">
div p:last-child {
  background-color: pink;
}
</style>
```

![last-child](/images/css/last-child.png)

### `last-of-type`

`:last-of-type` CSS 伪类 表示了在（它父元素的）子元素列表中，最后一个给定类型的元素。当代码类似 Parent tagName:last-of-type 的作用区域包含父元素的所有子元素中的最后一个选定元素，也包括子元素的最后一个子元素并以此类推。

```vue
<template>
  <div>
    <p>11111</p>
    <p>11111</p>
    <p>11111</p>
    <span>11111</span>
  </div>
  <div>
    <p>22222</p>
    <p>22222</p>
    <p>22222</p>
    <span>22222</span>
    <p>22222</p>
  </div>
</template>

<style scoped lang="less">
div p:last-of-type {
  background-color: pink;
}
</style>
```

![last-of-type](/images/css/last-of-type.png)

上面 `last-child` 的例子中，我将 `<!-- <span>11111</span> -->`注释掉了。

当 `<span>11111</span>`未注释时，将**不会有元素被选中**。

**总结：**

由两个例子我们就能发现它们的区别所在，`last-child` 选择的是**父元素的最后一个子元素，且这个元素是 css 指定的元素**，才可以生效。

而 `last-of-type` 是选中其父元素中指定元素的最后一个，**不会被其他元素所干扰**。
