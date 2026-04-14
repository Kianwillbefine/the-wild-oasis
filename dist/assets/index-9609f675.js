var tt=Object.defineProperty;var rt=(t,e,r)=>e in t?tt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var ve=(t,e,r)=>(rt(t,typeof e!="symbol"?e+"":e,r),r);import{R as We,j as O,a as s,$ as at,c as nt,p as ot,b as it,r as z,W as st,d as y,u as $e,e as ut,z as ct,f as De,F as le,A as _,n as _e,L as lt,B as dt,g as ft,h as C,N as mt,i as ht,k as gt}from"./vendor-75fc689b.js";import{a as vt}from"./supabase-1545db47.js";import{u as j,a as yt,b as bt,Q as pt,c as wt}from"./query-cdedaf21.js";import{H as Tt,a as Dt,b as Ot,c as Et}from"./icons-e81217d1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const Ct="modulepreload",_t=function(t){return"/"+t},ke={},k=function(e,r,a){if(!r||r.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=_t(o),o in ke)return;ke[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!a)for(let d=n.length-1;d>=0;d--){const f=n[d];if(f.href===o&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Ct,i||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),i)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};class ne extends We.Component{constructor(r){super(r);ve(this,"handleReload",()=>{window.location.reload()});ve(this,"handleGoHome",()=>{window.location.assign("/")});this.state={hasError:!1,error:null}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,a){console.error("[render-error]",r,a)}render(){var r;return this.state.hasError?O("div",{style:{padding:24},children:[s("h1",{children:"页面渲染失败"}),s("p",{children:((r=this.state.error)==null?void 0:r.message)||"未知错误"}),!1,s("button",{onClick:this.handleReload,children:"刷新页面"}),s("button",{onClick:this.handleGoHome,children:"返回首页"})]}):this.props.children}}const Ie=at`
:root {
  &, &.light-mode {
  /* 灰色 */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  

    --image-grayscale: 0;
  --image-opacity: 100%;
  }
  
  &.dark-mode {
    --color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
  }
  
  /* 靛蓝色 */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;
  
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* 为深色模式创建动画 */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* 父选择器，终于可以用了 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* 用于深色模式 */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`,oe="https://figkpoeidrbscnjrzpui.supabase.co",kt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZ2twb2VpZHJic2NuanJ6cHVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MzM3MTQsImV4cCI6MjA3OTUwOTcxNH0.y1jnPDIDa-dMXQ249Tyw1YIOpWZptN4S0ep93r_Q09I",b=vt(oe,kt);async function go({fullName:t,email:e,password:r}){const{data:a,error:n}=await b.auth.signUp({email:e,password:r,options:{data:{fullName:t,avatar:""}}});if(n)throw new Error(n.message);return a}async function vo({email:t,password:e}){const{data:r,error:a}=await b.auth.signInWithPassword({email:t,password:e});if(a)throw new Error(a.message);return r}async function Mt(){const{data:t}=await b.auth.getSession();if(!t.session)return null;const{data:e,error:r}=await b.auth.getUser();if(r)throw new Error(r.message);return e==null?void 0:e.user}async function yo(){const{error:t}=await b.auth.signOut();if(t)throw new Error(t.message)}async function bo({password:t,fullName:e,avatar:r}){let a;t&&(a={password:t}),e&&(a={data:{fullName:e}});const{data:n,error:o}=await b.auth.updateUser(a);if(o)throw new Error(o.message);if(!r)return n;const i=`avatar-${n.user.id}-${Math.random()}`,{error:l}=await b.storage.from("avatars").upload(i,r);if(l)throw new Error(l.message);const{data:u,error:c}=await b.auth.updateUser({data:{avatar:`${oe}/storage/v1/object/public/avatars/${i}`}});if(c)throw new Error(c.message);return u}const S={CHECKING:"checking",AUTHENTICATED:"authenticated",ANONYMOUS:"anonymous"},R=nt(ot(t=>({authStatus:S.CHECKING,isHydrated:!1,redirectAfterLogin:null,user:null,startAuthCheck:()=>t({authStatus:S.CHECKING}),setAuthenticated:(e=null)=>t({authStatus:S.AUTHENTICATED,user:e,isHydrated:!0}),setAnonymous:()=>t({authStatus:S.ANONYMOUS,user:null,isHydrated:!0}),setRedirectAfterLogin:e=>t({redirectAfterLogin:e}),clearRedirectAfterLogin:()=>t({redirectAfterLogin:null}),finishHydration:()=>t({isHydrated:!0}),resetAuthStore:()=>t({authStatus:S.ANONYMOUS,isHydrated:!0,redirectAfterLogin:null,user:null})}),{name:"auth",storage:it(()=>localStorage),partialize:t=>({redirectAfterLogin:t.redirectAfterLogin}),onRehydrateStorage:()=>t=>{t==null||t.finishHydration()}}));function St(){const t=R(i=>i.startAuthCheck),e=R(i=>i.setAuthenticated),r=R(i=>i.setAnonymous),{isLoading:a,data:n,isError:o}=j({queryKey:["user"],queryFn:Mt,staleTime:5*60*1e3});return z.useEffect(function(){a&&t()},[a,t]),z.useEffect(function(){if(!a){if(o||!n){r();return}e(n)}},[o,a,r,e,n]),{isLoading:a,user:n,isAuthenticated:(n==null?void 0:n.role)==="authenticated"}}const Pt=st`
  to {
    transform: rotate(1turn)
  }
`,Oe=y.div`
  margin: 4.8rem auto;

  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000) top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-brand-600));
  mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${Pt} 1.5s infinite linear;
`,xt=y.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;function Rt({children:t}){St();const e=R(a=>a.authStatus);return!R(a=>a.isHydrated)||e===S.CHECKING?s(xt,{children:s(Oe,{})}):t}function Nt({children:t}){const e=$e(),r=ut(),a=R(o=>o.authStatus),n=R(o=>o.setRedirectAfterLogin);return z.useEffect(function(){if(a!==S.ANONYMOUS)return;const o=`${r.pathname}${r.search}${r.hash}`;n(o),e("/login",{replace:!0})},[a,r,e,n]),a===S.AUTHENTICATED?t:null}function Lt({children:t}){const e=$e(),r=R(o=>o.authStatus),a=R(o=>o.redirectAfterLogin),n=R(o=>o.clearRedirectAfterLogin);return z.useEffect(function(){if(r!==S.AUTHENTICATED)return;const o=a||"/dashboard";n(),e(o,{replace:!0})},[r,n,e,a]),r===S.ANONYMOUS?t:null}const M=({importComponent:t,Loading:e=()=>s(Oe,{}),Error:r=({error:n})=>ct.error((n==null?void 0:n.message)??"Failed to load component"),...a})=>{try{const n=z.lazy(t);return s(z.Suspense,{fallback:s(e,{}),children:s(n,{...a})})}catch(n){return s(r,{error:n})}};function ie(t){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(t)}function N(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function g(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function v(t){g(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||ie(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function At(t,e){g(2,arguments);var r=v(t),a=N(e);return isNaN(a)?new Date(NaN):(a&&r.setDate(r.getDate()+a),r)}function Ut(t,e){g(2,arguments);var r=v(t).getTime(),a=N(e);return new Date(r+a)}var Wt={};function Q(){return Wt}function Te(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function ae(t,e){g(2,arguments);var r=v(t),a=v(e),n=r.getTime()-a.getTime();return n<0?-1:n>0?1:n}var Ye=6e4,Fe=36e5;function $t(t){return g(1,arguments),t instanceof Date||ie(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function It(t){if(g(1,arguments),!$t(t)&&typeof t!="number")return!1;var e=v(t);return!isNaN(Number(e))}function Yt(t,e){g(2,arguments);var r=v(t),a=v(e),n=r.getFullYear()-a.getFullYear(),o=r.getMonth()-a.getMonth();return n*12+o}function Ft(t,e){return g(2,arguments),v(t).getTime()-v(e).getTime()}var Me={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},Ht="trunc";function qt(t){return t?Me[t]:Me[Ht]}function zt(t){g(1,arguments);var e=v(t);return e.setHours(23,59,59,999),e}function Bt(t){g(1,arguments);var e=v(t),r=e.getMonth();return e.setFullYear(e.getFullYear(),r+1,0),e.setHours(23,59,59,999),e}function Gt(t){g(1,arguments);var e=v(t);return zt(e).getTime()===Bt(e).getTime()}function Xt(t,e){g(2,arguments);var r=v(t),a=v(e),n=ae(r,a),o=Math.abs(Yt(r,a)),i;if(o<1)i=0;else{r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-n*o);var l=ae(r,a)===-n;Gt(v(t))&&o===1&&ae(t,a)===1&&(l=!1),i=n*(o-Number(l))}return i===0?0:i}function Vt(t,e,r){g(2,arguments);var a=Ft(t,e)/1e3;return qt(r==null?void 0:r.roundingMethod)(a)}function jt(t,e){g(2,arguments);var r=N(e);return Ut(t,-r)}var Qt=864e5;function Kt(t){g(1,arguments);var e=v(t),r=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),n=r-a;return Math.floor(n/Qt)+1}function se(t){g(1,arguments);var e=1,r=v(t),a=r.getUTCDay(),n=(a<e?7:0)+a-e;return r.setUTCDate(r.getUTCDate()-n),r.setUTCHours(0,0,0,0),r}function He(t){g(1,arguments);var e=v(t),r=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var n=se(a),o=new Date(0);o.setUTCFullYear(r,0,4),o.setUTCHours(0,0,0,0);var i=se(o);return e.getTime()>=n.getTime()?r+1:e.getTime()>=i.getTime()?r:r-1}function Jt(t){g(1,arguments);var e=He(t),r=new Date(0);r.setUTCFullYear(e,0,4),r.setUTCHours(0,0,0,0);var a=se(r);return a}var Zt=6048e5;function er(t){g(1,arguments);var e=v(t),r=se(e).getTime()-Jt(e).getTime();return Math.round(r/Zt)+1}function B(t,e){var r,a,n,o,i,l,u,c;g(1,arguments);var d=Q(),f=N((r=(a=(n=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(i=e.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:d.weekStartsOn)!==null&&a!==void 0?a:(u=d.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&r!==void 0?r:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=v(t),m=w.getUTCDay(),p=(m<f?7:0)+m-f;return w.setUTCDate(w.getUTCDate()-p),w.setUTCHours(0,0,0,0),w}function qe(t,e){var r,a,n,o,i,l,u,c;g(1,arguments);var d=v(t),f=d.getUTCFullYear(),w=Q(),m=N((r=(a=(n=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(i=e.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:w.firstWeekContainsDate)!==null&&a!==void 0?a:(u=w.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&r!==void 0?r:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(f+1,0,m),p.setUTCHours(0,0,0,0);var W=B(p,e),L=new Date(0);L.setUTCFullYear(f,0,m),L.setUTCHours(0,0,0,0);var $=B(L,e);return d.getTime()>=W.getTime()?f+1:d.getTime()>=$.getTime()?f:f-1}function tr(t,e){var r,a,n,o,i,l,u,c;g(1,arguments);var d=Q(),f=N((r=(a=(n=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(i=e.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:d.firstWeekContainsDate)!==null&&a!==void 0?a:(u=d.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&r!==void 0?r:1),w=qe(t,e),m=new Date(0);m.setUTCFullYear(w,0,f),m.setUTCHours(0,0,0,0);var p=B(m,e);return p}var rr=6048e5;function ar(t,e){g(1,arguments);var r=v(t),a=B(r,e).getTime()-tr(r,e).getTime();return Math.round(a/rr)+1}function h(t,e){for(var r=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return r+a}var nr={y:function(e,r){var a=e.getUTCFullYear(),n=a>0?a:1-a;return h(r==="yy"?n%100:n,r.length)},M:function(e,r){var a=e.getUTCMonth();return r==="M"?String(a+1):h(a+1,2)},d:function(e,r){return h(e.getUTCDate(),r.length)},a:function(e,r){var a=e.getUTCHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(e,r){return h(e.getUTCHours()%12||12,r.length)},H:function(e,r){return h(e.getUTCHours(),r.length)},m:function(e,r){return h(e.getUTCMinutes(),r.length)},s:function(e,r){return h(e.getUTCSeconds(),r.length)},S:function(e,r){var a=r.length,n=e.getUTCMilliseconds(),o=Math.floor(n*Math.pow(10,a-3));return h(o,r.length)}};const U=nr;var H={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},or={G:function(e,r,a){var n=e.getUTCFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(e,r,a){if(r==="yo"){var n=e.getUTCFullYear(),o=n>0?n:1-n;return a.ordinalNumber(o,{unit:"year"})}return U.y(e,r)},Y:function(e,r,a,n){var o=qe(e,n),i=o>0?o:1-o;if(r==="YY"){var l=i%100;return h(l,2)}return r==="Yo"?a.ordinalNumber(i,{unit:"year"}):h(i,r.length)},R:function(e,r){var a=He(e);return h(a,r.length)},u:function(e,r){var a=e.getUTCFullYear();return h(a,r.length)},Q:function(e,r,a){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(r){case"Q":return String(n);case"QQ":return h(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,r,a){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(r){case"q":return String(n);case"qq":return h(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,r,a){var n=e.getUTCMonth();switch(r){case"M":case"MM":return U.M(e,r);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(e,r,a){var n=e.getUTCMonth();switch(r){case"L":return String(n+1);case"LL":return h(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(e,r,a,n){var o=ar(e,n);return r==="wo"?a.ordinalNumber(o,{unit:"week"}):h(o,r.length)},I:function(e,r,a){var n=er(e);return r==="Io"?a.ordinalNumber(n,{unit:"week"}):h(n,r.length)},d:function(e,r,a){return r==="do"?a.ordinalNumber(e.getUTCDate(),{unit:"date"}):U.d(e,r)},D:function(e,r,a){var n=Kt(e);return r==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):h(n,r.length)},E:function(e,r,a){var n=e.getUTCDay();switch(r){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(e,r,a,n){var o=e.getUTCDay(),i=(o-n.weekStartsOn+8)%7||7;switch(r){case"e":return String(i);case"ee":return h(i,2);case"eo":return a.ordinalNumber(i,{unit:"day"});case"eee":return a.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(o,{width:"short",context:"formatting"});case"eeee":default:return a.day(o,{width:"wide",context:"formatting"})}},c:function(e,r,a,n){var o=e.getUTCDay(),i=(o-n.weekStartsOn+8)%7||7;switch(r){case"c":return String(i);case"cc":return h(i,r.length);case"co":return a.ordinalNumber(i,{unit:"day"});case"ccc":return a.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(o,{width:"narrow",context:"standalone"});case"cccccc":return a.day(o,{width:"short",context:"standalone"});case"cccc":default:return a.day(o,{width:"wide",context:"standalone"})}},i:function(e,r,a){var n=e.getUTCDay(),o=n===0?7:n;switch(r){case"i":return String(o);case"ii":return h(o,r.length);case"io":return a.ordinalNumber(o,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(e,r,a){var n=e.getUTCHours(),o=n/12>=1?"pm":"am";switch(r){case"a":case"aa":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,r,a){var n=e.getUTCHours(),o;switch(n===12?o=H.noon:n===0?o=H.midnight:o=n/12>=1?"pm":"am",r){case"b":case"bb":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,r,a){var n=e.getUTCHours(),o;switch(n>=17?o=H.evening:n>=12?o=H.afternoon:n>=4?o=H.morning:o=H.night,r){case"B":case"BB":case"BBB":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,r,a){if(r==="ho"){var n=e.getUTCHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return U.h(e,r)},H:function(e,r,a){return r==="Ho"?a.ordinalNumber(e.getUTCHours(),{unit:"hour"}):U.H(e,r)},K:function(e,r,a){var n=e.getUTCHours()%12;return r==="Ko"?a.ordinalNumber(n,{unit:"hour"}):h(n,r.length)},k:function(e,r,a){var n=e.getUTCHours();return n===0&&(n=24),r==="ko"?a.ordinalNumber(n,{unit:"hour"}):h(n,r.length)},m:function(e,r,a){return r==="mo"?a.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):U.m(e,r)},s:function(e,r,a){return r==="so"?a.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):U.s(e,r)},S:function(e,r){return U.S(e,r)},X:function(e,r,a,n){var o=n._originalDate||e,i=o.getTimezoneOffset();if(i===0)return"Z";switch(r){case"X":return Pe(i);case"XXXX":case"XX":return Y(i);case"XXXXX":case"XXX":default:return Y(i,":")}},x:function(e,r,a,n){var o=n._originalDate||e,i=o.getTimezoneOffset();switch(r){case"x":return Pe(i);case"xxxx":case"xx":return Y(i);case"xxxxx":case"xxx":default:return Y(i,":")}},O:function(e,r,a,n){var o=n._originalDate||e,i=o.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+Se(i,":");case"OOOO":default:return"GMT"+Y(i,":")}},z:function(e,r,a,n){var o=n._originalDate||e,i=o.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+Se(i,":");case"zzzz":default:return"GMT"+Y(i,":")}},t:function(e,r,a,n){var o=n._originalDate||e,i=Math.floor(o.getTime()/1e3);return h(i,r.length)},T:function(e,r,a,n){var o=n._originalDate||e,i=o.getTime();return h(i,r.length)}};function Se(t,e){var r=t>0?"-":"+",a=Math.abs(t),n=Math.floor(a/60),o=a%60;if(o===0)return r+String(n);var i=e||"";return r+String(n)+i+h(o,2)}function Pe(t,e){if(t%60===0){var r=t>0?"-":"+";return r+h(Math.abs(t)/60,2)}return Y(t,e)}function Y(t,e){var r=e||"",a=t>0?"-":"+",n=Math.abs(t),o=h(Math.floor(n/60),2),i=h(n%60,2);return a+o+r+i}const ir=or;var xe=function(e,r){switch(e){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},ze=function(e,r){switch(e){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},sr=function(e,r){var a=e.match(/(P+)(p+)?/)||[],n=a[1],o=a[2];if(!o)return xe(e,r);var i;switch(n){case"P":i=r.dateTime({width:"short"});break;case"PP":i=r.dateTime({width:"medium"});break;case"PPP":i=r.dateTime({width:"long"});break;case"PPPP":default:i=r.dateTime({width:"full"});break}return i.replace("{{date}}",xe(n,r)).replace("{{time}}",ze(o,r))},ur={p:ze,P:sr};const cr=ur;var lr=["D","DD"],dr=["YY","YYYY"];function fr(t){return lr.indexOf(t)!==-1}function mr(t){return dr.indexOf(t)!==-1}function Re(t,e,r){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(r,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var hr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},gr=function(e,r,a){var n,o=hr[e];return typeof o=="string"?n=o:r===1?n=o.one:n=o.other.replace("{{count}}",r.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};const vr=gr;function q(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.width?String(e.width):t.defaultWidth,a=t.formats[r]||t.formats[t.defaultWidth];return a}}var yr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},br={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},pr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},wr={date:q({formats:yr,defaultWidth:"full"}),time:q({formats:br,defaultWidth:"full"}),dateTime:q({formats:pr,defaultWidth:"full"})};const Tr=wr;var Dr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Or=function(e,r,a,n){return Dr[e]};const Er=Or;function P(t){return function(e,r){var a=r!=null&&r.context?String(r.context):"standalone",n;if(a==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=r!=null&&r.width?String(r.width):o;n=t.formattingValues[i]||t.formattingValues[o]}else{var l=t.defaultWidth,u=r!=null&&r.width?String(r.width):t.defaultWidth;n=t.values[u]||t.values[l]}var c=t.argumentCallback?t.argumentCallback(e):e;return n[c]}}var Cr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},_r={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},kr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Mr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Sr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Pr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},xr=function(e,r){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},Rr={ordinalNumber:xr,era:P({values:Cr,defaultWidth:"wide"}),quarter:P({values:_r,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:P({values:kr,defaultWidth:"wide"}),day:P({values:Mr,defaultWidth:"wide"}),dayPeriod:P({values:Sr,defaultWidth:"wide",formattingValues:Pr,defaultFormattingWidth:"wide"})};const Nr=Rr;function x(t){return function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.width,n=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(n);if(!o)return null;var i=o[0],l=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?Ar(l,function(f){return f.test(i)}):Lr(l,function(f){return f.test(i)}),c;c=t.valueCallback?t.valueCallback(u):u,c=r.valueCallback?r.valueCallback(c):c;var d=e.slice(i.length);return{value:c,rest:d}}}function Lr(t,e){for(var r in t)if(t.hasOwnProperty(r)&&e(t[r]))return r}function Ar(t,e){for(var r=0;r<t.length;r++)if(e(t[r]))return r}function Be(t){return function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.match(t.matchPattern);if(!a)return null;var n=a[0],o=e.match(t.parsePattern);if(!o)return null;var i=t.valueCallback?t.valueCallback(o[0]):o[0];i=r.valueCallback?r.valueCallback(i):i;var l=e.slice(n.length);return{value:i,rest:l}}}var Ur=/^(\d+)(th|st|nd|rd)?/i,Wr=/\d+/i,$r={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ir={any:[/^b/i,/^(a|c)/i]},Yr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Fr={any:[/1/i,/2/i,/3/i,/4/i]},Hr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},qr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},zr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Br={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Gr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Xr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Vr={ordinalNumber:Be({matchPattern:Ur,parsePattern:Wr,valueCallback:function(e){return parseInt(e,10)}}),era:x({matchPatterns:$r,defaultMatchWidth:"wide",parsePatterns:Ir,defaultParseWidth:"any"}),quarter:x({matchPatterns:Yr,defaultMatchWidth:"wide",parsePatterns:Fr,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:x({matchPatterns:Hr,defaultMatchWidth:"wide",parsePatterns:qr,defaultParseWidth:"any"}),day:x({matchPatterns:zr,defaultMatchWidth:"wide",parsePatterns:Br,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:Gr,defaultMatchWidth:"any",parsePatterns:Xr,defaultParseWidth:"any"})};const jr=Vr;var Qr={code:"en-US",formatDistance:vr,formatLong:Tr,formatRelative:Er,localize:Nr,match:jr,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ge=Qr;var Kr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Jr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Zr=/^'([^]*?)'?$/,ea=/''/g,ta=/[a-zA-Z]/;function de(t,e,r){var a,n,o,i,l,u,c,d,f,w,m,p,W,L,$,F,I,me;g(2,arguments);var Qe=String(e),G=Q(),X=(a=(n=r==null?void 0:r.locale)!==null&&n!==void 0?n:G.locale)!==null&&a!==void 0?a:Ge,he=N((o=(i=(l=(u=r==null?void 0:r.firstWeekContainsDate)!==null&&u!==void 0?u:r==null||(c=r.locale)===null||c===void 0||(d=c.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&l!==void 0?l:G.firstWeekContainsDate)!==null&&i!==void 0?i:(f=G.locale)===null||f===void 0||(w=f.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(he>=1&&he<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var ge=N((m=(p=(W=(L=r==null?void 0:r.weekStartsOn)!==null&&L!==void 0?L:r==null||($=r.locale)===null||$===void 0||(F=$.options)===null||F===void 0?void 0:F.weekStartsOn)!==null&&W!==void 0?W:G.weekStartsOn)!==null&&p!==void 0?p:(I=G.locale)===null||I===void 0||(me=I.options)===null||me===void 0?void 0:me.weekStartsOn)!==null&&m!==void 0?m:0);if(!(ge>=0&&ge<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!X.localize)throw new RangeError("locale must contain localize property");if(!X.formatLong)throw new RangeError("locale must contain formatLong property");var J=v(t);if(!It(J))throw new RangeError("Invalid time value");var Ke=Te(J),Je=jt(J,Ke),Ze={firstWeekContainsDate:he,weekStartsOn:ge,locale:X,_originalDate:J},et=Qe.match(Jr).map(function(E){var A=E[0];if(A==="p"||A==="P"){var Z=cr[A];return Z(E,X.formatLong)}return E}).join("").match(Kr).map(function(E){if(E==="''")return"'";var A=E[0];if(A==="'")return ra(E);var Z=ir[A];if(Z)return!(r!=null&&r.useAdditionalWeekYearTokens)&&mr(E)&&Re(E,e,String(t)),!(r!=null&&r.useAdditionalDayOfYearTokens)&&fr(E)&&Re(E,e,String(t)),Z(Je,E,X.localize,Ze);if(A.match(ta))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return E}).join("");return et}function ra(t){var e=t.match(Zr);return e?e[1].replace(ea,"'"):t}function Xe(t,e){if(t==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}function aa(t){return Xe({},t)}var Ne=1440,na=2520,ye=43200,oa=86400;function ia(t,e,r){var a,n;g(2,arguments);var o=Q(),i=(a=(n=r==null?void 0:r.locale)!==null&&n!==void 0?n:o.locale)!==null&&a!==void 0?a:Ge;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var l=ae(t,e);if(isNaN(l))throw new RangeError("Invalid time value");var u=Xe(aa(r),{addSuffix:!!(r!=null&&r.addSuffix),comparison:l}),c,d;l>0?(c=v(e),d=v(t)):(c=v(t),d=v(e));var f=Vt(d,c),w=(Te(d)-Te(c))/1e3,m=Math.round((f-w)/60),p;if(m<2)return r!=null&&r.includeSeconds?f<5?i.formatDistance("lessThanXSeconds",5,u):f<10?i.formatDistance("lessThanXSeconds",10,u):f<20?i.formatDistance("lessThanXSeconds",20,u):f<40?i.formatDistance("halfAMinute",0,u):f<60?i.formatDistance("lessThanXMinutes",1,u):i.formatDistance("xMinutes",1,u):m===0?i.formatDistance("lessThanXMinutes",1,u):i.formatDistance("xMinutes",m,u);if(m<45)return i.formatDistance("xMinutes",m,u);if(m<90)return i.formatDistance("aboutXHours",1,u);if(m<Ne){var W=Math.round(m/60);return i.formatDistance("aboutXHours",W,u)}else{if(m<na)return i.formatDistance("xDays",1,u);if(m<ye){var L=Math.round(m/Ne);return i.formatDistance("xDays",L,u)}else if(m<oa)return p=Math.round(m/ye),i.formatDistance("aboutXMonths",p,u)}if(p=Xt(d,c),p<12){var $=Math.round(m/ye);return i.formatDistance("xMonths",$,u)}else{var F=p%12,I=Math.floor(p/12);return F<3?i.formatDistance("aboutXYears",I,u):F<9?i.formatDistance("overXYears",I,u):i.formatDistance("almostXYears",I+1,u)}}function Ve(t,e){g(2,arguments);var r=N(e);return At(t,-r)}function sa(t,e){var r;g(1,arguments);var a=N((r=e==null?void 0:e.additionalDigits)!==null&&r!==void 0?r:2);if(a!==2&&a!==1&&a!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var n=da(t),o;if(n.date){var i=fa(n.date,a);o=ma(i.restDateString,i.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var l=o.getTime(),u=0,c;if(n.time&&(u=ha(n.time),isNaN(u)))return new Date(NaN);if(n.timezone){if(c=ga(n.timezone),isNaN(c))return new Date(NaN)}else{var d=new Date(l+u),f=new Date(0);return f.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),f.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),f}return new Date(l+u+c)}var ee={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ua=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ca=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,la=/^([+-])(\d{2})(?::?(\d{2}))?$/;function da(t){var e={},r=t.split(ee.dateTimeDelimiter),a;if(r.length>2)return e;if(/:/.test(r[0])?a=r[0]:(e.date=r[0],a=r[1],ee.timeZoneDelimiter.test(e.date)&&(e.date=t.split(ee.timeZoneDelimiter)[0],a=t.substr(e.date.length,t.length))),a){var n=ee.timezone.exec(a);n?(e.time=a.replace(n[1],""),e.timezone=n[1]):e.time=a}return e}function fa(t,e){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=t.match(r);if(!a)return{year:NaN,restDateString:""};var n=a[1]?parseInt(a[1]):null,o=a[2]?parseInt(a[2]):null;return{year:o===null?n:o*100,restDateString:t.slice((a[1]||a[2]).length)}}function ma(t,e){if(e===null)return new Date(NaN);var r=t.match(ua);if(!r)return new Date(NaN);var a=!!r[4],n=V(r[1]),o=V(r[2])-1,i=V(r[3]),l=V(r[4]),u=V(r[5])-1;if(a)return wa(e,l,u)?va(e,l,u):new Date(NaN);var c=new Date(0);return!ba(e,o,i)||!pa(e,n)?new Date(NaN):(c.setUTCFullYear(e,o,Math.max(n,i)),c)}function V(t){return t?parseInt(t):1}function ha(t){var e=t.match(ca);if(!e)return NaN;var r=be(e[1]),a=be(e[2]),n=be(e[3]);return Ta(r,a,n)?r*Fe+a*Ye+n*1e3:NaN}function be(t){return t&&parseFloat(t.replace(",","."))||0}function ga(t){if(t==="Z")return 0;var e=t.match(la);if(!e)return 0;var r=e[1]==="+"?-1:1,a=parseInt(e[2]),n=e[3]&&parseInt(e[3])||0;return Da(a,n)?r*(a*Fe+n*Ye):NaN}function va(t,e,r){var a=new Date(0);a.setUTCFullYear(t,0,4);var n=a.getUTCDay()||7,o=(e-1)*7+r+1-n;return a.setUTCDate(a.getUTCDate()+o),a}var ya=[31,null,31,30,31,30,31,31,30,31,30,31];function je(t){return t%400===0||t%4===0&&t%100!==0}function ba(t,e,r){return e>=0&&e<=11&&r>=1&&r<=(ya[e]||(je(t)?29:28))}function pa(t,e){return e>=1&&e<=(je(t)?366:365)}function wa(t,e,r){return e>=1&&e<=53&&r>=0&&r<=6}function Ta(t,e,r){return t===24?e===0&&r===0:r>=0&&r<60&&e>=0&&e<60&&t>=0&&t<25}function Da(t,e){return e>=0&&e<=59}function Oa(t,e,r){g(2,arguments);var a=B(t,r),n=B(e,r);return a.getTime()===n.getTime()}var Ea={lessThanXSeconds:{one:"不到 1 秒",other:"不到 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分钟",lessThanXMinutes:{one:"不到 1 分钟",other:"不到 {{count}} 分钟"},xMinutes:{one:"1 分钟",other:"{{count}} 分钟"},xHours:{one:"1 小时",other:"{{count}} 小时"},aboutXHours:{one:"大约 1 小时",other:"大约 {{count}} 小时"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大约 1 个星期",other:"大约 {{count}} 个星期"},xWeeks:{one:"1 个星期",other:"{{count}} 个星期"},aboutXMonths:{one:"大约 1 个月",other:"大约 {{count}} 个月"},xMonths:{one:"1 个月",other:"{{count}} 个月"},aboutXYears:{one:"大约 1 年",other:"大约 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超过 1 年",other:"超过 {{count}} 年"},almostXYears:{one:"将近 1 年",other:"将近 {{count}} 年"}},Ca=function(e,r,a){var n,o=Ea[e];return typeof o=="string"?n=o:r===1?n=o.one:n=o.other.replace("{{count}}",String(r)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?n+"内":n+"前":n};const _a=Ca;var ka={full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},Ma={full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},Sa={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Pa={date:q({formats:ka,defaultWidth:"full"}),time:q({formats:Ma,defaultWidth:"full"}),dateTime:q({formats:Sa,defaultWidth:"full"})};const xa=Pa;function Le(t,e,r){var a="eeee p";return Oa(t,e,r)?a:t.getTime()>e.getTime()?"'下个'"+a:"'上个'"+a}var Ra={lastWeek:Le,yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:Le,other:"PP p"},Na=function(e,r,a,n){var o=Ra[e];return typeof o=="function"?o(r,a,n):o};const La=Na;var Aa={narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},Ua={narrow:["1","2","3","4"],abbreviated:["第一季","第二季","第三季","第四季"],wide:["第一季度","第二季度","第三季度","第四季度"]},Wa={narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},$a={narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["周日","周一","周二","周三","周四","周五","周六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},Ia={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},Ya={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},Fa=function(e,r){var a=Number(e);switch(r==null?void 0:r.unit){case"date":return a.toString()+"日";case"hour":return a.toString()+"时";case"minute":return a.toString()+"分";case"second":return a.toString()+"秒";default:return"第 "+a.toString()}},Ha={ordinalNumber:Fa,era:P({values:Aa,defaultWidth:"wide"}),quarter:P({values:Ua,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:P({values:Wa,defaultWidth:"wide"}),day:P({values:$a,defaultWidth:"wide"}),dayPeriod:P({values:Ia,defaultWidth:"wide",formattingValues:Ya,defaultFormattingWidth:"wide"})};const qa=Ha;var za=/^(第\s*)?\d+(日|时|分|秒)?/i,Ba=/\d+/i,Ga={narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},Xa={any:[/^(前)/i,/^(公元)/i]},Va={narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻钟/i},ja={any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},Qa={narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},Ka={narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},Ja={narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^周[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},Za={any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},en={any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i},tn={any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},rn={ordinalNumber:Be({matchPattern:za,parsePattern:Ba,valueCallback:function(e){return parseInt(e,10)}}),era:x({matchPatterns:Ga,defaultMatchWidth:"wide",parsePatterns:Xa,defaultParseWidth:"any"}),quarter:x({matchPatterns:Va,defaultMatchWidth:"wide",parsePatterns:ja,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:x({matchPatterns:Qa,defaultMatchWidth:"wide",parsePatterns:Ka,defaultParseWidth:"any"}),day:x({matchPatterns:Ja,defaultMatchWidth:"wide",parsePatterns:Za,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:en,defaultMatchWidth:"any",parsePatterns:tn,defaultParseWidth:"any"})};const an=rn;var nn={code:"zh-CN",formatDistance:_a,formatLong:xa,formatRelative:La,localize:qa,match:an,options:{weekStartsOn:1,firstWeekContainsDate:4}};const K=nn,po=t=>ia(sa(t),new Date,{addSuffix:!0,locale:K}),wo=t=>de(new Date(t),"yyyy年M月d日",{locale:K}),To=t=>de(new Date(t),"yyyy年M月d日 EEE",{locale:K}),Do=t=>de(new Date(t),"yyyy年M月d日 HH:mm",{locale:K}),Oo=t=>de(new Date(t),"M月d日",{locale:K}),ue=function(t={}){const e=new Date;return t!=null&&t.end?e.setUTCHours(23,59,59,999):e.setUTCHours(0,0,0,0),e.toISOString()},on=t=>new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",currencyDisplay:"narrowSymbol"}).format(t),Ae=10;async function Eo({filter:t,sortBy:e,page:r}){let a=b.from("bookings").select("id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",{count:"exact"});if(t&&(a=a[t.method||"eq"](t.field,t.value)),e&&(a=a.order(e.field,{ascending:e.direction==="asc"})),r){const l=(r-1)*Ae,u=l+Ae-1;a=a.range(l,u)}const{data:n,error:o,count:i}=await a;if(o)throw console.error(o),new Error("Bookings could not be loaded");return{data:n,count:i}}async function Co(t){const{data:e,error:r}=await b.from("bookings").select("*, cabins(*), guests(*)").eq("id",t).single();if(r)throw console.error(r),new Error("Booking not found");return e}async function sn(t){const{data:e,error:r}=await b.from("bookings").select("created_at, totalPrice, extrasPrice").gte("created_at",t).lte("created_at",ue({end:!0}));if(r)throw console.error(r),new Error("Bookings could not get loaded");return e}async function un(t){const{data:e,error:r}=await b.from("bookings").select("*, guests(fullName)").gte("startDate",t).lte("startDate",ue());if(r)throw console.error(r),new Error("Bookings could not get loaded");return e}async function cn(){const{data:t,error:e}=await b.from("bookings").select("*, guests(fullName, nationality, countryFlag)").or(`and(status.eq.unconfirmed,startDate.eq.${ue()}),and(status.eq.checked-in,endDate.eq.${ue()})`).order("created_at");if(e)throw console.error(e),new Error("Bookings could not get loaded");return t}async function ln(t,e){const{data:r,error:a}=await b.from("bookings").update(e).eq("id",t).select().single();if(a)throw console.error(a),new Error("Booking could not be updated");return r}async function _o(t){const{data:e,error:r}=await b.from("bookings").delete().eq("id",t);if(r)throw console.error(r),new Error("Booking could not be deleted");return e}function dn(){const[t]=De(),e=t.get("last")?Number(t.get("last")):7,r=Ve(new Date,e).toISOString(),{isLoading:a,data:n}=j({queryFn:()=>un(r),queryKey:["stays",`last-${e}`]}),o=n==null?void 0:n.filter(i=>i.status==="checked-in"||i.status==="checked-out");return{isLoading:a,stays:n,confirmedStays:o,numDays:e}}function fn(){const[t]=De(),e=t.get("last")?Number(t.get("last")):7,r=Ve(new Date,e).toISOString(),{isLoading:a,data:n}=j({queryFn:()=>sn(r),queryKey:["bookings",`last-${e}`]});return{isLoading:a,bookings:n}}const mn=y.div`
  /* 盒子容器 */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
`,hn=y.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 根据接收到的 prop 动态生成这些样式 */
  background-color: var(--color-${t=>t.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${t=>t.color}-700);
  }
`,gn=y.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`,vn=y.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;
`;function te({icon:t,title:e,value:r,color:a}){return O(mn,{children:[s(hn,{color:a,children:t}),s(gn,{children:e}),s(vn,{children:r})]})}function yn({bookings:t,confirmedStays:e,numDays:r,cabinCount:a}){const n=t.length,o=t.reduce((u,c)=>u+c.totalPrice,0),i=e.length,l=e.reduce((u,c)=>u+c.numNights,0)/(r*a);return O(le,{children:[s(te,{title:"预订数",color:"blue",icon:s(Tt,{}),value:n}),s(te,{title:"销售额",color:"green",icon:s(Dt,{}),value:on(o)}),s(te,{title:"入住数",color:"indigo",icon:s(Ot,{}),value:i}),s(te,{title:"入住率",color:"yellow",icon:s(Et,{}),value:Math.round(l*100)+"%"})]})}async function bn(){const{data:t,error:e}=await b.from("cabins").select("*");if(e)throw console.error(e),new Error("Cabins could not be loaded");return t}async function ko(t,e){var c,d;const r=(d=(c=t.image)==null?void 0:c.startsWith)==null?void 0:d.call(c,oe),a=`${Math.random()}-${t.image.name}`.replaceAll("/",""),n=r?t.image:`${oe}/storage/v1/object/public/cabin-images/${a}`;let o=b.from("cabins");e||(o=o.insert([{...t,image:n}])),e&&(o=o.update({...t,image:n}).eq("id",e));const{data:i,error:l}=await o.select().single();if(l)throw console.error(l),new Error("Cabin could not be created");if(r)return i;const{error:u}=await b.storage.from("cabin-images").upload(a,t.image);if(u)throw await b.from("cabins").delete().eq("id",i.id),console.error(u),new Error("Cabin image could not be uploaded and the cabin was not created");return i}async function Mo(t){const{data:e,error:r}=await b.from("cabins").delete().eq("id",t);if(r)throw console.error(r),new Error("Cabin could not be deleted");return e}function pn(){const{isLoading:t,data:e,error:r}=j({queryKey:["cabins"],queryFn:bn,staleTime:6e5});return{isLoading:t,error:r,cabins:e}}const Ee=y.h1`
  ${t=>t.as==="h1"&&_`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${t=>t.as==="h2"&&_`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${t=>t.as==="h3"&&_`
      font-size: 2rem;
      font-weight: 500;
    `}
    
    ${t=>t.as==="h4"&&_`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
    
  line-height: 1.4;
`,Ce=y.div`
  display: flex;

  ${t=>t.type==="horizontal"&&_`
      justify-content: space-between;
      align-items: center;
    `}

  ${t=>t.type==="vertical"&&_`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;Ce.defaultProps={type:"vertical"};function wn(){const{isLoading:t,data:e}=j({queryFn:cn,queryKey:["today-activity"]});return{activities:e,isLoading:t}}const Ue=y.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* 根据接收到的 prop 动态生成这些样式 */
  color: var(--color-${t=>t.type}-700);
  background-color: var(--color-${t=>t.type}-100);
`,Tn=y.img`
  max-width: 2rem;
  border-radius: var(--border-radius-tiny);
  display: block;
  border: 1px solid var(--color-grey-100);
`,Dn={small:_`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,medium:_`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,large:_`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `},On={primary:_`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,secondary:_`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,danger:_`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `},fe=y.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${t=>Dn[t.size]}
  ${t=>On[t.variation]}
`;fe.defaultProps={variation:"primary",size:"medium"};function En(){const t=yt(),{mutate:e,isLoading:r}=bt({mutationFn:a=>ln(a,{status:"checked-out"}),onSuccess:a=>{_e.success(`预订 #${a.id} 已成功退房`),t.invalidateQueries({active:!0})},onError:()=>_e.error("办理退房时出错")});return{checkout:e,isCheckingOut:r}}function Cn({bookingId:t}){const{checkout:e,isCheckingOut:r}=En();return s(fe,{variation:"primary",size:"small",onClick:()=>e(t),disabled:r,children:"退房"})}const _n=y.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`,kn=y.div`
  font-weight: 500;
`;function Mn({activity:t}){const{id:e,status:r,guests:a,numNights:n}=t;return O(_n,{children:[r==="unconfirmed"&&s(Ue,{type:"green",children:"即将到店"}),r==="checked-in"&&s(Ue,{type:"blue",children:"即将离店"}),s(Tn,{src:a.countryFlag,alt:`Flag of ${a.country}`}),s(kn,{children:a.fullName}),O("div",{children:[n," 晚"]}),r==="unconfirmed"&&s(fe,{size:"small",variation:"primary",as:lt,to:`/checkin/${e}`,children:"入住"}),r==="checked-in"&&s(Cn,{bookingId:e})]})}const Sn=y.div`
  /* 盒子容器 */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`,Pn=y.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* 分别移除 webkit、firefox 和 ms 的滚动条 */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`,xn=y.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;function Rn(){const{activities:t,isLoading:e}=wn();return O(Sn,{children:[s(Ce,{type:"horizontal",children:s(Ee,{as:"h2",children:"今天"})}),e?s(Oe,{}):(t==null?void 0:t.length)>0?s(Pn,{children:t.map(r=>s(Mn,{activity:r},r.id))}):s(xn,{children:"今天暂无活动..."})]})}const Nn=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`,ce=y.div`
  min-height: 32rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`,re=y.div`
  min-height: 9.6rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  background: linear-gradient(90deg, var(--color-grey-0) 25%, var(--color-grey-100) 50%, var(--color-grey-0) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
  }
`;function Ln(){return O(le,{children:[s(re,{}),s(re,{}),s(re,{}),s(re,{})]})}const An=t=>s(M,{importComponent:()=>k(()=>import("./SalesChart-38fd029b.js"),["assets/SalesChart-38fd029b.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/themeStore-af75a008.js","assets/index-66c4e4bf.js","assets/query-cdedaf21.js","assets/icons-e81217d1.js"]),Loading:()=>s(ce,{}),...t}),Un=t=>s(M,{importComponent:()=>k(()=>import("./DurationChart-58cd94d7.js"),["assets/DurationChart-58cd94d7.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/themeStore-af75a008.js","assets/query-cdedaf21.js","assets/icons-e81217d1.js"]),Loading:()=>s(ce,{}),...t});function Wn(){const{bookings:t,isLoading:e}=fn(),{confirmedStays:r,isLoading:a,numDays:n}=dn(),{cabins:o,isLoading:i}=pn(),l=e||a||i,u=a,c=e||a;return s(ne,{children:O(Nn,{children:[l?s(Ln,{}):s(yn,{bookings:t,confirmedStays:r,numDays:n,cabinCount:o.length}),s(Rn,{}),u?s(ce,{}):s(Un,{confirmedStays:r}),c?s(ce,{}):s(ne,{children:s(An,{bookings:t,numDays:n})})]})})}const $n=y.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`,In=y.button`
  background-color: var(--color-grey-0);
  border: none;

  ${t=>t.active&&_`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* 让它与 select 保持相同高度 */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;function Yn({filterField:t,options:e}){const[r,a]=De(),n=r.get(t)||e.at(0).value;function o(i){r.set(t,i),r.get("page")&&r.set("page",1),a(r)}return s($n,{children:e.map(i=>s(In,{onClick:()=>o(i.value),active:i.value===n,disabled:i.value===n,children:i.label},i.value))})}function Fn(){return s(Yn,{filterField:"last",options:[{value:"7",label:"最近 7 天"},{value:"30",label:"最近 30 天"},{value:"90",label:"最近 90 天"}]})}function Hn(){return O(le,{children:[O(Ce,{type:"horizontal",children:[s(Ee,{as:"h1",children:"仪表盘"}),s(Fn,{})]}),s(Wn,{})]})}const qn=()=>s(M,{importComponent:()=>k(()=>import("./Bookings-07b82bca.js"),["assets/Bookings-07b82bca.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/icons-e81217d1.js","assets/Menus-3dfe0e75.js","assets/ConfirmDelete-001185e8.js","assets/useDeleteBooking-47b0fed6.js","assets/query-cdedaf21.js","assets/index-044263cb.js","assets/index-66c4e4bf.js","assets/Empty-d1dd3c51.js","assets/TableOperations-85669d16.js"])}),zn=()=>s(M,{importComponent:()=>k(()=>import("./Cabins-dd6cc8e1.js"),["assets/Cabins-dd6cc8e1.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/Form-7f955686.js","assets/FileInput-3811cace.js","assets/FormRow-e14b8330.js","assets/query-cdedaf21.js","assets/icons-e81217d1.js","assets/ConfirmDelete-001185e8.js","assets/Menus-3dfe0e75.js","assets/Empty-d1dd3c51.js","assets/TableOperations-85669d16.js"])}),Bn=()=>s(M,{importComponent:()=>k(()=>import("./Users-489d7b77.js"),["assets/Users-489d7b77.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/Form-7f955686.js","assets/FormRow-e14b8330.js","assets/query-cdedaf21.js","assets/icons-e81217d1.js"])}),Gn=()=>s(M,{importComponent:()=>k(()=>import("./Orders-584ee8ad.js"),["assets/Orders-584ee8ad.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/Empty-d1dd3c51.js","assets/query-cdedaf21.js","assets/TableOperations-85669d16.js","assets/icons-e81217d1.js"])}),Xn=()=>s(M,{importComponent:()=>k(()=>import("./Settings-b966e595.js"),["assets/Settings-b966e595.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/Form-7f955686.js","assets/FormRow-e14b8330.js","assets/useSettings-862a5477.js","assets/query-cdedaf21.js","assets/icons-e81217d1.js"])}),Vn=()=>s(M,{importComponent:()=>k(()=>import("./Account-b56608d5.js"),["assets/Account-b56608d5.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/Form-7f955686.js","assets/FormRow-e14b8330.js","assets/query-cdedaf21.js","assets/FileInput-3811cace.js","assets/icons-e81217d1.js"])}),jn=()=>s(M,{importComponent:()=>k(()=>import("./Login-7670fef8.js"),["assets/Login-7670fef8.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/Form-7f955686.js","assets/query-cdedaf21.js","assets/Logo-ae2fa6f8.js","assets/icons-e81217d1.js","assets/themeStore-af75a008.js"])}),Qn=()=>s(M,{importComponent:()=>k(()=>import("./PageNotFound-e61fea56.js"),["assets/PageNotFound-e61fea56.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/useMoveBack-824d12e8.js","assets/query-cdedaf21.js","assets/icons-e81217d1.js"])}),Kn=()=>s(M,{importComponent:()=>k(()=>import("./Booking-a580bc66.js"),["assets/Booking-a580bc66.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/useBooking-057bff8b.js","assets/icons-e81217d1.js","assets/index-044263cb.js","assets/index-66c4e4bf.js","assets/query-cdedaf21.js","assets/useMoveBack-824d12e8.js","assets/ConfirmDelete-001185e8.js","assets/useDeleteBooking-47b0fed6.js","assets/Empty-d1dd3c51.js"])}),Jn=()=>s(M,{importComponent:()=>k(()=>import("./Checkin-02e01e89.js"),["assets/Checkin-02e01e89.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/useBooking-057bff8b.js","assets/icons-e81217d1.js","assets/index-044263cb.js","assets/index-66c4e4bf.js","assets/query-cdedaf21.js","assets/useMoveBack-824d12e8.js","assets/useSettings-862a5477.js"])}),Zn=()=>s(M,{importComponent:()=>k(()=>import("./AppLayout-d4a3a46f.js"),["assets/AppLayout-d4a3a46f.js","assets/vendor-75fc689b.js","assets/supabase-1545db47.js","assets/Logo-ae2fa6f8.js","assets/icons-e81217d1.js","assets/themeStore-af75a008.js","assets/query-cdedaf21.js"])}),eo=new pt({defaultOptions:{queries:{staleTime:30*1e3}}});function to(){return O(wt,{client:eo,children:[s(Ie,{}),s(Rt,{children:s(dt,{children:O(ft,{children:[O(C,{element:s(Nt,{children:s(Zn,{})}),children:[s(C,{index:!0,element:s(mt,{replace:!0,to:"dashboard"})}),s(C,{path:"dashboard",element:s(ne,{children:s(Hn,{})})}),s(C,{path:"bookings",element:s(qn,{})}),s(C,{path:"bookings/:bookingId",element:s(Kn,{})}),s(C,{path:"checkin/:bookingId",element:s(Jn,{})}),s(C,{path:"cabins",element:s(zn,{})}),s(C,{path:"users",element:s(Bn,{})}),s(C,{path:"orders",element:s(Gn,{})}),s(C,{path:"settings",element:s(Xn,{})}),s(C,{path:"account",element:s(Vn,{})})]}),s(C,{path:"login",element:s(Lt,{children:s(jn,{})})}),s(C,{path:"*",element:s(Qn,{})})]})})}),s(ht,{position:"top-center",gutter:12,containerStyle:{margin:"8px"},toastOptions:{success:{duration:3e3},error:{duration:5e3},style:{fontSize:"16px",maxWidth:"500px",padding:"16px 24px",backgroundColor:"var(--color-grey-0)",color:"var(--color-grey-700)"}}})]})}const ro=y.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`,ao=y.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`;function no({error:t,resetErrorBoundary:e}){return O(le,{children:[s(Ie,{}),s(ro,{children:O(ao,{children:[s(Ee,{as:"h1",children:"发生错误"}),s("p",{children:t.message}),s(fe,{size:"large",onClick:e,children:"重试"})]})})]})}const T={LOG:"log",RELOAD:"reload",GO_HOME:"go_home",GLOBAL_FALLBACK:"global_fallback",MODULE_FALLBACK:"module_fallback",REPLACE_IMAGE:"replace_image"},D={BOOT_TIMEOUT:"boot_timeout",REACT_RENDER_ERROR:"react_render_error",JS_ERROR:"js_error",PROMISE_ERROR:"promise_error",CHUNK_ERROR_PAGE:"chunk_error_page",CHUNK_ERROR_MODULE:"chunk_error_module",SCRIPT_ERROR:"script_error",STYLE_ERROR:"style_error",IMG_ERROR:"img_error"},oo={[D.BOOT_TIMEOUT]:T.RELOAD,[D.REACT_RENDER_ERROR]:T.GLOBAL_FALLBACK,[D.JS_ERROR]:T.LOG,[D.PROMISE_ERROR]:T.LOG,[D.CHUNK_ERROR_PAGE]:T.RELOAD,[D.CHUNK_ERROR_MODULE]:T.MODULE_FALLBACK,[D.SCRIPT_ERROR]:T.LOG,[D.STYLE_ERROR]:T.LOG,[D.IMG_ERROR]:T.REPLACE_IMAGE};function pe({layer:t,type:e,message:r,stack:a,resourceType:n="",resourceUrl:o="",extra:i={}}){return{layer:t,type:e,message:r||"未知错误",stack:a||"",resourceType:n,resourceUrl:o,pageUrl:window.location.href,timestamp:Date.now(),userAgent:navigator.userAgent,extra:i}}function io(t){var r;const e=(t==null?void 0:t.message)||((r=t==null?void 0:t.reason)==null?void 0:r.message)||(typeof t=="string"?t:String(t||""));return e.includes("Failed to fetch dynamically imported module")||e.includes("Importing a module script failed")}function so(t){return t instanceof HTMLScriptElement?D.SCRIPT_ERROR:t instanceof HTMLLinkElement?D.STYLE_ERROR:t instanceof HTMLImageElement?D.IMG_ERROR:null}function we(t){var r;const e=oo[t.type];switch(console.error("[app-error]",t),e){case T.RELOAD:window.location.reload();return;case T.GO_HOME:window.location.assign("/");return;case T.REPLACE_IMAGE:((r=t.extra)==null?void 0:r.target)instanceof HTMLImageElement&&(t.extra.target.src="public/placeholder-image.png.png");return;case T.MODULE_FALLBACK:window.dispatchEvent(new CustomEvent("app:module-error",{detail:t}));return;case T.GLOBAL_FALLBACK:case T.LOG:default:return}}function uo(){window.onerror=function(t,e,r,a,n){const o=pe({layer:"runtime",type:D.JS_ERROR,message:String(t),stack:n==null?void 0:n.stack,resourceUrl:e||"",extra:{lineno:r,colno:a}});return we(o),!1},window.onunhandledrejection=function(t){const e=t.reason,r=(e==null?void 0:e.message)||String(e||"Promise error"),a=io(e),n=pe({layer:a?"resource":"runtime",type:a?D.CHUNK_ERROR_PAGE:D.PROMISE_ERROR,message:r,stack:e==null?void 0:e.stack});we(n)},window.addEventListener("error",t=>{var o;const e=t.target,r=so(e);if(!r)return;const a=(e==null?void 0:e.src)||(e==null?void 0:e.href)||"",n=pe({layer:"resource",type:r,message:`资源加载失败: ${a||"unknown"}`,resourceType:((o=e==null?void 0:e.tagName)==null?void 0:o.toLowerCase())||"",resourceUrl:a,extra:{target:e}});we(n)},!0)}window.__APP_BOOTSTRAPPED__=!0;window.__APP_BOOT_TIMEOUT__&&clearTimeout(window.__APP_BOOT_TIMEOUT__);uo();gt.createRoot(document.getElementById("root")).render(s(We.StrictMode,{children:s(ne,{FallbackComponent:no,onReset:()=>window.location.replace("/"),children:s(to,{})})}));export{fe as B,Yn as F,Ee as H,Ae as P,Ce as R,Oe as S,Ue as T,wo as a,on as b,ko as c,Mo as d,pn as e,po as f,Eo as g,b as h,Do as i,bo as j,St as k,R as l,vo as m,_o as n,ln as o,To as p,Tn as q,Co as r,go as s,g as t,En as u,yo as v,v as w,Ve as x,Oo as y};
