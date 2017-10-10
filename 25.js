webpackJsonp([25],{1207:function(e,t,n){"use strict";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.a.BASE_OL+h.a.COINS_LIST;return fetch(e).then(function(e){return e.json().then(function(e){return e})}).catch(function(t){console.log("error fetching simple list of coins",t,e)})}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h.a.BASE+h.a.DEPOSIT_LIMIT;return fetch(n+"?inputCoinType="+encodeURIComponent(e)+"&outputCoinType="+encodeURIComponent(t),{method:"get",headers:new Headers({Accept:"application/json"})}).then(function(e){return e.json().then(function(e){return e})}).catch(function(n){console.log("error fetching deposit limit of",e,t,n)})}function c(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:h.a.BASE+h.a.ESTIMATE_OUTPUT;return fetch(o+"?inputAmount="+encodeURIComponent(e)+"&inputCoinType="+encodeURIComponent(t)+"&outputCoinType="+encodeURIComponent(n),{method:"get",headers:new Headers({Accept:"application/json"})}).then(function(e){return e.json().then(function(e){return e})}).catch(function(e){console.log("error fetching deposit limit of",t,n,e)})}function i(e){var t=e.inputCoinType,n=e.outputCoinType,o=e.outputAddress,a=e.url,c=void 0===a?h.a.BASE_OL:a,i=e.stateCallback,r={inputCoinType:t,outputCoinType:n,outputAddress:o},s=JSON.stringify(r);fetch(c+"/simple-api/initiate-trade",{method:"post",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:s}).then(function(e){e.json().then(function(e){var t={address:e.inputAddress||"unknown",memo:e.inputMemo,error:e.error||null};i&&i(t)},function(e){i&&i({address:"unknown",memo:null})})},function(e){i&&i({address:"unknown",memo:null})}).catch(function(e){console.log("fetch error:",e)})}function r(e){var t=e.url,n=void 0===t?h.a.BASE:t,o=e.walletType,a=e.newAddress;return a?fetch(n+"/wallets/"+o+"/address-validator?address="+encodeURIComponent(a),{method:"get",headers:new Headers({Accept:"application/json"})}).then(function(e){return e.json().then(function(e){return e.isValid})}).catch(function(e){console.log("validate error:",e)}):new Promise(function(e){return e()})}function s(e){var t=e.input_coin_type,n=e.output_coin_type,o=e.url,a=e.account_name;if(!t||!n)return Promise.reject();var c=JSON.stringify({inputCoinType:t,outputCoinType:n,outputAddress:a,inputMemo:"blocktrades conversion: "+t+"to"+n}),i=o+t+n+a;return new Promise(function(e,t){if(g[i])return e(g[i]);fetch(o+"/simple-api/initiate-trade",{method:"post",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:c}).then(function(n){n.json().then(function(t){g[i]=t,e(t)},t).catch(t)}).catch(t)})}function l(e){return b.has("history_address_"+e)}function u(e){var t=e.wallet,n=e.addresses;b.set("history_address_"+t,n)}function p(e){return b.get("history_address_"+e,[])}function d(e){var t=e.wallet,n=e.address;b.set("history_address_last_"+t,n)}function f(e){return b.get("history_address_last_"+e,"")}t.c=o,t.e=a,t.b=c,t.f=i,t.g=r,t.d=s,n.d(t,"a",function(){return v});var m=n(92),h=n(249),b=new m.a(""),g={},v={has:l,set:u,get:p,setLast:d,getLast:f}},1211:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=n(10),c=n(1207),i=(n(249),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),r={},s=function(){function e(){o(this,e)}return i(e,[{key:"fetchCoins",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.backer,e.url;return{}}},{key:"fetchCoinsSimple",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.backer,n=void 0===t?"RUDEX":t,o=e.url,a=void 0===o?void 0:o;return r["fetchCoinsSimple_"+n]?{}:(r["fetchCoinsSimple_"+n]=!0,function(e){Object(c.c)(a).then(function(t){delete r["fetchCoinsSimple_"+n],e({coins:t,backer:n})})})}},{key:"fetchCoinsSimple",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.backer,n=void 0===t?"RUDEX":t,o=e.url,a=void 0===o?void 0:o;return r["fetchCoinsSimple_"+n]?{}:(r["fetchCoinsSimple_"+n]=!0,function(e){Object(c.c)(a).then(function(t){delete r["fetchCoinsSimple_"+n],e({coins:t,backer:n})})})}},{key:"fetchBridgeCoins",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{}}}]),e}();t.a=a.a.createActions(s)},1224:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=n(27),c=n.n(a),i=n(10),r=n(1211),s=n(92),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=new s.a("__graphene__"),p=function(){function e(){o(this,e),this.backedCoins=c.a.Map(u.get("backedCoins",{})),this.bridgeCoins=c.a.Map(c.a.fromJS(u.get("bridgeCoins",{}))),this.bridgeInputs=["btc","dash","eth","steem"],this.bindListeners({onFetchCoins:r.a.fetchCoins,onFetchCoinsSimple:r.a.fetchCoinsSimple,onFetchBridgeCoins:r.a.fetchBridgeCoins})}return l(e,[{key:"onFetchCoins",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.backer,n=e.coins,o=e.backedCoins;t&&n&&(this.backedCoins=this.backedCoins.set(t,o),u.set("backedCoins",this.backedCoins.toJS()))}},{key:"onFetchCoinsSimple",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.backer,n=e.coins;t&&n&&(this.backedCoins=this.backedCoins.set(t,n),u.set("backedCoins",this.backedCoins.toJS()))}},{key:"onFetchBridgeCoins",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.coins,o=t.bridgeCoins,a=t.wallets;if(n&&o){var i={};n.forEach(function(e){return i[e.coinType]=e}),o=o.filter(function(t){return t&&i[t.outputCoinType]&&-1!==a.indexOf(i[t.outputCoinType].walletType)&&"bitshares2"===i[t.outputCoinType].walletType&&-1!==e.bridgeInputs.indexOf(t.inputCoinType)}).forEach(function(t){e.bridgeCoins=e.bridgeCoins.setIn([i[t.outputCoinType].walletSymbol,t.inputCoinType],c.a.fromJS(t))}),u.set("bridgeCoins",this.bridgeCoins.toJS())}}}]),e}();t.a=i.a.createStore(p,"GatewayStore")},1243:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),r=n.n(i),s=n(253),l=n(19),u=n(41),p=n(42),d=n(20),f=n.n(d),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=e.account,n=e.image_size,o=l.a.get_object_id(t.get("id")),a=t.get("lifetime_referrer_name")===t.get("name");return r.a.createElement("div",{className:"account-info"+(this.props.my_account?" my-account":"")},this.props.title?r.a.createElement("h4",null,this.props.title):null,r.a.createElement(s.a,{size:n,account:t.get("name"),custom_image:null}),r.a.createElement("h4",{className:"account-title"},r.a.createElement("span",{className:a?"lifetime":""},t.get("name"))),r.a.createElement("div",{className:"secondary"},r.a.createElement("span",{className:"subheader"},"#",o),this.props.my_account?r.a.createElement("span",{className:"my-account-label"},r.a.createElement(f.a,{content:"account.mine"})):null))}}]),t}(r.a.Component);h.propTypes={account:u.a.ChainAccount.isRequired,title:r.a.PropTypes.string,image_size:r.a.PropTypes.object.isRequired,my_account:r.a.PropTypes.bool},h.defaultProps={title:null,image_size:{height:120,width:120}},t.a=Object(p.a)(h)},1287:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=n.n(l),p=n(124),d=n(76),f=n(50),m=n(130),h=n(1224),b=n(35),g=n(21),v=n.n(g),y=n(127),_=n.n(y),C=(n(75),n(1243)),w=n(20),E=n.n(w),k=n(43),A=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),S=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.last_path=null,n.state={showAdvanced:e.viewSettings.get("showAdvanced",!1)},n}return c(t,e),A(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=this.last_path!==window.location.hash;return this.last_path=window.location.hash,n||this.props.account!==e.account||this.props.linkedAccounts!==e.linkedAccounts||t.showAdvanced!==this.state.showAdvanced}},{key:"componentWillUnmount",value:function(){_.a.hide()}},{key:"onLinkAccount",value:function(e){e.preventDefault(),p.a.linkAccount(this.props.account.get("name"))}},{key:"onUnlinkAccount",value:function(e){e.preventDefault(),p.a.unlinkAccount(this.props.account.get("name"))}},{key:"_toggleAdvanced",value:function(e){e.preventDefault();var t=!this.state.showAdvanced;this.setState({showAdvanced:t}),k.a.changeViewSetting({showAdvanced:t})}},{key:"render",value:function(){var e=this.props,t=e.account,n=e.linkedAccounts,o=e.isMyAccount,a=t.get("name"),c=null;c=o?null:n.has(a)?u.a.createElement("a",{style:{marginBottom:"1rem",marginRight:0},href:!0,className:"button outline block-button",onClick:this.onUnlinkAccount.bind(this)},u.a.createElement(E.a,{content:"account.unfollow"})):u.a.createElement("a",{style:{marginBottom:"1rem",marginRight:0},href:!0,className:"button outline block-button",onClick:this.onLinkAccount.bind(this)},u.a.createElement(E.a,{content:"account.follow"}));var i=(v.a.translate("header.settings"),this.state.showAdvanced?u.a.createElement("span",null,"▼"):u.a.createElement("span",null,"▲"));return u.a.createElement("div",{className:"grid-block vertical account-left-panel no-padding no-overflow"},u.a.createElement("div",{className:"grid-block"},u.a.createElement("div",{className:"grid-content no-padding",style:{overflowX:"hidden"}},u.a.createElement("div",{className:"regular-padding"},u.a.createElement(C.a,{account:t.get("id"),image_size:{height:140,width:140},my_account:o}),u.a.createElement("div",{className:"grid-container no-margin"},c,u.a.createElement(b.b,{className:"pay-button button small block-button",to:"/transfer/?to="+a},u.a.createElement(E.a,{content:"account.pay"})))),u.a.createElement("section",{className:"block-list"},u.a.createElement("ul",{className:"account-left-menu",style:{marginBottom:0}},u.a.createElement("li",null,u.a.createElement(b.b,{to:"/account/"+a+"/overview/",activeClassName:"active"},u.a.createElement(E.a,{content:"account.overview"}))),u.a.createElement("li",null,u.a.createElement(b.b,{to:"/account/"+a+"/member-stats/",activeClassName:"active"},u.a.createElement(E.a,{content:"account.member.stats"}))),u.a.createElement("li",null,u.a.createElement(b.b,{to:"/account/"+a+"/orders/",activeClassName:"active"},u.a.createElement(E.a,{content:"account.open_orders"}))),u.a.createElement("li",null,u.a.createElement(b.b,{to:"/account/"+a+"/voting/",activeClassName:"active"},u.a.createElement(E.a,{content:"account.voting"}))))),u.a.createElement("div",{style:{paddingBottom:10,paddingTop:20}},u.a.createElement("div",{className:"grid-container no-margin advanced-toggle"},u.a.createElement("a",{onClick:this._toggleAdvanced.bind(this),className:"button outline small block-button",style:{border:"none",textAlign:"left",paddingLeft:"1.75rem"}},u.a.createElement(E.a,{content:"account.user_issued_assets.advanced"}),u.a.createElement("span",null,"  ",i)))),u.a.createElement("section",{className:"block-list"},this.state.showAdvanced?u.a.createElement("ul",{className:"account-left-menu"},u.a.createElement("li",null,u.a.createElement(b.b,{to:"/account/"+a+"/assets/",activeClassName:"active"},u.a.createElement(E.a,{content:"account.user_issued_assets.issued_assets"}))),u.a.createElement("li",null,u.a.createElement(b.b,{to:"/account/"+a+"/permissions/",activeClassName:"active"},u.a.createElement(E.a,{content:"account.permissions"}))),u.a.createElement("li",null,u.a.createElement(b.b,{to:"/account/"+a+"/whitelist/",activeClassName:"active"},u.a.createElement(E.a,{content:"account.whitelist.title"}))),o?u.a.createElement("li",null,u.a.createElement(b.b,{to:"/account/"+a+"/vesting/",activeClassName:"active"},u.a.createElement(E.a,{content:"account.vesting.title"}))):null):null),o?u.a.createElement("div",{className:"regular-padding"},u.a.createElement("div",{className:"button block-button create-account-button"},u.a.createElement(b.b,{to:"/create-account/"+(this.props.passwordLogin?"password":"wallet")},u.a.createElement(E.a,{content:"account.create_new"})))):null)))}}]),t}(u.a.Component);S.propTypes={account:u.a.PropTypes.object.isRequired,linkedAccounts:l.PropTypes.object};var j=S,T=n(41),O=n(42),N=n(66),P=n(169),R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},I=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),U=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),I(t,[{key:"componentDidMount",value:function(){this.props.account&&d.a.isMyAccount(this.props.account)&&p.a.setCurrentAccount.defer(this.props.account.get("name")),P.a.getPossibleFees(this.props.account,"transfer")}},{key:"render",value:function(){var e=this.props,t=e.myAccounts,n=e.linkedAccounts,o=e.account_name,a=e.searchAccounts,c=e.settings,i=e.wallet_locked,r=e.account,s=e.hiddenAssets,l=d.a.isMyAccount(r);return u.a.createElement("div",{className:"grid-block page-layout"},u.a.createElement("div",{className:"show-for-medium grid-block shrink left-column no-padding",style:{minWidth:250}},u.a.createElement(j,{account:r,isMyAccount:l,linkedAccounts:n,myAccounts:t,viewSettings:this.props.viewSettings,passwordLogin:c.get("passwordLogin")})),u.a.createElement("div",{className:"grid-block main-content"},u.a.createElement("div",{className:"grid-container"},u.a.cloneElement(u.a.Children.only(this.props.children),{account_name:o,linkedAccounts:n,searchAccounts:a,settings:c,wallet_locked:i,account:r,isMyAccount:l,hiddenAssets:s,contained:!0,balances:r.get("balances",null),orders:r.get("orders",null),backedCoins:this.props.backedCoins,bridgeCoins:this.props.bridgeCoins}))))}}]),t}(u.a.Component);U.propTypes={account:T.a.ChainAccount.isRequired},U.defaultProps={account:"props.params.account_name"},U=Object(O.a)(U,{keep_updating:!0,show_loader:!0});var B=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),I(t,[{key:"render",value:function(){var e=this.props.routeParams.account_name;return u.a.createElement(U,R({},this.props,{account_name:e}))}}]),t}(u.a.Component);t.default=Object(N.connect)(B,{listenTo:function(){return[d.a,f.a,m.a,h.a]},getProps:function(){return{linkedAccounts:d.a.getState().linkedAccounts,searchAccounts:d.a.getState().searchAccounts,settings:f.a.getState().settings,hiddenAssets:f.a.getState().hiddenAssets,wallet_locked:m.a.getState().locked,myAccounts:d.a.getState().myAccounts,viewSettings:f.a.getState().viewSettings,backedCoins:h.a.getState().backedCoins,bridgeCoins:h.a.getState().bridgeCoins}}})}});
//# sourceMappingURL=25.js.map