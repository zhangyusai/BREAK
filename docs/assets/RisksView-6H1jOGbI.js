import{A as e,R as r}from"./index-U5h1j3Dk.js";/* empty css                        *//* empty css                    */import{B as l}from"./BREAK-BzhfOad0.js";import{u as a,v as s,o as t}from"./element-plus-OKfYCf4W.js";import{d as i,b as o,q as n,t as u,Z as p,l as d,W as w,u as K,j as y,F as c,m as k,a7 as m,ah as f,V as b}from"./vue-n1z6Fgex.js";import"./vue-router-Nb642-En.js";import"./relation-graph-qAjSoXIC.js";import"./vue-i18n-kmt_8FQk.js";const $=["onClick"],v=i({__name:"RisksView",setup(i){const v=o(!1),h=o("");let j=Object.keys(l.risks).map((e=>({...l.risks[e],rKey:e}))),_=o(!1),x=o(""),R=()=>window.innerHeight;return(l,i)=>{const o=s,A=t,B=a;return k(),n(c,null,[u("h3",null,p(l.$t("menu.risks")),1),d(B,{height:K(R)()-200,"scrollbar-always-on":!0,data:K(j),stripe:"",border:""},{default:w((()=>[d(o,{prop:"rKey",width:"120px",label:l.$t("riskKey")},{default:w((e=>[u("a",{onClick:r=>(y(x)?x.value=e.row.rKey:x=e.row.rKey)&&(y(_)?_.value=!0:_=!0),href:"javascript:void(0);"},p(e.row.rKey),9,$)])),_:1},8,["label"]),d(o,{prop:"title",width:"150px",label:l.$t("riskTitle")},{default:w((e=>[m(p(e.row.rKey?l.$t(`BREAK.risks.${e.row.rKey}.title`):""),1)])),_:1},8,["label"]),d(o,{prop:"definition",label:l.$t("riskDefinition")},{default:w((e=>[m(p(e.row.rKey?l.$t(`BREAK.risks.${e.row.rKey}.definition`):""),1)])),_:1},8,["label"]),d(o,{prop:"description",label:l.$t("riskDescription")},{default:w((e=>[m(p(e.row.rKey?l.$t(`BREAK.risks.${e.row.rKey}.description`):""),1)])),_:1},8,["label"]),d(o,{prop:"complexity",width:"100px",label:l.$t("riskComplexity")},{default:w((e=>[m(p(e.row.rKey?l.$t(`BREAK.risks.${e.row.rKey}.complexity`):""),1)])),_:1},8,["label"]),d(o,{prop:"influence",label:l.$t("riskInfluence")},{default:w((e=>[m(p(e.row.rKey?l.$t(`BREAK.risks.${e.row.rKey}.influence`):""),1)])),_:1},8,["label"]),d(o,{label:l.$t("avoidance")},{default:w((e=>[(k(!0),n(c,null,f(e.row.avoidances,(e=>(k(),b(A,{size:"small",key:e,class:"relational-link",onClick:r=>{h.value=e,v.value=!0},round:""},{default:w((()=>[m(p(e+": "+l.$t(`BREAK.avoidances.${e}.title`)),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["label"])])),_:1},8,["height","data"]),d(e,{onDrawerClose:i[0]||(i[0]=e=>v.value=!1),drawer:v.value,aKey:h.value},null,8,["drawer","aKey"]),d(r,{onDrawerClose:i[1]||(i[1]=e=>(y(_)?_.value=!1:_=!1)&&(y(x)?x.value="":x="")),drawer:K(_),rKey:K(x)},null,8,["drawer","rKey"])],64)}}});export{v as default};
