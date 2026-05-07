import{a as r,j as t}from"./window-vendor-63f6856f.js";import{T as o}from"./vendor-d57a50b0.js";import{u as a}from"./useMoveBack-de8ac207.js";import{H as i}from"../entry/index-93132dc4.js";import"./query-vendor-7c0ee06c.js";import"./router-vendor-d0fbaad4.js";import"./toast-vendor-45638962.js";const n=o.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`,d=o.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;function f(){const e=a();return r(n,{children:t(d,{children:[r(i,{as:"h1",children:"未找到你要访问的页面"}),r("button",{onClick:e,size:"large",children:"← 返回"})]})})}export{f as default};
