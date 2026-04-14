import{d as t,j as r,a as e,q as D}from"./vendor-75fc689b.js";import{n as $,o as P,p as C,q as j}from"./icons-e81217d1.js";import{p,f as F,q as H,b as l,i as q,r as z}from"./index-9609f675.js";import{i as N}from"./index-044263cb.js";import{u as I}from"./query-cdedaf21.js";const O=t.div`
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
`;function s({icon:o,label:n,children:a}){return r(O,{children:[r(S,{children:[o,e("span",{children:n})]}),a]})}const T=t.section`
  /* 盒子容器 */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`,G=t.header`
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
`,L=t.section`
  padding: 3.2rem 4rem 1.2rem;
`,W=t.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`,K=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${o=>o.isPaid?"var(--color-green-100)":"var(--color-yellow-100)"};
  color: ${o=>o.isPaid?"var(--color-green-700)":"var(--color-yellow-700)"};

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
`,M=t.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;function R({booking:o}){const{created_at:n,startDate:a,endDate:i,numNights:u,numGuests:c,cabinPrice:h,extrasPrice:b,totalPrice:y,hasBreakfast:d,observations:m,isPaid:g,guests:{fullName:v,email:x,country:w,countryFlag:f,nationalID:k},cabins:{name:B}}=o;return r(T,{children:[r(G,{children:[r("div",{children:[e($,{}),e("p",{children:`房源 ${B}，共 ${u} 晚`})]}),r("p",{children:[p(a)," (",N(new Date(a))?"今天":F(a),") — ",p(i)]})]}),r(L,{children:[r(W,{children:[f&&e(H,{src:f,alt:`Flag of ${w}`}),r("p",{children:[v," ",c>1?`等 ${c-1} 位同行客人`:""]}),e("span",{children:"•"}),e("p",{children:x}),e("span",{children:"•"}),e("p",{children:`证件号：${k}`})]}),m&&e(s,{icon:e(P,{}),label:"备注",children:m}),e(s,{icon:e(C,{}),label:"是否含早餐",children:d?"是":"否"}),r(K,{isPaid:g,children:[r(s,{icon:e(j,{}),label:"总价",children:[l(y),d&&` （房费 ${l(h)} + 早餐 ${l(b)}）`]}),e("p",{children:g?"已支付":"到店支付"})]})]}),e(M,{children:e("p",{children:`预订时间：${q(n)}`})})]})}const U=t.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`,V=t.button`
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
`;function X(){const{bookingId:o}=D(),{isLoading:n,data:a,error:i}=I({queryKey:["booking",o],queryFn:()=>z(o),retry:!1});return{isLoading:n,error:i,booking:a}}export{V as B,R as a,U as b,X as u};
