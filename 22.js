webpackJsonp([22],{1199:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=n.n(i),c=n(26),l=n.n(c),u=n(20),p=n.n(u),m=n(22),d=n.n(m),h=n(173),f=n(259),b=n(35),v=n(6),g=n(1464),y=n(1460),_=n(1461),E=n(398),w=n(48),k=n.n(w),x=n(1271),P=n(108),A=n(39),O=n(40),C=n(1296),j=n(41),I=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),T=new f.a,S=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={proxy_account_id:"",witnesses:null,committee:null,vote_ids:l.a.Set(),lastBudgetObject:null,showExpired:!1},n.onProxyAccountChange=n.onProxyAccountChange.bind(n),n.onPublish=n.onPublish.bind(n),n.onReset=n.onReset.bind(n),n._onUpdate=n._onUpdate.bind(n),n}return r(t,e),I(t,[{key:"componentWillUnmount",value:function(){v.b.unsubscribe(this._onUpdate)}},{key:"_onUpdate",value:function(){this.forceUpdate()}},{key:"updateAccountData",value:function(e){var t=this,a=e.get("options"),o=a.get("voting_account");"1.2.5"===o&&(o="");var r=a.get("votes"),i=r.toArray(),s=l.a.Set(i);v.b.getObjectsByVoteIds(i),n.i(v.m)(v.b.getObjectByVoteID,i,5e3).then(function(e){var n=new l.a.List,a=new l.a.List,r=new l.a.Set;e.forEach(function(e){var t=e.get("committee_member_account");t?a=a.push(t):(t=e.get("worker_account"))||(t=e.get("witness_account"))&&(n=n.push(t))});var i={proxy_account_id:o,witnesses:n,committee:a,workers:r,vote_ids:s,prev_proxy_account_id:o,prev_witnesses:n,prev_committee:a,prev_workers:r,prev_vote_ids:s};t.setState(i)})}},{key:"isChanged",value:function(){var e=this.state;return e.proxy_account_id!==e.prev_proxy_account_id||e.witnesses!==e.prev_witnesses||e.committee!==e.prev_committee||!l.a.is(e.vote_ids,e.prev_vote_ids)}},{key:"componentWillMount",value:function(){this.updateAccountData(this.props.account),h.a.getFinalFeeAsset(this.props.account,"account_update"),this.getBudgetObject(),v.b.subscribe(this._onUpdate)}},{key:"componentDidMount",value:function(){this.getBudgetObject()}},{key:"componentWillReceiveProps",value:function(e){e.account!==this.props.account&&this.updateAccountData(e.account),this.getBudgetObject()}},{key:"onPublish",value:function(){function e(e,t){return e.includes(t)&&(e=e.delete(t)),e}var t=this,a=this.props.account.toJS(),o={account:a.id},r={memo_key:a.options.memo_key},i=this.state.proxy_account_id;r.voting_account=i||"1.2.5",r.num_witness=this.state.witnesses.size,r.num_committee=this.state.committee.size,o.new_options=r,o.fee={amount:0,asset_id:h.a.getFinalFeeAsset(a.id,"account_update")};var s=this.state.vote_ids,c=this._getWorkerArray(),l=new Date;c.forEach(function(t){t&&(new Date(t.get("work_end_date"))<=l&&(s=e(s,t.get("vote_for"))),s=e(s,t.get("vote_against")))}),n.i(v.m)(v.b.getWitnessById,this.state.witnesses.toArray(),4e3).then(function(e){var a=e.map(function(e){return e.get("vote_id")});return Promise.all([Promise.resolve(a),n.i(v.m)(v.b.getCommitteeMemberById,t.state.committee.toArray(),4e3)])}).then(function(e){o.new_options.votes=e[0].concat(e[1].map(function(e){return e.get("vote_id")})).concat(s.filter(function(e){return"2"===e.split(":")[0]}).toArray()).sort(function(e,t){var n=e.split(":"),a=t.split(":");return parseInt(n[1],10)-parseInt(a[1],10)});var t=T.new_transaction();t.add_type_operation("account_update",o),b.a.process_transaction(t,null,!0)})}},{key:"onReset",value:function(){var e=this,t=this.state;this.refs.voting_proxy&&this.refs.voting_proxy.refs.bound_component&&this.refs.voting_proxy.refs.bound_component.onResetProxy(),this.setState({proxy_account_id:t.prev_proxy_account_id,witnesses:t.prev_witnesses,committee:t.prev_committee,workers:t.prev_workers,vote_ids:t.prev_vote_ids},function(){e.updateAccountData(e.props.account)})}},{key:"onAddItem",value:function(e,t){var n={};n[e]=this.state[e].push(t),this.setState(n)}},{key:"onRemoveItem",value:function(e,t){var n={};n[e]=this.state[e].filter(function(e){return e!==t}),this.setState(n)}},{key:"onChangeVotes",value:function(e,t){var n={};n.vote_ids=this.state.vote_ids,e.length&&e.forEach(function(e){n.vote_ids=n.vote_ids.add(e)}),t&&t.forEach(function(e){n.vote_ids=n.vote_ids.delete(e)}),this.setState(n)}},{key:"onProxyAccountChange",value:function(e){this.setState({proxy_account_id:e?e.get("id"):""})}},{key:"validateAccount",value:function(e,t){return t?"witnesses"===e?n.i(v.m)(v.b.getWitnessById,[t.get("id")],3e3).then(function(e){return e[0]?null:"Not a witness"}):"committee"===e?n.i(v.m)(v.b.getCommitteeMemberById,[t.get("id")],3e3).then(function(e){return e[0]?null:"Not a committee member"}):null:null}},{key:"onClearProxy",value:function(){this.setState({proxy_account_id:""})}},{key:"_getTotalVotes",value:function(e){return parseInt(e.get("total_votes_for"),10)-parseInt(e.get("total_votes_against"),10)}},{key:"getBudgetObject",value:function(){var e=this.state.lastBudgetObject,t=void 0;if(t=v.b.getObject(e||"2.13.1")){var n=t.get("time"),a=new Date,o=parseInt(t.get("id").split(".")[2],10),r=o+Math.floor((a-new Date(n+"+00:00").getTime())/1e3/60/60)-1,i="2.13."+Math.max(o,r);v.b.getObject(i),this.setState({lastBudgetObject:i}),i!==r&&this.forceUpdate()}else if("2.13.1"!==e){var s=parseInt(e.split(".")[2],10)-1;this.setState({lastBudgetObject:"2.13."+(s-1)})}}},{key:"_toggleExpired",value:function(){this.setState({showExpired:!this.state.showExpired})}},{key:"_getWorkerArray",value:function(){for(var e=[],t=0;t<100;t++){var n="1.14."+t,a=v.b.getObject(n);if(null===a)break;e.push(a)}return e}},{key:"render",value:function(){var e=this,t=this.props.settings.get("unit")||"1.3.0",n="1.2.5"!==this.props.account.getIn(["options","voting_account"]),a=k()("button",{disabled:!this.isChanged()}),o=this.props,r=o.globalObject,i=(o.dynamicGlobal,this.state.showExpired),c=void 0;this.state.lastBudgetObject&&(c=v.b.getObject(this.state.lastBudgetObject));var u=0,m=0,h=r?parseInt(r.getIn(["parameters","worker_budget_per_day"]),10):0;c&&(h=Math.min(24*c.getIn(["record","worker_budget"]),h),u=Math.min(24*c.getIn(["record","worker_budget"]),h));var f=(r&&parseInt(r.getIn(["parameters","worker_budget_per_day"]),10),new Date),b=this._getWorkerArray(),w=b.filter(function(e){return!!e&&(new Date(e.get("work_end_date"))>f&&new Date(e.get("work_begin_date"))<=f)}).sort(function(t,n){return e._getTotalVotes(n)-e._getTotalVotes(t)}).map(function(n,a){var o=parseInt(n.get("daily_pay"),10);return h-=o,s.a.createElement(g.a,{preferredUnit:t,rest:h+o,rank:a+1,key:n.get("id"),worker:n.get("id"),vote_ids:e.state.vote_ids,onChangeVotes:e.onChangeVotes.bind(e)})});m=Math.max(0,h);var A=b.filter(function(e){return!!e&&new Date(e.get("work_begin_date"))>=f}).sort(function(t,n){return e._getTotalVotes(n)-e._getTotalVotes(t)}).map(function(n,a){var o=parseInt(n.get("daily_pay"),10);return h-=o,s.a.createElement(g.a,{preferredUnit:t,rest:h+o,rank:a+1,key:n.get("id"),worker:n.get("id"),vote_ids:e.state.vote_ids,onChangeVotes:e.onChangeVotes.bind(e)})}),O=b.filter(function(e){return!!e&&new Date(e.get("work_end_date"))<=f}).sort(function(t,n){return e._getTotalVotes(n)-e._getTotalVotes(t)}).map(function(n,a){var o=parseInt(n.get("daily_pay"),10);return h-=o,s.a.createElement(g.a,{preferredUnit:t,rest:h+o,rank:a+1,key:n.get("id"),worker:n.get("id"),vote_ids:e.state.vote_ids,onChangeVotes:e.onChangeVotes.bind(e)})}),I=r.get("active_witnesses").map(function(t){var n=v.b.getObject(t);return n&&e.state.witnesses?e.state.witnesses.includes(n.get("witness_account"))?null:n.get("witness_account"):null}).filter(function(e){return null!==e}),T=r.get("active_committee_members").map(function(t){var n=v.b.getObject(t);return n&&e.state.committee?e.state.committee.includes(n.get("committee_member_account"))?null:n.get("committee_member_account"):null}).filter(function(e){return null!==e});return s.a.createElement("div",{className:"grid-content"},s.a.createElement(E.a,{style:{maxWidth:"800px"},path:"components/AccountVoting"}),s.a.createElement("div",{className:"content-block"},s.a.createElement("button",{className:k()(a,{success:this.isChanged()}),onClick:this.onPublish,tabIndex:4},s.a.createElement(p.a,{content:"account.votes.publish"})),s.a.createElement("button",{className:"button outline "+a,onClick:this.onReset,tabIndex:8},s.a.createElement(p.a,{content:"account.perm.reset"}))),s.a.createElement(x.a,{setting:"votingTab",tabsClass:"no-padding bordered-header",contentClass:"grid-content no-padding"},s.a.createElement(x.b,{title:"account.votes.proxy_short"},s.a.createElement("div",{className:"content-block"},s.a.createElement(E.a,{style:{maxWidth:"800px"},path:"components/AccountVotingProxy"}),s.a.createElement(y.a,{ref:"voting_proxy",existingProxy:this.props.account.getIn(["options","voting_account"]),account:this.props.account,onProxyAccountChanged:this.onProxyAccountChange,onClearProxy:this.onClearProxy.bind(this)}))),s.a.createElement(x.b,{title:"explorer.witnesses.title"},s.a.createElement("div",{className:k()("content-block",{disabled:n})},s.a.createElement(E.a,{style:{maxWidth:"800px"},path:"components/AccountVotingWitnesses"}),s.a.createElement(_.a,{type:"witness",label:"account.votes.add_witness_label",items:this.state.witnesses,validateAccount:this.validateAccount.bind(this,"witnesses"),onAddItem:this.onAddItem.bind(this,"witnesses"),onRemoveItem:this.onRemoveItem.bind(this,"witnesses"),tabIndex:n?-1:2,title:d.a.translate("account.votes.w_approved_by",{account:this.props.account.get("name")})}),I.size?s.a.createElement(_.a,{type:"witness",label:"account.votes.add_witness_label",items:l.a.List(I),validateAccount:this.validateAccount.bind(this,"witnesses"),onAddItem:this.onAddItem.bind(this,"witnesses"),onRemoveItem:this.onRemoveItem.bind(this,"witnesses"),tabIndex:n?-1:2,withSelector:!1,action:"add",title:d.a.translate("account.votes.w_not_approved_by",{account:this.props.account.get("name")})}):null)),s.a.createElement(x.b,{title:"explorer.committee_members.title"},s.a.createElement("div",{className:k()("content-block",{disabled:n})},s.a.createElement(E.a,{style:{maxWidth:"800px"},path:"components/AccountVotingCommittee"}),s.a.createElement(_.a,{type:"committee",label:"account.votes.add_committee_label",items:this.state.committee,validateAccount:this.validateAccount.bind(this,"committee"),onAddItem:this.onAddItem.bind(this,"committee"),onRemoveItem:this.onRemoveItem.bind(this,"committee"),tabIndex:n?-1:3,title:d.a.translate("account.votes.cm_approved_by",{account:this.props.account.get("name")})}),T.size?s.a.createElement(_.a,{type:"committee",label:"account.votes.add_witness_label",items:l.a.List(T),validateAccount:this.validateAccount.bind(this,"committee"),onAddItem:this.onAddItem.bind(this,"committee"),onRemoveItem:this.onRemoveItem.bind(this,"committee"),tabIndex:n?-1:2,withSelector:!1,action:"add",title:d.a.translate("account.votes.cm_not_approved_by",{account:this.props.account.get("name")})}):null)),s.a.createElement(x.b,{title:"account.votes.workers_short"},s.a.createElement("div",{className:k()("content-block")},s.a.createElement(E.a,{style:{maxWidth:"800px"},path:"components/AccountVotingWorkers"}),s.a.createElement("div",{style:{paddingBottom:20}},s.a.createElement(j.f,{to:"/create-worker"},s.a.createElement("div",{className:"button"},"Create a new worker"))),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(p.a,{content:"account.votes.total_budget"}),":"),s.a.createElement("td",{style:{paddingLeft:20,textAlign:"right"}}," ",r?s.a.createElement(P.a,{amount:u,asset:"1.3.0",decimalOffset:5}):null,s.a.createElement("span",null," (",r?s.a.createElement(C.a,{fromAsset:"1.3.0",toAsset:t,amount:u}):null,")"))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(p.a,{content:"account.votes.unused_budget"}),":"),s.a.createElement("td",{style:{paddingLeft:20,textAlign:"right"}}," ",r?s.a.createElement(P.a,{amount:m,asset:"1.3.0",decimalOffset:5}):null)))),s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null),s.a.createElement("th",null,s.a.createElement(p.a,{content:"account.user_issued_assets.description"})),s.a.createElement("th",{className:"hide-column-small"},s.a.createElement(p.a,{content:"account.votes.creator"})),s.a.createElement("th",{className:"hide-column-small"},s.a.createElement(p.a,{content:"account.votes.total_votes"})),s.a.createElement("th",{className:"hide-column-small"},s.a.createElement(p.a,{content:"account.votes.daily_pay"}),s.a.createElement("div",{style:{paddingTop:5,fontSize:"0.8rem"}},"(",s.a.createElement(p.a,{content:"account.votes.daily"}),")")),s.a.createElement("th",{className:"hide-column-large"},s.a.createElement("div",null,s.a.createElement(p.a,{content:"account.votes.unclaimed"})),s.a.createElement("div",{style:{paddingTop:5,fontSize:"0.8rem"}},"(",s.a.createElement(p.a,{content:"account.votes.recycled"}),")")),s.a.createElement("th",{className:"hide-column-small"},s.a.createElement(p.a,{content:"account.votes.funding"})),s.a.createElement("th",null),s.a.createElement("th",null,s.a.createElement(p.a,{content:"account.votes.status.title"})," "))),A.length?s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"5"},s.a.createElement(p.a,{component:"h4",content:"account.votes.new"}))),A,s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"5"},s.a.createElement(p.a,{component:"h4",content:"account.votes.active"})))):null,s.a.createElement("tbody",null,w),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"3"},s.a.createElement("div",{className:"inline-block"},s.a.createElement(p.a,{component:"h4",content:"account.votes.expired"})),s.a.createElement("span",null,"  ",s.a.createElement("button",{onClick:this._toggleExpired.bind(this),className:"button outline small"},i?s.a.createElement(p.a,{content:"exchange.hide"}):s.a.createElement(p.a,{content:"account.perm.show"}))))),i?O:null))))))}}]),t}(s.a.Component);S.propTypes={initialBudget:O.a.ChainObject.isRequired,globalObject:O.a.ChainObject.isRequired,dynamicGlobal:O.a.ChainObject.isRequired},S.defaultProps={initialBudget:"2.13.1",globalObject:"2.0.0",dynamicGlobal:"2.1.0"},t.default=n.i(A.a)(S)},1271:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return g}),n.d(t,"b",function(){return v});var s=n(1),c=n.n(s),l=n(20),u=n.n(l),p=n(48),m=n.n(p),d=n(65),h=(n.n(d),n(49)),f=n(42),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),v=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),b(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,o=e.title,r=m()({"is-active":t});return c.a.createElement("li",{className:r,onClick:a.bind(this,n)},c.a.createElement("a",null,o.indexOf(".")>0?c.a.createElement(u.a,{content:o}):o))}}]),t}(c.a.Component);v.propTypes={title:s.PropTypes.string.isRequired,changeTab:s.PropTypes.func,isActive:s.PropTypes.bool.isRequired,index:s.PropTypes.number.isRequired},v.defaultProps={isActive:!1,index:0};var g=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab},n}return i(t,e),b(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"_changeTab",value:function(e){this.props.setting&&h.a.changeViewSetting(a({},this.props.setting,e)),this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,o=t.tabsClass,r=t.style,i=null,s=[],l=c.a.Children.map(n,function(t,n){if(!t)return null;var a=n===e.state.activeTab;return a&&(i=t.props.children),c.a.cloneElement(t,{isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&s.push(e.props.index),null!==e});return i||(i=l[0].props.children),c.a.createElement("div",{className:this.props.className},c.a.createElement("div",{className:"service-selector"},c.a.createElement("ul",{style:r,className:m()("button-group segmented no-margin",o)},l)),c.a.createElement("div",{className:a},i))}}]),t}(c.a.Component);g.propTypes={setting:s.PropTypes.string,defaultActiveTab:s.PropTypes.number},g.defaultProps={active:0,defaultActiveTab:0},g=n.i(d.connect)(g,{listenTo:function(){return[f.a]},getProps:function(){return{viewSettings:f.a.getState().viewSettings}}})},1296:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return x}),n.d(t,"b",function(){return P});var i=n(1),s=n.n(i),c=n(108),l=n(40),u=n(39),p=n(15),m=n(260),d=n(6),h=n(65),f=(n.n(h),n(401)),b=n(20),v=n.n(b),g=n(22),y=n.n(g),_=n(132),E=n.n(_),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),k=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.fromStatsInterval=null,e.toStatsInterval=null,e}return r(t,e),w(t,[{key:"componentWillMount",value:function(){var e=this,t=d.b.getAsset("1.3.0");t&&(this.props.fromAsset.get("id")!==t.get("id")&&(m.a.getMarketStats(t,this.props.fromAsset),this.fromStatsInterval=setInterval(m.a.getMarketStats.bind(this,t,this.props.fromAsset),3e5)),this.props.toAsset.get("id")!==t.get("id")&&(m.a.getMarketStats.defer(t,this.props.toAsset),this.toStatsInterval=setInterval(function(){m.a.getMarketStats.defer(t,e.props.toAsset)},3e5)))}},{key:"componentWillUnmount",value:function(){clearInterval(this.fromStatsInterval),clearInterval(this.toStatsInterval)}},{key:"componentDidMount",value:function(){E.a.rebuild()}},{key:"getValue",value:function(){var e=this.props,t=e.amount,n=e.toAsset,a=e.fromAsset,o=e.fullPrecision,r=e.marketStats,i=d.b.getAsset("1.3.0"),s=void 0,c=void 0,l=n.get("id"),u=n.get("symbol"),m=a.get("id"),h=a.get("symbol");if(o||(t=p.a.get_asset_amount(t,a)),i&&r){var f=i.get("symbol");s=r.get(u+"_"+f),c=r.get(h+"_"+f)}var b=p.a.convertPrice(c&&c.close?c.close:a,s&&s.close?s.close:n,m,l);return p.a.convertValue(b,t,a,n)}},{key:"render",value:function(){var e=this.props,t=e.amount,n=e.toAsset,a=e.fromAsset,o=e.fullPrecision,r=e.marketStats,i=d.b.getAsset("1.3.0"),l=void 0,u=void 0,m=n.get("id"),h=n.get("symbol"),f=a.get("id"),b=a.get("symbol");if(o||(t=p.a.get_asset_amount(t,a)),i&&r){var g=i.get("symbol");l=r.get(h+"_"+g),u=r.get(b+"_"+g)}var _=p.a.convertPrice(u&&u.close?u.close:"1.3.0"===f||a.has("bitasset")?a:null,l&&l.close?l.close:"1.3.0"===m||n.has("bitasset")?n:null,f,m),E=_?p.a.convertValue(_,t,a,n):null;return E?s.a.createElement(c.a,{noPrefix:!0,amount:E,asset:m,decimalOffset:-1!==h.indexOf("BTC")?4:this.props.noDecimals?n.get("precision"):0}):s.a.createElement("div",{className:"tooltip inline-block","data-place":"bottom","data-tip":y.a.translate("tooltip.no_price"),style:{fontSize:"0.9rem"}},s.a.createElement(v.a,{content:"account.no_price"}))}}]),t}(s.a.Component);k.propTypes={toAsset:l.a.ChainAsset.isRequired,fromAsset:l.a.ChainAsset.isRequired},k.defaultProps={toAsset:"1.3.0",fullPrecision:!0,noDecimals:!1},k=n.i(u.a)(k,{keep_updating:!0});var x=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),w(t,[{key:"render",value:function(){return s.a.createElement(k,this.props)}}]),t}(s.a.Component);x=n.i(h.connect)(x,{listenTo:function(){return[f.a]},getProps:function(){return{marketStats:f.a.getState().allMarketStats}}});var P=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),w(t,[{key:"render",value:function(){var e=Number(this.props.balance.get("balance")),t=this.props.balance.get("asset_type");return s.a.createElement(x,{amount:e,fromAsset:t,noDecimals:!0,toAsset:this.props.toAsset})}}]),t}(s.a.Component);P.propTypes={balance:l.a.ChainObject.isRequired},P=n.i(u.a)(P,{keep_updating:!0})},1460:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),s=n.n(i),c=n(41),l=n(402),u=n(39),p=n(40),m=n(20),d=n.n(m),h=n(261),f=(n(133),n(26)),b=(n.n(f),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),v=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r="1.2.5"===e.existingProxy.get("id")?"":e.existingProxy.get("name");return n.state={current_proxy_input:r,new_proxy_account:null},n.onProxyChange=n.onProxyChange.bind(n),n.onProxyAccountChange=n.onProxyAccountChange.bind(n),n}return r(t,e),b(t,[{key:"componentWillReceiveProps",value:function(e){this.state.current_proxy_input||this.setState({current_proxy_input:e.proxyAccount?e.proxyAccount.get("name"):""})}},{key:"onResetProxy",value:function(){var e="1.2.5"===this.props.existingProxy.get("id")?"":this.props.existingProxy.get("name");this.setState({current_proxy_input:e,new_proxy_account:null})}},{key:"clearProxy",value:function(){this.setState({current_proxy_input:"",new_proxy_account:null}),this.props.onClearProxy&&this.props.onClearProxy()}},{key:"onProxyChange",value:function(e){this.setState({current_proxy_input:e})}},{key:"onProxyAccountChange",value:function(e){var t=this;this.setState({new_proxy_account:e},function(){e&&t.props.account.get("id")===e.get("id")||t.props.onProxyAccountChanged(e)})}},{key:"_onNavigate",value:function(e){this.context.router.push(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.knownProxies,a=t.existingProxy,o=a&&a.get("name")===this.state.current_proxy_input,r=null;this.state.new_proxy_account&&this.props.account.get("id")===this.state.new_proxy_account.get("id")&&(r="cannot proxy to yourself");var i=this.props.proxyAccount&&this.props.proxyAccount.get("name"),u=n.filter(function(t){return!!t&&(t.get("name")!==e.props.account.get("name")&&t.get("name")!==i)}).sort(function(e,t){return e.get("name")>t.get("name")?1:e.get("name")<t.get("name")?-1:0}).map(function(t){return s.a.createElement("tr",{key:t.get("id")},s.a.createElement("td",null,s.a.createElement(h.a,{size:{height:30,width:30},account:t.get("name"),custom_image:null})),s.a.createElement("td",null,s.a.createElement(c.f,{to:"/account/"+t.get("name")},t.get("name"))),s.a.createElement("td",{className:"text-right"},s.a.createElement("button",{className:"button",onClick:e.onProxyChange.bind(e,t.get("name"))},"Set")))});return s.a.createElement("div",{className:"content-block",style:{maxWidth:"600px"}},o?null:s.a.createElement(d.a,{component:"h3",content:"account.votes.proxy_short"}),o?s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement(d.a,{content:"account.votes.proxy_current"}),":  ",s.a.createElement(c.f,{to:"account/"+a.get("name")},a.get("name"))),s.a.createElement("div",null,s.a.createElement("button",{className:"button outline",onClick:this.clearProxy.bind(this),tabIndex:8},s.a.createElement(d.a,{content:"account.votes.clear_proxy"})))):s.a.createElement(l.a,{label:"account.votes.proxy",error:r,account:this.state.current_proxy_input,accountName:this.state.current_proxy_input,onChange:this.onProxyChange,onAccountChanged:this.onProxyAccountChange,tabIndex:1,size:60}),!o&&n.length?s.a.createElement("div",{style:{paddingTop:20}},s.a.createElement(d.a,{component:"h5",content:"account.votes.proxy_known"}),s.a.createElement("table",{className:"table"},s.a.createElement("tbody",null,u))):null,this.props.children)}}]),t}(s.a.Component);v.propTypes={existingProxy:p.a.ChainAccount.isRequired,account:s.a.PropTypes.object.isRequired,onProxyAccountChanged:s.a.PropTypes.func.isRequired,knownProxies:p.a.ChainAccountsList},v.defaultProps={knownProxies:n.i(f.List)(["xeroc","baozi","bitcrab","laomao","bitshares-munich-wallet","abit","dahu","bts1988","harvey","fav","jonnybitcoin","bitsharesblocks","customminer"]),existingProxy:"1.2.5"},v.contextTypes={router:s.a.PropTypes.object.isRequired},t.a=n.i(u.a)(v)},1461:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var n="",a=0,o=void 0;return"witness"===e?o=d.b.getWitnessById(t.get("id")):"committee"===e&&(o=d.b.getCommitteeMemberById(t.get("id"))),n=o?o.get("url"):n,a=o?o.get("total_votes"):a,{url:n,votes:a}}var s=n(1),c=n.n(s),l=n(402),u=n(20),p=n.n(u),m=n(261),d=n(6),h=n(40),f=n(108),b=n(39),v=n(133),g=n(22),y=n.n(g),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),E=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),_(t,[{key:"shouldComponentUpdate",value:function(e){return e.account!==this.props.account}},{key:"onAction",value:function(e){this.props.onAction(e)}},{key:"render",value:function(){var e=this.props,t=e.account,n=e.type,a=t.get("name"),o=t.get("id"),r=i(n,t),s=r.url,l=r.votes,u=s&&s.length>0&&-1===s.indexOf("http")?"http://"+s:s;return c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(m.a,{size:{height:30,width:30},account:a})),c.a.createElement("td",null,c.a.createElement(v.a,{account:t.get("id")})),c.a.createElement("td",null,c.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},s.length<45?s:s.substr(0,45)+"...")),c.a.createElement("td",null,c.a.createElement(f.a,{amount:l,asset:"1.3.0",decimalOffset:5})),c.a.createElement("td",null,c.a.createElement("button",{className:"button outline",onClick:this.onAction.bind(this,o)},c.a.createElement(p.a,{content:"account.votes."+this.props.action+"_witness"}))))}}]),t}(c.a.Component);E.propTypes={account:c.a.PropTypes.object.isRequired,onAction:c.a.PropTypes.func.isRequired};var w=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selected_item:null,item_name_input:"",error:null},n.onItemChange=n.onItemChange.bind(n),n.onItemAccountChange=n.onItemAccountChange.bind(n),n.onAddItem=n.onAddItem.bind(n),n}return r(t,e),_(t,[{key:"onItemChange",value:function(e){this.setState({item_name_input:e})}},{key:"onItemAccountChange",value:function(e){var t=this;if(this.setState({selected_item:e,error:null}),e&&this.props.validateAccount){var n=this.props.validateAccount(e);if(null===n)return;"string"==typeof n?this.setState({error:n}):n.then(function(e){return t.setState({error:e})})}}},{key:"onAddItem",value:function(e){if(e){var t={selected_item:null,item_name_input:"",error:null};this.setState(t),this.props.onAddItem(e.get("id"))}}},{key:"render",value:function(){var e=this;if(!this.props.items)return null;var t=this.props.items.filter(function(e){return!!e}).sort(function(t,n){var a=i(e.props.type,t),o=a.votes,r=i(e.props.type,n),s=r.votes;return o!==s?s-o:t.get("name")>n.get("name")?1:t.get("name")<n.get("name")?-1:0}).map(function(t){return c.a.createElement(E,{key:t.get("name"),account:t,type:e.props.type,onAction:"add"===e.props.action?e.props.onAddItem:e.props.onRemoveItem,isSelected:-1!==e.props.items.indexOf(t),action:e.props.action})}),n=this.state.error;!n&&this.state.selected_item&&-1!==this.props.items.indexOf(this.state.selected_item)&&(n=y.a.translate("account.votes.already"));var a=["10%","20%","40%","20%","10%"];return c.a.createElement("div",null,this.props.withSelector?c.a.createElement(l.a,{style:{maxWidth:"600px"},label:this.props.label,error:n,placeholder:this.props.placeholder,account:this.state.item_name_input,accountName:this.state.item_name_input,onChange:this.onItemChange,onAccountChanged:this.onItemAccountChange,onAction:this.onAddItem,action_label:"account.votes.add_witness",tabIndex:this.props.tabIndex}):null,this.props.title&&t.length?c.a.createElement("h4",null,this.props.title):null,t.length?c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{style:{width:a[0]}}),c.a.createElement("th",{style:{width:a[1]}},c.a.createElement(p.a,{content:"account.votes.name"})),c.a.createElement("th",{style:{width:a[2]}},c.a.createElement(p.a,{content:"account.votes.url"})),c.a.createElement("th",{style:{width:a[3]}},c.a.createElement(p.a,{content:"account.votes.votes"})),c.a.createElement("th",{style:{width:a[4]}},c.a.createElement(p.a,{content:"account.perm.action"})))),c.a.createElement("tbody",null,t)):null)}}]),t}(c.a.Component);w.propTypes={items:h.a.ChainObjectsList,onAddItem:c.a.PropTypes.func.isRequired,onRemoveItem:c.a.PropTypes.func.isRequired,validateAccount:c.a.PropTypes.func,label:c.a.PropTypes.string.isRequired,placeholder:c.a.PropTypes.string,tabIndex:c.a.PropTypes.number,action:c.a.PropTypes.string,withSelector:c.a.PropTypes.bool},w.defaultProps={action:"remove",withSelector:!0},t.a=n.i(b.a)(w,{keep_updating:!0})},1464:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),s=n.n(i),c=n(20),l=(n.n(c),n(22)),u=n.n(l),p=n(15),m=n(40),d=n(108),h=n(1517),f=n(133),b=n(39),v=n(1296),g=n(66),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),y(t,[{key:"onApprove",value:function(){var e=[],t=[];this.props.vote_ids.has(this.props.worker.get("vote_against"))&&t.push(this.props.worker.get("vote_against")),this.props.vote_ids.has(this.props.worker.get("vote_for"))||e.push(this.props.worker.get("vote_for")),this.props.onChangeVotes(e,t)}},{key:"onReject",value:function(){var e=[],t=[];this.props.vote_ids.has(this.props.worker.get("vote_against"))&&t.push(this.props.worker.get("vote_against")),this.props.vote_ids.has(this.props.worker.get("vote_for"))&&t.push(this.props.worker.get("vote_for")),this.props.onChangeVotes(e,t)}},{key:"render",value:function(){var e=this.props.rank,t=this.props.worker.toJS(),n=t.total_votes_for-t.total_votes_against,a=!!this.props.vote_ids.has(t.vote_for)||!this.props.vote_ids.has(t.vote_against)&&null,o=null;!0===a&&(o=s.a.createElement(g.a,{name:"checkmark"}));var r=t.url?t.url.replace(/http:\/\/|https:\/\//,""):"";r.length>25&&(r=r.substr(0,25)+"...");var i=0;t.daily_pay<this.props.rest?i=100:this.props.rest>0&&(i=this.props.rest/t.daily_pay*100);var c=u.a.localize(new Date(t.work_begin_date),{type:"date"}),l=u.a.localize(new Date(t.work_end_date),{type:"date"}),m=new Date,b=new Date(t.work_end_date)<=m;return s.a.createElement("tr",null,b?null:s.a.createElement("td",{style:{backgroundColor:i>0?"green":"orange"}},"#",e),s.a.createElement("td",{colSpan:b?"2":"1"},s.a.createElement("div",null,t.name),s.a.createElement("div",{style:{paddingTop:5,fontSize:"0.85rem"}},c," - ",l)),s.a.createElement("td",{className:"hide-column-small"},s.a.createElement("div",null,s.a.createElement(f.a,{account:t.worker_account})),s.a.createElement("div",{style:{paddingTop:5,fontSize:"0.85rem"}},s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.url},r)," ")),s.a.createElement("td",{className:"hide-column-small"},s.a.createElement(d.a,{amount:n,asset:"1.3.0",decimalOffset:5})),s.a.createElement("td",{className:"hide-column-small"},s.a.createElement(d.a,{amount:t.daily_pay,asset:"1.3.0",decimalOffset:5}),"1.3.0"!==this.props.preferredUnit?s.a.createElement("div",{style:{paddingTop:5}},"(",s.a.createElement(v.a,{fromAsset:"1.3.0",toAsset:this.props.preferredUnit,amount:t.daily_pay}),")"):null),s.a.createElement("td",{className:"hide-column-large"},t.worker[1].balance?s.a.createElement(h.a,{balance:t.worker[1].balance,decimalOffset:5}):t.worker[1].total_burned?s.a.createElement("span",null,"(",s.a.createElement(d.a,{amount:t.worker[1].total_burned,asset:"1.3.0",decimalOffset:5}),")"):null),s.a.createElement("td",{className:"hide-column-small"},p.a.format_number(i,2),"%"),s.a.createElement("td",{style:{textAlign:"right"}},!0!==a?s.a.createElement("button",{className:"button outline small success",onClick:this.onApprove.bind(this)},"+"):s.a.createElement("button",{className:"button outline small info",onClick:this.onReject.bind(this)},"-")),s.a.createElement("td",{style:{padding:0,textAlign:"center",backgroundColor:!0===a?"green":!1===a?"red":"transparent"}},o))}}]),t}(s.a.Component);_.propTypes={worker:m.a.ChainObject.isRequired,onAddVote:s.a.PropTypes.func,onRemoveVote:s.a.PropTypes.func,vote_ids:s.a.PropTypes.object},_.defaultProps={tempComponent:"tr"},t.a=n.i(b.a)(_)},1517:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),s=n.n(i),c=n(108),l=n(40),u=n(39),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),p(t,[{key:"render",value:function(){var e=Number(this.props.balance.getIn(["balance","amount"])),t=this.props.balance.getIn(["balance","asset_id"]);return s.a.createElement(c.a,{amount:e,asset:t,decimalOffset:this.props.decimalOffset||0})}}]),t}(s.a.Component);m.propTypes={balance:l.a.ChainObject.isRequired},t.a=n.i(u.a)(m,{keep_updating:!0})}});
//# sourceMappingURL=22.js.map