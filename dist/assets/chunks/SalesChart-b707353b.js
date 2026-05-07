import{j as d,a as e}from"./window-vendor-63f6856f.js";import{T as k,r as y,ay as p,Z as g}from"./vendor-d57a50b0.js";import{l as D,v as f,H as b,a as x}from"../entry/index-93132dc4.js";import{R as v,A as C,X as A,Y as w,C as M,T as j,a as S}from"./chart-vendor-5ae1781d.js";import"./query-vendor-7c0ee06c.js";import"./router-vendor-d0fbaad4.js";import"./toast-vendor-45638962.js";const K=k.div`
  /* 盒子容器 */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,T=k(K)`
  grid-column: 1 / -1;

  /* 用一个小技巧修改网格线颜色 */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;function Y({bookings:o,numDays:i}){const u=D(l=>l.isDarkMode),{allDates:n,data:m}=y.useMemo(()=>{const l=p({start:g(new Date,i-1),end:new Date}),h=o.reduce((r,t)=>{const s=f(t.created_at),c=r.get(s)??{totalSales:0,extrasSales:0};return r.set(s,{totalSales:c.totalSales+t.totalPrice,extrasSales:c.extrasSales+t.extrasPrice}),r},new Map);return{allDates:l,data:l.map(r=>{const t=f(r),s=h.get(t)??{totalSales:0,extrasSales:0};return{label:t,totalSales:s.totalSales,extrasSales:s.extrasSales}})}},[o,i]),a=u?{totalSales:{stroke:"#4f46e5",fill:"#4f46e5"},extrasSales:{stroke:"#22c55e",fill:"#22c55e"},text:"#e5e7eb",background:"#18212f"}:{totalSales:{stroke:"#4f46e5",fill:"#c7d2fe"},extrasSales:{stroke:"#16a34a",fill:"#dcfce7"},text:"#374151",background:"#fff"};return d(T,{children:[e(b,{as:"h2",children:`${x(n.at(0))} 至 ${x(n.at(-1))} 的销售额`}),e(v,{height:300,width:"100%",children:d(C,{data:m,children:[e(A,{dataKey:"label",tick:{fill:a.text},tickLine:{stroke:a.text}}),e(w,{unit:"¥",tick:{fill:a.text},tickLine:{stroke:a.text}}),e(M,{strokeDasharray:"4"}),e(j,{contentStyle:{backgroundColor:a.background}}),e(S,{dataKey:"totalSales",type:"monotone",stroke:a.totalSales.stroke,fill:a.totalSales.fill,strokeWidth:2,name:"总销售额",unit:"¥"}),e(S,{dataKey:"extrasSales",type:"monotone",stroke:a.extrasSales.stroke,fill:a.extrasSales.fill,strokeWidth:2,name:"附加销售额",unit:"¥"})]})})]})}export{Y as default};
