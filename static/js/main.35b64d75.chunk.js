(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(22),a=n(6),s=(n(31),n(32),n(4)),r=n(2),i=n(0),l=(n(33),n(11)),j=n.n(l),o=n(3),b=function(){var e=Object(r.m)();return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(a.b,{className:j()("navbar-item",{"has-background-grey-lighter":"/"===e.pathname}),to:"/",children:"Home"}),Object(o.jsx)(a.b,{className:j()("navbar-item",{"has-background-grey-lighter":e.pathname.includes("/people")}),to:"/people",children:"People"})]})})})},d=(n(35),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),h=function(e){var t=e.person,n=e.isLoading,c=Object(r.q)().slug;return n?Object(o.jsx)(d,{}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){var n,s;return Object(o.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===c}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(a.b,{className:j()({"has-text-danger":"f"===e.sex}),to:"/people/".concat(e.slug),children:e.name})}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),Object(o.jsx)("td",{children:t.some((function(t){return t.name===e.motherName}))?Object(o.jsx)(a.b,{className:"has-text-danger",to:"/people/".concat(null===(n=t.find((function(t){return t.name===e.motherName})))||void 0===n?void 0:n.slug),children:e.motherName}):e.motherName||"-"}),Object(o.jsx)("td",{children:t.some((function(t){return t.name===e.fatherName}))?Object(o.jsx)(a.b,{to:"/people/".concat(null===(s=t.find((function(t){return t.name===e.fatherName})))||void 0===s?void 0:s.slug),children:e.fatherName}):e.fatherName||"-"})]},e.slug)}))})]})]})};function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var O=function(e){var t=e.person,n=e.isLoading,c=e.error;return t.length||n?null:Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[c&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:c}),!t.length&&!n&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})},u=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),l=Object(s.a)(a,2),j=l[0],d=l[1],u=Object(i.useState)(""),x=Object(s.a)(u,2),p=x[0],g=x[1];return Object(i.useEffect)((function(){m().then((function(e){c(e)})).catch((function(){return g("Something went wrong")})).finally((function(){return d(!1)}))}),[c,d]),Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)("h1",{className:"title",children:"Home Page"})}),Object(o.jsx)(r.b,{path:"/home",element:Object(o.jsx)(r.a,{to:"/"})}),Object(o.jsxs)(r.b,{path:"people",children:[Object(o.jsx)(r.b,{index:!0,element:Object(o.jsx)(h,{person:n,isLoading:j})}),Object(o.jsx)(r.b,{path:"/people/:slug",element:Object(o.jsx)(h,{person:n,isLoading:j})})]}),Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})})]}),!j&&Object(o.jsx)(O,{person:n,isLoading:j,error:p})]})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(u,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.35b64d75.chunk.js.map