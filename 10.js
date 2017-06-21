webpackJsonp([10],{1286:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(1),l=n.n(o),i=n(77),u=n(40),s=n(403),p=n(39),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),m(t,[{key:"render",value:function(){var e=this.props.accounts.filter(function(e){return!!e}).filter(function(e){return i.a.isMyAccount(e)}).map(function(e){return e.get("name")}).sort();return l.a.createElement("span",null,l.a.createElement(s.a,{onChange:this.onAccountSelect.bind(this),account_names:e,center:!0}))}},{key:"onAccountSelect",value:function(e){this.props.onChange(e)}}]),t}(o.Component);f.propTypes={accounts:u.a.ChainAccountsList.isRequired,onChange:l.a.PropTypes.func.isRequired},t.a=n.i(p.a)(f,{keep_updating:!0})},1287:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(1),l=n.n(o),i=n(65),u=(n.n(i),n(26)),s=n.n(u),p=n(110),m=n(400),f=n(399),b=n(108),h=n(20),y=n.n(h),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),d(t,[{key:"componentWillReceiveProps",value:function(e){e.claim_account_name&&this.onClaimAccount(e.claim_account_name,e.checked)}},{key:"render",value:function(){var e=this;if(void 0===this.props.balances||!this.props.total_by_account_asset.size)return l.a.createElement("div",null);var t=-1;return l.a.createElement("div",null,l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",{style:{textAlign:"center"}},l.a.createElement(y.a,{content:"wallet.unclaimed"})),l.a.createElement("th",{style:{textAlign:"center"}},l.a.createElement(y.a,{content:"wallet.unclaimed_vesting"})),l.a.createElement("th",{style:{textAlign:"center"}},l.a.createElement(y.a,{content:"account.name"})))),l.a.createElement("tbody",null,this.props.total_by_account_asset.map(function(n,a){return l.a.createElement("tr",{key:++t},l.a.createElement("td",null,l.a.createElement("input",{type:"checkbox",checked:!!e.props.checked.get(t),onChange:e.onCheckbox.bind(e,t,n.balances)})),l.a.createElement("td",{style:{textAlign:"right"}},n.unclaimed?l.a.createElement(b.a,{color:"info",amount:n.unclaimed,asset:a.get(1)}):null),l.a.createElement("td",{style:{textAlign:"right"}},n.vesting.unclaimed?l.a.createElement("div",null,l.a.createElement(b.a,{color:"info",amount:n.vesting.unclaimed,hide_asset:!0,asset:a.get(1)}),l.a.createElement("span",null," of "),l.a.createElement(b.a,{color:"info",amount:n.vesting.total,asset:a.get(1)})):null),l.a.createElement("td",null," ",a.get(0)," "))}).toArray())))}},{key:"onCheckbox",value:function(e,t){var n=this.props.checked;n=n.get(e)?n.delete(e):n.set(e,t),f.a.setSelectedBalanceClaims(n)}},{key:"onClaimAccount",value:function(e,t){if(!t.size){var n=-1;this.props.total_by_account_asset.forEach(function(a,r){n++,r.get(0)===e&&(a.unclaimed||a.vesting.unclaimed)&&(t=t.set(n,a.balances))}),t.size&&f.a.setSelectedBalanceClaims(t)}}}]),t}(o.Component);_=n.i(i.connect)(_,{listenTo:function(){return[m.a]},getProps:function(){var e=m.a.getState(),t=e.balances,n=e.address_to_pubkey,a=p.a.getState().keys,r=s.a.Map().asMutable(),c=function(e,t){var n=r.get(e);return n||(n=s.a.Set().asMutable(),r.set(e,n)),n.add(t),n.size};return t&&(e.total_by_account_asset=t.groupBy(function(e){var t="",r=n.get(e.owner),o=a.get(r);o&&o.import_account_names&&(t=o.import_account_names.join(", "));var l=Math.ceil(c(s.a.List([t,e.balance.asset_id]),e.owner)/60);return s.a.List([t,e.balance.asset_id,l])}).map(function(e){return e.reduce(function(e,t){return t.public_key_string=n.get(t.owner),e.balances=e.balances.add(t),void 0!=t.vested_balance?(e.vesting.unclaimed+=Number(t.vested_balance.amount),e.vesting.total+=Number(t.balance.amount)):e.unclaimed+=Number(t.balance.amount),e},{unclaimed:0,vesting:{unclaimed:0,total:0},balances:s.a.Set()})}).sortBy(function(e){return e})),e}}),t.a=_},404:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=n.n(o),i=n(65),u=(n.n(i),n(26)),s=n.n(u),p=n(48),m=n.n(p),f=n(130),b=n(128),h=n(110),y=n(174),d=n(400),_=n(399),v=n(1287),g=n(258),E=n(1286),k=n(20),w=n.n(k),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),O=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),C(t,[{key:"componentWillMount",value:function(){var e=h.a.getState().keys,t=e.keySeq();_.a.setPubkeys(t),this.existing_keys=t}},{key:"componentWillReceiveProps",value:function(e){var t=h.a.getState().keys,n=t.keySeq();n.equals(this.existing_keys)||(this.existing_keys=n,_.a.setPubkeys(n))}},{key:"render",value:function(){if(!this.props.account_refs.size)return l.a.createElement("div",null,l.a.createElement("h5",null,l.a.createElement(w.a,{content:"wallet.no_balance"})));if(this.props.loading)return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h5",null,l.a.createElement(w.a,{content:"wallet.loading_balances"}),"…"),l.a.createElement("br",null),l.a.createElement(b.a,{type:"three-bounce"}));if(!this.props.balances||!this.props.balances.size)return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h5",null,l.a.createElement(w.a,{content:"wallet.no_balance"})));var e=this.props.selected_balances.size&&this.props.claim_account_name,t=e?" ("+this.props.claim_account_name+")":null;return l.a.createElement("div",null,l.a.createElement("div",{className:"content-block center-content"},l.a.createElement("h3",{className:"no-border-bottom"},l.a.createElement(w.a,{content:"wallet.claim_balances"}))),l.a.createElement("div",{className:"grid-block vertical"},l.a.createElement("div",{className:"grid-content",style:{overflowY:"hidden !important"}},l.a.createElement("div",{className:"full-width-content center-content"},l.a.createElement(E.a,{key:this.props.balances,accounts:s.a.List(this.props.account_refs),onChange:this.onClaimAccountChange.bind(this)})),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement(v.a,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:m()("button success",{disabled:!e}),onClick:this.onClaimBalance.bind(this)},l.a.createElement(w.a,{content:"wallet.claim_balance"}),t),l.a.createElement("div",{className:"button cancel",onClick:this.onBack.bind(this)},l.a.createElement(w.a,{content:"wallet.cancel"})))}},{key:"onBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"onClaimAccountChange",value:function(e){_.a.claimAccountChange(e)}},{key:"onClaimBalance",value:function(){g.a.importBalance(this.props.claim_account_name,this.props.selected_balances,!0).catch(function(e){console.error("claimBalance",e);var t=e;try{t=e.data.message}catch(e){}throw f.a.error("Error claiming balance: "+t),e})}}]),t}(o.Component);O=n.i(i.connect)(O,{listenTo:function(){return[d.a,y.a,h.a]},getProps:function(){var e=d.a.getState();return e.account_refs=y.a.getState().account_refs,e}}),t.default=O}});
//# sourceMappingURL=10.js.map