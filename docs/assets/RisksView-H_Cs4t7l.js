import{A as e,R as r}from"./index-dfpmVScU.js";/* empty css                        *//* empty css                    */import{B as l}from"./BREAK-weYdBzlg.js";import{w as a,x as s,o as i}from"./element-plus-Bf81XIHG.js";import{d as t,b as o,q as n,t as p,Z as u,l as d,W as K,u as w,j as c,F as y,m,a7 as k,ai as f,V as b}from"./vue-N2jzm6-y.js";import"./vue-router-ODEKHbYz.js";import"./relation-graph-QJmgRCL_.js";import"./vue-i18n-QOrhlRdo.js";import"./BREAK-Risks-LCDxJxth.js";import"./BREAK-Avoidances-Wmk5ZIWy.js";const $=["onClick"],v=t({__name:"RisksView",setup(t){const v=o(!1),j=o("");let h=Object.keys(l.risks).map((e=>({...l.risks[e],rKey:e}))),R=o(!1),A=o(""),_=()=>window.innerHeight;return(l,t)=>{const o=s,x=i,B=a;return m(),n(y,null,[p("h3",null,u(l.$t("menu.risks")),1),d(B,{height:w(_)()-200,"scrollbar-always-on":!0,data:w(h),stripe:"",border:""},{default:K((()=>[d(o,{prop:"rKey",width:"120px",label:l.$t("riskKey")},{default:K((e=>[p("a",{onClick:r=>(c(A)?A.value=e.row.rKey:A=e.row.rKey)&&(c(R)?R.value=!0:R=!0),href:"javascript:void(0);"},u(e.row.rKey),9,$)])),_:1},8,["label"]),d(o,{prop:"title",width:"150px",label:l.$t("riskTitle")},{default:K((e=>[k(u(e.row.rKey?l.$t(`BREAK.risks.${e.row.rKey}.title`):""),1)])),_:1},8,["label"]),d(o,{prop:"definition",label:l.$t("riskDefinition")},{default:K((e=>[k(u(e.row.rKey?l.$t(`BREAK.risks.${e.row.rKey}.definition`):""),1)])),_:1},8,["label"]),d(o,{prop:"description",label:l.$t("riskDescription")},{default:K((e=>[k(u(e.row.rKey?l.$t(`BREAK.risks.${e.row.rKey}.description`):""),1)])),_:1},8,["label"]),d(o,{prop:"complexity",width:"100px",label:l.$t("riskComplexity")},{default:K((e=>[k(u(e.row.rKey?l.$t(`BREAK.risks.${e.row.rKey}.complexity`):""),1)])),_:1},8,["label"]),d(o,{prop:"influence",label:l.$t("riskInfluence")},{default:K((e=>[k(u(e.row.rKey?l.$t(`BREAK.risks.${e.row.rKey}.influence`):""),1)])),_:1},8,["label"]),d(o,{label:l.$t("avoidance")},{default:K((e=>[(m(!0),n(y,null,f(e.row.avoidances,(e=>(m(),b(x,{size:"small",key:e,class:"relational-link",onClick:r=>{j.value=e,v.value=!0},round:""},{default:K((()=>[k(u(e+": "+l.$t(`BREAK.avoidances.${e}.title`)),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["label"])])),_:1},8,["height","data"]),d(e,{onDrawerClose:t[0]||(t[0]=e=>v.value=!1),drawer:v.value,aKey:j.value},null,8,["drawer","aKey"]),d(r,{onDrawerClose:t[1]||(t[1]=e=>(c(R)?R.value=!1:R=!1)&&(c(A)?A.value="":A="")),drawer:w(R),rKey:w(A)},null,8,["drawer","rKey"])],64)}}});export{v as default};
