webpackJsonp([3],{1198:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(1),i=n.n(l),s=n(22),c=n.n(s),u=n(27),p=n.n(u),h=n(48),d=n.n(h),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={password:"",confirm:"",errors:p.a.Map(),valid:!1},e}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.refs.firstPassword&&this.refs.firstPassword.focus()}},{key:"render",value:function(){var e=this.state,t=(e.password,e.confirm,e.valid,e.errors),n=this.props.newPassword,a=1;return i.a.createElement("div",{className:d()({"has-error":t.size})},i.a.createElement(c.a,{component:"label",content:n?"wallet.new_password":"wallet.password"}),i.a.createElement("section",null,i.a.createElement("input",{type:"password",id:"password",ref:"firstPassword",onChange:this.formChange.bind(this),value:this.state.password,tabIndex:a++})),i.a.createElement(c.a,{component:"label",content:n?"wallet.new_confirm":"wallet.confirm"}),i.a.createElement("section",null,i.a.createElement("input",{type:"password",id:"confirm",onChange:this.formChange.bind(this),value:this.state.confirm,tabIndex:a++})),i.a.createElement("div",{style:{paddingBottom:10}},t.get("password_match")||t.get("password_length")),this.props.children,i.a.createElement("br",null))}},{key:"formChange",value:function(e){var t=this.state;t[e.target.id]=e.target.value,this.setState(t),this.validate(t)}},{key:"validate",value:function(e){var t=e.password,n=e.confirm;n=n.trim(),t=t.trim();var a=p.a.Map();0!==t.length&&t.length<8&&(a=a.set("password_length","Password must be 8 characters or more")),""!==t&&""!==n&&t!==n&&(a=a.set("password_match","Passwords do not match"));var r=t.length>=8&&t===n;this.setState({errors:a,valid:r}),this.props.onValid(r?t:null)}}]),t}(l.Component);f.propTypes={onValid:l.PropTypes.func.isRequired},t.a=f},1202:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,i=n(1),s=n.n(i),c=n(48),u=n.n(c),p=n(7),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={brnkey:"",loading:!0},e}return o(t,e),h(t,[{key:"componentWillMount",value:function(){var e=this;fetch("/dictionary.json").then(function(t){return t.json().then(function(t){l=new Set(t.en.split(",")),e.setState({loading:!1})})}).catch(function(e){console.log("fetch dictionary error:",e)})}},{key:"_checkBrainKey",value:function(){var e=this.state.brnkey.split(" "),t=[];e.forEach(function(e,n){if(""!==e){var a=e.toLowerCase();a=a.match(/[a-z]+/),null===a||l.has(a[0])?t.push(s.a.createElement("span",{key:n,style:{padding:"1px",margin:"1px"}},e)):t.push(s.a.createElement(m,{key:n},e))}});var n=void 0,a=!0,r=!0;return t.length>0&&(this.state.brnkey.length<50?(n=this.state.brnkey.length+" characters (50 minimum)",r=!1):t.length<16?n=t.length+" words (16 recommended)":(n=t.length+" words",a=!1)),{warn:a,valid:r,word_count_label:n,checked_words:t}}},{key:"render",value:function(){if(this.state.loading||!l)return s.a.createElement("div",{style:{padding:20}},"Fetching dictionary....");var e=this._checkBrainKey(),t=e.warn,n=e.word_count_label,a=e.checked_words;return s.a.createElement("span",{className:""},s.a.createElement("div",null,s.a.createElement("textarea",{tabIndex:this.props.tabIndex||1,onChange:this.formChange.bind(this),value:this.state.brnkey,id:"brnkey",style:{height:100,minWidth:450}}),s.a.createElement("div",{style:{textAlign:"left"},className:"grid-content no-padding no-overflow"},a),this.state.check_digits&&!this.props.hideCheckDigits?s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("pre",{className:"no-overflow"},this.state.check_digits," * Check Digits"),s.a.createElement("br",null)):null,s.a.createElement("p",null,s.a.createElement("i",{className:u()({error:t})},n))))}},{key:"formChange",value:function(e){var t=e.target,n=t.id,a=t.value,r=this._checkBrainKey(),o=r.valid,l={};if(l[n]=a,"brnkey"===n){var i=p.n.normalize_brainKey(a);this.props.onChange(i.length<50?null:i),l.check_digits=i.length<50?null:p.m.sha1(i).toString("hex").substring(0,4)}this.setState(l),this.props.errorCallback&&this.props.errorCallback(o)}}]),t}(i.Component);d.propTypes={onChange:i.PropTypes.func.isRequired},t.a=d;var m=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),h(t,[{key:"render",value:function(){return s.a.createElement("span",{style:{borderBottom:"1px dotted #ff0000",padding:"1px",margin:"1px"}},s.a.createElement("span",{style:{borderBottom:"1px dotted #ff0000"}},this.props.children))}}]),t}(i.Component)},133:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"WalletCreate",function(){return k}),n.d(t,"CreateWalletFromBrainkey",function(){return E});var l=n(1),i=n.n(l),s=n(42),c=n(22),u=n.n(c),p=n(1202),h=n(1198),d=n(34),m=n(169),f=n(251),b=n(74),y=(n.n(b),n(48)),v=n.n(y),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={wallet_public_name:"default",valid_password:null,errors:{validBrainkey:!1},isValid:!1,create_submitted:!1,custom_brainkey:e.restoreBrainkey||!1,brnkey:null},n.validate=n.validate.bind(n),n}return o(t,e),w(t,[{key:"onBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"onPassword",value:function(e){this.state.valid_password=e,this.setState({valid_password:e},this.validate)}},{key:"onCustomBrainkey",value:function(){this.setState({custom_brainkey:!0})}},{key:"onBrainkey",value:function(e){this.state.brnkey=e,this.setState({brnkey:e},this.validate)}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.wallet_public_name,a=t.valid_password,r=t.custom_brainkey,o=t.errors;!a||o.wallet_public_name||r&&!o.validBrainkey||(f.a.setWallet(n,a,this.state.brnkey),this.setState({create_submitted:!0}))}},{key:"formChange",value:function(e){var t=e.target.id,n=e.target.value;"wallet_public_name"===t&&(n=n.toLowerCase(),/[^a-z0-9_-]/.test(n))||(this.state[t]=n,this.setState(this.state),this.validate())}},{key:"validate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=e.errors,n=this.props.wallet_names;t.wallet_public_name=n.has(e.wallet_public_name)?"Wallet "+e.wallet_public_name.toUpperCase()+" exists, please change the name":null;var a=null===t.wallet_public_name&&null!==e.valid_password;e.custom_brainkey&&a&&(a=null!==e.brnkey),this.setState({isValid:a,errors:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.errors,a=!!this.props.current_wallet;return this.state.create_submitted&&this.state.wallet_public_name===this.props.current_wallet?i.a.createElement("div",null,i.a.createElement("h4",null,i.a.createElement(u.a,{content:"wallet.wallet_created"})),i.a.createElement(s.b,{to:"/dashboard"},i.a.createElement("div",{className:"button success"},i.a.createElement(u.a,{content:"wallet.done"})))):i.a.createElement("div",null,i.a.createElement("form",{style:{maxWidth:"40rem"},onSubmit:this.onSubmit.bind(this),onChange:this.formChange.bind(this),noValidate:!0},i.a.createElement("div",{className:"grid-content",style:{textAlign:"left"}},this.props.restoreBrainkey?null:i.a.createElement(u.a,{component:"p",content:"wallet.create_importkeys_text"}),this.props.restoreBrainkey?null:i.a.createElement(u.a,{component:"p",content:"wallet.create_text"})),i.a.createElement(h.a,{onValid:this.onPassword.bind(this)}),a?i.a.createElement("div",{className:"no-overflow"},i.a.createElement("br",null),i.a.createElement("section",null,i.a.createElement("label",null,i.a.createElement(u.a,{content:"wallet.name"})),i.a.createElement("input",{tabIndex:3,type:"text",id:"wallet_public_name",defaultValue:this.state.wallet_public_name})),i.a.createElement("div",{className:"has-error"},n.wallet_public_name),i.a.createElement("br",null)):null,i.a.createElement("div",{className:"no-overflow"},this.state.custom_brainkey?i.a.createElement("div",null,i.a.createElement("label",null,i.a.createElement(u.a,{content:"wallet.brainkey"})),i.a.createElement(p.a,{tabIndex:4,onChange:this.onBrainkey.bind(this),errorCallback:function(t){var n=e.state.errors;n.validBrainkey=t,e.setState({errors:n})}})):null,i.a.createElement("button",{className:v()("button",{disabled:!this.state.isValid})},i.a.createElement(u.a,{content:"wallet.create_wallet"})),i.a.createElement("button",{className:"button secondary",onClick:this.onBack.bind(this)},i.a.createElement(u.a,{content:"wallet.cancel"}))),this.state.custom_brainkey?null:i.a.createElement("div",{style:{paddingTop:20}},i.a.createElement("label",null,i.a.createElement("a",{onClick:this.onCustomBrainkey.bind(this)},i.a.createElement(u.a,{content:"wallet.custom_brainkey"}))))))}}]),t}(l.Component);g.propTypes={hideTitle:i.a.PropTypes.bool},g=Object(b.connect)(g,{listenTo:function(){return[m.a]},getProps:function(){return m.a.getState()}});var k=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),w(t,[{key:"render",value:function(){return d.a.getWallet()&&this.props.children?i.a.createElement("div",null,this.props.children):i.a.createElement(g,this.props)}}]),t}(l.Component),E=function(e){return e.nested?i.a.createElement(k,_({restoreBrainkey:!0},e)):i.a.createElement("div",{className:"grid-container",style:{paddingTop:30}},i.a.createElement(u.a,{content:"settings.backup_brainkey",component:"h3"}),i.a.createElement(u.a,{content:"settings.restore_brainkey_text",component:"p",style:{maxWidth:"40rem",paddingBottom:10}}),i.a.createElement(k,_({restoreBrainkey:!0},e)))}}});
//# sourceMappingURL=3.js.map