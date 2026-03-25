import{s as t,j as o,c as r,u as P,V as M,d as s,f as C,W as E,X as I,Y as j,Z as F,e as l,_ as H,m as z,$ as N}from"./index-8e4d25fa.js";import{i as O}from"./index-22586340.js";const $=t.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`,S=t.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;function c({icon:n,label:e,children:a}){return o($,{children:[o(S,{children:[n,r("span",{children:e})]}),a]})}const G=t.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`,L=t.header`
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
`,T=t.section`
  padding: 3.2rem 4rem 1.2rem;
`,q=t.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`,W=t.div`
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
`,_=t.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;function Q({booking:n}){const{t:e}=P(),{created_at:a,startDate:i,endDate:h,numNights:f,numGuests:d,cabinPrice:y,extrasPrice:p,totalPrice:v,hasBreakfast:g,observations:m,isPaid:u,guests:{fullName:k,email:x,country:w,countryFlag:b,nationalID:B},cabins:{name:D}}=n;return o(G,{children:[o(L,{children:[o("div",{children:[r(M,{}),r("p",{children:e("bookings.nightsInCabin",{nights:f,cabin:D})})]}),o("p",{children:[s(new Date(i),"EEE, MMM dd yyyy")," (",O(new Date(i))?e("common.today"):C(i),") — ",s(new Date(h),"EEE, MMM dd yyyy")]})]}),o(T,{children:[o(q,{children:[b&&r(E,{src:b,alt:`Flag of ${w}`}),o("p",{children:[k," ",d>1?e("bookings.guestCount",{count:d-1}):""]}),r("span",{children:"•"}),r("p",{children:x}),r("span",{children:"•"}),r("p",{children:e("bookings.nationalId",{id:B})})]}),m&&r(c,{icon:r(I,{}),label:e("bookings.observations"),children:m}),r(c,{icon:r(j,{}),label:e("bookings.breakfastIncluded"),children:e(g?"bookings.yes":"bookings.no")}),o(W,{isPaid:u,children:[o(c,{icon:r(F,{}),label:e("bookings.totalPrice"),children:[l(v),g&&` ${e("bookings.totalWithBreakfast",{cabinPrice:l(y),breakfastPrice:l(p)})}`]}),r("p",{children:e(u?"bookings.paid":"bookings.willPayAtProperty")})]})]}),r(_,{children:r("p",{children:e("bookings.bookedOn",{date:s(new Date(a),"EEE, MMM dd yyyy, p")})})})]})}const V=t.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`,X=t.button`
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
`;function Y(){const{bookingId:n}=H(),{isLoading:e,data:a,error:i}=z({queryKey:["booking",n],queryFn:()=>N(n),retry:!1});return{isLoading:e,error:i,booking:a}}export{X as B,Q as a,V as b,Y as u};
