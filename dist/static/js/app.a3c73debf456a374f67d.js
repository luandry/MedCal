webpackJsonp([1],{"/yRs":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=(n=a("8ebl")).default||n,s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-street-view-pano-container"},[e("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var o=a("VU/8")(r,s,!1,function(t){a("CjMs")},null,null);e.default=o.exports},"2YFr":function(t,e){},"5ZbH":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=(n=a("hOwk")).default||n,s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-map-container"},[e("div",{ref:"vue-map",staticClass:"vue-map"}),this._v(" "),e("div",{staticClass:"vue-map-hidden"},[this._t("default")],2),this._v(" "),this._t("visible")],2)},staticRenderFns:[]};var o=a("VU/8")(r,s,!1,function(t){a("dtWn")},null,null);e.default=o.exports},"5cLx":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=(n=a("WgA/")).default||n,s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"flyaway"},[this._t("default")],2)])},staticRenderFns:[]},o=a("VU/8")(r,s,!1,null,null,null);e.default=o.exports},"7sl/":function(t,e){},"7zck":function(t,e){},"84cI":function(t,e){},"8Rpd":function(t,e){},"9fnm":function(t,e){},CjMs:function(t,e){},MLyH:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("sA6N"),s={data:function(){return{drawer:!1,google:{name:null,imageUrl:null,email:null},links:[{icon:"home",text:"Home",route:"/"},{icon:"search",text:"Search",route:"/search"},{icon:"event_note",text:"Calendar"},{icon:"settings",text:"Settings"}]}},methods:{navigateTo:function(t){this.$router.push(t)},googleSignOut:function(){var t=this;this.$gAuth.signOut().then(function(){t.$store.dispatch("setToken",null),t.$store.dispatch("setUser",null),t.$router.push({name:"home"})}).catch(function(t){console.log(t)})},googleSignIn:function(){var t=this;this.$gAuth.signIn().then(function(e){console.log("user",e),t.$store.dispatch("setToken",e.getAuthResponse().id_token),t.$store.dispatch("setUser",e.getId());var a=e.getBasicProfile();t.google.name=a.getName(),t.google.imageUrl=a.getImageUrl(),t.google.email=a.getEmail(),t.$router.push({name:"home"}),t.isSignIn=t.$gAuth.isAuthorized}).catch(function(t){console.log(t)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-toolbar",{staticClass:"blue",attrs:{app:"",dark:""}},[a("v-toolbar-side-icon",{on:{click:function(e){t.drawer=!t.drawer}}},[a("v-icon",[t._v("menu")])],1),t._v(" "),a("v-toolbar-title",{on:{click:function(e){return t.navigateTo({name:"home"})}}},[a("span",{staticClass:"headline"},[t._v("MedCal")])]),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",dark:""},on:{click:function(e){return t.navigateTo({name:"search"})}}},[a("v-icon",{attrs:{left:""}},[t._v("search")]),t._v("\n        Search\n      ")],1),t._v(" "),t.$store.state.isUserLoggedIn?t._e():a("v-btn",{attrs:{flat:"",dark:""},on:{click:t.googleSignIn}},[a("v-icon",{attrs:{left:""}},[t._v("donut_small")]),t._v("\n        Google Login\n      ")],1),t._v(" "),t.$store.state.isUserLoggedIn?t._e():a("v-btn",{attrs:{flat:"",dark:""},on:{click:function(e){return t.navigateTo({name:"login"})}}},[t._v("\n        Login\n      ")]),t._v(" "),t.$store.state.isUserLoggedIn?t._e():a("v-btn",{attrs:{flat:"",dark:""},on:{click:function(e){return t.navigateTo({name:"register"})}}},[t._v("\n        Sign Up\n      ")]),t._v(" "),t.$store.state.isUserLoggedIn?a("v-btn",{attrs:{flat:"",dark:""},on:{click:t.googleSignOut}},[t._v("\n        Log Out\n        "),a("v-icon",{attrs:{right:""}},[t._v("logout")])],1):t._e()],1)],1),t._v(" "),a("v-navigation-drawer",{staticClass:"blue",attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t.$store.state.isUserLoggedIn?a("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[a("v-list",{staticClass:"pa-0"},[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",[a("img",{attrs:{src:t.google.imageUrl}})]),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"white--text"},[t._v("\n              "+t._s(t.google.name)+"\n            ")])],1)],1)],1)],1):t._e(),t._v(" "),a("v-list",{staticClass:"blue lighten-1"},t._l(t.links,function(e){return a("v-list-tile",{key:e.text,attrs:{router:"",to:e.route}},[a("v-list-tile-action",[a("v-icon",{staticClass:"white--text"},[t._v("\n            "+t._s(e.icon)+"\n          ")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"white--text"},[t._v("\n            "+t._s(e.text)+"\n          ")])],1)],1)}),1)],1)],1)},staticRenderFns:[]};var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",{attrs:{absolute:"",height:"auto",color:"primary lighten-1"}},[e("v-layout",[e("v-flex",{staticClass:"blue lighten-1",attrs:{"py-3":"","text-xs-center":"","white--text":"",xs12:""}},[this._v("\n      ©2019 — "),e("strong",[this._v("MedCal")])])],1)],1)},staticRenderFns:[]};var l={name:"App",components:{PageHeader:a("VU/8")(s,o,!1,function(t){a("2YFr")},"data-v-b81598b2",null).exports,PageFooter:a("VU/8")({},i,!1,function(t){a("a6rp")},"data-v-5317ba31",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",[e("page-header"),this._v(" "),e("main",[e("v-container",[e("router-view")],1)],1),this._v(" "),e("page-footer")],1)],1)},staticRenderFns:[]};var u=a("VU/8")(l,c,!1,function(t){a("Y0KK")},null,null).exports,d=a("/ocq"),v=a("Xxa5"),p=a.n(v),f=a("exGp"),h=a.n(f),m={data:function(){return{search:"",banners:[{id:1,imageUrl:"http://www.apexcartage.com/wp-content/uploads/2014/05/placeholder-blue.png"},{id:2,imageUrl:"https://www.hyduke.com/wp-content/uploads/2017/10/placeholder-red.png"},{id:3,imageUrl:"http://www.apexcartage.com/wp-content/uploads/2014/05/placeholder-blue.png"},{id:4,imageUrl:"https://www.hyduke.com/wp-content/uploads/2017/10/placeholder-red.png"}],error:null}},methods:{searchDoctors:function(){var t=this;return h()(p.a.mark(function e(){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{a={name:"search"},""!==t.search&&(a.query={search:t.search}),t.$router.push(a)}catch(e){t.error=e.response.data.error}case 1:case"end":return e.stop()}},e,t)}))()}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"front-page"},[a("v-carousel",{attrs:{"prev-icon":"chevron_left","next-icon":"chevron_right","delimiter-icon":"lens"}},t._l(t.banners,function(t){return a("v-carousel-item",{key:t.id,attrs:{dark:"",src:t.imageUrl}})}),1),t._v(" "),a("div",{staticClass:"mt-2 mb-5"},[a("h1",{staticClass:"display-3"},[t._v("Search by doctor names")]),t._v(" "),a("v-text-field",{attrs:{outline:"",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),a("div",{staticClass:"error",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),a("v-btn",{staticClass:"blue",attrs:{dark:""},on:{click:t.searchDoctors}},[t._v("\n      Search\n    ")])],1)],1)},staticRenderFns:[]};var g=a("VU/8")(m,_,!1,function(t){a("MLyH")},"data-v-6f372394",null).exports,x=a("mtWM"),b=a.n(x),k=function(){return b.a.create({baseURL:"http://localhost:8081/"})},w=function(t){return k().post("register",t)},y=function(t){return k().post("login",t)},$={data:function(){return{email:"",password:"",userName:"",age:null,phoneNumber:"",error:null}},methods:{register:function(){var t=this;return h()(p.a.mark(function e(){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w({email:t.email,password:t.password,userName:t.userName,age:t.age,phoneNumber:t.phoneNumber});case 3:a=e.sent,t.$store.dispatch("setToken",a.data.token),t.$store.dispatch("setUser",a.data.user),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 11:case"end":return e.stop()}},e,t,[[0,8]])}))()}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{lg5:""}},[a("panel",{attrs:{title:"Register"}},[a("form",{attrs:{name:"sign-up-form",autocomplete:"off"}},[a("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("v-text-field",{attrs:{type:"password",label:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("v-text-field",{attrs:{label:"User Name"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),a("v-text-field",{attrs:{label:"Age"},model:{value:t.age,callback:function(e){t.age=e},expression:"age"}}),t._v(" "),a("v-text-field",{attrs:{label:"Phone Number"},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}})],1),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"error",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),a("br"),t._v(" "),a("v-btn",{staticClass:"blue",attrs:{dark:""},on:{click:t.register}},[t._v("\n          Register\n        ")])],1)],1)],1)},staticRenderFns:[]};var U=a("VU/8")($,C,!1,function(t){a("WdQw")},"data-v-346ef1e2",null).exports,I={data:function(){return{email:"",password:"",error:null}},methods:{login:function(){var t=this;return h()(p.a.mark(function e(){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y({email:t.email,password:t.password});case 3:a=e.sent,t.$store.dispatch("setToken",a.data.token),t.$store.dispatch("setUser",a.data.user),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 11:case"end":return e.stop()}},e,t,[[0,8]])}))()}}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{lg5:""}},[a("panel",{attrs:{title:"Login"}},[a("form",{attrs:{name:"login-form",autocomplete:"off"}},[a("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("v-text-field",{attrs:{type:"password",label:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"error",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),a("br"),t._v(" "),a("v-btn",{staticClass:"blue",attrs:{dark:""},on:{click:t.login}},[t._v("\n          Login\n        ")])],1)],1)],1)},staticRenderFns:[]};var E,P=a("VU/8")(I,R,!1,function(t){a("OHGf")},"data-v-31bb910c",null).exports,F=a("M4fF"),N={data:function(){return{search:" "}},watch:{search:a.n(F).a.debounce((E=h()(p.a.mark(function t(e){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a={name:"search"},""!==this.search&&(a.query={search:this.search}),this.$router.push(a);case 3:case"end":return t.stop()}},t,this)})),function(t){return E.apply(this,arguments)}),700),"$route.query.search":{immediate:!0,handler:function(t){this.search=t}}}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("panel",{attrs:{title:"search"}},[a("v-text-field",{attrs:{label:"Search by doctor name"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)},staticRenderFns:[]};var D=function(t){return k().get("search",{params:{search:t}})},M=function(t){return k().get("search/"+t)},L={data:function(){return{panel:[],expanded:!1,pageIndex:0,maxPage:0,searchResults:null,doctors:null}},methods:{navigateTo:function(t){this.$router.push(t)},all:function(){this.panel=[];for(var t=0;t<this.doctors.length;t++)this.panel[t]=!0;this.expanded=!0},none:function(){this.panel=[],this.expanded=!1},prevPage:function(){this.pageIndex>0&&this.pageIndex--},nextPage:function(){this.pageIndex<this.maxPage&&this.pageIndex++}},watch:{"$route.query.search":{immediate:!0,handler:function(t){var e=this;return h()(p.a.mark(function a(){var n;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D(t);case 2:for(e.searchResults=a.sent.data,e.doctors=[],n=0;n<10;n++)null!=e.searchResults[n]&&(e.doctors[n]=e.searchResults[n]);e.maxPage=Math.ceil(e.searchResults.length/10)-1;case 6:case"end":return a.stop()}},a,e)}))()}},pageIndex:function(t){this.doctors=[];for(var e=10*this.pageIndex,a=e;a<e+10;a++)null!=this.searchResults[a]&&(this.doctors[a-e]=this.searchResults[a]);this.none()}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("panel",{staticClass:"mb-5",attrs:{title:"Doctors"}},[a("v-spacer",{attrs:{slot:"action"},slot:"action"}),t._v(" "),a("div",{attrs:{slot:"action"},slot:"action"},[t.expanded?t._e():a("v-btn",{staticClass:"blue lighten-1",attrs:{dark:"",depressed:""},on:{click:t.all}},[t._v("\n      expand all\n    ")]),t._v(" "),t.expanded?a("v-btn",{staticClass:"blue lighten-1",attrs:{dark:"",depressed:""},on:{click:t.none}},[t._v("\n      retract all\n    ")]):t._e()],1),t._v(" "),a("v-expansion-panel",{attrs:{expand:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.doctors,function(e){return a("v-expansion-panel-content",{key:e._id,attrs:{"expand-icon":"expand_more"}},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.name))]),t._v(" "),a("v-card",[a("v-card-text",[t._v(t._s(e.bio))]),t._v(" "),a("v-layout",{attrs:{"justify-center":""}},[a("v-btn",{staticClass:"blue",attrs:{dark:""},on:{click:function(a){return t.navigateTo({name:"doctor",params:{doctorId:e._id}})}}},[t._v("\n            View\n          ")])],1)],1)],1)}),1),t._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{md2:""}},[a("v-btn",{staticClass:"blue lighten-q",attrs:{dark:""},on:{click:t.prevPage}},[a("v-icon",[t._v("chevron_left")])],1)],1),t._v(" "),a("v-flex",{attrs:{md1:""}},[a("v-btn",{attrs:{disabled:""}},[a("span",{staticClass:"page-number"},[t._v(t._s(t.pageIndex+1)+"/"+t._s(t.maxPage+1))])])],1),t._v(" "),a("v-flex",{attrs:{md2:""}},[a("v-btn",{staticClass:"blue lighten-1",attrs:{dark:""},on:{click:t.nextPage}},[a("v-icon",[t._v("chevron_right")])],1)],1)],1)],1)},staticRenderFns:[]};var V={components:{SearchPanel:a("VU/8")(N,T,!1,function(t){a("bq77")},"data-v-79222e9b",null).exports,SearchResultsPanel:a("VU/8")(L,S,!1,function(t){a("8Rpd")},"data-v-00a39de6",null).exports}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",[e("v-flex",[e("search-panel"),this._v(" "),e("search-results-panel",{staticClass:"mt-3"})],1)],1)},staticRenderFns:[]};var A=a("VU/8")(V,O,!1,function(t){a("ONYc")},"data-v-3c09927b",null).exports,j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("panel",{attrs:{title:"Doctor Info"}},[a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",md6:""}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",{staticClass:"headline",attrs:{primary:""}},[t._v(t._s(t.doctor.name))]),t._v(" "),t.isEmpty(t.doctor.bio)?t._e():a("v-text-field",{attrs:{readonly:"",outline:"",label:"Doctor Bio"},model:{value:t.doctor.bio,callback:function(e){t.$set(t.doctor,"bio",e)},expression:"doctor.bio"}}),t._v(" "),t.isEmpty(t.doctor.address)?t._e():a("v-text-field",{attrs:{readonly:"",outline:"",label:"Address"},model:{value:t.doctor.address,callback:function(e){t.$set(t.doctor,"address",e)},expression:"doctor.address"}}),t._v(" "),t.isEmpty(t.doctor.phone)?t._e():a("v-text-field",{attrs:{readonly:"",outline:"",label:"Phone Number"},model:{value:t.doctor.phone,callback:function(e){t.$set(t.doctor,"phone",e)},expression:"doctor.phone"}}),t._v(" "),t.isEmpty(t.doctor.mail)?t._e():a("v-text-field",{attrs:{readonly:"",outline:"",label:"Email"},model:{value:t.doctor.mail,callback:function(e){t.$set(t.doctor,"mail",e)},expression:"doctor.mail"}})],1)],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",md6:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":""}},[a("v-card",{attrs:{flat:""}},[a("img",{staticClass:"doctor-image",attrs:{src:t.doctorImage}})])],1),t._v(" "),a("v-flex",{attrs:{"d-flex":"",md10:"","offset-md1":""}},[a("GmapMap",{staticStyle:{width:"500px",height:"400px"},attrs:{center:{lat:50,lng:10},zoom:7,"map-type-id":"terrain"}},t._l(t.markers,function(e,n){return a("GmapMarker",{key:n,attrs:{position:e.position,clickable:!0,draggable:!0},on:{click:function(a){t.center=e.position}}})}),1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("panel",{attrs:{title:"Make a Booking"}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"mb-3",attrs:{xs12:""}},[a("v-sheet",{attrs:{height:"500"}},[a("v-calendar",{ref:"calendar",attrs:{type:t.type,end:t.end,color:"primary"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}})],1)],1),t._v(" "),a("v-flex",{staticClass:"text-sm-left text-xs-center",attrs:{sm4:"",xs12:""}},[a("v-btn",{on:{click:function(e){return t.$refs.calendar.prev()}}},[a("v-icon",{attrs:{dark:"",left:""}},[t._v("\n          keyboard_arrow_left\n        ")]),t._v("\n        Prev\n      ")],1)],1),t._v(" "),a("v-flex",{staticClass:"text-xs-center",attrs:{sm4:"",xs12:""}},[a("v-select",{attrs:{items:t.typeOptions,label:"Type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),t._v(" "),a("v-flex",{staticClass:"text-sm-right text-xs-center",attrs:{sm4:"",xs12:""}},[a("v-btn",{on:{click:function(e){return t.$refs.calendar.next()}}},[t._v("\n        Next\n        "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("\n          keyboard_arrow_right\n        ")])],1)],1)],1),t._v(" "),a("v-layout",[a("v-flex",[a("add-to-calendar",{attrs:{title:"Appointment with Dr. Doe",location:"George's Street Upper, Dún Laoghaire, Dublin, Irland",start:new Date((new Date).setDate((new Date).getDate()+3)),end:new Date((new Date).setDate((new Date).getDate()+3)),details:"Looking at progress with knee injury"},inlineTemplate:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("google-calendar",{attrs:{id:"google-calendar"}},[e("i",{staticClass:"fa fa-google"}),this._v(" "),e("v-btn",[this._v("\n              Add to Google calendar\n            ")])],1)],1)},staticRenderFns:[]}})],1)],1)],1)},staticRenderFns:[]};var Y={data:function(){return{doctor:{}}},mounted:function(){var t=this;return h()(p.a.mark(function e(){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$store.state.route.params.doctorId,e.next=3,M(a);case 3:t.doctor=e.sent.data;case 4:case"end":return e.stop()}},e,t)}))()},components:{DoctorInfo:a("VU/8")({data:function(){return{doctorImage:null}},props:["doctor"],methods:{navigateTo:function(t){this.$router.push(t)},isEmpty:function(t){return null==t||""===t}},watch:{doctor:function(t){""===this.doctor.photoUrl||null==this.doctor.photoUrl?this.doctorImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png":this.doctorImage=this.doctor.photoUrl}}},j,!1,function(t){a("aJ24")},"data-v-688563b2",null).exports,MakeBooking:a("VU/8")({data:function(){return{type:"month",start:"2019-03-01",end:"2019-12-31",typeOptions:[{text:"Day",value:"day"},{text:"4 Day",value:"4day"},{text:"Week",value:"week"},{text:"Month",value:"month"},{text:"Custom Daily",value:"custom-daily"},{text:"Custom Weekly",value:"custom-weekly"}]}}},H,!1,function(t){a("84cI")},"data-v-f5615150",null).exports}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",[e("v-flex",[e("doctor-info",{attrs:{doctor:this.doctor}}),this._v(" "),e("make-booking",{staticClass:"mt-2 mb-5"})],1)],1)},staticRenderFns:[]};var W=a("VU/8")(Y,G,!1,function(t){a("7sl/")},"data-v-5af6f5ec",null).exports;n.default.use(d.a);var q=new d.a({routes:[{path:"/",name:"home",component:g},{path:"/register",name:"register",component:U},{path:"/login",name:"login",component:P},{path:"/search",name:"search",component:A},{path:"/search/:doctorId",name:"doctor",component:W}]}),z=a("3EgV"),B=a.n(z),J=a("9JMe"),K=(a("7zck"),a("5XsB")),Q=a("RUel"),Z=a.n(Q),X=a("NYxO");n.default.use(X.a);var tt=new X.a.Store({strict:!0,state:{token:null,user:null,isUserLoggedIn:!1},mutations:{setToken:function(t,e){t.token=e,t.isUserLoggedIn=!!e},setUser:function(t,e){t.user=e}},actions:{setToken:function(t,e){(0,t.commit)("setToken",e)},setUser:function(t,e){(0,t.commit)("setUser",e)}}}),et={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"white elevation-2"},[a("v-toolbar",{staticClass:"blue",attrs:{flat:"",dense:"",dark:""}},[a("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),t._t("action")],2),t._v(" "),a("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[t._t("default",[t._v("\n      no slot content defined\n    ")])],2)],1)},staticRenderFns:[]};var at=a("VU/8")({props:["title"]},et,!1,function(t){a("9fnm")},"data-v-94137d42",null).exports;n.default.use(r,{load:{key:"AIzaSyAkl9ECcFQJ-2FpgDAuekY65nHtYFnNST8",libraries:"places"}}),n.default.config.productionTip=!1;n.default.use(K.a,{clientId:"910540364267-1l5e831tupoal1biunv53lf0ch6cr5np.apps.googleusercontent.com",scope:"profile email",prompt:"select_account"}),n.default.use(Z.a),n.default.use(B.a,{iconfont:"mdi"}),n.default.component("panel",at),Object(J.sync)(tt,q),new n.default({el:"#app",router:q,store:tt,components:{App:u},template:"<App/>"})},OHGf:function(t,e){},ONYc:function(t,e){},T5eZ:function(t,e,a){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("label",[e("span",{domProps:{textContent:this._s(this.label)}}),this._v(" "),e("input",{ref:"input",class:this.className,attrs:{type:"text",placeholder:this.placeholder}})])},staticRenderFns:[]};e.a=n},WdQw:function(t,e){},Y0KK:function(t,e){},YI6p:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("jIen"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var o=a("T5eZ"),i=a("VU/8")(r.a,o.a,!1,null,null,null);e.default=i.exports},a6rp:function(t,e){},aJ24:function(t,e){},bq77:function(t,e){},dtWn:function(t,e){},preG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=(n=a("hQTS")).default||n,s={render:function(){var t=this.$createElement;return(this._self._c||t)("input",this._g(this._b({ref:"input"},"input",this.$attrs,!1),this.$listeners))},staticRenderFns:[]},o=a("VU/8")(r,s,!1,null,null,null);e.default=o.exports}},["NHnr"]);
//# sourceMappingURL=app.a3c73debf456a374f67d.js.map