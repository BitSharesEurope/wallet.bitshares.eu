webpackJsonp([42],{1313:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),o=n.n(l),i=n(23),u=n.n(i),s=n(107),m=n(7),p=n(15),b=n(170),d=n(13),f=(n.n(d),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),v=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),f(t,[{key:"_onClaim",value:function(e,t){t.preventDefault(),b.a.claimVestingBalance(this.props.account.id,this.props.vb,e)}},{key:"render",value:function(){var e=this.props.vb;if(!this.props.vb)return null;var t=void 0,n=void 0,a=void 0,c=void 0,r=void 0;return e&&(r=e.balance.amount,t=m.b.getAsset(e.balance.asset_id),a=e.policy[1].coin_seconds_earned,n=e.policy[1].vesting_seconds,c=0===n?1:a/(n*r)),t&&r?o.a.createElement("div",{style:{paddingBottom:"1rem"}},o.a.createElement("div",{className:""},o.a.createElement("div",{className:"grid-content no-padding"},o.a.createElement(u.a,{component:"h5",content:"account.vesting.balance_number",id:e.id}),o.a.createElement("table",{className:"table key-value-table"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(u.a,{content:"account.member.cashback"})," "),o.a.createElement("td",null,o.a.createElement(s.a,{amount:e.balance.amount,asset:e.balance.asset_id}))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(u.a,{content:"account.member.earned"})),o.a.createElement("td",null,p.a.format_number(p.a.get_asset_amount(a/86400,t),0)," ",o.a.createElement(u.a,{content:"account.member.coindays"}))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(u.a,{content:"account.member.required"})),o.a.createElement("td",null,p.a.format_number(p.a.get_asset_amount(e.balance.amount*n/86400,t),0)," ",o.a.createElement(u.a,{content:"account.member.coindays"}))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(u.a,{content:"account.member.remaining"})),o.a.createElement("td",null,p.a.format_number(n*(1-c)/86400||0,2)," days")),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(u.a,{content:"account.member.available"})),o.a.createElement("td",null,p.a.format_number(100*c,2),"% / ",o.a.createElement(s.a,{amount:c*e.balance.amount,asset:t.get("id")}))),o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"2",style:{textAlign:"right"}},o.a.createElement("button",{onClick:this._onClaim.bind(this,!1),className:"button outline"},o.a.createElement(u.a,{content:"account.member.claim"}))))))))):null}}]),t}(o.a.Component),E=function(e){function t(){a(this,t);var e=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={vbs:null},e}return r(t,e),f(t,[{key:"componentWillMount",value:function(){this.retrieveVestingBalances.call(this,this.props.account.get("id"))}},{key:"componentWillUpdate",value:function(e){var t=e.account.get("id");t!==this.props.account.get("id")&&this.retrieveVestingBalances.call(this,t)}},{key:"retrieveVestingBalances",value:function(e){var t=this;d.Apis.instance().db_api().exec("get_vesting_balances",[e]).then(function(e){t.setState({vbs:e})}).catch(function(e){console.log("error:",e)})}},{key:"render",value:function(){var e=this.state.vbs;if(!e||!this.props.account||!this.props.account.get("vesting_balances"))return null;var t=this.props.account.toJS(),n=e.map(function(e){if(e.balance.amount)return o.a.createElement(v,{key:e.id,vb:e,account:t})}).filter(function(e){return!!e});return o.a.createElement("div",{className:"grid-content",style:{overflowX:"hidden"}},o.a.createElement(u.a,{content:"account.vesting.explain",component:"p"}),n.length?n:o.a.createElement("h4",{style:{paddingTop:"1rem"}},o.a.createElement(u.a,{content:"account.vesting.no_balances"})))}}]),t}(o.a.Component);E.VestingBalance=v,t.default=E}});
//# sourceMappingURL=42.js.map