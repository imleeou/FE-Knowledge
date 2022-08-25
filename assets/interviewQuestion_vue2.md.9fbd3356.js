import{_ as s,c as a,o as l,a as n}from"./app.9025e14b.js";var o="/FE-Knowledge/images/$router.png",e="/FE-Knowledge/images/$route.png";const v=JSON.parse('{"title":"Vue2 \u76F8\u5173\u9762\u8BD5\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"v-if \u548C v-show \u7684\u533A\u522B","slug":"v-if-and-v-show-difference"},{"level":2,"title":"$router \u548C $route \u7684\u533A\u522B","slug":"router-and-route-difference"},{"level":2,"title":"\u4EC0\u4E48\u662F SPA\uFF1F","slug":"what-is-spa"},{"level":3,"title":"\u4F18\u70B9","slug":"\u4F18\u70B9"},{"level":3,"title":"\u7F3A\u70B9","slug":"\u7F3A\u70B9"},{"level":2,"title":"\u5982\u4F55\u5B9E\u73B0\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF1F","slug":"router-lazy-loading"},{"level":3,"title":"\u4E3A\u4EC0\u4E48\u9700\u8981\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u9700\u8981\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF1F"},{"level":3,"title":"\u5B9E\u73B0\u65B9\u5F0F","slug":"\u5B9E\u73B0\u65B9\u5F0F"},{"level":2,"title":"hash \u548C history \u8DEF\u7531\u6A21\u5F0F\u7684\u533A\u522B","slug":"hash-and-history-route"},{"level":3,"title":"- hash \u6A21\u5F0F","slug":"hash-\u6A21\u5F0F"},{"level":3,"title":"- history \u6A21\u5F0F","slug":"history-\u6A21\u5F0F"},{"level":2,"title":"v-if \u548C v-for \u4E00\u8D77\u4F7F\u7528\uFF1F","slug":"v-if-v-for"},{"level":3,"title":"\u4F18\u5148\u7EA7\u5BF9\u6BD4","slug":"\u4F18\u5148\u7EA7\u5BF9\u6BD4"},{"level":3,"title":"vue 2.x \u4E2D","slug":"vue-2-x-\u4E2D"},{"level":3,"title":"vue 3.x \u4E2D","slug":"vue-3-x-\u4E2D"}],"relativePath":"interviewQuestion/vue2.md","lastUpdated":1661399843000}'),p={name:"interviewQuestion/vue2.md"},t=n('<h1 id="vue2-\u76F8\u5173\u9762\u8BD5\u9898" tabindex="-1">Vue2 \u76F8\u5173\u9762\u8BD5\u9898 <a class="header-anchor" href="#vue2-\u76F8\u5173\u9762\u8BD5\u9898" aria-hidden="true">#</a></h1><h2 id="v-if-and-v-show-difference" tabindex="-1">v-if \u548C v-show \u7684\u533A\u522B <a class="header-anchor" href="#v-if-and-v-show-difference" aria-hidden="true">#</a></h2><ul><li>v-show \u53EA\u662F\u7B80\u5355\u7684\u63A7\u5236\u5143\u7D20\u7684 display \u5C5E\u6027\uFF0C\u800C v-if \u624D\u662F\u6761\u4EF6\u6E32\u67D3\uFF08\u6761\u4EF6\u4E3A\u771F\uFF0C\u5143\u7D20\u5C06\u4F1A\u88AB\u6E32\u67D3\uFF0C\u6761\u4EF6\u4E3A\u5047\uFF0C\u5143\u7D20\u4F1A\u88AB\u9500\u6BC1\uFF09</li><li>v-show \u6709\u66F4\u9AD8\u7684\u9996\u6B21\u6E32\u67D3\u5F00\u9500\uFF0C\u800C v-if \u7684\u9996\u6B21\u6E32\u67D3\u5F00\u9500\u8981\u5C0F\u7684\u591A</li><li>v-if \u6709\u66F4\u9AD8\u7684\u5207\u6362\u5F00\u9500\uFF0Cv-show \u5207\u6362\u5F00\u9500\u5C0F</li><li>v-if \u6709\u914D\u5957\u7684 v-else-if \u548C v-else\uFF0C\u800C v-show \u6CA1\u6709</li><li>v-if \u53EF\u4EE5\u642D\u914D template \u4F7F\u7528\uFF0C\u800C v-show \u4E0D\u884C</li></ul><h2 id="router-and-route-difference" tabindex="-1">$router \u548C $route \u7684\u533A\u522B <a class="header-anchor" href="#router-and-route-difference" aria-hidden="true">#</a></h2><ul><li><strong>$router</strong>\u662F VueRouter \u7684\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u901A\u8FC7 Vue.use(VueRouter)\u548C VueRouter \u6784\u9020\u51FD\u6570\u5F97\u5230\u4E00\u4E2A router \u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u662F\u4E00\u4E2A\u5168\u5C40\u7684\u5BF9\u8C61\uFF0C\u4ED6\u5305\u542B\u4E86\u6240\u6709\u7684\u8DEF\u7531\u5305\u542B\u4E86\u8BB8\u591A\u5173\u952E\u7684\u5BF9\u8C61\u548C\u5C5E\u6027\u3002\u76F8\u5F53\u4E8E\u4E00\u4E2A\u5168\u5C40\u7684\u8DEF\u7531\u5668\u5BF9\u8C61\uFF0C\u91CC\u9762\u542B\u6709\u5F88\u591A\u5C5E\u6027\u548C\u5B50\u5BF9\u8C61\u3002</li></ul><p><img src="'+o+'" alt="An image"></p><ul><li><strong>$route</strong>\u662F\u4E00\u4E2A\u8DF3\u8F6C\u7684\u8DEF\u7531\u5BF9\u8C61\uFF0C\u6BCF\u4E00\u4E2A\u8DEF\u7531\u90FD\u4F1A\u6709\u4E00\u4E2A <strong>$route</strong> \u5BF9\u8C61\uFF0C\u662F\u4E00\u4E2A\u5C40\u90E8\u7684\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5BF9\u5E94\u7684 name,path,params,query \u7B49\u3002<strong>$route</strong>\u76F8\u5F53\u4E8E\u5F53\u524D\u6B63\u5728\u8DF3\u8F6C\u7684\u8DEF\u7531\u5BF9\u8C61\u3002</li></ul><p><img src="'+e+`" alt="An image"></p><h2 id="what-is-spa" tabindex="-1">\u4EC0\u4E48\u662F SPA\uFF1F <a class="header-anchor" href="#what-is-spa" aria-hidden="true">#</a></h2><p><strong><em>\u5355\u9875 Web \u5E94\u7528\uFF08single page web application\uFF0CSPA\uFF09</em></strong>\uFF0C\u5C31\u662F\u53EA\u6709\u4E00\u5F20 Web \u9875\u9762\u7684\u5E94\u7528\u3002\u5355\u9875\u5E94\u7528\u7A0B\u5E8F (SPA) \u662F\u52A0\u8F7D\u5355\u4E2A HTML \u9875\u9762\u5E76\u5728\u7528\u6237\u4E0E\u5E94\u7528\u7A0B\u5E8F\u4EA4\u4E92\u65F6\u52A8\u6001\u66F4\u65B0\u8BE5\u9875\u9762\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u3002\u6D4F\u89C8\u5668\u4E00\u5F00\u59CB\u4F1A\u52A0\u8F7D\u5FC5\u9700\u7684 HTML \u3001 CSS \u548C JavaScript \uFF0C\u6240\u6709\u7684\u64CD\u4F5C\u90FD\u5728\u8FD9\u5F20\u9875\u9762\u4E0A\u5B8C\u6210\uFF0C\u90FD\u7531 JavaScript \u6765\u63A7\u5236\u3002</p><p>\u5B83\u901A\u8FC7\u52A8\u6001\u91CD\u5199\u5F53\u524D\u9875\u9762\u6765\u4E0E\u7528\u6237\u4EA4\u4E92\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u907F\u514D\u4E86\u9875\u9762\u4E4B\u95F4\u5207\u6362\u6253\u65AD\u7528\u6237\u4F53\u9A8C\u5728\u5355\u9875\u5E94\u7528\u4E2D\uFF0C\u6240\u6709\u5FC5\u8981\u7684\u4EE3\u7801\uFF08HTML\u3001JavaScript \u548C CSS\uFF09\u90FD\u901A\u8FC7\u5355\u4E2A\u9875\u9762\u7684\u52A0\u8F7D\u800C\u68C0\u7D22\uFF0C\u6216\u8005\u6839\u636E\u9700\u8981\uFF08\u901A\u5E38\u662F\u4E3A\u54CD\u5E94\u7528\u6237\u64CD\u4F5C\uFF09\u52A8\u6001\u88C5\u8F7D\u9002\u5F53\u7684\u8D44\u6E90\u5E76\u6DFB\u52A0\u5230\u9875\u9762\u9875\u9762\u5728\u4EFB\u4F55\u65F6\u95F4\u70B9\u90FD\u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D\uFF0C\u4E5F\u4E0D\u4F1A\u5C06\u63A7\u5236\u8F6C\u79FB\u5230\u5176\u4ED6\u9875\u9762</p><p>\u6211\u4EEC\u719F\u77E5\u7684 JS \u6846\u67B6\u5982<code>react</code>\u3001<code>vue</code>\u3001<code>angular</code>\u90FD\u5C5E\u4E8E SPA</p><h3 id="\u4F18\u70B9" tabindex="-1">\u4F18\u70B9 <a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a></h3><ol><li><code>\u6709\u826F\u597D\u7684\u4EA4\u4E92\u4F53\u9A8C</code> \u80FD\u63D0\u5347\u9875\u9762\u5207\u6362\u4F53\u9A8C\uFF0C\u5185\u5BB9\u7684\u6539\u53D8\u4E0D\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u6574\u4E2A\u9875\u9762\uFF0C\u7528\u6237\u5728\u8BBF\u95EE\u5E94\u7528\u9875\u9762\u662F\u4E0D\u4F1A\u9891\u7E41\u7684\u53BB\u5207\u6362\u6D4F\u89C8\u9875\u9762\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u9875\u9762\u7684\u91CD\u65B0\u52A0\u8F7D\uFF1B</li><li><code>\u524D\u540E\u7AEF\u5206\u79BB\u5F00\u53D1</code> \u5355\u9875 Web \u5E94\u7528\u53EF\u4EE5\u548C RESTful \u89C4\u7EA6\u4E00\u8D77\u4F7F\u7528\uFF0C\u901A\u8FC7 REST API \u63D0\u4F9B\u63A5\u53E3\u6570\u636E\uFF0C\u5E76\u4F7F\u7528 Ajax \u5F02\u6B65\u83B7\u53D6\uFF0C\u8FD9\u6837\u6709\u52A9\u4E8E\u5206\u79BB\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u5DE5\u4F5C\u3002\u66F4\u8FDB\u4E00\u6B65\uFF0C\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u4E5F\u53EF\u4EE5\u5206\u89E3\u4E3A\u9759\u6001\u9875\u9762\u548C\u9875\u9762\u4EA4\u4E92\u4E24\u4E2A\u90E8\u5206\uFF1B</li><li><code>\u51CF\u8F7B\u670D\u52A1\u5668\u538B\u529B</code> \u670D\u52A1\u5668\u53EA\u7528\u51FA\u6570\u636E\u5C31\u53EF\u4EE5\uFF0C\u4E0D\u7528\u7BA1\u5C55\u793A\u903B\u8F91\u548C\u9875\u9762\u5408\u6210\uFF0C\u541E\u5410\u80FD\u529B\u4F1A\u63D0\u9AD8\u51E0\u500D\uFF1B</li><li><code>\u5171\u7528\u4E00\u5957\u540E\u7AEF\u7A0B\u5E8F\u4EE3\u7801</code> \u4E0D\u7528\u4FEE\u6539\u540E\u7AEF\u7A0B\u5E8F\u4EE3\u7801\u5C31\u53EF\u4EE5\u540C\u65F6\u7528\u4E8E Web \u754C\u9762\u3001\u624B\u673A\u3001\u5E73\u677F\u7B49\u591A\u79CD\u5BA2\u6237\u7AEF\uFF1B</li></ol><h3 id="\u7F3A\u70B9" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a></h3><ol><li><code>SEO\u96BE\u5EA6\u8F83\u9AD8</code> \u7531\u4E8E\u6240\u6709\u7684\u5185\u5BB9\u90FD\u5728\u4E00\u4E2A\u9875\u9762\u4E2D\u52A8\u6001\u66FF\u6362\u663E\u793A\uFF0C\u6240\u4EE5\u5728 SEO \u4E0A\u5176\u6709\u7740\u5929\u7136\u7684\u5F31\u52BF\uFF0C\u4E0D\u5229\u4E8E\u641C\u7D22\u5F15\u64CE\u7684\u6293\u53D6\u3002</li><li><code>\u521D\u6B21\u52A0\u8F7D\u8017\u65F6\u591A</code> \u4E3A\u5B9E\u73B0\u5355\u9875 Web \u5E94\u7528\u529F\u80FD\u53CA\u663E\u793A\u6548\u679C\uFF0C\u9700\u8981\u5728\u52A0\u8F7D\u9875\u9762\u7684\u65F6\u5019\u5C06 JavaScript\u3001CSS \u7EDF\u4E00\u52A0\u8F7D\uFF0C\u90E8\u5206\u9875\u9762\u53EF\u4EE5\u5728\u9700\u8981\u7684\u65F6\u5019\u52A0\u8F7D\u3002\u6240\u4EE5\u5FC5\u987B\u5BF9 JavaScript \u53CA CSS \u4EE3\u7801\u8FDB\u884C\u5408\u5E76\u538B\u7F29\u5904\u7406\uFF1B</li></ol><h2 id="router-lazy-loading" tabindex="-1">\u5982\u4F55\u5B9E\u73B0\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF1F <a class="header-anchor" href="#router-lazy-loading" aria-hidden="true">#</a></h2><h3 id="\u4E3A\u4EC0\u4E48\u9700\u8981\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF1F" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF1F" aria-hidden="true">#</a></h3><p>\u5F53\u6253\u5305\u6784\u5EFA\u5E94\u7528\u65F6\uFF0CJavaScript \u5305\u4F1A\u53D8\u5F97\u975E\u5E38\u5927\uFF0C\u5F71\u54CD\u9875\u9762\u52A0\u8F7D\u3002\u5982\u679C\u6211\u4EEC\u80FD\u628A\u4E0D\u540C\u8DEF\u7531\u5BF9\u5E94\u7684\u7EC4\u4EF6\u5206\u5272\u6210\u4E0D\u540C\u7684\u4EE3\u7801\u5757\uFF0C\u7136\u540E\u5F53\u8DEF\u7531\u88AB\u8BBF\u95EE\u7684\u65F6\u5019\u624D\u52A0\u8F7D\u5BF9\u5E94\u7EC4\u4EF6\uFF0C\u8FD9\u6837\u5C31\u4F1A\u66F4\u52A0\u9AD8\u6548\u3002</p><h3 id="\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1">\u5B9E\u73B0\u65B9\u5F0F <a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a></h3><p>Vue Router \u652F\u6301\u5F00\u7BB1\u5373\u7528\u7684\u52A8\u6001\u5BFC\u5165\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u7528\u52A8\u6001\u5BFC\u5165\u4EE3\u66FF\u9759\u6001\u5BFC\u5165\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u5C06</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// import UserDetails from &#39;./views/UserDetails&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u66FF\u6362\u6210</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> UserDetails </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./views/UserDetails</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/users/:id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> UserDetails </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>component (\u548C components) \u914D\u7F6E\u63A5\u6536\u4E00\u4E2A\u8FD4\u56DE Promise \u7EC4\u4EF6\u7684\u51FD\u6570\uFF0CVue Router \u53EA\u4F1A\u5728\u7B2C\u4E00\u6B21\u8FDB\u5165\u9875\u9762\u65F6\u624D\u4F1A\u83B7\u53D6\u8FD9\u4E2A\u51FD\u6570\uFF0C\u7136\u540E\u4F7F\u7528\u7F13\u5B58\u6570\u636E\u3002\u8FD9\u610F\u5473\u7740\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u66F4\u590D\u6742\u7684\u51FD\u6570\uFF0C\u53EA\u8981\u5B83\u4EEC\u8FD4\u56DE\u4E00\u4E2A Promise \uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> UserDetails </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* \u7EC4\u4EF6\u5B9A\u4E49 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u4E0D\u8981\u5728\u8DEF\u7531\u4E2D\u4F7F\u7528\u5F02\u6B65\u7EC4\u4EF6\u3002\u5F02\u6B65\u7EC4\u4EF6\u4ECD\u7136\u53EF\u4EE5\u5728\u8DEF\u7531\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u4F46\u8DEF\u7531\u7EC4\u4EF6\u672C\u8EAB\u5C31\u662F\u52A8\u6001\u5BFC\u5165\u7684\u3002</p></div><h2 id="hash-and-history-route" tabindex="-1">hash \u548C history \u8DEF\u7531\u6A21\u5F0F\u7684\u533A\u522B <a class="header-anchor" href="#hash-and-history-route" aria-hidden="true">#</a></h2><h3 id="hash-\u6A21\u5F0F" tabindex="-1">- hash \u6A21\u5F0F <a class="header-anchor" href="#hash-\u6A21\u5F0F" aria-hidden="true">#</a></h3><p><code>hash</code> \u6A21\u5F0F\u662F\u4E00\u79CD\u628A\u524D\u7AEF\u8DEF\u7531\u7684\u8DEF\u5F84\u7528\u4E95\u53F7 # \u62FC\u63A5\u5728\u771F\u5B9E url \u540E\u9762\u7684\u6A21\u5F0F\u3002\u5F53\u4E95\u53F7 # \u540E\u9762\u7684\u8DEF\u5F84\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u6D4F\u89C8\u5668\u5E76\u4E0D\u4F1A\u91CD\u65B0\u53D1\u8D77\u8BF7\u6C42\uFF0C\u800C\u662F\u4F1A\u89E6\u53D1 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/hashchange_event" target="_blank" rel="noopener noreferrer">onhashchange</a> \u4E8B\u4EF6\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4 hash \u503C\u662F\u7528\u6765\u6307\u5BFC\u6D4F\u89C8\u5668\u52A8\u4F5C\u7684\uFF0C\u5BF9\u670D\u52A1\u5668\u6CA1\u6709\u5F71\u54CD\uFF0CHTTP \u8BF7\u6C42\u4E2D\u4E5F\u4E0D\u4F1A\u5305\u62EC hash \u503C\uFF0C\u540C\u65F6\u6BCF\u4E00\u6B21\u6539\u53D8 hash \u503C\uFF0C\u90FD\u4F1A\u5728\u6D4F\u89C8\u5668\u7684\u8BBF\u95EE\u5386\u53F2\u4E2D\u589E\u52A0\u4E00\u4E2A\u8BB0\u5F55\uFF0C\u4F7F\u7528\u201C\u540E\u9000\u201D\u6309\u94AE\uFF0C\u5C31\u53EF\u4EE5\u56DE\u5230\u4E0A\u4E00\u4E2A\u4F4D\u7F6E\u3002\u6240\u4EE5\uFF0Chash \u6A21\u5F0F\u662F\u6839\u636E hash \u503C\u6765\u53D1\u751F\u6539\u53D8\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u503C\uFF0C\u6E32\u67D3\u6307\u5B9A DOM \u4F4D\u7F6E\u7684\u4E0D\u540C\u6570\u636E\u3002</p><p><strong>hash \u7684\u7279\u70B9\uFF1A</strong></p><ul><li>hash \u53D8\u5316\u4F1A\u89E6\u53D1\u7F51\u9875\u8DF3\u8F6C\uFF0C\u5373\u6D4F\u89C8\u5668\u7684\u524D\u8FDB\u548C\u540E\u9000\u3002</li><li>hash \u53EF\u4EE5\u6539\u53D8 url \uFF0C\u4F46\u662F\u4E0D\u4F1A\u89E6\u53D1\u9875\u9762\u91CD\u65B0\u52A0\u8F7D\uFF08hash \u7684\u6539\u53D8\u662F\u8BB0\u5F55\u5728 window.history \u4E2D\uFF09\uFF0C\u5373\u4E0D\u4F1A\u5237\u65B0\u9875\u9762\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6240\u6709\u9875\u9762\u7684\u8DF3\u8F6C\u90FD\u662F\u5728\u5BA2\u6237\u7AEF\u8FDB\u884C\u64CD\u4F5C\u3002\u56E0\u6B64\uFF0C\u8FD9\u5E76\u4E0D\u7B97\u662F\u4E00\u6B21 http \u8BF7\u6C42\uFF0C\u6240\u4EE5\u8FD9\u79CD\u6A21\u5F0F\u4E0D\u5229\u4E8E SEO \u4F18\u5316\u3002hash \u53EA\u80FD\u4FEE\u6539 # \u540E\u9762\u7684\u90E8\u5206\uFF0C\u6240\u4EE5\u53EA\u80FD\u8DF3\u8F6C\u5230\u4E0E\u5F53\u524D url \u540C\u6587\u6863\u7684 url \u3002</li><li>hash \u901A\u8FC7 window.onhashchange \u7684\u65B9\u5F0F\uFF0C\u6765\u76D1\u542C hash \u7684\u6539\u53D8\uFF0C\u501F\u6B64\u5B9E\u73B0\u65E0\u5237\u65B0\u8DF3\u8F6C\u7684\u529F\u80FD\u3002</li><li>hash \u6C38\u8FDC\u4E0D\u4F1A\u63D0\u4EA4\u5230 server \u7AEF\uFF08\u53EF\u4EE5\u7406\u89E3\u4E3A\u53EA\u5728\u524D\u7AEF\u81EA\u751F\u81EA\u706D\uFF09\u3002</li></ul><p><strong>\u4F18\u7F3A\u70B9\uFF1A</strong></p><ul><li>\u2705 \u53EA\u9700\u8981\u524D\u7AEF\u914D\u7F6E\u8DEF\u7531\u8868, \u4E0D\u9700\u8981\u540E\u7AEF\u7684\u53C2\u4E0E</li><li>\u2705 \u517C\u5BB9\u6027\u597D, \u6D4F\u89C8\u5668\u90FD\u80FD\u652F\u6301</li><li>\u2705 hash \u503C\u6539\u53D8\u4E0D\u4F1A\u5411\u540E\u7AEF\u53D1\u9001\u8BF7\u6C42, \u5B8C\u5168\u5C5E\u4E8E\u524D\u7AEF\u8DEF\u7531</li><li>\u274C hash \u503C\u524D\u9762\u9700\u8981\u52A0#, \u4E0D\u7B26\u5408 url \u89C4\u8303,\u4E5F\u4E0D\u7F8E\u89C2</li></ul><h3 id="history-\u6A21\u5F0F" tabindex="-1">- history \u6A21\u5F0F <a class="header-anchor" href="#history-\u6A21\u5F0F" aria-hidden="true">#</a></h3><p><code>history</code> API \u662F H5 \u63D0\u4F9B\u7684\u65B0\u7279\u6027\uFF08<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState" target="_blank" rel="noopener noreferrer">pushState</a>\u3001<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState" target="_blank" rel="noopener noreferrer">replaceState</a>\uFF09\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u76F4\u63A5\u66F4\u6539\u524D\u7AEF\u8DEF\u7531\uFF0C\u5373\u66F4\u65B0\u6D4F\u89C8\u5668 URL \u5730\u5740\u800C\u4E0D\u91CD\u65B0\u53D1\u8D77\u8BF7\u6C42(\u5C06 url \u66FF\u6362\u5E76\u4E14\u4E0D\u5237\u65B0\u9875\u9762)\u3002 \u8FD9\u4E24\u4E2A API \u53EF\u4EE5\u5728\u4E0D\u8FDB\u884C\u5237\u65B0\u7684\u60C5\u51B5\u4E0B\uFF0C\u64CD\u4F5C\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u3002\u552F\u4E00\u4E0D\u540C\u7684\u662F\uFF0C\u524D\u8005\u662F\u65B0\u589E\u4E00\u4E2A\u5386\u53F2\u8BB0\u5F55\uFF0C\u540E\u8005\u662F\u76F4\u63A5\u66FF\u6362\u5F53\u524D\u7684\u5386\u53F2\u8BB0\u5F55</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pushState</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> path)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replaceState</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> path)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528popstate\u4E8B\u4EF6\u6765\u76D1\u542CURL\u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u5BF9\u9875\u9762\u8FDB\u884C\u8DF3\u8F6C\uFF08\u6E32\u67D3\uFF09</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// history.pushState()\u548Chistory.replaceState()\u4E0D\u4F1A\u89E6\u53D1popstate\u4E8B\u4EF6\uFF0C\u8FD9\u65F6\u6211\u4EEC\u9700\u8981\u624B\u52A8\u89E6\u53D1\u9875\u9762\u8DF3\u8F6C\uFF08\u6E32\u67D3\uFF09</span></span>
<span class="line"></span></code></pre></div><p><strong>history \u7684\u7279\u70B9\uFF1A</strong></p><ul><li>\u65B0\u7684 url \u53EF\u4EE5\u662F\u4E0E\u5F53\u524D url \u540C\u6E90\u7684\u4EFB\u610F url \uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E0E\u5F53\u524D url \u4E00\u6837\u7684\u5730\u5740\uFF0C\u4F46\u662F\u8FD9\u6837\u4F1A\u5BFC\u81F4\u7684\u4E00\u4E2A\u95EE\u9898\u662F\uFF0C\u4F1A\u628A\u91CD\u590D\u7684\u8FD9\u4E00\u6B21\u64CD\u4F5C\u8BB0\u5F55\u5230\u6808\u5F53\u4E2D\u3002</li><li>\u901A\u8FC7 history.state \uFF0C\u6DFB\u52A0\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u636E\u5230\u8BB0\u5F55\u4E2D\u3002</li><li>\u53EF\u4EE5\u989D\u5916\u8BBE\u7F6E title \u5C5E\u6027\uFF0C\u4EE5\u4FBF\u540E\u7EED\u4F7F\u7528\u3002</li><li>\u901A\u8FC7 pushState \u3001 replaceState \u6765\u5B9E\u73B0\u65E0\u5237\u65B0\u8DF3\u8F6C\u7684\u529F\u80FD\u3002</li></ul><p><strong>\u4F18\u7F3A\u70B9\uFF1A</strong></p><ul><li>\u2705 \u7B26\u5408 url \u5730\u5740\u89C4\u8303, \u4E0D\u9700\u8981#, \u4F7F\u7528\u8D77\u6765\u6BD4\u8F83\u7F8E\u89C2</li><li>\u2705 history \u4FEE\u6539\u7684 url \u53EF\u4EE5\u662F\u540C\u57DF\u7684\u4EFB\u610F url\uFF0Chash \u53EA\u80FD\u662F\u540C\u6587\u6863\u7684 url</li><li>\u274C \u517C\u5BB9\u6027\u4E0D\u5982 hash\uFF0C\u4E14\u9700\u8981\u670D\u52A1\u7AEF\u652F\u6301\u91CD\u5B9A\u5411\uFF0C\u5426\u5219\u4E00\u5237\u65B0\u9875\u9762\u5C31 404 \u4E86</li><li>\u274C \u5229\u7528\u4E86 HTML5 History \u5BF9\u8C61\u4E2D\u65B0\u589E\u7684 pushState() \u548C replaceState() \u65B9\u6CD5,\u9700\u8981\u7279\u5B9A\u6D4F\u89C8\u5668\u7684\u652F\u6301</li></ul><h2 id="v-if-v-for" tabindex="-1">v-if \u548C v-for \u4E00\u8D77\u4F7F\u7528\uFF1F <a class="header-anchor" href="#v-if-v-for" aria-hidden="true">#</a></h2><p>\u5728\u4F7F\u7528\u4E4B\u524D\uFF0C\u9996\u5148\u6211\u4EEC\u8981\u77E5\u9053\u8FD9\u4E24\u4E2A <strong>\u6307\u4EE4</strong> \u7684\u4F5C\u7528\u3002</p><p><code>v-for</code> \u57FA\u4E8E\u539F\u59CB\u6570\u636E\u591A\u6B21\u6E32\u67D3\u5143\u7D20\u6216\u6A21\u677F\u5757\u3002</p><p>\u671F\u671B\u7684\u7ED1\u5B9A\u503C\u7C7B\u578B\uFF1A<code>Array | Object | number | string | Iterable</code>\u3002</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item in items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  {{</span><span style="color:#A6ACCD;"> item.text </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/div&gt;</span></span>
<span class="line"></span></code></pre></div><p><code>v-if</code> \u57FA\u4E8E\u8868\u8FBE\u5F0F\u503C\u7684\u771F\u5047\u6027\uFF0C\u6765\u6761\u4EF6\u6027\u5730\u6E32\u67D3\u5143\u7D20\u6216\u8005\u6A21\u677F\u7247\u6BB5\u3002</p><p>\u5F53 v-if \u5143\u7D20\u88AB\u89E6\u53D1\uFF0C\u5143\u7D20\u53CA\u5176\u6240\u5305\u542B\u7684\u6307\u4EE4/\u7EC4\u4EF6\u90FD\u4F1A\u9500\u6BC1\u548C\u91CD\u6784\u3002\u5982\u679C\u521D\u59CB\u6761\u4EF6\u662F\u5047\uFF0C\u90A3\u4E48\u5176\u5185\u90E8\u7684\u5185\u5BB9\u6839\u672C\u90FD\u4E0D\u4F1A\u88AB\u6E32\u67D3\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5143\u7D20</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4F18\u5148\u7EA7\u5BF9\u6BD4" tabindex="-1">\u4F18\u5148\u7EA7\u5BF9\u6BD4 <a class="header-anchor" href="#\u4F18\u5148\u7EA7\u5BF9\u6BD4" aria-hidden="true">#</a></h3><ul><li>\u5728 2.x \u7248\u672C\u4E2D\u540C\u65F6\u4F7F\u7528\u65F6\uFF0C <code>v-for</code>\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E<code>v-if</code>\u3002</li><li>\u5728 3.x \u7248\u672C\u4E2D\u540C\u65F6\u4F7F\u7528\u65F6\uFF0C <code>v-if</code>\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E<code>v-for</code>\u3002</li></ul><div class="warning custom-block"><p class="custom-block-title">\u8B66\u544A</p><p>\u540C\u65F6\u4F7F\u7528 <code>v-if</code> \u548C <code>v-for</code> \u662F\u4E0D\u63A8\u8350\u7684\uFF0C\u56E0\u4E3A\u8FD9\u6837\u4E8C\u8005\u7684\u4F18\u5148\u7EA7\u4E0D\u660E\u663E\u3002\u66F4\u591A\u7EC6\u8282\u53EF\u67E5\u9605Vue\u5B98\u65B9\u98CE\u683C\u6307\u5357\uFF1A<a href="https://v2.cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%BF%85%E8%A6%81" target="_blank" rel="noopener noreferrer">Vue2.x\u98CE\u683C\u6307\u5357</a>\u3001<a href="https://cn.vuejs.org/style-guide/" target="_blank" rel="noopener noreferrer">Vue3.x\u98CE\u683C\u6307\u5357</a>\u3002</p></div><h3 id="vue-2-x-\u4E2D" tabindex="-1">vue 2.x \u4E2D <a class="header-anchor" href="#vue-2-x-\u4E2D" aria-hidden="true">#</a></h3><p>\u5F53\u5B83\u4EEC\u5904\u4E8E\u540C\u4E00\u8282\u70B9\uFF0C<code>v-for</code> \u7684\u4F18\u5148\u7EA7\u6BD4 v-if \u66F4\u9AD8\uFF0C\u8FD9\u610F\u5473\u7740 v-if \u5C06\u5206\u522B\u91CD\u590D\u8FD0\u884C\u4E8E\u6BCF\u4E2A <code>v-for</code> \u5FAA\u73AF\u4E2D\u3002</p><p>\u6BCF\u6B21\u6E32\u67D3\u90FD\u4F1A\u5148\u5FAA\u73AF\u518D\u8FDB\u884C\u6761\u4EF6\u5224\u65AD\uFF0C\u53EF\u80FD\u4F1A\u5E26\u6765\u6027\u80FD\u65B9\u9762\u7684\u6D6A\u8D39\u3002</p><p>\u5F53\u4F60\u53EA\u60F3\u4E3A\u90E8\u5206\u9879\u6E32\u67D3\u8282\u70B9\u65F6\uFF0C\u8FD9\u79CD\u4F18\u5148\u7EA7\u7684\u673A\u5236\u4F1A\u5341\u5206\u6709\u7528\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">todo in todos</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">!todo.isComplete</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> todo </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u5C06\u53EA\u6E32\u67D3\u672A\u5B8C\u6210\u7684 todo\u3002</p><p>\u4E3A\u4E86\u907F\u514D\u6E32\u67D3\u672C\u5E94\u8BE5\u88AB\u9690\u85CF\u7684\u5217\u8868\u6216\u4F60\u7684\u76EE\u7684\u662F\u6709\u6761\u4EF6\u5730\u8DF3\u8FC7\u5FAA\u73AF\u7684\u6267\u884C\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5C06 <code>v-if</code> \u7F6E\u4E8E\u5916\u5C42\u5143\u7D20 (\u6216 <code>&lt;template&gt;</code>) \u4E0A\u3002\u5982\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">todos.length</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">todo in todos</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> todo </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-else</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">No todos left!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="vue-3-x-\u4E2D" tabindex="-1">vue 3.x \u4E2D <a class="header-anchor" href="#vue-3-x-\u4E2D" aria-hidden="true">#</a></h3><p>\u5F53\u5B83\u4EEC\u540C\u65F6\u5B58\u5728\u4E8E\u4E00\u4E2A\u8282\u70B9\u4E0A\u65F6\uFF0C<code>v-if</code> \u6BD4 <code>v-for</code> \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\u3002\u8FD9\u610F\u5473\u7740 <code>v-if</code> \u7684\u6761\u4EF6\u5C06\u65E0\u6CD5\u8BBF\u95EE\u5230 <code>v-for</code> \u4F5C\u7528\u57DF\u5185\u5B9A\u4E49\u7684\u53D8\u91CF\u522B\u540D\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u8FD9\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF0C\u56E0\u4E3A\u5C5E\u6027 todo \u6B64\u65F6\u6CA1\u6709\u5728\u8BE5\u5B9E\u4F8B\u4E0A\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">todo in todos</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">!todo.isComplete</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> todo.name </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u5916\u65B0\u5305\u88C5\u4E00\u5C42 <code>&lt;template&gt;</code> \u518D\u5728\u5176\u4E0A\u4F7F\u7528 <code>v-for</code> \u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898 (\u8FD9\u4E5F\u66F4\u52A0\u660E\u663E\u6613\u8BFB)\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">todo in todos</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">!todo.isComplete</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> todo.name </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,64),r=[t];function c(i,D,y,F,d,h){return l(),a("div",null,r)}var A=s(p,[["render",c]]);export{v as __pageData,A as default};
