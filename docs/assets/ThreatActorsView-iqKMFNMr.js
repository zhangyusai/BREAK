import{R as a,a as e,_ as l}from"./index-5bB20tbO.js";/* empty css                        *//* empty css                    */import{B as t}from"./BREAK-Ye_sezs9.js";import{u as s,n as r,v as o,o as i,e as n}from"./element-plus-svN-En_q.js";import{a as u}from"./vue-router-Nb642-En.js";import{d as c,b as d,q as k,t as p,Z as h,l as b,W as m,u as w,F as f,m as v,a7 as y,ah as $,V as K,S as _}from"./vue-n1z6Fgex.js";import"./relation-graph-zKQxcUJx.js";import"./vue-i18n-kmt_8FQk.js";const A=["id"],j={class:"reference-list"},C=["href"],R=l(c({__name:"ThreatActorsView",setup(l){const c=u(),R=d(!1),T=d(""),B=d(!1),g=d("");let E=Object.keys(t.threatActors).map((a=>({taKey:a,...t.threatActors[a]})));const x=({row:a})=>c.hash.split("#")[1]===a.taKey?"anchor-row":"";return(l,t)=>{const u=o,d=i,z=n,D=s;return v(),k(f,null,[p("h3",null,h(l.$t("threatActors")),1),b(D,{height:c.hash.split("#")[1]?"unset":window.innerHeight-200,"scrollbar-always-on":!0,data:w(E),"row-class-name":x,border:"",stripe:""},{default:m((()=>[b(u,{prop:"taKey",width:"120",label:l.$t("ID")},{default:m((a=>[p("a",{id:a.row.taKey,class:"threat-actor-anchor"},null,8,A),y(" "+h(a.row.taKey),1)])),_:1},8,["label"]),b(u,{prop:"title",width:"150",label:l.$t("title")},null,8,["label"]),b(u,{prop:"description",label:l.$t("description")},null,8,["label"]),b(u,{label:l.$t("buildAttackTools")},{default:m((a=>[(v(!0),k(f,null,$(a.row.buildAttackTools,(a=>(v(),K(d,{size:"small",key:a,onClick:e=>(T.value=a)&&(R.value=!0),class:"relational-link",round:""},{default:m((()=>[y(h(a+": "+l.$t(`BREAK.attackTools.${a}.title`)),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["label"]),b(u,{label:l.$t("useAttackTools")},{default:m((a=>[(v(!0),k(f,null,$(a.row.useAttackTools,(a=>(v(),K(d,{size:"small",key:a,onClick:e=>(T.value=a)&&(R.value=!0),class:"relational-link",round:""},{default:m((()=>[y(h(a+": "+l.$t(`BREAK.attackTools.${a}.title`)),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["label"]),b(u,{label:l.$t("risksMaker")},{default:m((a=>[(v(!0),k(f,null,$(a.row.makeRisks,(a=>(v(),K(d,{size:"small",key:a,onClick:e=>(g.value=a)&&(B.value=!0),class:"relational-link",round:""},{default:m((()=>[y(h(a+": "+l.$t(`BREAK.risks.${a}.title`)),1)])),_:2},1032,["onClick"])))),128))])),_:1},8,["label"]),b(u,{width:"250px",label:l.$t("references")},{default:m((a=>[p("ul",j,[(v(!0),k(f,null,$(a.row.references,((e,t)=>(v(),k("li",{key:t},[a.row.taKey?(v(),k("a",{key:0,href:e.link,target:"_blank"},[b(z,null,{default:m((()=>[b(w(r))])),_:1}),y(h(l.$t(`BREAK.threatActors.${a.row.taKey}.references[${t}].title`)),1)],8,C)):_("",!0)])))),128))])])),_:1},8,["label"])])),_:1},8,["height","data"]),b(a,{onDrawerClose:t[0]||(t[0]=a=>(B.value=!1)&&(g.value="")),drawer:B.value,rKey:g.value},null,8,["drawer","rKey"]),b(e,{onDrawerClose:t[1]||(t[1]=a=>R.value=!1),drawer:R.value,atKey:T.value},null,8,["drawer","atKey"])],64)}}}),[["__scopeId","data-v-b8ba1693"]]);export{R as default};
