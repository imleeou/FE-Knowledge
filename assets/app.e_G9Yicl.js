import{v as s,aA as i,aB as u,aC as c,aD as l,aE as f,aF as d,aG as m,aH as h,aI as A,aJ as g,X as v,d as P,u as C,j as y,z as w,aK as E,aL as _,aM as D,aN as R}from"./chunks/framework.QnHPwK53.js";import{t as b}from"./chunks/theme.PWsHNYD8.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=p(b),L=P({name:"VitePressApp",setup(){const{site:e}=C();return y(()=>{w(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&E(),_(),D(),o.setup&&o.setup(),()=>R(o.Layout)}});async function j(){const e=O(),a=F();a.provide(u,e);const t=c(e.route);return a.provide(l,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function F(){return h(L)}function O(){let e=s,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),__vite__mapDeps([]))),s&&(e=!1),r},o.NotFound)}s&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{j as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}