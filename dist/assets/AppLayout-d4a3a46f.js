import{d as o,t as m,a as r,j as e,u as c,O as h}from"./vendor-75fc689b.js";import{L as v,S as p}from"./Logo-ae2fa6f8.js";import{r as f,b as y,n as b,s as k,t as x,u as H,v as S,w as L,x as M,y as w}from"./icons-e81217d1.js";import{l as O,v as A,k as C}from"./index-9609f675.js";import{a as j,b as D}from"./query-cdedaf21.js";import{u as s}from"./themeStore-af75a008.js";import"./supabase-1545db47.js";const N=o.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,a=o(m)`
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
`;function U(){return r("nav",{children:e(N,{children:[r("li",{children:e(a,{to:"/dashboard",children:[r(f,{}),r("span",{children:"首页"})]})}),r("li",{children:e(a,{to:"/bookings",children:[r(y,{}),r("span",{children:"预订"})]})}),r("li",{children:e(a,{to:"/cabins",children:[r(b,{}),r("span",{children:"房源"})]})}),r("li",{children:e(a,{to:"/users",children:[r(k,{}),r("span",{children:"用户"})]})}),r("li",{children:e(a,{to:"/orders",children:[r(x,{}),r("span",{children:"订单流水"})]})}),r("li",{children:e(a,{to:"/settings",children:[r(H,{}),r("span",{children:"设置"})]})})]})})}const T=o.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;function z(){return e(T,{children:[r(v,{}),r(U,{})]})}const l=o.button`
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
`;function Q(){const i=c(),t=j(),n=O(g=>g.resetAuthStore),{mutate:d,isLoading:u}=D({mutationFn:A,onSuccess:()=>{n(),t.removeQueries(),i("/login",{replace:!0})}});return{logout:d,isLoading:u}}function R(){const{logout:i,isLoading:t}=Q();return r(l,{disabled:t,onClick:i,title:"退出登录","aria-label":"退出登录",children:t?r(p,{}):r(S,{})})}function $(){const i=s(n=>n.isDarkMode),t=s(n=>n.toggleDarkMode);return r(l,{onClick:t,children:i?r(L,{}):r(M,{})})}const q=o.ul`
  display: flex;
  gap: 0.4rem;
`;function B(){const i=c();return e(q,{children:[r("li",{children:r(l,{onClick:()=>i("/account"),title:"账户","aria-label":"账户",children:r(w,{})})}),r("li",{children:r($,{})}),r("li",{children:r(R,{})})]})}const F=o.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`,I=o.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;function _(){const{user:i}=C(),{fullName:t,avatar:n}=i.user_metadata;return e(F,{children:[r(I,{src:n||"default-user.jpg",alt:`Avatar of ${t}`}),r("span",{children:t})]})}const E=o.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;function G(){return e(E,{children:[r(_,{}),r(B,{})]})}const J=o.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`,K=o.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`,P=o.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;function or(){return e(J,{children:[r(G,{}),r(z,{}),r(K,{children:r(P,{children:r(h,{})})})]})}export{or as default};
