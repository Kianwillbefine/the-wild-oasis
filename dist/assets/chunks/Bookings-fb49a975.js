import{j as i,a as e,F as q}from"./window-vendor-63f6856f.js";import{u as H,f as D,a as w,T as N,b as M,g as k,P as m,S as j,F as O,R,H as z}from"../entry/index-93132dc4.js";import{T as d,ai as E,aj as A,ak as L,al as Q,am as $,a4 as K,S as G,an as _,ao as U}from"./vendor-d57a50b0.js";import{T as g,M as l}from"./Menus-44e38c7b.js";import{M as B,C as V}from"./ConfirmDelete-1bea8653.js";import{u as W}from"./useDeleteBooking-d79bd445.js";import{u as Z,b as S}from"./router-vendor-d0fbaad4.js";import{E as J}from"./Empty-1b8461a7.js";import{T as X,S as Y}from"./TableOperations-76c8d3dd.js";import"./toast-vendor-45638962.js";import"./query-vendor-7c0ee06c.js";const I=d.div`
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
`;function ne({booking:{id:r,created_at:o,startDate:t,endDate:n,numNights:c,numGuests:f,totalPrice:u,status:a,guests:{fullName:s,email:p},cabins:{name:v}}}){const h=Z(),{checkout:y,isCheckingOut:b}=H(),{deleteBooking:T,isDeleting:x}=W(),F={unconfirmed:"blue","checked-in":"green","checked-out":"silver"};return i(g.Row,{children:[e(I,{children:v}),i(C,{children:[e("span",{children:s}),e("span",{children:p})]}),i(C,{children:[i("span",{children:[E(new Date(t))?"今天":D(t)," ","→ ",c," 晚"]}),i("span",{children:[w(t)," — ",w(n)]})]}),e(N,{type:F[a],children:a==="unconfirmed"?"未确认":a==="checked-in"?"已入住":"已退房"}),e(ee,{children:M(u)}),i(B,{children:[i(l.Menu,{children:[e(l.Toggle,{id:r}),i(l.List,{id:r,children:[e(l.Button,{icon:e(A,{}),onClick:()=>h(`/bookings/${r}`),children:"查看详情"}),a==="unconfirmed"&&e(l.Button,{icon:e(L,{}),onClick:()=>h(`/checkin/${r}`),children:"入住"}),a==="checked-in"&&e(l.Button,{icon:e(Q,{}),onClick:()=>y(r),disabled:b,children:"退房"}),e(B.Open,{opens:"delete",children:e(l.Button,{icon:e($,{}),children:"删除预订"})})]})]}),e(B.Window,{name:"delete",children:e(V,{resourceName:"预订",disabled:x,onConfirm:()=>T(r)})})]})]})}function re(){const r=K(),[o]=S(),t=o.get("status"),n=!t||t==="all"?null:{field:"status",value:t},c=o.get("sortBy")||"startDate-desc",[f,u]=c.split("-"),a={field:f,direction:u},s=o.get("page")?Number(o.get("page")):1,{isLoading:p,data:{data:v,count:h}={},error:y}=G({queryKey:["bookings",n,a,s],queryFn:()=>k({filter:n,sortBy:a,page:s})}),b=Math.ceil(h/m);return s<b&&r.prefetchQuery({queryKey:["bookings",n,a,s+1],queryFn:()=>k({filter:n,sortBy:a,page:s+1})}),s>1&&r.prefetchQuery({queryKey:["bookings",n,a,s-1],queryFn:()=>k({filter:n,sortBy:a,page:s-1})}),{isLoading:p,error:y,bookings:v,count:h}}const ie=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ae=d.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`,oe=d.div`
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
`;function te({count:r}){const[o,t]=S(),n=o.get("page")?Number(o.get("page")):1,c=Math.ceil(r/m);function f(){const a=n===c?n:n+1;o.set("page",a),t(o)}function u(){const a=n===1?n:n-1;o.set("page",a),t(o)}return c<=1?null:i(ie,{children:[i(ae,{children:["显示第 ",(n-1)*m+1," 到"," ",n===c?r:n*m," 条，共 ",r," 条结果"]}),i(oe,{children:[i(P,{onClick:u,disabled:n===1,children:[e(_,{})," ",e("span",{children:"上一页"})]}),i(P,{onClick:f,disabled:n===c,children:[e("span",{children:"下一页"}),e(U,{})]})]})]})}function se(){const{bookings:r,isLoading:o,count:t}=re();return o?e(j,{}):r.length?e(l,{children:i(g,{columns:"0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem",children:[i(g.Header,{children:[e("div",{children:"房源"}),e("div",{children:"客人"}),e("div",{children:"日期"}),e("div",{children:"状态"}),e("div",{children:"金额"}),e("div",{})]}),e(g.Body,{data:r,render:n=>e(ne,{booking:n},n.id)}),e(g.Footer,{children:e(te,{count:t})})]})}):e(J,{resourceName:"预订"})}function ce(){return i(X,{children:[e(O,{filterField:"status",options:[{value:"all",label:"全部"},{value:"checked-out",label:"已退房"},{value:"checked-in",label:"已入住"},{value:"unconfirmed",label:"未确认"}]}),e(Y,{options:[{value:"startDate-desc",label:"按日期排序（最近优先）"},{value:"startDate-asc",label:"按日期排序（最早优先）"},{value:"totalPrice-desc",label:"按金额排序（高到低）"},{value:"totalPrice-asc",label:"按金额排序（低到高）"}]})]})}function ke(){return i(q,{children:[i(R,{type:"horizontal",children:[e(z,{as:"h1",children:"全部预订"}),e(ce,{})]}),e(se,{})]})}export{ke as default};
