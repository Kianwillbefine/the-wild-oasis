import{d as o,j as s,a as d}from"./vendor-75fc689b.js";const i=o.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`,l=o.label`
  font-weight: 500;
`,n=o.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function c({label:r,error:t,children:e}){return s(i,{children:[r&&d(l,{htmlFor:e.props.id,children:r}),e,t&&d(n,{children:t})]})}export{c as F};
