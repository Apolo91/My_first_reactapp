(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__y8tne",dialogsItems:"Dialogs_dialogsItems__2boNC",messagesItems:"Dialogs_messagesItems__14XTq",dialog:"Dialogs_dialog__2ALfl",message:"Dialogs_message__JO2PK"}},,,,,,,function(e,a,t){e.exports={post:"Post_post__28iDt",like:"Post_like__2akoI"}},function(e,a,t){e.exports={ava:"ProfileInfo_ava__3pvUW",profile:"ProfileInfo_profile__2vE9x"}},,,,function(e,a,t){e.exports={header:"header_header__1d4qC"}},function(e,a,t){e.exports={nav:"Navbar_nav__3Bmxc"}},,,function(e,a,t){e.exports={wrapper_post:"MyPosts_wrapper_post__2uP0d"}},function(e,a,t){e.exports={music:"Music_music__3O5SO"}},function(e,a,t){e.exports={news:"News_news__3BMLP"}},function(e,a,t){e.exports={settings:"Settings_settings__2uK68"}},function(e,a,t){e.exports=t(38)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(17),l=t.n(r),i=(t(31),t(32),t(18)),o=t.n(i),c=function(e){return s.a.createElement("header",{className:o.a.header},s.a.createElement("img",{src:"https://st2.depositphotos.com/5904380/12124/v/950/depositphotos_121244762-stock-illustration-logo-industry-factory.jpg",alt:""}),"Welcome")},m=t(19),u=t.n(m),d=t(4),p=function(e){return s.a.createElement("nav",{className:u.a.nav},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(d.b,{to:"/Profile"},"Profile")),s.a.createElement("li",null,s.a.createElement(d.b,{to:"/Dialogs"},"Messages")),s.a.createElement("li",null,s.a.createElement(d.b,{to:"/News"},"News")),s.a.createElement("li",null,s.a.createElement(d.b,{to:"/Music"},"Music")),s.a.createElement("li",null,s.a.createElement(d.b,{to:"/Settings"},"Settings"))))},g=t(22),E=t.n(g),f=t(13),_=t.n(f),v=function(e){return s.a.createElement("div",{className:_.a.post},s.a.createElement("img",{src:"https://toptos.com.ua/content/images/5/populyarnyy-popsoket-pop-socket-dlya-parnya-dart-veyder-56860954500598_small11.jpg",alt:""}),s.a.createElement("div",null,e.message),s.a.createElement("div",{className:_.a.like},s.a.createElement("span",null,"like: "),e.like))},h=function(e){var a=e.state.map((function(e){return s.a.createElement(v,{message:e.message,like:e.like})}));return s.a.createElement("div",{className:E.a.wrapper_post},s.a.createElement("h3",null,"My posts"),s.a.createElement("div",null,s.a.createElement("textarea",{name:"",id:"",cols:"60",rows:"6"}),s.a.createElement("div",null,s.a.createElement("button",null,"Add post"))),a)},w=t(14),N=t.n(w),y=function(e){return s.a.createElement("div",{className:N.a.profile},s.a.createElement("img",{src:"https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1438&q=80",alt:""}),s.a.createElement("div",{className:N.a.ava},"ava + description"))},k=function(e){return s.a.createElement("div",null,s.a.createElement(y,null),s.a.createElement(h,{state:e.state.PostData}))},D=t(6),P=t.n(D),x=function(e){var a="/Dialogs/"+e.id;return s.a.createElement("div",{className:P.a.dialog},s.a.createElement(d.b,{to:a},e.name))},I=function(e){return s.a.createElement("div",{className:P.a.message},e.message)},b=function(e){var a=e.state.DialogsData.map((function(e){return s.a.createElement(x,{name:e.name,id:e.id})})),t=e.state.MessageData.map((function(e){return s.a.createElement(I,{message:e.message})}));return s.a.createElement("div",{className:P.a.dialogs},s.a.createElement("div",{className:P.a.dialogsItems},a),s.a.createElement("div",{className:P.a.messagesItems},t))},M=t(23),S=t.n(M),B=function(e){return s.a.createElement("div",{className:S.a.music},"Music")},O=t(24),W=t.n(O),A=function(e){return s.a.createElement("div",{className:W.a.news},"News")},H=t(25),J=t.n(H),j=function(e){return s.a.createElement("div",{className:J.a.settings},"Settings")},q=t(7),Y=function(e){return s.a.createElement(d.a,null,s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(c,null),s.a.createElement(p,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(q.a,{path:"/Profile",render:function(){return s.a.createElement(k,{state:e.state.ProfilePage})}}),s.a.createElement(q.a,{path:"/Dialogs",render:function(){return s.a.createElement(b,{state:e.state.DialogsPage})}}),s.a.createElement(q.a,{path:"/Music",render:function(){return s.a.createElement(B,null)}}),s.a.createElement(q.a,{path:"/News",render:function(){return s.a.createElement(A,null)}}),s.a.createElement(q.a,{path:"/Settings",render:function(){return s.a.createElement(j,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C={ProfilePage:{PostData:[{id:1,message:"Hi,how are you?",like:15},{id:2,message:"It's my first post",like:35},{id:3,message:"It's my first post",like:35},{id:4,message:"It's my first post",like:35}]},DialogsPage:{DialogsData:[{id:1,name:"Andrey"},{id:2,name:"Victor"},{id:3,name:"Olga"},{id:4,name:"Anna"},{id:5,name:"Egor"},{id:6,name:"Egor"}],MessageData:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"It's fine"},{id:4,message:"Yo!"},{id:5,message:"Yo!"},{id:6,message:"Yo!"}]}};l.a.render(s.a.createElement(Y,{state:C}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[26,1,2]]]);
//# sourceMappingURL=main.cd774068.chunk.js.map