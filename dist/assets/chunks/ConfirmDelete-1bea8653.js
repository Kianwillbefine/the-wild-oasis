import{a as i,j as c}from"./window-vendor-63f6856f.js";import{r as t,T as l,at as m,au as f}from"./vendor-d57a50b0.js";import{H as p,B as d}from"../entry/index-93132dc4.js";function v(r,e=!0){const o=t.useRef();return t.useEffect(function(){function n(a){o.current&&!o.current.contains(a.target)&&r()}return document.addEventListener("click",n,e),()=>document.removeEventListener("click",n,e)},[r,e]),o}const h=l.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`,g=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`,x=l.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* 有时候 fill 和 stroke 都需要设置 */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`,s=t.createContext();function u({children:r}){const[e,o]=t.useState(""),n=()=>o(""),a=o;return i(s.Provider,{value:{openName:e,close:n,open:a},children:r})}function k({children:r,opens:e}){const{open:o}=t.useContext(s);return t.cloneElement(r,{onClick:()=>o(e)})}function b({children:r,name:e}){const{openName:o,close:n}=t.useContext(s),a=v(n);return e!==o?null:m.createPortal(i(g,{children:c(h,{ref:a,children:[i(x,{onClick:n,children:i(f,{})}),i("div",{children:t.cloneElement(r,{onCloseModal:n})})]})}),document.body)}u.Open=k;u.Window=b;const y=l.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;function M({resourceName:r,onConfirm:e,disabled:o,onCloseModal:n}){return c(y,{children:[c(p,{as:"h3",children:["删除",r]}),c("p",{children:["你确定要永久删除这个",r,"吗？此操作无法撤销。"]}),c("div",{children:[i(d,{variation:"secondary",disabled:o,onClick:n,children:"取消"}),i(d,{variation:"danger",disabled:o,onClick:e,children:"删除"})]})]})}export{M as C,u as M,v as u};
