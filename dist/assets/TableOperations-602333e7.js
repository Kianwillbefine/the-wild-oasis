import{s,C as i,c as t,u as h,D as f,E as v,j as b,l as x}from"./index-8ca981ee.js";import{u as w}from"./Empty-5c02679f.js";const S=s.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`,y=s.div`
  display: grid;
  grid-template-columns: ${e=>e.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`,C=s(y)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`,B=s(y)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,k=s.section`
  margin: 0.4rem 0;
`,P=s.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* 当 footer 没有子元素时将其隐藏，这得益于 :has 父选择器 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`,T=s.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,p=i.createContext();function u({columns:e,children:o}){return t(p.Provider,{value:{columns:e},children:t(S,{role:"table",children:o})})}function j({children:e}){const{columns:o}=i.useContext(p);return t(C,{role:"row",columns:o,as:"header",children:e})}function E({children:e}){const{columns:o}=i.useContext(p);return t(B,{role:"row",columns:o,children:e})}function M({data:e,render:o}){const{t:r}=h();return e.length?t(k,{children:e.map(o)}):t(T,{children:r("common.emptyData")})}u.Header=j;u.Body=M;u.Row=E;u.Footer=P;const R=s.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,z=s.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`,H=s.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${e=>e.position.x}px;
  top: ${e=>e.position.y}px;
`,I=s.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`,g=i.createContext();function m({children:e}){const[o,r]=i.useState(""),[a,n]=i.useState(null),l=()=>r(""),c=r;return t(g.Provider,{value:{openId:o,close:l,open:c,position:a,setPosition:n},children:e})}function L({id:e}){const{openId:o,close:r,open:a,setPosition:n}=i.useContext(g);function l(c){c.stopPropagation();const d=c.target.closest("button").getBoundingClientRect();n({x:window.innerWidth-d.width-d.x,y:d.y+d.height+8}),o===""||o!==e?a(e):r()}return t(z,{onClick:l,children:t(f,{})})}function $({id:e,children:o}){const{openId:r,position:a,close:n}=i.useContext(g),l=w(n,!1);return r!==e?null:v.createPortal(t(H,{position:a,ref:l,children:o}),document.body)}function D({children:e,icon:o,onClick:r}){const{close:a}=i.useContext(g);function n(){r==null||r(),a()}return t("li",{children:b(I,{onClick:n,children:[o,t("span",{children:e})]})})}m.Menu=R;m.Toggle=L;m.List=$;m.Button=D;const O=s.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${e=>e.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;function F({options:e,value:o,onChange:r,...a}){return t(O,{value:o,onChange:r,...a,children:e.map(n=>t("option",{value:n.value,children:n.label},n.value))})}function X({options:e}){const[o,r]=x(),a=o.get("sortBy")||"";function n(l){o.set("sortBy",l.target.value),r(o)}return t(F,{options:e,type:"white",value:a,onChange:n})}const q=s.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;export{m as M,X as S,u as T,q as a};
