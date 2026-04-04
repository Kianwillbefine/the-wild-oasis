import{s as v,j as d,c as e,u as y,k as I,a as N,t as Q,Q as $,w as b,C as f,S as q,q as G,R as M,r as R,e as c,B}from"./index-8ca981ee.js";import{u as z,B as A,a as D,b as H}from"./useBooking-5043cb38.js";import{u as T}from"./useMoveBack-fcf43758.js";import{a as J}from"./useSettings-59cf4a94.js";import"./index-7ec0c4bd.js";const K=v.div`
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
`;function x({checked:a,onChange:i,disabled:t=!1,id:s,children:r}){return d(K,{children:[e("input",{type:"checkbox",id:s,checked:a,onChange:i,disabled:t}),e("label",{htmlFor:t?"":s,children:r})]})}function O(){const{t:a}=y(),i=I(),t=N(),{mutate:s,isLoading:r}=Q({mutationFn:({bookingId:n,breakfast:k})=>$(n,{status:"checked-in",isPaid:!0,...k}),onSuccess:n=>{b.success(a("bookings.checkinSuccess",{id:n.id})),i.invalidateQueries({active:!0}),t("/")},onError:()=>b.error(a("bookings.checkinError"))});return{checkin:s,isCheckingIn:r}}const C=v.div`
  /* 盒子容器 */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;function U(){const{t:a}=y(),[i,t]=f.useState(!1),[s,r]=f.useState(!1),{booking:n,isLoading:k}=z(),{settings:P,isLoading:S}=J();f.useEffect(()=>t((n==null?void 0:n.isPaid)??!1),[n]);const g=T(),{checkin:m,isCheckingIn:p}=O();if(k||S)return e(q,{});const{id:u,guests:L,totalPrice:l,numGuests:E,hasBreakfast:j,numNights:w}=n,o=P.breakfastPrice*w*E;function F(){i&&m(s?{bookingId:u,breakfast:{hasBreakfast:!0,extrasPrice:o,totalPrice:l+o}}:{bookingId:u,breakfast:{}})}return d(G,{children:[d(M,{type:"horizontal",children:[e(R,{as:"h1",children:a("pages.checkin.title",{id:u})}),d(A,{onClick:g,children:["← ",a("common.back")]})]}),e(D,{booking:n}),!j&&e(C,{children:e(x,{checked:s,onChange:()=>{r(h=>!h),t(!1)},id:"breakfast",children:a("checkin.addBreakfast",{price:c(o)})})}),e(C,{children:e(x,{checked:i,onChange:()=>t(h=>!h),disabled:i||p,id:"confirm",children:a("checkin.confirmPaid",{guest:L.fullName,amount:s?`${c(l+o)} (${c(l)} + ${c(o)})`:c(l)})})}),d(H,{children:[e(B,{onClick:F,disabled:!i||p,children:a("checkin.action",{id:u})}),e(B,{variation:"secondary",onClick:g,children:a("common.back")})]})]})}function _(){return e(U,{})}export{_ as default};
