import{h as O}from"./DvDH6DOc.js";import{D as $,ai as j,aj as x,ak as n}from"./DpwgIS8s.js";import{u as C}from"./Bsrbc0Pe.js";function z(s,r,c){const[t={},u]=typeof r=="string"?[{},r]:[r,c],e=$(()=>n(s)),o=t.key||O([u,typeof e.value=="string"?e.value:"",...E(t)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const i=o===u?"$f"+o:o;if(!t.baseURL&&typeof e.value=="string"&&e.value[0]==="/"&&e.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:y,lazy:d,default:b,transform:g,pick:w,watch:h,immediate:v,getCachedData:k,deep:D,dedupe:_,...T}=t,l=j({...x,...T,cache:typeof t.cache=="boolean"?void 0:t.cache}),F={server:y,lazy:d,default:b,transform:g,pick:w,immediate:v,getCachedData:k,deep:D,dedupe:_,watch:h===!1?[]:[l,e,...h||[]]};let a;return C(i,()=>{var p;(p=a==null?void 0:a.abort)==null||p.call(a),a=typeof AbortController<"u"?new AbortController:{};const m=n(t.timeout);let f;return m&&(f=setTimeout(()=>a.abort(),m),a.signal.onabort=()=>clearTimeout(f)),(t.$fetch||globalThis.$fetch)(e.value,{signal:a.signal,...l}).finally(()=>{clearTimeout(f)})},F)}function E(s){var c;const r=[((c=n(s.method))==null?void 0:c.toUpperCase())||"GET",n(s.baseURL)];for(const t of[s.params||s.query]){const u=n(t);if(!u)continue;const e={};for(const[o,i]of Object.entries(u))e[n(o)]=n(i);r.push(e)}return r}export{z as u};