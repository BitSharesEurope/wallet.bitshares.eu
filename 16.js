webpackJsonp([16,25],{1512:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return v}),n.d(t,"a",function(){return g});var l=n(1),o=n.n(l),c=n(3),u=n.n(c),p=n(29),m=n.n(p),d=n(26),b=(n.n(d),n(27)),f=n(38),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,r=e.title,s=e.className,i=e.disabled,l=m()({"is-active":t},s);return this.props.collapsed?o.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},"string"==typeof r&&r.indexOf(".")>0?o.a.createElement(u.a,{className:"tab-title",content:r}):o.a.createElement("span",{className:"tab-title"},r)):o.a.createElement("li",{className:l,onClick:i?null:a.bind(this,n,this.props.isLinkTo)},o.a.createElement("a",null,"string"==typeof r&&r.indexOf(".")>0?o.a.createElement(u.a,{className:"tab-title",content:r}):o.a.createElement("span",{className:"tab-title"},r),this.props.subText?o.a.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}(o.a.Component);g.propTypes={changeTab:l.PropTypes.func,isActive:l.PropTypes.bool.isRequired,index:l.PropTypes.number.isRequired,className:l.PropTypes.string,isLinkTo:l.PropTypes.string},g.defaultProps={isActive:!1,index:0,className:"",isLinkTo:""};var v=function(e){function t(e){r(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return i(t,e),h(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){if(e!==this.state.activeTab){if(""!==t)return void this.context.router.push(t);this.props.setting&&b.a.changeViewSetting(a({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,r=t.tabsClass,s=t.style,i=t.segmented,l=this.state.width<900&&o.a.Children.count(n)>2,c=null,u=[],p=o.a.Children.map(n,function(t,n){if(!t)return null;if(l&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(c=t.props.children),o.a.cloneElement(t,{collapsed:l,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&u.push(e.props.index),null!==e});return c||(c=p[0].props.children),o.a.createElement("div",{className:m()(this.props.actionButtons?"with-buttons":"",this.props.className)},o.a.createElement("div",{className:"service-selector"},o.a.createElement("ul",{style:s,className:m()("button-group no-margin",r,{segmented:i})},l?o.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},o.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},p)):p,this.props.actionButtons?o.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),o.a.createElement("div",{className:a+" tab-content"},c))}}]),t}(o.a.Component);v.propTypes={setting:l.PropTypes.string,defaultActiveTab:l.PropTypes.number,segmented:l.PropTypes.bool},v.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},v.contextTypes={router:o.a.PropTypes.object.isRequired},v=Object(d.connect)(v,{listenTo:function(){return[f.a]},getProps:function(){return{viewSettings:f.a.getState().viewSettings}}})},1676:function(e,t,n){var a=n(1677);"string"==typeof a&&(a=[[e.i,a,""]]);n(1504)(a,{});a.locals&&(e.exports=a.locals)},1677:function(e,t,n){t=e.exports=n(1503)(),t.push([e.i,".active-witness>td{background-color:rgba(80,210,194,.4);transition:background-color .6s ease}.clickable{cursor:pointer;user-select:none}.view-switcher{padding-top:1rem;text-align:right}",""])},1857:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),l=n.n(i),o=n(18),c=n.n(o),u=n(285),p=n(34),m=n(32),d=n(4),b=n(68),f=n(3),h=n.n(f),g=n(679),v=n(26),_=(n.n(v),n(27)),w=n(38),y=n(29),E=n.n(y),k=n(41),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(1676);var x=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),O(t,[{key:"_onCardClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.witness.get("name"))}},{key:"render",value:function(){var e=d.b.getWitnessById(this.props.witness.get("id"));if(!e)return null;var t=e.get("total_votes"),n=e.get("last_aslot"),a={};a=this.props.most_recent-n>100?{borderLeft:"1px solid #FCAB53"}:{borderLeft:"1px solid #50D2C2"};var r=new Date(Date.now()-(this.props.most_recent-n)*d.b.getObject("2.0.0").getIn(["parameters","block_interval"])*1e3);return l.a.createElement("div",{className:"grid-content account-card",onClick:this._onCardClick.bind(this)},l.a.createElement("div",{className:"card",style:a},l.a.createElement("h4",{className:"text-center"},"#",this.props.rank,": ",this.props.witness.get("name")),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"text-center"},l.a.createElement(u.a,{account:this.props.witness.get("name"),size:{height:64,width:64}})),l.a.createElement("br",null),l.a.createElement("table",{className:"table key-value-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Votes"),l.a.createElement("td",null,l.a.createElement(b.a,{amount:t,asset:"1.3.0",decimalOffset:5}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Last Block"),l.a.createElement("td",null,l.a.createElement(g.a,{time:new Date(r)}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Missed"),l.a.createElement("td",null,e.get("total_missed"))))))))}}]),t}(l.a.Component);x.propTypes={witness:p.a.ChainAccount.isRequired},x.contextTypes={router:l.a.PropTypes.object.isRequired},x=Object(m.a)(x,{keep_updating:!0});var T=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),O(t,[{key:"_onRowClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.witness.get("name"))}},{key:"render",value:function(){var e=this.props,t=e.witness,n=e.isCurrent,a=e.rank,r=d.b.getWitnessById(this.props.witness.get("id"));if(!r)return null;var s=(r.get("total_votes"),r.get("last_aslot")),i={};i=this.props.most_recent-s>100?{borderLeft:"1px solid #FCAB53"}:{borderLeft:"1px solid #50D2C2"};var o=new Date(Date.now()-(this.props.most_recent-s)*d.b.getObject("2.0.0").getIn(["parameters","block_interval"])*1e3),c=n?"active-witness":"",u=r.get("total_missed"),p=E()("txtlabel",{success:u<=500},{info:u>500&&u<=1250},{warning:u>1250&&u<=2e3},{error:u>=200});return l.a.createElement("tr",{className:c,onClick:this._onRowClick.bind(this)},l.a.createElement("td",null,a),l.a.createElement("td",{style:i},t.get("name")),l.a.createElement("td",null,l.a.createElement(g.a,{time:new Date(o)})),l.a.createElement("td",null,r.get("last_confirmed_block_num")),l.a.createElement("td",{className:p},u),l.a.createElement("td",null,l.a.createElement(b.a,{amount:r.get("total_votes"),asset:"1.3.0",decimalOffset:5})))}}]),t}(l.a.Component);T.propTypes={witness:p.a.ChainAccount.isRequired},T.contextTypes={router:l.a.PropTypes.object.isRequired},T=Object(m.a)(T,{keep_updating:!0});var j=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={sortBy:"rank",inverseSort:!0},e}return s(t,e),O(t,[{key:"_setSort",value:function(e){this.setState({sortBy:e,inverseSort:e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort})}},{key:"render",value:function(){var e=this,t=this.props,n=t.witnesses,a=t.current,r=t.cardView,s=t.witnessList,i=this.state,o=i.sortBy,c=i.inverseSort,u=0,p={};n.filter(function(e){return!!e&&-1!==s.indexOf(e.get("id"))}).sort(function(e,t){if(e&&t)return parseInt(t.get("total_votes"),10)-parseInt(e.get("total_votes"),10)}).forEach(function(e,t){if(e){var n=e.get("last_aslot");u<n&&(u=n),p[e.get("id")]=t+1}});var m=null;return n.length>0&&n[1]&&(m=n.filter(function(t){if(!t)return!1;var n=d.b.getObject(t.get("witness_account"));if(!n)return!1;var a=n.get("name");return!!a&&-1!==a.indexOf(e.props.filter)}).sort(function(e,t){var n=d.b.getObject(e.get("witness_account")),a=d.b.getObject(t.get("witness_account"));if(!n||!a)return 0;switch(o){case"name":return n.get("name")>a.get("name")?c?1:-1:n.get("name")<a.get("name")?c?-1:1:0;case"rank":return c?p[e.get("id")]-p[t.get("id")]:p[t.get("id")]-p[e.get("id")];default:return c?parseInt(e.get(o),10)-parseInt(t.get(o),10):parseInt(t.get(o),10)-parseInt(e.get(o),10)}}).map(function(t){return r?l.a.createElement(x,{key:t.get("id"),rank:p[t.get("id")],witness:t.get("witness_account"),most_recent:e.props.current_aslot}):l.a.createElement(T,{key:t.get("id"),rank:p[t.get("id")],isCurrent:a===t.get("id"),witness:t.get("witness_account"),most_recent:e.props.current_aslot})})),r?l.a.createElement("div",{className:"grid-block small-up-1 medium-up-2 large-up-3"},m):l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"rank")},l.a.createElement(h.a,{content:"explorer.witnesses.rank"})),l.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"name")},l.a.createElement(h.a,{content:"account.votes.name"})),l.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"last_aslot")},l.a.createElement(h.a,{content:"explorer.blocks.last_block"})),l.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"last_confirmed_block_num")},l.a.createElement(h.a,{content:"explorer.witnesses.last_confirmed"})),l.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"total_missed")},l.a.createElement(h.a,{content:"explorer.witnesses.missed"})),l.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"total_votes")},l.a.createElement(h.a,{content:"account.votes.votes"})))),l.a.createElement("tbody",null,m))}}]),t}(l.a.Component);j.propTypes={witnesses:p.a.ChainObjectsList.isRequired},j=Object(m.a)(j,{keep_updating:!0,show_loader:!0});var C=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={filterWitness:e.filterWitness||"",cardView:e.cardView},n}return s(t,e),O(t,[{key:"_onFilter",value:function(e){e.preventDefault(),this.setState({filterWitness:e.target.value.toLowerCase()}),_.a.changeViewSetting({filterWitness:e.target.value.toLowerCase()})}},{key:"_toggleView",value:function(){_.a.changeViewSetting({cardView:!this.state.cardView}),this.setState({cardView:!this.state.cardView})}},{key:"render",value:function(){var e=this.props,t=e.dynGlobalObject,n=e.globalObject;t=t.toJS(),n=n.toJS();var a=d.b.getObject(t.current_witness),r=null;a&&(r=d.b.getObject(a.get("witness_account")));var s=l.a.createElement("div",{className:"grid-block"},l.a.createElement("div",{className:"grid-block page-layout"},l.a.createElement("div",{className:"grid-block vertical small-5 medium-3"},l.a.createElement("div",{className:"grid-content"},l.a.createElement("br",null),l.a.createElement("table",{className:"table key-value-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(h.a,{content:"explorer.witnesses.current"})),l.a.createElement("td",null,r?r.get("name"):null)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(h.a,{content:"explorer.blocks.active_witnesses"})),l.a.createElement("td",null,Object.keys(n.active_witnesses).length)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(h.a,{content:"explorer.witnesses.participation"})),l.a.createElement("td",null,t.participation,"%")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(h.a,{content:"explorer.witnesses.pay"})),l.a.createElement("td",null,l.a.createElement(b.a,{amount:n.parameters.witness_pay_per_block,asset:"1.3.0"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(h.a,{content:"explorer.witnesses.budget"})),l.a.createElement("td",null," ",l.a.createElement(b.a,{amount:t.witness_budget,asset:"1.3.0"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(h.a,{content:"explorer.witnesses.next_vote"})),l.a.createElement("td",null," ",l.a.createElement(g.a,{time:new Date(t.next_maintenance_time+"Z")}))),l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement(h.a,{component:"h4",content:"markets.filter"})," "),l.a.createElement("td",null," ",l.a.createElement("input",{type:"text",value:this.state.filterWitness,onChange:this._onFilter.bind(this)})," ")))),l.a.createElement("div",{className:"view-switcher"},l.a.createElement("span",{className:"button outline",onClick:this._toggleView.bind(this)},this.state.cardView?l.a.createElement(h.a,{content:"explorer.witnesses.table"}):l.a.createElement(h.a,{content:"explorer.witnesses.card"}))))),l.a.createElement("div",{className:"grid-block"},l.a.createElement("div",{className:"grid-content "},l.a.createElement(j,{current_aslot:t.current_aslot,current:a?a.get("id"):null,witnesses:c.a.List(n.active_witnesses),witnessList:n.active_witnesses,filter:this.state.filterWitness,cardView:this.state.cardView})))));return l.a.createElement(k.default,{tab:"witnesses",content:s})}}]),t}(l.a.Component);C.propTypes={globalObject:p.a.ChainObject.isRequired,dynGlobalObject:p.a.ChainObject.isRequired},C.defaultProps={globalObject:"2.0.0",dynGlobalObject:"2.1.0"},C=Object(m.a)(C,{keep_updating:!0});var N=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),O(t,[{key:"render",value:function(){return l.a.createElement(C,this.props)}}]),t}(l.a.Component);N=Object(v.connect)(N,{listenTo:function(){return[w.a]},getProps:function(){return{cardView:w.a.getState().viewSettings.get("cardView"),filterWitness:w.a.getState().viewSettings.get("filterWitness")}}}),t.default=N},41:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),l=n.n(i),o=(n(33),n(3)),c=(n.n(o),n(56),n(1512)),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tabs:[{name:"blocks",link:"/explorer/blocks",translate:"explorer.blocks.title"},{name:"assets",link:"/explorer/assets",translate:"explorer.assets.title"},{name:"accounts",link:"/explorer/accounts",translate:"explorer.accounts.title"},{name:"witnesses",link:"/explorer/witnesses",translate:"explorer.witnesses.title"},{name:"committee_members",link:"/explorer/committee-members",translate:"explorer.committee_members.title"},{name:"markets",link:"/explorer/markets",translate:"markets.title"},{name:"fees",link:"/explorer/fees",translate:"fees.title"}]},n}return s(t,e),u(t,[{key:"render",value:function(){for(var e=this,t=this.state.tabs.findIndex(function(t){return t.name===e.props.tab}),n=[],a=0;a<this.state.tabs.length;a++){var r=this.state.tabs[a],s=t==a?this.props.content:null,i=t==a?"":r.link;n.push(l.a.createElement(c.a,{key:a,title:r.translate,isLinkTo:i},s))}return l.a.createElement(c.b,{defaultActiveTab:t,segmented:!1,setting:"explorerTab-{this.props.tab}",className:"account-tabs",tabsClass:"account-overview no-padding bordered-header content-block"},n)}}]),t}(l.a.Component);p.propTypes={tab:l.a.PropTypes.string,content:l.a.PropTypes.object},p.defaultProps={tab:"blocks",content:null},t.default=p}});
//# sourceMappingURL=16.js.map