var ie=Object.defineProperty;var ce=(e,r,t)=>r in e?ie(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var z=(e,r,t)=>(ce(e,typeof r!="symbol"?r+"":r,t),t);import{j as l,a as o,F as M}from"../chunks/window-vendor-63f6856f.js";import{R as W,$ as se,N as le,O as de,Q as ue,S as R,r as g,W as Z,T as s,U as P,V as O,X as ge,Y as me,Z as X,_ as fe,a0 as he,a1 as ee,a2 as ye,a3 as v,a4 as re,a5 as oe,a6 as pe,a7 as be,a8 as ve,a9 as we,aa as Ee,ab as ke,ac as _e,ad as Le,ae as Re,af as Oe,ag as Ae,ah as Ce}from"../chunks/vendor-d57a50b0.js";import{u as N,a as xe,b as F,L as De,N as Se,O as Te,B as Ie,R as Me,c as b,d as Pe}from"../chunks/router-vendor-d0fbaad4.js";import{n as V,F as Ne}from"../chunks/toast-vendor-45638962.js";import{b as He}from"../chunks/query-vendor-7c0ee06c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const ze="modulepreload",Ue=function(e){return"/"+e},Y={},w=function(r,t,n){if(!t||t.length===0)return r();const a=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Ue(i),i in Y)return;Y[i]=!0;const c=i.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!n)for(let _=a.length-1;_>=0;_--){const A=a[_];if(A.href===i&&(!c||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":ze,c||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),c)return new Promise((_,A)=>{d.addEventListener("load",_),d.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>r()).catch(i=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i})};class S extends W.Component{constructor(t){super(t);z(this,"handleReload",()=>{window.location.reload()});z(this,"handleGoHome",()=>{window.location.assign("/")});this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,n){console.error("[render-error]",t,n)}render(){var t;return this.state.hasError?l("div",{style:{padding:24},children:[o("h1",{children:"页面渲染失败"}),o("p",{children:((t=this.state.error)==null?void 0:t.message)||"未知错误"}),!1,o("button",{onClick:this.handleReload,children:"刷新页面"}),o("button",{onClick:this.handleGoHome,children:"返回首页"})]}):this.props.children}}const te=se`
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

`,T="https://figkpoeidrbscnjrzpui.supabase.co",Be="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZ2twb2VpZHJic2NuanJ6cHVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MzM3MTQsImV4cCI6MjA3OTUwOTcxNH0.y1jnPDIDa-dMXQ249Tyw1YIOpWZptN4S0ep93r_Q09I",u=le(T,Be);async function xo({fullName:e,email:r,password:t}){const{data:n,error:a}=await u.auth.signUp({email:r,password:t,options:{data:{fullName:e,avatar:""}}});if(a)throw new Error(a.message);return n}async function Do({email:e,password:r}){const{data:t,error:n}=await u.auth.signInWithPassword({email:e,password:r});if(n)throw new Error(n.message);return t}async function $e(){const{data:e}=await u.auth.getSession();if(!e.session)return null;const{data:r,error:t}=await u.auth.getUser();if(t)throw new Error(t.message);return r==null?void 0:r.user}async function Fe(){const{error:e}=await u.auth.signOut();if(e)throw new Error(e.message)}async function So({password:e,fullName:r,avatar:t}){let n;e&&(n={password:e}),r&&(n={data:{fullName:r}});const{data:a,error:i}=await u.auth.updateUser(n);if(i)throw new Error(i.message);if(!t)return a;const c=`avatar-${a.user.id}-${Math.random()}`,{error:h}=await u.storage.from("avatars").upload(c,t);if(h)throw new Error(h.message);const{data:p,error:d}=await u.auth.updateUser({data:{avatar:`${T}/storage/v1/object/public/avatars/${c}`}});if(d)throw new Error(d.message);return p}const k={CHECKING:"checking",AUTHENTICATED:"authenticated",ANONYMOUS:"anonymous"},qe=(e,r)=>({authStatus:k.CHECKING,isHydrated:!1,redirectAfterLogin:null,user:null,startAuthCheck:()=>e({authStatus:k.CHECKING}),setAuthenticated:(t=null)=>e({authStatus:k.AUTHENTICATED,user:t,isHydrated:!0}),setAnonymous:()=>e({authStatus:k.ANONYMOUS,user:null,isHydrated:!0}),setRedirectAfterLogin:t=>e({redirectAfterLogin:t}),clearRedirectAfterLogin:()=>e({redirectAfterLogin:null}),finishHydration:()=>e({isHydrated:!0}),resetAuthStore:()=>e({authStatus:k.ANONYMOUS,isHydrated:!0,redirectAfterLogin:null,user:null})});function Ge(){return typeof window>"u"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches}function $(e){typeof document>"u"||(document.documentElement.classList.toggle("dark-mode",e),document.documentElement.classList.toggle("light-mode",!e))}const ne=Ge(),Ke=(e,r)=>({isDarkMode:ne,setIsDarkMode:t=>{$(t),e({isDarkMode:t})},toggleDarkMode:()=>e(t=>{const n=!t.isDarkMode;return $(n),{isDarkMode:n}})});$(ne);const y=de(ue((...e)=>({...qe(...e),...Ke(...e)}),{name:"the-wild-oasis",version:1,migrate:e=>({...typeof(e==null?void 0:e.isDarkMode)=="boolean"?{isDarkMode:e.isDarkMode}:{},...e!=null&&e.redirectAfterLogin?{redirectAfterLogin:e.redirectAfterLogin}:{}}),merge:(e,r)=>({...r,...typeof(e==null?void 0:e.isDarkMode)=="boolean"?{isDarkMode:e.isDarkMode}:{},...e!=null&&e.redirectAfterLogin?{redirectAfterLogin:e.redirectAfterLogin}:{}}),partialize:e=>({redirectAfterLogin:e.redirectAfterLogin,isDarkMode:e.isDarkMode})}));function ae(){const e=y(c=>c.startAuthCheck),r=y(c=>c.setAuthenticated),t=y(c=>c.setAnonymous),{isLoading:n,data:a,isError:i}=R({queryKey:["user"],queryFn:$e,staleTime:5*60*1e3});return g.useEffect(function(){n&&e()},[n,e]),g.useEffect(function(){if(!n){if(i||!a){t();return}r(a)}},[i,n,t,r,a]),{isLoading:n,user:a,isAuthenticated:(a==null?void 0:a.role)==="authenticated"}}const je=Z`
  to {
    transform: rotate(1turn)
  }
`,q=s.div`
  margin: 4.8rem auto;

  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000) top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-brand-600));
  mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${je} 1.5s infinite linear;
`,Ve=s.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;function Ye({children:e}){ae();const r=y(n=>n.authStatus);return!y(n=>n.isHydrated)||r===k.CHECKING?o(Ve,{children:o(q,{})}):e}function Je({children:e}){const r=N(),t=xe(),n=y(i=>i.authStatus),a=y(i=>i.setRedirectAfterLogin);return g.useEffect(function(){if(n!==k.ANONYMOUS)return;const i=`${t.pathname}${t.search}${t.hash}`;a(i),r("/login",{replace:!0})},[n,t,r,a]),n===k.AUTHENTICATED?e:null}function Qe({children:e}){const r=N(),t=y(i=>i.authStatus),n=y(i=>i.redirectAfterLogin),a=y(i=>i.clearRedirectAfterLogin);return g.useEffect(function(){if(t!==k.AUTHENTICATED)return;const i=n||"/dashboard";a(),r(i,{replace:!0})},[t,a,r,n]),t===k.ANONYMOUS?e:null}const To=e=>ge(me(e),new Date,{addSuffix:!0,locale:O}),Io=e=>P(new Date(e),"yyyy年M月d日",{locale:O}),Mo=e=>P(new Date(e),"yyyy年M月d日 EEE",{locale:O}),Po=e=>P(new Date(e),"yyyy年M月d日 HH:mm",{locale:O}),No=e=>P(new Date(e),"M月d日",{locale:O}),I=function(e={}){const r=new Date;return e!=null&&e.end?r.setUTCHours(23,59,59,999):r.setUTCHours(0,0,0,0),r.toISOString()},We=e=>new Intl.NumberFormat("zh-CN",{style:"currency",currency:"CNY",currencyDisplay:"narrowSymbol"}).format(e),J=10;async function Ho({filter:e,sortBy:r,page:t}){let n=u.from("bookings").select("id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",{count:"exact"});if(e&&(n=n[e.method||"eq"](e.field,e.value)),r&&(n=n.order(r.field,{ascending:r.direction==="asc"})),t){const h=(t-1)*J,p=h+J-1;n=n.range(h,p)}const{data:a,error:i,count:c}=await n;if(i)throw console.error(i),new Error("Bookings could not be loaded");return{data:a,count:c}}async function zo(e){const{data:r,error:t}=await u.from("bookings").select("*, cabins(*), guests(*)").eq("id",e).single();if(t)throw console.error(t),new Error("Booking not found");return r}async function Ze(e){const{data:r,error:t}=await u.from("bookings").select("created_at, totalPrice, extrasPrice").gte("created_at",e).lte("created_at",I({end:!0}));if(t)throw console.error(t),new Error("Bookings could not get loaded");return r}async function Xe(e){const{data:r,error:t}=await u.from("bookings").select("*, guests(fullName)").gte("startDate",e).lte("startDate",I());if(t)throw console.error(t),new Error("Bookings could not get loaded");return r}async function er(){const{data:e,error:r}=await u.from("bookings").select("*, guests(fullName, nationality, countryFlag)").or(`and(status.eq.unconfirmed,startDate.eq.${I()}),and(status.eq.checked-in,endDate.eq.${I()})`).order("created_at");if(r)throw console.error(r),new Error("Bookings could not get loaded");return e}async function rr(e,r){const{data:t,error:n}=await u.from("bookings").update(r).eq("id",e).select().single();if(n)throw console.error(n),new Error("Booking could not be updated");return t}async function Uo(e){const{data:r,error:t}=await u.from("bookings").delete().eq("id",e);if(t)throw console.error(t),new Error("Booking could not be deleted");return r}function or(){const[e]=F(),r=e.get("last")?Number(e.get("last")):7,t=X(new Date,r).toISOString(),{isLoading:n,data:a}=R({queryFn:()=>Xe(t),queryKey:["stays",`last-${r}`]}),i=a==null?void 0:a.filter(c=>c.status==="checked-in"||c.status==="checked-out");return{isLoading:n,stays:a,confirmedStays:i,numDays:r}}function tr(){const[e]=F(),r=e.get("last")?Number(e.get("last")):7,t=X(new Date,r).toISOString(),{isLoading:n,data:a}=R({queryFn:()=>Ze(t),queryKey:["bookings",`last-${r}`]});return{isLoading:n,bookings:a}}async function nr(){const{data:e,error:r}=await u.from("cabins").select("*");if(r)throw console.error(r),new Error("Cabins could not be loaded");return e}async function Bo(e,r){var d,_;const t=(_=(d=e.image)==null?void 0:d.startsWith)==null?void 0:_.call(d,T),n=`${Math.random()}-${e.image.name}`.replaceAll("/",""),a=t?e.image:`${T}/storage/v1/object/public/cabin-images/${n}`;let i=u.from("cabins");r||(i=i.insert([{...e,image:a}])),r&&(i=i.update({...e,image:a}).eq("id",r));const{data:c,error:h}=await i.select().single();if(h)throw console.error(h),new Error("Cabin could not be created");if(t)return c;const{error:p}=await u.storage.from("cabin-images").upload(n,e.image);if(p)throw await u.from("cabins").delete().eq("id",c.id),console.error(p),new Error("Cabin image could not be uploaded and the cabin was not created");return c}async function $o(e){const{data:r,error:t}=await u.from("cabins").delete().eq("id",e);if(t)throw console.error(t),new Error("Cabin could not be deleted");return r}function ar(){const{isLoading:e,data:r,error:t}=R({queryKey:["cabins"],queryFn:nr,staleTime:6e5});return{isLoading:e,error:t,cabins:r}}const ir=s.div`
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
`,cr=s.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 根据接收到的 prop 动态生成这些样式 */
  background-color: var(--color-${e=>e.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${e=>e.color}-700);
  }
`,sr=s.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`,lr=s.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;
`;function C({icon:e,title:r,value:t,color:n}){return l(ir,{children:[o(cr,{color:n,children:e}),o(sr,{children:r}),o(lr,{children:t})]})}function dr({bookings:e,confirmedStays:r,numDays:t,cabinCount:n}){const a=e.length,i=e.reduce((p,d)=>p+d.totalPrice,0),c=r.length,h=r.reduce((p,d)=>p+d.numNights,0)/(t*n);return l(M,{children:[o(C,{title:"预订数",color:"blue",icon:o(fe,{}),value:a}),o(C,{title:"销售额",color:"green",icon:o(he,{}),value:We(i)}),o(C,{title:"入住数",color:"indigo",icon:o(ee,{}),value:c}),o(C,{title:"入住率",color:"yellow",icon:o(ye,{}),value:Math.round(h*100)+"%"})]})}const G=s.h1`
  ${e=>e.as==="h1"&&v`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${e=>e.as==="h2"&&v`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${e=>e.as==="h3"&&v`
      font-size: 2rem;
      font-weight: 500;
    `}
    
    ${e=>e.as==="h4"&&v`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
    
  line-height: 1.4;
`,K=s.div`
  display: flex;

  ${e=>e.type==="horizontal"&&v`
      justify-content: space-between;
      align-items: center;
    `}

  ${e=>e.type==="vertical"&&v`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;K.defaultProps={type:"vertical"};function ur(){const{isLoading:e,data:r}=R({queryFn:er,queryKey:["today-activity"]});return{activities:r,isLoading:e}}const Q=s.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* 根据接收到的 prop 动态生成这些样式 */
  color: var(--color-${e=>e.type}-700);
  background-color: var(--color-${e=>e.type}-100);
`,gr=s.img`
  max-width: 2rem;
  border-radius: var(--border-radius-tiny);
  display: block;
  border: 1px solid var(--color-grey-100);
`,mr={small:v`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,medium:v`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,large:v`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `},fr={primary:v`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,secondary:v`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,danger:v`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `},H=s.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${e=>mr[e.size]}
  ${e=>fr[e.variation]}
`;H.defaultProps={variation:"primary",size:"medium"};function hr(){const e=re(),{mutate:r,isLoading:t}=oe({mutationFn:n=>rr(n,{status:"checked-out"}),onSuccess:n=>{V.success(`预订 #${n.id} 已成功退房`),e.invalidateQueries({active:!0})},onError:()=>V.error("办理退房时出错")});return{checkout:r,isCheckingOut:t}}function yr({bookingId:e}){const{checkout:r,isCheckingOut:t}=hr();return o(H,{variation:"primary",size:"small",onClick:()=>r(e),disabled:t,children:"退房"})}const pr=s.li`
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
`,br=s.div`
  font-weight: 500;
`;function vr({activity:e}){const{id:r,status:t,guests:n,numNights:a}=e;return l(pr,{children:[t==="unconfirmed"&&o(Q,{type:"green",children:"即将到店"}),t==="checked-in"&&o(Q,{type:"blue",children:"即将离店"}),o(gr,{src:n.countryFlag,alt:`Flag of ${n.country}`}),o(br,{children:n.fullName}),l("div",{children:[a," 晚"]}),t==="unconfirmed"&&o(H,{size:"small",variation:"primary",as:De,to:`/checkin/${r}`,children:"入住"}),t==="checked-in"&&o(yr,{bookingId:r})]})}const wr=s.div`
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
`,Er=s.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* 分别移除 webkit、firefox 和 ms 的滚动条 */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`,kr=s.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;function _r(){const{activities:e,isLoading:r}=ur();return l(wr,{children:[o(K,{type:"horizontal",children:o(G,{as:"h2",children:"今天"})}),r?o(q,{}):(e==null?void 0:e.length)>0?o(Er,{children:e.map(t=>o(vr,{activity:t},t.id))}):o(kr,{children:"今天暂无活动..."})]})}const Lr=g.lazy(()=>w(()=>import("../chunks/SalesChart-b707353b.js"),["assets/chunks/SalesChart-b707353b.js","assets/chunks/window-vendor-63f6856f.js","assets/chunks/vendor-d57a50b0.js","assets/chunks/query-vendor-7c0ee06c.js","assets/chunks/chart-vendor-5ae1781d.js","assets/chunks/router-vendor-d0fbaad4.js","assets/chunks/toast-vendor-45638962.js"])),Rr=g.lazy(()=>w(()=>import("../chunks/DurationChart-4370f5b3.js"),["assets/chunks/DurationChart-4370f5b3.js","assets/chunks/window-vendor-63f6856f.js","assets/chunks/vendor-d57a50b0.js","assets/chunks/query-vendor-7c0ee06c.js","assets/chunks/chart-vendor-5ae1781d.js","assets/chunks/router-vendor-d0fbaad4.js","assets/chunks/toast-vendor-45638962.js"])),Or=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`,x=s.div`
  min-height: 32rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`,D=s.div`
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
`;function Ar(){return l(M,{children:[o(D,{}),o(D,{}),o(D,{}),o(D,{})]})}function Cr(){const{bookings:e,isLoading:r}=tr(),{confirmedStays:t,isLoading:n,numDays:a}=or(),{cabins:i,isLoading:c}=ar(),h=r||n||c,p=n,d=r||n;return o(S,{children:l(Or,{children:[h?o(Ar,{}):o(dr,{bookings:e,confirmedStays:t,numDays:a,cabinCount:i.length}),o(_r,{}),p?o(x,{}):o(g.Suspense,{fallback:o(x,{}),children:o(Rr,{confirmedStays:t})}),d?o(x,{}):o(S,{children:o(g.Suspense,{fallback:o(x,{}),children:o(Lr,{bookings:e,numDays:a})})})]})})}const xr=s.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`,Dr=s.button`
  background-color: var(--color-grey-0);
  border: none;

  ${e=>e.active&&v`
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
`;function Sr({filterField:e,options:r}){const[t,n]=F(),a=t.get(e)||r.at(0).value;function i(c){t.set(e,c),t.get("page")&&t.set("page",1),n(t)}return o(xr,{children:r.map(c=>o(Dr,{onClick:()=>i(c.value),active:c.value===a,disabled:c.value===a,children:c.label},c.value))})}function Tr(){return o(Sr,{filterField:"last",options:[{value:"7",label:"最近 7 天"},{value:"30",label:"最近 30 天"},{value:"90",label:"最近 90 天"}]})}function Ir(){return l(M,{children:[l(K,{type:"horizontal",children:[o(G,{as:"h1",children:"仪表盘"}),o(Tr,{})]}),o(Cr,{})]})}const Mr=s.div`
  text-align: center;
`,Pr=s.img`
  height: 9.6rem;
  width: auto;
`;function Nr(){const r=y(t=>t.isDarkMode)?"/logo-dark.webp":"/logo-light.webp";return o(Mr,{children:o(Pr,{src:r,alt:"Logo"})})}const Hr=s.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,L=s(Se)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* 之所以能生效，是因为 react-router 会把 active class 加到当前激活的 NavLink 上 */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;function zr(){return o("nav",{children:l(Hr,{children:[o("li",{children:l(L,{to:"/dashboard",children:[o(pe,{}),o("span",{children:"首页"})]})}),o("li",{children:l(L,{to:"/bookings",children:[o(ee,{}),o("span",{children:"预订"})]})}),o("li",{children:l(L,{to:"/cabins",children:[o(be,{}),o("span",{children:"房源"})]})}),o("li",{children:l(L,{to:"/users",children:[o(ve,{}),o("span",{children:"用户"})]})}),o("li",{children:l(L,{to:"/orders",children:[o(we,{}),o("span",{children:"订单流水"})]})}),o("li",{children:l(L,{to:"/settings",children:[o(Ee,{}),o("span",{children:"设置"})]})})]})})}const Ur=s.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;function Br(){return l(Ur,{children:[o(Nr,{}),o(zr,{})]})}const j=s.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;function $r(){const e=N(),r=re(),t=y(i=>i.resetAuthStore),{mutate:n,isLoading:a}=oe({mutationFn:Fe,onSuccess:()=>{t(),r.removeQueries(),e("/login",{replace:!0})}});return{logout:n,isLoading:a}}const Fr=Z`
  to {
    transform: rotate(1turn)
  }
`,qr=s(ke)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${Fr} 1.5s infinite linear;
`;function Gr(){const{logout:e,isLoading:r}=$r();return o(j,{disabled:r,onClick:e,title:"退出登录","aria-label":"退出登录",children:r?o(qr,{}):o(_e,{})})}function Kr(){const e=y(t=>t.isDarkMode),r=y(t=>t.toggleDarkMode);return o(j,{onClick:r,children:e?o(Le,{}):o(Re,{})})}const jr=s.ul`
  display: flex;
  gap: 0.4rem;
`;function Vr(){const e=N();return l(jr,{children:[o("li",{children:o(j,{onClick:()=>e("/account"),title:"账户","aria-label":"账户",children:o(Oe,{})})}),o("li",{children:o(Kr,{})}),o("li",{children:o(Gr,{})})]})}const Yr=s.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`,Jr=s.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;function Qr(){const{user:e}=ae();if(!e)return null;const{fullName:r="用户",avatar:t}=e.user_metadata??{};return l(Yr,{children:[o(Jr,{src:t||"default-user.jpg",alt:`Avatar of ${r}`}),o("span",{children:r})]})}const Wr=s.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;function Zr(){return l(Wr,{children:[o(Qr,{}),o(Vr,{})]})}const Xr=s.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`,eo=s.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`,ro=s.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;function oo(){return l(Xr,{children:[o(Zr,{}),o(Br,{}),o(eo,{children:o(ro,{children:o(Te,{})})})]})}const to=g.lazy(()=>w(()=>import("../chunks/Bookings-fb49a975.js"),["assets/chunks/Bookings-fb49a975.js","assets/chunks/window-vendor-63f6856f.js","assets/chunks/vendor-d57a50b0.js","assets/chunks/query-vendor-7c0ee06c.js","assets/chunks/Menus-44e38c7b.js","assets/chunks/ConfirmDelete-1bea8653.js","assets/chunks/useDeleteBooking-d79bd445.js","assets/chunks/toast-vendor-45638962.js","assets/chunks/router-vendor-d0fbaad4.js","assets/chunks/Empty-1b8461a7.js","assets/chunks/TableOperations-76c8d3dd.js"])),no=g.lazy(()=>w(()=>import("../chunks/Cabins-74eba7c2.js"),["assets/chunks/Cabins-74eba7c2.js","assets/chunks/window-vendor-63f6856f.js","assets/chunks/vendor-d57a50b0.js","assets/chunks/query-vendor-7c0ee06c.js","assets/chunks/Form-d776bdb1.js","assets/chunks/FileInput-529f8b72.js","assets/chunks/FormRow-dba9499b.js","assets/chunks/toast-vendor-45638962.js","assets/chunks/ConfirmDelete-1bea8653.js","assets/chunks/Menus-44e38c7b.js","assets/chunks/router-vendor-d0fbaad4.js","assets/chunks/Empty-1b8461a7.js","assets/chunks/TableOperations-76c8d3dd.js"])),ao=g.lazy(()=>w(()=>import("../chunks/Users-98231811.js"),["assets/chunks/Users-98231811.js","assets/chunks/window-vendor-63f6856f.js","assets/chunks/vendor-d57a50b0.js","assets/chunks/query-vendor-7c0ee06c.js","assets/chunks/Form-d776bdb1.js","assets/chunks/FormRow-dba9499b.js","assets/chunks/toast-vendor-45638962.js","assets/chunks/router-vendor-d0fbaad4.js"])),io=g.lazy(()=>w(()=>import("../chunks/Orders-cd3e71c3.js"),["assets/chunks/Orders-cd3e71c3.js","assets/chunks/window-vendor-63f6856f.js","assets/chunks/vendor-d57a50b0.js","assets/chunks/query-vendor-7c0ee06c.js","assets/chunks/Empty-1b8461a7.js","assets/chunks/router-vendor-d0fbaad4.js","assets/chunks/TableOperations-76c8d3dd.js","assets/chunks/toast-vendor-45638962.js"])),co=g.lazy(()=>w(()=>import("../chunks/Settings-b98780c2.js"),["assets/chunks/Settings-b98780c2.js","assets/chunks/window-vendor-63f6856f.js","assets/chunks/vendor-d57a50b0.js","assets/chunks/query-vendor-7c0ee06c.js","assets/chunks/Form-d776bdb1.js","assets/chunks/FormRow-dba9499b.js","assets/chunks/useSettings-a5d08f7f.js","assets/chunks/toast-vendor-45638962.js","assets/chunks/router-vendor-d0fbaad4.js"])),so=g.lazy(()=>w(()=>import("../chunks/Account-bba21796.js"),["assets/chunks/Account-bba21796.js","assets/chunks/window-vendor-63f6856f.js","assets/chunks/vendor-d57a50b0.js","assets/chunks/query-vendor-7c0ee06c.js","assets/chunks/Form-d776bdb1.js","assets/chunks/FormRow-dba9499b.js","assets/chunks/toast-vendor-45638962.js","assets/chunks/FileInput-529f8b72.js","assets/chunks/router-vendor-d0fbaad4.js"])),lo=g.lazy(()=>w(()=>import("../chunks/Login-e778fafc.js"),["assets/chunks/Login-e778fafc.js","assets/chunks/window-vendor-63f6856f.js","assets/chunks/vendor-d57a50b0.js","assets/chunks/query-vendor-7c0ee06c.js","assets/chunks/Form-d776bdb1.js","assets/chunks/toast-vendor-45638962.js","assets/chunks/router-vendor-d0fbaad4.js"])),uo=g.lazy(()=>w(()=>import("../chunks/PageNotFound-e0b1fc90.js"),["assets/chunks/PageNotFound-e0b1fc90.js","assets/chunks/window-vendor-63f6856f.js","assets/chunks/vendor-d57a50b0.js","assets/chunks/query-vendor-7c0ee06c.js","assets/chunks/useMoveBack-de8ac207.js","assets/chunks/router-vendor-d0fbaad4.js","assets/chunks/toast-vendor-45638962.js"])),go=g.lazy(()=>w(()=>import("../chunks/Checkin-e7832a36.js"),["assets/chunks/Checkin-e7832a36.js","assets/chunks/window-vendor-63f6856f.js","assets/chunks/vendor-d57a50b0.js","assets/chunks/query-vendor-7c0ee06c.js","assets/chunks/useBooking-c40674c6.js","assets/chunks/router-vendor-d0fbaad4.js","assets/chunks/useMoveBack-de8ac207.js","assets/chunks/toast-vendor-45638962.js","assets/chunks/useSettings-a5d08f7f.js"])),mo=g.lazy(()=>w(()=>import("../chunks/Booking-7c4b3f7f.js"),["assets/chunks/Booking-7c4b3f7f.js","assets/chunks/window-vendor-63f6856f.js","assets/chunks/vendor-d57a50b0.js","assets/chunks/query-vendor-7c0ee06c.js","assets/chunks/useBooking-c40674c6.js","assets/chunks/router-vendor-d0fbaad4.js","assets/chunks/useMoveBack-de8ac207.js","assets/chunks/ConfirmDelete-1bea8653.js","assets/chunks/useDeleteBooking-d79bd445.js","assets/chunks/toast-vendor-45638962.js","assets/chunks/Empty-1b8461a7.js"]));function E(e){return o(g.Suspense,{fallback:o(q,{}),children:e})}const fo=new He({defaultOptions:{queries:{staleTime:30*1e3}}});function ho(){return l(Ae,{client:fo,children:[o(te,{}),o(Ye,{children:o(Ie,{children:l(Me,{children:[l(b,{element:o(Je,{children:o(oo,{})}),children:[o(b,{index:!0,element:o(Pe,{replace:!0,to:"dashboard"})}),o(b,{path:"dashboard",element:o(S,{children:o(Ir,{})})}),o(b,{path:"bookings",element:E(o(to,{}))}),o(b,{path:"bookings/:bookingId",element:E(o(mo,{}))}),o(b,{path:"checkin/:bookingId",element:E(o(go,{}))}),o(b,{path:"cabins",element:E(o(no,{}))}),o(b,{path:"users",element:E(o(ao,{}))}),o(b,{path:"orders",element:E(o(io,{}))}),o(b,{path:"settings",element:E(o(co,{}))}),o(b,{path:"account",element:E(o(so,{}))})]}),o(b,{path:"login",element:o(Qe,{children:E(o(lo,{}))})}),o(b,{path:"*",element:E(o(uo,{}))})]})})}),o(Ne,{position:"top-center",gutter:12,containerStyle:{margin:"8px"},toastOptions:{success:{duration:3e3},error:{duration:5e3},style:{fontSize:"16px",maxWidth:"500px",padding:"16px 24px",backgroundColor:"var(--color-grey-0)",color:"var(--color-grey-700)"}}})]})}const yo=s.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`,po=s.div`
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
`;function bo({error:e,resetErrorBoundary:r}){return l(M,{children:[o(te,{}),o(yo,{children:l(po,{children:[o(G,{as:"h1",children:"发生错误"}),o("p",{children:e.message}),o(H,{size:"large",onClick:r,children:"重试"})]})})]})}const m={LOG:"log",RELOAD:"reload",GO_HOME:"go_home",GLOBAL_FALLBACK:"global_fallback",MODULE_FALLBACK:"module_fallback",REPLACE_IMAGE:"replace_image"},f={BOOT_TIMEOUT:"boot_timeout",REACT_RENDER_ERROR:"react_render_error",JS_ERROR:"js_error",PROMISE_ERROR:"promise_error",CHUNK_ERROR_PAGE:"chunk_error_page",CHUNK_ERROR_MODULE:"chunk_error_module",SCRIPT_ERROR:"script_error",STYLE_ERROR:"style_error",IMG_ERROR:"img_error"},vo={[f.BOOT_TIMEOUT]:m.RELOAD,[f.REACT_RENDER_ERROR]:m.GLOBAL_FALLBACK,[f.JS_ERROR]:m.LOG,[f.PROMISE_ERROR]:m.LOG,[f.CHUNK_ERROR_PAGE]:m.RELOAD,[f.CHUNK_ERROR_MODULE]:m.MODULE_FALLBACK,[f.SCRIPT_ERROR]:m.LOG,[f.STYLE_ERROR]:m.LOG,[f.IMG_ERROR]:m.REPLACE_IMAGE};function U({layer:e,type:r,message:t,stack:n,resourceType:a="",resourceUrl:i="",extra:c={}}){return{layer:e,type:r,message:t||"未知错误",stack:n||"",resourceType:a,resourceUrl:i,pageUrl:window.location.href,timestamp:Date.now(),userAgent:navigator.userAgent,extra:c}}function wo(e){var t;const r=(e==null?void 0:e.message)||((t=e==null?void 0:e.reason)==null?void 0:t.message)||(typeof e=="string"?e:String(e||""));return r.includes("Failed to fetch dynamically imported module")||r.includes("Importing a module script failed")}function Eo(e){return e instanceof HTMLScriptElement?f.SCRIPT_ERROR:e instanceof HTMLLinkElement?f.STYLE_ERROR:e instanceof HTMLImageElement?f.IMG_ERROR:null}function B(e){var t;const r=vo[e.type];switch(console.error("[app-error]",e),r){case m.RELOAD:window.location.reload();return;case m.GO_HOME:window.location.assign("/");return;case m.REPLACE_IMAGE:((t=e.extra)==null?void 0:t.target)instanceof HTMLImageElement&&(e.extra.target.src="public/placeholder-image.png.png");return;case m.MODULE_FALLBACK:window.dispatchEvent(new CustomEvent("app:module-error",{detail:e}));return;case m.GLOBAL_FALLBACK:case m.LOG:default:return}}function ko(){window.onerror=function(e,r,t,n,a){const i=U({layer:"runtime",type:f.JS_ERROR,message:String(e),stack:a==null?void 0:a.stack,resourceUrl:r||"",extra:{lineno:t,colno:n}});return B(i),!1},window.onunhandledrejection=function(e){const r=e.reason,t=(r==null?void 0:r.message)||String(r||"Promise error"),n=wo(r),a=U({layer:n?"resource":"runtime",type:n?f.CHUNK_ERROR_PAGE:f.PROMISE_ERROR,message:t,stack:r==null?void 0:r.stack});B(a)},window.addEventListener("error",e=>{var i;const r=e.target,t=Eo(r);if(!t)return;const n=(r==null?void 0:r.src)||(r==null?void 0:r.href)||"",a=U({layer:"resource",type:t,message:`资源加载失败: ${n||"unknown"}`,resourceType:((i=r==null?void 0:r.tagName)==null?void 0:i.toLowerCase())||"",resourceUrl:n,extra:{target:r}});B(a)},!0)}window.__APP_BOOTSTRAPPED__=!0;window.__APP_BOOT_TIMEOUT__&&clearTimeout(window.__APP_BOOT_TIMEOUT__);ko();Ce.createRoot(document.getElementById("root")).render(o(W.StrictMode,{children:o(S,{FallbackComponent:bo,onReset:()=>window.location.replace("/"),children:o(ho,{})})}));export{H as B,Sr as F,G as H,Nr as L,J as P,K as R,q as S,Q as T,Io as a,We as b,Bo as c,$o as d,ar as e,To as f,Ho as g,u as h,Po as i,So as j,ae as k,y as l,Do as m,qr as n,rr as o,Uo as p,Mo as q,gr as r,xo as s,zo as t,hr as u,No as v};
