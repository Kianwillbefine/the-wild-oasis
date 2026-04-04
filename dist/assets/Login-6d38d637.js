import{s as u,j as d,c as e,u as g,k as f,a as v,t as y,L,w as b,C as m,B as w,r as S}from"./index-8ca981ee.js";import{F as C,I as p}from"./Form-984c8689.js";import{S as F,L as x}from"./Logo-a729913b.js";const E=u.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,R=u.label`
  font-weight: 500;
`,j=u.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;function c({label:t,error:n,children:a}){return d(E,{children:[t&&e(R,{htmlFor:a.props.id,children:t}),a,n&&e(j,{children:n})]})}function B(){const{t}=g(),n=f(),a=v(),{mutate:s,isLoading:l}=y({mutationFn:({email:o,password:r})=>L({email:o,password:r}),onSuccess:o=>{n.setQueryData(["user"],o.user),a("/dashboard",{replace:!0})},onError:o=>{console.log("ERROR",o),b.error(t("auth.invalidCredentials"))}});return{login:s,isLoading:l}}function k(){const{t}=g(),[n,a]=m.useState(""),[s,l]=m.useState(""),{login:o,isLoading:r}=B();function h(i){i.preventDefault(),!(!n||!s)&&o({email:n,password:s},{onSettled:()=>{a(""),l("")}})}return d(C,{onSubmit:h,children:[e(c,{label:t("auth.email"),children:e(p,{type:"email",id:"email",autoComplete:"username",value:n,onChange:i=>a(i.target.value),disabled:r})}),e(c,{label:t("auth.password"),children:e(p,{type:"password",id:"password",autoComplete:"current-password",value:s,onChange:i=>l(i.target.value),disabled:r})}),e(c,{children:e(w,{size:"large",disabled:r,children:r?e(F,{}):t("auth.loginButton")})})]})}const z=u.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;function Q(){const{t}=g();return d(z,{children:[e(x,{}),e(S,{as:"h4",children:t("pages.login.title")}),e(k,{})]})}export{Q as default};
