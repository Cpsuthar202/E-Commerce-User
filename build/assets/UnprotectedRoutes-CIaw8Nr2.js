import{X as me,b as g,Y as ue,_ as j,Z as be,h as p,d as ee,j as a,f as ae,k as te,a as re,s as M,m as se,g as ge,$ as A,a0 as F,a1 as fe,a2 as pe,a3 as je,c as _,J as h,O as ve,G as ne,a4 as ie,a5 as W,a6 as oe,a7 as le,W as R,T as l,a8 as ye,R as Ce,Q as k,a9 as ke,aa as O,S as Re,U as C,V as we}from"./index-xWL4Lm2G.js";import{C as Se,s as ce,b as Pe,c as _e,p as P,P as T,I,a as H,R as G,W as $e,S as De,h as z,d as Le,e as Ie,H as Me}from"./Home-B_K6_ZKf.js";import{g as We,s as Be,u as ze,S as D,B as Q}from"./Stack-CMtFuqYK.js";import{D as L}from"./Divider-Bop3LNjI.js";function Ne(r,t,s,e,d){const[i,n]=g.useState(()=>d&&s?s(r).matches:e?e(r).matches:t);return ue(()=>{let o=!0;if(!s)return;const c=s(r),u=()=>{o&&n(c.matches)};return u(),c.addListener(u),()=>{o=!1,c.removeListener(u)}},[r,s]),i}const de=g.useSyncExternalStore;function Ae(r,t,s,e,d){const i=g.useCallback(()=>t,[t]),n=g.useMemo(()=>{if(d&&s)return()=>s(r).matches;if(e!==null){const{matches:m}=e(r);return()=>m}return i},[i,r,e,d,s]),[o,c]=g.useMemo(()=>{if(s===null)return[i,()=>()=>{}];const m=s(r);return[()=>m.matches,b=>(m.addListener(b),()=>{m.removeListener(b)})]},[i,s,r]);return de(c,o,n)}function Fe(r,t={}){const s=me(),e=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:d=!1,matchMedia:i=e?window.matchMedia:null,ssrMatchMedia:n=null,noSsr:o=!1}=We({name:"MuiUseMediaQuery",props:t,theme:s});let c=typeof r=="function"?r(s):r;return c=c.replace(/^@media( ?)/m,""),(de!==void 0?Ae:Ne)(c,d,i,n,o)}const Te=["className","component","disableGutters","fixed","maxWidth","classes"],Ee=be(),Ue=Be("div",{name:"MuiContainer",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:s}=r;return[t.root,t[`maxWidth${p(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),Oe=r=>ze({props:r,name:"MuiContainer",defaultTheme:Ee}),He=(r,t)=>{const s=c=>re(t,c),{classes:e,fixed:d,disableGutters:i,maxWidth:n}=r,o={root:["root",n&&`maxWidth${p(String(n))}`,d&&"fixed",i&&"disableGutters"]};return te(o,s,e)};function Ge(r={}){const{createStyledComponent:t=Ue,useThemeProps:s=Oe,componentName:e="MuiContainer"}=r,d=t(({theme:n,ownerState:o})=>j({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}}),({theme:n,ownerState:o})=>o.fixed&&Object.keys(n.breakpoints.values).reduce((c,u)=>{const m=u,b=n.breakpoints.values[m];return b!==0&&(c[n.breakpoints.up(m)]={maxWidth:`${b}${n.breakpoints.unit}`}),c},{}),({theme:n,ownerState:o})=>j({},o.maxWidth==="xs"&&{[n.breakpoints.up("xs")]:{maxWidth:Math.max(n.breakpoints.values.xs,444)}},o.maxWidth&&o.maxWidth!=="xs"&&{[n.breakpoints.up(o.maxWidth)]:{maxWidth:`${n.breakpoints.values[o.maxWidth]}${n.breakpoints.unit}`}}));return g.forwardRef(function(o,c){const u=s(o),{className:m,component:b="div",disableGutters:w=!1,fixed:v=!1,maxWidth:y="lg"}=u,f=ee(u,Te),x=j({},u,{component:b,disableGutters:w,fixed:v,maxWidth:y}),S=He(x,e);return a.jsx(d,j({as:b,ownerState:x,className:ae(S.root,m),ref:c},f))})}const xe=Ge({createStyledComponent:M("div",{name:"MuiContainer",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:s}=r;return[t.root,t[`maxWidth${p(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),useThemeProps:r=>se({props:r,name:"MuiContainer"})});function Qe(r){return re("MuiLinearProgress",r)}ge("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Ve=["className","color","value","valueBuffer","variant"];let $=r=>r,V,X,q,K,J,Y;const N=4,Xe=A(V||(V=$`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),qe=A(X||(X=$`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),Ke=A(q||(q=$`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),Je=r=>{const{classes:t,variant:s,color:e}=r,d={root:["root",`color${p(e)}`,s],dashed:["dashed",`dashedColor${p(e)}`],bar1:["bar",`barColor${p(e)}`,(s==="indeterminate"||s==="query")&&"bar1Indeterminate",s==="determinate"&&"bar1Determinate",s==="buffer"&&"bar1Buffer"],bar2:["bar",s!=="buffer"&&`barColor${p(e)}`,s==="buffer"&&`color${p(e)}`,(s==="indeterminate"||s==="query")&&"bar2Indeterminate",s==="buffer"&&"bar2Buffer"]};return te(d,Qe,t)},E=(r,t)=>t==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${t}Bg`]:r.palette.mode==="light"?pe(r.palette[t].main,.62):je(r.palette[t].main,.5),Ye=M("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:s}=r;return[t.root,t[`color${p(s.color)}`],t[s.variant]]}})(({ownerState:r,theme:t})=>j({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:E(t,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),Ze=M("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,t)=>{const{ownerState:s}=r;return[t.dashed,t[`dashedColor${p(s.color)}`]]}})(({ownerState:r,theme:t})=>{const s=E(t,r.color);return j({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${s} 0%, ${s} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},F(K||(K=$`
    animation: ${0} 3s infinite linear;
  `),Ke)),ea=M("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,t)=>{const{ownerState:s}=r;return[t.bar,t[`barColor${p(s.color)}`],(s.variant==="indeterminate"||s.variant==="query")&&t.bar1Indeterminate,s.variant==="determinate"&&t.bar1Determinate,s.variant==="buffer"&&t.bar1Buffer]}})(({ownerState:r,theme:t})=>j({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(t.vars||t).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${N}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${N}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&F(J||(J=$`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),Xe)),aa=M("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,t)=>{const{ownerState:s}=r;return[t.bar,t[`barColor${p(s.color)}`],(s.variant==="indeterminate"||s.variant==="query")&&t.bar2Indeterminate,s.variant==="buffer"&&t.bar2Buffer]}})(({ownerState:r,theme:t})=>j({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(t.vars||t).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:E(t,r.color),transition:`transform .${N}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&F(Y||(Y=$`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),qe)),ta=g.forwardRef(function(t,s){const e=se({props:t,name:"MuiLinearProgress"}),{className:d,color:i="primary",value:n,valueBuffer:o,variant:c="indeterminate"}=e,u=ee(e,Ve),m=j({},e,{color:i,variant:c}),b=Je(m),w=fe(),v={},y={bar1:{},bar2:{}};if((c==="determinate"||c==="buffer")&&n!==void 0){v["aria-valuenow"]=Math.round(n),v["aria-valuemin"]=0,v["aria-valuemax"]=100;let f=n-100;w&&(f=-f),y.bar1.transform=`translateX(${f}%)`}if(c==="buffer"&&o!==void 0){let f=(o||0)-100;w&&(f=-f),y.bar2.transform=`translateX(${f}%)`}return a.jsxs(Ye,j({className:ae(b.root,d),ownerState:m,role:"progressbar"},v,{ref:s},u,{children:[c==="buffer"?a.jsx(Ze,{className:b.dashed,ownerState:m}):null,a.jsx(ea,{className:b.bar1,ownerState:m,style:y.bar1}),c==="determinate"?null:a.jsx(aa,{className:b.bar2,ownerState:m,style:y.bar2})]}))}),ra=_(a.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),sa=_(a.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email"),na=_(a.jsx("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook"),ia=_(a.jsx("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram"),oa=_(a.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"}),"Phone"),la=_(a.jsx("path",{d:"M19 13H5v-2h14z"}),"Remove"),ca=_(a.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"}),"X"),da=()=>a.jsx(h,{sx:{p:2},children:a.jsx(ve,{})}),xa=()=>{const r=ne(),t=ie(),{label:s}=W(),{searchTitle:e}=oe(i=>i.topbar);g.useEffect(()=>()=>{t(le(""))},[]);const d=()=>{let i=[];switch(s){case"categorie":i=_e;break;case"brand":i=Pe;break;case"store":i=ce;break;default:i=[]}return i.filter(n=>("label"in n?n.label:"store_name"in n?n.store_name:"").toLowerCase().includes(e.toLowerCase()))};return a.jsx(h,{children:a.jsx(R,{container:!0,children:d().map((i,n)=>a.jsx(R,{item:!0,xl:1,lg:2,md:2,sm:4,xs:6,children:a.jsx(h,{sx:{display:"grid",placeItems:"center"},children:a.jsx(Se,{src:"logo"in i?i.logo:"image"in i?i.image:"",label:"label"in i?i.label:"store_name"in i?i.store_name:"",onClick:()=>{r(s==="store"?`/store_details/${i.id}`:`/product/${s}/${i.id}`)}})})},n))})})},Z=()=>{const{label:r,id:t}=W(),[s,e]=g.useState([]),d=ie(),{searchTitle:i}=oe(n=>n.topbar);return console.log("title",i),g.useEffect(()=>()=>{d(le(""))},[]),g.useEffect(()=>{let n=P;r==="categorie"?n=P.filter(o=>o.categories.id===t):r==="brand"?n=P.filter(o=>o.brands.id===t):r==="store"&&(n=P.filter(o=>o.store.id===t)),i&&(n=n.filter(o=>o.teg.some(c=>c.toLowerCase().includes(i.toLowerCase())))),e(n)},[r,t,i]),a.jsx(h,{sx:{display:"flex",flexDirection:"column",gap:2},children:a.jsx(R,{container:!0,children:s.length!=0?s.map((n,o)=>a.jsx(R,{item:!0,lg:2,md:4,sm:6,xs:6,sx:{p:1},children:a.jsx(T,{data:n})},o)):a.jsx(l,{variant:"h6",sx:{width:"100%",textAlign:"center"},children:"Product Not Found"})})})},ha=()=>{const{product_id:r}=W(),t=P.find(u=>u.id===r),s=(t==null?void 0:t.stock)||0,[e,d]=g.useState(t==null?void 0:t.images[0]),[i,n]=g.useState(1);return{variables:{product:t,stectImage:e,quantity:i,maxQuantity:s},methods:{setStectImage:d,handleIncrement:()=>{i<s&&n(i+1)},handleDecrement:()=>{i>1&&n(i-1)}}}},ma=()=>{var b,w,v,y,f;const r=ye(),t=ne(),s=Fe(r.breakpoints.down("sm")),{variables:{product:e,stectImage:d,quantity:i,maxQuantity:n},methods:{setStectImage:o,handleIncrement:c,handleDecrement:u}}=ha(),m=[{rating:"5 Start",count:((b=e==null?void 0:e.ratings)==null?void 0:b.rat_5)||0,color:"#4CAF50"},{rating:"4 Start",count:((w=e==null?void 0:e.ratings)==null?void 0:w.rat_4)||0,color:"#8BC34A"},{rating:"3 Start",count:((v=e==null?void 0:e.ratings)==null?void 0:v.rat_3)||0,color:"#CDDC39"},{rating:"2 Start",count:((y=e==null?void 0:e.ratings)==null?void 0:y.rat_2)||0,color:"#FFC107"},{rating:"1 Start",count:((f=e==null?void 0:e.ratings)==null?void 0:f.rat_1)||0,color:"#F44336"}];return a.jsxs(h,{children:[a.jsxs(R,{container:!0,children:[a.jsx(R,{item:!0,xs:12,md:6,sx:{display:"grid",placeItems:"center"},children:a.jsxs(h,{sx:{width:s?"100%":"70%",display:"grid",placeItems:"center",position:"relative"},children:[a.jsx(I,{src:d,alt:"image",style:{width:"100%",borderRadius:10}}),(e==null?void 0:e.stock)===0&&a.jsx(H,{label:"Sold Out",color:"error",size:"small",sx:{borderRadius:"5px ",position:"absolute",top:0,right:0}}),(e==null?void 0:e.images)&&e.images.length>=2&&a.jsx(h,{sx:{display:"flex",overflowX:"auto",width:"100%"},children:e.images.map(x=>a.jsx(I,{src:x,alt:"image",style:{height:s?50:100,margin:8,borderRadius:10},onClick:()=>o(x)},x))})]})}),a.jsx(R,{item:!0,xs:12,md:6,children:a.jsxs(h,{sx:{display:"flex",flexDirection:"column",gap:2},children:[a.jsx(l,{variant:"subtitle2",children:e==null?void 0:e.title}),a.jsxs(l,{variant:"body1",sx:{cursor:"pointer",color:"primary.main"},onClick:()=>t(`/store_details/${e==null?void 0:e.store.id}`),children:["view stores ",e==null?void 0:e.store.store_name]}),(e==null?void 0:e.bestSelling)&&a.jsx(H,{label:`#${(e==null?void 0:e.bestSelling)&&(e==null?void 0:e.bestSelling_number)} Best Selling`,color:"warning",size:"small",sx:{borderRadius:" 5px",width:"fit-content",color:Ce.white},onClick:()=>t("/best_selling")}),a.jsx(G,{rat:e==null?void 0:e.ratings.rat,totalRaters:e==null?void 0:e.ratings.totalRaters}),a.jsxs(D,{direction:"row",alignItems:"center",spacing:1,children:[a.jsxs(l,{variant:"body1",children:["₹",e==null?void 0:e.discountPrice]}),!!(e!=null&&e.discountPercentage)&&a.jsxs(a.Fragment,{children:[a.jsxs(l,{variant:"body1",sx:{textDecoration:"line-through",color:"#888"},children:["₹",e==null?void 0:e.mrp]}),a.jsxs(l,{variant:"body1",color:"success.main",children:[e==null?void 0:e.discountPercentage,"% off"]})]})]}),a.jsxs(h,{children:[a.jsx(l,{variant:"subtitle2",children:"Colors:"}),(e==null?void 0:e.colors)&&a.jsx(D,{direction:"row",spacing:1,sx:{width:"100%",overflowX:"auto",pb:1},children:e.colors.map((x,S)=>a.jsxs(h,{sx:{border:1,borderColor:"secondary.main",borderRadius:"10px",p:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"9px"},children:[x.image?a.jsx(I,{src:x.image,alt:"image",style:{height:"50px",borderRadius:10,border:1},onClick:()=>o(x.image)}):a.jsx(h,{sx:{width:"20px",height:"20px",bgcolor:x.code,borderRadius:"10%"}},x.code),a.jsx(l,{variant:"body1",children:x.label})]},S))})]}),(e==null?void 0:e.sizes)&&a.jsxs(a.Fragment,{children:[a.jsx(l,{variant:"subtitle2",children:"Size:"}),a.jsx(D,{direction:"row",spacing:1,sx:{width:"100%",overflowX:"auto"},children:e.sizes.map((x,S)=>a.jsx(Q,{variant:"text",sx:{px:3,width:"fit-content"},children:x},S))})]}),a.jsxs(h,{sx:{display:"flex",gap:1},children:[e&&(e==null?void 0:e.stock)>0&&a.jsxs(D,{direction:"row",alignItems:"center",spacing:1,children:[a.jsx(k,{onClick:u,disabled:i<=1,children:a.jsx(la,{})}),a.jsx(h,{sx:{border:1,borderColor:"primary.main",p:1,px:2,borderRadius:2},children:a.jsx(l,{children:i})}),a.jsx(k,{onClick:c,disabled:i>=n,children:a.jsx(ra,{})})]}),a.jsx(Q,{variant:"contained",color:"primary",sx:{flex:1},disabled:(e==null?void 0:e.stock)===0,children:(e==null?void 0:e.stock)===0?" Sold Out":"Buy Now"}),a.jsx(k,{children:a.jsx(ke,{})}),a.jsx($e,{text:e==null?void 0:e.title,url:`product_details/${e==null?void 0:e.id}`,children:a.jsx(k,{children:a.jsx(De,{})})})]}),a.jsxs(h,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a.jsxs(l,{variant:"subtitle2",sx:{fontWeight:"bold"},children:["Description",a.jsx(l,{variant:"body1",children:e==null?void 0:e.description})]}),a.jsxs(l,{variant:"subtitle2",sx:{fontWeight:"bold"},children:["Delivery Charge",a.jsx(l,{variant:"body1",children:(e==null?void 0:e.delivery_charges)==0?" Free Delivery":`₹${e==null?void 0:e.delivery_charges} Delivery Charge`})]}),a.jsxs(l,{variant:"subtitle2",sx:{fontWeight:"bold"},children:["Return Delivery",a.jsx(l,{variant:"body1",children:e==null?void 0:e.replacementPolicy})]}),a.jsxs(l,{variant:"subtitle1",sx:{fontWeight:"bold"},children:["Warranty",a.jsxs(l,{variant:"body1",children:[e==null?void 0:e.warranty," year warranty"]})]})]})]})})]}),a.jsxs(xe,{sx:{display:"flex",flexDirection:"column",gap:2},children:[a.jsxs(h,{children:[a.jsx(l,{variant:"subtitle2",sx:{fontWeight:"bold"},children:"Features"}),e==null?void 0:e.features.map(x=>a.jsxs(l,{variant:"body1",sx:{my:1},children:["- ",x]}))]}),a.jsxs(h,{children:[a.jsx(l,{variant:"subtitle2",sx:{fontWeight:"bold"},children:"Ratings"}),a.jsxs(h,{sx:{display:"flex",alignContent:"center",gap:1},children:[a.jsx(G,{rat:e==null?void 0:e.ratings.rat,totalRaters:e==null?void 0:e.ratings.totalRaters}),a.jsxs(l,{variant:"body1",children:[e==null?void 0:e.ratings.rat," Ratings out of 5"]})]}),a.jsx(D,{spacing:1,mt:2,children:m.map(({rating:x,count:S,color:he})=>{const U=(e==null?void 0:e.ratings.totalRaters)||0,B=U?S/U*100:0;return a.jsxs(h,{display:"flex",alignItems:"center",children:[a.jsx(l,{variant:"body1",sx:{width:"60px"},children:x}),a.jsx(ta,{variant:"determinate",value:B,sx:{width:"100%",mx:1,height:10,borderRadius:2,backgroundColor:"#E0E0E0","& .MuiLinearProgress-bar":{backgroundColor:he}},"aria-label":`Rating ${x} at ${B.toFixed(0)}%`}),a.jsxs(l,{variant:"body1",sx:{textAlign:"right"},children:[B.toFixed(0),"%"]})]},x)})})]}),a.jsx(h,{children:(e==null?void 0:e.hero_images)&&(e==null?void 0:e.hero_images.map(x=>a.jsx(I,{src:x,alt:"image",style:{width:"100%"}},x)))})]})]})},ua=()=>{const{id:r}=W(),t=ce.find(e=>e.id==r),s=P.filter(e=>e.store.id===r);return console.log("store",t),a.jsxs(xe,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a.jsx(I,{src:t==null?void 0:t.banner_image,alt:"image",style:{height:"200",borderRadius:"5px"}}),a.jsxs(h,{sx:{mt:3,textAlign:"center"},children:[a.jsx(O,{src:t==null?void 0:t.logo,alt:t==null?void 0:t.store_name,variant:"rounded",sx:{width:100,height:100,margin:"auto"}}),a.jsx(l,{variant:"subtitle1",children:t==null?void 0:t.store_name})]}),a.jsx(l,{variant:"body1",children:t==null?void 0:t.description}),a.jsxs(h,{sx:{mt:3,display:"flex",alignItems:"center",gap:2},children:[a.jsx(O,{src:t==null?void 0:t.owner_photo,alt:"Owner",variant:"rounded",sx:{width:70,height:70}}),a.jsxs(l,{variant:"subtitle2",children:["Owner: ",t==null?void 0:t.ownerName]})]}),a.jsx(L,{sx:{my:2}}),a.jsx(l,{variant:"subtitle1",children:"Contact Information"}),a.jsxs(l,{variant:"subtitle2",children:[a.jsx(k,{"aria-label":"Email",sx:{color:"primary.main"},onClick:()=>window.location.href=`mailto:${t==null?void 0:t.contact.email}`,children:a.jsx(sa,{})}),t==null?void 0:t.contact.email,","]}),a.jsxs(l,{variant:"subtitle2",children:[a.jsx(k,{"aria-label":"Phone",sx:{color:"primary.main"},onClick:()=>window.location.href=`tel::${t==null?void 0:t.contact.phone}`,children:a.jsx(oa,{})}),t==null?void 0:t.contact.phone,","]}),a.jsx(L,{sx:{my:2}}),a.jsx(l,{variant:"subtitle1",children:"Address"}),a.jsxs(l,{variant:"subtitle2",children:[t==null?void 0:t.address.street,", ",t==null?void 0:t.address.city,", ",t==null?void 0:t.address.state,", ",t==null?void 0:t.address.zipCode,", ",t==null?void 0:t.address.country]}),a.jsx(L,{sx:{my:2}}),a.jsx(l,{variant:"subtitle1",children:"Follow Us"}),a.jsxs(h,{sx:{display:"flex",gap:2},children:[a.jsx(k,{"aria-label":"Facebook",sx:{color:"primary.main"},onClick:()=>{var e;return z({url:(e=t==null?void 0:t.socialMedia)==null?void 0:e.facebook})},children:a.jsx(na,{})}),a.jsx(k,{"aria-label":"X",sx:{color:"primary.main"},onClick:()=>{var e;return z({url:(e=t==null?void 0:t.socialMedia)==null?void 0:e.twitter})},children:a.jsx(ca,{})}),a.jsx(k,{"aria-label":"Instagram",sx:{color:"primary.main"},onClick:()=>{var e;return z({url:(e=t==null?void 0:t.socialMedia)==null?void 0:e.instagram})},children:a.jsx(ia,{})})]}),a.jsx(L,{sx:{my:2}}),a.jsx(l,{variant:"subtitle1",children:"Ratings & Reviews"}),a.jsx(Le,{value:t==null?void 0:t.rating,precision:.5,readOnly:!0}),a.jsx(l,{variant:"subtitle2",children:t==null?void 0:t.rating}),a.jsx(L,{sx:{my:1}}),a.jsx(Ie,{title:"Products",scrollnumber:250,navigateTo:`/product/store/${t==null?void 0:t.id}`,children:s.map((e,d)=>a.jsx(h,{sx:{minWidth:"200px",mx:1},children:a.jsx(T,{data:e})},d))})]})},ba=()=>{const r=P.filter(t=>t.bestSelling).sort((t,s)=>(t.bestSelling_number??0)-(s.bestSelling_number??0));return console.log("prodect",r),a.jsxs(h,{children:[a.jsx(l,{variant:"h6",sx:{textAlign:"center"},children:"Best Selling"}),a.jsx(R,{container:!0,children:r.length!=0?r.map((t,s)=>a.jsx(R,{item:!0,lg:2,md:4,sm:6,xs:6,sx:{p:1},children:a.jsx(T,{data:t,bastSellingNo:!0})},s)):a.jsx(l,{variant:"h6",sx:{width:"100%",textAlign:"center"},children:"Product Not Found"})})]})},va=()=>a.jsx(Re,{children:a.jsxs(C,{path:"/",element:a.jsx(da,{}),children:[a.jsx(C,{path:"/",element:a.jsx(Me,{})}),a.jsx(C,{path:"/display/:label",element:a.jsx(xa,{})}),a.jsx(C,{path:"/product/:label/:id",element:a.jsx(Z,{})}),a.jsx(C,{path:"/product",element:a.jsx(Z,{})}),a.jsx(C,{path:"/store_details/:id",element:a.jsx(ua,{})}),a.jsx(C,{path:"/best_selling",element:a.jsx(ba,{})}),a.jsx(C,{path:"/product_details/:product_id",element:a.jsx(ma,{})}),a.jsx(C,{path:"*",element:a.jsx(we,{to:"/",replace:!0})})]})});export{va as default};
