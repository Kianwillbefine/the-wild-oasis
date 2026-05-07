import{a as t,j as y}from"./window-vendor-63f6856f.js";import{T as r,r as s,as as x,at as h}from"./vendor-d57a50b0.js";import{u as b}from"./ConfirmDelete-1bea8653.js";const v=r.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`,f=r.div`
  display: grid;
  grid-template-columns: ${o=>o.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`,w=r(f)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`,C=r(f)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,k=r.section`
  margin: 0.4rem 0;
`,S=r.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* 当 footer 没有子元素时将其隐藏，这得益于 :has 父选择器 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`,T=r.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,p=s.createContext();function u({columns:o,children:e}){return t(p.Provider,{value:{columns:o},children:t(v,{role:"table",children:e})})}function B({children:o}){const{columns:e}=s.useContext(p);return t(w,{role:"row",columns:e,as:"header",children:o})}function P({children:o}){const{columns:e}=s.useContext(p);return t(C,{role:"row",columns:e,children:o})}function j({data:o,render:e}){return o.length?t(k,{children:o.map(e)}):t(T,{children:"当前暂无可显示的数据"})}u.Header=B;u.Body=j;u.Row=P;u.Footer=S;const M=r.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,R=r.button`
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
`,E=r.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${o=>o.position.x}px;
  top: ${o=>o.position.y}px;
`,H=r.button`
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
`,g=s.createContext();function m({children:o}){const[e,n]=s.useState(""),[i,a]=s.useState(null),l=()=>n(""),c=n;return t(g.Provider,{value:{openId:e,close:l,open:c,position:i,setPosition:a},children:o})}function I({id:o}){const{openId:e,close:n,open:i,setPosition:a}=s.useContext(g);function l(c){c.stopPropagation();const d=c.target.closest("button").getBoundingClientRect();a({x:window.innerWidth-d.width-d.x,y:d.y+d.height+8}),e===""||e!==o?i(o):n()}return t(R,{onClick:l,children:t(x,{})})}function z({id:o,children:e}){const{openId:n,position:i,close:a}=s.useContext(g),l=b(a,!1);return n!==o?null:h.createPortal(t(E,{position:i,ref:l,children:e}),document.body)}function L({children:o,icon:e,onClick:n}){const{close:i}=s.useContext(g);function a(){n==null||n(),i()}return t("li",{children:y(H,{onClick:a,children:[e,t("span",{children:o})]})})}m.Menu=M;m.Toggle=I;m.List=z;m.Button=L;export{m as M,u as T};
