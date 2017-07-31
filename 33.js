webpackJsonp([33],{1206:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=a(1),s=a.n(c),i=a(65),u=(a.n(i),a(49)),d=a.n(u),m=a(109),p=a(77),h=a(1345),f=a(35),E=a(130),v=a(42),_=a(404),g=a(267),w=a(129),b=a(20),y=a.n(b),k=a(22),N=a.n(k),A=a(6),C=a(132),P=a.n(C),S=a(15),x=a(50),O=a(69),T=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),j=function(e){function t(){r(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._onBackupDownload=function(){e.setState({step:3})},e.state={validAccountName:!1,accountName:"",validPassword:!1,registrar_account:null,loading:!1,hide_refcode:!0,show_identicon:!1,step:1,showPass:!1,generatedPassword:"P"+A.e.get_random_key().toWif(),confirm_password:"",understand_1:!1,understand_2:!1},e.onFinishConfirm=e.onFinishConfirm.bind(e),e.accountNameInput=null,e}return o(t,e),T(t,[{key:"componentWillMount",value:function(){x.a.changeSetting({setting:"passwordLogin",value:!0})}},{key:"componentDidMount",value:function(){P.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e,t){return!S.a.are_equal_shallow(t,this.state)}},{key:"isValid",value:function(){var e=0===p.a.getMyAccounts().length,t=this.state.validAccountName;return f.a.getWallet()||(t=t&&this.state.validPassword),e||(t=t&&this.state.registrar_account),t&&this.state.understand_1&&this.state.understand_2}},{key:"onAccountNameChange",value:function(e){var t={};void 0!==e.valid&&(t.validAccountName=e.valid),void 0!==e.value&&(t.accountName=e.value),this.state.show_identicon||(t.show_identicon=!0),this.setState(t)}},{key:"onFinishConfirm",value:function(e){var t=this;e.included&&e.broadcasted_transaction&&(g.a.unlisten(this.onFinishConfirm),g.a.reset(),a.i(A.c)("getAccount",this.state.accountName).then(function(){console.log("onFinishConfirm"),t.props.router.push("/wallet/backup/create?newAccount=true")}))}},{key:"_unlockAccount",value:function(e,t){f.a.validatePassword(t,!0,e),O.a.checkLock.defer()}},{key:"createAccount",value:function(e,t){var n=this,r=this.refs.refcode?this.refs.refcode.value():null,l=p.a.getState().referralAccount;this.setState({loading:!0}),m.a.createAccountWithPassword(e,t,this.state.registrar_account,l||this.state.registrar_account,0,r).then(function(){m.a.setPasswordAccount(e),n.state.registrar_account?(a.i(A.c)("getAccount",e).then(function(){n.setState({step:2,loading:!1}),n._unlockAccount(e,t)}),g.a.listen(n.onFinishConfirm)):(a.i(A.c)("getAccount",e).then(function(){n.setState({step:2})}),n._unlockAccount(e,t))}).catch(function(t){console.log("ERROR AccountActions.createAccount",t);var a=t.base&&t.base.length&&t.base.length>0?t.base[0]:"unknown error";t.remote_ip&&(a=t.remote_ip[0]),E.a.addNotification({message:"Failed to create account: "+e+" - "+a,level:"error",autoDismiss:10}),n.setState({loading:!1})})}},{key:"onSubmit",value:function(e){if(e.preventDefault(),this.isValid()){var t=this.accountNameInput.getValue(),a=this.state.generatedPassword;this.createAccount(t,a)}}},{key:"onRegistrarAccountChange",value:function(e){this.setState({registrar_account:e})}},{key:"_onInput",value:function(e,t){var a;this.setState((a={},n(a,e,"confirm_password"===e?t.target.value:!this.state[e]),n(a,"validPassword","confirm_password"===e?t.target.value===this.state.generatedPassword:this.state.validPassword),a))}},{key:"_renderAccountCreateForm",value:function(){var e=this,t=this.state.registrar_account,a=p.a.getMyAccounts(),n=0===a.length,r=(f.a.getWallet(),this.isValid()),l=!1,o=t?A.b.getAccount(t):null;o&&o.get("lifetime_referrer")==o.get("id")&&(l=!0);var c=d()("submit-button button no-margin",{disabled:!r||t&&!l});return s.a.createElement("div",null,s.a.createElement("form",{style:{maxWidth:"60rem"},onSubmit:this.onSubmit.bind(this),noValidate:!0},s.a.createElement("p",{style:{fontWeight:"bold"}},s.a.createElement(y.a,{content:"wallet.create_password"})),s.a.createElement(h.a,{ref:function(t){t&&(e.accountNameInput=t.refs.nameInput)},cheapNameOnly:!!n,onChange:this.onAccountNameChange.bind(this),accountShouldNotExist:!0,placeholder:N.a.translate("wallet.account_public"),noLabel:!0}),s.a.createElement("section",null,s.a.createElement("label",{className:"left-label"},s.a.createElement(y.a,{content:"wallet.generated"})),s.a.createElement("div",{style:{padding:"0.25rem"}},s.a.createElement("p",null,this.state.generatedPassword))),s.a.createElement("section",null,s.a.createElement("label",{className:"left-label"},s.a.createElement(y.a,{content:"wallet.confirm_password"})),s.a.createElement("input",{type:"password",value:this.state.confirm_password,onChange:this._onInput.bind(this,"confirm_password")}),this.state.confirm_password&&this.state.confirm_password!==this.state.generatedPassword?s.a.createElement("div",{className:"has-error"},s.a.createElement(y.a,{content:"wallet.confirm_error"})):null),s.a.createElement("br",null),s.a.createElement("div",{onClick:this._onInput.bind(this,"understand_1")},s.a.createElement("input",{type:"checkbox",onChange:function(){},checked:this.state.understand_1}),s.a.createElement("label",null,s.a.createElement(y.a,{content:"wallet.understand_1"}))),s.a.createElement("br",null),s.a.createElement("div",{onClick:this._onInput.bind(this,"understand_2")},s.a.createElement("input",{type:"checkbox",onChange:function(){},checked:this.state.understand_2}),s.a.createElement("label",null,s.a.createElement(y.a,{content:"wallet.understand_2"}))),n?null:s.a.createElement("div",{className:"full-width-content form-group no-overflow",style:{paddingTop:30}},s.a.createElement("label",null,s.a.createElement(y.a,{content:"account.pay_from"})),s.a.createElement(_.a,{account_names:a,onChange:this.onRegistrarAccountChange.bind(this)}),t&&!l?s.a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},s.a.createElement(y.a,{content:"wallet.must_be_ltm"})):null),s.a.createElement("div",{className:"divider"}),this.state.loading?s.a.createElement(w.a,{type:"three-bounce"}):s.a.createElement("button",{className:c},s.a.createElement(y.a,{content:"account.create_account"}))),s.a.createElement("br",null),s.a.createElement("p",null,s.a.createElement(y.a,{content:"wallet.bts_rules",unsafe:!0})))}},{key:"_renderAccountCreateText",value:function(){var e=p.a.getMyAccounts(),t=0===e.length;return s.a.createElement("div",null,s.a.createElement("h4",{style:{fontWeight:"bold",paddingBottom:15}},s.a.createElement(y.a,{content:"wallet.wallet_password"})),s.a.createElement(y.a,{style:{textAlign:"left"},unsafe:!0,component:"p",content:"wallet.create_account_password_text"}),s.a.createElement(y.a,{style:{textAlign:"left"},component:"p",content:"wallet.create_account_text"}),t?null:s.a.createElement(y.a,{style:{textAlign:"left"},component:"p",content:"wallet.not_first_account"}))}},{key:"_renderBackup",value:function(){var e=this;return s.a.createElement("div",{className:"backup-submit"},s.a.createElement("p",null,s.a.createElement(y.a,{unsafe:!0,content:"wallet.password_crucial"})),s.a.createElement("div",null,this.state.showPass?s.a.createElement("div",null,s.a.createElement("h5",null,s.a.createElement(y.a,{content:"settings.password"}),":"),s.a.createElement("div",{style:{fontWeight:"bold",wordWrap:"break-word"},className:"no-overflow"},this.state.generatedPassword)):s.a.createElement("div",{onClick:function(){e.setState({showPass:!0})},className:"button"},s.a.createElement(y.a,{content:"wallet.password_show"}))),s.a.createElement("div",{className:"divider"}),s.a.createElement("div",{onClick:function(){e.setState({step:3})},className:"button"},s.a.createElement(y.a,{content:"init_error.understand"})))}},{key:"_renderBackupText",value:function(){return s.a.createElement("div",null,s.a.createElement("p",{style:{fontWeight:"bold"}},s.a.createElement(y.a,{content:"footer.backup"})),s.a.createElement("p",{className:"txtlabel warning"},s.a.createElement(y.a,{unsafe:!0,content:"wallet.password_lose_warning"})))}},{key:"_renderGetStarted",value:function(){return s.a.createElement("div",null,s.a.createElement("table",{className:"table"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(y.a,{content:"wallet.tips_dashboard"}),":"),s.a.createElement("td",null,s.a.createElement(v.f,{to:"/dashboard"},s.a.createElement(y.a,{content:"header.dashboard"})))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(y.a,{content:"wallet.tips_account"}),":"),s.a.createElement("td",null,s.a.createElement(v.f,{to:"/account/"+this.state.accountName+"/overview"},s.a.createElement(y.a,{content:"wallet.link_account"})))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(y.a,{content:"wallet.tips_deposit"}),":"),s.a.createElement("td",null,s.a.createElement(v.f,{to:"/deposit-withdraw"},s.a.createElement(y.a,{content:"wallet.link_deposit"})))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(y.a,{content:"wallet.tips_transfer"}),":"),s.a.createElement("td",null,s.a.createElement(v.f,{to:"/transfer"},s.a.createElement(y.a,{content:"wallet.link_transfer"})))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(y.a,{content:"wallet.tips_settings"}),":"),s.a.createElement("td",null,s.a.createElement(v.f,{to:"/settings"},s.a.createElement(y.a,{content:"header.settings"})))))))}},{key:"_renderGetStartedText",value:function(){return s.a.createElement("div",null,s.a.createElement("p",{style:{fontWeight:"bold"}},s.a.createElement(y.a,{content:"wallet.congrat"})),s.a.createElement("p",null,s.a.createElement(y.a,{content:"wallet.tips_explore_pass"})),s.a.createElement("p",null,s.a.createElement(y.a,{content:"wallet.tips_header"})),s.a.createElement("p",{className:"txtlabel warning"},s.a.createElement(y.a,{content:"wallet.tips_login"})))}},{key:"render",value:function(){var e=this.state.step;return s.a.createElement("div",{className:"grid-block vertical page-layout Account_create"},s.a.createElement("div",{className:"grid-block shrink small-12 medium-10 medium-offset-1"},s.a.createElement("div",{className:"grid-content",style:{paddingTop:20}},s.a.createElement(y.a,{content:"wallet.wallet_new",component:"h2"}))),s.a.createElement("div",{className:"grid-block wrap"},s.a.createElement("div",{className:"grid-content small-12 large-6 large-offset-1"},1!==e?s.a.createElement("p",{style:{fontWeight:"bold"}},s.a.createElement(y.a,{content:"wallet.step_"+e})):null,1===e?s.a.createElement("div",null,this._renderAccountCreateText(),s.a.createElement("br",null),this._renderAccountCreateForm()):2===e?this._renderBackup():this._renderGetStarted()),s.a.createElement("div",{className:"grid-content small-12 large-5"},1===e?null:2===e?this._renderBackupText():this._renderGetStartedText())))}}]),t}(s.a.Component);t.default=a.i(i.connect)(j,{listenTo:function(){return[p.a]},getProps:function(){return{}}})},1345:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=a(1),c=a.n(o),s=a(49),i=a.n(s),u=a(109),d=a(77),m=a(6),p=a(20),h=(a.n(p),a(22)),f=a.n(h),E=a(168),v=a.n(E),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),w=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={value:null,error:null,existing_account:!1},e.handleChange=e.handleChange.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e}return l(t,e),g(t,[{key:"shouldComponentUpdate",value:function(e,t){return t.value!==this.state.value||t.error!==this.state.error||t.account_name!==this.state.account_name||t.existing_account!==this.state.existing_account||e.searchAccounts!==this.props.searchAccounts}},{key:"componentDidUpdate",value:function(){this.props.onChange&&this.props.onChange({valid:!this.getError()})}},{key:"getValue",value:function(){return this.state.value}},{key:"setValue",value:function(e){this.setState({value:e})}},{key:"clear",value:function(){this.setState({account_name:null,error:null,warning:null})}},{key:"focus",value:function(){this.refs.input.focus()}},{key:"valid",value:function(){return!this.getError()}},{key:"getError",value:function(){var e=this;if(null===this.state.value)return null;var t=null;if(this.state.error)t=this.state.error;else if(this.props.accountShouldExist||this.props.accountShouldNotExist){var a=this.props.searchAccounts.find(function(t){return t===e.state.value});this.props.accountShouldNotExist&&a&&(t=f.a.translate("account.name_input.name_is_taken")),this.props.accountShouldExist&&!a&&(t=f.a.translate("account.name_input.not_found"))}return t}},{key:"validateAccountName",value:function(e){this.state.error=""===e?"Please enter valid account name":m.d.is_account_name_error(e),this.state.warning=null,this.props.cheapNameOnly?this.state.error||m.d.is_cheap_name(e)||(this.state.error=f.a.translate("account.name_input.premium_name_faucet")):this.state.error||m.d.is_cheap_name(e)||(this.state.warning=f.a.translate("account.name_input.premium_name_warning")),this.setState({value:e,error:this.state.error,warning:this.state.warning}),this.props.onChange&&this.props.onChange({value:e,valid:!this.getError()}),(this.props.accountShouldExist||this.props.accountShouldNotExist)&&u.a.accountSearch(e)}},{key:"handleChange",value:function(e){e.preventDefault(),e.stopPropagation();var t=e.target.value.toLowerCase();t=t.match(/[a-z0-9\.-]+/),t=t?t[0]:null,this.setState({account_name:t}),this.validateAccountName(t)}},{key:"onKeyDown",value:function(e){this.props.onEnter&&13===event.keyCode&&this.props.onEnter(e)}},{key:"render",value:function(){var e=this.getError()||"",t=i()("form-group","account-name",{"has-error":!1}),a=this.state.warning;return c.a.createElement("div",{className:t},c.a.createElement("section",null,c.a.createElement("label",{className:"left-label"},this.props.placeholder),c.a.createElement("input",{name:"value",type:"text",id:this.props.id,ref:"input",autoComplete:"off",placeholder:null,onChange:this.handleChange,onKeyDown:this.onKeyDown,value:this.state.account_name||this.props.initial_value})),c.a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},e),c.a.createElement("div",{style:{textAlign:"left"},className:"facolor-warning"},e?null:a))}}]),t}(c.a.Component);w.propTypes={id:o.PropTypes.string,placeholder:o.PropTypes.string,initial_value:o.PropTypes.string,onChange:o.PropTypes.func,onEnter:o.PropTypes.func,accountShouldExist:o.PropTypes.bool,accountShouldNotExist:o.PropTypes.bool,cheapNameOnly:o.PropTypes.bool,noLabel:o.PropTypes.bool},w.defaultProps={noLabel:!1};var b=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),g(t,[{key:"render",value:function(){return c.a.createElement(v.a,{stores:[d.a],inject:{searchAccounts:function(){return d.a.getState().searchAccounts}}},c.a.createElement(w,_({ref:"nameInput"},this.props)))}}]),t}(c.a.Component);t.a=b}});
//# sourceMappingURL=33.js.map