import{d as C,j as c,a as r,u as j,n as p,r as h,F as E}from"./vendor-75fc689b.js";import{u as I,B as N,a as w,b as G}from"./useBooking-057bff8b.js";import{o as H,S as M,R as Q,H as R,b as s,B as b}from"./index-9609f675.js";import{u as q}from"./useMoveBack-824d12e8.js";import{a as z,b as A}from"./query-cdedaf21.js";import{a as D}from"./useSettings-862a5477.js";import"./supabase-1545db47.js";import"./icons-e81217d1.js";import"./index-044263cb.js";import"./index-66c4e4bf.js";const T=C.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;function x({checked:a,onChange:i,disabled:t=!1,id:n,children:e}){return c(T,{children:[r("input",{type:"checkbox",id:n,checked:a,onChange:i,disabled:t}),r("label",{htmlFor:t?"":n,children:e})]})}function J(){const a=z(),i=j(),{mutate:t,isLoading:n}=A({mutationFn:({bookingId:e,breakfast:u})=>H(e,{status:"checked-in",isPaid:!0,...u}),onSuccess:e=>{p.success(`预订 #${e.id} 已成功办理入住`),a.invalidateQueries({active:!0}),i("/")},onError:()=>p.error("办理入住时出错")});return{checkin:t,isCheckingIn:n}}const B=C.div`
  /* 盒子容器 */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;function K(){const[a,i]=h.useState(!1),[t,n]=h.useState(!1),{booking:e,isLoading:u}=I(),{settings:v,isLoading:y}=D();h.useEffect(()=>i((e==null?void 0:e.isPaid)??!1),[e]);const m=q(),{checkin:k,isCheckingIn:g}=J();if(u||y)return r(M,{});const{id:d,guests:P,totalPrice:l,numGuests:S,hasBreakfast:$,numNights:F}=e,o=v.breakfastPrice*F*S;function L(){a&&k(t?{bookingId:d,breakfast:{hasBreakfast:!0,extrasPrice:o,totalPrice:l+o}}:{bookingId:d,breakfast:{}})}return c(E,{children:[c(Q,{type:"horizontal",children:[c(R,{as:"h1",children:["为预订 #",d," 办理入住"]}),r(N,{onClick:m,children:"← 返回"})]}),r(w,{booking:e}),!$&&r(B,{children:r(x,{checked:t,onChange:()=>{n(f=>!f),i(!1)},id:"breakfast",children:`要为这笔预订添加 ${s(o)} 的早餐吗？`})}),r(B,{children:r(x,{checked:a,onChange:()=>i(f=>!f),disabled:a||g,id:"confirm",children:`我确认 ${P.fullName} 已支付总金额 ${t?`${s(l+o)} (${s(l)} + ${s(o)})`:s(l)}`})}),c(G,{children:[r(b,{onClick:L,disabled:!a||g,children:`为预订 #${d} 办理入住`}),r(b,{variation:"secondary",onClick:m,children:"返回"})]})]})}function ae(){return r(K,{})}export{ae as default};
