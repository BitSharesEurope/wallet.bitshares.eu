webpackJsonp([36],{1268:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),r=n.n(c),s=n(42),i=n(22),m=n.n(i),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),p(t,[{key:"onSelect",value:function(e){this.props.router.push("/create-account/"+e)}},{key:"render",value:function(){return this.props.children?this.props.children:r.a.createElement("div",{className:"grid-content",style:{paddingTop:30}},r.a.createElement("h2",{className:"text-center"},r.a.createElement(m.a,{content:"wallet.login_type"})),r.a.createElement("div",{className:"grid-block no-margin no-padding vertical medium-horizontal no-overflow login-selector"},r.a.createElement("div",{className:"box small-12 medium-5 large-4",onClick:this.onSelect.bind(this,"wallet")},r.a.createElement("div",{className:"block-content-header",style:{position:"relative"}},r.a.createElement(m.a,{content:"wallet.wallet_model",component:"h4"})),r.a.createElement("div",{className:"box-content"},r.a.createElement(m.a,{content:"wallet.wallet_model_1",component:"p"}),r.a.createElement(m.a,{content:"wallet.wallet_model_2",component:"p"}),r.a.createElement(m.a,{unsafe:!0,content:"wallet.wallet_model_3",component:"ul"})),r.a.createElement("div",{className:"button"},r.a.createElement(s.b,{to:"/create-account/wallet"},r.a.createElement(m.a,{content:"wallet.use_wallet"})))),r.a.createElement("div",{className:"box small-12 medium-5 large-4 vertical",onClick:this.onSelect.bind(this,"password")},r.a.createElement("div",{className:"block-content-header",style:{position:"relative"}},r.a.createElement(m.a,{content:"wallet.password_model",component:"h4"})),r.a.createElement("div",{className:"box-content"},r.a.createElement(m.a,{content:"wallet.password_model_1",component:"p"}),r.a.createElement(m.a,{content:"wallet.password_model_2",unsafe:!0,component:"p"}),r.a.createElement(m.a,{unsafe:!0,content:"wallet.password_model_3",component:"ul"})),r.a.createElement("div",{className:"button"},r.a.createElement(s.b,{to:"/create-account/password"},r.a.createElement(m.a,{content:"wallet.use_password"}))))))}}]),t}(r.a.Component);t.default=u}});
//# sourceMappingURL=36.js.map