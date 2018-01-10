webpackJsonp([20,25],{1512:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return v}),n.d(t,"a",function(){return d});var i=n(1),l=n.n(i),c=n(3),u=n.n(c),p=n(29),f=n.n(p),b=n(26),m=(n.n(b),n(27)),h=n(38),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),y(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,r=e.changeTab,a=e.title,o=e.className,s=e.disabled,i=f()({"is-active":t},o);return this.props.collapsed?l.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},"string"==typeof a&&a.indexOf(".")>0?l.a.createElement(u.a,{className:"tab-title",content:a}):l.a.createElement("span",{className:"tab-title"},a)):l.a.createElement("li",{className:i,onClick:s?null:r.bind(this,n,this.props.isLinkTo)},l.a.createElement("a",null,"string"==typeof a&&a.indexOf(".")>0?l.a.createElement(u.a,{className:"tab-title",content:a}):l.a.createElement("span",{className:"tab-title"},a),this.props.subText?l.a.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}(l.a.Component);d.propTypes={changeTab:i.PropTypes.func,isActive:i.PropTypes.bool.isRequired,index:i.PropTypes.number.isRequired,className:i.PropTypes.string,isLinkTo:i.PropTypes.string},d.defaultProps={isActive:!1,index:0,className:"",isLinkTo:""};var v=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return s(t,e),y(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){if(e!==this.state.activeTab){if(""!==t)return void this.context.router.push(t);this.props.setting&&m.a.changeViewSetting(r({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.contentClass,a=t.tabsClass,o=t.style,s=t.segmented,i=this.state.width<900&&l.a.Children.count(n)>2,c=null,u=[],p=l.a.Children.map(n,function(t,n){if(!t)return null;if(i&&t.props.disabled)return null;var r=n===e.state.activeTab;return r&&(c=t.props.children),l.a.cloneElement(t,{collapsed:i,isActive:r,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&u.push(e.props.index),null!==e});return c||(c=p[0].props.children),l.a.createElement("div",{className:f()(this.props.actionButtons?"with-buttons":"",this.props.className)},l.a.createElement("div",{className:"service-selector"},l.a.createElement("ul",{style:o,className:f()("button-group no-margin",a,{segmented:s})},i?l.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},l.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},p)):p,this.props.actionButtons?l.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),l.a.createElement("div",{className:r+" tab-content"},c))}}]),t}(l.a.Component);v.propTypes={setting:i.PropTypes.string,defaultActiveTab:i.PropTypes.number,segmented:i.PropTypes.bool},v.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},v.contextTypes={router:l.a.PropTypes.object.isRequired},v=Object(b.connect)(v,{listenTo:function(){return[h.a]},getProps:function(){return{viewSettings:h.a.getState().viewSettings}}})},1552:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return T}),n.d(t,"a",function(){return P});var i=n(1),l=n.n(i),c=n(68),u=n(34),p=n(32),f=n(16),b=n(26),m=(n.n(b),n(275)),h=n(3),y=n.n(h),d=n(6),v=n.n(d),g=n(142),_=n.n(g),O=n(676),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),k=function e(t,n,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in a)return a.value;var s=a.get;if(void 0!==s)return s.call(r)},j=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s(t,e),w(t,[{key:"componentDidMount",value:function(){_.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e){return k(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"shouldComponentUpdate",this).call(this,e)||e.toAsset!==this.props.toAsset||e.fromAsset!==this.props.fromAsset||e.amount!==this.props.amount}},{key:"getValue",value:function(){var e=this.props,t=e.amount,n=e.toAsset,r=e.fromAsset,a=e.fullPrecision,o=e.marketStats,s=e.coreAsset,i=void 0,l=void 0,c=n.get("id"),u=n.get("symbol"),p=r.get("id"),b=r.get("symbol");if(a||(t=f.a.get_asset_amount(t,r)),s&&o){var m=s.get("symbol");i=o.get(u+"_"+m),l=o.get(b+"_"+m)}var h=f.a.convertPrice(l&&l.close?l.close:"1.3.0"===p||r.has("bitasset")?r:null,i&&i.close?i.close:"1.3.0"===c||n.has("bitasset")?n:null,p,c);return h?f.a.convertValue(h,t,r,n):null}},{key:"render",value:function(){var e=this.props,t=e.amount,n=e.toAsset,r=e.fromAsset,a=e.fullPrecision,o=n.get("id"),s=n.get("symbol");a||(t=f.a.get_asset_amount(t,r));var i=this.getValue();return i||0===i?l.a.createElement(c.a,{hide_asset:this.props.hide_asset,noPrefix:!0,amount:i,asset:o,decimalOffset:-1!==s.indexOf("BTC")?4:this.props.noDecimals?n.get("precision"):n.get("precision")-2}):l.a.createElement("div",{className:"tooltip inline-block","data-place":"bottom","data-tip":v.a.translate("tooltip.no_price"),style:{fontSize:"0.9rem"}},l.a.createElement(y.a,{content:"account.no_price"}))}}]),t}(O.a);j.propTypes={toAsset:u.a.ChainAsset.isRequired,fromAsset:u.a.ChainAsset.isRequired,coreAsset:u.a.ChainAsset.isRequired},j.defaultProps={toAsset:"1.3.0",fullPrecision:!0,noDecimals:!1,hide_asset:!1,coreAsset:"1.3.0"},j=Object(p.a)(j,{keep_updating:!0});var T=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),w(t,[{key:"render",value:function(){var e=this.props,t=e.refCallback,n=r(e,["refCallback"]);return l.a.createElement(j,E({},n,{ref:t}))}}]),t}(l.a.Component);T=Object(b.connect)(T,{listenTo:function(){return[m.a]},getProps:function(){return{marketStats:m.a.getState().allMarketStats}}});var P=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),w(t,[{key:"render",value:function(){var e=this.props.balance,t=!!e.getIn(["balance","amount"]),n=Number(t?e.getIn(["balance","amount"]):e.get("balance")),r=t?e.getIn(["balance","asset_id"]):e.get("asset_type");return isNaN(n)?l.a.createElement("span",null,"--"):l.a.createElement(T,{refCallback:this.props.refCallback,hide_asset:this.props.hide_asset,amount:n,fromAsset:r,noDecimals:!0,toAsset:this.props.toAsset})}}]),t}(l.a.Component);P.propTypes={balance:u.a.ChainObject.isRequired},P=Object(p.a)(P,{keep_updating:!0})},1850:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=n(1),b=n.n(f),m=n(40),h=n(38),y=n(124),d=n.n(y),v=n(18),g=n.n(v),_=n(6),O=n.n(_),E=n(29),w=n.n(E),k=n(3),j=n.n(k),T=n(672),P=n(34),x=n(32),A=n(68),C=n(1552),N=n(4),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),R=N.c.operations,D=Object.keys(R),q={general:[0,25,26,27,28,32,33,37,39,40],asset:[10,11,12,13,14,15,16,17,18,19,38],market:[1,2,3,4,17,18],account:[5,6,7,8,9],business:[20,21,22,23,24,29,30,31,34,35,36]},L=[5,7,20,21,34],I=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),S(t,[{key:"shouldComponentUpdate",value:function(e){return!g.a.is(e.globalObject,this.props.globalObject)}},{key:"render",value:function(){var e=this.props,t=e.globalObject,n=e.settings,r=e.opIds;e.title;t=t.toJSON();var a=N.b.getAsset("1.3.0"),o=t.parameters.current_fees,s=o.scale,i=o.parameters,l=n.get("unit")||a.get("symbol"),c=O.a.translate("transaction.trxTypes"),u=r.map(function(e){if(e>=i.length)return void console.warn("Asking for non-existing fee id %d! Check group settings in Fees.jsx",e);var t=i[e],n=t[0],r=t[1],a=D[n],o=c[a],u=[],p=!1,f=w()("label","info");for(var m in r){var h=r[m]*s/1e4,y=O.a.translate("transaction.feeTypes"),d=(h?b.a.createElement(A.a,{amount:h,asset:"1.3.0"}):y._none,h?b.a.createElement(C.b,{fromAsset:"1.3.0",fullPrecision:!0,amount:h,toAsset:l}):y._none),v=(.2*h?b.a.createElement(A.a,{amount:.2*h,asset:"1.3.0"}):y._none,.2*h?b.a.createElement(C.b,{fromAsset:"1.3.0",fullPrecision:!0,amount:.2*h,toAsset:l}):y._none),g=null;p||(p=!0,g=b.a.createElement("td",{rowSpan:"6",style:{width:"15em"}},b.a.createElement("span",{className:f},o))),L.indexOf(n)<0?u.push(b.a.createElement("tr",{key:n.toString()+m,className:"Annual Membership"===y[m]?"linethrough":""},g,b.a.createElement("td",null,y[m]),b.a.createElement("td",{style:{textAlign:"right"}},d),b.a.createElement("td",{style:{textAlign:"right"}},v))):u.push(b.a.createElement("tr",{key:n.toString()+m},g,b.a.createElement("td",null,y[m]),b.a.createElement("td",{style:{textAlign:"right"}},"- ",b.a.createElement("sup",null,"*")),b.a.createElement("td",{style:{textAlign:"right"}},v)))}return b.a.createElement("tbody",{key:e},u)});return b.a.createElement("div",{className:"asset-card"},b.a.createElement("div",{className:"card-divider"},this.props.title),b.a.createElement("table",{className:"table"},b.a.createElement("thead",null,b.a.createElement("tr",null,b.a.createElement("th",null,b.a.createElement(j.a,{content:"explorer.block.op"})),b.a.createElement("th",null,b.a.createElement(j.a,{content:"explorer.fees.type"})),b.a.createElement("th",{style:{textAlign:"right"}},b.a.createElement(j.a,{content:"explorer.fees.fee"})),b.a.createElement("th",{style:{textAlign:"right"}},b.a.createElement(j.a,{content:"explorer.fees.feeltm"})))),u))}}]),t}(b.a.Component);I.propTypes={globalObject:P.a.ChainObject.isRequired},I.defaultProps={globalObject:"2.0.0"},I=Object(x.a)(I,{keep_updating:!0});var M=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),S(t,[{key:"render",value:function(){var e=O.a.translate("transaction.feeGroups"),t=[];for(var n in q){var r=e[n],a=q[n];t.push(b.a.createElement(I,{key:n,settings:this.props.settings,opIds:a,title:r}))}return b.a.createElement("div",{className:"grid-block vertical",style:{overflow:"visible"}},b.a.createElement("div",{className:"grid-block small-12 shrink",style:{overflow:"visible"}},b.a.createElement(T.a,{path:"components/Fees"})),b.a.createElement("div",{className:"grid-block small-12 ",style:{overflow:"visible"}},b.a.createElement("div",{className:"grid-content"},t)))}}]),t}(b.a.Component),B=M,W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=function(e){function t(){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),W(t,[{key:"render",value:function(){return b.a.createElement(d.a,{stores:[h.a],inject:{settings:h.a.getState().settings}},b.a.createElement(B,this.props))}}]),t}(b.a.Component),V=U,z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,e),z(t,[{key:"render",value:function(){var e=b.a.createElement(V,null);return b.a.createElement(m.default,{tab:"fees",content:e})}}]),t}(b.a.Component);t.default=F},40:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=n.n(s),l=(n(33),n(3)),c=(n.n(l),n(56),n(1512)),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tabs:[{name:"blocks",link:"/explorer/blocks",translate:"explorer.blocks.title"},{name:"assets",link:"/explorer/assets",translate:"explorer.assets.title"},{name:"accounts",link:"/explorer/accounts",translate:"explorer.accounts.title"},{name:"witnesses",link:"/explorer/witnesses",translate:"explorer.witnesses.title"},{name:"committee_members",link:"/explorer/committee-members",translate:"explorer.committee_members.title"},{name:"markets",link:"/explorer/markets",translate:"markets.title"},{name:"fees",link:"/explorer/fees",translate:"fees.title"}]},n}return o(t,e),u(t,[{key:"render",value:function(){for(var e=this,t=this.state.tabs.findIndex(function(t){return t.name===e.props.tab}),n=[],r=0;r<this.state.tabs.length;r++){var a=this.state.tabs[r],o=t==r?this.props.content:null,s=t==r?"":a.link;n.push(i.a.createElement(c.a,{key:r,title:a.translate,isLinkTo:s},o))}return i.a.createElement(c.b,{defaultActiveTab:t,segmented:!1,setting:"explorerTab-{this.props.tab}",className:"account-tabs",tabsClass:"account-overview no-padding bordered-header content-block"},n)}}]),t}(i.a.Component);p.propTypes={tab:i.a.PropTypes.string,content:i.a.PropTypes.object},p.defaultProps={tab:"blocks",content:null},t.default=p}});
//# sourceMappingURL=20.js.map