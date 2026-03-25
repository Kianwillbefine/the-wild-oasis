import{C as i,s as a,c,E as f,j as s,O as p,u,r as v,B as d}from"./index-8e4d25fa.js";function h(e,o=!0){const r=i.useRef();return i.useEffect(function(){function n(t){r.current&&!r.current.contains(t.target)&&e()}return document.addEventListener("click",n,o),()=>document.removeEventListener("click",n,o)},[e,o]),r}const g=a.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`,b=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`,x=a.button`
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
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`,l=i.createContext();function m({children:e}){const[o,r]=i.useState(""),n=()=>r(""),t=r;return c(l.Provider,{value:{openName:o,close:n,open:t},children:e})}function y({children:e,opens:o}){const{open:r}=i.useContext(l);return i.cloneElement(e,{onClick:()=>r(o)})}function k({children:e,name:o}){const{openName:r,close:n}=i.useContext(l),t=h(n);return o!==r?null:f.createPortal(c(b,{children:s(g,{ref:t,children:[c(x,{onClick:n,children:c(p,{})}),c("div",{children:i.cloneElement(e,{onCloseModal:n})})]})}),document.body)}m.Open=y;m.Window=k;const C=a.div`
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
`;function w({resourceName:e,onConfirm:o,disabled:r,onCloseModal:n}){const{t}=u();return s(C,{children:[c(v,{as:"h3",children:t("ui.deleteTitle",{resource:e})}),c("p",{children:t("ui.deleteDescription",{resource:e})}),s("div",{children:[c(d,{variation:"secondary",disabled:r,onClick:n,children:t("common.cancel")}),c(d,{variation:"danger",disabled:r,onClick:o,children:t("cabins.delete")})]})]})}function M({resourceName:e}){const{t:o}=u();return c("p",{children:o("ui.emptyResource",{resource:e})})}export{w as C,M as E,m as M,h as u};
