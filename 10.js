webpackJsonp([10],{94:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var m=n(1),f=n.n(m),b=n(74),h=n(27),y=n.n(h),d=n(48),_=n.n(d),v=n(126),g=n(167),E=n(108),k=n(173),w=n(383),O=n(384),C=n(107),j=n(22),P=n.n(j),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),A=function(e){function t(){return a(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),S(t,[{key:"componentWillReceiveProps",value:function(e){e.claim_account_name&&this.onClaimAccount(e.claim_account_name,e.checked)}},{key:"render",value:function(){var e=this;if(void 0===this.props.balances||!this.props.total_by_account_asset.size)return f.a.createElement("div",null);var t=-1;return f.a.createElement("div",null,f.a.createElement("table",{className:"table"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null),f.a.createElement("th",{style:{textAlign:"center"}},f.a.createElement(P.a,{content:"wallet.unclaimed"})),f.a.createElement("th",{style:{textAlign:"center"}},f.a.createElement(P.a,{content:"wallet.unclaimed_vesting"})),f.a.createElement("th",{style:{textAlign:"center"}},f.a.createElement(P.a,{content:"account.name"})))),f.a.createElement("tbody",null,this.props.total_by_account_asset.map(function(n,a){return f.a.createElement("tr",{key:++t},f.a.createElement("td",null,f.a.createElement("input",{type:"checkbox",checked:!!e.props.checked.get(t),onChange:e.onCheckbox.bind(e,t,n.balances)})),f.a.createElement("td",{style:{textAlign:"right"}},n.unclaimed?f.a.createElement(C.a,{color:"info",amount:n.unclaimed,asset:a.get(1)}):null),f.a.createElement("td",{style:{textAlign:"right"}},n.vesting.unclaimed?f.a.createElement("div",null,f.a.createElement(C.a,{color:"info",amount:n.vesting.unclaimed,hide_asset:!0,asset:a.get(1)}),f.a.createElement("span",null," of "),f.a.createElement(C.a,{color:"info",amount:n.vesting.total,asset:a.get(1)})):null),f.a.createElement("td",null," ",a.get(0)," "))}).toArray())))}},{key:"onCheckbox",value:function(e,t){var n=this.props.checked;n=n.get(e)?n.delete(e):n.set(e,t),O.a.setSelectedBalanceClaims(n)}},{key:"onClaimAccount",value:function(e,t){if(!t.size){var n=-1;this.props.total_by_account_asset.forEach(function(a,c){n++,c.get(0)===e&&(a.unclaimed||a.vesting.unclaimed)&&(t=t.set(n,a.balances))}),t.size&&O.a.setSelectedBalanceClaims(t)}}}]),t}(m.Component);A=Object(b.connect)(A,{listenTo:function(){return[w.a]},getProps:function(){var e=w.a.getState(),t=e.balances,n=e.address_to_pubkey,a=E.a.getState().keys,c=y.a.Map().asMutable(),r=function(e,t){var n=c.get(e);return n||(n=y.a.Set().asMutable(),c.set(e,n)),n.add(t),n.size};return t&&(e.total_by_account_asset=t.groupBy(function(e){var t="",c=n.get(e.owner),o=a.get(c);o&&o.import_account_names&&(t=o.import_account_names.join(", "));var l=Math.ceil(r(y.a.List([t,e.balance.asset_id]),e.owner)/60);return y.a.List([t,e.balance.asset_id,l])}).map(function(e){return e.reduce(function(e,t){return t.public_key_string=n.get(t.owner),e.balances=e.balances.add(t),void 0!=t.vested_balance?(e.vesting.unclaimed+=Number(t.vested_balance.amount),e.vesting.total+=Number(t.balance.amount)):e.unclaimed+=Number(t.balance.amount),e},{unclaimed:0,vesting:{unclaimed:0,total:0},balances:y.a.Set()})}).sortBy(function(e){return e})),e}});var x=A,N=n(251),B=n(91),T=n(40),z=n(387),M=n(41),R=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),q=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),R(t,[{key:"render",value:function(){var e=this.props.accounts.filter(function(e){return!!e}).filter(function(e){return B.a.isMyAccount(e)}).map(function(e){return e.get("name")}).sort();return f.a.createElement("span",null,f.a.createElement(z.a,{onChange:this.onAccountSelect.bind(this),account_names:e,center:!0}))}},{key:"onAccountSelect",value:function(e){this.props.onChange(e)}}]),t}(m.Component);q.propTypes={accounts:T.a.ChainAccountsList.isRequired,onChange:f.a.PropTypes.func.isRequired};var L=Object(M.a)(q,{keep_updating:!0}),W=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),D=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,e),W(t,[{key:"componentWillMount",value:function(){var e=E.a.getState().keys,t=e.keySeq();O.a.setPubkeys(t),this.existing_keys=t}},{key:"componentWillReceiveProps",value:function(e){var t=E.a.getState().keys,n=t.keySeq();n.equals(this.existing_keys)||(this.existing_keys=n,O.a.setPubkeys(n))}},{key:"render",value:function(){if(!this.props.account_refs.size)return f.a.createElement("div",null,f.a.createElement("h5",null,f.a.createElement(P.a,{content:"wallet.no_balance"})));if(this.props.loading)return f.a.createElement("div",null,f.a.createElement("br",null),f.a.createElement("h5",null,f.a.createElement(P.a,{content:"wallet.loading_balances"}),"…"),f.a.createElement("br",null),f.a.createElement(g.a,{type:"three-bounce"}));if(!this.props.balances||!this.props.balances.size)return f.a.createElement("div",null,f.a.createElement("br",null),f.a.createElement("h5",null,f.a.createElement(P.a,{content:"wallet.no_balance"})));var e=this.props.selected_balances.size&&this.props.claim_account_name,t=e?" ("+this.props.claim_account_name+")":null;return f.a.createElement("div",null,f.a.createElement("div",{className:"content-block center-content"},f.a.createElement("h3",{className:"no-border-bottom"},f.a.createElement(P.a,{content:"wallet.claim_balances"}))),f.a.createElement("div",{className:"grid-block vertical"},f.a.createElement("div",{className:"grid-content",style:{overflowY:"hidden !important"}},f.a.createElement("div",{className:"full-width-content center-content"},f.a.createElement(L,{key:this.props.balances,accounts:y.a.List(this.props.account_refs),onChange:this.onClaimAccountChange.bind(this)})),f.a.createElement("br",null)),f.a.createElement("br",null),f.a.createElement(x,null)),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement("div",{className:_()("button success",{disabled:!e}),onClick:this.onClaimBalance.bind(this)},f.a.createElement(P.a,{content:"wallet.claim_balance"}),t),f.a.createElement("div",{className:"button cancel",onClick:this.onBack.bind(this)},f.a.createElement(P.a,{content:"wallet.cancel"})))}},{key:"onBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"onClaimAccountChange",value:function(e){O.a.claimAccountChange(e)}},{key:"onClaimBalance",value:function(){N.a.importBalance(this.props.claim_account_name,this.props.selected_balances,!0).catch(function(e){console.error("claimBalance",e);var t=e;try{t=e.data.message}catch(e){}throw v.a.error("Error claiming balance: "+t),e})}}]),t}(m.Component);D=Object(b.connect)(D,{listenTo:function(){return[w.a,k.a,E.a]},getProps:function(){var e=w.a.getState();return e.account_refs=k.a.getState().account_refs,e}});t.default=D}});
//# sourceMappingURL=10.js.map