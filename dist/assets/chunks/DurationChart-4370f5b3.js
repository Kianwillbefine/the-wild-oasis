import{j as l,a as o}from"./window-vendor-63f6856f.js";import{T as s,r as c}from"./vendor-d57a50b0.js";import{l as u,H as h}from"../entry/index-93132dc4.js";import{R as g,P as d,b as f,c as v,T as y,L as k}from"./chart-vendor-5ae1781d.js";import"./query-vendor-7c0ee06c.js";import"./router-vendor-d0fbaad4.js";import"./toast-vendor-45638962.js";const N=s.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`,p=[{key:"oneNight",value:0,color:"#ef4444"},{key:"twoNights",value:0,color:"#f97316"},{key:"threeNights",value:0,color:"#eab308"},{key:"fourFiveNights",value:0,color:"#84cc16"},{key:"sixSevenNights",value:0,color:"#22c55e"},{key:"eightFourteenNights",value:0,color:"#14b8a6"},{key:"fifteenTwentyOneNights",value:0,color:"#3b82f6"},{key:"twentyOnePlusNights",value:0,color:"#a855f7"}],w=[{key:"oneNight",value:0,color:"#b91c1c"},{key:"twoNights",value:0,color:"#c2410c"},{key:"threeNights",value:0,color:"#a16207"},{key:"fourFiveNights",value:0,color:"#4d7c0f"},{key:"sixSevenNights",value:0,color:"#15803d"},{key:"eightFourteenNights",value:0,color:"#0f766e"},{key:"fifteenTwentyOneNights",value:0,color:"#1d4ed8"},{key:"twentyOnePlusNights",value:0,color:"#7e22ce"}];function x(e){return e===1?"oneNight":e===2?"twoNights":e===3?"threeNights":[4,5].includes(e)?"fourFiveNights":[6,7].includes(e)?"sixSevenNights":e>=8&&e<=14?"eightFourteenNights":e>=15&&e<=21?"fifteenTwentyOneNights":e>=21?"twentyOnePlusNights":null}const b={oneNight:"1 晚",twoNights:"2 晚",threeNights:"3 晚",fourFiveNights:"4-5 晚",sixSevenNights:"6-7 晚",eightFourteenNights:"8-14 晚",fifteenTwentyOneNights:"15-21 晚",twentyOnePlusNights:"21 晚以上"};function m(e,i){return i.reduce((t,r)=>{const n=x(r.numNights);return n?t.map(a=>a.key===n?{...a,value:a.value+1}:a):t},e).filter(t=>t.value>0).map(t=>({...t,duration:b[t.key]}))}function K({confirmedStays:e}){const i=u(r=>r.isDarkMode),t=c.useMemo(()=>m(i?w:p,e),[e,i]);return l(N,{children:[o(h,{as:"h2",children:"住宿时长分布"}),o(g,{width:"100%",height:240,children:l(d,{children:[o(f,{data:t,nameKey:"duration",dataKey:"value",innerRadius:85,outerRadius:110,cx:"40%",cy:"50%",paddingAngle:3,children:t.map(r=>o(v,{fill:r.color,stroke:r.color},r.key))}),o(y,{}),o(k,{verticalAlign:"middle",align:"right",width:"30%",layout:"vertical",iconSize:15,iconType:"circle"})]})})]})}export{K as default};
