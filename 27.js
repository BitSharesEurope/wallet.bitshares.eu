webpackJsonp([27],{1198:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return y}),n.d(t,"a",function(){return g});var i=n(1),c=n.n(i),l=n(22),u=n.n(l),p=n(48),m=n.n(p),d=n(75),h=(n.n(d),n(57)),f=n(49),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,o=e.title,r=m()({"is-active":t});return c.a.createElement("li",{className:r,onClick:a.bind(this,n)},c.a.createElement("a",null,o.indexOf(".")>0?c.a.createElement(u.a,{content:o}):o))}}]),t}(c.a.Component);g.propTypes={title:i.PropTypes.string.isRequired,changeTab:i.PropTypes.func,isActive:i.PropTypes.bool.isRequired,index:i.PropTypes.number.isRequired},g.defaultProps={isActive:!1,index:0};var y=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab},n}return s(t,e),b(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"_changeTab",value:function(e){this.props.setting&&h.a.changeViewSetting(a({},this.props.setting,e)),this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,o=t.tabsClass,r=t.style,s=null,i=[],l=c.a.Children.map(n,function(t,n){if(!t)return null;var a=n===e.state.activeTab;return a&&(s=t.props.children),c.a.cloneElement(t,{isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&i.push(e.props.index),null!==e});return s||(s=l[0].props.children),c.a.createElement("div",{className:this.props.className},c.a.createElement("div",{className:"service-selector"},c.a.createElement("ul",{style:r,className:m()("button-group segmented no-margin",o)},l)),c.a.createElement("div",{className:a},s))}}]),t}(c.a.Component);y.propTypes={setting:i.PropTypes.string,defaultActiveTab:i.PropTypes.number},y.defaultProps={active:0,defaultActiveTab:0},y=Object(d.connect)(y,{listenTo:function(){return[f.a]},getProps:function(){return{viewSettings:f.a.getState().viewSettings}}})},1211:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return k}),n.d(t,"a",function(){return O});var s=n(1),i=n.n(s),c=n(107),l=n(40),u=n(41),p=n(19),m=n(254),d=n(7),h=n(75),f=(n.n(h),n(386)),b=n(22),g=n.n(b),y=n(23),v=n.n(y),_=n(128),E=n.n(_),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),x=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.fromStatsInterval=null,e.toStatsInterval=null,e}return r(t,e),w(t,[{key:"componentWillMount",value:function(){var e=this,t=d.b.getAsset("1.3.0");t&&(this.props.fromAsset.get("id")!==t.get("id")&&(m.a.getMarketStats(t,this.props.fromAsset),this.fromStatsInterval=setInterval(m.a.getMarketStats.bind(this,t,this.props.fromAsset),3e5)),this.props.toAsset.get("id")!==t.get("id")&&(m.a.getMarketStats.defer(t,this.props.toAsset),this.toStatsInterval=setInterval(function(){m.a.getMarketStats.defer(t,e.props.toAsset)},3e5)))}},{key:"componentWillUnmount",value:function(){clearInterval(this.fromStatsInterval),clearInterval(this.toStatsInterval)}},{key:"componentDidMount",value:function(){E.a.rebuild()}},{key:"getValue",value:function(){var e=this.props,t=e.amount,n=e.toAsset,a=e.fromAsset,o=e.fullPrecision,r=e.marketStats,s=d.b.getAsset("1.3.0"),i=void 0,c=void 0,l=n.get("id"),u=n.get("symbol"),m=a.get("id"),h=a.get("symbol");if(o||(t=p.a.get_asset_amount(t,a)),s&&r){var f=s.get("symbol");i=r.get(u+"_"+f),c=r.get(h+"_"+f)}var b=p.a.convertPrice(c&&c.close?c.close:a,i&&i.close?i.close:n,m,l);return p.a.convertValue(b,t,a,n)}},{key:"render",value:function(){var e=this.props,t=e.amount,n=e.toAsset,a=e.fromAsset,o=e.fullPrecision,r=e.marketStats,s=d.b.getAsset("1.3.0"),l=void 0,u=void 0,m=n.get("id"),h=n.get("symbol"),f=a.get("id"),b=a.get("symbol");if(o||(t=p.a.get_asset_amount(t,a)),s&&r){var y=s.get("symbol");l=r.get(h+"_"+y),u=r.get(b+"_"+y)}var _=p.a.convertPrice(u&&u.close?u.close:"1.3.0"===f||a.has("bitasset")?a:null,l&&l.close?l.close:"1.3.0"===m||n.has("bitasset")?n:null,f,m),E=_?p.a.convertValue(_,t,a,n):null;return E||0===E?i.a.createElement(c.a,{noPrefix:!0,amount:E,asset:m,decimalOffset:-1!==h.indexOf("BTC")?4:this.props.noDecimals?n.get("precision"):0}):i.a.createElement("div",{className:"tooltip inline-block","data-place":"bottom","data-tip":v.a.translate("tooltip.no_price"),style:{fontSize:"0.9rem"}},i.a.createElement(g.a,{content:"account.no_price"}))}}]),t}(i.a.Component);x.propTypes={toAsset:l.a.ChainAsset.isRequired,fromAsset:l.a.ChainAsset.isRequired},x.defaultProps={toAsset:"1.3.0",fullPrecision:!0,noDecimals:!1},x=Object(u.a)(x,{keep_updating:!0});var k=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),w(t,[{key:"render",value:function(){return i.a.createElement(x,this.props)}}]),t}(i.a.Component);k=Object(h.connect)(k,{listenTo:function(){return[f.a]},getProps:function(){return{marketStats:f.a.getState().allMarketStats}}});var O=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),w(t,[{key:"render",value:function(){var e=Number(this.props.balance.get("balance")),t=this.props.balance.get("asset_type");return i.a.createElement(k,{amount:e,fromAsset:t,noDecimals:!0,toAsset:this.props.toAsset})}}]),t}(i.a.Component);O.propTypes={balance:l.a.ChainObject.isRequired},O=Object(u.a)(O,{keep_updating:!0})},1283:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function f(e,t){var n="",a=0,o=void 0;return"witness"===e?o=I.b.getWitnessById(t.get("id")):"committee"===e&&(o=I.b.getCommitteeMemberById(t.get("id"))),n=o?o.get("url"):n,a=o?o.get("total_votes"):a,{url:n,votes:a}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var v=n(1),_=n.n(v),E=n(27),w=n.n(E),x=n(22),k=n.n(x),O=n(23),P=n.n(O),A=n(171),j=n(253),C=n(35),I=n(7),T=n(19),S=n(40),R=n(107),N=n(41),V=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),D=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),V(t,[{key:"render",value:function(){var e=Number(this.props.balance.getIn(["balance","amount"])),t=this.props.balance.getIn(["balance","asset_id"]);return _.a.createElement(R.a,{amount:e,asset:t,decimalOffset:this.props.decimalOffset||0})}}]),t}(_.a.Component);D.propTypes={balance:S.a.ChainObject.isRequired};var W=Object(N.a)(D,{keep_updating:!0}),B=n(129),q=n(1211),M=n(76),U=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),z=function(e){function t(e){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return c(t,e),U(t,[{key:"onApprove",value:function(){var e=[],t=[];this.props.vote_ids.has(this.props.worker.get("vote_against"))&&t.push(this.props.worker.get("vote_against")),this.props.vote_ids.has(this.props.worker.get("vote_for"))||e.push(this.props.worker.get("vote_for")),this.props.onChangeVotes(e,t)}},{key:"onReject",value:function(){var e=[],t=[];this.props.vote_ids.has(this.props.worker.get("vote_against"))&&t.push(this.props.worker.get("vote_against")),this.props.vote_ids.has(this.props.worker.get("vote_for"))&&t.push(this.props.worker.get("vote_for")),this.props.onChangeVotes(e,t)}},{key:"render",value:function(){var e=this.props.rank,t=this.props.worker.toJS(),n=t.total_votes_for-t.total_votes_against,a=!!this.props.vote_ids.has(t.vote_for)||!this.props.vote_ids.has(t.vote_against)&&null,o=null;!0===a&&(o=_.a.createElement(M.a,{name:"checkmark"}));var r=t.url?t.url.replace(/http:\/\/|https:\/\//,""):"";r.length>25&&(r=r.substr(0,25)+"...");var s=0;t.daily_pay<this.props.rest?s=100:this.props.rest>0&&(s=this.props.rest/t.daily_pay*100);var i=P.a.localize(new Date(t.work_begin_date),{type:"date"}),c=P.a.localize(new Date(t.work_end_date),{type:"date"}),l=new Date,u=new Date(t.work_end_date)<=l;return _.a.createElement("tr",null,u?null:_.a.createElement("td",{style:{backgroundColor:s>0?"green":"orange"}},"#",e),_.a.createElement("td",{colSpan:u?"2":"1"},_.a.createElement("div",null,t.name),_.a.createElement("div",{style:{paddingTop:5,fontSize:"0.85rem"}},i," - ",c)),_.a.createElement("td",{className:"hide-column-small"},_.a.createElement("div",null,_.a.createElement(B.a,{account:t.worker_account})),_.a.createElement("div",{style:{paddingTop:5,fontSize:"0.85rem"}},_.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.url},r)," ")),_.a.createElement("td",{className:"hide-column-small"},_.a.createElement(R.a,{amount:n,asset:"1.3.0",decimalOffset:5})),_.a.createElement("td",{className:"hide-column-small"},_.a.createElement(R.a,{amount:t.daily_pay,asset:"1.3.0",decimalOffset:5}),"1.3.0"!==this.props.preferredUnit?_.a.createElement("div",{style:{paddingTop:5}},"(",_.a.createElement(q.b,{fromAsset:"1.3.0",toAsset:this.props.preferredUnit,amount:t.daily_pay}),")"):null),_.a.createElement("td",{className:"hide-column-large"},t.worker[1].balance?_.a.createElement(W,{balance:t.worker[1].balance,decimalOffset:5}):t.worker[1].total_burned?_.a.createElement("span",null,"(",_.a.createElement(R.a,{amount:t.worker[1].total_burned,asset:"1.3.0",decimalOffset:5}),")"):null),_.a.createElement("td",{className:"hide-column-small"},T.a.format_number(s,2),"%"),_.a.createElement("td",{style:{textAlign:"right"}},!0!==a?_.a.createElement("button",{className:"button outline small success",onClick:this.onApprove.bind(this)},"+"):_.a.createElement("button",{className:"button outline small info",onClick:this.onReject.bind(this)},"-")),_.a.createElement("td",{style:{padding:0,textAlign:"center",backgroundColor:!0===a?"green":!1===a?"red":"transparent"}},o))}}]),t}(_.a.Component);z.propTypes={worker:S.a.ChainObject.isRequired,onAddVote:_.a.PropTypes.func,onRemoveVote:_.a.PropTypes.func,vote_ids:_.a.PropTypes.object},z.defaultProps={tempComponent:"tr"};var L=Object(N.a)(z),F=n(42),G=n(388),J=n(256),H=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),K=function(e){function t(e){l(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a="1.2.5"===e.existingProxy.get("id")?"":e.existingProxy.get("name");return n.state={current_proxy_input:a,new_proxy_account:null},n.onProxyChange=n.onProxyChange.bind(n),n.onProxyAccountChange=n.onProxyAccountChange.bind(n),n}return p(t,e),H(t,[{key:"componentWillReceiveProps",value:function(e){this.state.current_proxy_input||this.setState({current_proxy_input:e.proxyAccount?e.proxyAccount.get("name"):""})}},{key:"componentWillUpdate",value:function(e){var t=e.existingProxy.get("name");t!==this.props.existingProxy.get("name")&&("proxy-to-self"===t?this.setState({current_proxy_input:"",new_proxy_account:null}):this.setState({current_proxy_input:t,new_proxy_account:null}))}},{key:"onResetProxy",value:function(){var e="1.2.5"===this.props.existingProxy.get("id")?"":this.props.existingProxy.get("name");this.setState({current_proxy_input:e,new_proxy_account:null})}},{key:"clearProxy",value:function(){this.setState({current_proxy_input:"",new_proxy_account:null}),this.props.onClearProxy&&this.props.onClearProxy()}},{key:"onProxyChange",value:function(e){this.setState({current_proxy_input:e})}},{key:"onProxyAccountChange",value:function(e){var t=this;this.setState({new_proxy_account:e},function(){e&&t.props.account.get("id")===e.get("id")||t.props.onProxyAccountChanged(e)})}},{key:"_onNavigate",value:function(e){this.context.router.push(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.knownProxies,a=t.existingProxy,o=a&&a.get("name")===this.state.current_proxy_input,r=null;this.state.new_proxy_account&&this.props.account.get("id")===this.state.new_proxy_account.get("id")&&(r="cannot proxy to yourself");var s=this.props.proxyAccount&&this.props.proxyAccount.get("name"),i=n.filter(function(t){return!!t&&(t.get("name")!==e.props.account.get("name")&&t.get("name")!==s)}).sort(function(e,t){return e.get("name")>t.get("name")?1:e.get("name")<t.get("name")?-1:0}).map(function(t){return _.a.createElement("tr",{key:t.get("id")},_.a.createElement("td",null,_.a.createElement(J.a,{size:{height:30,width:30},account:t.get("name"),custom_image:null})),_.a.createElement("td",null,_.a.createElement(F.b,{to:"/account/"+t.get("name")},t.get("name"))),_.a.createElement("td",{className:"text-right"},_.a.createElement("button",{className:"button",onClick:e.onProxyChange.bind(e,t.get("name"))},"Set")))});return _.a.createElement("div",{className:"content-block",style:{maxWidth:"600px"}},o?null:_.a.createElement(k.a,{component:"h3",content:"account.votes.proxy_short"}),o?_.a.createElement("div",null,_.a.createElement("p",null,_.a.createElement(k.a,{content:"account.votes.proxy_current"}),":  ",_.a.createElement(F.b,{to:"account/"+a.get("name")},a.get("name"))),_.a.createElement("div",null,_.a.createElement("button",{className:"button outline",onClick:this.clearProxy.bind(this),tabIndex:8},_.a.createElement(k.a,{content:"account.votes.clear_proxy"})))):_.a.createElement(G.a,{label:"account.votes.proxy",error:r,account:this.state.current_proxy_input,accountName:this.state.current_proxy_input,onChange:this.onProxyChange,onAccountChanged:this.onProxyAccountChange,tabIndex:1,size:60}),!o&&n.length?_.a.createElement("div",{style:{paddingTop:20}},_.a.createElement(k.a,{component:"h5",content:"account.votes.proxy_known"}),_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,i))):null,this.props.children)}}]),t}(_.a.Component);K.propTypes={existingProxy:S.a.ChainAccount.isRequired,account:_.a.PropTypes.object.isRequired,onProxyAccountChanged:_.a.PropTypes.func.isRequired,knownProxies:S.a.ChainAccountsList},K.defaultProps={knownProxies:Object(E.List)(["xeroc","baozi","bitcrab","laomao","bitshares-munich-wallet","abit","dahu","bts1988","harvey","fav","jonnybitcoin","bitsharesblocks","customminer"]),existingProxy:"1.2.5",autosubscribe:!1},K.contextTypes={router:_.a.PropTypes.object.isRequired};var Q=Object(N.a)(K),X=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Y=function(e){function t(){return m(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,e),X(t,[{key:"shouldComponentUpdate",value:function(e){return e.account!==this.props.account}},{key:"onAction",value:function(e){this.props.onAction(e)}},{key:"render",value:function(){var e=this.props,t=e.account,n=e.type,a=t.get("name"),o=t.get("id"),r=f(n,t),s=r.url,i=r.votes,c=s&&s.length>0&&-1===s.indexOf("http")?"http://"+s:s;return _.a.createElement("tr",null,_.a.createElement("td",null,_.a.createElement(J.a,{size:{height:30,width:30},account:a})),_.a.createElement("td",null,_.a.createElement(B.a,{account:t.get("id")})),_.a.createElement("td",null,_.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},s.length<45?s:s.substr(0,45)+"...")),_.a.createElement("td",null,_.a.createElement(R.a,{amount:i,asset:"1.3.0",decimalOffset:5})),_.a.createElement("td",null,_.a.createElement("button",{className:"button outline",onClick:this.onAction.bind(this,o)},_.a.createElement(k.a,{content:"account.votes."+this.props.action+"_witness"}))))}}]),t}(_.a.Component);Y.propTypes={account:_.a.PropTypes.object.isRequired,onAction:_.a.PropTypes.func.isRequired};var Z=function(e){function t(e){m(this,t);var n=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selected_item:null,item_name_input:"",error:null},n.onItemChange=n.onItemChange.bind(n),n.onItemAccountChange=n.onItemAccountChange.bind(n),n.onAddItem=n.onAddItem.bind(n),n}return h(t,e),X(t,[{key:"onItemChange",value:function(e){this.setState({item_name_input:e})}},{key:"onItemAccountChange",value:function(e){var t=this;if(this.setState({selected_item:e,error:null}),e&&this.props.validateAccount){var n=this.props.validateAccount(e);if(null===n)return;"string"==typeof n?this.setState({error:n}):n.then(function(e){return t.setState({error:e})})}}},{key:"onAddItem",value:function(e){if(e){var t={selected_item:null,item_name_input:"",error:null};this.setState(t),this.props.onAddItem(e.get("id"))}}},{key:"render",value:function(){var e=this;if(!this.props.items)return null;var t=this.props.items.filter(function(e){return!!e}).sort(function(t,n){var a=f(e.props.type,t),o=a.votes,r=f(e.props.type,n),s=r.votes;return o!==s?s-o:t.get("name")>n.get("name")?1:t.get("name")<n.get("name")?-1:0}).map(function(t){return _.a.createElement(Y,{key:t.get("name"),account:t,type:e.props.type,onAction:"add"===e.props.action?e.props.onAddItem:e.props.onRemoveItem,isSelected:-1!==e.props.items.indexOf(t),action:e.props.action})}),n=this.state.error;!n&&this.state.selected_item&&-1!==this.props.items.indexOf(this.state.selected_item)&&(n=P.a.translate("account.votes.already"));var a=["10%","20%","40%","20%","10%"];return _.a.createElement("div",null,this.props.withSelector?_.a.createElement(G.a,{style:{maxWidth:"600px"},label:this.props.label,error:n,placeholder:this.props.placeholder,account:this.state.item_name_input,accountName:this.state.item_name_input,onChange:this.onItemChange,onAccountChanged:this.onItemAccountChange,onAction:this.onAddItem,action_label:"account.votes.add_witness",tabIndex:this.props.tabIndex}):null,this.props.title&&t.length?_.a.createElement("h4",null,this.props.title):null,t.length?_.a.createElement("table",{className:"table"},_.a.createElement("thead",null,_.a.createElement("tr",null,_.a.createElement("th",{style:{width:a[0]}}),_.a.createElement("th",{style:{width:a[1]}},_.a.createElement(k.a,{content:"account.votes.name"})),_.a.createElement("th",{style:{width:a[2]}},_.a.createElement(k.a,{content:"account.votes.url"})),_.a.createElement("th",{style:{width:a[3]}},_.a.createElement(k.a,{content:"account.votes.votes"})),_.a.createElement("th",{style:{width:a[4]}},_.a.createElement(k.a,{content:"account.perm.action"})))),_.a.createElement("tbody",null,t)):null)}}]),t}(_.a.Component);Z.propTypes={items:S.a.ChainObjectsList,onAddItem:_.a.PropTypes.func.isRequired,onRemoveItem:_.a.PropTypes.func.isRequired,validateAccount:_.a.PropTypes.func,label:_.a.PropTypes.string.isRequired,placeholder:_.a.PropTypes.string,tabIndex:_.a.PropTypes.number,action:_.a.PropTypes.string,withSelector:_.a.PropTypes.bool},Z.defaultProps={action:"remove",withSelector:!0,autosubscribe:!1};var $=Object(N.a)(Z,{keep_updating:!0}),ee=n(382),te=n(48),ne=n.n(te),ae=n(1198),oe=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),re=new j.a,se=function(e){function t(e){b(this,t);var n=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={proxy_account_id:"",witnesses:null,committee:null,vote_ids:w.a.Set(),lastBudgetObject:null,showExpired:!1},n.onProxyAccountChange=n.onProxyAccountChange.bind(n),n.onPublish=n.onPublish.bind(n),n.onReset=n.onReset.bind(n),n._onUpdate=n._onUpdate.bind(n),n}return y(t,e),oe(t,[{key:"componentWillUnmount",value:function(){I.b.unsubscribe(this._onUpdate)}},{key:"_onUpdate",value:function(){this.forceUpdate()}},{key:"updateAccountData",value:function(e){var t=this,n=e.get("options"),a=n.get("voting_account");"1.2.5"===a&&(a="");var o=n.get("votes"),r=o.toArray(),s=w.a.Set(r);I.b.getObjectsByVoteIds(r),Object(I.g)(I.b.getObjectByVoteID,r,5e3).then(function(e){var n=new w.a.List,o=new w.a.List,r=new w.a.Set;e.forEach(function(e){var t=e.get("committee_member_account");t?o=o.push(t):(t=e.get("worker_account"))||(t=e.get("witness_account"))&&(n=n.push(t))});var i={proxy_account_id:a,witnesses:n,committee:o,workers:r,vote_ids:s,prev_proxy_account_id:a,prev_witnesses:n,prev_committee:o,prev_workers:r,prev_vote_ids:s};t.setState(i)})}},{key:"isChanged",value:function(){var e=this.state;return e.proxy_account_id!==e.prev_proxy_account_id||e.witnesses!==e.prev_witnesses||e.committee!==e.prev_committee||!w.a.is(e.vote_ids,e.prev_vote_ids)}},{key:"componentWillMount",value:function(){this.updateAccountData(this.props.account),A.a.getFinalFeeAsset(this.props.account,"account_update"),this.getBudgetObject(),I.b.subscribe(this._onUpdate)}},{key:"componentDidMount",value:function(){this.getBudgetObject()}},{key:"componentWillReceiveProps",value:function(e){e.account!==this.props.account&&this.updateAccountData(e.account),this.getBudgetObject()}},{key:"onPublish",value:function(){function e(e,t){return e.includes(t)&&(e=e.delete(t)),e}var t=this,n=this.props.account.toJS(),a={account:n.id},o={memo_key:n.options.memo_key},r=this.state.proxy_account_id;o.voting_account=r||"1.2.5",o.num_witness=this.state.witnesses.size,o.num_committee=this.state.committee.size,a.new_options=o,a.fee={amount:0,asset_id:A.a.getFinalFeeAsset(n.id,"account_update")};var s=this.state.vote_ids,i=this._getWorkerArray(),c=new Date;i.forEach(function(t){t&&(new Date(t.get("work_end_date"))<=c&&(s=e(s,t.get("vote_for"))),s=e(s,t.get("vote_against")))}),Object(I.g)(I.b.getWitnessById,this.state.witnesses.toArray(),4e3).then(function(e){var n=e.map(function(e){return e.get("vote_id")});return Promise.all([Promise.resolve(n),Object(I.g)(I.b.getCommitteeMemberById,t.state.committee.toArray(),4e3)])}).then(function(e){a.new_options.votes=e[0].concat(e[1].map(function(e){return e.get("vote_id")})).concat(s.filter(function(e){return"2"===e.split(":")[0]}).toArray()).sort(function(e,t){var n=e.split(":"),a=t.split(":");return parseInt(n[1],10)-parseInt(a[1],10)});var t=re.new_transaction();t.add_type_operation("account_update",a),C.a.process_transaction(t,null,!0)})}},{key:"onReset",value:function(){var e=this,t=this.state;this.refs.voting_proxy&&this.refs.voting_proxy.refs.bound_component&&this.refs.voting_proxy.refs.bound_component.onResetProxy(),this.setState({proxy_account_id:t.prev_proxy_account_id,witnesses:t.prev_witnesses,committee:t.prev_committee,workers:t.prev_workers,vote_ids:t.prev_vote_ids},function(){e.updateAccountData(e.props.account)})}},{key:"onAddItem",value:function(e,t){var n={};n[e]=this.state[e].push(t),this.setState(n)}},{key:"onRemoveItem",value:function(e,t){var n={};n[e]=this.state[e].filter(function(e){return e!==t}),this.setState(n)}},{key:"onChangeVotes",value:function(e,t){var n={};n.vote_ids=this.state.vote_ids,e.length&&e.forEach(function(e){n.vote_ids=n.vote_ids.add(e)}),t&&t.forEach(function(e){n.vote_ids=n.vote_ids.delete(e)}),this.setState(n)}},{key:"onProxyAccountChange",value:function(e){this.setState({proxy_account_id:e?e.get("id"):""})}},{key:"validateAccount",value:function(e,t){return t?"witnesses"===e?Object(I.g)(I.b.getWitnessById,[t.get("id")],3e3).then(function(e){return e[0]?null:"Not a witness"}):"committee"===e?Object(I.g)(I.b.getCommitteeMemberById,[t.get("id")],3e3).then(function(e){return e[0]?null:"Not a committee member"}):null:null}},{key:"onClearProxy",value:function(){this.setState({proxy_account_id:""})}},{key:"_getTotalVotes",value:function(e){return parseInt(e.get("total_votes_for"),10)-parseInt(e.get("total_votes_against"),10)}},{key:"getBudgetObject",value:function(){var e=this.state.lastBudgetObject,t=void 0;if(t=I.b.getObject(e||"2.13.1")){var n=t.get("time"),a=new Date,o=parseInt(t.get("id").split(".")[2],10),r=o+Math.floor((a-new Date(n+"+00:00").getTime())/1e3/60/60)-1,s="2.13."+Math.max(o,r);I.b.getObject(s),this.setState({lastBudgetObject:s}),s!==r&&this.forceUpdate()}else if("2.13.1"!==e){var i=parseInt(e.split(".")[2],10)-1;this.setState({lastBudgetObject:"2.13."+(i-1)})}}},{key:"_toggleExpired",value:function(){this.setState({showExpired:!this.state.showExpired})}},{key:"_getWorkerArray",value:function(){for(var e=[],t=0;t<100;t++){var n="1.14."+t,a=I.b.getObject(n,!1,!1);if(null===a)break;e.push(a)}return e}},{key:"render",value:function(){var e=this,t=this.props.settings.get("unit")||"1.3.0",n="1.2.5"!==this.props.account.getIn(["options","voting_account"]),a=ne()("button",{disabled:!this.isChanged()}),o=this.props,r=o.globalObject,s=(o.dynamicGlobal,this.state.showExpired),i=void 0;this.state.lastBudgetObject&&(i=I.b.getObject(this.state.lastBudgetObject));var c=0,l=0,u=r?parseInt(r.getIn(["parameters","worker_budget_per_day"]),10):0;i&&(u=Math.min(24*i.getIn(["record","worker_budget"]),u),c=Math.min(24*i.getIn(["record","worker_budget"]),u));var p=(r&&parseInt(r.getIn(["parameters","worker_budget_per_day"]),10),new Date),m=this._getWorkerArray(),d=m.filter(function(e){return!!e&&(new Date(e.get("work_end_date"))>p&&new Date(e.get("work_begin_date"))<=p)}).sort(function(t,n){return e._getTotalVotes(n)-e._getTotalVotes(t)}).map(function(n,a){var o=parseInt(n.get("daily_pay"),10);return u-=o,_.a.createElement(L,{preferredUnit:t,rest:u+o,rank:a+1,key:n.get("id"),worker:n.get("id"),vote_ids:e.state.vote_ids,onChangeVotes:e.onChangeVotes.bind(e)})});l=Math.max(0,u);var h=m.filter(function(e){return!!e&&new Date(e.get("work_begin_date"))>=p}).sort(function(t,n){return e._getTotalVotes(n)-e._getTotalVotes(t)}).map(function(n,a){var o=parseInt(n.get("daily_pay"),10);return u-=o,_.a.createElement(L,{preferredUnit:t,rest:u+o,rank:a+1,key:n.get("id"),worker:n.get("id"),vote_ids:e.state.vote_ids,onChangeVotes:e.onChangeVotes.bind(e)})}),f=m.filter(function(e){return!!e&&new Date(e.get("work_end_date"))<=p}).sort(function(t,n){return e._getTotalVotes(n)-e._getTotalVotes(t)}).map(function(n,a){var o=parseInt(n.get("daily_pay"),10);return u-=o,_.a.createElement(L,{preferredUnit:t,rest:u+o,rank:a+1,key:n.get("id"),worker:n.get("id"),vote_ids:e.state.vote_ids,onChangeVotes:e.onChangeVotes.bind(e)})}),b=r.get("active_witnesses").map(function(t){var n=I.b.getObject(t);return n&&e.state.witnesses?e.state.witnesses.includes(n.get("witness_account"))?null:n.get("witness_account"):null}).filter(function(e){return null!==e}),g=r.get("active_committee_members").map(function(t){var n=I.b.getObject(t);return n&&e.state.committee?e.state.committee.includes(n.get("committee_member_account"))?null:n.get("committee_member_account"):null}).filter(function(e){return null!==e});return _.a.createElement("div",{className:"grid-content"},_.a.createElement(ee.a,{style:{maxWidth:"800px"},path:"components/AccountVoting"}),_.a.createElement("div",{className:"content-block"},_.a.createElement("button",{className:ne()(a,{success:this.isChanged()}),onClick:this.onPublish,tabIndex:4},_.a.createElement(k.a,{content:"account.votes.publish"})),_.a.createElement("button",{className:"button outline "+a,onClick:this.onReset,tabIndex:8},_.a.createElement(k.a,{content:"account.perm.reset"}))),_.a.createElement(ae.b,{setting:"votingTab",tabsClass:"no-padding bordered-header",contentClass:"grid-content no-padding"},_.a.createElement(ae.a,{title:"account.votes.proxy_short"},_.a.createElement("div",{className:"content-block"},_.a.createElement(ee.a,{style:{maxWidth:"800px"},path:"components/AccountVotingProxy"}),_.a.createElement(Q,{ref:"voting_proxy",existingProxy:this.props.account.getIn(["options","voting_account"]),account:this.props.account,onProxyAccountChanged:this.onProxyAccountChange,onClearProxy:this.onClearProxy.bind(this)}))),_.a.createElement(ae.a,{title:"explorer.witnesses.title"},_.a.createElement("div",{className:ne()("content-block",{disabled:n})},_.a.createElement(ee.a,{style:{maxWidth:"800px"},path:"components/AccountVotingWitnesses"}),_.a.createElement($,{type:"witness",label:"account.votes.add_witness_label",items:this.state.witnesses,validateAccount:this.validateAccount.bind(this,"witnesses"),onAddItem:this.onAddItem.bind(this,"witnesses"),onRemoveItem:this.onRemoveItem.bind(this,"witnesses"),tabIndex:n?-1:2,title:P.a.translate("account.votes.w_approved_by",{account:this.props.account.get("name")})}),b.size?_.a.createElement($,{type:"witness",label:"account.votes.add_witness_label",items:w.a.List(b),validateAccount:this.validateAccount.bind(this,"witnesses"),onAddItem:this.onAddItem.bind(this,"witnesses"),onRemoveItem:this.onRemoveItem.bind(this,"witnesses"),tabIndex:n?-1:2,withSelector:!1,action:"add",title:P.a.translate("account.votes.w_not_approved_by",{account:this.props.account.get("name")})}):null)),_.a.createElement(ae.a,{title:"explorer.committee_members.title"},_.a.createElement("div",{className:ne()("content-block",{disabled:n})},_.a.createElement(ee.a,{style:{maxWidth:"800px"},path:"components/AccountVotingCommittee"}),_.a.createElement($,{type:"committee",label:"account.votes.add_committee_label",items:this.state.committee,validateAccount:this.validateAccount.bind(this,"committee"),onAddItem:this.onAddItem.bind(this,"committee"),onRemoveItem:this.onRemoveItem.bind(this,"committee"),tabIndex:n?-1:3,title:P.a.translate("account.votes.cm_approved_by",{account:this.props.account.get("name")})}),g.size?_.a.createElement($,{type:"committee",label:"account.votes.add_witness_label",items:w.a.List(g),validateAccount:this.validateAccount.bind(this,"committee"),onAddItem:this.onAddItem.bind(this,"committee"),onRemoveItem:this.onRemoveItem.bind(this,"committee"),tabIndex:n?-1:2,withSelector:!1,action:"add",title:P.a.translate("account.votes.cm_not_approved_by",{account:this.props.account.get("name")})}):null)),_.a.createElement(ae.a,{title:"account.votes.workers_short"},_.a.createElement("div",{className:ne()("content-block")},_.a.createElement(ee.a,{style:{maxWidth:"800px"},path:"components/AccountVotingWorkers"}),_.a.createElement("div",{style:{paddingBottom:20}},_.a.createElement(F.b,{to:"/create-worker"},_.a.createElement("div",{className:"button"},"Create a new worker"))),_.a.createElement("table",null,_.a.createElement("tbody",null,_.a.createElement("tr",null,_.a.createElement("td",null,_.a.createElement(k.a,{content:"account.votes.total_budget"}),":"),_.a.createElement("td",{style:{paddingLeft:20,textAlign:"right"}}," ",r?_.a.createElement(R.a,{amount:c,asset:"1.3.0",decimalOffset:5}):null,_.a.createElement("span",null," (",r?_.a.createElement(q.b,{fromAsset:"1.3.0",toAsset:t,amount:c}):null,")"))),_.a.createElement("tr",null,_.a.createElement("td",null,_.a.createElement(k.a,{content:"account.votes.unused_budget"}),":"),_.a.createElement("td",{style:{paddingLeft:20,textAlign:"right"}}," ",r?_.a.createElement(R.a,{amount:l,asset:"1.3.0",decimalOffset:5}):null)))),_.a.createElement("table",{className:"table"},_.a.createElement("thead",null,_.a.createElement("tr",null,_.a.createElement("th",null),_.a.createElement("th",null,_.a.createElement(k.a,{content:"account.user_issued_assets.description"})),_.a.createElement("th",{className:"hide-column-small"},_.a.createElement(k.a,{content:"account.votes.creator"})),_.a.createElement("th",{className:"hide-column-small"},_.a.createElement(k.a,{content:"account.votes.total_votes"})),_.a.createElement("th",{className:"hide-column-small"},_.a.createElement(k.a,{content:"account.votes.daily_pay"}),_.a.createElement("div",{style:{paddingTop:5,fontSize:"0.8rem"}},"(",_.a.createElement(k.a,{content:"account.votes.daily"}),")")),_.a.createElement("th",{className:"hide-column-large"},_.a.createElement("div",null,_.a.createElement(k.a,{content:"account.votes.unclaimed"})),_.a.createElement("div",{style:{paddingTop:5,fontSize:"0.8rem"}},"(",_.a.createElement(k.a,{content:"account.votes.recycled"}),")")),_.a.createElement("th",{className:"hide-column-small"},_.a.createElement(k.a,{content:"account.votes.funding"})),_.a.createElement("th",null),_.a.createElement("th",null,_.a.createElement(k.a,{content:"account.votes.status.title"})," "))),h.length?_.a.createElement("tbody",null,_.a.createElement("tr",null,_.a.createElement("td",{colSpan:"5"},_.a.createElement(k.a,{component:"h4",content:"account.votes.new"}))),h,_.a.createElement("tr",null,_.a.createElement("td",{colSpan:"5"},_.a.createElement(k.a,{component:"h4",content:"account.votes.active"})))):null,_.a.createElement("tbody",null,d),_.a.createElement("tbody",null,_.a.createElement("tr",null,_.a.createElement("td",{colSpan:"3"},_.a.createElement("div",{className:"inline-block"},_.a.createElement(k.a,{component:"h4",content:"account.votes.expired"})),_.a.createElement("span",null,"  ",_.a.createElement("button",{onClick:this._toggleExpired.bind(this),className:"button outline small"},s?_.a.createElement(k.a,{content:"exchange.hide"}):_.a.createElement(k.a,{content:"account.perm.show"}))))),s?f:null))))))}}]),t}(_.a.Component);se.propTypes={initialBudget:S.a.ChainObject.isRequired,globalObject:S.a.ChainObject.isRequired,dynamicGlobal:S.a.ChainObject.isRequired},se.defaultProps={initialBudget:"2.13.1",globalObject:"2.0.0",dynamicGlobal:"2.1.0"};t.default=Object(N.a)(se)}});
//# sourceMappingURL=27.js.map