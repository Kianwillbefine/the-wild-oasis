import{s as g,u as f,a as F,b as H,j as i,c as e,f as O,d as C,T as A,e as N,H as R,g as j,h as z,i as E,k as L,l as M,m as Q,n as w,P as b,o as $,p as K,S as G,F as _,q as U,R as V,r as W}from"./index-8e4d25fa.js";import{T as m,M as d,a as Z,S as J}from"./TableOperations-970c10dd.js";import{M as B,C as X,E as Y}from"./Empty-76a8695d.js";import{u as I}from"./useDeleteBooking-c6b9fd4a.js";import{i as ee}from"./index-22586340.js";const ne=g.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`,P=g.div`
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
`,oe=g.div`
  font-family: "Sono";
  font-weight: 500;
`;function ie({booking:{id:n,created_at:c,startDate:t,endDate:s,numNights:o,numGuests:u,totalPrice:h,status:r,guests:{fullName:a,email:k},cabins:{name:y}}}){const{t:l}=f(),p=F(),{checkout:v,isCheckingOut:S}=H(),{deleteBooking:T,isDeleting:x}=I(),q={unconfirmed:"blue","checked-in":"green","checked-out":"silver"};return i(m.Row,{children:[e(ne,{children:y}),i(P,{children:[e("span",{children:a}),e("span",{children:k})]}),i(P,{children:[i("span",{children:[ee(new Date(t))?l("common.today"):O(t)," ","→ ",o," ",o>1?"nights":"night"]}),i("span",{children:[C(new Date(t),"MMM dd yyyy")," —"," ",C(new Date(s),"MMM dd yyyy")]})]}),e(A,{type:q[r],children:l(r==="unconfirmed"?"bookings.unconfirmed":r==="checked-in"?"bookings.checkedIn":"bookings.checkedOut")}),e(oe,{children:N(h)}),i(B,{children:[i(d.Menu,{children:[e(d.Toggle,{id:n}),i(d.List,{id:n,children:[e(d.Button,{icon:e(R,{}),onClick:()=>p(`/bookings/${n}`),children:l("bookings.seeDetails")}),r==="unconfirmed"&&e(d.Button,{icon:e(j,{}),onClick:()=>p(`/checkin/${n}`),children:l("common.checkIn")}),r==="checked-in"&&e(d.Button,{icon:e(z,{}),onClick:()=>v(n),disabled:S,children:l("common.checkOut")}),e(B.Open,{opens:"delete",children:e(d.Button,{icon:e(E,{}),children:l("bookings.deleteBooking")})})]})]}),e(B.Window,{name:"delete",children:e(X,{resourceName:"booking",disabled:x,onConfirm:()=>T(n)})})]})]})}function te(){const n=L(),[c]=M(),t=c.get("status"),s=!t||t==="all"?null:{field:"status",value:t},o=c.get("sortBy")||"startDate-desc",[u,h]=o.split("-"),r={field:u,direction:h},a=c.get("page")?Number(c.get("page")):1,{isLoading:k,data:{data:y,count:l}={},error:p}=Q({queryKey:["bookings",s,r,a],queryFn:()=>w({filter:s,sortBy:r,page:a})}),v=Math.ceil(l/b);return a<v&&n.prefetchQuery({queryKey:["bookings",s,r,a+1],queryFn:()=>w({filter:s,sortBy:r,page:a+1})}),a>1&&n.prefetchQuery({queryKey:["bookings",s,r,a-1],queryFn:()=>w({filter:s,sortBy:r,page:a-1})}),{isLoading:k,error:p,bookings:y,count:l}}const re=g.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ae=g.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`,se=g.div`
  display: flex;
  gap: 0.6rem;
`,D=g.button`
  background-color: ${n=>n.active?" var(--color-brand-600)":"var(--color-grey-50)"};
  color: ${n=>n.active?" var(--color-brand-50)":"inherit"};
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
`;function ce({count:n}){const{t:c}=f(),[t,s]=M(),o=t.get("page")?Number(t.get("page")):1,u=Math.ceil(n/b);function h(){const a=o===u?o:o+1;t.set("page",a),s(t)}function r(){const a=o===1?o:o-1;t.set("page",a),s(t)}return u<=1?null:i(re,{children:[e(ae,{children:c("ui.showingResults",{from:(o-1)*b+1,to:o===u?n:o*b,count:n})}),i(se,{children:[i(D,{onClick:r,disabled:o===1,children:[e($,{})," ",e("span",{children:c("common.previous")})]}),i(D,{onClick:h,disabled:o===u,children:[e("span",{children:c("common.next")}),e(K,{})]})]})]})}function le(){const{t:n}=f(),{bookings:c,isLoading:t,count:s}=te();return t?e(G,{}):c.length?e(d,{children:i(m,{columns:"0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem",children:[i(m.Header,{children:[e("div",{children:n("bookings.cabin")}),e("div",{children:n("bookings.guest")}),e("div",{children:n("bookings.dates")}),e("div",{children:n("bookings.status")}),e("div",{children:n("bookings.amount")}),e("div",{})]}),e(m.Body,{data:c,render:o=>e(ie,{booking:o},o.id)}),e(m.Footer,{children:e(ce,{count:s})})]})}):e(Y,{resourceName:"bookings"})}function de(){const{t:n}=f();return i(Z,{children:[e(_,{filterField:"status",options:[{value:"all",label:n("bookings.all")},{value:"checked-out",label:n("bookings.checkedOut")},{value:"checked-in",label:n("bookings.checkedIn")},{value:"unconfirmed",label:n("bookings.unconfirmed")}]}),e(J,{options:[{value:"startDate-desc",label:n("bookings.sortDateDesc")},{value:"startDate-asc",label:n("bookings.sortDateAsc")},{value:"totalPrice-desc",label:n("bookings.sortAmountDesc")},{value:"totalPrice-asc",label:n("bookings.sortAmountAsc")}]})]})}function pe(){const{t:n}=f();return i(U,{children:[i(V,{type:"horizontal",children:[e(W,{as:"h1",children:n("pages.bookings.title")}),e(de,{})]}),e(le,{})]})}export{pe as default};
