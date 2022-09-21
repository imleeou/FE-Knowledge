[nrm](https://github.com/Pana/nrm)（NPM registry manager）是 npm 的镜像源管理工具，使用它可以快速切换 npm 源。

作为前端开发，你一定使用过 npm 来安装第三方依赖包，但由于 npm 默认的下载仓储地址是 [https://registry.npmjs.org/](https://registry.npmjs.org/)，属于外国的网站，所以我们下载的时候可能会非常的慢。

所以淘宝也做了一个 npm 的镜像网站 「[这里](https://www.npmmirror.com/)」。

比如我们切换成淘宝镜像源，我们可以通过以下命令完成切换：

```shell
$ npm config set registry https://registry.npmmirror.com/

# 或者直接在 npm 配置文件修改
$ npm config edit
```

但是这命令太长，不好记，所以我们用 `nrm` 来快速切换吧。

### nrm 安装与使用

1. 全局安装

```shell
$ npm i -g nrm
```
2. 查看版本（安装成功）

```shell
$ nrm -V
```

3. 查看所有镜像源

```shell
$ nrm ls
```
- npm -------- https://registry.npmjs.org/
- yarn ------- https://registry.yarnpkg.com/
- cnpm ------- http://r.cnpmjs.org/
- taobao ----- https://www.npmmirror.com/
- nj --------- https://registry.nodejitsu.com/
- npmMirror -- https://skimdb.npmjs.com/registry/
- edunpm ----- http://registry.enpmjs.org/

4. 查看当前使用的镜像源

```shell
$ nrm current
```

5. 切换镜像源

```shell
$ nrm use <registry>
例：nrm use taobao
```

6. 测试镜像源速度

```shell
$ nrm test <registry>
```

7. 添加镜像源

PS：`<registry>` 表示源名称，`<url>` 表示源地址。

```shell
$ nrm add <registry> <url>
例：nrm add npm https://registry.npmjs.org/
```

8. 删除镜像源

```shell
$ nrm del <registry>
例：nrm del npm
```