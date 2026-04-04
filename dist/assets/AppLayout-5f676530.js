import{s as n,a4 as u,u as l,c as e,j as a,a5 as g,a6 as m,V as v,a7 as h,a8 as p,a as c,k as f,t as y,a9 as b,aa as k,ab as x,ac as H,ad as L,ae as M,J as S,af as w}from"./index-8ca981ee.js";import{L as O,S as C}from"./Logo-a729913b.js";const j=n.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,t=n(u)`
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
`;function A(){const{t:r}=l();return e("nav",{children:a(j,{children:[e("li",{children:a(t,{to:"/dashboard",children:[e(g,{}),e("span",{children:r("nav.dashboard")})]})}),e("li",{children:a(t,{to:"/bookings",children:[e(m,{}),e("span",{children:r("nav.bookings")})]})}),e("li",{children:a(t,{to:"/cabins",children:[e(v,{}),e("span",{children:r("nav.cabins")})]})}),e("li",{children:a(t,{to:"/users",children:[e(h,{}),e("span",{children:r("nav.users")})]})}),e("li",{children:a(t,{to:"/settings",children:[e(p,{}),e("span",{children:r("nav.settings")})]})})]})})}const N=n.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;function D(){return a(N,{children:[e(O,{}),e(A,{})]})}const s=n.button`
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
`;function U(){const r=c(),o=f(),{mutate:i,isLoading:d}=y({mutationFn:b,onSuccess:()=>{o.removeQueries(),r("/login",{replace:!0})}});return{logout:i,isLoading:d}}function z(){const{t:r}=l(),{logout:o,isLoading:i}=U();return e(s,{disabled:i,onClick:o,title:r("common.logout"),"aria-label":r("common.logout"),children:i?e(C,{}):e(k,{})})}function Q(){const{isDarkMode:r,toggleDarkMode:o}=x();return e(s,{onClick:o,children:r?e(H,{}):e(L,{})})}const R=n.ul`
  display: flex;
  gap: 0.4rem;
`;function T(){const r=c(),{t:o}=l();return a(R,{children:[e("li",{children:e(s,{onClick:()=>r("/account"),title:o("common.account"),"aria-label":o("common.account"),children:e(M,{})})}),e("li",{children:e(Q,{})}),e("li",{children:e(z,{})})]})}const $=n.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`,q=n.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;function B(){const{user:r}=S(),{fullName:o,avatar:i}=r.user_metadata;return a($,{children:[e(q,{src:i||"default-user.jpg",alt:`Avatar of ${o}`}),e("span",{children:o})]})}const F=n.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;function I(){return a(F,{children:[e(B,{}),e(T,{})]})}const J=n.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`,V=n.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`,_=n.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;function K(){return a(J,{children:[e(I,{}),e(D,{}),e(V,{children:e(_,{children:e(w,{})})})]})}export{K as default};
