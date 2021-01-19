(this.webpackJsonpmessageboard=this.webpackJsonpmessageboard||[]).push([[0],{44:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(2),s=a(14),r=a.n(s),c=a(10),i=(a(52),a(4)),l=a.n(i),d=a(11),u=a(6),j=a(1),p=a(3);a(54);var b=e=>Object(n.jsxs)(o.Fragment,{children:[Object(n.jsx)("header",{className:"main-header",children:e.header}),e.mobileNav,Object(n.jsx)("main",{className:"content",children:e.children})]});a(55);var O=e=>r.a.createPortal(Object(n.jsx)("div",{className:["backdrop",e.open?"open":""].join(" "),onClick:e.onClick}),document.getElementById("backdrop-root"));a(56);var h=e=>Object(n.jsx)("div",{className:"toolbar",children:e.children});a(57);var m=e=>Object(n.jsxs)("button",{className:"mobile-toggle",onClick:e.onOpen,children:[Object(n.jsx)("span",{className:"mobile-toggle__bar"}),Object(n.jsx)("span",{className:"mobile-toggle__bar"}),Object(n.jsx)("span",{className:"mobile-toggle__bar"})]});a(58);var g=e=>Object(n.jsx)("h1",{className:"logo",children:"MessageBoard"});a(59);const v=[{id:"feed",text:"Feed",link:"/",auth:!0},{id:"login",text:"Login",link:"/",auth:!1},{id:"signup",text:"Signup",link:"/signup",auth:!1}];var x=e=>[...v.filter((t=>t.auth===e.isAuth)).map((t=>Object(n.jsx)("li",{className:["navigation-item",e.mobile?"mobile":""].join(" "),children:Object(n.jsx)(c.c,{to:t.link,exact:!0,onClick:e.onChoose,children:t.text})},t.id))),e.isAuth&&Object(n.jsx)("li",{className:["navigation-item",e.mobile?"mobile":""].join(" "),children:Object(n.jsx)("button",{onClick:e.onLogout,children:"Logout"})},"logout")];a(64);var f=e=>Object(n.jsxs)("nav",{className:"main-nav",children:[Object(n.jsx)(m,{onOpen:e.onOpenMobileNav}),Object(n.jsx)("div",{className:"main-nav__logo",children:Object(n.jsx)(c.c,{to:"/",children:Object(n.jsx)(g,{})})}),Object(n.jsx)("div",{className:"spacer"}),Object(n.jsx)("ul",{className:"main-nav__items",children:Object(n.jsx)(x,{isAuth:e.isAuth,onLogout:e.onLogout})})]});a(65);var E=e=>Object(n.jsx)("nav",{className:["mobile-nav",e.open?"open":""].join(" "),children:Object(n.jsx)("ul",{className:["mobile-nav__items",e.mobile?"mobile":""].join(" "),children:Object(n.jsx)(x,{mobile:!0,onChoose:e.onChooseItem,isAuth:e.isAuth,onLogout:e.onLogout})})});a(66);var _=e=>e.link?Object(n.jsx)(c.b,{className:["button","button--".concat(e.design),"button--".concat(e.mode)].join(" "),to:e.link,children:e.children}):Object(n.jsx)("button",{className:["button","button--".concat(e.design),"button--".concat(e.mode)].join(" "),onClick:e.onClick,disabled:e.disabled||e.loading,type:e.type,children:e.loading?"Loading...":e.children});a(67);var N=e=>r.a.createPortal(Object(n.jsxs)("div",{className:"modal",children:[Object(n.jsx)("header",{className:"modal__header",children:Object(n.jsx)("h1",{children:e.title})}),Object(n.jsx)("div",{className:"modal__content",children:e.children}),Object(n.jsxs)("div",{className:"modal__actions",children:[Object(n.jsx)(_,{design:"danger",mode:"flat",onClick:e.onCancelModal,children:"Cancel"}),Object(n.jsx)(_,{mode:"raised",onClick:e.onAcceptModal,disabled:!e.acceptEnabled,loading:e.isLoading,children:"Accept"})]})]}),document.getElementById("modal-root"));var I=e=>Object(n.jsxs)(o.Fragment,{children:[e.error&&Object(n.jsx)(O,{onClick:e.onHandle}),e.error&&Object(n.jsx)(N,{title:"An Error Occurred",onCancelModal:e.onHandle,onAcceptModal:e.onHandle,acceptEnabled:!0,children:Object(n.jsx)("p",{children:e.error.message})})]}),k=a(46),w=a.n(k);a(92);var S=e=>Object(n.jsxs)("article",{className:"post",children:[Object(n.jsxs)("header",{className:"post__header",children:[Object(n.jsxs)("h3",{className:"post__meta",children:["Posted by ",e.author," on ",e.date]}),Object(n.jsx)("h1",{className:"post__title",children:e.title})]}),Object(n.jsxs)("div",{className:"post__actions",children:[Object(n.jsx)(_,{mode:"flat",link:e.id,children:"View"}),Object(n.jsx)(_,{mode:"flat",onClick:e.onStartEdit,disabled:!e.isOwner,children:"Edit"}),Object(n.jsx)(_,{mode:"flat",design:"danger",onClick:e.onDelete,disabled:!e.isOwner,children:"Delete"})]})]}),y=a(15);a(44);var C=e=>Object(n.jsxs)("div",{className:"input",children:["input"===e.control&&Object(n.jsx)("input",{className:[e.valid?"valid":"invalid",e.touched?"touched":"untouched"].join(" "),type:e.type,id:e.id,required:e.required,value:e.value,placeholder:e.placeholder,onChange:t=>e.onChange(e.id,t.target.value,t.target.files),onBlur:e.onBlur}),e.label&&Object(n.jsx)("label",{htmlFor:e.id,children:e.label}),"textarea"===e.control&&Object(n.jsx)("textarea",{className:[e.valid?"valid":"invalid",e.touched?"touched":"untouched"].join(" "),id:e.id,rows:e.rows,required:e.required,value:e.value,onChange:t=>e.onChange(e.id,t.target.value),onBlur:e.onBlur})]});const T=e=>""!==e.trim(),L=e=>t=>{let a=!0;return e.min&&(a=a&&t.trim().length>=e.min),e.max&&(a=a&&t.trim().length<=e.max),a},A=e=>/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e);function P(e){const t=Object(o.useRef)();return Object(o.useEffect)((()=>{t.current=e})),t.current}const D=(e,t)=>{switch(t.type){case"POST_SELECTION":return Object(j.a)(Object(j.a)({},e),{},{postForm:t.postForm,formIsValid:!0});case"INPUT_CHANGE":return Object(j.a)(Object(j.a)({},e),{},{postForm:t.updatedForm,formIsValid:t.formValid});case"INPUT_ONBLUR":return Object(j.a)(Object(j.a)({},e),{},{postForm:Object(j.a)(Object(j.a)({},e.postForm),{},{[t.input.target.id]:Object(j.a)(Object(j.a)({},e.postForm[t.input.target.id]),{},{touched:!0})})});case"EDIT_CANCEL":case"EDIT_SUBMIT":return Object(j.a)(Object(j.a)({},e),{},{postForm:F,formIsValid:!1});default:return null}},F={title:{value:"",valid:!1,touched:!1,validators:[T,L({min:5})]},content:{value:"",valid:!1,touched:!1,validators:[T,L({min:5})]}};var R=e=>{const t=Object(o.useReducer)(D,{postForm:F,formIsValid:!1}),a=Object(u.a)(t,2),s=a[0],r=s.postForm,c=s.formIsValid,i=a[1],l=P(e),d=P({postForm:r,formIsValid:c});Object(o.useEffect)((()=>{if(e.editing&&l.editing!==e.editing&&l.selectedPost!==e.selectedPost){const t={title:Object(j.a)(Object(j.a)({},d.postForm.title),{},{value:e.selectedPost.title,valid:!0}),content:Object(j.a)(Object(j.a)({},d.postForm.content),{},{value:e.selectedPost.content,valid:!0})};i({type:"POST_SELECTION",postForm:t})}}),[e.editing,e.selectedPost]);const p=(e,t)=>{let a=!0;var n,o=Object(y.a)(r[e].validators);try{for(o.s();!(n=o.n()).done;){const e=n.value;a=a&&e(t)}}catch(l){o.e(l)}finally{o.f()}const s=Object(j.a)(Object(j.a)({},r),{},{[e]:Object(j.a)(Object(j.a)({},r[e]),{},{valid:a,value:t})});let c=!0;for(const r in s)c=c&&s[r].valid;i({type:"INPUT_CHANGE",updatedForm:s,formValid:c})},b=e=>{i({type:"INPUT_ONBLUR",input:e})},h=()=>{i({type:"EDIT_CANCEL"}),e.onCancelEdit()};return e.editing?Object(n.jsxs)(o.Fragment,{children:[Object(n.jsx)(O,{onClick:h}),Object(n.jsx)(N,{title:"New Post",acceptEnabled:c,onCancelModal:h,onAcceptModal:()=>{const t={title:r.title.value,content:r.content.value};e.onFinishEdit(t),i({type:"EDIT_SUBMIT"})},isLoading:e.loading,children:Object(n.jsxs)("form",{children:[Object(n.jsx)(C,{id:"title",label:"Title",control:"input",onChange:p,onBlur:b,valid:r.title.valid,touched:r.title.touched,value:r.title.value}),Object(n.jsx)(C,{id:"content",label:"Content",control:"textarea",rows:"5",onChange:p,onBlur:b,valid:r.content.valid,touched:r.content.touched,value:r.content.value})]})})]}):null};a(93);var U=e=>Object(n.jsxs)("div",{className:"paginator",children:[e.children,Object(n.jsxs)("div",{className:"paginator__controls",children:[e.currentPage>1&&Object(n.jsx)("button",{className:"paginator__control",onClick:e.onPrevious,children:"Previous"}),e.currentPage<e.lastPage&&Object(n.jsx)("button",{className:"paginator__control",onClick:e.onNext,children:"Next"})]})]});a(94);var B=e=>Object(n.jsxs)("div",{className:"loader",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]});a(95);const M=(e,t)=>{switch(t.type){case"POST_ADD":{const a=[...e.posts];return 1===e.postPage&&(e.posts.length>=2&&a.pop(),a.unshift(t.post)),Object(j.a)(Object(j.a)({},e),{},{posts:a,totalPosts:e.totalPosts+1})}case"POST_UPDATE":{const a=[...e.posts],n=a.findIndex((e=>e._id===t.post._id));return n>-1&&(a[n]=t.post),Object(j.a)(Object(j.a)({},e),{},{posts:a})}case"POSTS_DIRECTION":return t.page?Object(j.a)(Object(j.a)({},e),{},{postsLoading:!0,posts:[],postPage:t.page}):Object(j.a)(Object(j.a)({},e),{},{postsLoading:!0,posts:[]});case"POSTS_LOAD":return Object(j.a)(Object(j.a)({},e),{},{posts:t.resData.posts,totalPosts:t.resData.totalItems,postsLoading:!1});case"DELETE_START":return Object(j.a)(Object(j.a)({},e),{},{postsLoading:!0});case"DELETE_ERROR":return Object(j.a)(Object(j.a)({},e),{},{postsLoading:!1});default:return null}},H=(e,t)=>{switch(t.type){case"EDIT_NEW_POST":return Object(j.a)(Object(j.a)({},e),{},{isEditing:!0});case"EDIT_POST":{const a=Object(j.a)({},t.posts.find((e=>e._id===t.postId)));return Object(j.a)(Object(j.a)({},e),{},{isEditing:!0,editPost:a})}case"EDIT_CANCEL":return Object(j.a)(Object(j.a)({},e),{},{isEditing:!1,editPost:null});case"EDIT_LOADING":return Object(j.a)(Object(j.a)({},e),{},{editLoading:!0});case"EDIT_FINISH":return Object(j.a)(Object(j.a)({},e),{},{isEditing:!1,editPost:null,editLoading:!1});default:return null}};var G=e=>{const t=Object(o.useReducer)(M,{posts:[],totalPosts:0,postPage:1,postsLoading:!0}),a=Object(u.a)(t,2),s=a[0],r=a[1],c=Object(o.useReducer)(H,{isEditing:!1,editPost:null,editLoading:!1}),i=Object(u.a)(c,2),j=i[0],p=i[1],b=Object(o.useState)(""),O=Object(u.a)(b,2),h=O[0],m=O[1],g=Object(o.useState)(null),v=Object(u.a)(g,2),x=v[0],f=v[1];Object(o.useEffect)((()=>{Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jvfresco-messageboard.herokuapp.com/auth/status",{headers:{Authorization:"Bearer "+e.token}});case 3:if(200===(a=t.sent).status){t.next=6;break}throw new Error("Failed to fetch user status.");case 6:return t.next=8,a.json();case 8:n=t.sent,m(n.status),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),A(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))(),k();w()("https://jvfresco-messageboard.herokuapp.com").on("posts",(e=>{"create"===e.action?E(e.post):"update"===e.action?N(e.post):"delete"===e.action&&k()}))}),[]);const E=e=>{r({type:"POST_ADD",post:e})},N=e=>{r({type:"POST_UPDATE",post:e})},k=function(){var t=Object(d.a)(l.a.mark((function t(a){var n,o,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.postPage,a?("next"===a&&n++,"previous"===a&&n--,r({type:"POSTS_DIRECTION",page:n})):r({type:"POSTS_DIRECTION"}),t.prev=2,t.next=5,fetch("https://jvfresco-messageboard.herokuapp.com/feed/posts?page="+n,{headers:{Authorization:"Bearer "+e.token}});case 5:if(200===(o=t.sent).status){t.next=8;break}throw new Error("Failed to fetch posts.");case 8:return t.next=10,o.json();case 10:c=t.sent,r({type:"POSTS_LOAD",resData:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),A(t.t0);case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(d.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,fetch("https://jvfresco-messageboard.herokuapp.com/auth/status",{method:"PATCH",headers:{Authorization:"Bearer "+e.token,"Content-Type":"application/json"},body:JSON.stringify({status:h})});case 4:if(200===(n=t.sent).status||201===n.status){t.next=7;break}throw new Error("Can't update status!");case 7:return t.next=9,n.json();case 9:t.sent,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),A(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(d.a)(l.a.mark((function t(a){var n,o,s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p({type:"EDIT_LOADING"}),n="https://jvfresco-messageboard.herokuapp.com/feed/post",o="POST",j.editPost&&(n="https://jvfresco-messageboard.herokuapp.com/feed/post/"+j.editPost._id,o="PUT"),t.prev=4,t.next=7,fetch(n,{method:o,headers:{Authorization:"Bearer "+e.token,"Content-Type":"application/json"},body:JSON.stringify({title:a.title,content:a.content})});case 7:if(403!==(s=t.sent).status){t.next=12;break}throw new Error("Not authorized");case 12:if(200===s.status||201===s.status){t.next=14;break}throw new Error("Creating or editing a post failed!");case 14:return t.next=16,s.json();case 16:r=t.sent,{_id:r.post._id,title:r.post.title,content:r.post.content,creator:r.post.creator,createdAt:r.post.createdAt},p({type:"EDIT_FINISH"}),t.next=26;break;case 21:t.prev=21,t.t0=t.catch(4),console.log(t.t0),A(t.t0),p({type:"EDIT_FINISH"});case 26:case"end":return t.stop()}}),t,null,[[4,21]])})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=Object(d.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"DELETE_START"}),t.prev=1,t.next=4,fetch("https://jvfresco-messageboard.herokuapp.com/feed/post/"+a,{method:"DELETE",headers:{Authorization:"Bearer "+e.token}});case 4:if(403!==(n=t.sent).status){t.next=9;break}throw new Error("This post is not yours to delete");case 9:if(200===n.status||201===n.status){t.next=11;break}throw new Error("Deleting a post failed!");case 11:n.json(),k(),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(1),A(t.t0),console.log(t.t0),r({type:"DELETE_ERROR"});case 20:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}(),A=e=>{f(e)};return Object(n.jsxs)(o.Fragment,{children:[Object(n.jsx)(I,{error:x,onHandle:()=>{f(null)}}),Object(n.jsx)(R,{editing:j.isEditing,selectedPost:j.editPost,loading:j.editLoading,onCancelEdit:()=>{p({type:"EDIT_CANCEL"})},onFinishEdit:T}),Object(n.jsx)("section",{className:"feed__status",children:Object(n.jsxs)("form",{onSubmit:y,children:[Object(n.jsx)(C,{type:"text",placeholder:"Your status",control:"input",onChange:(e,t)=>{m(t)},value:h}),Object(n.jsx)(_,{mode:"flat",type:"submit",children:"Update"})]})}),Object(n.jsx)("section",{className:"feed__control",children:Object(n.jsx)(_,{mode:"raised",design:"accent",onClick:()=>{p({type:"EDIT_NEW_POST"})},children:"New Post"})}),Object(n.jsxs)("section",{className:"feed",children:[s.postsLoading&&Object(n.jsx)("div",{style:{textAlign:"center",marginTop:"2rem"},children:Object(n.jsx)(B,{})}),s.posts.length<=0&&!s.postsLoading?Object(n.jsx)("p",{style:{textAlign:"center"},children:"No posts found."}):null,!s.postsLoading&&Object(n.jsx)(U,{onPrevious:()=>k("previous"),onNext:()=>k("next"),lastPage:Math.ceil(s.totalPosts/2),currentPage:s.postPage,children:s.posts.map((t=>Object(n.jsx)(S,{id:t._id,author:t.creator.name,date:new Date(t.createdAt).toLocaleDateString("en-US"),title:t.title,content:t.content,isOwner:t.creator._id===e.userId,onStartEdit:()=>{return e=t._id,void p({type:"EDIT_POST",postId:e,posts:s.posts});var e},onDelete:()=>L(t._id)},t._id)))})]})]})};a(96);var V=e=>{const t=Object(o.useState)({title:"",author:"",date:"",content:""}),a=Object(u.a)(t,2),s=a[0],r=a[1];return Object(o.useEffect)((()=>{const t=e.match.params.postId;Object(d.a)(l.a.mark((function a(){var n,o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://jvfresco-messageboard.herokuapp.com/feed/post/"+t,{headers:{Authorization:"Bearer "+e.token}});case 3:if(200===(n=a.sent).status){a.next=6;break}throw new Error("Failed to fetch status");case 6:return a.next=8,n.json();case 8:o=a.sent,r({title:o.post.title,author:o.post.creator.name,date:new Date(o.post.createdAt).toLocaleDateString("en-US"),content:o.post.content}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),console.log(a.t0);case 15:case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()}),[]),Object(n.jsxs)("section",{className:"single-post",children:[Object(n.jsx)("h1",{children:s.title}),Object(n.jsxs)("h2",{children:["Created by ",s.author," on ",s.date]}),Object(n.jsx)("p",{children:s.content}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(c.c,{to:"/",children:Object(n.jsx)(_,{design:"flat",children:"Back"})})]})};a(97);var z=e=>Object(n.jsx)("section",{className:"auth-form",children:e.children});var Y=e=>{const t=Object(o.useState)({loginForm:{email:{value:"",valid:!1,touched:!1,validators:[T,A]},password:{value:"",valid:!1,touched:!1,validators:[T,L({min:5})]},formIsValid:!1}}),a=Object(u.a)(t,2),s=a[0],r=a[1],c=(e,t)=>{r((a=>{let n=!0;var o,s=Object(y.a)(a.loginForm[e].validators);try{for(s.s();!(o=s.n()).done;){const e=o.value;n=n&&e(t)}}catch(i){s.e(i)}finally{s.f()}const r=Object(j.a)(Object(j.a)({},a.loginForm),{},{[e]:Object(j.a)(Object(j.a)({},a.loginForm[e]),{},{valid:n,value:t})});let c=!0;for(const e in r)c=c&&r[e].valid;return{loginForm:r,formIsValid:c}}))},i=e=>{r((t=>({loginForm:Object(j.a)(Object(j.a)({},t.loginForm),{},{[e]:Object(j.a)(Object(j.a)({},t.loginForm[e]),{},{touched:!0})})})))};return Object(n.jsx)(z,{children:Object(n.jsxs)("form",{onSubmit:t=>e.onLogin(t,{email:s.loginForm.email.value,password:s.loginForm.password.value}),children:[Object(n.jsx)(C,{id:"email",label:"Your E-Mail",type:"email",control:"input",onChange:c,onBlur:i,value:s.loginForm.email.value,valid:s.loginForm.email.valid,touched:s.loginForm.email.touched,placeholder:"YOUR EMAIL"}),Object(n.jsx)(C,{id:"password",label:"Password",type:"password",control:"input",onChange:c,onBlur:i,value:s.loginForm.password.value,valid:s.loginForm.password.valid,touched:s.loginForm.password.touched,placeholder:"PASSWORD"}),Object(n.jsx)(_,{design:"raised",type:"submit",loading:e.loading,children:"Login"})]})})};var J=e=>{const t=Object(o.useState)({signupForm:{email:{value:"",valid:!1,touched:!1,validators:[T,A]},password:{value:"",valid:!1,touched:!1,validators:[T,L({min:5})]},name:{value:"",valid:!1,touched:!1,validators:[T]},formIsValid:!1}}),a=Object(u.a)(t,2),s=a[0],r=a[1],c=(e,t)=>{r((a=>{let n=!0;var o,s=Object(y.a)(a.signupForm[e].validators);try{for(s.s();!(o=s.n()).done;){const e=o.value;n=n&&e(t)}}catch(i){s.e(i)}finally{s.f()}const r=Object(j.a)(Object(j.a)({},a.signupForm),{},{[e]:Object(j.a)(Object(j.a)({},a.signupForm[e]),{},{valid:n,value:t})});let c=!0;for(const e in r)c=c&&r[e].valid;return{signupForm:r,formIsValid:c}}))},i=e=>{r((t=>({signupForm:Object(j.a)(Object(j.a)({},t.signupForm),{},{[e]:Object(j.a)(Object(j.a)({},t.signupForm[e]),{},{touched:!0})})})))};return Object(n.jsx)(z,{children:Object(n.jsxs)("form",{onSubmit:t=>e.onSignup(t,s),children:[Object(n.jsx)(C,{id:"email",label:"Your E-Mail",type:"email",control:"input",onChange:c,onBlur:i,value:s.signupForm.email.value,valid:s.signupForm.email.valid,touched:s.signupForm.email.touched,placeholder:"YOUR EMAIL"}),Object(n.jsx)(C,{id:"name",label:"Your Name",type:"text",control:"input",onChange:c,onBlur:i,value:s.signupForm.name.value,valid:s.signupForm.name.valid,touched:s.signupForm.name.touched,placeholder:"YOUR NAME"}),Object(n.jsx)(C,{id:"password",label:"Password",type:"password",control:"input",onChange:c,onBlur:i,value:s.signupForm.password.value,valid:s.signupForm.password.valid,touched:s.signupForm.password.touched,placeholder:"PASSWORD"}),Object(n.jsx)(_,{design:"raised",type:"submit",loading:e.loading,children:"Signup"})]})})};a(98);const q=(e,t)=>{switch(t.type){case"AUTH_USER":return Object(j.a)(Object(j.a)({},e),{},{isAuth:!0,token:t.token,userId:t.userId});case"MOBILE_NAV_HANDLE":return Object(j.a)(Object(j.a)({},e),{},{showMobileNav:t.isOpen,showBackdrop:t.isOpen});case"BACKDROP_CLOSE":return Object(j.a)(Object(j.a)({},e),{},{showMobileNav:!1,showBackdrop:!1,error:null});case"LOGOUT_HANDLER":return Object(j.a)(Object(j.a)({},e),{},{isAuth:!1,token:null});case"AUTH_LOADING":return Object(j.a)(Object(j.a)({},e),{},{authLoading:!0});case"LOGIN_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{isAuth:!0,token:t.token,authLoading:!1,userId:t.userId});case"LOGIN_ERROR":return Object(j.a)(Object(j.a)({},e),{},{isAuth:!1,authLoading:!1,error:t.err});case"SIGNUP_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{isAuth:!1,authLoading:!1});case"SIGNUP_ERROR":return Object(j.a)(Object(j.a)({},e),{},{isAuth:!1,authLoading:!1,error:t.err});case"ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:null});default:return null}};var W=Object(p.g)((e=>{const t=Object(o.useReducer)(q,{showBackdrop:!1,showMobileNav:!1,isAuth:!1,token:null,userId:null,authLoading:!1,error:null}),a=Object(u.a)(t,2),s=a[0],r=a[1];Object(o.useEffect)((()=>{const e=localStorage.getItem("token"),t=localStorage.getItem("expiryDate");if(!e||!t)return;if(new Date(t)<=new Date)return void i();const a=localStorage.getItem("userId"),n=new Date(t).getTime()-(new Date).getTime();r({type:"AUTH_USER",token:e,userId:a}),v(n)}),[]);const c=e=>{r({type:"MOBILE_NAV_HANDLE",isOpen:e})},i=()=>{r({type:"LOGOUT_HANDLER"}),localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId")},m=function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n,o,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r({type:"AUTH_LOADING"}),e.prev=2,e.next=5,fetch("https://jvfresco-messageboard.herokuapp.com/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.email,password:a.password})});case 5:if(422!==(n=e.sent).status){e.next=8;break}throw new Error("Validation failed.");case 8:if(200===n.status||201===n.status){e.next=11;break}throw console.log("Error!"),new Error("Could not authenticate you!");case 11:return e.next=13,n.json();case 13:o=e.sent,r({type:"LOGIN_SUCCESS",token:o.token,userId:o.userId}),localStorage.setItem("token",o.token),localStorage.setItem("userId",o.userId),s=36e5,c=new Date((new Date).getTime()+s),localStorage.setItem("expiryDate",c.toISOString()),v(s),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(2),console.log(e.t0),r({type:"LOGIN_ERROR",err:e.t0});case 27:case"end":return e.stop()}}),e,null,[[2,23]])})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){var t=Object(d.a)(l.a.mark((function t(a,n){var o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),r({type:"AUTH_LOADING"}),t.prev=2,t.next=5,fetch("https://jvfresco-messageboard.herokuapp.com/auth/signup",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.signupForm.email.value,password:n.signupForm.password.value,name:n.signupForm.name.value})});case 5:if(422!==(o=t.sent).status){t.next=8;break}throw new Error("Validation failed. Make sure the email address isn't used yet!");case 8:if(200===o.status||201===o.status){t.next=11;break}throw console.log("Error!"),new Error("Creating a user failed!");case 11:return t.next=13,o.json();case 13:t.sent,r({type:"SIGNUP_SUCCESS"}),e.history.replace("/"),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(2),console.log(t.t0),r({type:"SIGNUP_ERROR",err:t.t0});case 22:case"end":return t.stop()}}),t,null,[[2,18]])})));return function(e,a){return t.apply(this,arguments)}}(),v=e=>{setTimeout((()=>{i()}),e)};let x=Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{path:"/",exact:!0,render:e=>Object(n.jsx)(Y,Object(j.a)(Object(j.a)({},e),{},{onLogin:m,loading:s.authLoading}))}),Object(n.jsx)(p.b,{path:"/signup",exact:!0,render:e=>Object(n.jsx)(J,Object(j.a)(Object(j.a)({},e),{},{onSignup:g,loading:s.authLoading}))}),Object(n.jsx)(p.a,{to:"/"})]});return s.isAuth&&(x=Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{path:"/",exact:!0,render:e=>Object(n.jsx)(G,{userId:s.userId,token:s.token})}),Object(n.jsx)(p.b,{path:"/:postId",render:e=>Object(n.jsx)(V,Object(j.a)(Object(j.a)({},e),{},{userId:s.userId,token:s.token}))}),Object(n.jsx)(p.a,{to:"/"})]})),Object(n.jsxs)(o.Fragment,{children:[s.showBackdrop&&Object(n.jsx)(O,{onClick:()=>{r({type:"BACKDROP_CLOSE"})}}),Object(n.jsx)(I,{error:s.error,onHandle:()=>{r({type:"ERROR"})}}),Object(n.jsx)(b,{header:Object(n.jsx)(h,{children:Object(n.jsx)(f,{onOpenMobileNav:c,onLogout:i,isAuth:s.isAuth})}),mobileNav:Object(n.jsx)(E,{open:s.showMobileNav,mobile:!0,onChooseItem:c,onLogout:i,isAuth:s.isAuth})}),x]})}));r.a.render(Object(n.jsx)(c.a,{children:Object(n.jsx)(W,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.2074e6d5.chunk.js.map