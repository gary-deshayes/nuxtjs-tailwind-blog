import{_}from"./6tUeOeyD.js";import{u as h,f as i,c as n,a,t as g,g as c,F as x,r as f,o as r,h as w}from"./BCTRHYcU.js";import{u as l}from"./DyhDi7yb.js";import{u as y}from"./DdergCIc.js";import{s as k}from"./C8KgLjba.js";import"./Ci8N0jCa.js";import"./BQ_hl5s2.js";import"./Cm9zs_d9.js";import"./DvDH6DOc.js";import"./DiRkvZAC.js";const v={class:"pt-16 pb-9 sm:pb-16 sm:text-center"},b={class:"mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200"},B=a("p",{class:"text-lg text-slate-700 dark:text-slate-400"}," All the latest Tailwind CSS news, straight from the team. ",-1),S={class:"space-y-16 mx-auto max-w-7xl"},E={__name:"[slug]",async setup($){let t,s;const m=h(),{data:p}=([t,s]=i(()=>l("https://gary-deshayes.com/wp-json/wp/v2/categories",{query:{slug:m.params.slug}},"$jWflMRhKR0")),t=await t,s(),t);let o=p.value[0];const{data:d}=([t,s]=i(()=>l("https://gary-deshayes.com/wp-json/wp/v2/posts",{query:{categories:[o.id]}},"$GiB3eKWn1Z")),t=await t,s(),t);return y({title:`${k.title} | ${o.name}`,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Its Solaiman's Pen and Paper to write "}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]}),(j,F)=>{const u=_;return r(),n("div",null,[a("header",v,[a("h1",b,g(c(o).name),1),B]),a("div",S,[(r(!0),n(x,null,f(c(d),e=>(r(),w(u,{key:e.id,title:e.title.rendered,description:e.excerpt.rendered,slug:e.slug,date:e.date},null,8,["title","description","slug","date"]))),128))])])}}};export{E as default};
