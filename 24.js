webpackJsonp([24],{1165:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=n.n(o),c=n(25),l=n.n(c),u=n(1179),p=n(45),d=n(44),f=n(6),h=n(109),m=n(20),g=n.n(m),v=n(170),b=n(62),_=(n.n(b),n(63)),y=n(46),w=n(51),E=n.n(w),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(1626);var O=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),k(t,[{key:"_onCardClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.witness.get("name"))}},{key:"render",value:function(){var e=f.b.getWitnessById(this.props.witness.get("id"));if(!e)return null;var t=e.get("total_votes"),n=e.get("last_aslot"),a={};a=this.props.most_recent-n>100?{borderLeft:"1px solid #FCAB53"}:{borderLeft:"1px solid #50D2C2"};var r=new Date(Date.now()-(this.props.most_recent-n)*f.b.getObject("2.0.0").getIn(["parameters","block_interval"])*1e3);return s.a.createElement("div",{className:"grid-content account-card",onClick:this._onCardClick.bind(this)},s.a.createElement("div",{className:"card",style:a},s.a.createElement("h4",{className:"text-center"},"#",this.props.rank,": ",this.props.witness.get("name")),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"text-center"},s.a.createElement(u.a,{account:this.props.witness.get("name"),size:{height:64,width:64}})),s.a.createElement("br",null),s.a.createElement("table",{className:"table key-value-table"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Votes"),s.a.createElement("td",null,s.a.createElement(h.a,{amount:t,asset:"1.3.0",decimalOffset:5}))),s.a.createElement("tr",null,s.a.createElement("td",null,"Last Block"),s.a.createElement("td",null,s.a.createElement(v.a,{time:new Date(r)}))),s.a.createElement("tr",null,s.a.createElement("td",null,"Missed"),s.a.createElement("td",null,e.get("total_missed"))))))))}}]),t}(s.a.Component);O.propTypes={witness:p.a.ChainAccount.isRequired},O.contextTypes={router:s.a.PropTypes.object.isRequired},O=n.i(d.a)(O,{keep_updating:!0});var x=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),k(t,[{key:"_onRowClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.witness.get("name"))}},{key:"render",value:function(){var e=this.props,t=e.witness,n=e.isCurrent,a=e.rank,r=f.b.getWitnessById(this.props.witness.get("id"));if(!r)return null;var i=(r.get("total_votes"),r.get("last_aslot")),o={};o=this.props.most_recent-i>100?{borderLeft:"1px solid #FCAB53"}:{borderLeft:"1px solid #50D2C2"};var c=new Date(Date.now()-(this.props.most_recent-i)*f.b.getObject("2.0.0").getIn(["parameters","block_interval"])*1e3),l=n?"active-witness":"",u=r.get("total_missed"),p=E()("txtlabel",{success:u<=500},{info:u>500&&u<=1250},{warning:u>1250&&u<=2e3},{error:u>=200});return s.a.createElement("tr",{className:l,onClick:this._onRowClick.bind(this)},s.a.createElement("td",null,a),s.a.createElement("td",{style:o},t.get("name")),s.a.createElement("td",null,s.a.createElement(v.a,{time:new Date(c)})),s.a.createElement("td",null,r.get("last_confirmed_block_num")),s.a.createElement("td",{className:p},u),s.a.createElement("td",null,s.a.createElement(h.a,{amount:r.get("total_votes"),asset:"1.3.0",decimalOffset:5})))}}]),t}(s.a.Component);x.propTypes={witness:p.a.ChainAccount.isRequired},x.contextTypes={router:s.a.PropTypes.object.isRequired},x=n.i(d.a)(x,{keep_updating:!0});var j=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={sortBy:"rank",inverseSort:!0},e}return i(t,e),k(t,[{key:"_setSort",value:function(e){this.setState({sortBy:e,inverseSort:e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort})}},{key:"render",value:function(){var e=this,t=this.props,n=t.witnesses,a=t.current,r=t.cardView,i=t.witnessList,o=this.state,c=o.sortBy,l=o.inverseSort,u=0,p={};n.filter(function(e){return!!e&&i.indexOf(e.get("id"))!==-1}).sort(function(e,t){if(e&&t)return parseInt(t.get("total_votes"),10)-parseInt(e.get("total_votes"),10)}).forEach(function(e,t){if(e){var n=e.get("last_aslot");u<n&&(u=n),p[e.get("id")]=t+1}});var d=null;return n.length>0&&n[1]&&(d=n.filter(function(t){if(!t)return!1;var n=f.b.getObject(t.get("witness_account"));if(!n)return!1;var a=n.get("name");return!!a&&a.indexOf(e.props.filter)!==-1}).sort(function(e,t){var n=f.b.getObject(e.get("witness_account")),a=f.b.getObject(t.get("witness_account"));if(!n||!a)return 0;switch(c){case"name":return n.get("name")>a.get("name")?l?1:-1:n.get("name")<a.get("name")?l?-1:1:0;case"rank":return l?p[e.get("id")]-p[t.get("id")]:p[t.get("id")]-p[e.get("id")];default:return l?parseInt(e.get(c),10)-parseInt(t.get(c),10):parseInt(t.get(c),10)-parseInt(e.get(c),10)}}).map(function(t){return r?s.a.createElement(O,{key:t.get("id"),rank:p[t.get("id")],witness:t.get("witness_account"),most_recent:e.props.current_aslot}):s.a.createElement(x,{key:t.get("id"),rank:p[t.get("id")],isCurrent:a===t.get("id"),witness:t.get("witness_account"),most_recent:e.props.current_aslot})})),r?s.a.createElement("div",{className:"grid-block small-up-1 medium-up-2 large-up-3"},d):s.a.createElement("table",{className:"table table-hover"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"rank")},s.a.createElement(g.a,{content:"explorer.witnesses.rank"})),s.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"name")},s.a.createElement(g.a,{content:"account.votes.name"})),s.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"last_aslot")},s.a.createElement(g.a,{content:"explorer.blocks.last_block"})),s.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"last_confirmed_block_num")},s.a.createElement(g.a,{content:"explorer.witnesses.last_confirmed"})),s.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"total_missed")},s.a.createElement(g.a,{content:"explorer.witnesses.missed"})),s.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"total_votes")},s.a.createElement(g.a,{content:"account.votes.votes"})))),s.a.createElement("tbody",null,d))}}]),t}(s.a.Component);j.propTypes={witnesses:p.a.ChainObjectsList.isRequired},j=n.i(d.a)(j,{keep_updating:!0,show_loader:!0});var C=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={filterWitness:e.filterWitness||"",cardView:e.cardView},n}return i(t,e),k(t,[{key:"_onFilter",value:function(e){e.preventDefault(),this.setState({filterWitness:e.target.value.toLowerCase()}),_.a.changeViewSetting({filterWitness:e.target.value.toLowerCase()})}},{key:"_toggleView",value:function(){_.a.changeViewSetting({cardView:!this.state.cardView}),this.setState({cardView:!this.state.cardView})}},{key:"render",value:function(){var e=this.props,t=e.dynGlobalObject,n=e.globalObject;t=t.toJS(),n=n.toJS();var a=f.b.getObject(t.current_witness),r=null;return a&&(r=f.b.getObject(a.get("witness_account"))),s.a.createElement("div",{className:"grid-block"},s.a.createElement("div",{className:"grid-block page-layout"},s.a.createElement("div",{className:"grid-block vertical small-5 medium-3"},s.a.createElement("div",{className:"grid-content"},s.a.createElement("br",null),s.a.createElement("table",{className:"table key-value-table"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(g.a,{content:"explorer.witnesses.current"})),s.a.createElement("td",null,r?r.get("name"):null)),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(g.a,{content:"explorer.blocks.active_witnesses"})),s.a.createElement("td",null,Object.keys(n.active_witnesses).length)),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(g.a,{content:"explorer.witnesses.participation"})),s.a.createElement("td",null,t.participation,"%")),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(g.a,{content:"explorer.witnesses.pay"})),s.a.createElement("td",null,s.a.createElement(h.a,{amount:n.parameters.witness_pay_per_block,asset:"1.3.0"}))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(g.a,{content:"explorer.witnesses.budget"})),s.a.createElement("td",null," ",s.a.createElement(h.a,{amount:t.witness_budget,asset:"1.3.0"}))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement(g.a,{content:"explorer.witnesses.next_vote"})),s.a.createElement("td",null," ",s.a.createElement(v.a,{time:new Date(t.next_maintenance_time)}))),s.a.createElement("tr",null,s.a.createElement("td",null," ",s.a.createElement(g.a,{component:"h4",content:"markets.filter"})," "),s.a.createElement("td",null," ",s.a.createElement("input",{type:"text",value:this.state.filterWitness,onChange:this._onFilter.bind(this)})," ")))),s.a.createElement("div",{className:"view-switcher"},s.a.createElement("span",{className:"button outline",onClick:this._toggleView.bind(this)},this.state.cardView?s.a.createElement(g.a,{content:"explorer.witnesses.table"}):s.a.createElement(g.a,{content:"explorer.witnesses.card"}))))),s.a.createElement("div",{className:"grid-block"},s.a.createElement("div",{className:"grid-content "},s.a.createElement(j,{current_aslot:t.current_aslot,current:a?a.get("id"):null,witnesses:l.a.List(n.active_witnesses),witnessList:n.active_witnesses,filter:this.state.filterWitness,cardView:this.state.cardView})))))}}]),t}(s.a.Component);C.propTypes={globalObject:p.a.ChainObject.isRequired,dynGlobalObject:p.a.ChainObject.isRequired},C.defaultProps={globalObject:"2.0.0",dynGlobalObject:"2.1.0"},C=n.i(d.a)(C,{keep_updating:!0});var T=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),k(t,[{key:"render",value:function(){return s.a.createElement(C,this.props)}}]),t}(s.a.Component);T=n.i(b.connect)(T,{listenTo:function(){return[y.a]},getProps:function(){return{cardView:y.a.getState().viewSettings.get("cardView"),filterWitness:y.a.getState().viewSettings.get("filterWitness")}}}),t.default=T},1179:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(1),s=n.n(o),c=n(1180),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.account,n=e.image,a=this.props.size,r=a.height,i=a.width,o=n?s.a.createElement("img",{src:n,height:r+"px",width:i+"px"}):s.a.createElement(c.a,{id:t,account:t,size:this.props.size});return s.a.createElement("div",{className:"account-image"},o)}}]),t}(o.Component);u.defaultProps={src:"",account:"",size:{height:120,width:120}},u.propTypes={src:o.PropTypes.string,account:o.PropTypes.string,size:o.PropTypes.object.isRequired},t.a=u},1180:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(1),s=n.n(o),c=n(1182),l=n.n(c),u=n(1181),p=n.n(u),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=0,h=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.canvas_id="identicon_"+(n.props.account||"")+ ++f,n}return i(t,e),d(t,[{key:"shouldComponentUpdate",value:function(e){return e.size.height!==this.props.size.height||e.size.width!==this.props.size.width||e.account!==this.props.account}},{key:"render",value:function(){var e=this.props.account,t=this.props.size,n=t.height,a=t.width,r=e?l()(e):null;return s.a.createElement("canvas",{id:this.canvas_id,ref:"canvas",style:{height:n,width:a},width:2*a,height:2*n,"data-jdenticon-hash":r})}},{key:"repaint",value:function(){if(this.props.account)p.a.updateById(this.canvas_id);else{var e=this.refs.canvas.getContext("2d");e.fillStyle="rgba(100, 100, 100, 0.5)";var t=e.canvas.width;e.clearRect(0,0,t,t),e.fillRect(0,0,t,t),e.clearRect(1,1,t-2,t-2),e.font=t+"px sans-serif",e.fillText("?",t/4,t-t/6)}}},{key:"componentDidMount",value:function(){this.repaint()}},{key:"componentDidUpdate",value:function(){this.repaint()}}]),t}(o.Component);h.propTypes={size:o.PropTypes.object.isRequired,account:o.PropTypes.string},t.a=h},1181:function(e,t,n){(function(e){var n,a;!function(r,i,o){var s=r.jQuery,c=o(r,s);void 0!==e&&"exports"in e?e.exports=c:(n=[],void 0!==(a=function(){return c}.apply(t,n))&&(e.exports=a))}(this,"jdenticon",function(e,t){"use strict";function n(){}function a(e,t,n,a){this._x=e,this._y=t,this._size=n,this._rotation=a}function r(e,t){this._ctx=e,this._transform=t||a.noTransform,e.beginPath()}function i(e,t,n){var a=(e="string"==typeof e?document.querySelector(e):e).getContext("2d"),r=Math.min(e.width)*(1-2*(n===l?.08:n));a.save(),a.clearRect(0,0,e.width,e.height),a.translate(0|(e.width-r)/2,0|(e.height-r)/2),o(a,t||e.getAttribute(p),r),a.restore()}function o(e,t,i){function o(e,n,i,o,s){var c,l,p,d=o?parseInt(t.charAt(o),16):0,f=n[parseInt(t.charAt(i),16)%n.length];for(c=0;c<s.length;c++)p=new a(s[c][0]*u,s[c][1]*u,u,d++%4),l=new r(e,p),f(l,u,c),l.fill()}function s(e){if(e.indexOf(l)>=0)for(var t=0;t<e.length;t++)if(m.indexOf(e[t])>=0)return!0}function c(t){e.fillStyle=h[m[t]].toString()}if(i<30)throw new Error("Jdenticon cannot render identicons smaller than 30 pixels.");if(!/^[0-9a-f]{11,}$/i.test(t))throw new Error("Invalid hash passed to Jdenticon.");if(!e)throw new Error("No canvas specified.");i|=0;for(var l,u=2*(0|i/8),p=parseInt(t.substr(-7),16)/268435455,h=[n.rgb(128,128,128),n.correctedHsl(p,.5,.6),n.rgb(190,190,190),n.correctedHsl(p,.5,.7),n.hsl(p,.5,.5)],m=[],g=0;g<3;g++)l=parseInt(t.charAt(8+g),16)%h.length,(s([0,4])||s([2,3]))&&(l=1),m.push(l);e.clearRect(0,0,i,i),c(0),o(e,f,2,3,[[1,0],[2,0],[2,3],[1,3],[0,1],[3,1],[3,2],[0,2]]),c(1),o(e,f,4,5,[[0,0],[3,0],[3,3],[0,3]]),c(2),o(e,d,1,null,[[1,1],[2,1],[2,2],[1,2]])}function s(e){var t,n=document.getElementById(e);(t=n.getAttribute(p))&&i(n,t,0)}function c(){for(var t,n=("document"in e?document.getElementsByTagName("canvas"):[]),a=0;a<n.length;a++)(t=n[a].getAttribute(p))&&i(n[a],t,0)}var l,u="{version}",p="data-jdenticon-hash";n.rgb=function(e,t,a,r){var i=new n;return i.s="rgba("+(255&e)+","+(255&t)+","+(255&a)+","+(r===l?1:r)+")",i},n.hsl=function(e,t,a,r){var i=new n;return i.s="hsla("+(360*e|0)+","+(100*t|0)+"%,"+(100*a|0)+"%,"+(r===l?1:r)+")",i},n.correctedHsl=function(e,t,a){var r=[.95,1,1,1,.7,.8,.8];return n.hsl(e,t,1-r[6*e+.5|0]*(1-a))},n.prototype={toString:function(){return this.s}},a.noTransform=new a(0,0,0,0),a.prototype={transformPoint:function(e,t,n,a){var r=this._x+this._size,i=this._y+this._size;return 1===this._rotation?[r-t-(a||0),this._y+e]:2===this._rotation?[r-e-(n||0),i-t-(a||0)]:3===this._rotation?[this._x+t,i-e-(n||0)]:[this._x+e,this._y+t]}},r.prototype={addPolygon:function(e,t){var n=t?-2:2,a=t?e.length-2:0,r=this._ctx;for(r.moveTo.apply(r,this._transform.transformPoint(e[a],e[a+1])),a+=n;a<e.length&&a>=0;a+=n)r.lineTo.apply(r,this._transform.transformPoint(e[a],e[a+1]));r.closePath()},addEllipse:function(e,t,n,a,r){var i=this._ctx,o=.5522848,s=this._transform.transformPoint(e,t,n,a),e=s[0],t=s[1],c=n/2*o,l=a/2*o,u=e+n,p=t+a,d=e+n/2,f=t+a/2;r&&(p=t,t+=a,l=-l),i.moveTo(e,f),i.bezierCurveTo(e,f-l,d-c,t,d,t),i.bezierCurveTo(d+c,t,u,f-l,u,f),i.bezierCurveTo(u,f+l,d+c,p,d,p),i.bezierCurveTo(d-c,p,e,f+l,e,f),i.closePath()},addRectangle:function(e,t,n,a,r){this.addPolygon([e,t,e+n,t,e+n,t+a,e,t+a],r)},addTriangle:function(e,t,n,a,r,i){var o=[e+n,t,e+n,t+a,e,t+a,e,t];o.splice((r||0)%4*2,2),this.addPolygon(o,i)},addRhombus:function(e,t,n,a,r){this.addPolygon([e+n/2,t,e+n,t+a/2,e+n/2,t+a,e,t+a/2],r)},fill:function(){this._ctx.fill()}};var d=[function(e,t,n){var a=.42*t;e.addPolygon([0,0,t,0,t,t-2*a,t-a,t,0,t])},function(e,t,n){var a=0|.5*t,r=0|.8*t;e.addTriangle(t-a,0,a,r,2)},function(e,t,n){var a=0|t/3;e.addRectangle(a,a,t-a,t-a)},function(e,t,n){var a=0|.1*t,r=0|.25*t;e.addRectangle(r,r,t-a-r,t-a-r)},function(e,t,n){var a=0|.15*t,r=0|.5*t;e.addEllipse(t-r-a,t-r-a,r,r)},function(e,t,n){var a=.1*t,r=4*a;e.addRectangle(0,0,t,t),e.addPolygon([r,r,t-a,r,r+(t-r-a)/2,t-a],!0)},function(e,t,n){e.addPolygon([0,0,t,0,t,.7*t,.4*t,.4*t,.7*t,t,0,t])},function(e,t,n){e.addTriangle(t/2,t/2,t/2,t/2,3)},function(e,t,n){e.addRectangle(0,0,t,t/2),e.addRectangle(0,t/2,t/2,t/2),e.addTriangle(t/2,t/2,t/2,t/2,1)},function(e,t,n){var a=0|.14*t,r=0|.35*t;e.addRectangle(0,0,t,t),e.addRectangle(r,r,t-r-a,t-r-a,!0)},function(e,t,n){var a=.12*t,r=3*a;e.addRectangle(0,0,t,t),e.addEllipse(r,r,t-a-r,t-a-r,!0)},function(e,t,n){e.addTriangle(t/2,t/2,t/2,t/2,3)},function(e,t,n){var a=.25*t;e.addRectangle(0,0,t,t),e.addRhombus(a,a,t-a,t-a,!0)},function(e,t,n){var a=.4*t,r=1.2*t;n||e.addEllipse(a,a,r,r)}],f=[function(e,t,n){e.addTriangle(0,0,t,t,0)},function(e,t,n){e.addTriangle(0,t/2,t,t/2,0)},function(e,t,n){e.addRhombus(0,0,t,t)},function(e,t,n){var a=t/6;e.addEllipse(a,a,t-2*a,t-2*a)}];return c.drawIcon=o,c.update=i,c.version=u,c.updateById=s,t&&(t.fn.jdenticon=function(e,t){return this.each(function(n,a){i(a,e,t)}),this}),"function"==typeof setTimeout&&setTimeout(c,0),c})}).call(t,n(382)(e))},1182:function(e,t,n){(function(t){!function(n,a){"use strict";var r=void 0!==e;r&&(n=t);var i="undefined"!=typeof Uint8Array,o="0123456789abcdef".split(""),s=[-2147483648,8388608,32768,128],c=[24,16,8,0],l=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],u=[];Array.prototype.__ARRAY__=!0,i&&(Uint8Array.prototype.__ARRAY__=!0);var p=function(e){return d(e,!0)},d=function(e,t){var n,a,r,i,p,d,f,h,m,g,v,b,_,y,w,E,k,O,x,j,C,T,P=!0,R=!1,S=0,N=0,A=0,z=e.length;t?(n=3238371032,a=914150663,r=812702999,i=4144912697,p=4290775857,d=1750603025,f=1694076839,h=3204075428):(n=1779033703,a=3144134277,r=1013904242,i=2773480762,p=1359893119,d=2600822924,f=528734635,h=1541459225),m=0;do{if(u[0]=m,u[16]=u[1]=u[2]=u[3]=u[4]=u[5]=u[6]=u[7]=u[8]=u[9]=u[10]=u[11]=u[12]=u[13]=u[14]=u[15]=0,e.__ARRAY__)for(v=N;S<z&&v<64;++S)u[v>>2]|=e[S]<<c[3&v++];else for(v=N;S<z&&v<64;++S)g=e.charCodeAt(S),g<128?u[v>>2]|=g<<c[3&v++]:g<2048?(u[v>>2]|=(192|g>>6)<<c[3&v++],u[v>>2]|=(128|63&g)<<c[3&v++]):g<55296||g>=57344?(u[v>>2]|=(224|g>>12)<<c[3&v++],u[v>>2]|=(128|g>>6&63)<<c[3&v++],u[v>>2]|=(128|63&g)<<c[3&v++]):(g=65536+((1023&g)<<10|1023&e.charCodeAt(++S)),u[v>>2]|=(240|g>>18)<<c[3&v++],u[v>>2]|=(128|g>>12&63)<<c[3&v++],u[v>>2]|=(128|g>>6&63)<<c[3&v++],u[v>>2]|=(128|63&g)<<c[3&v++]);A+=v-N,N=v-64,S==z&&(u[v>>2]|=s[3&v],++S),m=u[16],S>z&&v<56&&(u[15]=A<<3,R=!0);var I=n,V=a,D=r,B=i,L=p,q=d,W=f,J=h;for(b=16;b<64;++b)E=u[b-15],_=(E>>>7|E<<25)^(E>>>18|E<<14)^E>>>3,E=u[b-2],y=(E>>>17|E<<15)^(E>>>19|E<<13)^E>>>10,u[b]=u[b-16]+_+u[b-7]+y<<0;for(T=V&D,b=0;b<64;b+=4)P?(t?(x=300032,E=u[0]-1413257819,J=E-150054599<<0,B=E+24177077<<0):(x=704751109,E=u[0]-210244248,J=E-1521486534<<0,B=E+143694565<<0),P=!1):(_=(I>>>2|I<<30)^(I>>>13|I<<19)^(I>>>22|I<<10),y=(L>>>6|L<<26)^(L>>>11|L<<21)^(L>>>25|L<<7),x=I&V,w=x^I&D^T,O=L&q^~L&W,E=J+y+O+l[b]+u[b],k=_+w,J=B+E<<0,B=E+k<<0),_=(B>>>2|B<<30)^(B>>>13|B<<19)^(B>>>22|B<<10),y=(J>>>6|J<<26)^(J>>>11|J<<21)^(J>>>25|J<<7),j=B&I,w=j^B&V^x,O=J&L^~J&q,E=W+y+O+l[b+1]+u[b+1],k=_+w,W=D+E<<0,D=E+k<<0,_=(D>>>2|D<<30)^(D>>>13|D<<19)^(D>>>22|D<<10),y=(W>>>6|W<<26)^(W>>>11|W<<21)^(W>>>25|W<<7),C=D&B,w=C^D&I^j,O=W&J^~W&L,E=q+y+O+l[b+2]+u[b+2],k=_+w,q=V+E<<0,V=E+k<<0,_=(V>>>2|V<<30)^(V>>>13|V<<19)^(V>>>22|V<<10),y=(q>>>6|q<<26)^(q>>>11|q<<21)^(q>>>25|q<<7),T=V&D,w=T^V&B^C,O=q&W^~q&J,E=L+y+O+l[b+3]+u[b+3],k=_+w,L=I+E<<0,I=E+k<<0;n=n+I<<0,a=a+V<<0,r=r+D<<0,i=i+B<<0,p=p+L<<0,d=d+q<<0,f=f+W<<0,h=h+J<<0}while(!R);var F=o[n>>28&15]+o[n>>24&15]+o[n>>20&15]+o[n>>16&15]+o[n>>12&15]+o[n>>8&15]+o[n>>4&15]+o[15&n]+o[a>>28&15]+o[a>>24&15]+o[a>>20&15]+o[a>>16&15]+o[a>>12&15]+o[a>>8&15]+o[a>>4&15]+o[15&a]+o[r>>28&15]+o[r>>24&15]+o[r>>20&15]+o[r>>16&15]+o[r>>12&15]+o[r>>8&15]+o[r>>4&15]+o[15&r]+o[i>>28&15]+o[i>>24&15]+o[i>>20&15]+o[i>>16&15]+o[i>>12&15]+o[i>>8&15]+o[i>>4&15]+o[15&i]+o[p>>28&15]+o[p>>24&15]+o[p>>20&15]+o[p>>16&15]+o[p>>12&15]+o[p>>8&15]+o[p>>4&15]+o[15&p]+o[d>>28&15]+o[d>>24&15]+o[d>>20&15]+o[d>>16&15]+o[d>>12&15]+o[d>>8&15]+o[d>>4&15]+o[15&d]+o[f>>28&15]+o[f>>24&15]+o[f>>20&15]+o[f>>16&15]+o[f>>12&15]+o[f>>8&15]+o[f>>4&15]+o[15&f];return t||(F+=o[h>>28&15]+o[h>>24&15]+o[h>>20&15]+o[h>>16&15]+o[h>>12&15]+o[h>>8&15]+o[h>>4&15]+o[15&h]),F};!n.JS_SHA256_TEST&&r?(d.sha256=d,d.sha224=p,e.exports=d):n&&(n.sha256=d,n.sha224=p)}(this)}).call(t,n(52))},1468:function(e,t,n){t=e.exports=n(1143)(),t.push([e.i,".active-witness>td{background-color:rgba(80,210,194,.4);transition:background-color .6s ease}.clickable{cursor:pointer;user-select:none}.view-switcher{padding-top:1rem;text-align:right}",""])},1626:function(e,t,n){var a=n(1468);"string"==typeof a&&(a=[[e.i,a,""]]);n(1144)(a,{});a.locals&&(e.exports=a.locals)}});
//# sourceMappingURL=24.js.map