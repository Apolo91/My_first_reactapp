(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__y8tne",dialogsItems:"Dialogs_dialogsItems__2boNC",messagesItems:"Dialogs_messagesItems__14XTq",dialog:"Dialogs_dialog__2ALfl",message:"Dialogs_message__JO2PK"}},,,,,,,,,,,function(e,t,a){e.exports={post:"Post_post__28iDt",like:"Post_like__2akoI"}},function(e,t,a){e.exports={ava:"ProfileInfo_ava__398L5",profile:"ProfileInfo_profile__1PiDD"}},,,,function(e,t,a){e.exports={header:"header_header__1d4qC"}},function(e,t,a){e.exports={nav:"Navbar_nav__3Bmxc"}},,function(e,t,a){e.exports={wrapper_post:"MyPosts_wrapper_post__2uP0d"}},function(e,t,a){e.exports={music:"Music_music__3O5SO"}},function(e,t,a){e.exports={news:"News_news__3BMLP"}},function(e,t,a){e.exports={settings:"Settings_settings__3oUvI"}},function(e,t,a){e.exports={userphoto:"Users_userphoto__1rDJj"}},function(e,t,a){e.exports=a(47)},,,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(14),s=a(13),r=a(6),o={PostData:[{id:1,message:"Hi,how are you?",like:15},{id:2,message:"It's my first post",like:33},{id:3,message:"It's my first post",like:49},{id:4,message:"It's my first post",like:1}],newPostText:"Hi!"},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5,message:e.newPostText,like:0};return Object(r.a)({},e,{PostData:[].concat(Object(s.a)(e.PostData),[a]),newPostText:""});case"UPDATE-NEW-POST-TEXT":return Object(r.a)({},e,{newPostText:t.newText});default:return e}},i={DialogsData:[{id:1,name:"Andrey"},{id:2,name:"Victor"},{id:3,name:"Olga"},{id:4,name:"Anna"},{id:5,name:"Egor"},{id:6,name:"Egor"}],MessageData:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"It's fine"}],newMessageText:""},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-TEXT":return Object(r.a)({},e,{newMessageText:t.newMessage});case"SEND_MESSAGE":var a=e.newMessageText;return Object(r.a)({},e,{newMessageText:"",MessageData:[].concat(Object(s.a)(e.MessageData),[{id:7,message:a}])});default:return e}},u={Friends:[{id:1,name:"Andrey"},{id:2,name:"Anna"},{id:3,name:"Viktor"}]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return e},d={users:[{id:1,photoURL:"https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg",followed:!0,fullName:"Dmitriy",status:"Hi my friend's",location:{city:"Minsk",country:"Belarus"}},{id:2,photoURL:"https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg",followed:!1,fullName:"Andrey",status:"Hello world",location:{city:"Krasnodar",country:"Russia"}},{id:3,photoURL:"https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg",followed:!0,fullName:"Konstantin",status:"I'm to working",location:{city:"Moskow",country:"Russia"}},{id:4,photoURL:"https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg",followed:!1,fullName:"Il'ya",status:"Hello world",location:{city:"Krasnodar",country:"Russia"}}]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(r.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(r.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(r.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(r.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(r.a)({},e,{users:[].concat(Object(s.a)(e.users),Object(s.a)(t.users))});default:return e}},g=Object(n.b)({ProfilePage:l,DialogsPage:c,NavbarPage:m,UsersPage:p}),f=Object(n.c)(g),E=a(0),w=a.n(E),v=a(16),h=a.n(v),_=(a(41),a(42),a(27)),y=a.n(_),b=function(e){return w.a.createElement("header",{className:y.a.header},w.a.createElement("img",{src:"https://st2.depositphotos.com/5904380/12124/v/950/depositphotos_121244762-stock-illustration-logo-industry-factory.jpg",alt:""}),"Welcome")},P=a(28),N=a.n(P),k=a(3),D=function(e){return w.a.createElement("nav",{className:N.a.nav},w.a.createElement("ul",null,w.a.createElement("li",null,w.a.createElement(k.b,{to:"/Profile"},"Profile")),w.a.createElement("li",null,w.a.createElement(k.b,{to:"/Dialogs"},"Messages")),w.a.createElement("li",null,w.a.createElement(k.b,{to:"/News"},"News")),w.a.createElement("li",null,w.a.createElement(k.b,{to:"/Music"},"Music")),w.a.createElement("li",null,w.a.createElement(k.b,{to:"/Settings"},"Settings")),w.a.createElement("li",null,w.a.createElement(k.b,{to:"/Users"},"Users"))))},T=a(30),O=a.n(T),x=a(22),M=a.n(x),j=function(e){return w.a.createElement("div",{className:M.a.post},w.a.createElement("img",{src:"https://toptos.com.ua/content/images/5/populyarnyy-popsoket-pop-socket-dlya-parnya-dart-veyder-56860954500598_small11.jpg",alt:""}),w.a.createElement("div",null,e.message),w.a.createElement("div",{className:M.a.like},w.a.createElement("span",null,"like: "),e.like))},S=function(e){var t=e.post.map((function(e){return w.a.createElement(j,{message:e.message,like:e.like})})),a=w.a.createRef();return w.a.createElement("div",{className:O.a.wrapper_post},w.a.createElement("h3",null,"My posts"),w.a.createElement("div",null,w.a.createElement("textarea",{onChange:function(){var t=a.current.value;e.updateNewPostText(t)},ref:a,cols:"60",rows:"6",value:e.newPostText}),w.a.createElement("div",null,w.a.createElement("button",{onClick:function(){e.AddPost()}},"Add post"))),t)},U=a(10),I=Object(U.b)((function(e){return{post:e.ProfilePage.PostData,newPostText:e.ProfilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){e(function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(t))},AddPost:function(){e({type:"ADD-POST"})}}}))(S),A=a(23),L=a.n(A),R=function(e){return w.a.createElement("div",{className:L.a.profile},w.a.createElement("img",{src:"https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1438&q=80",alt:""}),w.a.createElement("div",{className:L.a.ava},"ava + description"))},W=function(e){return w.a.createElement("div",null,w.a.createElement(R,null),w.a.createElement(I,null))},H=a(31),C=a.n(H),B=function(e){return w.a.createElement("div",{className:C.a.music},"Music")},F=a(32),K=a.n(F),X=function(e){return w.a.createElement("div",{className:K.a.news},"News")},J=a(33),G=a.n(J),q=function(e){return w.a.createElement("div",{className:G.a.settings},"Settings")},V=a(12),Q=a(11),$=a.n(Q),z=function(e){var t="/Dialogs/"+e.id;return w.a.createElement("div",{className:$.a.dialog},w.a.createElement(k.b,{to:t},e.name))},Y=function(e){return w.a.createElement("div",{className:$.a.message},e.message)},Z=function(e){var t=e.DialogsPage,a=t.DialogsData.map((function(e){return w.a.createElement(z,{name:e.name,id:e.id})})),n=t.MessageData.map((function(e){return w.a.createElement(Y,{message:e.message})})),s=t.newMessageText;return w.a.createElement("div",{className:$.a.dialogs},w.a.createElement("div",{className:$.a.dialogsItems},a),w.a.createElement("div",{className:$.a.messagesItems},w.a.createElement("textarea",{placeholder:"Enter the message",value:s,onChange:function(t){var a=t.target.value;e.updateNewMessageText(a)}}),w.a.createElement("button",{onClick:function(){e.sendMessage()}},"Add message"),n))},ee=Object(U.b)((function(e){return{DialogsPage:e.DialogsPage}}),(function(e){return{sendMessage:function(){e({type:"SEND_MESSAGE"})},updateNewMessageText:function(t){e(function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",newMessage:e}}(t))}}}))(Z),te=a(34),ae=a.n(te),ne=function(e){return 0===e.users.length&&e.SetUsers([{id:1,photoURL:"https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg",followed:!0,fullName:"Dmitriy",status:"Hi my friend's",location:{city:"Minsk",country:"Belarus"}},{id:2,photoURL:"https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg",followed:!1,fullName:"Andrey",status:"Hello world",location:{city:"Krasnodar",country:"Russia"}},{id:3,photoURL:"https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg",followed:!0,fullName:"Konstantin",status:"I'm to working",location:{city:"Moskow",country:"Russia"}},{id:4,photoURL:"https://cs8.pikabu.ru/post_img/2017/01/24/8/1485265069188571085.jpg",followed:!1,fullName:"Il'ya",status:"Hello world",location:{city:"Krasnodar",country:"Russia"}}]),w.a.createElement("div",null,e.users.map((function(t){return w.a.createElement("div",{key:t.id},w.a.createElement("span",null,w.a.createElement("div",null,w.a.createElement("img",{src:t.photoURL,className:ae.a.userphoto})),w.a.createElement("div",null,t.followed?w.a.createElement("button",{onClick:function(){e.unfollow(t.id)}}," UnFollow"):w.a.createElement("button",{onClick:function(){e.follow(t.id)}}," Follow"))),w.a.createElement("span",null,w.a.createElement("span",null,w.a.createElement("div",null," ",t.fullName," ")," ",w.a.createElement("div",null,t.status)),w.a.createElement("span",null,w.a.createElement("div",null,t.location.country),w.a.createElement("div",null,t.location.city))))})))},se=Object(U.b)((function(e){return{users:e.UsersPage.users}}),(function(e){return{follow:function(t){e(function(e){return{type:"FOLLOW",userId:e}}(t))},unfollow:function(t){e(function(e){return{type:"UNFOLLOW",userId:e}}(t))},setUsers:function(t){e(function(e){return{type:"SET_USERS",users:e}}(t))}}}))(ne),re=function(e){return w.a.createElement(k.a,null,w.a.createElement("div",{className:"app-wrapper"},w.a.createElement(b,null),w.a.createElement(D,null),w.a.createElement("div",{className:"app-wrapper-content"},w.a.createElement(V.a,{path:"/Profile",render:function(){return w.a.createElement(W,null)}}),w.a.createElement(V.a,{path:"/Dialogs",render:function(){return w.a.createElement(ee,null)}}),w.a.createElement(V.a,{path:"/Music",render:function(){return w.a.createElement(B,null)}}),w.a.createElement(V.a,{path:"/News",render:function(){return w.a.createElement(X,null)}}),w.a.createElement(V.a,{path:"/Users",render:function(){return w.a.createElement(se,null)}}),w.a.createElement(V.a,{path:"/Settings",render:function(){return w.a.createElement(q,null)}}))))};h.a.render(w.a.createElement(k.a,null,w.a.createElement(U.a,{store:f},w.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[35,1,2]]]);
//# sourceMappingURL=main.eca830a4.chunk.js.map