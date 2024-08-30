const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/resume-C7YykBKR.js","assets/resume-DJ6GzaKJ.css","assets/projects-B55fwS1N.js","assets/vendor-DfZvH2pX.js","assets/projects-DlYvOR48.css","assets/index-tP2CQ_7Y.js","assets/contact-CSCew8Ek.js","assets/contact-MbfjI1mc.css"])))=>i.map(i=>d[i]);
import{r as m,R as j,u as et}from"./vendor-DfZvH2pX.js";var Q={exports:{}},S={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=m,st=Symbol.for("react.element"),at=Symbol.for("react.fragment"),ot=Object.prototype.hasOwnProperty,it=nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rt={key:!0,ref:!0,__self:!0,__source:!0};function G(t,e,n){var s,i={},a=null,r=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(r=e.ref);for(s in e)ot.call(e,s)&&!rt.hasOwnProperty(s)&&(i[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)i[s]===void 0&&(i[s]=e[s]);return{$$typeof:st,type:t,key:a,ref:r,props:i,_owner:it.current}}S.Fragment=at;S.jsx=G;S.jsxs=G;Q.exports=S;var o=Q.exports;function lt(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const U={};function A(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&U[e[0]]||(typeof e[0]=="string"&&(U[e[0]]=new Date),lt(...e))}const X=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}};function F(t,e,n){t.loadNamespaces(e,X(t,n))}function Z(t,e,n,s){typeof n=="string"&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,X(t,s))}function ct(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=e.languages[0],i=e.options?e.options.fallbackLng:!1,a=e.languages[e.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const r=(d,u)=>{const l=e.services.backendConnector.state[`${d}|${u}`];return l===-1||l===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!r(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(s,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||r(s,t)&&(!i||r(a,t)))}function dt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(A("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,a)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!a(i.isLanguageChangingTo,t))return!1}}):ct(t,e,n)}const ut=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,mt={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ht=t=>mt[t],gt=t=>t.replace(ut,ht);let L={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:gt};function pt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};L={...L,...t}}function ft(){return L}let Y;function vt(t){Y=t}function xt(){return Y}const Ne={type:"3rdParty",init(t){pt(t.options.react),vt(t)}},Ct=m.createContext();class _t{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const jt=(t,e)=>{const n=m.useRef();return m.useEffect(()=>{n.current=t},[t,e]),n.current};function J(t,e,n,s){return t.getFixedT(e,n,s)}function yt(t,e,n,s){return m.useCallback(J(t,e,n,s),[t,e,n,s])}function T(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:s,defaultNS:i}=m.useContext(Ct)||{},a=n||s||xt();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new _t),!a){A("You will need to pass in an i18next instance by using initReactI18next");const g=(x,p)=>typeof p=="string"?p:p&&typeof p=="object"&&typeof p.defaultValue=="string"?p.defaultValue:Array.isArray(x)?x[x.length-1]:x,v=[g,{},!1];return v.t=g,v.i18n={},v.ready=!1,v}a.options.react&&a.options.react.wait!==void 0&&A("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const r={...ft(),...a.options.react,...e},{useSuspense:d,keyPrefix:u}=r;let l=t||i||a.options&&a.options.defaultNS;l=typeof l=="string"?[l]:l||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(l);const c=(a.isInitialized||a.initializedStoreOnce)&&l.every(g=>dt(g,a,r)),V=yt(a,e.lng||null,r.nsMode==="fallback"?l:l[0],u),N=()=>V,H=()=>J(a,e.lng||null,r.nsMode==="fallback"?l:l[0],u),[P,b]=m.useState(N);let I=l.join();e.lng&&(I=`${e.lng}${I}`);const R=jt(I),_=m.useRef(!0);m.useEffect(()=>{const{bindI18n:g,bindI18nStore:v}=r;_.current=!0,!c&&!d&&(e.lng?Z(a,e.lng,l,()=>{_.current&&b(H)}):F(a,l,()=>{_.current&&b(H)})),c&&R&&R!==I&&_.current&&b(H);function x(){_.current&&b(H)}return g&&a&&a.on(g,x),v&&a&&a.store.on(v,x),()=>{_.current=!1,g&&a&&g.split(" ").forEach(p=>a.off(p,x)),v&&a&&v.split(" ").forEach(p=>a.store.off(p,x))}},[a,I]),m.useEffect(()=>{_.current&&c&&b(N)},[a,u,c]);const M=[P,a,c];if(M.t=P,M.i18n=a,M.ready=c,c||!c&&!d)return M;throw new Promise(g=>{e.lng?Z(a,e.lng,l,()=>g()):F(a,l,()=>g())})}var $={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},q=j.createContext&&j.createContext($),bt=["attr","size","title"];function It(t,e){if(t==null)return{};var n=Mt(t,e),s,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)s=a[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function Mt(t,e){if(t==null)return{};var n={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(e.indexOf(s)>=0)continue;n[s]=t[s]}return n}function O(){return O=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},O.apply(this,arguments)}function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?D(Object(n),!0).forEach(function(s){wt(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function wt(t,e,n){return e=Nt(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nt(t){var e=Ht(t,"string");return typeof e=="symbol"?e:e+""}function Ht(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function tt(t){return t&&t.map((e,n)=>j.createElement(e.tag,E({key:n},e.attr),tt(e.child)))}function h(t){return e=>j.createElement(kt,O({attr:E({},t.attr)},e),tt(t.child))}function kt(t){var e=n=>{var{attr:s,size:i,title:a}=t,r=It(t,bt),d=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),j.createElement("svg",O({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,r,{className:u,style:E(E({color:t.color||n.color},n.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&j.createElement("title",null,a),t.children)};return q!==void 0?j.createElement(q.Consumer,null,n=>e(n)):e($)}function He(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96zm0 0v288"},child:[]}]})(t)}function ke(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m112 184 144 144 144-144"},child:[]}]})(t)}function Ot(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 368 144 144m224 0L144 368"},child:[]}]})(t)}function Oe(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},child:[]}]})(t)}function Ee(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"},child:[]},{tag:"circle",attr:{cx:"256",cy:"192",r:"48",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"},child:[]}]})(t)}function Se(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"},child:[]}]})(t)}function Te(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"},child:[]}]})(t)}function Ve(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M227.6 213.1H256v57.1h-28.4z"},child:[]},{tag:"path",attr:{d:"M0 156v171.4h142.2V356H256v-28.6h256V156zm142.2 142.9h-28.4v-85.7H85.3v85.7H28.4V184.6h113.8zm142.2 0h-56.9v28.6h-56.9V184.6h113.8zm199.2 0h-28.4v-85.7h-28.4v85.7h-28.4v-85.7H370v85.7h-56.9V184.6h170.7v114.3z"},child:[]}]})(t)}function ze(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M392 440V320h40v160H64V320h40v120z"},child:[]},{tag:"path",attr:{d:"m149.1 308.77 198.57 40.87 8.4-39.32-198.57-40.87zm26.27-93.12L359.22 300 376 263.76l-183.82-84.84zm50.95-89 156 127.78 25.74-30.52-156-127.78zM328 32l-33.39 23.8 120.82 160.37L448 192zM144 400h204v-40H144z"},child:[]}]})(t)}function Be(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{width:"416",height:"320",x:"48",y:"96",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",rx:"40",ry:"40"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"m112 160 144 112 144-112"},child:[]}]})(t)}function Ae(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480z"},child:[]}]})(t)}function Le(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13 137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05z"},child:[]}]})(t)}function Pe(t){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 118a22 22 0 0 1-22-22V48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22zm0 368a22 22 0 0 1-22-22v-48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22zm113.14-321.14a22 22 0 0 1-15.56-37.55l33.94-33.94a22 22 0 0 1 31.11 31.11l-33.94 33.94a21.93 21.93 0 0 1-15.55 6.44zM108.92 425.08a22 22 0 0 1-15.55-37.56l33.94-33.94a22 22 0 1 1 31.11 31.11l-33.94 33.94a21.94 21.94 0 0 1-15.56 6.45zM464 278h-48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44zm-368 0H48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44zm307.08 147.08a21.94 21.94 0 0 1-15.56-6.45l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.55 37.56zM142.86 164.86a21.89 21.89 0 0 1-15.55-6.44l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.56 37.55zM256 358a102 102 0 1 1 102-102 102.12 102.12 0 0 1-102 102z"},child:[]}]})(t)}const Et="modulepreload",St=function(t){return"/"+t},K={},w=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),r=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.all(n.map(d=>{if(d=St(d),d in K)return;K[d]=!0;const u=d.endsWith(".css"),l=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${l}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":Et,u||(c.as="script",c.crossOrigin=""),c.href=d,r&&c.setAttribute("nonce",r),document.head.appendChild(c),u)return new Promise((V,N)=>{c.addEventListener("load",V),c.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${d}`)))})}))}return i.then(()=>e()).catch(a=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a})},Tt=[{path:"/",element:m.lazy(()=>w(()=>Promise.resolve().then(()=>Me),void 0)),pageKey:"about"},{path:"/resume",element:m.lazy(()=>w(()=>import("./resume-C7YykBKR.js").then(t=>t.i),__vite__mapDeps([0,1]))),pageKey:"resume"},{path:"/projects",element:m.lazy(()=>w(()=>import("./projects-B55fwS1N.js").then(t=>t.a),__vite__mapDeps([2,3,4]))),pageKey:"projects"},{path:"/projects/:slug",element:m.lazy(()=>w(()=>import("./index-tP2CQ_7Y.js"),__vite__mapDeps([5,2,3,4]))),pageKey:"projects"},{path:"/contact",element:m.lazy(()=>w(()=>import("./contact-CSCew8Ek.js").then(t=>t.i),__vite__mapDeps([6,3,7]))),pageKey:"contact"}],Vt=t=>{const n=et().pathname;return Tt.find(s=>s.path.includes(":slug")?n.startsWith("/projects/")&&n!=="/projects":s.path===n)},zt="_pageContent_1x6gl_50",Bt="_fade_1x6gl_1",At="_pageTitle_1x6gl_68",W={"dark-theme":"_dark-theme_1x6gl_1","light-theme":"_light-theme_1x6gl_25",pageContent:zt,fade:Bt,pageTitle:At},Lt=({title:t,className:e,titleClassName:n,children:s})=>{const i=Vt(),{t:a}=T(i==null?void 0:i.pageKey);return o.jsxs("article",{className:`container page-content ${W.pageContent} ${e??""}`,children:[o.jsx("header",{children:o.jsx("h2",{className:`h2 ${W.pageTitle} ${n??""}`,children:t??a("title")})}),s]})},Pt="_about_1ingd_50",Rt="_aboutTitle_1ingd_50",Ut="_aboutText_1ingd_59",z={"dark-theme":"_dark-theme_1ingd_1","light-theme":"_light-theme_1ingd_25",about:Pt,aboutTitle:Rt,aboutText:Ut},Ft="/assets/icon-design-CWbO1wVI.svg",Zt="/assets/icon-dev-Bt_NknEe.svg",qt="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2022%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.15'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3%201C1.89543%201%201%201.89543%201%203V37C1%2038.1046%201.89543%2039%203%2039H18.9C20.0046%2039%2020.9%2038.1046%2020.9%2037V3C20.9%201.89543%2020.0046%201%2018.9%201H15.6631V2H6.23676V1H3Z'%20fill='url(%23paint0_linear)'/%3e%3cpath%20d='M8.50854%2035.6745C8.13501%2035.6745%207.83221%2035.9773%207.83221%2036.3508C7.83221%2036.7243%208.13501%2037.0271%208.50854%2037.0271V35.6745ZM13.4633%2037.0271C13.8368%2037.0271%2014.1396%2036.7243%2014.1396%2036.3508C14.1396%2035.9773%2013.8368%2035.6745%2013.4633%2035.6745V37.0271ZM0.400024%2029.4141C0.400024%2029.7876%200.702827%2030.0904%201.07635%2030.0904C1.44988%2030.0904%201.75268%2029.7876%201.75268%2029.4141H0.400024ZM1.75268%2032.387C1.75268%2032.0134%201.44988%2031.7106%201.07635%2031.7106C0.702827%2031.7106%200.400024%2032.0134%200.400024%2032.387H1.75268ZM20.2192%207.61303C20.2192%207.98656%2020.522%208.28936%2020.8955%208.28936C21.269%208.28936%2021.5718%207.98656%2021.5718%207.61303H20.2192ZM21.5718%2010.5859C21.5718%2010.2124%2021.269%209.90956%2020.8955%209.90956C20.522%209.90956%2020.2192%2010.2124%2020.2192%2010.5859H21.5718ZM18.48%2038.6473H3.49181V40H18.48V38.6473ZM3.49181%201.35266H6.52662V0H3.49181V1.35266ZM5.8503%201.69206H7.20295V0.676328H5.8503V1.69206ZM7.49281%203.33457H14.4791V1.98191H7.49281V3.33457ZM6.52662%201.35266H15.4452V0H6.52662V1.35266ZM15.4452%201.35266H18.48V0H15.4452V1.35266ZM16.1216%201.69206V0.676328H14.7689V1.69206H16.1216ZM8.50854%2037.0271H13.4633V35.6745H8.50854V37.0271ZM1.75268%2029.4141V3.09179H0.400024V29.4141H1.75268ZM1.75268%2036.9082V32.387H0.400024V36.9082H1.75268ZM20.2192%203.09179V7.61303H21.5718V3.09179H20.2192ZM20.2192%2010.5859V36.9082H21.5718V10.5859H20.2192ZM14.4791%203.33457C15.3862%203.33457%2016.1216%202.5992%2016.1216%201.69206H14.7689C14.7689%201.85214%2014.6392%201.98191%2014.4791%201.98191V3.33457ZM3.49181%2038.6473C2.53132%2038.6473%201.75268%2037.8687%201.75268%2036.9082H0.400024C0.400024%2038.6157%201.78427%2040%203.49181%2040V38.6473ZM18.48%2040C20.1876%2040%2021.5718%2038.6157%2021.5718%2036.9082H20.2192C20.2192%2037.8687%2019.4405%2038.6473%2018.48%2038.6473V40ZM18.48%201.35266C19.4405%201.35266%2020.2192%202.13129%2020.2192%203.09179H21.5718C21.5718%201.38424%2020.1876%200%2018.48%200V1.35266ZM5.8503%201.69206C5.8503%202.5992%206.58567%203.33457%207.49281%203.33457V1.98191C7.33272%201.98191%207.20295%201.85214%207.20295%201.69206H5.8503ZM3.49181%200C1.78427%200%200.400024%201.38424%200.400024%203.09179H1.75268C1.75268%202.13129%202.53132%201.35266%203.49181%201.35266V0Z'%20fill='url(%23paint1_linear)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='2.12767'%20y1='1'%20x2='30.7018'%20y2='17.5237'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.259336'%20stop-color='%23FFDB6E'/%3e%3cstop%20offset='1'%20stop-color='%23FFBC5E'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='1.59976'%20y1='8.08974e-07'%20x2='31.8368'%20y2='17.6727'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.259336'%20stop-color='%23FFDB6E'/%3e%3cstop%20offset='1'%20stop-color='%23FFBC5E'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Dt="/assets/icon-photo-Bvt7fPNO.svg",Kt="_interests_1nez9_50",Wt="_interestsTitle_1nez9_54",Qt="_interestsList_1nez9_58",Gt="_interestsItem_1nez9_70",Xt="_interestsIconBox_1nez9_96",Yt="_interestsContentBox_1nez9_109",Jt="_interestsItemTitle_1nez9_118",$t="_interestsItemText_1nez9_122",C={"dark-theme":"_dark-theme_1nez9_1","light-theme":"_light-theme_1nez9_25",interests:Kt,interestsTitle:Wt,interestsList:Qt,interestsItem:Gt,interestsIconBox:Xt,interestsContentBox:Yt,interestsItemTitle:Jt,interestsItemText:$t},te={webDesign:Ft,webDevelopment:Zt,mobileApps:qt,photography:Dt},ee=()=>{const{t}=T("about"),e=t("whatImDoing.interests",{returnObjects:!0});return o.jsxs("section",{className:C.interests,children:[o.jsx("h3",{className:`h3 ${C.interestsTitle}`,children:t("whatImDoing.title")}),o.jsx("ul",{className:C.interestsList,children:Object.entries(e).map(([n,s])=>{const i=te[n];return o.jsxs("li",{className:C.interestsItem,children:[o.jsx("div",{className:C.interestsIconBox,children:o.jsx("img",{src:i,alt:s.iconAlt})}),o.jsxs("div",{className:C.interestsContentBox,children:[o.jsx("h4",{className:`h4 ${C.interestsItemTitle}`,children:s.title}),o.jsx("p",{className:C.interestsItemText,children:s.description})]})]},n)})})]})},k="data:image/png;base64,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",ne="_testimonials_q5q6a_50",se="_testimonialsList_q5q6a_54",B={"dark-theme":"_dark-theme_q5q6a_1","light-theme":"_light-theme_q5q6a_25",testimonials:ne,testimonialsList:se},ae="_modalContainer_1wrd5_50",oe="_active_1wrd5_68",ie="_overlay_1wrd5_78",re="_modal_1wrd5_50",le="_modalCloseBtn_1wrd5_133",y={"dark-theme":"_dark-theme_1wrd5_1","light-theme":"_light-theme_1wrd5_25",modalContainer:ae,active:oe,overlay:ie,modal:re,modalCloseBtn:le},ce=({className:t="",isOpen:e,onClose:n,children:s})=>o.jsxs("div",{className:`${y.modalContainer} ${e?y.active:""}`,children:[o.jsx("div",{className:`${y.overlay} ${e?y.active:""}`,onClick:n,onKeyDown:i=>i.key==="Enter"&&n(),tabIndex:0,role:"button"}),o.jsxs("section",{className:`${y.modal} ${t}`,children:[o.jsx("button",{className:y.modalCloseBtn,onClick:n,children:o.jsx(Ot,{})}),s]})]}),de="data:image/svg+xml,%3csvg%20width='34'%20height='23'%20viewBox='0%200%2034%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.63091%200.144315L11.1066%201.03792C11.3675%201.19594%2011.4272%201.54856%2011.2349%201.78536C9.08005%204.43892%207.12216%207.31629%207.12195%2010.8825C10.0635%2010.8825%2013.0949%2013.3058%2013.0949%2016.4084C13.0949%2020.7423%209.61052%2023.4414%206.12633%2022.939C2.64214%2022.4367%200.58078%2019.9249%200.153573%2016.9107C-0.826125%209.99852%202.98637%203.77393%208.59945%200.151692C8.91222%20-0.0501455%209.3125%20-0.0485027%209.63091%200.144315ZM30.5361%200.144315L32.0117%201.03792C32.2727%201.19594%2032.3323%201.54856%2032.14%201.78536C29.9852%204.43892%2028.0273%207.31629%2028.0271%2010.8825C30.9687%2010.8825%2034%2013.3058%2034%2016.4084C34%2020.7423%2030.5157%2023.4414%2027.0315%2022.939C23.5473%2022.4367%2021.4859%2019.9249%2021.0587%2016.9107C20.079%209.99852%2023.8915%203.77393%2029.5046%200.151692C29.8174%20-0.0501455%2030.2177%20-0.0485027%2030.5361%200.144315Z'%20fill='url(%23paint0_linear)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='1.92667'%20y1='4.65138e-07'%20x2='19.7024'%20y2='29.0178'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.259336'%20stop-color='%23FFDB6E'/%3e%3cstop%20offset='1'%20stop-color='%23FFBC5E'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",ue="_testimonialsItem_tuwvt_50",me="_testimonialsContentCard_tuwvt_60",he="_testimonialsAvatarBox_tuwvt_85",ge="_testimonialsItemTitle_tuwvt_104",pe="_testimonialsText_tuwvt_114",fe="_testimonialsModalAvatarBox_tuwvt_132",ve="_testimonialsModalImgWrapper_tuwvt_154",xe="_testimonialsModalTitle_tuwvt_172",Ce="_testimonialsModalContent_tuwvt_176",f={"dark-theme":"_dark-theme_tuwvt_1","light-theme":"_light-theme_tuwvt_25",testimonialsItem:ue,testimonialsContentCard:me,testimonialsAvatarBox:he,testimonialsItemTitle:ge,testimonialsText:pe,testimonialsModalAvatarBox:fe,testimonialsModalImgWrapper:ve,testimonialsModalTitle:xe,testimonialsModalContent:Ce},_e=({data:t,imgSrc:e})=>{const[n,s]=m.useState(!1),i=()=>s(!0),a=()=>s(!1);return o.jsxs("li",{className:f.testimonialsItem,children:[o.jsxs("div",{className:f.testimonialsContentCard,onClick:i,onKeyDown:r=>r.key==="Enter"&&i(),tabIndex:0,role:"button",children:[o.jsx("figure",{className:f.testimonialsAvatarBox,children:o.jsx("img",{src:e,alt:t.avatarAlt,width:"60"})}),o.jsx("h4",{className:`h4 ${f.testimonialsItemTitle}`,children:t.name}),o.jsx("div",{className:f.testimonialsText,children:o.jsx("p",{children:t.text})})]}),o.jsxs(ce,{isOpen:n,onClose:a,children:[o.jsxs("div",{className:f.testimonialsModalImgWrapper,children:[o.jsx("figure",{className:f.testimonialsModalAvatarBox,children:o.jsx("img",{src:e,alt:t.avatarAlt,width:"80"})}),o.jsx("img",{src:de,alt:"quote icon"})]}),o.jsx("div",{className:f.testimonialsModalContent,children:o.jsxs("div",{className:f.testimonialsModalTextContent,children:[o.jsx("h3",{className:`h3 ${f.testimonialsModalTitle}`,children:t.name}),o.jsx("time",{dateTime:t.dateISO,children:t.date}),o.jsx("div",{children:o.jsx("p",{children:t.text})})]})})]})]})},je={danielLewis:k,jessicaMiller:k,emilyEvans:k,henryWilliam:k},ye=()=>{const{t}=T("about"),e=t("testimonials.testimonials",{returnObjects:!0});return o.jsxs("section",{className:B.testimonials,children:[o.jsx("h3",{className:`h3 ${B.testimonialsTitle}`,children:t("testimonials.title")}),o.jsx("ul",{className:`${B.testimonialsList} has-scrollbar`,children:Object.entries(e).map(([n,s])=>o.jsx(_e,{data:s,imgSrc:je[n]},n))})]})},be=()=>{const{t}=T("about"),e=t("description",{returnObjects:!0});return o.jsxs(Lt,{className:z.about,titleClassName:z.aboutTitle,children:[o.jsx("section",{className:z.aboutText,children:e.map((n,s)=>o.jsx("p",{children:n},s))}),o.jsx(ee,{}),o.jsx(ye,{})]})},Ie=be,Me=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"}));export{h as G,He as I,ce as M,Lt as P,w as _,ke as a,Le as b,Se as c,Te as d,Be as e,Ee as f,Ve as g,ze as h,Ne as i,o as j,Oe as k,Ae as l,Pe as m,Tt as r,T as u};
