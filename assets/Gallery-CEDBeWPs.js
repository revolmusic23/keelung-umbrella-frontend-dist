import{r as s,o as _,c as m,w as o,a as r,f as x,F as G,g as L,p as h,q as k,_ as N,m as S,d as g,t as v,l as b,e as f}from"./index-BETj9dI6.js";import{s as w}from"./services-DW624Cxp.js";const B={__name:"BaseGridLayout",props:{cards:{type:Array,requited:!0},containerClass:{type:String,default:"pa-0"},xsCols:{type:[Number,String],default:12},smCols:{type:[Number,String],default:6},mdCols:{type:[Number,String],default:4},lgCols:{type:[Number,String],default:3}},setup(e){return(c,l)=>{const n=s("v-col"),i=s("v-row"),u=s("v-container");return _(),m(u,{class:k(e.containerClass)},{default:o(()=>[r(i,null,{default:o(()=>[(_(!0),x(G,null,L(e.cards,(t,a)=>(_(),m(n,{key:a,cols:e.xsCols,sm:e.smCols,md:e.mdCols,lg:e.lgCols},{default:o(()=>[h(c.$slots,"card",{item:t,index:a})]),_:2},1032,["cols","sm","md","lg"]))),128))]),_:3})]),_:3},8,["class"])}}},I={__name:"GalleryGrid",props:{cards:{type:Array}},emits:["navigate-to-gallery-info"],setup(e,{emit:c}){const l=e,n=c,i=S(()=>l.cards);return(u,t)=>{const a=s("v-img"),p=s("v-card-title"),y=s("v-card-text"),C=s("v-card");return _(),m(B,{cards:i.value},{card:o(({item:d})=>[r(C,{class:"pa-4",border:"",outlined:"",onClick:()=>n("navigate-to-gallery-info",d.uuid)},{default:o(()=>[r(a,{"aspect-ratio":"1/1",src:d.images[0].image_path,cover:"",class:"img-container",style:{"aspect-ratio":"1/1"}},null,8,["src"]),r(p,null,{default:o(()=>[g(v(d.title),1)]),_:2},1024),r(y,{class:""},{default:o(()=>[g(v(d.content),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:1},8,["cards"])}}},$=N(I,[["__scopeId","data-v-689f49d3"]]),A={__name:"Gallery",setup(e){const c=b(),l=f({current_page:0,last_page:1/0}),n=f([]),i=async({done:t})=>{let a;[a,l.value]=await w.getGalleryList(),n.value.push(...a),console.log("galleryList:",n.value),console.log("pagination:",l.value),l.value.current_page<l.value.last_page?t("ok"):t("empty")},u=t=>{console.log(t),c.push(`/gallery/${t}`)};return(t,a)=>{const p=s("v-infinite-scroll");return _(),m(p,{onLoad:i,color:"orange"},{default:o(()=>[r($,{cards:n.value,onNavigateToGalleryInfo:u},null,8,["cards"])]),_:1})}}};export{A as default};
