import{_ as y}from"./BQ_hl5s2.js";import w from"./C0v7DPls.js";import{u as k,f as v,c as b,a as s,t as a,g as e,b as p,w as D,o as C}from"./BCTRHYcU.js";import{u as B}from"./DiRkvZAC.js";import{q as N}from"./D308mZGp.js";import{u as S}from"./DdergCIc.js";import{a as n}from"./B6Zk_3Fp.js";import"./Cm9zs_d9.js";import"./BLtFp6-z.js";import"./C-v3KzvZ.js";import"./B44eZuTa.js";import"./DvDH6DOc.js";const q={class:"px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10"},A={class:"text-center font-bold my-5 text-indigo-500"},R={class:"text-4xl text-gray-700 font-extrabold mb-10 text-center"},V={class:"flex items-center font-medium mt-6 sm:mx-3 justify-center"},$={class:"text-slate-900 dark:text-slate-200"},j=["href"],z=["src"],E=s("p",null,"No content found.",-1),W={__name:"[slug]",async setup(L){var m,i;let o,r;const x=k(),{data:t}=([o,r]=v(()=>B("home",()=>N("/articles").where({slug:x.params.slug}).findOne())),o=await o,r(),o),f=c=>{const l={year:"numeric",month:"long",day:"numeric"};return new Date(c).toLocaleDateString("en",l)};return S({title:((m=t==null?void 0:t.value)==null?void 0:m.title)??"",meta:[{hid:"description",name:"description",content:(i=t==null?void 0:t.value)==null?void 0:i.description}]}),(c,l)=>{var _,u,d;const h=y,g=w;return C(),b("div",q,[s("p",A,a(f((_=e(t))==null?void 0:_.date)),1),s("h1",R,a((u=e(t))==null?void 0:u.title),1),s("div",V,[p(h,{src:e(n).author_image,loading:"lazy",alt:"",class:"mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"},null,8,["src"]),s("div",null,[s("div",$,a(e(n).name),1),s("a",{target:"_blank",href:`https://twitter.com/${e(n).socials.twitter}`,class:"text-sky-500 hover:text-sky-600 dark:text-sky-400"}," @"+a(e(n).socials.twitter),9,j)])]),s("img",{class:"mx-auto w-4/5 my-10 rounded-md drop-shadow-sm",src:(d=e(t))==null?void 0:d.image},null,8,z),p(g,{class:"prose min-w-full p-10 mx-auto",value:e(t)},{empty:D(()=>[E]),_:1},8,["value"])])}}};export{W as default};