(window.webpackJsonp=window.webpackJsonp||[]).push([[16,10],{1624:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),o=n.n(i),s=n(87),c=n(7),l=n(11),m=n(3),u=n(15),p=n(1),b=n.n(p),f=n(18),h=n(12),d=n(10),v=n(24),g=n(2),_=n.n(g),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var C=function(e){function t(){return w(this,t),k(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return E(t,r.a.Component),y(t,[{key:"_onCardClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.committee_member.get("name"))}},{key:"render",value:function(){var e=m.b.getCommitteeMemberById(this.props.committee_member.get("id"));return e?r.a.createElement("div",{className:"grid-content account-card",onClick:this._onCardClick.bind(this)},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"text-center"},this.props.committee_member.get("name")),r.a.createElement("div",{className:"card-content clearfix"},r.a.createElement("div",{className:"float-left"},r.a.createElement(s.a,{account:this.props.committee_member.get("name"),size:{height:64,width:64}})),r.a.createElement("ul",{className:"balances"},r.a.createElement("li",null,r.a.createElement(b.a,{content:"account.votes.votes"}),":"," ",r.a.createElement(u.a,{decimalOffset:5,amount:e.get("total_votes"),asset:"1.3.0"})))))):null}}]),t}();C.propTypes={committee_member:c.a.ChainAccount.isRequired},C.contextTypes={router:_.a.object.isRequired},C=Object(l.a)(C);var O=function(e){function t(){return w(this,t),k(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return E(t,r.a.Component),y(t,[{key:"_onRowClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.committee_member.get("name"))}},{key:"render",value:function(){var e=this.props,t=e.committee_member,n=e.rank,a=m.b.getCommitteeMemberById(t.get("id"));if(!a)return null;var i=a.get("url");return i=i&&i.length>0&&-1===i.indexOf("http")?"http://"+i:i,r.a.createElement("tr",null,r.a.createElement("td",{onClick:this._onRowClick.bind(this)},n),r.a.createElement("td",{onClick:this._onRowClick.bind(this)},t.get("name")),r.a.createElement("td",{onClick:this._onRowClick.bind(this)},r.a.createElement(u.a,{amount:a.get("total_votes"),asset:"1.3.0"})),r.a.createElement("td",null,r.a.createElement("a",{href:i,rel:"noopener noreferrer",target:"_blank"},a.get("url"))))}}]),t}();O.propTypes={committee_member:c.a.ChainAccount.isRequired},O.contextTypes={router:_.a.object.isRequired},O=Object(l.a)(O);var T=function(e){function t(){w(this,t);var e=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={sortBy:"rank",inverseSort:!0},e}return E(t,r.a.Component),y(t,[{key:"_setSort",value:function(e){this.setState({sortBy:e,inverseSort:e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort})}},{key:"render",value:function(){var e=this,t=this.props,n=t.committee_members,a=t.cardView,i=t.membersList,o=this.state,s=o.sortBy,c=o.inverseSort,l=null,u={};return n.filter(function(e){return!!e&&-1!==i.indexOf(e.get("id"))}).sort(function(e,t){if(e&&t)return parseInt(t.get("total_votes"),10)-parseInt(e.get("total_votes"),10)}).forEach(function(e,t){e&&(u[e.get("id")]=t+1)}),n.length>0&&n[1]&&(l=n.filter(function(t){if(!t)return!1;var n=m.b.getObject(t.get("committee_member_account"));return!!n&&-1!==n.get("name").indexOf(e.props.filter)}).sort(function(e,t){var n=m.b.getObject(e.get("committee_member_account")),a=m.b.getObject(t.get("committee_member_account"));if(!n||!a)return 0;switch(s){case"name":return n.get("name")>a.get("name")?c?1:-1:n.get("name")<a.get("name")?c?-1:1:0;case"rank":return c?u[e.get("id")]-u[t.get("id")]:u[t.get("id")]-u[e.get("id")];default:return c?parseInt(e.get(s),10)-parseInt(t.get(s),10):parseInt(t.get(s),10)-parseInt(e.get(s),10)}}).map(function(e){return a?r.a.createElement(C,{key:e.get("id"),rank:u[e.get("id")],committee_member:e.get("committee_member_account")}):r.a.createElement(O,{key:e.get("id"),rank:u[e.get("id")],committee_member:e.get("committee_member_account")})})),a?r.a.createElement("div",{className:"grid-block no-margin small-up-1 medium-up-2 large-up-3"},l):r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"rank")},r.a.createElement(b.a,{content:"explorer.witnesses.rank"})),r.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"name")},r.a.createElement(b.a,{content:"account.votes.name"})),r.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"total_votes")},r.a.createElement(b.a,{content:"account.votes.votes"})),r.a.createElement("th",null,r.a.createElement(b.a,{content:"account.votes.url"})))),r.a.createElement("tbody",null,l))}}]),t}();T.propTypes={committee_members:c.a.ChainObjectsList.isRequired},T=Object(l.a)(T,{show_loader:!0});var j=function(e){function t(e){w(this,t);var n=k(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={filterCommitteeMember:e.filterCommitteeMember||"",cardView:e.cardView},n}return E(t,r.a.Component),y(t,[{key:"shouldComponentUpdate",value:function(e,t){return!o.a.is(e.globalObject,this.props.globalObject)||t.filterCommitteeMember!==this.state.filterCommitteeMember||t.cardView!==this.state.cardView}},{key:"_onFilter",value:function(e){e.preventDefault(),this.setState({filterCommitteeMember:e.target.value.toLowerCase()}),h.a.changeViewSetting({filterCommitteeMember:e.target.value.toLowerCase()})}},{key:"_toggleView",value:function(){h.a.changeViewSetting({cardViewCommittee:!this.state.cardView}),this.setState({cardView:!this.state.cardView})}},{key:"render",value:function(){var e=this.props.globalObject;e=e.toJS();var t=[];for(var n in e.active_committee_members)e.active_committee_members.hasOwnProperty(n)&&t.push(e.active_committee_members[n]);var a=r.a.createElement("div",{className:"grid-block"},r.a.createElement("div",{className:"grid-block vertical medium-horizontal"},r.a.createElement("div",{className:"grid-block shrink"},r.a.createElement("div",{className:"grid-content"},r.a.createElement("h5",null,r.a.createElement(b.a,{content:"explorer.committee_members.active"}),":"," ",Object.keys(e.active_committee_members).length),r.a.createElement("br",null),r.a.createElement("div",{className:"view-switcher"},r.a.createElement("span",{className:"button outline",onClick:this._toggleView.bind(this)},this.state.cardView?r.a.createElement(b.a,{content:"explorer.witnesses.table"}):r.a.createElement(b.a,{content:"explorer.witnesses.card"}))))),r.a.createElement("div",{className:"grid-block vertical"},r.a.createElement("div",{className:"grid-block vertical shrink"},r.a.createElement(b.a,{component:"h3",content:"markets.filter"}),r.a.createElement("input",{type:"text",value:this.state.filterCommitteeMember,onChange:this._onFilter.bind(this)})),r.a.createElement("div",{className:"grid-content"},r.a.createElement(T,{committee_members:o.a.List(e.active_committee_members),membersList:e.active_committee_members,filter:this.state.filterCommitteeMember,cardView:this.state.cardView})))));return r.a.createElement(v.default,{tab:"committee_members",content:a})}}]),t}();j.propTypes={globalObject:c.a.ChainObject.isRequired},j.defaultProps={globalObject:"2.0.0"},j=Object(l.a)(j);var x=function(e){function t(){return w(this,t),k(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return E(t,r.a.Component),y(t,[{key:"render",value:function(){return r.a.createElement(j,this.props)}}]),t}();x=Object(f.connect)(x,{listenTo:function(){return[d.a]},getProps:function(){return{cardView:d.a.getState().viewSettings.get("cardViewCommittee"),filterCommitteeMember:d.a.getState().viewSettings.get("filterCommitteeMember")}}}),t.default=x},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(29),o=n(2),s=n.n(o),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tabs:[{name:"blocks",link:"/explorer/blocks",translate:"explorer.blocks.title"},{name:"assets",link:"/explorer/assets",translate:"explorer.assets.title"},{name:"accounts",link:"/explorer/accounts",translate:"explorer.accounts.title"},{name:"witnesses",link:"/explorer/witnesses",translate:"explorer.witnesses.title"},{name:"committee_members",link:"/explorer/committee-members",translate:"explorer.committee_members.title"},{name:"markets",link:"/explorer/markets",translate:"markets.title"},{name:"fees",link:"/explorer/fees",translate:"fees.title"}]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),c(t,[{key:"render",value:function(){for(var e=this,t=this.state.tabs.findIndex(function(t){return t.name===e.props.tab}),n=[],a=0;a<this.state.tabs.length;a++){var o=this.state.tabs[a],s=t==a?this.props.content:null,c=t==a?"":o.link;n.push(r.a.createElement(i.a,{key:a,title:o.translate,isLinkTo:c},s))}return r.a.createElement(i.b,{defaultActiveTab:t,segmented:!1,setting:"explorerTab-{this.props.tab}",className:"account-tabs",tabsClass:"account-overview bordered-header content-block",contentClass:"tab-content padding"},n)}}]),t}();l.propTypes={tab:s.a.string,content:s.a.object},l.defaultProps={tab:"blocks",content:null},t.default=l},29:function(e,t,n){"use strict";n.d(t,"b",function(){return _}),n.d(t,"a",function(){return g});var a=n(0),r=n.n(a),i=n(2),o=n.n(i),s=(n(1),n(8)),c=n.n(s),l=n(18),m=n(12),u=n(10),p=n(5),b=n.n(p),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g=function(e){function t(){return h(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return v(t,r.a.Component),f(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,i=e.title,o=e.className,s=e.updatedTab,l=e.disabled,m=e.subText,u=c()({"is-active":t},o);return"string"==typeof i&&i.indexOf(".")>0&&(i=b.a.translate(i)),this.props.collapsed?("string"==typeof m&&(m=m.trim()),r.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},r.a.createElement("span",{className:"tab-title"},i,s?"*":"",m&&" (",m&&m,m&&")"))):r.a.createElement("li",{className:u,onClick:l?null:a.bind(this,n,this.props.isLinkTo)},r.a.createElement("a",null,r.a.createElement("span",{className:"tab-title"},i,s?"*":""),m&&r.a.createElement("div",{className:"tab-subtext"},m)))}}]),t}();g.propTypes={changeTab:o.a.func,isActive:o.a.bool.isRequired,index:o.a.number.isRequired,className:o.a.string,isLinkTo:o.a.string,subText:o.a.oneOfType([o.a.object,o.a.string])},g.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var _=function(e){function t(e){h(this,t);var n=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return v(t,r.a.Component),f(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){e!==this.state.activeTab&&(""===t?(this.props.setting&&m.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)):this.context.router.push(t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,i=t.tabsClass,o=t.style,s=t.segmented,l=this.state.width<900&&r.a.Children.count(n)>2,m=null,u=r.a.Children.map(n,function(t,n){if(!t)return null;if(l&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(m=t.props.children),r.a.cloneElement(t,{collapsed:l,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return null!==e});return m||(m=u[0].props.children),r.a.createElement("div",{className:c()(this.props.actionButtons?"with-buttons":"",this.props.className)},r.a.createElement("div",{className:"service-selector"},r.a.createElement("ul",{style:o,className:c()("button-group no-margin",i,{segmented:s})},l?r.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},r.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},u)):u,this.props.actionButtons?r.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),r.a.createElement("div",{className:c()("tab-content",a)},m))}}]),t}();_.propTypes={setting:o.a.string,defaultActiveTab:o.a.number,segmented:o.a.bool},_.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},_.contextTypes={router:o.a.object.isRequired},_=Object(l.connect)(_,{listenTo:function(){return[u.a]},getProps:function(){return{viewSettings:u.a.getState().viewSettings}}})}}]);