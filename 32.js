webpackJsonp([32],{1511:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return v}),n.d(t,"a",function(){return g});var c=n(1),s=n.n(c),l=n(3),u=n.n(l),p=n(29),m=n.n(p),f=n(26),b=(n.n(f),n(27)),d=n(39),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,r=e.title,i=e.className,o=e.disabled,c=m()({"is-active":t},i);return this.props.collapsed?s.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},"string"==typeof r&&r.indexOf(".")>0?s.a.createElement(u.a,{className:"tab-title",content:r}):s.a.createElement("span",{className:"tab-title"},r)):s.a.createElement("li",{className:c,onClick:o?null:a.bind(this,n,this.props.isLinkTo)},s.a.createElement("a",null,"string"==typeof r&&r.indexOf(".")>0?s.a.createElement(u.a,{className:"tab-title",content:r}):s.a.createElement("span",{className:"tab-title"},r),this.props.subText?s.a.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}(s.a.Component);g.propTypes={changeTab:c.PropTypes.func,isActive:c.PropTypes.bool.isRequired,index:c.PropTypes.number.isRequired,className:c.PropTypes.string,isLinkTo:c.PropTypes.string},g.defaultProps={isActive:!1,index:0,className:"",isLinkTo:""};var v=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return o(t,e),h(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){if(e!==this.state.activeTab){if(""!==t)return void this.context.router.push(t);this.props.setting&&b.a.changeViewSetting(a({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,r=t.tabsClass,i=t.style,o=t.segmented,c=this.state.width<900&&s.a.Children.count(n)>2,l=null,u=[],p=s.a.Children.map(n,function(t,n){if(!t)return null;if(c&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(l=t.props.children),s.a.cloneElement(t,{collapsed:c,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&u.push(e.props.index),null!==e});return l||(l=p[0].props.children),s.a.createElement("div",{className:m()(this.props.actionButtons?"with-buttons":"",this.props.className)},s.a.createElement("div",{className:"service-selector"},s.a.createElement("ul",{style:i,className:m()("button-group no-margin",r,{segmented:o})},c?s.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},s.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},p)):p,this.props.actionButtons?s.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),s.a.createElement("div",{className:a+" tab-content"},l))}}]),t}(s.a.Component);v.propTypes={setting:c.PropTypes.string,defaultActiveTab:c.PropTypes.number,segmented:c.PropTypes.bool},v.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},v.contextTypes={router:s.a.PropTypes.object.isRequired},v=Object(f.connect)(v,{listenTo:function(){return[d.a]},getProps:function(){return{viewSettings:d.a.getState().viewSettings}}})},1878:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),u=n.n(l),p=n(34),m=n(3),f=n.n(m),b=n(4),d=n(35),h=n(32),g=n(68),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),v(t,[{key:"render",value:function(){var e=this.props.stat_object.toJS();return u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement(f.a,{content:"account.member.fees_paid"})," "),u.a.createElement("td",null,u.a.createElement(g.a,{amount:parseFloat(e.lifetime_fees_paid),asset:"1.3.0"}))))}}]),t}(u.a.Component);_.propTypes={stat_object:d.a.ChainObject.isRequired};var E=Object(h.a)(_,{keep_updating:!0}),y=n(88),w=n(679),T=n(672),O=n(186),k=n(1511),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),N=function(e){function t(){return o(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),P(t,[{key:"render",value:function(){var e=this.props.dprops;return u.a.createElement(T.a,j({},this.props,{path:"components/AccountMembership",section:"fee-division",nextMaintenanceTime:{time:e.get("next_maintenance_time")}}))}}]),t}(u.a.Component);N.propTypes={dprops:d.a.ChainObject.isRequired},N.defaultProps={dprops:"2.1.0"},N=Object(h.a)(N);var C=function(e){function t(){return o(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),P(t,[{key:"upgradeAccount",value:function(e,t,n){n.preventDefault(),y.a.upgradeAccount(e,t)}},{key:"componentWillMount",value:function(){O.a.getFinalFeeAsset(this.props.account,"account_upgrade")}},{key:"render",value:function(){var e=this.props,t=e.gprops,n=e.core_asset,a=this.props.account.toJS(),r=b.b.getAccount(a.lifetime_referrer,!1);r&&(a.lifetime_referrer_name=r.get("name"));var i=b.b.getAccount(a.referrer,!1);i&&(a.referrer_name=i.get("name"));var o=b.b.getAccount(a.registrar,!1);o&&(a.registrar_name=o.get("name"));var c=a.name,s=a.network_fee_percentage/100,l=a.lifetime_referrer_fee_percentage/100,m=100-s-l,d=m*a.referrer_rewards_percentage/1e4,h=100-d-l-s,g=t.getIn(["parameters","current_fees","parameters",8,1,"membership_lifetime_fee"])*t.getIn(["parameters","current_fees","scale"])/1e4,v=b.b.getAccountMemberStatus(this.props.account),_="account.member."+v,y=null;"annual"===v&&(y=u.a.createElement("span",null,"(",u.a.createElement(f.a,{content:"account.member.expires"})," ",u.a.createElement(w.a,{time:a.membership_expiration_date}),")"));var O=a.membership_expiration_date;return"1969-12-31T23:59:59"===O?O="Never":"1970-01-01T00:00:00"===O&&(O="N/A"),u.a.createElement("div",{className:"grid-content app-tables no-padding",ref:"appTables"},u.a.createElement("div",{className:"content-block small-12"},u.a.createElement("div",{className:"tabs-container generic-bordered-box"},u.a.createElement(k.b,{segmented:!1,setting:"membershipTab",className:"account-tabs",tabsClass:"account-overview bordered-header content-block"},u.a.createElement(k.a,{title:"account.member.membership"},u.a.createElement("h3",null,u.a.createElement(f.a,{content:_})," ",y),"lifetime"===v?null:u.a.createElement("div",null,u.a.createElement("div",{className:"large-6 medium-8"},u.a.createElement(T.a,{path:"components/AccountMembership",section:"lifetime",feesCashback:100-s,price:{amount:g,asset:n}}),u.a.createElement("div",{className:"button no-margin",onClick:this.upgradeAccount.bind(this,a.id,!0)},u.a.createElement(f.a,{content:"account.member.upgrade_lifetime"})),"    ",null),u.a.createElement("br",null),u.a.createElement("hr",null)),u.a.createElement("div",{className:"content-block no-margin"},u.a.createElement("div",{className:"no-margin grid-block vertical large-horizontal"},u.a.createElement("div",{className:"no-margin grid-block large-5"},u.a.createElement("div",{className:"grid-content"},"lifetime"===v?u.a.createElement("div",null,u.a.createElement("h4",null,u.a.createElement(f.a,{content:"account.member.referral_link"})),u.a.createElement(f.a,{content:"account.member.referral_text"}),":",u.a.createElement("h5",null,"https://wallet.bitshares.eu/?r="+a.name)):null,u.a.createElement("h4",null,u.a.createElement(f.a,{content:"account.member.fee_allocation"})),u.a.createElement("table",{className:"table key-value-table"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement(f.a,{content:"account.member.network_percentage"})),u.a.createElement("td",null,s,"%")),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement(f.a,{content:"account.member.lifetime_referrer"}),"    (",u.a.createElement(p.b,{to:"account/"+a.lifetime_referrer_name+"/overview"},a.lifetime_referrer_name),")"),u.a.createElement("td",null,l,"%")),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement(f.a,{content:"account.member.registrar"}),"    (",u.a.createElement(p.b,{to:"account/"+a.registrar_name+"/overview"},a.registrar_name),")"),u.a.createElement("td",null,h,"%")),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement(f.a,{content:"account.member.referrer"}),"    (",u.a.createElement(p.b,{to:"account/"+a.referrer_name+"/overview"},a.referrer_name),")"),u.a.createElement("td",null,d,"%")),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement(f.a,{content:"account.member.membership_expiration"})," "),u.a.createElement("td",null,O)))),u.a.createElement("h4",{style:{paddingTop:"1rem"}},u.a.createElement(f.a,{content:"account.member.fees_cashback"})),u.a.createElement("table",{className:"table key-value-table"},u.a.createElement(E,{stat_object:a.statistics})))),u.a.createElement("div",{className:"grid-block large-7"},u.a.createElement("div",{className:"grid-content"},u.a.createElement(N,{account:c,networkFee:s,referrerFee:d,registrarFee:h,lifetimeFee:l,referrerTotalFee:m,maintenanceInterval:t.getIn(["parameters","maintenance_interval"]),vestingThreshold:{amount:t.getIn(["parameters","cashback_vesting_threshold"]),asset:n},vestingPeriod:t.getIn(["parameters","cashback_vesting_period_seconds"])/60/60/24}))))))))))}}]),t}(u.a.Component);C.propTypes={account:d.a.ChainAccount.isRequired,gprops:d.a.ChainObject.isRequired,core_asset:d.a.ChainAsset.isRequired},C.defaultProps={gprops:"2.0.0",core_asset:"1.3.0"},C=Object(h.a)(C);t.default=C}});
//# sourceMappingURL=32.js.map