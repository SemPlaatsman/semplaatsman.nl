import{u as ot,j as R,a as On,P as Nn}from"./about-BnCuu88q.js";import{r as T}from"./vendor-BHP5L7kg.js";let Dn={data:""},Cn=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Dn,In=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Mn=/\/\*[^]*?\*\/|  +/g,Mt=/\n+/g,Y=(e,t)=>{let r="",o="",a="";for(let i in e){let c=e[i];i[0]=="@"?i[1]=="i"?r=i+" "+c+";":o+=i[1]=="f"?Y(c,i):i+"{"+Y(c,i[1]=="k"?"":t)+"}":typeof c=="object"?o+=Y(c,t?t.replace(/([^,])+/g,m=>i.replace(/(^:.*)|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,m):m?m+" "+f:f)):i):c!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=Y.p?Y.p(i,c):i+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+o},G={},Yt=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+Yt(e[r]);return t}return e},kn=(e,t,r,o,a)=>{let i=Yt(e),c=G[i]||(G[i]=(f=>{let p=0,h=11;for(;p<f.length;)h=101*h+f.charCodeAt(p++)>>>0;return"go"+h})(i));if(!G[c]){let f=i!==e?e:(p=>{let h,E,I=[{}];for(;h=In.exec(p.replace(Mn,""));)h[4]?I.shift():h[3]?(E=h[3].replace(Mt," ").trim(),I.unshift(I[0][E]=I[0][E]||{})):I[0][h[1]]=h[2].replace(Mt," ").trim();return I[0]})(e);G[c]=Y(a?{["@keyframes "+c]:f}:f,r?"":"."+c)}let m=r&&G.g?G.g:null;return r&&(G.g=G[c]),((f,p,h,E)=>{E?p.data=p.data.replace(E,f):p.data.indexOf(f)===-1&&(p.data=h?f+p.data:p.data+f)})(G[c],t,o,m),c},Pn=(e,t,r)=>e.reduce((o,a,i)=>{let c=t[i];if(c&&c.call){let m=c(r),f=m&&m.props&&m.props.className||/^go/.test(m)&&m;c=f?"."+f:m&&typeof m=="object"?m.props?"":Y(m,""):m===!1?"":m}return o+a+(c??"")},"");function Ce(e){let t=this||{},r=e.call?e(t.p):e;return kn(r.unshift?r.raw?Pn(r,[].slice.call(arguments,1),t.p):r.reduce((o,a)=>Object.assign(o,a&&a.call?a(t.p):a),{}):r,Cn(t.target),t.g,t.o,t.k)}let qt,Je,Qe;Ce.bind({g:1});let $=Ce.bind({k:1});function Fn(e,t,r,o){Y.p=t,qt=e,Je=r,Qe=o}function q(e,t){let r=this||{};return function(){let o=arguments;function a(i,c){let m=Object.assign({},i),f=m.className||a.className;r.p=Object.assign({theme:Je&&Je()},m),r.o=/ *go\d+/.test(f),m.className=Ce.apply(r,o)+(f?" "+f:"");let p=e;return e[0]&&(p=m.as||e,delete m.as),Qe&&p[0]&&Qe(m),qt(p,m)}return a}}var Un=e=>typeof e=="function",De=(e,t)=>Un(e)?e(t):e,Hn=(()=>{let e=0;return()=>(++e).toString()})(),Vt=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),jn=20,ve=new Map,zn=1e3,kt=e=>{if(ve.has(e))return;let t=setTimeout(()=>{ve.delete(e),Z({type:4,toastId:e})},zn);ve.set(e,t)},Bn=e=>{let t=ve.get(e);t&&clearTimeout(t)},et=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,jn)};case 1:return t.toast.id&&Bn(t.toast.id),{...e,toasts:e.toasts.map(i=>i.id===t.toast.id?{...i,...t.toast}:i)};case 2:let{toast:r}=t;return e.toasts.find(i=>i.id===r.id)?et(e,{type:1,toast:r}):et(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?kt(o):e.toasts.forEach(i=>{kt(i.id)}),{...e,toasts:e.toasts.map(i=>i.id===o||o===void 0?{...i,visible:!1}:i)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(i=>i.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+a}))}}},Le=[],Oe={toasts:[],pausedAt:void 0},Z=e=>{Oe=et(Oe,e),Le.forEach(t=>{t(Oe)})},Wn={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Gn=(e={})=>{let[t,r]=T.useState(Oe);T.useEffect(()=>(Le.push(r),()=>{let a=Le.indexOf(r);a>-1&&Le.splice(a,1)}),[t]);let o=t.toasts.map(a=>{var i,c;return{...e,...e[a.type],...a,duration:a.duration||((i=e[a.type])==null?void 0:i.duration)||(e==null?void 0:e.duration)||Wn[a.type],style:{...e.style,...(c=e[a.type])==null?void 0:c.style,...a.style}}});return{...t,toasts:o}},$n=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Hn()}),he=e=>(t,r)=>{let o=$n(t,e,r);return Z({type:2,toast:o}),o.id},M=(e,t)=>he("blank")(e,t);M.error=he("error");M.success=he("success");M.loading=he("loading");M.custom=he("custom");M.dismiss=e=>{Z({type:3,toastId:e})};M.remove=e=>Z({type:4,toastId:e});M.promise=(e,t,r)=>{let o=M.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(a=>(M.success(De(t.success,a),{id:o,...r,...r==null?void 0:r.success}),a)).catch(a=>{M.error(De(t.error,a),{id:o,...r,...r==null?void 0:r.error})}),e};var Yn=(e,t)=>{Z({type:1,toast:{id:e,height:t}})},qn=()=>{Z({type:5,time:Date.now()})},Vn=e=>{let{toasts:t,pausedAt:r}=Gn(e);T.useEffect(()=>{if(r)return;let i=Date.now(),c=t.map(m=>{if(m.duration===1/0)return;let f=(m.duration||0)+m.pauseDuration-(i-m.createdAt);if(f<0){m.visible&&M.dismiss(m.id);return}return setTimeout(()=>M.dismiss(m.id),f)});return()=>{c.forEach(m=>m&&clearTimeout(m))}},[t,r]);let o=T.useCallback(()=>{r&&Z({type:6,time:Date.now()})},[r]),a=T.useCallback((i,c)=>{let{reverseOrder:m=!1,gutter:f=8,defaultPosition:p}=c||{},h=t.filter(v=>(v.position||p)===(i.position||p)&&v.height),E=h.findIndex(v=>v.id===i.id),I=h.filter((v,z)=>z<E&&v.visible).length;return h.filter(v=>v.visible).slice(...m?[I+1]:[0,I]).reduce((v,z)=>v+(z.height||0)+f,0)},[t]);return{toasts:t,handlers:{updateHeight:Yn,startPause:qn,endPause:o,calculateOffset:a}}},Xn=$`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Kn=$`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Zn=$`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Jn=q("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Xn} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Kn} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Zn} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Qn=$`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,er=q("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Qn} 1s linear infinite;
`,tr=$`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,nr=$`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,rr=q("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${tr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${nr} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,or=q("div")`
  position: absolute;
`,ir=q("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ar=$`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,sr=q("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ar} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,lr=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?T.createElement(sr,null,t):t:r==="blank"?null:T.createElement(ir,null,T.createElement(er,{...o}),r!=="loading"&&T.createElement(or,null,r==="error"?T.createElement(Jn,{...o}):T.createElement(rr,{...o})))},cr=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ur=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,mr="0%{opacity:0;} 100%{opacity:1;}",fr="0%{opacity:1;} 100%{opacity:0;}",pr=q("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,dr=q("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,hr=(e,t)=>{let r=e.includes("top")?1:-1,[o,a]=Vt()?[mr,fr]:[cr(r),ur(r)];return{animation:t?`${$(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${$(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},gr=T.memo(({toast:e,position:t,style:r,children:o})=>{let a=e.height?hr(e.position||t||"top-center",e.visible):{opacity:0},i=T.createElement(lr,{toast:e}),c=T.createElement(dr,{...e.ariaProps},De(e.message,e));return T.createElement(pr,{className:e.className,style:{...a,...r,...e.style}},typeof o=="function"?o({icon:i,message:c}):T.createElement(T.Fragment,null,i,c))});Fn(T.createElement);var Tr=({id:e,className:t,style:r,onHeightUpdate:o,children:a})=>{let i=T.useCallback(c=>{if(c){let m=()=>{let f=c.getBoundingClientRect().height;o(e,f)};m(),new MutationObserver(m).observe(c,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return T.createElement("div",{ref:i,className:t,style:r},a)},_r=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Vt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...a}},Er=Ce`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,we=16,po=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:a,containerStyle:i,containerClassName:c})=>{let{toasts:m,handlers:f}=Vn(r);return T.createElement("div",{style:{position:"fixed",zIndex:9999,top:we,left:we,right:we,bottom:we,pointerEvents:"none",...i},className:c,onMouseEnter:f.startPause,onMouseLeave:f.endPause},m.map(p=>{let h=p.position||t,E=f.calculateOffset(p,{reverseOrder:e,gutter:o,defaultPosition:t}),I=_r(h,E);return T.createElement(Tr,{id:p.id,key:p.id,onHeightUpdate:f.updateHeight,className:p.visible?Er:"",style:I},p.type==="custom"?De(p.message,p):a?a(p):T.createElement(gr,{toast:p,position:h}))}))},Se=M;const Pt={"dark-theme":"_dark-theme_1kvc7_1","light-theme":"_light-theme_1kvc7_25"},br="_mapBox_rwmaz_50",yr={"dark-theme":"_dark-theme_rwmaz_1","light-theme":"_light-theme_rwmaz_25",mapBox:br},Ar=()=>{const{t:e}=ot("contact");return R.jsx("section",{className:yr.mapBox,children:R.jsx("figure",{children:R.jsx("iframe",{src:"https://www.openstreetmap.org/export/embed.html?bbox=4.520702362060548%2C52.333241186520006%2C4.747295379638673%2C52.43550196931334&amp;layer=mapnik",width:400,height:300,style:{border:0},loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:e("map.title")})})})},wr="_contactForm_16w74_50",Sr="_formTitle_16w74_54",xr="_inputWrapper_16w74_58",Rr="_formInput_16w74_76",vr="_formBtn_16w74_130",oe={"dark-theme":"_dark-theme_16w74_1","light-theme":"_light-theme_16w74_25",contactForm:wr,formTitle:Sr,inputWrapper:xr,formInput:Rr,formBtn:vr};class ge{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const Lr=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},S={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Lr()},it=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Or=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=it(e);S.publicKey=r.publicKey,S.blockHeadless=r.blockHeadless,S.storageProvider=r.storageProvider,S.blockList=r.blockList,S.limitRate=r.limitRate,S.origin=r.origin||t},Xt=async(e,t,r={})=>{const o=await fetch(S.origin+e,{method:"POST",headers:r,body:t}),a=await o.text(),i=new ge(o.status,a);if(o.ok)return i;throw i},Kt=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Nr=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Zt=e=>e.webdriver||!e.languages||e.languages.length===0,Jt=()=>new ge(451,"Unavailable For Headless Browser"),Dr=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Cr=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},Ir=(e,t)=>e instanceof FormData?e.get(t):e[t],Qt=(e,t)=>{if(Cr(e))return!1;Dr(e.list,e.watchVariable);const r=Ir(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},en=()=>new ge(403,"Forbidden"),Mr=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},kr=async(e,t,r)=>{const o=Number(await r.get(e)||0);return t-Date.now()+o},tn=async(e,t,r)=>{if(!t.throttle||!r)return!1;Mr(t.throttle,t.id);const o=t.id||e;return await kr(o,t.throttle,r)>0?!0:(await r.set(o,Date.now().toString()),!1)},nn=()=>new ge(429,"Too Many Requests"),Pr=async(e,t,r,o)=>{const a=it(o),i=a.publicKey||S.publicKey,c=a.blockHeadless||S.blockHeadless,m=a.storageProvider||S.storageProvider,f={...S.blockList,...a.blockList},p={...S.limitRate,...a.limitRate};return c&&Zt(navigator)?Promise.reject(Jt()):(Kt(i,e,t),Nr(r),r&&Qt(f,r)?Promise.reject(en()):await tn(location.pathname,p,m)?Promise.reject(nn()):Xt("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:i,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},Fr=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Ur=e=>typeof e=="string"?document.querySelector(e):e,Hr=async(e,t,r,o)=>{const a=it(o),i=a.publicKey||S.publicKey,c=a.blockHeadless||S.blockHeadless,m=S.storageProvider||a.storageProvider,f={...S.blockList,...a.blockList},p={...S.limitRate,...a.limitRate};if(c&&Zt(navigator))return Promise.reject(Jt());const h=Ur(r);Kt(i,e,t),Fr(h);const E=new FormData(h);return Qt(f,E)?Promise.reject(en()):await tn(location.pathname,p,m)?Promise.reject(nn()):(E.append("lib_version","4.4.1"),E.append("service_id",e),E.append("template_id",t),E.append("user_id",i),Xt("/api/v1.0/email/send-form",E))},jr={init:Or,send:Pr,sendForm:Hr,EmailJSResponseStatus:ge},K=class K{constructor(t,r){this.requests=new Map,this.limit=t,this.interval=r}static getInstance(t,r,o){return K.instances.has(t)||K.instances.set(t,new K(r,o)),K.instances.get(t)}isRateLimited(t){const r=Date.now(),o=r-this.interval;if(!this.requests.has(t))return this.requests.set(t,[r]),!1;const i=this.requests.get(t).filter(c=>c>o);return i.length>=this.limit?!0:(i.push(r),this.requests.set(t,i),i.length>this.limit&&this.requests.set(t,i.slice(-this.limit)),!1)}clear(t){this.requests.delete(t)}};K.instances=new Map;let tt=K;/*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */const{entries:rn,setPrototypeOf:Ft,isFrozen:zr,getPrototypeOf:Br,getOwnPropertyDescriptor:Wr}=Object;let{freeze:D,seal:P,create:on}=Object,{apply:nt,construct:rt}=typeof Reflect<"u"&&Reflect;D||(D=function(t){return t});P||(P=function(t){return t});nt||(nt=function(t,r,o){return t.apply(r,o)});rt||(rt=function(t,r){return new t(...r)});const xe=k(Array.prototype.forEach),Ut=k(Array.prototype.pop),ue=k(Array.prototype.push),Ne=k(String.prototype.toLowerCase),qe=k(String.prototype.toString),Ht=k(String.prototype.match),me=k(String.prototype.replace),Gr=k(String.prototype.indexOf),$r=k(String.prototype.trim),F=k(Object.prototype.hasOwnProperty),N=k(RegExp.prototype.test),fe=Yr(TypeError);function k(e){return function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return nt(e,t,o)}}function Yr(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return rt(e,r)}}function d(e,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ne;Ft&&Ft(e,null);let o=t.length;for(;o--;){let a=t[o];if(typeof a=="string"){const i=r(a);i!==a&&(zr(t)||(t[o]=i),a=i)}e[a]=!0}return e}function qr(e){for(let t=0;t<e.length;t++)F(e,t)||(e[t]=null);return e}function X(e){const t=on(null);for(const[r,o]of rn(e))F(e,r)&&(Array.isArray(o)?t[r]=qr(o):o&&typeof o=="object"&&o.constructor===Object?t[r]=X(o):t[r]=o);return t}function pe(e,t){for(;e!==null;){const o=Wr(e,t);if(o){if(o.get)return k(o.get);if(typeof o.value=="function")return k(o.value)}e=Br(e)}function r(){return null}return r}const jt=D(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ve=D(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Xe=D(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Vr=D(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ke=D(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Xr=D(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),zt=D(["#text"]),Bt=D(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ze=D(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Wt=D(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Re=D(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Kr=P(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Zr=P(/<%[\w\W]*|[\w\W]*%>/gm),Jr=P(/\${[\w\W]*}/gm),Qr=P(/^data-[\-\w.\u00B7-\uFFFF]/),eo=P(/^aria-[\-\w]+$/),an=P(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),to=P(/^(?:\w+script|data):/i),no=P(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),sn=P(/^html$/i),ro=P(/^[a-z][.\w]*(-[.\w]+)+$/i);var Gt=Object.freeze({__proto__:null,MUSTACHE_EXPR:Kr,ERB_EXPR:Zr,TMPLIT_EXPR:Jr,DATA_ATTR:Qr,ARIA_ATTR:eo,IS_ALLOWED_URI:an,IS_SCRIPT_OR_DATA:to,ATTR_WHITESPACE:no,DOCTYPE_NAME:sn,CUSTOM_ELEMENT:ro});const de={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},oo=function(){return typeof window>"u"?null:window},io=function(t,r){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const a="data-tt-policy-suffix";r&&r.hasAttribute(a)&&(o=r.getAttribute(a));const i="dompurify"+(o?"#"+o:"");try{return t.createPolicy(i,{createHTML(c){return c},createScriptURL(c){return c}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function ln(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:oo();const t=u=>ln(u);if(t.version="3.1.6",t.removed=[],!e||!e.document||e.document.nodeType!==de.document)return t.isSupported=!1,t;let{document:r}=e;const o=r,a=o.currentScript,{DocumentFragment:i,HTMLTemplateElement:c,Node:m,Element:f,NodeFilter:p,NamedNodeMap:h=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:E,DOMParser:I,trustedTypes:v}=e,z=f.prototype,cn=pe(z,"cloneNode"),un=pe(z,"remove"),mn=pe(z,"nextSibling"),fn=pe(z,"childNodes"),Te=pe(z,"parentNode");if(typeof c=="function"){const u=r.createElement("template");u.content&&u.content.ownerDocument&&(r=u.content.ownerDocument)}let L,ie="";const{implementation:Ie,createNodeIterator:pn,createDocumentFragment:dn,getElementsByTagName:hn}=r,{importNode:gn}=o;let U={};t.isSupported=typeof rn=="function"&&typeof Te=="function"&&Ie&&Ie.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Me,ERB_EXPR:ke,TMPLIT_EXPR:Pe,DATA_ATTR:Tn,ARIA_ATTR:_n,IS_SCRIPT_OR_DATA:En,ATTR_WHITESPACE:at,CUSTOM_ELEMENT:bn}=Gt;let{IS_ALLOWED_URI:st}=Gt,b=null;const lt=d({},[...jt,...Ve,...Xe,...Ke,...zt]);let y=null;const ct=d({},[...Bt,...Ze,...Wt,...Re]);let _=Object.seal(on(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ae=null,Fe=null,ut=!0,Ue=!0,mt=!1,ft=!0,J=!1,He=!0,V=!1,je=!1,ze=!1,Q=!1,_e=!1,Ee=!1,pt=!0,dt=!1;const yn="user-content-";let Be=!0,se=!1,ee={},te=null;const ht=d({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let gt=null;const Tt=d({},["audio","video","img","source","image","track"]);let We=null;const _t=d({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),be="http://www.w3.org/1998/Math/MathML",ye="http://www.w3.org/2000/svg",B="http://www.w3.org/1999/xhtml";let ne=B,Ge=!1,$e=null;const An=d({},[be,ye,B],qe);let le=null;const wn=["application/xhtml+xml","text/html"],Sn="text/html";let A=null,re=null;const xn=r.createElement("form"),Et=function(n){return n instanceof RegExp||n instanceof Function},Ye=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(re&&re===n)){if((!n||typeof n!="object")&&(n={}),n=X(n),le=wn.indexOf(n.PARSER_MEDIA_TYPE)===-1?Sn:n.PARSER_MEDIA_TYPE,A=le==="application/xhtml+xml"?qe:Ne,b=F(n,"ALLOWED_TAGS")?d({},n.ALLOWED_TAGS,A):lt,y=F(n,"ALLOWED_ATTR")?d({},n.ALLOWED_ATTR,A):ct,$e=F(n,"ALLOWED_NAMESPACES")?d({},n.ALLOWED_NAMESPACES,qe):An,We=F(n,"ADD_URI_SAFE_ATTR")?d(X(_t),n.ADD_URI_SAFE_ATTR,A):_t,gt=F(n,"ADD_DATA_URI_TAGS")?d(X(Tt),n.ADD_DATA_URI_TAGS,A):Tt,te=F(n,"FORBID_CONTENTS")?d({},n.FORBID_CONTENTS,A):ht,ae=F(n,"FORBID_TAGS")?d({},n.FORBID_TAGS,A):{},Fe=F(n,"FORBID_ATTR")?d({},n.FORBID_ATTR,A):{},ee=F(n,"USE_PROFILES")?n.USE_PROFILES:!1,ut=n.ALLOW_ARIA_ATTR!==!1,Ue=n.ALLOW_DATA_ATTR!==!1,mt=n.ALLOW_UNKNOWN_PROTOCOLS||!1,ft=n.ALLOW_SELF_CLOSE_IN_ATTR!==!1,J=n.SAFE_FOR_TEMPLATES||!1,He=n.SAFE_FOR_XML!==!1,V=n.WHOLE_DOCUMENT||!1,Q=n.RETURN_DOM||!1,_e=n.RETURN_DOM_FRAGMENT||!1,Ee=n.RETURN_TRUSTED_TYPE||!1,ze=n.FORCE_BODY||!1,pt=n.SANITIZE_DOM!==!1,dt=n.SANITIZE_NAMED_PROPS||!1,Be=n.KEEP_CONTENT!==!1,se=n.IN_PLACE||!1,st=n.ALLOWED_URI_REGEXP||an,ne=n.NAMESPACE||B,_=n.CUSTOM_ELEMENT_HANDLING||{},n.CUSTOM_ELEMENT_HANDLING&&Et(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(_.tagNameCheck=n.CUSTOM_ELEMENT_HANDLING.tagNameCheck),n.CUSTOM_ELEMENT_HANDLING&&Et(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(_.attributeNameCheck=n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),n.CUSTOM_ELEMENT_HANDLING&&typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(_.allowCustomizedBuiltInElements=n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),J&&(Ue=!1),_e&&(Q=!0),ee&&(b=d({},zt),y=[],ee.html===!0&&(d(b,jt),d(y,Bt)),ee.svg===!0&&(d(b,Ve),d(y,Ze),d(y,Re)),ee.svgFilters===!0&&(d(b,Xe),d(y,Ze),d(y,Re)),ee.mathMl===!0&&(d(b,Ke),d(y,Wt),d(y,Re))),n.ADD_TAGS&&(b===lt&&(b=X(b)),d(b,n.ADD_TAGS,A)),n.ADD_ATTR&&(y===ct&&(y=X(y)),d(y,n.ADD_ATTR,A)),n.ADD_URI_SAFE_ATTR&&d(We,n.ADD_URI_SAFE_ATTR,A),n.FORBID_CONTENTS&&(te===ht&&(te=X(te)),d(te,n.FORBID_CONTENTS,A)),Be&&(b["#text"]=!0),V&&d(b,["html","head","body"]),b.table&&(d(b,["tbody"]),delete ae.tbody),n.TRUSTED_TYPES_POLICY){if(typeof n.TRUSTED_TYPES_POLICY.createHTML!="function")throw fe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof n.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw fe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');L=n.TRUSTED_TYPES_POLICY,ie=L.createHTML("")}else L===void 0&&(L=io(v,a)),L!==null&&typeof ie=="string"&&(ie=L.createHTML(""));D&&D(n),re=n}},bt=d({},["mi","mo","mn","ms","mtext"]),yt=d({},["foreignobject","annotation-xml"]),Rn=d({},["title","style","font","a","script"]),At=d({},[...Ve,...Xe,...Vr]),wt=d({},[...Ke,...Xr]),vn=function(n){let s=Te(n);(!s||!s.tagName)&&(s={namespaceURI:ne,tagName:"template"});const l=Ne(n.tagName),g=Ne(s.tagName);return $e[n.namespaceURI]?n.namespaceURI===ye?s.namespaceURI===B?l==="svg":s.namespaceURI===be?l==="svg"&&(g==="annotation-xml"||bt[g]):!!At[l]:n.namespaceURI===be?s.namespaceURI===B?l==="math":s.namespaceURI===ye?l==="math"&&yt[g]:!!wt[l]:n.namespaceURI===B?s.namespaceURI===ye&&!yt[g]||s.namespaceURI===be&&!bt[g]?!1:!wt[l]&&(Rn[l]||!At[l]):!!(le==="application/xhtml+xml"&&$e[n.namespaceURI]):!1},H=function(n){ue(t.removed,{element:n});try{Te(n).removeChild(n)}catch{un(n)}},Ae=function(n,s){try{ue(t.removed,{attribute:s.getAttributeNode(n),from:s})}catch{ue(t.removed,{attribute:null,from:s})}if(s.removeAttribute(n),n==="is"&&!y[n])if(Q||_e)try{H(s)}catch{}else try{s.setAttribute(n,"")}catch{}},St=function(n){let s=null,l=null;if(ze)n="<remove></remove>"+n;else{const w=Ht(n,/^[\r\n\t ]+/);l=w&&w[0]}le==="application/xhtml+xml"&&ne===B&&(n='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+n+"</body></html>");const g=L?L.createHTML(n):n;if(ne===B)try{s=new I().parseFromString(g,le)}catch{}if(!s||!s.documentElement){s=Ie.createDocument(ne,"template",null);try{s.documentElement.innerHTML=Ge?ie:g}catch{}}const x=s.body||s.documentElement;return n&&l&&x.insertBefore(r.createTextNode(l),x.childNodes[0]||null),ne===B?hn.call(s,V?"html":"body")[0]:V?s.documentElement:x},xt=function(n){return pn.call(n.ownerDocument||n,n,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT|p.SHOW_PROCESSING_INSTRUCTION|p.SHOW_CDATA_SECTION,null)},Rt=function(n){return n instanceof E&&(typeof n.nodeName!="string"||typeof n.textContent!="string"||typeof n.removeChild!="function"||!(n.attributes instanceof h)||typeof n.removeAttribute!="function"||typeof n.setAttribute!="function"||typeof n.namespaceURI!="string"||typeof n.insertBefore!="function"||typeof n.hasChildNodes!="function")},vt=function(n){return typeof m=="function"&&n instanceof m},W=function(n,s,l){U[n]&&xe(U[n],g=>{g.call(t,s,l,re)})},Lt=function(n){let s=null;if(W("beforeSanitizeElements",n,null),Rt(n))return H(n),!0;const l=A(n.nodeName);if(W("uponSanitizeElement",n,{tagName:l,allowedTags:b}),n.hasChildNodes()&&!vt(n.firstElementChild)&&N(/<[/\w]/g,n.innerHTML)&&N(/<[/\w]/g,n.textContent)||n.nodeType===de.progressingInstruction||He&&n.nodeType===de.comment&&N(/<[/\w]/g,n.data))return H(n),!0;if(!b[l]||ae[l]){if(!ae[l]&&Nt(l)&&(_.tagNameCheck instanceof RegExp&&N(_.tagNameCheck,l)||_.tagNameCheck instanceof Function&&_.tagNameCheck(l)))return!1;if(Be&&!te[l]){const g=Te(n)||n.parentNode,x=fn(n)||n.childNodes;if(x&&g){const w=x.length;for(let C=w-1;C>=0;--C){const j=cn(x[C],!0);j.__removalCount=(n.__removalCount||0)+1,g.insertBefore(j,mn(n))}}}return H(n),!0}return n instanceof f&&!vn(n)||(l==="noscript"||l==="noembed"||l==="noframes")&&N(/<\/no(script|embed|frames)/i,n.innerHTML)?(H(n),!0):(J&&n.nodeType===de.text&&(s=n.textContent,xe([Me,ke,Pe],g=>{s=me(s,g," ")}),n.textContent!==s&&(ue(t.removed,{element:n.cloneNode()}),n.textContent=s)),W("afterSanitizeElements",n,null),!1)},Ot=function(n,s,l){if(pt&&(s==="id"||s==="name")&&(l in r||l in xn))return!1;if(!(Ue&&!Fe[s]&&N(Tn,s))){if(!(ut&&N(_n,s))){if(!y[s]||Fe[s]){if(!(Nt(n)&&(_.tagNameCheck instanceof RegExp&&N(_.tagNameCheck,n)||_.tagNameCheck instanceof Function&&_.tagNameCheck(n))&&(_.attributeNameCheck instanceof RegExp&&N(_.attributeNameCheck,s)||_.attributeNameCheck instanceof Function&&_.attributeNameCheck(s))||s==="is"&&_.allowCustomizedBuiltInElements&&(_.tagNameCheck instanceof RegExp&&N(_.tagNameCheck,l)||_.tagNameCheck instanceof Function&&_.tagNameCheck(l))))return!1}else if(!We[s]){if(!N(st,me(l,at,""))){if(!((s==="src"||s==="xlink:href"||s==="href")&&n!=="script"&&Gr(l,"data:")===0&&gt[n])){if(!(mt&&!N(En,me(l,at,"")))){if(l)return!1}}}}}}return!0},Nt=function(n){return n!=="annotation-xml"&&Ht(n,bn)},Dt=function(n){W("beforeSanitizeAttributes",n,null);const{attributes:s}=n;if(!s)return;const l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:y};let g=s.length;for(;g--;){const x=s[g],{name:w,namespaceURI:C,value:j}=x,ce=A(w);let O=w==="value"?j:$r(j);if(l.attrName=ce,l.attrValue=O,l.keepAttr=!0,l.forceKeepAttr=void 0,W("uponSanitizeAttribute",n,l),O=l.attrValue,He&&N(/((--!?|])>)|<\/(style|title)/i,O)){Ae(w,n);continue}if(l.forceKeepAttr||(Ae(w,n),!l.keepAttr))continue;if(!ft&&N(/\/>/i,O)){Ae(w,n);continue}J&&xe([Me,ke,Pe],It=>{O=me(O,It," ")});const Ct=A(n.nodeName);if(Ot(Ct,ce,O)){if(dt&&(ce==="id"||ce==="name")&&(Ae(w,n),O=yn+O),L&&typeof v=="object"&&typeof v.getAttributeType=="function"&&!C)switch(v.getAttributeType(Ct,ce)){case"TrustedHTML":{O=L.createHTML(O);break}case"TrustedScriptURL":{O=L.createScriptURL(O);break}}try{C?n.setAttributeNS(C,w,O):n.setAttribute(w,O),Rt(n)?H(n):Ut(t.removed)}catch{}}}W("afterSanitizeAttributes",n,null)},Ln=function u(n){let s=null;const l=xt(n);for(W("beforeSanitizeShadowDOM",n,null);s=l.nextNode();)W("uponSanitizeShadowNode",s,null),!Lt(s)&&(s.content instanceof i&&u(s.content),Dt(s));W("afterSanitizeShadowDOM",n,null)};return t.sanitize=function(u){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=null,l=null,g=null,x=null;if(Ge=!u,Ge&&(u="<!-->"),typeof u!="string"&&!vt(u))if(typeof u.toString=="function"){if(u=u.toString(),typeof u!="string")throw fe("dirty is not a string, aborting")}else throw fe("toString is not a function");if(!t.isSupported)return u;if(je||Ye(n),t.removed=[],typeof u=="string"&&(se=!1),se){if(u.nodeName){const j=A(u.nodeName);if(!b[j]||ae[j])throw fe("root node is forbidden and cannot be sanitized in-place")}}else if(u instanceof m)s=St("<!---->"),l=s.ownerDocument.importNode(u,!0),l.nodeType===de.element&&l.nodeName==="BODY"||l.nodeName==="HTML"?s=l:s.appendChild(l);else{if(!Q&&!J&&!V&&u.indexOf("<")===-1)return L&&Ee?L.createHTML(u):u;if(s=St(u),!s)return Q?null:Ee?ie:""}s&&ze&&H(s.firstChild);const w=xt(se?u:s);for(;g=w.nextNode();)Lt(g)||(g.content instanceof i&&Ln(g.content),Dt(g));if(se)return u;if(Q){if(_e)for(x=dn.call(s.ownerDocument);s.firstChild;)x.appendChild(s.firstChild);else x=s;return(y.shadowroot||y.shadowrootmode)&&(x=gn.call(o,x,!0)),x}let C=V?s.outerHTML:s.innerHTML;return V&&b["!doctype"]&&s.ownerDocument&&s.ownerDocument.doctype&&s.ownerDocument.doctype.name&&N(sn,s.ownerDocument.doctype.name)&&(C="<!DOCTYPE "+s.ownerDocument.doctype.name+`>
`+C),J&&xe([Me,ke,Pe],j=>{C=me(C,j," ")}),L&&Ee?L.createHTML(C):C},t.setConfig=function(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ye(u),je=!0},t.clearConfig=function(){re=null,je=!1},t.isValidAttribute=function(u,n,s){re||Ye({});const l=A(u),g=A(n);return Ot(l,g,s)},t.addHook=function(u,n){typeof n=="function"&&(U[u]=U[u]||[],ue(U[u],n))},t.removeHook=function(u){if(U[u])return Ut(U[u])},t.removeHooks=function(u){U[u]&&(U[u]=[])},t.removeAllHooks=function(){U={}},t}var ao=ln();const $t=tt.getInstance("emailSender",5,36e5),so=()=>{const{t:e}=ot("contact"),[t,r]=T.useState(!1);return{sendEmail:async a=>{const i=a.email.value;if($t.isRateLimited(i)){Se.error(e("form.rateLimitError"));return}r(!0);const c=Se.loading(e("form.submitting"),{duration:3e4});try{const m=Object.fromEntries(Array.from(new FormData(a).entries()).map(([p,h])=>[p,typeof h=="string"?ao.sanitize(h):h]));if((await jr.send("service_gxxyouq","template_nmo2jyu",m,{publicKey:"cSPCfqjTQIL-hMY-8"})).text==="OK")Se.success(e("form.submitSuccess"),{id:c,duration:3e3}),a.reset();else throw new Error("Unexpected response")}catch(m){console.error("Submission email error:",m),Se.error(e("form.submitError"),{id:c,duration:3e3}),$t.clear(i)}finally{r(!1)}},isSubmitting:t}},lo=()=>{const{t:e}=ot("contact"),{sendEmail:t,isSubmitting:r}=so(),o=i=>({name:i,className:oe.formInput,placeholder:e(`form.fields.${i}.placeholder`),"aria-label":e(`form.fields.${i}.title`),required:!0}),a=async i=>{i.preventDefault(),await t(i.currentTarget)};return R.jsxs("section",{className:oe.contactForm,children:[R.jsx("h3",{className:`h3 ${oe.formTitle}`,children:e("title")}),R.jsxs("form",{onSubmit:a,className:oe.form,children:[R.jsxs("div",{className:oe.inputWrapper,children:[R.jsx("input",{type:"text",...o("name"),maxLength:100,autoComplete:"name"}),R.jsx("input",{type:"email",...o("email"),maxLength:100,autoComplete:"email"})]}),R.jsx("textarea",{...o("message"),maxLength:1e3}),R.jsxs("button",{className:oe.formBtn,type:"submit",disabled:r,children:[R.jsx(On,{}),R.jsx("span",{children:e(r?"form.submitting":"form.submit")})]})]})]})},co=()=>R.jsxs(Nn,{className:Pt.contact,titleClassName:Pt.contactTitle,children:[R.jsx(Ar,{}),R.jsx(lo,{})]}),uo=co,ho=Object.freeze(Object.defineProperty({__proto__:null,default:uo},Symbol.toStringTag,{value:"Module"}));export{po as I,ho as i};
