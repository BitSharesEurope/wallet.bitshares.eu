webpackJsonp([35],{405:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(1),i=a.n(s),o=a(93),c=a(22),u=a.n(c),m=a(252),d=a(35),p=a(7),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state=e._getInitialState(),e}return l(t,e),b(t,[{key:"_getInitialState",value:function(){return{password:null,brainkey:null,invalid_password:!1}}},{key:"render",value:function(){var e,t=d.a.getWallet().brainkey_backup_date,a=t?i.a.createElement("div",null,i.a.createElement(u.a,{content:"wallet.brainkey_backed_up"}),": ",i.a.createElement(o.a,{value:t})):i.a.createElement(u.a,{className:"facolor-error",component:"p",content:"wallet.brainkey_not_backed_up"});if(this.state.verified){var n=p.m.sha1(this.state.brainkey).toString("hex").substring(0,4);e=i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(u.a,{content:"wallet.brainkey"})),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("h5",null,this.state.brainkey))),i.a.createElement("br",null),i.a.createElement("pre",{className:"no-overflow"},"sha1 hash of the brainkey: ",n),i.a.createElement("br",null),a)}if(!e&&this.state.brainkey){var n=p.m.sha1(this.state.brainkey).toString("hex").substring(0,4);e=i.a.createElement("span",null,i.a.createElement("h3",null,i.a.createElement(u.a,{content:"wallet.brainkey"})),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("h5",null,this.state.brainkey))),i.a.createElement("div",{style:{padding:"10px 0"}},i.a.createElement("pre",{className:"no-overflow"},"sha1 hash of your brainkey: ",n)),i.a.createElement("hr",null),i.a.createElement("div",{style:{padding:"10px 0 20px 0"}},i.a.createElement(u.a,{content:"wallet.brainkey_w1"}),i.a.createElement("br",null),i.a.createElement(u.a,{content:"wallet.brainkey_w2"}),i.a.createElement("br",null),i.a.createElement(u.a,{content:"wallet.brainkey_w3"})),i.a.createElement("button",{className:"button success",onClick:this.onComplete.bind(this)},i.a.createElement(u.a,{content:"wallet.verify"})),i.a.createElement("button",{className:"button cancel",onClick:this.reset.bind(this)},i.a.createElement(u.a,{content:"wallet.cancel"})))}if(!e){this.state.password&&this.state.password;e=i.a.createElement("span",null,i.a.createElement("label",null,i.a.createElement(u.a,{content:"wallet.enter_password"})),i.a.createElement("form",{onSubmit:this.onSubmit.bind(this),className:"name-form",noValidate:!0},i.a.createElement("input",{type:"password",id:"password",onChange:this.onPassword.bind(this)}),i.a.createElement("p",null,this.state.invalid_password?i.a.createElement("span",{className:"error"},"Invalid password"):i.a.createElement("span",null,i.a.createElement(u.a,{content:"wallet.pwd4brainkey"}))),i.a.createElement("div",null,a,i.a.createElement("br",null)),i.a.createElement("button",{className:"button success"},i.a.createElement(u.a,{content:"wallet.show_brainkey"}))))}return i.a.createElement("div",{className:"grid-block vertical"},i.a.createElement("div",{className:"grid-content no-overflow"},e))}},{key:"onComplete",value:function(e){this.setState({verified:!0}),m.a.setBrainkeyBackupDate()}},{key:"reset",value:function(e){e&&e.preventDefault(),this.setState(this._getInitialState())}},{key:"onBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"onSubmit",value:function(e){e.preventDefault();var t=d.a.isLocked();if(d.a.validatePassword(this.state.password,!0)){var a=d.a.getBrainKey();t&&d.a.onLock(),this.setState({brainkey:a})}else this.setState({invalid_password:!0})}},{key:"onPassword",value:function(e){this.setState({password:e.target.value,invalid_password:!1})}}]),t}(s.Component);t.default=f}});
//# sourceMappingURL=35.js.map