import{C as i,s as a,c,E as f,j as s,O as p,u,r as v,B as d}from"./index-8ca981ee.js";function g(e,r=!0){const o=i.useRef();return i.useEffect(function(){function n(t){o.current&&!o.current.contains(t.target)&&e()}return document.addEventListener("click",n,r),()=>document.removeEventListener("click",n,r)},[e,r]),o}const h=a.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`,x=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`,b=a.button`
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
`,l=i.createContext();function m({children:e}){const[r,o]=i.useState(""),n=()=>o(""),t=o;return c(l.Provider,{value:{openName:r,close:n,open:t},children:e})}function k({children:e,opens:r}){const{open:o}=i.useContext(l);return i.cloneElement(e,{onClick:()=>o(r)})}function y({children:e,name:r}){const{openName:o,close:n}=i.useContext(l),t=g(n);return r!==o?null:f.createPortal(c(x,{children:s(h,{ref:t,children:[c(b,{onClick:n,children:c(p,{})}),c("div",{children:i.cloneElement(e,{onCloseModal:n})})]})}),document.body)}m.Open=k;m.Window=y;const C=a.div`
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
`;function w({resourceName:e,onConfirm:r,disabled:o,onCloseModal:n}){const{t}=u();return s(C,{children:[c(v,{as:"h3",children:t("ui.deleteTitle",{resource:e})}),c("p",{children:t("ui.deleteDescription",{resource:e})}),s("div",{children:[c(d,{variation:"secondary",disabled:o,onClick:n,children:t("common.cancel")}),c(d,{variation:"danger",disabled:o,onClick:r,children:t("cabins.delete")})]})]})}function M({resourceName:e}){const{t:r}=u();return c("p",{children:r("ui.emptyResource",{resource:e})})}export{w as C,M as E,m as M,g as u};
