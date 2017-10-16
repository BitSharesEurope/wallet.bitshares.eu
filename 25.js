webpackJsonp([25],{1184:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(10),a=n(13),i=(n.n(a),n(15)),o=n(254),l=n(174),c=n(36),u=n(7),f=n(1202),p=n.n(f),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),d=new o.a,h=new l.a,g={},_=function(){function e(){s(this,e)}return m(e,[{key:"fundPool",value:function(e,t,n,s){var r=d.new_transaction(),a=i.a.get_asset_precision(t.get("precision"));return r.add_type_operation("asset_fund_fee_pool",{fee:{amount:0,asset_id:"1.3.0"},from_account:e,asset_id:n.get("id"),amount:s*a}),function(e){return c.a.process_transaction(r,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- fundPool error -----\x3e",t),e(!1)})}}},{key:"claimPoolFees",value:function(e,t,n){var s=d.new_transaction(),r=i.a.get_asset_precision(t.get("precision"));return s.add_type_operation("asset_claim_fees",{fee:{amount:0,asset_id:0},issuer:e,amount_to_claim:{asset_id:t.get("id"),amount:n*r}}),function(e){return c.a.process_transaction(s,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- claimFees error -----\x3e",t),e(!1)})}}},{key:"createAsset",value:function(e,t,n,s,r,a,o,l,f){console.log("create asset:",t,"flags:",n,"isBitAsset:",a,"bitasset_opts:",l);var m=d.new_transaction(),h=i.a.get_asset_precision(t.precision);p.a.config({DECIMAL_PLACES:t.precision});var g=new p.a(t.max_supply).times(h).toString(),_=new p.a(t.max_market_fee||0).times(h).toString(),b=i.a.get_asset_precision(u.b.getAsset(r.base.asset_id).get("precision")),y={fee:{amount:0,asset_id:0},issuer:e,symbol:t.symbol,precision:parseInt(t.precision,10),common_options:{max_supply:g,market_fee_percent:100*t.market_fee_percent||0,max_market_fee:_,issuer_permissions:s,flags:n,core_exchange_rate:{base:{amount:r.base.amount*b,asset_id:r.base.asset_id},quote:{amount:r.quote.amount*h,asset_id:"1.3.1"}},whitelist_authorities:[],blacklist_authorities:[],whitelist_markets:[],blacklist_markets:[],description:f,extensions:null},is_prediction_market:o,extensions:null};return a&&(y.bitasset_opts=l),m.add_type_operation("asset_create",y),function(e){return c.a.process_transaction(m,null,!0).then(function(t){e(!0)}).catch(function(t){console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",t),e(!1)})}}},{key:"updateAsset",value:function(e,t,n,s,r,a,o,l,f,m,h,g){var _=d.new_transaction(),b=i.a.get_asset_precision(r.get("precision"));p.a.config({DECIMAL_PLACES:r.get("precision")});var y=new p.a(n.max_supply).times(b).toString(),v=new p.a(n.max_market_fee||0).times(b).toString(),w=u.b.getAsset(s.quote.asset_id),E=i.a.get_asset_precision(w.get("precision")),k=u.b.getAsset(s.base.asset_id),A=i.a.get_asset_precision(k.get("precision")),x=new p.a(s.quote.amount).times(E).toString(),N=new p.a(s.base.amount).times(A).toString();console.log("auths:",g);var O={fee:{amount:0,asset_id:0},asset_to_update:r.get("id"),extensions:r.get("extensions"),issuer:e,new_issuer:t,new_options:{max_supply:y,max_market_fee:v,market_fee_percent:100*n.market_fee_percent,description:h,issuer_permissions:o,flags:a,whitelist_authorities:g.whitelist_authorities.toJS(),blacklist_authorities:g.blacklist_authorities.toJS(),whitelist_markets:g.whitelist_markets.toJS(),blacklist_markets:g.blacklist_markets.toJS(),extensions:r.getIn(["options","extensions"]),core_exchange_rate:{quote:{amount:x,asset_id:s.quote.asset_id},base:{amount:N,asset_id:s.base.asset_id}}}};if(e!==t&&t||delete O.new_issuer,_.add_type_operation("asset_update",O),console.log("bitasset_opts:",f,"original_bitasset_opts:",m),l&&(f.feed_lifetime_sec!==m.feed_lifetime_sec||f.minimum_feeds!==m.minimum_feeds||f.force_settlement_delay_sec!==m.force_settlement_delay_sec||f.force_settlement_offset_percent!==m.force_settlement_offset_percent||f.maximum_force_settlement_volume!==m.maximum_force_settlement_volume||f.short_backing_asset!==m.short_backing_asset)){var P={fee:{amount:0,asset_id:0},asset_to_update:r.get("id"),issuer:e,new_options:f};_.add_type_operation("asset_update_bitasset",P)}return c.a.process_transaction(_,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- createAsset error -----\x3e",e),!1})}},{key:"issueAsset",value:function(e,t,n,s,r){h.issue_asset(e,t,n,s,r)}},{key:"getAssetList",value:function(e,t){var n=e+"_"+t;return function(s){if(!g[n])return g[n]=!0,s({loading:!0}),a.Apis.instance().db_api().exec("list_assets",[e,t]).then(function(e){var t=[],r=[];e.forEach(function(e){u.b._updateObject(e,!1),r.push(e.dynamic_asset_data_id),e.bitasset_data_id&&t.push(e.bitasset_data_id)});var i=a.Apis.instance().db_api().exec("get_objects",[r]),o=t.length>0?a.Apis.instance().db_api().exec("get_objects",[t]):null;Promise.all([i,o]).then(function(t){return delete g[n],s({assets:e,dynamic:t[0],bitasset_data:t[1],loading:!1}),e&&e.length})}).catch(function(e){console.log("Error in AssetStore.getAssetList: ",e),s({loading:!1}),delete g[n]})}}},{key:"getAsset",value:function(e){var t=void 0;return function(n){if(!g[e])return g[e]=!0,t=i.a.is_object_id(e)?a.Apis.instance().db_api().exec("get_objects",[[e]]):a.Apis.instance().db_api().exec("list_assets",[e,1]),t.then(function(t){0!==t.length&&t||n({asset:null,id:e});var s=t[0].bitasset_data_id?a.Apis.instance().db_api().exec("get_objects",[[t[0].bitasset_data_id]]):null;Promise.all([a.Apis.instance().db_api().exec("get_objects",[[t[0].dynamic_asset_data_id]]),s]).then(function(s){delete g[e],n({asset:t[0],dynamic:s[0][0],bitasset_data:s[1]?s[1][0]:null})})}).catch(function(t){console.log("Error in AssetStore.updateAsset: ",t),delete g[e]})}}},{key:"lookupAsset",value:function(e,t){var n=u.b.getAsset(e);return n?{assets:[n],searchID:t,symbol:e}:function(n){setTimeout(function(){var s=u.b.getAsset(e);s&&n({assets:[s],searchID:t,symbol:e})},200)}}},{key:"reserveAsset",value:function(e,t,n){var s=d.new_transaction();return s.add_type_operation("asset_reserve",{fee:{amount:0,asset_id:0},amount_to_reserve:{amount:e,asset_id:t},payer:n,extensions:[]}),c.a.process_transaction(s,null,!0).then(function(e){return!0}).catch(function(e){return console.log("[AssetActions.js:150] ----- reserveAsset error -----\x3e",e),!1})}}]),e}();t.a=r.a.createActions(_)},1202:function(e,t,n){var s;!function(r){"use strict";function a(e){function t(e,s){var r,a,i,o,l,c,u=this;if(!(u instanceof t))return W&&T(26,"constructor call without new",e),new t(e,s);if(null!=s&&$(s,2,64,R,"base")){if(s|=0,c=e+"",10==s)return u=new t(e instanceof t?e:c),j(u,F+u.e+1,U);if((o="number"==typeof e)&&0*e!=0||!new RegExp("^-?"+(r="["+E.slice(0,s)+"]+")+"(?:\\."+r+")?$",s<37?"i":"").test(c))return L(u,c,o,s);o?(u.s=1/e<0?(c=c.slice(1),-1):1,W&&c.replace(/^0\.0*|\./,"").length>15&&T(R,w,e),o=!1):u.s=45===c.charCodeAt(0)?(c=c.slice(1),-1):1,c=n(c,10,s,u.s)}else{if(e instanceof t)return u.s=e.s,u.e=e.e,u.c=(e=e.c)?e.slice():e,void(R=0);if((o="number"==typeof e)&&0*e==0){if(u.s=1/e<0?(e=-e,-1):1,e===~~e){for(a=0,i=e;i>=10;i/=10,a++);return u.e=a,u.c=[e],void(R=0)}c=e+""}else{if(!g.test(c=e+""))return L(u,c,o);u.s=45===c.charCodeAt(0)?(c=c.slice(1),-1):1}}for((a=c.indexOf("."))>-1&&(c=c.replace(".","")),(i=c.search(/e/i))>0?(a<0&&(a=i),a+=+c.slice(i+1),c=c.substring(0,i)):a<0&&(a=c.length),i=0;48===c.charCodeAt(i);i++);for(l=c.length;48===c.charCodeAt(--l););if(c=c.slice(i,l+1))if(l=c.length,o&&W&&l>15&&(e>x||e!==b(e))&&T(R,w,u.s*e),(a=a-i-1)>G)u.c=u.e=null;else if(a<B)u.c=[u.e=0];else{if(u.e=a,u.c=[],i=(a+1)%A,a<0&&(i+=A),i<l){for(i&&u.c.push(+c.slice(0,i)),l-=A;i<l;)u.c.push(+c.slice(i,i+=A));c=c.slice(i),i=A-c.length}else i-=l;for(;i--;c+="0");u.c.push(+c)}else u.c=[u.e=0];R=0}function n(e,n,s,r){var a,i,l,c,u,p,d,h=e.indexOf("."),g=F,_=U;for(s<37&&(e=e.toLowerCase()),h>=0&&(l=H,H=0,e=e.replace(".",""),d=new t(s),u=d.pow(e.length-h),H=l,d.c=f(m(o(u.c),u.e),10,n),d.e=d.c.length),p=f(e,s,n),i=l=p.length;0==p[--l];p.pop());if(!p[0])return"0";if(h<0?--i:(u.c=p,u.e=i,u.s=r,u=C(u,d,g,_,n),p=u.c,c=u.r,i=u.e),a=i+g+1,h=p[a],l=n/2,c=c||a<0||null!=p[a+1],c=_<4?(null!=h||c)&&(0==_||_==(u.s<0?3:2)):h>l||h==l&&(4==_||c||6==_&&1&p[a-1]||_==(u.s<0?8:7)),a<1||!p[0])e=c?m("1",-g):"0";else{if(p.length=a,c)for(--n;++p[--a]>n;)p[a]=0,a||(++i,p=[1].concat(p));for(l=p.length;!p[--l];);for(h=0,e="";h<=l;e+=E.charAt(p[h++]));e=m(e,i)}return e}function s(e,n,s,r){var a,i,l,c,u;if(s=null!=s&&$(s,0,8,r,v)?0|s:U,!e.c)return e.toString();if(a=e.c[0],l=e.e,null==n)u=o(e.c),u=19==r||24==r&&l<=D?p(u,l):m(u,l);else if(e=j(new t(e),n,s),i=e.e,u=o(e.c),c=u.length,19==r||24==r&&(n<=i||i<=D)){for(;c<n;u+="0",c++);u=p(u,i)}else if(n-=l,u=m(u,i),i+1>c){if(--n>0)for(u+=".";n--;u+="0");}else if((n+=i-c)>0)for(i+1==c&&(u+=".");n--;u+="0");return e.s<0&&a?"-"+u:u}function r(e,n){var s,r,a=0;for(u(e[0])&&(e=e[0]),s=new t(e[0]);++a<e.length;){if(r=new t(e[a]),!r.s){s=r;break}n.call(s,r)&&(s=r)}return s}function h(e,t,n,s,r){return(e<t||e>n||e!=d(e))&&T(s,(r||"decimal places")+(e<t||e>n?" out of range":" not an integer"),e),!0}function S(e,t,n){for(var s=1,r=t.length;!t[--r];t.pop());for(r=t[0];r>=10;r/=10,s++);return(n=s+n*A-1)>G?e.c=e.e=null:n<B?e.c=[e.e=0]:(e.e=n,e.c=t),e}function T(e,t,n){var s=new Error(["new BigNumber","cmp","config","div","divToInt","eq","gt","gte","lt","lte","minus","mod","plus","precision","random","round","shift","times","toDigits","toExponential","toFixed","toFormat","toFraction","pow","toPrecision","toString","BigNumber"][e]+"() "+t+": "+n);throw s.name="BigNumber Error",R=0,s}function j(e,t,n,s){var r,a,i,o,l,c,u,f=e.c,p=N;if(f){e:{for(r=1,o=f[0];o>=10;o/=10,r++);if((a=t-r)<0)a+=A,i=t,l=f[c=0],u=l/p[r-i-1]%10|0;else if((c=_((a+1)/A))>=f.length){if(!s)break e;for(;f.length<=c;f.push(0));l=u=0,r=1,a%=A,i=a-A+1}else{for(l=o=f[c],r=1;o>=10;o/=10,r++);a%=A,i=a-A+r,u=i<0?0:l/p[r-i-1]%10|0}if(s=s||t<0||null!=f[c+1]||(i<0?l:l%p[r-i-1]),s=n<4?(u||s)&&(0==n||n==(e.s<0?3:2)):u>5||5==u&&(4==n||s||6==n&&(a>0?i>0?l/p[r-i]:0:f[c-1])%10&1||n==(e.s<0?8:7)),t<1||!f[0])return f.length=0,s?(t-=e.e+1,f[0]=p[(A-t%A)%A],e.e=-t||0):f[0]=e.e=0,e;if(0==a?(f.length=c,o=1,c--):(f.length=c+1,o=p[A-a],f[c]=i>0?b(l/p[r-i]%p[i])*o:0),s)for(;;){if(0==c){for(a=1,i=f[0];i>=10;i/=10,a++);for(i=f[0]+=o,o=1;i>=10;i/=10,o++);a!=o&&(e.e++,f[0]==k&&(f[0]=1));break}if(f[c]+=o,f[c]!=k)break;f[c--]=0,o=1}for(a=f.length;0===f[--a];f.pop());}e.e>G?e.c=e.e=null:e.e<B&&(e.c=[e.e=0])}return e}var C,L,R=0,M=t.prototype,I=new t(1),F=20,U=4,D=-7,q=21,B=-1e7,G=1e7,W=!0,$=h,z=!1,V=1,H=0,J={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0};return t.another=a,t.ROUND_UP=0,t.ROUND_DOWN=1,t.ROUND_CEIL=2,t.ROUND_FLOOR=3,t.ROUND_HALF_UP=4,t.ROUND_HALF_DOWN=5,t.ROUND_HALF_EVEN=6,t.ROUND_HALF_CEIL=7,t.ROUND_HALF_FLOOR=8,t.EUCLID=9,t.config=t.set=function(){var e,t,n=0,s={},r=arguments,a=r[0],i=a&&"object"==typeof a?function(){if(a.hasOwnProperty(t))return null!=(e=a[t])}:function(){if(r.length>n)return null!=(e=r[n++])};return i(t="DECIMAL_PLACES")&&$(e,0,P,2,t)&&(F=0|e),s[t]=F,i(t="ROUNDING_MODE")&&$(e,0,8,2,t)&&(U=0|e),s[t]=U,i(t="EXPONENTIAL_AT")&&(u(e)?$(e[0],-P,0,2,t)&&$(e[1],0,P,2,t)&&(D=0|e[0],q=0|e[1]):$(e,-P,P,2,t)&&(D=-(q=0|(e<0?-e:e)))),s[t]=[D,q],i(t="RANGE")&&(u(e)?$(e[0],-P,-1,2,t)&&$(e[1],1,P,2,t)&&(B=0|e[0],G=0|e[1]):$(e,-P,P,2,t)&&(0|e?B=-(G=0|(e<0?-e:e)):W&&T(2,t+" cannot be zero",e))),s[t]=[B,G],i(t="ERRORS")&&(e===!!e||1===e||0===e?(R=0,$=(W=!!e)?h:c):W&&T(2,t+y,e)),s[t]=W,i(t="CRYPTO")&&(!0===e||!1===e||1===e||0===e?e?(e="undefined"==typeof crypto,!e&&crypto&&(crypto.getRandomValues||crypto.randomBytes)?z=!0:W?T(2,"crypto unavailable",e?void 0:crypto):z=!1):z=!1:W&&T(2,t+y,e)),s[t]=z,i(t="MODULO_MODE")&&$(e,0,9,2,t)&&(V=0|e),s[t]=V,i(t="POW_PRECISION")&&$(e,0,P,2,t)&&(H=0|e),s[t]=H,i(t="FORMAT")&&("object"==typeof e?J=e:W&&T(2,t+" not an object",e)),s[t]=J,s},t.max=function(){return r(arguments,M.lt)},t.min=function(){return r(arguments,M.gt)},t.random=function(){var e=9007199254740992*Math.random()&2097151?function(){return b(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(n){var s,r,a,i,o,l=0,c=[],u=new t(I);if(n=null!=n&&$(n,0,P,14)?0|n:F,i=_(n/A),z)if(crypto.getRandomValues){for(s=crypto.getRandomValues(new Uint32Array(i*=2));l<i;)o=131072*s[l]+(s[l+1]>>>11),o>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),s[l]=r[0],s[l+1]=r[1]):(c.push(o%1e14),l+=2);l=i/2}else if(crypto.randomBytes){for(s=crypto.randomBytes(i*=7);l<i;)o=281474976710656*(31&s[l])+1099511627776*s[l+1]+4294967296*s[l+2]+16777216*s[l+3]+(s[l+4]<<16)+(s[l+5]<<8)+s[l+6],o>=9e15?crypto.randomBytes(7).copy(s,l):(c.push(o%1e14),l+=7);l=i/7}else z=!1,W&&T(14,"crypto unavailable",crypto);if(!z)for(;l<i;)(o=e())<9e15&&(c[l++]=o%1e14);for(i=c[--l],n%=A,i&&n&&(o=N[A-n],c[l]=b(i/o)*o);0===c[l];c.pop(),l--);if(l<0)c=[a=0];else{for(a=-1;0===c[0];c.splice(0,1),a-=A);for(l=1,o=c[0];o>=10;o/=10,l++);l<A&&(a-=A-l)}return u.e=a,u.c=c,u}}(),C=function(){function e(e,t,n){var s,r,a,i,o=0,l=e.length,c=t%O,u=t/O|0;for(e=e.slice();l--;)a=e[l]%O,i=e[l]/O|0,s=u*a+i*c,r=c*a+s%O*O+o,o=(r/n|0)+(s/O|0)+u*i,e[l]=r%n;return o&&(e=[o].concat(e)),e}function n(e,t,n,s){var r,a;if(n!=s)a=n>s?1:-1;else for(r=a=0;r<n;r++)if(e[r]!=t[r]){a=e[r]>t[r]?1:-1;break}return a}function s(e,t,n,s){for(var r=0;n--;)e[n]-=r,r=e[n]<t[n]?1:0,e[n]=r*s+e[n]-t[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(r,a,o,l,c){var u,f,p,m,d,h,g,_,y,v,w,E,x,N,O,P,S,T=r.s==a.s?1:-1,C=r.c,L=a.c;if(!(C&&C[0]&&L&&L[0]))return new t(r.s&&a.s&&(C?!L||C[0]!=L[0]:L)?C&&0==C[0]||!L?0*T:T/0:NaN);for(_=new t(T),y=_.c=[],f=r.e-a.e,T=o+f+1,c||(c=k,f=i(r.e/A)-i(a.e/A),T=T/A|0),p=0;L[p]==(C[p]||0);p++);if(L[p]>(C[p]||0)&&f--,T<0)y.push(1),m=!0;else{for(N=C.length,P=L.length,p=0,T+=2,d=b(c/(L[0]+1)),d>1&&(L=e(L,d,c),C=e(C,d,c),P=L.length,N=C.length),x=P,v=C.slice(0,P),w=v.length;w<P;v[w++]=0);S=L.slice(),S=[0].concat(S),O=L[0],L[1]>=c/2&&O++;do{if(d=0,(u=n(L,v,P,w))<0){if(E=v[0],P!=w&&(E=E*c+(v[1]||0)),(d=b(E/O))>1)for(d>=c&&(d=c-1),h=e(L,d,c),g=h.length,w=v.length;1==n(h,v,g,w);)d--,s(h,P<g?S:L,g,c),g=h.length,u=1;else 0==d&&(u=d=1),h=L.slice(),g=h.length;if(g<w&&(h=[0].concat(h)),s(v,h,w,c),w=v.length,-1==u)for(;n(L,v,P,w)<1;)d++,s(v,P<w?S:L,w,c),w=v.length}else 0===u&&(d++,v=[0]);y[p++]=d,v[0]?v[w++]=C[x]||0:(v=[C[x]],w=1)}while((x++<N||null!=v[0])&&T--);m=null!=v[0],y[0]||y.splice(0,1)}if(c==k){for(p=1,T=y[0];T>=10;T/=10,p++);j(_,o+(_.e=p+f*A-1)+1,l,m)}else _.e=f,_.r=+m;return _}}(),L=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,n=/^([^.]+)\.$/,s=/^\.([^.]+)$/,r=/^-?(Infinity|NaN)$/,a=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(i,o,l,c){var u,f=l?o:o.replace(a,"");if(r.test(f))i.s=isNaN(f)?null:f<0?-1:1;else{if(!l&&(f=f.replace(e,function(e,t,n){return u="x"==(n=n.toLowerCase())?16:"b"==n?2:8,c&&c!=u?e:t}),c&&(u=c,f=f.replace(n,"$1").replace(s,"0.$1")),o!=f))return new t(f,u);W&&T(R,"not a"+(c?" base "+c:"")+" number",o),i.s=null}i.c=i.e=null,R=0}}(),M.absoluteValue=M.abs=function(){var e=new t(this);return e.s<0&&(e.s=1),e},M.ceil=function(){return j(new t(this),this.e+1,2)},M.comparedTo=M.cmp=function(e,n){return R=1,l(this,new t(e,n))},M.decimalPlaces=M.dp=function(){var e,t,n=this.c;if(!n)return null;if(e=((t=n.length-1)-i(this.e/A))*A,t=n[t])for(;t%10==0;t/=10,e--);return e<0&&(e=0),e},M.dividedBy=M.div=function(e,n){return R=3,C(this,new t(e,n),F,U)},M.dividedToIntegerBy=M.divToInt=function(e,n){return R=4,C(this,new t(e,n),0,1)},M.equals=M.eq=function(e,n){return R=5,0===l(this,new t(e,n))},M.floor=function(){return j(new t(this),this.e+1,3)},M.greaterThan=M.gt=function(e,n){return R=6,l(this,new t(e,n))>0},M.greaterThanOrEqualTo=M.gte=function(e,n){return R=7,1===(n=l(this,new t(e,n)))||0===n},M.isFinite=function(){return!!this.c},M.isInteger=M.isInt=function(){return!!this.c&&i(this.e/A)>this.c.length-2},M.isNaN=function(){return!this.s},M.isNegative=M.isNeg=function(){return this.s<0},M.isZero=function(){return!!this.c&&0==this.c[0]},M.lessThan=M.lt=function(e,n){return R=8,l(this,new t(e,n))<0},M.lessThanOrEqualTo=M.lte=function(e,n){return R=9,-1===(n=l(this,new t(e,n)))||0===n},M.minus=M.sub=function(e,n){var s,r,a,o,l=this,c=l.s;if(R=10,e=new t(e,n),n=e.s,!c||!n)return new t(NaN);if(c!=n)return e.s=-n,l.plus(e);var u=l.e/A,f=e.e/A,p=l.c,m=e.c;if(!u||!f){if(!p||!m)return p?(e.s=-n,e):new t(m?l:NaN);if(!p[0]||!m[0])return m[0]?(e.s=-n,e):new t(p[0]?l:3==U?-0:0)}if(u=i(u),f=i(f),p=p.slice(),c=u-f){for((o=c<0)?(c=-c,a=p):(f=u,a=m),a.reverse(),n=c;n--;a.push(0));a.reverse()}else for(r=(o=(c=p.length)<(n=m.length))?c:n,c=n=0;n<r;n++)if(p[n]!=m[n]){o=p[n]<m[n];break}if(o&&(a=p,p=m,m=a,e.s=-e.s),(n=(r=m.length)-(s=p.length))>0)for(;n--;p[s++]=0);for(n=k-1;r>c;){if(p[--r]<m[r]){for(s=r;s&&!p[--s];p[s]=n);--p[s],p[r]+=k}p[r]-=m[r]}for(;0==p[0];p.splice(0,1),--f);return p[0]?S(e,p,f):(e.s=3==U?-1:1,e.c=[e.e=0],e)},M.modulo=M.mod=function(e,n){var s,r,a=this;return R=11,e=new t(e,n),!a.c||!e.s||e.c&&!e.c[0]?new t(NaN):!e.c||a.c&&!a.c[0]?new t(a):(9==V?(r=e.s,e.s=1,s=C(a,e,0,3),e.s=r,s.s*=r):s=C(a,e,0,V),a.minus(s.times(e)))},M.negated=M.neg=function(){var e=new t(this);return e.s=-e.s||null,e},M.plus=M.add=function(e,n){var s,r=this,a=r.s;if(R=12,e=new t(e,n),n=e.s,!a||!n)return new t(NaN);if(a!=n)return e.s=-n,r.minus(e);var o=r.e/A,l=e.e/A,c=r.c,u=e.c;if(!o||!l){if(!c||!u)return new t(a/0);if(!c[0]||!u[0])return u[0]?e:new t(c[0]?r:0*a)}if(o=i(o),l=i(l),c=c.slice(),a=o-l){for(a>0?(l=o,s=u):(a=-a,s=c),s.reverse();a--;s.push(0));s.reverse()}for(a=c.length,n=u.length,a-n<0&&(s=u,u=c,c=s,n=a),a=0;n;)a=(c[--n]=c[n]+u[n]+a)/k|0,c[n]=k===c[n]?0:c[n]%k;return a&&(c=[a].concat(c),++l),S(e,c,l)},M.precision=M.sd=function(e){var t,n,s=this,r=s.c;if(null!=e&&e!==!!e&&1!==e&&0!==e&&(W&&T(13,"argument"+y,e),e!=!!e&&(e=null)),!r)return null;if(n=r.length-1,t=n*A+1,n=r[n]){for(;n%10==0;n/=10,t--);for(n=r[0];n>=10;n/=10,t++);}return e&&s.e+1>t&&(t=s.e+1),t},M.round=function(e,n){var s=new t(this);return(null==e||$(e,0,P,15))&&j(s,~~e+this.e+1,null!=n&&$(n,0,8,15,v)?0|n:U),s},M.shift=function(e){var n=this;return $(e,-x,x,16,"argument")?n.times("1e"+d(e)):new t(n.c&&n.c[0]&&(e<-x||e>x)?n.s*(e<0?0:1/0):n)},M.squareRoot=M.sqrt=function(){var e,n,s,r,a,l=this,c=l.c,u=l.s,f=l.e,p=F+4,m=new t("0.5");if(1!==u||!c||!c[0])return new t(!u||u<0&&(!c||c[0])?NaN:c?l:1/0);if(u=Math.sqrt(+l),0==u||u==1/0?(n=o(c),(n.length+f)%2==0&&(n+="0"),u=Math.sqrt(n),f=i((f+1)/2)-(f<0||f%2),u==1/0?n="1e"+f:(n=u.toExponential(),n=n.slice(0,n.indexOf("e")+1)+f),s=new t(n)):s=new t(u+""),s.c[0])for(f=s.e,u=f+p,u<3&&(u=0);;)if(a=s,s=m.times(a.plus(C(l,a,p,1))),o(a.c).slice(0,u)===(n=o(s.c)).slice(0,u)){if(s.e<f&&--u,"9999"!=(n=n.slice(u-3,u+1))&&(r||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(j(s,s.e+F+2,1),e=!s.times(s).eq(l));break}if(!r&&(j(a,a.e+F+2,0),a.times(a).eq(l))){s=a;break}p+=4,u+=4,r=1}return j(s,s.e+F+1,U,e)},M.times=M.mul=function(e,n){var s,r,a,o,l,c,u,f,p,m,d,h,g,_,b,y=this,v=y.c,w=(R=17,e=new t(e,n)).c;if(!(v&&w&&v[0]&&w[0]))return!y.s||!e.s||v&&!v[0]&&!w||w&&!w[0]&&!v?e.c=e.e=e.s=null:(e.s*=y.s,v&&w?(e.c=[0],e.e=0):e.c=e.e=null),e;for(r=i(y.e/A)+i(e.e/A),e.s*=y.s,u=v.length,m=w.length,u<m&&(g=v,v=w,w=g,a=u,u=m,m=a),a=u+m,g=[];a--;g.push(0));for(_=k,b=O,a=m;--a>=0;){for(s=0,d=w[a]%b,h=w[a]/b|0,l=u,o=a+l;o>a;)f=v[--l]%b,p=v[l]/b|0,c=h*f+p*d,f=d*f+c%b*b+g[o]+s,s=(f/_|0)+(c/b|0)+h*p,g[o--]=f%_;g[o]=s}return s?++r:g.splice(0,1),S(e,g,r)},M.toDigits=function(e,n){var s=new t(this);return e=null!=e&&$(e,1,P,18,"precision")?0|e:null,n=null!=n&&$(n,0,8,18,v)?0|n:U,e?j(s,e,n):s},M.toExponential=function(e,t){return s(this,null!=e&&$(e,0,P,19)?1+~~e:null,t,19)},M.toFixed=function(e,t){return s(this,null!=e&&$(e,0,P,20)?~~e+this.e+1:null,t,20)},M.toFormat=function(e,t){var n=s(this,null!=e&&$(e,0,P,21)?~~e+this.e+1:null,t,21);if(this.c){var r,a=n.split("."),i=+J.groupSize,o=+J.secondaryGroupSize,l=J.groupSeparator,c=a[0],u=a[1],f=this.s<0,p=f?c.slice(1):c,m=p.length;if(o&&(r=i,i=o,o=r,m-=r),i>0&&m>0){for(r=m%i||i,c=p.substr(0,r);r<m;r+=i)c+=l+p.substr(r,i);o>0&&(c+=l+p.slice(r)),f&&(c="-"+c)}n=u?c+J.decimalSeparator+((o=+J.fractionGroupSize)?u.replace(new RegExp("\\d{"+o+"}\\B","g"),"$&"+J.fractionGroupSeparator):u):c}return n},M.toFraction=function(e){var n,s,r,a,i,l,c,u,f,p=W,m=this,d=m.c,h=new t(I),g=s=new t(I),_=c=new t(I);if(null!=e&&(W=!1,l=new t(e),W=p,(p=l.isInt())&&!l.lt(I)||(W&&T(22,"max denominator "+(p?"out of range":"not an integer"),e),e=!p&&l.c&&j(l,l.e+1,1).gte(I)?l:null)),!d)return m.toString();for(f=o(d),a=h.e=f.length-m.e-1,h.c[0]=N[(i=a%A)<0?A+i:i],e=!e||l.cmp(h)>0?a>0?h:g:l,i=G,G=1/0,l=new t(f),c.c[0]=0;u=C(l,h,0,1),r=s.plus(u.times(_)),1!=r.cmp(e);)s=_,_=r,g=c.plus(u.times(r=g)),c=r,h=l.minus(u.times(r=h)),l=r;return r=C(e.minus(s),_,0,1),c=c.plus(r.times(g)),s=s.plus(r.times(_)),c.s=g.s=m.s,a*=2,n=C(g,_,a,U).minus(m).abs().cmp(C(c,s,a,U).minus(m).abs())<1?[g.toString(),_.toString()]:[c.toString(),s.toString()],G=i,n},M.toNumber=function(){return+this},M.toPower=M.pow=function(e,n){var s,r,a,i=b(e<0?-e:+e),o=this;if(null!=n&&(R=23,n=new t(n)),!$(e,-x,x,23,"exponent")&&(!isFinite(e)||i>x&&(e/=0)||parseFloat(e)!=e&&!(e=NaN))||0==e)return s=Math.pow(+o,e),new t(n?s%n:s);for(n?e>1&&o.gt(I)&&o.isInt()&&n.gt(I)&&n.isInt()?o=o.mod(n):(a=n,n=null):H&&(s=_(H/A+2)),r=new t(I);;){if(i%2){if(r=r.times(o),!r.c)break;s?r.c.length>s&&(r.c.length=s):n&&(r=r.mod(n))}if(!(i=b(i/2)))break;o=o.times(o),s?o.c&&o.c.length>s&&(o.c.length=s):n&&(o=o.mod(n))}return n?r:(e<0&&(r=I.div(r)),a?r.mod(a):s?j(r,H,U):r)},M.toPrecision=function(e,t){return s(this,null!=e&&$(e,1,P,24,"precision")?0|e:null,t,24)},M.toString=function(e){var t,s=this,r=s.s,a=s.e;return null===a?r?(t="Infinity",r<0&&(t="-"+t)):t="NaN":(t=o(s.c),t=null!=e&&$(e,2,64,25,"base")?n(m(t,a),0|e,10,r):a<=D||a>=q?p(t,a):m(t,a),r<0&&s.c[0]&&(t="-"+t)),t},M.truncated=M.trunc=function(){return j(new t(this),this.e+1,1)},M.valueOf=M.toJSON=function(){var e,t=this,n=t.e;return null===n?t.toString():(e=o(t.c),e=n<=D||n>=q?p(e,n):m(e,n),t.s<0?"-"+e:e)},M.isBigNumber=!0,null!=e&&t.config(e),t}function i(e){var t=0|e;return e>0||e===t?t:t-1}function o(e){for(var t,n,s=1,r=e.length,a=e[0]+"";s<r;){for(t=e[s++]+"",n=A-t.length;n--;t="0"+t);a+=t}for(r=a.length;48===a.charCodeAt(--r););return a.slice(0,r+1||1)}function l(e,t){var n,s,r=e.c,a=t.c,i=e.s,o=t.s,l=e.e,c=t.e;if(!i||!o)return null;if(n=r&&!r[0],s=a&&!a[0],n||s)return n?s?0:-o:i;if(i!=o)return i;if(n=i<0,s=l==c,!r||!a)return s?0:!r^n?1:-1;if(!s)return l>c^n?1:-1;for(o=(l=r.length)<(c=a.length)?l:c,i=0;i<o;i++)if(r[i]!=a[i])return r[i]>a[i]^n?1:-1;return l==c?0:l>c^n?1:-1}function c(e,t,n){return(e=d(e))>=t&&e<=n}function u(e){return"[object Array]"==Object.prototype.toString.call(e)}function f(e,t,n){for(var s,r,a=[0],i=0,o=e.length;i<o;){for(r=a.length;r--;a[r]*=t);for(a[s=0]+=E.indexOf(e.charAt(i++));s<a.length;s++)a[s]>n-1&&(null==a[s+1]&&(a[s+1]=0),a[s+1]+=a[s]/n|0,a[s]%=n)}return a.reverse()}function p(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function m(e,t){var n,s;if(t<0){for(s="0.";++t;s+="0");e=s+e}else if(n=e.length,++t>n){for(s="0",t-=n;--t;s+="0");e+=s}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}function d(e){return e=parseFloat(e),e<0?_(e):b(e)}var h,g=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,_=Math.ceil,b=Math.floor,y=" not a boolean or binary digit",v="rounding mode",w="number type has more than 15 significant digits",E="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",k=1e14,A=14,x=9007199254740991,N=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],O=1e7,P=1e9;h=a(),h.default=h.BigNumber=h,void 0!==(s=function(){return h}.call(t,n,t,e))&&(e.exports=s)}()},1216:function(e,t,n){"use strict";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return b}),n.d(t,"a",function(){return _});var o=n(1),l=n.n(o),c=n(23),u=n.n(c),f=n(50),p=n.n(f),m=n(58),d=(n.n(m),n(44)),h=n(38),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),_=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,s=e.changeTab,r=e.title,a=e.className,i=e.disabled,o=p()({"is-active":t},a);return l.a.createElement("li",{className:o,onClick:i?null:s.bind(this,n)},l.a.createElement("a",null,"string"==typeof r&&r.indexOf(".")>0?l.a.createElement(u.a,{className:"tab-title",content:r}):l.a.createElement("span",{className:"tab-title"},r),this.props.subText?l.a.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}(l.a.Component);_.propTypes={changeTab:o.PropTypes.func,isActive:o.PropTypes.bool.isRequired,index:o.PropTypes.number.isRequired,className:o.PropTypes.string},_.defaultProps={isActive:!1,index:0,className:""};var b=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab},n}return i(t,e),g(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"_changeTab",value:function(e){e!==this.state.activeTab&&(this.props.setting&&d.a.changeViewSetting(s({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,s=t.contentClass,r=t.tabsClass,a=t.style,i=t.segmented,o=null,c=[],u=l.a.Children.map(n,function(t,n){if(!t)return null;var s=n===e.state.activeTab;return s&&(o=t.props.children),l.a.cloneElement(t,{isActive:s,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&c.push(e.props.index),null!==e});return o||(o=u[0].props.children),l.a.createElement("div",{className:this.props.className},l.a.createElement("div",{className:"service-selector"},l.a.createElement("ul",{style:a,className:p()("button-group no-margin",r,{segmented:i})},u)),l.a.createElement("div",{className:s+" tab-content"},o))}}]),t}(l.a.Component);b.propTypes={setting:o.PropTypes.string,defaultActiveTab:o.PropTypes.number,segmented:o.PropTypes.bool},b.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:""},b=Object(m.connect)(b,{listenTo:function(){return[h.a]},getProps:function(){return{viewSettings:h.a.getState().viewSettings}}})},1221:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(67),o=n(25),l=n.n(o),c=n(10),u=n(1184),f=n(15),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),m=function(e){function t(){s(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.assets=l.a.Map(),e.asset_symbol_to_id={},e.searchTerms={},e.lookupResults=[],e.assetsLoading=!1,e.bindListeners({onGetAssetList:u.a.getAssetList,onGetAsset:u.a.getAsset,onLookupAsset:u.a.lookupAsset}),e._export("getAsset"),e}return a(t,e),p(t,[{key:"getAsset",value:function(e){var t=f.a.is_object_id(e)?e:this.asset_symbol_to_id[e];return this.assets.get(t)}},{key:"onGetAssetList",value:function(e){var t=this;if(!e)return!1;this.assetsLoading=e.loading,e.assets&&e.assets.forEach(function(n){for(var s=0;s<e.dynamic.length;s++)if(e.dynamic[s].id===n.dynamic_asset_data_id){n.dynamic=e.dynamic[s];break}if(n.bitasset_data_id){n.market_asset=!0;for(var s=0;s<e.bitasset_data.length;s++)if(e.bitasset_data[s].id===n.bitasset_data_id){n.bitasset_data=e.bitasset_data[s];break}}else n.market_asset=!1;t.assets=t.assets.set(n.id,n),t.asset_symbol_to_id[n.symbol]=n.id})}},{key:"onGetAsset",value:function(e){var t=e.asset;if(null===e.asset)return this.assets=this.assets.set(e.symbol,{notFound:!0}),!0;t.dynamic=e.dynamic,e.bitasset_data?(t.bitasset_data=e.bitasset_data,t.market_asset=!0):t.market_asset=!1,this.assets=this.assets.set(t.id,Asset(t)),this.asset_symbol_to_id[t.symbol]=t.id}},{key:"onLookupAsset",value:function(e){this.searchTerms[e.searchID]=e.symbol,this.lookupResults=e.assets}}]),t}(i.a);t.a=c.a.createStore(m,"AssetStore")},1293:function(e,t,n){"use strict";function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),f=n.n(u),p=n(1221),m=n(38),d=n(131),h=n.n(d),g=n(1184),_=n(44),b=n(37),y=n(25),v=n.n(y),w=n(23),E=n.n(w),k=n(132),A=n(258),x=n(20),N=n.n(x),O=n(107),P=n(126),S=n(1216),T=n(7),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),C=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={foundLast:!1,lastAsset:"",assetsFetched:0,filterUIA:e.filterUIA||"",filterMPA:e.filterMPA||"",filterPM:e.filterPM||""},n}return i(t,e),j(t,[{key:"shouldComponentUpdate",value:function(e,t){return!v.a.is(e.assets,this.props.assets)||t.filterMPA!==this.state.filterMPA||t.filterUIA!==this.state.filterUIA||t.filterPM!==this.state.filterPM}},{key:"componentWillMount",value:function(){this._checkAssets(this.props.assets,!0)}},{key:"_checkAssets",value:function(e,t){var n=e.sort(function(e,t){return e.symbol>t.symbol?1:e.symbol<t.symbol?-1:0}).last();0===e.size||t?(g.a.getAssetList.defer("A",100),this.setState({assetsFetched:100})):e.size>=this.state.assetsFetched&&(g.a.getAssetList.defer(n.symbol,100),this.setState({assetsFetched:this.state.assetsFetched+99}))}},{key:"componentWillReceiveProps",value:function(e){e.assets!==this.props.assets&&this._checkAssets(e.assets)}},{key:"linkToAccount",value:function(e){return e?f.a.createElement(k.a,{account:e}):f.a.createElement("span",null,"-")}},{key:"_onFilter",value:function(e,t){this.setState(s({},e,t.target.value.toUpperCase())),_.a.changeViewSetting(s({},e,t.target.value.toUpperCase()))}},{key:"render",value:function(){var e=this,t=this.props.assets,n=N.a.translate("markets.filter").toUpperCase(),s=T.b.getAsset("1.3.0"),r=t.filter(function(t){return!t.market_asset&&-1!==t.symbol.indexOf(e.state.filterUIA)}).map(function(t){var n=A.a.parseDescription(t.options.description),r=t.symbol+"_"+(n.market?n.market:s?s.get("symbol"):"BTS");return f.a.createElement("tr",{key:t.symbol},f.a.createElement("td",null,f.a.createElement(b.b,{to:"/asset/"+t.symbol},f.a.createElement(P.a,{name:t.symbol}))),f.a.createElement("td",null,e.linkToAccount(t.issuer)),f.a.createElement("td",null,f.a.createElement(O.a,{amount:t.dynamic.current_supply,asset:t.id,hide_asset:!0})),f.a.createElement("td",null,f.a.createElement(b.b,{className:"button outline",to:"/market/"+r},f.a.createElement(E.a,{content:"header.exchange"}))))}).sort(function(e,t){return e.key>t.key?1:e.key<t.key?-1:0}).toArray(),a=t.filter(function(t){return t.bitasset_data&&!t.bitasset_data.is_prediction_market&&-1!==t.symbol.indexOf(e.state.filterMPA)}).map(function(t){var n=A.a.parseDescription(t.options.description),r=t.symbol+"_"+(n.market?n.market:s?s.get("symbol"):"BTS");return f.a.createElement("tr",{key:t.symbol},f.a.createElement("td",null,f.a.createElement(b.b,{to:"/asset/"+t.symbol},f.a.createElement(P.a,{name:t.symbol}))),f.a.createElement("td",null,e.linkToAccount(t.issuer)),f.a.createElement("td",null,f.a.createElement(O.a,{amount:t.dynamic.current_supply,asset:t.id,hide_asset:!0})),f.a.createElement("td",null,f.a.createElement(b.b,{className:"button outline",to:"/market/"+r},f.a.createElement(E.a,{content:"header.exchange"}))))}).sort(function(e,t){return e.key>t.key?1:e.key<t.key?-1:0}).toArray(),i=t.filter(function(t){var n=A.a.parseDescription(t.options.description);return t.bitasset_data&&t.bitasset_data.is_prediction_market&&(-1!==t.symbol.toLowerCase().indexOf(e.state.filterPM.toLowerCase())||-1!==n.main.toLowerCase().indexOf(e.state.filterPM.toLowerCase()))}).map(function(e){var t=A.a.parseDescription(e.options.description),n=e.symbol+"_"+(t.market?t.market:s?s.get("symbol"):"BTS");return f.a.createElement("tr",{key:e.id.split(".")[2]},f.a.createElement("td",{style:{width:"80%"}},f.a.createElement("div",{style:{paddingTop:10,fontWeight:"bold"}},f.a.createElement(b.b,{to:"/asset/"+e.symbol},f.a.createElement(P.a,{name:e.symbol})),t.condition?f.a.createElement("span",null," (",t.condition,")"):null),t?f.a.createElement("div",{style:{padding:"10px 20px 5px 0",lineHeight:"18px"}},t.main):null,f.a.createElement("div",{style:{padding:"0 20px 5px 0",lineHeight:"18px"}},f.a.createElement(k.a,{account:e.issuer}),f.a.createElement("span",null," - ",f.a.createElement(O.a,{amount:e.dynamic.current_supply,asset:e.id})),t.expiry?f.a.createElement("span",null," - ",t.expiry):null)),f.a.createElement("td",{style:{width:"20%"}},f.a.createElement(b.b,{className:"button outline",to:"/market/"+n},f.a.createElement(E.a,{content:"header.exchange"}))))}).sort(function(e,t){return e.key>t.key?-1:e.key<t.key?1:0}).toArray();return f.a.createElement("div",{className:"grid-block vertical"},f.a.createElement("div",{className:"grid-block page-layout vertical"},f.a.createElement("div",{className:"grid-block main-content small-12 medium-10 medium-offset-1 main-content vertical"},f.a.createElement("div",{className:"generic-bordered-box"},f.a.createElement(S.b,{tabsClass:"no-padding bordered-header",setting:"assetsTab",className:"grid-block vertical no-overflow no-padding",contentClass:"grid-block vertical"},f.a.createElement(S.a,{title:"explorer.assets.market"},f.a.createElement("div",{className:"grid-block shrink"},f.a.createElement("div",{className:"grid-content"},f.a.createElement("input",{style:{maxWidth:"500px"},placeholder:n,type:"text",value:this.state.filterMPA,onChange:this._onFilter.bind(this,"filterMPA")}))),f.a.createElement("div",{className:"grid-block",style:{paddingBottom:20}},f.a.createElement("div",{className:"grid-content"},f.a.createElement("table",{className:"table"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,f.a.createElement(E.a,{component:"span",content:"explorer.assets.symbol"})),f.a.createElement("th",null,f.a.createElement(E.a,{component:"span",content:"explorer.assets.issuer"})),f.a.createElement("th",null,f.a.createElement(E.a,{component:"span",content:"markets.supply"})),f.a.createElement("th",null))),f.a.createElement("tbody",null,a))))),f.a.createElement(S.a,{title:"explorer.assets.user"},f.a.createElement("div",{className:"grid-block shrink"},f.a.createElement("div",{className:"grid-content"},f.a.createElement("input",{style:{maxWidth:"500px"},placeholder:n,type:"text",value:this.state.filterUIA,onChange:this._onFilter.bind(this,"filterUIA")}))),f.a.createElement("div",{className:"grid-block",style:{paddingBottom:20}},f.a.createElement("div",{className:"grid-content"},f.a.createElement("table",{className:"table"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,f.a.createElement(E.a,{component:"span",content:"explorer.assets.symbol"})),f.a.createElement("th",null,f.a.createElement(E.a,{component:"span",content:"explorer.assets.issuer"})),f.a.createElement("th",null,f.a.createElement(E.a,{component:"span",content:"markets.supply"})),f.a.createElement("th",null))),f.a.createElement("tbody",null,r))))),f.a.createElement(S.a,{title:"explorer.assets.prediction"},f.a.createElement("div",{className:"grid-block shrink"},f.a.createElement("div",{className:"grid-content"},f.a.createElement("input",{style:{maxWidth:"500px"},placeholder:N.a.translate("markets.search").toUpperCase(),type:"text",value:this.state.filterPM,onChange:this._onFilter.bind(this,"filterPM")}))),f.a.createElement("div",{className:"grid-block",style:{paddingBottom:20}},f.a.createElement("div",{className:"grid-content"},f.a.createElement("table",{className:"table"},f.a.createElement("tbody",null,i))))))))))}}]),t}(f.a.Component);C.defaultProps={assets:{}},C.propTypes={assets:u.PropTypes.object.isRequired};var L=C,R=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),M=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),R(t,[{key:"render",value:function(){return f.a.createElement(h.a,{stores:[p.a,m.a],inject:{assets:function(){return p.a.getState().assets},filterMPA:function(){return m.a.getState().viewSettings.get("filterMPA")},filterUIA:function(){return m.a.getState().viewSettings.get("filterUIA")}}},f.a.createElement(L,null))}}]),t}(f.a.Component);t.default=M}});
//# sourceMappingURL=25.js.map