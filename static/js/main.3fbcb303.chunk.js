(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},173:function(e,t){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(81),i=a.n(o),c=a(82);a(101),a(102),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(180),s=a(179),u=a(12),m=a(84),p=a.n(m),d=a(85),v=a(178),h=a(13),b=r.a.createContext(null),f=function(e){return function(t){return r.a.createElement(b.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},E=a(181),O=a(86),j=a.n(O),w=(a(155),a(157),j.a.initializeApp({apiKey:"AIzaSyBq23jYMGiEwMvAXXHC4QMKHLwInnYLEcA",authDomain:"xmoviekeeper-65458.firebaseapp.com",databaseURL:"https://moviekeeper-65458.firebaseio.com",projectId:"moviekeeper-65458",storageBucket:"moviekeeper-65458.appspot.com",messagingSenderId:"331356584001"})),g=w.database(),y=w.auth(),S=function(e,t){return y.signInWithEmailAndPassword(e,t)},C=function(){return y.signOut()},M=function(){return g.ref("baseballMovies/")},k=function(){return y.currentUser},N=a(7),D=a(8),A=a(10),T=a(9),R=a(11),_=a(23),I=a(16),P="/signin",U="/home",x={email:"",error:null},L=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;a.props.firebase.doPasswordReset(t).then(function(){a.setState(Object(I.a)({},x))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(_.a)({},e.target.name,e.target.value))},a.state=Object(I.a)({},x),a}return Object(R.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(n.Component),V=function(){return r.a.createElement("p",null,r.a.createElement(v.a,{to:"/pw-forget"},"Forgot Password?"))},B=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(H,null))},H=f(L),W=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).signOut=function(){C(),a.props.signOut(),a.props.history.push("/")},a}return Object(R.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{type:"button",onClick:this.signOut},"Sign Out")}}]),t}(n.Component),Y=Object(h.a)(Object(u.b)(function(e){return{}},function(e){return{signOut:function(){return e({type:"REMOVE_USER"})}}}),E.a,f)(W),z=function(){return r.a.createElement("ul",{className:"header"},r.a.createElement("li",null,r.a.createElement(v.a,{to:U},"Home")),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/account"},"Account")),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/movies"},"Movies")),r.a.createElement("li",null,r.a.createElement(Y,null)))},F=function(){return r.a.createElement("ul",{className:"header"},r.a.createElement("li",null,r.a.createElement(v.a,{to:U},"Home")),r.a.createElement("li",null,r.a.createElement(v.a,{to:P},"Sign In")))},J=Object(h.a)(Object(u.b)(function(e){return{admin:e.admin}}),E.a,f)(function(e){return r.a.createElement("div",null,k()?r.a.createElement(z,null):r.a.createElement(F,null))}),K=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,r=t.password;S(n,r).then(function(e){return a.props.setUser(e.user.email)}).then(function(){a.setState({username:"",email:"",passwordOne:"",passwordTwo:"",error:null}),a.props.history.push(U)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(_.a)({},e.target.name,e.target.value))},a.state={username:"",email:"",password:"",passwordOne:"",passwordTwo:"",error:null},a}return Object(R.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Take me out to the ball game"),n&&r.a.createElement("p",null,n.message))}}]),t}(n.Component),X=Object(h.a)(Object(u.b)(function(e){return{}},function(e){return{setUser:function(t){return e(function(e){return{type:"SET_USER",userEmail:e}}(t))}}}),E.a,f)(K),q=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(X,null),r.a.createElement(V,null))},G=a(65),Q=function(){return r.a.createElement("div",{id:"homepage-container"},r.a.createElement(G.a,{id:"montage",videoId:"ItYScNYRA5w",opts:{playerVars:{autoplay:0,loop:1,controls:1,rel:0,playsinline:0,modestbranding:1,iv_load_policy:3,width:"100%"}}}))},$={passwordOne:"",passwordTwo:"",error:null},Z=f(function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.passwordOne;a.props.firebase.doPasswordUpdate(t).then(function(){a.setState(Object(I.a)({},$))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(_.a)({},e.target.name,e.target.value))},a.state=Object(I.a)({},$),a}return Object(R.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,o=t!==a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(n.Component)),ee=function(e){function t(){return Object(N.a)(this,t),Object(A.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){!k()&&this.props.history.push(P)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: "),r.a.createElement(H,null),r.a.createElement(Z,null))}}]),t}(n.Component),te=Object(h.a)(Object(u.b)(function(e){return{admin:e.admin}},function(e){return{}}),E.a,f)(ee),ae=(a(173),function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null,"Restricted area! Only users with the admin role are authorized."))}),ne=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).state={showModal:!1},a}return Object(R.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"movie-poster-container"},r.a.createElement("img",{onClick:function(){return e.props.history.push("".concat("/movie","/").concat(e.props.movieTitle.replace(/\s/g,"")))},className:"movie-poster",src:"https://image.tmdb.org/t/p/w500/"+this.props.poster}))}}]),t}(n.Component),re=Object(h.a)(E.a,f)(ne),oe=a(90),ie=function(e){var t=e.actor;return r.a.createElement("div",{className:"actor-card-content"},r.a.createElement("div",{className:"actor-card-profile-container"},r.a.createElement("img",{className:"actor-card-profile",src:"https://image.tmdb.org/t/p/w200/"+t.profile_path})),r.a.createElement("div",{className:"crew-text-container"},r.a.createElement("p",{className:"actor-name"},t.name),r.a.createElement("p",null,t.character)))},ce=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).state={movie:{}},a}return Object(R.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=Object(oe.filter)(this.state.movie.cast.crew,{job:"Director"}).map(function(e){return e.name}).join(", "),t=Math.floor(this.state.movie.runtime/60),a=t>1?"hours":"hour",n=this.state.movie.runtime%60;return r.a.createElement("div",{className:"movie-modal"},r.a.createElement("img",{className:"movie-modal-image-header",src:"https://image.tmdb.org/t/p/original"+this.state.movie.backdrop_path}),r.a.createElement("div",{className:"movie-modal-content-container"},r.a.createElement("div",{className:"movie-modal-header-container"},r.a.createElement("h1",{className:"movie-title"},this.state.movie.title),r.a.createElement("div",null,t," ",a," ",n," minutes")),r.a.createElement("div",{className:"movie-modal-top-container"},r.a.createElement("div",{className:"movie-details-container"},r.a.createElement("div",null,"Overview: ",this.state.movie.overview),r.a.createElement("div",null,"Director: ",e))),r.a.createElement("div",{className:"actor-card-container"},Object.values(this.state.movie.cast.cast).map(function(e){return r.a.createElement(ie,{actor:e})}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=window.location.href.split("movie/")[1],n=Object.keys(e.baseballMovies).map(function(e){return e.replace(/[^\w\s]/gi,"").toLowerCase()===a.replace(/[^\w\s]/gi,"").toLowerCase()}).indexOf(!0);return Object.values(e.baseballMovies)[n]!==t.movie?{movie:Object.values(e.baseballMovies)[n]}:null}}]),t}(n.Component),le=Object(h.a)(Object(u.b)(function(e){return{baseballMovies:e.movieData.movies}},function(e){return{}}),E.a,f)(ce),se=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(A.a)(this,Object(T.a)(t).call(this,e))).componentDidMount=function(){!k()&&a.props.history.push(P),M().on("value",function(e){a.props.setMovieData(e.val())})},a.state={movies:[],showModal:!1,movieModal:{}},a}return Object(R.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"movie-container"},this.props.baseballMovies&&Object.values(this.props.baseballMovies).map(function(e,t){return r.a.createElement(re,{key:e+"-"+t,poster:e.poster_path,movieTitle:e.title})}))}}]),t}(n.Component),ue=Object(h.a)(Object(u.b)(function(e){return{baseballMovies:e.movieData.movies,admin:e.admin}},function(e){return{setMovieData:function(t){return e(function(e){return{type:"SET_MOVIE_DATA",movies:e}}(t))}}}),E.a,f)(se),me=(p()(),function(e){var t=e.store,a=e.persistor;return r.a.createElement(d.a,{persistor:a},r.a.createElement(u.a,{store:t},r.a.createElement(l.a,null,r.a.createElement("div",{id:"app"},r.a.createElement(J,null),r.a.createElement("hr",null),r.a.createElement(s.a,{path:P,component:q}),r.a.createElement(s.a,{path:"/pw-forget",component:B}),r.a.createElement(s.a,{path:U,component:Q}),r.a.createElement(s.a,{path:"/movies",component:ue}),r.a.createElement(s.a,{path:"/movie",component:le}),r.a.createElement(s.a,{path:"/account",component:te}),r.a.createElement(s.a,{path:"/admin",component:ae})))))}),pe=a(68),de=a(91),ve=a.n(de),he=a(14),be=a(92);var fe=Object(he.combineReducers)({movieData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.payload),t.type){case"SET_MOVIE_DATA":return Object(I.a)({},e,{movies:t.movies});default:return e}},admin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(I.a)({},e,{userEmail:t.userEmail});case"REMOVE_USER":return Object(I.a)({},e,{userEmail:""});default:return e}}}),Ee={key:"root",storage:ve.a},Oe=Object(pe.a)(Ee,fe),je=Object(he.createStore)(Oe,Object(c.composeWithDevTools)(Object(he.applyMiddleware)(be.a))),we=Object(pe.b)(je);i.a.render(r.a.createElement(me,{store:je,persistor:we}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){e.exports=a(177)}},[[93,1,2]]]);
//# sourceMappingURL=main.3fbcb303.chunk.js.map