webpackJsonp([27],{1540:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a.d(t,"b",function(){return E}),a.d(t,"a",function(){return g});var i=a(1),o=a.n(i),c=a(2),u=(a.n(c),a(19)),m=a.n(u),p=a(27),d=(a.n(p),a(28)),h=a(36),b=a(5),_=a.n(b),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,a=e.index,n=e.changeTab,r=e.title,l=e.className,s=e.updatedTab,i=e.disabled,c=e.subText,u=m()({"is-active":t},l);return"string"==typeof r&&r.indexOf(".")>0&&(r=_.a.translate(r)),this.props.collapsed?("string"==typeof c&&(c=c.trim()),o.a.createElement("option",{value:a,"data-is-link-to":this.props.isLinkTo},o.a.createElement("span",{className:"tab-title"},r,s?"*":"",c&&" (",c&&c,c&&")"))):o.a.createElement("li",{className:u,onClick:i?null:n.bind(this,a,this.props.isLinkTo)},o.a.createElement("a",null,o.a.createElement("span",{className:"tab-title"},r,s?"*":""),c&&o.a.createElement("div",{className:"tab-subtext"},c)))}}]),t}(o.a.Component);g.propTypes={changeTab:i.PropTypes.func,isActive:i.PropTypes.bool.isRequired,index:i.PropTypes.number.isRequired,className:i.PropTypes.string,isLinkTo:i.PropTypes.string,subText:i.PropTypes.oneOfType([i.PropTypes.object,i.PropTypes.string])},g.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var E=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},a._setDimensions=a._setDimensions.bind(a),a}return s(t,e),f(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){if(e!==this.state.activeTab){if(""!==t)return void this.context.router.push(t);this.props.setting&&d.a.changeViewSetting(n({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.contentClass,r=t.tabsClass,l=t.style,s=t.segmented,i=this.state.width<900&&o.a.Children.count(a)>2,c=null,u=o.a.Children.map(a,function(t,a){if(!t)return null;if(i&&t.props.disabled)return null;var n=a===e.state.activeTab;return n&&(c=t.props.children),o.a.cloneElement(t,{collapsed:i,isActive:n,changeTab:e._changeTab.bind(e),index:a})}).filter(function(e){return null!==e});return c||(c=u[0].props.children),o.a.createElement("div",{className:m()(this.props.actionButtons?"with-buttons":"",this.props.className)},o.a.createElement("div",{className:"service-selector"},o.a.createElement("ul",{style:l,className:m()("button-group no-margin",r,{segmented:s})},i?o.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},o.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var a=parseInt(t.target.value,10);e._changeTab(a,t.target[a].attributes["data-is-link-to"].value)}},u)):u,this.props.actionButtons?o.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),o.a.createElement("div",{className:m()("tab-content",n)},c))}}]),t}(o.a.Component);E.propTypes={setting:i.PropTypes.string,defaultActiveTab:i.PropTypes.number,segmented:i.PropTypes.bool},E.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},E.contextTypes={router:o.a.PropTypes.object.isRequired},E=Object(p.connect)(E,{listenTo:function(){return[h.a]},getProps:function(){return{viewSettings:h.a.getState().viewSettings}}})},2023:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=a(1),m=a.n(u),p=a(33),d=a(2),h=a.n(d),b=a(144),_=a(107),f=a(59),g=a(189),E=a(125),v=a(688),y=a(679),k=a(48),x=a(285),O=a(15),w=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),T=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={time:e.time},a}return l(t,e),w(t,[{key:"getHours",value:function(e){return e/3600}},{key:"render",value:function(){return m.a.createElement("div",null,this.getHours(this.state.time),"h")}}]),t}(m.a.Component),P=T,N=a(4),A=a(7),S=a(1540),j=a(126),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},q=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),R=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),q(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?m.a.createElement("span",{className:"asset-flag"},m.a.createElement("span",{className:"label info"},m.a.createElement(h.a,{content:"account.user_issued_assets."+a}))):m.a.createElement("span",null)}}]),t}(m.a.Component),D=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),q(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?m.a.createElement("span",{className:"asset-flag"},m.a.createElement("span",{className:"label info"},m.a.createElement(h.a,{content:"account.user_issued_assets."+a}))):m.a.createElement("span",null)}}]),t}(m.a.Component),I=function(e){function t(e){i(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={callOrders:[],marginTableSort:"price",sortDirection:!0},a}return c(t,e),q(t,[{key:"componentWillMount",value:function(){var e=this;if(this.props.asset.has("bitasset")){var t,a=(t={},s(t,this.props.asset.get("id"),this.props.asset.toJS()),s(t,this.props.backingAsset.get("id"),this.props.backingAsset.toJS()),t),n=this.props.asset.getIn(["bitasset","is_prediction_market"],!1),r=this.props.asset.getIn(["bitasset","current_feed","maximum_short_squeeze_ratio"]),l=this.props.asset.getIn(["bitasset","current_feed","settlement_price"]);n&&l.getIn(["base","asset_id"])===l.getIn(["quote","asset_id"])&&(a[this.props.backingAsset.get("id")]||(a[this.props.backingAsset.get("id")]={precision:this.props.asset.get("precision")}),l=l.setIn(["base","amount"],1),l=l.setIn(["base","asset_id"],this.props.backingAsset.get("id")),l=l.setIn(["quote","amount"],1),l=l.setIn(["quote","asset_id"],this.props.asset.get("id")),r=1e3);try{var i=new j.c({priceObject:l,market_base:this.props.asset.get("id"),sqr:r,assets:a});A.Apis.instance().db_api().exec("get_call_orders",[this.props.asset.get("id"),300]).then(function(t){var r=t.map(function(t){return new j.b(t,a,e.props.asset.get("id"),i,n)});e.setState({callOrders:r})})}catch(e){}}}},{key:"_toggleSortOrder",value:function(e){e!==this.state.marginTableSort?this.setState({marginTableSort:e}):this.setState({sortDirection:!this.state.sortDirection})}},{key:"_assetType",value:function(e){return"bitasset"in e?e.bitasset.is_prediction_market?"Prediction":"Smart":"Simple"}},{key:"renderFlagIndicators",value:function(e,t){return m.a.createElement("div",null,t.map(function(t){return m.a.createElement(R,{key:"flag_"+t,name:t,isSet:e[t]})}))}},{key:"renderPermissionIndicators",value:function(e,t){return m.a.createElement("div",null,t.map(function(t){return m.a.createElement(D,{key:"perm_"+t,name:t,isSet:e[t]})}))}},{key:"formattedPrice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.base,r=e.quote;return m.a.createElement(g.a,{base_amount:n.amount,base_asset:n.asset_id,quote_amount:r.amount,quote_asset:r.asset_id,hide_value:a,hide_symbols:t})}},{key:"renderAuthorityList",value:function(e){return e.map(function(e){return m.a.createElement("span",null," ",m.a.createElement(b.a,{account:e}))})}},{key:"renderMarketList",value:function(e,t){var a=e.symbol;return t.map(function(e){if(e==a)return null;var t=e+"_"+a,n=e+"/"+a;return m.a.createElement("span",null,m.a.createElement(p.c,{to:"/market/"+t},n)," "," ")}.bind(this))}},{key:"renderAboutBox",value:function(e,t){var a=N.b.getObject(e.issuer,!1,!1),n=a?a.get("name"):"",r=(m.a.createElement(k.a,{name:"asset",className:"asset",size:"4x"}),x.a.parseDescription(e.options.description)),l=r.main,s=r.short_name?r.short_name:null,i=/(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g;l=l&&l.length>0?l+" ":l;var o=l.match(i),c=N.b.getAsset("1.3.0"),u=r.market?r.market:c?c.get("symbol"):"BTS";"bitasset"in e&&e.bitasset.is_prediction_market&&(u=N.b.getAsset(e.bitasset.options.short_backing_asset),u=u?u.get("symbol"):c.get("symbol")),e.symbol===c.get("symbol")&&(u="USD"),o&&o.length&&o.forEach(function(e){var t='<a target="_blank" rel="noopener noreferrer" href="'+e+'">'+e+"</a>";l=l.replace(e,t)});var d=O.a.replaceName(t),b=d.name,_=d.prefix;return m.a.createElement("div",{style:{overflow:"visible"}},m.a.createElement(y.a,{path:"assets/"+e.symbol,alt_path:"assets/Asset",section:"summary",symbol:(_||"")+b,description:l,issuer:n,hide_issuer:"true"}),s?m.a.createElement("p",null,s):null,m.a.createElement(p.c,{className:"button market-button",to:"/market/"+e.symbol+"_"+u},m.a.createElement(h.a,{content:"exchange.market"})))}},{key:"renderSummary",value:function(e){var t=this.props.getDynamicObject(e.dynamic_asset_data_id);t&&(t=t.toJS());var a=e.options,n=x.a.getFlagBooleans(e.options.flags,this.props.asset.has("bitasset_data_id")),r=Object.keys(n),l=t?m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.summary.current_supply"})," "),m.a.createElement("td",null," ",m.a.createElement(f.a,{amount:t.current_supply,asset:e.id})," ")):null,s=t?m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.summary.stealth_supply"})," "),m.a.createElement("td",null," ",m.a.createElement(f.a,{amount:t.confidential_supply,asset:e.id})," ")):null,i=n.charge_market_fee?m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.summary.market_fee"})," "),m.a.createElement("td",null," ",a.market_fee_percent/100," % ")):null,o=n.charge_market_fee?m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.summary.max_market_fee"})," "),m.a.createElement("td",null," ",m.a.createElement(f.a,{amount:+a.max_market_fee,asset:e.id})," ")):null;return m.a.createElement("div",{className:"asset-card no-padding"},m.a.createElement("div",{className:"card-divider"},m.a.createElement(E.a,{name:e.symbol})),m.a.createElement("table",{className:"table key-value-table table-hover"},m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.summary.asset_type"})," "),m.a.createElement("td",null," ",this._assetType(e)," ")),m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.summary.issuer"})," "),m.a.createElement("td",null," ",m.a.createElement(b.a,{account:e.issuer})," ")),m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.assets.precision"})," "),m.a.createElement("td",null," ",e.precision," ")),l,s,i,o)),m.a.createElement("br",null),this.renderFlagIndicators(n,r))}},{key:"renderPriceFeed",value:function(e,t){var a=m.a.createElement(h.a,{content:"explorer.asset.price_feed.title"}),n=e.bitasset;if(!("current_feed"in n))return m.a.createElement("div",{header:a});var r=n.current_feed,l=n.options.force_settlement_delay_sec,s=n.options.force_settlement_offset_percent,i=this.getGlobalSettlementPrice();return m.a.createElement("div",{className:"asset-card no-padding"},m.a.createElement("div",{className:"card-divider"},a),m.a.createElement("table",{className:"table key-value-table table-hover",style:{padding:"1.2rem"}},m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.price_feed.settlement_price"})," "),m.a.createElement("td",null," ",this.formattedPrice(r.settlement_price)," ")),m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.price_feed.maintenance_collateral_ratio"})," "),m.a.createElement("td",null," ",r.maintenance_collateral_ratio/10,"%"," ")),m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.price_feed.maximum_short_squeeze_ratio"})," "),m.a.createElement("td",null," ",r.maximum_short_squeeze_ratio/10,"%"," ")),m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.price_feed.global_settlement_price"})," "),m.a.createElement("td",null," ",i||"-"," ")))),m.a.createElement("table",{className:"table key-value-table table-hover",style:{marginTop:"2rem"}},m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.price_feed.settlement_delay"})," "),m.a.createElement("td",null," ",m.a.createElement(P,{time:l})," ")),m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.price_feed.force_settlement_offset"})," "),m.a.createElement("td",null," ",s/100,"% ")))))}},{key:"renderFeePool",value:function(e){var t=this.props.getDynamicObject(e.dynamic_asset_data_id);t&&(t=t.toJS());var a=e.options;return m.a.createElement("div",{className:"asset-card no-padding"},m.a.createElement("div",{className:"card-divider"},m.a.createElement(h.a,{content:"explorer.asset.fee_pool.title"})),m.a.createElement("table",{className:"table key-value-table",style:{padding:"1.2rem"}},m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.fee_pool.core_exchange_rate"})," "),m.a.createElement("td",null," ",this.formattedPrice(a.core_exchange_rate)," ")),m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.fee_pool.pool_balance"})," "),m.a.createElement("td",null," ",t?m.a.createElement(f.a,{asset:"1.3.0",amount:t.fee_pool}):null," ")),m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.fee_pool.unclaimed_issuer_income"})," "),m.a.createElement("td",null," ",t?m.a.createElement(f.a,{asset:e.id,amount:t.accumulated_fees}):null," ")))))}},{key:"renderPermissions",value:function(e){var t=e.options,a=x.a.getFlagBooleans(e.options.issuer_permissions,this.props.asset.has("bitasset_data_id")),n=Object.keys(a),r=a.charge_market_fee?m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.permissions.max_market_fee"})," "),m.a.createElement("td",null," ",m.a.createElement(f.a,{amount:+t.max_market_fee,asset:e.id})," ")):null,l=m.a.createElement("tr",null,m.a.createElement("td",null," ",m.a.createElement(h.a,{content:"explorer.asset.permissions.max_supply"})," "),m.a.createElement("td",null," ",m.a.createElement(f.a,{amount:+t.max_supply,asset:e.id})," "));a.white_list&&m.a.createElement("span",null,m.a.createElement("br",null),m.a.createElement(h.a,{content:"explorer.asset.permissions.blacklist_authorities"}),":  ",this.renderAuthorityList(t.blacklist_authorities),m.a.createElement("br",null),m.a.createElement(h.a,{content:"explorer.asset.permissions.blacklist_markets"}),":  ",this.renderMarketList(e,t.blacklist_markets),m.a.createElement("br",null),m.a.createElement(h.a,{content:"explorer.asset.permissions.whitelist_authorities"}),":  ",this.renderAuthorityList(t.whitelist_authorities),m.a.createElement("br",null),m.a.createElement(h.a,{content:"explorer.asset.permissions.whitelist_markets"}),":  ",this.renderMarketList(e,t.whitelist_markets));return m.a.createElement("div",{className:"asset-card no-padding"},m.a.createElement("div",{className:"card-divider"},m.a.createElement(h.a,{content:"explorer.asset.permissions.title"})," "),m.a.createElement("table",{className:"table key-value-table table-hover",style:{padding:"1.2rem"}},m.a.createElement("tbody",null,r,l)),m.a.createElement("br",null),this.renderPermissionIndicators(a,n),m.a.createElement("br",null))}},{key:"getMarginPositions",value:function(){var e=this.state.sortDirection,t={name:function(t,a){var n=N.b.getAccount(t.borrower,!1);n&&(n=n.get("name"));var r=N.b.getAccount(a.borrower,!1);return r&&(r=r.get("name")),n>r?e?1:-1:n<r?e?-1:1:0},price:function(t,a){return(e?1:-1)*(t.call_price.toReal()-a.call_price.toReal())},collateral:function(t,a){return(e?1:-1)*(a.getCollateral().getAmount()-t.getCollateral().getAmount())},debt:function(t,a){return(e?1:-1)*(a.amountToReceive().getAmount()-t.amountToReceive().getAmount())},ratio:function(t,a){return(e?1:-1)*(t.getRatio()-a.getRatio())}};return this.state.callOrders.sort(t[this.state.marginTableSort])}},{key:"getGlobalSettlementPriceFromSorted",value:function(e){if(console.log("global settlement sorted called"),!e||e.length<=0)return console.log("length array 0 passed in"),null;console.log("sortedCallOrders exists according to sorted get globa");var t=e[0],a=t.amountToReceive().getAmount(),n=t.getCollateral().getAmount();return m.a.createElement(g.a,{base_amount:n,base_asset:t.call_price.base.asset_id,quote_amount:a,quote_asset:t.call_price.quote.asset_id})}},{key:"getGlobalSettlementPrice",value:function(){if(!this.state.callOrders)return null;this.state.callOrders;for(var e=null,t=null,a=this.state.callOrders.length,n=0;n<a;n++){var r=this.state.callOrders[n];null==e?(e=r,t=r.getRatio()):r.getRatio()<t&&(t=r.getRatio(),e=r)}if(null==e)return console.log("couldn't find the least col short"),null;var l=e.amountToReceive().getAmount(),s=e.getCollateral().getAmount();return m.a.createElement(g.a,{base_amount:s,base_asset:e.call_price.base.asset_id,quote_amount:l,quote_asset:e.call_price.quote.asset_id})}},{key:"renderPriceFeedData",value:function(e,t){var a=e.bitasset;if(!("feeds"in a)||0==a.feeds.length||a.is_prediction_market)return null;var n=(new Date).getTime(),r=new Date(n-1e3*e.bitasset.options.feed_lifetime_sec),l=a.feeds;if(l=l.filter(function(e){return new Date(e[1][0])>r}).sort(function(e,t){return new Date(t[1][0])-new Date(e[1][0])}),!l.length)return null;for(var s=[],i=l[0][1][1].settlement_price,o=l[0][1][1].core_exchange_rate,c=m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{style:{textAlign:"left"}}," ",m.a.createElement(h.a,{content:"explorer.asset.price_feed_data.publisher"})," "),m.a.createElement("th",null,m.a.createElement(h.a,{content:"explorer.asset.price_feed_data.settlement_price"}),m.a.createElement("br",null),"(",this.formattedPrice(i,!1,!0),")"),m.a.createElement("th",null,m.a.createElement(h.a,{content:"explorer.asset.price_feed_data.core_exchange_rate"}),m.a.createElement("br",null),"(",this.formattedPrice(o,!1,!0),")"),m.a.createElement("th",null," ",m.a.createElement(h.a,{content:"explorer.asset.price_feed_data.maintenance_collateral_ratio"})," "),m.a.createElement("th",null," ",m.a.createElement(h.a,{content:"explorer.asset.price_feed_data.maximum_short_squeeze_ratio"})," "),m.a.createElement("th",null," ",m.a.createElement(h.a,{content:"explorer.asset.price_feed_data.published"})," "))),u=0;u<l.length;u++){var p=l[u],d=p[0],_=new Date(p[1][0]+"Z"),E=p[1][1].settlement_price,y=p[1][1].core_exchange_rate,k=p[1][1].maintenance_collateral_ratio/10+"%",x=p[1][1].maximum_short_squeeze_ratio/10+"%";s.push(m.a.createElement("tr",{key:d},m.a.createElement("td",null," ",m.a.createElement(b.a,{account:d})," "),m.a.createElement("td",{style:{textAlign:"right"}},this.formattedPrice(E,!0)),m.a.createElement("td",{style:{textAlign:"right"}}," ",this.formattedPrice(y,!0)," "),m.a.createElement("td",{style:{textAlign:"right"}}," ",k),m.a.createElement("td",{style:{textAlign:"right"}}," ",x),m.a.createElement("td",{style:{textAlign:"right"}},m.a.createElement(v.a,{time:_}))))}var O=m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"name"),style:{textAlign:"left"}},m.a.createElement(h.a,{content:"transaction.borrower"})),m.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"collateral")},m.a.createElement(h.a,{content:"transaction.collateral"}),this.state.callOrders.length?m.a.createElement("span",null," (",m.a.createElement(f.a,{amount:this.state.callOrders[0].getCollateral().getAmount(),asset:this.state.callOrders[0].getCollateral().asset_id,hide_amount:!0})," ",")"):null),m.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"debt")},m.a.createElement(h.a,{content:"transaction.borrow_amount"}),this.state.callOrders.length?m.a.createElement("span",null," (",m.a.createElement(f.a,{amount:this.state.callOrders[0].amountToReceive().getAmount(),asset:this.state.callOrders[0].amountToReceive().asset_id,hide_amount:!0})," ",")"):null),m.a.createElement("th",{style:{paddingRight:10},className:"clickable"},m.a.createElement("span",{onClick:this._toggleSortOrder.bind(this,"price")},m.a.createElement(h.a,{content:"exchange.call"})),this.state.callOrders.length?m.a.createElement("span",null," (",m.a.createElement(g.a,{base_amount:this.state.callOrders[0].call_price.base.amount,base_asset:this.state.callOrders[0].call_price.base.asset_id,quote_amount:this.state.callOrders[0].call_price.quote.amount,quote_asset:this.state.callOrders[0].call_price.quote.asset_id,hide_value:!0,noPopOver:!0}),")"):null),m.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"ratio")},m.a.createElement(h.a,{content:"borrow.coll_ratio"})))),w=t.map(function(e){return m.a.createElement("tr",{className:"margin-row",key:e.id},m.a.createElement("td",null,m.a.createElement(b.a,{account:e.borrower})),m.a.createElement("td",{style:{textAlign:"right"}},m.a.createElement(f.a,{amount:e.getCollateral().getAmount(),asset:e.getCollateral().asset_id,hide_asset:!0})),m.a.createElement("td",{style:{textAlign:"right"}},m.a.createElement(f.a,{amount:e.amountToReceive().getAmount(),asset:e.amountToReceive().asset_id,hide_asset:!0})),m.a.createElement("td",{style:{textAlign:"right",paddingRight:10}},m.a.createElement(g.a,{base_amount:e.call_price.base.amount,base_asset:e.call_price.base.asset_id,quote_amount:e.call_price.quote.amount,quote_asset:e.call_price.quote.asset_id,hide_symbols:!0})),m.a.createElement("td",{className:e.getStatus(),style:{textAlign:"right"}},e.getRatio().toFixed(3)))});return m.a.createElement("div",{className:"grid-block"},m.a.createElement("div",{className:"grid-content no-padding"},m.a.createElement("div",{className:""},m.a.createElement(S.b,{defaultActiveTab:0,segmented:!1,setting:"bitassetDataTabs"},m.a.createElement(S.a,{title:"explorer.asset.price_feed_data.title"},m.a.createElement("div",{className:"responsive-table"},m.a.createElement("table",{className:" table order-table table-hover",style:{padding:"1.2rem"}},c,m.a.createElement("tbody",null,s)))),m.a.createElement(S.a,{title:"explorer.asset.margin_positions.title"},m.a.createElement("table",{className:" table order-table table-hover",style:{padding:"1.2rem"}},O,m.a.createElement("tbody",null,w)))))))}},{key:"render",value:function(){var e=this.props.asset.toJS(),t=this.getMarginPositions(),a="bitasset"in e?this.renderPriceFeed(e,t):null,n="bitasset"in e?this.renderPriceFeedData(e,t):null;return m.a.createElement("div",{className:"grid-container"},m.a.createElement("div",{className:"grid-block page-layout"},m.a.createElement("div",{className:"grid-block main-content wrap regular-padding"},m.a.createElement("div",{className:"grid-block small-up-1",style:{width:"100%"}},this.renderAboutBox(e,this.props.asset)),m.a.createElement("div",{className:"grid-block small-up-1 medium-up-2"},m.a.createElement("div",{className:"grid-content"},this.renderSummary(e)),m.a.createElement("div",{className:"grid-content"},a||this.renderPermissions(e))),m.a.createElement("div",{className:"grid-block small-up-1 medium-up-2"},m.a.createElement("div",{className:"grid-content"},this.renderFeePool(e)),m.a.createElement("div",{className:"grid-content"},a?this.renderPermissions(e):null)),n||null)))}}]),t}(m.a.Component);I=Object(_.a)(I,{propNames:["backingAsset"]});var L=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),q(t,[{key:"render",value:function(){var e=this.props.asset.has("bitasset")?this.props.asset.getIn(["bitasset","options","short_backing_asset"]):"1.3.0";return m.a.createElement(I,C({},this.props,{backingAsset:e}))}}]),t}(m.a.Component);L=Object(_.a)(L,{withDynamic:!0});var F=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),q(t,[{key:"render",value:function(){var e=this.props.params.symbol;return m.a.createElement(L,C({},this.props,{asset:e}))}}]),t}(m.a.Component);t.default=F}});
//# sourceMappingURL=27.js.map