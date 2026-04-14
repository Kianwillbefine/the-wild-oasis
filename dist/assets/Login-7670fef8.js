import{d as s,j as g,a as t,u as h,n as L,r as p}from"./vendor-75fc689b.js";import{l as u,m as y,B as b,H as v}from"./index-9609f675.js";import{F as S,I as f}from"./Form-7f955686.js";import{a as w,b as A}from"./query-cdedaf21.js";import{S as F,L as R}from"./Logo-ae2fa6f8.js";import"./supabase-1545db47.js";import"./icons-e81217d1.js";import"./themeStore-af75a008.js";const x=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,C=s.label`
  font-weight: 500;
`,E=s.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function m({label:r,error:n,children:o}){return g(x,{children:[r&&t(C,{htmlFor:o.props.id,children:r}),o,n&&t(E,{children:n})]})}function j(){const r=w(),n=h(),o=u(e=>e.setAuthenticated),i=u(e=>e.redirectAfterLogin),l=u(e=>e.clearRedirectAfterLogin),{mutate:a,isLoading:c}=A({mutationFn:({email:e,password:d})=>y({email:e,password:d}),onSuccess:e=>{r.setQueryData(["user"],e.user),o(e.user);const d=i||"/dashboard";l(),n(d,{replace:!0})},onError:e=>{console.log("ERROR",e),L.error("邮箱或密码不正确")}});return{login:a,isLoading:c}}function z(){const[r,n]=p.useState(""),[o,i]=p.useState(""),{login:l,isLoading:a}=j();function c(e){e.preventDefault(),!(!r||!o)&&l({email:r,password:o},{onSettled:()=>{n(""),i("")}})}return g(S,{onSubmit:c,children:[t(m,{label:"邮箱地址",children:t(f,{type:"email",id:"email",autoComplete:"username",value:r,onChange:e=>n(e.target.value),disabled:a})}),t(m,{label:"密码",children:t(f,{type:"password",id:"password",autoComplete:"current-password",value:o,onChange:e=>i(e.target.value),disabled:a})}),t(m,{children:t(b,{size:"large",disabled:a,children:a?t(F,{}):"登录"})})]})}const B=s.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;function O(){return g(B,{children:[t(R,{}),t(v,{as:"h4",children:"登录账户"}),t(z,{})]})}export{O as default};
