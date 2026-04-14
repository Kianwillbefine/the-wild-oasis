import{d,u as q,j as i,a as e,f as S,F as H}from"./vendor-75fc689b.js";import{u as D,f as N,a as w,T as M,b as O,g as k,P as m,S as R,F as j,R as z,H as E}from"./index-9609f675.js";import{d as A,e as L,f as Q,g as $,h as K,i as G}from"./icons-e81217d1.js";import{T as f,M as l}from"./Menus-3dfe0e75.js";import{M as B,C as _}from"./ConfirmDelete-001185e8.js";import{u as U}from"./useDeleteBooking-47b0fed6.js";import{i as V}from"./index-044263cb.js";import{E as W}from"./Empty-d1dd3c51.js";import{a as Z,u as J}from"./query-cdedaf21.js";import{T as X,S as Y}from"./TableOperations-85669d16.js";import"./supabase-1545db47.js";import"./index-66c4e4bf.js";const I=d.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`,C=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`,ee=d.div`
  font-family: "Sono";
  font-weight: 500;
`;function ne({booking:{id:r,created_at:a,startDate:t,endDate:n,numNights:c,numGuests:g,totalPrice:u,status:o,guests:{fullName:s,email:p},cabins:{name:v}}}){const h=q(),{checkout:y,isCheckingOut:b}=D(),{deleteBooking:T,isDeleting:x}=U(),F={unconfirmed:"blue","checked-in":"green","checked-out":"silver"};return i(f.Row,{children:[e(I,{children:v}),i(C,{children:[e("span",{children:s}),e("span",{children:p})]}),i(C,{children:[i("span",{children:[V(new Date(t))?"今天":N(t)," ","→ ",c," 晚"]}),i("span",{children:[w(t)," — ",w(n)]})]}),e(M,{type:F[o],children:o==="unconfirmed"?"未确认":o==="checked-in"?"已入住":"已退房"}),e(ee,{children:O(u)}),i(B,{children:[i(l.Menu,{children:[e(l.Toggle,{id:r}),i(l.List,{id:r,children:[e(l.Button,{icon:e(A,{}),onClick:()=>h(`/bookings/${r}`),children:"查看详情"}),o==="unconfirmed"&&e(l.Button,{icon:e(L,{}),onClick:()=>h(`/checkin/${r}`),children:"入住"}),o==="checked-in"&&e(l.Button,{icon:e(Q,{}),onClick:()=>y(r),disabled:b,children:"退房"}),e(B.Open,{opens:"delete",children:e(l.Button,{icon:e($,{}),children:"删除预订"})})]})]}),e(B.Window,{name:"delete",children:e(_,{resourceName:"预订",disabled:x,onConfirm:()=>T(r)})})]})]})}function re(){const r=Z(),[a]=S(),t=a.get("status"),n=!t||t==="all"?null:{field:"status",value:t},c=a.get("sortBy")||"startDate-desc",[g,u]=c.split("-"),o={field:g,direction:u},s=a.get("page")?Number(a.get("page")):1,{isLoading:p,data:{data:v,count:h}={},error:y}=J({queryKey:["bookings",n,o,s],queryFn:()=>k({filter:n,sortBy:o,page:s})}),b=Math.ceil(h/m);return s<b&&r.prefetchQuery({queryKey:["bookings",n,o,s+1],queryFn:()=>k({filter:n,sortBy:o,page:s+1})}),s>1&&r.prefetchQuery({queryKey:["bookings",n,o,s-1],queryFn:()=>k({filter:n,sortBy:o,page:s-1})}),{isLoading:p,error:y,bookings:v,count:h}}const ie=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,oe=d.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`,ae=d.div`
  display: flex;
  gap: 0.6rem;
`,P=d.button`
  background-color: ${r=>r.active?" var(--color-brand-600)":"var(--color-grey-50)"};
  color: ${r=>r.active?" var(--color-brand-50)":"inherit"};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;function te({count:r}){const[a,t]=S(),n=a.get("page")?Number(a.get("page")):1,c=Math.ceil(r/m);function g(){const o=n===c?n:n+1;a.set("page",o),t(a)}function u(){const o=n===1?n:n-1;a.set("page",o),t(a)}return c<=1?null:i(ie,{children:[i(oe,{children:["显示第 ",(n-1)*m+1," 到"," ",n===c?r:n*m," 条，共 ",r," 条结果"]}),i(ae,{children:[i(P,{onClick:u,disabled:n===1,children:[e(K,{})," ",e("span",{children:"上一页"})]}),i(P,{onClick:g,disabled:n===c,children:[e("span",{children:"下一页"}),e(G,{})]})]})]})}function se(){const{bookings:r,isLoading:a,count:t}=re();return a?e(R,{}):r.length?e(l,{children:i(f,{columns:"0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem",children:[i(f.Header,{children:[e("div",{children:"房源"}),e("div",{children:"客人"}),e("div",{children:"日期"}),e("div",{children:"状态"}),e("div",{children:"金额"}),e("div",{})]}),e(f.Body,{data:r,render:n=>e(ne,{booking:n},n.id)}),e(f.Footer,{children:e(te,{count:t})})]})}):e(W,{resourceName:"预订"})}function ce(){return i(X,{children:[e(j,{filterField:"status",options:[{value:"all",label:"全部"},{value:"checked-out",label:"已退房"},{value:"checked-in",label:"已入住"},{value:"unconfirmed",label:"未确认"}]}),e(Y,{options:[{value:"startDate-desc",label:"按日期排序（最近优先）"},{value:"startDate-asc",label:"按日期排序（最早优先）"},{value:"totalPrice-desc",label:"按金额排序（高到低）"},{value:"totalPrice-asc",label:"按金额排序（低到高）"}]})]})}function Be(){return i(H,{children:[i(z,{type:"horizontal",children:[e(E,{as:"h1",children:"全部预订"}),e(ce,{})]}),e(se,{})]})}export{Be as default};
