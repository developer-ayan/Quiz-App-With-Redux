(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var s=t(0),c=t.n(s),a=t(3),r=t.n(a),i=(t(13),t(14),t(2)),l=t(4),o=t(1);var j=function(){var e=Object(l.b)((function(e){return e}));console.log(e);var n=Object(s.useState)(0),t=Object(i.a)(n,2),c=t[0],a=t[1],r=Object(s.useState)(0),j=Object(i.a)(r,2),d=j[0],u=j[1],b=Object(s.useState)(""),h=Object(i.a)(b,2),m=h[0],O=h[1],x=Object(s.useState)(!1),p=Object(i.a)(x,2),v=p[0],g=p[1];return console.log(d),Object(o.jsxs)("div",{children:[v?Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-12 shadow my-result rounded ",children:[Object(o.jsx)("h3",{className:"p-3",children:"Result "}),Object(o.jsx)("progress",{id:"file",value:d,max:e.user.length}),Object(o.jsxs)("h5",{children:[100*(d/e.user.length).toFixed(4)," "]}),Object(o.jsxs)("h5",{children:[d/e.user.length*100<60?"fail":"Pass"," "]})]})})}):null,v?null:Object(o.jsx)("div",{className:"Container mt-5 p-5",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsxs)("h3",{className:"My-Question-length",children:["Question ",Object(o.jsx)("span",{className:"my-span",children:c+1}),"/",e.user.length]}),Object(o.jsx)("p",{className:"Question mt-3 p-4",children:e.user[c].question})]})})}),v?null:Object(o.jsx)("div",{className:"Container m-3 p-3 ",children:Object(o.jsx)("div",{className:"row",children:e.user[c].answer.map((function(e,n){return Object(o.jsx)("div",{onClick:function(){return O(e)},className:"col-md-6 p-2",children:Object(o.jsx)("button",{className:"btn p-3 btn-lg btn-block my-css",children:e})},n)}))})}),v?null:Object(o.jsx)("div",{align:"center",children:Object(o.jsx)("button",{onClick:function(){return function(n){var t=e.user[c].correctAns;m==t&&u(d+1),e.user.length==c+1?g(!0):a(c+1)}()},className:"btn btn-primary pl-5 pr-5 next-btn",children:"N E X T"})})]})},d={user:[{question:"When did Pakistan become independent ?",answer:[13,14,15,16],correctAns:14},{question:"Who dreamed of separating Pakistan ?",answer:["Quid E Azam","Allama Iqbal","Narendra Modi","Dj Gaandi"],correctAns:"Allama Iqbal"},{question:"What was the religion of Quid E Azam ?",answer:["Islam","Isai","Hindu","Christian"],correctAns:"Isai"}]};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return e},b=t(8),h=Object(b.a)(u);t(20);var m=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(l.a,{store:h,children:Object(o.jsx)(j,{})})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,s=n.getFID,c=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),O()}},[[21,1,2]]]);
//# sourceMappingURL=main.09b68f3e.chunk.js.map