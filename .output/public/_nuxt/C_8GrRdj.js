import{_ as m}from"./6tUeOeyD.js";import{u as c}from"./DyhDi7yb.js";import{u as p}from"./DiRkvZAC.js";import{q as d}from"./D308mZGp.js";import{u}from"./DdergCIc.js";import{s as _}from"./C8KgLjba.js";import{f as i,c as n,a,F as f,r as h,g,o,h as x}from"./BCTRHYcU.js";import"./Ci8N0jCa.js";import"./BQ_hl5s2.js";import"./Cm9zs_d9.js";import"./DvDH6DOc.js";import"./B44eZuTa.js";const w=a("header",{class:"pt-16 pb-9 sm:pb-16 sm:text-center"},[a("h1",{class:"mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200"}," Blog "),a("p",{class:"text-lg text-slate-700 dark:text-slate-400"}," All the latest Tailwind CSS news, straight from the team. ")],-1),y={class:"space-y-16 mx-auto max-w-7xl"},E={__name:"index",async setup(k){let t,s;const{data:r}=([t,s]=i(()=>c("https://gary-deshayes.com/wp-json/wp/v2/posts?_embed",{query:{page:10}},"$ansXcfZp0C")),t=await t,s(),t);return console.log(r),[t,s]=i(()=>p("home",()=>d("/articles").only(["title","description","image","img","slug","tags","author","date","draft"]).sort({date:1}).find())),t=await t,s(),u({title:`${_.title} | Blogs`,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Its Solaiman's Pen and Paper to write "}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]}),(b,v)=>{const l=m;return o(),n("div",null,[w,a("div",y,[(o(!0),n(f,null,h(g(r),e=>(o(),x(l,{key:e.id,title:e.title.rendered,description:e.excerpt.rendered,slug:e.slug,date:e.date},null,8,["title","description","slug","date"]))),128))])])}}};export{E as default};