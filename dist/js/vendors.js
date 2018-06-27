/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);
! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Scrollbar = e() : t.Scrollbar = e()
}(this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }([function (t, e, n) {
        t.exports = n(1)
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return (0, u.default)(t)
        }
        var i = n(2),
            u = r(i),
            a = n(55),
            c = r(a),
            l = n(62),
            f = r(l);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = "function" == typeof f.default && "symbol" == typeof c.default ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof f.default && t.constructor === f.default && t !== f.default.prototype ? "symbol" : typeof t
            },
            d = n(78),
            h = n(89);
        n(129), n(145), n(158), n(173), n(187), e.default = d.SmoothScrollbar, d.SmoothScrollbar.version = "7.2.10", d.SmoothScrollbar.init = function (t, e) {
            if (!t || 1 !== t.nodeType) throw new TypeError("expect element to be DOM Element, but got " + ("undefined" == typeof t ? "undefined" : s(t)));
            if (h.sbList.has(t)) return h.sbList.get(t);
            t.setAttribute("data-scrollbar", "");
            var n = [].concat(o(t.childNodes)),
                r = document.createElement("div");
            r.innerHTML = '\n        <article class="scroll-content"></article>\n        <aside class="scrollbar-track scrollbar-track-x">\n            <div class="scrollbar-thumb scrollbar-thumb-x"></div>\n        </aside>\n        <aside class="scrollbar-track scrollbar-track-y">\n            <div class="scrollbar-thumb scrollbar-thumb-y"></div>\n        </aside>\n        <canvas class="overscroll-glow"></canvas>\n    ';
            var i = r.querySelector(".scroll-content");
            return [].concat(o(r.childNodes)).forEach(function (e) {
                return t.appendChild(e)
            }), n.forEach(function (t) {
                return i.appendChild(t)
            }), new d.SmoothScrollbar(t, e)
        }, d.SmoothScrollbar.initAll = function (t) {
            return [].concat(o(document.querySelectorAll(h.selectors))).map(function (e) {
                return d.SmoothScrollbar.init(e, t)
            })
        }, d.SmoothScrollbar.has = function (t) {
            return h.sbList.has(t)
        }, d.SmoothScrollbar.get = function (t) {
            return h.sbList.get(t)
        }, d.SmoothScrollbar.getAll = function () {
            return [].concat(o(h.sbList.values()))
        }, d.SmoothScrollbar.destroy = function (t, e) {
            return d.SmoothScrollbar.has(t) && d.SmoothScrollbar.get(t).destroy(e)
        }, d.SmoothScrollbar.destroyAll = function (t) {
            h.sbList.forEach(function (e) {
                e.destroy(t)
            })
        }, t.exports = e.default
    }, function (t, e, n) {
        t.exports = {
            default: n(3),
            __esModule: !0
        }
    }, function (t, e, n) {
        n(4), n(48), t.exports = n(12).Array.from
    }, function (t, e, n) {
        "use strict";
        var r = n(5)(!0);
        n(8)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function (t, e, n) {
        var r = n(6),
            o = n(7);
        t.exports = function (t) {
            return function (e, n) {
                var i, u, a = String(o(e)),
                    c = r(n),
                    l = a.length;
                return c < 0 || c >= l ? t ? "" : void 0 : (i = a.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === l || (u = a.charCodeAt(c + 1)) < 56320 || u > 57343 ? t ? a.charAt(c) : i : t ? a.slice(c, c + 2) : (i - 55296 << 10) + (u - 56320) + 65536)
            }
        }
    }, function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(9),
            o = n(10),
            i = n(25),
            u = n(15),
            a = n(26),
            c = n(27),
            l = n(28),
            f = n(44),
            s = n(46),
            d = n(45)("iterator"),
            h = !([].keys && "next" in [].keys()),
            v = "@@iterator",
            _ = "keys",
            p = "values",
            y = function () {
                return this
            };
        t.exports = function (t, e, n, b, g, m, x) {
            l(n, e, b);
            var S, E, M, O = function (t) {
                    if (!h && t in j) return j[t];
                    switch (t) {
                        case _:
                            return function () {
                                return new n(this, t)
                            };
                        case p:
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this, t)
                    }
                },
                w = e + " Iterator",
                P = g == p,
                k = !1,
                j = t.prototype,
                T = j[d] || j[v] || g && j[g],
                A = T || O(g),
                R = g ? P ? O("entries") : A : void 0,
                L = "Array" == e ? j.entries || T : T;
            if (L && (M = s(L.call(new t)), M !== Object.prototype && (f(M, w, !0), r || a(M, d) || u(M, d, y))), P && T && T.name !== p && (k = !0, A = function () {
                    return T.call(this)
                }), r && !x || !h && !k && j[d] || u(j, d, A), c[e] = A, c[w] = y, g)
                if (S = {
                        values: P ? A : O(p),
                        keys: m ? A : O(_),
                        entries: R
                    }, x)
                    for (E in S) E in j || i(j, E, S[E]);
                else o(o.P + o.F * (h || k), e, S);
            return S
        }
    }, function (t, e) {
        t.exports = !0
    }, function (t, e, n) {
        var r = n(11),
            o = n(12),
            i = n(13),
            u = n(15),
            a = "prototype",
            c = function (t, e, n) {
                var l, f, s, d = t & c.F,
                    h = t & c.G,
                    v = t & c.S,
                    _ = t & c.P,
                    p = t & c.B,
                    y = t & c.W,
                    b = h ? o : o[e] || (o[e] = {}),
                    g = b[a],
                    m = h ? r : v ? r[e] : (r[e] || {})[a];
                h && (n = e);
                for (l in n) f = !d && m && void 0 !== m[l], f && l in b || (s = f ? m[l] : n[l], b[l] = h && "function" != typeof m[l] ? n[l] : p && f ? i(s, r) : y && m[l] == s ? function (t) {
                    var e = function (e, n, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e, n)
                            }
                            return new t(e, n, r)
                        }
                        return t.apply(this, arguments)
                    };
                    return e[a] = t[a], e
                }(s) : _ && "function" == typeof s ? i(Function.call, s) : s, _ && ((b.virtual || (b.virtual = {}))[l] = s, t & c.R && g && !g[l] && u(g, l, s)))
            };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    }, function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (t, e) {
        var n = t.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n)
    }, function (t, e, n) {
        var r = n(14);
        t.exports = function (t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e, n) {
        var r = n(16),
            o = n(24);
        t.exports = n(20) ? function (t, e, n) {
            return r.f(t, e, o(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        }
    }, function (t, e, n) {
        var r = n(17),
            o = n(19),
            i = n(23),
            u = Object.defineProperty;
        e.f = n(20) ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return u(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function (t, e, n) {
        var r = n(18);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e, n) {
        t.exports = !n(20) && !n(21)(function () {
            return 7 != Object.defineProperty(n(22)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        t.exports = !n(21)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e, n) {
        var r = n(18),
            o = n(11).document,
            i = r(o) && r(o.createElement);
        t.exports = function (t) {
            return i ? o.createElement(t) : {}
        }
    }, function (t, e, n) {
        var r = n(18);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function (t, e, n) {
        t.exports = n(15)
    }, function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, n) {
        "use strict";
        var r = n(29),
            o = n(24),
            i = n(44),
            u = {};
        n(15)(u, n(45)("iterator"), function () {
            return this
        }), t.exports = function (t, e, n) {
            t.prototype = r(u, {
                next: o(1, n)
            }), i(t, e + " Iterator")
        }
    }, function (t, e, n) {
        var r = n(17),
            o = n(30),
            i = n(42),
            u = n(39)("IE_PROTO"),
            a = function () {},
            c = "prototype",
            l = function () {
                var t, e = n(22)("iframe"),
                    r = i.length,
                    o = "<",
                    u = ">";
                for (e.style.display = "none", n(43).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(o + "script" + u + "document.F=Object" + o + "/script" + u), t.close(), l = t.F; r--;) delete l[c][i[r]];
                return l()
            };
        t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (a[c] = r(t), n = new a, a[c] = null, n[u] = t) : n = l(), void 0 === e ? n : o(n, e)
        }
    }, function (t, e, n) {
        var r = n(16),
            o = n(17),
            i = n(31);
        t.exports = n(20) ? Object.defineProperties : function (t, e) {
            o(t);
            for (var n, u = i(e), a = u.length, c = 0; a > c;) r.f(t, n = u[c++], e[n]);
            return t
        }
    }, function (t, e, n) {
        var r = n(32),
            o = n(42);
        t.exports = Object.keys || function (t) {
            return r(t, o)
        }
    }, function (t, e, n) {
        var r = n(26),
            o = n(33),
            i = n(36)(!1),
            u = n(39)("IE_PROTO");
        t.exports = function (t, e) {
            var n, a = o(t),
                c = 0,
                l = [];
            for (n in a) n != u && r(a, n) && l.push(n);
            for (; e.length > c;) r(a, n = e[c++]) && (~i(l, n) || l.push(n));
            return l
        }
    }, function (t, e, n) {
        var r = n(34),
            o = n(7);
        t.exports = function (t) {
            return r(o(t))
        }
    }, function (t, e, n) {
        var r = n(35);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    }, function (t, e, n) {
        var r = n(33),
            o = n(37),
            i = n(38);
        t.exports = function (t) {
            return function (e, n, u) {
                var a, c = r(e),
                    l = o(c.length),
                    f = i(u, l);
                if (t && n != n) {
                    for (; l > f;)
                        if (a = c[f++], a != a) return !0
                } else
                    for (; l > f; f++)
                        if ((t || f in c) && c[f] === n) return t || f || 0;
                return !t && -1
            }
        }
    }, function (t, e, n) {
        var r = n(6),
            o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function (t, e, n) {
        var r = n(6),
            o = Math.max,
            i = Math.min;
        t.exports = function (t, e) {
            return t = r(t), t < 0 ? o(t + e, 0) : i(t, e)
        }
    }, function (t, e, n) {
        var r = n(40)("keys"),
            o = n(41);
        t.exports = function (t) {
            return r[t] || (r[t] = o(t))
        }
    }, function (t, e, n) {
        var r = n(11),
            o = "__core-js_shared__",
            i = r[o] || (r[o] = {});
        t.exports = function (t) {
            return i[t] || (i[t] = {})
        }
    }, function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e, n) {
        t.exports = n(11).document && document.documentElement
    }, function (t, e, n) {
        var r = n(16).f,
            o = n(26),
            i = n(45)("toStringTag");
        t.exports = function (t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: e
            })
        }
    }, function (t, e, n) {
        var r = n(40)("wks"),
            o = n(41),
            i = n(11).Symbol,
            u = "function" == typeof i,
            a = t.exports = function (t) {
                return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
            };
        a.store = r
    }, function (t, e, n) {
        var r = n(26),
            o = n(47),
            i = n(39)("IE_PROTO"),
            u = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function (t, e, n) {
        var r = n(7);
        t.exports = function (t) {
            return Object(r(t))
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(13),
            o = n(10),
            i = n(47),
            u = n(49),
            a = n(50),
            c = n(37),
            l = n(51),
            f = n(52);
        o(o.S + o.F * !n(54)(function (t) {
            Array.from(t)
        }), "Array", {
            from: function (t) {
                var e, n, o, s, d = i(t),
                    h = "function" == typeof this ? this : Array,
                    v = arguments.length,
                    _ = v > 1 ? arguments[1] : void 0,
                    p = void 0 !== _,
                    y = 0,
                    b = f(d);
                if (p && (_ = r(_, v > 2 ? arguments[2] : void 0, 2)), void 0 == b || h == Array && a(b))
                    for (e = c(d.length), n = new h(e); e > y; y++) l(n, y, p ? _(d[y], y) : d[y]);
                else
                    for (s = b.call(d), n = new h; !(o = s.next()).done; y++) l(n, y, p ? u(s, _, [o.value, y], !0) : o.value);
                return n.length = y, n
            }
        })
    }, function (t, e, n) {
        var r = n(17);
        t.exports = function (t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), e
            }
        }
    }, function (t, e, n) {
        var r = n(27),
            o = n(45)("iterator"),
            i = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(16),
            o = n(24);
        t.exports = function (t, e, n) {
            e in t ? r.f(t, e, o(0, n)) : t[e] = n
        }
    }, function (t, e, n) {
        var r = n(53),
            o = n(45)("iterator"),
            i = n(27);
        t.exports = n(12).getIteratorMethod = function (t) {
            if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
        }
    }, function (t, e, n) {
        var r = n(35),
            o = n(45)("toStringTag"),
            i = "Arguments" == r(function () {
                return arguments
            }()),
            u = function (t, e) {
                try {
                    return t[e]
                } catch (t) {}
            };
        t.exports = function (t) {
            var e, n, a;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = u(e = Object(t), o)) ? n : i ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
        }
    }, function (t, e, n) {
        var r = n(45)("iterator"),
            o = !1;
        try {
            var i = [7][r]();
            i.return = function () {
                o = !0
            }, Array.from(i, function () {
                throw 2
            })
        } catch (t) {}
        t.exports = function (t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = [7],
                    u = i[r]();
                u.next = function () {
                    return {
                        done: n = !0
                    }
                }, i[r] = function () {
                    return u
                }, t(i)
            } catch (t) {}
            return n
        }
    }, function (t, e, n) {
        t.exports = {
            default: n(56),
            __esModule: !0
        }
    }, function (t, e, n) {
        n(4), n(57), t.exports = n(61).f("iterator")
    }, function (t, e, n) {
        n(58);
        for (var r = n(11), o = n(15), i = n(27), u = n(45)("toStringTag"), a = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
            var l = a[c],
                f = r[l],
                s = f && f.prototype;
            s && !s[u] && o(s, u, l), i[l] = i.Array
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(59),
            o = n(60),
            i = n(27),
            u = n(33);
        t.exports = n(8)(Array, "Array", function (t, e) {
            this._t = u(t), this._i = 0, this._k = e
        }, function () {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function (t, e) {
        t.exports = function () {}
    }, function (t, e) {
        t.exports = function (t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    }, function (t, e, n) {
        e.f = n(45)
    }, function (t, e, n) {
        t.exports = {
            default: n(63),
            __esModule: !0
        }
    }, function (t, e, n) {
        n(64), n(75), n(76), n(77), t.exports = n(12).Symbol
    }, function (t, e, n) {
        "use strict";
        var r = n(11),
            o = n(26),
            i = n(20),
            u = n(10),
            a = n(25),
            c = n(65).KEY,
            l = n(21),
            f = n(40),
            s = n(44),
            d = n(41),
            h = n(45),
            v = n(61),
            _ = n(66),
            p = n(67),
            y = n(68),
            b = n(71),
            g = n(17),
            m = n(33),
            x = n(23),
            S = n(24),
            E = n(29),
            M = n(72),
            O = n(74),
            w = n(16),
            P = n(31),
            k = O.f,
            j = w.f,
            T = M.f,
            A = r.Symbol,
            R = r.JSON,
            L = R && R.stringify,
            I = "prototype",
            D = h("_hidden"),
            C = h("toPrimitive"),
            N = {}.propertyIsEnumerable,
            F = f("symbol-registry"),
            H = f("symbols"),
            z = f("op-symbols"),
            B = Object[I],
            G = "function" == typeof A,
            W = r.QObject,
            V = !W || !W[I] || !W[I].findChild,
            U = i && l(function () {
                return 7 != E(j({}, "a", {
                    get: function () {
                        return j(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function (t, e, n) {
                var r = k(B, e);
                r && delete B[e], j(t, e, n), r && t !== B && j(B, e, r)
            } : j,
            X = function (t) {
                var e = H[t] = E(A[I]);
                return e._k = t, e
            },
            q = G && "symbol" == typeof A.iterator ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return t instanceof A
            },
            K = function (t, e, n) {
                return t === B && K(z, e, n), g(t), e = x(e, !0), g(n), o(H, e) ? (n.enumerable ? (o(t, D) && t[D][e] && (t[D][e] = !1), n = E(n, {
                    enumerable: S(0, !1)
                })) : (o(t, D) || j(t, D, S(1, {})), t[D][e] = !0), U(t, e, n)) : j(t, e, n)
            },
            J = function (t, e) {
                g(t);
                for (var n, r = y(e = m(e)), o = 0, i = r.length; i > o;) K(t, n = r[o++], e[n]);
                return t
            },
            Y = function (t, e) {
                return void 0 === e ? E(t) : J(E(t), e)
            },
            Q = function (t) {
                var e = N.call(this, t = x(t, !0));
                return !(this === B && o(H, t) && !o(z, t)) && (!(e || !o(this, t) || !o(H, t) || o(this, D) && this[D][t]) || e)
            },
            Z = function (t, e) {
                if (t = m(t), e = x(e, !0), t !== B || !o(H, e) || o(z, e)) {
                    var n = k(t, e);
                    return !n || !o(H, e) || o(t, D) && t[D][e] || (n.enumerable = !0), n
                }
            },
            $ = function (t) {
                for (var e, n = T(m(t)), r = [], i = 0; n.length > i;) o(H, e = n[i++]) || e == D || e == c || r.push(e);
                return r
            },
            tt = function (t) {
                for (var e, n = t === B, r = T(n ? z : m(t)), i = [], u = 0; r.length > u;) !o(H, e = r[u++]) || n && !o(B, e) || i.push(H[e]);
                return i
            };
        G || (A = function () {
            if (this instanceof A) throw TypeError("Symbol is not a constructor!");
            var t = d(arguments.length > 0 ? arguments[0] : void 0),
                e = function (n) {
                    this === B && e.call(z, n), o(this, D) && o(this[D], t) && (this[D][t] = !1), U(this, t, S(1, n))
                };
            return i && V && U(B, t, {
                configurable: !0,
                set: e
            }), X(t)
        }, a(A[I], "toString", function () {
            return this._k
        }), O.f = Z, w.f = K, n(73).f = M.f = $, n(70).f = Q, n(69).f = tt, i && !n(9) && a(B, "propertyIsEnumerable", Q, !0), v.f = function (t) {
            return X(h(t))
        }), u(u.G + u.W + u.F * !G, {
            Symbol: A
        });
        for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) h(et[nt++]);
        for (var et = P(h.store), nt = 0; et.length > nt;) _(et[nt++]);
        u(u.S + u.F * !G, "Symbol", {
            for: function (t) {
                return o(F, t += "") ? F[t] : F[t] = A(t)
            },
            keyFor: function (t) {
                if (q(t)) return p(F, t);
                throw TypeError(t + " is not a symbol!")
            },
            useSetter: function () {
                V = !0
            },
            useSimple: function () {
                V = !1
            }
        }), u(u.S + u.F * !G, "Object", {
            create: Y,
            defineProperty: K,
            defineProperties: J,
            getOwnPropertyDescriptor: Z,
            getOwnPropertyNames: $,
            getOwnPropertySymbols: tt
        }), R && u(u.S + u.F * (!G || l(function () {
            var t = A();
            return "[null]" != L([t]) || "{}" != L({
                a: t
            }) || "{}" != L(Object(t))
        })), "JSON", {
            stringify: function (t) {
                if (void 0 !== t && !q(t)) {
                    for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
                    return e = r[1], "function" == typeof e && (n = e), !n && b(e) || (e = function (t, e) {
                        if (n && (e = n.call(this, t, e)), !q(e)) return e
                    }), r[1] = e, L.apply(R, r)
                }
            }
        }), A[I][C] || n(15)(A[I], C, A[I].valueOf), s(A, "Symbol"), s(Math, "Math", !0), s(r.JSON, "JSON", !0)
    }, function (t, e, n) {
        var r = n(41)("meta"),
            o = n(18),
            i = n(26),
            u = n(16).f,
            a = 0,
            c = Object.isExtensible || function () {
                return !0
            },
            l = !n(21)(function () {
                return c(Object.preventExtensions({}))
            }),
            f = function (t) {
                u(t, r, {
                    value: {
                        i: "O" + ++a,
                        w: {}
                    }
                })
            },
            s = function (t, e) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                    if (!c(t)) return "F";
                    if (!e) return "E";
                    f(t)
                }
                return t[r].i
            },
            d = function (t, e) {
                if (!i(t, r)) {
                    if (!c(t)) return !0;
                    if (!e) return !1;
                    f(t)
                }
                return t[r].w
            },
            h = function (t) {
                return l && v.NEED && c(t) && !i(t, r) && f(t), t
            },
            v = t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: s,
                getWeak: d,
                onFreeze: h
            }
    }, function (t, e, n) {
        var r = n(11),
            o = n(12),
            i = n(9),
            u = n(61),
            a = n(16).f;
        t.exports = function (t) {
            var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || a(e, t, {
                value: u.f(t)
            })
        }
    }, function (t, e, n) {
        var r = n(31),
            o = n(33);
        t.exports = function (t, e) {
            for (var n, i = o(t), u = r(i), a = u.length, c = 0; a > c;)
                if (i[n = u[c++]] === e) return n
        }
    }, function (t, e, n) {
        var r = n(31),
            o = n(69),
            i = n(70);
        t.exports = function (t) {
            var e = r(t),
                n = o.f;
            if (n)
                for (var u, a = n(t), c = i.f, l = 0; a.length > l;) c.call(t, u = a[l++]) && e.push(u);
            return e
        }
    }, function (t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function (t, e) {
        e.f = {}.propertyIsEnumerable
    }, function (t, e, n) {
        var r = n(35);
        t.exports = Array.isArray || function (t) {
            return "Array" == r(t)
        }
    }, function (t, e, n) {
        var r = n(33),
            o = n(73).f,
            i = {}.toString,
            u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            a = function (t) {
                try {
                    return o(t)
                } catch (t) {
                    return u.slice()
                }
            };
        t.exports.f = function (t) {
            return u && "[object Window]" == i.call(t) ? a(t) : o(r(t))
        }
    }, function (t, e, n) {
        var r = n(32),
            o = n(42).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
            return r(t, o)
        }
    }, function (t, e, n) {
        var r = n(70),
            o = n(24),
            i = n(33),
            u = n(23),
            a = n(26),
            c = n(19),
            l = Object.getOwnPropertyDescriptor;
        e.f = n(20) ? l : function (t, e) {
            if (t = i(t), e = u(e, !0), c) try {
                return l(t, e)
            } catch (t) {}
            if (a(t, e)) return o(!r.f.call(t, e), t[e])
        }
    }, function (t, e) {}, function (t, e, n) {
        n(66)("asyncIterator")
    }, function (t, e, n) {
        n(66)("observable")
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var i = n(79),
            u = r(i),
            a = n(82),
            c = r(a),
            l = n(86),
            f = r(l);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SmoothScrollbar = void 0;
        var s = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, f.default)(t, r.key, r)
                    }
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            d = n(89),
            h = n(112);
        e.SmoothScrollbar = function () {
            function t(e) {
                var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o(this, t), e.setAttribute("tabindex", "1"), e.scrollTop = e.scrollLeft = 0;
                var i = (0, h.findChild)(e, "scroll-content"),
                    a = (0, h.findChild)(e, "overscroll-glow"),
                    l = (0, h.findChild)(e, "scrollbar-track-x"),
                    f = (0, h.findChild)(e, "scrollbar-track-y");
                if ((0, h.setStyle)(e, {
                        overflow: "hidden",
                        outline: "none"
                    }), (0, h.setStyle)(a, {
                        display: "none",
                        "pointer-events": "none"
                    }), this.__readonly("targets", (0, c.default)({
                        container: e,
                        content: i,
                        canvas: {
                            elem: a,
                            context: a.getContext("2d")
                        },
                        xAxis: (0, c.default)({
                            track: l,
                            thumb: (0, h.findChild)(l, "scrollbar-thumb-x")
                        }),
                        yAxis: (0, c.default)({
                            track: f,
                            thumb: (0, h.findChild)(f, "scrollbar-thumb-y")
                        })
                    })).__readonly("offset", {
                        x: 0,
                        y: 0
                    }).__readonly("thumbOffset", {
                        x: 0,
                        y: 0
                    }).__readonly("limit", {
                        x: 1 / 0,
                        y: 1 / 0
                    }).__readonly("movement", {
                        x: 0,
                        y: 0
                    }).__readonly("movementLocked", {
                        x: !1,
                        y: !1
                    }).__readonly("overscrollRendered", {
                        x: 0,
                        y: 0
                    }).__readonly("overscrollBack", !1).__readonly("thumbSize", {
                        x: 0,
                        y: 0,
                        realX: 0,
                        realY: 0
                    }).__readonly("bounding", {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }).__readonly("children", []).__readonly("parents", []).__readonly("size", this.getSize()).__readonly("isNestedScrollbar", !1), (0, u.default)(this, {
                        __hideTrackThrottle: {
                            value: (0, h.debounce)(this.hideTrack.bind(this), 1e3, !1)
                        },
                        __updateThrottle: {
                            value: (0, h.debounce)(this.update.bind(this))
                        },
                        __touchRecord: {
                            value: new h.TouchRecord
                        },
                        __listeners: {
                            value: []
                        },
                        __handlers: {
                            value: []
                        },
                        __children: {
                            value: []
                        },
                        __timerID: {
                            value: {}
                        }
                    }), this.__initOptions(r), this.__initScrollbar(), d.sbList.set(e, this), "function" == typeof d.GLOBAL_ENV.MutationObserver) {
                    var s = new d.GLOBAL_ENV.MutationObserver(function () {
                        n.update(!0)
                    });
                    s.observe(i, {
                        childList: !0
                    }), Object.defineProperty(this, "__observer", {
                        value: s
                    })
                }
            }
            return s(t, [{
                key: "MAX_OVERSCROLL",
                get: function () {
                    var t = this.options,
                        e = this.size;
                    switch (t.overscrollEffect) {
                        case "bounce":
                            var n = Math.floor(Math.sqrt(Math.pow(e.container.width, 2) + Math.pow(e.container.height, 2))),
                                r = this.__isMovementLocked() ? 2 : 10;
                            return d.GLOBAL_ENV.TOUCH_SUPPORTED ? (0, h.pickInRange)(n / r, 100, 1e3) : (0, h.pickInRange)(n / 10, 25, 50);
                        case "glow":
                            return 150;
                        default:
                            return 0
                    }
                }
            }, {
                key: "scrollTop",
                get: function () {
                    return this.offset.y
                }
            }, {
                key: "scrollLeft",
                get: function () {
                    return this.offset.x
                }
            }]), t
        }()
    }, function (t, e, n) {
        t.exports = {
            default: n(80),
            __esModule: !0
        }
    }, function (t, e, n) {
        n(81);
        var r = n(12).Object;
        t.exports = function (t, e) {
            return r.defineProperties(t, e)
        }
    }, function (t, e, n) {
        var r = n(10);
        r(r.S + r.F * !n(20), "Object", {
            defineProperties: n(30)
        })
    }, function (t, e, n) {
        t.exports = {
            default: n(83),
            __esModule: !0
        }
    }, function (t, e, n) {
        n(84), t.exports = n(12).Object.freeze
    }, function (t, e, n) {
        var r = n(18),
            o = n(65).onFreeze;
        n(85)("freeze", function (t) {
            return function (e) {
                return t && r(e) ? t(o(e)) : e
            }
        })
    }, function (t, e, n) {
        var r = n(10),
            o = n(12),
            i = n(21);
        t.exports = function (t, e) {
            var n = (o.Object || {})[t] || Object[t],
                u = {};
            u[t] = e(n), r(r.S + r.F * i(function () {
                n(1)
            }), "Object", u)
        }
    }, function (t, e, n) {
        t.exports = {
            default: n(87),
            __esModule: !0
        }
    }, function (t, e, n) {
        n(88);
        var r = n(12).Object;
        t.exports = function (t, e, n) {
            return r.defineProperty(t, e, n)
        }
    }, function (t, e, n) {
        var r = n(10);
        r(r.S + r.F * !n(20), "Object", {
            defineProperty: n(16).f
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(93);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        })
    }, function (t, e, n) {
        t.exports = {
            default: n(91),
            __esModule: !0
        }
    }, function (t, e, n) {
        n(92), t.exports = n(12).Object.keys
    }, function (t, e, n) {
        var r = n(47),
            o = n(31);
        n(85)("keys", function () {
            return function (t) {
                return o(r(t))
            }
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(94);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        });
        var l = n(95);
        (0, a.default)(l).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return l[t]
                }
            })
        });
        var f = n(111);
        (0, a.default)(f).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return f[t]
                }
            })
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = function (t) {
                var e = {},
                    n = {};
                return (0, a.default)(t).forEach(function (r) {
                    (0, i.default)(e, r, {
                        get: function () {
                            if (!n.hasOwnProperty(r)) {
                                var e = t[r];
                                n[r] = e()
                            }
                            return n[r]
                        }
                    })
                }), e
            },
            l = {
                MutationObserver: function () {
                    return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                },
                TOUCH_SUPPORTED: function () {
                    return "ontouchstart" in document
                },
                EASING_MULTIPLIER: function () {
                    return navigator.userAgent.match(/Android/) ? .5 : .25
                },
                WHEEL_EVENT: function () {
                    return "onwheel" in window ? "wheel" : "mousewheel"
                }
            };
        e.GLOBAL_ENV = c(l)
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(96),
            i = r(o);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = new i.default,
            a = u.set.bind(u),
            c = u.delete.bind(u);
        u.update = function () {
            u.forEach(function (t) {
                t.__updateTree()
            })
        }, u.delete = function () {
            var t = c.apply(void 0, arguments);
            return u.update(), t
        }, u.set = function () {
            var t = a.apply(void 0, arguments);
            return u.update(), t
        }, e.sbList = u
    }, function (t, e, n) {
        t.exports = {
            default: n(97),
            __esModule: !0
        }
    }, function (t, e, n) {
        n(75), n(4), n(57), n(98), n(108), t.exports = n(12).Map
    }, function (t, e, n) {
        "use strict";
        var r = n(99);
        t.exports = n(104)("Map", function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            get: function (t) {
                var e = r.getEntry(this, t);
                return e && e.v
            },
            set: function (t, e) {
                return r.def(this, 0 === t ? 0 : t, e)
            }
        }, r, !0)
    }, function (t, e, n) {
        "use strict";
        var r = n(16).f,
            o = n(29),
            i = n(100),
            u = n(13),
            a = n(101),
            c = n(7),
            l = n(102),
            f = n(8),
            s = n(60),
            d = n(103),
            h = n(20),
            v = n(65).fastKey,
            _ = h ? "_s" : "size",
            p = function (t, e) {
                var n, r = v(e);
                if ("F" !== r) return t._i[r];
                for (n = t._f; n; n = n.n)
                    if (n.k == e) return n
            };
        t.exports = {
            getConstructor: function (t, e, n, f) {
                var s = t(function (t, r) {
                    a(t, s, e, "_i"), t._i = o(null), t._f = void 0, t._l = void 0, t[_] = 0, void 0 != r && l(r, n, t[f], t)
                });
                return i(s.prototype, {
                    clear: function () {
                        for (var t = this, e = t._i, n = t._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete e[n.i];
                        t._f = t._l = void 0, t[_] = 0
                    },
                    delete: function (t) {
                        var e = this,
                            n = p(e, t);
                        if (n) {
                            var r = n.n,
                                o = n.p;
                            delete e._i[n.i], n.r = !0, o && (o.n = r), r && (r.p = o), e._f == n && (e._f = r), e._l == n && (e._l = o), e[_]--
                        }
                        return !!n
                    },
                    forEach: function (t) {
                        a(this, s, "forEach");
                        for (var e, n = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;)
                            for (n(e.v, e.k, this); e && e.r;) e = e.p
                    },
                    has: function (t) {
                        return !!p(this, t)
                    }
                }), h && r(s.prototype, "size", {
                    get: function () {
                        return c(this[_])
                    }
                }), s
            },
            def: function (t, e, n) {
                var r, o, i = p(t, e);
                return i ? i.v = n : (t._l = i = {
                    i: o = v(e, !0),
                    k: e,
                    v: n,
                    p: r = t._l,
                    n: void 0,
                    r: !1
                }, t._f || (t._f = i), r && (r.n = i), t[_]++, "F" !== o && (t._i[o] = i)), t
            },
            getEntry: p,
            setStrong: function (t, e, n) {
                f(t, e, function (t, e) {
                    this._t = t, this._k = e, this._l = void 0
                }, function () {
                    for (var t = this, e = t._k, n = t._l; n && n.r;) n = n.p;
                    return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? s(0, n.k) : "values" == e ? s(0, n.v) : s(0, [n.k, n.v]) : (t._t = void 0, s(1))
                }, n ? "entries" : "values", !n, !0), d(e)
            }
        }
    }, function (t, e, n) {
        var r = n(15);
        t.exports = function (t, e, n) {
            for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
            return t
        }
    }, function (t, e) {
        t.exports = function (t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    }, function (t, e, n) {
        var r = n(13),
            o = n(49),
            i = n(50),
            u = n(17),
            a = n(37),
            c = n(52),
            l = {},
            f = {},
            e = t.exports = function (t, e, n, s, d) {
                var h, v, _, p, y = d ? function () {
                        return t
                    } : c(t),
                    b = r(n, s, e ? 2 : 1),
                    g = 0;
                if ("function" != typeof y) throw TypeError(t + " is not iterable!");
                if (i(y)) {
                    for (h = a(t.length); h > g; g++)
                        if (p = e ? b(u(v = t[g])[0], v[1]) : b(t[g]), p === l || p === f) return p
                } else
                    for (_ = y.call(t); !(v = _.next()).done;)
                        if (p = o(_, b, v.value, e), p === l || p === f) return p
            };
        e.BREAK = l, e.RETURN = f
    }, function (t, e, n) {
        "use strict";
        var r = n(11),
            o = n(12),
            i = n(16),
            u = n(20),
            a = n(45)("species");
        t.exports = function (t) {
            var e = "function" == typeof o[t] ? o[t] : r[t];
            u && e && !e[a] && i.f(e, a, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(11),
            o = n(10),
            i = n(65),
            u = n(21),
            a = n(15),
            c = n(100),
            l = n(102),
            f = n(101),
            s = n(18),
            d = n(44),
            h = n(16).f,
            v = n(105)(0),
            _ = n(20);
        t.exports = function (t, e, n, p, y, b) {
            var g = r[t],
                m = g,
                x = y ? "set" : "add",
                S = m && m.prototype,
                E = {};
            return _ && "function" == typeof m && (b || S.forEach && !u(function () {
                (new m).entries().next()
            })) ? (m = e(function (e, n) {
                f(e, m, t, "_c"), e._c = new g, void 0 != n && l(n, y, e[x], e)
            }), v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function (t) {
                var e = "add" == t || "set" == t;
                t in S && (!b || "clear" != t) && a(m.prototype, t, function (n, r) {
                    if (f(this, m, t), !e && b && !s(n)) return "get" == t && void 0;
                    var o = this._c[t](0 === n ? 0 : n, r);
                    return e ? this : o
                })
            }), "size" in S && h(m.prototype, "size", {
                get: function () {
                    return this._c.size
                }
            })) : (m = p.getConstructor(e, t, y, x), c(m.prototype, n), i.NEED = !0), d(m, t), E[t] = m, o(o.G + o.W + o.F, E), b || p.setStrong(m, t, y), m
        }
    }, function (t, e, n) {
        var r = n(13),
            o = n(34),
            i = n(47),
            u = n(37),
            a = n(106);
        t.exports = function (t, e) {
            var n = 1 == t,
                c = 2 == t,
                l = 3 == t,
                f = 4 == t,
                s = 6 == t,
                d = 5 == t || s,
                h = e || a;
            return function (e, a, v) {
                for (var _, p, y = i(e), b = o(y), g = r(a, v, 3), m = u(b.length), x = 0, S = n ? h(e, m) : c ? h(e, 0) : void 0; m > x; x++)
                    if ((d || x in b) && (_ = b[x], p = g(_, x, y), t))
                        if (n) S[x] = p;
                        else if (p) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return _;
                    case 6:
                        return x;
                    case 2:
                        S.push(_)
                } else if (f) return !1;
                return s ? -1 : l || f ? f : S
            }
        }
    }, function (t, e, n) {
        var r = n(107);
        t.exports = function (t, e) {
            return new(r(t))(e)
        }
    }, function (t, e, n) {
        var r = n(18),
            o = n(71),
            i = n(45)("species");
        t.exports = function (t) {
            var e;
            return o(t) && (e = t.constructor, "function" != typeof e || e !== Array && !o(e.prototype) || (e = void 0), r(e) && (e = e[i], null === e && (e = void 0))), void 0 === e ? Array : e
        }
    }, function (t, e, n) {
        var r = n(10);
        r(r.P + r.R, "Map", {
            toJSON: n(109)("Map")
        })
    }, function (t, e, n) {
        var r = n(53),
            o = n(110);
        t.exports = function (t) {
            return function () {
                if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
                return o(this)
            }
        }
    }, function (t, e, n) {
        var r = n(102);
        t.exports = function (t, e) {
            var n = [];
            return r(t, !1, n.push, n, e), n
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.selectors = "scrollbar, [scrollbar], [data-scrollbar]"
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(113);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(114);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        });
        var l = n(115);
        (0, a.default)(l).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return l[t]
                }
            })
        });
        var f = n(116);
        (0, a.default)(f).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return f[t]
                }
            })
        });
        var s = n(117);
        (0, a.default)(s).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return s[t]
                }
            })
        });
        var d = n(118);
        (0, a.default)(d).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return d[t]
                }
            })
        });
        var h = n(119);
        (0, a.default)(h).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return h[t]
                }
            })
        });
        var v = n(120);
        (0, a.default)(v).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return v[t]
                }
            })
        });
        var _ = n(121);
        (0, a.default)(_).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return _[t]
                }
            })
        });
        var p = n(122);
        (0, a.default)(p).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return p[t]
                }
            })
        });
        var y = n(123);
        (0, a.default)(y).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return y[t]
                }
            })
        });
        var b = n(124);
        (0, a.default)(b).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return b[t]
                }
            })
        })
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.buildCurve = function (t, e) {
            var n = [];
            if (e <= 0) return n;
            for (var r = Math.round(e / 1e3 * 60), o = -t / Math.pow(r, 2), i = -2 * o * r, u = 0; u < r; u++) n.push(o * Math.pow(u, 2) + i * u);
            return n
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = 100;
        e.debounce = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
                r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if ("function" == typeof t) {
                var o = void 0;
                return function () {
                    for (var n = arguments.length, i = Array(n), u = 0; u < n; u++) i[u] = arguments[u];
                    !o && r && setTimeout(function () {
                        return t.apply(void 0, i)
                    }), clearTimeout(o), o = setTimeout(function () {
                        o = void 0, t.apply(void 0, i)
                    }, e)
                }
            }
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return (0, u.default)(t)
        }
        var i = n(2),
            u = r(i);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.findChild = function (t, e) {
            var n = t.children,
                r = null;
            return n && [].concat(o(n)).some(function (t) {
                if (t.className.match(e)) return r = t, !0
            }), r
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = {
                STANDARD: 1,
                OTHERS: -3
            },
            r = [1, 28, 500],
            o = function (t) {
                return r[t] || r[0]
            };
        e.getDelta = function (t) {
            if ("deltaX" in t) {
                var e = o(t.deltaMode);
                return {
                    x: t.deltaX / n.STANDARD * e,
                    y: t.deltaY / n.STANDARD * e
                }
            }
            return "wheelDeltaX" in t ? {
                x: t.wheelDeltaX / n.OTHERS,
                y: t.wheelDeltaY / n.OTHERS
            } : {
                x: 0,
                y: t.wheelDelta / n.OTHERS
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.getPointerData = function (t) {
            return t.touches ? t.touches[t.touches.length - 1] : t
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getPosition = void 0;
        var r = n(118);
        e.getPosition = function (t) {
            var e = (0, r.getPointerData)(t);
            return {
                x: e.clientX,
                y: e.clientY
            }
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getTouchID = void 0;
        var r = n(118);
        e.getTouchID = function (t) {
            var e = (0, r.getPointerData)(t);
            return e.identifier
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.isOneOf = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return e.some(function (e) {
                return t === e
            })
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.pickInRange = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -(1 / 0),
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
            return Math.max(e, Math.min(t, n))
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(90),
            i = r(o);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = ["webkit", "moz", "ms", "o"],
            a = new RegExp("^-(?!(?:" + u.join("|") + ")-)"),
            c = function (t) {
                var e = {};
                return (0, i.default)(t).forEach(function (n) {
                    if (!a.test(n)) return void(e[n] = t[n]);
                    var r = t[n];
                    n = n.replace(/^-/, ""), e[n] = r, u.forEach(function (t) {
                        e["-" + t + "-" + n] = r
                    })
                }), e
            };
        e.setStyle = function (t, e) {
            e = c(e), (0, i.default)(e).forEach(function (n) {
                var r = n.replace(/^-/, "").replace(/-([a-z])/g, function (t, e) {
                    return e.toUpperCase()
                });
                t.style[r] = e[n]
            })
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return (0, a.default)(t)
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var u = n(2),
            a = r(u),
            c = n(86),
            l = r(c),
            f = n(125),
            s = r(f);
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.TouchRecord = void 0;
        var d = s.default || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            h = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, l.default)(t, r.key, r)
                    }
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            v = n(119),
            _ = function () {
                function t(e) {
                    i(this, t), this.updateTime = Date.now(), this.delta = {
                        x: 0,
                        y: 0
                    }, this.velocity = {
                        x: 0,
                        y: 0
                    }, this.lastPosition = (0, v.getPosition)(e)
                }
                return h(t, [{
                    key: "update",
                    value: function (t) {
                        var e = this.velocity,
                            n = this.updateTime,
                            r = this.lastPosition,
                            o = Date.now(),
                            i = (0, v.getPosition)(t),
                            u = {
                                x: -(i.x - r.x),
                                y: -(i.y - r.y)
                            },
                            a = o - n || 16,
                            c = u.x / a * 1e3,
                            l = u.y / a * 1e3;
                        e.x = .8 * c + .2 * e.x, e.y = .8 * l + .2 * e.y, this.delta = u, this.updateTime = o, this.lastPosition = i
                    }
                }]), t
            }();
        e.TouchRecord = function () {
            function t() {
                i(this, t), this.touchList = {}, this.lastTouch = null, this.activeTouchID = void 0
            }
            return h(t, [{
                key: "__add",
                value: function (t) {
                    if (this.__has(t)) return null;
                    var e = new _(t);
                    return this.touchList[t.identifier] = e, e
                }
            }, {
                key: "__renew",
                value: function (t) {
                    if (!this.__has(t)) return null;
                    var e = this.touchList[t.identifier];
                    return e.update(t), e
                }
            }, {
                key: "__delete",
                value: function (t) {
                    return delete this.touchList[t.identifier]
                }
            }, {
                key: "__has",
                value: function (t) {
                    return this.touchList.hasOwnProperty(t.identifier)
                }
            }, {
                key: "__setActiveID",
                value: function (t) {
                    this.activeTouchID = t[t.length - 1].identifier, this.lastTouch = this.touchList[this.activeTouchID]
                }
            }, {
                key: "__getActiveTracker",
                value: function () {
                    var t = this.touchList,
                        e = this.activeTouchID;
                    return t[e]
                }
            }, {
                key: "isActive",
                value: function () {
                    return void 0 !== this.activeTouchID
                }
            }, {
                key: "getDelta",
                value: function () {
                    var t = this.__getActiveTracker();
                    return t ? d({}, t.delta) : this.__primitiveValue
                }
            }, {
                key: "getVelocity",
                value: function () {
                    var t = this.__getActiveTracker();
                    return t ? d({}, t.velocity) : this.__primitiveValue
                }
            }, {
                key: "getLastPosition",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = this.__getActiveTracker() || this.lastTouch,
                        n = e ? e.lastPosition : this.__primitiveValue;
                    return t ? n.hasOwnProperty(t) ? n[t] : 0 : d({}, n)
                }
            }, {
                key: "updatedRecently",
                value: function () {
                    var t = this.__getActiveTracker();
                    return t && Date.now() - t.updateTime < 30
                }
            }, {
                key: "track",
                value: function (t) {
                    var e = this,
                        n = t.targetTouches;
                    return [].concat(o(n)).forEach(function (t) {
                        e.__add(t)
                    }), this.touchList
                }
            }, {
                key: "update",
                value: function (t) {
                    var e = this,
                        n = t.touches,
                        r = t.changedTouches;
                    return [].concat(o(n)).forEach(function (t) {
                        e.__renew(t)
                    }), this.__setActiveID(r), this.touchList
                }
            }, {
                key: "release",
                value: function (t) {
                    var e = this;
                    return this.activeTouchID = void 0, [].concat(o(t.changedTouches)).forEach(function (t) {
                        e.__delete(t)
                    }), this.touchList
                }
            }, {
                key: "__primitiveValue",
                get: function () {
                    return {
                        x: 0,
                        y: 0
                    }
                }
            }]), t
        }()
    }, function (t, e, n) {
        t.exports = {
            default: n(126),
            __esModule: !0
        }
    }, function (t, e, n) {
        n(127), t.exports = n(12).Object.assign
    }, function (t, e, n) {
        var r = n(10);
        r(r.S + r.F, "Object", {
            assign: n(128)
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(31),
            o = n(69),
            i = n(70),
            u = n(47),
            a = n(34),
            c = Object.assign;
        t.exports = !c || n(21)(function () {
            var t = {},
                e = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return t[n] = 7, r.split("").forEach(function (t) {
                e[t] = t
            }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
        }) ? function (t, e) {
            for (var n = u(t), c = arguments.length, l = 1, f = o.f, s = i.f; c > l;)
                for (var d, h = a(arguments[l++]), v = f ? r(h).concat(f(h)) : r(h), _ = v.length, p = 0; _ > p;) s.call(h, d = v[p++]) && (n[d] = h[d]);
            return n
        } : c
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(130);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(131);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        });
        var l = n(132);
        (0, a.default)(l).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return l[t]
                }
            })
        });
        var f = n(133);
        (0, a.default)(f).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return f[t]
                }
            })
        });
        var s = n(134);
        (0, a.default)(s).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return s[t]
                }
            })
        });
        var d = n(135);
        (0, a.default)(d).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return d[t]
                }
            })
        });
        var h = n(136);
        (0, a.default)(h).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return h[t]
                }
            })
        });
        var v = n(137);
        (0, a.default)(v).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return v[t]
                }
            })
        });
        var _ = n(138);
        (0, a.default)(_).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return _[t]
                }
            })
        });
        var p = n(139);
        (0, a.default)(p).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return p[t]
                }
            })
        });
        var y = n(140);
        (0, a.default)(y).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return y[t]
                }
            })
        });
        var b = n(141);
        (0, a.default)(b).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return b[t]
                }
            })
        });
        var g = n(142);
        (0, a.default)(g).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return g[t]
                }
            })
        });
        var m = n(143);
        (0, a.default)(m).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return m[t]
                }
            })
        });
        var x = n(144);
        (0, a.default)(x).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return x[t]
                }
            })
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(78);
        r.SmoothScrollbar.prototype.clearMovement = r.SmoothScrollbar.prototype.stop = function () {
            this.movement.x = this.movement.y = 0, cancelAnimationFrame(this.__timerID.scrollTo)
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return (0, u.default)(t)
        }
        var i = n(2),
            u = r(i),
            a = n(78),
            c = n(112),
            l = n(89);
        a.SmoothScrollbar.prototype.destroy = function (t) {
            var e = this.__listeners,
                n = this.__handlers,
                r = this.__observer,
                i = this.targets,
                u = i.container,
                a = i.content;
            n.forEach(function (t) {
                var e = t.evt,
                    n = t.elem,
                    r = t.fn;
                n.removeEventListener(e, r)
            }), n.length = e.length = 0, this.stop(), cancelAnimationFrame(this.__timerID.render), r && r.disconnect(), l.sbList.delete(u), t || this.scrollTo(0, 0, 300, function () {
                if (u.parentNode) {
                    (0, c.setStyle)(u, {
                        overflow: ""
                    }), u.scrollTop = u.scrollLeft = 0;
                    var t = [].concat(o(a.childNodes));
                    u.innerHTML = "", t.forEach(function (t) {
                        return u.appendChild(t)
                    })
                }
            })
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(78);
        r.SmoothScrollbar.prototype.getContentElem = function () {
            return this.targets.content
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(78);
        r.SmoothScrollbar.prototype.getSize = function () {
            var t = this.targets.container,
                e = this.targets.content;
            return {
                container: {
                    width: t.clientWidth,
                    height: t.clientHeight
                },
                content: {
                    width: e.offsetWidth - e.clientWidth + e.scrollWidth,
                    height: e.offsetHeight - e.clientHeight + e.scrollHeight
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(78);
        r.SmoothScrollbar.prototype.infiniteScroll = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50;
            if ("function" == typeof t) {
                var n = {
                        x: 0,
                        y: 0
                    },
                    r = !1;
                this.addListener(function (o) {
                    var i = o.offset,
                        u = o.limit;
                    u.y - i.y <= e && i.y > n.y && !r && (r = !0, setTimeout(function () {
                        return t(o)
                    })), u.y - i.y > e && (r = !1), n = i
                })
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(78);
        r.SmoothScrollbar.prototype.isVisible = function (t) {
            var e = this.bounding,
                n = t.getBoundingClientRect(),
                r = Math.max(e.top, n.top),
                o = Math.max(e.left, n.left),
                i = Math.min(e.right, n.right),
                u = Math.min(e.bottom, n.bottom);
            return r < u && o < i
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(78);
        r.SmoothScrollbar.prototype.addListener = function (t) {
            "function" == typeof t && this.__listeners.push(t)
        }, r.SmoothScrollbar.prototype.removeListener = function (t) {
            "function" == typeof t && this.__listeners.some(function (e, n, r) {
                return e === t && r.splice(n, 1)
            })
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e, n) {
            return e in t ? (0, l.default)(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function i(t, e) {
            return !!e.length && e.some(function (e) {
                return t.match(e)
            })
        }

        function u() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.REGIESTER,
                e = d[t];
            return function () {
                for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                this.__handlers.forEach(function (n) {
                    var o = n.elem,
                        u = n.evt,
                        a = n.fn,
                        c = n.hasRegistered;
                    c && t === s.REGIESTER || !c && t === s.UNREGIESTER || i(u, r) && (o[e](u, a), n.hasRegistered = !c)
                })
            }
        }
        var a, c = n(86),
            l = r(c),
            f = n(78),
            s = {
                REGIESTER: 0,
                UNREGIESTER: 1
            },
            d = (a = {}, o(a, s.REGIESTER, "addEventListener"), o(a, s.UNREGIESTER, "removeEventListener"), a);
        f.SmoothScrollbar.prototype.registerEvents = u(s.REGIESTER), f.SmoothScrollbar.prototype.unregisterEvents = u(s.UNREGIESTER)
    }, function (t, e, n) {
        "use strict";
        var r = n(78);
        r.SmoothScrollbar.prototype.scrollIntoView = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = e.onlyScrollIfNeeded,
                r = void 0 !== n && n,
                o = e.offsetTop,
                i = void 0 === o ? 0 : o,
                u = e.offsetLeft,
                a = void 0 === u ? 0 : u,
                c = this.targets,
                l = this.bounding;
            if (t && c.container.contains(t)) {
                var f = t.getBoundingClientRect();
                r && this.isVisible(t) || this.__setMovement(f.left - l.left - a, f.top - l.top - i)
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(112),
            o = n(78);
        o.SmoothScrollbar.prototype.scrollTo = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.offset.x,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.offset.y,
                n = this,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                u = this.options,
                a = this.offset,
                c = this.limit,
                l = this.__timerID;
            cancelAnimationFrame(l.scrollTo), i = "function" == typeof i ? i : function () {}, u.renderByPixels && (t = Math.round(t), e = Math.round(e));
            var f = a.x,
                s = a.y,
                d = (0, r.pickInRange)(t, 0, c.x) - f,
                h = (0, r.pickInRange)(e, 0, c.y) - s,
                v = (0, r.buildCurve)(d, o),
                _ = (0, r.buildCurve)(h, o),
                p = v.length,
                y = 0,
                b = function r() {
                    return y === p ? (n.setPosition(t, e), requestAnimationFrame(function () {
                        i(n)
                    })) : (n.setPosition(f + v[y], s + _[y]), y++, void(l.scrollTo = requestAnimationFrame(r)))
                };
            b()
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(90),
            i = r(o),
            u = n(78);
        u.SmoothScrollbar.prototype.setOptions = function () {
            var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, i.default)(e).forEach(function (n) {
                t.options.hasOwnProperty(n) && void 0 !== e[n] && (t.options[n] = e[n])
            })
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(125),
            i = r(o),
            u = i.default || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            a = n(112),
            c = n(78);
        c.SmoothScrollbar.prototype.setPosition = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.offset.x,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.offset.y,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this.__hideTrackThrottle();
            var r = {},
                o = this.options,
                i = this.offset,
                c = this.limit,
                l = this.targets,
                f = this.__listeners;
            o.renderByPixels && (t = Math.round(t), e = Math.round(e)), Math.abs(t - i.x) > 1 && this.showTrack("x"), Math.abs(e - i.y) > 1 && this.showTrack("y"), t = (0, a.pickInRange)(t, 0, c.x), e = (0, a.pickInRange)(e, 0, c.y), t === i.x && e === i.y || (r.direction = {
                x: t === i.x ? "none" : t > i.x ? "right" : "left",
                y: e === i.y ? "none" : e > i.y ? "down" : "up"
            }, this.__readonly("offset", {
                x: t,
                y: e
            }), r.limit = u({}, c), r.offset = u({}, this.offset), this.__setThumbPosition(), (0, a.setStyle)(l.content, {
                "-transform": "translate3d(" + -t + "px, " + -e + "px, 0)"
            }), n || f.forEach(function (t) {
                o.syncCallbacks ? t(r) : requestAnimationFrame(function () {
                    t(r)
                })
            }))
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e, n) {
            return e in t ? (0, c.default)(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function i() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.SHOW,
                e = d[t];
            return function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "both",
                    r = this.options,
                    o = this.movement,
                    i = this.targets,
                    u = i.container,
                    a = i.xAxis,
                    c = i.yAxis;
                o.x || o.y ? u.classList.add(s.CONTAINER) : u.classList.remove(s.CONTAINER), r.alwaysShowTracks && t === f.HIDE || (n = n.toLowerCase(), "both" === n && (a.track.classList[e](s.TRACK), c.track.classList[e](s.TRACK)), "x" === n && a.track.classList[e](s.TRACK), "y" === n && c.track.classList[e](s.TRACK))
            }
        }
        var u, a = n(86),
            c = r(a),
            l = n(78),
            f = {
                SHOW: 0,
                HIDE: 1
            },
            s = {
                TRACK: "show",
                CONTAINER: "scrolling"
            },
            d = (u = {}, o(u, f.SHOW, "add"), o(u, f.HIDE, "remove"), u);
        l.SmoothScrollbar.prototype.showTrack = i(f.SHOW), l.SmoothScrollbar.prototype.hideTrack = i(f.HIDE)
    }, function (t, e, n) {
        "use strict";

        function r() {
            if ("glow" === this.options.overscrollEffect) {
                var t = this.targets,
                    e = this.size,
                    n = t.canvas,
                    r = n.elem,
                    o = n.context,
                    i = window.devicePixelRatio || 1,
                    u = e.container.width * i,
                    a = e.container.height * i;
                u === r.width && a === r.height || (r.width = u, r.height = a, o.scale(i, i))
            }
        }

        function o() {
            var t = this.size,
                e = this.thumbSize,
                n = this.targets,
                r = n.xAxis,
                o = n.yAxis;
            (0, u.setStyle)(r.track, {
                display: t.content.width <= t.container.width ? "none" : "block"
            }), (0, u.setStyle)(o.track, {
                display: t.content.height <= t.container.height ? "none" : "block"
            }), (0, u.setStyle)(r.thumb, {
                width: e.x + "px"
            }), (0, u.setStyle)(o.thumb, {
                height: e.y + "px"
            })
        }

        function i() {
            var t = this.options;
            this.__updateBounding();
            var e = this.getSize(),
                n = {
                    x: Math.max(e.content.width - e.container.width, 0),
                    y: Math.max(e.content.height - e.container.height, 0)
                },
                i = {
                    realX: e.container.width / e.content.width * e.container.width,
                    realY: e.container.height / e.content.height * e.container.height
                };
            i.x = Math.max(i.realX, t.thumbMinSize), i.y = Math.max(i.realY, t.thumbMinSize), this.__readonly("size", e).__readonly("limit", n).__readonly("thumbSize", i), o.call(this), r.call(this), this.setPosition(), this.__setThumbPosition()
        }
        var u = n(112),
            a = n(78);
        a.SmoothScrollbar.prototype.update = function (t) {
            t ? requestAnimationFrame(i.bind(this)) : i.call(this)
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(146);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(147);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        });
        var l = n(148);
        (0, a.default)(l).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return l[t]
                }
            })
        });
        var f = n(149);
        (0, a.default)(f).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return f[t]
                }
            })
        });
        var s = n(154);
        (0, a.default)(s).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return s[t]
                }
            })
        });
        var d = n(155);
        (0, a.default)(d).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return d[t]
                }
            })
        });
        var h = n(156);
        (0, a.default)(h).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return h[t]
                }
            })
        });
        var v = n(157);
        (0, a.default)(v).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return v[t]
                }
            })
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return (0, a.default)(t)
        }

        function i() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = this.limit,
                i = this.options,
                u = this.movement;
            this.__updateThrottle(), i.renderByPixels && (t = Math.round(t), e = Math.round(e));
            var a = u.x + t,
                l = u.y + e;
            0 === r.x && (a = 0), 0 === r.y && (l = 0);
            var f = this.__getDeltaLimit(n);
            u.x = c.pickInRange.apply(void 0, [a].concat(o(f.x))), u.y = c.pickInRange.apply(void 0, [l].concat(o(f.y)))
        }
        var u = n(2),
            a = r(u),
            c = n(112),
            l = n(78);
        Object.defineProperty(l.SmoothScrollbar.prototype, "__addMovement", {
            value: i,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r() {
            var t = this,
                e = this.movement,
                n = this.movementLocked;
            a.forEach(function (r) {
                n[r] = e[r] && t.__willOverscroll(r, e[r])
            })
        }

        function o() {
            var t = this.movementLocked;
            a.forEach(function (e) {
                t[e] = !1
            })
        }

        function i() {
            var t = this.movementLocked;
            return t.x || t.y
        }
        var u = n(78),
            a = ["x", "y"];
        Object.defineProperty(u.SmoothScrollbar.prototype, "__autoLockMovement", {
            value: r,
            writable: !0,
            configurable: !0
        }), Object.defineProperty(u.SmoothScrollbar.prototype, "__unlockMovement", {
            value: o,
            writable: !0,
            configurable: !0
        }), Object.defineProperty(u.SmoothScrollbar.prototype, "__isMovementLocked", {
            value: i,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (t) {
                var e = this.options,
                    n = this.movement,
                    r = this.overscrollRendered,
                    o = this.MAX_OVERSCROLL,
                    i = n[t] = (0, h.pickInRange)(n[t], -o, o),
                    u = e.overscrollDamping,
                    a = r[t] + (i - r[t]) * u;
                e.renderByPixels && (a |= 0), !this.__isMovementLocked() && Math.abs(a - r[t]) < .1 && (a -= i / Math.abs(i || 1)), Math.abs(a) < Math.abs(r[t]) && this.__readonly("overscrollBack", !0), (a * r[t] < 0 || Math.abs(a) <= 1) && (a = 0, this.__readonly("overscrollBack", !1)), r[t] = a
            }
        }

        function i(t) {
            var e = this.__touchRecord,
                n = this.overscrollRendered;
            return n.x !== t.x || n.y !== t.y || !(!d.GLOBAL_ENV.TOUCH_SUPPORTED || !e.updatedRecently())
        }

        function u() {
            var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            if (e.length && this.options.overscrollEffect) {
                var n = this.options,
                    r = this.overscrollRendered,
                    u = l({}, r);
                if (e.forEach(function (e) {
                        return o.call(t, e)
                    }), i.call(this, u)) switch (n.overscrollEffect) {
                    case "bounce":
                        return s.overscrollBounce.call(this, r.x, r.y);
                    case "glow":
                        return s.overscrollGlow.call(this, r.x, r.y);
                    default:
                        return
                }
            }
        }
        var a = n(125),
            c = r(a),
            l = c.default || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            f = n(78),
            s = n(150),
            d = n(89),
            h = n(112);
        Object.defineProperty(f.SmoothScrollbar.prototype, "__renderOverscroll", {
            value: u,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(151);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(152);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        });
        var l = n(153);
        (0, a.default)(l).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return l[t]
                }
            })
        })
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            var n = this.size,
                r = this.offset,
                i = this.targets,
                u = this.thumbOffset,
                a = i.xAxis,
                c = i.yAxis,
                l = i.content;
            if ((0, o.setStyle)(l, {
                    "-transform": "translate3d(" + -(r.x + t) + "px, " + -(r.y + e) + "px, 0)"
                }), t) {
                var f = n.container.width / (n.container.width + Math.abs(t));
                (0, o.setStyle)(a.thumb, {
                    "-transform": "translate3d(" + u.x + "px, 0, 0) scale3d(" + f + ", 1, 1)",
                    "-transform-origin": t < 0 ? "left" : "right"
                })
            }
            if (e) {
                var s = n.container.height / (n.container.height + Math.abs(e));
                (0, o.setStyle)(c.thumb, {
                    "-transform": "translate3d(0, " + u.y + "px, 0) scale3d(1, " + s + ", 1)",
                    "-transform-origin": e < 0 ? "top" : "bottom"
                })
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.overscrollBounce = r;
        var o = n(112)
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            var n = this.size,
                r = this.targets,
                a = this.options,
                c = r.canvas,
                l = c.elem,
                f = c.context;
            return t || e ? ((0, u.setStyle)(l, {
                display: "block"
            }), f.clearRect(0, 0, n.content.width, n.container.height), f.fillStyle = a.overscrollEffectColor, o.call(this, t), void i.call(this, e)) : (0, u.setStyle)(l, {
                display: "none"
            })
        }

        function o(t) {
            var e = this.size,
                n = this.targets,
                r = this.__touchRecord,
                o = this.MAX_OVERSCROLL,
                i = e.container,
                l = i.width,
                f = i.height,
                s = n.canvas.context;
            s.save(), t > 0 && s.transform(-1, 0, 0, 1, l, 0);
            var d = (0, u.pickInRange)(Math.abs(t) / o, 0, a),
                h = (0, u.pickInRange)(d, 0, c) * l,
                v = Math.abs(t),
                _ = r.getLastPosition("y") || f / 2;
            s.globalAlpha = d, s.beginPath(), s.moveTo(0, -h), s.quadraticCurveTo(v, _, 0, f + h), s.fill(), s.closePath(), s.restore()
        }

        function i(t) {
            var e = this.size,
                n = this.targets,
                r = this.__touchRecord,
                o = this.MAX_OVERSCROLL,
                i = e.container,
                l = i.width,
                f = i.height,
                s = n.canvas.context;
            s.save(), t > 0 && s.transform(1, 0, 0, -1, 0, f);
            var d = (0, u.pickInRange)(Math.abs(t) / o, 0, a),
                h = (0, u.pickInRange)(d, 0, c) * l,
                v = r.getLastPosition("x") || l / 2,
                _ = Math.abs(t);
            s.globalAlpha = d, s.beginPath(), s.moveTo(-h, 0), s.quadraticCurveTo(v, _, l + h, 0), s.fill(), s.closePath(), s.restore()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.overscrollGlow = r;
        var u = n(112),
            a = .75,
            c = .25
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e = this.options,
                n = this.offset,
                r = this.movement,
                o = this.__touchRecord,
                i = e.damping,
                u = e.renderByPixels,
                a = e.overscrollDamping,
                c = n[t],
                l = r[t],
                f = i;
            if (this.__willOverscroll(t, l) ? f = a : o.isActive() && (f = .5), Math.abs(l) < 1) {
                var s = c + l;
                return {
                    movement: 0,
                    position: l > 0 ? Math.ceil(s) : Math.floor(s)
                }
            }
            var d = l * (1 - f);
            return u && (d |= 0), {
                movement: d,
                position: c + l - d
            }
        }

        function o() {
            var t = this.options,
                e = this.offset,
                n = this.limit,
                i = this.movement,
                a = this.overscrollRendered,
                c = this.__timerID;
            if (i.x || i.y || a.x || a.y) {
                var l = r.call(this, "x"),
                    f = r.call(this, "y"),
                    s = [];
                if (t.overscrollEffect) {
                    var d = (0, u.pickInRange)(l.position, 0, n.x),
                        h = (0, u.pickInRange)(f.position, 0, n.y);
                    (a.x || d === e.x && i.x) && s.push("x"), (a.y || h === e.y && i.y) && s.push("y")
                }
                this.movementLocked.x || (i.x = l.movement), this.movementLocked.y || (i.y = f.movement), this.setPosition(l.position, f.position), this.__renderOverscroll(s)
            }
            c.render = requestAnimationFrame(o.bind(this))
        }
        var i = n(78),
            u = n(112);
        Object.defineProperty(i.SmoothScrollbar.prototype, "__render", {
            value: o,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return (0, a.default)(t)
        }

        function i() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = this.options,
                i = this.movement;
            this.__updateThrottle();
            var u = this.__getDeltaLimit(n);
            r.renderByPixels && (t = Math.round(t), e = Math.round(e)), i.x = c.pickInRange.apply(void 0, [t].concat(o(u.x))), i.y = c.pickInRange.apply(void 0, [e].concat(o(u.y)))
        }
        var u = n(2),
            a = r(u),
            c = n(112),
            l = n(78);
        Object.defineProperty(l.SmoothScrollbar.prototype, "__setMovement", {
            value: i,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = this.options,
                r = this.offset,
                o = this.limit;
            if (!n.continuousScrolling) return !1;
            var u = (0, i.pickInRange)(t + r.x, 0, o.x),
                a = (0, i.pickInRange)(e + r.y, 0, o.y),
                c = !0;
            return c &= u === r.x, c &= a === r.y, c &= u === o.x || 0 === u || a === o.y || 0 === a
        }
        var o = n(78),
            i = n(112);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__shouldPropagateMovement", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (!t) return !1;
            var n = this.offset,
                r = this.limit,
                o = n[t];
            return (0, i.pickInRange)(e + o, 0, r[t]) === o && (0 === o || o === r[t])
        }
        var o = n(78),
            i = n(112);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__willOverscroll", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(159);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(160);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        });
        var l = n(161);
        (0, a.default)(l).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return l[t]
                }
            })
        });
        var f = n(168);
        (0, a.default)(f).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return f[t]
                }
            })
        });
        var s = n(169);
        (0, a.default)(s).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return s[t]
                }
            })
        });
        var d = n(170);
        (0, a.default)(d).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return d[t]
                }
            })
        });
        var h = n(171);
        (0, a.default)(h).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return h[t]
                }
            })
        });
        var v = n(172);
        (0, a.default)(v).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return v[t]
                }
            })
        })
    }, function (t, e, n) {
        "use strict";

        function r() {
            var t = this,
                e = this.targets,
                n = e.container,
                r = e.content,
                o = !1,
                u = void 0,
                a = void 0;
            Object.defineProperty(this, "__isDrag", {
                get: function () {
                    return o
                },
                enumerable: !1
            });
            var c = function e(n) {
                var r = n.x,
                    o = n.y;
                if (r || o) {
                    var i = t.options.speed;
                    t.__setMovement(r * i, o * i), u = requestAnimationFrame(function () {
                        e({
                            x: r,
                            y: o
                        })
                    })
                }
            };
            this.__addEvent(n, "dragstart", function (e) {
                t.__eventFromChildScrollbar(e) || (o = !0, a = e.target.clientHeight, (0, i.setStyle)(r, {
                    "pointer-events": "auto"
                }), cancelAnimationFrame(u), t.__updateBounding())
            }), this.__addEvent(document, "dragover mousemove touchmove", function (e) {
                if (o && !t.__eventFromChildScrollbar(e)) {
                    cancelAnimationFrame(u), e.preventDefault();
                    var n = t.__getPointerTrend(e, a);
                    c(n)
                }
            }), this.__addEvent(document, "dragend mouseup touchend blur", function () {
                cancelAnimationFrame(u), o = !1
            })
        }
        var o = n(78),
            i = n(112);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__dragHandler", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o() {
            var t = this,
                e = this.targets,
                n = function (e) {
                    var n = t.size,
                        r = t.offset,
                        o = t.limit,
                        i = t.movement;
                    switch (e) {
                        case s.SPACE:
                            return [0, 200];
                        case s.PAGE_UP:
                            return [0, -n.container.height + 40];
                        case s.PAGE_DOWN:
                            return [0, n.container.height - 40];
                        case s.END:
                            return [0, Math.abs(i.y) + o.y - r.y];
                        case s.HOME:
                            return [0, -Math.abs(i.y) - r.y];
                        case s.LEFT:
                            return [-40, 0];
                        case s.UP:
                            return [0, -40];
                        case s.RIGHT:
                            return [40, 0];
                        case s.DOWN:
                            return [0, 40];
                        default:
                            return null
                    }
                },
                r = e.container,
                o = !1;
            this.__addEvent(r, "focus", function () {
                o = !0
            }), this.__addEvent(r, "blur", function () {
                o = !1
            }), this.__addEvent(r, "keydown", function (e) {
                if (o) {
                    var i = t.options,
                        u = t.parents,
                        a = t.movementLocked,
                        c = n(e.keyCode || e.which);
                    if (c) {
                        var f = l(c, 2),
                            s = f[0],
                            d = f[1];
                        if (t.__shouldPropagateMovement(s, d)) return r.blur(), u.length && u[0].focus(), t.__updateThrottle();
                        e.preventDefault(), t.__unlockMovement(), s && t.__willOverscroll("x", s) && (a.x = !0), d && t.__willOverscroll("y", d) && (a.y = !0);
                        var h = i.speed;
                        t.__addMovement(s * h, d * h)
                    }
                }
            }), this.__addEvent(r, "keyup", function () {
                t.__unlockMovement()
            })
        }
        var i = n(162),
            u = r(i),
            a = n(165),
            c = r(a),
            l = function () {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, a = (0, c.default)(t); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
                return function (e, n) {
                    if (Array.isArray(e)) return e;
                    if ((0, u.default)(Object(e))) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            f = n(78),
            s = {
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40
            };
        Object.defineProperty(f.SmoothScrollbar.prototype, "__keyboardHandler", {
            value: o,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        t.exports = {
            default: n(163),
            __esModule: !0
        }
    }, function (t, e, n) {
        n(57), n(4), t.exports = n(164)
    }, function (t, e, n) {
        var r = n(53),
            o = n(45)("iterator"),
            i = n(27);
        t.exports = n(12).isIterable = function (t) {
            var e = Object(t);
            return void 0 !== e[o] || "@@iterator" in e || i.hasOwnProperty(r(e))
        }
    }, function (t, e, n) {
        t.exports = {
            default: n(166),
            __esModule: !0
        }
    }, function (t, e, n) {
        n(57), n(4), t.exports = n(167)
    }, function (t, e, n) {
        var r = n(17),
            o = n(52);
        t.exports = n(12).getIterator = function (t) {
            var e = o(t);
            if ("function" != typeof e) throw TypeError(t + " is not iterable!");
            return r(e.call(t))
        }
    }, function (t, e, n) {
        "use strict";

        function r() {
            var t = this,
                e = this.targets,
                n = e.container,
                r = e.xAxis,
                o = e.yAxis,
                u = function (e, n) {
                    var r = t.size,
                        o = t.thumbSize;
                    if ("x" === e) {
                        var i = r.container.width - (o.x - o.realX);
                        return n / i * r.content.width
                    }
                    if ("y" === e) {
                        var u = r.container.height - (o.y - o.realY);
                        return n / u * r.content.height
                    }
                    return 0
                },
                a = function (t) {
                    return (0, i.isOneOf)(t, [r.track, r.thumb]) ? "x" : (0, i.isOneOf)(t, [o.track, o.thumb]) ? "y" : void 0
                },
                c = void 0,
                l = void 0,
                f = void 0,
                s = void 0,
                d = void 0;
            this.__addEvent(n, "click", function (e) {
                if (!l && (0, i.isOneOf)(e.target, [r.track, o.track])) {
                    var n = e.target,
                        c = a(n),
                        f = n.getBoundingClientRect(),
                        s = (0, i.getPosition)(e),
                        d = t.offset,
                        h = t.thumbSize;
                    if ("x" === c) {
                        var v = s.x - f.left - h.x / 2;
                        t.__setMovement(u(c, v) - d.x, 0)
                    } else {
                        var _ = s.y - f.top - h.y / 2;
                        t.__setMovement(0, u(c, _) - d.y)
                    }
                }
            }), this.__addEvent(n, "mousedown", function (e) {
                if ((0, i.isOneOf)(e.target, [r.thumb, o.thumb])) {
                    c = !0;
                    var n = (0, i.getPosition)(e),
                        u = e.target.getBoundingClientRect();
                    s = a(e.target), f = {
                        x: n.x - u.left,
                        y: n.y - u.top
                    }, d = t.targets.container.getBoundingClientRect()
                }
            }), this.__addEvent(window, "mousemove", function (e) {
                if (c) {
                    e.preventDefault(), l = !0;
                    var n = t.offset,
                        r = (0, i.getPosition)(e);
                    if ("x" === s) {
                        var o = r.x - f.x - d.left;
                        t.setPosition(u(s, o), n.y)
                    }
                    if ("y" === s) {
                        var a = r.y - f.y - d.top;
                        t.setPosition(n.x, u(s, a))
                    }
                }
            }), this.__addEvent(window, "mouseup blur", function () {
                c = l = !1
            })
        }
        var o = n(78),
            i = n(112);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__mouseHandler", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r() {
            this.__addEvent(window, "resize", this.__updateThrottle)
        }
        var o = n(78);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__resizeHandler", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r() {
            var t = this,
                e = !1,
                n = void 0,
                r = this.targets,
                o = r.container,
                u = r.content,
                a = function e(r) {
                    var o = r.x,
                        i = r.y;
                    if (o || i) {
                        var u = t.options.speed;
                        t.__setMovement(o * u, i * u), n = requestAnimationFrame(function () {
                            e({
                                x: o,
                                y: i
                            })
                        })
                    }
                },
                c = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    (0, i.setStyle)(o, {
                        "-user-select": t
                    })
                };
            this.__addEvent(window, "mousemove", function (r) {
                if (e) {
                    cancelAnimationFrame(n);
                    var o = t.__getPointerTrend(r);
                    a(o)
                }
            }), this.__addEvent(u, "selectstart", function (r) {
                return t.__eventFromChildScrollbar(r) ? c("none") : (cancelAnimationFrame(n), t.__updateBounding(), void(e = !0))
            }), this.__addEvent(window, "mouseup blur", function () {
                cancelAnimationFrame(n), c(), e = !1
            }), this.__addEvent(o, "scroll", function (t) {
                t.preventDefault(), o.scrollTop = o.scrollLeft = 0
            })
        }
        var o = n(78),
            i = n(112);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__selectHandler", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o() {
            var t = this,
                e = this.targets,
                n = this.__touchRecord,
                r = e.container;
            this.__addEvent(r, "touchstart", function (e) {
                if (!t.__isDrag) {
                    var r = t.__timerID,
                        o = t.movement;
                    cancelAnimationFrame(r.scrollTo), t.__willOverscroll("x") || (o.x = 0), t.__willOverscroll("y") || (o.y = 0), n.track(e), t.__autoLockMovement()
                }
            }), this.__addEvent(r, "touchmove", function (e) {
                if (!(t.__isDrag || s && s !== t)) {
                    n.update(e);
                    var r = n.getDelta(),
                        o = r.x,
                        i = r.y;
                    if (t.__shouldPropagateMovement(o, i)) return t.__updateThrottle();
                    var u = t.movement,
                        a = t.MAX_OVERSCROLL,
                        c = t.options;
                    if (u.x && t.__willOverscroll("x", o)) {
                        var l = 2;
                        "bounce" === c.overscrollEffect && (l += Math.abs(10 * u.x / a)), Math.abs(u.x) >= a ? o = 0 : o /= l
                    }
                    if (u.y && t.__willOverscroll("y", i)) {
                        var f = 2;
                        "bounce" === c.overscrollEffect && (f += Math.abs(10 * u.y / a)), Math.abs(u.y) >= a ? i = 0 : i /= f
                    }
                    t.__autoLockMovement(), e.preventDefault(), t.__addMovement(o, i, !0), s = t
                }
            }), this.__addEvent(r, "touchcancel touchend", function (e) {
                if (!t.__isDrag) {
                    var r = t.options.speed,
                        o = n.getVelocity(),
                        i = {};
                    (0, u.default)(o).forEach(function (t) {
                        var e = (0, l.pickInRange)(o[t] * c.GLOBAL_ENV.EASING_MULTIPLIER, -1e3, 1e3);
                        i[t] = Math.abs(e) > f ? e * r : 0
                    }), t.__addMovement(i.x, i.y, !0), t.__unlockMovement(), n.release(e), s = null
                }
            })
        }
        var i = n(90),
            u = r(i),
            a = n(78),
            c = n(89),
            l = n(112),
            f = 100,
            s = null;
        Object.defineProperty(a.SmoothScrollbar.prototype, "__touchHandler", {
            value: o,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r() {
            var t = this,
                e = this.targets.container,
                n = !1,
                r = (0, i.debounce)(function () {
                    n = !1
                }, 30, !1);
            this.__addEvent(e, u.GLOBAL_ENV.WHEEL_EVENT, function (e) {
                var o = t.options,
                    u = (0, i.getDelta)(e),
                    a = u.x,
                    c = u.y;
                return a *= o.speed, c *= o.speed, t.__shouldPropagateMovement(a, c) ? t.__updateThrottle() : (e.preventDefault(), r(), t.overscrollBack && (n = !0), n && (t.__willOverscroll("x", a) && (a = 0), t.__willOverscroll("y", c) && (c = 0)), void t.__addMovement(a, c, !0))
            })
        }
        var o = n(78),
            i = n(112),
            u = n(89);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__wheelHandler", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(174);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(86),
            i = r(o),
            u = n(90),
            a = r(u);
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = n(175);
        (0, a.default)(c).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return c[t]
                }
            })
        });
        var l = n(176);
        (0, a.default)(l).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return l[t]
                }
            })
        });
        var f = n(177);
        (0, a.default)(f).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return f[t]
                }
            })
        });
        var s = n(178);
        (0, a.default)(s).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return s[t]
                }
            })
        });
        var d = n(179);
        (0, a.default)(d).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return d[t]
                }
            })
        });
        var h = n(182);
        (0, a.default)(h).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return h[t]
                }
            })
        });
        var v = n(183);
        (0, a.default)(v).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return v[t]
                }
            })
        });
        var _ = n(184);
        (0, a.default)(_).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return _[t]
                }
            })
        });
        var p = n(185);
        (0, a.default)(p).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return p[t]
                }
            })
        });
        var y = n(186);
        (0, a.default)(y).forEach(function (t) {
            "default" !== t && "__esModule" !== t && (0, i.default)(e, t, {
                enumerable: !0,
                get: function () {
                    return y[t]
                }
            })
        })
    }, function (t, e, n) {
        "use strict";

        function r(t, e, n) {
            var r = this;
            if (!t || "function" != typeof t.addEventListener) throw new TypeError("expect elem to be a DOM element, but got " + t);
            var o = function (t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) r[o - 1] = arguments[o];
                !t.type.match(/drag/) && t.defaultPrevented || n.apply(void 0, [t].concat(r))
            };
            e.split(/\s+/g).forEach(function (e) {
                r.__handlers.push({
                    evt: e,
                    elem: t,
                    fn: o,
                    hasRegistered: !0
                }), t.addEventListener(e, o)
            })
        }
        var o = n(78);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__addEvent", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.target;
            return this.children.some(function (t) {
                return t.contains(e)
            })
        }
        var o = n(78);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__eventFromChildScrollbar", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = this.options,
                n = this.offset,
                r = this.limit;
            return t && (e.continuousScrolling || e.overscrollEffect) ? {
                x: [-(1 / 0), 1 / 0],
                y: [-(1 / 0), 1 / 0]
            } : {
                x: [-n.x, r.x - n.x],
                y: [-n.y, r.y - n.y]
            }
        }
        var o = n(78);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__getDeltaLimit", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = this.bounding,
                r = n.top,
                o = n.right,
                u = n.bottom,
                a = n.left,
                c = (0, i.getPosition)(t),
                l = c.x,
                f = c.y,
                s = {
                    x: 0,
                    y: 0
                };
            return 0 === l && 0 === f ? s : (l > o - e ? s.x = l - o + e : l < a + e && (s.x = l - a - e), f > u - e ? s.y = f - u + e : f < r + e && (s.y = f - r - e), s)
        }
        var o = n(78),
            i = n(112);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__getPointerTrend", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return (0, h.default)(t)
        }

        function i(t) {
            var e = this,
                n = {
                    speed: 1,
                    damping: .1,
                    thumbMinSize: 20,
                    syncCallbacks: !1,
                    renderByPixels: !0,
                    alwaysShowTracks: !1,
                    continuousScrolling: "auto",
                    overscrollEffect: !1,
                    overscrollEffectColor: "#87ceeb",
                    overscrollDamping: .2
                },
                r = {
                    damping: [0, 1],
                    speed: [0, 1 / 0],
                    thumbMinSize: [0, 1 / 0],
                    overscrollEffect: [!1, "bounce", "glow"],
                    overscrollDamping: [0, 1]
                },
                i = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto";
                    if (n.overscrollEffect !== !1) return !1;
                    switch (t) {
                        case "auto":
                            return e.isNestedScrollbar;
                        default:
                            return !!t
                    }
                },
                u = {
                    set ignoreEvents(t) {
                        console.warn("`options.ignoreEvents` parameter is deprecated, use `instance#unregisterEvents()` method instead. https://github.com/idiotWu/smooth-scrollbar/wiki/Instance-Methods#instanceunregisterevents-regex--regex-regex--")
                    },
                    set friction(t) {
                        console.warn("`options.friction=" + t + "` is deprecated, use `options.damping=" + t / 100 + "` instead."), this.damping = t / 100
                    },
                    get syncCallbacks() {
                        return n.syncCallbacks
                    },
                    set syncCallbacks(t) {
                        n.syncCallbacks = !!t
                    },
                    get renderByPixels() {
                        return n.renderByPixels
                    },
                    set renderByPixels(t) {
                        n.renderByPixels = !!t
                    },
                    get alwaysShowTracks() {
                        return n.alwaysShowTracks
                    },
                    set alwaysShowTracks(t) {
                        t = !!t, n.alwaysShowTracks = t;
                        var r = e.targets.container;
                        t ? (e.showTrack(), r.classList.add("sticky")) : (e.hideTrack(), r.classList.remove("sticky"))
                    },
                    get continuousScrolling() {
                        return i(n.continuousScrolling)
                    },
                    set continuousScrolling(t) {
                        "auto" === t ? n.continuousScrolling = t : n.continuousScrolling = !!t
                    },
                    get overscrollEffect() {
                        return n.overscrollEffect
                    },
                    set overscrollEffect(t) {
                        t && !~r.overscrollEffect.indexOf(t) && (console.warn("`overscrollEffect` should be one of " + (0, s.default)(r.overscrollEffect) + ", but got " + (0, s.default)(t) + ". It will be set to `false` now."), t = !1), n.overscrollEffect = t
                    },
                    get overscrollEffectColor() {
                        return n.overscrollEffectColor
                    },
                    set overscrollEffectColor(t) {
                        n.overscrollEffectColor = t
                    }
                };
            (0, l.default)(n).filter(function (t) {
                return !u.hasOwnProperty(t)
            }).forEach(function (t) {
                (0, a.default)(u, t, {
                    enumerable: !0,
                    get: function () {
                        return n[t]
                    },
                    set: function (e) {
                        if (isNaN(parseFloat(e))) throw new TypeError("expect `options." + t + "` to be a number, but got " + ("undefined" == typeof e ? "undefined" : b(e)));
                        n[t] = g.pickInRange.apply(void 0, [e].concat(o(r[t])))
                    }
                })
            }), this.__readonly("options", u), this.setOptions(t)
        }
        var u = n(86),
            a = r(u),
            c = n(90),
            l = r(c),
            f = n(180),
            s = r(f),
            d = n(2),
            h = r(d),
            v = n(55),
            _ = r(v),
            p = n(62),
            y = r(p),
            b = "function" == typeof y.default && "symbol" == typeof _.default ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof y.default && t.constructor === y.default && t !== y.default.prototype ? "symbol" : typeof t
            },
            g = n(112),
            m = n(78);
        Object.defineProperty(m.SmoothScrollbar.prototype, "__initOptions", {
            value: i,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        t.exports = {
            default: n(181),
            __esModule: !0
        }
    }, function (t, e, n) {
        var r = n(12),
            o = r.JSON || (r.JSON = {
                stringify: JSON.stringify
            });
        t.exports = function (t) {
            return o.stringify.apply(o, arguments)
        }
    }, function (t, e, n) {
        "use strict";

        function r() {
            this.update(), this.__keyboardHandler(), this.__resizeHandler(), this.__selectHandler(), this.__mouseHandler(), this.__touchHandler(), this.__wheelHandler(), this.__dragHandler(), this.__render()
        }
        var o = n(78);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__initScrollbar", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t, e) {
            return (0, u.default)(this, t, {
                value: e,
                enumerable: !0,
                configurable: !0
            })
        }
        var i = n(86),
            u = r(i),
            a = n(78);
        Object.defineProperty(a.SmoothScrollbar.prototype, "__readonly", {
            value: o,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r() {
            var t = this.targets,
                e = this.size,
                n = this.offset,
                r = this.thumbOffset,
                i = this.thumbSize;
            r.x = n.x / e.content.width * (e.container.width - (i.x - i.realX)), r.y = n.y / e.content.height * (e.container.height - (i.y - i.realY)), (0, o.setStyle)(t.xAxis.thumb, {
                "-transform": "translate3d(" + r.x + "px, 0, 0)"
            }), (0, o.setStyle)(t.yAxis.thumb, {
                "-transform": "translate3d(0, " + r.y + "px, 0)"
            })
        }
        var o = n(112),
            i = n(78);
        Object.defineProperty(i.SmoothScrollbar.prototype, "__setThumbPosition", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r() {
            var t = this.targets.container,
                e = t.getBoundingClientRect(),
                n = e.top,
                r = e.right,
                o = e.bottom,
                i = e.left,
                u = window,
                a = u.innerHeight,
                c = u.innerWidth;
            this.__readonly("bounding", {
                top: Math.max(n, 0),
                right: Math.min(r, c),
                bottom: Math.min(o, a),
                left: Math.max(i, 0)
            })
        }
        var o = n(78);
        Object.defineProperty(o.SmoothScrollbar.prototype, "__updateBounding", {
            value: r,
            writable: !0,
            configurable: !0
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return (0, a.default)(t)
        }

        function i() {
            var t = this.targets,
                e = t.container,
                n = t.content;
            this.__readonly("children", [].concat(o(n.querySelectorAll(l.selectors)))), this.__readonly("isNestedScrollbar", !1);
            for (var r = [], i = e; i = i.parentElement;) l.sbList.has(i) && (this.__readonly("isNestedScrollbar", !0), r.push(i));
            this.__readonly("parents", r)
        }
        var u = n(2),
            a = r(u),
            c = n(78),
            l = n(89);
        Object.defineProperty(c.SmoothScrollbar.prototype, "__updateTree", {
            value: i,
            writable: !0,
            configurable: !0
        })
    }, function (t, e) {}])
});
/**
 * isMobile.js v0.4.1
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
(function(n){var u=/iPhone/i,s=/iPod/i,h=/iPad/i,f=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,c=/Android/i,i=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,r=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,l=/Windows Phone/i,a=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,v=/BlackBerry/i,y=/BB10/i,p=/Opera Mini/i,w=/(CriOS|Chrome)(?=.*\bMobile\b)/i,b=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,k=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),t=function(n,t){return n.test(t)},e=function(n){var e=n||navigator.userAgent,o=e.split("[FBAN");return typeof o[1]!="undefined"&&(e=o[0]),o=e.split("Twitter"),typeof o[1]!="undefined"&&(e=o[0]),this.apple={phone:t(u,e),ipod:t(s,e),tablet:!t(u,e)&&t(h,e),device:t(u,e)||t(s,e)||t(h,e)},this.amazon={phone:t(i,e),tablet:!t(i,e)&&t(r,e),device:t(i,e)||t(r,e)},this.android={phone:t(i,e)||t(f,e),tablet:!t(i,e)&&!t(f,e)&&(t(r,e)||t(c,e)),device:t(i,e)||t(r,e)||t(f,e)||t(c,e)},this.windows={phone:t(l,e),tablet:t(a,e),device:t(l,e)||t(a,e)},this.other={blackberry:t(v,e),blackberry10:t(y,e),opera:t(p,e),firefox:t(b,e),chrome:t(w,e),device:t(v,e)||t(y,e)||t(p,e)||t(b,e)||t(w,e)},this.seven_inch=t(k,e),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,typeof window=="undefined"?this:void 0},o=function(){var n=new e;return n.Class=e,n};typeof module!="undefined"&&module.exports&&typeof window=="undefined"?module.exports=e:typeof module!="undefined"&&module.exports&&typeof window!="undefined"?module.exports=o():typeof define=="function"&&define.amd?define("isMobile",[],n.isMobile=o()):n.isMobile=o()})(this);
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*!
 * VERSION: 1.18.4
 * DATE: 2016-04-26
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e.call(b[c],c):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.18.4",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,c){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var d,e,f,i,j,k,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._totalTime,q=this._cycle,r=this._duration,s=this._rawPrevTime;if(a>=n-1e-7?(this._totalTime=n,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=r,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===r&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>s||0>=a&&a>=-1e-7||s===g&&"isPause"!==this.data)&&s!==a&&(c=!0,s>g&&(e="onReverseComplete")),this._rawPrevTime=m=!b||a||s===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==p||0===r&&s>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===r&&(this._initted||!this.vars.lazy||c)&&(s>=0&&(c=!0),this._rawPrevTime=m=!b||a||s===a?a:g)),this._initted||(c=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(i=r+this._repeatDelay,this._cycle=this._totalTime/i>>0,0!==this._cycle&&this._cycle===this._totalTime/i&&a>=p&&this._cycle--,this._time=this._totalTime-this._cycle*i,this._yoyo&&0!==(1&this._cycle)&&(this._time=r-this._time),this._time>r?this._time=r:this._time<0&&(this._time=0)),this._easeType?(j=this._time/r,k=this._easeType,l=this._easePower,(1===k||3===k&&j>=.5)&&(j=1-j),3===k&&(j*=2),1===l?j*=j:2===l?j*=j*j:3===l?j*=j*j*j:4===l&&(j*=j*j*j*j),1===k?this.ratio=1-j:2===k?this.ratio=j:this._time/r<.5?this.ratio=j/2:this.ratio=1-j/2):this.ratio=this._ease.getRatio(this._time/r)),o===this._time&&!c&&q===this._cycle)return void(p!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=o,this._totalTime=p,this._rawPrevTime=s,this._cycle=q,h.lazyTweens.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/r):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&a>=0&&(this._active=!0),0===p&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===r)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,b,c),b||(this._totalTime!==p||e)&&this._callback("onUpdate")),this._cycle!==q&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===r&&this._rawPrevTime===g&&m!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&e(p,a,q),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e.call(b[c],c):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.18.4",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&n(l,a,o),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>d._startTime+d._totalDuration/d._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&0!==this._time&&(b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=new c(null,null,1,0),j=d.prototype=new a;return j.constructor=d,j.kill()._gc=!1,d.version="1.18.4",j.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},j.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},j.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},j.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},j.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:i,useFrames:this.usesFrames(),immediateRender:!1};for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new b(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&f._callback("onStart")},f},j.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},j.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=q)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),q!==this._time)return;if(y&&(q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&0!==this._totalTime&&(b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},j.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},j.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},j.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},j.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},j.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},j.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},j.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},j.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},j.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},j.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},j.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},j.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[-1>h?0:1][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.5",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._round={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);
var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._round[f]&&(i=Math.round(i)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform),i._onInitTween(l.proxy,q,g._tween),h}})}},q._roundProps=function(a,b){for(var c=this._overwriteProps,d=c.length;--d>-1;)(a[c[d]]||a.bezier||a.bezierThrough)&&(this._round[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.18.4",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q=/(?:\-|\.|\b)(\d|\.|e\-)+/g,r=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,s=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,t=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,u=/(?:\d|\-|\+|=|#|\.)*/g,v=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,x=/alpha\(opacity *=.+?\)/i,y=/^(rgb|hsl)/,z=/([A-Z])/g,A=/-([a-z])/gi,B=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,C=function(a,b){return b.toUpperCase()},D=/(?:Left|Right|Width)/i,E=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,F=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,G=/,(?=[^\)]*(?:\(|$))/gi,H=/[\s,\(]/i,I=Math.PI/180,J=180/Math.PI,K={},L=document,M=function(a){return L.createElementNS?L.createElementNS("http://www.w3.org/1999/xhtml",a):L.createElement(a)},N=M("div"),O=M("img"),P=g._internals={_specialProps:i},Q=navigator.userAgent,R=function(){var a=Q.indexOf("Android"),b=M("a");return m=-1!==Q.indexOf("Safari")&&-1===Q.indexOf("Chrome")&&(-1===a||Number(Q.substr(a+8,1))>3),o=m&&Number(Q.substr(Q.indexOf("Version/")+8,1))<6,n=-1!==Q.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Q)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Q))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),S=function(a){return v.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},T=function(a){window.console&&console.log(a)},U="",V="",W=function(a,b){b=b||N;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(V=3===d?"ms":c[d],U="-"+V.toLowerCase()+"-",V+a):null},X=L.defaultView?L.defaultView.getComputedStyle:function(){},Y=g.getStyle=function(a,b,c,d,e){var f;return R||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||X(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(z,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):S(a)},Z=P.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=D.test(c),l=a,m=N.style,n=0>d;if(n&&(d=-d),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+Y(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||L.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(N),h=parseFloat(N[k?"offsetWidth":"offsetHeight"]),l.removeChild(N),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=Z(a,c,d,e,!0))}return n?-h:h},$=P.calculateOffset=function(a,b,c){if("absolute"!==Y(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=Y(a,"margin"+d,c);return a["offset"+d]-(Z(a,b,parseFloat(e),e.replace(u,""))||0)},_=function(a,b){var c,d,e,f={};if(b=b||X(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Aa===e)&&(f[e.replace(A,C)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||za===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(A,C)]=b[c]);return R||(f.opacity=S(a)),d=Na(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Ca&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},aa=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(t,"")?f:0:$(a,g),void 0!==j[g]&&(h=new pa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ba={width:["Left","Right"],height:["Top","Bottom"]},ca=["marginLeft","marginRight","marginTop","marginBottom"],da=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||X(a))[b]||0;if(a.getBBox&&Ka(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ba[b],f=e.length;for(c=c||X(a,null);--f>-1;)d-=parseFloat(Y(a,"padding"+e[f],c,!0))||0,d-=parseFloat(Y(a,"border"+e[f]+"Width",c,!0))||0;return d},ea=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ea(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(t,"")),b.oy=parseFloat(f.replace(t,"")),b.v=a),b||a},fa=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ga=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ha=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:J)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},ia={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ja=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},ka=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),ia[a])c=ia[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(q),b){if(-1!==a.indexOf("="))return a.match(r)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ja(g+1/3,d,e),c[1]=ja(g,d,e),c[2]=ja(g-1/3,d,e);else c=a.match(q)||ia.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=ia.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},la=function(a,b){var c,d,e,f=a.match(ma)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=ka(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},ma="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in ia)ma+="|"+j+"\\b";ma=new RegExp(ma+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];ma.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=la(a[0],b),a[1]=la(a[1],b)),ma.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var na=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(ma)||[""])[0]:"",g=a.split(f).join("").match(s)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(q,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&G.test(a)){for(o=a.replace(G,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(ma)||[f])[0],m=a.split(b).join("").match(s)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&G.test(a)){for(f=a.replace(G,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(s)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},oa=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},pa=(P._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),qa=(P._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=K;for(c._transform=null,K=b,d=k=c.parse(a,b,d,e),K=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new pa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new pa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},P.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof qa||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ra=function(a,b,c,d,e,f){var g=new qa(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},sa=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"",h=new qa(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&ma.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,s,t,u,v,w,x,y,z,A,B=c.split(", ").join(",").split(" "),C=d.split(", ").join(",").split(" "),D=B.length,E=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(B=B.join(" ").replace(G,", ").split(" "),C=C.join(" ").replace(G,", ").split(" "),D=B.length),D!==C.length&&(B=(f||"").split(" "),D=B.length),h.plugin=j,h.setRatio=l,ma.lastIndex=0,m=0;D>m;m++)if(p=B[m],s=C[m],v=parseFloat(p),v||0===v)h.appendXtra("",v,fa(s,v),s.replace(r,""),E&&-1!==s.indexOf("px"),!0);else if(e&&ma.test(p))z=s.indexOf(")")+1,z=")"+(z?s.substr(z):""),A=-1!==s.indexOf("hsl")&&R,p=ka(p,A),s=ka(s,A),w=p.length+s.length>6,w&&!R&&0===s[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(C[m]).join("transparent")):(R||(w=!1),A?h.appendXtra(w?"hsla(":"hsl(",p[0],fa(s[0],p[0]),",",!1,!0).appendXtra("",p[1],fa(s[1],p[1]),"%,",!1).appendXtra("",p[2],fa(s[2],p[2]),w?"%,":"%"+z,!1):h.appendXtra(w?"rgba(":"rgb(",p[0],s[0]-p[0],",",!0,!0).appendXtra("",p[1],s[1]-p[1],",",!0).appendXtra("",p[2],s[2]-p[2],w?",":z,!0),w&&(p=p.length<4?1:p[3],h.appendXtra("",p,(s.length<4?1:s[3])-p,z,!1))),ma.lastIndex=0;else if(t=p.match(q)){if(u=s.match(r),!u||u.length!==t.length)return h;for(o=0,n=0;n<t.length;n++)y=t[n],x=p.indexOf(y,o),h.appendXtra(p.substr(o,x-o),Number(y),fa(u[n],y),"",E&&"px"===p.substr(x+y.length,2),0===n),o=x+y.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+s:s;if(-1!==d.indexOf("=")&&h.data){for(z=h.xs0+h.data.s,m=1;m<h.l;m++)z+=h["xs"+m]+h.data["xn"+m];h.e=z+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},ta=9;for(j=qa.prototype,j.l=j.pr=0;--ta>0;)j["xn"+ta]=0,j["xs"+ta]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new qa(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var ua=function(a,b){b=b||{},this.p=b.prefix?W(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||na(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},va=P._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new ua(f[d],b)},wa=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";va(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(T("Error: "+b+" js file not loaded."),f)}})}};j=ua.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(G.test(c)||G.test(b)?(h=b.replace(G,"|").split("|"),i=c.replace(G,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return sa(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(Y(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){va(a,{parser:function(a,d,e,f,g,h,i){var j=new qa(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=m||n;var xa,ya="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),za=W("transform"),Aa=U+"transform",Ba=W("transformOrigin"),Ca=null!==W("perspective"),Da=P.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Ca?g.defaultForce3D||"auto":!1},Ea=window.SVGElement,Fa=function(a,b,c){var d,e=L.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ga=L.documentElement,Ha=function(){var a,b,c,d=p||/Android/i.test(Q)&&!window.chrome;return L.createElementNS&&!d&&(a=Fa("svg",Ga),b=Fa("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ba]="50% 50%",b.style[za]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Ca),Ga.removeChild(a)),d}(),Ia=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Ma(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),b=ea(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==La&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ja=function(a){try{return a.getBBox()}catch(a){}},Ka=function(a){return!!(Ea&&a.getBBox&&a.getCTM&&Ja(a)&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},La=[1,0,0,1,0,0],Ma=function(a,b){var c,d,e,f,g,h=a._gsTransform||new Da,i=1e5;if(za?d=Y(a,Aa,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(E),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),h.x||0,h.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,(h.svg||a.getBBox&&Ka(a))&&(c&&-1!==(a.style[za]+"").indexOf("matrix")&&(d=a.style[za],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return La;for(e=(d||"").match(q)||[],ta=e.length;--ta>-1;)f=Number(e[ta]),e[ta]=(g=f-(f|=0))?(g*i+(0>g?-.5:.5)|0)/i+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Na=P.getTransform=function(a,c,d,f){if(a._gsTransform&&d&&!f)return a._gsTransform;var h,i,j,k,l,m,n=d?a._gsTransform||new Da:new Da,o=n.scaleX<0,p=2e-5,q=1e5,r=Ca?parseFloat(Y(a,Ba,c,!1,"0 0 0").split(" ")[2])||n.zOrigin||0:0,s=parseFloat(g.defaultTransformPerspective)||0;if(n.svg=!(!a.getBBox||!Ka(a)),n.svg&&(Ia(a,Y(a,Ba,e,!1,"50% 50%")+"",n,a.getAttribute("data-svg-origin")),xa=g.useSVGTransformAttr||Ha),h=Ma(a),h!==La){if(16===h.length){var t,u,v,w,x,y=h[0],z=h[1],A=h[2],B=h[3],C=h[4],D=h[5],E=h[6],F=h[7],G=h[8],H=h[9],I=h[10],K=h[12],L=h[13],M=h[14],N=h[11],O=Math.atan2(E,I);n.zOrigin&&(M=-n.zOrigin,K=G*M-h[12],L=H*M-h[13],M=I*M+n.zOrigin-h[14]),n.rotationX=O*J,O&&(w=Math.cos(-O),x=Math.sin(-O),t=C*w+G*x,u=D*w+H*x,v=E*w+I*x,G=C*-x+G*w,H=D*-x+H*w,I=E*-x+I*w,N=F*-x+N*w,C=t,D=u,E=v),O=Math.atan2(-A,I),n.rotationY=O*J,O&&(w=Math.cos(-O),x=Math.sin(-O),t=y*w-G*x,u=z*w-H*x,v=A*w-I*x,H=z*x+H*w,I=A*x+I*w,N=B*x+N*w,y=t,z=u,A=v),O=Math.atan2(z,y),n.rotation=O*J,O&&(w=Math.cos(-O),x=Math.sin(-O),y=y*w+C*x,u=z*w+D*x,D=z*-x+D*w,E=A*-x+E*w,z=u),n.rotationX&&Math.abs(n.rotationX)+Math.abs(n.rotation)>359.9&&(n.rotationX=n.rotation=0,n.rotationY=180-n.rotationY),n.scaleX=(Math.sqrt(y*y+z*z)*q+.5|0)/q,n.scaleY=(Math.sqrt(D*D+H*H)*q+.5|0)/q,n.scaleZ=(Math.sqrt(E*E+I*I)*q+.5|0)/q,n.skewX=C||D?Math.atan2(C,D)*J+n.rotation:n.skewX||0,Math.abs(n.skewX)>90&&Math.abs(n.skewX)<270&&(o?(n.scaleX*=-1,n.skewX+=n.rotation<=0?180:-180,n.rotation+=n.rotation<=0?180:-180):(n.scaleY*=-1,n.skewX+=n.skewX<=0?180:-180)),n.perspective=N?1/(0>N?-N:N):0,n.x=K,n.y=L,n.z=M,n.svg&&(n.x-=n.xOrigin-(n.xOrigin*y-n.yOrigin*C),n.y-=n.yOrigin-(n.yOrigin*z-n.xOrigin*D))}else if((!Ca||f||!h.length||n.x!==h[4]||n.y!==h[5]||!n.rotationX&&!n.rotationY)&&(void 0===n.x||"none"!==Y(a,"display",c))){var P=h.length>=6,Q=P?h[0]:1,R=h[1]||0,S=h[2]||0,T=P?h[3]:1;n.x=h[4]||0,n.y=h[5]||0,j=Math.sqrt(Q*Q+R*R),k=Math.sqrt(T*T+S*S),l=Q||R?Math.atan2(R,Q)*J:n.rotation||0,m=S||T?Math.atan2(S,T)*J+l:n.skewX||0,Math.abs(m)>90&&Math.abs(m)<270&&(o?(j*=-1,m+=0>=l?180:-180,l+=0>=l?180:-180):(k*=-1,m+=0>=m?180:-180)),n.scaleX=j,n.scaleY=k,n.rotation=l,n.skewX=m,Ca&&(n.rotationX=n.rotationY=n.z=0,n.perspective=s,n.scaleZ=1),n.svg&&(n.x-=n.xOrigin-(n.xOrigin*Q+n.yOrigin*S),n.y-=n.yOrigin-(n.xOrigin*R+n.yOrigin*T))}n.zOrigin=r;for(i in n)n[i]<p&&n[i]>-p&&(n[i]=0)}return d&&(a._gsTransform=n,n.svg&&(xa&&a.style[za]?b.delayedCall(.001,function(){Ra(a.style,za)}):!xa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),n},Oa=function(a){var b,c,d=this.data,e=-d.rotation*I,f=e+d.skewX*I,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,w=d.x+q*d.xPercent/100,x=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,w+=n-(n*h+o*i),x+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+w)+", Dy="+(o-(n*j+o*k)+x)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(F,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||v.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+w),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+x),ta=0;4>ta;ta++)z=ca[ta],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):Z(this.t,z,parseFloat(y),y.replace(u,""))||0,A=c!==d[z]?2>ta?-d.ieOffsetX:-d.ieOffsetY:2>ta?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===ta||2===ta?1:B)))+"px"}}},Pa=P.set3DTransformRatio=P.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,J=z.y,K=z.z,L=z.svg,M=z.perspective,N=z.force3D;if(((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!K&&!M&&!D&&!C&&1===G||xa&&L||!Ca)return void(B||z.skewX||L?(B*=I,x=z.skewX*I,y=1e5,b=Math.cos(B)*E,e=Math.sin(B)*E,c=Math.sin(B-x)*-F,f=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(s=Math.tan(x),s=Math.sqrt(1+s*s),c*=s,f*=s,z.skewY&&(b*=s,e*=s)),L&&(H+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,J+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset,xa&&(z.xPercent||z.yPercent)&&(p=this.t.getBBox(),H+=.01*z.xPercent*p.width,J+=.01*z.yPercent*p.height),p=1e-6,p>H&&H>-p&&(H=0),p>J&&J>-p&&(J=0)),u=(b*y|0)/y+","+(e*y|0)/y+","+(c*y|0)/y+","+(f*y|0)/y+","+H+","+J+")",L&&xa?this.t.setAttribute("transform","matrix("+u):A[za]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[za]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+J+")");if(n&&(p=1e-4,p>E&&E>-p&&(E=G=2e-5),p>F&&F>-p&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||z.skewX)B*=I,q=b=Math.cos(B),r=e=Math.sin(B),z.skewX&&(B-=z.skewX*I,q=Math.cos(B),r=Math.sin(B),"simple"===z.skewType&&(s=Math.tan(z.skewX*I),s=Math.sqrt(1+s*s),q*=s,r*=s,z.skewY&&(b*=s,e*=s))),c=-r,f=q;else{if(!(D||C||1!==G||M||L))return void(A[za]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+J+"px,"+K+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));b=f=1,c=e=0}j=1,d=g=h=i=k=l=0,m=M?-1/M:0,o=z.zOrigin,p=1e-6,v=",",w="0",B=D*I,B&&(q=Math.cos(B),r=Math.sin(B),h=-r,k=m*-r,d=b*r,g=e*r,j=q,m*=q,b*=q,e*=q),B=C*I,B&&(q=Math.cos(B),r=Math.sin(B),s=c*q+d*r,t=f*q+g*r,i=j*r,l=m*r,d=c*-r+d*q,g=f*-r+g*q,j*=q,m*=q,c=s,f=t),1!==G&&(d*=G,g*=G,j*=G,m*=G),1!==F&&(c*=F,f*=F,i*=F,l*=F),1!==E&&(b*=E,e*=E,h*=E,k*=E),(o||L)&&(o&&(H+=d*-o,J+=g*-o,K+=j*-o+o),L&&(H+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,J+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset),p>H&&H>-p&&(H=w),p>J&&J>-p&&(J=w),p>K&&K>-p&&(K=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(p>b&&b>-p?w:b)+v+(p>e&&e>-p?w:e)+v+(p>h&&h>-p?w:h),u+=v+(p>k&&k>-p?w:k)+v+(p>c&&c>-p?w:c)+v+(p>f&&f>-p?w:f),C||D||1!==G?(u+=v+(p>i&&i>-p?w:i)+v+(p>l&&l>-p?w:l)+v+(p>d&&d>-p?w:d),u+=v+(p>g&&g>-p?w:g)+v+(p>j&&j>-p?w:j)+v+(p>m&&m>-p?w:m)+v):u+=",0,0,0,0,1,0,",u+=H+v+J+v+K+v+(M?1+-K/M:1)+")",A[za]=u};j=Da.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,va("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k,l,m,n,o,p,q,r,s,t=a._gsTransform,u=a.style,v=1e-6,w=ya.length,x=i,y={},z="transformOrigin";if(i.display?(l=Y(a,"display"),u.display="block",j=Na(a,e,!0,i.parseTransform),u.display=l):j=Na(a,e,!0,i.parseTransform),d._transform=j,"string"==typeof x.transform&&za)l=N.style,l[za]=x.transform,l.display="block",l.position="absolute",L.body.appendChild(N),k=Na(N,null,!1),j.svg&&(q=j.xOrigin,r=j.yOrigin,k.x-=j.xOffset,k.y-=j.yOffset,(x.transformOrigin||x.svgOrigin)&&(m={},Ia(a,ea(x.transformOrigin),m,x.svgOrigin,x.smoothOrigin,!0),q=m.xOrigin,r=m.yOrigin,k.x-=m.xOffset-j.xOffset,k.y-=m.yOffset-j.yOffset),(q||r)&&(s=Ma(N),k.x-=q-(q*s[0]+r*s[2]),k.y-=r-(q*s[1]+r*s[3]))),L.body.removeChild(N),k.perspective||(k.perspective=j.perspective),null!=x.xPercent&&(k.xPercent=ga(x.xPercent,j.xPercent)),null!=x.yPercent&&(k.yPercent=ga(x.yPercent,j.yPercent));else if("object"==typeof x){if(k={scaleX:ga(null!=x.scaleX?x.scaleX:x.scale,j.scaleX),scaleY:ga(null!=x.scaleY?x.scaleY:x.scale,j.scaleY),scaleZ:ga(x.scaleZ,j.scaleZ),x:ga(x.x,j.x),y:ga(x.y,j.y),z:ga(x.z,j.z),xPercent:ga(x.xPercent,j.xPercent),yPercent:ga(x.yPercent,j.yPercent),perspective:ga(x.transformPerspective,j.perspective)},p=x.directionalRotation,null!=p)if("object"==typeof p)for(l in p)x[l]=p[l];else x.rotation=p;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(k.x=0,k.xPercent=ga(x.x,j.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(k.y=0,k.yPercent=ga(x.y,j.yPercent)),k.rotation=ha("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:j.rotation-j.skewY,j.rotation-j.skewY,"rotation",y),Ca&&(k.rotationX=ha("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":j.rotationX||0,j.rotationX,"rotationX",y),k.rotationY=ha("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":j.rotationY||0,j.rotationY,"rotationY",y)),k.skewX=ha(x.skewX,j.skewX-j.skewY),(k.skewY=ha(x.skewY,j.skewY))&&(k.skewX+=k.skewY,k.rotation+=k.skewY)}for(Ca&&null!=x.force3D&&(j.force3D=x.force3D,o=!0),j.skewType=x.skewType||j.skewType||g.defaultSkewType,n=j.force3D||j.z||j.rotationX||j.rotationY||k.z||k.rotationX||k.rotationY||k.perspective,n||null==x.scale||(k.scaleZ=1);--w>-1;)c=ya[w],m=k[c]-j[c],(m>v||-v>m||null!=x[c]||null!=K[c])&&(o=!0,f=new qa(j,c,j[c],m,f),c in y&&(f.e=y[c]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return m=x.transformOrigin,j.svg&&(m||x.svgOrigin)&&(q=j.xOffset,r=j.yOffset,Ia(a,ea(m),k,x.svgOrigin,x.smoothOrigin),f=ra(j,"xOrigin",(t?j:k).xOrigin,k.xOrigin,f,z),f=ra(j,"yOrigin",(t?j:k).yOrigin,k.yOrigin,f,z),(q!==j.xOffset||r!==j.yOffset)&&(f=ra(j,"xOffset",t?q:j.xOffset,j.xOffset,f,z),f=ra(j,"yOffset",t?r:j.yOffset,j.yOffset,f,z)),m=xa?null:"0px 0px"),(m||Ca&&n&&j.zOrigin)&&(za?(o=!0,c=Ba,m=(m||Y(a,c,e,!1,"50% 50%"))+"",f=new qa(u,c,0,0,f,-1,z),f.b=u[c],f.plugin=h,Ca?(l=j.zOrigin,m=m.split(" "),j.zOrigin=(m.length>2&&(0===l||"0px"!==m[2])?parseFloat(m[2]):l)||0,f.xs0=f.e=m[0]+" "+(m[1]||"50%")+" 0px",f=new qa(j,"zOrigin",0,0,f,-1,f.n),f.b=l,f.xs0=f.e=j.zOrigin):f.xs0=f.e=m):ea(m+"",j)),o&&(d._transformType=j.svg&&xa||!n&&3!==this._transformType?2:3),f},prefix:!0}),va("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),va("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;
for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=W(y[j])),m=l=Y(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=Z(a,"borderLeft",o,t),w=Z(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=Z(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=sa(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:na("0px 0px 0px 0px",!1,!0)}),va("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return sa(a.style,c,this.format(Y(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:na("0px 0px",!1,!0)}),va("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||X(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=Y(a,"backgroundImage").replace(B,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),O.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-O.width:a.offsetHeight-O.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ea}),va("backgroundSize",{defaultValue:"0 0",formatter:ea}),va("perspective",{defaultValue:"0px",prefix:!0}),va("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),va("transformStyle",{prefix:!0}),va("backfaceVisibility",{prefix:!0}),va("userSelect",{prefix:!0}),va("margin",{parser:oa("marginTop,marginRight,marginBottom,marginLeft")}),va("padding",{parser:oa("paddingTop,paddingRight,paddingBottom,paddingLeft")}),va("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(Y(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),va("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),va("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),va("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){return this.parseComplex(a.style,this.format(Y(a,"borderTopWidth",e,!1,"0px")+" "+Y(a,"borderTopStyle",e,!1,"solid")+" "+Y(a,"borderTopColor",e,!1,"#000")),this.format(b),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(ma)||["#000"])[0]}}),va("borderWidth",{parser:oa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),va("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new qa(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Qa=function(a){var b,c=this.t,d=c.filter||Y(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!Y(this.data,"filter")):(c.filter=d.replace(x,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(v,"opacity="+e))};va("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(Y(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===Y(a,"visibility",e)&&0!==b&&(h=0),R?f=new qa(i,"opacity",h,b-h,f):(f=new qa(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Qa),j&&(f=new qa(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Ra=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(z,"-$1").toLowerCase())):a.removeAttribute(b))},Sa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Ra(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};va("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new qa(a,d,0,0,g,2),g.setRatio=Sa,g.pr=-11,c=!0,g.b=o,k=_(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=aa(a,k,_(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Ta=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ba:i[c].p),Ra(g,c);e&&(Ra(g,za),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(va("clearProps",{parser:function(a,b,d,e,f){return f=new qa(a,d,0,0,f,2),f.setRatio=Ta,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),ta=j.length;ta--;)wa(j[ta]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h){if(!a.nodeType)return!1;this._target=a,this._tween=h,this._vars=b,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=X(a,""),f=this._overwriteProps;var j,n,p,q,r,s,t,u,v,x=a.style;if(l&&""===x.zIndex&&(j=Y(a,"zIndex",e),("auto"===j||""===j)&&this._addLazySet(x,"zIndex",0)),"string"==typeof b&&(q=x.cssText,j=_(a,e),x.cssText=q+";"+b,j=aa(a,j,_(a)).difs,!R&&w.test(b)&&(j.opacity=parseFloat(RegExp.$1)),b=j,x.cssText=q),b.className?this._firstPT=n=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=n=this.parse(a,b,null),this._transformType){for(v=3===this._transformType,za?m&&(l=!0,""===x.zIndex&&(t=Y(a,"zIndex",e),("auto"===t||""===t)&&this._addLazySet(x,"zIndex",0)),o&&this._addLazySet(x,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(v?"visible":"hidden"))):x.zoom=1,p=n;p&&p._next;)p=p._next;u=new qa(a,"transform",0,0,null,2),this._linkCSSP(u,null,p),u.setRatio=za?Pa:Oa,u.data=this._transform||Na(a,e,!0),u.tween=h,u.pr=-1,f.pop()}if(c){for(;n;){for(s=n._next,p=q;p&&p.pr>n.pr;)p=p._next;(n._prev=p?p._prev:r)?n._prev._next=n:q=n,(n._next=p)?p._prev=n:r=n,n=s}this._firstPT=q}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,q,r,s=a.style;for(g in b)n=b[g],h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=Y(a,g,e)+"",q="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||q&&y.test(n)?(q||(n=ka(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=sa(s,g,m,n,!0,"transparent",c,0,f)):q&&H.test(n)?c=sa(s,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=da(a,g,e),o="px"):"left"===g||"top"===g?(j=$(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),r=q&&"="===n.charAt(1),r?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(u,"")):(l=parseFloat(n),p=q?n.replace(u,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(r?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=Z(a,g,j,o),"%"===p?(j/=Z(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=Z(a,g,1,p):"px"!==p&&(l=Z(a,g,l,p),p="px"),r&&(l||0===l)&&(n=l+j+p)),r&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==s[g]&&(n||n+""!="NaN"&&null!=n)?(c=new qa(s,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):T("invalid "+g+" tween value: "+b[g]):(c=new qa(s,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Na(this._target,e,!0),this._transformType=this._transform.svg&&xa||!a&&3!==this._transformType?2:3};var Ua=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new qa(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ua,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}return b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),a.prototype._kill.call(this,f)};var Va=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Va(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(_(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Va(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Va(a,k,m),i.render(c,!0,!0),Va(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=aa(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.r=1),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=1;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._roundProps(h,!0):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,!0),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function(a,b,c){var d;if("function"!=typeof a.setAttribute)return!1;for(d in b)this._addTween(a,"setAttribute",a.getAttribute(d)+"",b[d]+"",d,!1,d),this._overwriteProps.push(d);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(a,b,c){"object"!=typeof b&&(b={rotation:b}),this.finals={};var d,e,f,g,h,i,j=b.useRadians===!0?2*Math.PI:360,k=1e-6;for(d in b)"useRadians"!==d&&(i=(b[d]+"").split("_"),e=i[0],f=parseFloat("function"!=typeof a[d]?a[d]:a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]()),g=this.finals[d]="string"==typeof e&&"="===e.charAt(1)?f+parseInt(e.charAt(0)+"1",10)*Number(e.substr(2)):Number(e)||0,h=g-f,i.length&&(e=i.join("_"),-1!==e.indexOf("short")&&(h%=j,h!==h%(j/2)&&(h=0>h?h+j:h-j)),-1!==e.indexOf("_cw")&&0>h?h=(h+9999999999*j)%j-(h/j|0)*j:-1!==e.indexOf("ccw")&&h>0&&(h=(h-9999999999*j)%j-(h/j|0)*j)),(h>k||-k>h)&&(this._addTween(a,d,f,f+h,d),this._overwriteProps.push(d)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!c.TweenLite){var d,e,f,g,h,i=function(a){var b,d=a.split("."),e=c;for(b=0;b<d.length;b++)e[d[b]]=e=e[d[b]]||{};return e},j=i("com.greensock"),k=1e-10,l=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},m=function(){},n=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),o={},p=function(d,e,f,g){this.sc=o[d]?o[d].sc:[],o[d]=this,this.gsClass=null,this.func=f;var h=[];this.check=function(j){for(var k,l,m,n,q,r=e.length,s=r;--r>-1;)(k=o[e[r]]||new p(e[r],[])).gsClass?(h[r]=k.gsClass,s--):j&&k.sc.push(this);if(0===s&&f)for(l=("com.greensock."+d).split("."),m=l.pop(),n=i(l.join("."))[m]=this.gsClass=f.apply(f,h),g&&(c[m]=n,q="undefined"!=typeof module&&module.exports,!q&&"function"==typeof define&&define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return n}):d===b&&q&&(module.exports=n)),r=0;r<this.sc.length;r++)this.sc[r].check()},this.check(!0)},q=a._gsDefine=function(a,b,c,d){return new p(a,b,c,d)},r=j._class=function(a,b,c){return b=b||function(){},q(a,[],function(){return b},c),b};q.globals=c;var s=[0,0,1,1],t=[],u=r("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?s.concat(b):s},!0),v=u.map={},w=u.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),k=i.length,l=(c||"easeIn,easeOut,easeInOut").split(",");--k>-1;)for(f=i[k],e=d?r("easing."+f,null,!0):j.easing[f]||{},g=l.length;--g>-1;)h=l[g],v[f+"."+h]=v[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(f=u.prototype,f._calcEnd=!1,f.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},d=["Linear","Quad","Cubic","Quart","Quint,Strong"],e=d.length;--e>-1;)f=d[e]+",Power"+e,w(new u(null,null,1,e),f,"easeOut",!0),w(new u(null,null,2,e),f,"easeIn"+(0===e?",easeNone":"")),w(new u(null,null,3,e),f,"easeInOut");v.linear=j.easing.Linear.easeIn,v.swing=j.easing.Quad.easeInOut;var x=r("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});f=x.prototype,f.addEventListener=function(a,b,c,d,e){e=e||0;var f,i,j=this._listeners[a],k=0;for(null==j&&(this._listeners[a]=j=[]),i=j.length;--i>-1;)f=j[i],f.c===b&&f.s===c?j.splice(i,1):0===k&&f.pr<e&&(k=i+1);j.splice(k,0,{c:b,s:c,up:d,pr:e}),this!==g||h||g.wake()},f.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},f.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var y=a.requestAnimationFrame,z=a.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},B=A();for(d=["ms","moz","webkit","o"],e=d.length;--e>-1&&!y;)y=a[d[e]+"RequestAnimationFrame"],z=a[d[e]+"CancelAnimationFrame"]||a[d[e]+"CancelRequestAnimationFrame"];r("Ticker",function(a,b){var c,d,e,f,i,j=this,l=A(),n=b!==!1&&y?"auto":!1,o=500,p=33,q="tick",r=function(a){var b,g,h=A()-B;h>o&&(l+=h-p),B+=h,j.time=(B-l)/1e3,b=j.time-i,(!c||b>0||a===!0)&&(j.frame++,i+=b+(b>=f?.004:f-b),g=!0),a!==!0&&(e=d(r)),g&&j.dispatchEvent(q)};x.call(j),j.time=j.frame=0,j.tick=function(){r(!0)},j.lagSmoothing=function(a,b){o=a||1/k,p=Math.min(b,o,0)},j.sleep=function(){null!=e&&(n&&z?z(e):clearTimeout(e),d=m,e=null,j===g&&(h=!1))},j.wake=function(a){null!==e?j.sleep():a?l+=-B+(B=A()):j.frame>10&&(B=A()-o+5),d=0===c?m:n&&y?y:function(a){return setTimeout(a,1e3*(i-j.time)+1|0)},j===g&&(h=!0),r(2)},j.fps=function(a){return arguments.length?(c=a,f=1/(c||60),i=this.time+f,void j.wake()):c},j.useRAF=function(a){return arguments.length?(j.sleep(),n=a,void j.fps(c)):n},j.fps(a),setTimeout(function(){"auto"===n&&j.frame<5&&"hidden"!==document.visibilityState&&j.useRAF(!1)},1500)}),f=j.Ticker.prototype=new j.events.EventDispatcher,f.constructor=j.Ticker;var C=r("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,V){h||g.wake();var c=this.vars.useFrames?U:V;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});g=C.ticker=new j.Ticker,f=C.prototype,f._dirty=f._gc=f._initted=f._paused=!1,f._totalTime=f._time=0,f._rawPrevTime=-1,f._next=f._last=f._onUpdate=f._timeline=f.timeline=null,f._paused=!1;var D=function(){h&&A()-B>2e3&&g.wake(),setTimeout(D,2e3)};D(),f.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},f.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},f.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},f.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},f.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},f.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},f.render=function(a,b,c){},f.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},f.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime())>=c&&a<c+this.totalDuration()/this._timeScale},f._enabled=function(a,b){return h||g.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},f._kill=function(a,b){return this._enabled(!1,!1)},f.kill=function(a,b){return this._kill(a,b),this},f._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},f._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},f._callback=function(a){var b=this.vars;b[a].apply(b[a+"Scope"]||b.callbackScope||this,b[a+"Params"]||t)},f.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=n(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},f.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},f.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},f.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},f.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},f.totalTime=function(a,b,c){if(h||g.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(I.length&&X(),this.render(a,b,!1),I.length&&X())}return this},f.progress=f.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},f.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},f.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},f.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||k,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},f.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},f.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(h||a||g.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var E=r("core.SimpleTimeline",function(a){C.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});f=E.prototype=new C,f.constructor=E,f.kill()._gc=!1,f._first=f._last=f._recent=null,f._sortChildren=!1,f.add=f.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},f._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},f.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},f.rawTime=function(){return h||g.wake(),this._totalTime};var F=r("TweenLite",function(b,c,d){if(C.call(this,c,d),this.render=F.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:F.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?T[F.defaultOverwrite]:"number"==typeof i?i>>0:T[i],(h||b instanceof Array||b.push&&n(b))&&"number"!=typeof b[0])for(this._targets=g=l(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(l(f))):(this._siblings[e]=Y(f,this,!1),1===i&&this._siblings[e].length>1&&$(f,this,null,1,this._siblings[e])):(f=g[e--]=F.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Y(b,this,!1),1===i&&this._siblings.length>1&&$(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-k,this.render(Math.min(0,-this._delay)))},!0),G=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},H=function(a,b){var c,d={};for(c in a)S[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!P[c]||P[c]&&P[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};f=F.prototype=new C,f.constructor=F,f.kill()._gc=!1,f.ratio=0,f._firstPT=f._targets=f._overwrittenProps=f._startAt=null,f._notifyPluginsOfEnabled=f._lazy=!1,F.version="1.18.4",F.defaultEase=f._ease=new u(null,null,1,1),F.defaultOverwrite="auto",F.ticker=g,F.autoSleep=120,F.lagSmoothing=function(a,b){g.lagSmoothing(a,b)},F.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(F.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)};var I=[],J={},K=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?a?this.join(""):this.start:c.c*a+c.s,c.r?b=Math.round(b):d>b&&b>-d&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},M=function(a,b,c,d){var e,f,g,h,i,j,k,l=[a,b],m=0,n="",o=0;for(l.start=a,c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(K)||[],f=b.match(K)||[],d&&(d._next=null,d.blob=1,l._firstPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,r:o&&4>o}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=L,l},N=function(a,b,c,d,e,f,g,h){var i,j,k="get"===c?a[b]:c,l=typeof a[b],m="string"==typeof d&&"="===d.charAt(1),n={t:a,p:b,s:k,f:"function"===l,pg:0,n:e||b,r:f,pr:0,c:m?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-k||0};return"number"!==l&&("function"===l&&"get"===c&&(j=b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),
n.s=k=g?a[j](g):a[j]()),"string"==typeof k&&(g||isNaN(k))?(n.fp=g,i=M(k,d,h||F.defaultStringFilter,n),n={t:i,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0}):m||(n.s=parseFloat(k),n.c=parseFloat(d)-n.s||0)),n.c?((n._next=this._firstPT)&&(n._next._prev=n),this._firstPT=n,n):void 0},O=F._internals={isArray:n,isSelector:G,lazyTweens:I,blobDif:M},P=F._plugins={},Q=O.tweenLookup={},R=0,S=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},T={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},U=C._rootFramesTimeline=new E,V=C._rootTimeline=new E,W=30,X=O.lazyRender=function(){var a,b=I.length;for(J={};--b>-1;)a=I[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);I.length=0};V._startTime=g.time,U._startTime=g.frame,V._active=U._active=!0,setTimeout(X,1),C._updateRoot=F.render=function(){var a,b,c;if(I.length&&X(),V.render((g.time-V._startTime)*V._timeScale,!1,!1),U.render((g.frame-U._startTime)*U._timeScale,!1,!1),I.length&&X(),g.frame>=W){W=g.frame+(parseInt(F.autoSleep,10)||120);for(c in Q){for(b=Q[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete Q[c]}if(c=V._first,(!c||c._paused)&&F.autoSleep&&!U._first&&1===g._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||g.sleep()}}},g.addEventListener("tick",C._updateRoot);var Y=function(a,b,c){var d,e,f=a._gsTweenID;if(Q[f||(a._gsTweenID=f="t"+R++)]||(Q[f]={target:a,tweens:[]}),b&&(d=Q[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return Q[f].tweens},Z=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=F.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},$=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,l=b._startTime+k,m=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||_(b,0,o),0===_(h,j,o)&&(m[n++]=h)):h._startTime<=l&&h._startTime+h.totalDuration()/h._timeScale>l&&((o||!h._initted)&&l-h._startTime<=2e-10||(m[n++]=h)));for(f=n;--f>-1;)if(h=m[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!Z(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},_=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*k>f-b?k:(f+=a.totalDuration()/a._timeScale/e)>b+k?0:f-b-k};f._init=function(){var a,b,c,d,e,f=this.vars,g=this._overwrittenProps,h=this._duration,i=!!f.immediateRender,j=f.ease;if(f.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in f.startAt)e[d]=f.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=i&&f.lazy!==!1,e.startAt=e.delay=null,this._startAt=F.to(this.target,0,e),i)if(this._time>0)this._startAt=null;else if(0!==h)return}else if(f.runBackwards&&0!==h)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(i=!1),c={};for(d in f)S[d]&&"autoCSS"!==d||(c[d]=f[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=i&&f.lazy!==!1,c.immediateRender=i,this._startAt=F.to(this.target,0,c),i){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=j=j?j instanceof u?j:"function"==typeof j?new u(j,f.easeParams):v[j]||F.defaultEase:F.defaultEase,f.easeParams instanceof Array&&j.config&&(this._ease=j.config.apply(j,f.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(a=this._targets.length;--a>-1;)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],g?g[a]:null)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,g);if(b&&F._onPluginEvent("_onInitAllProps",this),g&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),f.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=f.onUpdate,this._initted=!0},f._initProps=function(b,c,d,e){var f,g,h,i,j,k;if(null==b)return!1;J[b._gsTweenID]&&X(),this.vars.css||b.style&&b!==a&&b.nodeType&&P.css&&this.vars.autoCSS!==!1&&H(this.vars,b);for(f in this.vars)if(k=this.vars[f],S[f])k&&(k instanceof Array||k.push&&n(k))&&-1!==k.join("").indexOf("{self}")&&(this.vars[f]=k=this._swapSelfInParams(k,this));else if(P[f]&&(i=new P[f])._onInitTween(b,this.vars[f],this)){for(this._firstPT=j={_next:this._firstPT,t:i,p:"setRatio",s:0,c:1,f:1,n:f,pg:1,pr:i._priority},g=i._overwriteProps.length;--g>-1;)c[i._overwriteProps[g]]=this._firstPT;(i._priority||i._onInitAllProps)&&(h=!0),(i._onDisable||i._onEnable)&&(this._notifyPluginsOfEnabled=!0),j._next&&(j._next._prev=j)}else c[f]=N.call(this,b,f,"get",k,f,0,null,this.vars.stringFilter);return e&&this._kill(e,b)?this._initProps(b,c,d,e):this._overwrite>1&&this._firstPT&&d.length>1&&$(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(J[b._gsTweenID]=!0),h)},f.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===k&&"isPause"!==this.data)&&j!==a&&(c=!0,j>k&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:k);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==k||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:k)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var l=a/i,m=this._easeType,n=this._easePower;(1===m||3===m&&l>=.5)&&(l=1-l),3===m&&(l*=2),1===n?l*=l:2===n?l*=l*l:3===n?l*=l*l*l:4===n&&(l*=l*l*l*l),1===m?this.ratio=1-l:2===m?this.ratio=l:.5>a/i?this.ratio=l/2:this.ratio=1-l/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,I.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===k&&g!==k&&(this._rawPrevTime=0))}},f._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:F.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((n(b)||G(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(F.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!Z(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},f.invalidate=function(){return this._notifyPluginsOfEnabled&&F._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-k,this.render(Math.min(0,-this._delay))),this},f._enabled=function(a,b){if(h||g.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Y(d[c],this,!0);else this._siblings=Y(this.target,this,!0)}return C.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?F._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},F.to=function(a,b,c){return new F(a,b,c)},F.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new F(a,b,c)},F.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new F(a,b,d)},F.delayedCall=function(a,b,c,d,e){return new F(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},F.set=function(a,b){return new F(a,0,b)},F.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:F.selector(a)||a;var c,d,e,f;if((n(a)||G(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(F.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Y(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},F.killTweensOf=F.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=F.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var aa=r("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=aa.prototype},!0);if(f=aa.prototype,aa.version="1.18.0",aa.API=2,f._firstPT=null,f._addTween=N,f.setRatio=L,f._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},f._roundProps=function(a,b){for(var c=this._firstPT;c;)(a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")])&&(c.r=b),c=c._next},F._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},aa.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===aa.API&&(P[(new a[b])._propName]=a[b]);return!0},q.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},g=r("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){aa.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new aa(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,aa.activate([g]),g},d=a._gsQueue){for(e=0;e<d.length;e++)d[e]();for(f in o)o[f].func||a.console.log("GSAP encountered missing dependency: com.greensock."+f)}h=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 * VERSION: 0.16.4
 * DATE: 2018-05-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite","plugins.CSSPlugin"],function(a,b,c){var d,e,f,g,h,i,j,k,l={css:{},data:"_draggable"},m={css:{},data:"_draggable"},n={css:{},data:"_draggable"},o={css:{}},p=_gsScope._gsDefine.globals,q={},r={style:{}},s=_gsScope.document||{createElement:function(){return r}},t=s.documentElement||{},u=function(a){return s.createElementNS?s.createElementNS("http://www.w3.org/1999/xhtml",a):s.createElement(a)},v=u("div"),w=[],x=function(){return!1},y=180/Math.PI,z=999999999999999,A=Date.now||function(){return(new Date).getTime()},B=!(s.addEventListener||!s.all),C=s.createElement("div"),D=[],E={},F=0,G=/^(?:a|input|textarea|button|select)$/i,H=0,I=_gsScope.navigator&&-1!==_gsScope.navigator.userAgent.toLowerCase().indexOf("android"),J=0,K={},L={},M=function(a){if("string"==typeof a&&(a=b.selector(a)),!a||a.nodeType)return[a];var c,d=[],e=a.length;for(c=0;c!==e;d.push(a[c++]));return d},N=function(a,b){var c,d={};if(b)for(c in a)d[c]=a[c]*b;else for(c in a)d[c]=a[c];return d},O=function(){for(var a=D.length;--a>-1;)D[a]()},P=function(a){D.push(a),1===D.length&&b.ticker.addEventListener("tick",O,this,!1,1)},Q=function(a){for(var c=D.length;--c>-1;)D[c]===a&&D.splice(c,1);b.to(R,0,{overwrite:"all",delay:15,onComplete:R,data:"_draggable"})},R=function(){D.length||b.ticker.removeEventListener("tick",O)},S=function(a,b){var c;for(c in b)void 0===a[c]&&(a[c]=b[c]);return a},T=function(){return null!=window.pageYOffset?window.pageYOffset:null!=s.scrollTop?s.scrollTop:t.scrollTop||s.body.scrollTop||0},U=function(){return null!=window.pageXOffset?window.pageXOffset:null!=s.scrollLeft?s.scrollLeft:t.scrollLeft||s.body.scrollLeft||0},V=function(a,b){Ia(a,"scroll",b),X(a.parentNode)||V(a.parentNode,b)},W=function(a,b){Ja(a,"scroll",b),X(a.parentNode)||W(a.parentNode,b)},X=function(a){return!(a&&a!==t&&a!==s&&a!==s.body&&a!==window&&a.nodeType&&a.parentNode)},Y=function(a,b){var c="x"===b?"Width":"Height",d="scroll"+c,e="client"+c,f=s.body;return Math.max(0,X(a)?Math.max(t[d],f[d])-(window["inner"+c]||t[e]||f[e]):a[d]-a[e])},Z=function(a){var b=X(a),c=Y(a,"x"),d=Y(a,"y");b?a=L:Z(a.parentNode),a._gsMaxScrollX=c,a._gsMaxScrollY=d,a._gsScrollX=a.scrollLeft||0,a._gsScrollY=a.scrollTop||0},$=function(a,b){return a=a||window.event,q.pageX=a.clientX+s.body.scrollLeft+t.scrollLeft,q.pageY=a.clientY+s.body.scrollTop+t.scrollTop,b&&(a.returnValue=!1),q},_=function(a){return a?("string"==typeof a&&(a=b.selector(a)),a.length&&a!==window&&a[0]&&a[0].style&&!a.nodeType&&(a=a[0]),a===window||a.nodeType&&a.style?a:null):a},aa=function(a,b){var c,e,f,g=a.style;if(void 0===g[b]){for(f=["O","Moz","ms","Ms","Webkit"],e=5,c=b.charAt(0).toUpperCase()+b.substr(1);--e>-1&&void 0===g[f[e]+c];);if(0>e)return"";d=3===e?"ms":f[e],b=d+c}return b},ba=function(a,b,c){var d=a.style;d&&(void 0===d[b]&&(b=aa(a,b)),null==c?d.removeProperty?d.removeProperty(b.replace(/([A-Z])/g,"-$1").toLowerCase()):d.removeAttribute(b):void 0!==d[b]&&(d[b]=c))},ca=s.defaultView?s.defaultView.getComputedStyle:x,da=/(?:Left|Right|Width)/i,ea=/(?:\d|\-|\+|=|#|\.)*/g,fa=function(a,b,c,d,e){if("px"===d||!d)return c;if("auto"===d||!c)return 0;var f,g=da.test(b),h=a,i=v.style,j=0>c;return j&&(c=-c),"%"===d&&-1!==b.indexOf("border")?f=c/100*(g?a.clientWidth:a.clientHeight):(i.cssText="border:0 solid red;position:"+ha(a,"position",!0)+";line-height:0;","%"!==d&&h.appendChild?i[g?"borderLeftWidth":"borderTopWidth"]=c+d:(h=a.parentNode||s.body,i[g?"width":"height"]=c+d),h.appendChild(v),f=parseFloat(v[g?"offsetWidth":"offsetHeight"]),h.removeChild(v),0!==f||e||(f=fa(a,b,c,d,!0))),j?-f:f},ga=function(a,b){if("absolute"!==ha(a,"position",!0))return 0;var c="left"===b?"Left":"Top",d=ha(a,"margin"+c,!0);return a["offset"+c]-(fa(a,b,parseFloat(d),(d+"").replace(ea,""))||0)},ha=function(a,b,c){var d,e=(a._gsTransform||{})[b];return e||0===e?e:(a.style[b]?e=a.style[b]:(d=ca(a))?(e=d.getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase()),e=e||d.length?e:d[b]):a.currentStyle&&(e=a.currentStyle[b]),"auto"!==e||"top"!==b&&"left"!==b||(e=ga(a,b)),c?e:parseFloat(e)||0)},ia=function(a,b,c){var d=a.vars,e=d[c],f=a._listeners[b];"function"==typeof e&&e.apply(d[c+"Scope"]||d.callbackScope||a,d[c+"Params"]||[a.pointerEvent]),f&&a.dispatchEvent(b)},ja=function(a,b){var c,d,e,f=_(a);return f?Da(f,b):void 0!==a.left?(e=xa(b),{left:a.left-e.x,top:a.top-e.y,width:a.width,height:a.height}):(d=a.min||a.minX||a.minRotation||0,c=a.min||a.minY||0,{left:d,top:c,width:(a.max||a.maxX||a.maxRotation||0)-d,height:(a.max||a.maxY||0)-c})},ka=function(){if(!s.createElementNS)return g=0,void(h=!1);var a,b,c,d,e=u("div"),f=s.createElementNS("http://www.w3.org/2000/svg","svg"),l=u("div"),m=e.style,n=s.body||t,o="flex"===ha(n,"display",!0);s.body&&na&&(m.position="absolute",n.appendChild(l),l.appendChild(e),d=e.offsetParent,l.style[na]="rotate(1deg)",k=e.offsetParent===d,l.style.position="absolute",m.height="10px",d=e.offsetTop,l.style.border="5px solid red",j=d!==e.offsetTop,n.removeChild(l)),m=f.style,f.setAttributeNS(null,"width","400px"),f.setAttributeNS(null,"height","400px"),f.setAttributeNS(null,"viewBox","0 0 400 400"),m.display="block",m.boxSizing="border-box",m.border="0px solid red",m.transform="none",e.style.cssText="width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;",n.appendChild(e),e.appendChild(f),c=f.createSVGPoint().matrixTransform(f.getScreenCTM()),b=c.y,e.scrollTop=100,c.x=c.y=0,c=c.matrixTransform(f.getScreenCTM()),i=b-c.y<100.1?0:b-c.y-150,e.removeChild(f),n.removeChild(e),n.appendChild(f),o&&(n.style.display="block"),a=f.getScreenCTM(),b=a.e,m.border="50px solid red",a=f.getScreenCTM(),0===b&&0===a.e&&0===a.f&&1===a.a?(g=1,h=!0):(g=b!==a.e?1:0,h=1!==a.a),o&&(n.style.display="flex"),n.removeChild(f)},la=""!==aa(v,"perspective"),ma=aa(v,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),na=aa(v,"transform"),oa=na.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),pa={},qa={},ra=_gsScope.SVGElement,sa=function(a){return!!(ra&&"function"==typeof a.getBBox&&a.getCTM&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},ta=(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent))&&parseFloat(RegExp.$1)<11,ua=[],va=[],wa=function(a){if(!a.getBoundingClientRect||!a.parentNode||!na)return{offsetTop:0,offsetLeft:0,scaleX:1,scaleY:1,offsetParent:t};if(Sa.cacheSVGData!==!1&&a._dCache&&a._dCache.lastUpdate===b.ticker.frame)return a._dCache;var c,d,e,f,j,k,l,m,n,o,p,q,r=a,u=ya(a);if(u.lastUpdate=b.ticker.frame,a.getBBox&&!u.isSVGRoot){for(r=a.parentNode,c=a.getBBox();r&&"svg"!==(r.nodeName+"").toLowerCase();)r=r.parentNode;return f=wa(r),u.offsetTop=c.y*f.scaleY,u.offsetLeft=c.x*f.scaleX,u.scaleX=f.scaleX,u.scaleY=f.scaleY,u.offsetParent=r||t,u}for(e=u.offsetParent,e===s.body&&(e=t),va.length=ua.length=0;r&&(j=ha(r,na,!0),"matrix(1, 0, 0, 1, 0, 0)"!==j&&"none"!==j&&"translate3d(0px, 0px, 0px)"!==j&&(va.push(r),ua.push(r.style[na]),r.style[na]="none"),r!==e);)r=r.parentNode;for(d=e.getBoundingClientRect(),j=a.getScreenCTM(),m=a.createSVGPoint(),l=m.matrixTransform(j),u.scaleX=Math.sqrt(j.a*j.a+j.b*j.b),u.scaleY=Math.sqrt(j.d*j.d+j.c*j.c),void 0===g&&ka(),u.borderBox&&!h&&a.getAttribute("width")&&(f=ca(a)||{},n=parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth)||0,o=parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth)||0,p=parseFloat(f.width)||0,q=parseFloat(f.height)||0,u.scaleX*=(p-n)/p,u.scaleY*=(q-o)/q),i?(c=a.getBoundingClientRect(),u.offsetLeft=c.left-d.left,u.offsetTop=c.top-d.top):(u.offsetLeft=l.x-d.left,u.offsetTop=l.y-d.top),u.offsetParent=e,k=va.length;--k>-1;)va[k].style[na]=ua[k];return u},xa=function(a,c){if(c=c||{},!a||a===t||!a.parentNode||a===window)return{x:0,y:0};var d=ca(a),e=ma&&d?d.getPropertyValue(ma):"50% 50%",f=e.split(" "),g=-1!==e.indexOf("left")?"0%":-1!==e.indexOf("right")?"100%":f[0],h=-1!==e.indexOf("top")?"0%":-1!==e.indexOf("bottom")?"100%":f[1];return("center"===h||null==h)&&(h="50%"),("center"===g||isNaN(parseFloat(g)))&&(g="50%"),a.getBBox&&sa(a)?(a._gsTransform||(b.set(a,{x:"+=0",overwrite:!1}),void 0===a._gsTransform.xOrigin&&console.log("Draggable requires at least GSAP 1.17.0")),e=a.getBBox(),c.x=a._gsTransform.xOrigin-e.x,c.y=a._gsTransform.yOrigin-e.y):(a.getBBox&&-1!==(g+h).indexOf("%")&&(a=a.getBBox(),a={offsetWidth:a.width,offsetHeight:a.height}),c.x=-1!==g.indexOf("%")?a.offsetWidth*parseFloat(g)/100:parseFloat(g),c.y=-1!==h.indexOf("%")?a.offsetHeight*parseFloat(h)/100:parseFloat(h)),c},ya=function(a){if(Sa.cacheSVGData!==!1&&a._dCache&&a._dCache.lastUpdate===b.ticker.frame)return a._dCache;var c,d=a._dCache=a._dCache||{},e=ca(a),f=a.getBBox&&sa(a),g="svg"===(a.nodeName+"").toLowerCase();if(d.isSVG=f,d.isSVGRoot=g,d.borderBox="border-box"===e.boxSizing,d.computedStyle=e,g)c=a.parentNode||t,c.insertBefore(v,a),d.offsetParent=v.offsetParent||t,c.removeChild(v);else if(f){for(c=a.parentNode;c&&"svg"!==(c.nodeName+"").toLowerCase();)c=c.parentNode;d.offsetParent=c}else d.offsetParent=a.offsetParent;return d},za=function(a,b,c,d,e){if(a===window||!a||!a.style||!a.parentNode)return[1,0,0,1,0,0];var f,h,i,l,m,n,o,p,q,r,u,v,w,x,y=a._dCache||ya(a),z=a.parentNode,A=z._dCache||ya(z),B=y.computedStyle,C=y.isSVG?A.offsetParent:z.offsetParent;return f=y.isSVG&&-1!==(a.style[na]+"").indexOf("matrix")?a.style[na]:B?B.getPropertyValue(oa):a.currentStyle?a.currentStyle[na]:"1,0,0,1,0,0",a.getBBox&&-1!==(a.getAttribute("transform")+"").indexOf("matrix")&&(f=a.getAttribute("transform")),f=(f+"").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g)||[1,0,0,1,0,0],f.length>6&&(f=[f[0],f[1],f[4],f[5],f[12],f[13]]),d?f[4]=f[5]=0:y.isSVG&&(m=a._gsTransform)&&(m.xOrigin||m.yOrigin)&&(f[0]=parseFloat(f[0]),f[1]=parseFloat(f[1]),f[2]=parseFloat(f[2]),f[3]=parseFloat(f[3]),f[4]=parseFloat(f[4])-(m.xOrigin-(m.xOrigin*f[0]+m.yOrigin*f[2])),f[5]=parseFloat(f[5])-(m.yOrigin-(m.xOrigin*f[1]+m.yOrigin*f[3]))),b&&(void 0===g&&ka(),i=y.isSVG||y.isSVGRoot?wa(a):a,y.isSVG?(l=a.getBBox(),r=A.isSVGRoot?{x:0,y:0}:z.getBBox(),i={offsetLeft:l.x-r.x,offsetTop:l.y-r.y,offsetParent:y.offsetParent}):y.isSVGRoot?(u=parseInt(B.borderTopWidth,10)||0,v=parseInt(B.borderLeftWidth,10)||0,w=(f[0]-g)*v+f[2]*u,x=f[1]*v+(f[3]-g)*u,n=b.x,o=b.y,p=n-(n*f[0]+o*f[2]),q=o-(n*f[1]+o*f[3]),f[4]=parseFloat(f[4])+p,f[5]=parseFloat(f[5])+q,b.x-=p,b.y-=q,n=i.scaleX,o=i.scaleY,e||(b.x*=n,b.y*=o),f[0]*=n,f[1]*=o,f[2]*=n,f[3]*=o,ta||(b.x+=w,b.y+=x),C===s.body&&i.offsetParent===t&&(C=t)):!j&&a.offsetParent&&(b.x+=parseInt(ha(a.offsetParent,"borderLeftWidth"),10)||0,b.y+=parseInt(ha(a.offsetParent,"borderTopWidth"),10)||0),h=z===t||z===s.body,f[4]=Number(f[4])+b.x+(i.offsetLeft||0)-c.x-(h?0:z.scrollLeft||0),f[5]=Number(f[5])+b.y+(i.offsetTop||0)-c.y-(h?0:z.scrollTop||0),z&&"fixed"===ha(a,"position",B)&&(f[4]+=U(),f[5]+=T()),!z||z===t||C!==i.offsetParent||A.isSVG||k&&"100100"!==za(z).join("")||(i=A.isSVGRoot?wa(z):z,f[4]-=i.offsetLeft||0,f[5]-=i.offsetTop||0,j||!A.offsetParent||y.isSVG||y.isSVGRoot||(f[4]-=parseInt(ha(A.offsetParent,"borderLeftWidth"),10)||0,f[5]-=parseInt(ha(A.offsetParent,"borderTopWidth"),10)||0))),f},Aa=function(a,b){if(!a||a===window||!a.parentNode)return[1,0,0,1,0,0];for(var c,d,e,f,g,h,i,j,k=xa(a,pa),l=xa(a.parentNode,qa),m=za(a,k,l,!1,!b);(a=a.parentNode)&&a.parentNode&&a!==t;)k=l,l=xa(a.parentNode,k===pa?qa:pa),i=za(a,k,l),c=m[0],d=m[1],e=m[2],f=m[3],g=m[4],h=m[5],m[0]=c*i[0]+d*i[2],m[1]=c*i[1]+d*i[3],m[2]=e*i[0]+f*i[2],m[3]=e*i[1]+f*i[3],m[4]=g*i[0]+h*i[2]+i[4],m[5]=g*i[1]+h*i[3]+i[5];return b&&(c=m[0],d=m[1],e=m[2],f=m[3],g=m[4],h=m[5],j=c*f-d*e,m[0]=f/j,m[1]=-d/j,m[2]=-e/j,m[3]=c/j,m[4]=(e*h-f*g)/j,m[5]=-(c*h-d*g)/j),m},Ba=function(a,b,c,d,e){a=_(a);var f=Aa(a,!1,e),g=b.x,h=b.y;return c&&(xa(a,b),g-=b.x,h-=b.y),d=d===!0?b:d||{},d.x=g*f[0]+h*f[2]+f[4],d.y=g*f[1]+h*f[3]+f[5],d},Ca=function(a,b,c){var d=a.x*b[0]+a.y*b[2]+b[4],e=a.x*b[1]+a.y*b[3]+b[5];return a.x=d*c[0]+e*c[2]+c[4],a.y=d*c[1]+e*c[3]+c[5],a},Da=function(a,b,c){if(!(a=_(a)))return null;b=_(b);var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,u,v,w,x,y,z,A,C=a.getBBox&&sa(a);if(a===window)g=T(),e=U(),f=e+(t.clientWidth||a.innerWidth||s.body.clientWidth||0),h=g+((a.innerHeight||0)-20<t.clientHeight?t.clientHeight:a.innerHeight||s.body.clientHeight||0);else{if(void 0===b||b===window)return a.getBoundingClientRect();d=xa(a),e=-d.x,g=-d.y,C?(o=a.getBBox(),p=o.width,q=o.height):"svg"!==(a.nodeName+"").toLowerCase()&&a.offsetWidth?(p=a.offsetWidth,q=a.offsetHeight):(z=ca(a),p=parseFloat(z.width),q=parseFloat(z.height)),f=e+p,h=g+q,"svg"!==a.nodeName.toLowerCase()||B||(r=wa(a),A=r.computedStyle||{},w=(a.getAttribute("viewBox")||"0 0").split(" "),x=parseFloat(w[0]),y=parseFloat(w[1]),u=parseFloat(A.borderLeftWidth)||0,v=parseFloat(A.borderTopWidth)||0,f-=p-(p-u)/r.scaleX-x,h-=q-(q-v)/r.scaleY-y,e-=u/r.scaleX-x,g-=v/r.scaleY-y,z&&(f+=(parseFloat(A.borderRightWidth)+u)/r.scaleX,h+=(v+parseFloat(A.borderBottomWidth))/r.scaleY))}return a===b?{left:e,top:g,width:f-e,height:h-g}:(i=Aa(a),j=Aa(b,!0),k=Ca({x:e,y:g},i,j),l=Ca({x:f,y:g},i,j),m=Ca({x:f,y:h},i,j),n=Ca({x:e,y:h},i,j),e=Math.min(k.x,l.x,m.x,n.x),g=Math.min(k.y,l.y,m.y,n.y),K.x=K.y=0,c&&xa(b,K),{left:e+K.x,top:g+K.y,width:Math.max(k.x,l.x,m.x,n.x)-e,height:Math.max(k.y,l.y,m.y,n.y)-g})},Ea=function(a){return a&&a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},Fa=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],Ea(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else c&&0!==c.length&&e.push(c);return e},Ga="ontouchstart"in t&&"orientation"in window,Ha=function(a){for(var b=a.split(","),c=(void 0!==v.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==v.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":a).split(","),d={},e=4;--e>-1;)d[b[e]]=c[e],d[c[e]]=b[e];return d}("touchstart,touchmove,touchend,touchcancel"),Ia=function(a,b,c,d){if(a.addEventListener){var e=Ha[b];d=d||{passive:!1},a.addEventListener(e||b,c,d),e&&b!==e&&a.addEventListener(b,c,d)}else a.attachEvent&&a.attachEvent("on"+b,c)},Ja=function(a,b,c){if(a.removeEventListener){var d=Ha[b];a.removeEventListener(d||b,c),d&&b!==d&&a.removeEventListener(b,c)}else a.detachEvent&&a.detachEvent("on"+b,c)},Ka=function(a,b){for(var c=a.length;--c>-1;)if(a[c].identifier===b)return!0;return!1},La=function(a){e=a.touches&&H<a.touches.length,Ja(a.target,"touchend",La)},Ma=function(a){e=a.touches&&H<a.touches.length,Ia(a.target,"touchend",La)},Na=function(a,b,c,d,e,f){var g,h,i,j={};if(b)if(1!==e&&b instanceof Array){if(j.end=g=[],i=b.length,"object"==typeof b[0])for(h=0;i>h;h++)g[h]=N(b[h],e);else for(h=0;i>h;h++)g[h]=b[h]*e;c+=1.1,d-=1.1}else"function"==typeof b?j.end=function(c){var d,f,g=b.call(a,c);if(1!==e)if("object"==typeof g){d={};for(f in g)d[f]=g[f]*e;g=d}else g*=e;return g}:j.end=b;return(c||0===c)&&(j.max=c),(d||0===d)&&(j.min=d),f&&(j.velocity=0),j},Oa=function(a){var b;return a&&a.getAttribute&&"BODY"!==a.nodeName?"true"===(b=a.getAttribute("data-clickable"))||"false"!==b&&(a.onclick||G.test(a.nodeName+"")||"true"===a.getAttribute("contentEditable"))?!0:Oa(a.parentNode):!1},Pa=function(a,b){for(var c,d=a.length;--d>-1;)c=a[d],c.ondragstart=c.onselectstart=b?null:x,ba(c,"userSelect",b?"text":"none")},Qa=function(){var a,b=s.createElement("div"),c=s.createElement("div"),d=c.style,e=s.body||v;return d.display="inline-block",d.position="relative",b.style.cssText=c.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",b.appendChild(c),e.appendChild(b),a=c.offsetHeight+18>b.scrollHeight,e.removeChild(b),a}(),Ra=function(a,c){a=_(a),c=c||{};var d,e,f,g,h,i,j=s.createElement("div"),k=j.style,l=a.firstChild,m=0,n=0,o=a.scrollTop,p=a.scrollLeft,q=a.scrollWidth,r=a.scrollHeight,t=0,u=0,v=0;la&&c.force3D!==!1?(h="translate3d(",i="px,0px)"):na&&(h="translate(",i="px)"),this.scrollTop=function(a,b){return arguments.length?void this.top(-a,b):-this.top()},this.scrollLeft=function(a,b){return arguments.length?void this.left(-a,b):-this.left()},this.left=function(d,e){if(!arguments.length)return-(a.scrollLeft+n);var f=a.scrollLeft-p,g=n;return(f>2||-2>f)&&!e?(p=a.scrollLeft,b.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-p),void(c.onKill&&c.onKill())):(d=-d,0>d?(n=d-.5|0,d=0):d>u?(n=d-u|0,d=u):n=0,(n||g)&&(h?this._suspendTransforms||(k[na]=h+-n+"px,"+-m+i):k.left=-n+"px",n+t>=0&&(k.paddingRight=n+t+"px")),a.scrollLeft=0|d,void(p=a.scrollLeft))},this.top=function(d,e){if(!arguments.length)return-(a.scrollTop+m);var f=a.scrollTop-o,g=m;return(f>2||-2>f)&&!e?(o=a.scrollTop,b.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-o),void(c.onKill&&c.onKill())):(d=-d,0>d?(m=d-.5|0,d=0):d>v?(m=d-v|0,d=v):m=0,(m||g)&&(h?this._suspendTransforms||(k[na]=h+-n+"px,"+-m+i):k.top=-m+"px"),a.scrollTop=0|d,void(o=a.scrollTop))},this.maxScrollTop=function(){return v},this.maxScrollLeft=function(){return u},this.disable=function(){for(l=j.firstChild;l;)g=l.nextSibling,a.appendChild(l),l=g;a===j.parentNode&&a.removeChild(j)},this.enable=function(){if(l=a.firstChild,l!==j){for(;l;)g=l.nextSibling,j.appendChild(l),l=g;a.appendChild(j),this.calibrate()}},this.calibrate=function(b){var c,g,h=a.clientWidth===d;o=a.scrollTop,p=a.scrollLeft,(!h||a.clientHeight!==e||j.offsetHeight!==f||q!==a.scrollWidth||r!==a.scrollHeight||b)&&((m||n)&&(c=this.left(),g=this.top(),this.left(-a.scrollLeft),this.top(-a.scrollTop)),(!h||b)&&(k.display="block",k.width="auto",k.paddingRight="0px",t=Math.max(0,a.scrollWidth-a.clientWidth),t&&(t+=ha(a,"paddingLeft")+(Qa?ha(a,"paddingRight"):0))),k.display="inline-block",k.position="relative",k.overflow="visible",k.verticalAlign="top",k.width="100%",k.paddingRight=t+"px",Qa&&(k.paddingBottom=ha(a,"paddingBottom",!0)),B&&(k.zoom="1"),d=a.clientWidth,e=a.clientHeight,q=a.scrollWidth,r=a.scrollHeight,u=a.scrollWidth-d,v=a.scrollHeight-e,f=j.offsetHeight,k.display="block",(c||g)&&(this.left(c),this.top(g)))},this.content=j,this.element=a,this._suspendTransforms=!1,this.enable()},Sa=function(d,g){a.call(this,d),d=_(d),f||(f=p.com.greensock.plugins.ThrowPropsPlugin),this.vars=g=N(g||{}),this.target=d,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(g.dragResistance)||0,this.edgeResistance=isNaN(g.edgeResistance)?1:parseFloat(g.edgeResistance)||0,this.lockAxis=g.lockAxis,this.autoScroll=g.autoScroll||0,this.lockedAxis=null,this.allowEventDefault=!!g.allowEventDefault;var h,i,j,k,q,r,u,v,x,D,G,O,R,T,U,Y,aa,ca,da,ea,fa,ga,ka,la,ma,na,oa,pa,qa,ra,ta,ua,va,wa,xa=(g.type||(B?"top,left":"x,y")).toLowerCase(),ya=-1!==xa.indexOf("x")||-1!==xa.indexOf("y"),za=-1!==xa.indexOf("rotation"),Ca=za?"rotation":ya?"x":"left",Da=ya?"y":"top",Ea=-1!==xa.indexOf("x")||-1!==xa.indexOf("left")||"scroll"===xa,Fa=-1!==xa.indexOf("y")||-1!==xa.indexOf("top")||"scroll"===xa,La=g.minimumMovement||2,Qa=this,Ta=M(g.trigger||g.handle||d),Ua={},Va=0,Xa=!1,Ya=g.autoScrollMarginTop||40,Za=g.autoScrollMarginRight||40,$a=g.autoScrollMarginBottom||40,_a=g.autoScrollMarginLeft||40,ab=g.clickableTest||Oa,bb=0,cb=function(a){return Qa.isPressed&&a.which<2?void Qa.endDrag():(a.preventDefault(),a.stopPropagation(),!1)},db=function(a){if(Qa.autoScroll&&Qa.isDragging&&(Xa||ca)){var b,c,e,f,g,h,j,k,l=d,m=15*Qa.autoScroll;for(Xa=!1,L.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=t.scrollTop?t.scrollTop:s.body.scrollTop,L.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=t.scrollLeft?t.scrollLeft:s.body.scrollLeft,f=Qa.pointerX-L.scrollLeft,g=Qa.pointerY-L.scrollTop;l&&!c;)c=X(l.parentNode),b=c?L:l.parentNode,e=c?{bottom:Math.max(t.clientHeight,window.innerHeight||0),right:Math.max(t.clientWidth,window.innerWidth||0),left:0,top:0}:b.getBoundingClientRect(),h=j=0,Fa&&(k=b._gsMaxScrollY-b.scrollTop,0>k?j=k:g>e.bottom-$a&&k?(Xa=!0,j=Math.min(k,m*(1-Math.max(0,e.bottom-g)/$a)|0)):g<e.top+Ya&&b.scrollTop&&(Xa=!0,j=-Math.min(b.scrollTop,m*(1-Math.max(0,g-e.top)/Ya)|0)),j&&(b.scrollTop+=j)),Ea&&(k=b._gsMaxScrollX-b.scrollLeft,0>k?h=k:f>e.right-Za&&k?(Xa=!0,h=Math.min(k,m*(1-Math.max(0,e.right-f)/Za)|0)):f<e.left+_a&&b.scrollLeft&&(Xa=!0,h=-Math.min(b.scrollLeft,m*(1-Math.max(0,f-e.left)/_a)|0)),h&&(b.scrollLeft+=h)),c&&(h||j)&&(window.scrollTo(b.scrollLeft,b.scrollTop),rb(Qa.pointerX+h,Qa.pointerY+j)),l=b}if(ca){var n=Qa.x,o=Qa.y,p=1e-6;p>n&&n>-p&&(n=0),p>o&&o>-p&&(o=0),za?(Qa.deltaX=n-qa.data.rotation,qa.data.rotation=Qa.rotation=n,qa.setRatio(1)):i?(Fa&&(Qa.deltaY=o-i.top(),i.top(o)),Ea&&(Qa.deltaX=n-i.left(),i.left(n))):ya?(Fa&&(Qa.deltaY=o-qa.data.y,qa.data.y=o),Ea&&(Qa.deltaX=n-qa.data.x,qa.data.x=n),qa.setRatio(1)):(Fa&&(Qa.deltaY=o-parseFloat(d.style.top||0),d.style.top=o+"px"),Ea&&(Qa.deltaY=n-parseFloat(d.style.left||0),d.style.left=n+"px")),!v||a||ua||(ua=!0,ia(Qa,"drag","onDrag"),ua=!1)}ca=!1},eb=function(a,c){var e,f=Qa.x,g=Qa.y;d._gsTransform||!ya&&!za||b.set(d,{x:"+=0",overwrite:!1,data:"_draggable"}),ya?(Qa.y=d._gsTransform.y,Qa.x=d._gsTransform.x):za?Qa.x=Qa.rotation=d._gsTransform.rotation:i?(Qa.y=i.top(),Qa.x=i.left()):(Qa.y=parseInt(d.style.top,10)||0,Qa.x=parseInt(d.style.left,10)||0),(ea||fa||ga)&&!c&&(Qa.isDragging||Qa.isThrowing)&&(ga&&(K.x=Qa.x,K.y=Qa.y,e=ga(K),e.x!==Qa.x&&(Qa.x=e.x,ca=!0),e.y!==Qa.y&&(Qa.y=e.y,ca=!0)),ea&&(e=ea(Qa.x),e!==Qa.x&&(Qa.x=e,za&&(Qa.rotation=e),ca=!0)),fa&&(e=fa(Qa.y),e!==Qa.y&&(Qa.y=e),ca=!0)),ca&&db(!0),a||(Qa.deltaX=Qa.x-f,Qa.deltaY=Qa.y-g,ia(Qa,"throwupdate","onThrowUpdate"))},fb=function(){var a,b,c,e;u=!1,i?(i.calibrate(),Qa.minX=D=-i.maxScrollLeft(),Qa.minY=O=-i.maxScrollTop(),Qa.maxX=x=Qa.maxY=G=0,u=!0):g.bounds&&(a=ja(g.bounds,d.parentNode),za?(Qa.minX=D=a.left,Qa.maxX=x=a.left+a.width,Qa.minY=O=Qa.maxY=G=0):void 0!==g.bounds.maxX||void 0!==g.bounds.maxY?(a=g.bounds,Qa.minX=D=a.minX,Qa.minY=O=a.minY,Qa.maxX=x=a.maxX,Qa.maxY=G=a.maxY):(b=ja(d,d.parentNode),Qa.minX=D=ha(d,Ca)+a.left-b.left,Qa.minY=O=ha(d,Da)+a.top-b.top,Qa.maxX=x=D+(a.width-b.width),Qa.maxY=G=O+(a.height-b.height)),D>x&&(Qa.minX=x,Qa.maxX=x=D,D=Qa.minX),O>G&&(Qa.minY=G,Qa.maxY=G=O,O=Qa.minY),za&&(Qa.minRotation=D,Qa.maxRotation=x),u=!0),g.liveSnap&&(c=g.liveSnap===!0?g.snap||{}:g.liveSnap,e=c instanceof Array||"function"==typeof c,za?(ea=nb(e?c:c.rotation,D,x,1),fa=null):c.points?ga=ob(e?c:c.points,D,x,O,G,c.radius,i?-1:1):(Ea&&(ea=nb(e?c:c.x||c.left||c.scrollLeft,D,x,i?-1:1)),Fa&&(fa=nb(e?c:c.y||c.top||c.scrollTop,O,G,i?-1:1))))},gb=function(){Qa.isThrowing=!1,ia(Qa,"throwcomplete","onThrowComplete")},hb=function(){Qa.isThrowing=!1},ib=function(a,b){var c,e,h,j;a&&f?(a===!0&&(c=g.snap||g.liveSnap||{},e=c instanceof Array||"function"==typeof c,a={resistance:(g.throwResistance||g.resistance||1e3)/(za?10:1)},za?a.rotation=Na(Qa,e?c:c.rotation,x,D,1,b):(Ea&&(a[Ca]=Na(Qa,e?c:c.points||c.x||c.left||c.scrollLeft,x,D,i?-1:1,b||"x"===Qa.lockedAxis)),Fa&&(a[Da]=Na(Qa,e?c:c.points||c.y||c.top||c.scrollTop,G,O,i?-1:1,b||"y"===Qa.lockedAxis)),(c.points||c instanceof Array&&"object"==typeof c[0])&&(a.linkedProps=Ca+","+Da,a.radius=c.radius))),Qa.isThrowing=!0,j=isNaN(g.overshootTolerance)?1===g.edgeResistance?0:1-Qa.edgeResistance+.2:g.overshootTolerance,Qa.tween=h=f.to(i||d,{throwProps:a,data:"_draggable",ease:g.ease||p.Power3.easeOut,onComplete:gb,onOverwrite:hb,onUpdate:g.fastMode?ia:eb,onUpdateParams:g.fastMode?[Qa,"onthrowupdate","onThrowUpdate"]:c&&c.radius?[!1,!0]:w},isNaN(g.maxDuration)?2:g.maxDuration,isNaN(g.minDuration)?0===j||"object"==typeof a&&a.resistance>1e3?0:.5:g.minDuration,j),g.fastMode||(i&&(i._suspendTransforms=!0),h.render(h.duration(),!0,!0),eb(!0,!0),Qa.endX=Qa.x,Qa.endY=Qa.y,za&&(Qa.endRotation=Qa.x),h.play(0),eb(!0,!0),i&&(i._suspendTransforms=!1))):u&&Qa.applyBounds()},jb=function(a){var b,c,e,f,g,h,i,l,m,n=ma||[1,0,0,1,0,0];ma=Aa(d.parentNode,!0),a&&Qa.isPressed&&n.join(",")!==ma.join(",")&&(b=n[0],c=n[1],e=n[2],f=n[3],g=n[4],h=n[5],i=b*f-c*e,l=j*(f/i)+k*(-e/i)+(e*h-f*g)/i,m=j*(-c/i)+k*(b/i)+-(b*h-c*g)/i,k=l*ma[1]+m*ma[3]+ma[5],j=l*ma[0]+m*ma[2]+ma[4]),ma[1]||ma[2]||1!=ma[0]||1!=ma[3]||0!=ma[4]||0!=ma[5]||(ma=null)},kb=function(){var a=1-Qa.edgeResistance;jb(!1),ma&&(j=Qa.pointerX*ma[0]+Qa.pointerY*ma[2]+ma[4],k=Qa.pointerX*ma[1]+Qa.pointerY*ma[3]+ma[5]),ca&&(rb(Qa.pointerX,Qa.pointerY),db(!0)),i?(fb(),r=i.top(),q=i.left()):(lb()?(eb(!0,!0),fb()):Qa.applyBounds(),za?(aa=Qa.rotationOrigin=Ba(d,{x:0,y:0}),eb(!0,!0),q=Qa.x,r=Qa.y=Math.atan2(aa.y-Qa.pointerY,Qa.pointerX-aa.x)*y):(oa=d.parentNode?d.parentNode.scrollTop||0:0,pa=d.parentNode?d.parentNode.scrollLeft||0:0,r=ha(d,Da),q=ha(d,Ca))),u&&a&&(q>x?q=x+(q-x)/a:D>q&&(q=D-(D-q)/a),za||(r>G?r=G+(r-G)/a:O>r&&(r=O-(O-r)/a))),Qa.startX=q,Qa.startY=r},lb=function(){return Qa.tween&&Qa.tween.isActive()},mb=function(){!C.parentNode||lb()||Qa.isDragging||C.parentNode.removeChild(C)},nb=function(a,b,c,d){return"function"==typeof a?function(e){var f=Qa.isPressed?1-Qa.edgeResistance:1;return a.call(Qa,e>c?c+(e-c)*f:b>e?b+(e-b)*f:e)*d}:a instanceof Array?function(d){for(var e,f,g=a.length,h=0,i=z;--g>-1;)e=a[g],f=e-d,0>f&&(f=-f),i>f&&e>=b&&c>=e&&(h=g,i=f);return a[h]}:isNaN(a)?function(a){return a}:function(){return a*d}},ob=function(a,b,c,d,e,f,g){return f=f&&z>f?f*f:z,"function"==typeof a?function(h){var i,j,k,l=Qa.isPressed?1-Qa.edgeResistance:1,m=h.x,n=h.y;return h.x=m=m>c?c+(m-c)*l:b>m?b+(m-b)*l:m,h.y=n=n>e?e+(n-e)*l:d>n?d+(n-d)*l:n,i=a.call(Qa,h),i!==h&&(h.x=i.x,h.y=i.y),1!==g&&(h.x*=g,h.y*=g),z>f&&(j=h.x-m,k=h.y-n,j*j+k*k>f&&(h.x=m,h.y=n)),h}:a instanceof Array?function(b){for(var c,d,e,g,h=a.length,i=0,j=z;--h>-1;)e=a[h],c=e.x-b.x,d=e.y-b.y,g=c*c+d*d,j>g&&(i=h,j=g);return f>=j?a[i]:b}:function(a){return a}},pb=function(a,c){var e;if(h&&!Qa.isPressed&&a&&("mousedown"!==a.type&&"pointerdown"!==a.type||c||!(A()-bb<30)||!Ha[Qa.pointerEvent.type])){if(na=lb(),Qa.pointerEvent=a,Ha[a.type]?(la=-1!==a.type.indexOf("touch")?a.currentTarget||a.target:s,Ia(la,"touchend",sb),Ia(la,"touchmove",qb),Ia(la,"touchcancel",sb),Ia(s,"touchstart",Ma)):(la=null,Ia(s,"mousemove",qb)),ta=null,Ia(s,"mouseup",sb),a&&a.target&&Ia(a.target,"mouseup",sb),ka=ab.call(Qa,a.target)&&!g.dragClickables&&!c)return Ia(a.target,"change",sb),ia(Qa,"press","onPress"),void Pa(Ta,!0);if(ra=!la||Ea===Fa||Qa.vars.allowNativeTouchScrolling===!1||Qa.vars.allowContextMenu&&a&&(a.ctrlKey||a.which>2)?!1:Ea?"y":"x",B?a=$(a,!0):ra||Qa.allowEventDefault||(a.preventDefault(),a.preventManipulation&&a.preventManipulation()),a.changedTouches?(a=U=a.changedTouches[0],Y=a.identifier):a.pointerId?Y=a.pointerId:U=Y=null,H++,P(db),k=Qa.pointerY=a.pageY,j=Qa.pointerX=a.pageX,(ra||Qa.autoScroll)&&Z(d.parentNode),!d.parentNode||!Qa.autoScroll||i||za||!d.parentNode._gsMaxScrollX||C.parentNode||d.getBBox||(C.style.width=d.parentNode.scrollWidth+"px",d.parentNode.appendChild(C)),kb(),Qa.tween&&Qa.tween.kill(),Qa.isThrowing=!1,b.killTweensOf(i||d,!0,Ua),i&&b.killTweensOf(d,!0,{scrollTo:1}),Qa.tween=Qa.lockedAxis=null,(g.zIndexBoost||!za&&!i&&g.zIndexBoost!==!1)&&(d.style.zIndex=Sa.zIndex++),Qa.isPressed=!0,v=!(!g.onDrag&&!Qa._listeners.drag),!za)for(e=Ta.length;--e>-1;)ba(Ta[e],"cursor",g.cursor||"move");ia(Qa,"press","onPress")}},qb=function(a){var b,c,d,f,g,i,l=a;if(h&&!e&&Qa.isPressed&&a){if(Qa.pointerEvent=a,b=a.changedTouches){if(a=b[0],a!==U&&a.identifier!==Y){for(f=b.length;--f>-1&&(a=b[f]).identifier!==Y;);if(0>f)return}}else if(a.pointerId&&Y&&a.pointerId!==Y)return;if(B)a=$(a,!0);else{if(la&&ra&&!ta&&(c=a.pageX,d=a.pageY,ma&&(f=c*ma[0]+d*ma[2]+ma[4],d=c*ma[1]+d*ma[3]+ma[5],c=f),g=Math.abs(c-j),i=Math.abs(d-k),(g!==i&&(g>La||i>La)||I&&ra===ta)&&(ta=g>i&&Ea?"x":"y",Qa.vars.lockAxisOnTouchScroll!==!1&&(Qa.lockedAxis="x"===ta?"y":"x","function"==typeof Qa.vars.onLockAxis&&Qa.vars.onLockAxis.call(Qa,l)),I&&ra===ta)))return void sb(l);Qa.allowEventDefault||ra&&(!ta||ra===ta)||l.cancelable===!1||(l.preventDefault(),l.preventManipulation&&l.preventManipulation())}Qa.autoScroll&&(Xa=!0),rb(a.pageX,a.pageY)}},rb=function(a,b){var c,d,e,f,g,h,i=1-Qa.dragResistance,l=1-Qa.edgeResistance;Qa.pointerX=a,Qa.pointerY=b,za?(f=Math.atan2(aa.y-b,a-aa.x)*y,g=Qa.y-f,g>180?(r-=360,Qa.y=f):-180>g&&(r+=360,Qa.y=f),Qa.x!==q||Math.abs(r-f)>La?(Qa.y=f,e=q+(r-f)*i):e=q):(ma&&(h=a*ma[0]+b*ma[2]+ma[4],b=a*ma[1]+b*ma[3]+ma[5],a=h),d=b-k,c=a-j,La>d&&d>-La&&(d=0),La>c&&c>-La&&(c=0),(Qa.lockAxis||Qa.lockedAxis)&&(c||d)&&(h=Qa.lockedAxis,h||(Qa.lockedAxis=h=Ea&&Math.abs(c)>Math.abs(d)?"y":Fa?"x":null,h&&"function"==typeof Qa.vars.onLockAxis&&Qa.vars.onLockAxis.call(Qa,Qa.pointerEvent)),"y"===h?d=0:"x"===h&&(c=0)),e=q+c*i,f=r+d*i),(ea||fa||ga)&&(Qa.x!==e||Qa.y!==f&&!za)?(ga&&(K.x=e,K.y=f,h=ga(K),e=h.x,f=h.y),ea&&(e=ea(e)),fa&&(f=fa(f))):u&&(e>x?e=x+(e-x)*l:D>e&&(e=D+(e-D)*l),za||(f>G?f=G+(f-G)*l:O>f&&(f=O+(f-O)*l))),za||ma||(e=Math.round(e),f=Math.round(f)),(Qa.x!==e||Qa.y!==f&&!za)&&(za?(Qa.endRotation=Qa.x=Qa.endX=e,ca=!0):(Fa&&(Qa.y=Qa.endY=f,ca=!0),Ea&&(Qa.x=Qa.endX=e,ca=!0)),!Qa.isDragging&&Qa.isPressed&&(Qa.isDragging=!0,ia(Qa,"dragstart","onDragStart")))},sb=function(a,c){if(h&&Qa.isPressed&&(!a||null==Y||c||!(a.pointerId&&a.pointerId!==Y||a.changedTouches&&!Ka(a.changedTouches,Y)))){Qa.isPressed=!1;var e,f,i,j,k,l=a,m=Qa.isDragging,n=Qa.vars.allowContextMenu&&a&&(a.ctrlKey||a.which>2),o=b.delayedCall(.001,mb);if(la?(Ja(la,"touchend",sb),Ja(la,"touchmove",qb),Ja(la,"touchcancel",sb),Ja(s,"touchstart",Ma)):Ja(s,"mousemove",qb),Ja(s,"mouseup",sb),a&&a.target&&Ja(a.target,"mouseup",sb),ca=!1,ka&&!n)return a&&(Ja(a.target,"change",sb),Qa.pointerEvent=l),Pa(Ta,!1),ia(Qa,"release","onRelease"),ia(Qa,"click","onClick"),void(ka=!1);if(Q(db),!za)for(f=Ta.length;--f>-1;)ba(Ta[f],"cursor",g.cursor||"move");if(m&&(Va=J=A(),Qa.isDragging=!1),H--,a){if(B&&(a=$(a,!1)),e=a.changedTouches,e&&(a=e[0],a!==U&&a.identifier!==Y)){for(f=e.length;--f>-1&&(a=e[f]).identifier!==Y;);if(0>f)return}Qa.pointerEvent=l,Qa.pointerX=a.pageX,Qa.pointerY=a.pageY}return n&&l?(l.preventDefault(),l.preventManipulation&&l.preventManipulation(),ia(Qa,"release","onRelease")):l&&!m?(na&&(g.snap||g.bounds)&&ib(g.throwProps),ia(Qa,"release","onRelease"),I&&"touchmove"===l.type||-1!==l.type.indexOf("cancel")||(ia(Qa,"click","onClick"),A()-bb<300&&ia(Qa,"doubleclick","onDoubleClick"),j=l.target||l.srcElement||d,bb=A(),k=function(){bb!==va&&Qa.enabled()&&!Qa.isPressed&&(j.click?j.click():s.createEvent&&(i=s.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,window,1,Qa.pointerEvent.screenX,Qa.pointerEvent.screenY,Qa.pointerX,Qa.pointerY,!1,!1,!1,!1,0,null),j.dispatchEvent(i)))},I||l.defaultPrevented||b.delayedCall(1e-5,k))):(ib(g.throwProps),B||Qa.allowEventDefault||!l||!g.dragClickables&&ab.call(Qa,l.target)||!m||ra&&(!ta||ra!==ta)||l.cancelable===!1||(l.preventDefault(),l.preventManipulation&&l.preventManipulation()),ia(Qa,"release","onRelease")),lb()&&o.duration(Qa.tween.duration()),m&&ia(Qa,"dragend","onDragEnd"),!0}},tb=function(a){if(a&&Qa.isDragging&&!i){var b=a.target||a.srcElement||d.parentNode,c=b.scrollLeft-b._gsScrollX,e=b.scrollTop-b._gsScrollY;(c||e)&&(ma?(j-=c*ma[0]+e*ma[2],k-=e*ma[3]+c*ma[1]):(j-=c,k-=e),b._gsScrollX+=c,b._gsScrollY+=e,rb(Qa.pointerX,Qa.pointerY))}},ub=function(a){var b=A(),c=40>b-bb,d=40>b-Va,e=c&&va===bb,f=!!a.preventDefault,g=Qa.pointerEvent&&Qa.pointerEvent.defaultPrevented,h=c&&wa===bb,i=a.isTrusted||null==a.isTrusted&&c&&e;return f&&(e||d&&Qa.vars.suppressClickOnDrag!==!1)&&a.stopImmediatePropagation(),!c||Qa.pointerEvent&&Qa.pointerEvent.defaultPrevented||e&&i===h?void((Qa.isPressed||d||c)&&(f?i&&a.detail&&c&&!g||(a.preventDefault(),a.preventManipulation&&a.preventManipulation()):a.returnValue=!1)):(i&&e&&(wa=bb),void(va=bb))},vb=function(a){return ma?{x:a.x*ma[0]+a.y*ma[2]+ma[4],y:a.x*ma[1]+a.y*ma[3]+ma[5]}:{x:a.x,y:a.y}};da=Sa.get(this.target),da&&da.kill(),this.startDrag=function(a,b){var c,e,f,g;pb(a||Qa.pointerEvent,!0),b&&!Qa.hitTest(a||Qa.pointerEvent)&&(c=Wa(a||Qa.pointerEvent),e=Wa(d),
f=vb({x:c.left+c.width/2,y:c.top+c.height/2}),g=vb({x:e.left+e.width/2,y:e.top+e.height/2}),j-=f.x-g.x,k-=f.y-g.y),Qa.isDragging||(Qa.isDragging=!0,ia(Qa,"dragstart","onDragStart"))},this.drag=qb,this.endDrag=function(a){sb(a||Qa.pointerEvent,!0)},this.timeSinceDrag=function(){return Qa.isDragging?0:(A()-Va)/1e3},this.timeSinceClick=function(){return(A()-bb)/1e3},this.hitTest=function(a,b){return Sa.hitTest(Qa.target,a,b)},this.getDirection=function(a,b){var c,d,e,g,h,i,j="velocity"===a&&f?a:"object"!=typeof a||za?"start":"element";return"element"===j&&(h=Wa(Qa.target),i=Wa(a)),c="start"===j?Qa.x-q:"velocity"===j?f.getVelocity(this.target,Ca):h.left+h.width/2-(i.left+i.width/2),za?0>c?"counter-clockwise":"clockwise":(b=b||2,d="start"===j?Qa.y-r:"velocity"===j?f.getVelocity(this.target,Da):h.top+h.height/2-(i.top+i.height/2),e=Math.abs(c/d),g=1/b>e?"":0>c?"left":"right",b>e&&(""!==g&&(g+="-"),g+=0>d?"up":"down"),g)},this.applyBounds=function(a){var b,c,e,f,h,i;if(a&&g.bounds!==a)return g.bounds=a,Qa.update(!0);if(eb(!0),fb(),u){if(b=Qa.x,c=Qa.y,b>x?b=x:D>b&&(b=D),c>G?c=G:O>c&&(c=O),(Qa.x!==b||Qa.y!==c)&&(e=!0,Qa.x=Qa.endX=b,za?Qa.endRotation=b:Qa.y=Qa.endY=c,ca=!0,db(!0),Qa.autoScroll&&!Qa.isDragging))for(Z(d.parentNode),f=d,L.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=t.scrollTop?t.scrollTop:s.body.scrollTop,L.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=t.scrollLeft?t.scrollLeft:s.body.scrollLeft;f&&!i;)i=X(f.parentNode),h=i?L:f.parentNode,Fa&&h.scrollTop>h._gsMaxScrollY&&(h.scrollTop=h._gsMaxScrollY),Ea&&h.scrollLeft>h._gsMaxScrollX&&(h.scrollLeft=h._gsMaxScrollX),f=h;Qa.isThrowing&&(e||Qa.endX>x||Qa.endX<D||Qa.endY>G||Qa.endY<O)&&ib(g.throwProps,e)}return Qa},this.update=function(a,b,c){var e=Qa.x,f=Qa.y;return jb(!b),a?Qa.applyBounds():(ca&&c&&db(!0),eb(!0)),b&&(rb(Qa.pointerX,Qa.pointerY),ca&&db(!0)),Qa.isPressed&&!b&&(Ea&&Math.abs(e-Qa.x)>.01||Fa&&Math.abs(f-Qa.y)>.01&&!za)&&kb(),Qa.autoScroll&&(Z(d.parentNode),Xa=Qa.isDragging,db(!0)),Qa.autoScroll&&(W(d,tb),V(d,tb)),Qa},this.enable=function(a){var e,j,k;if("soft"!==a){for(j=Ta.length;--j>-1;)k=Ta[j],Ia(k,"mousedown",pb),Ia(k,"touchstart",pb),Ia(k,"click",ub,!0),za||ba(k,"cursor",g.cursor||"move"),ba(k,"touchCallout","none"),ba(k,"touchAction",Ea===Fa?"none":Ea?"pan-y":"pan-x"),sa(k)&&ba(k.ownerSVGElement||k,"touchAction",Ea===Fa?"none":Ea?"pan-y":"pan-x"),this.vars.allowContextMenu||Ia(k,"contextmenu",cb);Pa(Ta,!1)}return V(d,tb),h=!0,f&&"soft"!==a&&f.track(i||d,ya?"x,y":za?"rotation":"top,left"),i&&i.enable(),d._gsDragID=e="d"+F++,E[e]=this,i&&(i.element._gsDragID=e),b.set(d,{x:"+=0",overwrite:!1,data:"_draggable"}),qa={t:d,data:B?T:d._gsTransform,tween:{},setRatio:B?function(){b.set(d,R)}:c._internals.setTransformRatio||c._internals.set3DTransformRatio},kb(),Qa.update(!0),Qa},this.disable=function(a){var b,c,e=Qa.isDragging;if(!za)for(b=Ta.length;--b>-1;)ba(Ta[b],"cursor",null);if("soft"!==a){for(b=Ta.length;--b>-1;)c=Ta[b],ba(c,"touchCallout",null),ba(c,"touchAction",null),Ja(c,"mousedown",pb),Ja(c,"touchstart",pb),Ja(c,"click",ub),Ja(c,"contextmenu",cb);Pa(Ta,!0),la&&(Ja(la,"touchcancel",sb),Ja(la,"touchend",sb),Ja(la,"touchmove",qb)),Ja(s,"mouseup",sb),Ja(s,"mousemove",qb)}return W(d,tb),h=!1,f&&"soft"!==a&&f.untrack(i||d,ya?"x,y":za?"rotation":"top,left"),i&&i.disable(),Q(db),Qa.isDragging=Qa.isPressed=ka=!1,e&&ia(Qa,"dragend","onDragEnd"),Qa},this.enabled=function(a,b){return arguments.length?a?Qa.enable(b):Qa.disable(b):h},this.kill=function(){return Qa.isThrowing=!1,b.killTweensOf(i||d,!0,Ua),Qa.disable(),b.set(Ta,{clearProps:"userSelect"}),delete E[d._gsDragID],Qa},-1!==xa.indexOf("scroll")&&(i=this.scrollProxy=new Ra(d,S({onKill:function(){Qa.isPressed&&sb(null)}},g)),d.style.overflowY=Fa&&!Ga?"auto":"hidden",d.style.overflowX=Ea&&!Ga?"auto":"hidden",d=i.content),g.force3D!==!1&&b.set(d,{force3D:!0}),za?Ua.rotation=1:(Ea&&(Ua[Ca]=1),Fa&&(Ua[Da]=1)),za?(R=o,T=R.css,R.overwrite=!1):ya&&(R=Ea&&Fa?l:Ea?m:n,T=R.css,R.overwrite=!1),this.enable()},Ta=Sa.prototype=new a;Ta.constructor=Sa,Ta.pointerX=Ta.pointerY=Ta.startX=Ta.startY=Ta.deltaX=Ta.deltaY=0,Ta.isDragging=Ta.isPressed=!1,Sa.version="0.16.4",Sa.zIndex=1e3,Ia(s,"touchcancel",function(){}),Ia(s,"contextmenu",function(a){var b;for(b in E)E[b].isPressed&&E[b].endDrag()}),Sa.create=function(a,c){"string"==typeof a&&(a=b.selector(a));for(var d=a&&0!==a.length?Ea(a)?Fa(a):[a]:[],e=d.length;--e>-1;)d[e]=new Sa(d[e],c);return d},Sa.get=function(a){return E[(_(a)||{})._gsDragID]},Sa.timeSinceDrag=function(){return(A()-J)/1e3};var Ua={},Va=function(a){var b,c,d=0,e=0;for(a=_(a),b=a.offsetWidth,c=a.offsetHeight;a;)d+=a.offsetTop,e+=a.offsetLeft,a=a.offsetParent;return{top:d,left:e,width:b,height:c}},Wa=function(a,b){if(a===window)return Ua.left=Ua.top=0,Ua.width=Ua.right=t.clientWidth||a.innerWidth||s.body.clientWidth||0,Ua.height=Ua.bottom=(a.innerHeight||0)-20<t.clientHeight?t.clientHeight:a.innerHeight||s.body.clientHeight||0,Ua;var c=a.pageX!==b?{left:a.pageX-U(),top:a.pageY-T(),right:a.pageX-U()+1,bottom:a.pageY-T()+1}:a.nodeType||a.left===b||a.top===b?B?Va(a):_(a).getBoundingClientRect():a;return c.right===b&&c.width!==b?(c.right=c.left+c.width,c.bottom=c.top+c.height):c.width===b&&(c={width:c.right-c.left,height:c.bottom-c.top,right:c.right,left:c.left,bottom:c.bottom,top:c.top}),c};return Sa.hitTest=function(a,b,c){if(a===b)return!1;var d,e,f,g=Wa(a),h=Wa(b),i=h.left>g.right||h.right<g.left||h.top>g.bottom||h.bottom<g.top;return i||!c?!i:(f=-1!==(c+"").indexOf("%"),c=parseFloat(c)||0,d={left:Math.max(g.left,h.left),top:Math.max(g.top,h.top)},d.width=Math.min(g.right,h.right)-d.left,d.height=Math.min(g.bottom,h.bottom)-d.top,d.width<0||d.height<0?!1:f?(c*=.01,e=d.width*d.height,e>=g.width*g.height*c||e>=h.width*h.height*c):d.width>c&&d.height>c)},C.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",Sa},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),require("../plugins/CSSPlugin.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite","CSSPlugin"],b)}("Draggable");
/*!
 * VERSION: 1.20.5
 * DATE: 2018-05-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.20.5",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=("undefined"!=typeof window?window:O.defaultView||{getComputedStyle:function(){}}).getComputedStyle,_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=i.r(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod.call(this._tween,h.rotation,this.t,this._tween):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j?"function"==typeof j?j:Math.round:j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m]+"",x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px")?Math.round:!1,!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",Math.round,!0).appendXtra("",p[1],u[1]-p[1],",",Math.round).appendXtra("",p[2],u[2]-p[2],y?",":B,Math.round),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2)?Math.round:!1,0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!Ha||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Na(a))},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h=!$(a)||"none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(e=a.transform.baseVal.consolidate().matrix,d="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")",c=0)),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",-1!==E.indexOf("%")&&(m.width=_(a,"width"),m.height=_(a,"height")),O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ");
}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="","co"===a.substr(0,2)?a:ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=e.r(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=e.r(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&(b.r=a[b.p]),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("CSSPlugin");
/*!
 * PEP v0.4.3 | https://github.com/jquery/PEP
 * Copyright jQuery Foundation and other contributors | http://jquery.org/license
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global.PointerEventsPolyfill = factory());
}(this, function () {
    'use strict';

    /**
     * This is the constructor for new PointerEvents.
     *
     * New Pointer Events must be given a type, and an optional dictionary of
     * initialization properties.
     *
     * Due to certain platform requirements, events returned from the constructor
     * identify as MouseEvents.
     *
     * @constructor
     * @param {String} inType The type of the event to create.
     * @param {Object} [inDict] An optional dictionary of initial event properties.
     * @return {Event} A new PointerEvent of type `inType`, initialized with properties from `inDict`.
     */
    var MOUSE_PROPS = [
        'bubbles',
        'cancelable',
        'view',
        'detail',
        'screenX',
        'screenY',
        'clientX',
        'clientY',
        'ctrlKey',
        'altKey',
        'shiftKey',
        'metaKey',
        'button',
        'relatedTarget',
        'pageX',
        'pageY'
    ];

    var MOUSE_DEFAULTS = [
        false,
        false,
        null,
        null,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null,
        0,
        0
    ];

    function PointerEvent(inType, inDict) {
        inDict = inDict || Object.create(null);

        var e = document.createEvent('Event');
        e.initEvent(inType, inDict.bubbles || false, inDict.cancelable || false);

        // define inherited MouseEvent properties
        // skip bubbles and cancelable since they're set above in initEvent()
        for (var i = 2, p; i < MOUSE_PROPS.length; i++) {
            p = MOUSE_PROPS[i];
            e[p] = inDict[p] || MOUSE_DEFAULTS[i];
        }
        e.buttons = inDict.buttons || 0;

        // Spec requires that pointers without pressure specified use 0.5 for down
        // state and 0 for up state.
        var pressure = 0;

        if (inDict.pressure && e.buttons) {
            pressure = inDict.pressure;
        } else {
            pressure = e.buttons ? 0.5 : 0;
        }

        // add x/y properties aliased to clientX/Y
        e.x = e.clientX;
        e.y = e.clientY;

        // define the properties of the PointerEvent interface
        e.pointerId = inDict.pointerId || 0;
        e.width = inDict.width || 0;
        e.height = inDict.height || 0;
        e.pressure = pressure;
        e.tiltX = inDict.tiltX || 0;
        e.tiltY = inDict.tiltY || 0;
        e.twist = inDict.twist || 0;
        e.tangentialPressure = inDict.tangentialPressure || 0;
        e.pointerType = inDict.pointerType || '';
        e.hwTimestamp = inDict.hwTimestamp || 0;
        e.isPrimary = inDict.isPrimary || false;
        return e;
    }

    /**
     * This module implements a map of pointer states
     */
    var USE_MAP = window.Map && window.Map.prototype.forEach;
    var PointerMap = USE_MAP ? Map : SparseArrayMap;

    function SparseArrayMap() {
        this.array = [];
        this.size = 0;
    }

    SparseArrayMap.prototype = {
        set: function (k, v) {
            if (v === undefined) {
                return this.delete(k);
            }
            if (!this.has(k)) {
                this.size++;
            }
            this.array[k] = v;
        },
        has: function (k) {
            return this.array[k] !== undefined;
        },
        delete: function (k) {
            if (this.has(k)) {
                delete this.array[k];
                this.size--;
            }
        },
        get: function (k) {
            return this.array[k];
        },
        clear: function () {
            this.array.length = 0;
            this.size = 0;
        },

        // return value, key, map
        forEach: function (callback, thisArg) {
            return this.array.forEach(function (v, k) {
                callback.call(thisArg, v, k, this);
            }, this);
        }
    };

    var CLONE_PROPS = [

        // MouseEvent
        'bubbles',
        'cancelable',
        'view',
        'detail',
        'screenX',
        'screenY',
        'clientX',
        'clientY',
        'ctrlKey',
        'altKey',
        'shiftKey',
        'metaKey',
        'button',
        'relatedTarget',

        // DOM Level 3
        'buttons',

        // PointerEvent
        'pointerId',
        'width',
        'height',
        'pressure',
        'tiltX',
        'tiltY',
        'pointerType',
        'hwTimestamp',
        'isPrimary',

        // event instance
        'type',
        'target',
        'currentTarget',
        'which',
        'pageX',
        'pageY',
        'timeStamp'
    ];

    var CLONE_DEFAULTS = [

        // MouseEvent
        false,
        false,
        null,
        null,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null,

        // DOM Level 3
        0,

        // PointerEvent
        0,
        0,
        0,
        0,
        0,
        0,
        '',
        0,
        false,

        // event instance
        '',
        null,
        null,
        0,
        0,
        0,
        0
    ];

    var BOUNDARY_EVENTS = {
        'pointerover': 1,
        'pointerout': 1,
        'pointerenter': 1,
        'pointerleave': 1
    };

    var HAS_SVG_INSTANCE = (typeof SVGElementInstance !== 'undefined');

    /**
     * This module is for normalizing events. Mouse and Touch events will be
     * collected here, and fire PointerEvents that have the same semantics, no
     * matter the source.
     * Events fired:
     *   - pointerdown: a pointing is added
     *   - pointerup: a pointer is removed
     *   - pointermove: a pointer is moved
     *   - pointerover: a pointer crosses into an element
     *   - pointerout: a pointer leaves an element
     *   - pointercancel: a pointer will no longer generate events
     */
    var dispatcher = {
        pointermap: new PointerMap(),
        eventMap: Object.create(null),
        captureInfo: Object.create(null),

        // Scope objects for native events.
        // This exists for ease of testing.
        eventSources: Object.create(null),
        eventSourceList: [],
        /**
         * Add a new event source that will generate pointer events.
         *
         * `inSource` must contain an array of event names named `events`, and
         * functions with the names specified in the `events` array.
         * @param {string} name A name for the event source
         * @param {Object} source A new source of platform events.
         */
        registerSource: function (name, source) {
            var s = source;
            var newEvents = s.events;
            if (newEvents) {
                newEvents.forEach(function (e) {
                    if (s[e]) {
                        this.eventMap[e] = s[e].bind(s);
                    }
                }, this);
                this.eventSources[name] = s;
                this.eventSourceList.push(s);
            }
        },
        register: function (element) {
            var l = this.eventSourceList.length;
            for (var i = 0, es;
                (i < l) && (es = this.eventSourceList[i]); i++) {

                // call eventsource register
                es.register.call(es, element);
            }
        },
        unregister: function (element) {
            var l = this.eventSourceList.length;
            for (var i = 0, es;
                (i < l) && (es = this.eventSourceList[i]); i++) {

                // call eventsource register
                es.unregister.call(es, element);
            }
        },
        contains: /*scope.external.contains || */ function (container, contained) {
            try {
                return container.contains(contained);
            } catch (ex) {

                // most likely: https://bugzilla.mozilla.org/show_bug.cgi?id=208427
                return false;
            }
        },

        // EVENTS
        down: function (inEvent) {
            inEvent.bubbles = true;
            this.fireEvent('pointerdown', inEvent);
        },
        move: function (inEvent) {
            inEvent.bubbles = true;
            this.fireEvent('pointermove', inEvent);
        },
        up: function (inEvent) {
            inEvent.bubbles = true;
            this.fireEvent('pointerup', inEvent);
        },
        enter: function (inEvent) {
            inEvent.bubbles = false;
            this.fireEvent('pointerenter', inEvent);
        },
        leave: function (inEvent) {
            inEvent.bubbles = false;
            this.fireEvent('pointerleave', inEvent);
        },
        over: function (inEvent) {
            inEvent.bubbles = true;
            this.fireEvent('pointerover', inEvent);
        },
        out: function (inEvent) {
            inEvent.bubbles = true;
            this.fireEvent('pointerout', inEvent);
        },
        cancel: function (inEvent) {
            inEvent.bubbles = true;
            this.fireEvent('pointercancel', inEvent);
        },
        leaveOut: function (event) {
            this.out(event);
            this.propagate(event, this.leave, false);
        },
        enterOver: function (event) {
            this.over(event);
            this.propagate(event, this.enter, true);
        },

        // LISTENER LOGIC
        eventHandler: function (inEvent) {

            // This is used to prevent multiple dispatch of pointerevents from
            // platform events. This can happen when two elements in different scopes
            // are set up to create pointer events, which is relevant to Shadow DOM.
            if (inEvent._handledByPE) {
                return;
            }
            var type = inEvent.type;
            var fn = this.eventMap && this.eventMap[type];
            if (fn) {
                fn(inEvent);
            }
            inEvent._handledByPE = true;
        },

        // set up event listeners
        listen: function (target, events) {
            events.forEach(function (e) {
                this.addEvent(target, e);
            }, this);
        },

        // remove event listeners
        unlisten: function (target, events) {
            events.forEach(function (e) {
                this.removeEvent(target, e);
            }, this);
        },
        addEvent: /*scope.external.addEvent || */ function (target, eventName) {
            target.addEventListener(eventName, this.boundHandler);
        },
        removeEvent: /*scope.external.removeEvent || */ function (target, eventName) {
            target.removeEventListener(eventName, this.boundHandler);
        },

        // EVENT CREATION AND TRACKING
        /**
         * Creates a new Event of type `inType`, based on the information in
         * `inEvent`.
         *
         * @param {string} inType A string representing the type of event to create
         * @param {Event} inEvent A platform event with a target
         * @return {Event} A PointerEvent of type `inType`
         */
        makeEvent: function (inType, inEvent) {

            // relatedTarget must be null if pointer is captured
            if (this.captureInfo[inEvent.pointerId]) {
                inEvent.relatedTarget = null;
            }
            var e = new PointerEvent(inType, inEvent);
            if (inEvent.preventDefault) {
                e.preventDefault = inEvent.preventDefault;
            }
            e._target = e._target || inEvent.target;
            return e;
        },

        // make and dispatch an event in one call
        fireEvent: function (inType, inEvent) {
            var e = this.makeEvent(inType, inEvent);
            return this.dispatchEvent(e);
        },
        /**
         * Returns a snapshot of inEvent, with writable properties.
         *
         * @param {Event} inEvent An event that contains properties to copy.
         * @return {Object} An object containing shallow copies of `inEvent`'s
         *    properties.
         */
        cloneEvent: function (inEvent) {
            var eventCopy = Object.create(null);
            var p;
            for (var i = 0; i < CLONE_PROPS.length; i++) {
                p = CLONE_PROPS[i];
                eventCopy[p] = inEvent[p] || CLONE_DEFAULTS[i];

                // Work around SVGInstanceElement shadow tree
                // Return the <use> element that is represented by the instance for Safari, Chrome, IE.
                // This is the behavior implemented by Firefox.
                if (HAS_SVG_INSTANCE && (p === 'target' || p === 'relatedTarget')) {
                    if (eventCopy[p] instanceof SVGElementInstance) {
                        eventCopy[p] = eventCopy[p].correspondingUseElement;
                    }
                }
            }

            // keep the semantics of preventDefault
            if (inEvent.preventDefault) {
                eventCopy.preventDefault = function () {
                    inEvent.preventDefault();
                };
            }
            return eventCopy;
        },
        getTarget: function (inEvent) {
            var capture = this.captureInfo[inEvent.pointerId];
            if (!capture) {
                return inEvent._target;
            }
            if (inEvent._target === capture || !(inEvent.type in BOUNDARY_EVENTS)) {
                return capture;
            }
        },
        propagate: function (event, fn, propagateDown) {
            var target = event.target;
            var targets = [];

            // Order of conditions due to document.contains() missing in IE.
            while (target !== document && !target.contains(event.relatedTarget)) {
                targets.push(target);
                target = target.parentNode;

                // Touch: Do not propagate if node is detached.
                if (!target) {
                    return;
                }
            }
            if (propagateDown) {
                targets.reverse();
            }
            targets.forEach(function (target) {
                event.target = target;
                fn.call(this, event);
            }, this);
        },
        setCapture: function (inPointerId, inTarget, skipDispatch) {
            if (this.captureInfo[inPointerId]) {
                this.releaseCapture(inPointerId, skipDispatch);
            }

            this.captureInfo[inPointerId] = inTarget;
            this.implicitRelease = this.releaseCapture.bind(this, inPointerId, skipDispatch);
            document.addEventListener('pointerup', this.implicitRelease);
            document.addEventListener('pointercancel', this.implicitRelease);

            var e = new PointerEvent('gotpointercapture');
            e.pointerId = inPointerId;
            e._target = inTarget;

            if (!skipDispatch) {
                this.asyncDispatchEvent(e);
            }
        },
        releaseCapture: function (inPointerId, skipDispatch) {
            var t = this.captureInfo[inPointerId];
            if (!t) {
                return;
            }

            this.captureInfo[inPointerId] = undefined;
            document.removeEventListener('pointerup', this.implicitRelease);
            document.removeEventListener('pointercancel', this.implicitRelease);

            var e = new PointerEvent('lostpointercapture');
            e.pointerId = inPointerId;
            e._target = t;

            if (!skipDispatch) {
                this.asyncDispatchEvent(e);
            }
        },
        /**
         * Dispatches the event to its target.
         *
         * @param {Event} inEvent The event to be dispatched.
         * @return {Boolean} True if an event handler returns true, false otherwise.
         */
        dispatchEvent: /*scope.external.dispatchEvent || */ function (inEvent) {
            var t = this.getTarget(inEvent);
            if (t) {
                return t.dispatchEvent(inEvent);
            }
        },
        asyncDispatchEvent: function (inEvent) {
            requestAnimationFrame(this.dispatchEvent.bind(this, inEvent));
        }
    };
    dispatcher.boundHandler = dispatcher.eventHandler.bind(dispatcher);

    var targeting = {
        shadow: function (inEl) {
            if (inEl) {
                return inEl.shadowRoot || inEl.webkitShadowRoot;
            }
        },
        canTarget: function (shadow) {
            return shadow && Boolean(shadow.elementFromPoint);
        },
        targetingShadow: function (inEl) {
            var s = this.shadow(inEl);
            if (this.canTarget(s)) {
                return s;
            }
        },
        olderShadow: function (shadow) {
            var os = shadow.olderShadowRoot;
            if (!os) {
                var se = shadow.querySelector('shadow');
                if (se) {
                    os = se.olderShadowRoot;
                }
            }
            return os;
        },
        allShadows: function (element) {
            var shadows = [];
            var s = this.shadow(element);
            while (s) {
                shadows.push(s);
                s = this.olderShadow(s);
            }
            return shadows;
        },
        searchRoot: function (inRoot, x, y) {
            if (inRoot) {
                var t = inRoot.elementFromPoint(x, y);
                var st, sr;

                // is element a shadow host?
                sr = this.targetingShadow(t);
                while (sr) {

                    // find the the element inside the shadow root
                    st = sr.elementFromPoint(x, y);
                    if (!st) {

                        // check for older shadows
                        sr = this.olderShadow(sr);
                    } else {

                        // shadowed element may contain a shadow root
                        var ssr = this.targetingShadow(st);
                        return this.searchRoot(ssr, x, y) || st;
                    }
                }

                // light dom element is the target
                return t;
            }
        },
        owner: function (element) {
            var s = element;

            // walk up until you hit the shadow root or document
            while (s.parentNode) {
                s = s.parentNode;
            }

            // the owner element is expected to be a Document or ShadowRoot
            if (s.nodeType !== Node.DOCUMENT_NODE && s.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
                s = document;
            }
            return s;
        },
        findTarget: function (inEvent) {
            var x = inEvent.clientX;
            var y = inEvent.clientY;

            // if the listener is in the shadow root, it is much faster to start there
            var s = this.owner(inEvent.target);

            // if x, y is not in this root, fall back to document search
            if (!s.elementFromPoint(x, y)) {
                s = document;
            }
            return this.searchRoot(s, x, y);
        }
    };

    var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
    var map = Array.prototype.map.call.bind(Array.prototype.map);
    var toArray = Array.prototype.slice.call.bind(Array.prototype.slice);
    var filter = Array.prototype.filter.call.bind(Array.prototype.filter);
    var MO = window.MutationObserver || window.WebKitMutationObserver;
    var SELECTOR = '[touch-action]';
    var OBSERVER_INIT = {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['touch-action']
    };

    function Installer(add, remove, changed, binder) {
        this.addCallback = add.bind(binder);
        this.removeCallback = remove.bind(binder);
        this.changedCallback = changed.bind(binder);
        if (MO) {
            this.observer = new MO(this.mutationWatcher.bind(this));
        }
    }

    Installer.prototype = {
        watchSubtree: function (target) {

            // Only watch scopes that can target find, as these are top-level.
            // Otherwise we can see duplicate additions and removals that add noise.
            //
            // TODO(dfreedman): For some instances with ShadowDOMPolyfill, we can see
            // a removal without an insertion when a node is redistributed among
            // shadows. Since it all ends up correct in the document, watching only
            // the document will yield the correct mutations to watch.
            if (this.observer && targeting.canTarget(target)) {
                this.observer.observe(target, OBSERVER_INIT);
            }
        },
        enableOnSubtree: function (target) {
            this.watchSubtree(target);
            if (target === document && document.readyState !== 'complete') {
                this.installOnLoad();
            } else {
                this.installNewSubtree(target);
            }
        },
        installNewSubtree: function (target) {
            forEach(this.findElements(target), this.addElement, this);
        },
        findElements: function (target) {
            if (target.querySelectorAll) {
                return target.querySelectorAll(SELECTOR);
            }
            return [];
        },
        removeElement: function (el) {
            this.removeCallback(el);
        },
        addElement: function (el) {
            this.addCallback(el);
        },
        elementChanged: function (el, oldValue) {
            this.changedCallback(el, oldValue);
        },
        concatLists: function (accum, list) {
            return accum.concat(toArray(list));
        },

        // register all touch-action = none nodes on document load
        installOnLoad: function () {
            document.addEventListener('readystatechange', function () {
                if (document.readyState === 'complete') {
                    this.installNewSubtree(document);
                }
            }.bind(this));
        },
        isElement: function (n) {
            return n.nodeType === Node.ELEMENT_NODE;
        },
        flattenMutationTree: function (inNodes) {

            // find children with touch-action
            var tree = map(inNodes, this.findElements, this);

            // make sure the added nodes are accounted for
            tree.push(filter(inNodes, this.isElement));

            // flatten the list
            return tree.reduce(this.concatLists, []);
        },
        mutationWatcher: function (mutations) {
            mutations.forEach(this.mutationHandler, this);
        },
        mutationHandler: function (m) {
            if (m.type === 'childList') {
                var added = this.flattenMutationTree(m.addedNodes);
                added.forEach(this.addElement, this);
                var removed = this.flattenMutationTree(m.removedNodes);
                removed.forEach(this.removeElement, this);
            } else if (m.type === 'attributes') {
                this.elementChanged(m.target, m.oldValue);
            }
        }
    };

    function shadowSelector(v) {
        return 'body /shadow-deep/ ' + selector(v);
    }

    function selector(v) {
        return '[touch-action="' + v + '"]';
    }

    function rule(v) {
        return '{ -ms-touch-action: ' + v + '; touch-action: ' + v + '; }';
    }
    var attrib2css = [
        'none',
        'auto',
        'pan-x',
        'pan-y',
        {
            rule: 'pan-x pan-y',
            selectors: [
                'pan-x pan-y',
                'pan-y pan-x'
            ]
        }
    ];
    var styles = '';

    // only install stylesheet if the browser has touch action support
    var hasNativePE = window.PointerEvent || window.MSPointerEvent;

    // only add shadow selectors if shadowdom is supported
    var hasShadowRoot = !window.ShadowDOMPolyfill && document.head.createShadowRoot;

    function applyAttributeStyles() {
        if (hasNativePE) {
            attrib2css.forEach(function (r) {
                if (String(r) === r) {
                    styles += selector(r) + rule(r) + '\n';
                    if (hasShadowRoot) {
                        styles += shadowSelector(r) + rule(r) + '\n';
                    }
                } else {
                    styles += r.selectors.map(selector) + rule(r.rule) + '\n';
                    if (hasShadowRoot) {
                        styles += r.selectors.map(shadowSelector) + rule(r.rule) + '\n';
                    }
                }
            });

            var el = document.createElement('style');
            el.textContent = styles;
            document.head.appendChild(el);
        }
    }

    var pointermap = dispatcher.pointermap;

    // radius around touchend that swallows mouse events
    var DEDUP_DIST = 25;

    // left, middle, right, back, forward
    var BUTTON_TO_BUTTONS = [1, 4, 2, 8, 16];

    var HAS_BUTTONS = false;
    try {
        HAS_BUTTONS = new MouseEvent('test', {
            buttons: 1
        }).buttons === 1;
    } catch (e) {}

    // handler block for native mouse events
    var mouseEvents = {
        POINTER_ID: 1,
        POINTER_TYPE: 'mouse',
        events: [
            'mousedown',
            'mousemove',
            'mouseup',
            'mouseover',
            'mouseout'
        ],
        register: function (target) {
            dispatcher.listen(target, this.events);
        },
        unregister: function (target) {
            dispatcher.unlisten(target, this.events);
        },
        lastTouches: [],

        // collide with the global mouse listener
        isEventSimulatedFromTouch: function (inEvent) {
            var lts = this.lastTouches;
            var x = inEvent.clientX;
            var y = inEvent.clientY;
            for (var i = 0, l = lts.length, t; i < l && (t = lts[i]); i++) {

                // simulated mouse events will be swallowed near a primary touchend
                var dx = Math.abs(x - t.x);
                var dy = Math.abs(y - t.y);
                if (dx <= DEDUP_DIST && dy <= DEDUP_DIST) {
                    return true;
                }
            }
        },
        prepareEvent: function (inEvent) {
            var e = dispatcher.cloneEvent(inEvent);

            // forward mouse preventDefault
            var pd = e.preventDefault;
            e.preventDefault = function () {
                inEvent.preventDefault();
                pd();
            };
            e.pointerId = this.POINTER_ID;
            e.isPrimary = true;
            e.pointerType = this.POINTER_TYPE;
            return e;
        },
        prepareButtonsForMove: function (e, inEvent) {
            var p = pointermap.get(this.POINTER_ID);

            // Update buttons state after possible out-of-document mouseup.
            if (inEvent.which === 0 || !p) {
                e.buttons = 0;
            } else {
                e.buttons = p.buttons;
            }
            inEvent.buttons = e.buttons;
        },
        mousedown: function (inEvent) {
            if (!this.isEventSimulatedFromTouch(inEvent)) {
                var p = pointermap.get(this.POINTER_ID);
                var e = this.prepareEvent(inEvent);
                if (!HAS_BUTTONS) {
                    e.buttons = BUTTON_TO_BUTTONS[e.button];
                    if (p) {
                        e.buttons |= p.buttons;
                    }
                    inEvent.buttons = e.buttons;
                }
                pointermap.set(this.POINTER_ID, inEvent);
                if (!p || p.buttons === 0) {
                    dispatcher.down(e);
                } else {
                    dispatcher.move(e);
                }
            }
        },
        mousemove: function (inEvent) {
            if (!this.isEventSimulatedFromTouch(inEvent)) {
                var e = this.prepareEvent(inEvent);
                if (!HAS_BUTTONS) {
                    this.prepareButtonsForMove(e, inEvent);
                }
                e.button = -1;
                pointermap.set(this.POINTER_ID, inEvent);
                dispatcher.move(e);
            }
        },
        mouseup: function (inEvent) {
            if (!this.isEventSimulatedFromTouch(inEvent)) {
                var p = pointermap.get(this.POINTER_ID);
                var e = this.prepareEvent(inEvent);
                if (!HAS_BUTTONS) {
                    var up = BUTTON_TO_BUTTONS[e.button];

                    // Produces wrong state of buttons in Browsers without `buttons` support
                    // when a mouse button that was pressed outside the document is released
                    // inside and other buttons are still pressed down.
                    e.buttons = p ? p.buttons & ~up : 0;
                    inEvent.buttons = e.buttons;
                }
                pointermap.set(this.POINTER_ID, inEvent);

                // Support: Firefox <=44 only
                // FF Ubuntu includes the lifted button in the `buttons` property on
                // mouseup.
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1223366
                e.buttons &= ~BUTTON_TO_BUTTONS[e.button];
                if (e.buttons === 0) {
                    dispatcher.up(e);
                } else {
                    dispatcher.move(e);
                }
            }
        },
        mouseover: function (inEvent) {
            if (!this.isEventSimulatedFromTouch(inEvent)) {
                var e = this.prepareEvent(inEvent);
                if (!HAS_BUTTONS) {
                    this.prepareButtonsForMove(e, inEvent);
                }
                e.button = -1;
                pointermap.set(this.POINTER_ID, inEvent);
                dispatcher.enterOver(e);
            }
        },
        mouseout: function (inEvent) {
            if (!this.isEventSimulatedFromTouch(inEvent)) {
                var e = this.prepareEvent(inEvent);
                if (!HAS_BUTTONS) {
                    this.prepareButtonsForMove(e, inEvent);
                }
                e.button = -1;
                dispatcher.leaveOut(e);
            }
        },
        cancel: function (inEvent) {
            var e = this.prepareEvent(inEvent);
            dispatcher.cancel(e);
            this.deactivateMouse();
        },
        deactivateMouse: function () {
            pointermap.delete(this.POINTER_ID);
        }
    };

    var captureInfo = dispatcher.captureInfo;
    var findTarget = targeting.findTarget.bind(targeting);
    var allShadows = targeting.allShadows.bind(targeting);
    var pointermap$1 = dispatcher.pointermap;

    // This should be long enough to ignore compat mouse events made by touch
    var DEDUP_TIMEOUT = 2500;
    var CLICK_COUNT_TIMEOUT = 200;
    var ATTRIB = 'touch-action';
    var INSTALLER;

    // handler block for native touch events
    var touchEvents = {
        events: [
            'touchstart',
            'touchmove',
            'touchend',
            'touchcancel'
        ],
        register: function (target) {
            INSTALLER.enableOnSubtree(target);
        },
        unregister: function () {

            // TODO(dfreedman): is it worth it to disconnect the MO?
        },
        elementAdded: function (el) {
            var a = el.getAttribute(ATTRIB);
            var st = this.touchActionToScrollType(a);
            if (st) {
                el._scrollType = st;
                dispatcher.listen(el, this.events);

                // set touch-action on shadows as well
                allShadows(el).forEach(function (s) {
                    s._scrollType = st;
                    dispatcher.listen(s, this.events);
                }, this);
            }
        },
        elementRemoved: function (el) {
            el._scrollType = undefined;
            dispatcher.unlisten(el, this.events);

            // remove touch-action from shadow
            allShadows(el).forEach(function (s) {
                s._scrollType = undefined;
                dispatcher.unlisten(s, this.events);
            }, this);
        },
        elementChanged: function (el, oldValue) {
            var a = el.getAttribute(ATTRIB);
            var st = this.touchActionToScrollType(a);
            var oldSt = this.touchActionToScrollType(oldValue);

            // simply update scrollType if listeners are already established
            if (st && oldSt) {
                el._scrollType = st;
                allShadows(el).forEach(function (s) {
                    s._scrollType = st;
                }, this);
            } else if (oldSt) {
                this.elementRemoved(el);
            } else if (st) {
                this.elementAdded(el);
            }
        },
        scrollTypes: {
            EMITTER: 'none',
            XSCROLLER: 'pan-x',
            YSCROLLER: 'pan-y',
            SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/
        },
        touchActionToScrollType: function (touchAction) {
            var t = touchAction;
            var st = this.scrollTypes;
            if (t === 'none') {
                return 'none';
            } else if (t === st.XSCROLLER) {
                return 'X';
            } else if (t === st.YSCROLLER) {
                return 'Y';
            } else if (st.SCROLLER.exec(t)) {
                return 'XY';
            }
        },
        POINTER_TYPE: 'touch',
        firstTouch: null,
        isPrimaryTouch: function (inTouch) {
            return this.firstTouch === inTouch.identifier;
        },
        setPrimaryTouch: function (inTouch) {

            // set primary touch if there no pointers, or the only pointer is the mouse
            if (pointermap$1.size === 0 || (pointermap$1.size === 1 && pointermap$1.has(1))) {
                this.firstTouch = inTouch.identifier;
                this.firstXY = {
                    X: inTouch.clientX,
                    Y: inTouch.clientY
                };
                this.scrolling = false;
                this.cancelResetClickCount();
            }
        },
        removePrimaryPointer: function (inPointer) {
            if (inPointer.isPrimary) {
                this.firstTouch = null;
                this.firstXY = null;
                this.resetClickCount();
            }
        },
        clickCount: 0,
        resetId: null,
        resetClickCount: function () {
            var fn = function () {
                this.clickCount = 0;
                this.resetId = null;
            }.bind(this);
            this.resetId = setTimeout(fn, CLICK_COUNT_TIMEOUT);
        },
        cancelResetClickCount: function () {
            if (this.resetId) {
                clearTimeout(this.resetId);
            }
        },
        typeToButtons: function (type) {
            var ret = 0;
            if (type === 'touchstart' || type === 'touchmove') {
                ret = 1;
            }
            return ret;
        },
        touchToPointer: function (inTouch) {
            var cte = this.currentTouchEvent;
            var e = dispatcher.cloneEvent(inTouch);

            // We reserve pointerId 1 for Mouse.
            // Touch identifiers can start at 0.
            // Add 2 to the touch identifier for compatibility.
            var id = e.pointerId = inTouch.identifier + 2;
            e.target = captureInfo[id] || findTarget(e);
            e.bubbles = true;
            e.cancelable = true;
            e.detail = this.clickCount;
            e.button = 0;
            e.buttons = this.typeToButtons(cte.type);
            e.width = (inTouch.radiusX || inTouch.webkitRadiusX || 0) * 2;
            e.height = (inTouch.radiusY || inTouch.webkitRadiusY || 0) * 2;
            e.pressure = inTouch.force || inTouch.webkitForce || 0.5;
            e.isPrimary = this.isPrimaryTouch(inTouch);
            e.pointerType = this.POINTER_TYPE;

            // forward modifier keys
            e.altKey = cte.altKey;
            e.ctrlKey = cte.ctrlKey;
            e.metaKey = cte.metaKey;
            e.shiftKey = cte.shiftKey;

            // forward touch preventDefaults
            var self = this;
            e.preventDefault = function () {
                self.scrolling = false;
                self.firstXY = null;
                cte.preventDefault();
            };
            return e;
        },
        processTouches: function (inEvent, inFunction) {
            var tl = inEvent.changedTouches;
            this.currentTouchEvent = inEvent;
            for (var i = 0, t; i < tl.length; i++) {
                t = tl[i];
                inFunction.call(this, this.touchToPointer(t));
            }
        },

        // For single axis scrollers, determines whether the element should emit
        // pointer events or behave as a scroller
        shouldScroll: function (inEvent) {
            if (this.firstXY) {
                var ret;
                var scrollAxis = inEvent.currentTarget._scrollType;
                if (scrollAxis === 'none') {

                    // this element is a touch-action: none, should never scroll
                    ret = false;
                } else if (scrollAxis === 'XY') {

                    // this element should always scroll
                    ret = true;
                } else {
                    var t = inEvent.changedTouches[0];

                    // check the intended scroll axis, and other axis
                    var a = scrollAxis;
                    var oa = scrollAxis === 'Y' ? 'X' : 'Y';
                    var da = Math.abs(t['client' + a] - this.firstXY[a]);
                    var doa = Math.abs(t['client' + oa] - this.firstXY[oa]);

                    // if delta in the scroll axis > delta other axis, scroll instead of
                    // making events
                    ret = da >= doa;
                }
                this.firstXY = null;
                return ret;
            }
        },
        findTouch: function (inTL, inId) {
            for (var i = 0, l = inTL.length, t; i < l && (t = inTL[i]); i++) {
                if (t.identifier === inId) {
                    return true;
                }
            }
        },

        // In some instances, a touchstart can happen without a touchend. This
        // leaves the pointermap in a broken state.
        // Therefore, on every touchstart, we remove the touches that did not fire a
        // touchend event.
        // To keep state globally consistent, we fire a
        // pointercancel for this "abandoned" touch
        vacuumTouches: function (inEvent) {
            var tl = inEvent.touches;

            // pointermap.size should be < tl.length here, as the touchstart has not
            // been processed yet.
            if (pointermap$1.size >= tl.length) {
                var d = [];
                pointermap$1.forEach(function (value, key) {

                    // Never remove pointerId == 1, which is mouse.
                    // Touch identifiers are 2 smaller than their pointerId, which is the
                    // index in pointermap.
                    if (key !== 1 && !this.findTouch(tl, key - 2)) {
                        var p = value.out;
                        d.push(p);
                    }
                }, this);
                d.forEach(this.cancelOut, this);
            }
        },
        touchstart: function (inEvent) {
            this.vacuumTouches(inEvent);
            this.setPrimaryTouch(inEvent.changedTouches[0]);
            this.dedupSynthMouse(inEvent);
            if (!this.scrolling) {
                this.clickCount++;
                this.processTouches(inEvent, this.overDown);
            }
        },
        overDown: function (inPointer) {
            pointermap$1.set(inPointer.pointerId, {
                target: inPointer.target,
                out: inPointer,
                outTarget: inPointer.target
            });
            dispatcher.enterOver(inPointer);
            dispatcher.down(inPointer);
        },
        touchmove: function (inEvent) {
            if (!this.scrolling) {
                if (this.shouldScroll(inEvent)) {
                    this.scrolling = true;
                    this.touchcancel(inEvent);
                } else {
                    inEvent.preventDefault();
                    this.processTouches(inEvent, this.moveOverOut);
                }
            }
        },
        moveOverOut: function (inPointer) {
            var event = inPointer;
            var pointer = pointermap$1.get(event.pointerId);

            // a finger drifted off the screen, ignore it
            if (!pointer) {
                return;
            }
            var outEvent = pointer.out;
            var outTarget = pointer.outTarget;
            dispatcher.move(event);
            if (outEvent && outTarget !== event.target) {
                outEvent.relatedTarget = event.target;
                event.relatedTarget = outTarget;

                // recover from retargeting by shadow
                outEvent.target = outTarget;
                if (event.target) {
                    dispatcher.leaveOut(outEvent);
                    dispatcher.enterOver(event);
                } else {

                    // clean up case when finger leaves the screen
                    event.target = outTarget;
                    event.relatedTarget = null;
                    this.cancelOut(event);
                }
            }
            pointer.out = event;
            pointer.outTarget = event.target;
        },
        touchend: function (inEvent) {
            this.dedupSynthMouse(inEvent);
            this.processTouches(inEvent, this.upOut);
        },
        upOut: function (inPointer) {
            if (!this.scrolling) {
                dispatcher.up(inPointer);
                dispatcher.leaveOut(inPointer);
            }
            this.cleanUpPointer(inPointer);
        },
        touchcancel: function (inEvent) {
            this.processTouches(inEvent, this.cancelOut);
        },
        cancelOut: function (inPointer) {
            dispatcher.cancel(inPointer);
            dispatcher.leaveOut(inPointer);
            this.cleanUpPointer(inPointer);
        },
        cleanUpPointer: function (inPointer) {
            pointermap$1.delete(inPointer.pointerId);
            this.removePrimaryPointer(inPointer);
        },

        // prevent synth mouse events from creating pointer events
        dedupSynthMouse: function (inEvent) {
            var lts = mouseEvents.lastTouches;
            var t = inEvent.changedTouches[0];

            // only the primary finger will synth mouse events
            if (this.isPrimaryTouch(t)) {

                // remember x/y of last touch
                var lt = {
                    x: t.clientX,
                    y: t.clientY
                };
                lts.push(lt);
                var fn = (function (lts, lt) {
                    var i = lts.indexOf(lt);
                    if (i > -1) {
                        lts.splice(i, 1);
                    }
                }).bind(null, lts, lt);
                setTimeout(fn, DEDUP_TIMEOUT);
            }
        }
    };

    INSTALLER = new Installer(touchEvents.elementAdded, touchEvents.elementRemoved,
        touchEvents.elementChanged, touchEvents);

    var pointermap$2 = dispatcher.pointermap;
    var HAS_BITMAP_TYPE = window.MSPointerEvent &&
        typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE === 'number';
    var msEvents = {
        events: [
            'MSPointerDown',
            'MSPointerMove',
            'MSPointerUp',
            'MSPointerOut',
            'MSPointerOver',
            'MSPointerCancel',
            'MSGotPointerCapture',
            'MSLostPointerCapture'
        ],
        register: function (target) {
            dispatcher.listen(target, this.events);
        },
        unregister: function (target) {
            dispatcher.unlisten(target, this.events);
        },
        POINTER_TYPES: [
            '',
            'unavailable',
            'touch',
            'pen',
            'mouse'
        ],
        prepareEvent: function (inEvent) {
            var e = inEvent;
            if (HAS_BITMAP_TYPE) {
                e = dispatcher.cloneEvent(inEvent);
                e.pointerType = this.POINTER_TYPES[inEvent.pointerType];
            }
            return e;
        },
        cleanup: function (id) {
            pointermap$2.delete(id);
        },
        MSPointerDown: function (inEvent) {
            pointermap$2.set(inEvent.pointerId, inEvent);
            var e = this.prepareEvent(inEvent);
            dispatcher.down(e);
        },
        MSPointerMove: function (inEvent) {
            var e = this.prepareEvent(inEvent);
            dispatcher.move(e);
        },
        MSPointerUp: function (inEvent) {
            var e = this.prepareEvent(inEvent);
            dispatcher.up(e);
            this.cleanup(inEvent.pointerId);
        },
        MSPointerOut: function (inEvent) {
            var e = this.prepareEvent(inEvent);
            dispatcher.leaveOut(e);
        },
        MSPointerOver: function (inEvent) {
            var e = this.prepareEvent(inEvent);
            dispatcher.enterOver(e);
        },
        MSPointerCancel: function (inEvent) {
            var e = this.prepareEvent(inEvent);
            dispatcher.cancel(e);
            this.cleanup(inEvent.pointerId);
        },
        MSLostPointerCapture: function (inEvent) {
            var e = dispatcher.makeEvent('lostpointercapture', inEvent);
            dispatcher.dispatchEvent(e);
        },
        MSGotPointerCapture: function (inEvent) {
            var e = dispatcher.makeEvent('gotpointercapture', inEvent);
            dispatcher.dispatchEvent(e);
        }
    };

    function applyPolyfill() {

        // only activate if this platform does not have pointer events
        if (!window.PointerEvent) {
            window.PointerEvent = PointerEvent;

            if (window.navigator.msPointerEnabled) {
                var tp = window.navigator.msMaxTouchPoints;
                Object.defineProperty(window.navigator, 'maxTouchPoints', {
                    value: tp,
                    enumerable: true
                });
                dispatcher.registerSource('ms', msEvents);
            } else {
                Object.defineProperty(window.navigator, 'maxTouchPoints', {
                    value: 0,
                    enumerable: true
                });
                dispatcher.registerSource('mouse', mouseEvents);
                if (window.ontouchstart !== undefined) {
                    dispatcher.registerSource('touch', touchEvents);
                }
            }

            dispatcher.register(document);
        }
    }

    var n = window.navigator;
    var s;
    var r;
    var h;

    function assertActive(id) {
        if (!dispatcher.pointermap.has(id)) {
            var error = new Error('InvalidPointerId');
            error.name = 'InvalidPointerId';
            throw error;
        }
    }

    function assertConnected(elem) {
        var parent = elem.parentNode;
        while (parent && parent !== elem.ownerDocument) {
            parent = parent.parentNode;
        }
        if (!parent) {
            var error = new Error('InvalidStateError');
            error.name = 'InvalidStateError';
            throw error;
        }
    }

    function inActiveButtonState(id) {
        var p = dispatcher.pointermap.get(id);
        return p.buttons !== 0;
    }
    if (n.msPointerEnabled) {
        s = function (pointerId) {
            assertActive(pointerId);
            assertConnected(this);
            if (inActiveButtonState(pointerId)) {
                dispatcher.setCapture(pointerId, this, true);
                this.msSetPointerCapture(pointerId);
            }
        };
        r = function (pointerId) {
            assertActive(pointerId);
            dispatcher.releaseCapture(pointerId, true);
            this.msReleasePointerCapture(pointerId);
        };
    } else {
        s = function setPointerCapture(pointerId) {
            assertActive(pointerId);
            assertConnected(this);
            if (inActiveButtonState(pointerId)) {
                dispatcher.setCapture(pointerId, this);
            }
        };
        r = function releasePointerCapture(pointerId) {
            assertActive(pointerId);
            dispatcher.releaseCapture(pointerId);
        };
    }
    h = function hasPointerCapture(pointerId) {
        return !!dispatcher.captureInfo[pointerId];
    };

    function applyPolyfill$1() {
        if (window.Element && !Element.prototype.setPointerCapture) {
            Object.defineProperties(Element.prototype, {
                'setPointerCapture': {
                    value: s
                },
                'releasePointerCapture': {
                    value: r
                },
                'hasPointerCapture': {
                    value: h
                }
            });
        }
    }

    applyAttributeStyles();
    applyPolyfill();
    applyPolyfill$1();

    var pointerevents = {
        dispatcher: dispatcher,
        Installer: Installer,
        PointerEvent: PointerEvent,
        PointerMap: PointerMap,
        targetFinding: targeting
    };

    return pointerevents;

}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var animationFrame;

class Blob {
    constructor() {
        this.points = [];
    }

    init() {
        for (let i = 0; i < this.numPoints; i++) {
            let point = new Point(this.divisional * (i + 1), this);
            // point.acceleration = -1 + Math.random() * 2;
            this.push(point);
        }
    }

    render() {
        let canvas = this.canvas;
        let ctx = this.ctx;
        let position = this.position;
        let pointsArray = this.points;
        let radius = this.radius;
        let points = this.numPoints;
        let divisional = this.divisional;
        let center = this.center;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);

        let p0 = pointsArray[points - 1].position;
        let p1 = pointsArray[0].position;
        let _p2 = p1;

        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

        for (let i = 1; i < points; i++) {

            pointsArray[i].solveWith(pointsArray[i - 1], pointsArray[i + 1] || pointsArray[0]);

            let p2 = pointsArray[i].position;
            var xc = (p1.x + p2.x) / 2;
            var yc = (p1.y + p2.y) / 2;
            ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

            ctx.fillStyle = '#000000';

            p1 = p2;
        }

        var xc = (p1.x + _p2.x) / 2;
        var yc = (p1.y + _p2.y) / 2;
        ctx.quadraticCurveTo(p1.x, p1.y, xc, yc + 1);
        // ctx.lineTo(_p2.x, _p2.y);

        // ctx.closePath();
        ctx.fillStyle = this.color;
        //ctx.fill();
        ctx.lineWidth = 8;
        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();

        requestAnimationFrame(this.render.bind(this));
    }

    push(item) {
        if (item instanceof Point) {
            this.points.push(item);
        }
    }

    set color(value) {
        this._color = value;
    }
    get color() {
        return this._color || '#000000';
    }

    set canvas(value) {
        if (value instanceof HTMLElement && value.tagName.toLowerCase() === 'canvas') {
            this._canvas = canvas;
            this.ctx = this._canvas.getContext('2d');
        }
    }
    get canvas() {
        return this._canvas;
    }

    set numPoints(value) {
        if (value > 2) {
            this._points = value;
        }
    }
    get numPoints() {
        return this._points || 32;
    }

    set radius(value) {
        if (value > 0) {
            this._radius = value;
        }
    }
    get radius() {
        return this._radius || 150;
    }

    set position(value) {
        if (typeof value == 'object' && value.x && value.y) {
            this._position = value;
        }
    }
    get position() {
        return this._position || {
            x: 0.5,
            y: 0.5
        };
    }

    get divisional() {
        return Math.PI * 2 / this.numPoints;
    }

    get center() {
        return {
            x: this.canvas.width * this.position.x,
            y: this.canvas.height * this.position.y
        };
    }

    set running(value) {
        this._running = value === true;
    }
    get running() {
        return this.running !== false;
    }
}

class Point {
    constructor(azimuth, parent) {
        this.parent = parent;
        this.azimuth = Math.PI - azimuth;
        this._components = {
            x: Math.cos(this.azimuth),
            y: Math.sin(this.azimuth)
        };

        this.acceleration = -0.3 + Math.random() * 0.6;
    }

    solveWith(leftPoint, rightPoint) {
        this.acceleration = (-0.3 * this.radialEffect + (leftPoint.radialEffect - this.radialEffect) + (rightPoint.radialEffect - this.radialEffect)) * this.elasticity - this.speed * this.friction;
    }

    set acceleration(value) {
        if (typeof value == 'number') {
            this._acceleration = value;
            this.speed += this._acceleration * 0.5;
        }
    }
    get acceleration() {
        return this._acceleration || 0;
    }

    set speed(value) {
        if (typeof value == 'number') {
            this._speed = value;
            this.radialEffect += this._speed * 5;
        }
    }
    get speed() {
        return this._speed || 0;
    }

    set radialEffect(value) {
        if (typeof value == 'number') {
            this._radialEffect = value; //Math.min(Math.max(value, -20), 20);
        }
    }
    get radialEffect() {
        return this._radialEffect || 0;
    }

    get position() {
        return {
            x: this.parent.center.x + this.components.x * (this.parent.radius + this.radialEffect),
            y: this.parent.center.y + this.components.y * (this.parent.radius + this.radialEffect)
        }
    }

    get components() {
        return this._components;
    }

    set elasticity(value) {
        if (typeof value === 'number') {
            this._elasticity = value;
        }
    }
    get elasticity() {
        return this._elasticity || 0.001;
    }
    set friction(value) {
        if (typeof value === 'number') {
            this._friction = value;
        }
    }
    get friction() {
        return this._friction || 0.0285;
    }
}

/*--------------------------------------------------
Blob
--------------------------------------------------*/
function drawBlob(place, width, height, radius, strokeColor) {
    blob = '';
    blob = new Blob(place);
    blob.radius = radius || 200;
    blob.strokeStyle = strokeColor || '#141414';
    blob.friction = 1.00285;
    canvas = document.createElement('canvas');
    canvas.setAttribute('touch-action', 'none');
    id = document.getElementById(place);
    id.appendChild(canvas);
    el = 'blob-' + place;
    canvas.setAttribute('id', el);

    var resize = function resize() {
        canvas.width = width || 400; // window.innerWidth;
        canvas.height = width || 400; // window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    var oldMousePoint = {
        x: 0,
        y: 0
    };
    var hover = false;

    var mouseMove = function mouseMove(e) {

        var pos = {
            x: ($('#' + el).offset().left + width / 2),
            y: ($('#' + el).offset().top + height / 2)
        };

        var diff = {
            x: e.clientX - pos.x,
            y: e.clientY - pos.y
        };
        var dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
        var angle = null;

        blob.mousePos = {
            x: pos.x - e.clientX,
            y: pos.y - e.clientY
        };

        blob.color = '#fff';


        if (dist < blob.radius && hover === false) {
            var vector = {
                x: e.clientX - pos.x,
                y: e.clientY - pos.y
            };
            angle = Math.atan2(vector.y, vector.x);
            hover = true;

        } else if (dist > blob.radius && hover === true) {
            var _vector = {
                x: e.clientX - pos.x,
                y: e.clientY - pos.y
            };
            angle = Math.atan2(_vector.y, _vector.x);
            hover = false;
        }

        if (typeof angle == 'number') {

            var nearestPoint = null;
            var distanceFromPoint = 100;

            blob.points.forEach(function (point) {
                if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
                    // console.log(point.azimuth, angle, distanceFromPoint);
                    nearestPoint = point;
                    distanceFromPoint = Math.abs(angle - point.azimuth);
                }
            });

            if (nearestPoint) {
                var strength = {
                    x: oldMousePoint.x - e.clientX,
                    y: oldMousePoint.y - e.clientY
                };
                strength = Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
                if (strength > 100) strength = 100;
                nearestPoint.acceleration = strength / 100 * (hover ? -1 : 1);
            }
        }

        oldMousePoint.x = e.clientX;
        oldMousePoint.y = e.clientY;
    };
    // window.addEventListener('mousemove', mouseMove);
    window.addEventListener('pointermove', mouseMove);


    blob.canvas = canvas;
    blob.init();
    blob.render();
};