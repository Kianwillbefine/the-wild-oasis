import{s as o,a2 as u,u as l,c as e,j as a,a3 as m,a4 as h,V as v,a5 as p,a6 as f,a as d,k as b,t as y,a7 as k,a8 as x,a9 as L,aa as H,ab as w,ac as M,J as S,ad as C}from"./index-8e4d25fa.js";import{L as O,S as N}from"./Logo-660b2f39.js";const j=o.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,t=o(u)`
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

  /* This works because react-router places the active class on the active NavLink */
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
`;function A(){const{t:r}=l();return e("nav",{children:a(j,{children:[e("li",{children:a(t,{to:"/dashboard",children:[e(m,{}),e("span",{children:r("nav.dashboard")})]})}),e("li",{children:a(t,{to:"/bookings",children:[e(h,{}),e("span",{children:r("nav.bookings")})]})}),e("li",{children:a(t,{to:"/cabins",children:[e(v,{}),e("span",{children:r("nav.cabins")})]})}),e("li",{children:a(t,{to:"/users",children:[e(p,{}),e("span",{children:r("nav.users")})]})}),e("li",{children:a(t,{to:"/settings",children:[e(f,{}),e("span",{children:r("nav.settings")})]})})]})})}const T=o.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;function D(){return a(T,{children:[e(O,{}),e(A,{})]})}const c=o.button`
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
`;function U(){const r=d(),n=b(),{mutate:i,isLoading:s}=y({mutationFn:k,onSuccess:()=>{n.removeQueries(),r("/login",{replace:!0})}});return{logout:i,isLoading:s}}function z(){const{t:r}=l(),{logout:n,isLoading:i}=U();return e(c,{disabled:i,onClick:n,title:r("common.logout"),"aria-label":r("common.logout"),children:i?e(N,{}):e(x,{})})}function Q(){const{isDarkMode:r,toggleDarkMode:n}=L();return e(c,{onClick:n,children:r?e(H,{}):e(w,{})})}const R=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 4.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-brand-600);
`;function $(){const{language:r,setLanguage:n,t:i}=l();function s(){n(g=>g==="en"?"zh-CN":"en")}return e(c,{onClick:s,title:i("common.languageToggle"),"aria-label":i("common.languageToggle"),children:e(R,{children:r==="en"?"EN":"中"})})}const q=o.ul`
  display: flex;
  gap: 0.4rem;
`;function B(){const r=d(),{t:n}=l();return a(q,{children:[e("li",{children:e(c,{onClick:()=>r("/account"),title:n("common.account"),"aria-label":n("common.account"),children:e(M,{})})}),e("li",{children:e($,{})}),e("li",{children:e(Q,{})}),e("li",{children:e(z,{})})]})}const E=o.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`,F=o.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;function I(){const{user:r}=S(),{fullName:n,avatar:i}=r.user_metadata;return a(E,{children:[e(F,{src:i||"default-user.jpg",alt:`Avatar of ${n}`}),e("span",{children:n})]})}const J=o.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;function V(){return a(J,{children:[e(I,{}),e(B,{})]})}const _=o.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`,G=o.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`,K=o.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;function X(){return a(_,{children:[e(V,{}),e(D,{}),e(G,{children:e(K,{children:e(C,{})})})]})}export{X as default};
