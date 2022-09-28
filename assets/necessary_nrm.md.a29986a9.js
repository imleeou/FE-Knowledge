import{_ as s,c as n,o as a,a as e}from"./app.7c93a9e0.js";const h=JSON.parse('{"title":"\u6216\u8005\u76F4\u63A5\u5728 npm \u914D\u7F6E\u6587\u4EF6\u4FEE\u6539","description":"","frontmatter":{},"headers":[{"level":3,"title":"nrm \u5B89\u88C5\u4E0E\u4F7F\u7528","slug":"nrm-\u5B89\u88C5\u4E0E\u4F7F\u7528"}],"relativePath":"necessary/nrm.md","lastUpdated":1664372770000}'),r={name:"necessary/nrm.md"},l=e(`<p><a href="https://github.com/Pana/nrm" target="_blank" rel="noopener noreferrer">nrm</a>\uFF08NPM registry manager\uFF09\u662F npm \u7684\u955C\u50CF\u6E90\u7BA1\u7406\u5DE5\u5177\uFF0C\u4F7F\u7528\u5B83\u53EF\u4EE5\u5FEB\u901F\u5207\u6362 npm \u6E90\u3002</p><p>\u4F5C\u4E3A\u524D\u7AEF\u5F00\u53D1\uFF0C\u4F60\u4E00\u5B9A\u4F7F\u7528\u8FC7 npm \u6765\u5B89\u88C5\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5305\uFF0C\u4F46\u7531\u4E8E npm \u9ED8\u8BA4\u7684\u4E0B\u8F7D\u4ED3\u50A8\u5730\u5740\u662F <a href="https://registry.npmjs.org/" target="_blank" rel="noopener noreferrer">https://registry.npmjs.org/</a>\uFF0C\u5C5E\u4E8E\u5916\u56FD\u7684\u7F51\u7AD9\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0B\u8F7D\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u975E\u5E38\u7684\u6162\u3002</p><p>\u6240\u4EE5\u6DD8\u5B9D\u4E5F\u505A\u4E86\u4E00\u4E2A npm \u7684\u955C\u50CF\u7F51\u7AD9 \u300C<a href="https://www.npmmirror.com/" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a>\u300D\u3002</p><p>\u6BD4\u5982\u6211\u4EEC\u5207\u6362\u6210\u6DD8\u5B9D\u955C\u50CF\u6E90\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5B8C\u6210\u5207\u6362\uFF1A</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm config </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> registry https://registry.npmmirror.com/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u6216\u8005\u76F4\u63A5\u5728 npm \u914D\u7F6E\u6587\u4EF6\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">$ npm config edit</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u662F\u8FD9\u547D\u4EE4\u592A\u957F\uFF0C\u4E0D\u597D\u8BB0\uFF0C\u6240\u4EE5\u6211\u4EEC\u7528 <code>nrm</code> \u6765\u5FEB\u901F\u5207\u6362\u5427\u3002</p><h3 id="nrm-\u5B89\u88C5\u4E0E\u4F7F\u7528" tabindex="-1">nrm \u5B89\u88C5\u4E0E\u4F7F\u7528 <a class="header-anchor" href="#nrm-\u5B89\u88C5\u4E0E\u4F7F\u7528" aria-hidden="true">#</a></h3><ol><li>\u5168\u5C40\u5B89\u88C5</li></ol><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm i -g nrm</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u67E5\u770B\u7248\u672C\uFF08\u5B89\u88C5\u6210\u529F\uFF09</li></ol><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ nrm -V</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u67E5\u770B\u6240\u6709\u955C\u50CF\u6E90</li></ol><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ nrm ls</span></span>
<span class="line"></span></code></pre></div><ul><li>npm -------- <a href="https://registry.npmjs.org/" target="_blank" rel="noopener noreferrer">https://registry.npmjs.org/</a></li><li>yarn ------- <a href="https://registry.yarnpkg.com/" target="_blank" rel="noopener noreferrer">https://registry.yarnpkg.com/</a></li><li>cnpm ------- <a href="http://r.cnpmjs.org/" target="_blank" rel="noopener noreferrer">http://r.cnpmjs.org/</a></li><li>taobao ----- <a href="https://www.npmmirror.com/" target="_blank" rel="noopener noreferrer">https://www.npmmirror.com/</a></li><li>nj --------- <a href="https://registry.nodejitsu.com/" target="_blank" rel="noopener noreferrer">https://registry.nodejitsu.com/</a></li><li>npmMirror -- <a href="https://skimdb.npmjs.com/registry/" target="_blank" rel="noopener noreferrer">https://skimdb.npmjs.com/registry/</a></li><li>edunpm ----- <a href="http://registry.enpmjs.org/" target="_blank" rel="noopener noreferrer">http://registry.enpmjs.org/</a></li></ul><ol start="4"><li>\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u955C\u50CF\u6E90</li></ol><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ nrm current</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>\u5207\u6362\u955C\u50CF\u6E90</li></ol><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ nrm use </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">registry</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F8B\uFF1Anrm use taobao</span></span>
<span class="line"></span></code></pre></div><ol start="6"><li>\u6D4B\u8BD5\u955C\u50CF\u6E90\u901F\u5EA6</li></ol><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ nrm </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">registry</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ol start="7"><li>\u6DFB\u52A0\u955C\u50CF\u6E90</li></ol><p>PS\uFF1A<code>&lt;registry&gt;</code> \u8868\u793A\u6E90\u540D\u79F0\uFF0C<code>&lt;url&gt;</code> \u8868\u793A\u6E90\u5730\u5740\u3002</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ nrm add </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">registry</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F8B\uFF1Anrm add npm https://registry.npmjs.org/</span></span>
<span class="line"></span></code></pre></div><ol start="8"><li>\u5220\u9664\u955C\u50CF\u6E90</li></ol><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ nrm del </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">registry</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F8B\uFF1Anrm del npm</span></span>
<span class="line"></span></code></pre></div>`,25),p=[l];function o(t,c,i,m,g,d){return a(),n("div",null,p)}var A=s(r,[["render",o]]);export{h as __pageData,A as default};