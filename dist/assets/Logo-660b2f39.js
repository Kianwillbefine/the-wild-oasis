import{ae as a,af as e,s as o,a9 as r,c as n}from"./index-8e4d25fa.js";function i(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"}}]})(t)}const s=e`
  to {
    transform: rotate(1turn)
  }
`,l=o(i)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${s} 1.5s infinite linear;
`,c=o.div`
  text-align: center;
`,g=o.img`
  height: 9.6rem;
  width: auto;
`;function m(){const{isDarkMode:t}=r();return n(c,{children:n(g,{src:t?"/logo-dark.png":"/logo-light.png",alt:"Logo"})})}export{m as L,l as S};
