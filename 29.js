webpackJsonp([29],{648:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=n.n(o),i=n(31),u=n(4),s=n.n(u),m=function(e){return e(!1)},p=n(30),f=n(64),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(263),E=function(e){function t(e){a(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={step:1},n}return r(t,e),b(t,[{key:"componentWillMount",value:function(){var e=this;m(function(t){e.setState({incognito:t})})}},{key:"onSelect",value:function(e){this.props.router.push("/create-account/"+e)}},{key:"render",value:function(){var e=l.a.Children.count(this.props.children);return l.a.createElement("div",{className:"grid-block align-center"},l.a.createElement("div",{className:"grid-block shrink vertical"},l.a.createElement("div",{className:"grid-content shrink text-center account-creation"},l.a.createElement("div",null,l.a.createElement("img",{src:d})),l.a.createElement(s.a,{content:"account.intro_text_title",component:"h4"}),l.a.createElement(s.a,{unsafe:!0,content:"account.intro_text_1",component:"p"}),e?null:l.a.createElement("div",{className:"button-group"},l.a.createElement("label",{style:{textAlign:"left"}},l.a.createElement(s.a,{content:"account.new_user"}),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/create-account/password"},l.a.createElement("div",{className:"button"},l.a.createElement(s.a,{content:"header.create_account"})))),l.a.createElement("label",{style:{textAlign:"left"}},l.a.createElement(s.a,{content:"account.existing_user"}),l.a.createElement("br",null),l.a.createElement("div",{className:"button success",onClick:function(){p.a.changeSetting({setting:"passwordLogin",value:!0}),f.a.unlock.defer()}},l.a.createElement(s.a,{content:"header.unlock_short"})))),e?null:l.a.createElement("div",{className:"creation-options"},l.a.createElement("div",null,l.a.createElement(i.b,{to:"/wallet/backup/restore"},l.a.createElement(s.a,{content:"account.restore"}))),l.a.createElement("div",null,l.a.createElement(i.b,{to:"/create-account/wallet"},l.a.createElement(s.a,{content:"account.advanced"})))),this.props.children)))}}]),t}(l.a.Component);t.default=E}});
//# sourceMappingURL=29.js.map