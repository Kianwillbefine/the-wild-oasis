import{s,C as i,c as r,u as y,D as f,E as v,j as b,l as x}from"./index-8e4d25fa.js";import{u as w}from"./Empty-76a8695d.js";const S=s.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`,h=s.div`
  display: grid;
  grid-template-columns: ${e=>e.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`,C=s(h)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`,k=s(h)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,B=s.section`
  margin: 0.4rem 0;
`,P=s.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`,T=s.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,p=i.createContext();function u({columns:e,children:o}){return r(p.Provider,{value:{columns:e},children:r(S,{role:"table",children:o})})}function j({children:e}){const{columns:o}=i.useContext(p);return r(C,{role:"row",columns:o,as:"header",children:e})}function E({children:e}){const{columns:o}=i.useContext(p);return r(k,{role:"row",columns:o,children:e})}function M({data:e,render:o}){const{t}=y();return e.length?r(B,{children:e.map(o)}):r(T,{children:t("common.emptyData")})}u.Header=j;u.Body=M;u.Row=E;u.Footer=P;const R=s.div`
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
`,g=i.createContext();function m({children:e}){const[o,t]=i.useState(""),[a,n]=i.useState(null),l=()=>t(""),c=t;return r(g.Provider,{value:{openId:o,close:l,open:c,position:a,setPosition:n},children:e})}function L({id:e}){const{openId:o,close:t,open:a,setPosition:n}=i.useContext(g);function l(c){c.stopPropagation();const d=c.target.closest("button").getBoundingClientRect();n({x:window.innerWidth-d.width-d.x,y:d.y+d.height+8}),o===""||o!==e?a(e):t()}return r(z,{onClick:l,children:r(f,{})})}function $({id:e,children:o}){const{openId:t,position:a,close:n}=i.useContext(g),l=w(n,!1);return t!==e?null:v.createPortal(r(H,{position:a,ref:l,children:o}),document.body)}function D({children:e,icon:o,onClick:t}){const{close:a}=i.useContext(g);function n(){t==null||t(),a()}return r("li",{children:b(I,{onClick:n,children:[o,r("span",{children:e})]})})}m.Menu=R;m.Toggle=L;m.List=$;m.Button=D;const O=s.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${e=>e.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;function F({options:e,value:o,onChange:t,...a}){return r(O,{value:o,onChange:t,...a,children:e.map(n=>r("option",{value:n.value,children:n.label},n.value))})}function X({options:e}){const[o,t]=x(),a=o.get("sortBy")||"";function n(l){o.set("sortBy",l.target.value),t(o)}return r(F,{options:e,type:"white",value:a,onChange:n})}const q=s.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;export{m as M,X as S,u as T,q as a};
