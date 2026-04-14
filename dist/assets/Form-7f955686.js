import{d,A as o}from"./vendor-75fc689b.js";const s=d.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`,e=d.form`
  ${r=>r.type==="regular"&&o`
      padding: 2.4rem 4rem;

      /* 盒子容器 */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${r=>r.type==="modal"&&o`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;e.defaultProps={type:"regular"};export{e as F,s as I};
