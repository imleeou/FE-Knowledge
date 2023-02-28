import{_ as s,c as a,o as n,a as l}from"./app.c0be5ae3.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"nrm 安装与使用","slug":"nrm-安装与使用","link":"#nrm-安装与使用","children":[]}],"relativePath":"necessary/nrm.md","lastUpdated":1677566414000}'),e={name:"necessary/nrm.md"},p=l(`<p><a href="https://github.com/Pana/nrm" target="_blank" rel="noreferrer">nrm</a>（NPM registry manager）是 npm 的镜像源管理工具，使用它可以快速切换 npm 源。</p><p>作为前端开发，你一定使用过 npm 来安装第三方依赖包，但由于 npm 默认的下载仓储地址是 <a href="https://registry.npmjs.org/" target="_blank" rel="noreferrer">https://registry.npmjs.org/</a>，属于外国的网站，所以我们下载的时候可能会非常的慢。</p><p>所以淘宝也做了一个 npm 的镜像网站 「<a href="https://www.npmmirror.com/" target="_blank" rel="noreferrer">这里</a>」。</p><p>比如我们切换成淘宝镜像源，我们可以通过以下命令完成切换：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmmirror.com/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或者直接在 npm 配置文件修改</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">edit</span></span>
<span class="line"></span></code></pre></div><p>但是这命令太长，不好记，所以我们用 <code>nrm</code> 来快速切换吧。</p><h3 id="nrm-安装与使用" tabindex="-1">nrm 安装与使用 <a class="header-anchor" href="#nrm-安装与使用" aria-hidden="true">#</a></h3><ol><li>全局安装</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nrm</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>查看版本（安装成功）</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-V</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>查看所有镜像源</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span></span>
<span class="line"></span></code></pre></div><ul><li>npm -------- <a href="https://registry.npmjs.org/" target="_blank" rel="noreferrer">https://registry.npmjs.org/</a></li><li>yarn ------- <a href="https://registry.yarnpkg.com/" target="_blank" rel="noreferrer">https://registry.yarnpkg.com/</a></li><li>cnpm ------- <a href="http://r.cnpmjs.org/" target="_blank" rel="noreferrer">http://r.cnpmjs.org/</a></li><li>taobao ----- <a href="https://www.npmmirror.com/" target="_blank" rel="noreferrer">https://www.npmmirror.com/</a></li><li>nj --------- <a href="https://registry.nodejitsu.com/" target="_blank" rel="noreferrer">https://registry.nodejitsu.com/</a></li><li>npmMirror -- <a href="https://skimdb.npmjs.com/registry/" target="_blank" rel="noreferrer">https://skimdb.npmjs.com/registry/</a></li><li>edunpm ----- <a href="http://registry.enpmjs.org/" target="_blank" rel="noreferrer">http://registry.enpmjs.org/</a></li></ul><ol start="4"><li>查看当前使用的镜像源</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">current</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>切换镜像源</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">registr</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">例：nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">taobao</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li>测试镜像源速度</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">registr</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ol start="7"><li>添加镜像源</li></ol><p>PS：<code>&lt;registry&gt;</code> 表示源名称，<code>&lt;url&gt;</code> 表示源地址。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">registr</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ur</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">例：nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmjs.org/</span></span>
<span class="line"></span></code></pre></div><ol start="8"><li>删除镜像源</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">del</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">registr</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">例：nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">del</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span></span>
<span class="line"></span></code></pre></div>`,25),o=[p];function t(r,c,i,C,y,D){return n(),a("div",null,o)}const g=s(e,[["render",t]]);export{d as __pageData,g as default};
