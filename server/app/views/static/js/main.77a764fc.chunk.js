(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(34),r=a.n(s),c=a(13),i=a(4),o=a(5),l=a(11),d=a(7),u=a(6),h=a(2),j=(a(40),a(41),a(15)),m=a.n(j),b="http://localhost:8080/api/auth/",g=new(function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"login",value:function(e,t){return m.a.post(b+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t){return m.a.post(b+"signup",{username:e,password:t})}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}()),O=a(19),v=a.n(O),f=a(17),p=a.n(f),x=a(20),N=a.n(x),k=a(0),w=function(e){if(!e)return Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleLogin=n.handleLogin.bind(Object(l.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(l.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(l.a)(n)),n.state={username:"",password:"",loading:!1,message:""},n}return Object(o.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?g.login(this.state.username,this.state.password).then((function(){t.props.history.push("/profile"),window.location.reload()}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:a})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return Object(k.jsx)("div",{className:"col-md-12",children:Object(k.jsxs)("div",{className:"card card-container",children:[Object(k.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(k.jsxs)(v.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t},children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"username",children:"Username"}),Object(k.jsx)(p.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[w]})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"password",children:"Password"}),Object(k.jsx)(p.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[w]})]}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsxs)("button",{className:"btn btn-primary btn-block",disabled:this.state.loading,children:[this.state.loading&&Object(k.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(k.jsx)("span",{children:"Login"})]})}),this.state.message&&Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:this.state.message})}),Object(k.jsx)(N.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),a}(n.Component),C=function(e){if(!e)return Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},S=function(e){if(e.length<3||e.length>20)return Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 20 characters."})},U=function(e){if(e.length<6||e.length>40)return Object(k.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})},B=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleRegister=n.handleRegister.bind(Object(l.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(l.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(l.a)(n)),n.state={username:"",password:"",successful:!1,message:""},n}return Object(o.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&g.register(this.state.username,this.state.password).then((function(e){t.setState({message:e.data.message,successful:!0})}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({successful:!1,message:a})}))}},{key:"render",value:function(){var e=this;return Object(k.jsx)("div",{className:"col-md-12",children:Object(k.jsxs)("div",{className:"card card-container",children:[Object(k.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(k.jsxs)(v.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t},children:[!this.state.successful&&Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"username",children:"Username"}),Object(k.jsx)(p.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[C,S]})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"password",children:"Password"}),Object(k.jsx)(p.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[C,U]})]}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),this.state.message&&Object(k.jsx)("div",{className:"form-group",children:Object(k.jsx)("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert",children:this.state.message})}),Object(k.jsx)(N.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),a}(n.Component);function P(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var T="http://localhost:8080/api/test/",A=new(function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"getPublicContent",value:function(){return m.a.get(T+"all")}},{key:"getUserBoard",value:function(){return m.a.get(T+"user",{headers:P()})}},{key:"getAdminBoard",value:function(){return m.a.get(T+"admin",{headers:P()})}}]),e}()),I=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;A.getPublicContent().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("header",{className:"jumbotron",children:Object(k.jsx)("h3",{children:this.state.content})})})}}]),a}(n.Component),L=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={currentUser:g.getCurrentUser()},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.currentUser;return Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("header",{className:"jumbotron",children:Object(k.jsxs)("h3",{children:[Object(k.jsx)("strong",{children:e.username})," Profile"]})}),Object(k.jsxs)("p",{children:[Object(k.jsx)("strong",{children:"Token:"})," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(k.jsx)("strong",{children:"Authorities:"}),Object(k.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(k.jsx)("li",{children:e},t)}))})]})}}]),a}(n.Component),D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;A.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("header",{className:"jumbotron",children:Object(k.jsx)("h3",{children:this.state.content})})})}}]),a}(n.Component),J=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;A.getAdminBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("header",{className:"jumbotron",children:Object(k.jsx)("h3",{children:this.state.content})})})}}]),a}(n.Component),M=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).logOut=n.logOut.bind(Object(l.a)(n)),n.state={showAdminBoard:!1,currentUser:void 0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=g.getCurrentUser();e&&this.setState({currentUser:e,showAdminBoard:e.roles.includes("ROLE_ADMIN")})}},{key:"logOut",value:function(){g.logout()}},{key:"render",value:function(){var e=this.state,t=e.currentUser,a=e.showAdminBoard;return Object(k.jsxs)("div",{children:[Object(k.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(k.jsx)(c.b,{to:"/",className:"navbar-brand",children:"CSCI2720 Group 5"}),Object(k.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/home",className:"nav-link",children:"Home"})}),a&&Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/admin",className:"nav-link",children:"Admin Board"})}),t&&Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/user",className:"nav-link",children:"User"})})]}),t?Object(k.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/profile",className:"nav-link",children:t.username})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)("a",{href:"/login",className:"nav-link",onClick:this.logOut,children:"LogOut"})})]}):Object(k.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(c.b,{to:"/register",className:"nav-link",children:"Sign Up"})})]})]}),Object(k.jsx)("div",{className:"container mt-3",children:Object(k.jsxs)(h.c,{children:[Object(k.jsx)(h.a,{exact:!0,path:["/","/home"],component:I}),Object(k.jsx)(h.a,{exact:!0,path:"/login",component:y}),Object(k.jsx)(h.a,{exact:!0,path:"/register",component:B}),Object(k.jsx)(h.a,{exact:!0,path:"/profile",component:L}),Object(k.jsx)(h.a,{path:"/user",component:D}),Object(k.jsx)(h.a,{path:"/admin",component:J})]})})]})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(k.jsx)(c.a,{children:Object(k.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.77a764fc.chunk.js.map