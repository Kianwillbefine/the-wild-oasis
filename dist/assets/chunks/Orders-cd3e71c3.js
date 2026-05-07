import{j as n,a as e,A as h,F as g}from"./window-vendor-63f6856f.js";import{h as v,i as b,T as u,b as y,S as _,F as w,R as x,H as O}from"../entry/index-93132dc4.js";import{T as d,S}from"./vendor-d57a50b0.js";import{E as k}from"./Empty-1b8461a7.js";import{b as F}from"./router-vendor-d0fbaad4.js";import{T as L,S as T}from"./TableOperations-76c8d3dd.js";import"./toast-vendor-45638962.js";import"./query-vendor-7c0ee06c.js";const z=d.div`
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  overflow: hidden;
`;function R({className:t,height:o=640,rowCount:a,rowHeight:l,rowComponent:r,rowProps:i,header:c,overscanCount:s=8}){return n(z,{className:t,children:[c,e(h,{rowCount:a,rowHeight:l,rowComponent:r,rowProps:i,overscanCount:s,style:{height:o,width:"100%"}})]})}async function q({filter:t,sortBy:o}){let a=v.from("orders").select("id, created_at, order_no, guest_name, operator_name, action_type, status, amount, description");t&&(a=a[t.method||"eq"](t.field,t.value)),o&&(a=a.order(o.field,{ascending:o.direction==="asc"}));const{data:l,error:r}=await a;if(r)throw console.error(r),new Error("Orders could not be loaded");return l}function H(){const[t]=F(),o=t.get("status"),a=!o||o==="all"?null:{field:"status",value:o},l=t.get("sortBy")||"created_at-desc",[r,i]=l.split("-"),c={field:r,direction:i},{isLoading:s,data:f=[],error:p}=S({queryKey:["orders",a,c],queryFn:()=>q({filter:a,sortBy:c})});return{isLoading:s,orders:f,error:p}}const j=d.div`
  display: grid;
  grid-template-columns: 1.2fr 1.1fr 1fr 1fr 1fr 2fr;
  column-gap: 2rem;
  align-items: center;
  padding: 0 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
`,A=d.div`
  font-family: "Sono";
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-grey-700);
`,m=d.div`
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
`,C=d.div`
  font-family: "Sono";
  font-weight: 500;
`,E={created:"blue",confirmed:"green",checked_in:"indigo",checked_out:"silver",cancelled:"red"},M={pending:{label:"待处理",color:"blue"},confirmed:{label:"已确认",color:"green"},completed:{label:"已完成",color:"silver"},cancelled:{label:"已取消",color:"red"}},P={created:"创建订单",confirmed:"确认订单",checked_in:"办理入住",checked_out:"完成退房",cancelled:"取消订单"};function B({index:t,style:o,orders:a,ariaAttributes:l}){const r=a[t],i=M[r.status];return n(j,{style:o,...l,children:[n(A,{children:["#",r.order_no]}),n(m,{children:[e("span",{children:r.guest_name}),e("span",{children:b(r.created_at)})]}),e("div",{children:r.operator_name}),e(u,{type:E[r.action_type],children:P[r.action_type]}),n(m,{children:[e(u,{type:i.color,children:i.label}),e(C,{children:y(r.amount)})]}),e("div",{children:r.description})]})}const N=d.div`
  display: grid;
  grid-template-columns: 1.2fr 1.1fr 1fr 1fr 1fr 2fr;
  column-gap: 2rem;
  align-items: center;
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--color-grey-600);
`;function V(){const{isLoading:t,orders:o}=H();return t?e(_,{}):o.length?e(R,{height:640,rowCount:o.length,rowHeight:72,rowComponent:B,rowProps:{orders:o},header:n(N,{children:[e("div",{children:"订单号"}),e("div",{children:"住客 / 时间"}),e("div",{children:"处理人"}),e("div",{children:"动作"}),e("div",{children:"状态 / 金额"}),e("div",{children:"说明"})]})}):e(k,{resourceName:"订单流水"})}function D(){return n(L,{children:[e(w,{filterField:"status",options:[{value:"all",label:"全部状态"},{value:"pending",label:"待处理"},{value:"confirmed",label:"已确认"},{value:"completed",label:"已完成"},{value:"cancelled",label:"已取消"}]}),e(T,{options:[{value:"created_at-desc",label:"按时间排序（最近优先）"},{value:"created_at-asc",label:"按时间排序（最早优先）"},{value:"amount-desc",label:"按金额排序（高到低）"},{value:"amount-asc",label:"按金额排序（低到高）"}]})]})}function X(){return n(g,{children:[n(x,{type:"horizontal",children:[e(O,{as:"h1",children:"订单"}),e(D,{})]}),e(V,{})]})}export{X as default};
