import{a as s}from"./window-vendor-63f6856f.js";import{b as c}from"./router-vendor-d0fbaad4.js";import{T as l}from"./vendor-d57a50b0.js";const i=l.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${e=>e.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;function d({options:e,value:r,onChange:o,...t}){return s(i,{value:r,onChange:o,...t,children:e.map(a=>s("option",{value:a.value,children:a.label},a.value))})}function g({options:e}){const[r,o]=c(),t=r.get("sortBy")||"";function a(n){r.set("sortBy",n.target.value),o(r)}return s(d,{options:e,type:"white",value:t,onChange:a})}const y=l.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;export{g as S,y as T};
