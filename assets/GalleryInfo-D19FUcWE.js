import{s as r,e as n,v as c,r as i,o as l,c as u,w as p,a as d}from"./index-BETj9dI6.js";import{s as m}from"./services-DW624Cxp.js";import{_}from"./PolaroidImage-DPNOXDPd.js";const x={__name:"GalleryInfo",props:{uuid:String},setup(o){const s=o;r();const e=n({src:"",title:"",description:""});return c(async()=>{const t=await m.getGalleryInfo(s.uuid);console.log(t),e.value=t}),(t,f)=>{const a=i("v-sheet");return l(),u(a,{class:"pa-8 text-center mx-auto",elevation:"4","max-width":"500",rounded:"lg",width:"100%"},{default:p(()=>[d(_,{imgSrc:e.value.src,title:e.value.title,description:e.value.description},null,8,["imgSrc","title","description"])]),_:1})}}};export{x as default};
