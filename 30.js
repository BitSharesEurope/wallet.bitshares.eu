webpackJsonp([30],{1540:function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"b",function(){return _}),n.d(e,"a",function(){return v});var c=n(1),r=n.n(c),l=n(2),u=(n.n(l),n(19)),p=n.n(u),d=n(27),m=(n.n(d),n(28)),h=n(36),b=n(5),g=n.n(b),f=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),v=function(t){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),f(e,[{key:"render",value:function(){var t=this.props,e=t.isActive,n=t.index,a=t.changeTab,i=t.title,o=t.className,s=t.updatedTab,c=t.disabled,l=t.subText,u=p()({"is-active":e},o);return"string"==typeof i&&i.indexOf(".")>0&&(i=g.a.translate(i)),this.props.collapsed?("string"==typeof l&&(l=l.trim()),r.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},r.a.createElement("span",{className:"tab-title"},i,s?"*":"",l&&" (",l&&l,l&&")"))):r.a.createElement("li",{className:u,onClick:c?null:a.bind(this,n,this.props.isLinkTo)},r.a.createElement("a",null,r.a.createElement("span",{className:"tab-title"},i,s?"*":""),l&&r.a.createElement("div",{className:"tab-subtext"},l)))}}]),e}(r.a.Component);v.propTypes={changeTab:c.PropTypes.func,isActive:c.PropTypes.bool.isRequired,index:c.PropTypes.number.isRequired,className:c.PropTypes.string,isLinkTo:c.PropTypes.string,subText:c.PropTypes.oneOfType([c.PropTypes.object,c.PropTypes.string])},v.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var _=function(t){function e(t){i(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.state={activeTab:t.setting?t.viewSettings.get(t.setting,t.defaultActiveTab):t.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return s(e,t),f(e,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(t){var e=t.viewSettings.get(t.setting);e!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:e})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var t=window.innerWidth;t!==this.state.width&&this.setState({width:t})}},{key:"_changeTab",value:function(t,e){if(t!==this.state.activeTab){if(""!==e)return void this.context.router.push(e);this.props.setting&&m.a.changeViewSetting(a({},this.props.setting,t)),this.setState({activeTab:t}),this.props.onChangeTab&&this.props.onChangeTab(t)}}},{key:"render",value:function(){var t=this,e=this.props,n=e.children,a=e.contentClass,i=e.tabsClass,o=e.style,s=e.segmented,c=this.state.width<900&&r.a.Children.count(n)>2,l=null,u=r.a.Children.map(n,function(e,n){if(!e)return null;if(c&&e.props.disabled)return null;var a=n===t.state.activeTab;return a&&(l=e.props.children),r.a.cloneElement(e,{collapsed:c,isActive:a,changeTab:t._changeTab.bind(t),index:n})}).filter(function(t){return null!==t});return l||(l=u[0].props.children),r.a.createElement("div",{className:p()(this.props.actionButtons?"with-buttons":"",this.props.className)},r.a.createElement("div",{className:"service-selector"},r.a.createElement("ul",{style:o,className:p()("button-group no-margin",i,{segmented:s})},c?r.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},r.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(e){var n=parseInt(e.target.value,10);t._changeTab(n,e.target[n].attributes["data-is-link-to"].value)}},u)):u,this.props.actionButtons?r.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),r.a.createElement("div",{className:p()("tab-content",a)},l))}}]),e}(r.a.Component);_.propTypes={setting:c.PropTypes.string,defaultActiveTab:c.PropTypes.number,segmented:c.PropTypes.bool},_.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},_.contextTypes={router:r.a.PropTypes.object.isRequired},_=Object(d.connect)(_,{listenTo:function(){return[h.a]},getProps:function(){return{viewSettings:h.a.getState().viewSettings}}})},2036:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),c=n.n(s),r=n(1540),l=n(198),u=n.n(l),p=n(187),d=n(16),m=n.n(d),h=n(2),b=n.n(h),g=n(39),f=n(35),v=n(144),_=n(190),y=n(21),w=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),E=function(t){function e(){return a(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),w(e,[{key:"render",value:function(){var t=this.props,e=t.account,n=t.onRemove;return c.a.createElement("tr",null,c.a.createElement("td",null,this.props.index),c.a.createElement("td",null,e.get("id")),c.a.createElement("td",null,c.a.createElement(v.a,{account:e.get("id")})),n?c.a.createElement("td",null,c.a.createElement("button",{onClick:n.bind(this,e.get("id")),className:"button outline"},"Remove")):null)}}]),e}(c.a.Component);E.propTypes={account:g.a.ChainAccount.isRequired},E.defaultProps={tempComponent:"tr"},E=Object(f.a)(E);var T=function(t){function e(){return a(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),w(e,[{key:"_onRemove",value:function(t,e,n){if(e){var a=this.props.getCurrentState(e),i=_.a.new_transaction();i.add_type_operation("account_whitelist",{fee:{amount:0,asset_id:"1.3.0"},authorizing_account:this.props.account.get("id"),account_to_list:e,new_listing:a-u.a.account_listing[t]}),y.a.process_transaction(i,null,!0)}}},{key:"render",value:function(){var t=this,e=this.props,n=e.removeButton,a=e.white,i=e.list,o=i.map(function(e,i){return c.a.createElement(E,{key:e,onRemove:n?t._onRemove.bind(t,a?"white_listed":"black_listed"):null,account:e,index:i+1})}).toArray(),s=!0;return o.length||(s=!1,o.push(c.a.createElement("tr",{key:"empty"},c.a.createElement("td",{style:{padding:"1rem 0"},colSpan:n?4:3},c.a.createElement(b.a,{content:this.props.emptyText,account:this.props.account.get("name")}))))),c.a.createElement("table",{className:"table compact dashboard-table"},s?c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,c.a.createElement(b.a,{content:"account.id"})),c.a.createElement("th",null,c.a.createElement(b.a,{content:"account.name"})),n?c.a.createElement("th",null):null)):null,c.a.createElement("tbody",null,o))}}]),e}(c.a.Component),k=function(t){function e(){a(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.state={accountName:"",accountToList:null},t}return o(e,t),w(e,[{key:"_getCurrentState",value:function(t){var e=this.props.account,n=e.get("whitelisted_accounts")||m.a.List(),a=e.get("blacklisted_accounts")||m.a.List(),i=u.a.account_listing.no_listing;return n.includes(t)&&(i+=u.a.account_listing.white_listed),a.includes(t)&&(i+=u.a.account_listing.black_listed),i}},{key:"_onAdd",value:function(t,e){var n=this.state.accountToList,a=this.props.account,i=this._getCurrentState(n);if(n){var o=_.a.new_transaction();o.add_type_operation("account_whitelist",{fee:{amount:0,asset_id:"1.3.0"},authorizing_account:a.get("id"),account_to_list:n,new_listing:i+u.a.account_listing[t]}),y.a.process_transaction(o,null,!0)}}},{key:"_onAccountFound",value:function(t){console.log("accountFound:",t),this.setState({accountName:t?t.get("name"):null,accountToList:t?t.get("id"):null})}},{key:"_onAccountChanged",value:function(t){console.log("account changed:",t),this.setState({accountName:t,accountToList:null})}},{key:"render",value:function(){var t=this.props.account,e=this.state.accountName;return c.a.createElement("div",{className:"grid-content app-tables no-padding",ref:"appTables"},c.a.createElement("div",{className:"content-block small-12"},c.a.createElement("div",{className:"tabs-container generic-bordered-box"},c.a.createElement(r.b,{className:"account-tabs",tabsClass:"account-overview no-padding bordered-header content-block",setting:"whitelistTab",contentClass:"grid-content shrink small-vertical medium-horizontal no-padding",segmented:!1},c.a.createElement(r.a,{title:"account.whitelist.title"},c.a.createElement("div",{style:{paddingBottom:"1rem"},className:"small-12"},c.a.createElement("div",null,c.a.createElement(T,{emptyText:"account.whitelist.empty",account:t,getCurrentState:this._getCurrentState.bind(this),list:t.get("whitelisted_accounts")||m.a.List(),removeButton:!0,white:!0})),t.get("whitelisted_accounts")?null:c.a.createElement("p",{className:"has-error"},"Please note, whitelisting is not working yet due to unresolved backend issue."),c.a.createElement("div",{style:{padding:"2rem 0"}},c.a.createElement(p.a,{label:"account.whitelist.add",accountName:e,onAccountChanged:this._onAccountFound.bind(this),onChange:this._onAccountChanged.bind(this),account:e,tabIndex:2,onAction:this._onAdd.bind(this,"white_listed"),action_label:"account.perm.confirm_add",white:!1})))),c.a.createElement(r.a,{title:"account.whitelist.black"},c.a.createElement("div",{style:{paddingBottom:"1rem"},className:"small-12"},c.a.createElement("div",null,c.a.createElement(T,{emptyText:"account.whitelist.empty_black",account:t,getCurrentState:this._getCurrentState.bind(this),list:t.get("blacklisted_accounts"),removeButton:!0})),c.a.createElement("div",{style:{padding:"2rem 1rem"}},c.a.createElement(p.a,{label:"account.whitelist.add_black",accountName:e,onAccountChanged:this._onAccountFound.bind(this),onChange:this._onAccountChanged.bind(this),account:e,tabIndex:2,onAction:this._onAdd.bind(this,"black_listed"),action_label:"account.perm.confirm_add"})))),c.a.createElement(r.a,{title:"account.whitelist.white_by"},c.a.createElement("div",{style:{paddingBottom:"1rem"},className:"small-12"},c.a.createElement("div",null,c.a.createElement(T,{emptyText:"account.whitelist.empty_white_by",account:t,list:t.get("whitelisting_accounts")})))),c.a.createElement(r.a,{title:"account.whitelist.black_by"},c.a.createElement("div",{style:{paddingBottom:"1rem"},className:"small-12"},c.a.createElement("div",null,c.a.createElement(T,{emptyText:"account.whitelist.empty_black_by",account:t,list:t.get("blacklisting_accounts")}))))))))}}]),e}(c.a.Component);e.default=k}});
//# sourceMappingURL=30.js.map