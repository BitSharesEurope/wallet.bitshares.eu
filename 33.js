(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1649:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),s=n.n(r),i=n(1),c=n.n(i),l=n(5),u=n.n(l),h=n(4),m=n(71),p=n(91),d=n(3),v=n(9),_=n(65),f=n(87),y=n(7),b=n(11),w=n(13),g=n(246),E=n(166),k=n(63),C=n(2),x=n.n(C),I=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function N(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var P=function(e){function t(){return A(this,t),O(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return N(t,o.a.Component),I(t,[{key:"shouldComponentUpdate",value:function(e){return!h.a.are_equal_shallow(e,this.props)}},{key:"_lookUpPubKeyForAddress",value:function(e){return E.a.getState().addresses.get(e)}},{key:"render",value:function(){var e=void 0,t=void 0,n=void 0,a="_accounts",r=this.props.pubkey,s=k.a.getState().keys,i=!1;return this.props.account?(e=this.props.account.get("name"),t=this.props.account.get("id"),n=o.a.createElement(v.b,{to:"/account/"+e+"/permissions"},e)):r?(e=t=r,n=o.a.createElement(g.a,{pubkey:r},r),a="_keys",i=s.has(r)):this.props.address&&(r=this._lookUpPubKeyForAddress(this.props.address),t=this.props.address,n=r?o.a.createElement(g.a,{pubkey:r},r):this.props.address,a="_addresses",i=s.has(r)),o.a.createElement("tr",{key:e},o.a.createElement("td",null,this.props.account?o.a.createElement(f.a,{size:{height:30,width:30},account:e}):r?o.a.createElement("div",{className:"account-image"},o.a.createElement(g.a,{pubkey:r},o.a.createElement(w.a,{name:"key",title:"icons.key",size:"4x"}))):null),o.a.createElement("td",{className:(i?"my-key":"")+" pub-key"},n),o.a.createElement("td",null,this.props.weights[t]),o.a.createElement("td",null,o.a.createElement("button",{className:"button",onClick:this.props.onRemoveItem.bind(this,t,a)},o.a.createElement(c.a,{content:"account.votes.remove_witness"}))))}}]),t}();P.propTypes={account:x.a.object,pubkey:x.a.string,address:x.a.string,onRemoveItem:x.a.func.isRequired,weights:x.a.object};var S=function(e){function t(e){A(this,t);var n=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selected_item:null,item_name_input:"",weight_input:"",error:null},n.onItemChange=n.onItemChange.bind(n),n.onItemAccountChange=n.onItemAccountChange.bind(n),n.onAddItem=n.onAddItem.bind(n),n}return N(t,o.a.Component),I(t,[{key:"onItemChange",value:function(e){this.setState({item_name_input:e})}},{key:"onItemAccountChange",value:function(e){var t=this;if(this.setState({selected_item:e,error:null}),e&&this.props.validateAccount){var n=this.props.validateAccount(e);if(null===n)return;"string"==typeof n?this.setState({error:n}):n.then(function(e){return t.setState({error:e})})}}},{key:"onWeightChanged",value:function(e){var t=e.target.value.trim();this.setState({weight_input:parseInt(t)})}},{key:"onAddItem",value:function(e){if(e){this.setState({selected_item:null,item_name_input:"",weight_input:"",error:null});var t="string"==typeof e?e:e.get("id");this.props.onAddItem(t,this.state.weight_input)}}},{key:"onWeightKeyDown",value:function(e){13===e.keyCode&&this.state.weight_input&&this.state.selected_item&&this.onAddItem(this.state.selected_item)}},{key:"render",value:function(){var e=this,t=0,n=this.props.accounts.filter(function(e){return!!e}).sort(function(e,t){return e.get("name")>t.get("name")?1:e.get("name")<t.get("name")?-1:0}).map(function(n){return o.a.createElement(P,{key:t++,account:n,weights:e.props.weights,onRemoveItem:e.props.onRemoveItem})}),a=this.props.keys.map(function(n){return o.a.createElement(P,{key:t++,pubkey:n,weights:e.props.weights,onRemoveItem:e.props.onRemoveItem})}),r=this.props.addresses.map(function(n){return o.a.createElement(P,{key:t++,address:n,weights:e.props.weights,onRemoveItem:e.props.onRemoveItem})}),s=this.state.error;!s&&this.state.selected_item&&-1!==this.props.accounts.indexOf(this.state.selected_item)&&(s=u.a.translate("account.perm.warning3")),!s&&this.state.item_name_input&&-1!==this.props.keys.indexOf(this.state.item_name_input)&&(s=u.a.translate("account.perm.warning4"));var i=["10%","70%","30%","10%"];return o.a.createElement("div",null,o.a.createElement(_.a,{label:this.props.label,error:s,placeholder:this.props.placeholder,account:this.state.item_name_input,accountName:this.state.item_name_input,onChange:this.onItemChange,onAccountChanged:this.onItemAccountChange,onAction:this.onAddItem,action_label:"account.votes.add_witness",tabIndex:this.props.tabIndex,allowPubKey:!0,disableActionButton:!this.state.weight_input,allowUppercase:!0},o.a.createElement("input",{value:this.state.weight_input,onChange:this.onWeightChanged.bind(this),className:"weight-input",type:"number",autoComplete:"off",placeholder:u.a.translate("account.perm.weight"),onKeyDown:this.onWeightKeyDown.bind(this),tabIndex:this.props.tabIndex+1})),o.a.createElement("div",{style:{paddingTop:"2rem"}},o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{style:{width:i[0]}}),o.a.createElement("th",{style:{width:i[1]}},o.a.createElement(c.a,{content:"account.perm.acct_or_key"})),o.a.createElement("th",{style:{width:i[2]}},o.a.createElement(c.a,{content:"account.perm.weight"})),o.a.createElement("th",{style:{width:i[3]}},o.a.createElement(c.a,{content:"account.perm.action"})))),o.a.createElement("tbody",null,n,a,r))))}}]),t}();S.propTypes={accounts:y.a.ChainObjectsList,onAddItem:x.a.func.isRequired,onRemoveItem:x.a.func.isRequired,validateAccount:x.a.func,label:x.a.string.isRequired,placeholder:x.a.string,tabIndex:x.a.number,weights:x.a.object};var j=Object(b.a)(S,{autosubscribe:!1}),R=n(245),K=n(16),T=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var H=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={validPassword:!1,pass:null,generatedPassword:"P"+d.o.get_random_key().toWif().toString()},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),T(t,[{key:"onSubmit",value:function(){}},{key:"onPasswordChange",value:function(e){var t=e.valid,n=this.props.account.get("name"),a=t?K.a.generateKeyFromPassword(n,"active",e.value).pubKey:null,o=t?K.a.generateKeyFromPassword(n,"owner",e.value).pubKey:null,r=t?K.a.generateKeyFromPassword(n,"active",e.value).pubKey:null;this.setState({validPassword:e.valid,pass:e.value}),this.props.onSetPasswordKeys({active:a,owner:o,memo:r})}},{key:"checkKeyUse",value:function(e,t){return!!e&&("memo"===t?e===this.props.memoKey:this.props[t+"Keys"].reduce(function(t,n){return n===e||t},!1))}},{key:"_onUseKey",value:function(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])this.props["active"===e?"onRemoveActive":"onRemoveOwner"](this.props[e],"_keys");else if(this.props[e]){var t={active:this.props.account.getIn(["active","weight_threshold"]),owner:this.props.account.getIn(["owner","weight_threshold"])};console.log("key",this.props[e],"weights",t,"weight of role:",t[e]),this.props["active"===e?"onAddActive":"owner"===e?"onAddOwner":"onSetMemo"](this.props[e],t[e])}}},{key:"render",value:function(){var e=this.checkKeyUse(this.props.active&&this.props.active,"active"),t=this.checkKeyUse(this.props.owner&&this.props.owner,"owner"),n=this.checkKeyUse(this.props.memo&&this.props.memo,"memo"),a=u.a.translate("account.perm.use_text"),r=u.a.translate("account.perm.remove_text");return o.a.createElement("div",null,o.a.createElement("p",{style:{maxWidth:"800px"}},o.a.createElement(c.a,{content:"account.perm.password_model_1"})),o.a.createElement("p",{style:{maxWidth:"800px"}},o.a.createElement(c.a,{content:"wallet.password_model_1"})),o.a.createElement("p",{style:{maxWidth:"800px"}},o.a.createElement(c.a,{unsafe:!0,content:"wallet.password_model_2"})),o.a.createElement("div",{className:"divider"}),o.a.createElement("form",{style:{maxWidth:"40rem"},onSubmit:this.onSubmit.bind(this),noValidate:!0},o.a.createElement("label",{className:"left-label"},o.a.createElement(c.a,{content:"wallet.generated"})),o.a.createElement("p",null,this.state.generatedPassword),o.a.createElement("p",{style:{fontWeight:"bold"}},o.a.createElement(c.a,{content:"account.perm.password_model_2"})),o.a.createElement(R.a,{ref:"password",confirmation:!0,onChange:this.onPasswordChange.bind(this),noLabel:!0,passwordLength:12,checkStrength:!0})),o.a.createElement("table",{className:"table"},o.a.createElement("tbody",null,o.a.createElement("tr",{className:e?"in-use":""},o.a.createElement("td",null,o.a.createElement(c.a,{content:"account.perm.new_active"}),":"),o.a.createElement("td",null,this.props.active),o.a.createElement("td",{className:"text-right"},o.a.createElement("div",{className:"button",onClick:this._onUseKey.bind(this,"active",e)},e?r:a))),o.a.createElement("tr",{className:t?"in-use":""},o.a.createElement("td",null,o.a.createElement(c.a,{content:"account.perm.new_owner"}),":"),o.a.createElement("td",null,this.props.owner),o.a.createElement("td",{className:"text-right"},o.a.createElement("div",{className:"button",onClick:this._onUseKey.bind(this,"owner",t)},t?r:a))),o.a.createElement("tr",{className:n?"in-use":""},o.a.createElement("td",null,o.a.createElement(c.a,{content:"account.perm.new_memo"}),":"),o.a.createElement("td",null,this.props.memo),o.a.createElement("td",{className:"text-right"},o.a.createElement("div",{className:"button",style:{visibility:n?"hidden":""},onClick:this._onUseKey.bind(this,"memo",n)},a))))),n?o.a.createElement("p",{style:{maxWidth:"800px",paddingTop:10},className:"has-error"},o.a.createElement(c.a,{content:"account.perm.memo_warning"})):null)}}]),t}(),F=n(314),U=n(29),W=n(68),D=n(93),L=n(35),M=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var q=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.onPublish=n.onPublish.bind(n),n.onReset=n.onReset.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),M(t,[{key:"componentWillMount",value:function(){this.updateAccountData(this.props.account),m.a.getFinalFeeAsset(this.props.account,"account_update")}},{key:"componentWillReceiveProps",value:function(e){e.account!==this.props.account&&this.updateAccountData(e.account)}},{key:"permissionsFromImmutableObj",value:function(e){var t=e.get("weight_threshold"),n=e.get("account_auths"),a=e.get("key_auths"),o=e.get("address_auths"),r=n.map(function(e){return e.get(0)}),s=a.map(function(e){return e.get(0)}),i=o.map(function(e){return e.get(0)}),c=n.reduce(function(e,t){return e[t.get(0)]=t.get(1),e},{});return c=a.reduce(function(e,t){return e[t.get(0)]=t.get(1),e},c),{threshold:t,accounts:r,keys:s,addresses:i,weights:c=o.reduce(function(e,t){return e[t.get(0)]=t.get(1),e},c)}}},{key:"permissionsToJson",value:function(e,t,n,a,o){var r={weight_threshold:e};return r.account_auths=t.sort(h.a.sortID).map(function(e){return[e,o[e]]}).toJS(),r.key_auths=n.sort(h.a.sortID).map(function(e){return[e,o[e]]}).toJS(),r.address_auths=a.sort(h.a.sortID).map(function(e){return[e,o[e]]}).toJS(),r}},{key:"updateAccountData",value:function(e){var t=this.permissionsFromImmutableObj(e.get("active")),n=this.permissionsFromImmutableObj(e.get("owner")),a=e.get("options").get("memo_key"),o={active_accounts:t.accounts,active_keys:t.keys,active_addresses:t.addresses,owner_accounts:n.accounts,owner_keys:n.keys,owner_addresses:n.addresses,active_weights:t.weights,owner_weights:n.weights,active_threshold:t.threshold,owner_threshold:n.threshold,memo_key:a,prev_active_accounts:t.accounts,prev_active_keys:t.keys,prev_active_addresses:t.addresses,prev_owner_accounts:n.accounts,prev_owner_keys:n.keys,prev_owner_addresses:n.addresses,prev_active_weights:t.weights,prev_owner_weights:n.weights,prev_active_threshold:t.threshold,prev_owner_threshold:n.threshold,prev_memo_key:a};this.setState(o)}},{key:"isChanged",value:function(){var e=this.state;return e.active_accounts!==e.prev_active_accounts||e.active_keys!==e.prev_active_keys||e.active_addresses!==e.prev_active_addresses||e.owner_accounts!==e.prev_owner_accounts||e.owner_keys!==e.prev_owner_keys||e.owner_addresses!==e.prev_owner_addresses||e.active_threshold!==e.prev_active_threshold||e.owner_threshold!==e.prev_owner_threshold||e.memo_key!==e.prev_memo_key}},{key:"didChange",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;if("memo"===e)return t.memo_key!==t.prev_memo_key;var n=!1;return["_keys","_active_addresses","_accounts","_threshold"].forEach(function(a){var o=e+a;t[o]!==t["prev_"+o]&&(n=!0)}),n}},{key:"onPublish",value:function(){var e=this.state,t=this.props.account.toJS();t.fee={amount:0,asset_id:m.a.getFinalFeeAsset(t.id,"account_update")};var n={account:t.id};if(this.didChange("active")&&(n.active=this.permissionsToJson(e.active_threshold,e.active_accounts,e.active_keys,e.active_addresses,e.active_weights)),this.didChange("owner")&&(n.owner=this.permissionsToJson(e.owner_threshold,e.owner_accounts,e.owner_keys,e.owner_addresses,e.owner_weights)),this.didChange("owner")&&0===e.owner_keys.size&&0===e.owner_addresses.size&&1===e.owner_accounts.size&&e.owner_accounts.first()===t.id)return L.a.addNotification({message:"Setting your owner permissions like this will render your account permanently unusable. Please make sure you know what you're doing before modifying account authorities!",level:"error",autoDismiss:10});e.memo_key&&this.didChange("memo")&&this.isValidPubKey(e.memo_key)&&(n.new_options=this.props.account.get("options").toJS(),n.new_options.memo_key=e.memo_key),p.a.updateAccount(n)}},{key:"isValidPubKey",value:function(e){return!!d.i.fromPublicKeyString(e)}},{key:"onReset",value:function(){var e=this.state;this.setState({active_accounts:e.prev_active_accounts,active_keys:e.prev_active_keys,active_addresses:e.prev_active_addresses,owner_accounts:e.prev_owner_accounts,owner_keys:e.prev_owner_keys,owner_addresses:e.prev_owner_addresses,active_weights:e.prev_active_weights,owner_weights:e.prev_owner_weights,active_threshold:e.prev_active_threshold,owner_threshold:e.prev_owner_threshold,memo_key:e.prev_memo_key})}},{key:"onAddItem",value:function(e,t,n){var a={},o=e+(h.a.is_object_id(t)?"_accounts":"_keys");a[o]=this.state[o].push(t),this.state[e+"_weights"][t]=n,this.setState(a)}},{key:"onRemoveItem",value:function(e,t,n){console.log("onRemoveItem",e,t,n);var a={},o=e+n;a[o]=this.state[o].filter(function(e){return e!==t}),this.setState(a)}},{key:"onThresholdChanged",value:function(e,t){var n=parseInt(t.target.value.trim()),a={};a[e]=n,this.setState(a)}},{key:"validateAccount",value:function(e,t){return null}},{key:"sumUpWeights",value:function(e,t,n,a){var o=e.reduce(function(e,t){return e+a[t]},0);return o=t.reduce(function(e,t){return e+a[t]},o),n.reduce(function(e,t){return e+a[t]},o)}},{key:"onMemoKeyChanged",value:function(e){this.setState({memo_key:e})}},{key:"onSetPasswordKeys",value:function(e){var t={};(arguments.length>1&&void 0!==arguments[1]?arguments[1]:["active","owner","memo"]).forEach(function(n){t["password_"+n]=e[n]}),this.setState(t)}},{key:"render",value:function(){var e=void 0,t=void 0,n=this.state,a=n.active_accounts,r=n.active_keys,i=n.active_addresses,l=n.active_weights,h=this.state,m=h.owner_accounts,p=h.owner_keys,d=h.owner_addresses,v=h.owner_weights,_=this.state.active_threshold>0?this.state.active_threshold:0,f=this.sumUpWeights(a,r,i,l);this.didChange("active")&&f<_&&(e=u.a.translate("account.perm.warning1",{weights_total:f,threshold:_})),_=this.state.owner_threshold>0?this.state.owner_threshold:0,f=this.sumUpWeights(m,p,d,v),this.didChange("owner")&&f<_&&(t=u.a.translate("account.perm.warning2",{weights_total:f,threshold:_}));var y="button"+(!e&&!t&&this.isChanged()&&this.isValidPubKey(this.state.memo_key)?"":" disabled"),b="button"+(this.isChanged()?"":" disabled"),w=s.a.Set();return w=w.add(this.props.account.get("id")),o.a.createElement("div",{className:"grid-content app-tables no-padding",ref:"appTables"},o.a.createElement("div",{className:"content-block small-12"},o.a.createElement("div",{className:"tabs-container generic-bordered-box"},o.a.createElement(U.b,{defaultActiveTab:1,segmented:!1,setting:"permissionsTab",className:"account-tabs",tabsClass:"account-overview bordered-header content-block",contentClass:"padding",actionButtons:o.a.createElement("div",{className:"action-buttons"},o.a.createElement("button",{className:b,onClick:this.onReset,tabIndex:8},o.a.createElement(c.a,{content:"account.perm.reset"})),o.a.createElement("button",{className:y,onClick:this.onPublish,tabIndex:9},o.a.createElement(c.a,{content:"account.perm.publish"})))},o.a.createElement(U.a,{title:"account.perm.active"},o.a.createElement(W.a,{path:"components/AccountPermActive"}),o.a.createElement("form",{className:"threshold"},o.a.createElement("label",{className:"horizontal"},o.a.createElement(c.a,{content:"account.perm.threshold"})," ","   ",o.a.createElement("input",{type:"number",placeholder:"0",size:"5",value:this.state.active_threshold,onChange:this.onThresholdChanged.bind(this,"active_threshold"),autoComplete:"off",tabIndex:1}))),o.a.createElement(j,{label:"account.perm.add_permission_label",accounts:a,keys:r,weights:l,addresses:i,validateAccount:this.validateAccount.bind(this,"active"),onAddItem:this.onAddItem.bind(this,"active"),onRemoveItem:this.onRemoveItem.bind(this,"active"),placeholder:u.a.translate("account.perm.account_name_or_key"),tabIndex:2}),o.a.createElement("br",null),e?o.a.createElement("div",{className:"content-block has-error"},e):null),o.a.createElement(U.a,{title:"account.perm.owner"},o.a.createElement(W.a,{path:"components/AccountPermOwner"}),o.a.createElement("form",{className:"threshold"},o.a.createElement("label",{className:"horizontal"},o.a.createElement(c.a,{content:"account.perm.threshold"})," ","   ",o.a.createElement("input",{type:"number",placeholder:"0",size:"5",value:this.state.owner_threshold,onChange:this.onThresholdChanged.bind(this,"owner_threshold"),autoComplete:"off",tabIndex:4}))),o.a.createElement(j,{label:"account.perm.add_permission_label",accounts:m,keys:p,weights:v,addresses:d,validateAccount:this.validateAccount.bind(this,"owner"),onAddItem:this.onAddItem.bind(this,"owner"),onRemoveItem:this.onRemoveItem.bind(this,"owner"),placeholder:u.a.translate("account.perm.account_name_or_key"),tabIndex:5}),o.a.createElement("br",null),t?o.a.createElement("div",{className:"content-block has-error"},t):null),o.a.createElement(U.a,{title:"account.perm.memo_key"},o.a.createElement(W.a,{style:{maxWidth:"800px"},path:"components/AccountPermMemo"}),o.a.createElement(F.a,{ref:"memo_key",value:this.state.memo_key,label:"account.perm.memo_public_key",placeholder:"Public Key",onChange:this.onMemoKeyChanged.bind(this),tabIndex:7})),o.a.createElement(U.a,{title:"account.perm.password_model"},o.a.createElement(H,{active:this.state.password_active,owner:this.state.password_owner,memo:this.state.password_memo,onSetPasswordKeys:this.onSetPasswordKeys.bind(this),account:this.props.account,activeKeys:this.state.active_keys,ownerKeys:this.state.owner_keys,memoKey:this.state.memo_key,onAddActive:this.onAddItem.bind(this,"active"),onRemoveActive:this.onRemoveItem.bind(this,"active"),onAddOwner:this.onAddItem.bind(this,"owner"),onRemoveOwner:this.onRemoveItem.bind(this,"owner"),onSetMemo:this.onMemoKeyChanged.bind(this)}))),o.a.createElement("div",{className:"tab-content",style:{padding:10}},o.a.createElement("div",{className:"divider"}),o.a.createElement(D.a,{accountsList:w,limit:25,compactView:!1,filter:"account_update",style:{paddingBottom:"2rem"}})))))}}]),t}();t.default=q},88:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(462),s=n.n(r),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={animateEnter:!1},e.timer=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),i(t,[{key:"componentDidMount",value:function(){this.enableAnimation()}},{key:"resetAnimation",value:function(){this.setState({animateEnter:!1}),this.enableAnimation()}},{key:"enableAnimation",value:function(){var e=this;this.timer=setTimeout(function(){e.timer&&e.setState({animateEnter:!0})},2e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.timer=null}},{key:"render",value:function(){return this.props.children?o.a.createElement(s.a,{className:this.props.className,component:this.props.component,transitionName:this.props.transitionName,transitionEnterTimeout:this.props.enterTimeout,transitionEnter:this.state.animateEnter,transitionLeave:!1},this.props.children):o.a.createElement(this.props.component)}}]),t}();c.defaultProps={component:"span",enterTimeout:2e3},t.a=c},93:function(e,t,n){"use strict";n.d(t,"a",function(){return j}),n.d(t,"b",function(){return R});var a=n(0),o=n.n(a),r=n(1),s=n.n(r),i=n(187),c=n(170),l=n(7),u=n(11),h=n(4),m=n(3),p=n(88),d=n(60),v=n.n(d),_=n(5),f=n.n(_),y=n(13),b=n(8),w=n.n(b),g=n(2),E=n.n(g),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function I(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var A=m.c.operations,O={textAlign:"left"},N={textAlign:"right"};function P(e,t){return t.block_num===e.block_num?t.virtual_op-e.virtual_op:t.block_num-e.block_num}function S(e){return e?'"'+e.textContent.replace(/[\s\t\r\n]/gi," ")+'"':""}var j=function(e){function t(e){C(this,t);var n=x(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={limit:e.limit||20,csvExport:!1,headerHeight:85,filter:"all"},n}return I(t,o.a.Component),k(t,[{key:"componentDidMount",value:function(){if(!this.props.fullHeight){var e=this.refs.transactions;v.a.initialize(e),this._setHeaderHeight()}}},{key:"_setHeaderHeight",value:function(){var e=this.refs.header.offsetHeight;e!==this.state.headerHeight&&this.setState({headerHeight:e})}},{key:"shouldComponentUpdate",value:function(e,t){if(!h.a.are_equal_shallow(this.props.accountsList,e.accountsList))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(this.state.headerHeight!==t.headerHeight)return!0;if(this.state.filter!==t.filter)return!0;if(this.props.customFilter&&(!h.a.are_equal_shallow(this.props.customFilter.fields,e.customFilter.fields)||!h.a.are_equal_shallow(this.props.customFilter.values,e.customFilter.values)))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(t.limit!==this.state.limit||t.csvExport!==this.state.csvExport)return!0;for(var n=0;n<e.accountsList.length;++n){var a=e.accountsList[n],o=this.props.accountsList[n];if(a&&o&&a.get("history")!==o.get("history"))return!0}return!1}},{key:"componentDidUpdate",value:function(){if(this.state.csvExport){this.state.csvExport=!1;var e=document.getElementById("csv_export_container").childNodes,t="",n=!0,a=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var c=r.value.childNodes;""!==t&&(t+="\n"),t+=[S(c[0]),S(c[1]),S(c[2]),S(c[3])].join(",")}}catch(e){a=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}var l=new Blob([t],{type:"text/csv;charset=utf-8"}),u=new Date;Object(i.saveAs)(l,"btshist-"+u.getFullYear()+"-"+("0"+(u.getMonth()+1)).slice(-2)+"-"+("0"+u.getDate()).slice(-2)+"-"+("0"+u.getHours()).slice(-2)+("0"+u.getMinutes()).slice(-2)+".csv")}if(!this.props.fullHeight){var h=this.refs.transactions;v.a.update(h),this._setHeaderHeight()}}},{key:"_onIncreaseLimit",value:function(){this.setState({limit:this.state.limit+30})}},{key:"_getHistory",value:function(e,t,n){var a=[],o=new Set,r=!0,s=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var u=c.value;if(u){var h=u.get("history");h&&(a=a.concat(h.toJS().filter(function(e){return!o.has(e.id)&&o.add(e.id)})))}}}catch(e){s=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(s)throw i}}return t&&(a=a.filter(function(e){return e.op[0]===A[t]})),n&&(a=a.filter(function(e){return n.fields.reduce(function(t,a){switch(a){case"asset_id":return t&&e.op[1].amount[a]===n.values[a];default:return t&&e.op[1][a]===n.values[a]}},!0)})),a}},{key:"_downloadCSV",value:function(){this.setState({csvExport:!0})}},{key:"_onChangeFilter",value:function(e){this.setState({filter:e.target.value})}},{key:"render",value:function(){var e=this.props,t=e.accountsList,n=e.compactView,a=e.filter,r=e.customFilter,i=e.style,l=e.maxHeight,u=this.state,h=u.limit,m=u.headerHeight,d=1===t.length&&t[0]?t[0].get("id"):null,v=this._getHistory(t,this.props.showFilters&&"all"!==this.state.filter?this.state.filter:a,r).sort(P),_=v.length;(i=i||{}).width="100%",i.height="100%";var b=null;b=["all","transfer","limit_order_create","limit_order_cancel","fill_order","account_create","account_update","asset_create","witness_withdraw_pay","vesting_balance_withdraw"].map(function(e){return o.a.createElement("option",{value:e,key:e},f.a.translate("transaction.trxTypes."+e))});var g=v.length?v.slice(0,h).map(function(e){return o.a.createElement(c.a,{includeOperationId:!0,operationId:e.id,style:O,key:e.id,op:e.op,result:e.result,block:e.block_num,current:d,hideFee:!0,inverted:!1,hideOpLabel:n,fullDate:!0})}):[o.a.createElement("tr",{key:"no_recent"},o.a.createElement("td",{colSpan:n?"2":"3"},o.a.createElement(s.a,{content:"operation.no_recent"})))];return g.push(o.a.createElement("tr",{className:"total-value",key:"total_value"},o.a.createElement("td",{className:"column-hide-tiny"}),o.a.createElement("td",{style:N},_>0?o.a.createElement("span",null,o.a.createElement("a",{className:"inline-block",onClick:this._downloadCSV.bind(this),"data-tip":f.a.translate("transaction.csv_tip"),"data-place":"bottom"},o.a.createElement(y.a,{name:"excel",title:"icons.excel",className:"icon-14px"}))):null),o.a.createElement("td",{style:{textAlign:"center"}}," ",this.props.showMore&&_>this.props.limit||h<_?o.a.createElement("a",{onClick:this._onIncreaseLimit.bind(this)},o.a.createElement(y.a,{name:"chevron-down",title:"icons.chevron_down.transactions",className:"icon-14px"})):null))),o.a.createElement("div",{className:"recent-transactions no-overflow",style:i},o.a.createElement("div",{className:"generic-bordered-box"},this.props.dashboard?null:o.a.createElement("div",{ref:"header"},o.a.createElement("div",{className:"block-content-header"},o.a.createElement("span",null,this.props.title?this.props.title:o.a.createElement(s.a,{content:"account.recent"})))),o.a.createElement("div",{className:"header-selector"},o.a.createElement("div",{className:"selector"},o.a.createElement("div",{className:w()("inline-block")},this.props.showFilters?o.a.createElement("select",{"data-place":"left","data-tip":f.a.translate("tooltip.filter_ops"),style:{paddingTop:5,width:"auto"},className:"bts-select no-margin",value:this.state.filter,onChange:this._onChangeFilter.bind(this)},b):null))),o.a.createElement("div",{className:"box-content grid-block no-margin",style:this.props.fullHeight?null:{maxHeight:l-m},ref:"transactions"},o.a.createElement("table",{className:"table table-striped "+(n?"compact":"")+(this.props.dashboard?" dashboard-table table-hover":"")},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"column-hide-tiny",style:O},o.a.createElement(s.a,{content:"account.transactions.id"})),o.a.createElement("th",{className:"column-hide-tiny",style:O},o.a.createElement(s.a,{content:"account.transactions.type"})),o.a.createElement("th",{style:O},o.a.createElement(s.a,{content:"account.transactions.info"})),o.a.createElement("th",{style:O},o.a.createElement(s.a,{content:"account.transactions.time"})))),o.a.createElement(p.a,{component:"tbody",transitionName:"newrow"},g))),_>0&&this.state.csvExport&&o.a.createElement("div",{id:"csv_export_container",style:{display:"none"}},o.a.createElement("div",null,o.a.createElement("div",null,"DATE"),o.a.createElement("div",null,"OPERATION"),o.a.createElement("div",null,"MEMO"),o.a.createElement("div",null,"AMOUNT")),v.map(function(e){return o.a.createElement(c.a,{key:e.id,op:e.op,result:e.result,block:e.block_num,inverted:!1,csvExportMode:!0})}))))}}]),t}();j.propTypes={accountsList:l.a.ChainAccountsList.isRequired,compactView:E.a.bool,limit:E.a.number,maxHeight:E.a.number,fullHeight:E.a.bool,showFilters:E.a.bool},j.defaultProps={limit:25,maxHeight:500,fullHeight:!1,showFilters:!1},j=Object(u.a)(j);var R=function(e){function t(){return C(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return I(t,o.a.Component),k(t,[{key:"render",value:function(){return o.a.createElement("span",{className:"wrapper"},this.props.children(this.props))}}]),t}();R.propTypes={asset:l.a.ChainAsset.isRequired,to:l.a.ChainAccount.isRequired,fromAccount:l.a.ChainAccount.isRequired},R.defaultProps={asset:"1.3.0"},R=Object(u.a)(R)}}]);