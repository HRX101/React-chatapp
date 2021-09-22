(this.webpackJsonpvideo=this.webpackJsonpvideo||[]).push([[0],{323:function(e,t,a){},324:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(22),n=a.n(c),r=a(40),l=a(28),i=a(9),o=a(326),u=a(327),d=a(3),j=function(e){var t=Object(s.useState)(""),a=Object(i.a)(t,2),c=a[0],n=a[1],r=e.chatId,j=e.creds,m=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(l.t)(j,r,{text:t}),n("")};return Object(d.jsxs)("form",{className:"message-form",onSubmit:m,children:[Object(d.jsx)("input",{className:"message-input",placeholder:"send a message ...",value:c,onChange:function(t){n(t.target.value),Object(l.p)(e,r)},onSubmit:m}),Object(d.jsx)("label",{htmlFor:"upload-button",children:Object(d.jsx)("span",{className:"image-button",children:Object(d.jsx)(o.a,{className:"picture-icon"})})}),Object(d.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(l.t)(j,r,{files:e.target.files,text:""})}}),Object(d.jsx)("button",{type:"submit",className:"send-button",children:Object(d.jsx)(u.a,{className:"send-icon"})})]})},m=function(e){var t,a=e.message;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(d.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(d.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"black",backgroundColor:"white"},children:a.text})},b=function(e){var t,a,s=e.lastMessage,c=e.message,n=!s||s.sender.username!==c.sender.username;return Object(d.jsxs)("div",{className:"message-row",children:[n&&Object(d.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===c||void 0===c||null===(t=c.sender)||void 0===t?void 0:t.avatar,")")}}),(null===c||void 0===c||null===(a=c.attachments)||void 0===a?void 0:a.length)>0?Object(d.jsx)("img",{src:c.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:n?"4px":"48px"}}):Object(d.jsx)("div",{className:"message",style:{float:"left",color:"white",backgroundColor:"#228B22",marginLeft:n?"4px":"48px"},children:c.text})]})},h=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a],l=function(e,t){return n.people.map((function(a,s){var c;return a.last_read===e.id&&Object(d.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===a||void 0===a||null===(c=a.person)||void 0===c?void 0:c.avatar,")")}},"read_".concat(s))}))},i=function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],r=0===a?null:e[a-1],i=s===n.sender.userName;return Object(d.jsxs)("div",{style:{width:"100%"},children:[Object(d.jsx)("div",{className:"message-block",children:i?Object(d.jsx)(m,{message:n}):Object(d.jsx)(b,{message:n,lastMessage:n[r]})}),Object(d.jsx)("div",{className:"read-receipts",style:{marginRight:i?"18px":"0px",marginLeft:i?"0px":"68px"},children:l(n,i)})]},"msg_".concat(a))}))};return i(),n?Object(d.jsxs)("div",{className:"chat-feed",children:[Object(d.jsxs)("div",{className:"chat-title-container",children:[Object(d.jsx)("div",{className:"chat-title",children:n.title}),Object(d.jsx)("div",{className:"chat-sibtitle",children:n.people.map((function(e){return" ".concat(e.person.userName)}))})]}),i(),Object(d.jsx)("div",{style:{height:"100px"}}),Object(d.jsx)("div",{className:"message-form-container",children:Object(d.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]}):"loading.... messages"},g=(a(323),a(16)),p=a.n(g),v=a(23),x=a(5),O=a.n(x),f=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],u=Object(s.useState)(""),j=Object(i.a)(u,2),m=j[0],b=j[1],h=function(){var e=Object(v.a)(p.a.mark((function e(t){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"151b60bc-ce6d-423b-8736-8f8df383310f","User-Name":a,"User-Secret":l},e.prev=2,e.next=5,O.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",l),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),b("wrong credentials...");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("h1",{className:"title",children:"ChatApp"}),Object(d.jsxs)("form",{onSubmit:h,children:[Object(d.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(d.jsx)("input",{type:"password",value:l,onChange:function(e){return o(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(d.jsxs)("div",{align:"center",children:[Object(d.jsx)("button",{type:"submit",className:"button",children:Object(d.jsx)("span",{children:"start chatting...."})}),Object(d.jsx)("h2",{className:"error",children:m})]})]})]})})},N=function(){return localStorage.getItem("username")?Object(d.jsx)(l.d,{height:"100vh",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),projectID:"151b60bc-ce6d-423b-8736-8f8df383310f",renderChatFeed:function(e){return Object(d.jsx)(h,Object(r.a)({},e))}}):Object(d.jsx)(f,{})};n.a.render(Object(d.jsx)(N,{}),document.getElementById("root"))}},[[324,1,2]]]);
//# sourceMappingURL=main.a473c20f.chunk.js.map