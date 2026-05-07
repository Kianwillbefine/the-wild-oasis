import{j as g,a as t}from"./window-vendor-63f6856f.js";import{T as s,a4 as h,a5 as L,r as p}from"./vendor-d57a50b0.js";import{l as u,m as y,B as v,n as b,L as S,H as w}from"../entry/index-93132dc4.js";import{F,I as f}from"./Form-d776bdb1.js";import{n as R}from"./toast-vendor-45638962.js";import{u as x}from"./router-vendor-d0fbaad4.js";import"./query-vendor-7c0ee06c.js";const A=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,C=s.label`
  font-weight: 500;
`,E=s.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function m({label:r,error:n,children:o}){return g(A,{children:[r&&t(C,{htmlFor:o.props.id,children:r}),o,n&&t(E,{children:n})]})}function j(){const r=h(),n=x(),o=u(e=>e.setAuthenticated),i=u(e=>e.redirectAfterLogin),l=u(e=>e.clearRedirectAfterLogin),{mutate:a,isLoading:c}=L({mutationFn:({email:e,password:d})=>y({email:e,password:d}),onSuccess:e=>{r.setQueryData(["user"],e.user),o(e.user);const d=i||"/dashboard";l(),n(d,{replace:!0})},onError:e=>{console.log("ERROR",e),R.error("邮箱或密码不正确")}});return{login:a,isLoading:c}}function z(){const[r,n]=p.useState(""),[o,i]=p.useState(""),{login:l,isLoading:a}=j();function c(e){e.preventDefault(),!(!r||!o)&&l({email:r,password:o},{onSettled:()=>{n(""),i("")}})}return g(F,{onSubmit:c,children:[t(m,{label:"邮箱地址",children:t(f,{type:"email",id:"email",autoComplete:"username",value:r,onChange:e=>n(e.target.value),disabled:a})}),t(m,{label:"密码",children:t(f,{type:"password",id:"password",autoComplete:"current-password",value:o,onChange:e=>i(e.target.value),disabled:a})}),t(m,{children:t(v,{size:"large",disabled:a,children:a?t(b,{}):"登录"})})]})}const B=s.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;function N(){return g(B,{children:[t(S,{}),t(w,{as:"h4",children:"登录账户"}),t(z,{})]})}export{N as default};
