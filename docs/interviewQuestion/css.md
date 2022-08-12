# css 相关面试题

## 使用 css 画一个三角形 {#css-triangle}

```css

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
