import{d as l,a as o,f as c}from"./vendor-75fc689b.js";const d=l.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${e=>e.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;function i({options:e,value:r,onChange:t,...s}){return o(d,{value:r,onChange:t,...s,children:e.map(a=>o("option",{value:a.value,children:a.label},a.value))})}function h({options:e}){const[r,t]=c(),s=r.get("sortBy")||"";function a(n){r.set("sortBy",n.target.value),t(r)}return o(i,{options:e,type:"white",value:s,onChange:a})}const m=l.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;export{h as S,m as T};
