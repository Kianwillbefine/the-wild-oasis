import{W as i,d as o,a as t}from"./vendor-75fc689b.js";import{B as n}from"./icons-e81217d1.js";import{u as a}from"./themeStore-af75a008.js";const s=i`
  to {
    transform: rotate(1turn)
  }
`,p=o(n)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${s} 1.5s infinite linear;
`,m=o.div`
  text-align: center;
`,g=o.img`
  height: 9.6rem;
  width: auto;
`;function f(){const r=a(e=>e.isDarkMode)?"/logo-dark.png":"/logo-light.png";return t(m,{children:t(g,{src:r,alt:"Logo"})})}export{f as L,p as S};
