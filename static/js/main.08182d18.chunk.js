(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),l=a.n(r),o=(a(9),a(2)),s=(a(10),a(0));function i(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(s.jsx)("div",{className:"navbar-nav",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(s.jsxs)("div",{className:"form-check form-switch",children:[Object(s.jsx)("input",{className:"form-check-input ",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toogleMode}),Object(s.jsxs)("label",{htmlFor:"flexSwitchCheckDefault",className:"text-".concat("light"===e.mode?"dark":"light"),children:["Enable ","light"===e.mode?"Dark":"Light"," Mode "]})]})]})})}function b(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container my-3",style:{backgroundColor:"light"==e.mode?"white":"#475663",color:"light"==e.mode?"#475663":"white"},children:[Object(s.jsx)("h2",{className:"centertxt",children:e.header}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control",id:"Textarea1",value:c,onChange:function(e){r(e.target.value)},rows:"8",style:{backgroundColor:"light"==e.mode?"white":"#60778a",color:"light"==e.mode?"#616161":"white",fontSize:"20px"}})}),Object(s.jsxs)("div",{class:"btn-group",role:"group","aria-label":"Basic outlined example",children:[Object(s.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){var e=c.toUpperCase();r(e)},children:" Upeer Case"}),Object(s.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){var e=c.toLowerCase();r(e)},children:" Lower Case"}),Object(s.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){navigator.clipboard.writeText(c)},children:" Copy"}),Object(s.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){r(" ")},children:" Clear"})]}),Object(s.jsx)("h3",{className:"p-2 mt-2",children:"Text Summary"}),Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("b",{children:"Charchaters:"})," ",c.length]}),Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("b",{children:"Word Count:"})," ",c.split(" ").length-1]})]})})}i.defaultProps={title:"Your Title"};var d=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{title:"TextUtil",mode:a,toogleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#475663"):(c("light"),document.body.style.backgroundColor="#fff")}}),Object(s.jsx)(b,{header:"Enter Your Text",mode:a})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.08182d18.chunk.js.map