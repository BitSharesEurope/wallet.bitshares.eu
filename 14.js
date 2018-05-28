(window.webpackJsonp=window.webpackJsonp||[]).push([[14,10],{1650:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),s=n(51),i=n.n(s),c=n(130),l=n(2),u=n.n(l),p=n(9),f=n(6),m=n.n(f),h=n(1),b=n.n(h),d=n(27),v=n(7),y=n(13),g=n(11),E=n(50),w=n(18),_=n(36),T=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var j=function(e){function t(){return k(this,t),O(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return C(t,r.a.Component),T(t,[{key:"shouldComponentUpdate",value:function(e){return e.contacts!==this.props.contacts||e.account!==this.props.account}},{key:"_onAddContact",value:function(e,t){t.preventDefault(),d.a.addAccountContact(e)}},{key:"_onRemoveContact",value:function(e,t){t.preventDefault(),d.a.removeAccountContact(e)}},{key:"render",value:function(){var e=this.props,t=e.account,n=e.contacts;if(!t)return null;var a=t.getIn(["balances","1.3.0"])||null,o=t.get("name");return r.a.createElement("tr",{key:t.get("id")},r.a.createElement("td",null,t.get("id")),n.has(o)?r.a.createElement("td",{onClick:this._onRemoveContact.bind(this,o)},r.a.createElement(y.a,{name:"minus-circle",title:"icons.minus_circle.remove_contact"})):r.a.createElement("td",{onClick:this._onAddContact.bind(this,o)},r.a.createElement(y.a,{name:"plus-circle",title:"icons.plus_circle.add_contact"})),r.a.createElement("td",null,r.a.createElement(p.b,{to:"/account/"+o+"/overview"},o)),r.a.createElement("td",null,a?r.a.createElement(E.a,{balance:a}):"n/a"),r.a.createElement("td",null,a?r.a.createElement(E.a,{balance:a,asPercentage:!0}):"n/a"))}}]),t}();j.propTypes={account:v.a.ChainAccount.isRequired},j.defaultProps={tempComponent:"tr",autosubscribe:!1},j=Object(g.a)(j);var x=function(e){return r.a.createElement(j,e)};x=Object(w.connect)(x,{listenTo:function(){return[o.a]},getProps:function(){return{contacts:o.a.getState().accountContacts}}});var P=function(e){function t(e){k(this,t);var n=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={searchTerm:e.searchTerm,isLoading:!1},n._searchAccounts=Object(c.a)(n._searchAccounts,200),n}return C(t,r.a.Component),T(t,[{key:"shouldComponentUpdate",value:function(e,t){return!m.a.is(e.searchAccounts,this.props.searchAccounts)||t.searchTerm!==this.state.searchTerm||t.isLoading!==this.state.isLoading}},{key:"_onSearchChange",value:function(e){this.setState({searchTerm:e.target.value.toLowerCase(),isLoading:!0}),this._searchAccounts(e.target.value)}},{key:"_searchAccounts",value:function(e){d.a.accountSearch(e),this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this.props.searchAccounts,t=this.state.searchTerm,n=null;return e.size>0&&t&&t.length>0&&(n=e.filter(function(e){return-1!==e.indexOf(t)}).sort(function(e,t){return e>t?1:e<t?-1:0}).map(function(e,t){return r.a.createElement(x,{key:t,account:e})}).toArray()),r.a.createElement("div",{className:"grid-block"},r.a.createElement("div",{className:"grid-block vertical medium-6 medium-offset-3"},r.a.createElement("div",{className:"grid-content shrink"},r.a.createElement(b.a,{component:"h3",content:"explorer.accounts.title"}),r.a.createElement("input",{type:"text",value:this.state.searchTerm,onChange:this._onSearchChange.bind(this)})),r.a.createElement("div",{className:"grid-content"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(b.a,{component:"span",content:"explorer.assets.id"})),r.a.createElement("th",null,r.a.createElement(y.a,{name:"user",title:"icons.user.account"})),r.a.createElement("th",null,r.a.createElement(b.a,{component:"span",content:"account.name"})),r.a.createElement("th",null,r.a.createElement(b.a,{component:"span",content:"gateway.balance"})),r.a.createElement("th",null,r.a.createElement(b.a,{component:"span",content:"account.percent"})))),r.a.createElement("tbody",null,this.state.isLoading?r.a.createElement("tr",{colSpan:"5"}):n)),this.state.isLoading?r.a.createElement("div",{style:{textAlign:"center",padding:10}},r.a.createElement(_.a,{type:"three-bounce"})):null)))}}]),t}();P.defaultProps={searchAccounts:{}},P.propTypes={searchAccounts:u.a.object.isRequired};var A=P,S=n(24),N=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var L=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),N(t,[{key:"render",value:function(){var e=r.a.createElement(i.a,{stores:[o.a],inject:{searchAccounts:function(){return o.a.getState().searchAccounts},searchTerm:function(){return o.a.getState().searchTerm}}},r.a.createElement(A,null));return r.a.createElement(S.default,{tab:"accounts",content:e})}}]),t}();t.default=L},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(29),s=n(2),i=n.n(s),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tabs:[{name:"blocks",link:"/explorer/blocks",translate:"explorer.blocks.title"},{name:"assets",link:"/explorer/assets",translate:"explorer.assets.title"},{name:"accounts",link:"/explorer/accounts",translate:"explorer.accounts.title"},{name:"witnesses",link:"/explorer/witnesses",translate:"explorer.witnesses.title"},{name:"committee_members",link:"/explorer/committee-members",translate:"explorer.committee_members.title"},{name:"markets",link:"/explorer/markets",translate:"markets.title"},{name:"fees",link:"/explorer/fees",translate:"fees.title"}]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),c(t,[{key:"render",value:function(){for(var e=this,t=this.state.tabs.findIndex(function(t){return t.name===e.props.tab}),n=[],a=0;a<this.state.tabs.length;a++){var s=this.state.tabs[a],i=t==a?this.props.content:null,c=t==a?"":s.link;n.push(r.a.createElement(o.a,{key:a,title:s.translate,isLinkTo:c},i))}return r.a.createElement(o.b,{defaultActiveTab:t,segmented:!1,setting:"explorerTab-{this.props.tab}",className:"account-tabs",tabsClass:"account-overview bordered-header content-block",contentClass:"tab-content padding"},n)}}]),t}();l.propTypes={tab:i.a.string,content:i.a.object},l.defaultProps={tab:"blocks",content:null},t.default=l},29:function(e,t,n){"use strict";n.d(t,"b",function(){return g}),n.d(t,"a",function(){return y});var a=n(0),r=n.n(a),o=n(2),s=n.n(o),i=(n(1),n(8)),c=n.n(i),l=n(18),u=n(12),p=n(10),f=n(5),m=n.n(f),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=function(e){function t(){return b(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,r.a.Component),h(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,o=e.title,s=e.className,i=e.updatedTab,l=e.disabled,u=e.subText,p=c()({"is-active":t},s);return"string"==typeof o&&o.indexOf(".")>0&&(o=m.a.translate(o)),this.props.collapsed?("string"==typeof u&&(u=u.trim()),r.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},r.a.createElement("span",{className:"tab-title"},o,i?"*":"",u&&" (",u&&u,u&&")"))):r.a.createElement("li",{className:p,onClick:l?null:a.bind(this,n,this.props.isLinkTo)},r.a.createElement("a",null,r.a.createElement("span",{className:"tab-title"},o,i?"*":""),u&&r.a.createElement("div",{className:"tab-subtext"},u)))}}]),t}();y.propTypes={changeTab:s.a.func,isActive:s.a.bool.isRequired,index:s.a.number.isRequired,className:s.a.string,isLinkTo:s.a.string,subText:s.a.oneOfType([s.a.object,s.a.string])},y.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var g=function(e){function t(e){b(this,t);var n=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return v(t,r.a.Component),h(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){e!==this.state.activeTab&&(""===t?(this.props.setting&&u.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)):this.context.router.push(t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,o=t.tabsClass,s=t.style,i=t.segmented,l=this.state.width<900&&r.a.Children.count(n)>2,u=null,p=r.a.Children.map(n,function(t,n){if(!t)return null;if(l&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(u=t.props.children),r.a.cloneElement(t,{collapsed:l,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return null!==e});return u||(u=p[0].props.children),r.a.createElement("div",{className:c()(this.props.actionButtons?"with-buttons":"",this.props.className)},r.a.createElement("div",{className:"service-selector"},r.a.createElement("ul",{style:s,className:c()("button-group no-margin",o,{segmented:i})},l?r.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},r.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},p)):p,this.props.actionButtons?r.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),r.a.createElement("div",{className:c()("tab-content",a)},u))}}]),t}();g.propTypes={setting:s.a.string,defaultActiveTab:s.a.number,segmented:s.a.bool},g.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},g.contextTypes={router:s.a.object.isRequired},g=Object(l.connect)(g,{listenTo:function(){return[p.a]},getProps:function(){return{viewSettings:p.a.getState().viewSettings}}})}}]);