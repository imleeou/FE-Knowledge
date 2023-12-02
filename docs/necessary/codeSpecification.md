# 代码提交规范

## Angular提交信息规范

提交格式如下：

```xml
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

::: info tips
每次提交可以包含页眉(header)、正文(body)和页脚(footer)，每次提交**必须包含页眉内容**
每次提交的信息不超过100个字符
:::

详细文档：[AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uyo6cb12dt6w)

### 页眉设置

页眉的格式指定为提交类型(type)、作用域(scope，可选)和主题(subject)

#### 提交类型

提交类型指定为下面其中一个：

| 类型 | 释义 |
| :--: | :-- |
| build | 对构建系统或者外部依赖项进行了修改 |
| ci | 对CI配置文件或脚本进行了修改 |
| docs | 对文档进行了修改 |
| feat | 增加新的特征 |
| fix | 修复bug |
| pref | 提高性能的代码更改 |
| refactor | 既不是修复bug也不是添加特征的代码重构 |
| style | 不影响代码含义的修改，比如空格、格式化、缺失的分号等 |
| test | 增加确实的测试或者矫正已存在的测试 |
| chore | 构建过程或辅助工具的变动 |

#### 作用域

范围可以是任何指定提交更改位置的内容

#### 主题

主题包括了对本次修改的简洁描述，有以下准则

使用命令式，现在时态：“改变”不是“已改变”也不是“改变了”
不要大写首字母
不在末尾添加句号

### 正文设置

和主题设置类似，使用命令式、现在时态

应该包含修改的动机以及和之前行为的对比

### 页脚设置

#### Breaking changes

不兼容修改指的是本次提交修改了不兼容之前版本的API或者环境变量

所有不兼容修改都必须在页脚中作为中断更改块提到，以BREAKING CHANGE:开头，后跟一个空格或者两个换行符，其余的信息就是对此次修改的描述，修改的理由和修改注释

```xml
BREAKING CHANGE: 隔离范围绑定定义已更改，并且
    指令控制器注入的注入选项已被删除。

    要迁移代码，请遵循以下示例：

    Before:

    。。。
    。。。

    After:

    。。。
    。。。

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```

#### 引用提交的问题

如果本次提交目的是修改issue的话，需要在页脚引用该issue

以关键字Closes开头，比如

``` Closes #234 ```

如果修改了多个bug，以逗号隔开

``` Closes #123, #245, #992 ```
