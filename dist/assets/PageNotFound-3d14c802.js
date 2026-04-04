import{s as a,u as t,c as r,j as o,r as s}from"./index-8ca981ee.js";import{u as c}from"./useMoveBack-fcf43758.js";const d=a.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`,i=a.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;function u(){const n=c(),{t:e}=t();return r(d,{children:o(i,{children:[r(s,{as:"h1",children:e("pages.notFound.title")}),o("button",{onClick:n,size:"large",children:["← ",e("common.back")]})]})})}export{u as default};
