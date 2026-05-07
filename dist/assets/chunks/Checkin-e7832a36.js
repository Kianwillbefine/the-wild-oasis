import{j as c,a as r,F as j}from"./window-vendor-63f6856f.js";import{T as C,a4 as E,a5 as I,r as h}from"./vendor-d57a50b0.js";import{u as N,B as w,a as G,b as H}from"./useBooking-c40674c6.js";import{o as M,S as Q,R,H as T,b as s,B as p}from"../entry/index-93132dc4.js";import{u as q}from"./useMoveBack-de8ac207.js";import{n as b}from"./toast-vendor-45638962.js";import{u as z}from"./router-vendor-d0fbaad4.js";import{a as A}from"./useSettings-a5d08f7f.js";import"./query-vendor-7c0ee06c.js";const D=C.div`
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
`;function x({checked:a,onChange:i,disabled:t=!1,id:n,children:e}){return c(D,{children:[r("input",{type:"checkbox",id:n,checked:a,onChange:i,disabled:t}),r("label",{htmlFor:t?"":n,children:e})]})}function J(){const a=E(),i=z(),{mutate:t,isLoading:n}=I({mutationFn:({bookingId:e,breakfast:u})=>M(e,{status:"checked-in",isPaid:!0,...u}),onSuccess:e=>{b.success(`预订 #${e.id} 已成功办理入住`),a.invalidateQueries({active:!0}),i("/")},onError:()=>b.error("办理入住时出错")});return{checkin:t,isCheckingIn:n}}const B=C.div`
  /* 盒子容器 */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;function K(){const[a,i]=h.useState(!1),[t,n]=h.useState(!1),{booking:e,isLoading:u}=N(),{settings:v,isLoading:y}=A();h.useEffect(()=>i((e==null?void 0:e.isPaid)??!1),[e]);const m=q(),{checkin:k,isCheckingIn:g}=J();if(u||y)return r(Q,{});const{id:d,guests:P,totalPrice:l,numGuests:S,hasBreakfast:$,numNights:F}=e,o=v.breakfastPrice*F*S;function L(){a&&k(t?{bookingId:d,breakfast:{hasBreakfast:!0,extrasPrice:o,totalPrice:l+o}}:{bookingId:d,breakfast:{}})}return c(j,{children:[c(R,{type:"horizontal",children:[c(T,{as:"h1",children:["为预订 #",d," 办理入住"]}),r(w,{onClick:m,children:"← 返回"})]}),r(G,{booking:e}),!$&&r(B,{children:r(x,{checked:t,onChange:()=>{n(f=>!f),i(!1)},id:"breakfast",children:`要为这笔预订添加 ${s(o)} 的早餐吗？`})}),r(B,{children:r(x,{checked:a,onChange:()=>i(f=>!f),disabled:a||g,id:"confirm",children:`我确认 ${P.fullName} 已支付总金额 ${t?`${s(l+o)} (${s(l)} + ${s(o)})`:s(l)}`})}),c(H,{children:[r(p,{onClick:L,disabled:!a||g,children:`为预订 #${d} 办理入住`}),r(p,{variation:"secondary",onClick:m,children:"返回"})]})]})}function re(){return r(K,{})}export{re as default};
