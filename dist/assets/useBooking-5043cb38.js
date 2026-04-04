import{s as a,j as o,c as r,u as D,V as C,W as b,f as I,X as j,Y as F,Z as H,_ as z,e as s,$ as N,a0 as O,m as $,a1 as S}from"./index-8ca981ee.js";import{i as T}from"./index-7ec0c4bd.js";const W=a.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`,G=a.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;function l({icon:n,label:e,children:t}){return o(W,{children:[o(G,{children:[n,r("span",{children:e})]}),t]})}const L=a.section`
  /* 盒子容器 */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`,q=a.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`,_=a.section`
  padding: 3.2rem 4rem 1.2rem;
`,A=a.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`,K=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${n=>n.isPaid?"var(--color-green-100)":"var(--color-yellow-100)"};
  color: ${n=>n.isPaid?"var(--color-green-700)":"var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`,M=a.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;function X({booking:n}){const{t:e}=D(),{created_at:t,startDate:i,endDate:h,numNights:f,numGuests:c,cabinPrice:p,extrasPrice:y,totalPrice:k,hasBreakfast:d,observations:g,isPaid:m,guests:{fullName:v,email:x,country:w,countryFlag:u,nationalID:B},cabins:{name:P}}=n;return o(L,{children:[o(q,{children:[o("div",{children:[r(C,{}),r("p",{children:e("bookings.nightsInCabin",{nights:f,cabin:P})})]}),o("p",{children:[b(i)," (",T(new Date(i))?e("common.today"):I(i),") — ",b(h)]})]}),o(_,{children:[o(A,{children:[u&&r(j,{src:u,alt:`Flag of ${w}`}),o("p",{children:[v," ",c>1?e("bookings.guestCount",{count:c-1}):""]}),r("span",{children:"•"}),r("p",{children:x}),r("span",{children:"•"}),r("p",{children:e("bookings.nationalId",{id:B})})]}),g&&r(l,{icon:r(F,{}),label:e("bookings.observations"),children:g}),r(l,{icon:r(H,{}),label:e("bookings.breakfastIncluded"),children:e(d?"bookings.yes":"bookings.no")}),o(K,{isPaid:m,children:[o(l,{icon:r(z,{}),label:e("bookings.totalPrice"),children:[s(k),d&&` ${e("bookings.totalWithBreakfast",{cabinPrice:s(p),breakfastPrice:s(y)})}`]}),r("p",{children:e(m?"bookings.paid":"bookings.willPayAtProperty")})]})]}),r(M,{children:r("p",{children:e("bookings.bookedOn",{date:N(t)})})})]})}const Y=a.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`,Z=a.button`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;function E(){const{bookingId:n}=O(),{isLoading:e,data:t,error:i}=$({queryKey:["booking",n],queryFn:()=>S(n),retry:!1});return{isLoading:e,error:i,booking:t}}export{Z as B,X as a,Y as b,E as u};
