import{_ as e}from"./index-jRQnJZQY.js";import{B as a}from"./BREAK-P0hK1pwn.js";import{p as t,t as l,e as s,l as i,s as o,n as r,o as n}from"./element-plus-atOn5eVu.js";/* empty css                        */import{a as d}from"./vue-router-Nb642-En.js";import{d as c,q as u,t as v,Z as y,l as $,W as h,F as f,ah as m,u as p,aa as K,m as w,V as b,a7 as _,S as g}from"./vue-n1z6Fgex.js";import"./vue-i18n-kmt_8FQk.js";const k={class:"avoidance-category-title"},E={class:"avoidance-category-description"},j=["id"],A={class:"reference-list"},B=["href"],R=e(c({__name:"AvoidancesView",setup(e){let c=Object.keys(a.avoidanceCategories),R=Object();c.forEach((e=>{R[e]=Array(),Object.keys(a.avoidances).forEach((t=>{let l=a.avoidances[t];if(e!==l.category)return;let s={...l,aKey:t};R[e].push(s)}))}));let C=()=>window.innerHeight;const O=e=>{let t={};return Object.keys(a.avoidances).forEach((l=>{a.avoidances[l].category===e&&(t[l]=a.avoidances[l])})),t},x=d(),I=({row:e})=>x.hash.split("#")[1]===e.title?"anchor-row":"";let V=24,q=(e,a)=>{let t=Math.round(e/a*24);return V=V<=0?24:V,t=t>V?V:t,V-=t,t};return(e,d)=>{const c=r,x=K("router-link"),V=n,z=t;return w(),u(f,null,[v("h3",null,y(e.$t("menu.avoidances")),1),$(z,{gutter:20},{default:h((()=>[(w(!0),u(f,null,m(p(a).avoidanceCategories,((t,l)=>(w(),b(V,{md:p(q)(Object.keys(p(R)[l]).length,Object.keys(p(a).avoidances).length),key:l},{default:h((()=>[v("h4",null,y(e.$t(`BREAK.avoidanceCategories.${l}.title`)),1),v("div",null,[(w(!0),u(f,null,m(O(l),((a,t)=>(w(),b(x,{key:t,title:t+":"+a.title,class:"router-link",to:{path:"/avoidances",hash:"#"+a.title}},{default:h((()=>[$(c,{size:"small",round:"",class:"ml-2"},{default:h((()=>[_(y(t)+":"+y(e.$t(`BREAK.avoidances.${t}.title`)),1)])),_:2},1024)])),_:2},1032,["title","to"])))),128))])])),_:2},1032,["md"])))),128))])),_:1}),(w(!0),u(f,null,m(p(R),((t,r)=>(w(),u("div",{key:r},[v("div",null,[v("h4",k,y(e.$t(`BREAK.avoidanceCategories.${r}.title`))+" ("+y(p(a).avoidanceCategories[r].keyword)+") ",1),v("div",E,y(e.$t(`BREAK.avoidanceCategories.${r}.description`)),1)]),$(p(o),{sheight:p(C)()-200,data:p(R)[r],"row-class-name":I,stripe:"",border:""},{default:h((()=>[$(p(l),{prop:"aKey",width:"110px",label:e.$t("ID")},null,8,["label"]),$(p(l),{width:"150px",label:e.$t("title")},{header:h((()=>[_(y(e.$t("title")),1)])),default:h((a=>[v("a",{class:"avoidance_anchor",id:a.row.title},null,8,j),_(" "+y(a.row.aKey?e.$t(`BREAK.avoidances.${a.row.aKey}.title`):""),1)])),_:1},8,["label"]),$(p(l),{label:e.$t("summary")},{default:h((a=>[_(y(a.row.aKey?e.$t(`BREAK.avoidances.${a.row.aKey}.summary`):""),1)])),_:1},8,["label"]),$(p(l),{label:e.$t("description")},{default:h((a=>[_(y(a.row.aKey?e.$t(`BREAK.avoidances.${a.row.aKey}.description`):""),1)])),_:1},8,["label"]),$(p(l),{label:e.$t("limitation")},{default:h((a=>[_(y(a.row.aKey?e.$t(`BREAK.avoidances.${a.row.aKey}.limitation`):""),1)])),_:1},8,["label"]),$(p(l),{width:"250px",label:e.$t("references")},{default:h((a=>[v("ul",A,[(w(!0),u(f,null,m(a.row.references,((t,l)=>(w(),u("li",{key:l},[a.row.aKey?(w(),u("a",{key:0,href:t.link,target:"_blank"},[$(p(s),null,{default:h((()=>[$(p(i))])),_:1}),_(y(e.$t(`BREAK.avoidances.${a.row.aKey}.references[${l}].title`)),1)],8,B)):g("",!0),_(": "+y(e.$t(`BREAK.avoidances.${a.row.aKey}.references[${l}].description`)),1)])))),128))])])),_:1},8,["label"])])),_:2},1032,["sheight","data"])])))),128))],64)}}}),[["__scopeId","data-v-6966aade"]]);export{R as default};
