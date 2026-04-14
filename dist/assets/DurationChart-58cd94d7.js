import{d as s,j as l,a as i,v as u,P as c,y as h,D as d,T as g,E as f}from"./vendor-75fc689b.js";import{H as v}from"./index-9609f675.js";import{u as y}from"./themeStore-af75a008.js";import"./supabase-1545db47.js";import"./query-cdedaf21.js";import"./icons-e81217d1.js";const k=s.div`
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
`,N=[{key:"oneNight",value:0,color:"#ef4444"},{key:"twoNights",value:0,color:"#f97316"},{key:"threeNights",value:0,color:"#eab308"},{key:"fourFiveNights",value:0,color:"#84cc16"},{key:"sixSevenNights",value:0,color:"#22c55e"},{key:"eightFourteenNights",value:0,color:"#14b8a6"},{key:"fifteenTwentyOneNights",value:0,color:"#3b82f6"},{key:"twentyOnePlusNights",value:0,color:"#a855f7"}],p=[{key:"oneNight",value:0,color:"#b91c1c"},{key:"twoNights",value:0,color:"#c2410c"},{key:"threeNights",value:0,color:"#a16207"},{key:"fourFiveNights",value:0,color:"#4d7c0f"},{key:"sixSevenNights",value:0,color:"#15803d"},{key:"eightFourteenNights",value:0,color:"#0f766e"},{key:"fifteenTwentyOneNights",value:0,color:"#1d4ed8"},{key:"twentyOnePlusNights",value:0,color:"#7e22ce"}];function w(e){return e===1?"oneNight":e===2?"twoNights":e===3?"threeNights":[4,5].includes(e)?"fourFiveNights":[6,7].includes(e)?"sixSevenNights":e>=8&&e<=14?"eightFourteenNights":e>=15&&e<=21?"fifteenTwentyOneNights":e>=21?"twentyOnePlusNights":null}const x={oneNight:"1 晚",twoNights:"2 晚",threeNights:"3 晚",fourFiveNights:"4-5 晚",sixSevenNights:"6-7 晚",eightFourteenNights:"8-14 晚",fifteenTwentyOneNights:"15-21 晚",twentyOnePlusNights:"21 晚以上"};function b(e,a){return a.reduce((t,r)=>{const n=w(r.numNights);return n?t.map(o=>o.key===n?{...o,value:o.value+1}:o):t},e).filter(t=>t.value>0).map(t=>({...t,duration:x[t.key]}))}function S({confirmedStays:e}){const a=y(r=>r.isDarkMode),t=b(a?p:N,e);return l(k,{children:[i(v,{as:"h2",children:"住宿时长分布"}),i(u,{width:"100%",height:240,children:l(c,{children:[i(h,{data:t,nameKey:"duration",dataKey:"value",innerRadius:85,outerRadius:110,cx:"40%",cy:"50%",paddingAngle:3,children:t.map(r=>i(d,{fill:r.color,stroke:r.color},r.key))}),i(g,{}),i(f,{verticalAlign:"middle",align:"right",width:"30%",layout:"vertical",iconSize:15,iconType:"circle"})]})})]})}export{S as default};
