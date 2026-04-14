import{d as x,j as u,a as s,v as g,w as v,X as p,Y as D,C as S,T as y,x as m}from"./vendor-75fc689b.js";import{t as b,w as f,x as w,y as C,H as T,a as h}from"./index-9609f675.js";import{u as A}from"./themeStore-af75a008.js";import{i as k}from"./index-66c4e4bf.js";import"./supabase-1545db47.js";import"./query-cdedaf21.js";import"./icons-e81217d1.js";function H(n,i){var l;b(1,arguments);var o=n||{},d=f(o.start),e=f(o.end),r=e.getTime();if(!(d.getTime()<=r))throw new RangeError("Invalid interval");var t=[],a=d;a.setHours(0,0,0,0);var c=Number((l=i==null?void 0:i.step)!==null&&l!==void 0?l:1);if(c<1||isNaN(c))throw new RangeError("`options.step` must be a number greater than 1");for(;a.getTime()<=r;)t.push(f(a)),a.setDate(a.getDate()+c),a.setHours(0,0,0,0);return t}const j=x.div`
  /* 盒子容器 */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,K=x(j)`
  grid-column: 1 / -1;

  /* 用一个小技巧修改网格线颜色 */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;function M({bookings:n,numDays:i}){const l=A(r=>r.isDarkMode),o=H({start:w(new Date,i-1),end:new Date}),d=o.map(r=>({label:C(r),totalSales:n.filter(t=>k(r,new Date(t.created_at))).reduce((t,a)=>t+a.totalPrice,0),extrasSales:n.filter(t=>k(r,new Date(t.created_at))).reduce((t,a)=>t+a.extrasPrice,0)})),e=l?{totalSales:{stroke:"#4f46e5",fill:"#4f46e5"},extrasSales:{stroke:"#22c55e",fill:"#22c55e"},text:"#e5e7eb",background:"#18212f"}:{totalSales:{stroke:"#4f46e5",fill:"#c7d2fe"},extrasSales:{stroke:"#16a34a",fill:"#dcfce7"},text:"#374151",background:"#fff"};return u(K,{children:[s(T,{as:"h2",children:`${h(o.at(0))} 至 ${h(o.at(-1))} 的销售额`}),s(g,{height:300,width:"100%",children:u(v,{data:d,children:[s(p,{dataKey:"label",tick:{fill:e.text},tickLine:{stroke:e.text}}),s(D,{unit:"¥",tick:{fill:e.text},tickLine:{stroke:e.text}}),s(S,{strokeDasharray:"4"}),s(y,{contentStyle:{backgroundColor:e.background}}),s(m,{dataKey:"totalSales",type:"monotone",stroke:e.totalSales.stroke,fill:e.totalSales.fill,strokeWidth:2,name:"总销售额",unit:"¥"}),s(m,{dataKey:"extrasSales",type:"monotone",stroke:e.extrasSales.stroke,fill:e.extrasSales.fill,strokeWidth:2,name:"附加销售额",unit:"¥"})]})})]})}export{M as default};
