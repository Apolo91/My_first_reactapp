(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__y8tne",dialogsItems:"Dialogs_dialogsItems__2boNC",messagesItems:"Dialogs_messagesItems__14XTq",dialog:"Dialogs_dialog__2ALfl",message:"Dialogs_message__JO2PK"}},,,,,function(e,t,a){e.exports={friends:"Friends_friends__1aS5W",friends_wrap:"Friends_friends_wrap__aCFxO"}},,,function(e,t,a){e.exports={post:"Post_post__28iDt",like:"Post_like__2akoI"}},function(e,t,a){e.exports={ava:"ProfileInfo_ava__398L5",profile:"ProfileInfo_profile__1PiDD"}},,,,function(e,t,a){e.exports={header:"header_header__1d4qC"}},function(e,t,a){e.exports={nav:"Navbar_nav__3Bmxc"}},function(e,t,a){e.exports={friend:"Friend_friend__3Dv2G"}},,,function(e,t,a){e.exports={wrapper_post:"MyPosts_wrapper_post__2uP0d"}},function(e,t,a){e.exports={music:"Music_music__3O5SO"}},function(e,t,a){e.exports={news:"News_news__3BMLP"}},function(e,t,a){e.exports={settings:"Settings_settings__3oUvI"}},function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=function(e,t){switch(t.type){case"ADD-POST":var a={id:5,message:e.newPostText,like:0};return e.PostData.push(a),e.newPostText="",e;case"UPDATE-NEW-POST-TEXT":return e.newPostText=t.newText,e;default:return e}},s=function(e,t){switch(t.type){case"UPDATE-NEW-MESSAGE-TEXT":return e.newMessageText=t.newMessage,e;case"SEND_MESSAGE":var a=e.newMessageText;return e.newMessageText="",e.MessageData.push({id:7,message:a}),e;default:return e}},r=function(e,t){return e},i={_state:{NavbarPage:{Friends:[{id:1,name:"Andrey"},{id:2,name:"Anna"},{id:3,name:"Viktor"}]},ProfilePage:{PostData:[{id:1,message:"Hi,how are you?",like:15},{id:2,message:"It's my first post",like:33},{id:3,message:"It's my first post",like:49},{id:4,message:"It's my first post",like:1}],newPostText:"it-kamasutra.com"},DialogsPage:{DialogsData:[{id:1,name:"Andrey"},{id:2,name:"Victor"},{id:3,name:"Olga"},{id:4,name:"Anna"},{id:5,name:"Egor"},{id:6,name:"Egor"}],MessageData:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"It's fine"},{id:4,message:"Yo!"},{id:5,message:"Yo!"},{id:6,message:"Yo!"}],newMessageText:""}},getState:function(){return this._state},_callSubscriber:function(){console.log("state changed")},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){this._state.ProfilePage=n(this._state.ProfilePage,e),this._state.DialogsPage=s(this._state.DialogsPage,e),this._state.NavbarPage=r(this._state.NavbarPage,e),this._callSubscriber(this._state)}},o=i;window.store=i;var l=a(0),c=a.n(l),m=a(18),u=a.n(m),d=(a(33),a(34),a(19)),g=a.n(d),p=function(e){return c.a.createElement("header",{className:g.a.header},c.a.createElement("img",{src:"https://st2.depositphotos.com/5904380/12124/v/950/depositphotos_121244762-stock-illustration-logo-industry-factory.jpg",alt:""}),"Welcome")},f=a(20),E=a.n(f),_=a(3),h=a(11),v=a.n(h),P=a(21),w=a.n(P),N=function(e){return c.a.createElement("div",{className:w.a.friend},e.name)},D=function(e){var t=e.state.map((function(e){return c.a.createElement(N,{name:e.name})}));return c.a.createElement("div",{className:v.a.friends},"Friends",c.a.createElement("div",{className:v.a.friends_wrap},t))},x=function(e){return c.a.createElement("nav",{className:E.a.nav},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(_.b,{to:"/Profile"},"Profile")),c.a.createElement("li",null,c.a.createElement(_.b,{to:"/Dialogs"},"Messages")),c.a.createElement("li",null,c.a.createElement(_.b,{to:"/News"},"News")),c.a.createElement("li",null,c.a.createElement(_.b,{to:"/Music"},"Music")),c.a.createElement("li",null,c.a.createElement(_.b,{to:"/Settings"},"Settings"))),c.a.createElement(D,{state:e.state.Friends}))},T=a(24),b=a.n(T),y=a(14),S=a.n(y),k=function(e){return c.a.createElement("div",{className:S.a.post},c.a.createElement("img",{src:"https://toptos.com.ua/content/images/5/populyarnyy-popsoket-pop-socket-dlya-parnya-dart-veyder-56860954500598_small11.jpg",alt:""}),c.a.createElement("div",null,e.message),c.a.createElement("div",{className:S.a.like},c.a.createElement("span",null,"like: "),e.like))},M=function(e){var t=e.post.map((function(e){return c.a.createElement(k,{message:e.message,like:e.like})})),a=c.a.createRef();return c.a.createElement("div",{className:b.a.wrapper_post},c.a.createElement("h3",null,"My posts"),c.a.createElement("div",null,c.a.createElement("textarea",{onChange:function(){var t=a.current.value;e.dispatch(function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(t))},ref:a,cols:"60",rows:"6",value:e.newPostText}),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){e.dispatch({type:"ADD-POST"})}},"Add post"))),t)},A=a(15),I=a.n(A),O=function(e){return c.a.createElement("div",{className:I.a.profile},c.a.createElement("img",{src:"https://images.unsplash.com/photo-1520531158340-44015069e78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1438&q=80",alt:""}),c.a.createElement("div",{className:I.a.ava},"ava + description"))},W=function(e){return c.a.createElement("div",null,c.a.createElement(O,null),c.a.createElement(M,{post:e.ProfilePage.PostData,newPostText:e.ProfilePage.newPostText,dispatch:e.dispatch}))},C=a(6),F=a.n(C),X=function(e){var t="/Dialogs/"+e.id;return c.a.createElement("div",{className:F.a.dialog},c.a.createElement(_.b,{to:t},e.name))},B=function(e){return c.a.createElement("div",{className:F.a.message},e.message)},G=function(e){var t=e.store.getState().DialogsPage,a=t.DialogsData.map((function(e){return c.a.createElement(X,{name:e.name,id:e.id})})),n=t.MessageData.map((function(e){return c.a.createElement(B,{message:e.message})})),s=t.newMessageText;return c.a.createElement("div",{className:F.a.dialogs},c.a.createElement("div",{className:F.a.dialogsItems},a),c.a.createElement("div",{className:F.a.messagesItems},c.a.createElement("textarea",{placeholder:"Enter the message",value:s,onChange:function(t){var a=t.target.value;e.store.dispatch(function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",newMessage:e}}(a))}}),c.a.createElement("button",{onClick:function(){e.store.dispatch({type:"SEND_MESSAGE"})}},"Add message"),n))},U=a(25),H=a.n(U),J=function(e){return c.a.createElement("div",{className:H.a.music},"Music")},j=a(26),q=a.n(j),L=function(e){return c.a.createElement("div",{className:q.a.news},"News")},Y=a(27),V=a.n(Y),K=function(e){return c.a.createElement("div",{className:V.a.settings},"Settings")},Q=a(7),R=function(e){return c.a.createElement(_.a,null,c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(p,null),c.a.createElement(x,{state:e.state.NavbarPage}),c.a.createElement("div",{className:"app-wrapper-content"},c.a.createElement(Q.a,{path:"/Profile",render:function(){return c.a.createElement(W,{ProfilePage:e.state.ProfilePage,dispatch:e.dispatch})}}),c.a.createElement(Q.a,{path:"/Dialogs",render:function(){return c.a.createElement(G,{store:e.store})}}),c.a.createElement(Q.a,{path:"/Music",render:function(){return c.a.createElement(J,null)}}),c.a.createElement(Q.a,{path:"/News",render:function(){return c.a.createElement(L,null)}}),c.a.createElement(Q.a,{path:"/Settings",render:function(){return c.a.createElement(K,null)}}))))},$=function(e){u.a.render(c.a.createElement(_.a,null,c.a.createElement(R,{state:e,store:o,dispatch:o.dispatch.bind(o)})),document.getElementById("root"))};$(o.getState()),o.subscribe($),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[28,1,2]]]);
//# sourceMappingURL=main.47618daa.chunk.js.map