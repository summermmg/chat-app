(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(63),r=n.n(a),o=(n(73),n(74),n(17)),i=n(2),l=n(13),j=n(1),m=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(l.a)(a,2),i=r[0],m=r[1];return Object(j.jsx)("div",{className:"homeOuterContainer",children:Object(j.jsxs)("div",{className:"homeInnerContainer",children:[Object(j.jsx)("h2",{className:"title",children:"Join in to Chat!"}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Name"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"Enter name",onChange:function(e){return s(e.target.value)},required:!0})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"exampleFormControlInput2",className:"form-label",children:"Room"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"exampleFormControlInput2",placeholder:"Enter room",onChange:function(e){return m(e.target.value)},required:!0})]}),Object(j.jsx)(o.b,{to:"/chat?name=".concat(n,"&room=").concat(i),children:Object(j.jsx)("button",{type:"button",className:"button-join",children:"Join In"})})]})]})})},b=n(68),u=n(65),d=n.n(u),h=n(66),O=n.n(h),x=function(e){var t=e.message,n=e.setMessage,s=e.room,c=e.socket,a=function(e){e.preventDefault(),""!==t&&c.emit("createMessage",{room:s,message:t},(function(){return n("")}))};return Object(j.jsxs)("div",{className:"text-box",children:[Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Type a message",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?a(e):null},required:!0}),Object(j.jsx)("button",{type:"button",className:"btn btn-primary",onClick:a,children:"Send"})]})},p=function(e){var t=e.room,n=e.name,s=e.users,c=e.socket;return Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{className:"nav",children:[Object(j.jsx)("li",{className:"nav-item ",children:Object(j.jsxs)("h5",{children:["\ud83d\udfe2Room: ",t]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)("h5",{children:["\ud83d\ude4e\ud83c\udffc\u200d\u2642\ufe0f ",n]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)("h5",{children:["current  ",s.length," in room"]})}),Object(j.jsxs)("li",{className:"nav-item dropdown",children:[Object(j.jsx)("button",{className:"btn btn-light btn-sm dropdown-toggle mb-2","data-bs-toggle":"dropdown",href:"#","aria-expanded":"false",children:"\ud83d\udc40 See who's in the room"}),Object(j.jsx)("ul",{className:"dropdown-menu",children:s.map((function(e){return Object(j.jsx)("li",{className:"dropdown-item",children:e.name},e.id)}))})]}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsxs)("button",{onClick:function(){c.disconnect()},type:"button",className:"btn btn-light btn-sm",children:["Leave chat room",Object(j.jsx)("i",{className:"fas fa-sign-out-alt"})]})})})]})})},f=n(67),g=n.n(f),v=function(e){var t=e.message,n=e.right;return Object(j.jsx)("div",{className:"messageInnerboard",children:n?Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"messagebox",children:[Object(j.jsxs)("span",{children:[t.user,": "]}),t.msg]})}):Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"messagebox",children:[Object(j.jsxs)("span",{children:[t.user,": "]}),t.msg]})})})},N=n(137),C=function(e){var t=e.messages,n=e.name;return Object(j.jsx)(g.a,{className:"messageboard",children:t.map((function(e){return e.user!==n?Object(j.jsx)(v,{message:e},Object(N.a)()):Object(j.jsx)(v,{message:e,right:"right"},Object(N.a)())}))})},y=function(e){var t=e.location,n=e.history,a=Object(c.useState)(""),r=Object(l.a)(a,2),o=r[0],i=r[1],m=Object(c.useState)(""),u=Object(l.a)(m,2),h=u[0],f=u[1],g=Object(c.useState)(""),v=Object(l.a)(g,2),N=v[0],y=v[1],k=Object(c.useState)([]),I=Object(l.a)(k,2),w=I[0],S=I[1],E=Object(c.useState)([]),F=Object(l.a)(E,2),J=F[0],R=F[1],q="https://chat-app-demo0.herokuapp.com";return Object(c.useEffect)((function(){var e=d.a.parse(t.search),c=e.name,a=e.room;i(c),f(a);return(s=O()(q,{"force new connection":!0,reconnectionAttempts:"Infinity",timeout:1e4,transports:["websocket"]})).emit("joinRoom",{name:c,room:a},(function(e){n.push("/"),alert(e)})),s.on("message",(function(e){S((function(t){return[].concat(Object(b.a)(t),[e])}))})),function(){s.off()}}),[q,t.search,n]),Object(c.useEffect)((function(){s.on("UsersInRoom",(function(e){return R(e)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"chatOuterContainer",children:Object(j.jsxs)("div",{className:"chatInnerContainer",children:[Object(j.jsx)(p,{room:h,users:J,name:o,socket:s}),Object(j.jsx)(C,{messages:w,name:o}),Object(j.jsx)(x,{message:N,setMessage:y,room:h,socket:s})]})})})},k=function(){return Object(j.jsxs)(o.a,{children:[Object(j.jsx)(i.a,{path:"/",exact:!0,component:m}),Object(j.jsx)(i.a,{path:"/chat",component:y})]})};r.a.render(Object(j.jsx)(k,{}),document.getElementById("root"))},73:function(e,t,n){},74:function(e,t,n){}},[[135,1,2]]]);
//# sourceMappingURL=main.4c239741.chunk.js.map