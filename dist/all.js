/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
// SVGPathSeg API polyfill
// https://github.com/progers/pathseg
//
// This is a drop-in replacement for the SVGPathSeg and SVGPathSegList APIs that were removed from
// SVG2 (https://lists.w3.org/Archives/Public/www-svg/2015Jun/0044.html), including the latest spec
// changes which were implemented in Firefox 43 and Chrome 46.

(function() { "use strict";
    if (!("SVGPathSeg" in window)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSeg
        window.SVGPathSeg = function(type, typeAsLetter, owningPathSegList) {
            this.pathSegType = type;
            this.pathSegTypeAsLetter = typeAsLetter;
            this._owningPathSegList = owningPathSegList;
        }

        window.SVGPathSeg.prototype.classname = "SVGPathSeg";

        window.SVGPathSeg.PATHSEG_UNKNOWN = 0;
        window.SVGPathSeg.PATHSEG_CLOSEPATH = 1;
        window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
        window.SVGPathSeg.PATHSEG_MOVETO_REL = 3;
        window.SVGPathSeg.PATHSEG_LINETO_ABS = 4;
        window.SVGPathSeg.PATHSEG_LINETO_REL = 5;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
        window.SVGPathSeg.PATHSEG_ARC_ABS = 10;
        window.SVGPathSeg.PATHSEG_ARC_REL = 11;
        window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
        window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
        window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
        window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;

        // Notify owning PathSegList on any changes so they can be synchronized back to the path element.
        window.SVGPathSeg.prototype._segmentChanged = function() {
            if (this._owningPathSegList)
                this._owningPathSegList.segmentChanged(this);
        }

        window.SVGPathSegClosePath = function(owningPathSegList) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
        }
        window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegClosePath.prototype.toString = function() { return "[object SVGPathSegClosePath]"; }
        window.SVGPathSegClosePath.prototype._asPathString = function() { return this.pathSegTypeAsLetter; }
        window.SVGPathSegClosePath.prototype.clone = function() { return new window.SVGPathSegClosePath(undefined); }

        window.SVGPathSegMovetoAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegMovetoAbs.prototype.toString = function() { return "[object SVGPathSegMovetoAbs]"; }
        window.SVGPathSegMovetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegMovetoAbs.prototype.clone = function() { return new window.SVGPathSegMovetoAbs(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegMovetoRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegMovetoRel.prototype.toString = function() { return "[object SVGPathSegMovetoRel]"; }
        window.SVGPathSegMovetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegMovetoRel.prototype.clone = function() { return new window.SVGPathSegMovetoRel(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoAbs.prototype.toString = function() { return "[object SVGPathSegLinetoAbs]"; }
        window.SVGPathSegLinetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegLinetoAbs.prototype.clone = function() { return new window.SVGPathSegLinetoAbs(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoRel.prototype.toString = function() { return "[object SVGPathSegLinetoRel]"; }
        window.SVGPathSegLinetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegLinetoRel.prototype.clone = function() { return new window.SVGPathSegLinetoRel(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicAbs = function(owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicAbs]"; }
        window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicAbs(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicRel = function(owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicRel]"; }
        window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicRel.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicRel(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticAbs = function(owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        }
        window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticAbs]"; }
        window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticAbs(undefined, this._x, this._y, this._x1, this._y1); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticRel = function(owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        }
        window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticRel]"; }
        window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticRel(undefined, this._x, this._y, this._x1, this._y1); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegArcAbs = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        }
        window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegArcAbs.prototype.toString = function() { return "[object SVGPathSegArcAbs]"; }
        window.SVGPathSegArcAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y; }
        window.SVGPathSegArcAbs.prototype.clone = function() { return new window.SVGPathSegArcAbs(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag); }
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", { get: function() { return this._r1; }, set: function(r1) { this._r1 = r1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", { get: function() { return this._r2; }, set: function(r2) { this._r2 = r2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", { get: function() { return this._angle; }, set: function(angle) { this._angle = angle; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag; }, set: function(largeArcFlag) { this._largeArcFlag = largeArcFlag; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", { get: function() { return this._sweepFlag; }, set: function(sweepFlag) { this._sweepFlag = sweepFlag; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegArcRel = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        }
        window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegArcRel.prototype.toString = function() { return "[object SVGPathSegArcRel]"; }
        window.SVGPathSegArcRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y; }
        window.SVGPathSegArcRel.prototype.clone = function() { return new window.SVGPathSegArcRel(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag); }
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", { get: function() { return this._r1; }, set: function(r1) { this._r1 = r1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", { get: function() { return this._r2; }, set: function(r2) { this._r2 = r2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", { get: function() { return this._angle; }, set: function(angle) { this._angle = angle; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag; }, set: function(largeArcFlag) { this._largeArcFlag = largeArcFlag; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", { get: function() { return this._sweepFlag; }, set: function(sweepFlag) { this._sweepFlag = sweepFlag; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoHorizontalAbs = function(owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
            this._x = x;
        }
        window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalAbs]"; }
        window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x; }
        window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() { return new window.SVGPathSegLinetoHorizontalAbs(undefined, this._x); }
        Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoHorizontalRel = function(owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
            this._x = x;
        }
        window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalRel]"; }
        window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x; }
        window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() { return new window.SVGPathSegLinetoHorizontalRel(undefined, this._x); }
        Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoVerticalAbs = function(owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
            this._y = y;
        }
        window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalAbs]"; }
        window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y; }
        window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() { return new window.SVGPathSegLinetoVerticalAbs(undefined, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoVerticalRel = function(owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
            this._y = y;
        }
        window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoVerticalRel.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalRel]"; }
        window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y; }
        window.SVGPathSegLinetoVerticalRel.prototype.clone = function() { return new window.SVGPathSegLinetoVerticalRel(undefined, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothAbs = function(owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothAbs]"; }
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, this._x, this._y, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothRel = function(owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothRel]"; }
        window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, this._x, this._y, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"; }
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothRel]"; }
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        // Add createSVGPathSeg* functions to window.SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-Interfacewindow.SVGPathElement.
        window.SVGPathElement.prototype.createSVGPathSegClosePath = function() { return new window.SVGPathSegClosePath(undefined); }
        window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(x, y) { return new window.SVGPathSegMovetoAbs(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(x, y) { return new window.SVGPathSegMovetoRel(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(x, y) { return new window.SVGPathSegLinetoAbs(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(x, y) { return new window.SVGPathSegLinetoRel(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(x, y, x1, y1, x2, y2) { return new window.SVGPathSegCurvetoCubicAbs(undefined, x, y, x1, y1, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(x, y, x1, y1, x2, y2) { return new window.SVGPathSegCurvetoCubicRel(undefined, x, y, x1, y1, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(x, y, x1, y1) { return new window.SVGPathSegCurvetoQuadraticAbs(undefined, x, y, x1, y1); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(x, y, x1, y1) { return new window.SVGPathSegCurvetoQuadraticRel(undefined, x, y, x1, y1); }
        window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) { return new window.SVGPathSegArcAbs(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag); }
        window.SVGPathElement.prototype.createSVGPathSegArcRel = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) { return new window.SVGPathSegArcRel(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(x) { return new window.SVGPathSegLinetoHorizontalAbs(undefined, x); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(x) { return new window.SVGPathSegLinetoHorizontalRel(undefined, x); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(y) { return new window.SVGPathSegLinetoVerticalAbs(undefined, y); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(y) { return new window.SVGPathSegLinetoVerticalRel(undefined, y); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(x, y, x2, y2) { return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, x, y, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(x, y, x2, y2) { return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, x, y, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(x, y) { return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(x, y) { return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, x, y); }

        if (!("getPathSegAtLength" in window.SVGPathElement.prototype)) {
            // Add getPathSegAtLength to SVGPathElement.
            // Spec: https://www.w3.org/TR/SVG11/single-page.html#paths-__svg__SVGPathElement__getPathSegAtLength
            // This polyfill requires SVGPathElement.getTotalLength to implement the distance-along-a-path algorithm.
            window.SVGPathElement.prototype.getPathSegAtLength = function(distance) {
                if (distance === undefined || !isFinite(distance))
                    throw "Invalid arguments.";

                var measurementElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                measurementElement.setAttribute("d", this.getAttribute("d"));
                var lastPathSegment = measurementElement.pathSegList.numberOfItems - 1;

                // If the path is empty, return 0.
                if (lastPathSegment <= 0)
                    return 0;

                do {
                    measurementElement.pathSegList.removeItem(lastPathSegment);
                    if (distance > measurementElement.getTotalLength())
                        break;
                    lastPathSegment--;
                } while (lastPathSegment > 0);
                return lastPathSegment;
            }
        }
    }

    // Checking for SVGPathSegList in window checks for the case of an implementation without the
    // SVGPathSegList API.
    // The second check for appendItem is specific to Firefox 59+ which removed only parts of the
    // SVGPathSegList API (e.g., appendItem). In this case we need to re-implement the entire API
    // so the polyfill data (i.e., _list) is used throughout.
    if (!("SVGPathSegList" in window) || !("appendItem" in window.SVGPathSegList.prototype)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSegList
        window.SVGPathSegList = function(pathElement) {
            this._pathElement = pathElement;
            this._list = this._parsePath(this._pathElement.getAttribute("d"));

            // Use a MutationObserver to catch changes to the path's "d" attribute.
            this._mutationObserverConfig = { "attributes": true, "attributeFilter": ["d"] };
            this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        }

        window.SVGPathSegList.prototype.classname = "SVGPathSegList";

        Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
            get: function() {
                this._checkPathSynchronizedToList();
                return this._list.length;
            },
            enumerable: true
        });

        // The length property was not specified but was in Firefox 58.
        Object.defineProperty(window.SVGPathSegList.prototype, "length", {
            get: function() {
                this._checkPathSynchronizedToList();
                return this._list.length;
            },
            enumerable: true
        });

        // Add the pathSegList accessors to window.SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGAnimatedPathData
        Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
            get: function() {
                if (!this._pathSegList)
                    this._pathSegList = new window.SVGPathSegList(this);
                return this._pathSegList;
            },
            enumerable: true
        });
        // FIXME: The following are not implemented and simply return window.SVGPathElement.pathSegList.
        Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
        Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
        Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });

        // Process any pending mutations to the path element and update the list as needed.
        // This should be the first call of all public functions and is needed because
        // MutationObservers are not synchronous so we can have pending asynchronous mutations.
        window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
        }

        window.SVGPathSegList.prototype._updateListFromPathMutations = function(mutationRecords) {
            if (!this._pathElement)
                return;
            var hasPathMutations = false;
            mutationRecords.forEach(function(record) {
                if (record.attributeName == "d")
                    hasPathMutations = true;
            });
            if (hasPathMutations)
                this._list = this._parsePath(this._pathElement.getAttribute("d"));
        }

        // Serialize the list and update the path's 'd' attribute.
        window.SVGPathSegList.prototype._writeListToPath = function() {
            this._pathElementMutationObserver.disconnect();
            this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        }

        // When a path segment changes the list needs to be synchronized back to the path element.
        window.SVGPathSegList.prototype.segmentChanged = function(pathSeg) {
            this._writeListToPath();
        }

        window.SVGPathSegList.prototype.clear = function() {
            this._checkPathSynchronizedToList();

            this._list.forEach(function(pathSeg) {
                pathSeg._owningPathSegList = null;
            });
            this._list = [];
            this._writeListToPath();
        }

        window.SVGPathSegList.prototype.initialize = function(newItem) {
            this._checkPathSynchronizedToList();

            this._list = [newItem];
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList.prototype._checkValidIndex = function(index) {
            if (isNaN(index) || index < 0 || index >= this.numberOfItems)
                throw "INDEX_SIZE_ERR";
        }

        window.SVGPathSegList.prototype.getItem = function(index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            return this._list[index];
        }

        window.SVGPathSegList.prototype.insertItemBefore = function(newItem, index) {
            this._checkPathSynchronizedToList();

            // Spec: If the index is greater than or equal to numberOfItems, then the new item is appended to the end of the list.
            if (index > this.numberOfItems)
                index = this.numberOfItems;
            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.splice(index, 0, newItem);
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList.prototype.replaceItem = function(newItem, index) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._checkValidIndex(index);
            this._list[index] = newItem;
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList.prototype.removeItem = function(index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            var item = this._list[index];
            this._list.splice(index, 1);
            this._writeListToPath();
            return item;
        }

        window.SVGPathSegList.prototype.appendItem = function(newItem) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.push(newItem);
            newItem._owningPathSegList = this;
            // TODO: Optimize this to just append to the existing attribute.
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList._pathSegArrayAsString = function(pathSegArray) {
            var string = "";
            var first = true;
            pathSegArray.forEach(function(pathSeg) {
                if (first) {
                    first = false;
                    string += pathSeg._asPathString();
                } else {
                    string += " " + pathSeg._asPathString();
                }
            });
            return string;
        }

        // This closely follows SVGPathParser::parsePath from Source/core/svg/SVGPathParser.cpp.
        window.SVGPathSegList.prototype._parsePath = function(string) {
            if (!string || string.length == 0)
                return [];

            var owningPathSegList = this;

            var Builder = function() {
                this.pathSegList = [];
            }

            Builder.prototype.appendSegment = function(pathSeg) {
                this.pathSegList.push(pathSeg);
            }

            var Source = function(string) {
                this._string = string;
                this._currentIndex = 0;
                this._endIndex = this._string.length;
                this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN;

                this._skipOptionalSpaces();
            }

            Source.prototype._isCurrentSpace = function() {
                var character = this._string[this._currentIndex];
                return character <= " " && (character == " " || character == "\n" || character == "\t" || character == "\r" || character == "\f");
            }

            Source.prototype._skipOptionalSpaces = function() {
                while (this._currentIndex < this._endIndex && this._isCurrentSpace())
                    this._currentIndex++;
                return this._currentIndex < this._endIndex;
            }

            Source.prototype._skipOptionalSpacesOrDelimiter = function() {
                if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",")
                    return false;
                if (this._skipOptionalSpaces()) {
                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
                        this._currentIndex++;
                        this._skipOptionalSpaces();
                    }
                }
                return this._currentIndex < this._endIndex;
            }

            Source.prototype.hasMoreData = function() {
                return this._currentIndex < this._endIndex;
            }

            Source.prototype.peekSegmentType = function() {
                var lookahead = this._string[this._currentIndex];
                return this._pathSegTypeFromChar(lookahead);
            }

            Source.prototype._pathSegTypeFromChar = function(lookahead) {
                switch (lookahead) {
                case "Z":
                case "z":
                    return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                case "M":
                    return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                case "m":
                    return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                case "L":
                    return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                case "l":
                    return window.SVGPathSeg.PATHSEG_LINETO_REL;
                case "C":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                case "c":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                case "Q":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                case "q":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                case "A":
                    return window.SVGPathSeg.PATHSEG_ARC_ABS;
                case "a":
                    return window.SVGPathSeg.PATHSEG_ARC_REL;
                case "H":
                    return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                case "h":
                    return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                case "V":
                    return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                case "v":
                    return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                case "S":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                case "s":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                case "T":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                case "t":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                default:
                    return window.SVGPathSeg.PATHSEG_UNKNOWN;
                }
            }

            Source.prototype._nextCommandHelper = function(lookahead, previousCommand) {
                // Check for remaining coordinates in the current command.
                if ((lookahead == "+" || lookahead == "-" || lookahead == "." || (lookahead >= "0" && lookahead <= "9")) && previousCommand != window.SVGPathSeg.PATHSEG_CLOSEPATH) {
                    if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_ABS)
                        return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                    if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_REL)
                        return window.SVGPathSeg.PATHSEG_LINETO_REL;
                    return previousCommand;
                }
                return window.SVGPathSeg.PATHSEG_UNKNOWN;
            }

            Source.prototype.initialCommandIsMoveTo = function() {
                // If the path is empty it is still valid, so return true.
                if (!this.hasMoreData())
                    return true;
                var command = this.peekSegmentType();
                // Path must start with moveTo.
                return command == window.SVGPathSeg.PATHSEG_MOVETO_ABS || command == window.SVGPathSeg.PATHSEG_MOVETO_REL;
            }

            // Parse a number from an SVG path. This very closely follows genericParseNumber(...) from Source/core/svg/SVGParserUtilities.cpp.
            // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
            Source.prototype._parseNumber = function() {
                var exponent = 0;
                var integer = 0;
                var frac = 1;
                var decimal = 0;
                var sign = 1;
                var expsign = 1;

                var startIndex = this._currentIndex;

                this._skipOptionalSpaces();

                // Read the sign.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+")
                    this._currentIndex++;
                else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
                    this._currentIndex++;
                    sign = -1;
                }

                if (this._currentIndex == this._endIndex || ((this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != "."))
                    // The first character of a number must be one of [0-9+-.].
                    return undefined;

                // Read the integer part, build right-to-left.
                var startIntPartIndex = this._currentIndex;
                while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9")
                    this._currentIndex++; // Advance to first non-digit.

                if (this._currentIndex != startIntPartIndex) {
                    var scanIntPartIndex = this._currentIndex - 1;
                    var multiplier = 1;
                    while (scanIntPartIndex >= startIntPartIndex) {
                        integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
                        multiplier *= 10;
                    }
                }

                // Read the decimals.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                    this._currentIndex++;

                    // There must be a least one digit following the .
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                        return undefined;
                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        frac *= 10;
                        decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
                        this._currentIndex += 1;
                    }
                }

                // Read the exponent part.
                if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && (this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m")) {
                    this._currentIndex++;

                    // Read the sign of the exponent.
                    if (this._string.charAt(this._currentIndex) == "+") {
                        this._currentIndex++;
                    } else if (this._string.charAt(this._currentIndex) == "-") {
                        this._currentIndex++;
                        expsign = -1;
                    }

                    // There must be an exponent.
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                        return undefined;

                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        exponent *= 10;
                        exponent += (this._string.charAt(this._currentIndex) - "0");
                        this._currentIndex++;
                    }
                }

                var number = integer + decimal;
                number *= sign;

                if (exponent)
                    number *= Math.pow(10, expsign * exponent);

                if (startIndex == this._currentIndex)
                    return undefined;

                this._skipOptionalSpacesOrDelimiter();

                return number;
            }

            Source.prototype._parseArcFlag = function() {
                if (this._currentIndex >= this._endIndex)
                    return undefined;
                var flag = false;
                var flagChar = this._string.charAt(this._currentIndex++);
                if (flagChar == "0")
                    flag = false;
                else if (flagChar == "1")
                    flag = true;
                else
                    return undefined;

                this._skipOptionalSpacesOrDelimiter();
                return flag;
            }

            Source.prototype.parseSegment = function() {
                var lookahead = this._string[this._currentIndex];
                var command = this._pathSegTypeFromChar(lookahead);
                if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                    // Possibly an implicit command. Not allowed if this is the first command.
                    if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN)
                        return null;
                    command = this._nextCommandHelper(lookahead, this._previousCommand);
                    if (command == window.SVGPathSeg.PATHSEG_UNKNOWN)
                        return null;
                } else {
                    this._currentIndex++;
                }

                this._previousCommand = command;

                switch (command) {
                case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                    return new window.SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                    return new window.SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_REL:
                    return new window.SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                    return new window.SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                    return new window.SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                    return new window.SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                    return new window.SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                    return new window.SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                    this._skipOptionalSpaces();
                    return new window.SVGPathSegClosePath(owningPathSegList);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                    var points = {x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                    var points = {x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                    return new window.SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                    return new window.SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_ARC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                case window.SVGPathSeg.PATHSEG_ARC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                default:
                    throw "Unknown path seg type."
                }
            }

            var builder = new Builder();
            var source = new Source(string);

            if (!source.initialCommandIsMoveTo())
                return [];
            while (source.hasMoreData()) {
                var pathSeg = source.parseSegment();
                if (!pathSeg)
                    return [];
                builder.appendSegment(pathSeg);
            }

            return builder.pathSegList;
        }
    }
}());
(function() {

document.addEventListener("touchstart", touchHandler, true);
document.addEventListener("touchmove", touchHandler, true);
document.addEventListener("touchend", touchHandler, true);
document.addEventListener("touchcancel", touchHandler, true);

function touchHandler(event) {   
  var touches = event.changedTouches,
      first = touches[0],
      type = "";
  switch(event.type) {
      case "touchstart": type="mousedown"; break;
      case "touchmove":  type="mousemove"; break;        
      case "touchend":   type="mouseup"; break;
      default: return;
  }
  
  var simulatedEvent = document.createEvent("MouseEvent");
  simulatedEvent.initMouseEvent(
    type, true, true, window, 1, 
    first.screenX, first.screenY, 
    first.clientX, first.clientY, false, 
    false, false, false, 0/*left*/, null
  );
  if(touches.length < 2) {
    first.target.dispatchEvent(simulatedEvent);
    //event.preventDefault();
  }
}

})();

/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * http://github.com/jeresig/jquery.hotkeys
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/

(function(b){b.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta",219:"[",221:"]"},shiftNums:{"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}};function a(d){if(typeof d.data!=="string"){return}var c=d.handler,e=d.data.toLowerCase().split(" ");d.handler=function(n){if(this!==n.target&&(/textarea|select/i.test(n.target.nodeName)||n.target.type==="text")){return}var h=n.type!=="keypress"&&b.hotkeys.specialKeys[n.which],o=String.fromCharCode(n.which).toLowerCase(),k,m="",g={};if(n.altKey&&h!=="alt"){m+="alt+"}if(n.ctrlKey&&h!=="ctrl"){m+="ctrl+"}if(n.metaKey&&!n.ctrlKey&&h!=="meta"){m+="meta+"}if(n.shiftKey&&h!=="shift"){m+="shift+"}if(h){g[m+h]=true}else{g[m+o]=true;g[m+b.hotkeys.shiftNums[o]]=true;if(m==="shift+"){g[b.hotkeys.shiftNums[o]]=true}}for(var j=0,f=e.length;j<f;j++){if(g[e[j]]){return c.apply(this,arguments)}}}}b.each(["keydown","keyup","keypress"],function(){b.event.special[this]={add:a}})})(jQuery);
/*
 * jGraduate 0.4
 *
 * jQuery Plugin for a gradient picker
 *
 * Copyright (c) 2010 Jeff Schiller
 * http://blog.codedread.com/
 * Copyright (c) 2010 Alexis Deveria
 * http://a.deveria.com/
 *
 * Apache 2 License

jGraduate( options, okCallback, cancelCallback )

where options is an object literal:
  {
    window: { title: "Pick the start color and opacity for the gradient" },
    images: { clientPath: "images/" },
    paint: a Paint object,
    newstop: String of value "same", "inverse", "black" or "white" 
         OR object with one or both values {color: #Hex color, opac: number 0-1}
  }
 
- the Paint object is:
  Paint {
    type: String, // one of "none", "solidColor", "linearGradient", "radialGradient"
    alpha: Number representing opacity (0-100),
    solidColor: String representing #RRGGBB hex of color,
    linearGradient: object of interface SVGLinearGradientElement,
    radialGradient: object of interface SVGRadialGradientElement,
  }

$.jGraduate.Paint() -> constructs a 'none' color
$.jGraduate.Paint({copy: o}) -> creates a copy of the paint o
$.jGraduate.Paint({hex: "#rrggbb"}) -> creates a solid color paint with hex = "#rrggbb"
$.jGraduate.Paint({linearGradient: o, a: 50}) -> creates a linear gradient paint with opacity=0.5
$.jGraduate.Paint({radialGradient: o, a: 7}) -> creates a radial gradient paint with opacity=0.07
$.jGraduate.Paint({hex: "#rrggbb", linearGradient: o}) -> throws an exception?

- picker accepts the following object as input:
  {
    okCallback: function to call when Ok is pressed
    cancelCallback: function to call when Cancel is pressed
    paint: object describing the paint to display initially, if not set, then default to opaque white
  }

- okCallback receives a Paint object

 *
 */
 
(function() {
 
var ns = { svg: 'http://www.w3.org/2000/svg', xlink: 'http://www.w3.org/1999/xlink' };
if(!window.console) {
  window.console = new function() {
    this.log = function(str) {};
    this.dir = function(str) {};
  };
}

$.jGraduate = { 
  Paint:
    function(opt) {
      var options = opt || {};
      this.alpha = isNaN(options.alpha) ? 100 : options.alpha;
      // copy paint object
        if (options.copy) {
          this.type = options.copy.type;
          this.alpha = options.copy.alpha;
        this.solidColor = null;
        this.linearGradient = null;
        this.radialGradient = null;

          switch(this.type) {
            case "none":
              break;
            case "solidColor":
              this.solidColor = options.copy.solidColor;
              break;
            case "linearGradient":
              this.linearGradient = options.copy.linearGradient.cloneNode(true);
              break;
            case "radialGradient":
              this.radialGradient = options.copy.radialGradient.cloneNode(true);
              break;
          }
        }
        // create linear gradient paint
        else if (options.linearGradient) {
          this.type = "linearGradient";
          this.solidColor = null;
          this.radialGradient = null;
          this.linearGradient = options.linearGradient.cloneNode(true);
        }
        // create linear gradient paint
        else if (options.radialGradient) {
          this.type = "radialGradient";
          this.solidColor = null;
          this.linearGradient = null;
          this.radialGradient = options.radialGradient.cloneNode(true);
        }
        // create solid color paint
        else if (options.solidColor) {
          this.type = "solidColor";
          this.solidColor = options.solidColor;
        }
        // create empty paint
        else {
          this.type = "none";
          this.solidColor = null;
          this.linearGradient = null;
          this.radialGradient = null;
        }
    }
};

jQuery.fn.jGraduateDefaults = {
  paint: new $.jGraduate.Paint(),
  window: {
    pickerTitle: "Drag markers to pick a paint"
  },
  images: {
    clientPath: "images/"
  },
  newstop: 'inverse' // same, inverse, black, white
};

var isGecko = navigator.userAgent.indexOf('Gecko/') >= 0;

function setAttrs(elem, attrs) {
  if(isGecko) {
    for (var aname in attrs) elem.setAttribute(aname, attrs[aname]);
  } else {
    for (var aname in attrs) {
      var val = attrs[aname], prop = elem[aname];
      if(prop && prop.constructor === 'SVGLength') {
        prop.baseVal.value = val;
      } else {
        elem.setAttribute(aname, val);
      }
    }
  }
}

function mkElem(name, attrs, newparent) {
  var elem = document.createElementNS(ns.svg, name);
  setAttrs(elem, attrs);
  if(newparent) newparent.appendChild(elem);
  return elem;
}

jQuery.fn.jGraduate =
  function(options) {
    var $arguments = arguments;
    return this.each( function() {
      var $this = $(this), $settings = $.extend(true, {}, jQuery.fn.jGraduateDefaults, options),
        id = $this.attr('id'),
        idref = '#'+$this.attr('id')+' ';
      
            if (!idref)
            {
              alert('Container element must have an id attribute to maintain unique id strings for sub-elements.');
              return;
            }
            
            var okClicked = function() {
              switch ( $this.paint.type ) {
                case "radialGradient":
                  $this.paint.linearGradient = null;
                  break;
                case "linearGradient":
                  $this.paint.radialGradient = null;
                  break;
                case "solidColor":
                  $this.paint.radialGradient = $this.paint.linearGradient = null;
                  break;
              }
              $.isFunction($this.okCallback) && $this.okCallback($this.paint);
              $this.hide();
            },
            cancelClicked = function() {
              $.isFunction($this.cancelCallback) && $this.cancelCallback();
              $this.hide();
            };

            $.extend(true, $this, // public properties, methods, and callbacks
              {
                // make a copy of the incoming paint
                paint: new $.jGraduate.Paint({copy: $settings.paint}),
                okCallback: $.isFunction($arguments[1]) && $arguments[1] || null,
                cancelCallback: $.isFunction($arguments[2]) && $arguments[2] || null
              });

      var pos = $this.position(),
        color = null;
      var $win = $(window);

      if ($this.paint.type == "none") {
        $this.paint = $.jGraduate.Paint({solidColor: 'ffffff'});
      }
      
            $this.addClass('jGraduate_Picker');
            $this.html('<ul class="jGraduate_tabs">' +
                    '<li class="jGraduate_tab_color jGraduate_tab_current" data-type="col">Solid Color</li>' +
                    '<li class="jGraduate_tab_lingrad" data-type="lg">Linear Gradient</li>' +
                    '<li class="jGraduate_tab_radgrad" data-type="rg">Radial Gradient</li>' +
                  '</ul>' +
                  '<div class="jGraduate_colPick"></div>' +
                  '<div class="jGraduate_gradPick"></div>' +
            '<div class="jGraduate_LightBox"></div>' +
            '<div id="' + id + '_jGraduate_stopPicker" class="jGraduate_stopPicker"></div>'
                  
                  
                  );
      var colPicker = $(idref + '> .jGraduate_colPick');
      var gradPicker = $(idref + '> .jGraduate_gradPick');
      
            gradPicker.html(
              '<div id="' + id + '_jGraduate_Swatch" class="jGraduate_Swatch">' +
                '<h2 class="jGraduate_Title">' + $settings.window.pickerTitle + '</h2>' +
                '<div id="' + id + '_jGraduate_GradContainer" class="jGraduate_GradContainer"></div>' +
                '<div id="' + id + '_jGraduate_StopSlider" class="jGraduate_StopSlider"></div>' +
              '</div>' + 
              '<div class="jGraduate_Form jGraduate_Points jGraduate_lg_field">' +
                '<div class="jGraduate_StopSection">' +
                  '<label class="jGraduate_Form_Heading">Begin Point</label>' +
                  '<div class="jGraduate_Form_Section">' +
                    '<label>x:</label>' +
                    '<input type="text" id="' + id + '_jGraduate_x1" size="3" title="Enter starting x value between 0.0 and 1.0"/>' +
                    '<label> y:</label>' +
                    '<input type="text" id="' + id + '_jGraduate_y1" size="3" title="Enter starting y value between 0.0 and 1.0"/>' +
                  '</div>' +
                '</div>' +
                '<div class="jGraduate_StopSection">' +
                  '<label class="jGraduate_Form_Heading">End Point</label>' +
                  '<div class="jGraduate_Form_Section">' +
                    '<label>x:</label>' +
                    '<input type="text" id="' + id + '_jGraduate_x2" size="3" title="Enter ending x value between 0.0 and 1.0"/>' +
                    '<label> y:</label>' +
                    '<input type="text" id="' + id + '_jGraduate_y2" size="3" title="Enter ending y value between 0.0 and 1.0"/>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="jGraduate_Form jGraduate_Points jGraduate_rg_field">' +
          '<div class="jGraduate_StopSection">' +
            '<label class="jGraduate_Form_Heading">Center Point</label>' +
            '<div class="jGraduate_Form_Section">' +
              '<label>x:</label>' +
              '<input type="text" id="' + id + '_jGraduate_cx" size="3" title="Enter x value between 0.0 and 1.0"/>' +
              '<label> y:</label>' +
              '<input type="text" id="' + id + '_jGraduate_cy" size="3" title="Enter y value between 0.0 and 1.0"/>' +
            '</div>' +
          '</div>' +
          '<div class="jGraduate_StopSection">' +
            '<label class="jGraduate_Form_Heading">Focal Point</label>' +
            '<div class="jGraduate_Form_Section">' +
              '<label>Match center: <input type="checkbox" checked="checked" id="' + id + '_jGraduate_match_ctr"/></label><br/>' +
              '<label>x:</label>' +
              '<input type="text" id="' + id + '_jGraduate_fx" size="3" title="Enter x value between 0.0 and 1.0"/>' +
              '<label> y:</label>' +
              '<input type="text" id="' + id + '_jGraduate_fy" size="3" title="Enter y value between 0.0 and 1.0"/>' +
            '</div>' +
          '</div>' +
              '</div>' +
        '<div class="jGraduate_StopSection jGraduate_SpreadMethod">' +
          '<label class="jGraduate_Form_Heading">Spread method</label>' +
          '<div class="jGraduate_Form_Section">' +
            '<select class="jGraduate_spreadMethod">' +
              '<option value=pad selected>Pad</option>' +
              '<option value=reflect>Reflect</option>' +
              '<option value=repeat>Repeat</option>' +
            '</select>' + 
          '</div>' +
        '</div>' +
              '<div class="jGraduate_Form">' +
                '<div class="jGraduate_Slider jGraduate_RadiusField jGraduate_rg_field">' +
            '<label class="prelabel">Radius:</label>' +
            '<div id="' + id + '_jGraduate_Radius" class="jGraduate_SliderBar jGraduate_Radius" title="Click to set radius">' +
              '<img id="' + id + '_jGraduate_RadiusArrows" class="jGraduate_RadiusArrows" src="' + $settings.images.clientPath + 'rangearrows2.svg" width="9" height="20">' +
            '</div>' +
            '<label><input type="text" id="' + id + '_jGraduate_RadiusInput" size="3" value="100"/>%</label>' + 
                '</div>' +
                '<div class="jGraduate_Slider jGraduate_EllipField jGraduate_rg_field">' +
            '<label class="prelabel">Ellip:</label>' +
            '<div id="' + id + '_jGraduate_Ellip" class="jGraduate_SliderBar jGraduate_Ellip" title="Click to set Ellip">' +
              '<img id="' + id + '_jGraduate_EllipArrows" class="jGraduate_EllipArrows" src="' + $settings.images.clientPath + 'rangearrows2.svg" width="9" height="20">' +
            '</div>' +
            '<label><input type="text" id="' + id + '_jGraduate_EllipInput" size="3" value="0"/>%</label>' + 
                '</div>' +
                '<div class="jGraduate_Slider jGraduate_AngleField jGraduate_rg_field">' +
            '<label class="prelabel">Angle:</label>' +
            '<div id="' + id + '_jGraduate_Angle" class="jGraduate_SliderBar jGraduate_Angle" title="Click to set Angle">' +
              '<img id="' + id + '_jGraduate_AngleArrows" class="jGraduate_AngleArrows" src="' + $settings.images.clientPath + 'rangearrows2.svg" width="9" height="20">' +
            '</div>' +
            '<label><input type="text" id="' + id + '_jGraduate_AngleInput" size="3" value="0"/>º&nbsp;</label>' + 
                '</div>' +
                '<div class="jGraduate_Slider jGraduate_OpacField">' +
            '<label class="prelabel">Opac:</label>' +
            '<div id="' + id + '_jGraduate_Opac" class="jGraduate_SliderBar jGraduate_Opac" title="Click to set Opac">' +
              '<img id="' + id + '_jGraduate_OpacArrows" class="jGraduate_OpacArrows" src="' + $settings.images.clientPath + 'rangearrows2.svg" width="9" height="20">' +
            '</div>' +
            '<label><input type="text" id="' + id + '_jGraduate_OpacInput" size="3" value="100"/>%</label>' + 
                '</div>' +
              '</div>' +
              '<div class="jGraduate_OkCancel">' +
                '<input type="button" id="' + id + '_jGraduate_Ok" class="jGraduate_Ok" value="OK"/>' +
                '<input type="button" id="' + id + '_jGraduate_Cancel" class="jGraduate_Cancel" value="Cancel"/>' +
              '</div>');
              
      // --------------
            // Set up all the SVG elements (the gradient, stops and rectangle)
            var MAX = 256, MARGINX = 0, MARGINY = 0, STOP_RADIUS = 15/2,
              SIZEX = MAX - 2*MARGINX, SIZEY = MAX - 2*MARGINY;
              
            var curType, curGradient, previewRect;  
            
      var attr_input = {};
            
            var SLIDERW = 145;
            $('.jGraduate_SliderBar').width(SLIDERW);
      
      var container = $('#' + id+'_jGraduate_GradContainer')[0];
      
      var svg = mkElem('svg', {
        id: id + '_jgraduate_svg',
        width: MAX,
        height: MAX,
        xmlns: ns.svg
      }, container);
      
      // if we are sent a gradient, import it 
      
      curType = curType || $this.paint.type;
      
      var grad = curGradient = $this.paint[curType];
      
      var gradalpha = $this.paint.alpha;
      
      var isSolid = curType === 'solidColor';
      
      // Make any missing gradients
      switch ( curType ) {
        case "solidColor":
          // fall through
        case "linearGradient":
          if(!isSolid) {
            curGradient.id = id+'_lg_jgraduate_grad';
            grad = curGradient = svg.appendChild(curGradient);//.cloneNode(true));
          }
          mkElem('radialGradient', {
            id: id + '_rg_jgraduate_grad'
          }, svg);
          if(curType === "linearGradient") break;
        case "radialGradient":
          if(!isSolid) {
            curGradient.id = id+'_rg_jgraduate_grad';
            grad = curGradient = svg.appendChild(curGradient);//.cloneNode(true));
          }
          mkElem('linearGradient', {
            id: id + '_lg_jgraduate_grad',
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 0
          }, svg);
      }
      
      if(isSolid) {
        grad = curGradient = $('#' + id + '_lg_jgraduate_grad')[0];
        var color = $this.paint[curType];
        mkStop(0, '#' + color, 1);
        
        var type = typeof $settings.newstop;
        
        if(type === 'string') {
          switch ( $settings.newstop ) {
            case 'same':
              mkStop(1, '#' + color, 1);        
              break;

            case 'inverse':
              // Invert current color for second stop
              var inverted = '';
              if (color.length === 3) {
                color = color.split("").map(function(d){return d + "" + d}).join("");
              }
              for(var i = 0; i < 6; i += 2) {
                var ch = color.substr(i, 2);
                var inv = (255 - parseInt(color.substr(i, 2), 16)).toString(16);
                if(inv.length < 2) inv = 0 + inv;
                inverted += inv;
              }
              mkStop(1, '#' + inverted, 1);
              break;
            
            case 'white':
              mkStop(1, '#ffffff', 1);
              break;
  
            case 'black':
              mkStop(1, '#000000', 1);
              break;
          }
        } else if(type === 'object'){
          var opac = ('opac' in $settings.newstop) ? $settings.newstop.opac : 1;
          mkStop(1, ($settings.newstop.color || '#' + color), opac);
        }
      }

      
      var x1 = parseFloat(grad.getAttribute('x1')||0.0),
        y1 = parseFloat(grad.getAttribute('y1')||0.0),
        x2 = parseFloat(grad.getAttribute('x2')||1.0),
        y2 = parseFloat(grad.getAttribute('y2')||0.0);
        
      var cx = parseFloat(grad.getAttribute('cx')||0.5),
        cy = parseFloat(grad.getAttribute('cy')||0.5),
        fx = parseFloat(grad.getAttribute('fx')|| cx),
        fy = parseFloat(grad.getAttribute('fy')|| cy);

      
      var previewRect = mkElem('rect', {
        id: id + '_jgraduate_rect',
        x: MARGINX,
        y: MARGINY,
        width: SIZEX,
        height: SIZEY,
        fill: 'url(#'+id+'_jgraduate_grad)',
        'fill-opacity': gradalpha/100
      }, svg);
      
      // stop visuals created here
      var beginCoord = $('<div/>').attr({
        'class': 'grad_coord jGraduate_lg_field',
        title: 'Begin Stop'
      }).text(1).css({
        top: y1 * MAX,
        left: x1 * MAX
      }).data('coord', 'start').appendTo(container);
      
      var endCoord = beginCoord.clone().text(2).css({
        top: y2 * MAX,
        left: x2 * MAX
      }).attr('title', 'End stop').data('coord', 'end').appendTo(container);
    
      var centerCoord = $('<div/>').attr({
        'class': 'grad_coord jGraduate_rg_field',
        title: 'Center stop'
      }).text('C').css({
        top: cy * MAX,
        left: cx * MAX
      }).data('coord', 'center').appendTo(container);
      
      var focusCoord = centerCoord.clone().text('F').css({
        top: fy * MAX,
        left: fx * MAX,
        display: 'none'
      }).attr('title', 'Focus point').data('coord', 'focus').appendTo(container);
      
      focusCoord[0].id = id + '_jGraduate_focusCoord';
      
      var coords = $(idref + ' .grad_coord');
      
      $.each(['x1', 'y1', 'x2', 'y2', 'cx', 'cy', 'fx', 'fy'], function(i, attr) {
        var attrval = curGradient.getAttribute(attr);
        
        var isRadial = isNaN(attr[1]);
        
        if(!attrval) {
          // Set defaults
          if(isRadial) {
            // For radial points
            attrval = "0.5";
          } else {
            // Only x2 is 1
            attrval = attr === 'x2' ? "1.0" : "0.0";
          }
        }

        attr_input[attr] = $('#'+id+'_jGraduate_' + attr)
          .val(attrval)
          .change(function() {
            // TODO: Support values < 0 and > 1 (zoomable preview?)
            if (isNaN(parseFloat(this.value)) || this.value < 0) {
              this.value = 0.0; 
            } else if(this.value > 1) {
              this.value = 1.0;
            }
            
            if(!(attr[0] === 'f' && !showFocus)) {
              if(isRadial && curType === 'radialGradient' || !isRadial && curType === 'linearGradient') {
                curGradient.setAttribute(attr, this.value);
              }
            }
            
            if(isRadial) {
              var $elem = attr[0] === "c" ? centerCoord : focusCoord;
            } else {
              var $elem = attr[1] === "1" ? beginCoord : endCoord;            
            }
            
            var cssName = attr.indexOf('x') >= 0 ? 'left' : 'top';
            
            $elem.css(cssName, this.value * MAX);
        }).change();
      });

      function mkStop(n, color, opac, sel, stop_elem) {
        var stop = stop_elem || mkElem('stop',{'stop-color':color,'stop-opacity':opac,offset:n}, curGradient);
        if(stop_elem) {
          color = stop_elem.getAttribute('stop-color');
          opac = stop_elem.getAttribute('stop-opacity');
          n = stop_elem.getAttribute('offset');
        } else {
          curGradient.appendChild(stop);
        }
        if(opac === null) opac = 1;
        
        var picker_d = 'M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z';
        
        var pathbg = mkElem('path',{
          d: picker_d,
          fill: 'url(#jGraduate_trans)',
          transform: 'translate(' + (10 + n * MAX) + ', 26)'
        }, stopGroup);
        
        var path = mkElem('path',{
          d: picker_d,
          fill: color,
          'fill-opacity': opac,
          transform: 'translate(' + (10 + n * MAX) + ', 26)',
          stroke: '#000',
          'stroke-width': 1.5
        }, stopGroup);

        $(path).mousedown(function(e) {
          selectStop(this);
          drag = cur_stop;
          $win.mousemove(dragColor).mouseup(remDrags);
          stop_offset = stopMakerDiv.offset();
          e.preventDefault();
          return false;
        }).data('stop', stop).data('bg', pathbg).dblclick(function() {
          $('div.jGraduate_LightBox').show();     
          var colorhandle = this;
          var stopOpacity = +stop.getAttribute('stop-opacity') || 1;
          var stopColor = stop.getAttribute('stop-color') || 1;
          var thisAlpha = (parseFloat(stopOpacity)*255).toString(16);
          while (thisAlpha.length < 2) { thisAlpha = "0" + thisAlpha; }
          color = stopColor.substr(1) + thisAlpha;
          $('#'+id+'_jGraduate_stopPicker').css({'left': 100, 'bottom': 15}).jPicker({
              window: { title: "Pick the start color and opacity for the gradient" },
              images: { clientPath: $settings.images.clientPath },
              color: { active: color, alphaSupport: true }
            }, function(color, arg2){
              stopColor = color.val('hex') ? ('#'+color.val('hex')) : "none";
              stopOpacity = color.val('a') !== null ? color.val('a')/256 : 1;
              colorhandle.setAttribute('fill', stopColor);
              colorhandle.setAttribute('fill-opacity', stopOpacity);
              stop.setAttribute('stop-color', stopColor);
              stop.setAttribute('stop-opacity', stopOpacity);
              $('div.jGraduate_LightBox').hide();
              $('#'+id+'_jGraduate_stopPicker').hide();
            }, null, function() {
              $('div.jGraduate_LightBox').hide();
              $('#'+id+'_jGraduate_stopPicker').hide();
            });
        });
        
        $(curGradient).find('stop').each(function() {
          var cur_s = $(this);
          if(+this.getAttribute('offset') > n) {
            if(!color) {
              var newcolor = this.getAttribute('stop-color');
              var newopac = this.getAttribute('stop-opacity');
              stop.setAttribute('stop-color', newcolor);
              path.setAttribute('fill', newcolor);
              stop.setAttribute('stop-opacity', newopac === null ? 1 : newopac);
              path.setAttribute('fill-opacity', newopac === null ? 1 : newopac);
            }
            cur_s.before(stop);
            return false;
          }
        });
        if(sel) selectStop(path);
        return stop;
      }
      
      function remStop() {
        delStop.setAttribute('display', 'none');
        var path = $(cur_stop);
        var stop = path.data('stop');
        var bg = path.data('bg');
        $([cur_stop, stop, bg]).remove();
      }
      
        
      var stops, stopGroup;
      
      var stopMakerDiv = $('#' + id + '_jGraduate_StopSlider');

      var cur_stop, stopGroup, stopMakerSVG, drag;
      
      var delStop = mkElem('path',{
        d:'m9.75,-6l-19.5,19.5m0,-19.5l19.5,19.5',
        fill:'none',
        stroke:'#D00',
        'stroke-width':5,
        display:'none'
      }, stopMakerSVG);

      
      function selectStop(item) {
        if(cur_stop) cur_stop.setAttribute('stroke', '#000');
        item.setAttribute('stroke', 'blue');
        cur_stop = item;
        cur_stop.parentNode.appendChild(cur_stop);
      //  stops = $('stop');
      //  opac_select.val(cur_stop.attr('fill-opacity') || 1);
      //  root.append(delStop);
      }
      
      var stop_offset;
      
      function remDrags() {
        $win.unbind('mousemove', dragColor);
        if(delStop.getAttribute('display') !== 'none') {
          remStop();
        }
        drag = null;
      }
      
      var scale_x = 1, scale_y = 1, angle = 0;
      var c_x = cx;
      var c_y = cy;
      
      function xform() {
        var rot = angle?'rotate(' + angle + ',' + c_x + ',' + c_y + ') ':'';
        if(scale_x === 1 && scale_y === 1) {
          curGradient.removeAttribute('gradientTransform');
//          $('#ang').addClass('dis');
        } else {
          var x = -c_x * (scale_x-1);
          var y = -c_y * (scale_y-1);
          curGradient.setAttribute('gradientTransform', rot + 'translate(' + x + ',' + y + ') scale(' + scale_x + ',' + scale_y + ')');
//          $('#ang').removeClass('dis');
        }
      }
      
      function dragColor(evt) {

        var x = evt.pageX - stop_offset.left;
        var y = evt.pageY - stop_offset.top;
        x = x < 10 ? 10 : x > MAX + 10 ? MAX + 10: x;

        var xf_str = 'translate(' + x + ', 26)';
          if(y < -60 || y > 130) {
            delStop.setAttribute('display', 'block');
            delStop.setAttribute('transform', xf_str);
          } else {
            delStop.setAttribute('display', 'none');
          }
        
        drag.setAttribute('transform', xf_str);
        $.data(drag, 'bg').setAttribute('transform', xf_str);
        var stop = $.data(drag, 'stop');
        var s_x = (x - 10) / MAX;
        
        stop.setAttribute('offset', s_x);
        var last = 0;
        
        $(curGradient).find('stop').each(function(i) {
          var cur = this.getAttribute('offset');
          var t = $(this);
          if(cur < last) {
            t.prev().before(t);
            stops = $(curGradient).find('stop');
          }
          last = cur;
        });
        
      }
      
      stopMakerSVG = mkElem('svg', {
        width: '100%',
        height: 45
      }, stopMakerDiv[0]);
      
      var trans_pattern = mkElem('pattern', {
        width: 16,
        height: 16,
        patternUnits: 'userSpaceOnUse',
        id: 'jGraduate_trans'
      }, stopMakerSVG);
      
      var trans_img = mkElem('image', {
        width: 16,
        height: 16
      }, trans_pattern);
      
      var bg_image = $settings.images.clientPath + 'map-opacity.png';

      trans_img.setAttributeNS(ns.xlink, 'xlink:href', bg_image);
      
      $(stopMakerSVG).on("click touchstart", function(evt) {
        stop_offset = stopMakerDiv.offset();
        var target = evt.target;
        if(target.tagName === 'path') return;
        var x = evt.pageX - stop_offset.left - 8;
        x = x < 10 ? 10 : x > MAX + 10 ? MAX + 10: x;
        mkStop(x / MAX, 0, 0, true);
        evt.stopPropagation();
      });
      
      $(stopMakerSVG).mouseover(function() {
        stopMakerSVG.appendChild(delStop);
      });
      
      stopGroup = mkElem('g', {}, stopMakerSVG);
      
      mkElem('line', {
        x1: 10,
        y1: 15,
        x2: MAX + 10,
        y2: 15,
        'stroke-width': 2,
        stroke: '#000'
      }, stopMakerSVG);
      
      
      var spreadMethodOpt = gradPicker.find('.jGraduate_spreadMethod').change(function() {
        curGradient.setAttribute('spreadMethod', $(this).val());
      });
      
    
      // handle dragging the stop around the swatch
      var draggingCoord = null;
      
      var onCoordDrag = function(evt) {
        var x = evt.pageX - offset.left;
        var y = evt.pageY - offset.top;

        // clamp stop to the swatch
        x = x < 0 ? 0 : x > MAX ? MAX : x;
        y = y < 0 ? 0 : y > MAX ? MAX : y;
        
        draggingCoord.css('left', x).css('top', y);

        // calculate stop offset                
        var fracx = x / SIZEX;
        var fracy = y / SIZEY;
        
        var type = draggingCoord.data('coord');
        var grad = curGradient;
        
        switch ( type ) {
          case 'start':
            attr_input.x1.val(fracx);
            attr_input.y1.val(fracy);
            grad.setAttribute('x1', fracx);
            grad.setAttribute('y1', fracy);
            break;
          case 'end':
            attr_input.x2.val(fracx);
            attr_input.y2.val(fracy);
            grad.setAttribute('x2', fracx);
            grad.setAttribute('y2', fracy);
            break;
          case 'center':
            attr_input.cx.val(fracx);
            attr_input.cy.val(fracy);
            grad.setAttribute('cx', fracx);
            grad.setAttribute('cy', fracy);
            c_x = fracx;
            c_y = fracy;
            xform();
            break;
          case 'focus':
            attr_input.fx.val(fracx);
            attr_input.fy.val(fracy);
            grad.setAttribute('fx', fracx);
            grad.setAttribute('fy', fracy);
            xform();
        }
        
        evt.preventDefault();
      }
      
      var onCoordUp = function() {
        draggingCoord = null;
        $win.unbind('mousemove', onCoordDrag).unbind('mouseup', onCoordUp);
      }
      
      // Linear gradient
//      (function() {

      
      stops = curGradient.getElementsByTagNameNS(ns.svg, 'stop');

      // if there are not at least two stops, then 
      if (numstops < 2) {
        while (numstops < 2) {
          curGradient.appendChild( document.createElementNS(ns.svg, 'stop') );
          ++numstops;
        }
        stops = curGradient.getElementsByTagNameNS(ns.svg, 'stop');
      }
      
      var numstops = stops.length;        
      for(var i = 0; i < numstops; i++) {
        mkStop(0, 0, 0, 0, stops[i]);
      }
      
      spreadMethodOpt.val(curGradient.getAttribute('spreadMethod') || 'pad');

      var offset;
      
      // No match, so show focus point
      var showFocus = false; 
      
      previewRect.setAttribute('fill-opacity', gradalpha/100);

      
      $('#' + id + ' div.grad_coord').mousedown(function(evt) {
        evt.preventDefault();
        draggingCoord = $(this);
        var s_pos = draggingCoord.offset();
        offset = draggingCoord.parent().offset();
        $win.mousemove(onCoordDrag).mouseup(onCoordUp);
      });
      
      // bind GUI elements
      $('#'+id+'_jGraduate_Ok').bind('click touchstart', function() {
        $this.paint.type = curType;
        $this.paint[curType] = curGradient.cloneNode(true);;
        $this.paint.solidColor = null;
        okClicked();
      });
      $('#'+id+'_jGraduate_Cancel').bind('click touchstart', function(paint) {
        cancelClicked();
      });

      if(curType === 'radialGradient') {
        if(showFocus) {
          focusCoord.show();        
        } else {
          focusCoord.hide();
          attr_input.fx.val("");
          attr_input.fy.val("");
        }
      }

      $("#" + id + "_jGraduate_match_ctr")[0].checked = !showFocus;
      
      var lastfx, lastfy;
      
      $("#" + id + "_jGraduate_match_ctr").change(function() {
        showFocus = !this.checked;
        focusCoord.toggle(showFocus);
        attr_input.fx.val('');
        attr_input.fy.val('');
        var grad = curGradient;
        if(!showFocus) {
          lastfx = grad.getAttribute('fx');
          lastfy = grad.getAttribute('fy');
          grad.removeAttribute('fx');
          grad.removeAttribute('fy');
        } else {
          var fx = lastfx || .5;
          var fy = lastfy || .5;
          grad.setAttribute('fx', fx);
          grad.setAttribute('fy', fy);
          attr_input.fx.val(fx);
          attr_input.fy.val(fy);
        }
      });
      
      var stops = curGradient.getElementsByTagNameNS(ns.svg, 'stop');
      var numstops = stops.length;
      // if there are not at least two stops, then 
      if (numstops < 2) {
        while (numstops < 2) {
          curGradient.appendChild( document.createElementNS(ns.svg, 'stop') );
          ++numstops;
        }
        stops = curGradient.getElementsByTagNameNS(ns.svg, 'stop');
      }
      
      var slider;
      
      var setSlider = function(e) {
        var offset = slider.offset;
        var div = slider.parent;
        var x = (e.pageX - offset.left - parseInt(div.css('border-left-width')));
        if (x > SLIDERW) x = SLIDERW;
        if (x <= 0) x = 0;
        var posx = x - 5;
        x /= SLIDERW;
        
        switch ( slider.type ) {
          case 'radius':
            x = Math.pow(x * 2, 2.5);
            if(x > .98 && x < 1.02) x = 1;
            if (x <= .01) x = .01;
            curGradient.setAttribute('r', x);
            break;
          case 'opacity':
            $this.paint.alpha = parseInt(x*100);
            previewRect.setAttribute('fill-opacity', x);
            break;
          case 'ellip':
            scale_x = 1, scale_y = 1;
            if(x < .5) {
              x /= .5; // 0.001
              scale_x = x <= 0 ? .01 : x;
            } else if(x > .5) {
              x /= .5; // 2
              x = 2 - x;
              scale_y = x <= 0 ? .01 : x;
            } 
            xform();
            x -= 1;
            if(scale_y === x + 1) {
              x = Math.abs(x);
            }
            break;
          case 'angle':
            x = x - .5;
            angle = x *= 180;
            xform();
            x /= 100;
            break;
        }
        slider.elem.css({'margin-left':posx});
        x = Math.round(x*100);
        slider.input.val(x);
      };
      
      var ellip_val = 0, angle_val = 0;
      
      if(curType === 'radialGradient') {
        var tlist = curGradient.gradientTransform.baseVal;
        if(tlist.numberOfItems === 2) {
          var t = tlist.getItem(0);
          var s = tlist.getItem(1);
          if(t.type === 2 && s.type === 3) {
            var m = s.matrix;
            if(m.a !== 1) {
              ellip_val = Math.round(-(1 - m.a) * 100); 
            } else if(m.d !== 1) {
              ellip_val = Math.round((1 - m.d) * 100);
            } 
          }
        } else if(tlist.numberOfItems === 3) {
          // Assume [R][T][S]
          var r = tlist.getItem(0);
          var t = tlist.getItem(1);
          var s = tlist.getItem(2);
          
          if(r.type === 4 
            && t.type === 2 
            && s.type === 3) {

            angle_val = Math.round(r.angle);
            var m = s.matrix;
            if(m.a !== 1) {
              ellip_val = Math.round(-(1 - m.a) * 100); 
            } else if(m.d !== 1) {
              ellip_val = Math.round((1 - m.d) * 100);
            } 
            
          }
        }
      }
      
      var sliders = {
        radius: {
          handle: '#' + id + '_jGraduate_RadiusArrows',
          input: '#' + id + '_jGraduate_RadiusInput',
          val: (curGradient.getAttribute('r') || .5) * 100
        },
        opacity: {
          handle: '#' + id + '_jGraduate_OpacArrows',
          input: '#' + id + '_jGraduate_OpacInput',
          val: $this.paint.alpha || 100
        },
        ellip: {
          handle: '#' + id + '_jGraduate_EllipArrows',
          input: '#' + id + '_jGraduate_EllipInput',
          val: ellip_val
        },
        angle: {
          handle: '#' + id + '_jGraduate_AngleArrows',
          input: '#' + id + '_jGraduate_AngleInput',
          val: angle_val
        }
      }
      
      $.each(sliders, function(type, data) {
        var handle = $(data.handle);
        handle.mousedown(function(evt) {
          var parent = handle.parent();
          slider = {
            type: type,
            elem: handle,
            input: $(data.input),
            parent: parent,
            offset: parent.offset()
          };
          $win.mousemove(dragSlider).mouseup(stopSlider);
          evt.preventDefault();
        });
        
        $(data.input).val(data.val).change(function() {
          var val = +this.value;
          var xpos = 0;
          var isRad = curType === 'radialGradient';
          switch ( type ) {
            case 'radius':
              if(isRad) curGradient.setAttribute('r', val / 100);
              xpos = (Math.pow(val / 100, 1 / 2.5) / 2) * SLIDERW;
              break;
            
            case 'opacity':
              $this.paint.alpha = val;
              previewRect.setAttribute('fill-opacity', val / 100);
              xpos = val * (SLIDERW / 100);
              break;
              
            case 'ellip':
              scale_x = scale_y = 1;
              if(val === 0) {
                xpos = SLIDERW * .5;
                break;
              }
              if(val > 99.5) val = 99.5;
              if(val > 0) {
                scale_y = 1 - (val / 100);
              } else {
                scale_x = - (val / 100) - 1;
              }

              xpos = SLIDERW * ((val + 100) / 2) / 100;
              if(isRad) xform();
              break;
            
            case 'angle':
              angle = val;
              xpos = angle / 180;
              xpos += .5;
              xpos *= SLIDERW;
              if(isRad) xform();
          }
          if(xpos > SLIDERW) {
            xpos = SLIDERW;
          } else if(xpos < 0) {
            xpos = 0;
          }
          handle.css({'margin-left': xpos - 5});
        }).change();
      });
      
      var dragSlider = function(evt) {
        setSlider(evt);
        evt.preventDefault();
      };
      
      var stopSlider = function(evt) {
        $win.unbind('mousemove', dragSlider).unbind('mouseup', stopSlider);
        slider = null;
      };
      
      
      // --------------
      var thisAlpha = ($this.paint.alpha*255/100).toString(16);
      while (thisAlpha.length < 2) { thisAlpha = "0" + thisAlpha; }
      thisAlpha = thisAlpha.split(".")[0];
      color = $this.paint.solidColor == "none" ? "" : $this.paint.solidColor + thisAlpha;
      
      if(!isSolid) {
        color = stops[0].getAttribute('stop-color');
      }
      
      // This should be done somewhere else, probably
      $.extend($.fn.jPicker.defaults.window, {
        alphaSupport: true, effects: {type: 'show',speed: 0}
      });
      
      colPicker.jPicker(
        {
          window: { title: $settings.window.pickerTitle },
          images: { clientPath: $settings.images.clientPath },
          color: { active: color, alphaSupport: true }
        },
        function(color) {
          $this.paint.type = "solidColor";
          $this.paint.alpha = color.val('ahex') ? Math.round((color.val('a') / 255) * 100) : 100;
          $this.paint.solidColor = color.val('hex') ? color.val('hex') : "none";
          $this.paint.radialGradient = null;
          okClicked(); 
        },
        null,
        function(){ cancelClicked(); }
        );

      
      var tabs = $(idref + ' .jGraduate_tabs li');
      tabs.on("click touchstart", function() {
        tabs.removeClass('jGraduate_tab_current');
        $(this).addClass('jGraduate_tab_current');
        $(idref + " > div").hide();
        var type = $(this).attr('data-type');
        var container = $(idref + ' .jGraduate_gradPick').show();
        if(type === 'rg' || type === 'lg') {
          // Show/hide appropriate fields
          $('.jGraduate_' + type + '_field').show();
          $('.jGraduate_' + (type === 'lg' ? 'rg' : 'lg') + '_field').hide();
          
          $('#' + id + '_jgraduate_rect')[0].setAttribute('fill', 'url(#' + id + '_' + type + '_jgraduate_grad)');
          
          // Copy stops
          
          curType = type === 'lg' ? 'linearGradient' : 'radialGradient';
          
          $('#' + id + '_jGraduate_OpacInput').val($this.paint.alpha).change();
          
          var newGrad = $('#' + id + '_' + type + '_jgraduate_grad')[0];
          
          if(curGradient !== newGrad) {
            var cur_stops = $(curGradient).find('stop');  
            $(newGrad).empty().append(cur_stops);
            curGradient = newGrad;
            var sm = spreadMethodOpt.val();
            curGradient.setAttribute('spreadMethod', sm);
          }
          showFocus = type === 'rg' && curGradient.getAttribute('fx') != null && !(cx == fx && cy == fy);
          $('#' + id + '_jGraduate_focusCoord').toggle(showFocus);
          if(showFocus) {
            $('#' + id + '_jGraduate_match_ctr')[0].checked = false;
          }
        } else {
          $(idref + ' .jGraduate_gradPick').hide();
          $(idref + ' .jGraduate_colPick').show();
        }
      });
      $(idref + " > div").hide();
      tabs.removeClass('jGraduate_tab_current');
      var tab;
      switch ( $this.paint.type ) {
        case 'linearGradient':
          tab = $(idref + ' .jGraduate_tab_lingrad');
          break;
        case 'radialGradient':
          tab = $(idref + ' .jGraduate_tab_radgrad');
          break;
        default:
          tab = $(idref + ' .jGraduate_tab_color');
          break;
      }
      $this.show();
      
      // jPicker will try to show after a 0ms timeout, so need to fire this after that
      setTimeout(function() {
        tab.addClass('jGraduate_tab_current').click();  
      }, 10);
    });
  };
})();
// jQuery Context Menu Plugin
//
// Version 1.01
//
// Cory S.N. LaViska
// A Beautiful Site (http://abeautifulsite.net/)
// Modified by Alexis Deveria
//
// More info: http://abeautifulsite.net/2008/09/jquery-context-menu-plugin/
//
// Terms of Use
//
// This plugin is dual-licensed under the GNU General Public License
//   and the MIT License and is copyright A Beautiful Site, LLC.
//
if(jQuery)( function() {
	var win = $(window);
	var doc = $(document);

	$.extend($.fn, {
		
		contextMenu: function(o, callback) {
			// Defaults
			if( o.menu == undefined ) return false;
			if( o.inSpeed == undefined ) o.inSpeed = 150;
			if( o.outSpeed == undefined ) o.outSpeed = 75;
			// 0 needs to be -1 for expected results (no fade)
			if( o.inSpeed == 0 ) o.inSpeed = -1;
			if( o.outSpeed == 0 ) o.outSpeed = -1;
			// Loop each context menu
			$(this).each( function() {
				var el = $(this);
				var offset = $(el).offset();
			
				var menu = $('#' + o.menu);

				// Add contextMenu class
				menu.addClass('contextMenu');
				// Simulate a true right click

				$(this).bind( "mousedown", function(e) {
					var evt = e;
					$(this).on("mouseup", function(e) {
						var srcElement = $(this);
						srcElement.unbind('mouseup');
						$(".contextMenu").hide();
						if( evt.button === 2 || o.allowLeft || (evt.ctrlKey && svgedit.browser.isMac()) ) {
                if (!svgedit.browser.isTouch()) open_context_menu(e, evt, srcElement);
						}
					});
				});

				if (svgedit.browser.isTouch()) {
  				 $(this).bind("taphold", function(e){
  				  var srcElement = $(this);
  				  srcElement.unbind('mouseup');
  				  open_context_menu(e,e, srcElement);
  				})
				}
				
				var open_context_menu = function(e, evt, srcElement) {
				  if (typeof evt == 'undefined') evt = e;
				  e.stopPropagation();
        
				  // Get this context menu
			  
				  if( el.hasClass('disabled') || evt.altKey ) return false;
				
				  // Detect mouse position
				  var d = {}, x = e.pageX, y = e.pageY;
				  if (svgedit.browser.isTouch()) var d = {}, x = e.originalEvent.touches[0].pageX, y = e.originalEvent.touches[0].pageY;
				
				  var x_off = win.width() - menu.width(), 
				  	y_off = win.height() - menu.height();
        
				  if(x > x_off - 15) x = x_off-15;
				  if(y > y_off - 30) y = y_off-30; // 30 is needed to prevent scrollbars in FF
				
				  if(svgedit.browser.isTouch()) 
				    y = y - (menu.height()/2)
				
				  // Show the menu
				  doc.unbind('click');
				  menu.css({ top: y, left: x }).fadeIn(o.inSpeed);
				  // Hover events
				  menu.find('A').mouseover( function() {
				  	menu.find('LI.hover').removeClass('hover');
				  	$(this).parent().addClass('hover');
				  }).mouseout( function() {
				  	menu.find('LI.hover').removeClass('hover');
				  });
				
				  // Keyboard
				  doc.keypress( function(e) {
				  	switch( e.keyCode ) {
				  		case 38: // up
				  			if( !menu.find('LI.hover').length ) {
				  				menu.find('LI:last').addClass('hover');
				  			} else {
				  				menu.find('LI.hover').removeClass('hover').prevAll('LI:not(.disabled)').eq(0).addClass('hover');
				  				if( !menu.find('LI.hover').length ) menu.find('LI:last').addClass('hover');
				  			}
				  		break;
				  		case 40: // down
				  			if( menu.find('LI.hover').length == 0 ) {
				  				menu.find('LI:first').addClass('hover');
				  			} else {
				  				menu.find('LI.hover').removeClass('hover').nextAll('LI:not(.disabled)').eq(0).addClass('hover');
				  				if( !menu.find('LI.hover').length ) menu.find('LI:first').addClass('hover');
				  			}
				  		break;
				  		case 13: // enter
				  			menu.find('LI.hover A').trigger('click');
				  		break;
				  		case 27: // esc
				  			doc.trigger('click');
				  		break
				  	}
				  });
				
				  // When items are selected
				  menu.find('A').unbind('mouseup');
				  menu.find('LI:not(.disabled) A').mouseup( function() {
				  	doc.unbind('click').unbind('keypress');
				  	$(".contextMenu").hide();
				  	// Callback
				  	if( callback ) callback( $(this).attr('href').substr(1), $(srcElement), {x: x - offset.left, y: y - offset.top, docX: x, docY: y} );
				  	return false;
				  });
				
				  // Hide bindings
				  setTimeout( function() { // Delay for Mozilla
				  	doc.click( function() {
				  		doc.unbind('click').unbind('keypress');
				  		menu.fadeOut(o.outSpeed);
				  		return false;
				  	});
				  }, 0);
				}
				

				// Disable browser context menu (requires both selectors to work in IE/Safari + FF/Chrome)
				$(el).add($('UL.contextMenu')).bind('contextmenu', function() { return false; });
				
			});
			return $(this);
		},
		
		// Disable context menu items on the fly
		disableContextMenuItems: function(o) {
			if( o == undefined ) {
				// Disable all
				$(this).find('LI').addClass('disabled');
				return( $(this) );
			}
			$(this).each( function() {
				if( o != undefined ) {
					var d = o.split(',');
					for( var i = 0; i < d.length; i++ ) {
						$(this).find('A[href="' + d[i] + '"]').parent().addClass('disabled');
						
					}
				}
			});
			return( $(this) );
		},
		
		// Enable context menu items on the fly
		enableContextMenuItems: function(o) {
			if( o == undefined ) {
				// Enable all
				$(this).find('LI.disabled').removeClass('disabled');
				return( $(this) );
			}
			$(this).each( function() {
				if( o != undefined ) {
					var d = o.split(',');
					for( var i = 0; i < d.length; i++ ) {
						$(this).find('A[href="' + d[i] + '"]').parent().removeClass('disabled');
						
					}
				}
			});
			return( $(this) );
		},
		
		// Disable context menu(s)
		disableContextMenu: function() {
			$(this).each( function() {
				$(this).addClass('disabled');
			});
			return( $(this) );
		},
		
		// Enable context menu(s)
		enableContextMenu: function() {
			$(this).each( function() {
				$(this).removeClass('disabled');
			});
			return( $(this) );
		},
		
		// Destroy context menu(s)
		destroyContextMenu: function() {
			// Destroy specified context menus
			$(this).each( function() {
				// Disable action
				$(this).unbind('mousedown').unbind('mouseup');
			});
			return( $(this) );
		}
		
	});
})(jQuery);
/*!
 * jQuery UI 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */(function(a,b){function d(b){return!a(b).parents().addBack().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.17",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jQuery);/*!
 * jQuery UI Widget 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);/*!
 * jQuery UI Mouse 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent")){a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation();return!1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted){b.preventDefault();return!0}}!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0;return!0}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button)return this._mouseUp(b);if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b));return!this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);/*
 * jQuery UI Draggable 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
 (function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!!this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy();return this}},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle"))return!1;this.handle=this._getHandle(b);if(!this.handle)return!1;c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")});return!0},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment();if(this._trigger("start",b)===!1){this._clear();return!1}this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.helper.addClass("ui-draggable-dragging"),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b);return!0},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1){this._mouseUp({});return!1}this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";a.ui.ddmanager&&a.ui.ddmanager.drag(this,b);return!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var d=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){d._trigger("stop",b)!==!1&&d._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b);return a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;a(this.options.handle,this.element).find("*").addBack().each(function(){this==b.target&&(c=!0)});return c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute"));return a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.17"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!!e.length){var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);
 
/**
 * Package: svgedit.browser
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Jeff Schiller
 * Copyright(c) 2010 Alexis Deveria
 */

// Dependencies:
// 1) jQuery (for $.alert())

var svgedit = svgedit || {};

(function() {

if (!svgedit.browser) {
  svgedit.browser = {};
}
var supportsSvg_ = (function() {
        return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
})();
svgedit.browser.supportsSvg = function() { return supportsSvg_; }
if(!svgedit.browser.supportsSvg()) {
  window.location = "browser-not-supported.html";
}
else{

var svgns = 'http://www.w3.org/2000/svg';
var userAgent = navigator.userAgent;
var svg = document.createElementNS(svgns, 'svg');

// Note: Browser sniffing should only be used if no other detection method is possible
var isOpera_ = !!window.opera;
var isWebkit_ = userAgent.indexOf("AppleWebKit") >= 0;
var isGecko_ = userAgent.indexOf('Gecko/') >= 0;
var isIE_ = userAgent.indexOf('MSIE') >= 0;
var isChrome_ = userAgent.indexOf('Chrome/') >= 0;
var isWindows_ = userAgent.indexOf('Windows') >= 0;
var isMac_ = userAgent.indexOf('Macintosh') >= 0;
var isTouch_ = 'ontouchstart' in window;

var supportsSelectors_ = (function() {
  return !!svg.querySelector;
})();

var supportsXpath_ = (function() {
  return !!document.evaluate;
})();

// text character positioning (for IE9)
var supportsGoodTextCharPos_ = (function() {
   var retValue = false;
   var svgroot = document.createElementNS(svgns, 'svg');
   var svgcontent = document.createElementNS(svgns, 'svg');
   document.documentElement.appendChild(svgroot);
   svgcontent.setAttribute('x', 5);
   svgroot.appendChild(svgcontent);
   var text = document.createElementNS(svgns,'text');
   text.textContent = 'a';
   svgcontent.appendChild(text);
   var pos = text.getStartPositionOfChar(0)
   pos = pos.x; //if you put it on one line it fails when compiled
   document.documentElement.removeChild(svgroot);
   return (pos === 0);
})();

var supportsPathBBox_ = (function() {
  var svgcontent = document.createElementNS(svgns, 'svg');
  document.documentElement.appendChild(svgcontent);
  var path = document.createElementNS(svgns, 'path');
  path.setAttribute('d','M0,0 C0,0 10,10 10,0');
  svgcontent.appendChild(path);
  var bbox = path.getBBox();
  document.documentElement.removeChild(svgcontent);
  return (bbox.height > 4 && bbox.height < 5);
})();

// Support for correct bbox sizing on groups with horizontal/vertical lines
var supportsHVLineContainerBBox_ = (function() {
  var svgcontent = document.createElementNS(svgns, 'svg');
  document.documentElement.appendChild(svgcontent);
  var path = document.createElementNS(svgns, 'path');
  path.setAttribute('d','M0,0 10,0');
  var path2 = document.createElementNS(svgns, 'path');
  path2.setAttribute('d','M5,0 15,0');
  var g = document.createElementNS(svgns, 'g');
  g.appendChild(path);
  g.appendChild(path2);
  svgcontent.appendChild(g);
  var bbox = g.getBBox();
  document.documentElement.removeChild(svgcontent);
  // Webkit gives 0, FF gives 10, Opera (correctly) gives 15
  return (bbox.width == 15);
})();

var supportsEditableText_ = (function() {
  // TODO: Find better way to check support for this
  return isOpera_;
})();

var supportsGoodDecimals_ = (function() {
  // Correct decimals on clone attributes (Opera < 10.5/win/non-en)
  var rect = document.createElementNS(svgns, 'rect');
  rect.setAttribute('x',.1);
  var crect = rect.cloneNode(false);
  var retValue = (crect.getAttribute('x').indexOf(',') == -1);
  if(!retValue) {
    $.alert("NOTE: This version of Opera is known to contain bugs in SVG-edit.\n\
    Please upgrade to the <a href='http://opera.com'>latest version</a> in which the problems have been fixed.");
  }
  return retValue;
})();

var supportsNonScalingStroke_ = (function() {
  var rect = document.createElementNS(svgns, 'rect');
  rect.setAttribute('style','vector-effect:non-scaling-stroke');
  return rect.style.vectorEffect === 'non-scaling-stroke';
})();

var supportsNativeSVGTransformLists_ = (function() {
  var rect = document.createElementNS(svgns, 'rect');
  var rxform = rect.transform.baseVal;
  
  var t1 = svg.createSVGTransform();
  rxform.appendItem(t1);
  return rxform.getItem(0) == t1;
})();

var supportsBlobs_ = (function() {
  if (typeof Blob != 'function') return false;
  // check if download is supported
  var svg = new Blob(
    ["<svg xmlns='http://www.w3.org/2000/svg'></svg>"],
    {type: "image/svg+xml;charset=utf-8"}
  );
  var img = new Image();
  var support = false;
  img.onload = function()  { svgedit.browser.supportsBlobs = function() {return true} };
  img.onerror = function() { svgedit.browser.supportsBlobs = function() {return false} };
  img.src = URL.createObjectURL(svg);
  return false;
})();



// Public API

svgedit.browser.isOpera = function() { return isOpera_; }
svgedit.browser.isWebkit = function() { return isWebkit_; }
svgedit.browser.isGecko = function() { return isGecko_; }
svgedit.browser.isIE = function() { return isIE_; }
svgedit.browser.isChrome = function() { return isChrome_; }
svgedit.browser.isWindows = function() { return isWindows_; }
svgedit.browser.isMac = function() { return isMac_; }
svgedit.browser.isTouch = function() { return isTouch_; }

svgedit.browser.supportsSelectors = function() { return supportsSelectors_; }
svgedit.browser.supportsXpath = function() { return supportsXpath_; }

svgedit.browser.supportsPathBBox = function() { return supportsPathBBox_; }
svgedit.browser.supportsHVLineContainerBBox = function() { return supportsHVLineContainerBBox_; }
svgedit.browser.supportsGoodTextCharPos = function() { return supportsGoodTextCharPos_; }
svgedit.browser.supportsEditableText = function() { return supportsEditableText_; }
svgedit.browser.supportsGoodDecimals = function() { return supportsGoodDecimals_; }
svgedit.browser.supportsNonScalingStroke = function() { return supportsNonScalingStroke_; }
svgedit.browser.supportsNativeTransformLists = function() { return supportsNativeSVGTransformLists_; }
svgedit.browser.supportsBlobs = function() {return supportsBlobs_; }
}

})();

/**
 * SVGTransformList
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) browser.js

var svgedit = svgedit || {};

(function() {

if (!svgedit.transformlist) {
  svgedit.transformlist = {};
}

var svgroot = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

// Helper function.
function transformToString(xform) {
  var m = xform.matrix,
    text = "";
  switch(xform.type) {
    case 1: // MATRIX
      text = "matrix(" + [m.a,m.b,m.c,m.d,m.e,m.f].join(",") + ")";
      break;
    case 2: // TRANSLATE
      text = "translate(" + m.e + "," + m.f + ")";
      break;
    case 3: // SCALE
      if (m.a == m.d) text = "scale(" + m.a + ")";
      else text = "scale(" + m.a + "," + m.d + ")";
      break;
    case 4: // ROTATE
      var cx = 0, cy = 0;
      // this prevents divide by zero
      if (xform.angle != 0) {
        var K = 1 - m.a;
        cy = ( K * m.f + m.b*m.e ) / ( K*K + m.b*m.b );
        cx = ( m.e - m.b * cy ) / K;
      }
      text = "rotate(" + xform.angle + " " + cx + "," + cy + ")";
      break;
  }
  return text;
};


/**
 * Map of SVGTransformList objects.
 */
var listMap_ = {};


// **************************************************************************************
// SVGTransformList implementation for Webkit 
// These methods do not currently raise any exceptions.
// These methods also do not check that transforms are being inserted.  This is basically
// implementing as much of SVGTransformList that we need to get the job done.
//
//  interface SVGEditTransformList { 
//    attribute unsigned long numberOfItems;
//    void   clear (  )
//    SVGTransform initialize ( in SVGTransform newItem )
//    SVGTransform getItem ( in unsigned long index ) (DOES NOT THROW DOMException, INDEX_SIZE_ERR)
//    SVGTransform insertItemBefore ( in SVGTransform newItem, in unsigned long index ) (DOES NOT THROW DOMException, INDEX_SIZE_ERR)
//    SVGTransform replaceItem ( in SVGTransform newItem, in unsigned long index ) (DOES NOT THROW DOMException, INDEX_SIZE_ERR)
//    SVGTransform removeItem ( in unsigned long index ) (DOES NOT THROW DOMException, INDEX_SIZE_ERR)
//    SVGTransform appendItem ( in SVGTransform newItem )
//    NOT IMPLEMENTED: SVGTransform createSVGTransformFromMatrix ( in SVGMatrix matrix );
//    NOT IMPLEMENTED: SVGTransform consolidate (  );
//  }
// **************************************************************************************
svgedit.transformlist.SVGTransformList = function(elem) {
  this._elem = elem || null;
  this._xforms = [];
  // TODO: how do we capture the undo-ability in the changed transform list?
  this._update = function() {
    var tstr = "";
    var concatMatrix = svgroot.createSVGMatrix();
    for (var i = 0; i < this.numberOfItems; ++i) {
      var xform = this._list.getItem(i);
      tstr += transformToString(xform) + " ";
    }
    this._elem.setAttribute("transform", tstr);
  };
  this._list = this;
  this._init = function() {
    // Transform attribute parser
    var str = this._elem.getAttribute("transform");
    if(!str) return;
    
    // TODO: Add skew support in future
    var re = /\s*((scale|matrix|rotate|translate)\s*\(.*?\))\s*,?\s*/;
    var arr = [];
    var m = true;
    while(m) {
      m = str.match(re);
      str = str.replace(re,'');
      if(m && m[1]) {
        var x = m[1];
        var bits = x.split(/\s*\(/);
        var name = bits[0];
        var val_bits = bits[1].match(/\s*(.*?)\s*\)/);
        val_bits[1] = val_bits[1].replace(/(\d)-/g, "$1 -");
        var val_arr = val_bits[1].split(/[, ]+/);
        var letters = 'abcdef'.split('');
        var mtx = svgroot.createSVGMatrix();
        $.each(val_arr, function(i, item) {
          val_arr[i] = parseFloat(item);
          if(name == 'matrix') {
            mtx[letters[i]] = val_arr[i];
          }
        });
        var xform = svgroot.createSVGTransform();
        var fname = 'set' + name.charAt(0).toUpperCase() + name.slice(1);
        var values = name=='matrix'?[mtx]:val_arr;
        
        if (name == 'scale' && values.length == 1) {
          values.push(values[0]);
        } else if (name == 'translate' && values.length == 1) {
          values.push(0);
        } else if (name == 'rotate' && values.length == 1) {
          values.push(0);
          values.push(0);
        }
        xform[fname].apply(xform, values);
        this._list.appendItem(xform);
      }
    }
  };
  this._removeFromOtherLists = function(item) {
    if (item) {
      // Check if this transform is already in a transformlist, and
      // remove it if so.
      var found = false;
      for (var id in listMap_) {
        var tl = listMap_[id];
        for (var i = 0, len = tl._xforms.length; i < len; ++i) {
          if(tl._xforms[i] == item) {
            found = true;
            tl.removeItem(i);
            break;
          }
        }
        if (found) {
          break;
        }
      }
    }
  };
  
  this.numberOfItems = 0;
  this.clear = function() { 
    this.numberOfItems = 0;
    this._xforms = [];
  };
  
  this.initialize = function(newItem) {
    this.numberOfItems = 1;
    this._removeFromOtherLists(newItem);
    this._xforms = [newItem];
  };
  
  this.getItem = function(index) {
    if (index < this.numberOfItems && index >= 0) {
      return this._xforms[index];
    }
    throw {code: 1}; // DOMException with code=INDEX_SIZE_ERR
  };
  
  this.insertItemBefore = function(newItem, index) {
    var retValue = null;
    if (index >= 0) {
      if (index < this.numberOfItems) {
        this._removeFromOtherLists(newItem);
        var newxforms = new Array(this.numberOfItems + 1);
        // TODO: use array copying and slicing
        for ( var i = 0; i < index; ++i) {
          newxforms[i] = this._xforms[i];
        }
        newxforms[i] = newItem;
        for ( var j = i+1; i < this.numberOfItems; ++j, ++i) {
          newxforms[j] = this._xforms[i];
        }
        this.numberOfItems++;
        this._xforms = newxforms;
        retValue = newItem;
        this._list._update();
      }
      else {
        retValue = this._list.appendItem(newItem);
      }
    }
    return retValue;
  };
  
  this.replaceItem = function(newItem, index) {
    var retValue = null;
    if (index < this.numberOfItems && index >= 0) {
      this._removeFromOtherLists(newItem);
      this._xforms[index] = newItem;
      retValue = newItem;
      this._list._update();
    }
    return retValue;
  };
  
  this.removeItem = function(index) {
    if (index < this.numberOfItems && index >= 0) {
      var retValue = this._xforms[index];
      var newxforms = new Array(this.numberOfItems - 1);
      for (var i = 0; i < index; ++i) {
        newxforms[i] = this._xforms[i];
      }
      for (var j = i; j < this.numberOfItems-1; ++j, ++i) {
        newxforms[j] = this._xforms[i+1];
      }
      this.numberOfItems--;
      this._xforms = newxforms;
      this._list._update();
      return retValue;
    } else {
      throw {code: 1}; // DOMException with code=INDEX_SIZE_ERR
    }
  };
  
  this.appendItem = function(newItem) {
    this._removeFromOtherLists(newItem);
    this._xforms.push(newItem);
    this.numberOfItems++;
    this._list._update();
    return newItem;
  };
};


svgedit.transformlist.resetListMap = function() {
  listMap_ = {};
};

/**
 * Removes transforms of the given element from the map.
 * Parameters:
 * elem - a DOM Element
 */
svgedit.transformlist.removeElementFromListMap = function(elem) {
  if (elem.id && listMap_[elem.id]) {
    delete listMap_[elem.id];
  }
};

// Function: getTransformList
// Returns an object that behaves like a SVGTransformList for the given DOM element
//
// Parameters:
// elem - DOM element to get a transformlist from
svgedit.transformlist.getTransformList = function(elem) {
  if (!svgedit.browser.supportsNativeTransformLists()) {
    var id = elem.id;
    if(!id) {
      // Get unique ID for temporary element
      id = 'temp';
    }
    var t = listMap_[id];
    if (!t || id == 'temp') {
      listMap_[id] = new svgedit.transformlist.SVGTransformList(elem);
      listMap_[id]._init();
      t = listMap_[id];
    }
    return t;
  }
  else if (elem.transform) {
    return elem.transform.baseVal;
  }
  else if (elem.gradientTransform) {
    return elem.gradientTransform.baseVal;
  }
  else if (elem.patternTransform) {
    return elem.patternTransform.baseVal;
  }

  return null;
};


})();
/**
 * Package: svedit.math
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// None.

var svgedit = svgedit || {};

(function() {

if (!svgedit.math) {
  svgedit.math = {};
}

// Constants
var NEAR_ZERO = 1e-14;

// Throw away SVGSVGElement used for creating matrices/transforms.
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

// Function: svgedit.math.transformPoint
// A (hopefully) quicker function to transform a point by a matrix
// (this function avoids any DOM calls and just does the math)
// 
// Parameters:
// x - Float representing the x coordinate
// y - Float representing the y coordinate
// m - Matrix object to transform the point with
// Returns a x,y object representing the transformed point
svgedit.math.transformPoint = function(x, y, m) {
  return { x: m.a * x + m.c * y + m.e, y: m.b * x + m.d * y + m.f};
};


// Function: svgedit.math.isIdentity
// Helper function to check if the matrix performs no actual transform 
// (i.e. exists for identity purposes)
//
// Parameters: 
// m - The matrix object to check
//
// Returns:
// Boolean indicating whether or not the matrix is 1,0,0,1,0,0
svgedit.math.isIdentity = function(m) {
  return (m.a === 1 && m.b === 0 && m.c === 0 && m.d === 1 && m.e === 0 && m.f === 0);
};


// Function: svgedit.math.matrixMultiply
// This function tries to return a SVGMatrix that is the multiplication m1*m2.
// We also round to zero when it's near zero
// 
// Parameters:
// >= 2 Matrix objects to multiply
//
// Returns: 
// The matrix object resulting from the calculation
svgedit.math.matrixMultiply = function() {
  var args = arguments, i = args.length, m = args[i-1];
  
  while(i-- > 1) {
    var m1 = args[i-1];
    m = m1.multiply(m);
  }
  if (Math.abs(m.a) < NEAR_ZERO) m.a = 0;
  if (Math.abs(m.b) < NEAR_ZERO) m.b = 0;
  if (Math.abs(m.c) < NEAR_ZERO) m.c = 0;
  if (Math.abs(m.d) < NEAR_ZERO) m.d = 0;
  if (Math.abs(m.e) < NEAR_ZERO) m.e = 0;
  if (Math.abs(m.f) < NEAR_ZERO) m.f = 0;
  
  return m;
};

// Function: svgedit.math.hasMatrixTransform
// See if the given transformlist includes a non-indentity matrix transform
//
// Parameters: 
// tlist - The transformlist to check
//
// Returns: 
// Boolean on whether or not a matrix transform was found
svgedit.math.hasMatrixTransform = function(tlist) {
  if(!tlist) return false;
  var num = tlist.numberOfItems;
  while (num--) {
    var xform = tlist.getItem(num);
    if (xform.type == 1 && !svgedit.math.isIdentity(xform.matrix)) return true;
  }
  return false;
};

// Function: svgedit.math.transformBox
// Transforms a rectangle based on the given matrix
//
// Parameters:
// l - Float with the box's left coordinate
// t - Float with the box's top coordinate
// w - Float with the box width
// h - Float with the box height
// m - Matrix object to transform the box by
// 
// Returns:
// An object with the following values:
// * tl - The top left coordinate (x,y object)
// * tr - The top right coordinate (x,y object)
// * bl - The bottom left coordinate (x,y object)
// * br - The bottom right coordinate (x,y object)
// * aabox - Object with the following values:
// * Float with the axis-aligned x coordinate
// * Float with the axis-aligned y coordinate
// * Float with the axis-aligned width coordinate
// * Float with the axis-aligned height coordinate
svgedit.math.transformBox = function(l, t, w, h, m) {
  var topleft = {x:l,y:t},
    topright = {x:(l+w),y:t},
    botright = {x:(l+w),y:(t+h)},
    botleft = {x:l,y:(t+h)};
  var transformPoint = svgedit.math.transformPoint;
  topleft = transformPoint( topleft.x, topleft.y, m );
  var minx = topleft.x,
    maxx = topleft.x,
    miny = topleft.y,
    maxy = topleft.y;
  topright = transformPoint( topright.x, topright.y, m );
  minx = Math.min(minx, topright.x);
  maxx = Math.max(maxx, topright.x);
  miny = Math.min(miny, topright.y);
  maxy = Math.max(maxy, topright.y);
  botleft = transformPoint( botleft.x, botleft.y, m);
  minx = Math.min(minx, botleft.x);
  maxx = Math.max(maxx, botleft.x);
  miny = Math.min(miny, botleft.y);
  maxy = Math.max(maxy, botleft.y);
  botright = transformPoint( botright.x, botright.y, m );
  minx = Math.min(minx, botright.x);
  maxx = Math.max(maxx, botright.x);
  miny = Math.min(miny, botright.y);
  maxy = Math.max(maxy, botright.y);

  return {tl:topleft, tr:topright, bl:botleft, br:botright, 
      aabox: {x:minx, y:miny, width:(maxx-minx), height:(maxy-miny)} };
};

// Function: svgedit.math.transformListToTransform
// This returns a single matrix Transform for a given Transform List
// (this is the equivalent of SVGTransformList.consolidate() but unlike
//  that method, this one does not modify the actual SVGTransformList)
// This function is very liberal with its min,max arguments
// 
// Parameters:
// tlist - The transformlist object
// min - Optional integer indicating start transform position
// max - Optional integer indicating end transform position
//
// Returns:
// A single matrix transform object
svgedit.math.transformListToTransform = function(tlist, min, max) {
  if(tlist == null) {
    // Or should tlist = null have been prevented before this?
    return svg.createSVGTransformFromMatrix(svg.createSVGMatrix());
  }
  var min = min == undefined ? 0 : min;
  var max = max == undefined ? (tlist.numberOfItems-1) : max;
  min = parseInt(min);
  max = parseInt(max);
  if (min > max) { var temp = max; max = min; min = temp; }
  var m = svg.createSVGMatrix();
  for (var i = min; i <= max; ++i) {
    // if our indices are out of range, just use a harmless identity matrix
    var mtom = (i >= 0 && i < tlist.numberOfItems ? 
            tlist.getItem(i).matrix :
            svg.createSVGMatrix());
    m = svgedit.math.matrixMultiply(m, mtom);
  }
  return svg.createSVGTransformFromMatrix(m);
};


// Function: svgedit.math.getMatrix
// Get the matrix object for a given element
//
// Parameters:
// elem - The DOM element to check
// 
// Returns:
// The matrix object associated with the element's transformlist
svgedit.math.getMatrix = function(elem) {
  var tlist = svgedit.transformlist.getTransformList(elem);
  return svgedit.math.transformListToTransform(tlist).matrix;
};


// Function: svgedit.math.snapToAngle
// Returns a 45 degree angle coordinate associated with the two given 
// coordinates
// 
// Parameters:
// x1 - First coordinate's x value
// x2 - Second coordinate's x value
// y1 - First coordinate's y value
// y2 - Second coordinate's y value
//
// Returns: 
// Object with the following values:
// x - The angle-snapped x value
// y - The angle-snapped y value
// snapangle - The angle at which to snap
svgedit.math.snapToAngle = function(x1,y1,x2,y2) {
  var snap = Math.PI/4; // 45 degrees
  var dx = x2 - x1;
  var dy = y2 - y1;
  var angle = Math.atan2(dy,dx);
  var dist = Math.sqrt(dx * dx + dy * dy);
  var snapangle= Math.round(angle/snap)*snap;
  var x = x1 + dist*Math.cos(snapangle);  
  var y = y1 + dist*Math.sin(snapangle);
  //console.log(x1,y1,x2,y2,x,y,angle)
  return {x:x, y:y, a:snapangle};
};


// Function: rectsIntersect
// Check if two rectangles (BBoxes objects) intersect each other
//
// Paramaters:
// r1 - The first BBox-like object
// r2 - The second BBox-like object
//
// Returns:
// Boolean that's true if rectangles intersect
svgedit.math.rectsIntersect = function(r1, r2) {
  if (!r1 || !r2) return false;
  return r2.x < (r1.x+r1.width) && 
    (r2.x+r2.width) > r1.x &&
    r2.y < (r1.y+r1.height) &&
    (r2.y+r2.height) > r1.y;
};


})();
/**
 * Package: svgedit.units
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) jQuery

var svgedit = svgedit || {};

(function() {

if (!svgedit.units) {
  svgedit.units = {};
}

var w_attrs = ['x', 'x1', 'cx', 'rx', 'width'];
var h_attrs = ['y', 'y1', 'cy', 'ry', 'height'];
var unit_attrs = $.merge(['r','radius'], w_attrs);

var unitNumMap = {
  '%':  2,
  'em': 3,
  'ex': 4,
  'px': 5,
  'cm': 6,
  'mm': 7,
  'in': 8,
  'pt': 9,
  'pc': 10
};

$.merge(unit_attrs, h_attrs);

// Container of elements.
var elementContainer_;

/**
 * Stores mapping of unit type to user coordinates.
 */
var typeMap_ = {px: 1};

/**
 * ElementContainer interface
 *
 * function getBaseUnit() - returns a string of the base unit type of the container ("em")
 * function getElement() - returns an element in the container given an id
 * function getHeight() - returns the container's height
 * function getWidth() - returns the container's width
 * function getRoundDigits() - returns the number of digits number should be rounded to
 */

/**
 * Function: svgedit.units.init()
 * Initializes this module.
 *
 * Parameters:
 * elementContainer - an object implementing the ElementContainer interface.
 */
svgedit.units.init = function(elementContainer) {
  elementContainer_ = elementContainer;

  var svgns = 'http://www.w3.org/2000/svg';

  // Get correct em/ex values by creating a temporary SVG.
  var svg = document.createElementNS(svgns, 'svg');
  document.body.appendChild(svg);
  var rect = document.createElementNS(svgns,'rect');
  rect.setAttribute('width',"1em");
  rect.setAttribute('height',"1ex");
  rect.setAttribute('x',"1in");
  svg.appendChild(rect);
  var bb = rect.getBBox();
  document.body.removeChild(svg);

  var inch = bb.x;
  typeMap_['em'] = bb.width;
  typeMap_['ex'] = bb.height;
  typeMap_['in'] = inch;
  typeMap_['cm'] = inch / 2.54;
  typeMap_['mm'] = inch / 25.4;
  typeMap_['pt'] = inch / 72;
  typeMap_['pc'] = inch / 6;
  typeMap_['%'] = 0;
};

// Group: Unit conversion functions

// Function: svgedit.units.getTypeMap
// Returns the unit object with values for each unit
svgedit.units.getTypeMap = function() {
  return typeMap_;
};

// Function: svgedit.units.shortFloat
// Rounds a given value to a float with number of digits defined in save_options
//
// Parameters: 
// val - The value as a String, Number or Array of two numbers to be rounded
//
// Returns:
// If a string/number was given, returns a Float. If an array, return a string
// with comma-seperated floats
svgedit.units.shortFloat = function(val) {
  var digits = elementContainer_.getRoundDigits();
  if(!isNaN(val)) {
    // Note that + converts to Number
    return +((+val).toFixed(digits));
  } else if($.isArray(val)) {
    return svgedit.units.shortFloat(val[0]) + ',' + svgedit.units.shortFloat(val[1]);
  }
  return parseFloat(val).toFixed(digits) - 0;
};

// Function: svgedit.units.convertUnit
// Converts the number to given unit or baseUnit
svgedit.units.convertUnit = function(val, unit) {
  unit = unit || elementContainer_.getBaseUnit();
//  baseVal.convertToSpecifiedUnits(unitNumMap[unit]);
//  var val = baseVal.valueInSpecifiedUnits;
//  baseVal.convertToSpecifiedUnits(1);
  return svgedit.units.shortFloat(val / typeMap_[unit]);
};

// Function: svgedit.units.setUnitAttr
// Sets an element's attribute based on the unit in its current value.
//
// Parameters: 
// elem - DOM element to be changed
// attr - String with the name of the attribute associated with the value
// val - String with the attribute value to convert
svgedit.units.setUnitAttr = function(elem, attr, val) {
  if(!isNaN(val)) {
    // New value is a number, so check currently used unit
    var old_val = elem.getAttribute(attr);
    
    // Enable this for alternate mode
//    if(old_val !== null && (isNaN(old_val) || elementContainer_.getBaseUnit() !== 'px')) {
//      // Old value was a number, so get unit, then convert
//      var unit;
//      if(old_val.substr(-1) === '%') {
//        var res = getResolution();
//        unit = '%';
//        val *= 100;
//        if(w_attrs.indexOf(attr) >= 0) {
//          val = val / res.w;
//        } else if(h_attrs.indexOf(attr) >= 0) {
//          val = val / res.h;
//        } else {
//          return val / Math.sqrt((res.w*res.w) + (res.h*res.h))/Math.sqrt(2);
//        }
//      } else {
//        if(elementContainer_.getBaseUnit() !== 'px') {
//          unit = elementContainer_.getBaseUnit();
//        } else {
//          unit = old_val.substr(-2);
//        }
//        val = val / typeMap_[unit];
//      }
//    
//    val += unit;
//    }
  }
  elem.setAttribute(attr, val);
};

var attrsToConvert = {
  "line": ['x1', 'x2', 'y1', 'y2'],
  "circle": ['cx', 'cy', 'r'],
  "ellipse": ['cx', 'cy', 'rx', 'ry'],
  "foreignObject": ['x', 'y', 'width', 'height'],
  "rect": ['x', 'y', 'width', 'height'],
  "image": ['x', 'y', 'width', 'height'],
  "use": ['x', 'y', 'width', 'height'],
  "text": ['x', 'y']
};

// Function: svgedit.units.convertAttrs
// Converts all applicable attributes to the configured baseUnit
//
// Parameters:
// element - a DOM element whose attributes should be converted
svgedit.units.convertAttrs = function(element) {
  var elName = element.tagName;
  var unit = elementContainer_.getBaseUnit();
  var attrs = attrsToConvert[elName];
  if(!attrs) return;
  var len = attrs.length
  for(var i = 0; i < len; i++) {
    var attr = attrs[i];
    var cur = element.getAttribute(attr);
    if(cur) {
      if(!isNaN(cur)) {
        element.setAttribute(attr, (cur / typeMap_[unit]) + unit);
      } else {
        // Convert existing?
      }
    }
  }
};

// Function: svgedit.units.convertToNum
// Converts given values to numbers. Attributes must be supplied in 
// case a percentage is given
//
// Parameters:
// attr - String with the name of the attribute associated with the value
// val - String with the attribute value to convert
svgedit.units.convertToNum = function(attr, val) {
  // Return a number if that's what it already is
  if(!isNaN(val)) return val-0;
  
  if(val.substr(-1) === '%') {
    // Deal with percentage, depends on attribute
    var num = val.substr(0, val.length-1)/100;
    var width = elementContainer_.getWidth();
    var height = elementContainer_.getHeight();
    
    if(w_attrs.indexOf(attr) >= 0) {
      return num * width;
    } else if(h_attrs.indexOf(attr) >= 0) {
      return num * height;
    } else {
      return num * Math.sqrt((width*width) + (height*height))/Math.sqrt(2);
    }
  } else {
    var unit = val.substr(-2);
    var num = val.substr(0, val.length-2);
    // Note that this multiplication turns the string into a number
    return num * typeMap_[unit];
  }
};

// Function: svgedit.units.isValidUnit
// Check if an attribute's value is in a valid format
//
// Parameters: 
// attr - String with the name of the attribute associated with the value
// val - String with the attribute value to check
svgedit.units.isValidUnit = function(attr, val, selectedElement) {
  var valid = false;
  if(unit_attrs.indexOf(attr) >= 0) {
    // True if it's just a number
    if(!isNaN(val)) {
      valid = true;
    } else {
    // Not a number, check if it has a valid unit
      val = val.toLowerCase();
      $.each(typeMap_, function(unit) {
        if(valid) return;
        var re = new RegExp('^-?[\\d\\.]+' + unit + '$');
        if(re.test(val)) valid = true;
      });
    }
  } else if (attr == "id") {
    // if we're trying to change the id, make sure it's not already present in the doc
    // and the id value is valid.

    var result = false;
    // because getElem() can throw an exception in the case of an invalid id
    // (according to http://www.w3.org/TR/xml-id/ IDs must be a NCName)
    // we wrap it in an exception and only return true if the ID was valid and
    // not already present
    try {
      var elem = elementContainer_.getElement(val);
      result = (elem == null || elem === selectedElement);
    } catch(e) {}
    return result;
  } else {
    valid = true;
  }
  
  return valid;
};


})();
/**
 * Package: svgedit.utilities
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) jQuery
// 2) browser.js
// 3) svgtransformlist.js

var svgedit = svgedit || {};

(function() {

if (!svgedit.utilities) {
  svgedit.utilities = {};
}

// Constants

// String used to encode base64.
var KEYSTR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var SVGNS = 'http://www.w3.org/2000/svg';
var XLINKNS = 'http://www.w3.org/1999/xlink';
var XMLNS = "http://www.w3.org/XML/1998/namespace";

// Much faster than running getBBox() every time
var visElems = 'a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use';
var visElems_arr = visElems.split(',');
//var hidElems = 'clipPath,defs,desc,feGaussianBlur,filter,linearGradient,marker,mask,metadata,pattern,radialGradient,stop,switch,symbol,title,textPath';

var editorContext_ = null;
var domdoc_ = null;
var domcontainer_ = null;
var svgroot_ = null;

svgedit.utilities.init = function(editorContext) {
  editorContext_ = editorContext;
  domdoc_ = editorContext.getDOMDocument();
  domcontainer_ = editorContext.getDOMContainer();
  svgroot_ = editorContext.getSVGRoot();
};

// Function: svgedit.utilities.toXml
// Converts characters in a string to XML-friendly entities.
//
// Example: "&" becomes "&amp;"
//
// Parameters:
// str - The string to be converted
//
// Returns:
// The converted string
svgedit.utilities.toXml = function(str) {
  return $('<p/>').text(str).html();
};
  
// Function: svgedit.utilities.fromXml
// Converts XML entities in a string to single characters. 
// Example: "&amp;" becomes "&"
//
// Parameters:
// str - The string to be converted
//
// Returns: 
// The converted string
svgedit.utilities.fromXml = function(str) {
  return $('<p/>').html(str).text();
};

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

// schiller: Removed string concatenation in favour of Array.join() optimization,
//           also precalculate the size of the array needed.

// Function: svgedit.utilities.encode64
// Converts a string to base64
svgedit.utilities.encode64 = function(input) {
  // base64 strings are 4/3 larger than the original string
//  input = svgedit.utilities.encodeUTF8(input); // convert non-ASCII characters
  input = svgedit.utilities.convertToXMLReferences(input);
  if(window.btoa) return window.btoa(input); // Use native if available
  var output = new Array( Math.floor( (input.length + 2) / 3 ) * 4 );
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0, p = 0;

  do {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }

    output[p++] = KEYSTR.charAt(enc1);
    output[p++] = KEYSTR.charAt(enc2);
    output[p++] = KEYSTR.charAt(enc3);
    output[p++] = KEYSTR.charAt(enc4);
  } while (i < input.length);

  return output.join('');
};

// Function: svgedit.utilities.decode64
// Converts a string from base64
svgedit.utilities.decode64 = function(input) {
  if(window.atob) return window.atob(input);
  var output = "";
  var chr1, chr2, chr3 = "";
  var enc1, enc2, enc3, enc4 = "";
  var i = 0;

   // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

   do {
    enc1 = KEYSTR.indexOf(input.charAt(i++));
    enc2 = KEYSTR.indexOf(input.charAt(i++));
    enc3 = KEYSTR.indexOf(input.charAt(i++));
    enc4 = KEYSTR.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 != 64) {
       output = output + String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
       output = output + String.fromCharCode(chr3);
    }

    chr1 = chr2 = chr3 = "";
    enc1 = enc2 = enc3 = enc4 = "";

   } while (i < input.length);
   return unescape(output);
};

svgedit.utilities.dataURItoBlob = function(dataURI, mimeStr) {
  var byteStr;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteStr = atob(dataURI.split(',')[1]);
  else
    byteStr = unescape(dataURI.split(',')[1]);

  var mimeStr = dataURI.split(',')[0].split(':')[1].split(';')[0];

  var arr= new Uint8Array(byteStr.length);
  for (var i = 0; i < byteStr.length; i++) {
    arr[i] = byteStr.charCodeAt(i);
  }

  return new Blob([arr], {type:mimeStr});
}

// Currently not being used, so commented out for now
// based on http://phpjs.org/functions/utf8_encode:577
// codedread:does not seem to work with webkit-based browsers on OSX
//    "encodeUTF8": function(input) {
//      //return unescape(encodeURIComponent(input)); //may or may not work
//      var output = '';
//      for (var n = 0; n < input.length; n++){
//        var c = input.charCodeAt(n);
//        if (c < 128) {
//          output += input[n];
//        }
//        else if (c > 127) {
//          if (c < 2048){
//            output += String.fromCharCode((c >> 6) | 192);
//          } 
//          else {
//            output += String.fromCharCode((c >> 12) | 224) + String.fromCharCode((c >> 6) & 63 | 128);
//          }
//          output += String.fromCharCode((c & 63) | 128);
//        }
//      }
//      return output;
//    },

// Function: svgedit.utilities.convertToXMLReferences 
// Converts a string to use XML references
svgedit.utilities.convertToXMLReferences = function(input) {
  var output = '';
  for (var n = 0; n < input.length; n++){
    var c = input.charCodeAt(n);
    if (c < 128) {
      output += input[n];
    } else if(c > 127) {
      output += ("&#" + c + ";");
    }
  }
  return output;
};

// Function: svgedit.utilities.text2xml
// Cross-browser compatible method of converting a string to an XML tree
// found this function here: http://groups.google.com/group/jquery-dev/browse_thread/thread/c6d11387c580a77f
svgedit.utilities.text2xml = function(sXML) {
  if(sXML.indexOf('<svg:svg') >= 0) {
    sXML = sXML.replace(/<(\/?)svg:/g, '<$1').replace('xmlns:svg', 'xmlns');
  }

  var out;
  try{
    var dXML = (window.DOMParser)?new DOMParser():new ActiveXObject("Microsoft.XMLDOM");
    dXML.async = false;
  } catch(e){ 
    throw new Error("XML Parser could not be instantiated"); 
  };
  try{
    if(dXML.loadXML) out = (dXML.loadXML(sXML))?dXML:false;
    else out = dXML.parseFromString(sXML, "text/xml");
  }
  catch(e){ throw new Error("Error parsing XML string"); };
  return out;
};

// Function: svgedit.utilities.bboxToObj
// Converts a SVGRect into an object.
// 
// Parameters:
// bbox - a SVGRect
// 
// Returns:
// An object with properties names x, y, width, height.
svgedit.utilities.bboxToObj = function(bbox) {
  return {
    x: bbox.x,
    y: bbox.y,
    width: bbox.width,
    height: bbox.height
  }
};

// Function: svgedit.utilities.walkTree
// Walks the tree and executes the callback on each element in a top-down fashion
//
// Parameters:
// elem - DOM element to traverse
// cbFn - Callback function to run on each element
svgedit.utilities.walkTree = function(elem, cbFn){
  if (elem && elem.nodeType == 1) {
    cbFn(elem);
    var i = elem.childNodes.length;
    while (i--) {
      svgedit.utilities.walkTree(elem.childNodes.item(i), cbFn);
    }
  }
};

// Function: svgedit.utilities.walkTreePost
// Walks the tree and executes the callback on each element in a depth-first fashion
// TODO: FIXME: Shouldn't this be calling walkTreePost?
//
// Parameters:
// elem - DOM element to traverse
// cbFn - Callback function to run on each element
svgedit.utilities.walkTreePost = function(elem, cbFn) {
  if (elem && elem.nodeType == 1) {
    var i = elem.childNodes.length;
    while (i--) {
      svgedit.utilities.walkTree(elem.childNodes.item(i), cbFn);
    }
    cbFn(elem);
  }
};

// Function: svgedit.utilities.getUrlFromAttr
// Extracts the URL from the url(...) syntax of some attributes.  
// Three variants:
//  * <circle fill="url(someFile.svg#foo)" />
//  * <circle fill="url('someFile.svg#foo')" />
//  * <circle fill='url("someFile.svg#foo")' />
//
// Parameters:
// attrVal - The attribute value as a string
// 
// Returns:
// String with just the URL, like someFile.svg#foo
svgedit.utilities.getUrlFromAttr = function(attrVal) {
  if (attrVal) {    
    // url("#somegrad")
    if (attrVal.indexOf('url("') === 0) {
      return attrVal.substring(5,attrVal.indexOf('"',6));
    }
    // url('#somegrad')
    else if (attrVal.indexOf("url('") === 0) {
      return attrVal.substring(5,attrVal.indexOf("'",6));
    }
    else if (attrVal.indexOf("url(") === 0) {
      return attrVal.substring(4,attrVal.indexOf(')'));
    }
  }
  return null;
};

// Function: svgedit.utilities.getHref
// Returns the given element's xlink:href value
svgedit.utilities.getHref = function(elem) {
  if (elem) return elem.getAttributeNS(XLINKNS, "href");
}

// Function: svgedit.utilities.setHref
// Sets the given element's xlink:href value
svgedit.utilities.setHref = function(elem, val) {
  elem.setAttributeNS(XLINKNS, "xlink:href", val);
}

// Function: findDefs
// Parameters:
// svgElement - The <svg> element.
//
// Returns:
// The document's <defs> element, create it first if necessary
svgedit.utilities.findDefs = function(svgElement) {
  var svgElement = editorContext_.getSVGContent().documentElement;
  var defs = svgElement.getElementsByTagNameNS(SVGNS, "defs");
  if (defs.length > 0) {
    defs = defs[0];
  }
  else {
    // first child is a comment, so call nextSibling
    defs = svgElement.insertBefore( svgElement.ownerDocument.createElementNS(SVGNS, "defs" ), svgElement.firstChild.nextSibling);
  }
  return defs;
};

// TODO(codedread): Consider moving the next to functions to bbox.js

// Function: svgedit.utilities.getPathBBox
// Get correct BBox for a path in Webkit
// Converted from code found here:
// http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
// 
// Parameters:
// path - The path DOM element to get the BBox for
//
// Returns:
// A BBox-like object
svgedit.utilities.getPathBBox = function(path) {
  var seglist = path.pathSegList;
  var tot = seglist.numberOfItems;
  
  var bounds = [[], []];
  var start = seglist.getItem(0);
  var P0 = [start.x, start.y];

  for(var i=0; i < tot; i++) {
    var seg = seglist.getItem(i);

    if(typeof seg.x == 'undefined') continue;

    // Add actual points to limits
    bounds[0].push(P0[0]);
    bounds[1].push(P0[1]);
    
    if(seg.x1) {
      var P1 = [seg.x1, seg.y1],
        P2 = [seg.x2, seg.y2],
        P3 = [seg.x, seg.y];

      for(var j=0; j < 2; j++) {

        var calc = function(t) {
          return Math.pow(1-t,3) * P0[j] 
            + 3 * Math.pow(1-t,2) * t * P1[j]
            + 3 * (1-t) * Math.pow(t,2) * P2[j]
            + Math.pow(t,3) * P3[j];
        };

        var b = 6 * P0[j] - 12 * P1[j] + 6 * P2[j];
        var a = -3 * P0[j] + 9 * P1[j] - 9 * P2[j] + 3 * P3[j];
        var c = 3 * P1[j] - 3 * P0[j];
        
        if(a == 0) {
          if(b == 0) {
            continue;
          }
          var t = -c / b;
          if(0 < t && t < 1) {
            bounds[j].push(calc(t));
          }
          continue;
        }
        
        var b2ac = Math.pow(b,2) - 4 * c * a;
        if(b2ac < 0) continue;
        var t1 = (-b + Math.sqrt(b2ac))/(2 * a);
        if(0 < t1 && t1 < 1) bounds[j].push(calc(t1));
        var t2 = (-b - Math.sqrt(b2ac))/(2 * a);
        if(0 < t2 && t2 < 1) bounds[j].push(calc(t2));
      }
      P0 = P3;
    } else {
      bounds[0].push(seg.x);
      bounds[1].push(seg.y);
    }
  }
  
  var x = Math.min.apply(null, bounds[0]);
  var w = Math.max.apply(null, bounds[0]) - x;
  var y = Math.min.apply(null, bounds[1]);
  var h = Math.max.apply(null, bounds[1]) - y;
  return {
    'x': x,
    'y': y,
    'width': w,
    'height': h
  };
};

// Function: groupBBFix
// Get the given/selected element's bounding box object, checking for
// horizontal/vertical lines (see issue 717)
// Note that performance is currently terrible, so some way to improve would
// be great.
//
// Parameters: 
// selected - Container or <use> DOM element
function groupBBFix(selected) {
  if(svgedit.browser.supportsHVLineContainerBBox()) {
    try { return selected.getBBox();} catch(e){} 
  }
  var ref = $.data(selected, 'ref');
  var matched = null;
  
  if(ref) {
    var copy = $(ref).children().clone().attr('visibility', 'hidden');
    $(svgroot_).append(copy);
    matched = copy.filter('line, path');
  } else {
    matched = $(selected).find('line, path');
  }
  
  var issue = false;
  if(matched.length) {
    matched.each(function() {
      var bb = this.getBBox();
      if(!bb.width || !bb.height) {
        issue = true;
      }
    });
    if(issue) {
      var elems = ref ? copy : $(selected).children();
      ret = getStrokedBBox(elems);
    } else {
      ret = selected.getBBox();
    }
  } else {
    ret = selected.getBBox();
  }
  if(ref) {
    copy.remove();
  }
  return ret;
}

// Function: svgedit.utilities.getBBox
// Get the given/selected element's bounding box object, convert it to be more
// usable when necessary
//
// Parameters:
// elem - Optional DOM element to get the BBox for
svgedit.utilities.getBBox = function(elem) {
  var selected = elem || editorContext_.getSelectedElements()[0];
  if (elem.nodeType != 1) return null;
  var ret = null;
  var elname = selected.nodeName;
  
  switch ( elname ) {
  case 'text':
    if(selected.textContent === '') {
      selected.textContent = 'a'; // Some character needed for the selector to use.
      ret = selected.getBBox();
      selected.textContent = '';
    } else {
      try { ret = selected.getBBox();} catch(e){}
    }
    break;
  case 'path':
    if(!svgedit.browser.supportsPathBBox()) {
      ret = svgedit.utilities.getPathBBox(selected);
    } else {
      try { ret = selected.getBBox();} catch(e){}
    }
    break;
  case 'g':
  case 'a':
    ret = groupBBFix(selected);
    break;
  default:

    if(elname === 'use') {
      ret = groupBBFix(selected, true);
    }
    
    if(elname === 'use') {
      if(!ret) ret = selected.getBBox();
      //if(!svgedit.browser.isWebkit()) {
      //  var bb = {};
      //  bb.width = ret.width;
      //  bb.height = ret.height;
      //  bb.x = ret.x + parseFloat(selected.getAttribute('x')||0);
      //  bb.y = ret.y + parseFloat(selected.getAttribute('y')||0);
      //  ret = bb;
      //}
    } else if(~visElems_arr.indexOf(elname)) {
      try { ret = selected.getBBox();} 
      catch(e) { 
        // Check if element is child of a foreignObject
        var fo = $(selected).closest("foreignObject");
        if(fo.length) {
          try {
            ret = fo[0].getBBox();
          } catch(e) {
            ret = null;
          }
        } else {
          ret = null;
        }
      }
    }
  }
  
  if(ret) {
    ret = svgedit.utilities.bboxToObj(ret);
  }

  // get the bounding box from the DOM (which is in that element's coordinate system)
  return ret;
};

// Function: svgedit.utilities.getRotationAngle
// Get the rotation angle of the given/selected DOM element
//
// Parameters:
// elem - Optional DOM element to get the angle for
// to_rad - Boolean that when true returns the value in radians rather than degrees
//
// Returns:
// Float with the angle in degrees or radians
svgedit.utilities.getRotationAngle = function(elem, to_rad) {
  var selected = elem || editorContext_.getSelectedElements()[0];
  // find the rotation transform (if any) and set it
  var tlist = svgedit.transformlist.getTransformList(selected);
  if(!tlist) return 0; // <svg> elements have no tlist
  var N = tlist.numberOfItems;
  for (var i = 0; i < N; ++i) {
    var xform = tlist.getItem(i);
    if (xform.type == 4) {
      return to_rad ? xform.angle * Math.PI / 180.0 : xform.angle;
    }
  }
  return 0.0;
};

// Function: getElem
// Get a DOM element by ID within the SVG root element.
//
// Parameters:
// id - String with the element's new ID
if (svgedit.browser.supportsSelectors()) {
  svgedit.utilities.getElem = function(id) {
    // querySelector lookup
    return svgroot_.querySelector('#'+id);
  };
} else if (svgedit.browser.supportsXpath()) {
  svgedit.utilities.getElem = function(id) {
    // xpath lookup
    return domdoc_.evaluate(
      'svg:svg[@id="svgroot"]//svg:*[@id="'+id+'"]',
      domcontainer_, 
      function() { return "http://www.w3.org/2000/svg"; },
      9,
      null).singleNodeValue;
  };
} else {
  svgedit.utilities.getElem = function(id) {
    // jQuery lookup: twice as slow as xpath in FF
    return $(svgroot_).find('[id=' + id + ']')[0];
  };
}

// Function: assignAttributes
// Assigns multiple attributes to an element.
//
// Parameters: 
// node - DOM element to apply new attribute values to
// attrs - Object with attribute keys/values
// suspendLength - Optional integer of milliseconds to suspend redraw
// unitCheck - Boolean to indicate the need to use svgedit.units.setUnitAttr
svgedit.utilities.assignAttributes = function(node, attrs, suspendLength, unitCheck) {

  for (var i in attrs) {
    var ns = (i.substr(0,4) === "xml:" ? XMLNS : 
      i.substr(0,6) === "xlink:" ? XLINKNS : null);
      
    if(ns) {
      node.setAttributeNS(ns, i, attrs[i]);
    } else if(!unitCheck) {
      node.setAttribute(i, attrs[i]);
    } else {
      svgedit.units.setUnitAttr(node, i, attrs[i]);
    }
    
  }
};

// Function: cleanupElement
// Remove unneeded (default) attributes, makes resulting SVG smaller
//
// Parameters:
// element - DOM element to clean up
svgedit.utilities.cleanupElement = function(element) {
  var defaults = {
    'fill-opacity':1,
    'stop-opacity':1,
    'opacity':1,
    'stroke':'none',
    'stroke-dasharray':'none',
    'stroke-linejoin':'miter',
    'stroke-linecap':'butt',
    'stroke-opacity':1,
    'stroke-width':1,
    'rx':0,
    'ry':0
  }
  
  for(var attr in defaults) {
    var val = defaults[attr];
    if(element.getAttribute(attr) == val) {
      element.removeAttribute(attr);
    }
  }
  
};


})();
/**
 * Package: svgedit.sanitize
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) browser.js
// 2) svgutils.js

var svgedit = svgedit || {};

(function() {

if (!svgedit.sanitize) {
  svgedit.sanitize = {};
}

// Namespace constants
var svgns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  xmlns = "http://www.w3.org/XML/1998/namespace",
  xmlnsns = "http://www.w3.org/2000/xmlns/", // see http://www.w3.org/TR/REC-xml-names/#xmlReserved
  se_ns = "http://svg-edit.googlecode.com",
  htmlns = "http://www.w3.org/1999/xhtml",
  mathns = "http://www.w3.org/1998/Math/MathML";

// map namespace URIs to prefixes
var nsMap_ = {};
nsMap_[xlinkns] = 'xlink';
nsMap_[xmlns] = 'xml';
nsMap_[xmlnsns] = 'xmlns';
nsMap_[se_ns] = 'se';
nsMap_[htmlns] = 'xhtml';
nsMap_[mathns] = 'mathml';

// map prefixes to namespace URIs
var nsRevMap_ = {};
$.each(nsMap_, function(key,value){
  nsRevMap_[value] = key;
});

// this defines which elements and attributes that we support
var svgWhiteList_ = {
  // SVG Elements
  "a": ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "id", "mask", "opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "xlink:href", "xlink:title"],
  "circle": ["class", "clip-path", "clip-rule", "cx", "cy", "fill", "fill-opacity", "fill-rule", "filter", "id", "mask", "opacity", "r", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
  "clipPath": ["class", "clipPathUnits", "id"],
  "defs": [],
        "style" : ["type"],
  "desc": [],
  "ellipse": ["class", "clip-path", "clip-rule", "cx", "cy", "fill", "fill-opacity", "fill-rule", "filter", "id", "mask", "opacity", "requiredFeatures", "rx", "ry", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
  "feGaussianBlur": ["class", "color-interpolation-filters", "id", "requiredFeatures", "stdDeviation"],
  "filter": ["class", "color-interpolation-filters", "filterRes", "filterUnits", "height", "id", "primitiveUnits", "requiredFeatures", "width", "x", "xlink:href", "y"],
  "foreignObject": ["class", "font-size", "height", "id", "opacity", "requiredFeatures", "style", "transform", "width", "x", "y"],
  "g": ["class", "clip-path", "clip-rule", "id", "display", "fill", "fill-opacity", "fill-rule", "filter", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "font-family", "font-size", "font-style", "font-weight", "text-anchor", "data-locked"],
  "image": ["class", "clip-path", "clip-rule", "filter", "height", "id", "mask", "opacity", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xlink:href", "xlink:title", "y"],
  "line": ["shape-rendering", "class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "id", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "x1", "x2", "y1", "y2"],
  "linearGradient": ["class", "id", "gradientTransform", "gradientUnits", "requiredFeatures", "spreadMethod", "systemLanguage", "x1", "x2", "xlink:href", "y1", "y2"],
  "marker": ["id", "class", "markerHeight", "markerUnits", "markerWidth", "orient", "preserveAspectRatio", "refX", "refY", "systemLanguage", "viewBox"],
  "mask": ["class", "height", "id", "maskContentUnits", "maskUnits", "width", "x", "y"],
  "metadata": ["class", "id"],
  "path": ["class", "clip-path", "clip-rule", "d", "fill", "fill-opacity", "fill-rule", "filter", "id", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
  "pattern": ["class", "height", "id", "patternContentUnits", "patternTransform", "patternUnits", "requiredFeatures", "style", "systemLanguage", "viewBox", "width", "x", "xlink:href", "y"],
  "polygon": ["class", "clip-path", "clip-rule", "id", "fill", "fill-opacity", "fill-rule", "filter", "id", "class", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "points", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
  "polyline": ["class", "clip-path", "clip-rule", "id", "fill", "fill-opacity", "fill-rule", "filter", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "points", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"],
  "radialGradient": ["class", "cx", "cy", "fx", "fy", "gradientTransform", "gradientUnits", "id", "r", "requiredFeatures", "spreadMethod", "systemLanguage", "xlink:href"],
  "rect": ["shape-rendering", "class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "height", "id", "mask", "opacity", "requiredFeatures", "rx", "ry", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "width", "x", "y"],
  "stop": ["class", "id", "offset", "requiredFeatures", "stop-color", "stop-opacity", "style", "systemLanguage"],
  "svg": ["class", "clip-path", "clip-rule", "filter", "id", "height", "mask", "preserveAspectRatio", "requiredFeatures", "style", "systemLanguage", "viewBox", "width", "x", "xmlns", "xmlns:se", "xmlns:xlink", "y"],
  "switch": ["class", "id", "requiredFeatures", "systemLanguage"],
  "symbol": ["class", "fill", "fill-opacity", "fill-rule", "filter", "font-family", "font-size", "font-style", "font-weight", "id", "opacity", "preserveAspectRatio", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "viewBox"],
  "text": ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "font-family", "font-size", "font-style", "font-weight", "id", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "text-anchor", "transform", "x", "xml:space", "y"],
  "textPath": ["class", "id", "method", "requiredFeatures", "spacing", "startOffset", "style", "systemLanguage", "transform", "xlink:href"],
  "title": [],
  "tspan": ["class", "clip-path", "clip-rule", "dx", "dy", "fill", "fill-opacity", "fill-rule", "filter", "font-family", "font-size", "font-style", "font-weight", "id", "mask", "opacity", "requiredFeatures", "rotate", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "text-anchor", "textLength", "transform", "x", "xml:space", "y"],
  "use": ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "height", "id", "mask", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "transform", "width", "x", "xlink:href", "y"],
  
  // MathML Elements
  "annotation": ["encoding"],
  "annotation-xml": ["encoding"],
  "maction": ["actiontype", "other", "selection"],
  "math": ["class", "id", "display", "xmlns"],
  "menclose": ["notation"],
  "merror": [],
  "mfrac": ["linethickness"],
  "mi": ["mathvariant"],
  "mmultiscripts": [],
  "mn": [],
  "mo": ["fence", "lspace", "maxsize", "minsize", "rspace", "stretchy"],
  "mover": [],
  "mpadded": ["lspace", "width", "height", "depth", "voffset"],
  "mphantom": [],
  "mprescripts": [],
  "mroot": [],
  "mrow": ["xlink:href", "xlink:type", "xmlns:xlink"],
  "mspace": ["depth", "height", "width"],
  "msqrt": [],
  "mstyle": ["displaystyle", "mathbackground", "mathcolor", "mathvariant", "scriptlevel"],
  "msub": [],
  "msubsup": [],
  "msup": [],
  "mtable": ["align", "columnalign", "columnlines", "columnspacing", "displaystyle", "equalcolumns", "equalrows", "frame", "rowalign", "rowlines", "rowspacing", "width"],
  "mtd": ["columnalign", "columnspan", "rowalign", "rowspan"],
  "mtext": [],
  "mtr": ["columnalign", "rowalign"],
  "munder": [],
  "munderover": [],
  "none": [],
  "semantics": []
};

// Produce a Namespace-aware version of svgWhitelist
var svgWhiteListNS_ = {};
$.each(svgWhiteList_, function(elt,atts){
  var attNS = {};
  $.each(atts, function(i, att){
    if (att.indexOf(':') >= 0) {
      var v = att.split(':');
      attNS[v[1]] = nsRevMap_[v[0]];
    } else {
      attNS[att] = att == 'xmlns' ? xmlnsns : null;
    }
  });
  svgWhiteListNS_[elt] = attNS;
});

// temporarily expose these
svgedit.sanitize.getNSMap = function() { return nsMap_; }

// Function: svgedit.sanitize.sanitizeSvg
// Sanitizes the input node and its children
// It only keeps what is allowed from our whitelist defined above
//
// Parameters:
// node - The DOM element to be checked, will also check its children
svgedit.sanitize.sanitizeSvg = function(node) {
  // we only care about element nodes
  // automatically return for all comment, etc nodes
  // for text, we do a whitespace trim
  if (node.nodeType == 3) {
    node.nodeValue = node.nodeValue.replace(/^\s+|\s+$/g, "");
    // Remove empty text nodes
    if(!node.nodeValue.length) node.parentNode.removeChild(node);
  }
  if (node.nodeType != 1) return;
  var doc = node.ownerDocument;
  var parent = node.parentNode;
  // can parent ever be null here?  I think the root node's parent is the document...
  if (!doc || !parent) return;
  
  var allowedAttrs = svgWhiteList_[node.nodeName];
  var allowedAttrsNS = svgWhiteListNS_[node.nodeName];

  // if this element is allowed
  if (allowedAttrs != undefined) {

    var se_attrs = [];
  
    var i = node.attributes.length;
    while (i--) {
      // if the attribute is not in our whitelist, then remove it
      // could use jQuery's inArray(), but I don't know if that's any better
      var attr = node.attributes.item(i);
      var attrName = attr.nodeName;
      var attrLocalName = attr.localName;
      var attrNsURI = attr.namespaceURI;
      // Check that an attribute with the correct localName in the correct namespace is on 
      // our whitelist or is a namespace declaration for one of our allowed namespaces
      if (!(allowedAttrsNS.hasOwnProperty(attrLocalName) && attrNsURI == allowedAttrsNS[attrLocalName] && attrNsURI != xmlnsns) &&
        !(attrNsURI == xmlnsns && nsMap_[attr.nodeValue]) ) 
      {
        // TODO(codedread): Programmatically add the se: attributes to the NS-aware whitelist.
        // Bypassing the whitelist to allow se: prefixes. Is there
        // a more appropriate way to do this?
        if(attrName.indexOf('se:') == 0) {
          se_attrs.push([attrName, attr.nodeValue]);
        } 
        node.removeAttributeNS(attrNsURI, attrLocalName);
      }
      
      // Add spaces before negative signs where necessary
      if(svgedit.browser.isGecko()) {
        switch ( attrName ) {
        case "transform":
        case "gradientTransform":
        case "patternTransform":
          var val = attr.nodeValue.replace(/(\d)-/g, "$1 -");
          node.setAttribute(attrName, val);
        }
      }
      
      // for the style attribute, rewrite it in terms of XML presentational attributes
      if (attrName == "style") {
        var props = attr.nodeValue.split(";"),
          p = props.length;
        while(p--) {
          var nv = props[p].split(":");
          // now check that this attribute is supported
          if (allowedAttrs.indexOf(nv[0]) >= 0) {
            node.setAttribute(nv[0],nv[1]);
          }
        }
        node.removeAttribute('style');
      }
    }
    
    $.each(se_attrs, function(i, attr) {
      node.setAttributeNS(se_ns, attr[0], attr[1]);
    });
    
    // for some elements that have a xlink:href, ensure the URI refers to a local element
    // (but not for links)
    var href = svgedit.utilities.getHref(node);
    if(href && 
       ["filter", "linearGradient", "pattern",
       "radialGradient", "textPath", "use"].indexOf(node.nodeName) >= 0)
    {
      // TODO: we simply check if the first character is a #, is this bullet-proof?
      if (href[0] != "#") {
        // remove the attribute (but keep the element)
        svgedit.utilities.setHref(node, "");
        node.removeAttributeNS(xlinkns, "href");
      }
    }
    
    // Safari crashes on a <use> without a xlink:href, so we just remove the node here
    if (node.nodeName == "use" && !svgedit.utilities.getHref(node)) {
      parent.removeChild(node);
      return;
    }
    // if the element has attributes pointing to a non-local reference, 
    // need to remove the attribute
    $.each(["clip-path", "fill", "filter", "marker-end", "marker-mid", "marker-start", "mask", "stroke"],function(i,attr) {
      var val = node.getAttribute(attr);
      if (val) {
        val = svgedit.utilities.getUrlFromAttr(val);
        // simply check for first character being a '#'
        if (val && val[0] !== "#") {
          node.setAttribute(attr, "");
          node.removeAttribute(attr);
        }
      }
    });
    
    // recurse to children
    i = node.childNodes.length;
    while (i--) { svgedit.sanitize.sanitizeSvg(node.childNodes.item(i)); }
  }
  // else, remove this element
  else {
    // remove all children from this node and insert them before this node
    // FIXME: in the case of animation elements this will hardly ever be correct
    var children = [];
    while (node.hasChildNodes()) {
      children.push(parent.insertBefore(node.firstChild, node));
    }

    // remove this node from the document altogether
    parent.removeChild(node);

    // call sanitizeSvg on each of those children
    var i = children.length;
    while (i--) { svgedit.sanitize.sanitizeSvg(children[i]); }

  }
};

})();


/**
 * Package: svedit.history
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) jQuery
// 2) svgtransformlist.js
// 3) svgutils.js

var svgedit = svgedit || {};

(function() {

if (!svgedit.history) {
  svgedit.history = {};
}

// Group: Undo/Redo history management


svgedit.history.HistoryEventTypes = {
  BEFORE_APPLY: 'before_apply',
  AFTER_APPLY: 'after_apply',
  BEFORE_UNAPPLY: 'before_unapply',
  AFTER_UNAPPLY: 'after_unapply'
};

var removedElements = {};

/**
 * Interface: svgedit.history.HistoryCommand
 * An interface that all command objects must implement.
 *
 * interface svgedit.history.HistoryCommand {
 *   void apply(svgedit.history.HistoryEventHandler);
 *   void unapply(svgedit.history.HistoryEventHandler);
 *   Element[] elements();
 *   String getText();
 *
 *   static String type();
 * }
 *
 * Interface: svgedit.history.HistoryEventHandler
 * An interface for objects that will handle history events.
 *
 * interface svgedit.history.HistoryEventHandler {
 *   void handleHistoryEvent(eventType, command);
 * }
 *
 * eventType is a string conforming to one of the HistoryEvent types.
 * command is an object fulfilling the HistoryCommand interface.
 */

// Class: svgedit.history.MoveElementCommand
// implements svgedit.history.HistoryCommand
// History command for an element that had its DOM position changed
//
// Parameters:
// elem - The DOM element that was moved
// oldNextSibling - The element's next sibling before it was moved
// oldParent - The element's parent before it was moved
// text - An optional string visible to user related to this change
svgedit.history.MoveElementCommand = function(elem, oldNextSibling, oldParent, text) {
  this.elem = elem;
  this.text = text ? ("Move " + elem.tagName + " to " + text) : ("Move " + elem.tagName);
  this.oldNextSibling = oldNextSibling;
  this.oldParent = oldParent;
  this.newNextSibling = elem.nextSibling;
  this.newParent = elem.parentNode;
};
svgedit.history.MoveElementCommand.type = function() { return 'svgedit.history.MoveElementCommand'; }
svgedit.history.MoveElementCommand.prototype.type = svgedit.history.MoveElementCommand.type;

// Function: svgedit.history.MoveElementCommand.getText
svgedit.history.MoveElementCommand.prototype.getText = function() {
  return this.text;
};

// Function: svgedit.history.MoveElementCommand.apply
// Re-positions the element
svgedit.history.MoveElementCommand.prototype.apply = function(handler) {
  // TODO(codedread): Refactor this common event code into a base HistoryCommand class.
  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
  }

  this.elem = this.newParent.insertBefore(this.elem, this.newNextSibling);

  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
  }
};

// Function: svgedit.history.MoveElementCommand.unapply
// Positions the element back to its original location
svgedit.history.MoveElementCommand.prototype.unapply = function(handler) {
  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
  }
    
  this.elem = this.oldParent.insertBefore(this.elem, this.oldNextSibling);

  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this);
  }
};

// Function: svgedit.history.MoveElementCommand.elements
// Returns array with element associated with this command
svgedit.history.MoveElementCommand.prototype.elements = function() {
  return [this.elem];
};


// Class: svgedit.history.InsertElementCommand
// implements svgedit.history.HistoryCommand
// History command for an element that was added to the DOM
//
// Parameters:
// elem - The newly added DOM element
// text - An optional string visible to user related to this change
svgedit.history.InsertElementCommand = function(elem, text) {
  this.elem = elem;
  this.text = text || ("Create " + elem.tagName);
  this.parent = elem.parentNode;
  this.nextSibling = this.elem.nextSibling;
};
svgedit.history.InsertElementCommand.type = function() { return 'svgedit.history.InsertElementCommand'; }
svgedit.history.InsertElementCommand.prototype.type = svgedit.history.InsertElementCommand.type;

// Function: svgedit.history.InsertElementCommand.getText
svgedit.history.InsertElementCommand.prototype.getText = function() {
  return this.text;
};

// Function: svgedit.history.InsertElementCommand.apply
// Re-Inserts the new element
svgedit.history.InsertElementCommand.prototype.apply = function(handler) { 
  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
  }

  this.elem = this.parent.insertBefore(this.elem, this.nextSibling); 

  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
  }
};

// Function: svgedit.history.InsertElementCommand.unapply
// Removes the element
svgedit.history.InsertElementCommand.prototype.unapply = function(handler) {
  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
  }

  this.parent = this.elem.parentNode;
  this.elem = this.elem.parentNode.removeChild(this.elem);

  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this);
  }
};

// Function: svgedit.history.InsertElementCommand.elements
// Returns array with element associated with this command
svgedit.history.InsertElementCommand.prototype.elements = function() {
  return [this.elem];
};


// Class: svgedit.history.RemoveElementCommand
// implements svgedit.history.HistoryCommand
// History command for an element removed from the DOM
//
// Parameters:
// elem - The removed DOM element
// oldNextSibling - the DOM element's nextSibling when it was in the DOM
// oldParent - The DOM element's parent
// text - An optional string visible to user related to this change
svgedit.history.RemoveElementCommand = function(elem, oldNextSibling, oldParent, text) {
  this.elem = elem;
  this.text = text || ("Delete " + elem.tagName);
  this.nextSibling = oldNextSibling;
  this.parent = oldParent;

  // special hack for webkit: remove this element's entry in the svgTransformLists map
  svgedit.transformlist.removeElementFromListMap(elem);
};
svgedit.history.RemoveElementCommand.type = function() { return 'svgedit.history.RemoveElementCommand'; }
svgedit.history.RemoveElementCommand.prototype.type = svgedit.history.RemoveElementCommand.type;

// Function: svgedit.history.RemoveElementCommand.getText
svgedit.history.RemoveElementCommand.prototype.getText = function() {
  return this.text;
};

// Function: RemoveElementCommand.apply
// Re-removes the new element
svgedit.history.RemoveElementCommand.prototype.apply = function(handler) {  
  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
  }

  svgedit.transformlist.removeElementFromListMap(this.elem);
  this.parent = this.elem.parentNode;
  this.elem = this.parent.removeChild(this.elem);

  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
  }
};

// Function: RemoveElementCommand.unapply
// Re-adds the new element
svgedit.history.RemoveElementCommand.prototype.unapply = function(handler) { 
  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
  }

  svgedit.transformlist.removeElementFromListMap(this.elem);
  if(this.nextSibling == null) {
    if(window.console) console.log('Error: reference element was lost');
  }
  this.parent.insertBefore(this.elem, this.nextSibling);


  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this);
  }
};

// Function: RemoveElementCommand.elements
// Returns array with element associated with this command
svgedit.history.RemoveElementCommand.prototype.elements = function() {
  return [this.elem];
};


// Class: svgedit.history.ChangeElementCommand
// implements svgedit.history.HistoryCommand
// History command to make a change to an element. 
// Usually an attribute change, but can also be textcontent.
//
// Parameters:
// elem - The DOM element that was changed
// attrs - An object with the attributes to be changed and the values they had *before* the change
// text - An optional string visible to user related to this change
svgedit.history.ChangeElementCommand = function(elem, attrs, text) {
  this.elem = elem;
  this.text = text ? ("Change " + elem.tagName + " " + text) : ("Change " + elem.tagName);
  this.newValues = {};
  this.oldValues = attrs;
  for (var attr in attrs) {
    if (attr == "#text") this.newValues[attr] = elem.textContent;
    else if (attr == "#href") this.newValues[attr] = svgedit.utilities.getHref(elem);
    else this.newValues[attr] = elem.getAttribute(attr);
  }
};
svgedit.history.ChangeElementCommand.type = function() { return 'svgedit.history.ChangeElementCommand'; }
svgedit.history.ChangeElementCommand.prototype.type = svgedit.history.ChangeElementCommand.type;

// Function: svgedit.history.ChangeElementCommand.getText
svgedit.history.ChangeElementCommand.prototype.getText = function() {
  return this.text;
};

// Function: svgedit.history.ChangeElementCommand.apply
// Performs the stored change action
svgedit.history.ChangeElementCommand.prototype.apply = function(handler) {
  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
  }

  var bChangedTransform = false;
  for(var attr in this.newValues ) {
    if (this.newValues[attr]) {
      if (attr == "#text") this.elem.textContent = this.newValues[attr];
      else if (attr == "#href") svgedit.utilities.setHref(this.elem, this.newValues[attr])
      else this.elem.setAttribute(attr, this.newValues[attr]);
    }
    else {
      if (attr == "#text") {
        this.elem.textContent = "";
      }
      else {
        this.elem.setAttribute(attr, "");
        this.elem.removeAttribute(attr);
      }
    }

    if (attr == "transform") { bChangedTransform = true; }
  }

  // relocate rotational transform, if necessary
  if(!bChangedTransform) {
    var angle = svgedit.utilities.getRotationAngle(this.elem);
    if (angle) {
      var bbox = elem.getBBox();
      var cx = bbox.x + bbox.width/2,
        cy = bbox.y + bbox.height/2;
      var rotate = ["rotate(", angle, " ", cx, ",", cy, ")"].join('');
      if (rotate != elem.getAttribute("transform")) {
        elem.setAttribute("transform", rotate);
      }
    }
  }

  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
  }

  return true;
};

// Function: svgedit.history.ChangeElementCommand.unapply
// Reverses the stored change action
svgedit.history.ChangeElementCommand.prototype.unapply = function(handler) {
  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
  }

  var bChangedTransform = false;
  for(var attr in this.oldValues ) {
    if (this.oldValues[attr]) {
      if (attr == "#text") this.elem.textContent = this.oldValues[attr];
      else if (attr == "#href") svgedit.utilities.setHref(this.elem, this.oldValues[attr]);
      else this.elem.setAttribute(attr, this.oldValues[attr]);
    }
    else {
      if (attr == "#text") {
        this.elem.textContent = "";
      }
      else this.elem.removeAttribute(attr);
    }
    if (attr == "transform") { bChangedTransform = true; }
  }
  // relocate rotational transform, if necessary
  if(!bChangedTransform) {
    var angle = svgedit.utilities.getRotationAngle(this.elem);
    if (angle) {
      var bbox = this.elem.getBBox();
      var cx = bbox.x + bbox.width/2,
        cy = bbox.y + bbox.height/2;
      var rotate = ["rotate(", angle, " ", cx, ",", cy, ")"].join('');
      if (rotate != this.elem.getAttribute("transform")) {
        this.elem.setAttribute("transform", rotate);
      }
    }
  }

  // Remove transformlist to prevent confusion that causes bugs like 575.
  svgedit.transformlist.removeElementFromListMap(this.elem);

  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this);
  }

  return true;
};

// Function: ChangeElementCommand.elements
// Returns array with element associated with this command
svgedit.history.ChangeElementCommand.prototype.elements = function() {
  return [this.elem];
};


// TODO: create a 'typing' command object that tracks changes in text
// if a new Typing command is created and the top command on the stack is also a Typing
// and they both affect the same element, then collapse the two commands into one


// Class: svgedit.history.BatchCommand
// implements svgedit.history.HistoryCommand
// History command that can contain/execute multiple other commands
//
// Parameters:
// text - An optional string visible to user related to this change
svgedit.history.BatchCommand = function(text) {
  this.text = text || "Batch Command";
  this.stack = [];
};
svgedit.history.BatchCommand.type = function() { return 'svgedit.history.BatchCommand'; }
svgedit.history.BatchCommand.prototype.type = svgedit.history.BatchCommand.type;

// Function: svgedit.history.BatchCommand.getText
svgedit.history.BatchCommand.prototype.getText = function() {
  return this.text;
};

// Function: svgedit.history.BatchCommand.apply
// Runs "apply" on all subcommands
svgedit.history.BatchCommand.prototype.apply = function(handler) {
  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY, this);
  }

  var len = this.stack.length;
  for (var i = 0; i < len; ++i) {
    this.stack[i].apply(handler);
  }

  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY, this);
  }
};

// Function: svgedit.history.BatchCommand.unapply
// Runs "unapply" on all subcommands
svgedit.history.BatchCommand.prototype.unapply = function(handler) {
  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY, this);
  }

  for (var i = this.stack.length-1; i >= 0; i--) {
    this.stack[i].unapply(handler);
  }

  if (handler) {
    handler.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY, this);
  }
};

// Function: svgedit.history.BatchCommand.elements
// Iterate through all our subcommands and returns all the elements we are changing
svgedit.history.BatchCommand.prototype.elements = function() {
  var elems = [];
  var cmd = this.stack.length;
  while (cmd--) {
    var thisElems = this.stack[cmd].elements();
    var elem = thisElems.length;
    while (elem--) {
      if (elems.indexOf(thisElems[elem]) == -1) elems.push(thisElems[elem]);
    }
  }
  return elems;
};

// Function: svgedit.history.BatchCommand.addSubCommand
// Adds a given command to the history stack
//
// Parameters:
// cmd - The undo command object to add
svgedit.history.BatchCommand.prototype.addSubCommand = function(cmd) {
  this.stack.push(cmd);
};

// Function: svgedit.history.BatchCommand.isEmpty
// Returns a boolean indicating whether or not the batch command is empty
svgedit.history.BatchCommand.prototype.isEmpty = function() {
  return this.stack.length == 0;
};


// Class: svgedit.history.UndoManager
// Parameters:
// historyEventHandler - an object that conforms to the HistoryEventHandler interface
// (see above)
svgedit.history.UndoManager = function(historyEventHandler) {
  this.handler_ = historyEventHandler || null;
  this.undoStackPointer = 0;
  this.undoStack = [];

  // this is the stack that stores the original values, the elements and
  // the attribute name for begin/finish
  this.undoChangeStackPointer = -1;
  this.undoableChangeStack = [];
};
  
// Function: svgedit.history.UndoManager.resetUndoStack
// Resets the undo stack, effectively clearing the undo/redo history
svgedit.history.UndoManager.prototype.resetUndoStack = function() {
  this.undoStack = [];
  this.undoStackPointer = 0;
};

// Function: svgedit.history.UndoManager.getUndoStackSize
// Returns: 
// Integer with the current size of the undo history stack
svgedit.history.UndoManager.prototype.getUndoStackSize = function() {
  return this.undoStackPointer;
};

// Function: svgedit.history.UndoManager.getRedoStackSize
// Returns: 
// Integer with the current size of the redo history stack
svgedit.history.UndoManager.prototype.getRedoStackSize = function() {
  return this.undoStack.length - this.undoStackPointer;
};

// Function: svgedit.history.UndoManager.getNextUndoCommandText
// Returns: 
// String associated with the next undo command
svgedit.history.UndoManager.prototype.getNextUndoCommandText = function() { 
  return this.undoStackPointer > 0 ? this.undoStack[this.undoStackPointer-1].getText() : "";
};

// Function: svgedit.history.UndoManager.getNextRedoCommandText
// Returns: 
// String associated with the next redo command
svgedit.history.UndoManager.prototype.getNextRedoCommandText = function() { 
  return this.undoStackPointer < this.undoStack.length ? this.undoStack[this.undoStackPointer].getText() : "";
};

// Function: svgedit.history.UndoManager.undo
// Performs an undo step
svgedit.history.UndoManager.prototype.undo = function() {
  if (this.undoStackPointer > 0) {
    var cmd = this.undoStack[--this.undoStackPointer];
    cmd.unapply(this.handler_);
  }
};

// Function: svgedit.history.UndoManager.redo   
// Performs a redo step
svgedit.history.UndoManager.prototype.redo = function() {
  if (this.undoStackPointer < this.undoStack.length && this.undoStack.length > 0) {
    var cmd = this.undoStack[this.undoStackPointer++];
    cmd.apply(this.handler_);
  }
};
  
// Function: svgedit.history.UndoManager.addCommandToHistory
// Adds a command object to the undo history stack
//
// Parameters: 
// cmd - The command object to add
svgedit.history.UndoManager.prototype.addCommandToHistory = function(cmd) {
  // FIXME: we MUST compress consecutive text changes to the same element
  // (right now each keystroke is saved as a separate command that includes the
  // entire text contents of the text element)
  // TODO: consider limiting the history that we store here (need to do some slicing)
  
  // if our stack pointer is not at the end, then we have to remove
  // all commands after the pointer and insert the new command
  if (this.undoStackPointer < this.undoStack.length && this.undoStack.length > 0) {
    this.undoStack = this.undoStack.splice(0, this.undoStackPointer);
  }
  this.undoStack.push(cmd);
  this.undoStackPointer = this.undoStack.length;
};


// Function: svgedit.history.UndoManager.beginUndoableChange
// This function tells the canvas to remember the old values of the 
// attrName attribute for each element sent in.  The elements and values 
// are stored on a stack, so the next call to finishUndoableChange() will 
// pop the elements and old values off the stack, gets the current values
// from the DOM and uses all of these to construct the undo-able command.
//
// Parameters: 
// attrName - The name of the attribute being changed
// elems - Array of DOM elements being changed
svgedit.history.UndoManager.prototype.beginUndoableChange = function(attrName, elems) {
  var p = ++this.undoChangeStackPointer;
  var i = elems.length;
  var oldValues = new Array(i), elements = new Array(i);
  while (i--) {
    var elem = elems[i];
    if (elem == null) continue;
    elements[i] = elem;
    oldValues[i] = elem.getAttribute(attrName);
  }
  this.undoableChangeStack[p] = {'attrName': attrName,
              'oldValues': oldValues,
              'elements': elements};
};

// Function: svgedit.history.UndoManager.finishUndoableChange
// This function returns a BatchCommand object which summarizes the
// change since beginUndoableChange was called.  The command can then
// be added to the command history
//
// Returns: 
// Batch command object with resulting changes
svgedit.history.UndoManager.prototype.finishUndoableChange = function() {
  var p = this.undoChangeStackPointer--;
  var changeset = this.undoableChangeStack[p];
  var i = changeset['elements'].length;
  var attrName = changeset['attrName'];
  var batchCmd = new svgedit.history.BatchCommand("Change " + attrName);
  while (i--) {
    var elem = changeset['elements'][i];
    if (elem == null) continue;
    var changes = {};
    changes[attrName] = changeset['oldValues'][i];
    if (changes[attrName] != elem.getAttribute(attrName)) {
      batchCmd.addSubCommand(new svgedit.history.ChangeElementCommand(elem, changes, attrName));
    }
  }
  this.undoableChangeStack[p] = null;
  return batchCmd;
};


})();
/**
 * Package: svedit.select
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Jeff Schiller
 */

// Dependencies:
// 1) jQuery
// 2) browser.js
// 3) math.js
// 4) svgutils.js

var svgedit = svgedit || {};

(function() {

if (!svgedit.select) {
  svgedit.select = {};
}

var svgFactory_;
var config_;
var selectorManager_; // A Singleton

// Class: svgedit.select.Selector
// Private class for DOM element selection boxes
// 
// Parameters:
// id - integer to internally indentify the selector
// elem - DOM element associated with this selector
svgedit.select.Selector = function(id, elem) {
  // this is the selector's unique number
  this.id = id;

  // this holds a reference to the element for which this selector is being used
  this.selectedElement = elem;

  // this is a flag used internally to track whether the selector is being used or not
  this.locked = true;

  // this holds a reference to the <g> element that holds all visual elements of the selector
  this.selectorGroup = svgFactory_.createSVGElement({
    'element': 'g',
    'attr': {'id': ('selectorGroup' + this.id)}
  });

  // this holds a reference to the path rect
  this.selectorRect = this.selectorGroup.appendChild(
    svgFactory_.createSVGElement({
      'element': 'path',
      'attr': {
        'id': ('selectedBox' + this.id),
        'fill': 'none',
        'stroke': '#4F80FF',
        'stroke-width': '1',
        'shape-rendering': 'crispEdges',
        'style': 'pointer-events:none'
      }
    })
  );
  
  if (svgedit.browser.isTouch()) {
    this.selectorRect.setAttribute("stroke-opacity", 0.3);
  }

  // this holds a reference to the grip coordinates for this selector
  this.gripCoords = {
    'nw': null,
    'n' : null,
    'ne': null,
    'e' : null,
    'se': null,
    's' : null,
    'sw': null,
    'w' : null
  };

  this.reset(this.selectedElement);
};


// Function: svgedit.select.Selector.reset 
// Used to reset the id and element that the selector is attached to
//
// Parameters: 
// e - DOM element associated with this selector
svgedit.select.Selector.prototype.reset = function(e) {
  this.locked = true;
  this.selectedElement = e;
  this.resize();
  this.selectorGroup.setAttribute('display', 'inline');
};

// Function: svgedit.select.Selector.updateGripCursors
// Updates cursors for corner grips on rotation so arrows point the right way
//
// Parameters:
// angle - Float indicating current rotation angle in degrees
svgedit.select.Selector.prototype.updateGripCursors = function(angle) {
  var dir_arr = [];
  var steps = Math.round(angle / 45);
  if(steps < 0) steps += 8;
  for (var dir in selectorManager_.selectorGrips) {
    dir_arr.push(dir);
  }
  while(steps > 0) {
    dir_arr.push(dir_arr.shift());
    steps--;
  }
  var i = 0;
  for (var dir in selectorManager_.selectorGrips) {
    selectorManager_.selectorGrips[dir].setAttribute('style', ('cursor:' + dir_arr[i] + '-resize'));
    i++;
  };
};

// Function: svgedit.select.Selector.showGrips
// Show the resize grips of this selector
//
// Parameters:
// show - boolean indicating whether grips should be shown or not
svgedit.select.Selector.prototype.showGrips = function(show) {
  var bShow = show ? 'inline' : 'none';
  selectorManager_.selectorGripsGroup.setAttribute('display', bShow);
  var elem = this.selectedElement;
  this.hasGrips = show;
  if(elem && show) {
    this.selectorGroup.appendChild(selectorManager_.selectorGripsGroup);
    this.updateGripCursors(svgedit.utilities.getRotationAngle(elem));
  }
};

// Function: svgedit.select.Selector.resize
// Updates the selector to match the element's size
svgedit.select.Selector.prototype.resize = function() {
  var selectedBox = this.selectorRect,
    mgr = selectorManager_,
    selectedGrips = mgr.selectorGrips,
    selected = this.selectedElement,
    sw = selected.getAttribute('stroke-width'),
    current_zoom = svgFactory_.currentZoom();
  var offset = 1/current_zoom;
  if (selected.getAttribute('stroke') !== 'none' && !isNaN(sw)) {
    offset += (sw/2);
  }

  var tagName = selected.tagName;
  if (tagName === 'text') {
    offset += 2/current_zoom;
  }

  // loop and transform our bounding box until we reach our first rotation
  var tlist = svgedit.transformlist.getTransformList(selected);
  var m = svgedit.math.transformListToTransform(tlist).matrix;

  // This should probably be handled somewhere else, but for now
  // it keeps the selection box correctly positioned when zoomed
  m.e *= current_zoom;
  m.f *= current_zoom;

  var bbox = svgedit.utilities.getBBox(selected);
  if(tagName === 'g' && !$.data(selected, 'gsvg')) {
    // The bbox for a group does not include stroke vals, so we
    // get the bbox based on its children. 
    var stroked_bbox = svgFactory_.getStrokedBBox(selected.childNodes);
    if(stroked_bbox) {
      bbox = stroked_bbox;
    }
  }

  // apply the transforms
  var l=bbox.x, t=bbox.y, w=bbox.width, h=bbox.height,
    bbox = {x:l, y:t, width:w, height:h};

  // we need to handle temporary transforms too
  // if skewed, get its transformed box, then find its axis-aligned bbox
  
  //*
  offset *= current_zoom;
  
  var nbox = svgedit.math.transformBox(l*current_zoom, t*current_zoom, w*current_zoom, h*current_zoom, m),
    aabox = nbox.aabox,
    nbax = aabox.x - offset,
    nbay = aabox.y - offset,
    nbaw = aabox.width + (offset * 2),
    nbah = aabox.height + (offset * 2);
    
  // now if the shape is rotated, un-rotate it
  var cx = nbax + nbaw/2,
    cy = nbay + nbah/2;

  var angle = svgedit.utilities.getRotationAngle(selected);
  if (angle) {
    var rot = svgFactory_.svgRoot().createSVGTransform();
    rot.setRotate(-angle,cx,cy);
    var rotm = rot.matrix;
    nbox.tl = svgedit.math.transformPoint(nbox.tl.x,nbox.tl.y,rotm);
    nbox.tr = svgedit.math.transformPoint(nbox.tr.x,nbox.tr.y,rotm);
    nbox.bl = svgedit.math.transformPoint(nbox.bl.x,nbox.bl.y,rotm);
    nbox.br = svgedit.math.transformPoint(nbox.br.x,nbox.br.y,rotm);

    // calculate the axis-aligned bbox
    var tl = nbox.tl;
    var minx = tl.x,
      miny = tl.y,
      maxx = tl.x,
      maxy = tl.y;

    var Min = Math.min, Max = Math.max;

    minx = Min(minx, Min(nbox.tr.x, Min(nbox.bl.x, nbox.br.x) ) ) - offset;
    miny = Min(miny, Min(nbox.tr.y, Min(nbox.bl.y, nbox.br.y) ) ) - offset;
    maxx = Max(maxx, Max(nbox.tr.x, Max(nbox.bl.x, nbox.br.x) ) ) + offset;
    maxy = Max(maxy, Max(nbox.tr.y, Max(nbox.bl.y, nbox.br.y) ) ) + offset;

    nbax = minx;
    nbay = miny;
    nbaw = (maxx-minx);
    nbah = (maxy-miny);
  }

  var dstr = 'M' + nbax + ',' + nbay
        + ' L' + (nbax+nbaw) + ',' + nbay
        + ' ' + (nbax+nbaw) + ',' + (nbay+nbah)
        + ' ' + nbax + ',' + (nbay+nbah) + 'z';
  selectedBox.setAttribute('d', dstr);
  
  var xform = angle ? 'rotate(' + [angle,cx,cy].join(',') + ')' : '';
  this.selectorGroup.setAttribute('transform', xform);

    if(svgedit.browser.isTouch()) {
      nbax -= 15.75;
      nbay -= 15.75;
    }
    else {
      nbax -= 4;
      nbay -= 4;
    }
    this.gripCoords = {
      'nw': [nbax, nbay].map(Math.round),
      'ne': [nbax+nbaw, nbay].map(Math.round),
      'sw': [nbax, nbay+nbah].map(Math.round),
      'se': [nbax+nbaw, nbay+nbah].map(Math.round),
      'n':  [nbax + (nbaw)/2, nbay].map(Math.round),
      'w':  [nbax, nbay + (nbah)/2].map(Math.round),
      'e':  [nbax + nbaw, nbay + (nbah)/2].map(Math.round),
      's':  [nbax + (nbaw)/2, nbay + nbah].map(Math.round)
    };

    for(var dir in this.gripCoords) {
      var coords = this.gripCoords[dir];
      selectedGrips[dir].setAttribute('x', coords[0]);
      selectedGrips[dir].setAttribute('y', coords[1]);
    };
    
    this.rotateCoords = {
      'nw': [nbax, nbay],
      'ne': [nbax+nbaw+8, nbay],
      'sw': [nbax, nbay+nbah+8],
      'se': [nbax+nbaw+8, nbay+nbah+8]
    };
    
    for(var dir in this.rotateCoords) {
      var coords = this.rotateCoords[dir];
      mgr.rotateGrips[dir].setAttribute('cx', coords[0]); 
      mgr.rotateGrips[dir].setAttribute('cy', coords[1]);
    }

};


// Class: svgedit.select.SelectorManager
svgedit.select.SelectorManager = function() {
  // this will hold the <g> element that contains all selector rects/grips
  this.selectorParentGroup = null;

  // this is a special rect that is used for multi-select
  this.rubberBandBox = null;

  // this will hold objects of type svgedit.select.Selector (see above)
  this.selectors = [];

  // this holds a map of SVG elements to their Selector object
  this.selectorMap = {};

  // this holds a reference to the grip elements
  this.selectorGrips = {
    'nw': null,
    'n' :  null,
    'ne': null,
    'e' :  null,
    'se': null,
    's' :  null,
    'sw': null,
    'w' :  null
  };

  this.selectorGripsGroup = null;
  //this.rotateGripConnector = null;
  this.rotateGrips = {
    'nw': null,
    'ne': null,
    'se': null,
    'sw': null
  };

  this.initGroup();
};

// Function: svgedit.select.SelectorManager.initGroup
// Resets the parent selector group element
svgedit.select.SelectorManager.prototype.initGroup = function() {
  // remove old selector parent group if it existed
  if (this.selectorParentGroup && this.selectorParentGroup.parentNode) {
    this.selectorParentGroup.parentNode.removeChild(this.selectorParentGroup);
  }

  // create parent selector group and add it to svgroot
  this.selectorParentGroup = svgFactory_.createSVGElement({
    'element': 'g',
    'attr': {'id': 'selectorParentGroup'}
  });
  this.selectorGripsGroup = svgFactory_.createSVGElement({
    'element': 'g',
    'attr': {'display': 'none'}
  });
  this.selectorParentGroup.appendChild(this.selectorGripsGroup);
  svgFactory_.svgRoot().appendChild(this.selectorParentGroup);

  this.selectorMap = {};
  this.selectors = [];
  this.rubberBandBox = null;

  for (var dir in this.rotateGrips) {
    var grip = svgFactory_.createSVGElement({
        'element': 'circle',
        'attr': {
          'id': 'selectorGrip_rotate_' + dir,
          'fill': '#000',
          'r': 8,
          'stroke': '#000',
          "fill-opacity": 0,
          "stroke-opacity": 0,
          'stroke-width': 0,
          'style': 'cursor:url(' + config_.imgPath + 'rotate.png) 12 12, auto;'
        }
    })
  $.data(grip, 'dir', dir);
  $.data(grip, 'type', 'rotate');
  this.rotateGrips[dir] = this.selectorGripsGroup.appendChild(grip);
  }

  // add the corner grips
  for (var dir in this.selectorGrips) {
    var grip = svgFactory_.createSVGElement({
      'element': 'rect',
      'attr': {
        'id': ('selectorGrip_resize_' + dir),
        'width': 8,
        'height': 8,
        'fill': "#4F80FF",
        'stroke': "rgba(0,0,0,0)",
        'stroke-width': 1,
        'style': ('cursor:' + dir + '-resize'),
        'pointer-events': 'all'
      }
    });
    if (svgedit.browser.isTouch()) {
      
      grip.setAttribute("width", 30.5)
      grip.setAttribute("height", 30.5)
      grip.setAttribute("fill-opacity", 0.3)
    }
    
    $.data(grip, 'dir', dir);
    $.data(grip, 'type', 'resize');
    this.selectorGrips[dir] = this.selectorGripsGroup.appendChild(grip);
  }

  if($('#canvasBackground').length) return;

  var dims = config_.dimensions;
  var canvasbg = svgFactory_.createSVGElement({
    'element': 'svg',
    'attr': {
      'id': 'canvasBackground',
      'width': dims[0],
      'height': dims[1],
      'x': 0,
      'y': 0,
      'overflow': (svgedit.browser.isWebkit() ? 'none' : 'visible'), // Chrome 7 has a problem with this when zooming out
      'style': 'pointer-events:none'
    }
  });

  var defs = svgFactory_.createSVGElement({
    'element': 'defs',
    'attr': {
      'id': 'placeholder_defs'
    }
  })
  
  var pattern = svgFactory_.createSVGElement({
    'element': 'pattern',
    'attr': {
      'id': 'checkerPattern',
      'patternUnits': 'userSpaceOnUse',
      'x': 0,
      'y': 0,
      'width': 20,
      'height': 20,
      'viewBox': '0 0 10 10'
    }
  })
  
  var pattern_bg = svgFactory_.createSVGElement({
    'element': 'rect',
    'attr': {
      'x': 0,
      'y': 0,
      'width': 10,
      'height': 10,
      'fill': "#fff"
    }
  })

  var pattern_square1 = svgFactory_.createSVGElement({
    'element': 'rect',
    'attr': {
      'x': 0,
      'y': 0,
      'width': 5,
      'height': 5,
      'fill': "#eee"
    }
  })
  
  var pattern_square2 = svgFactory_.createSVGElement({
    'element': 'rect',
    'attr': {
      'x': 5,
      'y': 5,
      'width': 5,
      'height': 5,
      'fill': "#eee"
    }
  })

  var rect = svgFactory_.createSVGElement({
    'element': 'rect',
    'attr': {
      'width': '100%',
      'height': '100%',
      'x': 0,
      'y': 0,
      'stroke-width': 1,
      'stroke': '#000',
      'fill': 'url(#checkerPattern)',
      'style': 'pointer-events:none'
    }
  });

  // Both Firefox and WebKit are too slow with this filter region (especially at higher
  // zoom levels) and Opera has at least one bug
//  if (!svgedit.browser.isOpera()) rect.setAttribute('filter', 'url(#canvashadow)');
  canvasbg.appendChild(defs);
  defs.appendChild(pattern);
  pattern.appendChild(pattern_bg);
  pattern.appendChild(pattern_square1);
  pattern.appendChild(pattern_square2);
  canvasbg.appendChild(rect);

  svgFactory_.svgRoot().insertBefore(canvasbg, svgFactory_.svgContent());
};

// Function: svgedit.select.SelectorManager.requestSelector
// Returns the selector based on the given element
//
// Parameters:
// elem - DOM element to get the selector for
svgedit.select.SelectorManager.prototype.requestSelector = function(elem) {
  if (elem == null) return null;
  var N = this.selectors.length;
  // If we've already acquired one for this element, return it.
  if (typeof(this.selectorMap[elem.id]) == 'object') {
    this.selectorMap[elem.id].locked = true;
    return this.selectorMap[elem.id];
  }
  for (var i = 0; i < N; ++i) {
    if (this.selectors[i] && !this.selectors[i].locked) {
      this.selectors[i].locked = true;
      this.selectors[i].reset(elem);
      this.selectorMap[elem.id] = this.selectors[i];
      return this.selectors[i];
    }
  }
  // if we reached here, no available selectors were found, we create one
  this.selectors[N] = new svgedit.select.Selector(N, elem);
  this.selectorParentGroup.appendChild(this.selectors[N].selectorGroup);
  this.selectorMap[elem.id] = this.selectors[N];
  return this.selectors[N];
};

// Function: svgedit.select.SelectorManager.releaseSelector
// Removes the selector of the given element (hides selection box) 
//
// Parameters:
// elem - DOM element to remove the selector for
svgedit.select.SelectorManager.prototype.releaseSelector = function(elem) {
  if (elem == null) return;
  var N = this.selectors.length,
    sel = this.selectorMap[elem.id];
  for (var i = 0; i < N; ++i) {
    if (this.selectors[i] && this.selectors[i] == sel) {
      if (sel.locked == false) {
        // TODO(codedread): Ensure this exists in this module.
        console.log('WARNING! selector was released but was already unlocked');
      }
      delete this.selectorMap[elem.id];
      sel.locked = false;
      sel.selectedElement = null;
      sel.showGrips(false);

      // remove from DOM and store reference in JS but only if it exists in the DOM
      try {
        sel.selectorGroup.setAttribute('display', 'none');
      } catch(e) { }

      break;
    }
  }
};

// Function: svgedit.select.SelectorManager.getRubberBandBox
// Returns the rubberBandBox DOM element. This is the rectangle drawn by the user for selecting/zooming
svgedit.select.SelectorManager.prototype.getRubberBandBox = function() {
  if (!this.rubberBandBox) {
    this.rubberBandBox = this.selectorParentGroup.appendChild(
      svgFactory_.createSVGElement({
        'element': 'rect',
        'attr': {
          'id': 'selectorRubberBand',
          'fill': 'none',
          'stroke': '#666',
          'stroke-width': 1,
          'stroke-dasharray': '3,2', 
          'display': 'none',
          'style': 'pointer-events:none'
        }
      })
    );
  }
  return this.rubberBandBox;
};


/**
 * Interface: svgedit.select.SVGFactory
 * An object that creates SVG elements for the canvas.
 *
 * interface svgedit.select.SVGFactory {
 *   SVGElement createSVGElement(jsonMap);
 *   SVGSVGElement svgRoot();
 *   SVGSVGElement svgContent();
 *
 *   Number currentZoom();
 *   Object getStrokedBBox(Element[]); // TODO(codedread): Remove when getStrokedBBox() has been put into svgutils.js
 * }
 */

/**
 * Function: svgedit.select.init()
 * Initializes this module.
 *
 * Parameters:
 * config - an object containing configurable parameters (imgPath)
 * svgFactory - an object implementing the SVGFactory interface (see above).
 */
svgedit.select.init = function(config, svgFactory) {
  config_ = config;
  svgFactory_ = svgFactory;
  selectorManager_ = new svgedit.select.SelectorManager();
  //for hovering elements
  svgFactory_.createSVGElement({
    'element': 'g',
    'attr': {
      'id': 'hover_group'
    }
  })
};

/**
 * Function: svgedit.select.getSelectorManager
 *
 * Returns:
 * The SelectorManager instance.
 */
svgedit.select.getSelectorManager = function() {
  return selectorManager_;
};

})();
/**
 * Package: svgedit.draw
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2011 Jeff Schiller
 */

// Dependencies:
// 1) jQuery
// 2) browser.js
// 3) svgutils.js

var svgedit = svgedit || {};

(function() {

if (!svgedit.draw) {
  svgedit.draw = {};
}

var svg_ns = "http://www.w3.org/2000/svg";
var se_ns = "http://svg-edit.googlecode.com";
var xmlns_ns = "http://www.w3.org/2000/xmlns/";

var visElems = 'a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use';
var visElems_arr = visElems.split(',');

var RandomizeModes = {
  LET_DOCUMENT_DECIDE: 0,
  ALWAYS_RANDOMIZE: 1,
  NEVER_RANDOMIZE: 2
};
var randomize_ids = RandomizeModes.LET_DOCUMENT_DECIDE;

/**
 * This class encapsulates the concept of a layer in the drawing
 * @param name {String} Layer name
 * @param child {SVGGElement} Layer SVG group.
 */
svgedit.draw.Layer = function(name, group) {
  this.name_ = name;
  this.group_ = group;
};

svgedit.draw.Layer.prototype.getName = function() {
  return this.name_;
};

svgedit.draw.Layer.prototype.getGroup = function() {
  return this.group_;
};


// Called to ensure that drawings will or will not have randomized ids.
// The current_drawing will have its nonce set if it doesn't already.
// 
// Params:
// enableRandomization - flag indicating if documents should have randomized ids
svgedit.draw.randomizeIds = function(enableRandomization, current_drawing) {
  randomize_ids = enableRandomization == false ?
    RandomizeModes.NEVER_RANDOMIZE :
    RandomizeModes.ALWAYS_RANDOMIZE;

  if (randomize_ids == RandomizeModes.ALWAYS_RANDOMIZE && !current_drawing.getNonce()) {
    current_drawing.setNonce(Math.floor(Math.random() * 100001));
  } else if (randomize_ids == RandomizeModes.NEVER_RANDOMIZE && current_drawing.getNonce()) {
    current_drawing.clearNonce();
  }
};

/**
 * This class encapsulates the concept of a SVG-edit drawing
 *
 * @param svgElem {SVGSVGElement} The SVG DOM Element that this JS object
 *     encapsulates.  If the svgElem has a se:nonce attribute on it, then
 *     IDs will use the nonce as they are generated.
 * @param opt_idPrefix {String} The ID prefix to use.  Defaults to "svg_"
 *     if not specified.
 */
svgedit.draw.Drawing = function(svgElem, opt_idPrefix) {
  if (!svgElem || !svgElem.tagName || !svgElem.namespaceURI ||
    svgElem.tagName != 'svg' || svgElem.namespaceURI != svg_ns) {
    throw "Error: svgedit.draw.Drawing instance initialized without a <svg> element";
  }

  /**
   * The SVG DOM Element that represents this drawing.
   * @type {SVGSVGElement}
   */
  this.svgElem_ = svgElem;
  
  /**
   * The latest object number used in this drawing.
   * @type {number}
   */
  this.obj_num = 0;
  
  /**
   * The prefix to prepend to each element id in the drawing.
   * @type {String}
   */
  this.idPrefix = opt_idPrefix || "svg_";
  
  /**
   * An array of released element ids to immediately reuse.
   * @type {Array.<number>}
   */
  this.releasedNums = [];

  /**
   * The z-ordered array of tuples containing layer names and <g> elements.
   * The first layer is the one at the bottom of the rendering.
   * TODO: Turn this into an Array.<Layer>
   * @type {Array.<Array.<String, SVGGElement>>}
   */
  this.all_layers = [];

  /**
   * The current layer being used.
   * TODO: Make this a {Layer}.
   * @type {SVGGElement}
   */
  this.current_layer = null;

  /**
   * The nonce to use to uniquely identify elements across drawings.
   * @type {!String}
   */
  this.nonce_ = "";
  var n = this.svgElem_.getAttributeNS(se_ns, 'nonce');
  // If already set in the DOM, use the nonce throughout the document
  // else, if randomizeIds(true) has been called, create and set the nonce.
  if (!!n && randomize_ids != RandomizeModes.NEVER_RANDOMIZE) {
    this.nonce_ = n;
  } else if (randomize_ids == RandomizeModes.ALWAYS_RANDOMIZE) {
    this.setNonce(Math.floor(Math.random() * 100001));
  }
};

svgedit.draw.Drawing.prototype.getElem_ = function(id) {
  if(this.svgElem_.querySelector) {
    // querySelector lookup
    return this.svgElem_.querySelector('#'+id);
  } else {
    // jQuery lookup: twice as slow as xpath in FF
    return $(this.svgElem_).find('[id=' + id + ']')[0];
  }
};

svgedit.draw.Drawing.prototype.getSvgElem = function() {
  return this.svgElem_;
};

svgedit.draw.Drawing.prototype.getNonce = function() {
  return this.nonce_;
};

svgedit.draw.Drawing.prototype.setNonce = function(n) {
  this.svgElem_.setAttributeNS(xmlns_ns, 'xmlns:se', se_ns);
  this.svgElem_.setAttributeNS(se_ns, 'se:nonce', n);
  this.nonce_ = n;
};

svgedit.draw.Drawing.prototype.clearNonce = function() {
  // We deliberately leave any se:nonce attributes alone,
  // we just don't use it to randomize ids.
  this.nonce_ = "";
};

/**
 * Returns the latest object id as a string.
 * @return {String} The latest object Id.
 */
svgedit.draw.Drawing.prototype.getId = function() {
  return this.nonce_ ?
    this.idPrefix + this.nonce_ +'_' + this.obj_num :
    this.idPrefix + this.obj_num;
};

/**
 * Returns the next object Id as a string.
 * @return {String} The next object Id to use.
 */
svgedit.draw.Drawing.prototype.getNextId = function() {
  var oldObjNum = this.obj_num;
  var restoreOldObjNum = false;

  // If there are any released numbers in the release stack, 
  // use the last one instead of the next obj_num.
  // We need to temporarily use obj_num as that is what getId() depends on.
  if (this.releasedNums.length > 0) {
    this.obj_num = this.releasedNums.pop();
    restoreOldObjNum = true;
  } else {
    // If we are not using a released id, then increment the obj_num.
    this.obj_num++;
  }

  // Ensure the ID does not exist.
  var id = this.getId();
  while (this.getElem_(id)) {
    if (restoreOldObjNum) {
      this.obj_num = oldObjNum;
      restoreOldObjNum = false;
    }
    this.obj_num++;
    id = this.getId();
  }
  // Restore the old object number if required.
  if (restoreOldObjNum) {
    this.obj_num = oldObjNum;
  }
  return id;
};

// Function: svgedit.draw.Drawing.releaseId
// Releases the object Id, letting it be used as the next id in getNextId().
// This method DOES NOT remove any elements from the DOM, it is expected
// that client code will do this.
//
// Parameters:
// id - The id to release.
//
// Returns:
// True if the id was valid to be released, false otherwise.
svgedit.draw.Drawing.prototype.releaseId = function(id) {
  // confirm if this is a valid id for this Document, else return false
  var front = this.idPrefix + (this.nonce_ ? this.nonce_ +'_' : '');
  if (typeof id != typeof '' || id.indexOf(front) != 0) {
    return false;
  }
  // extract the obj_num of this id
  var num = parseInt(id.substr(front.length));

  // if we didn't get a positive number or we already released this number
  // then return false.
  if (typeof num != typeof 1 || num <= 0 || this.releasedNums.indexOf(num) != -1) {
    return false;
  }
  
  // push the released number into the released queue
  this.releasedNums.push(num);

  return true;
};

// Function: svgedit.draw.Drawing.getNumLayers
// Returns the number of layers in the current drawing.
// 
// Returns:
// The number of layers in the current drawing.
svgedit.draw.Drawing.prototype.getNumLayers = function() {
  return this.all_layers.length;
};

// Function: svgedit.draw.Drawing.hasLayer
// Check if layer with given name already exists
svgedit.draw.Drawing.prototype.hasLayer = function(name) {
  for(var i = 0; i < this.getNumLayers(); i++) {
    if(this.all_layers[i][0] == name) return true;
  }
  return false;
};


// Function: svgedit.draw.Drawing.getLayerName
// Returns the name of the ith layer. If the index is out of range, an empty string is returned.
//
// Parameters:
// i - the zero-based index of the layer you are querying.
// 
// Returns:
// The name of the ith layer
svgedit.draw.Drawing.prototype.getLayerName = function(i) {
  if (i >= 0 && i < this.getNumLayers()) {
    return this.all_layers[i][0];
  }
  return "";
};

// Function: svgedit.draw.Drawing.getCurrentLayer
// Returns:
// The SVGGElement representing the current layer.
svgedit.draw.Drawing.prototype.getCurrentLayer = function() {
  return this.current_layer;
};

// Function: getCurrentLayerName
// Returns the name of the currently selected layer. If an error occurs, an empty string 
// is returned.
//
// Returns:
// The name of the currently active layer.
svgedit.draw.Drawing.prototype.getCurrentLayerName = function() {
  for (var i = 0; i < this.getNumLayers(); ++i) {
    if (this.all_layers[i][1] == this.current_layer) {
      return this.getLayerName(i);
    }
  }
  return "";
};

// Function: setCurrentLayer
// Sets the current layer. If the name is not a valid layer name, then this function returns
// false. Otherwise it returns true. This is not an undo-able action.
//
// Parameters:
// name - the name of the layer you want to switch to.
//
// Returns:
// true if the current layer was switched, otherwise false
svgedit.draw.Drawing.prototype.setCurrentLayer = function(name) {
  for (var i = 0; i < this.getNumLayers(); ++i) {
    if (name == this.getLayerName(i)) {
      if (this.current_layer != this.all_layers[i][1]) {
        this.current_layer.setAttribute("style", "pointer-events:none");
        this.current_layer = this.all_layers[i][1];
        this.current_layer.setAttribute("style", "pointer-events:all");
      }
      return true;
    }
  }
  return false;
};


// Function: svgedit.draw.Drawing.deleteCurrentLayer
// Deletes the current layer from the drawing and then clears the selection. This function 
// then calls the 'changed' handler.  This is an undoable action.
// Returns:
// The SVGGElement of the layer removed or null.
svgedit.draw.Drawing.prototype.deleteCurrentLayer = function() {
  if (this.current_layer && this.getNumLayers() > 1) {
    // actually delete from the DOM and return it
    var parent = this.current_layer.parentNode;
    var nextSibling = this.current_layer.nextSibling;
    var oldLayerGroup = parent.removeChild(this.current_layer);
    this.identifyLayers();
    return oldLayerGroup;
  }
  return null;
};

// Function: svgedit.draw.Drawing.identifyLayers
// Updates layer system and sets the current layer to the
// top-most layer (last <g> child of this drawing).
svgedit.draw.Drawing.prototype.identifyLayers = function() {
  this.all_layers = [];
  var numchildren = this.svgElem_.childNodes.length;
  // loop through all children of SVG element
  var orphans = [], layernames = [];
  var a_layer = null;
  var childgroups = false;
  for (var i = 0; i < numchildren; ++i) {
    var child = this.svgElem_.childNodes.item(i);
    // for each g, find its layer name
    if (child && child.nodeType == 1) {
      if (child.tagName == "g") {
        childgroups = true;
        var name = $("title",child).text();
        
        // Hack for Opera 10.60
        if(!name && svgedit.browser.isOpera() && child.querySelectorAll) {
          name = $(child.querySelectorAll('title')).text();
        }

        // store layer and name in global variable
        if (name) {
          layernames.push(name);
          this.all_layers.push( [name,child] );
          a_layer = child;
          svgedit.utilities.walkTree(child, function(e){e.setAttribute("style", "pointer-events:inherit");});
          a_layer.setAttribute("style", "pointer-events:none");
        }
        // if group did not have a name, it is an orphan
        else {
          orphans.push(child);
        }
      }
      // if child has is "visible" (i.e. not a <title> or <defs> element), then it is an orphan
      else if(~visElems_arr.indexOf(child.nodeName)) {
        var bb = svgedit.utilities.getBBox(child);
        orphans.push(child);
      }
    }
  }
  
  // create a new layer and add all the orphans to it
  var svgdoc = this.svgElem_.ownerDocument;
  if (orphans.length > 0 || !childgroups) {
    var i = 1;
    // TODO(codedread): What about internationalization of "Layer"?
    while (layernames.indexOf(("Layer " + i)) >= 0) { i++; }
    var newname = "Layer " + i;
    a_layer = svgdoc.createElementNS(svg_ns, "g");
    var layer_title = svgdoc.createElementNS(svg_ns, "title");
    layer_title.textContent = newname;
    a_layer.appendChild(layer_title);
    for (var j = 0; j < orphans.length; ++j) {
      a_layer.appendChild(orphans[j]);
    }
    this.svgElem_.appendChild(a_layer);
    this.all_layers.push( [newname, a_layer] );
  }
  svgedit.utilities.walkTree(a_layer, function(e){e.setAttribute("style","pointer-events:inherit");});
  if (a_layer.getAttribute("data-locked") === "true") {
    this.current_layer = this.all_layers.slice(-2)[0][1]
  }
  else {
    this.current_layer = a_layer
  }
  this.current_layer.setAttribute("style","pointer-events:all");
};

// Function: svgedit.draw.Drawing.createLayer
// Creates a new top-level layer in the drawing with the given name and 
// sets the current layer to it.
//
// Parameters:
// name - The given name
//
// Returns:
// The SVGGElement of the new layer, which is also the current layer
// of this drawing.
svgedit.draw.Drawing.prototype.createLayer = function(name) {
  var svgdoc = this.svgElem_.ownerDocument;
  var new_layer = svgdoc.createElementNS(svg_ns, "g");
  var layer_title = svgdoc.createElementNS(svg_ns, "title");
  layer_title.textContent = name;
  new_layer.appendChild(layer_title);
  this.svgElem_.appendChild(new_layer);
  this.identifyLayers();
  return new_layer;
};

// Function: svgedit.draw.Drawing.getLayerVisibility
// Returns whether the layer is visible.  If the layer name is not valid, then this function
// returns false.
//
// Parameters:
// layername - the name of the layer which you want to query.
//
// Returns:
// The visibility state of the layer, or false if the layer name was invalid.
svgedit.draw.Drawing.prototype.getLayerVisibility = function(layername) {
  // find the layer
  var layer = null;
  for (var i = 0; i < this.getNumLayers(); ++i) {
    if (this.getLayerName(i) == layername) {
      layer = this.all_layers[i][1];
      break;
    }
  }
  if (!layer) return false;
  return (layer.getAttribute('display') != 'none');
};

// Function: svgedit.draw.Drawing.setLayerVisibility
// Sets the visibility of the layer. If the layer name is not valid, this function return 
// false, otherwise it returns true. This is an undo-able action.
//
// Parameters:
// layername - the name of the layer to change the visibility
// bVisible - true/false, whether the layer should be visible
//
// Returns:
// The SVGGElement representing the layer if the layername was valid, otherwise null.
svgedit.draw.Drawing.prototype.setLayerVisibility = function(layername, bVisible) {
  if (typeof bVisible != typeof true) {
    return null;
  }
  // find the layer
  var layer = null;
  for (var i = 0; i < this.getNumLayers(); ++i) {
    if (this.getLayerName(i) == layername) {
      layer = this.all_layers[i][1];
      break;
    }
  }
  if (!layer) return null;
  
  var oldDisplay = layer.getAttribute("display");
  if (!oldDisplay) oldDisplay = "inline";
  layer.setAttribute("display", bVisible ? "inline" : "none");
  return layer;
};


// Function: svgedit.draw.Drawing.getLayerOpacity
// Returns the opacity of the given layer.  If the input name is not a layer, null is returned.
//
// Parameters: 
// layername - name of the layer on which to get the opacity
//
// Returns:
// The opacity value of the given layer.  This will be a value between 0.0 and 1.0, or null
// if layername is not a valid layer
svgedit.draw.Drawing.prototype.getLayerOpacity = function(layername) {
  for (var i = 0; i < this.getNumLayers(); ++i) {
    if (this.getLayerName(i) == layername) {
      var g = this.all_layers[i][1];
      var opacity = g.getAttribute('opacity');
      if (!opacity) {
        opacity = '1.0';
      }
      return parseFloat(opacity);
    }
  }
  return null;
};

// Function: svgedit.draw.Drawing.setLayerOpacity
// Sets the opacity of the given layer.  If the input name is not a layer, nothing happens.
// If opacity is not a value between 0.0 and 1.0, then nothing happens.
//
// Parameters:
// layername - name of the layer on which to set the opacity
// opacity - a float value in the range 0.0-1.0
svgedit.draw.Drawing.prototype.setLayerOpacity = function(layername, opacity) {
  if (typeof opacity != typeof 1.0 || opacity < 0.0 || opacity > 1.0) {
    return;
  }
  for (var i = 0; i < this.getNumLayers(); ++i) {
    if (this.getLayerName(i) == layername) {
      var g = this.all_layers[i][1];
      g.setAttribute("opacity", opacity);
      break;
    }
  }
};

})();

/**
 * Package: svgedit.path
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2011 Alexis Deveria
 * Copyright(c) 2011 Jeff Schiller
 */

// Dependencies:
// 1) jQuery
// 2) browser.js
// 3) math.js
// 4) svgutils.js

var svgedit = svgedit || {};

(function() {

if (!svgedit.path) {
  svgedit.path = {};
}

var svgns = "http://www.w3.org/2000/svg";

var segData = {
  2: ['x','y'],
  4: ['x','y'],
  6: ['x','y','x1','y1','x2','y2'],
  8: ['x','y','x1','y1'],
  10: ['x','y','r1','r2','angle','largeArcFlag','sweepFlag'],
  12: ['x'],
  14: ['y'],
  16: ['x','y','x2','y2'],
  18: ['x','y']
};

var pathFuncs = [];

var link_control_pts = false;

// Stores references to paths via IDs.
// TODO: Make this cross-document happy.
var pathData = {};

svgedit.path.setLinkControlPoints = function(lcp) {
  link_control_pts = lcp;
};

svgedit.path.path = null;

var editorContext_ = null;

svgedit.path.init = function(editorContext) {
  editorContext_ = editorContext;
  
  pathFuncs = [0,'ClosePath'];
  var pathFuncsStrs = ['Moveto', 'Lineto', 'CurvetoCubic', 'CurvetoQuadratic', 'Arc',
    'LinetoHorizontal', 'LinetoVertical','CurvetoCubicSmooth','CurvetoQuadraticSmooth'];
  $.each(pathFuncsStrs, function(i,s) {
    pathFuncs.push(s+'Abs');
    pathFuncs.push(s+'Rel');
  });
};

svgedit.path.insertItemBefore = function(elem, newseg, index) {
  var list = elem.pathSegList;
  list.insertItemBefore(newseg, index);
};

// TODO: See if this should just live in replacePathSeg
svgedit.path.ptObjToArr = function(type, seg_item) {
  var arr = segData[type], len = arr.length;
  var out = Array(len);
  for(var i=0; i<len; i++) {
    out[i] = seg_item[arr[i]];
  }
  return out;
};

svgedit.path.getGripPt = function(seg, alt_pt) {
  var out = {
    x: alt_pt? alt_pt.x : seg.item.x,
    y: alt_pt? alt_pt.y : seg.item.y
  }, path = seg.path;

  if(path.matrix) {
    var pt = svgedit.math.transformPoint(out.x, out.y, path.matrix);
    out = pt;
  }

  out.x *= editorContext_.getCurrentZoom();
  out.y *= editorContext_.getCurrentZoom();

  return out;
};

svgedit.path.getPointFromGrip = function(pt, path) {
  var out = {
    x: pt.x,
    y: pt.y
  }

  if(path.matrix) {
    var pt = svgedit.math.transformPoint(out.x, out.y, path.imatrix);
    out.x = pt.x;
    out.y = pt.y;
  }

  out.x /= editorContext_.getCurrentZoom();
  out.y /= editorContext_.getCurrentZoom();

  return out;
};

svgedit.path.addPointGrip = function(index, x, y) {
  // create the container of all the point grips
  var pointGripContainer = svgedit.path.getGripContainer();

  var pointGrip = svgedit.utilities.getElem("pathpointgrip_"+index);
  // create it
  if (!pointGrip) {
    pointGrip = document.createElementNS(svgns, "rect");
    svgedit.utilities.assignAttributes(pointGrip, {
      'id': "pathpointgrip_" + index,
      'display': "none",
      'width': svgedit.browser.isTouch() ? 30 : 5,
      'height': svgedit.browser.isTouch() ? 30 : 5,
      'fill': "#fff",
      'stroke': "#4F80FF",
      'shape-rendering': "crispEdges",
      'stroke-width': 1,
      'cursor': 'move',
      'style': 'pointer-events:all',
      'xlink:title': "Drag node to move it. Double-click node to change segment type"
    });
    pointGrip = pointGripContainer.appendChild(pointGrip);

    var grip = $('#pathpointgrip_'+index);
    grip.dblclick(function() {
      if(svgedit.path.path) svgedit.path.path.setSegType();
    });
  }
  if(x && y) {
    // set up the point grip element and display it
    svgedit.utilities.assignAttributes(pointGrip, {
      'x': x-(svgedit.browser.isTouch() ? 15 : 2.5),
      'y': y-(svgedit.browser.isTouch() ? 15 : 2.5),
      'display': "inline"
    });
  }
  return pointGrip;
};

svgedit.path.getGripContainer = function() {
  var c = svgedit.utilities.getElem("pathpointgrip_container");
  if (!c) {
    var parent = svgedit.utilities.getElem("selectorParentGroup");
    c = parent.appendChild(document.createElementNS(svgns, "g"));
    c.id = "pathpointgrip_container";
  }
  return c;
};

svgedit.path.addCtrlGrip = function(id) {
  var pointGrip = svgedit.utilities.getElem("ctrlpointgrip_"+id);
  if(pointGrip) return pointGrip;
    
  pointGrip = document.createElementNS(svgns, "circle");
  svgedit.utilities.assignAttributes(pointGrip, {
    'id': "ctrlpointgrip_" + id,
    'display': "none",
    'r': svgedit.browser.isTouch() ? 15 : 3,
    'fill': "#4F80FF",
    'stroke': '#4F80FF',
    'stroke-opacity': 0,
    'stroke-width': '3',
    'cursor': 'move',
    'style': 'pointer-events:all',
    'xlink:title': "Drag control point to adjust curve properties"
  });
  svgedit.path.getGripContainer().appendChild(pointGrip);
  return pointGrip;
};

svgedit.path.getCtrlLine = function(id) {
  var ctrlLine = svgedit.utilities.getElem("ctrlLine_"+id);
  if(ctrlLine) return ctrlLine;

  ctrlLine = document.createElementNS(svgns, "line");
  svgedit.utilities.assignAttributes(ctrlLine, {
    'id': "ctrlLine_"+id,
    'stroke': "#4F80FF",
    'stroke-width': 1,
    "style": "pointer-events:none"
  });
  svgedit.path.getGripContainer().appendChild(ctrlLine);
  return ctrlLine;
};

svgedit.path.getPointGrip = function(seg, update) {
  var index = seg.index;
  var pointGrip = svgedit.path.addPointGrip(index);
  if(update) {
    var pt = svgedit.path.getGripPt(seg);
    svgedit.utilities.assignAttributes(pointGrip, {
      'x': pt.x-(svgedit.browser.isTouch() ? 15 : 2.5),
      'y': pt.y-(svgedit.browser.isTouch() ? 15 : 2.5),
      'display': "inline"
    });
  }

  return pointGrip;
};

svgedit.path.getControlPoints = function(seg) {
  var item = seg.item;
  var index = seg.index;
  if(!item || !("x1" in item) || !("x2" in item)) return null;
  var cpt = {};     
  var pointGripContainer = svgedit.path.getGripContainer();

  // Note that this is intentionally not seg.prev.item
  var prev = svgedit.path.path.segs[index-1].item;

  var seg_items = [prev, item];

  for(var i=1; i<3; i++) {
    var id = index + 'c' + i;

    var ctrlLine = cpt['c' + i + '_line'] = svgedit.path.getCtrlLine(id);

    var pt = svgedit.path.getGripPt(seg, {x:item['x' + i], y:item['y' + i]});
    var gpt = svgedit.path.getGripPt(seg, {x:seg_items[i-1].x, y:seg_items[i-1].y});

    svgedit.utilities.assignAttributes(ctrlLine, {
      'x1': pt.x,
      'y1': pt.y,
      'x2': gpt.x,
      'y2': gpt.y,
      'display': "inline"
    });

    cpt['c' + i + '_line'] = ctrlLine;

    // create it
    pointGrip = cpt['c' + i] = svgedit.path.addCtrlGrip(id);
    svgedit.utilities.assignAttributes(pointGrip, {
      'cx': pt.x,
      'cy': pt.y,
      'display': "inline"
    });
    cpt['c' + i] = pointGrip;
  }
  return cpt;
};

// This replaces the segment at the given index. Type is given as number.
svgedit.path.replacePathSeg = function(type, index, pts, elem) {
  var path = elem || svgedit.path.path.elem;
  var func = 'createSVGPathSeg' + pathFuncs[type];
  var seg = path[func].apply(path, pts);
  path.pathSegList.replaceItem(seg, index);
};

svgedit.path.getSegSelector = function(seg, update) {
  var index = seg.index;
  var segLine = svgedit.utilities.getElem("segline_" + index);
  if(!segLine) {
    var pointGripContainer = svgedit.path.getGripContainer();
    // create segline
    segLine = document.createElementNS(svgns, "path");
    svgedit.utilities.assignAttributes(segLine, {
      'id': "segline_" + index,
      'display': 'none',
      'fill': "none",
      'stroke': "#0ff",
      'stroke-opacity': 1,
      "shape-rendering": "crispEdges",
      'stroke-width': 2,
      'style':'pointer-events:none',
      'd': 'M0,0 0,0'
    });
    pointGripContainer.appendChild(segLine);
  } 

  if(update) {
    var prev = seg.prev;
    if(!prev) {
      segLine.setAttribute("display", "none");
      return segLine;
    }

    var pt = svgedit.path.getGripPt(prev);
    // Set start point
    svgedit.path.replacePathSeg(2, 0, [pt.x, pt.y], segLine);

    var pts = svgedit.path.ptObjToArr(seg.type, seg.item, true);
    for(var i=0; i < pts.length; i+=2) {
      var pt = svgedit.path.getGripPt(seg, {x:pts[i], y:pts[i+1]});
      pts[i] = pt.x;
      pts[i+1] = pt.y;
    }

    svgedit.path.replacePathSeg(seg.type, 1, pts, segLine);
  }
  return segLine;
};

// Function: smoothControlPoints
// Takes three points and creates a smoother line based on them
// 
// Parameters: 
// ct1 - Object with x and y values (first control point)
// ct2 - Object with x and y values (second control point)
// pt - Object with x and y values (third point)
//
// Returns: 
// Array of two "smoothed" point objects
svgedit.path.smoothControlPoints = this.smoothControlPoints = function(ct1, ct2, pt) {
  // each point must not be the origin
  var x1 = ct1.x - pt.x,
    y1 = ct1.y - pt.y,
    x2 = ct2.x - pt.x,
    y2 = ct2.y - pt.y;
    
  if ( (x1 != 0 || y1 != 0) && (x2 != 0 || y2 != 0) ) {
    var anglea = Math.atan2(y1,x1),
      angleb = Math.atan2(y2,x2),
      r1 = Math.sqrt(x1*x1+y1*y1),
      r2 = Math.sqrt(x2*x2+y2*y2),
      nct1 = editorContext_.getSVGRoot().createSVGPoint(),
      nct2 = editorContext_.getSVGRoot().createSVGPoint();        
    if (anglea < 0) { anglea += 2*Math.PI; }
    if (angleb < 0) { angleb += 2*Math.PI; }
    
    var angleBetween = Math.abs(anglea - angleb),
      angleDiff = Math.abs(Math.PI - angleBetween)/2;
    
    var new_anglea, new_angleb;
    if (anglea - angleb > 0) {
      new_anglea = angleBetween < Math.PI ? (anglea + angleDiff) : (anglea - angleDiff);
      new_angleb = angleBetween < Math.PI ? (angleb - angleDiff) : (angleb + angleDiff);
    }
    else {
      new_anglea = angleBetween < Math.PI ? (anglea - angleDiff) : (anglea + angleDiff);
      new_angleb = angleBetween < Math.PI ? (angleb + angleDiff) : (angleb - angleDiff);
    }
    
    // rotate the points
    nct1.x = r1 * Math.cos(new_anglea) + pt.x;
    nct1.y = r1 * Math.sin(new_anglea) + pt.y;
    nct2.x = r2 * Math.cos(new_angleb) + pt.x;
    nct2.y = r2 * Math.sin(new_angleb) + pt.y;
    
    return [nct1, nct2];
  }
  return undefined;
};

svgedit.path.Segment = function(index, item) {
  this.selected = false;
  this.index = index;
  this.item = item;
  this.type = item.pathSegType;
  
  this.ctrlpts = [];
  this.ptgrip = null;
  this.segsel = null;
};

svgedit.path.Segment.prototype.showCtrlPts = function(y) {
  for (var i in this.ctrlpts) {
    this.ctrlpts[i].setAttribute("display", y ? "inline" : "none");
  }
};

svgedit.path.Segment.prototype.selectCtrls = function(y) {
  $('#ctrlpointgrip_' + this.index + 'c1, #ctrlpointgrip_' + this.index + 'c2').
    attr('fill', '#4F80FF');
};

svgedit.path.Segment.prototype.show = function(y) {
  if(this.ptgrip) {
    this.ptgrip.setAttribute("display", y ? "inline" : "none");
    this.segsel.setAttribute("display", y ? "inline" : "none");
    // Show/hide all control points if available
    this.showCtrlPts(y);
  }
};

svgedit.path.Segment.prototype.select = function(y) {
  if(this.ptgrip) {
    this.ptgrip.setAttribute("stroke", y ? "#4F80FF" : "#4F80FF");
    this.ptgrip.setAttribute("fill", y ? "#4F80FF" : "#fff");
    this.segsel.setAttribute("display", y ? "inline" : "none");
    if(this.ctrlpts) {
      this.selectCtrls(y);
    }
    this.selected = y;
  }
};

svgedit.path.Segment.prototype.addGrip = function() {
  this.ptgrip = svgedit.path.getPointGrip(this, true);
  this.ctrlpts = svgedit.path.getControlPoints(this, true);
  this.segsel = svgedit.path.getSegSelector(this, true);
};

svgedit.path.Segment.prototype.update = function(full) {
  if(this.ptgrip) {
    var pt = svgedit.path.getGripPt(this);
    var reposition = (svgedit.browser.isTouch() ? 15 : 2.5)
    var properties = (this.ptgrip.nodeName == "rect") ? {'x': pt.x-reposition, 'y': pt.y-reposition} : {'cx': pt.x, 'cy': pt.y};
    svgedit.utilities.assignAttributes(this.ptgrip, properties);
    svgedit.path.getSegSelector(this, true);

    if(this.ctrlpts) {
      if(full) {
        this.item = svgedit.path.path.elem.pathSegList.getItem(this.index);
        this.type = this.item.pathSegType;
      }
      svgedit.path.getControlPoints(this);
    } 
    // this.segsel.setAttribute("display", y?"inline":"none");
  }
};

svgedit.path.Segment.prototype.move = function(dx, dy) {
  var item = this.item;
  // fix for path tool dom breakage, amending item does bad things now, so we take a copy and use that. Can probably improve to just take a shallow copy of object
  var cloneItem = $.extend({}, item);
  var cur_pts = (this.ctrlpts) 
    ? [cloneItem.x += dx,  cloneItem.y += dy, 
       cloneItem.x1,       cloneItem.y1, 
       cloneItem.x2 += dx, cloneItem.y2 += dy]
    : [cloneItem.x += dx, cloneItem.y += dy];
  
  svgedit.path.replacePathSeg(this.type, this.index, cur_pts);

  if(this.next && this.next.ctrlpts) {
    var next = this.next.item;
    var next_pts = [next.x, next.y, 
      next.x1 += dx, next.y1 += dy, next.x2, next.y2];
    svgedit.path.replacePathSeg(this.next.type, this.next.index, next_pts);
  }

  if(this.mate) {
    // The last point of a closed subpath has a "mate",
    // which is the "M" segment of the subpath
    var item = this.mate.item;
    var pts = [item.x += dx, item.y += dy];
    svgedit.path.replacePathSeg(this.mate.type, this.mate.index, pts);
    // Has no grip, so does not need "updating"?
  }

  this.update(true);
  if(this.next) this.next.update(true);
};

svgedit.path.Segment.prototype.setLinked = function(num) {
  var seg, anum, pt;
  if (num == 2) {
    anum = 1;
    seg = this.next;
    if(!seg) return;
    pt = this.item;
  } else {
    anum = 2;
    seg = this.prev;
    if(!seg) return;
    pt = seg.item;
  }

  var item = seg.item;
  var cloneItem = $.extend({}, item);
  cloneItem['x' + anum ] = pt.x + (pt.x - this.item['x' + num]);
  cloneItem['y' + anum ] = pt.y + (pt.y - this.item['y' + num]);

  var pts = [ 
              cloneItem.x, cloneItem.y,
              cloneItem.x1, cloneItem.y1,
              cloneItem.x2, cloneItem.y2
            ];

  svgedit.path.replacePathSeg(seg.type, seg.index, pts);
  seg.update(true);
};

svgedit.path.Segment.prototype.moveCtrl = function(num, dx, dy) {
  var item = $.extend({}, this.item);

  item['x' + num] += dx;
  item['y' + num] += dy;

  var pts = [item.x,item.y,
    item.x1,item.y1, item.x2,item.y2];
    
  svgedit.path.replacePathSeg(this.type, this.index, pts);
  this.update(true);
};

svgedit.path.Segment.prototype.setType = function(new_type, pts) {
  svgedit.path.replacePathSeg(new_type, this.index, pts);
  this.type = new_type;
  this.item = svgedit.path.path.elem.pathSegList.getItem(this.index);
  this.showCtrlPts(new_type === 6);
  this.ctrlpts = svgedit.path.getControlPoints(this);
  this.update(true);
};

svgedit.path.Path = function(elem) {
  if(!elem || elem.tagName !== "path") {
    throw "svgedit.path.Path constructed without a <path> element";
  }

  this.elem = elem;
  this.segs = [];
  this.selected_pts = [];
  svgedit.path.path = this;

  this.init();
};

// Reset path data
svgedit.path.Path.prototype.init = function() {
  // Hide all grips, etc
  $(svgedit.path.getGripContainer()).find("*").attr("display", "none");
  var segList = this.elem.pathSegList;
  var len = segList.numberOfItems;
  this.segs = [];
  this.selected_pts = [];
  this.first_seg = null;
  
  // Set up segs array
  for(var i=0; i < len; i++) {
    var item = segList.getItem(i);
    var segment = new svgedit.path.Segment(i, item);
    segment.path = this;
    this.segs.push(segment);
  } 
  
  var segs = this.segs;
  var start_i = null;

  for(var i=0; i < len; i++) {
    var seg = segs[i]; 
    var next_seg = (i+1) >= len ? null : segs[i+1];
    var prev_seg = (i-1) < 0 ? null : segs[i-1];
    
    if(seg.type === 2) {
      if(prev_seg && prev_seg.type !== 1) {
        // New sub-path, last one is open,
        // so add a grip to last sub-path's first point
        var start_seg = segs[start_i];
        start_seg.next = segs[start_i+1];
        start_seg.next.prev = start_seg;
        start_seg.addGrip();
      }
      // Remember that this is a starter seg
      start_i = i;
    } else if(next_seg && next_seg.type === 1) {
      // This is the last real segment of a closed sub-path
      // Next is first seg after "M"
      seg.next = segs[start_i+1];
      
      // First seg after "M"'s prev is this
      seg.next.prev = seg;
      seg.mate = segs[start_i];
      seg.addGrip();
      if(this.first_seg == null) {
        this.first_seg = seg;
      }
    } else if(!next_seg) {
      if(seg.type !== 1) {
        // Last seg, doesn't close so add a grip
        // to last sub-path's first point
        var start_seg = segs[start_i];
        start_seg.next = segs[start_i+1];
        start_seg.next.prev = start_seg;
        start_seg.addGrip();
        seg.addGrip();

        if(!this.first_seg) {
          // Open path, so set first as real first and add grip
          this.first_seg = segs[start_i];
        }
      }
    } else if(seg.type !== 1){
      // Regular segment, so add grip and its "next"
      seg.addGrip();
      
      // Don't set its "next" if it's an "M"
      if(next_seg && next_seg.type !== 2) {
        seg.next = next_seg;
        seg.next.prev = seg;
      }
    }
  }
  return this;
};

svgedit.path.Path.prototype.eachSeg = function(fn) {
  var len = this.segs.length
  for(var i=0; i < len; i++) {
    var ret = fn.call(this.segs[i], i);
    if(ret === false) break;
  }
};

svgedit.path.Path.prototype.addSeg = function(index) {
  // Adds a new segment
  var seg = this.segs[index];
  if(!seg.prev) return;

  var prev = seg.prev;
  var newseg;
  switch(seg.item.pathSegType) {
  case 4:
    var new_x = (seg.item.x + prev.item.x) / 2;
    var new_y = (seg.item.y + prev.item.y) / 2;
    newseg = this.elem.createSVGPathSegLinetoAbs(new_x, new_y);
    break;
  case 6: //make it a curved segment to preserve the shape (WRS)
    // http://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm#Geometric_interpretation
    var p0_x = (prev.item.x + seg.item.x1)/2;
    var p1_x = (seg.item.x1 + seg.item.x2)/2;
    var p2_x = (seg.item.x2 + seg.item.x)/2;
    var p01_x = (p0_x + p1_x)/2;
    var p12_x = (p1_x + p2_x)/2;
    var new_x = (p01_x + p12_x)/2;
    var p0_y = (prev.item.y + seg.item.y1)/2;
    var p1_y = (seg.item.y1 + seg.item.y2)/2;
    var p2_y = (seg.item.y2 + seg.item.y)/2;
    var p01_y = (p0_y + p1_y)/2;
    var p12_y = (p1_y + p2_y)/2;
    var new_y = (p01_y + p12_y)/2;
    newseg = this.elem.createSVGPathSegCurvetoCubicAbs(new_x,new_y, p0_x,p0_y, p01_x,p01_y);
    var pts = [seg.item.x,seg.item.y,p12_x,p12_y,p2_x,p2_y];
    svgedit.path.replacePathSeg(seg.type,index,pts);
    break;
  }

  svgedit.path.insertItemBefore(this.elem, newseg, index);
};

svgedit.path.Path.prototype.deleteSeg = function(index) {
  var seg = this.segs[index];
  var list = this.elem.pathSegList;
  
  seg.show(false);
  var next = seg.next;
  if(seg.mate) {
    // Make the next point be the "M" point
    var pt = [next.item.x, next.item.y];
    svgedit.path.replacePathSeg(2, next.index, pt);
    
    // Reposition last node
    svgedit.path.replacePathSeg(4, seg.index, pt);
    
    list.removeItem(seg.mate.index);
  } else if(!seg.prev) {
    // First node of open path, make next point the M
    var item = seg.item;
    var pt = [next.item.x, next.item.y];
    svgedit.path.replacePathSeg(2, seg.next.index, pt);
    list.removeItem(index);
    
  } else {
    list.removeItem(index);
  }
};

svgedit.path.Path.prototype.subpathIsClosed = function(index) {
  var closed = false;
  // Check if subpath is already open
  svgedit.path.path.eachSeg(function(i) {
    if(i <= index) return true;
    if(this.type === 2) {
      // Found M first, so open
      return false;
    } else if(this.type === 1) {
      // Found Z first, so closed
      closed = true;
      return false;
    }
  });
  
  return closed;
};

svgedit.path.Path.prototype.removePtFromSelection = function(index) {
  var pos = this.selected_pts.indexOf(index);
  if(pos == -1) {
    return;
  } 
  this.segs[index].select(false);
  this.selected_pts.splice(pos, 1);
};

svgedit.path.Path.prototype.clearSelection = function() {
  this.eachSeg(function(i) {
    // 'this' is the segment here
    this.select(false);
  });
  this.selected_pts = [];
};

svgedit.path.Path.prototype.storeD = function() {
  this.last_d = this.elem.getAttribute('d');
};

svgedit.path.Path.prototype.show = function(y) {
  // Shows this path's segment grips
  this.eachSeg(function() {
    // 'this' is the segment here
    this.show(y);
  });
  if(y) {
    this.selectPt(this.first_seg.index);
  }
  return this;
};

// Move selected points 
svgedit.path.Path.prototype.movePts = function(d_x, d_y) {
  var i = this.selected_pts.length;
  while(i--) {
    var seg = this.segs[this.selected_pts[i]];
    seg.move(d_x, d_y);
  }
};

svgedit.path.Path.prototype.moveCtrl = function(d_x, d_y) {
  var seg = this.segs[this.selected_pts[0]];
  seg.moveCtrl(this.dragctrl, d_x, d_y);
  if(link_control_pts) {
    seg.setLinked(this.dragctrl);
  }
};

svgedit.path.Path.prototype.setSegType = function(new_type) {
  this.storeD();
  var i = this.selected_pts.length;
  var text;
  while(i--) {
    var sel_pt = this.selected_pts[i];
    
    // Selected seg
    var cur = this.segs[sel_pt];
    var prev = cur.prev;
    if(!prev) continue;
    
    if(!new_type) { // double-click, so just toggle
      text = "Toggle Path Segment Type";

      // Toggle segment to curve/straight line
      var old_type = cur.type;
      
      new_type = (old_type == 6) ? 4 : 6;
    } 
    
    new_type = new_type-0;
    
    var cur_x = cur.item.x;
    var cur_y = cur.item.y;
    var prev_x = prev.item.x;
    var prev_y = prev.item.y;
    var points;
    switch ( new_type ) {
    case 6:
      if(cur.olditem) {
        var old = cur.olditem;
        points = [cur_x,cur_y, old.x1,old.y1, old.x2,old.y2];
      } else {
        var diff_x = cur_x - prev_x;
        var diff_y = cur_y - prev_y;
        // get control points from straight line segment
        /*
        var ct1_x = (prev_x + (diff_y/2));
        var ct1_y = (prev_y - (diff_x/2));
        var ct2_x = (cur_x + (diff_y/2));
        var ct2_y = (cur_y - (diff_x/2));
        */
        //create control points on the line to preserve the shape (WRS)
        var ct1_x = (prev_x + (diff_x/3));
        var ct1_y = (prev_y + (diff_y/3));
        var ct2_x = (cur_x - (diff_x/3));
        var ct2_y = (cur_y - (diff_y/3));
        points = [cur_x,cur_y, ct1_x,ct1_y, ct2_x,ct2_y];
      }
      break;
    case 4:
      points = [cur_x,cur_y];
      
      // Store original prevve segment nums
      cur.olditem = cur.item;
      break;
    }
    
    cur.setType(new_type, points);
  }
  svgedit.path.path.endChanges(text);
};

svgedit.path.Path.prototype.selectPt = function(pt, ctrl_num) {
  this.clearSelection();
  if(pt == null) {
    this.eachSeg(function(i) {
      // 'this' is the segment here.
      if(this.prev) {
        pt = i;
      }
    });
  }
  this.addPtsToSelection(pt);
  if(ctrl_num) {
    this.dragctrl = ctrl_num;
    
    if(link_control_pts) {
      this.segs[pt].setLinked(ctrl_num);
    }
  }
};

// Update position of all points
svgedit.path.Path.prototype.update = function() {
  var elem = this.elem;
  if(svgedit.utilities.getRotationAngle(elem)) {
    this.matrix = svgedit.math.getMatrix(elem);
    this.imatrix = this.matrix.inverse();
  } else {
    this.matrix = null;
    this.imatrix = null;
  }

  this.eachSeg(function(i) {
    this.item = elem.pathSegList.getItem(i);
    this.update();
  });

  return this;
};

svgedit.path.getPath_ = function(elem) {
  var p = pathData[elem.id];
  if(!p) p = pathData[elem.id] = new svgedit.path.Path(elem);
  return p;
};

svgedit.path.removePath_ = function(id) {
  if(id in pathData) delete pathData[id];
};

var getRotVals = function(x, y, oldcx, oldcy, newcx, newcy, angle) {
  dx = x - oldcx;
  dy = y - oldcy;
  
  // rotate the point around the old center
  r = Math.sqrt(dx*dx + dy*dy);
  theta = Math.atan2(dy,dx) + angle;
  dx = r * Math.cos(theta) + oldcx;
  dy = r * Math.sin(theta) + oldcy;
  
  // dx,dy should now hold the actual coordinates of each
  // point after being rotated

  // now we want to rotate them around the new center in the reverse direction
  dx -= newcx;
  dy -= newcy;
  
  r = Math.sqrt(dx*dx + dy*dy);
  theta = Math.atan2(dy,dx) - angle;
  return {'x':(r * Math.cos(theta) + newcx)/1,
    'y':(r * Math.sin(theta) + newcy)/1};
};

// If the path was rotated, we must now pay the piper:
// Every path point must be rotated into the rotated coordinate system of 
// its old center, then determine the new center, then rotate it back
// This is because we want the path to remember its rotation

// TODO: This is still using ye olde transform methods, can probably
// be optimized or even taken care of by recalculateDimensions
svgedit.path.recalcRotatedPath = function() {
  var current_path = svgedit.path.path.elem;
  var angle = svgedit.utilities.getRotationAngle(current_path, true);
  if(!angle) return;
//  selectedBBoxes[0] = svgedit.path.path.oldbbox;
  var box = svgedit.utilities.getBBox(current_path),
    oldbox = svgedit.path.path.oldbbox,//selectedBBoxes[0],
    oldcx = oldbox.x + oldbox.width/2,
    oldcy = oldbox.y + oldbox.height/2,
    newcx = box.x + box.width/2,
    newcy = box.y + box.height/2,
    
  // un-rotate the new center to the proper position
    dx = newcx - oldcx,
    dy = newcy - oldcy,
    r = Math.sqrt(dx*dx + dy*dy),
    theta = Math.atan2(dy,dx) + angle;
    
  newcx = r * Math.cos(theta) + oldcx;
  newcy = r * Math.sin(theta) + oldcy;
  
  var list = current_path.pathSegList,
    i = list.numberOfItems;
  while (i) {
    i -= 1;
    var seg = list.getItem(i),
      type = seg.pathSegType;
    if(type == 1) continue;
    
    var rvals = getRotVals(seg.x,seg.y, oldcx, oldcy, newcx, newcy, angle),
      points = [rvals.x, rvals.y];
    if(seg.x1 != null && seg.x2 != null) {
      c_vals1 = getRotVals(seg.x1, seg.y1, oldcx, oldcy, newcx, newcy, angle);
      c_vals2 = getRotVals(seg.x2, seg.y2, oldcx, oldcy, newcx, newcy, angle);
      points.splice(points.length, 0, c_vals1.x , c_vals1.y, c_vals2.x, c_vals2.y);
    }
    svgedit.path.replacePathSeg(type, i, points);
  } // loop for each point

  box = svgedit.utilities.getBBox(current_path);            
//  selectedBBoxes[0].x = box.x; selectedBBoxes[0].y = box.y;
//  selectedBBoxes[0].width = box.width; selectedBBoxes[0].height = box.height;
  
  // now we must set the new transform to be rotated around the new center
  var R_nc = svgroot.createSVGTransform(),
    tlist = svgedit.transformlist.getTransformList(current_path);
  R_nc.setRotate((angle * 180.0 / Math.PI), newcx, newcy);
  tlist.replaceItem(R_nc,0);
};

// ====================================
// Public API starts here

svgedit.path.clearData =  function() {
  pathData = {};
};

})();

// This sets up alternative dialog boxes. They mostly work the same way as
// their UI counterparts, expect instead of returning the result, a callback
// needs to be included that returns the result as its first parameter.
// In the future we may want to add additional types of dialog boxes, since 
// they should be easy to handle this way.

(function() {
  $('#dialog_container').draggable({cancel:'#dialog_content, #dialog_buttons *', containment: 'window'});
  var box = $('#dialog_box'), btn_holder = $('#dialog_buttons');
  
  var dbox = function(type, msg, callback, defText) {
    $('#dialog_content').html('<p>'+msg.replace(/\n/g,'</p><p>')+'</p>')
      .toggleClass('prompt',(type=='prompt'));
    btn_holder.empty();
    
    var ok = $('<input type="button" value="OK">').appendTo(btn_holder);
  
    if(type != 'alert') {
      $('<input type="button" value="Cancel">')
        .appendTo(btn_holder)
        .on("click touchstart", function() { box.hide();callback(false)});
    }
    
    if(type == 'prompt') {
      var input = $('<input type="text">').prependTo(btn_holder);
      input.val(defText || '');
      input.bind('keydown', 'return', function() {ok.trigger("click touchstart");});
    }
    
    if(type == 'process') {
      ok.hide();
    }

    box.show();
    
    ok.on("click touchstart", function() { 
      box.hide();
      var resp = (type == 'prompt')?input.val():true;
      if(callback) callback(resp);
    }).focus();
    
    if(type == 'prompt') input.focus();
  }
  
  $.alert = function(msg, cb) { dbox('alert', msg, cb);};
  $.confirm = function(msg, cb) { dbox('confirm', msg, cb);};
  $.process_cancel = function(msg, cb) {  dbox('process', msg, cb);};
  $.prompt = function(msg, txt, cb) { dbox('prompt', msg, cb, txt);};
}());
/*
 * svgcanvas.js
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Alexis Deveria
 * Copyright(c) 2010 Pavol Rusnak
 * Copyright(c) 2010 Jeff Schiller
 *
 */

// Dependencies:
// 1) jQuery
// 2) browser.js
// 3) svgtransformlist.js
// 4) math.js
// 5) units.js
// 6) svgutils.js
// 7) sanitize.js
// 8) history.js
// 9) select.js
// 10) draw.js
// 11) path.js

/*jslint browser: true*/


(function() {

  // This fixes $(...).attr() to work as expected with SVG elements.
  // Does not currently use *AttributeNS() since we rarely need that.
  
  // See http://api.jquery.com/attr/ for basic documentation of .attr()
  
  // Additional functionality: 
  // - When getting attributes, a string that's a number is return as type number.
  // - If an array is supplied as first parameter, multiple values are returned
  // as an object with values for each given attributes

  var proxied = jQuery.fn.attr, svgns = "http://www.w3.org/2000/svg";
  jQuery.fn.attr = function(key, value) {
    var len = this.length;
    if(!len) return proxied.apply(this, arguments);
    for(var i=0; i<len; i++) {
      var elem = this[i];
      // set/get SVG attribute
      if(elem.namespaceURI === svgns) {
        // Setting attribute
        if(value !== undefined) {
          elem.setAttribute(key, value);
        } else if($.isArray(key)) {
          // Getting attributes from array
          var j = key.length, obj = {};

          while(j--) {
            var aname = key[j];
            var attr = elem.getAttribute(aname);
            // This returns a number when appropriate
            if(attr || attr === "0") {
              attr = isNaN(attr)?attr:attr-0;
            }
            obj[aname] = attr;
          }
          return obj;
        
        } else if(typeof key === "object") {
          // Setting attributes form object
          for(var v in key) {
            elem.setAttribute(v, key[v]);
          }
        // Getting attribute
        } else {
          var attr = elem.getAttribute(key);
          if(attr || attr === "0") {
            attr = isNaN(attr)?attr:attr-0;
          }

          return attr;
        }
      } else {
        return proxied.apply(this, arguments);
      }
    }
    return this;
  };
  
}());

// Class: SvgCanvas
// The main SvgCanvas class that manages all SVG-related functions
//
// Parameters:
// container - The container HTML element that should hold the SVG root element
// config - An object that contains configuration data
$.SvgCanvas = function(container, config)
{
// Namespace constants
var svgns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  xmlns = "http://www.w3.org/XML/1998/namespace",
  xmlnsns = "http://www.w3.org/2000/xmlns/", // see http://www.w3.org/TR/REC-xml-names/#xmlReserved
  se_ns = "http://svg-edit.googlecode.com",
  htmlns = "http://www.w3.org/1999/xhtml",
  mathns = "http://www.w3.org/1998/Math/MathML";

// Default configuration options
var curConfig = {
  show_outside_canvas: true,
  selectNew: true,
  dimensions: [640, 480]
};

// Update config with new one if given
if(config) {
  $.extend(curConfig, config);
}

// Array with width/height of canvas
var dimensions = curConfig.dimensions;

var canvas = this;

// "document" element associated with the container (same as window.document using default svg-editor.js)
// NOTE: This is not actually a SVG document, but a HTML document.
var svgdoc = container.ownerDocument;

// This is a container for the document being edited, not the document itself.
var svgroot = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgroot.setAttribute("width", dimensions[0]);
svgroot.setAttribute("height", dimensions[1]);
svgroot.id = "svgroot";
svgroot.setAttribute("xlinkns", xlinkns);
container.appendChild(svgroot);

// The actual element that represents the final output SVG element
var svgcontent = svgdoc.createElementNS(svgns, "svg");

// This function resets the svgcontent element while keeping it in the DOM.
var clearSvgContentElement = canvas.clearSvgContentElement = function() {
  while (svgcontent.firstChild) { svgcontent.removeChild(svgcontent.firstChild); }

  // TODO: Clear out all other attributes first?
  $(svgcontent).attr({
    id: 'svgcontent',
    width: dimensions[0],
    height: dimensions[1],
    x: dimensions[0],
    y: dimensions[1],
    overflow: curConfig.show_outside_canvas ? 'visible' : 'hidden',
    xmlns: svgns,
    "xmlns:se": se_ns,
    "xmlns:xlink": xlinkns
  }).appendTo(svgroot);

  // TODO: make this string optional and set by the client
  var comment = svgdoc.createComment(" Created with Method Draw - http://github.com/duopixel/Method-Draw/ ");
  svgcontent.appendChild(comment);
};
clearSvgContentElement();

// Prefix string for element IDs
var idprefix = "svg_";

// Function: setIdPrefix
// Changes the ID prefix to the given value
//
// Parameters: 
// p - String with the new prefix 
canvas.setIdPrefix = function(p) {
  idprefix = p;
};

// Current svgedit.draw.Drawing object
// @type {svgedit.draw.Drawing}
canvas.current_drawing_ = new svgedit.draw.Drawing(svgcontent, idprefix);

// Function: getCurrentDrawing
// Returns the current Drawing.
// @return {svgedit.draw.Drawing}
var getCurrentDrawing = canvas.getCurrentDrawing = function() {
  return canvas.current_drawing_;
};

// Float displaying the current zoom level (1 = 100%, .5 = 50%, etc)
var current_zoom = 1;

// pointer to current group (for in-group editing)
var current_group = null;

// Object containing data for the currently selected styles
var all_properties = {
  shape: {
    fill: (curConfig.initFill.color == 'none' ? '' : '#') + curConfig.initFill.color,
    fill_paint: null,
    fill_opacity: curConfig.initFill.opacity,
    stroke: "#" + curConfig.initStroke.color,
    stroke_paint: null,
    stroke_opacity: curConfig.initStroke.opacity,
    stroke_width: curConfig.initStroke.width,
    stroke_dasharray: 'none',
    opacity: curConfig.initOpacity
  }
};

all_properties.text = $.extend(true, {}, all_properties.shape);
$.extend(all_properties.text, {
  fill: "#000000",
  stroke_width: 0,
  font_size: 24,
  font_family: 'Helvetica, Arial, sans-serif'
});

// Current shape style properties
var cur_shape = all_properties.shape;

// Array with all the currently selected elements
// default size of 1 until it needs to grow bigger
var selectedElements = new Array(1);

// Function: addSvgElementFromJson
// Create a new SVG element based on the given object keys/values and add it to the current layer
// The element will be ran through cleanupElement before being returned 
//
// Parameters:
// data - Object with the following keys/values:
// * element - tag name of the SVG element to create
// * attr - Object with attributes key-values to assign to the new element
// * curStyles - Boolean indicating that current style attributes should be applied first
//
// Returns: The new element
var addSvgElementFromJson = this.addSvgElementFromJson = function(data) {
  var shape = svgedit.utilities.getElem(data.attr.id);
  // if shape is a path but we need to create a rect/ellipse, then remove the path
  var current_layer = getCurrentDrawing().getCurrentLayer();
  if (shape && data.element != shape.tagName) {
    current_layer.removeChild(shape);
    shape = null;
  }
  if (!shape) {
    shape = svgdoc.createElementNS(svgns, data.element);
    if (current_layer) {
      (current_group || current_layer).appendChild(shape);
    }
  }
  if(data.curStyles) {
    svgedit.utilities.assignAttributes(shape, {
      "fill": cur_shape.fill,
      "stroke": cur_shape.stroke,
      "stroke-width": cur_shape.stroke_width,
      "stroke-dasharray": cur_shape.stroke_dasharray,
      "stroke-opacity": cur_shape.stroke_opacity,
      "fill-opacity": cur_shape.fill_opacity,
      "opacity": cur_shape.opacity / 2,
      "style": "pointer-events:inherit"
    }, 100);
  }
  svgedit.utilities.assignAttributes(shape, data.attr, 100);
  svgedit.utilities.cleanupElement(shape);
  return shape;
};


// import svgtransformlist.js
var getTransformList = canvas.getTransformList = svgedit.transformlist.getTransformList;

// import from math.js.
var transformPoint = svgedit.math.transformPoint;
var matrixMultiply = canvas.matrixMultiply = svgedit.math.matrixMultiply;
var hasMatrixTransform = canvas.hasMatrixTransform = svgedit.math.hasMatrixTransform;
var transformListToTransform = canvas.transformListToTransform = svgedit.math.transformListToTransform;
var snapToAngle = svgedit.math.snapToAngle;
var getMatrix = svgedit.math.getMatrix;

// initialize from units.js
// send in an object implementing the ElementContainer interface (see units.js)
svgedit.units.init({
  getBaseUnit: function() { return curConfig.baseUnit; },
  getElement: svgedit.utilities.getElem,
  getHeight: function() { return svgcontent.getAttribute("height")/current_zoom; },
  getWidth: function() { return svgcontent.getAttribute("width")/current_zoom; },
  getRoundDigits: function() { return save_options.round_digits; }
});
// import from units.js
var convertToNum = canvas.convertToNum = svgedit.units.convertToNum;

// import from svgutils.js
svgedit.utilities.init({
  getDOMDocument: function() { return svgdoc; },
  getDOMContainer: function() { return container; },
  getSVGRoot: function() { return svgroot; },
  // TODO: replace this mostly with a way to get the current drawing.
  getSelectedElements: function() { return selectedElements; },
  getSVGContent: function() { return svgcontent; }
});
var getUrlFromAttr = canvas.getUrlFromAttr = svgedit.utilities.getUrlFromAttr;
var getHref = canvas.getHref = svgedit.utilities.getHref;
var setHref = canvas.setHref = svgedit.utilities.setHref;
var getPathBBox = svgedit.utilities.getPathBBox;
var getBBox = canvas.getBBox = svgedit.utilities.getBBox;
var getRotationAngle = canvas.getRotationAngle = svgedit.utilities.getRotationAngle;
var getElem = canvas.getElem = svgedit.utilities.getElem;
var assignAttributes = canvas.assignAttributes = svgedit.utilities.assignAttributes;
var cleanupElement = this.cleanupElement = svgedit.utilities.cleanupElement;

// import from sanitize.js
var nsMap = svgedit.sanitize.getNSMap();
var sanitizeSvg = canvas.sanitizeSvg = svgedit.sanitize.sanitizeSvg;

// import from history.js
var MoveElementCommand = svgedit.history.MoveElementCommand;
var InsertElementCommand = svgedit.history.InsertElementCommand;
var RemoveElementCommand = svgedit.history.RemoveElementCommand;
var ChangeElementCommand = svgedit.history.ChangeElementCommand;
var BatchCommand = svgedit.history.BatchCommand;
// Implement the svgedit.history.HistoryEventHandler interface.
canvas.undoMgr = new svgedit.history.UndoManager({
  handleHistoryEvent: function(eventType, cmd) {
    var EventTypes = svgedit.history.HistoryEventTypes;
    // TODO: handle setBlurOffsets.
    if (eventType == EventTypes.BEFORE_UNAPPLY || eventType == EventTypes.BEFORE_APPLY) {
      canvas.clearSelection();
    } else if (eventType == EventTypes.AFTER_APPLY || eventType == EventTypes.AFTER_UNAPPLY) {
      var elems = cmd.elements();
      canvas.pathActions.clear();
      call("changed", elems);
      
      var cmdType = cmd.type();
      var isApply = (eventType == EventTypes.AFTER_APPLY);
      if (cmdType == MoveElementCommand.type()) {
        var parent = isApply ? cmd.newParent : cmd.oldParent;
        if (parent == svgcontent) {
          canvas.identifyLayers();
        }
      } else if (cmdType == InsertElementCommand.type() ||
          cmdType == RemoveElementCommand.type()) {
        if (cmd.parent == svgcontent) {
          canvas.identifyLayers();
        }
        if (cmdType == InsertElementCommand.type()) {
          if (isApply) restoreRefElems(cmd.elem);
        } else {
          if (!isApply) restoreRefElems(cmd.elem);
        }
        
        if(cmd.elem.tagName === 'use') {
          setUseData(cmd.elem);
        }
      } else if (cmdType == ChangeElementCommand.type()) {
        // if we are changing layer names, re-identify all layers
        if (cmd.elem.tagName == "title" && cmd.elem.parentNode.parentNode == svgcontent) {
          canvas.identifyLayers();
        }
        var values = isApply ? cmd.newValues : cmd.oldValues;
        // If stdDeviation was changed, update the blur.
        if (values["stdDeviation"]) {
          canvas.setBlurOffsets(cmd.elem.parentNode, values["stdDeviation"]);
        }
        
        // Remove & Re-add hack for Webkit (issue 775) 
        //if(cmd.elem.tagName === 'use' && svgedit.browser.isWebkit()) {
        //  var elem = cmd.elem;
        //  if(!elem.getAttribute('x') && !elem.getAttribute('y')) {
        //    var parent = elem.parentNode;
        //    var sib = elem.nextSibling;
        //    parent.removeChild(elem);
        //    parent.insertBefore(elem, sib);
        //  }
        //}
      }
    }
  }
});
var addCommandToHistory = function(cmd) {
  canvas.undoMgr.addCommandToHistory(cmd);
};

// import from select.js
svgedit.select.init(curConfig, {
  createSVGElement: function(jsonMap) { return canvas.addSvgElementFromJson(jsonMap); },
  svgRoot: function() { return svgroot; },
  svgContent: function() { return svgcontent; },
  currentZoom: function() { return current_zoom; },
  // TODO(codedread): Remove when getStrokedBBox() has been put into svgutils.js.
  getStrokedBBox: function(elems) { return canvas.getStrokedBBox([elems]); }
});
// this object manages selectors for us
var selectorManager = this.selectorManager = svgedit.select.getSelectorManager();
// this object manages selectors for us

// Import from path.js
svgedit.path.init({
  getCurrentZoom: function() { return current_zoom; },
  getSVGRoot: function() { return svgroot; }
});

// Function: snapToGrid
// round value to for snapping
// NOTE: This function did not move to svgutils.js since it depends on curConfig.
svgedit.utilities.snapToGrid = function(value){
  var stepSize = curConfig.snappingStep;
  var unit = curConfig.baseUnit;
  if(unit !== "px") {
  stepSize *= svgedit.units.getTypeMap()[unit];
  }
  value = Math.round(value/stepSize)*stepSize;
  return value;
};
var snapToGrid = svgedit.utilities.snapToGrid;
var visElems = 'a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use';
var ref_attrs = ["clip-path", "fill", "filter", "marker-end", "marker-mid", "marker-start", "mask", "stroke"];

var elData = $.data;

// Animation element to change the opacity of any newly created element
var opac_ani = false; //document.createElementNS(svgns, 'animate');
//$(opac_ani).attr({
//  attributeName: 'opacity',
//  begin: 'indefinite',
//  dur: 0,
//  fill: 'freeze'
//}).appendTo(svgroot);

var restoreRefElems = function(elem) {
  // Look for missing reference elements, restore any found
  var attrs = $(elem).attr(ref_attrs);
  for(var o in attrs) {
    var val = attrs[o];
    if (val && val.indexOf('url(') === 0) {
      var id = getUrlFromAttr(val).substr(1);
      var ref = getElem(id);
      if(!ref) {
        findDefs().appendChild(removedElements[id]);
        delete removedElements[id];
      }
    }
  }
  
  var childs = elem.getElementsByTagName('*');
  
  if(childs.length) {
    for(var i = 0, l = childs.length; i < l; i++) {
      restoreRefElems(childs[i]);
    }
  }
};

(function() {
  // TODO For Issue 208: this is a start on a thumbnail
  //  var svgthumb = svgdoc.createElementNS(svgns, "use");
  //  svgthumb.setAttribute('width', '100');
  //  svgthumb.setAttribute('height', '100');
  //  svgedit.utilities.setHref(svgthumb, '#svgcontent');
  //  svgroot.appendChild(svgthumb);

})();

// Object to contain image data for raster images that were found encodable
var encodableImages = {},
  
  // String with image URL of last loadable image
  last_good_img_url = curConfig.imgPath + 'logo.png',
  
  // Array with current disabled elements (for in-group editing)
  disabled_elems = [],
  
  // Object with save options
  save_options = {round_digits: 5},
  
  // Boolean indicating whether or not a draw action has been started
  started = false,
  
  // String with an element's initial transform attribute value
  start_transform = null,
  
  // String indicating the current editor mode
  current_mode = "select",
  
  // String with the current direction in which an element is being resized
  current_resize_mode = "none",
  
  // Object with IDs for imported files, to see if one was already added
  import_ids = {};

// Current text style properties
var cur_text = all_properties.text,
  
  // Current general properties
  cur_properties = cur_shape,
  
  // Array with selected elements' Bounding box object
//  selectedBBoxes = new Array(1),
  
  // The DOM element that was just selected
  justSelected = null,
  
  // DOM element for selection rectangle drawn by the user
  rubberBox = null,
  
  // Array of current BBoxes (still needed?)
  curBBoxes = [],
  
  // Object to contain all included extensions
  extensions = {},
  
  // Canvas point for the most recent right click
  lastClickPoint = null,
  
  // Map of deleted reference elements
  removedElements = {}

// Clipboard for cut, copy&pasted elements
canvas.clipBoard = [];

// Should this return an array by default, so extension results aren't overwritten?
var runExtensions = this.runExtensions = function(action, vars, returnArray) {
  var result = false;
  if(returnArray) result = [];
  $.each(extensions, function(name, opts) {
    if(action in opts) {
      if(returnArray) {
        result.push(opts[action](vars))
      } else {
        result = opts[action](vars);
      }
    }
  });
  return result;
}


// Function: addExtension
// Add an extension to the editor
// 
// Parameters:
// name - String with the ID of the extension
// ext_func - Function supplied by the extension with its data
this.addExtension = function(name, ext_func) {
  if(!(name in extensions)) {
    // Provide private vars/funcs here. Is there a better way to do this?
    
    if($.isFunction(ext_func)) {
    var ext = ext_func($.extend(canvas.getPrivateMethods(), {
      svgroot: svgroot,
      svgcontent: svgcontent,
      nonce: getCurrentDrawing().getNonce(),
      selectorManager: selectorManager
    }));
    } else {
      var ext = ext_func;
    }
    extensions[name] = ext;
    call("extension_added", ext);
  } else {
    console.log('Cannot add extension "' + name + '", an extension by that name already exists"');
  }
};
  
// This method rounds the incoming value to the nearest value based on the current_zoom
var round = this.round = function(val) {
  return parseInt(val*current_zoom)/current_zoom;
};

// This method sends back an array or a NodeList full of elements that
// intersect the multi-select rubber-band-box on the current_layer only.
// 
// Since the only browser that supports the SVG DOM getIntersectionList is Opera, 
// we need to provide an implementation here.  We brute-force it for now.
// 
// Reference:
// Firefox does not implement getIntersectionList(), see https://bugzilla.mozilla.org/show_bug.cgi?id=501421
// Webkit does not implement getIntersectionList(), see https://bugs.webkit.org/show_bug.cgi?id=11274
var getIntersectionList = this.getIntersectionList = function(rect) {
  if (rubberBox == null) { return null; }

  var parent = current_group || getCurrentDrawing().getCurrentLayer();
  
  if(!curBBoxes.length) {
    // Cache all bboxes
    curBBoxes = getVisibleElementsAndBBoxes(parent);
  }
  
  var resultList = null;
  try {
    resultList = parent.getIntersectionList(rect, null);
  } catch(e) { }

  if (resultList == null || typeof(resultList.item) != "function") {
    resultList = [];
    
    if(!rect) {
      var rubberBBox = rubberBox.getBBox();
      var bb = {};
      
      for(var o in rubberBBox) {
        bb[o] = rubberBBox[o] / current_zoom;
      }
      rubberBBox = bb;
      
    } else {
      var rubberBBox = rect;
    }
    var i = curBBoxes.length;
    while (i--) {
      if(!rubberBBox.width || !rubberBBox.width) continue;
      if (svgedit.math.rectsIntersect(rubberBBox, curBBoxes[i].bbox))  {
        resultList.push(curBBoxes[i].elem);
      }
    }
  }
  // addToSelection expects an array, but it's ok to pass a NodeList 
  // because using square-bracket notation is allowed: 
  // http://www.w3.org/TR/DOM-Level-2-Core/ecma-script-binding.html
  return resultList;
};

// TODO(codedread): Migrate this into svgutils.js
// Function: getStrokedBBox
// Get the bounding box for one or more stroked and/or transformed elements
// 
// Parameters:
// elems - Array with DOM elements to check
// 
// Returns:
// A single bounding box object
getStrokedBBox = this.getStrokedBBox = function(elems) {
  if(!elems) elems = getVisibleElements();
  if(!elems.length) return false;
  
  // Make sure the expected BBox is returned if the element is a group
  var getCheckedBBox = function(elem) {
  
    try {
      // TODO: Fix issue with rotated groups. Currently they work
      // fine in FF, but not in other browsers (same problem mentioned
      // in Issue 339 comment #2).
      
      var bb = svgedit.utilities.getBBox(elem);
      
      var angle = svgedit.utilities.getRotationAngle(elem);
      if ((angle && angle % 90) ||
          svgedit.math.hasMatrixTransform(svgedit.transformlist.getTransformList(elem))) {
        // Accurate way to get BBox of rotated element in Firefox:
        // Put element in group and get its BBox
        
        var good_bb = false;
        
        // Get the BBox from the raw path for these elements
        var elemNames = ['ellipse','path','line','polyline','polygon'];
        if(elemNames.indexOf(elem.tagName) >= 0) {
          bb = good_bb = canvas.convertToPath(elem, true);
        } else if(elem.tagName == 'rect') {
          // Look for radius
          var rx = elem.getAttribute('rx');
          var ry = elem.getAttribute('ry');
          if(rx || ry) {
            bb = good_bb = canvas.convertToPath(elem, true);
          }
        }
        
        if(!good_bb) {
          // Must use clone else FF freaks out
          var clone = elem.cloneNode(true); 
          var g = document.createElementNS(svgns, "g");
          var parent = elem.parentNode;
          parent.appendChild(g);
          g.appendChild(clone);
          bb = svgedit.utilities.bboxToObj(g.getBBox());
          parent.removeChild(g);
        }
        

        // Old method: Works by giving the rotated BBox,
        // this is (unfortunately) what Opera and Safari do
        // natively when getting the BBox of the parent group
//            var angle = angle * Math.PI / 180.0;
//            var rminx = Number.MAX_VALUE, rminy = Number.MAX_VALUE, 
//              rmaxx = Number.MIN_VALUE, rmaxy = Number.MIN_VALUE;
//            var cx = round(bb.x + bb.width/2),
//              cy = round(bb.y + bb.height/2);
//            var pts = [ [bb.x - cx, bb.y - cy], 
//                  [bb.x + bb.width - cx, bb.y - cy],
//                  [bb.x + bb.width - cx, bb.y + bb.height - cy],
//                  [bb.x - cx, bb.y + bb.height - cy] ];
//            var j = 4;
//            while (j--) {
//              var x = pts[j][0],
//                y = pts[j][1],
//                r = Math.sqrt( x*x + y*y );
//              var theta = Math.atan2(y,x) + angle;
//              x = round(r * Math.cos(theta) + cx);
//              y = round(r * Math.sin(theta) + cy);
//    
//              // now set the bbox for the shape after it's been rotated
//              if (x < rminx) rminx = x;
//              if (y < rminy) rminy = y;
//              if (x > rmaxx) rmaxx = x;
//              if (y > rmaxy) rmaxy = y;
//            }
//            
//            bb.x = rminx;
//            bb.y = rminy;
//            bb.width = rmaxx - rminx;
//            bb.height = rmaxy - rminy;
      }
      return bb;
    } catch(e) { 
      console.log(elem, e);
    } 
  };

  var full_bb;
  $.each(elems, function() {
    if(full_bb) return;
    if(!this.parentNode) return;
    full_bb = getCheckedBBox(this);
  });
  
  // This shouldn't ever happen...
  if(full_bb == null) return null;
  
  // full_bb doesn't include the stoke, so this does no good!
//    if(elems.length == 1) return full_bb;
  
  var max_x = full_bb.x + full_bb.width;
  var max_y = full_bb.y + full_bb.height;
  var min_x = full_bb.x;
  var min_y = full_bb.y;
  
  // FIXME: same re-creation problem with this function as getCheckedBBox() above
  var getOffset = function(elem) {
    var sw = elem.getAttribute("stroke-width");
    var offset = 0;
    if (elem.getAttribute("stroke") != "none" && !isNaN(sw)) {
      offset += sw/2;
    }
    return offset;
  }
  var bboxes = [];
  $.each(elems, function(i, elem) {
    var cur_bb = getCheckedBBox(elem);
    if(cur_bb) {
      var offset = getOffset(elem);
      min_x = Math.min(min_x, cur_bb.x - offset);
      min_y = Math.min(min_y, cur_bb.y - offset);
      bboxes.push(cur_bb);
    }
  });
  
  full_bb.x = min_x;
  full_bb.y = min_y;
  
  $.each(elems, function(i, elem) {
    var cur_bb = bboxes[i];
    // ensure that elem is really an element node
    if (cur_bb && elem.nodeType == 1) {
      var offset = getOffset(elem);
      max_x = Math.max(max_x, cur_bb.x + cur_bb.width + offset);
      max_y = Math.max(max_y, cur_bb.y + cur_bb.height + offset);
    }
  });
  
  full_bb.width = max_x - min_x;
  full_bb.height = max_y - min_y;
  return full_bb;
}

// Function: getVisibleElements
// Get all elements that have a BBox (excludes <defs>, <title>, etc).
// Note that 0-opacity, off-screen etc elements are still considered "visible"
// for this function
//
// Parameters:
// parent - The parent DOM element to search within
//
// Returns:
// An array with all "visible" elements.
var getVisibleElements = this.getVisibleElements = function(parent) {
  if(!parent) parent = $(svgcontent).children(); // Prevent layers from being included
  if (parent.find("#canvas_background").length) parent.splice(0, 1) // Prevent background from being included
  var contentElems = [];
  $(parent).children().each(function(i, elem) {
    try {
      if (elem.getBBox()) {
        contentElems.push(elem);
      }
    } catch(e) {}
  });
  return contentElems.reverse();
};

// Function: getVisibleElementsAndBBoxes
// Get all elements that have a BBox (excludes <defs>, <title>, etc).
// Note that 0-opacity, off-screen etc elements are still considered "visible"
// for this function
//
// Parameters:
// parent - The parent DOM element to search within
//
// Returns:
// An array with objects that include:
// * elem - The element
// * bbox - The element's BBox as retrieved from getStrokedBBox
var getVisibleElementsAndBBoxes = this.getVisibleElementsAndBBoxes = function(parent) {
  if(!parent) parent = $(svgcontent).children(); // Prevent layers from being included
  
  var contentElems = [];
  $(parent).children().each(function(i, elem) {
    try {
      if (elem.getBBox()) {
        contentElems.push({'elem':elem, 'bbox':getStrokedBBox([elem])});
      }
    } catch(e) {}
  });
  return contentElems.reverse();
};

// Function: groupSvgElem
// Wrap an SVG element into a group element, mark the group as 'gsvg'
//
// Parameters:
// elem - SVG element to wrap
var groupSvgElem = this.groupSvgElem = function(elem) {
  var g = document.createElementNS(svgns, "g");
  elem.parentNode.replaceChild(g, elem);
  $(g).append(elem).data('gsvg', elem)[0].id = getNextId();
}

// Function: copyElem
// Create a clone of an element, updating its ID and its children's IDs when needed
//
// Parameters:
// el - DOM element to clone
//
// Returns: The cloned element
var copyElem = function(el) {
  var new_el = document.createElementNS(el.namespaceURI, el.nodeName);
  // set the copied element's new id
  new_el.removeAttribute("id");
  // manually create a copy of the element
  $.each(el.attributes, function(i, attr) {
    if (attr.localName != '-moz-math-font-style') {
      new_el.setAttributeNS(attr.namespaceURI, attr.nodeName, attr.nodeValue);
    }
  });
  
  // Opera's "d" value needs to be reset for Opera/Win/non-EN
  // Also needed for webkit (else does not keep curved segments on clone)
  if(svgedit.browser.isWebkit() && el.nodeName == 'path') {
    var fixed_d = pathActions.convertPath(el);
    new_el.setAttribute('d', fixed_d);
  }

  // now create copies of all children
  $.each(el.childNodes, function(i, child) {
    switch(child.nodeType) {
      case 1: // element node
        new_el.appendChild(copyElem(child));
        break;
      case 3: // text node
        new_el.textContent = child.nodeValue;
        break;
      default:
        break;
    }
  });
  
  if($(el).data('gsvg')) {
    $(new_el).data('gsvg', new_el.firstChild);
  } else if($(el).data('symbol')) {
    var ref = $(el).data('symbol');
    $(new_el).data('ref', ref).data('symbol', ref);
  }
  else if(new_el.tagName == 'image') {
    preventClickDefault(new_el);
  }
  new_el.id = getNextId();
  return new_el;
};

// Set scope for these functions
var getId, getNextId, call;

(function(c) {

  // Object to contain editor event names and callback functions
  var events = {};

  getId = c.getId = function() { return getCurrentDrawing().getId(); };
  getNextId = c.getNextId = function() { return getCurrentDrawing().getNextId(); };
  
  // Function: call
  // Run the callback function associated with the given event
  //
  // Parameters:
  // event - String with the event name
  // arg - Argument to pass through to the callback function
  call = c.call = function(event, arg) {
    if (events[event]) {
      return events[event](this, arg);
    }
  };
  
  // Function: bind
  // Attaches a callback function to an event
  //
  // Parameters:
  // event - String indicating the name of the event
  // f - The callback function to bind to the event
  // 
  // Return:
  // The previous event
  c.bind = function(event, f) {
    var old = events[event];
    events[event] = f;
    return old;
  };
  
}(canvas));

// Function: canvas.prepareSvg
// Runs the SVG Document through the sanitizer and then updates its paths.
//
// Parameters:
// newDoc - The SVG DOM document
this.prepareSvg = function(newDoc) {
  this.sanitizeSvg(newDoc.documentElement);

  // convert paths into absolute commands
  var paths = newDoc.getElementsByTagNameNS(svgns, "path");
  for (var i = 0, len = paths.length; i < len; ++i) {
    var path = paths[i];
    path.setAttribute('d', pathActions.convertPath(path));
    pathActions.fixEnd(path);
  }
};

// Function getRefElem
// Get the reference element associated with the given attribute value
//
// Parameters:
// attrVal - The attribute value as a string
var getRefElem = this.getRefElem = function(attrVal) {
  return getElem(getUrlFromAttr(attrVal).substr(1));
}

// Function: ffClone
// Hack for Firefox bugs where text element features aren't updated or get 
// messed up. See issue 136 and issue 137.
// This function clones the element and re-selects it 
// TODO: Test for this bug on load and add it to "support" object instead of 
// browser sniffing
//
// Parameters: 
// elem - The (text) DOM element to clone
var ffClone = function(elem) {
  if(!svgedit.browser.isGecko()) return elem;
  var clone = elem.cloneNode(true)
  elem.parentNode.insertBefore(clone, elem);
  elem.parentNode.removeChild(elem);
  selectorManager.releaseSelector(elem);
  selectedElements[0] = clone;
  selectorManager.requestSelector(clone).showGrips(true);
  return clone;
}


// this.each is deprecated, if any extension used this it can be recreated by doing this:
// $(canvas.getRootElem()).children().each(...)

// this.each = function(cb) {
//  $(svgroot).children().each(cb);
// };


// Function: setRotationAngle
// Removes any old rotations if present, prepends a new rotation at the
// transformed center
//
// Parameters:
// val - The new rotation angle in degrees
// preventUndo - Boolean indicating whether the action should be undoable or not
this.setRotationAngle = function(val, preventUndo) {
  // ensure val is the proper type
  val = parseFloat(val);
  var elem = selectedElements[0];
  if (!elem) return;
  var oldTransform = elem.getAttribute("transform");
  var bbox = svgedit.utilities.getBBox(elem);
  var cx = bbox.x+bbox.width/2, cy = bbox.y+bbox.height/2;
  var tlist = getTransformList(elem);
  
  // only remove the real rotational transform if present (i.e. at index=0)
  if (tlist.numberOfItems > 0) {
    var xform = tlist.getItem(0);
    if (xform.type == 4) {
      tlist.removeItem(0);
    }
  }
  // find R_nc and insert it
  if (val != 0) {
    var center = transformPoint(cx,cy,transformListToTransform(tlist).matrix);
    var R_nc = svgroot.createSVGTransform();
    R_nc.setRotate(val, center.x, center.y);
    if(tlist.numberOfItems) {
      tlist.insertItemBefore(R_nc, 0);
    } else {
      tlist.appendItem(R_nc);
    }
  }
  else if (tlist.numberOfItems == 0) {
    elem.removeAttribute("transform");
  }
  
  if (!preventUndo) {
    // we need to undo it, then redo it so it can be undo-able! :)
    // TODO: figure out how to make changes to transform list undo-able cross-browser?
    var newTransform = elem.getAttribute("transform");
    elem.setAttribute("transform", oldTransform);
    changeSelectedAttribute("transform",newTransform,selectedElements);
    call("changed", selectedElements);
  }
  var pointGripContainer = getElem("pathpointgrip_container");
//    if(elem.nodeName == "path" && pointGripContainer) {
//      pathActions.setPointContainerTransform(elem.getAttribute("transform"));
//    }
  var selector = selectorManager.requestSelector(selectedElements[0]);
  selector.resize();
  selector.updateGripCursors(val);
};

// Function: recalculateAllSelectedDimensions
// Runs recalculateDimensions on the selected elements, 
// adding the changes to a single batch command
var recalculateAllSelectedDimensions = this.recalculateAllSelectedDimensions = function() {
  var text = (current_resize_mode == "none" ? "position" : "size");
  var batchCmd = new BatchCommand(text);

  var i = selectedElements.length;
  while(i--) {
    var elem = selectedElements[i];
//      if(getRotationAngle(elem) && !hasMatrixTransform(getTransformList(elem))) continue;
    var cmd = recalculateDimensions(elem);
    if (cmd) {
      batchCmd.addSubCommand(cmd);
    }
  }

  if (!batchCmd.isEmpty()) {
    addCommandToHistory(batchCmd);
    call("changed", selectedElements);
  }
};

// this is how we map paths to our preferred relative segment types
var pathMap = [0, 'z', 'M', 'm', 'L', 'l', 'C', 'c', 'Q', 'q', 'A', 'a', 
          'H', 'h', 'V', 'v', 'S', 's', 'T', 't'];
          
// Debug tool to easily see the current matrix in the browser's console
var logMatrix = function(m) {
  console.log([m.a,m.b,m.c,m.d,m.e,m.f]);
};

// Function: remapElement
// Applies coordinate changes to an element based on the given matrix
//
// Parameters:
// selected - DOM element to be changed
// changes - Object with changes to be remapped
// m - Matrix object to use for remapping coordinates
var remapElement = this.remapElement = function(selected,changes,m) {

  var remap = function(x,y) { return transformPoint(x,y,m); },
    scalew = function(w) { return m.a*w; },
    scaleh = function(h) { return m.d*h; },
    doSnapping = curConfig.gridSnapping && selected.parentNode.parentNode.localName === "svg",
    finishUp = function() {
      if(doSnapping) for(var o in changes) changes[o] = snapToGrid(changes[o]);
      assignAttributes(selected, changes, 1000, true);
    }
    box = svgedit.utilities.getBBox(selected);
  
  for(var i = 0; i < 2; i++) {
    var type = i === 0 ? 'fill' : 'stroke';
    var attrVal = selected.getAttribute(type);
    if(attrVal && attrVal.indexOf('url(') === 0) {
      if(m.a < 0 || m.d < 0) {
        var grad = getRefElem(attrVal);
        var newgrad = grad.cloneNode(true);
  
        if(m.a < 0) {
          //flip x
          var x1 = newgrad.getAttribute('x1');
          var x2 = newgrad.getAttribute('x2');
          newgrad.setAttribute('x1', -(x1 - 1));
          newgrad.setAttribute('x2', -(x2 - 1));
        } 
        
        if(m.d < 0) {
          //flip y
          var y1 = newgrad.getAttribute('y1');
          var y2 = newgrad.getAttribute('y2');
          newgrad.setAttribute('y1', -(y1 - 1));
          newgrad.setAttribute('y2', -(y2 - 1));
        }
        newgrad.id = getNextId();
        findDefs().appendChild(newgrad);
        selected.setAttribute(type, 'url(#' + newgrad.id + ')');
      }
      
      // Not really working :(
//      if(selected.tagName === 'path') {
//        reorientGrads(selected, m);
//      }
    }
  }


  var elName = selected.tagName;
  if(elName === "g" || elName === "text" || elName === "use") {
    // if it was a translate, then just update x,y
    if (m.a == 1 && m.b == 0 && m.c == 0 && m.d == 1 && 
      (m.e != 0 || m.f != 0) ) 
    {
      // [T][M] = [M][T']
      // therefore [T'] = [M_inv][T][M]
      var existing = transformListToTransform(selected).matrix,
        t_new = matrixMultiply(existing.inverse(), m, existing);
      changes.x = parseFloat(changes.x) + t_new.e;
      changes.y = parseFloat(changes.y) + t_new.f;
    }
    else {
      // we just absorb all matrices into the element and don't do any remapping
      var chlist = getTransformList(selected);
      var mt = svgroot.createSVGTransform();
      mt.setMatrix(matrixMultiply(transformListToTransform(chlist).matrix,m));
      chlist.clear();
      chlist.appendItem(mt);
    }
  }
  
  // now we have a set of changes and an applied reduced transform list
  // we apply the changes directly to the DOM
  switch (elName)
  {
    case "foreignObject":
    case "rect":
    case "image":
      
      // Allow images to be inverted (give them matrix when flipped)
      if(elName === 'image' && (m.a < 0 || m.d < 0)) {
        // Convert to matrix
        var chlist = getTransformList(selected);
        var mt = svgroot.createSVGTransform();
        mt.setMatrix(matrixMultiply(transformListToTransform(chlist).matrix,m));
        chlist.clear();
        chlist.appendItem(mt);
      } else {
        var pt1 = remap(changes.x,changes.y);
        
        changes.width = scalew(changes.width);
        changes.height = scaleh(changes.height);
        
        changes.x = pt1.x + Math.min(0,changes.width);
        changes.y = pt1.y + Math.min(0,changes.height);
        changes.width = Math.abs(changes.width);
        changes.height = Math.abs(changes.height);
      }
      finishUp();
      break;
    case "ellipse":
      var c = remap(changes.cx,changes.cy);
      changes.cx = c.x;
      changes.cy = c.y;
      changes.rx = scalew(changes.rx);
      changes.ry = scaleh(changes.ry);
    
      changes.rx = Math.abs(changes.rx);
      changes.ry = Math.abs(changes.ry);
      finishUp();
      break;
    case "circle":
      var c = remap(changes.cx,changes.cy);
      changes.cx = c.x;
      changes.cy = c.y;
      // take the minimum of the new selected box's dimensions for the new circle radius
      var tbox = svgedit.math.transformBox(box.x, box.y, box.width, box.height, m);
      var w = tbox.tr.x - tbox.tl.x, h = tbox.bl.y - tbox.tl.y;
      changes.r = Math.min(w/2, h/2);

      if(changes.r) changes.r = Math.abs(changes.r);
      finishUp();
      break;
    case "line":
      var pt1 = remap(changes.x1,changes.y1),
        pt2 = remap(changes.x2,changes.y2);
      changes.x1 = pt1.x;
      changes.y1 = pt1.y;
      changes.x2 = pt2.x;
      changes.y2 = pt2.y;
      
    case "text":
      var tspan = selected.querySelectorAll('tspan');
      var i = tspan.length
      while(i--) {
        var selX = convertToNum("x", selected.getAttribute('x'));
        var tx = convertToNum("x", tspan[i].getAttribute('x'));
        var selY = convertToNum("y", selected.getAttribute('y'));
        var ty = convertToNum("y", tspan[i].getAttribute('y'));
        var offset = new Object();
        if (!isNaN(selX) && !isNaN(tx) && selX!=0 && tx!=0 && changes.x)
          offset.x = changes.x - (selX - tx);
        if (!isNaN(selY) && !isNaN(ty) && selY!=0 && ty!=0 && changes.y)
          offset.y = changes.y - (selY - ty);
        if (offset.x || offset.y)
          assignAttributes(tspan[i], offset, 1000, true);
      }
      finishUp();
      break;
    case "use":
      finishUp();
      break;
    case "g":
      var gsvg = $(selected).data('gsvg');
      if(gsvg) {
        assignAttributes(gsvg, changes, 1000, true);
      }
      break;
    case "polyline":
    case "polygon":
      var len = changes.points.length;
      for (var i = 0; i < len; ++i) {
        var pt = changes.points[i];
        pt = remap(pt.x,pt.y);
        changes.points[i].x = pt.x;
        changes.points[i].y = pt.y;
      }

      var len = changes.points.length;
      var pstr = "";
      for (var i = 0; i < len; ++i) {
        var pt = changes.points[i];
        pstr += pt.x + "," + pt.y + " ";
      }
      selected.setAttribute("points", pstr);
      break;
    case "path":
    
      var segList = selected.pathSegList;
      var len = segList.numberOfItems;
      changes.d = new Array(len);
      for (var i = 0; i < len; ++i) {
        var seg = segList.getItem(i);
        changes.d[i] = {
          type: seg.pathSegType,
          x: seg.x,
          y: seg.y,
          x1: seg.x1,
          y1: seg.y1,
          x2: seg.x2,
          y2: seg.y2,
          r1: seg.r1,
          r2: seg.r2,
          angle: seg.angle,
          largeArcFlag: seg.largeArcFlag,
          sweepFlag: seg.sweepFlag
        };
      }
      
      var len = changes.d.length,
        firstseg = changes.d[0],
        currentpt = remap(firstseg.x,firstseg.y);
      changes.d[0].x = currentpt.x;
      changes.d[0].y = currentpt.y;
      for (var i = 1; i < len; ++i) {
        var seg = changes.d[i];
        var type = seg.type;
        // if absolute or first segment, we want to remap x, y, x1, y1, x2, y2
        // if relative, we want to scalew, scaleh
        if (type % 2 == 0) { // absolute
          var thisx = (seg.x != undefined) ? seg.x : currentpt.x, // for V commands
            thisy = (seg.y != undefined) ? seg.y : currentpt.y, // for H commands
            pt = remap(thisx,thisy),
            pt1 = remap(seg.x1,seg.y1),
            pt2 = remap(seg.x2,seg.y2);
          seg.x = pt.x;
          seg.y = pt.y;
          seg.x1 = pt1.x;
          seg.y1 = pt1.y;
          seg.x2 = pt2.x;
          seg.y2 = pt2.y;
          seg.r1 = scalew(seg.r1),
          seg.r2 = scaleh(seg.r2);
        }
        else { // relative
          seg.x = scalew(seg.x);
          seg.y = scaleh(seg.y);
          seg.x1 = scalew(seg.x1);
          seg.y1 = scaleh(seg.y1);
          seg.x2 = scalew(seg.x2);
          seg.y2 = scaleh(seg.y2);
          seg.r1 = scalew(seg.r1),
          seg.r2 = scaleh(seg.r2);
        }
      } // for each segment
    
      var dstr = "";
      var len = changes.d.length;
      for (var i = 0; i < len; ++i) {
        var seg = changes.d[i];
        var type = seg.type;
        dstr += pathMap[type];
        switch(type) {
          case 13: // relative horizontal line (h)
          case 12: // absolute horizontal line (H)
            dstr += seg.x + " ";
            break;
          case 15: // relative vertical line (v)
          case 14: // absolute vertical line (V)
            dstr += seg.y + " ";
            break;
          case 3: // relative move (m)
          case 5: // relative line (l)
          case 19: // relative smooth quad (t)
          case 2: // absolute move (M)
          case 4: // absolute line (L)
          case 18: // absolute smooth quad (T)
            dstr += seg.x + "," + seg.y + " ";
            break;
          case 7: // relative cubic (c)
          case 6: // absolute cubic (C)
            dstr += seg.x1 + "," + seg.y1 + " " + seg.x2 + "," + seg.y2 + " " +
               seg.x + "," + seg.y + " ";
            break;
          case 9: // relative quad (q) 
          case 8: // absolute quad (Q)
            dstr += seg.x1 + "," + seg.y1 + " " + seg.x + "," + seg.y + " ";
            break;
          case 11: // relative elliptical arc (a)
          case 10: // absolute elliptical arc (A)
            dstr += seg.r1 + "," + seg.r2 + " " + seg.angle + " " + (+seg.largeArcFlag) +
              " " + (+seg.sweepFlag) + " " + seg.x + "," + seg.y + " ";
            break;
          case 17: // relative smooth cubic (s)
          case 16: // absolute smooth cubic (S)
            dstr += seg.x2 + "," + seg.y2 + " " + seg.x + "," + seg.y + " ";
            break;
        }
      }

      selected.setAttribute("d", dstr);
      break;
  }
};

// Function: updateClipPath
// Updates a <clipPath>s values based on the given translation of an element
//
// Parameters:
// attr - The clip-path attribute value with the clipPath's ID
// tx - The translation's x value
// ty - The translation's y value
var updateClipPath = function(attr, tx, ty) {
  var path = getRefElem(attr).firstChild;
  
  var cp_xform = getTransformList(path);
  
  var newxlate = svgroot.createSVGTransform();
  newxlate.setTranslate(tx, ty);

  cp_xform.appendItem(newxlate);
  
  // Update clipPath's dimensions
  recalculateDimensions(path);
}

// Function: recalculateDimensions
// Decides the course of action based on the element's transform list
//
// Parameters:
// selected - The DOM element to recalculate
//
// Returns: 
// Undo command object with the resulting change
var recalculateDimensions = this.recalculateDimensions = function(selected) {
  if (selected == null) return null;
  
  var tlist = getTransformList(selected);
  
  // remove any unnecessary transforms
  if (tlist && tlist.numberOfItems > 0) {
    var k = tlist.numberOfItems;
    while (k--) {
      var xform = tlist.getItem(k);
      if (xform.type === 0) {
        tlist.removeItem(k);
      }
      // remove identity matrices
      else if (xform.type === 1) {
        if (svgedit.math.isIdentity(xform.matrix)) {
          tlist.removeItem(k);
        }
      }
      // remove zero-degree rotations
      else if (xform.type === 4) {
        if (xform.angle === 0) {
          tlist.removeItem(k);
        }
      }
    }
    // End here if all it has is a rotation
    if(tlist.numberOfItems === 1 && getRotationAngle(selected)) return null;
  }
  
  // if this element had no transforms, we are done
  if (!tlist || tlist.numberOfItems == 0) {
    selected.removeAttribute("transform");
    return null;
  }
  
  // TODO: Make this work for more than 2
  if (tlist) {
    var k = tlist.numberOfItems;
    var mxs = [];
    while (k--) {
      var xform = tlist.getItem(k);
      if (xform.type === 1) {
        mxs.push([xform.matrix, k]);
      } else if(mxs.length) {
        mxs = [];
      }
    }
    if(mxs.length === 2) {
      var m_new = svgroot.createSVGTransformFromMatrix(matrixMultiply(mxs[1][0], mxs[0][0]));
      tlist.removeItem(mxs[0][1]);
      tlist.removeItem(mxs[1][1]);
      tlist.insertItemBefore(m_new, mxs[1][1]);
    }
    
    // combine matrix + translate
    k = tlist.numberOfItems;
    if(k >= 2 && tlist.getItem(k-2).type === 1 && tlist.getItem(k-1).type === 2) {
      var mt = svgroot.createSVGTransform();
      
      var m = matrixMultiply(
        tlist.getItem(k-2).matrix, 
        tlist.getItem(k-1).matrix
      );    
      mt.setMatrix(m);
      tlist.removeItem(k-2);
      tlist.removeItem(k-2);
      tlist.appendItem(mt);
    }
  }
  
  // If it still has a single [M] or [R][M], return null too (prevents BatchCommand from being returned).
  switch ( selected.tagName ) {
    // Ignore these elements, as they can absorb the [M]
    case 'line':
    case 'polyline':
    case 'polygon':
    case 'path':
      break;
    default:
      if(
        (tlist.numberOfItems === 1 && tlist.getItem(0).type === 1)
        ||  (tlist.numberOfItems === 2 && tlist.getItem(0).type === 1 && tlist.getItem(0).type === 4)
      ) {
        return null;
      }
  }
  
  // Grouped SVG element 
  var gsvg = $(selected).data('gsvg');
  
  // we know we have some transforms, so set up return variable   
  var batchCmd = new BatchCommand("Transform");
  
  // store initial values that will be affected by reducing the transform list
  var changes = {}, initial = null, attrs = [];
  switch (selected.tagName)
  {
    case "line":
      attrs = ["x1", "y1", "x2", "y2"];
      break;
    case "circle":
      attrs = ["cx", "cy", "r"];
      break;
    case "ellipse":
      attrs = ["cx", "cy", "rx", "ry"];
      break;
    case "foreignObject":
    case "rect":
    case "image":
      attrs = ["width", "height", "x", "y"];
      break;
    case "use":
    case "text":
    case "tspan":
      attrs = ["x", "y"];
      break;
    case "polygon":
    case "polyline":
      initial = {};
      initial["points"] = selected.getAttribute("points");
      var list = selected.points;
      var len = list.numberOfItems;
      changes["points"] = new Array(len);
      for (var i = 0; i < len; ++i) {
        var pt = list.getItem(i);
        changes["points"][i] = {x:pt.x,y:pt.y};
      }
      break;
    case "path":
      initial = {};
      initial["d"] = selected.getAttribute("d");
      changes["d"] = selected.getAttribute("d");
      break;
  } // switch on element type to get initial values
  
  if(attrs.length) {
    changes = $(selected).attr(attrs);
    $.each(changes, function(attr, val) {
      changes[attr] = convertToNum(attr, val);
    });
  } else if(gsvg) {
    // GSVG exception
    changes = {
      x: $(gsvg).attr('x') || 0,
      y: $(gsvg).attr('y') || 0
    };
  }
  
  // if we haven't created an initial array in polygon/polyline/path, then 
  // make a copy of initial values and include the transform
  if (initial == null) {
    initial = $.extend(true, {}, changes);
    $.each(initial, function(attr, val) {
      initial[attr] = convertToNum(attr, val);
    });
  }
  // save the start transform value too
  initial["transform"] = start_transform ? start_transform : "";
  
  // if it's a regular group, we have special processing to flatten transforms
  if ((selected.tagName == "g" && !gsvg) || selected.tagName == "a") {
    var box = svgedit.utilities.getBBox(selected),
      oldcenter = {x: box.x+box.width/2, y: box.y+box.height/2},
      newcenter = transformPoint(box.x+box.width/2, box.y+box.height/2,
              transformListToTransform(tlist).matrix),
      m = svgroot.createSVGMatrix();
    
    
    // temporarily strip off the rotate and save the old center
    var gangle = getRotationAngle(selected);
    if (gangle) {
      var a = gangle * Math.PI / 180;
      if ( Math.abs(a) > (1.0e-10) ) {
        var s = Math.sin(a)/(1 - Math.cos(a));
      } else {
        // FIXME: This blows up if the angle is exactly 0!
        var s = 2/a;
      }
      for (var i = 0; i < tlist.numberOfItems; ++i) {
        var xform = tlist.getItem(i);
        if (xform.type == 4) {
          // extract old center through mystical arts
          var rm = xform.matrix;
          oldcenter.y = (s*rm.e + rm.f)/2;
          oldcenter.x = (rm.e - s*rm.f)/2;
          tlist.removeItem(i);
          break;
        }
      }
    }
    var tx = 0, ty = 0,
      operation = 0,
      N = tlist.numberOfItems;

    if(N) {
      var first_m = tlist.getItem(0).matrix;
    }

    // first, if it was a scale then the second-last transform will be it
    if (N >= 3 && tlist.getItem(N-2).type == 3 && 
      tlist.getItem(N-3).type == 2 && tlist.getItem(N-1).type == 2) 
    {
      operation = 3; // scale
    
      // if the children are unrotated, pass the scale down directly
      // otherwise pass the equivalent matrix() down directly
      var tm = tlist.getItem(N-3).matrix,
        sm = tlist.getItem(N-2).matrix,
        tmn = tlist.getItem(N-1).matrix;
    
      var children = selected.childNodes;
      var c = children.length;
      while (c--) {
        var child = children.item(c);
        tx = 0;
        ty = 0;
        if (child.nodeType == 1) {
          var childTlist = getTransformList(child);

          // some children might not have a transform (<metadata>, <defs>, etc)
          if (!childTlist) continue;

          var m = transformListToTransform(childTlist).matrix;

          // Convert a matrix to a scale if applicable
//          if(hasMatrixTransform(childTlist) && childTlist.numberOfItems == 1) {
//            if(m.b==0 && m.c==0 && m.e==0 && m.f==0) {
//              childTlist.removeItem(0);
//              var translateOrigin = svgroot.createSVGTransform(),
//                scale = svgroot.createSVGTransform(),
//                translateBack = svgroot.createSVGTransform();
//              translateOrigin.setTranslate(0, 0);
//              scale.setScale(m.a, m.d);
//              translateBack.setTranslate(0, 0);
//              childTlist.appendItem(translateBack);
//              childTlist.appendItem(scale);
//              childTlist.appendItem(translateOrigin);
//            }
//          }
        
          var angle = getRotationAngle(child);
          var old_start_transform = start_transform;
          var childxforms = [];
          start_transform = child.getAttribute("transform");
          if(angle || hasMatrixTransform(childTlist)) {
            var e2t = svgroot.createSVGTransform();
            e2t.setMatrix(matrixMultiply(tm, sm, tmn, m));
            childTlist.clear();
            childTlist.appendItem(e2t);
            childxforms.push(e2t);
          }
          // if not rotated or skewed, push the [T][S][-T] down to the child
          else {
            // update the transform list with translate,scale,translate
            
            // slide the [T][S][-T] from the front to the back
            // [T][S][-T][M] = [M][T2][S2][-T2]
            
            // (only bringing [-T] to the right of [M])
            // [T][S][-T][M] = [T][S][M][-T2]
            // [-T2] = [M_inv][-T][M]
            var t2n = matrixMultiply(m.inverse(), tmn, m);
            // [T2] is always negative translation of [-T2]
            var t2 = svgroot.createSVGMatrix();
            t2.e = -t2n.e;
            t2.f = -t2n.f;
            
            // [T][S][-T][M] = [M][T2][S2][-T2]
            // [S2] = [T2_inv][M_inv][T][S][-T][M][-T2_inv]
            var s2 = matrixMultiply(t2.inverse(), m.inverse(), tm, sm, tmn, m, t2n.inverse());

            var translateOrigin = svgroot.createSVGTransform(),
              scale = svgroot.createSVGTransform(),
              translateBack = svgroot.createSVGTransform();
            translateOrigin.setTranslate(t2n.e, t2n.f);
            scale.setScale(s2.a, s2.d);
            translateBack.setTranslate(t2.e, t2.f);
            childTlist.appendItem(translateBack);
            childTlist.appendItem(scale);
            childTlist.appendItem(translateOrigin);
            childxforms.push(translateBack);
            childxforms.push(scale);
            childxforms.push(translateOrigin);
//            logMatrix(translateBack.matrix);
//            logMatrix(scale.matrix);
          } // not rotated
          batchCmd.addSubCommand( recalculateDimensions(child) );
          // TODO: If any <use> have this group as a parent and are 
          // referencing this child, then we need to impose a reverse 
          // scale on it so that when it won't get double-translated
//            var uses = selected.getElementsByTagNameNS(svgns, "use");
//            var href = "#"+child.id;
//            var u = uses.length;
//            while (u--) {
//              var useElem = uses.item(u);
//              if(href == getHref(useElem)) {
//                var usexlate = svgroot.createSVGTransform();
//                usexlate.setTranslate(-tx,-ty);
//                getTransformList(useElem).insertItemBefore(usexlate,0);
//                batchCmd.addSubCommand( recalculateDimensions(useElem) );
//              }
//            }
          start_transform = old_start_transform;
        } // element
      } // for each child
      // Remove these transforms from group
      tlist.removeItem(N-1);
      tlist.removeItem(N-2);
      tlist.removeItem(N-3);
    }
    else if (N >= 3 && tlist.getItem(N-1).type == 1)
    {
      operation = 3; // scale
      m = transformListToTransform(tlist).matrix;
      var e2t = svgroot.createSVGTransform();
      e2t.setMatrix(m);
      tlist.clear();
      tlist.appendItem(e2t);
    }     
    // next, check if the first transform was a translate 
    // if we had [ T1 ] [ M ] we want to transform this into [ M ] [ T2 ]
    // therefore [ T2 ] = [ M_inv ] [ T1 ] [ M ]
    else if ( (N == 1 || (N > 1 && tlist.getItem(1).type != 3)) && 
      tlist.getItem(0).type == 2) 
    {
      operation = 2; // translate
      var T_M = transformListToTransform(tlist).matrix;
      tlist.removeItem(0);
      var M_inv = transformListToTransform(tlist).matrix.inverse();
      var M2 = matrixMultiply( M_inv, T_M );
      
      tx = M2.e;
      ty = M2.f;

      if (tx != 0 || ty != 0) {
        // we pass the translates down to the individual children
        var children = selected.childNodes;
        var c = children.length;
        
        var clipPaths_done = [];
        
        while (c--) {
          var child = children.item(c);
          if (child.nodeType == 1) {
          
            // Check if child has clip-path
            if(child.getAttribute('clip-path')) {
              // tx, ty
              var attr = child.getAttribute('clip-path');
              if(clipPaths_done.indexOf(attr) === -1) {
                updateClipPath(attr, tx, ty);
                clipPaths_done.push(attr);
              }             
            }

            var old_start_transform = start_transform;
            start_transform = child.getAttribute("transform");
            
            var childTlist = getTransformList(child);
            // some children might not have a transform (<metadata>, <defs>, etc)
            if (childTlist) {
              var newxlate = svgroot.createSVGTransform();
              newxlate.setTranslate(tx,ty);
              if(childTlist.numberOfItems) {
                childTlist.insertItemBefore(newxlate, 0);
              } else {
                childTlist.appendItem(newxlate);
              }
              batchCmd.addSubCommand( recalculateDimensions(child) );
              // If any <use> have this group as a parent and are 
              // referencing this child, then impose a reverse translate on it
              // so that when it won't get double-translated
              var uses = selected.getElementsByTagNameNS(svgns, "use");
              var href = "#"+child.id;
              var u = uses.length;
              while (u--) {
                var useElem = uses.item(u);
                if(href == getHref(useElem)) {
                  var usexlate = svgroot.createSVGTransform();
                  usexlate.setTranslate(-tx,-ty);
                  getTransformList(useElem).insertItemBefore(usexlate,0);
                  batchCmd.addSubCommand( recalculateDimensions(useElem) );
                }
              }
              start_transform = old_start_transform;
            }
          }
        }
        
        clipPaths_done = [];
        
        start_transform = old_start_transform;
      }
    }
    // else, a matrix imposition from a parent group
    // keep pushing it down to the children
    else if (N == 1 && tlist.getItem(0).type == 1 && !gangle) {
      operation = 1;
      var m = tlist.getItem(0).matrix,
        children = selected.childNodes,
        c = children.length;
      while (c--) {
        var child = children.item(c);
        if (child.nodeType == 1) {
          var old_start_transform = start_transform;
          start_transform = child.getAttribute("transform");
          var childTlist = getTransformList(child);
          
          if (!childTlist) continue;
          
          var em = matrixMultiply(m, transformListToTransform(childTlist).matrix);
          var e2m = svgroot.createSVGTransform();
          e2m.setMatrix(em);
          childTlist.clear();
          childTlist.appendItem(e2m,0);
          
          batchCmd.addSubCommand( recalculateDimensions(child) );
          start_transform = old_start_transform;
          
          // Convert stroke
          // TODO: Find out if this should actually happen somewhere else
          var sw = child.getAttribute("stroke-width");
          if (child.getAttribute("stroke") !== "none" && !isNaN(sw)) {
            var avg = (Math.abs(em.a) + Math.abs(em.d)) / 2;
            child.setAttribute('stroke-width', sw * avg);
          }

        }
      }
      tlist.clear();
    }
    // else it was just a rotate
    else {
      if (gangle) {
        var newRot = svgroot.createSVGTransform();
        newRot.setRotate(gangle,newcenter.x,newcenter.y);
        if(tlist.numberOfItems) {
          tlist.insertItemBefore(newRot, 0);
        } else {
          tlist.appendItem(newRot);
        }
      }
      if (tlist.numberOfItems == 0) {
        selected.removeAttribute("transform");
      }
      return null;      
    }
    
    // if it was a translate, put back the rotate at the new center
    if (operation == 2) {
      if (gangle) {
        newcenter = {
          x: oldcenter.x + first_m.e,
          y: oldcenter.y + first_m.f
        };
      
        var newRot = svgroot.createSVGTransform();
        newRot.setRotate(gangle,newcenter.x,newcenter.y);
        if(tlist.numberOfItems) {
          tlist.insertItemBefore(newRot, 0);
        } else {
          tlist.appendItem(newRot);
        }
      }
    }
    // if it was a resize
    else if (operation == 3) {
      var m = transformListToTransform(tlist).matrix;
      var roldt = svgroot.createSVGTransform();
      roldt.setRotate(gangle, oldcenter.x, oldcenter.y);
      var rold = roldt.matrix;
      var rnew = svgroot.createSVGTransform();
      rnew.setRotate(gangle, newcenter.x, newcenter.y);
      var rnew_inv = rnew.matrix.inverse(),
        m_inv = m.inverse(),
        extrat = matrixMultiply(m_inv, rnew_inv, rold, m);

      tx = extrat.e;
      ty = extrat.f;

      if (tx != 0 || ty != 0) {
        // now push this transform down to the children
        // we pass the translates down to the individual children
        var children = selected.childNodes;
        var c = children.length;
        while (c--) {
          var child = children.item(c);
          if (child.nodeType == 1) {
            var old_start_transform = start_transform;
            start_transform = child.getAttribute("transform");
            var childTlist = getTransformList(child);
            var newxlate = svgroot.createSVGTransform();
            newxlate.setTranslate(tx,ty);
            if(childTlist.numberOfItems) {
              childTlist.insertItemBefore(newxlate, 0);
            } else {
              childTlist.appendItem(newxlate);
            }

            batchCmd.addSubCommand( recalculateDimensions(child) );
            start_transform = old_start_transform;
          }
        }
      }
      
      if (gangle) {
        if(tlist.numberOfItems) {
          tlist.insertItemBefore(rnew, 0);
        } else {
          tlist.appendItem(rnew);
        }
      }
    }
  }
  // else, it's a non-group
  else {

    // FIXME: box might be null for some elements (<metadata> etc), need to handle this
    var box = svgedit.utilities.getBBox(selected);

    // Paths (and possbly other shapes) will have no BBox while still in <defs>,
    // but we still may need to recalculate them (see issue 595).
    // TODO: Figure out how to get BBox from these elements in case they
    // have a rotation transform
    
    if(!box && selected.tagName != 'path') return null;
    

    var m = svgroot.createSVGMatrix(),
      // temporarily strip off the rotate and save the old center
      angle = getRotationAngle(selected);
    if (angle) {
      var oldcenter = {x: box.x+box.width/2, y: box.y+box.height/2},
      newcenter = transformPoint(box.x+box.width/2, box.y+box.height/2,
              transformListToTransform(tlist).matrix);
    
      var a = angle * Math.PI / 180;
      if ( Math.abs(a) > (1.0e-10) ) {
        var s = Math.sin(a)/(1 - Math.cos(a));
      } else {
        // FIXME: This blows up if the angle is exactly 0!
        var s = 2/a;
      }
      for (var i = 0; i < tlist.numberOfItems; ++i) {
        var xform = tlist.getItem(i);
        if (xform.type == 4) {
          // extract old center through mystical arts
          var rm = xform.matrix;
          oldcenter.y = (s*rm.e + rm.f)/2;
          oldcenter.x = (rm.e - s*rm.f)/2;
          tlist.removeItem(i);
          break;
        }
      }
    }
    
    // 2 = translate, 3 = scale, 4 = rotate, 1 = matrix imposition
    var operation = 0;
    var N = tlist.numberOfItems;
    
    // Check if it has a gradient with userSpaceOnUse, in which case
    // adjust it by recalculating the matrix transform.
    // TODO: Make this work in Webkit using svgedit.transformlist.SVGTransformList
    if(!svgedit.browser.isWebkit()) {
      var fill = selected.getAttribute('fill');
      if(fill && fill.indexOf('url(') === 0) {
        var paint = getRefElem(fill);
        var type = 'pattern';
        if(paint.tagName !== type) type = 'gradient';
        var attrVal = paint.getAttribute(type + 'Units');
        if(attrVal === 'userSpaceOnUse') {
          //Update the userSpaceOnUse element
          m = transformListToTransform(tlist).matrix;
          var gtlist = getTransformList(paint);
          var gmatrix = transformListToTransform(gtlist).matrix;
          m = matrixMultiply(m, gmatrix);
          var m_str = "matrix(" + [m.a,m.b,m.c,m.d,m.e,m.f].join(",") + ")";
          paint.setAttribute(type + 'Transform', m_str);
        }
      }
    }

    // first, if it was a scale of a non-skewed element, then the second-last  
    // transform will be the [S]
    // if we had [M][T][S][T] we want to extract the matrix equivalent of
    // [T][S][T] and push it down to the element
    if (N >= 3 && tlist.getItem(N-2).type == 3 && 
      tlist.getItem(N-3).type == 2 && tlist.getItem(N-1).type == 2) 
      
      // Removed this so a <use> with a given [T][S][T] would convert to a matrix. 
      // Is that bad?
      //  && selected.nodeName != "use"
    {
      operation = 3; // scale
      m = transformListToTransform(tlist,N-3,N-1).matrix;
      tlist.removeItem(N-1);
      tlist.removeItem(N-2);
      tlist.removeItem(N-3);
    } // if we had [T][S][-T][M], then this was a skewed element being resized
    // Thus, we simply combine it all into one matrix
    else if(N == 4 && tlist.getItem(N-1).type == 1) {
      operation = 3; // scale
      m = transformListToTransform(tlist).matrix;
      var e2t = svgroot.createSVGTransform();
      e2t.setMatrix(m);
      tlist.clear();
      tlist.appendItem(e2t);
      // reset the matrix so that the element is not re-mapped
      m = svgroot.createSVGMatrix();
    } // if we had [R][T][S][-T][M], then this was a rotated matrix-element  
    // if we had [T1][M] we want to transform this into [M][T2]
    // therefore [ T2 ] = [ M_inv ] [ T1 ] [ M ] and we can push [T2] 
    // down to the element
    else if ( (N == 1 || (N > 1 && tlist.getItem(1).type != 3)) && 
      tlist.getItem(0).type == 2) 
    {
      operation = 2; // translate
      var oldxlate = tlist.getItem(0).matrix,
        meq = transformListToTransform(tlist,1).matrix,
        meq_inv = meq.inverse();
      m = matrixMultiply( meq_inv, oldxlate, meq );
      tlist.removeItem(0);
    }
    // else if this child now has a matrix imposition (from a parent group)
    // we might be able to simplify
    else if (N == 1 && tlist.getItem(0).type == 1 && !angle) {
      // Remap all point-based elements
      m = transformListToTransform(tlist).matrix;
      switch (selected.tagName) {
        case 'line':
          changes = $(selected).attr(["x1","y1","x2","y2"]);
        case 'polyline':
        case 'polygon':
          changes.points = selected.getAttribute("points");
          if(changes.points) {
            var list = selected.points;
            var len = list.numberOfItems;
            changes.points = new Array(len);
            for (var i = 0; i < len; ++i) {
              var pt = list.getItem(i);
              changes.points[i] = {x:pt.x,y:pt.y};
            }
          }
        case 'path':
          changes.d = selected.getAttribute("d");
          operation = 1;
          tlist.clear();
          break;
        default:
          break;
      }
    }
    // if it was a rotation, put the rotate back and return without a command
    // (this function has zero work to do for a rotate())
    else {
      operation = 4; // rotation
      if (angle) {
        var newRot = svgroot.createSVGTransform();
        newRot.setRotate(angle,newcenter.x,newcenter.y);
        
        if(tlist.numberOfItems) {
          tlist.insertItemBefore(newRot, 0);
        } else {
          tlist.appendItem(newRot);
        }
      }
      if (tlist.numberOfItems == 0) {
        selected.removeAttribute("transform");
      }
      return null;
    }
    
    // if it was a translate or resize, we need to remap the element and absorb the xform
    if (operation == 1 || operation == 2 || operation == 3) {
      remapElement(selected,changes,m);
    } // if we are remapping
    
    // if it was a translate, put back the rotate at the new center
    if (operation == 2) {
      if (angle) {
        if(!hasMatrixTransform(tlist)) {
          newcenter = {
            x: oldcenter.x + m.e,
            y: oldcenter.y + m.f
          };
        }
        var newRot = svgroot.createSVGTransform();
        newRot.setRotate(angle, newcenter.x, newcenter.y);
        if(tlist.numberOfItems) {
          tlist.insertItemBefore(newRot, 0);
        } else {
          tlist.appendItem(newRot);
        }
      }
    }
    // [Rold][M][T][S][-T] became [Rold][M]
    // we want it to be [Rnew][M][Tr] where Tr is the
    // translation required to re-center it
    // Therefore, [Tr] = [M_inv][Rnew_inv][Rold][M]
    else if (operation == 3 && angle) {
      var m = transformListToTransform(tlist).matrix;
      var roldt = svgroot.createSVGTransform();
      roldt.setRotate(angle, oldcenter.x, oldcenter.y);
      var rold = roldt.matrix;
      var rnew = svgroot.createSVGTransform();
      rnew.setRotate(angle, newcenter.x, newcenter.y);
      var rnew_inv = rnew.matrix.inverse();
      var m_inv = m.inverse();
      var extrat = matrixMultiply(m_inv, rnew_inv, rold, m);
    
      remapElement(selected,changes,extrat);
      if (angle) {
        if(tlist.numberOfItems) {
          tlist.insertItemBefore(rnew, 0);
        } else {
          tlist.appendItem(rnew);
        }
      }
    }
  } // a non-group

  // if the transform list has been emptied, remove it
  if (tlist.numberOfItems == 0) {
    selected.removeAttribute("transform");
  }
  
  batchCmd.addSubCommand(new ChangeElementCommand(selected, initial));
  
  return batchCmd;
};

// Root Current Transformation Matrix in user units
var root_sctm = null;

// Group: Selection

// Function: clearSelection
// Clears the selection.  The 'selected' handler is then called.
// Parameters: 
// noCall - Optional boolean that when true does not call the "selected" handler
var clearSelection = this.clearSelection = function(noCall) {
  if (selectedElements[0] != null) {
    var len = selectedElements.length;
    for (var i = 0; i < len; ++i) {
      var elem = selectedElements[i];
      if (elem == null) break;
      selectorManager.releaseSelector(elem);
      selectedElements[i] = null;
    }
//    selectedBBoxes[0] = null;
  }
  if(!noCall) call("selected", selectedElements);
};

// TODO: do we need to worry about selectedBBoxes here?


// Function: addToSelection
// Adds a list of elements to the selection.  The 'selected' handler is then called.
//
// Parameters:
// elemsToAdd - an array of DOM elements to add to the selection
// showGrips - a boolean flag indicating whether the resize grips should be shown
var addToSelection = this.addToSelection = function(elemsToAdd, showGrips) {
  if (elemsToAdd.length == 0) { return; }
  // find the first null in our selectedElements array
  var j = 0;
  
  while (j < selectedElements.length) {
    if (selectedElements[j] == null) { 
      break;
    }
    ++j;
  }

  // now add each element consecutively
  var i = elemsToAdd.length;
  while (i--) {
    var elem = elemsToAdd[i];
    if (!elem || !svgedit.utilities.getBBox(elem)) continue;

    if(elem.tagName === 'a' && elem.childNodes.length === 1) {
      // Make "a" element's child be the selected element 
      elem = elem.firstChild;
    }

    // if it's not already there, add it
    if (selectedElements.indexOf(elem) == -1) {

      selectedElements[j] = elem;

      // only the first selectedBBoxes element is ever used in the codebase these days
//      if (j == 0) selectedBBoxes[0] = svgedit.utilities.getBBox(elem);
      j++;
      var sel = selectorManager.requestSelector(elem);
  
      if (selectedElements.length > 1) {
        sel.showGrips(false);
      }
    }
  }
  call("selected", selectedElements);
  if (showGrips || selectedElements.length == 1) selectorManager.requestSelector(selectedElements[0]).showGrips(true)
  else selectorManager.requestSelector(selectedElements[0]).showGrips(false);

  // make sure the elements are in the correct order
  // See: http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-compareDocumentPosition

  selectedElements.sort(function(a,b) {
    if(a && b && a.compareDocumentPosition) {
      return 3 - (b.compareDocumentPosition(a) & 6);  
    } else if(a == null) {
      return 1;
    }
  });
  
  // Make sure first elements are not null
  while(selectedElements[0] == null) selectedElements.shift(0);
};

// Function: selectOnly()
// Selects only the given elements, shortcut for clearSelection(); addToSelection()
//
// Parameters:
// elems - an array of DOM elements to be selected
var selectOnly = this.selectOnly = function(elems, showGrips) {
  clearSelection(true);
  addToSelection(elems, showGrips);
}

// TODO: could use slice here to make this faster?
// TODO: should the 'selected' handler

// Function: removeFromSelection
// Removes elements from the selection.
//
// Parameters:
// elemsToRemove - an array of elements to remove from selection
var removeFromSelection = this.removeFromSelection = function(elemsToRemove) {
  if (selectedElements[0] == null) { return; }
  if (elemsToRemove.length == 0) { return; }

  // find every element and remove it from our array copy
  var newSelectedItems = new Array(selectedElements.length);
    j = 0,
    len = selectedElements.length;
  for (var i = 0; i < len; ++i) {
    var elem = selectedElements[i];
    if (elem) {
      // keep the item
      if (elemsToRemove.indexOf(elem) == -1) {
        newSelectedItems[j] = elem;
        j++;
      }
      else { // remove the item and its selector
        selectorManager.releaseSelector(elem);
      }
    }
  }
  // the copy becomes the master now
  selectedElements = newSelectedItems;
};

// Function: selectAllInCurrentLayer
// Clears the selection, then adds all elements in the current layer to the selection.
this.selectAllInCurrentLayer = function() {
  var current_layer = getCurrentDrawing().getCurrentLayer();
  if (current_layer) {
    current_mode = "select";
    selectOnly($(current_group || current_layer).children());
  }
};

// Function: getMouseTarget
// Gets the desired element from a mouse event
// 
// Parameters:
// evt - Event object from the mouse event
// 
// Returns:
// DOM element we want
var getMouseTarget = this.getMouseTarget = function(evt) {
  if (evt == null || evt.target == null) {
    return null;
  }
  var mouse_target = evt.target;
  
  // if it was a <use>, Opera and WebKit return the SVGElementInstance
  if (mouse_target.correspondingUseElement) mouse_target = mouse_target.correspondingUseElement;
  
  // for foreign content, go up until we find the foreignObject
  // WebKit browsers set the mouse target to the svgcanvas div 
  if ([mathns, htmlns].indexOf(mouse_target.namespaceURI) >= 0 && 
    mouse_target.id != "svgcanvas") 
  {
    while (mouse_target.nodeName != "foreignObject") {
      mouse_target = mouse_target.parentNode;
      if(!mouse_target) return svgroot;
    }
  }
  
  // Get the desired mouse_target with jQuery selector-fu
  // If it's root-like, select the root
  var current_layer = getCurrentDrawing().getCurrentLayer();
  if([svgroot, container, svgcontent, current_layer].indexOf(mouse_target) >= 0) {
    return svgroot;
  }
  
  var $target = $(mouse_target);

  // If it's a selection grip, return the grip parent
  if($target.closest('#selectorParentGroup').length) {
    // While we could instead have just returned mouse_target, 
    // this makes it easier to indentify as being a selector grip
    return selectorManager.selectorParentGroup;
  }

  while (mouse_target.parentNode && mouse_target.parentNode !== (current_group || current_layer)) {
    mouse_target = mouse_target.parentNode;
  }
  
//  
//  // go up until we hit a child of a layer
//  while (mouse_target.parentNode.parentNode.tagName == 'g') {
//    mouse_target = mouse_target.parentNode;
//  }
  // Webkit bubbles the mouse event all the way up to the div, so we
  // set the mouse_target to the svgroot like the other browsers
//  if (mouse_target.nodeName.toLowerCase() == "div") {
//    mouse_target = svgroot;
//  }
  
  return mouse_target;
};

// Mouse events
(function() {
  var d_attr = null,
    start_x = null,
    start_y = null,
    r_start_x = null,
    r_start_y = null,
    init_bbox = {},
    freehand = {
      minx: null,
      miny: null,
      maxx: null,
      maxy: null
    };
  
  // - when we are in a create mode, the element is added to the canvas
  //   but the action is not recorded until mousing up
  // - when we are in select mode, select the element, remember the position
  //   and do nothing else
  var mouseDown = function(evt)
  {
    if (canvas.spaceKey) return;
    var right_click = evt.button === 2;

    root_sctm = svgcontent.querySelector("g").getScreenCTM().inverse();

    var pt = transformPoint( evt.pageX, evt.pageY, root_sctm ),
      mouse_x = pt.x * current_zoom,
      mouse_y = pt.y * current_zoom;
      

    evt.preventDefault();

    if(right_click) {
      current_mode = "select";
      lastClickPoint = pt;
    }
    
    var x = mouse_x / current_zoom,
      y = mouse_y / current_zoom,
      mouse_target = getMouseTarget(evt);
    
    if(mouse_target.tagName === 'a' && mouse_target.childNodes.length === 1) {
      mouse_target = mouse_target.firstChild;
    }
    
    // real_x/y ignores grid-snap value
    var real_x = r_start_x = start_x = x;
    var real_y = r_start_y = start_y = y;

    if(curConfig.gridSnapping){
      x = snapToGrid(x);
      y = snapToGrid(y);
      start_x = snapToGrid(start_x);
      start_y = snapToGrid(start_y);
    }

    // if it is a selector grip, then it must be a single element selected, 
    // set the mouse_target to that and update the mode to rotate/resize
    
    if (mouse_target == selectorManager.selectorParentGroup && selectedElements[0] != null) {
      var grip = evt.target;
      var griptype = elData(grip, "type");
      // rotating
      if (griptype == "rotate") {
        current_mode = "rotate";
        current_rotate_mode = elData(grip, "dir");
      }
      // resizing
      else if(griptype == "resize") {
        current_mode = "resize";
        current_resize_mode = elData(grip, "dir");
      }
      mouse_target = selectedElements[0];
    }
    
    start_transform = mouse_target.getAttribute("transform");
    var tlist = getTransformList(mouse_target);
    switch (current_mode) {
      case "select":
        started = true;
        current_resize_mode = "none";
        if(right_click) started = false;
        
        if (mouse_target != svgroot) {
          // if this element is not yet selected, clear selection and select it
          if (selectedElements.indexOf(mouse_target) == -1) {
            // only clear selection if shift is not pressed (otherwise, add 
            // element to selection)
            if (!evt.shiftKey) {
              // No need to do the call here as it will be done on addToSelection
              clearSelection(true);
            }
            addToSelection([mouse_target]);
            justSelected = mouse_target;
            pathActions.clear();
          }
          // else if it's a path, go into pathedit mode in mouseup
          
          if(!right_click) {
            // insert a dummy transform so if the element(s) are moved it will have
            // a transform to use for its translate
            for (var i = 0; i < selectedElements.length; ++i) {
              if(selectedElements[i] == null) continue;
              var slist = getTransformList(selectedElements[i]);
              if(slist.numberOfItems) {
                slist.insertItemBefore(svgroot.createSVGTransform(), 0);
              } else {
                slist.appendItem(svgroot.createSVGTransform());
              }
            }
          }
        }
        else if(!right_click){
          clearSelection();
          current_mode = "multiselect";
          if (rubberBox == null) {
            rubberBox = selectorManager.getRubberBandBox();
          }
          r_start_x *= current_zoom;
          r_start_y *= current_zoom;
//          console.log('p',[evt.pageX, evt.pageY]);          
//          console.log('c',[evt.clientX, evt.clientY]);  
//          console.log('o',[evt.offsetX, evt.offsetY]);  
//          console.log('s',[start_x, start_y]);
          
          assignAttributes(rubberBox, {
            'x': r_start_x,
            'y': r_start_y,
            'width': 0,
            'height': 0,
            'display': 'inline'
          }, 100);
        }
        break;
      case "zoom": 
        started = true;
        if (rubberBox == null) {
          rubberBox = selectorManager.getRubberBandBox();
        }
        assignAttributes(rubberBox, {
            'x': real_x * current_zoom,
            'y': real_x * current_zoom,
            'width': 0,
            'height': 0,
            'display': 'inline'
        }, 100);
        break;
      case "resize":
        started = true;
        start_x = x;
        start_y = y;
        
        // Getting the BBox from the selection box, since we know we
        // want to orient around it
        init_bbox = svgedit.utilities.getBBox($('#selectedBox0')[0]);
        var bb = {};
        $.each(init_bbox, function(key, val) {
          bb[key] = val/current_zoom;
        });
        init_bbox = bb;
        // append three dummy transforms to the tlist so that
        // we can translate,scale,translate in mousemove
        var pos = getRotationAngle(mouse_target)?1:0;
        
        if(hasMatrixTransform(tlist)) {
          tlist.insertItemBefore(svgroot.createSVGTransform(), pos);
          tlist.insertItemBefore(svgroot.createSVGTransform(), pos);
          tlist.insertItemBefore(svgroot.createSVGTransform(), pos);
        } else {
          tlist.appendItem(svgroot.createSVGTransform());
          tlist.appendItem(svgroot.createSVGTransform());
          tlist.appendItem(svgroot.createSVGTransform());
          
          if(svgedit.browser.supportsNonScalingStroke()) {
            //Handle crash for newer Webkit: https://code.google.com/p/svg-edit/issues/detail?id=904
            //Chromium issue: https://code.google.com/p/chromium/issues/detail?id=114625
            // TODO: Remove this workaround (all isChrome blocks) once vendor fixes the issue
            var isWebkit = svgedit.browser.isWebkit();
            if(isWebkit) {
              var delayedStroke = function(ele) {
                var _stroke = ele.getAttributeNS(null, 'stroke');
                ele.removeAttributeNS(null, 'stroke');
                //Re-apply stroke after delay. Anything higher than 1 seems to cause flicker
                setTimeout(function() { ele.setAttributeNS(null, 'stroke', _stroke) }, 0);
              }
            }
            mouse_target.style.vectorEffect = 'non-scaling-stroke';
            if(isWebkit) delayedStroke(mouse_target);

            var all = mouse_target.getElementsByTagName('*'),
                len = all.length;
            for(var i = 0; i < len; i++) {
              all[i].style.vectorEffect = 'non-scaling-stroke';
              if(isWebkit) delayedStroke(all[i]);
            }
          }
        }
        break;
      case "fhellipse":
      case "fhrect":
      case "fhpath":
        started = true;
        d_attr = real_x + "," + real_y + " ";
        var stroke_w = cur_shape.stroke_width == 0?1:cur_shape.stroke_width;
        addSvgElementFromJson({
          "element": "polyline",
          "curStyles": true,
          "attr": {
            "points": d_attr,
            "id": getNextId(),
            "fill": "none",
            "opacity": cur_shape.opacity / 2,
            "stroke-linecap": "round",
            "style": "pointer-events:none"
          }
        });
        freehand.minx = real_x;
        freehand.maxx = real_x;
        freehand.miny = real_y;
        freehand.maxy = real_y;
        break;
      case "image":
        started = true;
        var newImage = addSvgElementFromJson({
          "element": "image",
          "attr": {
            "x": x,
            "y": y,
            "width": 0,
            "height": 0,
            "id": getNextId(),
            "opacity": cur_shape.opacity / 2,
            "style": "pointer-events:inherit"
          }
        });
        setHref(newImage, last_good_img_url);
        preventClickDefault(newImage);
        break;
      case "square":
        // FIXME: once we create the rect, we lose information that this was a square
        // (for resizing purposes this could be important)
      case "rect":
        started = true;
        start_x = x;
        start_y = y;
        addSvgElementFromJson({
          "element": "rect",
          "curStyles": true,
          "attr": {
            "x": x,
            "y": y,
            "width": 0,
            "height": 0,
            "id": getNextId(),
            "opacity": cur_shape.opacity / 2
          }
        });
        break;
      case "line":
        started = true;
        var stroke_w = cur_shape.stroke_width == 0?1:cur_shape.stroke_width;
        addSvgElementFromJson({
          "element": "line",
          "curStyles": true,
          "attr": {
            "x1": x,
            "y1": y,
            "x2": x,
            "y2": y,
            "id": getNextId(),
            "stroke": cur_shape.stroke,
            "stroke-width": stroke_w,
            "stroke-dasharray": cur_shape.stroke_dasharray,
            "stroke-linejoin": cur_shape.stroke_linejoin,
            "stroke-linecap": cur_shape.stroke_linecap,
            "stroke-opacity": cur_shape.stroke_opacity,
            "fill": "none",
            "opacity": cur_shape.opacity / 2,
            "style": "pointer-events:none"
          }
        });
        break;
      case "circle":
        started = true;
        addSvgElementFromJson({
          "element": "circle",
          "curStyles": true,
          "attr": {
            "cx": x,
            "cy": y,
            "r": 0,
            "id": getNextId(),
            "opacity": cur_shape.opacity / 2
          }
        });
        break;
      case "ellipse":
        started = true;
        addSvgElementFromJson({
          "element": "ellipse",
          "curStyles": true,
          "attr": {
            "cx": x,
            "cy": y,
            "rx": 0,
            "ry": 0,
            "id": getNextId(),
            "opacity": cur_shape.opacity / 2
          }
        });
        break;
      case "text":
        started = true;
        var newText = addSvgElementFromJson({
          "element": "text",
          "curStyles": true,
          "attr": {
            "x": x,
            "y": y,
            "id": getNextId(),
            "fill": cur_text.fill,
            "stroke-width": cur_text.stroke_width,
            "font-size": cur_text.font_size,
            "font-family": cur_text.font_family,
            "text-anchor": "start",
            "xml:space": "preserve",
            "opacity": cur_shape.opacity
          }
        });
//          newText.textContent = "text";
        break;
      case "path":
        // Fall through
      case "pathedit":
        start_x *= current_zoom;
        start_y *= current_zoom;
        pathActions.mouseDown(evt, mouse_target, start_x, start_y);
        started = true;
        break;
      case "textedit":
        start_x *= current_zoom;
        start_y *= current_zoom;
        textActions.mouseDown(evt, mouse_target, start_x, start_y);
        started = true;
        break;
      case "rotate":
        started = true;
        // we are starting an undoable change (a drag-rotation)
        canvas.undoMgr.beginUndoableChange("transform", selectedElements);
        document.getElementById("workarea").className = "rotate";
        break;
      default:
        // This could occur in an extension
        break;
    }
    
    var ext_result = runExtensions("mouseDown", {
      event: evt,
      start_x: start_x,
      start_y: start_y,
      selectedElements: selectedElements
    }, true);
    
    $.each(ext_result, function(i, r) {
      if(r && r.started) {
        started = true;
      }
    });
    if (current_mode) {
      document.getElementById("workarea").className = 
        (current_mode == "resize")
        ? evt.target.style.cursor
        : current_mode
      }
  };
  
  // in this function we do not record any state changes yet (but we do update
  // any elements that are still being created, moved or resized on the canvas)
  var mouseMove = function(evt) {
    if (evt.originalEvent.touches && evt.originalEvent.touches.length > 1) return;
    if (!started) return;
    if(evt.button === 1 || canvas.spaceKey) return;
    var selected = selectedElements[0],
      pt = transformPoint( evt.pageX, evt.pageY, root_sctm ),
      mouse_x = pt.x * current_zoom,
      mouse_y = pt.y * current_zoom,
      shape = getElem(getId());

    var real_x = x = mouse_x / current_zoom;
    var real_y = y = mouse_y / current_zoom;

    if(curConfig.gridSnapping){
      x = snapToGrid(x);
      y = snapToGrid(y);
    }

    evt.preventDefault();
    
    switch (current_mode)
    {
      case "select":
        // we temporarily use a translate on the element(s) being dragged
        // this transform is removed upon mousing up and the element is 
        // relocated to the new location
        if (selectedElements[0] !== null) {
          var dx = x - start_x;
          var dy = y - start_y;
          
          if(curConfig.gridSnapping){
            dx = snapToGrid(dx);
            dy = snapToGrid(dy);
          }
          
          if(evt.shiftKey) { 
            var xya = snapToAngle(start_x,start_y,x,y); x=xya.x; y=xya.y;
         }
          if (dx != 0 || dy != 0) {
            var len = selectedElements.length;
            for (var i = 0; i < len; ++i) {
              var selected = selectedElements[i];
              if (selected == null) break;
//              if (i==0) {
//                var box = svgedit.utilities.getBBox(selected);
//                  selectedBBoxes[i].x = box.x + dx;
//                  selectedBBoxes[i].y = box.y + dy;
//              }

              // update the dummy transform in our transform list
              // to be a translate
              var xform = svgroot.createSVGTransform();
              var tlist = getTransformList(selected);
              // Note that if Webkit and there's no ID for this
              // element, the dummy transform may have gotten lost.
              // This results in unexpected behaviour
              if (xya) {
                dx = xya.x - start_x
                dy = xya.y - start_y
              }
              xform.setTranslate(dx,dy);
              if(tlist.numberOfItems) {
                tlist.replaceItem(xform, 0);
              } else {
                tlist.appendItem(xform);
              }
              
              // update our internal bbox that we're tracking while dragging
              selectorManager.requestSelector(selected).resize();
            }

            //duplicate only once
            // alt drag = create a clone and save the reference             
            if(evt.altKey) {
              //clone doesn't exist yet
              if (!canvas.addClones) {
                canvas.addClones = canvas.cloneSelectedElements(0,0, xform);
                canvas.removeClones = function(){
                  if (canvas.addClones) {
                    canvas.addClones.forEach(function(clone){
                      if (clone.parentNode) clone.parentNode.removeChild(clone)
                      canvas.addClones = false;
                    })
                  }
                }
                window.addEventListener("keyup", canvas.removeClones)
              }
            }
      
            call("transition", selectedElements);
          }
          


          
          
        }
        break;
      case "multiselect":
        real_x *= current_zoom;
        real_y *= current_zoom;
        assignAttributes(rubberBox, {
          'x': Math.min(r_start_x, real_x),
          'y': Math.min(r_start_y, real_y),
          'width': Math.abs(real_x - r_start_x),
          'height': Math.abs(real_y - r_start_y)
        },100);

        // for each selected:
        // - if newList contains selected, do nothing
        // - if newList doesn't contain selected, remove it from selected
        // - for any newList that was not in selectedElements, add it to selected
        var elemsToRemove = [], elemsToAdd = [],
          newList = getIntersectionList(),
          len = selectedElements.length;
        
        for (var i = 0; i < len; ++i) {
          var ind = newList.indexOf(selectedElements[i]);
          if (ind == -1) {
            elemsToRemove.push(selectedElements[i]);
          }
          else {
            newList[ind] = null;
          }
        }
        
        len = newList.length;
        for (i = 0; i < len; ++i) { if (newList[i]) elemsToAdd.push(newList[i]); }
        
        if (elemsToRemove.length > 0) 
          canvas.removeFromSelection(elemsToRemove);
        
        if (elemsToAdd.length > 0) 
          addToSelection(elemsToAdd);
          
        break;
      case "resize":
        // we track the resize bounding box and translate/scale the selected element
        // while the mouse is down, when mouse goes up, we use this to recalculate
        // the shape's coordinates
        var tlist = getTransformList(selected),
          hasMatrix = hasMatrixTransform(tlist),
          box = hasMatrix ? init_bbox : svgedit.utilities.getBBox(selected), 
          left=box.x, top=box.y, width=box.width,
          height=box.height, dx=(x-start_x), dy=(y-start_y);
        
        if(curConfig.gridSnapping){
          dx = snapToGrid(dx);
          dy = snapToGrid(dy);
          height = snapToGrid(height);
          width = snapToGrid(width);
        }

        // if rotated, adjust the dx,dy values
        var angle = getRotationAngle(selected);
        if (angle) {
          var r = Math.sqrt( dx*dx + dy*dy ),
            theta = Math.atan2(dy,dx) - angle * Math.PI / 180.0;
          dx = r * Math.cos(theta);
          dy = r * Math.sin(theta);
        }

        // if not stretching in y direction, set dy to 0
        // if not stretching in x direction, set dx to 0
        if(current_resize_mode.indexOf("n")==-1 && current_resize_mode.indexOf("s")==-1) {
          dy = 0;
        }
        if(current_resize_mode.indexOf("e")==-1 && current_resize_mode.indexOf("w")==-1) {
          dx = 0;
        }       
        
        var ts = null,
          tx = 0, ty = 0,
          sy = height ? (height+dy)/height : 1, 
          sx = width ? (width+dx)/width : 1;
        // if we are dragging on the north side, then adjust the scale factor and ty
        if(current_resize_mode.indexOf("n") >= 0) {
          sy = height ? (height-dy)/height : 1;
          ty = height;
        }
        
        // if we dragging on the east side, then adjust the scale factor and tx
        if(current_resize_mode.indexOf("w") >= 0) {
          sx = width ? (width-dx)/width : 1;
          tx = width;
        }
        
        // update the transform list with translate,scale,translate
        var translateOrigin = svgroot.createSVGTransform(),
          scale = svgroot.createSVGTransform(),
          translateBack = svgroot.createSVGTransform();

        if(curConfig.gridSnapping){
          left = snapToGrid(left);
          tx = snapToGrid(tx);
          top = snapToGrid(top);
          ty = snapToGrid(ty);
        }

        translateOrigin.setTranslate(-(left+tx),-(top+ty));
        if(evt.shiftKey) {
          if(sx == 1) sx = sy
          else sy = sx;
        }
        scale.setScale(sx,sy);
        
        translateBack.setTranslate(left+tx,top+ty);
        if(hasMatrix) {
          var diff = angle?1:0;
          tlist.replaceItem(translateOrigin, 2+diff);
          tlist.replaceItem(scale, 1+diff);
          tlist.replaceItem(translateBack, 0+diff);
        } else {
          var N = tlist.numberOfItems;
          tlist.replaceItem(translateBack, N-3);
          tlist.replaceItem(scale, N-2);
          tlist.replaceItem(translateOrigin, N-1);
        }

        selectorManager.requestSelector(selected).resize();
        
        call("transition", selectedElements);
        
        break;
      case "zoom":
        real_x *= current_zoom;
        real_y *= current_zoom;
        assignAttributes(rubberBox, {
          'x': Math.min(r_start_x*current_zoom, real_x),
          'y': Math.min(r_start_y*current_zoom, real_y),
          'width': Math.abs(real_x - r_start_x*current_zoom),
          'height': Math.abs(real_y - r_start_y*current_zoom)
        },100);     
        break;
      case "text":
        assignAttributes(shape,{
          'x': x,
          'y': y
        },1000);
        break;
      case "line":
        if(curConfig.gridSnapping){
          x = snapToGrid(x);
          y = snapToGrid(y);
        }

        var x2 = x;
        var y2 = y;         

        if(evt.shiftKey) { var xya = snapToAngle(start_x,start_y,x2,y2); x2=xya.x; y2=xya.y; }
        
        shape.setAttributeNS(null, "x2", x2);
        shape.setAttributeNS(null, "y2", y2);
        break;
      case "foreignObject":
        // fall through
      case "square":
        // fall through
      case "rect":
      case "image":
        var square = (current_mode == 'square') || evt.shiftKey,
          w = Math.abs(x - start_x),
          h = Math.abs(y - start_y),
          new_x, new_y;
        if(square) {
          w = h = Math.max(w, h);
          new_x = start_x < x ? start_x : start_x - w;
          new_y = start_y < y ? start_y : start_y - h;
        } else {
          new_x = Math.min(start_x,x);
          new_y = Math.min(start_y,y);
        }
        if (evt.altKey){
          w *=2;
          h *=2; 
          new_x = start_x - w/2;
          new_y = start_y - h/2;
        }
  
        if(curConfig.gridSnapping){
          w = snapToGrid(w);
          h = snapToGrid(h);
          new_x = snapToGrid(new_x);
          new_y = snapToGrid(new_y);
        }

        assignAttributes(shape,{
          'width': w,
          'height': h,
          'x': new_x,
          'y': new_y
        },1000);
        
        break;
      case "circle":
        var c = $(shape).attr(["cx", "cy"]);
        var cx = c.cx, cy = c.cy,
          rad = Math.sqrt( (x-cx)*(x-cx) + (y-cy)*(y-cy) );
        if(curConfig.gridSnapping){
          rad = snapToGrid(rad);
        }
        shape.setAttributeNS(null, "r", rad);
        break;
      case "ellipse":
        var c = $(shape).attr(["cx", "cy"]);
        var cx = Math.abs(start_x + (x - start_x)/2)
        var cy = Math.abs(start_y + (y - start_y)/2);
        if(curConfig.gridSnapping){
          x = snapToGrid(x);
          cx = snapToGrid(cx);
          y = snapToGrid(y);
          cy = snapToGrid(cy);
        }
        var rx = Math.abs(start_x - cx)
        var ry = Math.abs(start_y - cy);
        if (evt.shiftKey) {
          ry = rx
          cy = (y > start_y) ? start_y + rx : start_y - rx
          
        }
        if (evt.altKey) {
          cx = start_x
          cy = start_y
          rx = Math.abs(x - cx)
          ry = evt.shiftKey ? rx : Math.abs(y - cy);
        }
        shape.setAttributeNS(null, "rx", rx );
        shape.setAttributeNS(null, "ry", ry );
        shape.setAttributeNS(null, "cx", cx );
        shape.setAttributeNS(null, "cy", cy );
        break;
      case "fhellipse":
      case "fhrect":
        freehand.minx = Math.min(real_x, freehand.minx);
        freehand.maxx = Math.max(real_x, freehand.maxx);
        freehand.miny = Math.min(real_y, freehand.miny);
        freehand.maxy = Math.max(real_y, freehand.maxy);
      // break; missing on purpose
      case "fhpath":
        d_attr += + real_x + "," + real_y + " ";
        shape.setAttributeNS(null, "points", d_attr);
        break;
      // update path stretch line coordinates
      case "path":
        // fall through
      case "pathedit":
        x *= current_zoom;
        y *= current_zoom;
        
        if(curConfig.gridSnapping){
          x = snapToGrid(x);
          y = snapToGrid(y);
          start_x = snapToGrid(start_x);
          start_y = snapToGrid(start_y);
        }
        if(evt.shiftKey) {
          var path = svgedit.path.path;
          if(path) {
            var x1 = path.dragging?path.dragging[0]:start_x;
            var y1 = path.dragging?path.dragging[1]:start_y;
          } else {
            var x1 = start_x;
            var y1 = start_y;
          }
          var xya = snapToAngle(x1,y1,x,y);
          x=xya.x; y=xya.y;
        }
        
        if(rubberBox && rubberBox.getAttribute('display') !== 'none') {
          real_x *= current_zoom;
          real_y *= current_zoom;
          assignAttributes(rubberBox, {
            'x': Math.min(r_start_x*current_zoom, real_x),
            'y': Math.min(r_start_y*current_zoom, real_y),
            'width': Math.abs(real_x - r_start_x*current_zoom),
            'height': Math.abs(real_y - r_start_y*current_zoom)
          },100); 
        }
        pathActions.mouseMove(evt, x, y);
        
        break;
      case "textedit":
        x *= current_zoom;
        y *= current_zoom;
//          if(rubberBox && rubberBox.getAttribute('display') != 'none') {
//            assignAttributes(rubberBox, {
//              'x': Math.min(start_x,x),
//              'y': Math.min(start_y,y),
//              'width': Math.abs(x-start_x),
//              'height': Math.abs(y-start_y)
//            },100);
//          }
        
        textActions.mouseMove(mouse_x, mouse_y);
        
        break;
      case "rotate":
        var box = svgedit.utilities.getBBox(selected),
          cx = box.x + box.width/2, 
          cy = box.y + box.height/2,
          m = getMatrix(selected),
          center = transformPoint(cx,cy,m);
        cx = center.x;
        cy = center.y;
        var ccx = box.x // ne
        var ccy = box.y // ne
        if (current_rotate_mode == "nw")  ccx = box.x + box.width;
        if (current_rotate_mode == "se")  ccy = box.y + box.height;
        if (current_rotate_mode == "sw"){ ccx = box.x + box.width; ccy = box.y + box.height;  }
        compensation_angle = ((Math.atan2(cy-ccy,cx-ccx)  * (180/Math.PI))-90) % 360;
        var angle = ((Math.atan2(cy-y,cx-x)  * (180/Math.PI))-90) % 360;
        angle += compensation_angle;
        if(curConfig.gridSnapping){
          angle = snapToGrid(angle);
        }
        if(evt.shiftKey) { // restrict rotations to nice angles (WRS)
          var snap = 45;
          angle= Math.round(angle/snap)*snap;
        }

        canvas.setRotationAngle(angle<-180?(360+angle):angle, true);
        call("transition", selectedElements);
        break;
      default:
        break;
    }
    
    runExtensions("mouseMove", {
      event: evt,
      mouse_x: mouse_x,
      mouse_y: mouse_y,
      selected: selected
    });

  }; // mouseMove()
  
  
  /* mouseover mode
  var mouseOver = function(evt) {
    
    if(canvas.spaceKey || evt.button === 1 || current_mode != "select") return;
    evt.stopPropagation();
    mouse_target = getMouseTarget(evt);
    if (svghover.lastChild) svghover.removeChild(svghover.lastChild);
    
    if (mouse_target.id == "svgroot") return
    switch (mouse_target.nodeName) {
      case "polyline":
      case "line":
      case "path":
      case "ellipse":
      case "rect":
          var clone = mouse_target.cloneNode(true); 
          clone.setAttribute("stroke", "#c00")
          clone.setAttribute("stroke-width", "1")
          clone.setAttribute("stroke-opacity", "1")
          clone.setAttribute("shape-rendering", "crispEdges")
          clone.setAttribute("fill", "none")
          hover_group.appendChild(clone);
      break;
        
      default:
      break;
    }
  }
  */
  
  // - in create mode, the element's opacity is set properly, we create an InsertElementCommand
  //   and store it on the Undo stack
  // - in move/resize mode, the element's attributes which were affected by the move/resize are
  //   identified, a ChangeElementCommand is created and stored on the stack for those attrs
  //   this is done in when we recalculate the selected dimensions()
  var mouseUp = function(evt)
  {
    canvas.addClones = false;
    window.removeEventListener("keyup", canvas.removeClones)
    selectedElements = selectedElements.filter(Boolean)
    if(evt.button === 2) return;
    var tempJustSelected = justSelected;
    justSelected = null;
    if (!started) return;
    var pt = transformPoint( evt.pageX, evt.pageY, root_sctm ),
      mouse_x = pt.x * current_zoom,
      mouse_y = pt.y * current_zoom,
      x = mouse_x / current_zoom,
      y = mouse_y / current_zoom,
      element = getElem(getId()),
      keep = false;

    var real_x = x;
    var real_y = y;

    // TODO: Make true when in multi-unit mode
    var useUnit = false; // (curConfig.baseUnit !== 'px');
    started = false;
    switch (current_mode)
    {
      // intentionally fall-through to select here
      case "resize":
      case "multiselect":
        if (rubberBox != null) {
          rubberBox.setAttribute("display", "none");
          curBBoxes = [];
        }
        current_mode = "select";
      case "select":
        if (selectedElements[0] != null) {
          // if we only have one selected element
          if (selectedElements.length == 1) {
            // set our current stroke/fill properties to the element's
            var selected = selectedElements[0];
            switch ( selected.tagName ) {
              case "g":
              case "use":
              case "image":
              case "foreignObject":
                break;
              default:
                cur_properties.fill = selected.getAttribute("fill");
                cur_properties.fill_opacity = selected.getAttribute("fill-opacity");
                cur_properties.stroke = selected.getAttribute("stroke");
                cur_properties.stroke_opacity = selected.getAttribute("stroke-opacity");
                cur_properties.stroke_width = selected.getAttribute("stroke-width");
                cur_properties.stroke_dasharray = selected.getAttribute("stroke-dasharray");
                cur_properties.stroke_linejoin = selected.getAttribute("stroke-linejoin");
                cur_properties.stroke_linecap = selected.getAttribute("stroke-linecap");
            }
            if (selected.tagName == "text") {
              cur_text.font_size = selected.getAttribute("font-size");
              cur_text.font_family = selected.getAttribute("font-family");
            }
            selectorManager.requestSelector(selected).showGrips(true);
            
            // This shouldn't be necessary as it was done on mouseDown...
//              call("selected", [selected]);
          }
          // always recalculate dimensions to strip off stray identity transforms
          recalculateAllSelectedDimensions();

          // if it was being dragged/resized
          r_start_x = r_start_x; 
          r_start_y = r_start_y; 
          var difference_x = Math.abs(real_x-r_start_x);
          var difference_y = Math.abs(real_y-r_start_y);

          if (difference_y > 1 || difference_y > 1) {
            var len = selectedElements.length;
            for (var i = 0; i < len; ++i) {
              if (selectedElements[i] == null) break;
              if(!selectedElements[i].firstChild) {
                // Not needed for groups (incorrectly resizes elems), possibly not needed at all?
                selectorManager.requestSelector(selectedElements[i]).resize();
              }
            }
          }
          // no change in position/size, so maybe we should move to pathedit
          else {
            var t = evt.target;
            if (selectedElements[0].nodeName === "path" && selectedElements[1] == null) {
              pathActions.select(selectedElements[0]);
            } // if it was a path
            // else, if it was selected and this is a shift-click, remove it from selection
            else if (evt.shiftKey) {
              if(tempJustSelected != t) {
                canvas.removeFromSelection([t]);
              }
            }
          } // no change in mouse position
          
          // Remove non-scaling stroke
          if(svgedit.browser.supportsNonScalingStroke()) {
            var elem = selectedElements[0];
            if (elem) {
              elem.removeAttribute('style');
              svgedit.utilities.walkTree(elem, function(elem) {
                elem.removeAttribute('style');
              });
            }
          }

        }
        return;
        break;
      case "zoom":
        if (rubberBox != null) {
          rubberBox.setAttribute("display", "none");
        }
        var factor = evt.altKey?.5:2;
        call("zoomed", {
          'x': Math.min(r_start_x, real_x),
          'y': Math.min(r_start_y, real_y),
          'width': Math.abs(real_x - r_start_x),
          'height': Math.abs(real_y - r_start_y),
          'factor': factor
        });
        return;
      case "fhpath":
        // Check that the path contains at least 2 points; a degenerate one-point path
        // causes problems.
        // Webkit ignores how we set the points attribute with commas and uses space
        // to separate all coordinates, see https://bugs.webkit.org/show_bug.cgi?id=29870
        var coords = element.getAttribute('points');
        var commaIndex = coords.indexOf(',');
        if (commaIndex >= 0) {
          keep = coords.indexOf(',', commaIndex+1) >= 0;
        } else {
          keep = coords.indexOf(' ', coords.indexOf(' ')+1) >= 0;
        }
        if (keep) {
          element = pathActions.smoothPolylineIntoPath(element);
        }
        break;
      case "line":
        var attrs = $(element).attr(["x1", "x2", "y1", "y2"]);
        keep = (attrs.x1 != attrs.x2 || attrs.y1 != attrs.y2);
        break;
      case "foreignObject":
      case "square":
      case "rect":
      case "image":
        var attrs = $(element).attr(["width", "height"]);
        // Image should be kept regardless of size (use inherit dimensions later)
        keep = (attrs.width != 0 || attrs.height != 0) || current_mode === "image";
        break;
      case "circle":
        keep = (element.getAttribute('r') != 0);
        break;
      case "ellipse":
        var attrs = $(element).attr(["rx", "ry"]);
        keep = (attrs.rx != null || attrs.ry != null);
        break;
      case "fhellipse":
        if ((freehand.maxx - freehand.minx) > 0 &&
          (freehand.maxy - freehand.miny) > 0) {
          element = addSvgElementFromJson({
            "element": "ellipse",
            "curStyles": true,
            "attr": {
              "cx": (freehand.minx + freehand.maxx) / 2,
              "cy": (freehand.miny + freehand.maxy) / 2,
              "rx": (freehand.maxx - freehand.minx) / 2,
              "ry": (freehand.maxy - freehand.miny) / 2,
              "id": getId()
            }
          });
          call("changed",[element]);
          keep = true;
        }
        break;
      case "fhrect":
        if ((freehand.maxx - freehand.minx) > 0 &&
          (freehand.maxy - freehand.miny) > 0) {
          element = addSvgElementFromJson({
            "element": "rect",
            "curStyles": true,
            "attr": {
              "x": freehand.minx,
              "y": freehand.miny,
              "width": (freehand.maxx - freehand.minx),
              "height": (freehand.maxy - freehand.miny),
              "id": getId()
            }
          });
          call("changed",[element]);
          keep = true;
        }
        break;
      case "text":
        keep = true;
        selectOnly([element]);
        textActions.start(element);
        break;
      case "path":
        // set element to null here so that it is not removed nor finalized
        element = null;
        // continue to be set to true so that mouseMove happens
        started = true;
        
        var res = pathActions.mouseUp(evt, element, mouse_x, mouse_y);
        element = res.element;
        keep = res.keep;
        break;
      case "pathedit":
        keep = true;
        element = null;
        pathActions.mouseUp(evt);
        break;
      case "textedit":
        keep = false;
        element = null;
        textActions.mouseUp(evt, mouse_x, mouse_y);
        break;
      case "rotate":
        keep = true;
        element = null;
        current_mode = "select";
        var batchCmd = canvas.undoMgr.finishUndoableChange();
        if (!batchCmd.isEmpty()) { 
          addCommandToHistory(batchCmd);
        }
        // perform recalculation to weed out any stray identity transforms that might get stuck
        recalculateAllSelectedDimensions();
        call("changed", selectedElements);
        break;
      default:
        // This could occur in an extension
        break;
    }
    
    var ext_result = runExtensions("mouseUp", {
      event: evt,
      mouse_x: mouse_x,
      mouse_y: mouse_y
    }, true);
    
    $.each(ext_result, function(i, r) {
      if(r) {
        keep = r.keep || keep;
        element = r.element;
        started = r.started || started;
      }
    });
    
    if (!keep && element != null) {
      getCurrentDrawing().releaseId(getId());
      element.parentNode.removeChild(element);
      element = null;
      
      var t = evt.target;
      
      // if this element is in a group, go up until we reach the top-level group 
      // just below the layer groups
      // TODO: once we implement links, we also would have to check for <a> elements
      while (t.parentNode.parentNode.tagName == "g") {
        t = t.parentNode;
      }
      // if we are not in the middle of creating a path, and we've clicked on some shape, 
      // then go to Select mode.
      // WebKit returns <div> when the canvas is clicked, Firefox/Opera return <svg>
      if ( (current_mode != "path" || !drawn_path) &&
        t.parentNode.id != "selectorParentGroup" &&
        t.id != "svgcanvas" && t.id != "svgroot") 
      {
        // switch into "select" mode if we've clicked on an element
        canvas.setMode("select");
        selectOnly([t], true);
      }
      
    } else if (element != null) {
      canvas.addedNew = true;
      
      if(useUnit) svgedit.units.convertAttrs(element);
      
      var ani_dur = .2, c_ani;
      if(opac_ani.beginElement && element.getAttribute('opacity') != cur_shape.opacity) {
        c_ani = $(opac_ani).clone().attr({
          to: cur_shape.opacity,
          dur: ani_dur
        }).appendTo(element);
        try {
          // Fails in FF4 on foreignObject
          c_ani[0].beginElement();
        } catch(e){}
      } else {
        ani_dur = 0;
      }
      
      // Ideally this would be done on the endEvent of the animation,
      // but that doesn't seem to be supported in Webkit
      setTimeout(function() {
        if(c_ani) c_ani.remove();
        element.setAttribute("opacity", cur_shape.opacity);
        element.setAttribute("style", "pointer-events:inherit");
        cleanupElement(element);
        if(current_mode === "path") {
          pathActions.toEditMode(element);
        } else {
          if(curConfig.selectNew) {
            selectOnly([element], true);
          }
        }
        // we create the insert command that is stored on the stack
        // undo means to call cmd.unapply(), redo means to call cmd.apply()
        addCommandToHistory(new InsertElementCommand(element));
        
        call("changed",[element]);
      }, ani_dur * 1000);
    }
    
    start_transform = null;
  };
  
  var dblClick = function(evt) {
    var evt_target = evt.target;
    var parent = evt_target.parentNode;
    var mouse_target = getMouseTarget(evt);
    var tagName = mouse_target.tagName;

    if(parent === current_group) return;
    
    if(tagName === 'text' && current_mode !== 'textedit') {
      var pt = transformPoint( evt.pageX, evt.pageY, root_sctm );
      textActions.select(mouse_target, pt.x, pt.y);
    }
    
    if((tagName === "g" || tagName === "a") && getRotationAngle(mouse_target)) {
      // TODO: Allow method of in-group editing without having to do 
      // this (similar to editing rotated paths)
    
      // Ungroup and regroup
      pushGroupProperties(mouse_target);
      mouse_target = selectedElements[0];
      clearSelection(true);
    }
    // Reset context
    if(current_group) {
      leaveContext();
    }
    
    if((parent.tagName !== 'g' && parent.tagName !== 'a') ||
      parent === getCurrentDrawing().getCurrentLayer() ||
      mouse_target === selectorManager.selectorParentGroup)
    {
      // Escape from in-group edit
      return;
    }
    setContext(mouse_target);
  }

  // prevent links from being followed in the canvas
  var handleLinkInCanvas = function(e) {
    e.preventDefault();
    return false;
  };
  
  // Added mouseup to the container here.
  // TODO(codedread): Figure out why after the Closure compiler, the window mouseup is ignored.
  $(container).mousedown(mouseDown).mousemove(mouseMove).click(handleLinkInCanvas).dblclick(dblClick).mouseup(mouseUp);
//  $(window).mouseup(mouseUp);
  
  $(container).bind("mousewheel DOMMouseScroll", function(e){
    if(!e.shiftKey) return;
    e.preventDefault();

    root_sctm = svgcontent.getScreenCTM().inverse();
    var pt = transformPoint( e.pageX, e.pageY, root_sctm );
    var bbox = {
      'x': pt.x,
      'y': pt.y,
      'width': 0,
      'height': 0
    };

    // Respond to mouse wheel in IE/Webkit/Opera.
    // (It returns up/dn motion in multiples of 120)
    if(e.wheelDelta) {
      if (e.wheelDelta >= 120) {
        bbox.factor = 2;
      } else if (e.wheelDelta <= -120) {
        bbox.factor = .5;
      }
    } else if(e.detail) {
      if (e.detail > 0) {
        bbox.factor = .5;
      } else if (e.detail < 0) {
        bbox.factor = 2;      
      }       
    }
    
    if(!bbox.factor) return;
    call("zoomed", bbox);
  });
  
}());

// Function: preventClickDefault
// Prevents default browser click behaviour on the given element
//
// Parameters:
// img - The DOM element to prevent the cilck on
var preventClickDefault = function(img) {
  $(img).click(function(e){e.preventDefault()});
}

// Group: Text edit functions
// Functions relating to editing text elements
var textActions = canvas.textActions = function() {
  var curtext;
  var textinput;
  var cursor;
  var selblock;
  var blinker;
  var chardata = [];
  var textbb, transbb;
  var matrix;
  var last_x, last_y;
  var allow_dbl;
  
  function setCursor(index) {
    var empty = (textinput.value === "");
    $(textinput).focus();
  
    if(!arguments.length) {
      if(empty) {
        index = 0;
      } else {
        if(textinput.selectionEnd !== textinput.selectionStart) return;
        index = textinput.selectionEnd;
      }
    }
    
    var charbb;
    charbb = chardata[index];
    if(!empty) {
      textinput.setSelectionRange(index, index);
    }
    cursor = getElem("text_cursor");
    if (!cursor) {
      cursor = document.createElementNS(svgns, "line");
      assignAttributes(cursor, {
        'id': "text_cursor",
        'stroke': "#333",
        'stroke-width': 1
      });
      cursor = getElem("selectorParentGroup").appendChild(cursor);
    }
    
    if(!blinker) {
      blinker = setInterval(function() {
        var show = (cursor.getAttribute('display') === 'none');
        cursor.setAttribute('display', show?'inline':'none');
      }, 600);

    }
    
    
    var start_pt = ptToScreen(charbb.x, textbb.y);
    var end_pt = ptToScreen(charbb.x, (textbb.y + textbb.height));
    
    assignAttributes(cursor, {
      x1: start_pt.x,
      y1: start_pt.y,
      x2: end_pt.x,
      y2: end_pt.y,
      visibility: 'visible',
      display: 'inline'
    });
    
    if(selblock) selblock.setAttribute('d', 'M 0 0');
  }
  
  function setSelection(start, end, skipInput) {
    if(start === end) {
      setCursor(end);
      return;
    }
  
    if(!skipInput) {
      textinput.setSelectionRange(start, end);
    }
    
    selblock = getElem("text_selectblock");
    if (!selblock) {

      selblock = document.createElementNS(svgns, "path");
      assignAttributes(selblock, {
        'id': "text_selectblock",
        'fill': "green",
        'opacity': .5,
        'style': "pointer-events:none"
      });
      getElem("selectorParentGroup").appendChild(selblock);
    }

    
    var startbb = chardata[start];
    
    var endbb = chardata[end];
    
    cursor.setAttribute('visibility', 'hidden');
    
    var tl = ptToScreen(startbb.x, textbb.y),
      tr = ptToScreen(startbb.x + (endbb.x - startbb.x), textbb.y),
      bl = ptToScreen(startbb.x, textbb.y + textbb.height),
      br = ptToScreen(startbb.x + (endbb.x - startbb.x), textbb.y + textbb.height);
    
    
    var dstr = "M" + tl.x + "," + tl.y
          + " L" + tr.x + "," + tr.y
          + " " + br.x + "," + br.y
          + " " + bl.x + "," + bl.y + "z";
    
    assignAttributes(selblock, {
      d: dstr,
      'display': 'inline'
    });
  }
  
  function getIndexFromPoint(mouse_x, mouse_y) {
    // Position cursor here
    var pt = svgroot.createSVGPoint();
    pt.x = mouse_x;
    pt.y = mouse_y;

    // No content, so return 0
    if(chardata.length == 1) return 0;
    // Determine if cursor should be on left or right of character
    var charpos = curtext.getCharNumAtPosition(pt);
    if(charpos < 0) {
      // Out of text range, look at mouse coords
      charpos = chardata.length - 2;
      if(mouse_x <= chardata[0].x) {
        charpos = 0;
      }
    } else if(charpos >= chardata.length - 2) {
      charpos = chardata.length - 2;
    }
    var charbb = chardata[charpos];
    var mid = charbb.x + (charbb.width/2);
    if(mouse_x > mid) {
      charpos++;
    }
    return charpos;
  }
  
  function setCursorFromPoint(mouse_x, mouse_y) {
    setCursor(getIndexFromPoint(mouse_x, mouse_y));
  }
  
  function setEndSelectionFromPoint(x, y, apply) {
    var i1 = textinput.selectionStart;
    var i2 = getIndexFromPoint(x, y);
    
    var start = Math.min(i1, i2);
    var end = Math.max(i1, i2);
    setSelection(start, end, !apply);
  }
    
  function screenToPt(x_in, y_in) {
    var out = {
      x: x_in,
      y: y_in
    }
    
    out.x /= current_zoom;
    out.y /= current_zoom;      

    if(matrix) {
      var pt = transformPoint(out.x, out.y, matrix.inverse());
      out.x = pt.x;
      out.y = pt.y;
    }
    
    return out;
  } 
  
  function ptToScreen(x_in, y_in) {
    var out = {
      x: x_in,
      y: y_in
    }
    
    if(matrix) {
      var pt = transformPoint(out.x, out.y, matrix);
      out.x = pt.x;
      out.y = pt.y;
    }
    
    out.x *= current_zoom;
    out.y *= current_zoom;
    
    return out;
  }
  
  function hideCursor() {
    if(cursor) {
      cursor.setAttribute('visibility', 'hidden');
    }
  }
  
  function selectAll(evt) {
    setSelection(0, curtext.textContent.length);
    $(this).unbind(evt);
  }

  function selectWord(evt) {
    if(!allow_dbl || !curtext) return;
  
    var ept = transformPoint( evt.pageX, evt.pageY, root_sctm ),
      mouse_x = ept.x * current_zoom,
      mouse_y = ept.y * current_zoom;
    var pt = screenToPt(mouse_x, mouse_y);
    
    var index = getIndexFromPoint(pt.x, pt.y);
    var str = curtext.textContent;
    var first = str.substr(0, index).replace(/[a-z0-9]+$/i, '').length;
    var m = str.substr(index).match(/^[a-z0-9]+/i);
    var last = (m?m[0].length:0) + index;
    setSelection(first, last);
    
    // Set tripleclick
    $(evt.target).click(selectAll);
    setTimeout(function() {
      $(evt.target).unbind('click', selectAll);
    }, 300);
    
  }

  return {
    select: function(target, x, y) {
      curtext = target;
      textActions.toEditMode(x, y);
    },
    start: function(elem) {
      curtext = elem;
      textActions.toEditMode();
    },
    mouseDown: function(evt, mouse_target, start_x, start_y) {
      var pt = screenToPt(start_x, start_y);
    
      textinput.focus();
      setCursorFromPoint(pt.x, pt.y);
      last_x = start_x;
      last_y = start_y;
      
      // TODO: Find way to block native selection
    },
    mouseMove: function(mouse_x, mouse_y) {
      var pt = screenToPt(mouse_x, mouse_y);
      setEndSelectionFromPoint(pt.x, pt.y);
    },      
    mouseUp: function(evt, mouse_x, mouse_y) {
      var pt = screenToPt(mouse_x, mouse_y);
      
      setEndSelectionFromPoint(pt.x, pt.y, true);
      
      // TODO: Find a way to make this work: Use transformed BBox instead of evt.target 
//        if(last_x === mouse_x && last_y === mouse_y
//          && !svgedit.math.rectsIntersect(transbb, {x: pt.x, y: pt.y, width:0, height:0})) {
//          textActions.toSelectMode(true);       
//        }

      if(
        evt.target !== curtext
        &&  mouse_x < last_x + 2
        && mouse_x > last_x - 2
        &&  mouse_y < last_y + 2
        && mouse_y > last_y - 2) {

        textActions.toSelectMode(true);
      }

    },
    setCursor: setCursor,
    toEditMode: function(x, y) {
      selectOnly([curtext], false)
      allow_dbl = false;
      current_mode = "textedit";
      selectorManager.requestSelector(curtext).showGrips(false);
    
      // Make selector group accept clicks
      var sel = selectorManager.requestSelector(curtext).selectorRect;
      
      textActions.init();

      $(curtext).css('cursor', 'text');
      
      if(!arguments.length) {
        setCursor();
      } else {
        var pt = screenToPt(x, y);
        setCursorFromPoint(pt.x, pt.y);
      }
      
      setTimeout(function() {
        allow_dbl = true;
      }, 300);
    },
    toSelectMode: function(selectElem) {
      current_mode = "select";
      clearInterval(blinker);
      blinker = null;
      if(selblock) $(selblock).attr('display','none');
      if(cursor) $(cursor).attr('visibility','hidden');
      $(curtext).css('cursor', 'move');
      
      if(selectElem) {
        clearSelection();
        $(curtext).css('cursor', 'move');
        
        call("selected", [curtext]);
        addToSelection([curtext], true);
      }
      if(curtext && !curtext.textContent.length) {
        // No content, so delete
        canvas.deleteSelectedElements();
      }
      
      $(textinput).blur();
      
      curtext = false;
      
//        if(svgedit.browser.supportsEditableText()) {
//          curtext.removeAttribute('editable');
//        }
    },
    setInputElem: function(elem) {
      textinput = elem;
//      $(textinput).blur(hideCursor);
    },
    clear: function() {
      if(current_mode == "textedit") {
        textActions.toSelectMode();
      }
    },
    init: function(inputElem) {
      if(!curtext) return;

//        if(svgedit.browser.supportsEditableText()) {
//          curtext.select();
//          return;
//        }
    
      if(!curtext.parentNode) {
        // Result of the ffClone, need to get correct element
        curtext = selectedElements[0];
        selectorManager.requestSelector(curtext).showGrips(false);
      }
      
      var str = curtext.textContent;
      var len = str.length;
      
      var xform = curtext.getAttribute('transform');

      textbb = svgedit.utilities.getBBox(curtext);
      
      matrix = xform?getMatrix(curtext):null;

      chardata = Array(len);
      textinput.focus();
      
      $(curtext).unbind('dblclick', selectWord).dblclick(selectWord);
      
      if(!len) {
        var end = {x: textbb.x + (textbb.width/2), width: 0};
      }
      
      for(var i=0; i<len; i++) {
        var start = curtext.getStartPositionOfChar(i);
        var end = curtext.getEndPositionOfChar(i);
        
        if(!svgedit.browser.supportsGoodTextCharPos()) {
          var offset = canvas.contentW * current_zoom;
          start.x -= offset;
          end.x -= offset;
          
          start.x /= current_zoom;
          end.x /= current_zoom;
        }
        
        // Get a "bbox" equivalent for each character. Uses the
        // bbox data of the actual text for y, height purposes
        
        // TODO: Decide if y, width and height are actually necessary
        chardata[i] = {
          x: start.x,
          y: textbb.y, // start.y?
          width: end.x - start.x,
          height: textbb.height
        };
      }
      
      // Add a last bbox for cursor at end of text
      chardata.push({
        x: end.x,
        width: 0
      });
      setSelection(textinput.selectionStart, textinput.selectionEnd, true);
    }
  }
}();

// TODO: Migrate all of this code into path.js
// Group: Path edit functions
// Functions relating to editing path elements
var pathActions = canvas.pathActions = function() {
  
  var subpath = false;
  var current_path;
  var newPoint, firstCtrl;
  
  function resetD(p) {
    p.setAttribute("d", pathActions.convertPath(p));
  }

  // TODO: Move into path.js
    svgedit.path.Path.prototype.endChanges = function(text) {
      if(svgedit.browser.isWebkit()) resetD(this.elem);
      var cmd = new ChangeElementCommand(this.elem, {d: this.last_d}, text);
      addCommandToHistory(cmd);
      call("changed", [this.elem]);
    }

    svgedit.path.Path.prototype.addPtsToSelection = function(indexes) {
      if(!$.isArray(indexes)) indexes = [indexes];
      for(var i=0; i< indexes.length; i++) {
        var index = indexes[i];
        var seg = this.segs[index];
        if(seg.ptgrip) {
          if(this.selected_pts.indexOf(index) == -1 && index >= 0) {
            this.selected_pts.push(index);
          }
        }
      };
      this.selected_pts.sort();
      var i = this.selected_pts.length,
        grips = new Array(i);
      // Loop through points to be selected and highlight each
      while(i--) {
        var pt = this.selected_pts[i];
        var seg = this.segs[pt];
        seg.select(true);
        grips[i] = seg.ptgrip;
      }
      // TODO: Correct this:
      pathActions.canDeleteNodes = true;
      
      pathActions.closed_subpath = this.subpathIsClosed(this.selected_pts[0]);
      
      call("selected", grips);
    }

  var current_path = null,
    drawn_path = null,
    hasMoved = false,
    stretchy = null;

  this.lastCtrlPoint = [0, 0];
  
  // This function converts a polyline (created by the fh_path tool) into
  // a path element and coverts every three line segments into a single bezier
  // curve in an attempt to smooth out the free-hand
  var smoothPolylineIntoPath = function(element) {
    var points = element.points;
    var N = points.numberOfItems;
    if (N >= 4) {
      // loop through every 3 points and convert to a cubic bezier curve segment
      // 
      // NOTE: this is cheating, it means that every 3 points has the potential to 
      // be a corner instead of treating each point in an equal manner.  In general,
      // this technique does not look that good.
      // 
      // I am open to better ideas!
      // 
      // Reading:
      // - http://www.efg2.com/Lab/Graphics/Jean-YvesQueinecBezierCurves.htm
      // - http://www.codeproject.com/KB/graphics/BezierSpline.aspx?msg=2956963
      // - http://www.ian-ko.com/ET_GeoWizards/UserGuide/smooth.htm
      // - http://www.cs.mtu.edu/~shene/COURSES/cs3621/NOTES/spline/Bezier/bezier-der.html
      var curpos = points.getItem(0), prevCtlPt = null;
      var d = [];
      d.push(["M",curpos.x,",",curpos.y," C"].join(""));
      for (var i = 1; i <= (N-4); i += 3) {
        var ct1 = points.getItem(i);
        var ct2 = points.getItem(i+1);
        var end = points.getItem(i+2);
        
        // if the previous segment had a control point, we want to smooth out
        // the control points on both sides
        if (prevCtlPt) {
          var newpts = svgedit.path.smoothControlPoints( prevCtlPt, ct1, curpos );
          if (newpts && newpts.length == 2) {
            var prevArr = d[d.length-1].split(',');
            prevArr[2] = newpts[0].x;
            prevArr[3] = newpts[0].y;
            d[d.length-1] = prevArr.join(',');
            ct1 = newpts[1];
          }
        }
        
        d.push([ct1.x,ct1.y,ct2.x,ct2.y,end.x,end.y].join(','));
        
        curpos = end;
        prevCtlPt = ct2;
      }
      // handle remaining line segments
      d.push("L");
      for(;i < N;++i) {
        var pt = points.getItem(i);
        d.push([pt.x,pt.y].join(","));
      }
      d = d.join(" ");

      // create new path element
      element = addSvgElementFromJson({
        "element": "path",
        "curStyles": true,
        "attr": {
          "id": getId(),
          "d": d,
          "fill": "none"
        }
      });
      // No need to call "changed", as this is already done under mouseUp
    }
    return element;
  };

  return {
    mouseDown: function(evt, mouse_target, start_x, start_y) {
      if(current_mode === "path") {
        mouse_x = start_x;
        mouse_y = start_y;
        
        var x = mouse_x/current_zoom,
          y = mouse_y/current_zoom,
          stretchy = getElem("path_stretch_line");
        newPoint = [x, y];  
        
        if(curConfig.gridSnapping){
          x = snapToGrid(x);
          y = snapToGrid(y);
          mouse_x = snapToGrid(mouse_x);
          mouse_y = snapToGrid(mouse_y);
        }

        if (!stretchy) {
          stretchy = document.createElementNS(svgns, "path");
          assignAttributes(stretchy, {
            'id': "path_stretch_line",
            'stroke': "#22C",
            'stroke-width': "0.5",
            'fill': 'none'
          });
          stretchy = getElem("selectorParentGroup").appendChild(stretchy);
        }
        stretchy.setAttribute("display", "inline");

        this.stretchy = stretchy;
        
        var keep = null;
        
        // if pts array is empty, create path element with M at current point
        if (!drawn_path) {
          d_attr = "M" + x + "," + y + " ";
          drawn_path = addSvgElementFromJson({
            "element": "path",
            "curStyles": true,
            "attr": {
              "d": d_attr,
              "id": getNextId(),
              "opacity": cur_shape.opacity / 2
            }
          });
          // set stretchy line to first point
          stretchy.setAttribute('d', ['M', mouse_x, mouse_y, mouse_x, mouse_y].join(' '));
          var index = subpath ? svgedit.path.path.segs.length : 0;
          svgedit.path.addPointGrip(index, mouse_x, mouse_y);
          svgedit.path.first_grip = null;
        }
        else {
          // determine if we clicked on an existing point
          var seglist = drawn_path.pathSegList;
          var i = seglist.numberOfItems;
          var FUZZ = 6/current_zoom;
          var clickOnPoint = false;
          while(i) {
            i --;
            var item = seglist.getItem(i);
            var px = item.x, py = item.y;
            // found a matching point
            if ( x >= (px-FUZZ) && x <= (px+FUZZ) && y >= (py-FUZZ) && y <= (py+FUZZ) ) {
              clickOnPoint = true;
              break;
            }
          }
          
          // get path element that we are in the process of creating
          var id = getId();
        
          // Remove previous path object if previously created
          svgedit.path.removePath_(id);
          
          var newpath = getElem(id);
          
          var len = seglist.numberOfItems;
          // if we clicked on an existing point, then we are done this path, commit it
          // (i,i+1) are the x,y that were clicked on
          if (clickOnPoint) {
            // if clicked on any other point but the first OR
            // the first point was clicked on and there are less than 3 points
            // then leave the path open
            // otherwise, close the path
            if (i <= 1 && len >= 2) {

              // Create end segment
              var abs_x = seglist.getItem(0).x;
              var abs_y = seglist.getItem(0).y;
              var grip_x = svgedit.path.first_grip ? svgedit.path.first_grip[0]/current_zoom : seglist.getItem(0).x;
              var grip_y = svgedit.path.first_grip ? svgedit.path.first_grip[1]/current_zoom : seglist.getItem(0).y;
              

              var s_seg = stretchy.pathSegList.getItem(1);
              if(s_seg.pathSegType === 4) {
                var newseg = drawn_path.createSVGPathSegLinetoAbs(abs_x, abs_y);
              } else {
                var newseg = drawn_path.createSVGPathSegCurvetoCubicAbs(
                  abs_x,
                  abs_y,
                  s_seg.x1 / current_zoom,
                  s_seg.y1 / current_zoom,
                  grip_x,
                  grip_y
                );
              }
              var endseg = drawn_path.createSVGPathSegClosePath();
              seglist.appendItem(newseg);
              seglist.appendItem(endseg);
            } else if(len < 3) {
              keep = false;
              return keep;
            }
            $(stretchy).remove();
            
            // this will signal to commit the path
            element = newpath;
            drawn_path = null;
            started = false;
            if(subpath) {

              if(svgedit.path.path.matrix) {
                remapElement(newpath, {}, svgedit.path.path.matrix.inverse());
              }
            
              var new_d = newpath.getAttribute("d");
              var orig_d = $(svgedit.path.path.elem).attr("d");
              $(svgedit.path.path.elem).attr("d", orig_d + new_d);
              $(newpath).remove();
              if(svgedit.path.path.matrix) {
                svgedit.path.recalcRotatedPath();
              }
              svgedit.path.path.init();
              pathActions.toEditMode(svgedit.path.path.elem);
              svgedit.path.path.selectPt();
              return false;
            }

          }
          // else, create a new point, update path element
          else {
            // Checks if current target or parents are #svgcontent
            if(!$.contains(container, getMouseTarget(evt))) {
              // Clicked outside canvas, so don't make point
              console.log("Clicked outside canvas");
              return false;
            }

            var num = drawn_path.pathSegList.numberOfItems;
            var last = drawn_path.pathSegList.getItem(num -1);
            var lastx = last.x, lasty = last.y;

            if(evt.shiftKey) { var xya = snapToAngle(lastx,lasty,x,y); x=xya.x; y=xya.y; }
            
            // Use the segment defined by stretchy
            var s_seg = stretchy.pathSegList.getItem(1);
            if(s_seg.pathSegType === 4) {
              var newseg = drawn_path.createSVGPathSegLinetoAbs(round(x), round(y));
            } else {
              var newseg = drawn_path.createSVGPathSegCurvetoCubicAbs(
                round(x),
                round(y),
                s_seg.x1 / current_zoom,
                s_seg.y1 / current_zoom,
                s_seg.x2 / current_zoom,
                s_seg.y2 / current_zoom
              );
            }
            
            drawn_path.pathSegList.appendItem(newseg);
            
            x *= current_zoom;
            y *= current_zoom;
            
            // update everything to the latest point
            stretchy.setAttribute('d', ['M', x, y, x, y].join(' '));
            var pointGrip1 = svgedit.path.addCtrlGrip('1c1');
            var pointGrip2 = svgedit.path.addCtrlGrip('0c2');
            var ctrlLine = svgedit.path.getCtrlLine(1);
            var ctrlLine2 = svgedit.path.getCtrlLine(2);

            pointGrip1.setAttribute('cx', x);
            pointGrip1.setAttribute('cy', y);
            pointGrip2.setAttribute('cx', x);
            pointGrip2.setAttribute('cy', y);

            ctrlLine.setAttribute('x1', x);
            ctrlLine.setAttribute('x2', x);
            ctrlLine.setAttribute('y1', y);
            ctrlLine.setAttribute('y2', y);

            ctrlLine2.setAttribute('x1', x);
            ctrlLine2.setAttribute('x2', x);
            ctrlLine2.setAttribute('y1', y);
            ctrlLine2.setAttribute('y2', y);

            var index = num;
            if(subpath) index += svgedit.path.path.segs.length;
            svgedit.path.addPointGrip(index, x, y);
          }
            keep = true;
        }
        return;
      }
      
      // TODO: Make sure current_path isn't null at this point
      if(!svgedit.path.path) return;
      
      svgedit.path.path.storeD();
      
      var id = evt.target.id;
      if (id.substr(0,14) == "pathpointgrip_") {
        // Select this point
        var cur_pt = svgedit.path.path.cur_pt = parseInt(id.substr(14));
        svgedit.path.path.dragging = [start_x, start_y];
        var seg = svgedit.path.path.segs[cur_pt];
        
        // only clear selection if shift is not pressed (otherwise, add 
        // node to selection)
        if (!evt.shiftKey) {
          if(svgedit.path.path.selected_pts.length <= 1 || !seg.selected) {
            svgedit.path.path.clearSelection();
          }
          svgedit.path.path.addPtsToSelection(cur_pt);
        } else if(seg.selected) {
          svgedit.path.path.removePtFromSelection(cur_pt);
        } else {
          svgedit.path.path.addPtsToSelection(cur_pt);
        }
      } else if(id.indexOf("ctrlpointgrip_") == 0) {
        svgedit.path.path.dragging = [start_x, start_y];
        
        var parts = id.split('_')[1].split('c');
        var cur_pt = parts[0]-0;
        var ctrl_num = parts[1]-0;
        var num = ctrl_num;
        var path = svgedit.path.path.segs[cur_pt];

        svgedit.path.path.selectPt(cur_pt, ctrl_num);

        /////////////////
        //check if linked
        var seg, anum, pt;
        if (num == 2) {
          anum = 1;
          seg = path.next;
          if(!seg) return;
          pt = path.item;
        } else {
          anum = 2;
          seg = path.prev;
          if(!seg) return;
          pt = seg.item;
        }

        var get_distance = function(pt1, pt2) {
          var a = pt1.x - pt2.x;
          var b = pt1.y - pt2.y;
          return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        }

        function get_angle(pt1, pt2)
        {
          var dy = pt1.y - pt2.y;
          var dx = pt1.x - pt2.x;
          var theta = Math.atan2(dy, dx);
          return theta *= 180/Math.PI // rads to degs
        }

        var grip = {
          x: path.item["x" + num],
          y: path.item["y" + num]
        }

        if (num == 2) {
          var node = {
            x: path.item["x"],
            y: path.item["y"]
          }
        }
        else {
          var node = {
            x: seg.item["x"],
            y: seg.item["y"]
          }
        }

        var pair = {
          x: seg.item["x" + anum],
          y: seg.item["y" + anum]
        }

        var distance_between_node_grip = get_distance(grip, node);
        var distance_between_pair_grip = get_distance(pair, node);
        var angle_grip = Math.round(get_angle(grip, node), 0);
        var angle_pair = Math.round(get_angle(pair, node), 0);
        var is_complementary = (Math.abs(angle_grip - angle_pair) == 180);
        //console.log("distance: " + Math.abs(distance_between_node_grip - distance_between_pair_grip) + " angle = " + (Math.round(Math.abs(get_angle(grip, node)) + Math.abs(get_angle(pair, node)), 0)))
        if (Math.abs(distance_between_node_grip - distance_between_pair_grip) < 5 && is_complementary) {
          svgedit.path.setLinkControlPoints(true);
          svgedit.path.is_linked = true;
        }
        else {
          svgedit.path.setLinkControlPoints(false);
          svgedit.path.is_linked = false;
        }


        ///////


      }

      // Start selection box
      if(!svgedit.path.path.dragging) {
        if (rubberBox == null) {
          rubberBox = selectorManager.getRubberBandBox();
        }
        assignAttributes(rubberBox, {
            'x': start_x * current_zoom,
            'y': start_y * current_zoom,
            'width': 0,
            'height': 0,
            'display': 'inline'
        }, 100);
      }
    },
    mouseMove: function(evt, mouse_x, mouse_y) {
      hasMoved = true;
      var is_linked = !evt.altKey;
      if(current_mode === "path") {
        if(!drawn_path) return;
        var seglist = drawn_path.pathSegList;
        var index = seglist.numberOfItems - 1;
        var pointGrip1 = svgedit.path.addCtrlGrip('1c1'); 
        var pointGrip2 = svgedit.path.addCtrlGrip('0c2');

        if(newPoint) {
          // First point

          // Set control points
          var current_pointGrip2_x = pointGrip2.getAttribute('cx') / current_zoom || 0;
          var current_pointGrip2_y = pointGrip2.getAttribute('cy') / current_zoom || 0;

          // dragging pointGrip1
          pointGrip1.setAttribute('cx', mouse_x);
          pointGrip1.setAttribute('cy', mouse_y);
          pointGrip1.setAttribute('display', 'inline');

          var pt_x = newPoint[0];
          var pt_y = newPoint[1];
          
          // set curve
          var seg = seglist.getItem(index);
          var cur_x = mouse_x / current_zoom;
          var cur_y = mouse_y / current_zoom;
          var alt_x = (is_linked) ?  (pt_x + (pt_x - cur_x)) : current_pointGrip2_x;
          var alt_y = (is_linked) ?  (pt_y + (pt_y - cur_y)) : current_pointGrip2_y;
          
          
          pointGrip2.setAttribute('cx', alt_x * current_zoom);
          pointGrip2.setAttribute('cy', alt_y * current_zoom);
          pointGrip2.setAttribute('display', 'inline');
          
          
          var ctrlLine = svgedit.path.getCtrlLine(1);
          var ctrlLine2 = svgedit.path.getCtrlLine(2);
          assignAttributes(ctrlLine, {
            x1: mouse_x,
            y1: mouse_y,
            x2: pt_x * current_zoom,
            y2: pt_y * current_zoom,
            display: 'inline'
          });
          

          assignAttributes(ctrlLine2, {
            x1: alt_x * current_zoom,
            y1: alt_y * current_zoom,
            x2: pt_x  * current_zoom,
            y2: pt_y * current_zoom,
            display: 'inline'
          });


          if(index === 0) {
            firstCtrl = [mouse_x, mouse_y];
          } else {
            var last_x, last_y;
            
            var last = seglist.getItem(index - 1);
            var last_x = last.x;
            var last_y = last.y
  
            if(last.pathSegType === 6) {
              last_x += (last_x - last.x2);
              last_y += (last_y - last.y2);
            } else if(firstCtrl) {
              last_x = firstCtrl[0]/current_zoom;
              last_y = firstCtrl[1]/current_zoom;
            }
            svgedit.path.replacePathSeg(6, index, [pt_x, pt_y, this.lastCtrlPoint[0]/current_zoom, this.lastCtrlPoint[1]/current_zoom, alt_x, alt_y], drawn_path);
          }
        } else {
          var stretchy = this.stretchy;
          if (stretchy) {
            var prev = seglist.getItem(index);
            var lastpoint = (evt.target.id === 'pathpointgrip_0');
            var lastgripx = mouse_x;
            var lastgripy = mouse_y;

            if (lastpoint && svgedit.path.first_grip) {
              lastgripx = svgedit.path.first_grip[0];
              lastgripy = svgedit.path.first_grip[1];
            }

            if(prev.pathSegType === 6) {
              var prev_x = this.lastCtrlPoint[0]/current_zoom || prev.x + (prev.x - prev.x2);
              var prev_y = this.lastCtrlPoint[1]/current_zoom || prev.y + (prev.y - prev.y2);
              svgedit.path.replacePathSeg(6, 1, [mouse_x, mouse_y, prev_x * current_zoom, prev_y * current_zoom, lastgripx, lastgripy], stretchy);              
            } else if(firstCtrl) {
              svgedit.path.replacePathSeg(6, 1, [mouse_x, mouse_y, firstCtrl[0], firstCtrl[1], mouse_x, mouse_y], stretchy);
            } else {
              svgedit.path.replacePathSeg(4, 1, [mouse_x, mouse_y], stretchy);
            }
          }
        }
        return;
      }
      // if we are dragging a point, let's move it
      if (svgedit.path.path.dragging) {
        var pt = svgedit.path.getPointFromGrip({
          x: svgedit.path.path.dragging[0],
          y: svgedit.path.path.dragging[1]
        }, svgedit.path.path);
        var mpt = svgedit.path.getPointFromGrip({
          x: mouse_x,
          y: mouse_y
        }, svgedit.path.path);
        var diff_x = mpt.x - pt.x;
        var diff_y = mpt.y - pt.y;

        svgedit.path.path.dragging = [mouse_x, mouse_y];
        if (!is_linked || !svgedit.path.is_linked) svgedit.path.setLinkControlPoints(false);
        else svgedit.path.setLinkControlPoints(true);

        if(svgedit.path.path.dragctrl) {
          svgedit.path.path.moveCtrl(diff_x, diff_y);
        } else {
          svgedit.path.path.movePts(diff_x, diff_y);
        }
      } else {
        //select
        svgedit.path.path.selected_pts = [];
        svgedit.path.path.eachSeg(function(i) {
          var seg = this;
          if(!seg.next && !seg.prev) return;
          var item = seg.item;
          var rbb = rubberBox.getBBox();
          
          var pt = svgedit.path.getGripPt(seg);
          var pt_bb = {
            x: pt.x,
            y: pt.y,
            width: 0,
            height: 0
          };
        
          var sel = svgedit.math.rectsIntersect(rbb, pt_bb);

          this.select(sel);
          //Note that addPtsToSelection is not being run
          if(sel) svgedit.path.path.selected_pts.push(seg.index);
        });

      }
    }, 
    mouseUp: function(evt, element, mouse_x, mouse_y) {
      var lastpointgrip = getElem('ctrlpointgrip_1c1');
      var firstpointgrip = getElem('ctrlpointgrip_0c2');
      if (lastpointgrip)
        this.lastCtrlPoint = [lastpointgrip.getAttribute('cx'), lastpointgrip.getAttribute('cy')];
      else
        this.lastCtrlPoint = [mouse_x, mouse_y]
      if (!svgedit.path.first_grip) {
        if  (firstpointgrip) {
          svgedit.path.first_grip = [firstpointgrip.getAttribute('cx'), firstpointgrip.getAttribute('cy')];
        }
        else {
          svgedit.path.first_grip = [mouse_x, mouse_y];
        }
      }
      // Create mode
      if(current_mode === "path") {
        newPoint = null;
        if(!drawn_path) {
          element = getElem(getId());
          started = false;
          firstCtrl = null;
        }

        return {
          keep: true,
          element: element
        }
      }
      
      // Edit mode
      
      if (svgedit.path.path.dragging) {
        var last_pt = svgedit.path.path.cur_pt;

        svgedit.path.path.dragging = false;
        svgedit.path.path.dragctrl = false;
        svgedit.path.path.update();
        
      
        if(hasMoved) {
          svgedit.path.path.endChanges("Move path point(s)");
        } 
        
        if(!evt.shiftKey && !hasMoved) {
          svgedit.path.path.selectPt(last_pt);
        } 
      }
      else if(rubberBox && rubberBox.getAttribute('display') != 'none') {
        // Done with multi-node-select
        rubberBox.setAttribute("display", "none");
        
        if(rubberBox.getAttribute('width') <= 2 && rubberBox.getAttribute('height') <= 2) {
          pathActions.toSelectMode(evt.target);
        }
        
      // else, move back to select mode 
      } else {
        pathActions.toSelectMode(evt.target);
      }
      hasMoved = false;
    },
    toEditMode: function(element) {
      svgedit.path.path = svgedit.path.getPath_(element);
      current_mode = "pathedit";
      clearSelection();
      svgedit.path.path.show(true).update();
      svgedit.path.path.oldbbox = svgedit.utilities.getBBox(svgedit.path.path.elem);
      subpath = false;
    },
    toSelectMode: function(elem) {
      var selPath = (elem == svgedit.path.path.elem);
      current_mode = "select";
      svgedit.path.path.show(false);
      current_path = false;
      clearSelection();
      
      if(svgedit.path.path.matrix) {
        // Rotated, so may need to re-calculate the center
        svgedit.path.recalcRotatedPath();
      }
      
      if(selPath) {
        call("selected", [elem]);
        addToSelection([elem], true);
      }
    },
    addSubPath: function(on) {
      if(on) {
        // Internally we go into "path" mode, but in the UI it will
        // still appear as if in "pathedit" mode.
        current_mode = "path";
        subpath = true;
      } else {
        pathActions.clear(true);
        pathActions.toEditMode(svgedit.path.path.elem);
      }
    },
    select: function(target) {
      if (current_path === target) {
        pathActions.toEditMode(target);
        current_mode = "pathedit";
      } // going into pathedit mode
      else {
        current_path = target;
      } 
    },
    reorient: function() {
      var elem = selectedElements[0];
      if(!elem) return;
      var angle = getRotationAngle(elem);
      if(angle == 0) return;
      
      var batchCmd = new BatchCommand("Reorient path");
      var changes = {
        d: elem.getAttribute('d'),
        transform: elem.getAttribute('transform')
      };
      batchCmd.addSubCommand(new ChangeElementCommand(elem, changes));
      clearSelection();
      this.resetOrientation(elem);
      
      addCommandToHistory(batchCmd);

      // Set matrix to null
      svgedit.path.getPath_(elem).show(false).matrix = null; 

      this.clear();
  
      addToSelection([elem], true);
      call("changed", selectedElements);
    },
    
    clear: function(remove) {
      current_path = null;
      if (drawn_path) {
        var elem = getElem(getId());
        $(getElem("path_stretch_line")).remove();
        if (remove) $(elem).remove();
        $(getElem("pathpointgrip_container")).find('*').attr('display', 'none');
        drawn_path = firstCtrl = null;
        started = false;
      } else if (current_mode == "pathedit") {
        this.toSelectMode();
      }
      if(svgedit.path.path) svgedit.path.path.init().show(false);
    },
    resetOrientation: function(path) {
      if(path == null || path.nodeName != 'path') return false;
      var tlist = getTransformList(path);
      var m = transformListToTransform(tlist).matrix;
      tlist.clear();
      path.removeAttribute("transform");
      var segList = path.pathSegList;
      
      // Opera/win/non-EN throws an error here.
      // TODO: Find out why!
      // Presumed fixed in Opera 10.5, so commented out for now
      
//      try {
        var len = segList.numberOfItems;
//      } catch(err) {
//        var fixed_d = pathActions.convertPath(path);
//        path.setAttribute('d', fixed_d);
//        segList = path.pathSegList;
//        var len = segList.numberOfItems;
//      }
      var last_x, last_y;


      for (var i = 0; i < len; ++i) {
        var seg = segList.getItem(i);
        var type = seg.pathSegType;
        if(type == 1) continue;
        var pts = [];
        $.each(['',1,2], function(j, n) {
          var x = seg['x'+n], y = seg['y'+n];
          if(x !== undefined && y !== undefined) {
            var pt = transformPoint(x, y, m);
            pts.splice(pts.length, 0, pt.x, pt.y);
          }
        });
        svgedit.path.replacePathSeg(type, i, pts, path);
      }
      
      reorientGrads(path, m);


    },
    zoomChange: function() {
      if(current_mode == "pathedit") {
        svgedit.path.path.update();
      }
    },
    getNodePoint: function() {
      if (!svgedit.path.path) return;
      var sel_pt = svgedit.path.path.selected_pts.length ? svgedit.path.path.selected_pts[0] : 1;

      var seg = svgedit.path.path.segs[sel_pt];
      return {
        x: seg.item.x,
        y: seg.item.y,
        type: seg.type
      };
    }, 
    linkControlPoints: function(linkPoints) {
      svgedit.path.setLinkControlPoints(linkPoints);
    },
    clonePathNode: function() {
      svgedit.path.path.storeD();
      
      var sel_pts = svgedit.path.path.selected_pts;
      var segs = svgedit.path.path.segs;
      
      var i = sel_pts.length;
      var nums = [];

      while(i--) {
        var pt = sel_pts[i];
        svgedit.path.path.addSeg(pt);
        nums.push(pt + i);
        nums.push(pt + i + 1);
      }
      
      svgedit.path.path.init().addPtsToSelection(nums);

      svgedit.path.path.endChanges("Clone path node(s)");
    },
    opencloseSubPath: function() {
      var sel_pts = svgedit.path.path.selected_pts;
      // Only allow one selected node for now
      if(sel_pts.length !== 1) return;
      
      var elem = svgedit.path.path.elem;
      var list = elem.pathSegList;

      var len = list.numberOfItems;

      var index = sel_pts[0];
      
      var open_pt = null;
      var start_item = null;

      // Check if subpath is already open
      svgedit.path.path.eachSeg(function(i) {
        if(this.type === 2 && i <= index) {
          start_item = this.item;
        }
        if(i <= index) return true;
        if(this.type === 2) {
          // Found M first, so open
          open_pt = i;
          return false;
        } else if(this.type === 1) {
          // Found Z first, so closed
          open_pt = false;
          return false;
        }
      });
      
      if(open_pt == null) {
        // Single path, so close last seg
        open_pt = svgedit.path.path.segs.length - 1;
      }

      if(open_pt !== false) {
        // Close this path
        
        // Create a line going to the previous "M"
        var newseg = elem.createSVGPathSegLinetoAbs(start_item.x, start_item.y);
      
        var closer = elem.createSVGPathSegClosePath();
        if(open_pt == svgedit.path.path.segs.length) {
          list.appendItem(newseg);
          list.appendItem(closer);
        } else {
          svgedit.path.insertItemBefore(elem, closer, open_pt);
          svgedit.path.insertItemBefore(elem, newseg, open_pt);
        }
        
        svgedit.path.path.init().selectPt(open_pt+1);
        return;
      }
      
      

      // M 1,1 L 2,2 L 3,3 L 1,1 z // open at 2,2
      // M 2,2 L 3,3 L 1,1
      
      // M 1,1 L 2,2 L 1,1 z M 4,4 L 5,5 L6,6 L 5,5 z 
      // M 1,1 L 2,2 L 1,1 z [M 4,4] L 5,5 L(M)6,6 L 5,5 z 
      
      var seg = svgedit.path.path.segs[index];
      
      if(seg.mate) {
        list.removeItem(index); // Removes last "L"
        list.removeItem(index); // Removes the "Z"
        svgedit.path.path.init().selectPt(index - 1);
        return;
      }
      
      var last_m, z_seg;
      
      // Find this sub-path's closing point and remove
      for(var i=0; i<list.numberOfItems; i++) {
        var item = list.getItem(i);

        if(item.pathSegType === 2) {
          // Find the preceding M
          last_m = i;
        } else if(i === index) {
          // Remove it
          list.removeItem(last_m);
//            index--;
        } else if(item.pathSegType === 1 && index < i) {
          // Remove the closing seg of this subpath
          z_seg = i-1;
          list.removeItem(i);
          break;
        }
      }
      
      var num = (index - last_m) - 1;
      
      while(num--) {
        svgedit.path.insertItemBefore(elem, list.getItem(last_m), z_seg);
      }
      
      var pt = list.getItem(last_m);
      
      // Make this point the new "M"
      svgedit.path.replacePathSeg(2, last_m, [pt.x, pt.y]);
      
      var i = index
      
      svgedit.path.path.init().selectPt(0);
    },
    deletePathNode: function() {
      if(!pathActions.canDeleteNodes) return;
      svgedit.path.path.storeD();
      
      var sel_pts = svgedit.path.path.selected_pts;
      var i = sel_pts.length;

      while(i--) {
        var pt = sel_pts[i];
        svgedit.path.path.deleteSeg(pt);
      }
      
      // Cleanup
      var cleanup = function() {
        var segList = svgedit.path.path.elem.pathSegList;
        var len = segList.numberOfItems;
        
        var remItems = function(pos, count) {
          while(count--) {
            segList.removeItem(pos);
          }
        }

        if(len <= 1) return true;
        
        while(len--) {
          var item = segList.getItem(len);
          if(item.pathSegType === 1) {
            var prev = segList.getItem(len-1);
            var nprev = segList.getItem(len-2);
            if(prev.pathSegType === 2) {
              remItems(len-1, 2);
              cleanup();
              break;
            } else if(nprev.pathSegType === 2) {
              remItems(len-2, 3);
              cleanup();
              break;
            }

          } else if(item.pathSegType === 2) {
            if(len > 0) {
              var prev_type = segList.getItem(len-1).pathSegType;
              // Path has M M  
              if(prev_type === 2) {
                remItems(len-1, 1);
                cleanup();
                break;
              // Entire path ends with Z M 
              } else if(prev_type === 1 && segList.numberOfItems-1 === len) {
                remItems(len, 1);
                cleanup();
                break;
              }
            }
          }
        } 
        return false;
      }
      
      cleanup();
      
      // Completely delete a path with 1 or 0 segments
      if(svgedit.path.path.elem.pathSegList.numberOfItems <= 1) {
        canvas.setMode("select")
        canvas.deleteSelectedElements();
        return;
      }
      
      svgedit.path.path.init();
      
      svgedit.path.path.clearSelection();
      
      // TODO: Find right way to select point now
      // path.selectPt(sel_pt);
      if(window.opera) { // Opera repaints incorrectly
        var cp = $(svgedit.path.path.elem); cp.attr('d',cp.attr('d'));
      }
      svgedit.path.path.endChanges("Delete path node(s)");
    },
    smoothPolylineIntoPath: smoothPolylineIntoPath,
    setSegType: function(v) {
      svgedit.path.path.setSegType(v);
    },
    moveNode: function(attr, newValue) {
      var sel_pts = svgedit.path.path.selected_pts;
      if(!sel_pts.length) return;
      
      svgedit.path.path.storeD();
      
      // Get first selected point
      var seg = svgedit.path.path.segs[sel_pts[0]];
      var diff = {x:0, y:0};
      diff[attr] = newValue - seg.item[attr];
      
      seg.move(diff.x, diff.y);
      svgedit.path.path.endChanges("Move path point");
    },
    fixEnd: function(elem) {
      // Adds an extra segment if the last seg before a Z doesn't end
      // at its M point
      // M0,0 L0,100 L100,100 z
      var segList = elem.pathSegList;
      var len = segList.numberOfItems;
      var last_m;
      for (var i = 0; i < len; ++i) {
        var item = segList.getItem(i);
        if(item.pathSegType === 2) {
          last_m = item;
        }
        
        if(item.pathSegType === 1) {
          var prev = segList.getItem(i-1);
          if(prev.x != last_m.x || prev.y != last_m.y) {
            // Add an L segment here
            var newseg = elem.createSVGPathSegLinetoAbs(last_m.x, last_m.y);
            svgedit.path.insertItemBefore(elem, newseg, i);
            // Can this be done better?
            pathActions.fixEnd(elem);
            break;
          }
          
        }
      }
      if(svgedit.browser.isWebkit()) resetD(elem);
    },
    // Convert a path to one with only absolute or relative values
    convertPath: function(path, toRel) {
      var segList = path.pathSegList;
      var len = segList.numberOfItems;
      var curx = 0, cury = 0;
      var d = "";
      var last_m = null;
      
      for (var i = 0; i < len; ++i) {
        var seg = segList.getItem(i);
        // if these properties are not in the segment, set them to zero
        var x = seg.x || 0,
          y = seg.y || 0,
          x1 = seg.x1 || 0,
          y1 = seg.y1 || 0,
          x2 = seg.x2 || 0,
          y2 = seg.y2 || 0;
  
        var type = seg.pathSegType;
        var letter = pathMap[type]['to'+(toRel?'Lower':'Upper')+'Case']();
        
        var addToD = function(pnts, more, last) {
          var str = '';
          var more = more?' '+more.join(' '):'';
          var last = last?' '+svgedit.units.shortFloat(last):'';
          $.each(pnts, function(i, pnt) {
            pnts[i] = svgedit.units.shortFloat(pnt);
          });
          d += letter + pnts.join(' ') + more + last;
        }
        
        switch (type) {
          case 1: // z,Z closepath (Z/z)
            d += "z";
            if(last_m && !toRel) {
              curx = last_m[0];
              cury = last_m[1];
            }
            break;
          case 12: // absolute horizontal line (H)
            x -= curx;
          case 13: // relative horizontal line (h)
            if(toRel) {
              curx += x;
              letter = 'l';
            } else {
              x += curx;
              curx = x;
              letter = 'L';
            }
            // Convert to "line" for easier editing
            addToD([[x, cury]]);
            break;
          case 14: // absolute vertical line (V)
            y -= cury;
          case 15: // relative vertical line (v)
            if(toRel) {
              cury += y;
              letter = 'l';
            } else {
              y += cury;
              cury = y;
              letter = 'L';
            }
            // Convert to "line" for easier editing
            addToD([[curx, y]]);
            break;
          case 2: // absolute move (M)
          case 4: // absolute line (L)
          case 18: // absolute smooth quad (T)
            x -= curx;
            y -= cury;
          case 5: // relative line (l)
          case 3: // relative move (m)
            // If the last segment was a "z", this must be relative to 
            if(last_m && segList.getItem(i-1).pathSegType === 1 && !toRel) {
              curx = last_m[0];
              cury = last_m[1];
            }
          
          case 19: // relative smooth quad (t)
            if(toRel) {
              curx += x;
              cury += y;
            } else {
              x += curx;
              y += cury;
              curx = x;
              cury = y;
            }
            if(type === 2 || type === 3) last_m = [curx, cury];
            
            addToD([[x,y]]);
            break;
          case 6: // absolute cubic (C)
            x -= curx; x1 -= curx; x2 -= curx;
            y -= cury; y1 -= cury; y2 -= cury;
          case 7: // relative cubic (c)
            if(toRel) {
              curx += x;
              cury += y;
            } else {
              x += curx; x1 += curx; x2 += curx;
              y += cury; y1 += cury; y2 += cury;
              curx = x;
              cury = y;
            }
            addToD([[x1,y1],[x2,y2],[x,y]]);
            break;
          case 8: // absolute quad (Q)
            x -= curx; x1 -= curx;
            y -= cury; y1 -= cury;
          case 9: // relative quad (q) 
            if(toRel) {
              curx += x;
              cury += y;
            } else {
              x += curx; x1 += curx;
              y += cury; y1 += cury;
              curx = x;
              cury = y;
            }
            addToD([[x1,y1],[x,y]]);
            break;
          case 10: // absolute elliptical arc (A)
            x -= curx;
            y -= cury;
          case 11: // relative elliptical arc (a)
            if(toRel) {
              curx += x;
              cury += y;
            } else {
              x += curx;
              y += cury;
              curx = x;
              cury = y;
            }
            addToD([[seg.r1,seg.r2]], [
                seg.angle,
                (seg.largeArcFlag ? 1 : 0),
                (seg.sweepFlag ? 1 : 0)
              ],[x,y]
            );
            break;
          case 16: // absolute smooth cubic (S)
            x -= curx; x2 -= curx;
            y -= cury; y2 -= cury;
          case 17: // relative smooth cubic (s)
            if(toRel) {
              curx += x;
              cury += y;
            } else {
              x += curx; x2 += curx;
              y += cury; y2 += cury;
              curx = x;
              cury = y;
            }
            addToD([[x2,y2],[x,y]]);
            break;
        } // switch on path segment type
      } // for each segment
      return d;
    }
  }
}();
// end pathActions

// Group: Serialization

// Function: removeUnusedDefElems
// Looks at DOM elements inside the <defs> to see if they are referred to,
// removes them from the DOM if they are not.
// 
// Returns:
// The amount of elements that were removed
var removeUnusedDefElems = this.removeUnusedDefElems = function() {
  var defs = svgcontent.getElementsByTagNameNS(svgns, "defs");
  if(!defs || !defs.length) return 0;
  
//  if(!defs.firstChild) return;
  
  var defelem_uses = [],
    numRemoved = 0;
  var attrs = ['fill', 'stroke', 'filter', 'marker-start', 'marker-mid', 'marker-end'];
  var alen = attrs.length;
  
  var all_els = svgcontent.getElementsByTagNameNS(svgns, '*');
  var all_len = all_els.length;
  
  for(var i=0; i<all_len; i++) {
    var el = all_els[i];
    for(var j = 0; j < alen; j++) {
      if(el) {
        var ref = getUrlFromAttr(el.getAttribute(attrs[j]));
        if(ref) {
          defelem_uses.push(ref.substr(1));
        }
      }
    }
    
    // gradients can refer to other gradients
    var href = getHref(el);
    if (href && href.indexOf('#') === 0) {
      defelem_uses.push(href.substr(1));
    }
  };
  
  var defelems = $(defs).find("linearGradient, radialGradient, filter, marker, svg, symbol");
    defelem_ids = [],
    i = defelems.length;
  while (i--) {
    var defelem = defelems[i];
    var id = defelem.id;
    if(defelem_uses.indexOf(id) < 0) {
      // Not found, so remove (but remember)
      removedElements[id] = defelem;
      defelem.parentNode.removeChild(defelem);
      numRemoved++;
    }
  }

  return numRemoved;
}

// Function: svgCanvasToString
// Main function to set up the SVG content for output 
//
// Returns: 
// String containing the SVG image for output
this.svgCanvasToString = function() {
  // keep calling it until there are none to remove
  while (removeUnusedDefElems() > 0) {};
  
  pathActions.clear(true);
  
  // Keep SVG-Edit comment on top
  $.each(svgcontent.childNodes, function(i, node) {
    if(i && node.nodeType === 8 && node.data.indexOf('Created with') >= 0) {
      svgcontent.insertBefore(node, svgcontent.firstChild);
    }
  });
  
  // Move out of in-group editing mode
  if(current_group) {
    leaveContext();
    selectOnly([current_group]);
  }
  
  //hide grid, otherwise shows a black canvas
  $('#canvasGrid').attr('display', 'none');
  
  var naked_svgs = [];
  
  // Unwrap gsvg if it has no special attributes (only id and style)
  $(svgcontent).find('g:data(gsvg)').each(function() {
    var attrs = this.attributes;
    var len = attrs.length;
    for(var i=0; i<len; i++) {
      if(attrs[i].nodeName == 'id' || attrs[i].nodeName == 'style') {
        len--;
      }
    }
    // No significant attributes, so ungroup
    if(len <= 0) {
      var svg = this.firstChild;
      naked_svgs.push(svg);
      $(this).replaceWith(svg);
    }
  });
  var output = this.svgToString(svgcontent, 0);
  
  // Rewrap gsvg
  if(naked_svgs.length) {
    $(naked_svgs).each(function() {
      groupSvgElem(this);
    });
  }
  
  return output;
};

// Function: svgToString
// Sub function ran on each SVG element to convert it to a string as desired
// 
// Parameters: 
// elem - The SVG element to convert
// indent - Integer with the amount of spaces to indent this tag
//
// Returns: 
// String with the given element as an SVG tag
this.svgToString = function(elem, indent) {
  var out = new Array(), toXml = svgedit.utilities.toXml;
  var unit = curConfig.baseUnit;
  var unit_re = new RegExp('^-?[\\d\\.]+' + unit + '$');

  if (elem) {
    cleanupElement(elem);
    var attrs = elem.attributes,
      attr,
      i,
      childs = elem.childNodes;
    
    for (var i=0; i<indent; i++) out.push(" ");
    out.push("<"); out.push(elem.nodeName);
    if(elem.id === 'svgcontent') {
      // Process root element separately
      var res = getResolution();
      
      var vb = "";
      // TODO: Allow this by dividing all values by current baseVal
      // Note that this also means we should properly deal with this on import
//      if(curConfig.baseUnit !== "px") {
//        var unit = curConfig.baseUnit;
//        var unit_m = svgedit.units.getTypeMap()[unit];
//        res.w = svgedit.units.shortFloat(res.w / unit_m)
//        res.h = svgedit.units.shortFloat(res.h / unit_m)
//        vb = ' viewBox="' + [0, 0, res.w, res.h].join(' ') + '"';       
//        res.w += unit;
//        res.h += unit;
//      }
      
      if(unit !== "px") {
        res.w = svgedit.units.convertUnit(res.w, unit) + unit;
        res.h = svgedit.units.convertUnit(res.h, unit) + unit;
      }
      
      out.push(' width="' + res.w + '" height="' + res.h + '"' + vb + ' xmlns="'+svgns+'"');
      
      var nsuris = {};
      
      // Check elements for namespaces, add if found
      $(elem).find('*').addBack().each(function() {
        var el = this;
        $.each(this.attributes, function(i, attr) {
          var uri = attr.namespaceURI;
          if(uri && !nsuris[uri] && nsMap[uri] !== 'xmlns' && nsMap[uri] !== 'xml' ) {
            nsuris[uri] = true;
            out.push(" xmlns:" + nsMap[uri] + '="' + uri +'"');
          }
        });
      });
      
      var i = attrs.length;
      var attr_names = ['width','height','xmlns','x','y','viewBox','id','overflow'];
      while (i--) {
        attr = attrs.item(i);
        var attrVal = toXml(attr.nodeValue);
        
        // Namespaces have already been dealt with, so skip
        if(attr.nodeName.indexOf('xmlns:') === 0) continue;

        // only serialize attributes we don't use internally
        if (attrVal != "" && attr_names.indexOf(attr.localName) == -1) 
        {

          if(!attr.namespaceURI || nsMap[attr.namespaceURI]) {
            out.push(' '); 
            out.push(attr.nodeName); out.push("=\"");
            out.push(attrVal); out.push("\"");
          }
        }
      }
    } else {
      // Skip empty defs
      if(elem.nodeName === 'defs' && !elem.firstChild) return;
    
      var moz_attrs = ['-moz-math-font-style', '_moz-math-font-style'];
      for (var i=attrs.length-1; i>=0; i--) {
        attr = attrs.item(i);
        var attrVal = toXml(attr.nodeValue);
        //remove bogus attributes added by Gecko
        if (moz_attrs.indexOf(attr.localName) >= 0) continue;
        if (attrVal != "") {
          if(attrVal.indexOf('pointer-events') === 0) continue;
          if(attr.localName === "class" && attrVal.indexOf('se_') === 0) continue;
          out.push(" "); 
          if(attr.localName === 'd') attrVal = pathActions.convertPath(elem, true);
          if(!isNaN(attrVal)) {
            attrVal = svgedit.units.shortFloat(attrVal);
          } else if(unit_re.test(attrVal)) {
            attrVal = svgedit.units.shortFloat(attrVal) + unit;
          }
          
          // Embed images when saving 
          if(save_options.apply
            && elem.nodeName === 'image' 
            && attr.localName === 'href'
            && save_options.images
            && save_options.images === 'embed') 
          {
            var img = encodableImages[attrVal];
            if(img) attrVal = img;
          }
          
          // map various namespaces to our fixed namespace prefixes
          // (the default xmlns attribute itself does not get a prefix)
          if(!attr.namespaceURI || attr.namespaceURI == svgns || nsMap[attr.namespaceURI]) {
            out.push(attr.nodeName); out.push("=\"");
            out.push(attrVal); out.push("\"");
          }
        }
      }
    }

    if (elem.hasChildNodes()) {
      out.push(">");
      indent++;
      var bOneLine = false;
      
      for (var i=0; i<childs.length; i++)
      {
        var child = childs.item(i);
        switch(child.nodeType) {
        case 1: // element node
          out.push("\n");
          out.push(this.svgToString(childs.item(i), indent));
          break;
        case 3: // text node
          var str = child.nodeValue.replace(/^\s+|\s+$/g, "");
          if (str != "") {
            bOneLine = true;
            out.push(toXml(str) + "");
          }
          break;
        case 4: // cdata node
          out.push("\n");
          out.push(new Array(indent+1).join(" "));
          out.push("<![CDATA[");
          out.push(child.nodeValue);
          out.push("]]>");
          break;
        case 8: // comment
          out.push("\n");
          out.push(new Array(indent+1).join(" "));
          out.push("<!--");
          out.push(child.data);
          out.push("-->");
          break;
        } // switch on node type
      }
      indent--;
      if (!bOneLine) {
        out.push("\n");
        for (var i=0; i<indent; i++) out.push(" ");
      }
      out.push("</"); out.push(elem.nodeName); out.push(">");
    } else {
      out.push("/>");
    }
  }
  return out.join('');
}; // end svgToString()

// Function: embedImage
// Converts a given image file to a data URL when possible, then runs a given callback
//
// Parameters: 
// val - String with the path/URL of the image
// callback - Optional function to run when image data is found, supplies the
// result (data URL or false) as first parameter.
this.embedImage = function(val, callback) {

  // load in the image and once it's loaded, get the dimensions
  $(new Image()).on("load",
    function() {
    // create a canvas the same size as the raster image
    var canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    // load the raster image into the canvas
    canvas.getContext("2d").drawImage(this,0,0);
    // retrieve the data: URL
    try {
      var urldata = ';svgedit_url=' + encodeURIComponent(val);
      urldata = canvas.toDataURL().replace(';base64',urldata+';base64');
      encodableImages[val] = urldata;
    } catch(e) {
      encodableImages[val] = false;
    }
    last_good_img_url = val;
    if(callback) callback(encodableImages[val]);
  }).attr('src',val);
}

// Function: setGoodImage
// Sets a given URL to be a "last good image" URL
this.setGoodImage = function(val) {
  last_good_img_url = val;
}

this.open = function() {
  // Nothing by default, handled by optional widget/extension
};

// Function: save
// Serializes the current drawing into SVG XML text and returns it to the 'saved' handler.
// This function also includes the XML prolog.  Clients of the SvgCanvas bind their save
// function to the 'saved' event.
//
// Returns: 
// Nothing
this.save = function() {
  // remove the selected outline before serializing
  clearSelection();
  save_options.apply = true;
  
  // no need for doctype, see http://jwatt.org/svg/authoring/#doctype-declaration
  var str = this.svgCanvasToString();
  var blob = new Blob([ str ], {type: "image/svg+xml;charset=utf-8"});
  var dropAutoBOM = true;
  saveAs(blob, "method-draw-image.svg", dropAutoBOM);
};

// Function: rasterExport
// Generates a PNG Data URL based on the current image, then calls "exported" 
// with an object including the string and any issues found
this.rasterExport = function() {
  // remove the selected outline before serializing
  clearSelection();
  
  // Check for known CanVG issues 
  var issues = [];
  
  // Selector and notice
  var issue_list = {
    'feGaussianBlur': "Blurred elements will appear as un-blurred",
    'foreignObject': "foreignObject elements will not appear",
    '[stroke-dasharray]': "Strokes will appear filled"
  };
  var content = $(svgcontent);
  
  // Add font/text check if Canvas Text API is not implemented
  if(!("font" in $('<canvas>')[0].getContext('2d'))) {
    issue_list['text'] = "Text may not appear as expected";
  }
  
  $.each(issue_list, function(sel, descr) {
    if(content.find(sel).length) {
      issues.push(descr);
    }
  });

  var str = this.svgCanvasToString();
  call("exported", {svg: str, issues: issues});
};

// Function: getSvgString
// Returns the current drawing as raw SVG XML text.
//
// Returns:
// The current drawing as raw SVG XML text.
this.getSvgString = function() {
  save_options.apply = false;
  return this.svgCanvasToString();
};

// Function: randomizeIds
// This function determines whether to use a nonce in the prefix, when
// generating IDs for future documents in SVG-Edit.
// 
//  Parameters:
//   an opional boolean, which, if true, adds a nonce to the prefix. Thus
//     svgCanvas.randomizeIds()  <==> svgCanvas.randomizeIds(true)
//
// if you're controlling SVG-Edit externally, and want randomized IDs, call
// this BEFORE calling svgCanvas.setSvgString
//
this.randomizeIds = function() {
  if (arguments.length > 0 && arguments[0] == false) {
    svgedit.draw.randomizeIds(false, getCurrentDrawing());
  } else {
    svgedit.draw.randomizeIds(true, getCurrentDrawing());
  }
};

// Function: uniquifyElems
// Ensure each element has a unique ID
//
// Parameters:
// g - The parent element of the tree to give unique IDs
var uniquifyElems = this.uniquifyElems = function(g) {
  var ids = {};
  // TODO: Handle markers and connectors.  These are not yet re-identified properly
  // as their referring elements do not get remapped.
  //
  // <marker id='se_marker_end_svg_7'/>
  // <polyline id='svg_7' se:connector='svg_1 svg_6' marker-end='url(#se_marker_end_svg_7)'/>
  // 
  // Problem #1: if svg_1 gets renamed, we do not update the polyline's se:connector attribute
  // Problem #2: if the polyline svg_7 gets renamed, we do not update the marker id nor the polyline's marker-end attribute
  var ref_elems = ["filter", "linearGradient", "pattern", "radialGradient", "symbol", "textPath", "use"];
  
  svgedit.utilities.walkTree(g, function(n) {
    // if it's an element node
    if (n.nodeType == 1) {
      // and the element has an ID
      if (n.id) {
        // and we haven't tracked this ID yet
        if (!(n.id in ids)) {
          // add this id to our map
          ids[n.id] = {elem:null, attrs:[], hrefs:[]};
        }
        ids[n.id]["elem"] = n;
      }
      
      // now search for all attributes on this element that might refer
      // to other elements
      $.each(ref_attrs,function(i,attr) {
        var attrnode = n.getAttributeNode(attr);
        if (attrnode) {
          // the incoming file has been sanitized, so we should be able to safely just strip off the leading #
          var url = svgedit.utilities.getUrlFromAttr(attrnode.value),
            refid = url ? url.substr(1) : null;
          if (refid) {
            if (!(refid in ids)) {
              // add this id to our map
              ids[refid] = {elem:null, attrs:[], hrefs:[]};
            }
            ids[refid]["attrs"].push(attrnode);
          }
        }
      });
      
      // check xlink:href now
      var href = svgedit.utilities.getHref(n);
      // TODO: what if an <image> or <a> element refers to an element internally?
      if(href && ref_elems.indexOf(n.nodeName) >= 0)
      {
        var refid = href.substr(1);
        if (refid) {
          if (!(refid in ids)) {
            // add this id to our map
            ids[refid] = {elem:null, attrs:[], hrefs:[]};
          }
          ids[refid]["hrefs"].push(n);
        }
      }           
    }
  });
  
  // in ids, we now have a map of ids, elements and attributes, let's re-identify
  for (var oldid in ids) {
    if (!oldid) continue;
    var elem = ids[oldid]["elem"];
    if (elem) {
      var newid = getNextId();
      
      // assign element its new id
      elem.id = newid;
      
      // remap all url() attributes
      var attrs = ids[oldid]["attrs"];
      var j = attrs.length;
      while (j--) {
        var attr = attrs[j];
        attr.ownerElement.setAttribute(attr.name, "url(#" + newid + ")");
      }
      
      // remap all href attributes
      var hreffers = ids[oldid]["hrefs"];
      var k = hreffers.length;
      while (k--) {
        var hreffer = hreffers[k];
        svgedit.utilities.setHref(hreffer, "#"+newid);
      }
    }
  }
}

// Function setUseData
// Assigns reference data for each use element
var setUseData = this.setUseData = function(parent) {
  var elems = $(parent);
  
  if(parent.tagName !== 'use') {
    elems = elems.find('use');
  }
  
  elems.each(function() {
    var id = getHref(this).substr(1);
    var ref_elem = getElem(id);
    if(!ref_elem) return;
    $(this).data('ref', ref_elem);
    if(ref_elem.tagName == 'symbol' || ref_elem.tagName == 'svg') {
      $(this).data('symbol', ref_elem).data('ref', ref_elem);
    }
  });
}

// Function convertGradients
// Converts gradients from userSpaceOnUse to objectBoundingBox
var convertGradients = this.convertGradients = function(elem) {
  var elems = $(elem).find('linearGradient, radialGradient');
  if(!elems.length && svgedit.browser.isWebkit()) {
    // Bug in webkit prevents regular *Gradient selector search
    elems = $(elem).find('*').filter(function() {
      return (this.tagName.indexOf('Gradient') >= 0);
    });
  }
  
  elems.each(function() {
    var grad = this;
    if($(grad).attr('gradientUnits') === 'userSpaceOnUse') {
      // TODO: Support more than one element with this ref by duplicating parent grad
      var elems = $(svgcontent).find('[fill="url(#' + grad.id + ')"],[stroke="url(#' + grad.id + ')"]');
      if(!elems.length) return;
      
      // get object's bounding box
      var bb = svgedit.utilities.getBBox(elems[0]);
      
      // This will occur if the element is inside a <defs> or a <symbol>,
      // in which we shouldn't need to convert anyway.
      if(!bb) return;
      
      if(grad.tagName === 'linearGradient') {
        var g_coords = $(grad).attr(['x1', 'y1', 'x2', 'y2']);
        
        // If has transform, convert
        var tlist = grad.gradientTransform.baseVal;
        if(tlist && tlist.numberOfItems > 0) {
          var m = transformListToTransform(tlist).matrix;
          var pt1 = transformPoint(g_coords.x1, g_coords.y1, m);
          var pt2 = transformPoint(g_coords.x2, g_coords.y2, m);
          
          g_coords.x1 = pt1.x;
          g_coords.y1 = pt1.y;
          g_coords.x2 = pt2.x;
          g_coords.y2 = pt2.y;
          grad.removeAttribute('gradientTransform');
        }
        
        $(grad).attr({
          x1: (g_coords.x1 - bb.x) / bb.width,
          y1: (g_coords.y1 - bb.y) / bb.height,
          x2: (g_coords.x2 - bb.x) / bb.width,
          y2: (g_coords.y2 - bb.y) / bb.height
        });
        grad.removeAttribute('gradientUnits');
      } else {
        // Note: radialGradient elements cannot be easily converted 
        // because userSpaceOnUse will keep circular gradients, while
        // objectBoundingBox will x/y scale the gradient according to
        // its bbox. 
        
        // For now we'll do nothing, though we should probably have
        // the gradient be updated as the element is moved, as 
        // inkscape/illustrator do.
      
//                var g_coords = $(grad).attr(['cx', 'cy', 'r']);
//                
//            $(grad).attr({
//              cx: (g_coords.cx - bb.x) / bb.width,
//              cy: (g_coords.cy - bb.y) / bb.height,
//              r: g_coords.r
//            });
//            
//                grad.removeAttribute('gradientUnits');
      }
      

    }
  });
}

// Function: convertToGroup
// Converts selected/given <use> or child SVG element to a group
var convertToGroup = this.convertToGroup = function(elem) {
  if(!elem) {
    elem = selectedElements[0];
  }
  var $elem = $(elem);
  
  var batchCmd = new BatchCommand();
  
  var ts;
  
  if($elem.data('gsvg')) {
    // Use the gsvg as the new group
    var svg = elem.firstChild;
    var pt = $(svg).attr(['x', 'y']);
    
    $(elem.firstChild.firstChild).unwrap();
    $(elem).removeData('gsvg');
    
    var tlist = getTransformList(elem);
    var xform = svgroot.createSVGTransform();
    xform.setTranslate(pt.x, pt.y);
    tlist.appendItem(xform);
    recalculateDimensions(elem);
    call("selected", [elem]);
  } else if($elem.data('symbol')) {
    elem = $elem.data('symbol');
    
    ts = $elem.attr('transform');
    var pos = $elem.attr(['x','y']);

    var vb = elem.getAttribute('viewBox');
    
    if(vb) {
      var nums = vb.split(' ');
      pos.x -= +nums[0];
      pos.y -= +nums[1];
    }
    
    // Not ideal, but works
    ts += " translate(" + (pos.x || 0) + "," + (pos.y || 0) + ")";
    
    var prev = $elem.prev();
    
    // Remove <use> element
    batchCmd.addSubCommand(new RemoveElementCommand($elem[0], $elem[0].nextSibling, $elem[0].parentNode));
    $elem.remove();
    
    // See if other elements reference this symbol
    var has_more = $(svgcontent).find('use:data(symbol)').length;
      
    var g = svgdoc.createElementNS(svgns, "g");
    var childs = elem.childNodes;
    
    for(var i = 0; i < childs.length; i++) {
      g.appendChild(childs[i].cloneNode(true));
    }
    
    // Duplicate the gradients for Gecko, since they weren't included in the <symbol>
    if(svgedit.browser.isGecko()) {
      var dupeGrads = $(findDefs()).children('linearGradient,radialGradient,pattern').clone();
      $(g).append(dupeGrads);
    }
    
    if (ts) {
      g.setAttribute("transform", ts);
    }
    
    var parent = elem.parentNode;
    
    uniquifyElems(g);
    
    // Put the dupe gradients back into <defs> (after uniquifying them)
    if(svgedit.browser.isGecko()) {
      $(findDefs()).append( $(g).find('linearGradient,radialGradient,pattern') );
    }
  
    // now give the g itself a new id
    g.id = getNextId();
    
    prev.after(g);
    
    if(parent) {
      if(!has_more) {
        // remove symbol/svg element
        var nextSibling = elem.nextSibling;
        parent.removeChild(elem);
        batchCmd.addSubCommand(new RemoveElementCommand(elem, nextSibling, parent));
      }
      batchCmd.addSubCommand(new InsertElementCommand(g));
    }
    
    setUseData(g);
    
    if(svgedit.browser.isGecko()) {
      convertGradients(findDefs());
    } else {
      convertGradients(g);
    }
    
    // recalculate dimensions on the top-level children so that unnecessary transforms
    // are removed
    svgedit.utilities.walkTreePost(g, function(n){try{recalculateDimensions(n)}catch(e){console.log(e)}});
    
    // Give ID for any visible element missing one
    $(g).find(visElems).each(function() {
      if(!this.id) this.id = getNextId();
    });
    
    selectOnly([g]);
    
    var cm = pushGroupProperties(g, true);
    if(cm) {
      batchCmd.addSubCommand(cm);
    }

    addCommandToHistory(batchCmd);
    
  } else {
    console.log('Unexpected element to ungroup:', elem);
  }
}

//   
// Function: setSvgString
// This function sets the current drawing as the input SVG XML.
//
// Parameters:
// xmlString - The SVG as XML text.
//
// Returns:
// This function returns false if the set was unsuccessful, true otherwise.
this.setSvgString = function(xmlString) {
  try {
    // convert string into XML document
    var newDoc = svgedit.utilities.text2xml(xmlString);

    this.prepareSvg(newDoc);

    var batchCmd = new BatchCommand("Change Source");

    // remove old svg document
    var nextSibling = svgcontent.nextSibling;
    var oldzoom = svgroot.removeChild(svgcontent);
    batchCmd.addSubCommand(new RemoveElementCommand(oldzoom, nextSibling, svgroot));
  
    // set new svg document
    // If DOM3 adoptNode() available, use it. Otherwise fall back to DOM2 importNode()
    if(svgdoc.adoptNode) {
      svgcontent = svgdoc.adoptNode(newDoc.documentElement);
    }
    else {
      svgcontent = svgdoc.importNode(newDoc.documentElement, true);
    }
    
    svgroot.appendChild(svgcontent);
    var content = $(svgcontent);
    
    canvas.current_drawing_ = new svgedit.draw.Drawing(svgcontent, idprefix);
    
    // retrieve or set the nonce
    var nonce = getCurrentDrawing().getNonce();
    if (nonce) {
      call("setnonce", nonce);
    } else {
      call("unsetnonce");
    }
    
    // change image href vals if possible
    content.find('image').each(function() {
      var image = this;
      preventClickDefault(image);
      var val = getHref(this);
      if(val.indexOf('data:') === 0) {
        // Check if an SVG-edit data URI
        var m = val.match(/svgedit_url=(.*?);/);
        if(m) {
          var url = decodeURIComponent(m[1]);
          $(new Image()).load(function() {
            image.setAttributeNS(xlinkns,'xlink:href',url);
          }).attr('src',url);
        }
      }
      // Add to encodableImages if it loads
      canvas.embedImage(val);
    });
  
    // Wrap child SVGs in group elements
    content.find('svg').each(function() {
      // Skip if it's in a <defs>
      if($(this).closest('defs').length) return;
    
      uniquifyElems(this);
    
      // Check if it already has a gsvg group
      var pa = this.parentNode;
      if(pa.childNodes.length === 1 && pa.nodeName === 'g') {
        $(pa).data('gsvg', this);
        pa.id = pa.id || getNextId();
      } else {
        groupSvgElem(this);
      }
    });
    
    // Put all paint elems in defs
    
    content.find('linearGradient, radialGradient, pattern').appendTo(findDefs());
    
    // Set ref element for <use> elements
    
    // TODO: This should also be done if the object is re-added through "redo"
    setUseData(content);
    
    convertGradients(content[0]);
    
    // recalculate dimensions on the top-level children so that unnecessary transforms
    // are removed
    svgedit.utilities.walkTreePost(svgcontent, function(n){try{recalculateDimensions(n)}catch(e){console.log(e)}});
    
    var attrs = {
      id: 'svgcontent',
      overflow: curConfig.show_outside_canvas?'visible':'hidden'
    };
    
    var percs = false;
    
    // determine proper size
    if (content.attr("viewBox")) {
      var vb = content.attr("viewBox").split(' ');
      attrs.width = vb[2];
      attrs.height = vb[3];
    }
    // handle content that doesn't have a viewBox
    else {
      $.each(['width', 'height'], function(i, dim) {
        // Set to 100 if not given
        var val = content.attr(dim);
        
        if(!val) val = '100%';
        
        if((val+'').substr(-1) === "%") {
          // Use user units if percentage given
          percs = true;
        } else {
          attrs[dim] = convertToNum(dim, val);
        }
      });
    }
    
    // identify layers
    identifyLayers();
    
    // Give ID for any visible layer children missing one
    content.children().find(visElems).each(function() {
      if(!this.id) this.id = getNextId();
    });
    
    // Percentage width/height, so let's base it on visible elements
    if(percs) {
      var bb = getStrokedBBox();
      attrs.width = bb.width + bb.x;
      attrs.height = bb.height + bb.y;
    }
    
    // Just in case negative numbers are given or 
    // result from the percs calculation
    if(attrs.width <= 0) attrs.width = 200;
    if(attrs.height <= 0) attrs.height = 200;
    
    content.attr(attrs);
    this.contentW = attrs['width'];
    this.contentH = attrs['height'];
    
    $("#canvas_width").val(this.contentW)
    $("#canvas_height").val(this.contentH)
    var background = $("#canvas_background")
    if (background.length) {
      var opacity = background.attr("fill-opacity")
      opacity = opacity ? parseInt(opacity)*100 : 100
      fill = this.getPaint(background.attr("fill"), opacity, "canvas")
      methodDraw.paintBox.canvas.setPaint(fill)
    }
    else {
      fill = this.getPaint("none", 100, "canvas")
      methodDraw.paintBox.canvas.setPaint(fill)
    }

    batchCmd.addSubCommand(new InsertElementCommand(svgcontent));
    // update root to the correct size
    var changes = content.attr(["width", "height"]);
    batchCmd.addSubCommand(new ChangeElementCommand(svgroot, changes));
    
    // reset zoom
    current_zoom = 1;
    
    // reset transform lists
    svgedit.transformlist.resetListMap();
    clearSelection();
    svgedit.path.clearData();
    svgroot.appendChild(selectorManager.selectorParentGroup);
    
    addCommandToHistory(batchCmd);
    call("changed", [svgcontent]);
  } catch(e) {
    console.log(e);
    return false;
  }

  return true;
};


this.getPaint = function(color, opac, type) {
  // update the editor's fill paint
  var opts = null;
  if (color.indexOf("url(#") === 0) {
    var refElem = svgCanvas.getRefElem(color);
    if(refElem) {
      refElem = refElem.cloneNode(true);
    } else {
      refElem =  $("#" + type + "_color defs *")[0];
    }

    opts = { alpha: opac };
    opts[refElem.tagName] = refElem;
  } 
  else if (color.indexOf("#") === 0) {
    opts = {
      alpha: opac,
      solidColor: color.substr(1)
    };
  }
  else {
    opts = {
      alpha: opac,
      solidColor: 'none'
    };
  }
  return new $.jGraduate.Paint(opts);
};

// Function: importSvgString
// This function imports the input SVG XML as a <symbol> in the <defs>, then adds a
// <use> to the current layer.
//
// Parameters:
// xmlString - The SVG as XML text.
//
// Returns:
// This function returns false if the import was unsuccessful, true otherwise.
// TODO: 
// * properly handle if namespace is introduced by imported content (must add to svgcontent
// and update all prefixes in the imported node)
// * properly handle recalculating dimensions, recalculateDimensions() doesn't handle
// arbitrary transform lists, but makes some assumptions about how the transform list 
// was obtained
// * import should happen in top-left of current zoomed viewport  
this.importSvgString = function(xmlString) {

  try {
    // Get unique ID
    var uid = svgedit.utilities.encode64(xmlString.length + xmlString).substr(0,32);
    
    var useExisting = false;

    // Look for symbol and make sure symbol exists in image
    if(import_ids[uid]) {
      if( $(import_ids[uid].symbol).parents('#svgroot').length ) {
        useExisting = true;
      }
    }
    
    var batchCmd = new BatchCommand("Import SVG");
  
    if(useExisting) {
      var symbol = import_ids[uid].symbol;
      var ts = import_ids[uid].xform;
    } else {
      // convert string into XML document
      var newDoc = svgedit.utilities.text2xml(xmlString);
  
      this.prepareSvg(newDoc);
  
      // import new svg document into our document
      var svg;
      // If DOM3 adoptNode() available, use it. Otherwise fall back to DOM2 importNode()
      if(svgdoc.adoptNode) {
        svg = svgdoc.adoptNode(newDoc.documentElement);
      }
      else {
        svg = svgdoc.importNode(newDoc.documentElement, true);
      }
      
      uniquifyElems(svg);
      
      var innerw = convertToNum('width', svg.getAttribute("width")),
        innerh = convertToNum('height', svg.getAttribute("height")),
        innervb = svg.getAttribute("viewBox"),
        // if no explicit viewbox, create one out of the width and height
        vb = innervb ? innervb.split(" ") : [0,0,innerw,innerh];
      for (var j = 0; j < 4; ++j)
        vb[j] = +(vb[j]);
  
      // TODO: properly handle preserveAspectRatio
      var canvasw = +svgcontent.getAttribute("width"),
        canvash = +svgcontent.getAttribute("height");
      // imported content should be 1/3 of the canvas on its largest dimension
      
      if (innerh > innerw) {
        var ts = "scale(" + (canvash/3)/vb[3] + ")";
      }
      else {
        var ts = "scale(" + (canvash/3)/vb[2] + ")";
      }
      
      // Hack to make recalculateDimensions understand how to scale
      ts = "translate(0) " + ts + " translate(0)";
      
      var symbol = svgdoc.createElementNS(svgns, "symbol");
      var defs = findDefs();
      
      if(svgedit.browser.isGecko()) {
        // Move all gradients into root for Firefox, workaround for this bug:
        // https://bugzilla.mozilla.org/show_bug.cgi?id=353575
        // TODO: Make this properly undo-able.
        $(svg).find('linearGradient, radialGradient, pattern').appendTo(defs);
      }
  
      while (svg.firstChild) {
        var first = svg.firstChild;
        symbol.appendChild(first);
      }
      var attrs = svg.attributes;
      for(var i=0; i < attrs.length; i++) {
        var attr = attrs[i];
        symbol.setAttribute(attr.nodeName, attr.nodeValue);
      }
      symbol.id = getNextId();
      
      // Store data
      import_ids[uid] = {
        symbol: symbol,
        xform: ts
      }
      
      findDefs().appendChild(symbol);
      batchCmd.addSubCommand(new InsertElementCommand(symbol));
    }
    
    
    var use_el = svgdoc.createElementNS(svgns, "use");
    use_el.id = getNextId();
    setHref(use_el, "#" + symbol.id);
    
    (current_group || getCurrentDrawing().getCurrentLayer()).appendChild(use_el);
    batchCmd.addSubCommand(new InsertElementCommand(use_el));
    clearSelection();
    
    use_el.setAttribute("transform", ts);
    recalculateDimensions(use_el);
    $(use_el).data('symbol', symbol).data('ref', symbol);
    addToSelection([use_el]);
    
    // TODO: Find way to add this in a recalculateDimensions-parsable way
//        if (vb[0] != 0 || vb[1] != 0)
//          ts = "translate(" + (-vb[0]) + "," + (-vb[1]) + ") " + ts;
    addCommandToHistory(batchCmd);
    call("changed", [svgcontent]);

  } catch(e) {
    console.log(e);
    return false;
  }

  return true;
};

// TODO(codedread): Move all layer/context functions in draw.js
// Layer API Functions

// Group: Layers

// Function: identifyLayers
// Updates layer system
var identifyLayers = canvas.identifyLayers = function() {
  leaveContext();
  getCurrentDrawing().identifyLayers();
};

// Function: createLayer
// Creates a new top-level layer in the drawing with the given name, sets the current layer 
// to it, and then clears the selection  This function then calls the 'changed' handler.
// This is an undoable action.
//
// Parameters:
// name - The given name
this.createLayer = function(name) {
  var batchCmd = new BatchCommand("Create Layer");
  var new_layer = getCurrentDrawing().createLayer(name);
  batchCmd.addSubCommand(new InsertElementCommand(new_layer));
  addCommandToHistory(batchCmd);
  clearSelection();
  call("changed", [new_layer]);
};

// Function: cloneLayer
// Creates a new top-level layer in the drawing with the given name, copies all the current layer's contents
// to it, and then clears the selection  This function then calls the 'changed' handler.
// This is an undoable action.
//
// Parameters:
// name - The given name
this.cloneLayer = function(name) {
  var batchCmd = new BatchCommand("Duplicate Layer");
  var new_layer = svgdoc.createElementNS(svgns, "g");
  var layer_title = svgdoc.createElementNS(svgns, "title");
  layer_title.textContent = name;
  new_layer.appendChild(layer_title);
  var current_layer = getCurrentDrawing().getCurrentLayer();
  $(current_layer).after(new_layer);
  var childs = current_layer.childNodes;
  for(var i = 0; i < childs.length; i++) {
    var ch = childs[i];
    if(ch.localName == 'title') continue;
    new_layer.appendChild(copyElem(ch));
  }
  
  clearSelection();
  identifyLayers();

  batchCmd.addSubCommand(new InsertElementCommand(new_layer));
  addCommandToHistory(batchCmd);
  canvas.setCurrentLayer(name);
  call("changed", [new_layer]);
};

// Function: deleteCurrentLayer
// Deletes the current layer from the drawing and then clears the selection. This function 
// then calls the 'changed' handler.  This is an undoable action.
this.deleteCurrentLayer = function() {
  var current_layer = getCurrentDrawing().getCurrentLayer();
  var nextSibling = current_layer.nextSibling;
  var parent = current_layer.parentNode;
  current_layer = getCurrentDrawing().deleteCurrentLayer();
  if (current_layer) {
    var batchCmd = new BatchCommand("Delete Layer");
    // store in our Undo History
    batchCmd.addSubCommand(new RemoveElementCommand(current_layer, nextSibling, parent));
    addCommandToHistory(batchCmd);
    clearSelection();
    call("changed", [parent]);
    return true;
  }
  return false;
};

// Function: setCurrentLayer
// Sets the current layer. If the name is not a valid layer name, then this function returns
// false. Otherwise it returns true. This is not an undo-able action.
//
// Parameters:
// name - the name of the layer you want to switch to.
//
// Returns:
// true if the current layer was switched, otherwise false
this.setCurrentLayer = function(name) {
  var result = getCurrentDrawing().setCurrentLayer(svgedit.utilities.toXml(name));
  if (result) {
    clearSelection();
  }
  return result;
};

// Function: renameCurrentLayer
// Renames the current layer. If the layer name is not valid (i.e. unique), then this function 
// does nothing and returns false, otherwise it returns true. This is an undo-able action.
// 
// Parameters:
// newname - the new name you want to give the current layer.  This name must be unique 
// among all layer names.
//
// Returns:
// true if the rename succeeded, false otherwise.
this.renameCurrentLayer = function(newname) {
  var drawing = getCurrentDrawing();
  if (drawing.current_layer) {
    var oldLayer = drawing.current_layer;
    // setCurrentLayer will return false if the name doesn't already exist
    // this means we are free to rename our oldLayer
    if (!canvas.setCurrentLayer(newname)) {
      var batchCmd = new BatchCommand("Rename Layer");
      // find the index of the layer
      for (var i = 0; i < drawing.getNumLayers(); ++i) {
        if (drawing.all_layers[i][1] == oldLayer) break;
      }
      var oldname = drawing.getLayerName(i);
      drawing.all_layers[i][0] = svgedit.utilities.toXml(newname);
    
      // now change the underlying title element contents
      var len = oldLayer.childNodes.length;
      for (var i = 0; i < len; ++i) {
        var child = oldLayer.childNodes.item(i);
        // found the <title> element, now append all the
        if (child && child.tagName == "title") {
          // wipe out old name 
          while (child.firstChild) { child.removeChild(child.firstChild); }
          child.textContent = newname;

          batchCmd.addSubCommand(new ChangeElementCommand(child, {"#text":oldname}));
          addCommandToHistory(batchCmd);
          call("changed", [oldLayer]);
          return true;
        }
      }
    }
    drawing.current_layer = oldLayer;
  }
  return false;
};

// Function: setCurrentLayerPosition
// Changes the position of the current layer to the new value. If the new index is not valid, 
// this function does nothing and returns false, otherwise it returns true. This is an
// undo-able action.
//
// Parameters:
// newpos - The zero-based index of the new position of the layer.  This should be between
// 0 and (number of layers - 1)
// 
// Returns:
// true if the current layer position was changed, false otherwise.
this.setCurrentLayerPosition = function(newpos) {
  var drawing = getCurrentDrawing();
  if (drawing.current_layer && newpos >= 0 && newpos < drawing.getNumLayers()) {
    for (var oldpos = 0; oldpos < drawing.getNumLayers(); ++oldpos) {
      if (drawing.all_layers[oldpos][1] == drawing.current_layer) break;
    }
    // some unknown error condition (current_layer not in all_layers)
    if (oldpos == drawing.getNumLayers()) { return false; }
    
    if (oldpos != newpos) {
      // if our new position is below us, we need to insert before the node after newpos
      var refLayer = null;
      var oldNextSibling = drawing.current_layer.nextSibling;
      if (newpos > oldpos ) {
        if (newpos < drawing.getNumLayers()-1) {
          refLayer = drawing.all_layers[newpos+1][1];
        }
      }
      // if our new position is above us, we need to insert before the node at newpos
      else {
        refLayer = drawing.all_layers[newpos][1];
      }
      svgcontent.insertBefore(drawing.current_layer, refLayer);
      addCommandToHistory(new MoveElementCommand(drawing.current_layer, oldNextSibling, svgcontent));
      
      identifyLayers();
      canvas.setCurrentLayer(drawing.getLayerName(newpos));
      
      return true;
    }
  }
  
  return false;
};

// Function: setLayerVisibility
// Sets the visibility of the layer. If the layer name is not valid, this function return 
// false, otherwise it returns true. This is an undo-able action.
//
// Parameters:
// layername - the name of the layer to change the visibility
// bVisible - true/false, whether the layer should be visible
//
// Returns:
// true if the layer's visibility was set, false otherwise
this.setLayerVisibility = function(layername, bVisible) {
  var drawing = getCurrentDrawing();
  var prevVisibility = drawing.getLayerVisibility(layername);
  var layer = drawing.setLayerVisibility(layername, bVisible);
  if (layer) {
    var oldDisplay = prevVisibility ? 'inline' : 'none';
    addCommandToHistory(new ChangeElementCommand(layer, {'display':oldDisplay}, 'Layer Visibility'));
  } else {
    return false;
  }
  
  if (layer == drawing.getCurrentLayer()) {
    clearSelection();
    pathActions.clear();
  }
//    call("changed", [selected]);  
  return true;
};

// Function: moveSelectedToLayer
// Moves the selected elements to layername. If the name is not a valid layer name, then false 
// is returned.  Otherwise it returns true. This is an undo-able action.
//
// Parameters:
// layername - the name of the layer you want to which you want to move the selected elements
//
// Returns:
// true if the selected elements were moved to the layer, false otherwise.
this.moveSelectedToLayer = function(layername) {
  // find the layer
  var layer = null;
  var drawing = getCurrentDrawing();
  for (var i = 0; i < drawing.getNumLayers(); ++i) {
    if (drawing.getLayerName(i) == layername) {
      layer = drawing.all_layers[i][1];
      break;
    }
  }
  if (!layer) return false;
  
  var batchCmd = new BatchCommand("Move Elements to Layer");
  
  // loop for each selected element and move it
  var selElems = selectedElements;
  var i = selElems.length;
  while (i--) {
    var elem = selElems[i];
    if (!elem) continue;
    var oldNextSibling = elem.nextSibling;
    // TODO: this is pretty brittle!
    var oldLayer = elem.parentNode;
    layer.appendChild(elem);
    batchCmd.addSubCommand(new MoveElementCommand(elem, oldNextSibling, oldLayer));
  }
  
  addCommandToHistory(batchCmd);
  
  return true;
};

this.mergeLayer = function(skipHistory) {
  var batchCmd = new BatchCommand("Merge Layer");
  var drawing = getCurrentDrawing();
  var prev = $(drawing.current_layer).prev()[0];
  if(!prev) return;
  var childs = drawing.current_layer.childNodes;
  var len = childs.length;
  var layerNextSibling = drawing.current_layer.nextSibling;
  batchCmd.addSubCommand(new RemoveElementCommand(drawing.current_layer, layerNextSibling, svgcontent));

  while(drawing.current_layer.firstChild) {
    var ch = drawing.current_layer.firstChild;
    if(ch.localName == 'title') {
      var chNextSibling = ch.nextSibling;
      batchCmd.addSubCommand(new RemoveElementCommand(ch, chNextSibling, drawing.current_layer));
      drawing.current_layer.removeChild(ch);
      continue;
    }
    var oldNextSibling = ch.nextSibling;
    prev.appendChild(ch);
    batchCmd.addSubCommand(new MoveElementCommand(ch, oldNextSibling, drawing.current_layer));
  }
  
  // Remove current layer
  svgcontent.removeChild(drawing.current_layer);
  
  if(!skipHistory) {
    clearSelection();
    identifyLayers();

    call("changed", [svgcontent]);
    
    addCommandToHistory(batchCmd);
  }
  
  drawing.current_layer = prev;
  return batchCmd;
}

this.mergeAllLayers = function() {
  var batchCmd = new BatchCommand("Merge all Layers");
  var drawing = getCurrentDrawing();
  drawing.current_layer = drawing.all_layers[drawing.getNumLayers()-1][1];
  while($(svgcontent).children('g').length > 1) {
    batchCmd.addSubCommand(canvas.mergeLayer(true));
  }
  
  clearSelection();
  identifyLayers();
  call("changed", [svgcontent]);
  addCommandToHistory(batchCmd);
}

// Function: leaveContext
// Return from a group context to the regular kind, make any previously
// disabled elements enabled again
var leaveContext = this.leaveContext = function() {
  var len = disabled_elems.length;
  if(len) {
    for(var i = 0; i < len; i++) {
      var elem = disabled_elems[i];
      
      var orig = elData(elem, 'orig_opac');
      if(orig !== 1) {
        elem.setAttribute('opacity', orig);
      } else {
        elem.removeAttribute('opacity');
      }
      elem.setAttribute('style', 'pointer-events: inherit');
    }
    disabled_elems = [];
    clearSelection(true);
    call("contextset", null);
  }
  current_group = null;
}

// Function: setContext
// Set the current context (for in-group editing)
var setContext = this.setContext = function(elem) {
  leaveContext();
  if(typeof elem === 'string') {
    elem = getElem(elem);
  }

  // Edit inside this group
  current_group = elem;
  
  // Disable other elements
  $(elem).parentsUntil('#svgcontent').addBack().siblings().each(function() {
    var opac = this.getAttribute('opacity') || 1;
    // Store the original's opacity
    elData(this, 'orig_opac', opac);
    this.setAttribute('opacity', opac * .33);
    this.setAttribute('style', 'pointer-events: none');
    disabled_elems.push(this);
  });

  clearSelection();
  call("contextset", current_group);
}

// Group: Document functions

// Function: clear
// Clears the current document.  This is not an undoable action.
this.clear = function() {
  pathActions.clear();

  clearSelection();

  // clear the svgcontent node
  canvas.clearSvgContentElement();

  // create new document
  canvas.current_drawing_ = new svgedit.draw.Drawing(svgcontent);

  // create empty first layer
  canvas.createLayer("Layer 1");
  
  // clear the undo stack
  canvas.undoMgr.resetUndoStack();

  // reset the selector manager
  selectorManager.initGroup();

  // reset the rubber band box
  rubberBox = selectorManager.getRubberBandBox();

  call("cleared");
};

// Function: linkControlPoints
// Alias function
this.linkControlPoints = pathActions.linkControlPoints;

// Function: getContentElem
// Returns the content DOM element
this.getContentElem = function() { return svgcontent; };

// Function: getRootElem
// Returns the root DOM element
this.getRootElem = function() { return svgroot; };

// Function: getSelectedElems
// Returns the array with selected DOM elements
this.getSelectedElems = function() { return selectedElements; };

// Function: getResolution
// Returns the current dimensions and zoom level in an object
var getResolution = this.getResolution = function() {
//    var vb = svgcontent.getAttribute("viewBox").split(' ');
//    return {'w':vb[2], 'h':vb[3], 'zoom': current_zoom};
  
  var width = svgcontent.getAttribute("width")/current_zoom;
  var height = svgcontent.getAttribute("height")/current_zoom;
  
  return {
    'w': width,
    'h': height,
    'zoom': current_zoom
  };
};

// Function: getZoom
// Returns the current zoom level
this.getZoom = function(){return current_zoom;};

// Function: getVersion
// Returns a string which describes the revision number of SvgCanvas.
this.getVersion = function() {
  return "svgcanvas.js ($Rev: 2082 $)";
};

// Function: setConfig
// Update configuration options with given values
//
// Parameters:
// opts - Object with options (see curConfig for examples)
this.setConfig = function(opts) {
  $.extend(curConfig, opts);
}

// Function: getTitle
// Returns the current group/SVG's title contents
this.getTitle = function(elem) {
  elem = elem || selectedElements[0];
  if(!elem) return;
  elem = $(elem).data('gsvg') || $(elem).data('symbol') || elem;
  var childs = elem.childNodes;
  for (var i=0; i<childs.length; i++) {
    if(childs[i].nodeName == 'title') {
      return childs[i].textContent;
    }
  }
  return '';
}

// Function: setGroupTitle
// Sets the group/SVG's title content
// TODO: Combine this with setDocumentTitle
this.setGroupTitle = function(val) {
  var elem = selectedElements[0];
  elem = $(elem).data('gsvg') || elem;
  
  var ts = $(elem).children('title');
  
  var batchCmd = new BatchCommand("Set Label");
  
  if(!val.length) {
    // Remove title element
    var tsNextSibling = ts.nextSibling;
    batchCmd.addSubCommand(new RemoveElementCommand(ts[0], tsNextSibling, elem));
    ts.remove();
  } else if(ts.length) {
    // Change title contents
    var title = ts[0];
    batchCmd.addSubCommand(new ChangeElementCommand(title, {'#text': title.textContent}));
    title.textContent = val;
  } else {
    // Add title element
    title = svgdoc.createElementNS(svgns, "title");
    title.textContent = val;
    $(elem).prepend(title);
    batchCmd.addSubCommand(new InsertElementCommand(title));
  }

  addCommandToHistory(batchCmd);
}

// Function: getDocumentTitle
// Returns the current document title or an empty string if not found
this.getDocumentTitle = function() {
  return canvas.getTitle(svgcontent);
}

// Function: setDocumentTitle
// Adds/updates a title element for the document with the given name.
// This is an undoable action
//
// Parameters:
// newtitle - String with the new title
this.setDocumentTitle = function(newtitle) {
  var childs = svgcontent.childNodes, doc_title = false, old_title = '';
  
  var batchCmd = new BatchCommand("Change Image Title");
  
  for (var i=0; i<childs.length; i++) {
    if(childs[i].nodeName == 'title') {
      doc_title = childs[i];
      old_title = doc_title.textContent;
      break;
    }
  }
  if(!doc_title) {
    doc_title = svgdoc.createElementNS(svgns, "title");
    svgcontent.insertBefore(doc_title, svgcontent.firstChild);
  } 
  
  if(newtitle.length) {
    doc_title.textContent = newtitle;
  } else {
    // No title given, so element is not necessary
    doc_title.parentNode.removeChild(doc_title);
  }
  batchCmd.addSubCommand(new ChangeElementCommand(doc_title, {'#text': old_title}));
  addCommandToHistory(batchCmd);
}

// Function: getEditorNS
// Returns the editor's namespace URL, optionally adds it to root element
//
// Parameters:
// add - Boolean to indicate whether or not to add the namespace value
this.getEditorNS = function(add) {
  if(add) {
    svgcontent.setAttribute('xmlns:se', se_ns);
  }
  return se_ns;
}

// Function: setResolution
// Changes the document's dimensions to the given size
//
// Parameters: 
// x - Number with the width of the new dimensions in user units. 
// Can also be the string "fit" to indicate "fit to content"
// y - Number with the height of the new dimensions in user units. 
//
// Returns:
// Boolean to indicate if resolution change was succesful. 
// It will fail on "fit to content" option with no content to fit to.
this.setResolution = function(x, y) {
  var res = getResolution();
  var w = res.w, h = res.h;
  var batchCmd;

  if(x == 'fit') {
    // Get bounding box
    var bbox = getStrokedBBox();
    
    if(bbox) {
      batchCmd = new BatchCommand("Fit Canvas to Content");
      var visEls = getVisibleElements();
      addToSelection(visEls);
      var dx = [], dy = [];
      $.each(visEls, function(i, item) {
        dx.push(bbox.x*-1);
        dy.push(bbox.y*-1);
      });
      
      var cmd = canvas.moveSelectedElements(dx, dy, true);
      batchCmd.addSubCommand(cmd);
      clearSelection();
      
      x = Math.round(bbox.width);
      y = Math.round(bbox.height);
    } else {
      return false;
    }
  }
  if (x != w || y != h) {
    if(!batchCmd) {
      batchCmd = new BatchCommand("Change Image Dimensions");
    }

    x = convertToNum('width', x);
    y = convertToNum('height', y);
    
    svgcontent.setAttribute('width', x);
    svgcontent.setAttribute('height', y);
    
    this.contentW = x;
    this.contentH = y;
    batchCmd.addSubCommand(new ChangeElementCommand(svgcontent, {"width":w, "height":h}));

    svgcontent.setAttribute("viewBox", [0, 0, x/current_zoom, y/current_zoom].join(' '));
    batchCmd.addSubCommand(new ChangeElementCommand(svgcontent, {"viewBox": ["0 0", w, h].join(' ')}));
  
    addCommandToHistory(batchCmd);
    background = document.getElementById("canvas_background");
    if (background) {
      background.setAttribute("x", -1)
      background.setAttribute("y", -1)
      background.setAttribute("width", x+2)
      background.setAttribute("height", y+2)
    }
    call("changed", [svgcontent]);
  }
  return [x,y];
};

// Function: getOffset
// Returns an object with x, y values indicating the svgcontent element's
// position in the editor's canvas.
this.getOffset = function() {
  return $(svgcontent).attr(['x', 'y']);
}

// Function: setBBoxZoom
// Sets the zoom level on the canvas-side based on the given value
// 
// Parameters:
// val - Bounding box object to zoom to or string indicating zoom option 
// editor_w - Integer with the editor's workarea box's width
// editor_h - Integer with the editor's workarea box's height
this.setBBoxZoom = function(val, editor_w, editor_h) {
  var spacer = .85;
  var bb;
  var calcZoom = function(bb) {
    if(!bb) return false;
    var w_zoom = Math.round((editor_w / bb.width)*100 * spacer)/100;
    var h_zoom = Math.round((editor_h / bb.height)*100 * spacer)/100; 
    var zoomlevel = Math.min(w_zoom,h_zoom);
    canvas.setZoom(zoomlevel);
    return {'zoom': zoomlevel, 'bbox': bb};
  }
  
  if(typeof val == 'object') {
    bb = val;
    if(bb.width == 0 || bb.height == 0) {
      var newzoom = bb.zoom?bb.zoom:current_zoom * bb.factor;
      canvas.setZoom(newzoom);
      return {'zoom': current_zoom, 'bbox': bb};
    }
    return calcZoom(bb);
  }

  switch (val) {
    case 'selection':
      if(!selectedElements[0]) return;
      var sel_elems = $.map(selectedElements, function(n){ if(n) return n; });
      bb = getStrokedBBox(sel_elems);
      break;
    case 'canvas':
      var res = getResolution();
      spacer = .95;
      bb = {width:res.w, height:res.h ,x:0, y:0};
      break;
    case 'content':
      bb = getStrokedBBox();
      break;
    case 'layer':
      bb = getStrokedBBox(getVisibleElements(getCurrentDrawing().getCurrentLayer()));
      break;
    default:
      return;
  }
  return calcZoom(bb);
}

// Function: setZoom
// Sets the zoom to the given level
//
// Parameters:
// zoomlevel - Float indicating the zoom level to change to
this.setZoom = function(zoomlevel) {
  var res = getResolution();
  svgcontent.setAttribute("viewBox", "0 0 " + res.w/zoomlevel + " " + res.h/zoomlevel);
  current_zoom = zoomlevel;
  $.each(selectedElements, function(i, elem) {
    if(!elem) return;
    selectorManager.requestSelector(elem).resize();
  });
  pathActions.zoomChange();
  runExtensions("zoomChanged", zoomlevel);
}

// Function: getMode
// Returns the current editor mode string
this.getMode = function() {
  return current_mode;
};

// Function: setMode
// Sets the editor's mode to the given string
//
// Parameters:
// name - String with the new mode to change to
this.setMode = function(name) {
  
  pathActions.clear();
  textActions.clear();
  $("#workarea").attr("class", name);
  cur_properties = (selectedElements[0] && selectedElements[0].nodeName == 'text') ? cur_text : cur_shape;
  current_mode = name;
};

// Group: Element Styling

// Function: getColor
// Returns the current fill/stroke option
this.getColor = function(type) {
  return cur_properties[type];
};

// Function: setColor
// Change the current stroke/fill color/gradient value
// 
// Parameters:
// type - String indicating fill or stroke
// val - The value to set the stroke attribute to
// preventUndo - Boolean indicating whether or not this should be and undoable option
this.setColor = function(type, val, preventUndo) {
  cur_shape[type] = val;
  cur_properties[type + '_paint'] = {type:"solidColor"};
  var elems = [];
  var i = selectedElements.length;
  while (i--) {
    var elem = selectedElements[i];
    if (elem) {
      if (elem.tagName == "g")
        svgedit.utilities.walkTree(elem, function(e){if(e.nodeName!="g") elems.push(e);});
      else {
        if(type == 'fill') {
          if(elem.tagName != "polyline" && elem.tagName != "line") {
            elems.push(elem);
          }
        } else {
          elems.push(elem);
        }
      }
    }
  }
  if (elems.length > 0) {
    if (!preventUndo) {
      changeSelectedAttribute(type, val, elems);
      call("changed", elems);
    } else 
      changeSelectedAttributeNoUndo(type, val, elems);
  }
}


// Function: findDefs
// Return the document's <defs> element, create it first if necessary
var findDefs = function() {
  var defs = svgcontent.getElementsByTagNameNS(svgns, "defs");
  if (defs.length > 0) {
    defs = defs[0];
  }
  else {
    defs = svgdoc.createElementNS(svgns, "defs" );
    if(svgcontent.firstChild) {
      // first child is a comment, so call nextSibling
      svgcontent.insertBefore( defs, svgcontent.firstChild.nextSibling);
    } else {
      svgcontent.appendChild(defs);
    }
  }
  return defs;
};

// Function: setGradient
// Apply the current gradient to selected element's fill or stroke
//
// Parameters
// type - String indicating "fill" or "stroke" to apply to an element
var setGradient = this.setGradient = function(type) {
  if(!cur_properties[type + '_paint'] || cur_properties[type + '_paint'].type == "solidColor") return;
  var grad = canvas[type + 'Grad'];
  // find out if there is a duplicate gradient already in the defs
  var duplicate_grad = findDuplicateGradient(grad);
  var defs = findDefs();
  // no duplicate found, so import gradient into defs
  if (!duplicate_grad) {
    var orig_grad = grad;
    grad = defs.appendChild( svgdoc.importNode(grad, true) );
    // get next id and set it on the grad
    grad.id = getNextId();
  }
  else { // use existing gradient
    grad = duplicate_grad;
  }
  canvas.setColor(type, "url(#" + grad.id + ")");
  if (type == "canvas") {
    var background = document.getElementById("canvas_background");
    if (background) {
      background.setAttribute('fill', "url(#" + grad.id + ")")
    }
  }
}

// Function: findDuplicateGradient
// Check if exact gradient already exists
//
// Parameters:
// grad - The gradient DOM element to compare to others
//
// Returns:
// The existing gradient if found, null if not
var findDuplicateGradient = function(grad) {
  var defs = findDefs();
  var existing_grads = $(defs).find("linearGradient, radialGradient");
  var i = existing_grads.length;
  var rad_attrs = ['r','cx','cy','fx','fy'];
  while (i--) {
    var og = existing_grads[i];
    if(grad.tagName == "linearGradient") {
      if (grad.getAttribute('x1') != og.getAttribute('x1') ||
        grad.getAttribute('y1') != og.getAttribute('y1') ||
        grad.getAttribute('x2') != og.getAttribute('x2') ||
        grad.getAttribute('y2') != og.getAttribute('y2')) 
      {
        continue;
      }
    } else {
      var grad_attrs = $(grad).attr(rad_attrs);
      var og_attrs = $(og).attr(rad_attrs);
      
      var diff = false;
      $.each(rad_attrs, function(i, attr) {
        if(grad_attrs[attr] != og_attrs[attr]) diff = true;
      });
      
      if(diff) continue;
    }
    
    // else could be a duplicate, iterate through stops
    var stops = grad.getElementsByTagNameNS(svgns, "stop");
    var ostops = og.getElementsByTagNameNS(svgns, "stop");

    if (stops.length != ostops.length) {
      continue;
    }

    var j = stops.length;
    while(j--) {
      var stop = stops[j];
      var ostop = ostops[j];

      if (stop.getAttribute('offset') != ostop.getAttribute('offset') ||
        stop.getAttribute('stop-opacity') != ostop.getAttribute('stop-opacity') ||
        stop.getAttribute('stop-color') != ostop.getAttribute('stop-color')) 
      {
        break;
      }
    }

    if (j == -1) {
      return og;
    }
  } // for each gradient in defs

  return null;
};

function reorientGrads(elem, m) {
  var bb = svgedit.utilities.getBBox(elem);
  for(var i = 0; i < 2; i++) {
    var type = i === 0 ? 'fill' : 'stroke';
    var attrVal = elem.getAttribute(type);
    if(attrVal && attrVal.indexOf('url(') === 0) {
      var grad = getRefElem(attrVal);
      if(grad.tagName === 'linearGradient') {
        var x1 = grad.getAttribute('x1') || 0;
        var y1 = grad.getAttribute('y1') || 0;
        var x2 = grad.getAttribute('x2') || 1;
        var y2 = grad.getAttribute('y2') || 0;
        
        // Convert to USOU points
        x1 = (bb.width * x1) + bb.x;
        y1 = (bb.height * y1) + bb.y;
        x2 = (bb.width * x2) + bb.x;
        y2 = (bb.height * y2) + bb.y;
      
        // Transform those points
        var pt1 = transformPoint(x1, y1, m);
        var pt2 = transformPoint(x2, y2, m);
        
        // Convert back to BB points
        var g_coords = {};
        
        g_coords.x1 = (pt1.x - bb.x) / bb.width;
        g_coords.y1 = (pt1.y - bb.y) / bb.height;
        g_coords.x2 = (pt2.x - bb.x) / bb.width;
        g_coords.y2 = (pt2.y - bb.y) / bb.height;
    
        var newgrad = grad.cloneNode(true);
        $(newgrad).attr(g_coords);
  
        newgrad.id = getNextId();
        findDefs().appendChild(newgrad);
        elem.setAttribute(type, 'url(#' + newgrad.id + ')');
      }
    }
  }
}

// Function: setPaint
// Set a color/gradient to a fill/stroke
//
// Parameters: 
// type - String with "fill" or "stroke"
// paint - The jGraduate paint object to apply
this.setPaint = function(type, paint) {
  // make a copy
  var p = new $.jGraduate.Paint(paint);
  this.setPaintOpacity(type, p.alpha/100, true);
  // now set the current paint object
  cur_properties[type + '_paint'] = p;
  switch ( p.type ) {
    case "solidColor":
      
      if (p.solidColor != "none" && p.solidColor != "#none") {
        this.setColor(type, "#"+p.solidColor)
      }
      else {
        this.setColor(type, "none");
        var selector = (type == "fill") ? "#fill_color rect" : "#stroke_color rect" 
        document.querySelector(selector).setAttribute('fill', 'none');
      }
      break;
    case "linearGradient":
    case "radialGradient":
      canvas[type + 'Grad'] = p[p.type];
      setGradient(type);
      break;
    default:
//      console.log("none!");
  }
};


// this.setStrokePaint = function(p) {
//  // make a copy
//  var p = new $.jGraduate.Paint(p);
//  this.setStrokeOpacity(p.alpha/100);
// 
//  // now set the current paint object
//  cur_properties.stroke_paint = p;
//  switch ( p.type ) {
//    case "solidColor":
//      this.setColor('stroke', p.solidColor != "none" ? "#"+p.solidColor : "none");;
//      break;
//    case "linearGradient"
//    case "radialGradient"
//      canvas.strokeGrad = p[p.type];
//      setGradient(type); 
//    default:
// //     console.log("none!");
//  }
// };
// 
// this.setFillPaint = function(p, addGrad) {
//  // make a copy
//  var p = new $.jGraduate.Paint(p);
//  this.setFillOpacity(p.alpha/100, true);
// 
//  // now set the current paint object
//  cur_properties.fill_paint = p;
//  if (p.type == "solidColor") {
//    this.setColor('fill', p.solidColor != "none" ? "#"+p.solidColor : "none");
//  }
//  else if(p.type == "linearGradient") {
//    canvas.fillGrad = p.linearGradient;
//    if(addGrad) setGradient(); 
//  }
//  else if(p.type == "radialGradient") {
//    canvas.fillGrad = p.radialGradient;
//    if(addGrad) setGradient(); 
//  }
//  else {
// //     console.log("none!");
//  }
// };

// Function: getStrokeWidth
// Returns the current stroke-width value
this.getStrokeWidth = function() {
  return cur_properties.stroke_width;
};

// Function: setStrokeWidth
// Sets the stroke width for the current selected elements
// When attempting to set a line's width to 0, this changes it to 1 instead
//
// Parameters:
// val - A Float indicating the new stroke width value
this.setStrokeWidth = function(val) {
  if(val == 0 && ['line', 'path'].indexOf(current_mode) >= 0) {
    canvas.setStrokeWidth(1);
    return;
  }
  cur_properties.stroke_width = val;
  
  var elems = [];
  var i = selectedElements.length;
  while (i--) {
    var elem = selectedElements[i];
    if (elem) {
      if (elem.tagName == "g")
        svgedit.utilities.walkTree(elem, function(e){if(e.nodeName!="g") elems.push(e);});
      else 
        elems.push(elem);
    }
  }   
  if (elems.length > 0) {
    changeSelectedAttribute("stroke-width", val, elems);
    call("changed", selectedElements);
  }
};

// Function: setStrokeAttr
// Set the given stroke-related attribute the given value for selected elements
//
// Parameters:
// attr - String with the attribute name
// val - String or number with the attribute value
this.setStrokeAttr = function(attr, val) {
  cur_shape[attr.replace('-','_')] = val;
  var elems = [];
  var i = selectedElements.length;
  while (i--) {
    var elem = selectedElements[i];
    if (elem) {
      if (elem.tagName == "g")
        svgedit.utilities.walkTree(elem, function(e){if(e.nodeName!="g") elems.push(e);});
      else 
        elems.push(elem);
    }
  }   
  if (elems.length > 0) {
    changeSelectedAttribute(attr, val, elems);
    call("changed", selectedElements);
  }
};

// Function: getStyle
// Returns current style options
this.getStyle = function() {
  return cur_shape;
}

// Function: getOpacity
// Returns the current opacity
this.getOpacity = function() {
  return cur_shape.opacity;
};

// Function: setOpacity
// Sets the given opacity to the current selected elements
this.setOpacity = function(val) {
  cur_shape.opacity = val;
  changeSelectedAttribute("opacity", val);
};

// Function: getOpacity
// Returns the current fill opacity
this.getFillOpacity = function() {
  return cur_shape.fill_opacity;
};

// Function: getStrokeOpacity
// Returns the current stroke opacity
this.getStrokeOpacity = function() {
  return cur_shape.stroke_opacity;
};

// Function: setPaintOpacity
// Sets the current fill/stroke opacity
//
// Parameters:
// type - String with "fill" or "stroke"
// val - Float with the new opacity value
// preventUndo - Boolean indicating whether or not this should be an undoable action
this.setPaintOpacity = function(type, val, preventUndo) {
  cur_shape[type + '_opacity'] = val;
  if (!preventUndo)
    changeSelectedAttribute(type + "-opacity", val);
  else
    changeSelectedAttributeNoUndo(type + "-opacity", val);
};

// Function: getBlur
// Gets the stdDeviation blur value of the given element
//
// Parameters:
// elem - The element to check the blur value for
this.getBlur = function(elem) {
  var val = 0;
//    var elem = selectedElements[0];
  
  if(elem) {
    var filter_url = elem.getAttribute('filter');
    if(filter_url) {
      var blur = getElem(elem.id + '_blur');
      if(blur) {
        val = blur.firstChild.getAttribute('stdDeviation');
      }
    }
  }
  return val;
};

(function() {
  var cur_command = null;
  var filter = null;
  var filterHidden = false;
  
  // Function: setBlurNoUndo
  // Sets the stdDeviation blur value on the selected element without being undoable
  //
  // Parameters:
  // val - The new stdDeviation value
  canvas.setBlurNoUndo = function(val) {
    if(!filter) {
      canvas.setBlur(val);
      return;
    }
    if(val === 0) {
      // Don't change the StdDev, as that will hide the element.
      // Instead, just remove the value for "filter"
      changeSelectedAttributeNoUndo("filter", "");
      filterHidden = true;
    } else {
      var elem = selectedElements[0];
      if(filterHidden) {
        changeSelectedAttributeNoUndo("filter", 'url(#' + elem.id + '_blur)');
      }
      if(svgedit.browser.isWebkit()) {
        elem.removeAttribute('filter');
        elem.setAttribute('filter', 'url(#' + elem.id + '_blur)');
      }
      changeSelectedAttributeNoUndo("stdDeviation", val, [filter.firstChild]);
      canvas.setBlurOffsets(filter, val);
    }
  }
  
  function finishChange() {
    var bCmd = canvas.undoMgr.finishUndoableChange();
    cur_command.addSubCommand(bCmd);
    addCommandToHistory(cur_command);
    cur_command = null; 
    filter = null;
  }

  // Function: setBlurOffsets
  // Sets the x, y, with, height values of the filter element in order to
  // make the blur not be clipped. Removes them if not neeeded
  //
  // Parameters:
  // filter - The filter DOM element to update
  // stdDev - The standard deviation value on which to base the offset size
  canvas.setBlurOffsets = function(filter, stdDev) {
    if(stdDev > 3) {
      // TODO: Create algorithm here where size is based on expected blur
      assignAttributes(filter, {
        x: '-50%',
        y: '-50%',
        width: '200%',
        height: '200%'
      }, 100);
    } else {
      // Removing these attributes hides text in Chrome (see Issue 579)
      if(!svgedit.browser.isWebkit()) {
        filter.removeAttribute('x');
        filter.removeAttribute('y');
        filter.removeAttribute('width');
        filter.removeAttribute('height');
      }
    }
  }

  // Function: setBlur 
  // Adds/updates the blur filter to the selected element
  //
  // Parameters:
  // val - Float with the new stdDeviation blur value
  // complete - Boolean indicating whether or not the action should be completed (to add to the undo manager)
  canvas.setBlur = function(val, complete) {
    if(cur_command) {
      finishChange();
      return;
    }
  
    // Looks for associated blur, creates one if not found
    var elem = selectedElements[0];
    var elem_id = elem.id;
    filter = getElem(elem_id + '_blur');
    
    val -= 0;
    
    var batchCmd = new BatchCommand();
    
    // Blur found!
    if(filter) {
      if(val === 0) {
        filter = null;
      }
    } else {
      // Not found, so create
      var newblur = addSvgElementFromJson({ "element": "feGaussianBlur",
        "attr": {
          "in": 'SourceGraphic',
          "stdDeviation": val
        }
      });
      
      filter = addSvgElementFromJson({ "element": "filter",
        "attr": {
          "id": elem_id + '_blur'
        }
      });
      
      filter.appendChild(newblur);
      findDefs().appendChild(filter);
      
      batchCmd.addSubCommand(new InsertElementCommand(filter));
    }

    var changes = {filter: elem.getAttribute('filter')};
    
    if(val === 0) {
      elem.removeAttribute("filter");
      batchCmd.addSubCommand(new ChangeElementCommand(elem, changes));
      return;
    } else {
      changeSelectedAttribute("filter", 'url(#' + elem_id + '_blur)');
      
      batchCmd.addSubCommand(new ChangeElementCommand(elem, changes));
      
      canvas.setBlurOffsets(filter, val);
    }
    
    cur_command = batchCmd;
    canvas.undoMgr.beginUndoableChange("stdDeviation", [filter?filter.firstChild:null]);
    if(complete) {
      canvas.setBlurNoUndo(val);
      finishChange();
    }
  };
}());

// Function: getBold
// Check whether selected element is bold or not
//
// Returns:
// Boolean indicating whether or not element is bold
this.getBold = function() {
  var selectedElems = selectedElements.filter(Boolean)
  var isBold = true
  selectedElems.forEach(function(el){
    if (el.getAttribute("font-weight") != "bold") isBold = false;
  });
  return isBold;
};

// Function: setBold
// Make the selected element bold or normal
//
// Parameters:
// b - Boolean indicating bold (true) or normal (false)
this.setBold = function(b) {
  var selectedElems = selectedElements.filter(Boolean)
  selectedElems.forEach(function(selected){
    if (selected != null && selected.tagName  == "text") changeSelectedAttribute("font-weight", b ? "bold" : "normal");
  });
  if (!selectedElems[0].textContent)  textActions.setCursor();
};

// Function: getItalic
// Check whether selected element is italic or not
//
// Returns:
// Boolean indicating whether or not element is italic
this.getItalic = function() {
  var selectedElems = selectedElements.filter(Boolean)
  var isItalic = true
  selectedElems.forEach(function(el){
    if (el.getAttribute("font-style") != "italic") isItalic = false;
  });
  return isItalic;
};

// Function: setItalic
// Make the selected element italic or normal
//
// Parameters:
// b - Boolean indicating italic (true) or normal (false)
this.setItalic = function(i) {
  var selectedElems = selectedElements.filter(Boolean)
  selectedElems.forEach(function(selected){
    if (selected != null && selected.tagName  == "text") changeSelectedAttribute("font-style", i ? "italic" : "normal");
  });
  if (!selectedElems[0].textContent) textActions.setCursor();
};

// Function: getFontFamily
// Returns the current font family
this.getFontFamily = function() {
  return cur_text.font_family;
};

// Function: setFontFamily
// Set the new font family
//
// Parameters:
// val - String with the new font family
this.setFontFamily = function(val) {
  cur_text.font_family = val;
  changeSelectedAttribute("font-family", val);
  if(selectedElements[0] && !selectedElements[0].textContent) {
    textActions.setCursor();
  }
};


// Function: setFontColor
// Set the new font color
//
// Parameters:
// val - String with the new font color
this.setFontColor = function(val) {
  cur_text.fill = val;
  changeSelectedAttribute("fill", val);
};

// Function: getFontColor
// Returns the current font color
this.getFontSize = function() {
  return cur_text.fill;
};

// Function: getFontSize
// Returns the current font size
this.getFontSize = function() {
  return cur_text.font_size;
};

// Function: setFontSize
// Applies the given font size to the selected element
//
// Parameters:
// val - Float with the new font size
this.setFontSize = function(val) {
  cur_text.font_size = val;
  changeSelectedAttribute("font-size", val);
  if(!selectedElements[0].textContent) {
    textActions.setCursor();
  }
};

// Function: getText
// Returns the current text (textContent) of the selected element
this.getText = function() {
  var selected = selectedElements[0];
  if (selected == null) { return ""; }
  return selected.textContent;
};

// Function: setTextContent
// Updates the text element with the given string
//
// Parameters:
// val - String with the new text
this.setTextContent = function(val) {
  changeSelectedAttribute("#text", val);
  textActions.init(val);
  textActions.setCursor();
};

// Function: setImageURL
// Sets the new image URL for the selected image element. Updates its size if
// a new URL is given
// 
// Parameters:
// val - String with the image URL/path
this.setImageURL = function(val) {
  var elem = selectedElements[0];
  if(!elem) return;
  
  var attrs = $(elem).attr(['width', 'height']);
  var setsize = (!attrs.width || !attrs.height);

  var cur_href = getHref(elem);
  
  // Do nothing if no URL change or size change
  if(cur_href !== val) {
    setsize = true;
  } else if(!setsize) return;

  var batchCmd = new BatchCommand("Change Image URL");

  setHref(elem, val);
  batchCmd.addSubCommand(new ChangeElementCommand(elem, {
    "#href": cur_href
  }));

  if(setsize) {
    $(new Image()).load(function() {
      var changes = $(elem).attr(['width', 'height']);
    
      $(elem).attr({
        width: this.width,
        height: this.height
      });
      
      selectorManager.requestSelector(elem).resize();
      
      batchCmd.addSubCommand(new ChangeElementCommand(elem, changes));
      addCommandToHistory(batchCmd);
      call("changed", [elem]);
    }).attr('src',val);
  } else {
    addCommandToHistory(batchCmd);
  }
};

// Function: setLinkURL
// Sets the new link URL for the selected anchor element.
// 
// Parameters:
// val - String with the link URL/path
this.setLinkURL = function(val) {
  var elem = selectedElements[0];
  if(!elem) return;
  if(elem.tagName !== 'a') {
    // See if parent is an anchor
    var parents_a = $(elem).parents('a');
    if(parents_a.length) {
      elem = parents_a[0];
    } else {
      return;
    }
  }
  
  var cur_href = getHref(elem);
  
  if(cur_href === val) return;
  
  var batchCmd = new BatchCommand("Change Link URL");

  setHref(elem, val);
  batchCmd.addSubCommand(new ChangeElementCommand(elem, {
    "#href": cur_href
  }));

  addCommandToHistory(batchCmd);
};


// Function elementAreSame
// Checks if all the selected Elements are the same type
// 
// Parameters:
// None

this.elementsAreSame = function(elements) {
  if (!elements.length || elements[0] == null) return null
  else {
    var isSameElement = function(el) { 
      if (el && selectedElements[0])
        return (el.nodeName == selectedElements[0].nodeName);
      else return null;
    }
    return selectedElements.every(isSameElement);
  }
}


// Function: setRectRadius
// Sets the rx & ry values to the selected rect element to change its corner radius
// 
// Parameters:
// val - The new radius
this.setRectRadius = function(val) {
  if (canvas.elementsAreSame(selectedElements) && selectedElements[0].tagName == "rect") {
    var assign_rr = function(selected){
    var r = selected.getAttribute("rx");
      if (r != val) {
        selected.setAttribute("rx", val);
        selected.setAttribute("ry", val);
        addCommandToHistory(new ChangeElementCommand(selected, {"rx":r, "ry":r}, "Radius"));
        call("changed", [selected]);
      }
    }
    selectedElements.forEach(assign_rr)
  }
};

// Function: makeHyperlink
// Wraps the selected element(s) in an anchor element or converts group to one
this.makeHyperlink = function(url) {
  canvas.groupSelectedElements('a', url);
  
  // TODO: If element is a single "g", convert to "a"
  //  if(selectedElements.length > 1 && selectedElements[1]) {

}

// Function: removeHyperlink
this.removeHyperlink = function() {
  canvas.ungroupSelectedElement();
}

// Group: Element manipulation

// Function: setSegType
// Sets the new segment type to the selected segment(s). 
//
// Parameters:
// new_type - Integer with the new segment type
// See http://www.w3.org/TR/SVG/paths.html#InterfaceSVGPathSeg for list
this.setSegType = function(new_type) {
  pathActions.setSegType(new_type);
}

// TODO(codedread): Remove the getBBox argument and split this function into two.
// Function: convertToPath
// Convert selected element to a path, or get the BBox of an element-as-path
//
// Parameters: 
// elem - The DOM element to be converted
// getBBox - Boolean on whether or not to only return the path's BBox
//
// Returns:
// If the getBBox flag is true, the resulting path's bounding box object.
// Otherwise the resulting path element is returned.
this.convertToPath = function(elem, getBBox) {
  if(elem == null) {
    var elems = selectedElements;
    $.each(selectedElements, function(i, elem) {
      if(elem) canvas.convertToPath(elem);
    });
    return;
  }
  
  if(!getBBox) {
    var batchCmd = new BatchCommand("Convert element to Path");
  }
  
  var attrs = getBBox?{}:{
    "fill": cur_shape.fill,
    "fill-opacity": cur_shape.fill_opacity,
    "stroke": cur_shape.stroke,
    "stroke-width": cur_shape.stroke_width,
    "stroke-dasharray": cur_shape.stroke_dasharray,
    "stroke-linejoin": cur_shape.stroke_linejoin,
    "stroke-linecap": cur_shape.stroke_linecap,
    "stroke-opacity": cur_shape.stroke_opacity,
    "opacity": cur_shape.opacity,
    "visibility":"hidden"
  };
  
  // any attribute on the element not covered by the above
  // TODO: make this list global so that we can properly maintain it
  // TODO: what about @transform, @clip-rule, @fill-rule, etc?
  $.each(['marker-start', 'marker-end', 'marker-mid', 'filter', 'clip-path'], function() {
    if (elem.getAttribute(this)) {
      attrs[this] = elem.getAttribute(this);
    }
  });
  
  var path = addSvgElementFromJson({
    "element": "path",
    "attr": attrs
  });
  
  var eltrans = elem.getAttribute("transform");
  if(eltrans) {
    path.setAttribute("transform",eltrans);
  }
  
  var id = elem.id;
  var parent = elem.parentNode;
  if(elem.nextSibling) {
    parent.insertBefore(path, elem);
  } else {
    parent.appendChild(path);
  }
  
  var d = '';
  
  var joinSegs = function(segs) {
    $.each(segs, function(j, seg) {
      var l = seg[0], pts = seg[1];
      d += l;
      for(var i=0; i < pts.length; i+=2) {
        d += (pts[i] +','+pts[i+1]) + ' ';
      }
    });
  }

  // Possibly the cubed root of 6, but 1.81 works best
  var num = 1.81;

  switch (elem.tagName) {
  case 'ellipse':
  case 'circle':
    var a = $(elem).attr(['rx', 'ry', 'cx', 'cy']);
    var cx = a.cx, cy = a.cy, rx = a.rx, ry = a.ry;
    if(elem.tagName == 'circle') {
      rx = ry = $(elem).attr('r');
    }
  
    joinSegs([
      ['M',[(cx-rx),(cy)]],
      ['C',[(cx-rx),(cy-ry/num), (cx-rx/num),(cy-ry), (cx),(cy-ry)]],
      ['C',[(cx+rx/num),(cy-ry), (cx+rx),(cy-ry/num), (cx+rx),(cy)]],
      ['C',[(cx+rx),(cy+ry/num), (cx+rx/num),(cy+ry), (cx),(cy+ry)]],
      ['C',[(cx-rx/num),(cy+ry), (cx-rx),(cy+ry/num), (cx-rx),(cy)]],
      ['Z',[]]
    ]);
    break;
  case 'path':
    d = elem.getAttribute('d');
    break;
  case 'line':
    var a = $(elem).attr(["x1", "y1", "x2", "y2"]);
    d = "M"+a.x1+","+a.y1+"L"+a.x2+","+a.y2;
    break;
  case 'polyline':
  case 'polygon':
    d = "M" + elem.getAttribute('points');
    break;
  case 'rect':
    var r = $(elem).attr(['rx', 'ry']);
    var rx = r.rx, ry = r.ry;
    var b = elem.getBBox();
    var x = b.x, y = b.y, w = b.width, h = b.height;
    var num = 4-num; // Why? Because!
    if(!rx && !ry) {
      // Regular rect
      joinSegs([
        ['M',[x, y]],
        ['L',[x+w, y]],
        ['L',[x+w, y+h]],
        ['L',[x, y+h]],
        ['L',[x, y]],
        ['Z',[]]
      ]);
    } else {
      if (!ry) ry = rx
      joinSegs([
        ['M',[x, y+ry]],
        ['C',[x,y+ry/num, x+rx/num,y, x+rx,y]],
        ['L',[x+w-rx, y]],
        ['C',[x+w-rx/num,y, x+w,y+ry/num, x+w,y+ry]],
        ['L',[x+w, y+h-ry]],
        ['C',[x+w, y+h-ry/num, x+w-rx/num,y+h, x+w-rx,y+h]],
        ['L',[x+rx, y+h]],
        ['C',[x+rx/num, y+h, x,y+h-ry/num, x,y+h-ry]],
        ['L',[x, y+ry]],
        ['Z',[]]
      ]);
    }
    break;
  default:
    path.parentNode.removeChild(path);
    break;
  }
  
  if(d) {
    path.setAttribute('d',d);
  }
  
  if(!getBBox) {
    // Replace the current element with the converted one
    
    // Reorient if it has a matrix
    if(eltrans) {
      var tlist = getTransformList(path);
      if(hasMatrixTransform(tlist)) {
        pathActions.resetOrientation(path);
      }
    }
    
    var nextSibling = elem.nextSibling;
    batchCmd.addSubCommand(new RemoveElementCommand(elem, nextSibling, parent));
    batchCmd.addSubCommand(new InsertElementCommand(path));

    clearSelection();
    elem.parentNode.removeChild(elem)
    path.setAttribute('id', id);
    path.removeAttribute("visibility");
    addToSelection([path], true);
    
    addCommandToHistory(batchCmd);
    
  } else {
    // Get the correct BBox of the new path, then discard it
    pathActions.resetOrientation(path);
    var bb = false;
    try {
      bb = path.getBBox();
    } catch(e) {
      // Firefox fails
    }
    path.parentNode.removeChild(path);
    return bb;
  }
};


// Function: changeSelectedAttributeNoUndo
// This function makes the changes to the elements. It does not add the change
// to the history stack. 
// 
// Parameters:
// attr - String with the attribute name
// newValue - String or number with the new attribute value
// elems - The DOM elements to apply the change to
var changeSelectedAttributeNoUndo = this.changeSelectedAttributeNoUndo = function(attr, newValue, elems) {
    if(current_mode == 'pathedit') {
      // Editing node
      pathActions.moveNode(attr, newValue);
    }
    var elems = elems || selectedElements;
    var i = elems.length;
    var no_xy_elems = ['g', 'polyline', 'path'];
    var good_g_attrs = ['transform', 'opacity', 'filter'];
    while (i--) {
      var elem = elems[i];
      if (elem == null) continue;
      // Go into "select" mode for text changes
      if(current_mode === "textedit" && attr !== "#text" && elem.textContent.length) {
        textActions.toSelectMode(elem);
      }

      // Set x,y vals on elements that don't have them
      if((attr === 'x' || attr === 'y') && no_xy_elems.indexOf(elem.tagName) >= 0) {
        var bbox = getStrokedBBox([elem]);
        var diff_x = attr === 'x' ? newValue - bbox.x : 0;
        var diff_y = attr === 'y' ? newValue - bbox.y : 0;
        canvas.moveSelectedElements(diff_x*current_zoom, diff_y*current_zoom, true);
        continue;
      }

      var oldval = attr === "#text" ? elem.textContent : elem.getAttribute(attr);
      if (oldval == null)  oldval = "";
      if (oldval !== String(newValue)) {
        if (attr == "#text") {
          var old_w = svgedit.utilities.getBBox(elem).width;
          elem.textContent = newValue;

        } else if (attr == "#href") {
          setHref(elem, newValue);
        }
        else elem.setAttribute(attr, newValue);

        // Timeout needed for Opera & Firefox
        // codedread: it is now possible for this function to be called with elements
        // that are not in the selectedElements array, we need to only request a
        // selector if the element is in that array
        if (selectedElements.indexOf(elem) >= 0) {
          setTimeout(function() {
            // Due to element replacement, this element may no longer
            // be part of the DOM
            if(!elem.parentNode) return;
            selectorManager.requestSelector(elem).resize();
          },0);
        }
        // if this element was rotated, and we changed the position of this element
        // we need to update the rotational transform attribute 
        var angle = getRotationAngle(elem);
        if (angle != 0 && attr != "transform") {
          var tlist = getTransformList(elem);
          var n = tlist.numberOfItems;
          while (n--) {
            var xform = tlist.getItem(n);
            if (xform.type == 4) {
              // remove old rotate
              tlist.removeItem(n);

              var box = svgedit.utilities.getBBox(elem);
              var center = transformPoint(box.x+box.width/2, box.y+box.height/2, transformListToTransform(tlist).matrix);
              var cx = center.x,
                cy = center.y;
              var newrot = svgroot.createSVGTransform();
              newrot.setRotate(angle, cx, cy);
              tlist.insertItemBefore(newrot, n);
              break;
            }
          }
        }
      } // if oldValue != newValue
    } // for each elem
};

// Function: changeSelectedAttribute
// Change the given/selected element and add the original value to the history stack
// If you want to change all selectedElements, ignore the elems argument.
// If you want to change only a subset of selectedElements, then send the
// subset to this function in the elems argument.
// 
// Parameters:
// attr - String with the attribute name
// newValue - String or number with the new attribute value
// elems - The DOM elements to apply the change to
var changeSelectedAttribute = this.changeSelectedAttribute = function(attr, val, elems) {
  var elems = elems || selectedElements;
  canvas.undoMgr.beginUndoableChange(attr, elems);
  var i = elems.length;

  changeSelectedAttributeNoUndo(attr, val, elems);

  var batchCmd = canvas.undoMgr.finishUndoableChange();
  if (!batchCmd.isEmpty()) { 
    addCommandToHistory(batchCmd);
  }
};

// Function: deleteSelectedElements
// Removes all selected elements from the DOM and adds the change to the 
// history stack
this.deleteSelectedElements = function() {
  var batchCmd = new BatchCommand("Delete Elements");
  var len = selectedElements.length;
  var selectedCopy = []; //selectedElements is being deleted
  for (var i = 0; i < len; ++i) {
    var selected = selectedElements[i];
    if (selected == null) break;

    var parent = selected.parentNode;
    var t = selected;
    
    // this will unselect the element and remove the selectedOutline
    selectorManager.releaseSelector(t);
    
    // Remove the path if present.
    svgedit.path.removePath_(t.id);
    
    // Get the parent if it's a single-child anchor
    if(parent.tagName === 'a' && parent.childNodes.length === 1) {
      t = parent;
      parent = parent.parentNode;
    }
    
    var nextSibling = t.nextSibling;
    var elem = parent.removeChild(t);
    selectedCopy.push(selected); //for the copy
    selectedElements[i] = null;
    batchCmd.addSubCommand(new RemoveElementCommand(elem, nextSibling, parent));
  }
  if (!batchCmd.isEmpty()) addCommandToHistory(batchCmd);
  call("changed", selectedCopy);
  clearSelection();
};

// Function: cutSelectedElements
// Removes all selected elements from the DOM and adds the change to the 
// history stack. Remembers removed elements on the clipboard

// TODO: Combine similar code with deleteSelectedElements
this.cutSelectedElements = function() {
  var batchCmd = new BatchCommand("Cut Elements");
  var len = selectedElements.length;
  var selectedCopy = []; //selectedElements is being deleted
  for (var i = 0; i < len; ++i) {
    var selected = selectedElements[i];
    if (selected == null) break;

    var parent = selected.parentNode;
    var t = selected;

    // this will unselect the element and remove the selectedOutline
    selectorManager.releaseSelector(t);

    // Remove the path if present.
    svgedit.path.removePath_(t.id);

    var nextSibling = t.nextSibling;
    var elem = parent.removeChild(t);
    selectedCopy.push(selected); //for the copy
    selectedElements[i] = null;
    batchCmd.addSubCommand(new RemoveElementCommand(elem, nextSibling, parent));
  }
  if (!batchCmd.isEmpty()) addCommandToHistory(batchCmd);
  call("changed", selectedCopy);
  clearSelection();
  
  canvas.clipBoard = selectedCopy;
};

// Function: copySelectedElements
// Remembers the current selected elements on the clipboard
this.copySelectedElements = function() {
  canvas.clipBoard = $.merge([], selectedElements);
};

this.pasteElements = function(type, x, y) {
  var cb = canvas.clipBoard;
  var len = cb.length;
  if(!len) return;
  
  var pasted = [];
  var batchCmd = new BatchCommand('Paste elements');
  
  // Move elements to lastClickPoint

  while (len--) {
    var elem = cb[len];
    if(!elem) continue;
    var copy = copyElem(elem);

    // See if elem with elem ID is in the DOM already
    if(!getElem(elem.id)) copy.id = elem.id;
    pasted.push(copy);
    (current_group || getCurrentDrawing().getCurrentLayer()).appendChild(copy);
    batchCmd.addSubCommand(new InsertElementCommand(copy));
  }
  svgCanvas.clearSelection();
  setTimeout(function(){selectOnly(pasted)},100);
  

  
  addCommandToHistory(batchCmd);
  call("changed", pasted);
}

// Function: groupSelectedElements
// Wraps all the selected elements in a group (g) element

// Parameters: 
// type - type of element to group into, defaults to <g>
this.groupSelectedElements = function(type) {
  if(!type) type = 'g';
  var cmd_str = '';
  
  switch ( type ) {
    case "a":
      cmd_str = "Make hyperlink";
      var url = '';
      if(arguments.length > 1) {
        url = arguments[1];
      }
      break;
    default:
      type = 'g';
      cmd_str = "Group Elements";
      break;
  }
  
  var batchCmd = new BatchCommand(cmd_str);
  
  // create and insert the group element
  var g = addSvgElementFromJson({
              "element": type,
              "attr": {
                "id": getNextId()
              }
            });
  if(type === 'a') {
    setHref(g, url);
  }
  batchCmd.addSubCommand(new InsertElementCommand(g));
  
  // now move all children into the group
  var i = selectedElements.length;
  while (i--) {
    var elem = selectedElements[i];
    if (elem == null) continue;
    
    if (elem.parentNode.tagName === 'a' && elem.parentNode.childNodes.length === 1) {
      elem = elem.parentNode;
    }
    
    var oldNextSibling = elem.nextSibling;
    var oldParent = elem.parentNode;
    g.appendChild(elem);
    batchCmd.addSubCommand(new MoveElementCommand(elem, oldNextSibling, oldParent));      
  }
  if (!batchCmd.isEmpty()) addCommandToHistory(batchCmd);
  
  // update selection
  selectOnly([g], true);
};


// Function: pushGroupProperties
// Pushes all appropriate parent group properties down to its children, then
// removes them from the group
var pushGroupProperties = this.pushGroupProperties = function(g, undoable) {

  var children = g.childNodes;
  var len = children.length;
  var xform = g.getAttribute("transform");

  var glist = getTransformList(g);
  var m = transformListToTransform(glist).matrix;
  
  var batchCmd = new BatchCommand("Push group properties");

  // TODO: get all fill/stroke properties from the group that we are about to destroy
  // "fill", "fill-opacity", "fill-rule", "stroke", "stroke-dasharray", "stroke-dashoffset", 
  // "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", 
  // "stroke-width"
  // and then for each child, if they do not have the attribute (or the value is 'inherit')
  // then set the child's attribute
  
  var i = 0;
  var gangle = getRotationAngle(g);
  
  var gattrs = $(g).attr(['filter', 'opacity']);
  var gfilter, gblur;
  
  for(var i = 0; i < len; i++) {
    var elem = children[i];
    
    if(elem.nodeType !== 1) continue;
    
    if(gattrs.opacity !== null && gattrs.opacity !== 1) {
      var c_opac = elem.getAttribute('opacity') || 1;
      var new_opac = Math.round((elem.getAttribute('opacity') || 1) * gattrs.opacity * 100)/100;
      changeSelectedAttribute('opacity', new_opac, [elem]);
    }

    if(gattrs.filter) {
      var cblur = this.getBlur(elem);
      var orig_cblur = cblur;
      if(!gblur) gblur = this.getBlur(g);
      if(cblur) {
        // Is this formula correct?
        cblur = (gblur-0) + (cblur-0);
      } else if(cblur === 0) {
        cblur = gblur;
      }
      
      // If child has no current filter, get group's filter or clone it.
      if(!orig_cblur) {
        // Set group's filter to use first child's ID
        if(!gfilter) {
          gfilter = getRefElem(gattrs.filter);
        } else {
          // Clone the group's filter
          gfilter = copyElem(gfilter);
          findDefs().appendChild(gfilter);
        }
      } else {
        gfilter = getRefElem(elem.getAttribute('filter'));
      }

      // Change this in future for different filters
      var suffix = (gfilter.firstChild.tagName === 'feGaussianBlur')?'blur':'filter'; 
      gfilter.id = elem.id + '_' + suffix;
      changeSelectedAttribute('filter', 'url(#' + gfilter.id + ')', [elem]);
      
      // Update blur value 
      if(cblur) {
        changeSelectedAttribute('stdDeviation', cblur, [gfilter.firstChild]);
        canvas.setBlurOffsets(gfilter, cblur);
      }
    }
    
    var chtlist = getTransformList(elem);

    // Don't process gradient transforms
    if(~elem.tagName.indexOf('Gradient')) chtlist = null;
    
    // Hopefully not a problem to add this. Necessary for elements like <desc/>
    if(!chtlist) continue;
    
    // Apparently <defs> can get get a transformlist, but we don't want it to have one!
    if(elem.tagName === 'defs') continue;
    
    if (glist.numberOfItems) {
      // TODO: if the group's transform is just a rotate, we can always transfer the
      // rotate() down to the children (collapsing consecutive rotates and factoring
      // out any translates)
      if (gangle && glist.numberOfItems == 1) {
        // [Rg] [Rc] [Mc]
        // we want [Tr] [Rc2] [Mc] where:
        //  - [Rc2] is at the child's current center but has the 
        //    sum of the group and child's rotation angles
        //  - [Tr] is the equivalent translation that this child 
        //    undergoes if the group wasn't there
        
        // [Tr] = [Rg] [Rc] [Rc2_inv]
        
        // get group's rotation matrix (Rg)
        var rgm = glist.getItem(0).matrix;
        
        // get child's rotation matrix (Rc)
        var rcm = svgroot.createSVGMatrix();
        var cangle = getRotationAngle(elem);
        if (cangle) {
          rcm = chtlist.getItem(0).matrix;
        }
        
        // get child's old center of rotation
        var cbox = svgedit.utilities.getBBox(elem);
        var ceqm = transformListToTransform(chtlist).matrix;
        var coldc = transformPoint(cbox.x+cbox.width/2, cbox.y+cbox.height/2,ceqm);
        
        // sum group and child's angles
        var sangle = gangle + cangle;
        
        // get child's rotation at the old center (Rc2_inv)
        var r2 = svgroot.createSVGTransform();
        r2.setRotate(sangle, coldc.x, coldc.y);
        
        // calculate equivalent translate
        var trm = matrixMultiply(rgm, rcm, r2.matrix.inverse());
        
        // set up tlist
        if (cangle) {
          chtlist.removeItem(0);
        }
        
        if (sangle) {
          if(chtlist.numberOfItems) {
            chtlist.insertItemBefore(r2, 0);
          } else {
            chtlist.appendItem(r2);
          }
        }

        if (trm.e || trm.f) {
          var tr = svgroot.createSVGTransform();
          tr.setTranslate(trm.e, trm.f);
          if(chtlist.numberOfItems) {
            chtlist.insertItemBefore(tr, 0);
          } else {
            chtlist.appendItem(tr);
          }
        }
      }
      else { // more complicated than just a rotate
      
        // transfer the group's transform down to each child and then
        // call recalculateDimensions()       
        var oldxform = elem.getAttribute("transform");
        var changes = {};
        changes["transform"] = oldxform ? oldxform : "";

        var newxform = svgroot.createSVGTransform();

        // [ gm ] [ chm ] = [ chm ] [ gm' ]
        // [ gm' ] = [ chm_inv ] [ gm ] [ chm ]
        var chm = transformListToTransform(chtlist).matrix,
          chm_inv = chm.inverse();
        var gm = matrixMultiply( chm_inv, m, chm );
        newxform.setMatrix(gm);
        chtlist.appendItem(newxform);
      }
      var cmd = recalculateDimensions(elem);
      if(cmd) batchCmd.addSubCommand(cmd);
    }
  }

  
  // remove transform and make it undo-able
  if (xform) {
    var changes = {};
    changes["transform"] = xform;
    g.setAttribute("transform", "");
    g.removeAttribute("transform");       
    batchCmd.addSubCommand(new ChangeElementCommand(g, changes));
  }
  
  if (undoable && !batchCmd.isEmpty()) {
    return batchCmd;
  }
}


// Function: ungroupSelectedElement
// Unwraps all the elements in a selected group (g) element. This requires
// significant recalculations to apply group's transforms, etc to its children
this.ungroupSelectedElement = function() {
  var g = selectedElements[0];
  if($(g).data('gsvg') || $(g).data('symbol')) {
    // Is svg, so actually convert to group

    convertToGroup(g);
    return;
  } else if(g.tagName === 'use') {
    // Somehow doesn't have data set, so retrieve
    var symbol = getElem(getHref(g).substr(1));
    $(g).data('symbol', symbol).data('ref', symbol);
    convertToGroup(g);
    return;
  }
  var parents_a = $(g).parents('a');
  if(parents_a.length) {
    g = parents_a[0];
  }
  
  // Look for parent "a"
  if (g.tagName === "g" || g.tagName === "a") {
    
    var batchCmd = new BatchCommand("Ungroup Elements");
    var cmd = pushGroupProperties(g, true);
    if(cmd) batchCmd.addSubCommand(cmd);
    
    var parent = g.parentNode;
    var anchor = g.nextSibling;
    var children = new Array(g.childNodes.length);
    
    var i = 0;
    
    while (g.firstChild) {
      var elem = g.firstChild;
      var oldNextSibling = elem.nextSibling;
      var oldParent = elem.parentNode;
      
      // Remove child title elements
      if(elem.tagName === 'title') {
        var nextSibling = elem.nextSibling;
        batchCmd.addSubCommand(new RemoveElementCommand(elem, nextSibling, oldParent));
        oldParent.removeChild(elem);
        continue;
      }
      
      children[i++] = elem = parent.insertBefore(elem, anchor);
      batchCmd.addSubCommand(new MoveElementCommand(elem, oldNextSibling, oldParent));
    }

    // remove the group from the selection      
    clearSelection();
    
    // delete the group element (but make undo-able)
    var gNextSibling = g.nextSibling;
    g = parent.removeChild(g);
    batchCmd.addSubCommand(new RemoveElementCommand(g, gNextSibling, parent));

    if (!batchCmd.isEmpty()) addCommandToHistory(batchCmd);
    
    // update selection
    addToSelection(children);
  }
};

// Function: moveToTopSelectedElement
// Repositions the selected element to the bottom in the DOM to appear on top of
// other elements
this.moveToTopSelectedElement = function() {
  var selected = selectedElements.filter(Boolean).reverse();
  var batchCmd = new BatchCommand("Move to top");
  selected.forEach(function(element){
    var t = element;
    var oldParent = t.parentNode;
    var oldNextSibling = t.nextSibling;
    t = t.parentNode.appendChild(t);
    // If the element actually moved position, add the command and fire the changed
    // event handler.
    if (oldNextSibling != t.nextSibling) {
      batchCmd.addSubCommand(new MoveElementCommand(t, oldNextSibling, oldParent, "top"));
      call("changed", [t]);
    }
    if (!batchCmd.isEmpty()) addCommandToHistory(batchCmd);
  })
};

// Function: moveToBottomSelectedElement
// Repositions the selected element to the top in the DOM to appear under 
// other elements
this.moveToBottomSelectedElement = function() {
  var selected = selectedElements.filter(Boolean).reverse();
  var batchCmd = new BatchCommand("Move to top");
  selected.forEach(function(element){
    var t = element;
    var oldParent = t.parentNode;
    var oldNextSibling = t.nextSibling;
    var firstChild = t.parentNode.firstChild;
    if (firstChild.tagName == 'title') {
      firstChild = firstChild.nextSibling;
    }
    // This can probably be removed, as the defs should not ever apppear
    // inside a layer group
    if (firstChild.tagName == 'defs') {
      firstChild = firstChild.nextSibling;
    }
    t = t.parentNode.insertBefore(t, firstChild);
    // If the element actually moved position, add the command and fire the changed
    // event handler.
    if (oldNextSibling != t.nextSibling) {
      batchCmd.addSubCommand(new MoveElementCommand(t, oldNextSibling, oldParent, "bottom"));
      call("changed", [t]);
    }
  })
  if (!batchCmd.isEmpty()) addCommandToHistory(batchCmd);
};

// Function: moveUpDownSelected
// Moves the select element up or down the stack, based on the visibly
// intersecting elements
//
// Parameters: 
// dir - String that's either 'Up' or 'Down'
this.moveUpDownSelected = function(dir) {
  var selected = selectedElements.filter(Boolean);
  if(dir == 'Down') selected.reverse();
  var batchCmd = new BatchCommand("Move " + dir);
  selected.forEach(function(selected){
    curBBoxes = [];
    var closest, found_cur;
    // jQuery sorts this list
    var list = $(getIntersectionList(getStrokedBBox([selected]))).toArray();
    if(dir == 'Down') list.reverse();

    $.each(list, function() {
      if(!found_cur) {
        if(this == selected) {
          found_cur = true;
        }
        return;
      }
      closest = this;
      return false;
    });
    if(!closest) return;
    
    var t = selected;
    var oldParent = t.parentNode;
    var oldNextSibling = t.nextSibling;
    $(closest)[dir == 'Down'?'before':'after'](t);
    // If the element actually moved position, add the command and fire the changed
    // event handler.
    if (oldNextSibling != t.nextSibling) {
      batchCmd.addSubCommand(new MoveElementCommand(t, oldNextSibling, oldParent, "Move " + dir));
      call("changed", [t]);
    }
  });
  if (!batchCmd.isEmpty()) addCommandToHistory(batchCmd);
};

// Function: moveSelectedElements
// Moves selected elements on the X/Y axis 
//
// Parameters:
// dx - Float with the distance to move on the x-axis
// dy - Float with the distance to move on the y-axis
// undoable - Boolean indicating whether or not the action should be undoable
//
// Returns:
// Batch command for the move
this.moveSelectedElements = function(dx, dy, undoable) {
  // if undoable is not sent, default to true
  // if single values, scale them to the zoom
  if (dx.constructor != Array) {
    dx /= current_zoom;
    dy /= current_zoom;
  }
  var undoable = undoable || true;
  var batchCmd = new BatchCommand("position");
  var i = selectedElements.length;
  while (i--) {
    var selected = selectedElements[i];
    if (selected != null) {
//      if (i==0)
//        selectedBBoxes[0] = svgedit.utilities.getBBox(selected);
      
//      var b = {};
//      for(var j in selectedBBoxes[i]) b[j] = selectedBBoxes[i][j];
//      selectedBBoxes[i] = b;
      
      var xform = svgroot.createSVGTransform();
      var tlist = getTransformList(selected);
      
      // dx and dy could be arrays
      if (dx.constructor == Array) {
//        if (i==0) {
//          selectedBBoxes[0].x += dx[0];
//          selectedBBoxes[0].y += dy[0];
//        }
        xform.setTranslate(dx[i],dy[i]);
      } else {
//        if (i==0) {
//          selectedBBoxes[0].x += dx;
//          selectedBBoxes[0].y += dy;
//        }
        xform.setTranslate(dx,dy);
      }

      if(tlist.numberOfItems) {
        tlist.insertItemBefore(xform, 0);
      } else {
        tlist.appendItem(xform);
      }
      
      var cmd = recalculateDimensions(selected);
      if (cmd) {
        batchCmd.addSubCommand(cmd);
      }
      
      selectorManager.requestSelector(selected).resize();
    }
  }
  if (!batchCmd.isEmpty()) {
    if (undoable)
      addCommandToHistory(batchCmd);
    call("changed", selectedElements);
    return batchCmd;
  }
};

// Function: cloneSelectedElements
// Create deep DOM copies (clones) of all selected elements and move them slightly 
// from their originals
this.cloneSelectedElements = function(x,y, drag) {
  var batchCmd = new BatchCommand("Clone Elements");
  // find all the elements selected (stop at first null)
  var len = selectedElements.length;
  for (var i = 0; i < len; ++i) {
    var elem = selectedElements[i];
    if (elem == null) break;
  }
  // use slice to quickly get the subset of elements we need
  var copiedElements = selectedElements.slice(0,i);
  this.clearSelection(true);
  // note that we loop in the reverse way because of the way elements are added
  // to the selectedElements array (top-first)
  var i = copiedElements.length;
  clones = []
  while (i--) {
    // clone each element and replace it within copiedElements
    var elem = copiedElements[i] 
    var clone = copyElem(copiedElements[i]);
    var parent = (current_group || getCurrentDrawing().getCurrentLayer())
    if (drag) {
      //removed the dragged transform until that moment
      tlist = getTransformList(clone)
      tlist.removeItem(0)
      recalculateDimensions(clone)
      parent.insertBefore(clone, elem);
    }
    else {
      parent.appendChild(clone);
    }
    clones.push(clone)
    batchCmd.addSubCommand(new InsertElementCommand(clone));
  }
  
  if (!batchCmd.isEmpty()) {
    addToSelection(copiedElements.reverse()); // Need to reverse for correct selection-adding
    if (!drag) this.moveSelectedElements(x,y,false);
    addCommandToHistory(batchCmd);
  }
  return clones
};

// Function: alignSelectedElements
// Aligns selected elements
//
// Parameters:
// type - String with single character indicating the alignment type
// relative_to - String that must be one of the following: 
// "selected", "largest", "smallest", "page"
this.alignSelectedElements = function(type, relative_to) {
  var bboxes = [], angles = [];
  var minx = Number.MAX_VALUE, maxx = Number.MIN_VALUE, miny = Number.MAX_VALUE, maxy = Number.MIN_VALUE;
  var curwidth = Number.MIN_VALUE, curheight = Number.MIN_VALUE;
  var len = selectedElements.length;
  if (!len) return;
  for (var i = 0; i < len; ++i) {
    if (selectedElements[i] == null) break;
    var elem = selectedElements[i];
    bboxes[i] = getStrokedBBox([elem]);
    
    // now bbox is axis-aligned and handles rotation
    switch (relative_to) {
      case 'smallest':
        if ( (type == 'l' || type == 'c' || type == 'r') && (curwidth == Number.MIN_VALUE || curwidth > bboxes[i].width) ||
           (type == 't' || type == 'm' || type == 'b') && (curheight == Number.MIN_VALUE || curheight > bboxes[i].height) ) {
          minx = bboxes[i].x;
          miny = bboxes[i].y;
          maxx = bboxes[i].x + bboxes[i].width;
          maxy = bboxes[i].y + bboxes[i].height;
          curwidth = bboxes[i].width;
          curheight = bboxes[i].height;
        }
        break;
      case 'largest':
        if ( (type == 'l' || type == 'c' || type == 'r') && (curwidth == Number.MIN_VALUE || curwidth < bboxes[i].width) ||
           (type == 't' || type == 'm' || type == 'b') && (curheight == Number.MIN_VALUE || curheight < bboxes[i].height) ) {
          minx = bboxes[i].x;
          miny = bboxes[i].y;
          maxx = bboxes[i].x + bboxes[i].width;
          maxy = bboxes[i].y + bboxes[i].height;
          curwidth = bboxes[i].width;
          curheight = bboxes[i].height;
        }
        break;
      default: // 'selected'
        if (bboxes[i].x < minx) minx = bboxes[i].x;
        if (bboxes[i].y < miny) miny = bboxes[i].y;
        if (bboxes[i].x + bboxes[i].width > maxx) maxx = bboxes[i].x + bboxes[i].width;
        if (bboxes[i].y + bboxes[i].height > maxy) maxy = bboxes[i].y + bboxes[i].height;
        break;
    }
  } // loop for each element to find the bbox and adjust min/max

  if (relative_to == 'page') {
    minx = 0;
    miny = 0;
    maxx = canvas.contentW;
    maxy = canvas.contentH;
  }

  var dx = new Array(len);
  var dy = new Array(len);
  for (var i = 0; i < len; ++i) {
    if (selectedElements[i] == null) break;
    var elem = selectedElements[i];
    var bbox = bboxes[i];
    dx[i] = 0;
    dy[i] = 0;
    switch (type) {
      case 'l': // left (horizontal)
        dx[i] = minx - bbox.x;
        break;
      case 'c': // center (horizontal)
        dx[i] = (minx+maxx)/2 - (bbox.x + bbox.width/2);
        break;
      case 'r': // right (horizontal)
        dx[i] = maxx - (bbox.x + bbox.width);
        break;
      case 't': // top (vertical)
        dy[i] = miny - bbox.y;
        break;
      case 'm': // middle (vertical)
        dy[i] = (miny+maxy)/2 - (bbox.y + bbox.height/2);
        break;
      case 'b': // bottom (vertical)
        dy[i] = maxy - (bbox.y + bbox.height);
        break;
    }
  }
  this.moveSelectedElements(dx,dy);
};

// Group: Additional editor tools

this.contentW = getResolution().w;
this.contentH = getResolution().h;

// Function: updateCanvas
// Updates the editor canvas width/height/position after a zoom has occurred 
//
// Parameters:
// w - Float with the new width
// h - Float with the new height
//
// Returns: 
// Object with the following values:
// * x - The canvas' new x coordinate
// * y - The canvas' new y coordinate
// * old_x - The canvas' old x coordinate
// * old_y - The canvas' old y coordinate
// * d_x - The x position difference
// * d_y - The y position difference
this.updateCanvas = function(w, h) {
  svgroot.setAttribute("width", w);
  svgroot.setAttribute("height", h);
  var bg = $('#canvasBackground')[0];
  var old_x = svgcontent.getAttribute('x');
  var old_y = svgcontent.getAttribute('y');
  var x = (w/2 - this.contentW*current_zoom/2);
  var y = (h/2 - this.contentH*current_zoom/2);

  assignAttributes(svgcontent, {
    width: this.contentW*current_zoom,
    height: this.contentH*current_zoom,
    'x': x,
    'y': y,
    "viewBox" : "0 0 " + this.contentW + " " + this.contentH
  });
  
  assignAttributes(bg, {
    width: svgcontent.getAttribute('width'),
    height: svgcontent.getAttribute('height'),
    x: x,
    y: y
  });

  var bg_img = getElem('background_image');
  if (bg_img) {
    assignAttributes(bg_img, {
      'width': '100%',
      'height': '100%'
    });
  }
  
  selectorManager.selectorParentGroup.setAttribute("transform","translate(" + x + "," + y + ")");
  
  return {x:x, y:y, old_x:old_x, old_y:old_y, d_x:x - old_x, d_y:y - old_y};
}

// Function: setBackground
// Set the background of the editor (NOT the actual document)
//
// Parameters:
// color - String with fill color to apply
// url - URL or path to image to use
this.setBackground = function(color, url) {
  var bg =  getElem('canvasBackground');
  var border = $(bg).find('rect')[0];
  var bg_img = getElem('background_image');
  border.setAttribute('fill',color);
  if(url) {
    if(!bg_img) {
      bg_img = svgdoc.createElementNS(svgns, "image");
      assignAttributes(bg_img, {
        'id': 'background_image',
        'width': '100%',
        'height': '100%',
        'preserveAspectRatio': 'xMinYMin',
        'style':'pointer-events:none'
      });
    }
    setHref(bg_img, url);
    bg.appendChild(bg_img);
  } else if(bg_img) {
    bg_img.parentNode.removeChild(bg_img);
  }
}

// Function: cycleElement
// Select the next/previous element within the current layer
//
// Parameters:
// next - Boolean where true = next and false = previous element
this.cycleElement = function(next) {
  var cur_elem = selectedElements[0];
  var elem = false;
  var all_elems = getVisibleElements(current_group || getCurrentDrawing().getCurrentLayer());
  if(!all_elems.length) return;
  if (cur_elem == null) {
    var num = next?all_elems.length-1:0;
    elem = all_elems[num];
  } else {
    var i = all_elems.length;
    while(i--) {
      if(all_elems[i] == cur_elem) {
        var num = next?i-1:i+1;
        if(num >= all_elems.length) {
          num = 0;
        } else if(num < 0) {
          num = all_elems.length-1;
        } 
        elem = all_elems[num];
        break;
      } 
    }
  }   
  selectOnly([elem], true);
  call("selected", selectedElements);
}

this.clear();


// DEPRECATED: getPrivateMethods 
// Since all methods are/should be public somehow, this function should be removed

// Being able to access private methods publicly seems wrong somehow,
// but currently appears to be the best way to allow testing and provide
// access to them to plugins.
this.getPrivateMethods = function() {
  var obj = {
    addCommandToHistory: addCommandToHistory,
    setGradient: setGradient,
    addSvgElementFromJson: addSvgElementFromJson,
    assignAttributes: assignAttributes,
    BatchCommand: BatchCommand,
    call: call,
    ChangeElementCommand: ChangeElementCommand,
    copyElem: copyElem,
    ffClone: ffClone,
    findDefs: findDefs,
    findDuplicateGradient: findDuplicateGradient,
    getElem: getElem,
    getId: getId,
    getIntersectionList: getIntersectionList,
    getMouseTarget: getMouseTarget,
    getNextId: getNextId,
    getPathBBox: getPathBBox,
    getUrlFromAttr: getUrlFromAttr,
    hasMatrixTransform: hasMatrixTransform,
    identifyLayers: identifyLayers,
    InsertElementCommand: InsertElementCommand,
    isIdentity: svgedit.math.isIdentity,
    logMatrix: logMatrix,
    matrixMultiply: matrixMultiply,
    MoveElementCommand: MoveElementCommand,
    preventClickDefault: preventClickDefault,
    recalculateAllSelectedDimensions: recalculateAllSelectedDimensions,
    recalculateDimensions: recalculateDimensions,
    remapElement: remapElement,
    RemoveElementCommand: RemoveElementCommand,
    removeUnusedDefElems: removeUnusedDefElems,
    round: round,
    runExtensions: runExtensions,
    sanitizeSvg: sanitizeSvg,
    SVGEditTransformList: svgedit.transformlist.SVGTransformList,
    toString: toString,
    transformBox: svgedit.math.transformBox,
    transformListToTransform: transformListToTransform,
    transformPoint: transformPoint,
    walkTree: svgedit.utilities.walkTree
  }
  return obj;
};

}

// todo remove from global scope;
var r_intervals = [];
for(var i = .1; i < 1E5; i *= 10) {
  r_intervals.push(1 * i);
  r_intervals.push(2 * i);
  r_intervals.push(5 * i);
}

function updateRulers(svgCanvas, scanvas, zoom) {

  var workarea = document.getElementById("workarea");
  var title_show = document.getElementById("title_show");
  var offset_x = 66;
  var offset_y = 48;
  if(!zoom) zoom = svgCanvas.getZoom();
  if(!scanvas) scanvas = $("#svgcanvas");
  
  var limit = 30000;
  
  var c_elem = svgCanvas.getContentElem();
  
  var units = svgedit.units.getTypeMap();
  var unit = 1;

  for(var d = 0; d < 2; d++) {
    var is_x = (d === 0);
    var dim = is_x ? 'x' : 'y';
    var lentype = is_x ?'width':'height';
    var notlentype = is_x ?'height':'width';
    var content_d = c_elem.getAttribute(dim)-0;
    
    var $hcanv_orig = $('#ruler_' + dim + ' canvas:first');
    
    // Bit of a hack to fully clear the canvas in Safari & IE9
    $hcanv = $hcanv_orig.clone();
    $hcanv_orig.replaceWith($hcanv);
    
    var hcanv = $hcanv[0];
    
    // Set the canvas size to the width of the container
    var ruler_len = scanvas[lentype]()*2;
    var total_len = ruler_len;
    hcanv.parentNode.style[lentype] = total_len + 'px';
    
    var canv_count = 1;
    var ctx_num = 0;
    var ctx_arr;
    var ctx = hcanv.getContext("2d");
    var scale = window.devicePixelRatio || 1;
    hcanv.style[lentype] = total_len + "px";
    hcanv.style[notlentype] = 15 + "px";
    hcanv[lentype] = Math.floor(total_len * scale);
    hcanv[notlentype] = Math.floor(15 * scale);
    ctx.scale(scale,scale);

    ctx.fillStyle = "rgb(200,0,0)"; 
    ctx.fillRect(0,0,hcanv.width/scale,hcanv.height/scale); 
    
    // Remove any existing canvasses
    $hcanv.siblings().remove();
    
    // Create multiple canvases when necessary (due to browser limits)
    if(ruler_len >= limit) {
      var num = parseInt(ruler_len / limit) + 1;
      ctx_arr = Array(num);
      ctx_arr[0] = ctx;
      for(var i = 1; i < num; i++) {
        hcanv[lentype] = limit;
        var copy = hcanv.cloneNode(true);
        hcanv.parentNode.appendChild(copy);
        ctx_arr[i] = copy.getContext('2d');
      }
      
      copy[lentype] = ruler_len % limit;
      
      // set copy width to last
      ruler_len = limit;
    }
    
    hcanv[lentype] = ruler_len * scale;
    
    var u_multi = unit * zoom;
    
    // Calculate the main number interval
    var raw_m = 50 / u_multi;
    var multi = 1;
    for(var i = 0; i < r_intervals.length; i++) {
      var num = r_intervals[i];
      multi = num;
      if(raw_m <= num) {
        break;
      }
    }
    
    var big_int = multi * u_multi;
    ctx.font = "normal 9px 'Verdana', sans-serif";
    ctx.fillStyle = "#777";
    ctx.scale(scale,scale);

    var ruler_d = ((content_d / u_multi) % multi) * u_multi;
    var label_pos = ruler_d - big_int;
    for (; ruler_d < total_len; ruler_d += big_int) {
      label_pos += big_int;
      var real_d = ruler_d - content_d;

      var cur_d = Math.round(ruler_d) + .5;
      if(is_x) {
        ctx.moveTo(cur_d, 15);
        ctx.lineTo(cur_d, 0);
      } else {
        ctx.moveTo(15, cur_d);
        ctx.lineTo(0, cur_d);
      }

      var num = (label_pos - content_d) / u_multi;
      var label;
      if(multi >= 1) {
        label = Math.round(num);
      } else {
        var decs = (multi+'').split('.')[1].length;
        label = num.toFixed(decs)-0;
      }
      
      // Change 1000s to Ks
      if(label !== 0 && label !== 1000 && label % 1000 === 0) {
        label = (label / 1000) + 'K';
      }
      
      if(is_x) {
        ctx.fillText(label, ruler_d+2, 8);
        ctx.fillStyle = "#777";
      } else {
        var str = (label+'').split('');
        for(var i = 0; i < str.length; i++) {
          ctx.fillText(str[i], 1, (ruler_d+9) + i*9);
          ctx.fillStyle = "#777";
        }
      }
      
      var part = big_int / 10;
      for(var i = 1; i < 10; i++) {
        var sub_d = Math.round(ruler_d + part * i) + .5;
        if(ctx_arr && sub_d > ruler_len) {
          ctx_num++;
          ctx.stroke();
          if(ctx_num >= ctx_arr.length) {
            i = 10;
            ruler_d = total_len;
            continue;
          }
          ctx = ctx_arr[ctx_num];
          ruler_d -= limit;
          sub_d = Math.round(ruler_d + part * i) + .5;
        }
        
        var line_num = (i % 2)?12:10;
        if(is_x) {
          ctx.moveTo(sub_d, 15);
          ctx.lineTo(sub_d, line_num);
        } else {
          ctx.moveTo(15, sub_d);
          ctx.lineTo(line_num ,sub_d);
        }
      }
    }
    ctx.strokeStyle = "#666";
    ctx.stroke();
  }
}
window.methodDraw = function() {
  var svgCanvas;
  var Editor = {};
  var is_ready = false;
  var curConfig = {
    canvas_expansion: 1, 
    dimensions: [800,600], 
    initFill: {color: 'fff', opacity: 1},
    initStroke: {width: 1.5, color: '000', opacity: 1},
    initOpacity: 1,
    imgPath: 'images/',
    extPath: 'extensions/',
    jGraduatePath: 'images/',
    extensions: [],
    initTool: 'select',
    wireframe: false,
    colorPickerCSS: false,
    gridSnapping: false,
    gridColor: "#000",
    baseUnit: 'px',
    snappingStep: 10,
    showRulers: (svgedit.browser.isTouch()) ? false : true,
    show_outside_canvas: false,
    no_save_warning: true,
    initFont: 'Helvetica, Arial, sans-serif'
  };
  var customHandlers = {};
  Editor.curConfig = curConfig;
  Editor.tool_scale = 1;
  
  Editor.setConfig = function(opts) {
    $.extend(true, curConfig, opts);
    if(opts.extensions) {
      curConfig.extensions = opts.extensions;
    }
  }
  
  Editor.init = function() {

    $("body").toggleClass("touch", svgedit.browser.isTouch());
    $("#canvas_width").val(curConfig.dimensions[0]);
    $("#canvas_height").val(curConfig.dimensions[1]);


    Editor.canvas = svgCanvas = new $.SvgCanvas(document.getElementById("svgcanvas"), curConfig);
    Editor.paintBox = {fill: null, stroke:null, canvas:null};
    var isMac = (navigator.platform.indexOf("Mac") >= 0),
      isWebkit = (navigator.userAgent.indexOf("AppleWebKit") >= 0),
      modKey = (isMac ? "meta+" : "ctrl+"), // ⌘
      path = svgCanvas.pathActions,
      undoMgr = svgCanvas.undoMgr,
      Utils = svgedit.utilities,
      default_img_url = curConfig.imgPath + "placeholder.svg",
      workarea = $("#workarea"),
      canv_menu = $("#cmenu_canvas"),
      exportWindow = null, 
      tool_scale = 1,
      ui_context = 'toolbars',
      orig_source = '';
      
    // This puts the correct shortcuts in the menus
    if (!isMac) {
     $('.shortcut').each(function(){
       var text = $(this).text();
       $(this).text(text.split("⌘").join("Ctrl+"))
     }); 
    }
    
    var setSelectMode = function() {
      var curr = $('.tool_button.current');
      if(curr.length && curr[0].id !== 'tool_select') {
        curr.removeClass('current').addClass('tool_button');
        $('#tool_select').addClass('current');
      }
      svgCanvas.setMode('select');
    };
    
    var togglePathEditMode = function(editmode, elems) {
      if(editmode) {
        // Change select icon
        $('.context_panel').hide();
        $('#path_node_panel').show();
        $('.tool_button.current').removeClass('.current');
        $('#tool_select').addClass('.current');
        multiselected = false;
      } else {
        if (elems[0]) {
          var selector = svgCanvas.selectorManager.requestSelector(elems[0])
          selector.reset(elems[0]);
          selector.selectorRect.setAttribute('display', 'inline');
        }

      }
    }
  
    // used to make the flyouts stay on the screen longer the very first time
    var flyoutspeed = 1250;
    var textBeingEntered = false;
    var selectedElement = null;
    var multiselected = false;
    var editingsource = false;
    var docprops = false;
    var preferences = false;
    var cur_context = '';
    
    var saveHandler = function(window,svg) {
     
    };
    
    var exportHandler = function(window, data) {
      var issues = data.issues;
      
      if(!$('#export_canvas').length) {
        $('<canvas>', {id: 'export_canvas'}).hide().appendTo('body');
      }
      var c = $('#export_canvas')[0];
      
      c.width = svgCanvas.contentW;
      c.height = svgCanvas.contentH;
      canvg(c, data.svg, {renderCallback: function() {
        var datauri = c.toDataURL('image/png');  
        if (!datauri) return false;
        var filename = "Method Draw Image";
        var type = 'image/png';
        var file = svgedit.utilities.dataURItoBlob(datauri, type);
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var a = document.createElement("a"),
                    url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
      }});
    };
    
    // called when we've selected a different element
    var selectedChanged = function(window,elems) {        
      var mode = svgCanvas.getMode();
      if(mode === "select") setSelectMode();
      if (mode === "pathedit") return updateContextPanel();
      // if elems[1] is present, then we have more than one element
      selectedElement = (elems.length == 1 || elems[1] == null ? elems[0] : null);
      elems = elems.filter(Boolean)
      multiselected = (elems.length >= 2) ? elems : false;
      if (svgCanvas.elementsAreSame(multiselected)) selectedElement = multiselected[0]
      if (selectedElement != null) {
        $('#multiselected_panel').hide()
        updateToolbar();
        if (multiselected.length) {//multiselected elements are the same
          $('#tools_top').addClass('multiselected')
        }
      }
      else if (multiselected.length) {
        $('.context_panel').hide()
        $('#tools_top').removeClass('multiselected')
        $('#multiselected_panel').show()
      }
      else {
        $('.context_panel').hide()
        $('#canvas_panel').show()
        $('#tools_top').removeClass('multiselected')
      }
      svgCanvas.runExtensions("selectedChanged", {
        elems: elems,
        selectedElement: selectedElement,
        multiselected: multiselected
      });
    };
  
    // Call when part of element is in process of changing, generally
    // on mousemove actions like rotate, move, etc.
    var elementTransition = function(window,elems) {
      var mode = svgCanvas.getMode();
      var elem = elems[0];
      
      if(!elem) return;
      
      multiselected = (elems.length >= 2 && elems[1] != null) ? elems : null;
      // Only updating fields for single elements for now
      if(!multiselected) {
        switch ( mode ) {
          case "rotate":
            var ang = svgCanvas.getRotationAngle(elem);
            $('#angle').val(Math.round(ang));
            rotateCursor(ang);
            $('#tool_reorient').toggleClass('disabled', ang == 0);
            break;
        }
      }
      svgCanvas.runExtensions("elementTransition", {
        elems: elems
      });
    };
  
    // called when any element has changed
    var elementChanged = function(window,elems) {
      var mode = svgCanvas.getMode();
      if(mode === "select") {
        setSelectMode();
      }
      
      for (var i = 0; i < elems.length; ++i) {
        var elem = elems[i];
        
        // if the element changed was the svg, then it could be a resolution change
        if (elem && elem.tagName === "svg") {
          //populateLayers();
          updateCanvas();
        } 
        // Update selectedElement if element is no longer part of the image.
        // This occurs for the text elements in Firefox
        else if(elem && selectedElement && selectedElement.parentNode == null) {
//            || elem && elem.tagName == "path" && !multiselected) { // This was added in r1430, but not sure why
          selectedElement = elem;
        }
      }
        
      // we update the contextual panel with potentially new
      // positional/sizing information (we DON'T want to update the
      // toolbar here as that creates an infinite loop)
      // also this updates the history buttons
  
      // we tell it to skip focusing the text control if the
      // text element was previously in focus
      updateContextPanel();
      
      // In the event a gradient was flipped:
      if(selectedElement && mode === "select") {
        Editor.paintBox.fill.update();
        Editor.paintBox.stroke.update();
      }
      
      svgCanvas.runExtensions("elementChanged", {
        elems: elems
      });
    };
    
    var zoomChanged = function(window, bbox, autoCenter) {
      var scrbar = 15,
        res = svgCanvas.getResolution(),
        w_area = workarea,
        canvas_pos = $('#svgcanvas').position();
      var z_info = svgCanvas.setBBoxZoom(bbox, w_area.width()-scrbar, w_area.height()-scrbar);
      if(!z_info) return;
      var zoomlevel = z_info.zoom,
        bb = z_info.bbox;
      
      if(zoomlevel < .001) {
        changeZoom({value: .1});
        return;
      }
      if (typeof animatedZoom != 'undefined') window.cancelAnimationFrame(animatedZoom)
      // zoom duration 500ms
      var start = Date.now();
      var duration = 500;
      var diff = (zoomlevel) - (res.zoom)
      var zoom = $('#zoom')[0]
      var current_zoom = res.zoom
      var animateZoom = function(timestamp) {
        var progress = Date.now() - start
        var tick = progress / duration
        tick = (Math.pow((tick-1), 3) +1);
        svgCanvas.setZoom(current_zoom + (diff*tick));
        updateCanvas();
        if (tick < 1 && tick > -.90) {
          window.animatedZoom = requestAnimationFrame(animateZoom)
        }
        else {
          $("#zoom").val(parseInt(zoomlevel*100))
          $("option", "#zoom_select").removeAttr("selected")
          $("option[value="+ parseInt(zoomlevel*100) +"]", "#zoom_select").attr("selected", "selected")
        }
      }
      animateZoom()

  
      if(svgCanvas.getMode() == 'zoom' && bb.width) {
        // Go to select if a zoom box was drawn
        setSelectMode();
      }
      
      zoomDone();
    }
    
    $('#cur_context_panel').delegate('a', 'click', function() {
      var link = $(this);
      if(link.attr('data-root')) {
        svgCanvas.leaveContext();
      } else {
        svgCanvas.setContext(link.text());
      }
      svgCanvas.clearSelection();
      return false;
    });
    
    var contextChanged = function(win, context) {
      
      var link_str = '';
      if(context) {
        var str = '';
        link_str = '<a href="#" data-root="y">' + svgCanvas.getCurrentDrawing().getCurrentLayerName() + '</a>';
        
        $(context).parentsUntil('#svgcontent > g').addBack().each(function() {
          if(this.id) {
            str += ' > ' + this.id;
            if(this !== context) {
              link_str += ' > <a href="#">' + this.id + '</a>';
            } else {
              link_str += ' > ' + this.id;
            }
          }
        });

        cur_context = str;
      } else {
        cur_context = null;
      }
      $('#cur_context_panel').toggle(!!context).html(link_str);

    }

    var extAdded = function(window, ext) {
       if(ext.callback) ext.callback();
    }
    
    // Makes sure the current selected paint is available to work with
    var prepPaints = function() {
      Editor.paintBox.fill.prep();
      Editor.paintBox.stroke.prep();
    }

    var getPaint = function(color, opac, type) {
      // update the editor's fill paint
      var opts = null;
      if (color.indexOf("url(#") === 0) {
        var refElem = svgCanvas.getRefElem(color);
        if(refElem) {
          refElem = refElem.cloneNode(true);
        } else {
          refElem =  $("#" + type + "_color defs *")[0];
        }
        
        opts = { alpha: opac };
        opts[refElem.tagName] = refElem;
      } 
      else if (color.indexOf("#") === 0) {
        opts = {
          alpha: opac,
          solidColor: color.substr(1)
        };
      }
      else {
        opts = {
          alpha: opac,
          solidColor: 'none'
        };
      }
      return new $.jGraduate.Paint(opts);
    };  
    
    // set the canvas properties at init
    var res = svgCanvas.getResolution();
    if(curConfig.baseUnit !== "px") {
      res.w = svgedit.units.convertUnit(res.w) + curConfig.baseUnit;
      res.h = svgedit.units.convertUnit(res.h) + curConfig.baseUnit;
    }
    
    var createBackground = function(fill) {
      svgCanvas.createLayer("background")
      cur_shape = svgCanvas.addSvgElementFromJson({
        "element": "rect",
        "attr": {
          "x": -1,
          "y": -1,
          "width": res.w+2,
          "height": res.h+2,
          "stroke": "none",
          "id": "canvas_background",
          "opacity": 1,
          "fill": fill || "#fff",
          "style": "pointer-events:none"
        }
      });
      svgCanvas.setCurrentLayer("Layer 1")
      svgCanvas.setCurrentLayerPosition("1")
    }
    
    // create a new layer background if it doesn't exist
    if (!document.getElementById('canvas_background')) createBackground();
    var fill = document.getElementById('canvas_background').getAttribute("fill");
    
    // updates the toolbar (colors, opacity, etc) based on the selected element
    // This function also updates the opacity and id elements that are in the context panel
    var updateToolbar = function() {
      if (selectedElement != null) {
        switch ( selectedElement.tagName ) {
        case 'use':
          $(".context_panel").hide();
          $("#use_panel").show();
          break;
        case 'image':
          $(".context_panel").hide();
          $("#image_panel").show();
          break;
        case 'foreignObject':
          $(".context_panel").hide();
          break;
        case 'g':
        case 'a':
          // Look for common styles
          var gWidth = null;
          
          var childs = selectedElement.getElementsByTagName('*');
          for(var i = 0, len = childs.length; i < len; i++) {
            var swidth = childs[i].getAttribute("stroke-width");
            if(i === 0) {
              gWidth = swidth;
            } else if(gWidth !== swidth) {
              gWidth = null;
            }
          }
          
          $('#stroke_width').val(gWidth === null ? "0" : gWidth);
          updateContextPanel();
          break;
        default:
          //removed because multiselect shouldnt set color
          //Editor.paintBox.fill.update(false);
          //Editor.paintBox.stroke.update(false);
          
          $('#stroke_width').val(selectedElement.getAttribute("stroke-width") || 0);
          var dash = selectedElement.getAttribute("stroke-dasharray") || "none"
          $('option', '#stroke_style').removeAttr('selected');
          $('#stroke_style option[value="'+ dash +'"]').attr("selected", "selected");
          $('#stroke_style').trigger('change');

          $.fn.dragInput.updateCursor($('#stroke_width')[0])
          $.fn.dragInput.updateCursor($('#blur')[0])
        }

      }
      
      // All elements including image and group have opacity
      if(selectedElement != null) {
        var opac_perc = ((selectedElement.getAttribute("opacity")||1.0)*100);
        $('#group_opacity').val(opac_perc);
        $.fn.dragInput.updateCursor($('#group_opacity')[0])
      }
    };
  
    var setImageURL = Editor.setImageURL = function(url) {
      if(!url) url = default_img_url;
      
      svgCanvas.setImageURL(url);
      $('#image_url').val(url);
    }
  
    var setInputWidth = function(elem) {
      var w = Math.min(Math.max(12 + elem.value.length * 6, 50), 300);
      $(elem).width(w);
    }
  
    // updates the context panel tools based on the selected element
    var updateContextPanel = function(e) {
      var elem = selectedElement;
      // If element has just been deleted, consider it null
      if(elem != null && !elem.parentNode) elem = null;
      if (multiselected && multiselected[0] != null && !multiselected[0].parentNode) multiselected = false;
      
      var currentLayerName = svgCanvas.getCurrentDrawing().getCurrentLayerName();
      var currentMode = svgCanvas.getMode();
      var unit = curConfig.baseUnit !== 'px' ? curConfig.baseUnit : null;
      var is_node = currentMode == 'pathedit'; //elem ? (elem.id && elem.id.indexOf('pathpointgrip') == 0) : false;
      
      if (is_node) {
        $('.context_panel').hide();
        $('#path_node_panel').show();
        $('#stroke_panel').hide();
        var point = path.getNodePoint();
        $('#tool_add_subpath').removeClass('push_button_pressed').addClass('tool_button');
        $('#tool_node_delete').toggleClass('disabled', !path.canDeleteNodes);
                
        if(point) {
          var seg_type = $('#seg_type');
          if(unit) {
            point.x = svgedit.units.convertUnit(point.x);
            point.y = svgedit.units.convertUnit(point.y);
          }
          $('#path_node_x').val(Math.round(point.x));
          $('#path_node_y').val(Math.round(point.y));
          if(point.type) {
            seg_type.val(point.type).removeAttr('disabled');
            $("#seg_type_label").html(point.type == 4 ? "Straight" : "Curve")
          } else {
            seg_type.val(4).attr('disabled','disabled');
          }
        }
        $("#tools_top").removeClass("multiselected")        
        $("#stroke_panel").hide();
        $("#canvas_panel").hide();
        return;
      }
      
      var menu_items = $('#cmenu_canvas li');
      $('.context_panel').hide();
      $('.menu_item', '#edit_menu').addClass('disabled');
      $('.menu_item', '#object_menu').addClass('disabled');
      
      
      //hack to show the proper multialign box
      if (multiselected) {
        multiselected = multiselected.filter(Boolean);
        elem = (svgCanvas.elementsAreSame(multiselected)) ? multiselected[0] : null
        if (elem) $("#tools_top").addClass("multiselected")
      }

      if (!elem && !multiselected) {
        $("#tools_top").removeClass("multiselected")        
        $("#stroke_panel").hide();
        $("#canvas_panel").show();
      }
  
      if (elem != null) {
        $("#stroke_panel").show();
        var elname = elem.nodeName;
        var angle = svgCanvas.getRotationAngle(elem);
        $('#angle').val(Math.round(angle));
        
        var blurval = svgCanvas.getBlur(elem);
        $('#blur').val(blurval);
        if(!is_node && currentMode != 'pathedit') {
          $('#selected_panel').show();
          $('.action_selected').removeClass('disabled');
          // Elements in this array already have coord fields
          var x, y
          if(['g', 'polyline', 'path'].indexOf(elname) >= 0) {
            var bb = svgCanvas.getStrokedBBox([elem]);
            if(bb) {
              x = bb.x;
              y = bb.y;
            }
          }
          
          if(unit) {
            x = svgedit.units.convertUnit(x);
            y = svgedit.units.convertUnit(y);
          }

          $("#" + elname +"_x").val(Math.round(x))
          $("#" + elname +"_y").val(Math.round(y))
          if (elname === "polyline") {
            //we're acting as if polylines were paths
            $("#path_x").val(Math.round(x))
            $("#path_y").val(Math.round(y))
          }
                    
          // Elements in this array cannot be converted to a path
          var no_path = ['image', 'text', 'path', 'g', 'use'].indexOf(elname) == -1;
          if (no_path) $('.action_path_convert_selected').removeClass('disabled');
          if (elname === "path") $('.action_path_selected').removeClass('disabled');

        }
        
        var link_href = null;
        if (el_name === 'a') {
          link_href = svgCanvas.getHref(elem);
          $('#g_panel').show();
        }
        
        if(elem.parentNode.tagName === 'a') {
          if(!$(elem).siblings().length) {
            $('#a_panel').show();
            link_href = svgCanvas.getHref(elem.parentNode);
          }
        }
        
        // Hide/show the make_link buttons
        $('#tool_make_link, #tool_make_link').toggle(!link_href);
        
        if(link_href) {
          $('#link_url').val(link_href);
        }
        
        // update contextual tools here
        var panels = {
          g: [],
          a: [],
          rect: ['rx','width','height', 'x', 'y'],
          image: ['width','height', 'x', 'y'],
          circle: ['cx','cy','r'],
          ellipse: ['cx','cy','rx','ry'],
          line: ['x1','y1','x2','y2'], 
          text: ['x', 'y'],
          'use': [],
          path : []
        };
        
        var el_name = elem.tagName;
        
        if($(elem).data('gsvg')) {
          $('#g_panel').show();
        }
        
        if (el_name == "path" || el_name == "polyline") {
          $('#path_panel').show();
        }
        
        if(panels[el_name]) {
          var cur_panel = panels[el_name];
          $('#' + el_name + '_panel').show();
          
          // corner radius has to live in a different panel
          // because otherwise it changes the position of the 
          // of the elements
          if(el_name == "rect") $("#cornerRadiusLabel").show()
          else $("#cornerRadiusLabel").hide()
          
          $.each(cur_panel, function(i, item) {
            var attrVal = elem.getAttribute(item);
            if(curConfig.baseUnit !== 'px' && elem[item]) {
              var bv = elem[item].baseVal.value;
              attrVal = svgedit.units.convertUnit(bv);
            }
            
            //update the draginput cursors
            var name_item = document.getElementById(el_name + '_' + item);
            name_item.value = Math.round(attrVal) || 0;
            if (name_item.getAttribute("data-cursor") === "true") {
              $.fn.dragInput.updateCursor(name_item );
            }
          });
          
          if(el_name == 'text') {
            var font_family = elem.getAttribute("font-family");
            var select = document.getElementById("font_family_dropdown");
            select.selectedIndex = 3
            
            $('#text_panel').css("display", "inline");  
            $('#tool_italic').toggleClass('active', svgCanvas.getItalic())
            $('#tool_bold').toggleClass('active', svgCanvas.getBold())
            $('#font_family').val(font_family);
            $('#font_size').val(elem.getAttribute("font-size"));
            $('#text').val(elem.textContent);
            $('#preview_font').text(font_family.split(",")[0].replace(/'/g, "")).css('font-family', font_family);
            if (svgCanvas.addedNew) {
              // Timeout needed for IE9
              setTimeout(function() {
                $('#text').focus().select();
              },100);
            }
          } // text
          else if(el_name == 'image') {
            setImageURL(svgCanvas.getHref(elem));
          } // image
          else if(el_name === 'g' || el_name === 'use') {
            $('#container_panel').show();
            $('.action_group_selected').removeClass('disabled');
            var title = svgCanvas.getTitle();
          }
        }
        menu_items[(el_name === 'g' ? 'en':'dis') + 'ableContextMenuItems']('#ungroup');
        menu_items[((el_name === 'g' || !multiselected) ? 'dis':'en') + 'ableContextMenuItems']('#group');
      }
      
      if (multiselected) {
        $('#multiselected_panel').show();
        $('.action_multi_selected').removeClass('disabled');
        menu_items
          .enableContextMenuItems('#group')
          .disableContextMenuItems('#ungroup');
      } 
      
      if (!elem) {
        menu_items.disableContextMenuItems('#delete,#cut,#copy,#group,#ungroup,#move_front,#move_up,#move_down,#move_back');
      }
      
      // update history buttons
      if (undoMgr.getUndoStackSize() > 0) {
        $('#tool_undo').removeClass( 'disabled');
      }
      else {
        $('#tool_undo').addClass( 'disabled');
      }
      if (undoMgr.getRedoStackSize() > 0) {
        $('#tool_redo').removeClass( 'disabled');
      }
      else {
        $('#tool_redo').addClass( 'disabled');
      }
      
      svgCanvas.addedNew = false;
      
      if ( (elem && !is_node) || multiselected) {
        // update the selected elements' layer
        $('#selLayerNames').removeAttr('disabled').val(currentLayerName);
        
        // Enable regular menu options
        canv_menu.enableContextMenuItems('#delete,#cut,#copy,#move_front,#move_up,#move_down,#move_back');
      }
    };
  
    $('#text').on("focus", function(e){ textBeingEntered = true; } );
    $('#text').on("blur", function(){ textBeingEntered = false; } );

    // bind the selected event to our function that handles updates to the UI
    svgCanvas.bind("selected", selectedChanged);
    svgCanvas.bind("transition", elementTransition);
    svgCanvas.bind("changed", elementChanged);
    svgCanvas.bind("exported", exportHandler);
    svgCanvas.bind("zoomed", zoomChanged);
    svgCanvas.bind("contextset", contextChanged);
    svgCanvas.bind("extension_added", extAdded);
    svgCanvas.textActions.setInputElem($("#text")[0]);
    
    var changeFontSize = function(ctl) {
      svgCanvas.setFontSize(ctl.value);
    }
    
    var changeStrokeWidth = function(ctl) {
      var val = ctl.value;
      if(val == 0 && selectedElement && ['line', 'polyline'].indexOf(selectedElement.nodeName) >= 0) {
        val = ctl.value = 1;
      }
      svgCanvas.setStrokeWidth(val);
    }
    
    //cache
    var $indicator = $('#tool_angle_indicator')
    var $reorient = $('#tool_reorient')
    
    rotateCursor = function(angle){
      var rotate_string = 'rotate('+ angle + 'deg)'
      $indicator.css({
        '-webkit-transform': rotate_string,
        '-moz-transform': rotate_string,
        '-o-transform': rotate_string,
        '-ms-transform': rotate_string,
        'transform': rotate_string
      });
    }
    
    var changeRotationAngle = function(ctl) {
      var preventUndo = true;
      svgCanvas.setRotationAngle(ctl.value, preventUndo);
      rotateCursor(ctl.value)
      $('#tool_reorient').toggleClass('disabled', ctl.value == 0);
    }
    
    var changeZoom = function(ctl) {
      var zoomlevel = ctl.value / 100;
      if(zoomlevel < .001) {
        ctl.value = .1;
        return;
      }
      var zoom = svgCanvas.getZoom();
      var w_area = workarea;
      zoomChanged(window, {
        width: 0,
        height: 0,
        // center pt of scroll position
        x: (w_area[0].scrollLeft + w_area.width()/2)/zoom, 
        y: (w_area[0].scrollTop + w_area.height()/2)/zoom,
        zoom: zoomlevel
      }, true);
    }
    
    var changeBlur = function(ctl, completed) {
      val = ctl.value;
      $('#blur').val(val);
      if (completed) {
        svgCanvas.setBlur(val, true);
      }
      else {
        svgCanvas.setBlurNoUndo(val);
      }
    }
  
    var operaRepaint = function() {
      // Repaints canvas in Opera. Needed for stroke-dasharray change as well as fill change
      if(!window.opera) return;
      $('<p/>').hide().appendTo('body').remove();
    }
  
    $('#stroke_style').change(function(){
      svgCanvas.setStrokeAttr('stroke-dasharray', $(this).val());
      $("#stroke_style_label").html(this.options[this.selectedIndex].text)
      operaRepaint();
    });
    
    $('#seg_type').change(function() {
      svgCanvas.setSegType($(this).val());
      $("#seg_type_label").html(this.options[this.selectedIndex].text)
    });
  
    // Lose focus for select elements when changed (Allows keyboard shortcuts to work better)
    $('select').change(function(){$(this).blur();});
  
    $('#font_family').change(function() {
      svgCanvas.setFontFamily(this.value);
    });
      
    $('#text').keyup(function(){
      svgCanvas.setTextContent(this.value);
    });
    
    changeAttribute = function(el, completed) {
      var attr = el.getAttribute("data-attr");
      var multiplier = el.getAttribute("data-multiplier") || 1;
      multiplier = parseFloat(multiplier);
      var val = el.value * multiplier;
      var valid = svgedit.units.isValidUnit(attr, val, selectedElement);
      if(!valid) {
        $.alert("Invalid value given");
        el.value = selectedElement.getAttribute(attr);
        return false;
      }
      //if (!noUndo) svgCanvas.changeSelectedAttribute(attr, val);
      svgCanvas.changeSelectedAttributeNoUndo(attr, val);
    };

    $("#toggle_stroke_tools").toggle(function() {
      $(".stroke_tool").css('display','table-cell');
      $(this).addClass('expanded');
      resetScrollPos();
    }, function() {
      $(".stroke_tool").css('display','none');
      $(this).removeClass('expanded');
      resetScrollPos();
    });
  
    var toolButtonClick = function(button, noHiding) {
      if ($(button).hasClass('disabled')) return false;
      if($(button).parent().hasClass('tools_flyout')) return true;
      var fadeFlyouts = fadeFlyouts || 'normal';
      if(!noHiding) {
        $('.tools_flyout').fadeOut(fadeFlyouts);
      }
      $('#styleoverrides').text('');
      $('.tool_button.current').removeClass('current');
      $(button).addClass('current');
      return true;
    };
    
    (function() {
      var last_x = null, last_y = null, w_area = workarea[0], 
        panning = false, keypan = false;
      
      var move_pan = function(evt) {    
          if(panning === false) return;

          w_area.scrollLeft -= (evt.clientX - last_x);
          w_area.scrollTop -= (evt.clientY - last_y);
          last_x = evt.clientX;
          last_y = evt.clientY;
          if(evt.type === 'mouseup' || evt.type === 'touchend') panning = false;
          return false;
      }
      
      var start_pan = function(evt) {
        if(evt.button === 1 || keypan === true || (evt.originalEvent.touches && evt.originalEvent.touches.length >= 2)) {
          panning = true;
          last_x = evt.clientX;
          last_y = evt.clientY;
          return false;
        }
      }
      
      $('#svgcanvas')
        .on('mousemove mouseup touchend', move_pan)
        .on("mousedown touchmove", start_pan)
      
      $(window).mouseup(function() {
        panning = false;
      });
      
      $(document).bind('keydown', 'space', function(evt) {
        evt.preventDefault();
        svgCanvas.spaceKey = keypan = true;
        
      }).bind('keyup', 'space', function(evt) {
        evt.preventDefault();
        svgCanvas.spaceKey = keypan = false;
      }).bind('keydown', 'alt', function(evt) {
        if(svgCanvas.getMode() === 'zoom') {
          workarea.addClass('out');
        }
      }).bind('keyup', 'alt', function(evt) {
        if(svgCanvas.getMode() === 'zoom') {
          workarea.removeClass('out');
        }
      })
    }());
    
    
    function setStrokeOpt(opt, changeElem) {
      var id = opt.id;
      var bits = id.split('_');
      var pre = bits[0];
      var val = bits[1];
    
      if(changeElem) {
        svgCanvas.setStrokeAttr('stroke-' + pre, val);
      }
      operaRepaint();
      $(opt).addClass('current').siblings().removeClass('current');
    }
    
    //menu handling
    var menus = $('.menu');
    var blinker = function(e) {
      e.target.style.background = "#fff";
      setTimeout(function(){e.target.style.background = "#ddd";}, 50);
      setTimeout(function(){e.target.style.background = "#fff";}, 150);
      setTimeout(function(){e.target.style.background = "#ddd";}, 200);
      setTimeout(function(){e.target.style.background = "";}, 200);
      setTimeout(function(){$('#menu_bar').removeClass('active')}, 220);
      return false;
    }
    var closer = function(e){
      if (e.target.nodeName && e.target.nodeName.toLowerCase() === "input") return false;
      if (!$(e.target).hasClass("menu_title") && !$(e.target).parent().hasClass("menu_title")) {
        if(!$(e.target).hasClass("disabled") && $(e.target).hasClass("menu_item")) blinker(e)
        else $('#menu_bar').removeClass('active')
      }  

    }
    
    $('.menu_item').on('mousedown touchstart', function(e){blinker(e)});
    $("svg, body").on('mousedown  touchstart', function(e){closer(e)});
    
    var accumulatedDelta = 0
    $('#workarea').on('mousewheel', function(e, delta, deltaX, deltaY){
      if (e.altKey || e.ctrlKey) {
        e.preventDefault();
        zoom = parseInt($("#zoom").val())
        $("#zoom").val(parseInt(zoom + deltaY*(e.altKey ? 10 : 5))).change()
      }
    });
    
    $('.menu_title')
      .on('mousedown', function() {
        $("#tools_shapelib").hide()
        $("#menu_bar").toggleClass('active');
        menus.removeClass('open');
        $(this).parent().addClass('open');
      })
      .on('mouseover', function() {
         menus.removeClass('open');
         $(this).parent().addClass('open');
       });

    $('#font_family_dropdown').change(function() {
      var fam = this.options[this.selectedIndex].value
      var fam_display = this.options[this.selectedIndex].text
      $('#preview_font').html(fam_display).css("font-family", fam);
      $('#font_family').val(fam).change();
    });
    
    $('div', '#position_opts').each(function(){
      this.addEventListener("mouseup", function(){
        var letter = this.id.replace('tool_pos','').charAt(0);
        svgCanvas.alignSelectedElements(letter, 'page');
      })
    });

    
    // Unfocus text input when workarea is mousedowned.
    (function() {
      var inp;
      var unfocus = function() {
        $(inp).blur();
      }
      
      $('#svg_editor').find('button, select, input:not(#text)').focus(function() {
        inp = this;
        ui_context = 'toolbars';
        workarea.mousedown(unfocus);
      }).blur(function() {
        ui_context = 'canvas';
        workarea.unbind('mousedown', unfocus);
        // Go back to selecting text if in textedit mode
        if(svgCanvas.getMode() == 'textedit') {
          $('#text').focus();
        }
      });
      
    }());

    var clickSelect = function() {
      if (toolButtonClick('#tool_select')) {
        svgCanvas.setMode('select');
      }
    };
  
    var clickFHPath = function() {
      if (toolButtonClick('#tool_fhpath')) {
        svgCanvas.setMode('fhpath');
      }
    };
  
    var clickLine = function() {
      if (toolButtonClick('#tool_line')) {
        svgCanvas.setMode('line');
      }
    };
  

    
    var clickRect = function(){
      if (toolButtonClick('#tool_rect')) {
        svgCanvas.setMode('rect');
      }
    };
    
 
  
    var clickEllipse = function(){
      if (toolButtonClick('#tool_ellipse')) {
        svgCanvas.setMode('ellipse');
      }
    };
  
    var clickZoom = function(){
      if (toolButtonClick('#tool_zoom')) {
        svgCanvas.setMode('zoom');
      }
    };
  
  
    var clickText = function(){
      if (toolButtonClick('#tool_text')) {
        svgCanvas.setMode('text');
      }
    };
    
    var clickPath = function(){
      if (toolButtonClick('#tool_path')) {
        svgCanvas.setMode('path');
      }
    };


    var clickEyedropper = function() {
      if (toolButtonClick('#tool_eyedropper')) {
        svgCanvas.setMode('eyedropper');
      }
    }

    var clickShapelib = function() {
      if (toolButtonClick('#tool_shapelib')) {
        $('#workarea').one("mousedown", function(){$('#tools_shapelib').hide()})
        $("#tools_shapelib").css({
          "top": $('#tool_shapelib').offset().top,
          "margin-left": 3,
        })
        $("#tools_shapelib").show();
      }
    }

    // Delete is a contextual tool that only appears in the ribbon if
    // an element has been selected
    var deleteSelected = function() {
      if (selectedElement != null || multiselected) {
        svgCanvas.deleteSelectedElements();
      }
      if (path.getNodePoint()) {
        path.deletePathNode();
      }
    };
  
    var cutSelected = function() {
      if (selectedElement != null || multiselected) {
        flash($('#edit_menu'));
        svgCanvas.cutSelectedElements();
      }
    };
    
    var copySelected = function() {
      if (selectedElement != null || multiselected) {
        flash($('#edit_menu'));
        svgCanvas.copySelectedElements();
      }
    };
    
    var pasteSelected = function() {
      flash($('#edit_menu'));
      var zoom = svgCanvas.getZoom();       
      var x = (workarea[0].scrollLeft + workarea.width()/2)/zoom  - svgCanvas.contentW; 
      var y = (workarea[0].scrollTop + workarea.height()/2)/zoom  - svgCanvas.contentH;
      svgCanvas.pasteElements('point', x, y); 
    }
    
    var moveToTopSelected = function() {
      if (selectedElement != null) {
        flash($('#object_menu'));
        svgCanvas.moveToTopSelectedElement();
      }
    };
    
    var moveToBottomSelected = function() {
      if (selectedElement != null) {
        flash($('#object_menu'));
        svgCanvas.moveToBottomSelectedElement();
      }
    };
    
    var moveUpSelected = function() {
      if (selectedElement != null) {
      flash($('#object_menu'));
        svgCanvas.moveUpDownSelected("Up");
      }
    };

    var moveDownSelected = function() {
      if (selectedElement != null) {
        flash($('#object_menu'));
        svgCanvas.moveUpDownSelected("Down");
      }
    };
    
    var moveUpDownSelected = function(dir) {
      if (selectedElement != null) {
        flash($('#object_menu'));
        svgCanvas.moveUpDownSelected(dir);
      }
    };

    var convertToPath = function() {
      if (selectedElement != null) {
        svgCanvas.convertToPath();
        var elems = svgCanvas.getSelectedElems()
        svgCanvas.selectorManager.requestSelector(elems[0]).reset(elems[0])
        svgCanvas.selectorManager.requestSelector(elems[0]).selectorRect.setAttribute("display", "none");
        svgCanvas.setMode("pathedit")
        path.toEditMode(elems[0]);
        svgCanvas.clearSelection();
        updateContextPanel();
      }
    }
    
    var reorientPath = function() {
      if (selectedElement != null) {
        path.reorient();
      }
    }
  
    var makeHyperlink = function() {
      if (selectedElement != null || multiselected) {
        $.prompt("Enter the new hyperlink URL", "http://", function(url) {
          if(url) svgCanvas.makeHyperlink(url);
        });
      }
    }
  
    var moveSelected = function(dx,dy) {
      if (selectedElement != null || multiselected) {
        if(curConfig.gridSnapping) {
          // Use grid snap value regardless of zoom level
          var multi = svgCanvas.getZoom() * curConfig.snappingStep;
          dx *= multi;
          dy *= multi;
        }
        $('input').blur()
        svgCanvas.moveSelectedElements(dx,dy);
      }
    };
  
    var linkControlPoints = function() {
    //  var linked = document.getElementById('tool_node_link').checked;
    //  path.linkControlPoints(linked);
    }
  
    var clonePathNode = function() {
      if (path.getNodePoint()) {
        path.clonePathNode();
      }
    };
    
    var deletePathNode = function() {
      if (path.getNodePoint()) {
        path.deletePathNode();
      }
    };
  
    var addSubPath = function() {
      var button = $('#tool_add_subpath');
      var sp = !button.hasClass('push_button_pressed');
      if (sp) {
        button.addClass('push_button_pressed').removeClass('tool_button');
      } else {
        button.removeClass('push_button_pressed').addClass('tool_button');
      }
      
      path.addSubPath(sp);
      
    };
  
    var opencloseSubPath = function() {
      path.opencloseSubPath();
    } 
    
    var selectNext = function() {
      svgCanvas.cycleElement(1);
    };
    
    var selectPrev = function() {
      svgCanvas.cycleElement(0);
    };
    
    var rotateSelected = function(cw,step) {
      if (selectedElement == null || multiselected) return;
      if(!cw) step *= -1;
      var new_angle = $('#angle').val()*1 + step;
      svgCanvas.setRotationAngle(new_angle);
      updateContextPanel();
    };
    
    var clickClear = function(){
      var dims = curConfig.dimensions;
      $.confirm("<strong>Do you want to clear the drawing?</strong>\nThis will also erase your undo history", function(ok) {
        if(!ok) return;
        setSelectMode();
        svgCanvas.deleteSelectedElements();
        svgCanvas.clear();
        svgCanvas.setResolution(dims[0], dims[1]);
        updateCanvas(true);
        createBackground();
        zoomImage();
        updateContextPanel();
        prepPaints();
        svgCanvas.runExtensions('onNewDocument');
      });
    };
    
    var clickBold = function(){
      svgCanvas.setBold( !svgCanvas.getBold() );
      updateContextPanel();
    };
    
    var clickItalic = function(){
      svgCanvas.setItalic( !svgCanvas.getItalic() );
      updateContextPanel();
    };
    
    var clickExport = function() {
      if(window.canvg) {
        svgCanvas.rasterExport();
      } else {
        $.getScript('/js/lib/rgbcolor.js', function() {
          $.getScript('/js/lib/canvg.js', function() {
            svgCanvas.rasterExport();
          });
        });
      }
    }
    
    // by default, svgCanvas.open() is a no-op.
    // it is up to an extension mechanism (opera widget, etc) 
    // to call setCustomHandlers() which will make it do something
    var clickOpen = function(){
      svgCanvas.open();
    };
    var clickImport = function(){
    };
    
    var flash = function($menu){
      var menu_title = $menu.prev();
      menu_title.css({
        "background": "white",
        "color": "black"
      });
      setTimeout(function(){menu_title.removeAttr("style")}, 200);
    }
    
    var clickUndo = function(){
      if (undoMgr.getUndoStackSize() > 0) {
        flash($('#edit_menu'));
        undoMgr.undo();
      }
    };
  
    var clickRedo = function(){
      if (undoMgr.getRedoStackSize() > 0) {
        flash($('#edit_menu'));
        undoMgr.redo();
      }
    };
    
    var clickGroup = function(){
      // group
      if (multiselected) {
        flash($('#object_menu'));
        svgCanvas.groupSelectedElements();
      }
      // ungroup
      else if(selectedElement){
        flash($('#object_menu'));
        svgCanvas.ungroupSelectedElement();
      }
    };
    
    var clickClone = function(){
      flash($('#edit_menu'));
      svgCanvas.cloneSelectedElements(20,20);
    };
    
    var clickAlign = function() {
      var letter = this.id.replace('tool_align','').charAt(0);
      svgCanvas.alignSelectedElements(letter, $('#align_relative_to').val());
    };
    
    var clickSwitch = function() {
      var stroke_rect = document.querySelector('#tool_stroke rect');
      $("#tool_stroke").toggleClass('active')
      $("#tool_fill").toggleClass('active')
      var fill_rect = document.querySelector('#tool_fill rect');
      var fill_color = fill_rect.getAttribute("fill");
      var stroke_color = stroke_rect.getAttribute("fill");
      var stroke_opacity = parseFloat(stroke_rect.getAttribute("stroke-opacity"));
      if (isNaN(stroke_opacity)) {stroke_opacity = 100;}
      var fill_opacity = parseFloat(fill_rect.getAttribute("fill-opacity"));
      if (isNaN(fill_opacity)) {fill_opacity = 100;}
      var stroke = getPaint(stroke_color, stroke_opacity, "stroke");
      var fill = getPaint(fill_color, fill_opacity, "fill");
      Editor.paintBox.fill.setPaint(stroke, true);
      Editor.paintBox.stroke.setPaint(fill, true);
      
    };
    
    var zoomImage = function(multiplier) {
      var res = svgCanvas.getResolution();
      multiplier = multiplier?res.zoom * multiplier:1;
  //    setResolution(res.w * multiplier, res.h * multiplier, true);
      $('#zoom').val(multiplier * 100);
      svgCanvas.setZoom(multiplier);
      zoomDone();
      updateCanvas(true);
    };
    
    var zoomDone = function() {
  //    updateBgImage();
      updateWireFrame();
      //updateCanvas(); // necessary?
    }
  
    var clickWireframe = function() {
      flash($('#view_menu'));
      var wf = !$('#tool_wireframe').hasClass('push_button_pressed');
      if (wf) 
        $('#tool_wireframe').addClass('push_button_pressed');
      else
        $('#tool_wireframe').removeClass('push_button_pressed');
      workarea.toggleClass('wireframe');
      
      if(supportsNonSS) return;
      var wf_rules = $('#wireframe_rules');
      if(!wf_rules.length) {
        wf_rules = $('<style id="wireframe_rules"><\/style>').appendTo('head');
      } else {
        wf_rules.empty();
      }
      
      updateWireFrame();
    }
    
    var clickSnapGrid = function() {
      flash($('#view_menu'));
      var sg = !$('#tool_snap').hasClass('push_button_pressed');
      if (sg) 
        $('#tool_snap').addClass('push_button_pressed');
      else
        $('#tool_snap').removeClass('push_button_pressed');   
      curConfig.gridSnapping = sg;
    }
    
    var minimizeModal = function() {
      
      if (window.self != window.top) { //we're in an iframe
        top.exit_fullscreen();
      }
    }

    var clickRulers = function() {
      flash($('#view_menu'));
      var rulers = !$('#tool_rulers').hasClass('push_button_pressed');
      if (rulers) {
        $('#tool_rulers').addClass('push_button_pressed');
        $('#show_rulers').attr("checked", true);
        curConfig.showRulers = true;
      }
      else {
        $('#tool_rulers').removeClass('push_button_pressed');
        $('#show_rulers').attr("checked", false);
        curConfig.showRulers = false;
      }
      $('#rulers').toggle(!!curConfig.showRulers)
    }
    
    var updateWireFrame = function() {
      // Test support
      if(supportsNonSS) return;
  
      var rule = "#workarea.wireframe #svgcontent * { stroke-width: " + 1/svgCanvas.getZoom() + "px; }";
      $('#wireframe_rules').text(workarea.hasClass('wireframe') ? rule : "");
    }
  
    var showSourceEditor = function(e, forSaving){
      if (editingsource) return;
      flash($('#view_menu'));
      editingsource = true;
      
      $('#save_output_btns').toggle(!!forSaving);
      $('#tool_source_back').toggle(!forSaving);
      
      var str = orig_source = svgCanvas.getSvgString();
      $('#svg_source_textarea').val(str);
      $('#svg_source_editor').fadeIn();
      $('#svg_source_textarea').focus().select();
    };
    
    var clickSave = function(){
      flash($('#file_menu'));
      svgCanvas.save();
    };
    
    var saveSourceEditor = function(){
      if (!editingsource) return;
  
      var saveChanges = function() {
        svgCanvas.clearSelection();
        hideSourceEditor();
        zoomImage();
        prepPaints();
      }
  
      if (!svgCanvas.setSvgString($('#svg_source_textarea').val())) {
        $.confirm("There were parsing errors in your SVG source.\nRevert back to original SVG source?", function(ok) {
          if(!ok) return false;
          saveChanges();
        });
      } else {
        saveChanges();
      }
      setSelectMode();    
    };
    
    function setBackground(color, url) {
      $.pref('bkgd_color', color);
      $.pref('bkgd_url', url);
      // This should be done in svgcanvas.js for the borderRect fill
      svgCanvas.setBackground(color, url);
    }
  
    var ua_prefix;
    (ua_prefix = function() {
      var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;
      var someScript = document.getElementsByTagName('script')[0];
      for(var prop in someScript.style) {
        if(regex.test(prop)) {
          // test is faster than match, so it's better to perform
          // that on the lot and match only when necessary
          return prop.match(regex)[0];
        }
      }
    
      // Nothing found so far?
      if('WebkitOpacity' in someScript.style) return 'Webkit';
      if('KhtmlOpacity' in someScript.style) return 'Khtml';
      
      return '';
    }());
    
    var scaleElements = function(elems, scale) {
      var prefix = '-' + ua_prefix.toLowerCase() + '-';
      
      var sides = ['top', 'left', 'bottom', 'right'];
    
      elems.each(function() {
//          console.log('go', scale);

        // Handled in CSS
        // this.style[ua_prefix + 'Transform'] = 'scale(' + scale + ')';
      
        var el = $(this);
        
        var w = el.outerWidth() * (scale - 1);
        var h = el.outerHeight() * (scale - 1);
        var margins = {};
        
        for(var i = 0; i < 4; i++) {
          var s = sides[i];
          
          var cur = el.data('orig_margin-' + s);
          if(cur == null) {
            cur = parseInt(el.css('margin-' + s));
            // Cache the original margin
            el.data('orig_margin-' + s, cur);
          }
          var val = cur * scale;
          if(s === 'right') {
            val += w;
          } else if(s === 'bottom') {
            val += h;
          }
          
          el.css('margin-' + s, val);
//            el.css('outline', '1px solid red');
        }
      });
    }
  
    var cancelOverlays = function() {
      $('#dialog_box').hide();
      if (!editingsource && !docprops && !preferences) {
        if(cur_context) {
          svgCanvas.leaveContext();
        }
        return;
      };
  
      if (editingsource) {
        if (orig_source !== $('#svg_source_textarea').val()) {
          $.confirm("Ignore changes made to SVG source?", function(ok) {
            if(ok) hideSourceEditor();
          });
        } else {
          hideSourceEditor();
        }
      }
      else if (docprops) {
        hideDocProperties();
      } else if (preferences) {
        hidePreferences();
      }
      resetScrollPos();
    };
  
    var hideSourceEditor = function(){
      $('#svg_source_editor').hide();
      editingsource = false;
      $('#svg_source_textarea').blur();
    };

    var win_wh = {width:$(window).width(), height:$(window).height()};
    
    var resetScrollPos = $.noop, curScrollPos;
    $(window).resize(updateCanvas);
    
    (function() {
      workarea.scroll(function() {
        // TODO:  jQuery's scrollLeft/Top() wouldn't require a null check
        if ($('#ruler_x').length != 0) {
          $('#ruler_x')[0].scrollLeft = workarea[0].scrollLeft;
        }
        if ($('#ruler_y').length != 0) {
          $('#ruler_y')[0].scrollTop = workarea[0].scrollTop; 
        }
      });

    }());
    
    $('#change_image_url').click(promptImgURL);
    
    function promptImgURL() {
      var curhref = svgCanvas.getHref(selectedElement);
      curhref = curhref.indexOf("data:") === 0?"":curhref;
      $.prompt("Enter the new image URL", curhref, function(url) {
        if(url) setImageURL(url);
      });
    }
    
    // TODO: go back to the color boxes having white background-color and then setting
    //       background-image to none.png (otherwise partially transparent gradients look weird)  
    var colorPicker = function(elem) {
      var picker = elem[0].id == 'stroke_color' ? 'stroke' : 'fill';
      var is_background = elem[0].id == "canvas_color"
      if (is_background) picker = 'canvas'
//        var opacity = (picker == 'stroke' ? $('#stroke_opacity') : $('#fill_opacity'));
      var paint = Editor.paintBox[picker].paint;
      
      var title = (picker == 'stroke' ? 'Pick a Stroke Paint and Opacity' : 'Pick a Fill Paint and Opacity');
      var was_none = false;
      var pos = is_background ? {'right': 175, 'top': 50} : {'left': 50, 'bottom': 50}
      
      $("#color_picker")
        .draggable({cancel:'.jGraduate_tabs, .jGraduate_colPick, .jGraduate_gradPick, .jPicker', containment: 'window'})
        .removeAttr("style")
        .css(pos)
        .jGraduate(
        { 
          paint: paint,
          window: { pickerTitle: title },
          images: { clientPath: curConfig.jGraduatePath },
          newstop: 'inverse'
        },
        function(p) {
          paint = new $.jGraduate.Paint(p);
          
          Editor.paintBox[picker].setPaint(paint);
          svgCanvas.setPaint(picker, paint);
          
          $('#color_picker').hide();
        },
        function(p) {
          $('#color_picker').hide();
        });
    };
  
    var PaintBox = function(container, type) {
      var background = document.getElementById("canvas_background");
      var cur = {color: "fff", opacity: 1}
      if (type == "stroke") cur = curConfig['initStroke'];
      if (type == "fill") cur = curConfig['initFill'];
      if (type == "canvas" && background) {
            var rgb = background.getAttribute("fill").match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (rgb) {
              var hex =   ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
                            ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
                            ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
              cur = {color: hex, opacity: 1}
            }
      }

      // set up gradients to be used for the buttons
      var svgdocbox = new DOMParser().parseFromString(
        '<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%"\
        fill="#' + cur.color + '" opacity="' + cur.opacity + '"/>\
        <defs><linearGradient id="gradbox_"/></defs></svg>', 'text/xml');
      var docElem = svgdocbox.documentElement;
      
      docElem = $(container)[0].appendChild(document.importNode(docElem, true));
      if (type === 'canvas') docElem.setAttribute('width',60.5);
      else docElem.setAttribute('width',"100%");
      
      this.rect = docElem.firstChild;
      this.defs = docElem.getElementsByTagName('defs')[0];
      this.grad = this.defs.firstChild;
      this.paint = new $.jGraduate.Paint({solidColor: cur.color});
      this.type = type;

      this.setPaint = function(paint, apply, noUndo) {
        this.paint = paint;
        var fillAttr = "none";
        var ptype = paint.type;
        var opac = paint.alpha / 100;
        switch ( ptype ) {
          case 'solidColor':
            fillAttr = (paint[ptype] == 'none' || paint[ptype] == 'one') ? 'none' : "#" + paint[ptype];
            break;
          case 'linearGradient':
          case 'radialGradient':
            this.defs.removeChild(this.grad);
            this.grad = this.defs.appendChild(paint[ptype]);
            var id = this.grad.id = 'gradbox_' + this.type;
            fillAttr = "url(#" + id + ')';
        }
        this.rect.setAttribute('fill', fillAttr);
        this.rect.setAttribute('opacity', opac);

        if (this.type == "canvas") {
          //recache background in case it changed
          var background = document.getElementById("canvas_background");
          if (background) {
            res = svgCanvas.getResolution()
            background.setAttribute("x", -1);
            background.setAttribute("y", -1);
            background.setAttribute("width", res.w+2);
            background.setAttribute("height", res.h+2);
            if (fillAttr.indexOf("url") == -1) background.setAttribute('fill', fillAttr)
          }
          else createBackground(fillAttr)
        }
        
        if(apply) {
          svgCanvas.setColor(this.type, fillAttr, true);
          svgCanvas.setPaintOpacity(this.type, opac, true);
        }
        
      }
      
      this.update = function(apply) {
        if(!selectedElement) return;
        var type = this.type;
        switch ( selectedElement.tagName ) {
        case 'use':
        case 'image':
        case 'foreignObject':
          // These elements don't have fill or stroke, so don't change 
          // the current value
          return;
        case 'g':
        case 'a':
          var gPaint = null;
        
          var childs = selectedElement.getElementsByTagName('*');
          for(var i = 0, len = childs.length; i < len; i++) {
            var elem = childs[i];
            var p = elem.getAttribute(type);
            if(i === 0) {
              gPaint = p;
            } else if(gPaint !== p) {
              gPaint = null;
              break;
            }
          }
          if(gPaint === null) {
            // No common color, don't update anything
            var paintColor = null;
            return;
          }
          var paintColor = gPaint;
          
          var paintOpacity = 1;
          break;
        default:
          var paintOpacity = parseFloat(selectedElement.getAttribute(type + "-opacity"));
          if (isNaN(paintOpacity)) {
            paintOpacity = 1.0;
          }
          
          var defColor = type === "fill" ? "black" : "none";
          var paintColor = selectedElement.getAttribute(type) || defColor;
        }
        if(apply) {
          svgCanvas.setColor(type, paintColor, true);
          svgCanvas.setPaintOpacity(type, paintOpacity, true);
        }

        paintOpacity *= 100;          
        
        var paint = getPaint(paintColor, paintOpacity, type);
        // update the rect inside #fill_color/#stroke_color
        this.setPaint(paint);
      }
      
      this.prep = function() {
        var ptype = this.paint.type;
      
        switch ( ptype ) {
          case 'linearGradient':
          case 'radialGradient':
            var paint = new $.jGraduate.Paint({copy: this.paint});
            svgCanvas.setPaint(type, paint);
        }
      }
    };
    
    Editor.paintBox.fill = new PaintBox('#fill_color', 'fill');
    Editor.paintBox.stroke = new PaintBox('#stroke_color', 'stroke');
    Editor.paintBox.canvas = new PaintBox('#canvas_color', 'canvas');

    $('#stroke_width').val(curConfig.initStroke.width);
    $('#group_opacity').val(curConfig.initOpacity * 100);
    
    // Use this SVG elem to test vectorEffect support
    var test_el = Editor.paintBox.fill.rect.cloneNode(false);
    test_el.setAttribute('style','vector-effect:non-scaling-stroke');
    var supportsNonSS = (test_el.style.vectorEffect === 'non-scaling-stroke');
    test_el.removeAttribute('style');
    var svgdocbox = Editor.paintBox.fill.rect.ownerDocument;
    // Use this to test support for blur element. Seems to work to test support in Webkit
    var blur_test = svgdocbox.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    if(typeof blur_test.stdDeviationX === "undefined") {
      $('#tool_blur').hide();
    }
    $(blur_test).remove();
      
    $('#tool_fill').click(function(){
      if ($('#tool_fill').hasClass('active')) {
        colorPicker($('#fill_color'));
      }
      else {
        $('#tool_fill').addClass('active');
        $("#tool_stroke").removeClass('active');
      }
    });
    
    $('#tool_stroke').on("click", function(){
      if ($('#tool_stroke').hasClass('active')) {
        colorPicker($('#stroke_color'));
      }
      else {
        $('#tool_stroke').addClass('active');
        $("#tool_fill").removeClass('active');
      }
    });
    
    $('#tool_canvas').on("click touchstart", function(){
        colorPicker($('#canvas_color'));
    });
    
    $('#tool_stroke').on("touchstart", function(){
        $('#tool_stroke').addClass('active');
        $("#tool_fill").removeClass('active');
        colorPicker($('#stroke_color'));
    });

    $('#tool_fill').on("touchstart", function(){
        $('#tool_fill').addClass('active');
        $("#tool_stroke").removeClass('active');
        colorPicker($('#fill_color'));
    });
    
    $('#zoom_select').on("change", function() {
      var val = this.options[this.selectedIndex].text
      val = val.split("%")[0]
      $("#zoom").val(val).trigger("change")
    });
  
    $('.push_button').mousedown(function() { 
      if (!$(this).hasClass('disabled')) {
        $(this).addClass('push_button_pressed').removeClass('push_button');
      }
    }).mouseout(function() {
      $(this).removeClass('push_button_pressed').addClass('push_button');
    }).mouseup(function() {
      $(this).removeClass('push_button_pressed').addClass('push_button');
    });
    
  
  //  function changeResolution(x,y) {
  //    var zoom = svgCanvas.getResolution().zoom;
  //    setResolution(x * zoom, y * zoom);
  //  }
    
    var centerCanvas = function() {
      // this centers the canvas vertically in the workarea (horizontal handled in CSS)
      workarea.css('line-height', workarea.height() + 'px');
    };
    
    $(window).bind('load resize', centerCanvas);
  
    function stepFontSize(elem, step) {
      var orig_val = elem.value-0;
      var sug_val = orig_val + step;
      var increasing = sug_val >= orig_val;
      if(step === 0) return orig_val;
      
      if(orig_val >= 24) {
        if(increasing) {
          return Math.round(orig_val * 1.1);
        } else {
          return Math.round(orig_val / 1.1);
        }
      } else if(orig_val <= 1) {
        if(increasing) {
          return orig_val * 2;      
        } else {
          return orig_val / 2;
        }
      } else {
        return sug_val;
      }
    }
    
    function stepZoom(elem, step) {
      var orig_val = elem.value-0;
      if(orig_val === 0) return 100;
      var sug_val = orig_val + step;
      if(step === 0) return orig_val;
      
      if(orig_val >= 100) {
        return sug_val;
      } else {
        if(sug_val >= orig_val) {
          return orig_val * 2;
        } else {
          return orig_val / 2;
        }
      }
    }
      
  var changeCanvasSize = function(ctl){
    var width = $("#canvas_width");
    var height = $("#canvas_height");
    var w = width.val();
    var h = height.val()
    
    if(w != "fit" && !svgedit.units.isValidUnit('width', w)) {
      $.alert("Invalid value given");
      width.parent().addClass('error');
      return false;
    }

    width.parent().removeClass('error');

    if(h != "fit" && !svgedit.units.isValidUnit('height', h)) {
      $.alert("Invalid value given");
      height.parent().addClass('error');
      return false;
    } 
    height.parent().removeClass('error');
    if(!svgCanvas.setResolution(w, h)) {
      $.alert("No content to fit to");
      var dims = svgCanvas.getResolution()
      width.val(dims.w)
      height.val(dims.h)
      return false;
    }
     updateCanvas();
  }
  
  
    $('#resolution').change(function(){
      var w = $('#canvas_width')[0];
      var h = $('#canvas_height')[0];
      if(!this.selectedIndex) {
        $('#resolution_label').html("Custom");
        w.removeAttribute("readonly");
        w.focus();
        w.select();
        if(w.value == 'fit') {
          w.value = 100
          h.value = 100
        }
      } else if(this.value == 'content') {
        w.value = 'fit'
        h.value = 'fit'
        changeCanvasSize();
        var res = svgCanvas.getResolution()
        w.value = res.w
        h.value = res.h
        
      } else {
        var dims = this.value.split('x');
        dims[0] = parseInt(dims[0]); 
        dims[1] = parseInt(dims[1]);
        var diff_w = dims[0] - w.value;
        var diff_h = dims[1] - h.value;
        //animate
        var start = Date.now();
        var duration = 1000;
        var animateCanvasSize = function(timestamp) {
          var progress = Date.now() - start;
          var tick = progress / duration;
          tick = (Math.pow((tick-1), 3) +1);
          w.value = (dims[0] - diff_w + (tick*diff_w)).toFixed(0);
          h.value = (dims[1] - diff_h + (tick*diff_h)).toFixed(0);
          changeCanvasSize();
          if (tick >= 1) {
            var res = svgCanvas.getResolution()
            $('#canvas_width').val(res.w.toFixed())
            $('#canvas_height').val(res.h.toFixed())
            $('#resolution_label').html("<div class='pull'>" + res.w + "<span>×</span></br>" + res.h + "</div>");
          }
          else {
            requestAnimationFrame(animateCanvasSize)
          }
        }
        animateCanvasSize()

      }
    });
    
    $('#zoom').change(function(){
      changeZoom(this)
    })
  
    //Prevent browser from erroneously repopulating fields
    $('input,select').attr("autocomplete","off");
    
    // Associate all button actions as well as non-button keyboard shortcuts
    var Actions = function() {
      // sel:'selector', fn:function, evt:'event', key:[key, preventDefault, NoDisableInInput]
      var tool_buttons = [
        {sel:'#tool_select', fn: clickSelect, evt: 'click', key: ['V', true]},
        {sel:'#tool_fhpath', fn: clickFHPath, evt: 'click', key: ['Q', true]},
        {sel:'#tool_line', fn: clickLine, evt: 'click', key: ['L', true]},
        {sel:'#tool_rect', fn: clickRect, evt: 'click', key: ['R', true]},
        {sel:'#tool_ellipse', fn: clickEllipse, evt: 'mouseup', key: ['C', true]},
        {sel:'#tool_eyedropper', fn: clickEyedropper, evt: 'click', key: ['I', true]},
        {sel:'#tool_shapelib', fn: clickShapelib, evt: 'click', key: ['S', true]},
        {sel:'#tool_path', fn: clickPath, evt: 'click', key: ['P', true]},
        {sel:'#tool_text', fn: clickText, evt: 'click', key: ['T', true]},
        {sel:'#tool_zoom', fn: clickZoom, evt: 'mouseup', key: ['Z', true]},
        {sel:'#tool_clear', fn: clickClear, evt: 'mouseup', key: [modKey + 'N', true]},
        {sel:'#tool_save', fn: function() { editingsource ? saveSourceEditor(): clickSave() }, evt: 'mouseup', key: [modKey + 'S', true]},
        {sel:'#tool_export', fn: clickExport, evt: 'mouseup'},
        {sel:'#tool_open', fn: clickOpen, evt: 'mouseup'},
        {sel:'#tool_import', fn: clickImport, evt: 'mouseup'},
        {sel:'#tool_source', fn: showSourceEditor, evt: 'click', key: [modKey + 'U', true]},
        {sel:'#tool_wireframe', fn: clickWireframe, evt: 'click'},
        {sel:'#tool_snap', fn: clickSnapGrid, evt: 'click'},
        {sel:'#tool_rulers', fn: clickRulers, evt: 'click'},
        {sel:'#tool_source_cancel,#svg_source_overlay,#tool_docprops_cancel,#tool_prefs_cancel', fn: cancelOverlays, evt: 'click', key: ['esc', false, false], hidekey: true},
        {sel:'#tool_source_save', fn: saveSourceEditor, evt: 'click'},
        {sel:'#tool_delete,#tool_delete_multi', fn: deleteSelected, evt: 'click', key: ['del/backspace', true]},
        {sel:'#tool_reorient', fn: reorientPath, evt: 'click'},
        {sel:'#tool_node_link', fn: linkControlPoints, evt: 'change'},
        {sel:'#tool_node_clone', fn: clonePathNode, evt: 'click'},
        {sel:'#tool_node_delete', fn: deletePathNode, evt: 'click'},
        {sel:'#tool_openclose_path', fn: opencloseSubPath, evt: 'click'},
        {sel:'#tool_add_subpath', fn: addSubPath, evt: 'click'},
        {sel:'#tool_move_top', fn: moveToTopSelected, evt: 'click', key: modKey + 'shift+up'},
        {sel:'#tool_move_bottom', fn: moveToBottomSelected, evt: 'click', key: modKey + 'shift+down'},
        {sel:'#tool_move_up', fn: moveUpSelected, evt:'click', key: [modKey+'up', true]},
        {sel:'#tool_move_down', fn: moveDownSelected, evt:'click', key: [modKey+'down', true]},
        {sel:'#tool_topath', fn: convertToPath, evt: 'click'},
        {sel:'#tool_make_link,#tool_make_link_multi', fn: makeHyperlink, evt: 'click'},
        {sel:'#tool_clone,#tool_clone_multi', fn: clickClone, evt: 'click', key: [modKey + 'D', true]},
        {sel:'#tool_group', fn: clickGroup, evt: 'click', key: [modKey + 'G', true]},
        {sel:'#tool_ungroup', fn: clickGroup, evt: 'click', key: modKey + 'shift+G'},
        {sel:'#tool_unlink_use', fn: clickGroup, evt: 'click'},
        {sel:'[id^=tool_align]', fn: clickAlign, evt: 'click'},
        {sel:'#tool_undo', fn: clickUndo, evt: 'click', key: modKey + 'z'},
        {sel:'#tool_redo', fn: clickRedo, evt: 'click', key: ['y', true]},
        {sel:'#tool_cut', fn: cutSelected, evt: 'click', key: [modKey+'x', true]},
        {sel:'#tool_copy', fn: copySelected, evt: 'click', key: modKey+'c'},
        {sel:'#tool_paste', fn: pasteSelected, evt: 'click', key: modKey+'v'},
        {sel:'#tool_switch', fn: clickSwitch, evt: 'click', key: ['x', true]},
        {sel:'#tool_bold', fn: clickBold, evt: 'mousedown', key: [modKey + 'B', true]},
        {sel:'#tool_italic', fn: clickItalic, evt: 'mousedown',  key: [modKey + 'I', true]},
        //{sel:'#sidepanel_handle', fn: toggleSidePanel, key: ['X']},
        {sel:'#copy_save_done', fn: cancelOverlays, evt: 'click'},
        
        // Shortcuts not associated with buttons
        
        {key: 'ctrl+left', fn: function(){rotateSelected(0,1)}},
        {key: 'ctrl+right', fn: function(){rotateSelected(1,1)}},
        {key: 'ctrl+shift+left', fn: function(){rotateSelected(0,5)}},          
        {key: 'ctrl+shift+right', fn: function(){rotateSelected(1,5)}},
        {key: 'shift+O', fn: selectPrev},
        {key: 'shift+P', fn: selectNext},
        {key: [modKey+'+', true], fn: function(){zoomImage(2);}},
        {key: [modKey+'-', true], fn: function(){zoomImage(.5);}},
        {key: ['up', true], fn: function(){moveSelected(0,-1);}},
        {key: ['down', true], fn: function(){moveSelected(0,1);}},
        {key: ['left', true], fn: function(){moveSelected(-1,0);}},
        {key: ['right', true], fn: function(){moveSelected(1,0);}},
        {key: 'shift+up', fn: function(){moveSelected(0,-10)}},
        {key: 'shift+down', fn: function(){moveSelected(0,10)}},
        {key: 'shift+left', fn: function(){moveSelected(-10,0)}},
        {key: 'shift+right', fn: function(){moveSelected(10,0)}},
        {key: ['alt+up', true], fn: function(){svgCanvas.cloneSelectedElements(0,-1)}},
        {key: ['alt+down', true], fn: function(){svgCanvas.cloneSelectedElements(0,1)}},
        {key: ['alt+left', true], fn: function(){svgCanvas.cloneSelectedElements(-1,0)}},
        {key: ['alt+right', true], fn: function(){svgCanvas.cloneSelectedElements(1,0)}},
        {key: ['alt+shift+up', true], fn: function(){svgCanvas.cloneSelectedElements(0,-10)}},
        {key: ['alt+shift+down', true], fn: function(){svgCanvas.cloneSelectedElements(0,10)}},
        {key: ['alt+shift+left', true], fn: function(){svgCanvas.cloneSelectedElements(-10,0)}},
        {key: ['alt+shift+right', true], fn: function(){svgCanvas.cloneSelectedElements(10,0)}},  
        {key: modKey + 'A', fn: function(){svgCanvas.selectAllInCurrentLayer();}},

        // Standard shortcuts
        {key: modKey + 'shift+z', fn: clickRedo},
        {key: 'esc', fn: minimizeModal}
      ];
      
      // Tooltips not directly associated with a single function
      var key_assocs = {
        '4/Shift+4': '#tools_rect_show',
        '5/Shift+5': '#tools_ellipse_show'
      };
    
      return {
        setAll: function() {
          var flyouts = {};
          
          $.each(tool_buttons, function(i, opts)  {       
            // Bind function to button
            if(opts.sel) {
              var btn = $(opts.sel);
              if (btn.length == 0) return true; // Skip if markup does not exist
              if(opts.evt) {
                if (svgedit.browser.isTouch() && opts.evt === "click") opts.evt = "mousedown" 
                btn[opts.evt](opts.fn);
              }
  
              // Add to parent flyout menu, if able to be displayed
              if(opts.parent && $(opts.parent + '_show').length != 0) {
                var f_h = $(opts.parent);
                if(!f_h.length) {
                  f_h = makeFlyoutHolder(opts.parent.substr(1));
                }
                
                f_h.append(btn);
                
                if(!$.isArray(flyouts[opts.parent])) {
                  flyouts[opts.parent] = [];
                }
                flyouts[opts.parent].push(opts);
              }
            }
            
            
            // Bind function to shortcut key
            if(opts.key) {
              // Set shortcut based on options
              var keyval, shortcut = '', disInInp = true, fn = opts.fn, pd = false;
              if($.isArray(opts.key)) {
                keyval = opts.key[0];
                if(opts.key.length > 1) pd = opts.key[1];
                if(opts.key.length > 2) disInInp = opts.key[2];
              } else {
                keyval = opts.key;
              }
              keyval += '';
              if (svgedit.browser.isMac && keyval.indexOf("+") != -1) {
                var modifier_key =  keyval.split("+")[0];
                if (modifier_key == "ctrl") keyval.replace("ctrl", "cmd")
              }
              
              $.each(keyval.split('/'), function(i, key) {
                $(document).bind('keydown', key, function(e) {
                  fn();
                  if(pd) {
                    e.preventDefault();
                  }
                  // Prevent default on ALL keys?
                  return false;
                });
              });
              
              // Put shortcut in title
              if(opts.sel && !opts.hidekey && btn.attr('title')) {
                var new_title = btn.attr('title').split('[')[0] + ' (' + keyval + ')';
                key_assocs[keyval] = opts.sel;
                // Disregard for menu items
                if(!btn.parents('#main_menu').length) {
                  btn.attr('title', new_title);
                }
              }
            }
          });
          
          $(window).bind('keydown', 'tab', function(e) {
            if(ui_context === 'canvas') {
              e.preventDefault();
              selectNext();
            }
          }).bind('keydown', 'shift+tab', function(e) {
            if(ui_context === 'canvas') {
              e.preventDefault();
              selectPrev();
            }
          });
        },
        setTitles: function() {
          $.each(key_assocs, function(keyval, sel)  {
            var menu = ($(sel).parents('#main_menu').length);
          
            $(sel).each(function() {
              if(menu) {
                var t = $(this).text().split(' [')[0];
              } else {
                var t = this.title.split(' [')[0];              
              }
              var key_str = '';
              // Shift+Up
              $.each(keyval.split('/'), function(i, key) {
                var mod_bits = key.split('+'), mod = '';
                if(mod_bits.length > 1) {
                  mod = mod_bits[0] + '+';
                  key = mod_bits[1];
                }
                key_str += (i?'/':'') + mod + (key);
              });
              if(menu) {
                this.lastChild.textContent = t +' ['+key_str+']';
              } else {
                this.title = t +' ['+key_str+']';
              }
            });
          });
        },
        getButtonData: function(sel) {
          var b;
          $.each(tool_buttons, function(i, btn) {
            if(btn.sel === sel) b = btn;
          });
          return b;
        }
      };
    }();
    
    Actions.setAll();
    
    // Select given tool
    Editor.ready(function() {
      var tool,
        itool = curConfig.initTool,
        container = $("#tools_left, #svg_editor .tools_flyout"),
        pre_tool = container.find("#tool_" + itool),
        reg_tool = container.find("#" + itool);
      if(pre_tool.length) {
        tool = pre_tool;
      } else if(reg_tool.length){
        tool = reg_tool;
      } else {
        tool = $("#tool_select");
      }
      tool.click().mouseup();
      
      if(curConfig.wireframe) {
        $('#tool_wireframe').click();
      }
      
      if(curConfig.showlayers) {
        toggleSidePanel();
      }
      
      $('#rulers').toggle(!!curConfig.showRulers);
    });
  
    
    $('#canvas_height').dragInput({ min: 10,   max: null,  step: 10,  callback: changeCanvasSize,    cursor: false, dragAdjust: .1         }); 
    $('#canvas_width') .dragInput({ min: 10,   max: null,  step: 10,  callback: changeCanvasSize,    cursor: false, dragAdjust: .1         });                         
    $('#rect_width')   .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         }); 
    $('#rect_height')  .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#ellipse_cx')   .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#ellipse_cy')   .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#ellipse_rx')   .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#ellipse_ry')   .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $("#image_height") .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#circle_cx')    .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#circle_cy')    .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#circle_r')     .dragInput({ min: 1,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $("#image_height") .dragInput({ min: 0,    max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#selected_x')   .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#selected_y')   .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $("#path_node_x")  .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $("#path_node_y")  .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $("#image_width")  .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#line_x1')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#line_x2')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#line_y1')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#line_y2')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#path_x')       .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#path_y')       .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#rect_x')       .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#rect_y')       .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#g_x')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#g_y')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#image_x')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#text_y')       .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#text_x')       .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#image_y')      .dragInput({ min: null, max: null,  step:  1,  callback: changeAttribute,     cursor: false                         });
    $('#rect_rx')      .dragInput({ min: 0,    max: 100,   step:  1,  callback: changeAttribute,    cursor: true                          });
    $('#stroke_width') .dragInput({ min: 0,    max: 99,    step:  1,  callback: changeStrokeWidth,   cursor: true, smallStep: 0.1, start: 1.5          });
    $('#angle')        .dragInput({ min: -180, max: 180,   step:  1,  callback: changeRotationAngle, cursor: false, dragAdjust: 0.5      });
    $('#font_size')    .dragInput({ min: 1, max: 250, step: 1, callback: changeFontSize, cursor: true, stepfunc: stepFontSize, dragAdjust: .15 });
    $('#group_opacity').dragInput({ min: 0,    max: 100,   step:  5,  callback: changeAttribute,       cursor: true,  start: 100             });
    $('#blur')         .dragInput({ min: 0,    max: 10,    step: .1,  callback: changeBlur,          cursor: true,  start: 0               });
      // Set default zoom 
    $('#zoom').val(svgCanvas.getZoom() * 100);
    
    $("#workarea").contextMenu({
        menu: 'cmenu_canvas',
        inSpeed: 0
      },
      function(action, el, pos) {
        switch ( action ) {
          case 'delete':
            deleteSelected();
            break;
          case 'cut':
            cutSelected();
            break;
          case 'copy':
            copySelected();
            break;
          case 'paste':
            svgCanvas.pasteElements();
            break;
          case 'paste_in_place':
            svgCanvas.pasteElements('in_place');
            break;
          case 'group':
            svgCanvas.groupSelectedElements();
            break;
          case 'ungroup':         
            svgCanvas.ungroupSelectedElement();  
            break;
          case 'move_front':
            moveToTopSelected();
            break;
          case 'move_up':
            moveUpDownSelected('Up');
            break;
          case 'move_down':
            moveUpDownSelected('Down');
            break;
          case 'move_back':
            moveToBottomSelected();
            break;
            default:
            if(svgedit.contextmenu && svgedit.contextmenu.hasCustomHandler(action)){
              svgedit.contextmenu.getCustomHandler(action).call();
              }
              break;
        }
        
    });
    
    $('.contextMenu li').mousedown(function(ev) {
      ev.preventDefault();
    })
    
    $('#cmenu_canvas li').disableContextMenu();
    canv_menu.enableContextMenuItems('#delete,#cut,#copy');
    
    Editor.openPrep = function(func) {
      $('#main_menu').hide();
      if(undoMgr.getUndoStackSize() === 0) {
        func(true);
      } else {
        $.confirm("Do you want to open a new file?\nThis will also erase your undo history", func);
      }
    }
          
    if (window.FileReader) {
      
      var import_image = function(e) {
        e.stopPropagation();
        e.preventDefault();
        $("#workarea").removeAttr("style");
        $('#main_menu').hide();
        var file = null;
        if (e.type == "drop") file = e.dataTransfer.files[0]
        else file = this.files[0];
        if (file) {
          if(file.type.indexOf("image") != -1) {
            //detected an image
          
            //svg handing
            if(file.type.indexOf("svg") != -1) {
              var reader = new FileReader();
              reader.onloadend = function(e) {
                svgCanvas.importSvgString(e.target.result, true);
                svgCanvas.ungroupSelectedElement()
                svgCanvas.ungroupSelectedElement()
                svgCanvas.groupSelectedElements()
                svgCanvas.alignSelectedElements("m", "page")
                svgCanvas.alignSelectedElements("c", "page")
              };
              reader.readAsText(file);
            }
        
            //image handling
            else {
              var reader = new FileReader();
              reader.onloadend = function(e) {
                // lets insert the new image until we know its dimensions
                insertNewImage = function(img_width, img_height){
                    var newImage = svgCanvas.addSvgElementFromJson({
                    "element": "image",
                    "attr": {
                      "x": 0,
                      "y": 0,
                      "width": img_width,
                      "height": img_height,
                      "id": svgCanvas.getNextId(),
                      "style": "pointer-events:inherit"
                    }
                  });
                  svgCanvas.setHref(newImage, e.target.result);
                  svgCanvas.selectOnly([newImage])
                  svgCanvas.alignSelectedElements("m", "page")
                  svgCanvas.alignSelectedElements("c", "page")
                  updateContextPanel();
                }
                // put a placeholder img so we know the default dimensions
                var img_width = 100;
                var img_height = 100;
                var img = new Image()
                img.src = e.target.result
                document.body.appendChild(img);
                img.onload = function() {
                  img_width = img.offsetWidth
                  img_height = img.offsetHeight
                  insertNewImage(img_width, img_height);
                  document.body.removeChild(img);
                }
              };
              reader.readAsDataURL(file)
            }
          }
        }
      }
      
      var workarea = $("#workarea")
      
      function onDragEnter(e) {
        e.stopPropagation();
        e.preventDefault();
        workarea.css({
          "-webkit-transform": "scale3d(1.1,1.1,1)",
          "-moz-transform": "scale3d(1.1,1.1,1)",
          "-o-transform": "scale(1.1)",
          "-ms-transform": "scale3d(1.1,1.1,1)",
          "transform": "scale3d(1.1,1.1,1)"
        })

      }

      function onDragOver(e) {
        e.stopPropagation();
        e.preventDefault();
      }

      function onDragLeave(e) {
        workarea.removeAttr("style")
        e.stopPropagation();
        e.preventDefault();
      }

    workarea[0].addEventListener('dragenter', onDragEnter, false);
      workarea[0].addEventListener('dragover', onDragOver, false);
      workarea[0].addEventListener('dragleave', onDragLeave, false);
      workarea[0].addEventListener('drop', import_image, false);
      
      var open = $('<input type="file">').change(function() {
        var f = this;
        Editor.openPrep(function(ok) {
          if(!ok) return;
          svgCanvas.clear();
          if(f.files.length==1) {
            var reader = new FileReader();
            reader.onloadend = function(e) {
              loadSvgString(e.target.result);
              updateCanvas();
            };
            reader.readAsText(f.files[0]);
          }
        });
      });
      $("#tool_open").show().prepend(open);
      
      var img_import = $('<input type="file">').change(import_image);
      $("#tool_import").show().prepend(img_import);
    }

    
    var updateCanvas = Editor.updateCanvas = function(center, new_ctr) {
      var w = workarea.width(), h = workarea.height();
      var w_orig = w, h_orig = h;
      var zoom = svgCanvas.getZoom();
      var w_area = workarea;
      var cnvs = $("#svgcanvas");
      
      var old_ctr = {
        x: w_area[0].scrollLeft + w_orig/2,
        y: w_area[0].scrollTop + h_orig/2
      };
      
      var multi = curConfig.canvas_expansion;
      w = Math.max(w_orig, svgCanvas.contentW * zoom * multi);
      h = Math.max(h_orig, svgCanvas.contentH * zoom * multi);
      
      if(w == w_orig && h == h_orig) {
        workarea.css('overflow','hidden');
      } else {
        workarea.css('overflow','scroll');
      }
      
      var old_can_y = cnvs.height()/2;
      var old_can_x = cnvs.width()/2;
      cnvs.width(w).height(h);
      var new_can_y = h/2;
      var new_can_x = w/2;
      var offset = svgCanvas.updateCanvas(w, h);
      
      var ratio = new_can_x / old_can_x;
  
      var scroll_x = w/2 - w_orig/2;
      var scroll_y = h/2 - h_orig/2;
      
      if(!new_ctr) {
  
        var old_dist_x = old_ctr.x - old_can_x;
        var new_x = new_can_x + old_dist_x * ratio;
  
        var old_dist_y = old_ctr.y - old_can_y;
        var new_y = new_can_y + old_dist_y * ratio;
  
        new_ctr = {
          x: new_x,
          y: new_y
        };
        
      } else {
        new_ctr.x += offset.x,
        new_ctr.y += offset.y;
      }
      
      //width.val(offset.x)
      //height.val(offset.y)
      
      if(center) {
        // Go to top-left for larger documents
        if(svgCanvas.contentW > w_area.width()) {
          // Top-left
          workarea[0].scrollLeft = offset.x - 10;
          workarea[0].scrollTop = offset.y - 10;
        } else {
          // Center
          w_area[0].scrollLeft = scroll_x;
          w_area[0].scrollTop = scroll_y;
        }
      } else {
        w_area[0].scrollLeft = new_ctr.x - w_orig/2;
        w_area[0].scrollTop = new_ctr.y - h_orig/2;
      }
      if(curConfig.showRulers) {
        updateRulers(svgCanvas, cnvs, zoom);
        workarea.scroll();
      }
    }
    

    updateCanvas(true);
  
    // Callback handler for embedapi.js
    try{
      var json_encode = function(obj){
      //simple partial JSON encoder implementation
      if(window.JSON && JSON.stringify) return JSON.stringify(obj);
      var enc = arguments.callee; //for purposes of recursion
      if(typeof obj == "boolean" || typeof obj == "number"){
        return obj+'' //should work...
      }else if(typeof obj == "string"){
      //a large portion of this is stolen from Douglas Crockford's json2.js
      return '"'+
          obj.replace(
          /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
          , function (a) {
          return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
          })
          +'"'; //note that this isn't quite as purtyful as the usualness
      }else if(obj.length){ //simple hackish test for arrayish-ness
      for(var i = 0; i < obj.length; i++){
        obj[i] = enc(obj[i]); //encode every sub-thingy on top
      }
      return "["+obj.join(",")+"]";
      }else{
      var pairs = []; //pairs will be stored here
      for(var k in obj){ //loop through thingys
        pairs.push(enc(k)+":"+enc(obj[k])); //key: value
      }
      return "{"+pairs.join(",")+"}" //wrap in the braces
      }
    }
      window.addEventListener("message", function(e){
      var cbid = parseInt(e.data.substr(0, e.data.indexOf(";")));
      try{
        e.source.postMessage("SVGe"+cbid+";"+json_encode(eval(e.data)), "*");
      }catch(err){          
        e.source.postMessage("SVGe"+cbid+";error:"+err.message, "*");
      }
    }, false)
    }catch(err){
      window.embed_error = err;
    }
    
  
  
    // For Compatibility with older extensions
    $(function() {
      window.svgCanvas = svgCanvas;
      svgCanvas.ready = methodDraw.ready;
    });
  
  
    Editor.setLang = function(lang, allStrings) {
      $.pref('lang', lang);
      $('#lang_select').val(lang);
      if(allStrings) {
      
        var notif = allStrings.notification;
        
        svgCanvas.runExtensions("langChanged", lang);
        
        // Update flyout tooltips
        setFlyoutTitles();
        
        // Copy title for certain tool elements
        var elems = {
          '#stroke_color': '#tool_stroke .icon_label, #tool_stroke .color_block',
          '#fill_color': '#tool_fill label, #tool_fill .color_block',
          '#linejoin_miter': '#cur_linejoin',
          '#linecap_butt': '#cur_linecap'
        }
        
        $.each(elems, function(source, dest) {
          $(dest).attr('title', $(source)[0].title);
        });
        
        // Copy alignment titles
        $('#multiselected_panel div[id^=tool_align]').each(function() {
          $('#tool_pos' + this.id.substr(10))[0].title = this.title;
        });
        
      }
    };
  };
  
  var callbacks = [];
  
  function loadSvgString(str, callback) {
    var success = svgCanvas.setSvgString(str) !== false;
    callback = callback || $.noop;
    if(success) {
      callback(true);
    } else {
      $.alert("Error: Unable to load SVG data", function() {
        callback(false);
      });
    }
  }
  
  Editor.ready = function(cb) {
    if(!is_ready) {
      callbacks.push(cb);
    } else {
      cb();
    }
  };

  Editor.runCallbacks = function() {
    $.each(callbacks, function() {
      this();
    });
    is_ready = true;
  };
  
  Editor.loadFromString = function(str) {
    Editor.ready(function() {
      loadSvgString(str);
    });
  };
  
  Editor.loadFromURL = function(url, opts) {
    if(!opts) opts = {};

    var cache = opts.cache;
    var cb = opts.callback;
  
    Editor.ready(function() {
      $.ajax({
        'url': url,
        'dataType': 'text',
        cache: !!cache,
        success: function(str) {
          loadSvgString(str, cb);
        },
        error: function(xhr, stat, err) {
          if(xhr.status != 404 && xhr.responseText) {
            loadSvgString(xhr.responseText, cb);
          } else {
            $.alert("Unable to load from URL" + ": \n"+err+'', cb);
          }
        }
      });
    });
  };
  
  Editor.loadFromDataURI = function(str) {
    Editor.ready(function() {
      var pre = 'data:image/svg+xml;base64,';
      var src = str.substring(pre.length);
      loadSvgString(svgedit.utilities.decode64(src));
    });
  };
  
  Editor.addExtension = function() {
    var args = arguments;
    
    // Note that we don't want this on Editor.ready since some extensions
    // may want to run before then (like server_opensave).
    $(function() {
      if(svgCanvas) svgCanvas.addExtension.apply(this, args);
    });
  };

  return Editor;
}(jQuery);

// Run init once DOM is loaded
$(methodDraw.init);
function Palette(){
  var palette = [
    "#444444", "#482816", "#422C10", "#3B2F0E", "#32320F", 
    "#293414", "#1F361B", "#153723", "#0C372C", "#083734", 
    "#0E353B", "#1A333F", "#273141", "#332D40", "#3E2A3C", 
    "#462735", "#4B252D", "#4D2425", "#4C261D", "#666666", 
    "#845335", "#7B572D", "#6F5C2A", "#62612C", "#546433", 
    "#46673D", "#396849", "#306856", "#2D6862", "#33666C", 
    "#426373", "#535F75", "#645A73", "#74556D", "#805064", 
    "#884D58", "#8B4D4B", "#894F3F", "#999999", "#C48157", 
    "#B8874D", "#A98E49", "#97944B", "#849854", "#729C62", 
    "#619E73", "#559E84", "#529D94", "#5B9BA2", "#6D97AB", 
    "#8391AE", "#9A8AAB", "#AF84A3", "#BF7E96", "#C97A86", 
    "#CE7975", "#CC7C65", "#BBBBBB", "#FFB27C", "#FABA6F", 
    "#E6C36A", "#CFCA6D", "#B8D078", "#A0D58A", "#8CD79F", 
    "#7DD8B5", "#7AD6CA", "#84D3DB", "#9ACEE6", "#B6C7EA", 
    "#D3BEE7", "#EDB6DC", "#FFAFCC", "#FFAAB8", "#FFA9A2", 
    "#FFAC8D", "#DDDDDD", "#FFE7A2", "#FFF093", "#FFFA8D", 
    "#FFFF91", "#EEFF9F", "#D1FFB4", "#B9FFCE", "#A8FFE9", 
    "#A4FFFF", "#B1FFFF", "#CBFFFF", "#EDFFFF", "#FFF5FF", 
    "#FFEBFF", "#FFE2FF", "#FFDCEC", "#FFDBD2", "#FFDFB8"
  ];

  var str = '<div class="palette_item transparent" data-rgb="none"></div>\
             <div class="palette_item black" data-rgb="#000000"></div>\
             <div class="palette_item white" data-rgb="#ffffff"></div>'
  palette.forEach(function(item, i){
    str += '<div class="palette_item" style="background-color: ' + item + ';" data-rgb="' + item + '"></div>';
  });
  $('#palette').append(str);

  var toolStroke = document.getElementById('tool_stroke');
  var picking = false;

  $(document).on("mouseup", function(){picking = false;})

  $('#palette').on("mousemove mousedown touchstart touchmove", ".palette_item", function(evt){
    
    evt.preventDefault();
    if (evt.type === "mousedown" || evt.type === "touchstart") picking = true;
    if (!picking) return;

    var isStroke = toolStroke.classList.contains('active');
    var picker = isStroke ? "stroke" : "fill";
    var color = this.getAttribute('data-rgb');
    var paint = null;
    var noUndo = true;

    paint = color === 'none' 
      ? new $.jGraduate.Paint() 
      : new $.jGraduate.Paint({alpha: 100, solidColor: color.substr(1)});

    methodDraw.paintBox[picker].setPaint(paint);
    
    if (isStroke) {
      svgCanvas.setColor('stroke', color, noUndo);
      if (color != 'none' && svgCanvas.getStrokeOpacity() != 1) {
        svgCanvas.setPaintOpacity('stroke', 1.0);
      }
    } else {
      svgCanvas.setColor('fill', color, noUndo);
      if (color != 'none' && svgCanvas.getFillOpacity() != 1) {
        svgCanvas.setPaintOpacity('fill', 1.0);
      }
    }
  }).bind('contextmenu', function(e) {e.preventDefault()});
};

var palette = new Palette();



// Mark MacKay http://method.ac MIT License


$.fn.dragInput = function(cfg){
  return this.each(function(){

    this.repeating = false;
    // Apply specified options or defaults:
    // (Ought to refactor this some day to use $.extend() instead)
    this.dragCfg = {
      min: cfg && !isNaN(parseFloat(cfg.min)) ? Number(cfg.min) : null, // Fixes bug with min:0
      max: cfg && !isNaN(parseFloat(cfg.max)) ? Number(cfg.max) : null,
      step: cfg && Number(cfg.step) ? cfg.step : 1,
      stepfunc: cfg && cfg.stepfunc ? cfg.stepfunc : false,
      dragAdjust: cfg && cfg.dragAdjust ? cfg.dragAdjust : 1,
      height: 70,
      cursor: cfg && cfg.cursor ? Boolean(cfg.cursor) : false,
      start: cfg && cfg.start ? Number(cfg.start) : 0,
      _btn_width: 20,
      _direction: null,
      _delay: null,
      _repeat: null,
      callback: cfg && cfg.callback ? cfg.callback : null
    };
    // if a smallStep isn't supplied, use half the regular step
    this.dragCfg.smallStep = cfg && cfg.smallStep ? cfg.smallStep : this.dragCfg.step/2;
    var dragAdjust = this.dragCfg.dragAdjust;
    var $label = $(this).parent();
    var $input = $(this);
    var cursorHeight = this.dragCfg.height;
    var min = this.dragCfg.min;
    var max = this.dragCfg.max
    var step = this.dragCfg.step
    var area = (max - min > 0) ?  (max - min) / step : 200;
    var scale = area/cursorHeight * step;
    var lastY = 0;
    var attr = this.getAttribute("data-attr");
    var canvas = methodDraw.canvas
    var isTouch = svgedit.browser.isTouch();
    var completed = true //for mousewheel
    var $cursor = (area && this.dragCfg.cursor)
      ? $("<div class='draginput_cursor' />").appendTo($label) 
      : false
    $input.attr("readonly", "readonly")
    if ($cursor && !isNaN(this.dragCfg.start)) $cursor.css("top", (this.dragCfg.start*-1)/scale+cursorHeight)
   
    //this is where all the magic happens  
    this.adjustValue = function(i, completed){
      var v;
      i = parseFloat(i);
      if(isNaN(this.value)) {
        v = this.dragCfg.reset;
      } else if($.isFunction(this.dragCfg.stepfunc)) {
        v = this.dragCfg.stepfunc(this, i);
      } else {
        v = Number((Number(this.value) + Number(i)).toFixed(5));
      }
      if (max !== null) v = Math.min(v, max);
      if (min !== null) v = Math.max(v, min);
      if ($cursor) this.updateCursor(v);
      this.value = v;
      $label.attr("data-value", v)
      if ($.isFunction(this.dragCfg.callback)) this.dragCfg.callback(this, completed)
    };
          
    $label.toggleClass("draginput", $label.is("label"))
    
    // when the mouse is down and moving
    this.move = function(e, oy, val) {
      if (isTouch) {
        e = e.originalEvent.touches[0]
      }
      // just got started let's save for undo purposes
      if (lastY === 0) {
        lastY = oy;
      }
      var deltaY = (e.pageY - lastY) *-1
      lastY = e.pageY;
      val = (deltaY * scale) * dragAdjust
      var fixed = (step < 1) ? 1 : 0
      this.adjustValue(val.toFixed(fixed))  //no undo true
    };
    
    //when the mouse is released
    this.stop = function() {
      var selectedElems = canvas.getSelectedElems();
      $('body').removeClass('dragging');
      $label.removeClass("active");
      completed = true;
      $(window).unbind("mousemove.draginput touchmove.draginput mouseup.draginput touchend.draginput");
      lastY = 0;
      if (selectedElems[0]) {
        var batchCmd = canvas.undoMgr.finishUndoableChange();
        if (!batchCmd.isEmpty()) canvas.undoMgr.addCommandToHistory(batchCmd);
      }
      this.adjustValue(0, completed)
    }
    
    this.updateCursor = function(){
      var value = parseFloat(this.value);
      var pos = (value*-1)/scale+cursorHeight;
      $cursor.css("top", pos);
    }
    
    this.launch = function(e) {
      var selectedElems = canvas.getSelectedElems();
      if (isTouch) e = e.originalEvent.touches[0];
      var oy = e.pageY;
      var val = this.value;
      var el = this;
      canvas.undoMgr.beginUndoableChange(attr, selectedElems)
      $('body').addClass('dragging');
      $label.addClass('active');
      $(window).bind("mousemove.draginput touchmove.draginput", function(e){el.move(e, oy, parseFloat(val))})
      $(window).bind("mouseup.draginput touchend.draginput", function(e){el.stop()})
    }
    
    $(this)
      .attr("readonly", "readonly")
      .attr("data-scale", scale)
      .attr("data-domain", cursorHeight)
      .attr("data-cursor", ($cursor != false))
          
    .bind("mousedown touchstart", function(e){
      this.blur();
      this.launch(e);
    })
    
    .bind("dblclick taphold", function(e) {
      this.removeAttribute("readonly", "readonly");
      this.focus();
      this.select();
    })
    
    .keydown(function(e){
      // Respond to up/down arrow keys.
      switch(e.keyCode){
        case 13: this.adjustValue(0); this.blur();  break; // Enter
      }
    })
    
    .focus(function(e){
      if (this.getAttribute("readonly") === "readonly") this.blur()
    })
    
    .blur(function(e){
      this.setAttribute("readonly", "readonly")
    })
    
    .bind("mousewheel", function(e, delta, deltaX, deltaY){
      var selectedElems = canvas.getSelectedElems();
      if (completed) canvas.undoMgr.beginUndoableChange(attr, selectedElems)
      completed = false
      clearTimeout(window.undoTimeout)
      window.undoTimeout = setTimeout(function(){
        wheel_input.stop()
      },200)
      
      var wheel_input = this;
      if (deltaY > 0)
        this.adjustValue(this.dragCfg.step);
      else if (deltaY < 0)
        this.adjustValue(-this.dragCfg.step);
      e.preventDefault();
      
    })

  });
  
};

// public function
$.fn.dragInput.updateCursor = function(el){
  var value = parseFloat(el.value);
  var scale = parseFloat(el.getAttribute("data-scale"));
  var domain = parseFloat(el.getAttribute("data-domain"));
  var pos = ((value*-1)/scale+domain) + "px";
  var cursor = el.parentNode.lastChild
  if (cursor.className == "draginput_cursor") cursor.style.top = pos;
}


/**
 * Package: svgedit.contextmenu
 * 
 * Licensed under the Apache License, Version 2
 * 
 * Author: Adam Bender
 */
// Dependencies:
// 1) jQuery (for dom injection of context menus)\

var svgedit = svgedit || {};
(function() {
  var self = this;
  if (!svgedit.contextmenu) {
    svgedit.contextmenu = {};
  }
  self.contextMenuExtensions = {}
  var addContextMenuItem = function(menuItem) {
    // menuItem: {id, label, shortcut, action}
    if (!menuItemIsValid(menuItem)) {
      console
          .error("Menu items must be defined and have at least properties: id, label, action, where action must be a function");
      return;
    }
    if (menuItem.id in self.contextMenuExtensions) {
      console.error('Cannot add extension "' + menuItem.id
          + '", an extension by that name already exists"');
      return;
    }
    // Register menuItem action, see below for deferred menu dom injection
    console.log("Registed contextmenu item: {id:"+ menuItem.id+", label:"+menuItem.label+"}");
    self.contextMenuExtensions[menuItem.id] = menuItem;
    //TODO: Need to consider how to handle custom enable/disable behavior
  }
  var hasCustomHandler = function(handlerKey) {
    return self.contextMenuExtensions[handlerKey] && true;
  }
  var getCustomHandler = function(handlerKey) {
    return self.contextMenuExtensions[handlerKey].action;
  }
  var injectExtendedContextMenuItemIntoDom = function(menuItem) {
    if (Object.keys(self.contextMenuExtensions).length == 0) {
      // all menuItems appear at the bottom of the menu in their own container.
      // if this is the first extension menu we need to add the separator.
      $("#cmenu_canvas").append("<li class='separator'>");
    }
    var shortcut = menuItem.shortcut || "";
    $("#cmenu_canvas").append("<li class='disabled'><a href='#" + menuItem.id + "'>"                   
                  + menuItem.label + "<span class='shortcut'>"
                  + shortcut + "</span></a></li>");
  }

  var menuItemIsValid = function(menuItem) {
    return menuItem && menuItem.id && menuItem.label && menuItem.action && typeof menuItem.action == 'function';
  }
  
  // Defer injection to wait out initial menu processing. This probably goes away once all context
  // menu behavior is brought here.
  methodDraw.ready(function() {
    for (menuItem in contextMenuExtensions) {
      injectExtendedContextMenuItemIntoDom(contextMenuExtensions[menuItem]);
    }
  });
  svgedit.contextmenu.resetCustomMenus = function(){self.contextMenuExtensions = {}}
  svgedit.contextmenu.add = addContextMenuItem;
  svgedit.contextmenu.hasCustomHandler = hasCustomHandler;
  svgedit.contextmenu.getCustomHandler = getCustomHandler;
})();

/*
 * jPicker 1.1.6
 *
 * jQuery Plugin for Photoshop style color picker
 *
 * Copyright (c) 2010 Christopher T. Tillman
 * Digital Magic Productions, Inc. (http://www.digitalmagicpro.com/)
 * MIT style license, FREE to use, alter, copy, sell, and especially ENHANCE
 *
 * Painstakingly ported from John Dyers' excellent work on his own color picker based on the Prototype framework.
 *
 * John Dyers' website: (http://johndyer.name)
 * Color Picker page:   (http://johndyer.name/post/2007/09/PhotoShop-like-JavaScript-Color-Picker.aspx)
 *
 */
(function($, version)
{
  Math.precision = function(value, precision)
    {
      if (precision === undefined) precision = 0;
      return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
    };
  var Slider = // encapsulate slider functionality for the ColorMap and ColorBar - could be useful to use a jQuery UI draggable for this with certain extensions
      function(bar, options)
      {
        var $this = this, // private properties, methods, and events - keep these variables and classes invisible to outside code
          arrow = bar.find('img:first'), // the arrow image to drag
          minX = 0,
          maxX = 100,
          rangeX = 100,
          minY = 0,
          maxY = 100,
          rangeY = 100,
          x = 0,
          y = 0,
          offset,
          timeout,
          changeEvents = new Array(),
          fireChangeEvents =
            function(context)
            {
              for (var i = 0; i < changeEvents.length; i++) changeEvents[i].call($this, $this, context);
            },
          mouseDown = // bind the mousedown to the bar not the arrow for quick snapping to the clicked location
            function(e)
            {
              var off = bar.offset();
              offset = { l: off.left | 0, t: off.top | 0 };
              clearTimeout(timeout);
              timeout = setTimeout( // using setTimeout for visual updates - once the style is updated the browser will re-render internally allowing the next Javascript to run
                function()
                {
                  setValuesFromMousePosition.call($this, e);
                }, 0);
              // Bind mousemove and mouseup event to the document so it responds when dragged of of the bar - we will unbind these when on mouseup to save processing
              $(document).bind('mousemove', mouseMove).bind('mouseup', mouseUp);
              e.preventDefault(); // don't try to select anything or drag the image to the desktop
            },
          mouseMove = // set the values as the mouse moves
            function(e)
            {
              clearTimeout(timeout);
              timeout = setTimeout(
                function()
                {
                  setValuesFromMousePosition.call($this, e);
                }, 0);
              e.stopPropagation();
              e.preventDefault();
              return false;
            },
          mouseUp = // unbind the document events - they aren't needed when not dragging
            function(e)
            {
              $(document).unbind('mouseup', mouseUp).unbind('mousemove', mouseMove);
              e.stopPropagation();
              e.preventDefault();
              return false;
            },
          setValuesFromMousePosition = // calculate mouse position and set value within the current range
            function(e)
            {
              var locX = e.pageX - offset.l,
                  locY = e.pageY - offset.t,
                  barW = bar.w, // local copies for YUI compressor
                  barH = bar.h;
              // keep the arrow within the bounds of the bar
              if (locX < 0) locX = 0;
              else if (locX > barW) locX = barW;
              if (locY < 0) locY = 0;
              else if (locY > barH) locY = barH;
              val.call($this, 'xy', { x: ((locX / barW) * rangeX) + minX, y: ((locY / barH) * rangeY) + minY });
            },
          draw =
            function()
            {
              var arrowOffsetX = 0,
                arrowOffsetY = 0,
                barW = bar.w,
                barH = bar.h,
                arrowW = arrow.w,
                arrowH = arrow.h;
              setTimeout(
                function()
                {
                  if (rangeX > 0) // range is greater than zero
                  {
                    // constrain to bounds
                    if (x == maxX) arrowOffsetX = barW;
                    else arrowOffsetX = ((x / rangeX) * barW) | 0;
                  }
                  if (rangeY > 0) // range is greater than zero
                  {
                    // constrain to bounds
                    if (y == maxY) arrowOffsetY = barH;
                    else arrowOffsetY = ((y / rangeY) * barH) | 0;
                  }
                  // if arrow width is greater than bar width, center arrow and prevent horizontal dragging
                  if (arrowW >= barW) arrowOffsetX = (barW >> 1) - (arrowW >> 1); // number >> 1 - superfast bitwise divide by two and truncate (move bits over one bit discarding lowest)
                  else arrowOffsetX -= arrowW >> 1;
                  // if arrow height is greater than bar height, center arrow and prevent vertical dragging
                  if (arrowH >= barH) arrowOffsetY = (barH >> 1) - (arrowH >> 1);
                  else arrowOffsetY -= arrowH >> 1;
                  // set the arrow position based on these offsets
                  arrow.css({ left: arrowOffsetX + 'px', top: arrowOffsetY + 'px' });
                }, 0);
            },
          val =
            function(name, value, context)
            {
              var set = value !== undefined;
              if (!set)
              {
                if (name === undefined || name == null) name = 'xy';
                switch (name.toLowerCase())
                {
                  case 'x': return x;
                  case 'y': return y;
                  case 'xy':
                  default: return { x: x, y: y };
                }
              }
              if (context != null && context == $this) return;
              var changed = false,
                  newX,
                  newY;
              if (name == null) name = 'xy';
              switch (name.toLowerCase())
              {
                case 'x':
                  newX = value && (value.x && value.x | 0 || value | 0) || 0;
                  break;
                case 'y':
                  newY = value && (value.y && value.y | 0 || value | 0) || 0;
                  break;
                case 'xy':
                default:
                  newX = value && value.x && value.x | 0 || 0;
                  newY = value && value.y && value.y | 0 || 0;
                  break;
              }
              if (newX != null)
              {
                if (newX < minX) newX = minX;
                else if (newX > maxX) newX = maxX;
                if (x != newX)
                {
                  x = newX;
                  changed = true;
                }
              }
              if (newY != null)
              {
                if (newY < minY) newY = minY;
                else if (newY > maxY) newY = maxY;
                if (y != newY)
                {
                  y = newY;
                  changed = true;
                }
              }
              changed && fireChangeEvents.call($this, context || $this);
            },
          range =
            function (name, value)
            {
              var set = value !== undefined;
              if (!set)
              {
                if (name === undefined || name == null) name = 'all';
                switch (name.toLowerCase())
                {
                  case 'minx': return minX;
                  case 'maxx': return maxX;
                  case 'rangex': return { minX: minX, maxX: maxX, rangeX: rangeX };
                  case 'miny': return minY;
                  case 'maxy': return maxY;
                  case 'rangey': return { minY: minY, maxY: maxY, rangeY: rangeY };
                  case 'all':
                  default: return { minX: minX, maxX: maxX, rangeX: rangeX, minY: minY, maxY: maxY, rangeY: rangeY };
                }
              }
              var changed = false,
                  newMinX,
                  newMaxX,
                  newMinY,
                  newMaxY;
              if (name == null) name = 'all';
              switch (name.toLowerCase())
              {
                case 'minx':
                  newMinX = value && (value.minX && value.minX | 0 || value | 0) || 0;
                  break;
                case 'maxx':
                  newMaxX = value && (value.maxX && value.maxX | 0 || value | 0) || 0;
                  break;
                case 'rangex':
                  newMinX = value && value.minX && value.minX | 0 || 0;
                  newMaxX = value && value.maxX && value.maxX | 0 || 0;
                  break;
                case 'miny':
                  newMinY = value && (value.minY && value.minY | 0 || value | 0) || 0;
                  break;
                case 'maxy':
                  newMaxY = value && (value.maxY && value.maxY | 0 || value | 0) || 0;
                  break;
                case 'rangey':
                  newMinY = value && value.minY && value.minY | 0 || 0;
                  newMaxY = value && value.maxY && value.maxY | 0 || 0;
                  break;
                case 'all':
                default:
                  newMinX = value && value.minX && value.minX | 0 || 0;
                  newMaxX = value && value.maxX && value.maxX | 0 || 0;
                  newMinY = value && value.minY && value.minY | 0 || 0;
                  newMaxY = value && value.maxY && value.maxY | 0 || 0;
                  break;
              }
              if (newMinX != null && minX != newMinX)
              {
                minX = newMinX;
                rangeX = maxX - minX;
              }
              if (newMaxX != null && maxX != newMaxX)
              {
                maxX = newMaxX;
                rangeX = maxX - minX;
              }
              if (newMinY != null && minY != newMinY)
              {
                minY = newMinY;
                rangeY = maxY - minY;
              }
              if (newMaxY != null && maxY != newMaxY)
              {
                maxY = newMaxY;
                rangeY = maxY - minY;
              }
            },
          bind =
            function (callback)
            {
              if ($.isFunction(callback)) changeEvents.push(callback);
            },
          unbind =
            function (callback)
            {
              if (!$.isFunction(callback)) return;
              var i;
              while ((i = $.inArray(callback, changeEvents)) != -1) changeEvents.splice(i, 1);
            },
          destroy =
            function()
            {
              // unbind all possible events and null objects
              $(document).unbind('mouseup', mouseUp).unbind('mousemove', mouseMove);
              bar.unbind('mousedown', mouseDown);
              bar = null;
              arrow = null;
              changeEvents = null;
            };
        $.extend(true, $this, // public properties, methods, and event bindings - these we need to access from other controls
          {
            val: val,
            range: range,
            bind: bind,
            unbind: unbind,
            destroy: destroy
          });
        // initialize this control
        arrow.src = options.arrow && options.arrow.image;
        arrow.w = options.arrow && options.arrow.width || arrow.width();
        arrow.h = options.arrow && options.arrow.height || arrow.height();
        bar.w = options.map && options.map.width || bar.width();
        bar.h = options.map && options.map.height || bar.height();
        // bind mousedown event
        bar.bind('mousedown', mouseDown);
        bind.call($this, draw);
      },
    ColorValuePicker = // controls for all the input elements for the typing in color values
      function(picker, color, bindedHex, alphaPrecision)
      {
        var $this = this, // private properties and methods
          inputs = picker.find('td.Text input'),
          red = inputs.eq(3),
          green = inputs.eq(4),
          blue = inputs.eq(5),
          alpha = inputs.length > 7 ? inputs.eq(6) : null,
          hue = inputs.eq(0),
          saturation = inputs.eq(1),
          value = inputs.eq(2),
          hex = inputs.eq(inputs.length > 7 ? 7 : 6),
          ahex = inputs.length > 7 ? inputs.eq(8) : null,
          keyDown = // input box key down - use arrows to alter color
            function(e)
            {
              if (e.target.value == '' && e.target != hex.get(0) && (bindedHex != null && e.target != bindedHex.get(0) || bindedHex == null)) return;
              if (!validateKey(e)) return e;
              switch (e.target)
              {
                case red.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      red.val(setValueInRange.call($this, (red.val() << 0) + 1, 0, 255));
                      color.val('r', red.val(), e.target);
                      return false;
                    case 40:
                      red.val(setValueInRange.call($this, (red.val() << 0) - 1, 0, 255));
                      color.val('r', red.val(), e.target);
                      return false;
                  }
                  break;
                case green.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      green.val(setValueInRange.call($this, (green.val() << 0) + 1, 0, 255));
                      color.val('g', green.val(), e.target);
                      return false;
                    case 40:
                      green.val(setValueInRange.call($this, (green.val() << 0) - 1, 0, 255));
                      color.val('g', green.val(), e.target);
                      return false;
                  }
                  break;
                case blue.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      blue.val(setValueInRange.call($this, (blue.val() << 0) + 1, 0, 255));
                      color.val('b', blue.val(), e.target);
                      return false;
                    case 40:
                      blue.val(setValueInRange.call($this, (blue.val() << 0) - 1, 0, 255));
                      color.val('b', blue.val(), e.target);
                      return false;
                  }
                  break;
                case alpha && alpha.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      alpha.val(setValueInRange.call($this, parseFloat(alpha.val()) + 1, 0, 100));
                      color.val('a', Math.precision((alpha.val() * 255) / 100, alphaPrecision), e.target);
                      return false;
                    case 40:
                      alpha.val(setValueInRange.call($this, parseFloat(alpha.val()) - 1, 0, 100));
                      color.val('a', Math.precision((alpha.val() * 255) / 100, alphaPrecision), e.target);
                      return false;
                  }
                  break;
                case hue.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      hue.val(setValueInRange.call($this, (hue.val() << 0) + 1, 0, 360));
                      color.val('h', hue.val(), e.target);
                      return false;
                    case 40:
                      hue.val(setValueInRange.call($this, (hue.val() << 0) - 1, 0, 360));
                      color.val('h', hue.val(), e.target);
                      return false;
                  }
                  break;
                case saturation.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      saturation.val(setValueInRange.call($this, (saturation.val() << 0) + 1, 0, 100));
                      color.val('s', saturation.val(), e.target);
                      return false;
                    case 40:
                      saturation.val(setValueInRange.call($this, (saturation.val() << 0) - 1, 0, 100));
                      color.val('s', saturation.val(), e.target);
                      return false;
                  }
                  break;
                case value.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      value.val(setValueInRange.call($this, (value.val() << 0) + 1, 0, 100));
                      color.val('v', value.val(), e.target);
                      return false;
                    case 40:
                      value.val(setValueInRange.call($this, (value.val() << 0) - 1, 0, 100));
                      color.val('v', value.val(), e.target);
                      return false;
                  }
                  break;
              }
            },
          keyUp = // input box key up - validate value and set color
            function(e)
            {
              if (e.target.value == '' && e.target != hex.get(0) && (bindedHex != null && e.target != bindedHex.get(0) || bindedHex == null)) return;
              if (!validateKey(e)) return e;
              switch (e.target)
              {
                case red.get(0):
                  red.val(setValueInRange.call($this, red.val(), 0, 255));
                  color.val('r', red.val(), e.target);
                  break;
                case green.get(0):
                  green.val(setValueInRange.call($this, green.val(), 0, 255));
                  color.val('g', green.val(), e.target);
                  break;
                case blue.get(0):
                  blue.val(setValueInRange.call($this, blue.val(), 0, 255));
                  color.val('b', blue.val(), e.target);
                  break;
                case alpha && alpha.get(0):
                  alpha.val(setValueInRange.call($this, alpha.val(), 0, 100));
                  color.val('a', Math.precision((alpha.val() * 255) / 100, alphaPrecision), e.target);
                  break;
                case hue.get(0):
                  hue.val(setValueInRange.call($this, hue.val(), 0, 360));
                  color.val('h', hue.val(), e.target);
                  break;
                case saturation.get(0):
                  saturation.val(setValueInRange.call($this, saturation.val(), 0, 100));
                  color.val('s', saturation.val(), e.target);
                  break;
                case value.get(0):
                  value.val(setValueInRange.call($this, value.val(), 0, 100));
                  color.val('v', value.val(), e.target);
                  break;
                case hex.get(0):
                  hex.val(hex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 6));
                  bindedHex && bindedHex.val(hex.val());
                  color.val('hex', hex.val() != '' ? hex.val() : null, e.target);
                  break;
                case bindedHex && bindedHex.get(0):
                  bindedHex.val(bindedHex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 6));
                  hex.val(bindedHex.val());
                  color.val('hex', bindedHex.val() != '' ? bindedHex.val() : null, e.target);
                  break;
                case ahex && ahex.get(0):
                  ahex.val(ahex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 2));
                  color.val('a', ahex.val() != null ? parseInt(ahex.val(), 16) : null, e.target);
                  break;
              }
            },
          blur = // input box blur - reset to original if value empty
            function(e)
            {
              if (color.val() != null)
              {
                switch (e.target)
                {
                  case red.get(0): red.val(color.val('r')); break;
                  case green.get(0): green.val(color.val('g')); break;
                  case blue.get(0): blue.val(color.val('b')); break;
                  case alpha && alpha.get(0): alpha.val(Math.precision((color.val('a') * 100) / 255, alphaPrecision)); break;
                  case hue.get(0): hue.val(color.val('h')); break;
                  case saturation.get(0): saturation.val(color.val('s')); break;
                  case value.get(0): value.val(color.val('v')); break;
                  case hex.get(0):
                  case bindedHex && bindedHex.get(0):
                    hex.val(color.val('hex'));
                    bindedHex && bindedHex.val(color.val('hex'));
                    break;
                  case ahex && ahex.get(0): ahex.val(color.val('ahex').substring(6)); break;
                }
              }
            },
          validateKey = // validate key
            function(e)
            {
              switch(e.keyCode)
              {
                case 9:
                case 16:
                case 29:
                case 37:
                case 39:
                  return false;
                case 'c'.charCodeAt():
                case 'v'.charCodeAt():
                  if (e.ctrlKey) return false;
              }
              return true;
            },
          setValueInRange = // constrain value within range
            function(value, min, max)
            {
              if (value == '' || isNaN(value)) return min;
              if (value > max) return max;
              if (value < min) return min;
              return value;
            },
          colorChanged =
            function(ui, context)
            {
              var all = ui.val('all');
              if (context != red.get(0)) red.val(all != null ? all.r : '');
              if (context != green.get(0)) green.val(all != null ? all.g : '');
              if (context != blue.get(0)) blue.val(all != null ? all.b : '');
              if (alpha && context != alpha.get(0)) alpha.val(all != null ? Math.precision((all.a * 100) / 255, alphaPrecision) : '');
              if (context != hue.get(0)) hue.val(all != null ? all.h : '');
              if (context != saturation.get(0)) saturation.val(all != null ? all.s : '');
              if (context != value.get(0)) value.val(all != null ? all.v : '');
              if (context != hex.get(0) && (bindedHex && context != bindedHex.get(0) || !bindedHex)) hex.val(all != null ? all.hex : '');
              if (bindedHex && context != bindedHex.get(0) && context != hex.get(0)) bindedHex.val(all != null ? all.hex : '');
              if (ahex && context != ahex.get(0)) ahex.val(all != null ? all.ahex.substring(6) : '');
            },
          destroy =
            function()
            {
              // unbind all events and null objects
              red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).add(hex).add(bindedHex).add(ahex).unbind('keyup', keyUp).unbind('blur', blur);
              red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).unbind('keydown', keyDown);
              color.unbind(colorChanged);
              red = null;
              green = null;
              blue = null;
              alpha = null;
              hue = null;
              saturation = null;
              value = null;
              hex = null;
              ahex = null;
            };
        $.extend(true, $this, // public properties and methods
          {
            destroy: destroy
          });
        red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).add(hex).add(bindedHex).add(ahex).bind('keyup', keyUp).bind('blur', blur);
        red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).bind('keydown', keyDown);
        color.bind(colorChanged);
      };
  $.jPicker =
    {
      List: [], // array holding references to each active instance of the control
      Color: // color object - we will be able to assign by any color space type or retrieve any color space info
             // we want this public so we can optionally assign new color objects to initial values using inputs other than a string hex value (also supported)
        function(init)
        {
          var $this = this,
            r,
            g,
            b,
            a,
            h,
            s,
            v,
            changeEvents = new Array(),
            fireChangeEvents = 
              function(context)
              {
                for (var i = 0; i < changeEvents.length; i++) changeEvents[i].call($this, $this, context);
              },
            val =
              function(name, value, context)
              {
                var set = value !== undefined;
                if (!set)
                {
                  if (name === undefined || name == null || name == '') name = 'all';
                  if (r == null) return null;
                  switch (name.toLowerCase())
                  {
                    case 'ahex': return ColorMethods.rgbaToHex({ r: r, g: g, b: b, a: a });
                    case 'hex': return val('ahex').substring(0, 6);
                    case 'all': return { r: r, g: g, b: b, a: a, h: h, s: s, v: v, hex: val.call($this, 'hex'), ahex: val.call($this, 'ahex') };
                    default:
                      var ret={};
                      for (var i = 0; i < name.length; i++)
                      {
                        switch (name.charAt(i))
                        {
                          case 'r':
                            if (name.length == 1) ret = r;
                            else ret.r = r;
                            break;
                          case 'g':
                            if (name.length == 1) ret = g;
                            else ret.g = g;
                            break;
                          case 'b':
                            if (name.length == 1) ret = b;
                            else ret.b = b;
                            break;
                          case 'a':
                            if (name.length == 1) ret = a;
                            else ret.a = a;
                            break;
                          case 'h':
                            if (name.length == 1) ret = h;
                            else ret.h = h;
                            break;
                          case 's':
                            if (name.length == 1) ret = s;
                            else ret.s = s;
                            break;
                          case 'v':
                            if (name.length == 1) ret = v;
                            else ret.v = v;
                            break;
                        }
                      }
                      return ret == {} ? val.call($this, 'all') : ret;
                      break;
                  }
                }
                if (context != null && context == $this) return;
                var changed = false;
                if (name == null) name = '';
                if (value == null)
                {
                  if (r != null)
                  {
                    r = null;
                    changed = true;
                  }
                  if (g != null)
                  {
                    g = null;
                    changed = true;
                  }
                  if (b != null)
                  {
                    b = null;
                    changed = true;
                  }
                  if (a != null)
                  {
                    a = null;
                    changed = true;
                  }
                  if (h != null)
                  {
                    h = null;
                    changed = true;
                  }
                  if (s != null)
                  {
                    s = null;
                    changed = true;
                  }
                  if (v != null)
                  {
                    v = null;
                    changed = true;
                  }
                  changed && fireChangeEvents.call($this, context || $this);
                  return;
                }
                switch (name.toLowerCase())
                {
                  case 'ahex':
                  case 'hex':
                    var ret = ColorMethods.hexToRgba(value && (value.ahex || value.hex) || value || '00000000');
                    val.call($this, 'rgba', { r: ret.r, g: ret.g, b: ret.b, a: name == 'ahex' ? ret.a : a != null ? a : 255 }, context);
                    break;
                  default:
                    if (value && (value.ahex != null || value.hex != null))
                    {
                      val.call($this, 'ahex', value.ahex || value.hex || '00000000', context);
                      return;
                    }
                    var newV = {}, rgb = false, hsv = false;
                    if (value.r !== undefined && !name.indexOf('r') == -1) name += 'r';
                    if (value.g !== undefined && !name.indexOf('g') == -1) name += 'g';
                    if (value.b !== undefined && !name.indexOf('b') == -1) name += 'b';
                    if (value.a !== undefined && !name.indexOf('a') == -1) name += 'a';
                    if (value.h !== undefined && !name.indexOf('h') == -1) name += 'h';
                    if (value.s !== undefined && !name.indexOf('s') == -1) name += 's';
                    if (value.v !== undefined && !name.indexOf('v') == -1) name += 'v';
                    for (var i = 0; i < name.length; i++)
                    {
                      switch (name.charAt(i))
                      {
                        case 'r':
                          if (hsv) continue;
                          rgb = true;
                          newV.r = value && value.r && value.r | 0 || value && value | 0 || 0;
                          if (newV.r < 0) newV.r = 0;
                          else if (newV.r > 255) newV.r = 255;
                          if (r != newV.r)
                          {
                            r = newV.r;
                            changed = true;
                          }
                          break;
                        case 'g':
                          if (hsv) continue;
                          rgb = true;
                          newV.g = value && value.g && value.g | 0 || value && value | 0 || 0;
                          if (newV.g < 0) newV.g = 0;
                          else if (newV.g > 255) newV.g = 255;
                          if (g != newV.g)
                          {
                            g = newV.g;
                            changed = true;
                          }
                          break;
                        case 'b':
                          if (hsv) continue;
                          rgb = true;
                          newV.b = value && value.b && value.b | 0 || value && value | 0 || 0;
                          if (newV.b < 0) newV.b = 0;
                          else if (newV.b > 255) newV.b = 255;
                          if (b != newV.b)
                          {
                            b = newV.b;
                            changed = true;
                          }
                          break;
                        case 'a':
                          newV.a = value && value.a != null ? value.a | 0 : value != null ? value | 0 : 255;
                          if (newV.a < 0) newV.a = 0;
                          else if (newV.a > 255) newV.a = 255;
                          if (a != newV.a)
                          {
                            a = newV.a;
                            changed = true;
                          }
                          break;
                        case 'h':
                          if (rgb) continue;
                          hsv = true;
                          newV.h = value && value.h && value.h | 0 || value && value | 0 || 0;
                          if (newV.h < 0) newV.h = 0;
                          else if (newV.h > 360) newV.h = 360;
                          if (h != newV.h)
                          {
                            h = newV.h;
                            changed = true;
                          }
                          break;
                        case 's':
                          if (rgb) continue;
                          hsv = true;
                          newV.s = value && value.s != null ? value.s | 0 : value != null ? value | 0 : 100;
                          if (newV.s < 0) newV.s = 0;
                          else if (newV.s > 100) newV.s = 100;
                          if (s != newV.s)
                          {
                            s = newV.s;
                            changed = true;
                          }
                          break;
                        case 'v':
                          if (rgb) continue;
                          hsv = true;
                          newV.v = value && value.v != null ? value.v | 0 : value != null ? value | 0 : 100;
                          if (newV.v < 0) newV.v = 0;
                          else if (newV.v > 100) newV.v = 100;
                          if (v != newV.v)
                          {
                            v = newV.v;
                            changed = true;
                          }
                          break;
                      }
                    }
                    if (changed)
                    {
                      if (rgb)
                      {
                        r = r || 0;
                        g = g || 0;
                        b = b || 0;
                        var ret = ColorMethods.rgbToHsv({ r: r, g: g, b: b });
                        h = ret.h;
                        s = ret.s;
                        v = ret.v;
                      }
                      else if (hsv)
                      {
                        h = h || 0;
                        s = s != null ? s : 100;
                        v = v != null ? v : 100;
                        var ret = ColorMethods.hsvToRgb({ h: h, s: s, v: v });
                        r = ret.r;
                        g = ret.g;
                        b = ret.b;
                      }
                      a = a != null ? a : 255;
                      fireChangeEvents.call($this, context || $this);
                    }
                    break;
                }
              },
            bind =
              function(callback)
              {
                if ($.isFunction(callback)) changeEvents.push(callback);
              },
            unbind =
              function(callback)
              {
                if (!$.isFunction(callback)) return;
                var i;
                while ((i = $.inArray(callback, changeEvents)) != -1) changeEvents.splice(i, 1);
              },
            destroy =
              function()
              {
                changeEvents = null;
              }
          $.extend(true, $this, // public properties and methods
            {
              val: val,
              bind: bind,
              unbind: unbind,
              destroy: destroy
            });
          if (init)
          {
            if (init.ahex != null) val('ahex', init);
            else if (init.hex != null) val((init.a != null ? 'a' : '') + 'hex', init.a != null ? { ahex: init.hex + ColorMethods.intToHex(init.a) } : init);
            else if (init.r != null && init.g != null && init.b != null) val('rgb' + (init.a != null ? 'a' : ''), init);
            else if (init.h != null && init.s != null && init.v != null) val('hsv' + (init.a != null ? 'a' : ''), init);
          }
        },
      ColorMethods: // color conversion methods  - make public to give use to external scripts
        {
          hexToRgba:
            function(hex)
            {
              hex = this.validateHex(hex);
              if (hex == '') return { r: null, g: null, b: null, a: null };
              var r = '00', g = '00', b = '00', a = '255';
              if (hex.length == 6) hex += 'ff';
              if (hex.length > 6)
              {
                r = hex.substring(0, 2);
                g = hex.substring(2, 4);
                b = hex.substring(4, 6);
                a = hex.substring(6, hex.length);
              }
              else
              {
                if (hex.length > 4)
                {
                  r = hex.substring(4, hex.length);
                  hex = hex.substring(0, 4);
                }
                if (hex.length > 2)
                {
                  g = hex.substring(2, hex.length);
                  hex = hex.substring(0, 2);
                }
                if (hex.length > 0) b = hex.substring(0, hex.length);
              }
              return { r: this.hexToInt(r), g: this.hexToInt(g), b: this.hexToInt(b), a: this.hexToInt(a) };
            },
          validateHex:
            function(hex)
            {
              if (typeof hex == "object") return '';
              hex = hex.toLowerCase().replace(/[^a-f0-9]/g, '');
              if (hex.length > 8) hex = hex.substring(0, 8);
              return hex;
            },
          rgbaToHex:
            function(rgba)
            {
              return this.intToHex(rgba.r) + this.intToHex(rgba.g) + this.intToHex(rgba.b) + this.intToHex(rgba.a);
            },
          intToHex:
            function(dec)
            {
              var result = (dec | 0).toString(16);
              if (result.length == 1) result = ('0' + result);
              return result.toLowerCase();
            },
          hexToInt:
            function(hex)
            {
              return parseInt(hex, 16);
            },
          rgbToHsv:
            function(rgb)
            {
              var r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255, hsv = { h: 0, s: 0, v: 0 }, min = 0, max = 0, delta;
              if (r >= g && r >= b)
              {
                max = r;
                min = g > b ? b : g;
              }
              else if (g >= b && g >= r)
              {
                max = g;
                min = r > b ? b : r;
              }
              else
              {
                max = b;
                min = g > r ? r : g;
              }
              hsv.v = max;
              hsv.s = max ? (max - min) / max : 0;
              if (!hsv.s) hsv.h = 0;
              else
              {
                delta = max - min;
                if (r == max) hsv.h = (g - b) / delta;
                else if (g == max) hsv.h = 2 + (b - r) / delta;
                else hsv.h = 4 + (r - g) / delta;
                hsv.h = parseInt(hsv.h * 60);
                if (hsv.h < 0) hsv.h += 360;
              }
              hsv.s = (hsv.s * 100) | 0;
              hsv.v = (hsv.v * 100) | 0;
              return hsv;
            },
          hsvToRgb:
            function(hsv)
            {
              var rgb = { r: 0, g: 0, b: 0, a: 100 }, h = hsv.h, s = hsv.s, v = hsv.v;
              if (s == 0)
              {
                if (v == 0) rgb.r = rgb.g = rgb.b = 0;
                else rgb.r = rgb.g = rgb.b = (v * 255 / 100) | 0;
              }
              else
              {
                if (h == 360) h = 0;
                h /= 60;
                s = s / 100;
                v = v / 100;
                var i = h | 0,
                    f = h - i,
                    p = v * (1 - s),
                    q = v * (1 - (s * f)),
                    t = v * (1 - (s * (1 - f)));
                switch (i)
                {
                  case 0:
                    rgb.r = v;
                    rgb.g = t;
                    rgb.b = p;
                    break;
                  case 1:
                    rgb.r = q;
                    rgb.g = v;
                    rgb.b = p;
                    break;
                  case 2:
                    rgb.r = p;
                    rgb.g = v;
                    rgb.b = t;
                    break;
                  case 3:
                    rgb.r = p;
                    rgb.g = q;
                    rgb.b = v;
                    break;
                  case 4:
                    rgb.r = t;
                    rgb.g = p;
                    rgb.b = v;
                    break;
                  case 5:
                    rgb.r = v;
                    rgb.g = p;
                    rgb.b = q;
                    break;
                }
                rgb.r = (rgb.r * 255) | 0;
                rgb.g = (rgb.g * 255) | 0;
                rgb.b = (rgb.b * 255) | 0;
              }
              return rgb;
            }
        }
    };
  var Color = $.jPicker.Color, List = $.jPicker.List, ColorMethods = $.jPicker.ColorMethods; // local copies for YUI compressor
  $.fn.jPicker =
    function(options)
    {
      var $arguments = arguments;
      return this.each(
        function()
        {
          var $this = this, settings = $.extend(true, {}, $.fn.jPicker.defaults, options); // local copies for YUI compressor
          if ($($this).get(0).nodeName.toLowerCase() == 'input') // Add color picker icon if binding to an input element and bind the events to the input
          {
            $.extend(true, settings,
              {
                window:
                {
                  bindToInput: true,
                  expandable: true,
                  input: $($this)
                }
              });
            if($($this).val()=='')
            {
              settings.color.active = new Color({ hex: null });
              settings.color.current = new Color({ hex: null });
            }
            else if (ColorMethods.validateHex($($this).val()))
            {
              settings.color.active = new Color({ hex: $($this).val(), a: settings.color.active.val('a') });
              settings.color.current = new Color({ hex: $($this).val(), a: settings.color.active.val('a') });
            }
          }
          if (settings.window.expandable)
            $($this).after('<span class="jPicker"><span class="Icon"><span class="Color">&nbsp;</span><span class="Alpha">&nbsp;</span><span class="Image" title="Click To Open Color Picker">&nbsp;</span><span class="Container">&nbsp;</span></span></span>');
          else settings.window.liveUpdate = false; // Basic control binding for inline use - You will need to override the liveCallback or commitCallback function to retrieve results
          var isLessThanIE7 = parseFloat(navigator.appVersion.split('MSIE')[1]) < 7 && document.body.filters, // needed to run the AlphaImageLoader function for IE6
            container = null,
            colorMapDiv = null,
            colorBarDiv = null,
            colorMapL1 = null, // different layers of colorMap and colorBar
            colorMapL2 = null,
            colorMapL3 = null,
            colorBarL1 = null,
            colorBarL2 = null,
            colorBarL3 = null,
            colorBarL4 = null,
            colorBarL5 = null,
            colorBarL6 = null,
            colorMap = null, // color maps
            colorBar = null,
            colorPicker = null,
            elementStartX = null, // Used to record the starting css positions for dragging the control
            elementStartY = null,
            pageStartX = null, // Used to record the mousedown coordinates for dragging the control
            pageStartY = null,
            activePreview = null, // color boxes above the radio buttons
            currentPreview = null,
            okButton = null,
            cancelButton = null,
            grid = null, // preset colors grid
            iconColor = null, // iconColor for popup icon
            iconAlpha = null, // iconAlpha for popup icon
            iconImage = null, // iconImage popup icon
            moveBar = null, // drag bar
            setColorMode = // set color mode and update visuals for the new color mode
              function(colorMode)
              {
                var active = color.active, // local copies for YUI compressor
                  clientPath = images.clientPath,
                  hex = active.val('hex'),
                  rgbMap,
                  rgbBar;
                settings.color.mode = colorMode;
                switch (colorMode)
                {
                  case 'h':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setImgLoc.call($this, colorMapL1, 0);
                        setAlpha.call($this, colorMapL1, 100);
                        setImgLoc.call($this, colorMapL2, 260);
                        setAlpha.call($this, colorMapL2, 100);
                        setBG.call($this, colorBarDiv, 'transparent');
                        setImgLoc.call($this, colorBarL1, 0);
                        setAlpha.call($this, colorBarL1, 100);
                        setImgLoc.call($this, colorBarL2, 260);
                        setAlpha.call($this, colorBarL2, 100);
                        setImgLoc.call($this, colorBarL3, 260);
                        setAlpha.call($this, colorBarL3, 100);
                        setImgLoc.call($this, colorBarL4, 260);
                        setAlpha.call($this, colorBarL4, 100);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 100, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 360 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('s'), y: 100 - active.val('v') }, colorMap);
                    colorBar.val('y', 360 - active.val('h'), colorBar);
                    break;
                  case 's':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setImgLoc.call($this, colorMapL1, -260);
                        setImgLoc.call($this, colorMapL2, -520);
                        setImgLoc.call($this, colorBarL1, -260);
                        setImgLoc.call($this, colorBarL2, -520);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 100 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('h'), y: 100 - active.val('v') }, colorMap);
                    colorBar.val('y', 100 - active.val('s'), colorBar);
                    break;
                  case 'v':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, '000000');
                        setImgLoc.call($this, colorMapL1, -780);
                        setImgLoc.call($this, colorMapL2, 260);
                        setBG.call($this, colorBarDiv, hex);
                        setImgLoc.call($this, colorBarL1, -520);
                        setImgLoc.call($this, colorBarL2, 260);
                        setAlpha.call($this, colorBarL2, 100);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 100 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('h'), y: 100 - active.val('s') }, colorMap);
                    colorBar.val('y', 100 - active.val('v'), colorBar);
                    break;
                  case 'r':
                    rgbMap = -1040;
                    rgbBar = -780;
                    colorMap.range('all', { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('b'), y: 255 - active.val('g') }, colorMap);
                    colorBar.val('y', 255 - active.val('r'), colorBar);
                    break;
                  case 'g':
                    rgbMap = -1560;
                    rgbBar = -1820;
                    colorMap.range('all', { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('b'), y: 255 - active.val('r') }, colorMap);
                    colorBar.val('y', 255 - active.val('g'), colorBar);
                    break;
                  case 'b':
                    rgbMap = -2080;
                    rgbBar = -2860;
                    colorMap.range('all', { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('r'), y: 255 - active.val('g') }, colorMap);
                    colorBar.val('y', 255 - active.val('b'), colorBar);
                    break;
                  case 'a':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setImgLoc.call($this, colorMapL1, -260);
                        setImgLoc.call($this, colorMapL2, -520);
                        setImgLoc.call($this, colorBarL1, 260);
                        setImgLoc.call($this, colorBarL2, 260);
                        setAlpha.call($this, colorBarL2, 100);
                        setImgLoc.call($this, colorBarL6, 0);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('h'), y: 100 - active.val('v') }, colorMap);
                    colorBar.val('y', 255 - active.val('a'), colorBar);
                    break;
                  default:
                    throw ('Invalid Mode');
                    break;
                }
                switch (colorMode)
                {
                  case 'h':
                    break;
                  case 's':
                  case 'v':
                  case 'a':
                    setTimeout(
                      function()
                      {
                        setAlpha.call($this, colorMapL1, 100);
                        setAlpha.call($this, colorBarL1, 100);
                        setImgLoc.call($this, colorBarL3, 260);
                        setAlpha.call($this, colorBarL3, 100);
                        setImgLoc.call($this, colorBarL4, 260);
                        setAlpha.call($this, colorBarL4, 100);
                      }, 0);
                    break;
                  case 'r':
                  case 'g':
                  case 'b':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setBG.call($this, colorBarDiv, 'transparent');
                        setAlpha.call($this, colorBarL1, 100);
                        setAlpha.call($this, colorMapL1, 100);
                        setImgLoc.call($this, colorMapL1, rgbMap);
                        setImgLoc.call($this, colorMapL2, rgbMap - 260);
                        setImgLoc.call($this, colorBarL1, rgbBar - 780);
                        setImgLoc.call($this, colorBarL2, rgbBar - 520);
                        setImgLoc.call($this, colorBarL3, rgbBar);
                        setImgLoc.call($this, colorBarL4, rgbBar - 260);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    break;
                }
                if (active.val('ahex') == null) return;
                activeColorChanged.call($this, active);
              },
            activeColorChanged = // Update color when user changes text values
              function(ui, context)
              {
                if (context == null || (context != colorBar && context != colorMap)) positionMapAndBarArrows.call($this, ui, context);
                setTimeout(
                  function()
                  {
                    updatePreview.call($this, ui);
                    updateMapVisuals.call($this, ui);
                    updateBarVisuals.call($this, ui);
                  }, 0);
              },
            mapValueChanged = // user has dragged the ColorMap pointer
              function(ui, context)
              {
                var active = color.active;
                if (context != colorMap && active.val() == null) return;
                var xy = ui.val('all');
                switch (settings.color.mode)
                {
                  case 'h':
                    active.val('sv', { s: xy.x, v: 100 - xy.y }, context);
                    break;
                  case 's':
                  case 'a':
                    active.val('hv', { h: xy.x, v: 100 - xy.y }, context);
                    break;
                  case 'v':
                    active.val('hs', { h: xy.x, s: 100 - xy.y }, context);
                    break;
                  case 'r':
                    active.val('gb', { g: 255 - xy.y, b: xy.x }, context);
                    break;
                  case 'g':
                    active.val('rb', { r: 255 - xy.y, b: xy.x }, context);
                    break;
                  case 'b':
                    active.val('rg', { r: xy.x, g: 255 - xy.y }, context);
                    break;
                }
              },
            colorBarValueChanged = // user has dragged the ColorBar slider
              function(ui, context)
              {
                var active = color.active;
                if (context != colorBar && active.val() == null) return;
                switch (settings.color.mode)
                {
                  case 'h':
                    active.val('h', { h: 360 - ui.val('y') }, context);
                    break;
                  case 's':
                    active.val('s', { s: 100 - ui.val('y') }, context);
                    break;
                  case 'v':
                    active.val('v', { v: 100 - ui.val('y') }, context);
                    break;
                  case 'r':
                    active.val('r', { r: 255 - ui.val('y') }, context);
                    break;
                  case 'g':
                    active.val('g', { g: 255 - ui.val('y') }, context);
                    break;
                  case 'b':
                    active.val('b', { b: 255 - ui.val('y') }, context);
                    break;
                  case 'a':
                    active.val('a', 255 - ui.val('y'), context);
                    break;
                }
              },
            positionMapAndBarArrows = // position map and bar arrows to match current color
              function(ui, context)
              {
                if (context != colorMap)
                {
                  switch (settings.color.mode)
                  {
                    case 'h':
                      var sv = ui.val('sv');
                      colorMap.val('xy', { x: sv != null ? sv.s : 100, y: 100 - (sv != null ? sv.v : 100) }, context);
                      break;
                    case 's':
                    case 'a':
                      var hv = ui.val('hv');
                      colorMap.val('xy', { x: hv && hv.h || 0, y: 100 - (hv != null ? hv.v : 100) }, context);
                      break;
                    case 'v':
                      var hs = ui.val('hs');
                      colorMap.val('xy', { x: hs && hs.h || 0, y: 100 - (hs != null ? hs.s : 100) }, context);
                      break;
                    case 'r':
                      var bg = ui.val('bg');
                      colorMap.val('xy', { x: bg && bg.b || 0, y: 255 - (bg && bg.g || 0) }, context);
                      break;
                    case 'g':
                      var br = ui.val('br');
                      colorMap.val('xy', { x: br && br.b || 0, y: 255 - (br && br.r || 0) }, context);
                      break;
                    case 'b':
                      var rg = ui.val('rg');
                      colorMap.val('xy', { x: rg && rg.r || 0, y: 255 - (rg && rg.g || 0) }, context);
                      break;
                  }
                }
                if (context != colorBar)
                {
                  switch (settings.color.mode)
                  {
                    case 'h':
                      colorBar.val('y', 360 - (ui.val('h') || 0), context);
                      break;
                    case 's':
                      var s = ui.val('s');
                      colorBar.val('y', 100 - (s != null ? s : 100), context);
                      break;
                    case 'v':
                      var v = ui.val('v');
                      colorBar.val('y', 100 - (v != null ? v : 100), context);
                      break;
                    case 'r':
                      colorBar.val('y', 255 - (ui.val('r') || 0), context);
                      break;
                    case 'g':
                      colorBar.val('y', 255 - (ui.val('g') || 0), context);
                      break;
                    case 'b':
                      colorBar.val('y', 255 - (ui.val('b') || 0), context);
                      break;
                    case 'a':
                      var a = ui.val('a');
                      colorBar.val('y', 255 - (a != null ? a : 255), context);
                      break;
                  }
                }
              },
            updatePreview =
              function(ui)
              {
                try
                {
                  var all = ui.val('all');
                  activePreview.css({ backgroundColor: all && '#' + all.hex || 'transparent' });
                  setAlpha.call($this, activePreview, all && Math.precision((all.a * 100) / 255, 4) || 0);
                }
                catch (e) { }
              },
            updateMapVisuals =
              function(ui)
              {
                switch (settings.color.mode)
                {
                  case 'h':
                    setBG.call($this, colorMapDiv, new Color({ h: ui.val('h') || 0, s: 100, v: 100 }).val('hex'));
                    break;
                  case 's':
                  case 'a':
                    var s = ui.val('s');
                    setAlpha.call($this, colorMapL2, 100 - (s != null ? s : 100));
                    break;
                  case 'v':
                    var v = ui.val('v');
                    setAlpha.call($this, colorMapL1, v != null ? v : 100);
                    break;
                  case 'r':
                    setAlpha.call($this, colorMapL2, Math.precision((ui.val('r') || 0) / 255 * 100, 4));
                    break;
                  case 'g':
                    setAlpha.call($this, colorMapL2, Math.precision((ui.val('g') || 0) / 255 * 100, 4));
                    break;
                  case 'b':
                    setAlpha.call($this, colorMapL2, Math.precision((ui.val('b') || 0) / 255 * 100));
                    break;
                }
                var a = ui.val('a');
                setAlpha.call($this, colorMapL3, Math.precision(((255 - (a || 0)) * 100) / 255, 4));
              },
            updateBarVisuals =
              function(ui)
              {
                switch (settings.color.mode)
                {
                  case 'h':
                    var a = ui.val('a');
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (a || 0)) * 100) / 255, 4));
                    break;
                  case 's':
                    var hva = ui.val('hva'),
                        saturatedColor = new Color({ h: hva && hva.h || 0, s: 100, v: hva != null ? hva.v : 100 });
                    setBG.call($this, colorBarDiv, saturatedColor.val('hex'));
                    setAlpha.call($this, colorBarL2, 100 - (hva != null ? hva.v : 100));
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (hva && hva.a || 0)) * 100) / 255, 4));
                    break;
                  case 'v':
                    var hsa = ui.val('hsa'),
                        valueColor = new Color({ h: hsa && hsa.h || 0, s: hsa != null ? hsa.s : 100, v: 100 });
                    setBG.call($this, colorBarDiv, valueColor.val('hex'));
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (hsa && hsa.a || 0)) * 100) / 255, 4));
                    break;
                  case 'r':
                  case 'g':
                  case 'b':
                    var hValue = 0, vValue = 0, rgba = ui.val('rgba');
                    if (settings.color.mode == 'r')
                    {
                      hValue = rgba && rgba.b || 0;
                      vValue = rgba && rgba.g || 0;
                    }
                    else if (settings.color.mode == 'g')
                    {
                      hValue = rgba && rgba.b || 0;
                      vValue = rgba && rgba.r || 0;
                    }
                    else if (settings.color.mode == 'b')
                    {
                      hValue = rgba && rgba.r || 0;
                      vValue = rgba && rgba.g || 0;
                    }
                    var middle = vValue > hValue ? hValue : vValue;
                    setAlpha.call($this, colorBarL2, hValue > vValue ? Math.precision(((hValue - vValue) / (255 - vValue)) * 100, 4) : 0);
                    setAlpha.call($this, colorBarL3, vValue > hValue ? Math.precision(((vValue - hValue) / (255 - hValue)) * 100, 4) : 0);
                    setAlpha.call($this, colorBarL4, Math.precision((middle / 255) * 100, 4));
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (rgba && rgba.a || 0)) * 100) / 255, 4));
                    break;
                  case 'a':
                    var a = ui.val('a');
                    setBG.call($this, colorBarDiv, ui.val('hex') || '000000');
                    setAlpha.call($this, colorBarL5, a != null ? 0 : 100);
                    setAlpha.call($this, colorBarL6, a != null ? 100 : 0);
                    break;
                }
              },
            setBG =
              function(el, c)
              {
                el.css({ backgroundColor: c && c.length == 6 && '#' + c || 'transparent' });
              },
            setImg =
              function(img, src)
              {
                if (isLessThanIE7 && (src.indexOf('AlphaBar.png') != -1 || src.indexOf('Bars.png') != -1 || src.indexOf('Maps.png') != -1))
                {
                  img.attr('pngSrc', src);
                  img.css({ backgroundImage: 'none', filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + src + '\', sizingMethod=\'scale\')' });
                }
                else img.css({ backgroundImage: 'url(\'' + src + '\')' });
              },
            setImgLoc =
              function(img, y)
              {
                img.css({ top: y + 'px' });
              },
            setAlpha =
              function(obj, alpha)
              {
                obj.css({ visibility: alpha > 0 ? 'visible' : 'hidden' });
                if (alpha > 0 && alpha < 100)
                {
                  if (isLessThanIE7)
                  {
                    var src = obj.attr('pngSrc');
                    if (src != null && (src.indexOf('AlphaBar.png') != -1 || src.indexOf('Bars.png') != -1 || src.indexOf('Maps.png') != -1))
                      obj.css({ filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + src + '\', sizingMethod=\'scale\') progid:DXImageTransform.Microsoft.Alpha(opacity=' + alpha + ')' });
                    else obj.css({ opacity: Math.precision(alpha / 100, 4) });
                  }
                  else obj.css({ opacity: Math.precision(alpha / 100, 4) });
                }
                else if (alpha == 0 || alpha == 100)
                {
                  if (isLessThanIE7)
                  {
                    var src = obj.attr('pngSrc');
                    if (src != null && (src.indexOf('AlphaBar.png') != -1 || src.indexOf('Bars.png') != -1 || src.indexOf('Maps.png') != -1))
                      obj.css({ filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + src + '\', sizingMethod=\'scale\')' });
                    else obj.css({ opacity: '' });
                  }
                  else obj.css({ opacity: '' });
                }
              },
            revertColor = // revert color to original color when opened
              function()
              {
                color.active.val('ahex', color.current.val('ahex'));
              },
            commitColor = // commit the color changes
              function()
              {
                color.current.val('ahex', color.active.val('ahex'));
              },
            radioClicked =
              function(e)
              {
                $(this).parents('tbody:first').find('input:radio[value!="'+e.target.value+'"]').removeAttr('checked');
                setColorMode.call($this, e.target.value);
              },
            currentClicked =
              function()
              {
                revertColor.call($this);
              },
            cancelClicked =
              function()
              {
                revertColor.call($this);
                settings.window.expandable && hide.call($this);
                $.isFunction(cancelCallback) && cancelCallback.call($this, color.active, cancelButton);
              },
            okClicked =
              function()
              {
                commitColor.call($this);
                settings.window.expandable && hide.call($this);
                $.isFunction(commitCallback) && commitCallback.call($this, color.active, okButton);
              },
            iconImageClicked =
              function()
              {
                show.call($this);
              },
            currentColorChanged =
              function(ui, context)
              {
                var hex = ui.val('hex');
                currentPreview.css({ backgroundColor: hex && '#' + hex || 'transparent' });
                setAlpha.call($this, currentPreview, Math.precision(((ui.val('a') || 0) * 100) / 255, 4));
              },
            expandableColorChanged =
              function(ui, context)
              {
                var hex = ui.val('hex');
                var va = ui.val('va');
                iconColor.css({ backgroundColor: hex && '#' + hex || 'transparent' });
                setAlpha.call($this, iconAlpha, Math.precision(((255 - (va && va.a || 0)) * 100) / 255, 4));
                if (settings.window.bindToInput&&settings.window.updateInputColor)
                  settings.window.input.css(
                    {
                      backgroundColor: hex && '#' + hex || 'transparent',
                      color: va == null || va.v > 75 ? '#000000' : '#ffffff'
                    });
              },
            moveBarMouseDown =
              function(e)
              {
                var element = settings.window.element, // local copies for YUI compressor
                  page = settings.window.page;
                elementStartX = parseInt(container.css('left'));
                elementStartY = parseInt(container.css('top'));
                pageStartX = e.pageX;
                pageStartY = e.pageY;
                // bind events to document to move window - we will unbind these on mouseup
                $(document).bind('mousemove', documentMouseMove).bind('mouseup', documentMouseUp);
                e.preventDefault(); // prevent attempted dragging of the column
              },
            documentMouseMove =
              function(e)
              {
                container.css({ left: elementStartX - (pageStartX - e.pageX) + 'px', top: elementStartY - (pageStartY - e.pageY) + 'px' });
                if (settings.window.expandable && !$.support.boxModel) container.prev().css({ left: container.css("left"), top: container.css("top") });
                e.stopPropagation();
                e.preventDefault();
                return false;
              },
            documentMouseUp =
              function(e)
              {
                $(document).unbind('mousemove', documentMouseMove).unbind('mouseup', documentMouseUp);
                e.stopPropagation();
                e.preventDefault();
                return false;
              },
            quickPickClicked =
              function(e)
              {
                e.preventDefault();
                e.stopPropagation();
                color.active.val('ahex', $(this).attr('title') || null, e.target);
                return false;
              },
            commitCallback = $.isFunction($arguments[1]) && $arguments[1] || null,
            liveCallback = $.isFunction($arguments[2]) && $arguments[2] || null,
            cancelCallback = $.isFunction($arguments[3]) && $arguments[3] || null,
            show =
              function()
              {
                color.current.val('ahex', color.active.val('ahex'));
                var attachIFrame = function()
                  {
                    if (!settings.window.expandable || $.support.boxModel) return;
                    var table = container.find('table:first');
                    container.before('<iframe/>');
                    container.prev().css({ width: table.width(), height: container.height(), opacity: 0, position: 'absolute', left: container.css("left"), top: container.css("top") });
                  };
                if (settings.window.expandable)
                {
                  $(document.body).children('div.jPicker.Container').css({zIndex:10});
                  container.css({zIndex:20});
                }
                switch (settings.window.effects.type)
                {
                  case 'fade':
                    container.fadeIn(settings.window.effects.speed.show, attachIFrame);
                    break;
                  case 'slide':
                    container.slideDown(settings.window.effects.speed.show, attachIFrame);
                    break;
                  case 'show':
                  default:
                    container.show(settings.window.effects.speed.show, attachIFrame);
                    break;
                }
              },
            hide =
              function()
              {
                var removeIFrame = function()
                  {
                    if (settings.window.expandable) container.css({ zIndex: 10 });
                    if (!settings.window.expandable || $.support.boxModel) return;
                    container.prev().remove();
                  };
                switch (settings.window.effects.type)
                {
                  case 'fade':
                    container.fadeOut(settings.window.effects.speed.hide, removeIFrame);
                    break;
                  case 'slide':
                    container.slideUp(settings.window.effects.speed.hide, removeIFrame);
                    break;
                  case 'show':
                  default:
                    container.hide(settings.window.effects.speed.hide, removeIFrame);
                    break;
                }
              },
            initialize =
              function()
              {
                var win = settings.window,
                    popup = win.expandable ? $($this).next().find('.Container:first') : null;
                container = win.expandable ? $('<div/>') : $($this);
                container.addClass('jPicker Container');
                if (win.expandable) container.hide();
                container.get(0).onselectstart = function(event){ if (event.target.nodeName.toLowerCase() !== 'input') return false; };
                // inject html source code - we are using a single table for this control - I know tables are considered bad, but it takes care of equal height columns and
                // this control really is tabular data, so I believe it is the right move
                var all = color.active.val('all');
                if (win.alphaPrecision < 0) win.alphaPrecision = 0;
                else if (win.alphaPrecision > 2) win.alphaPrecision = 2;
                var controlHtml='<table class="jPicker" cellpadding="0" cellspacing="0"><tbody>' + (win.expandable ? '<tr><td class="Move" colspan="5">&nbsp;</td></tr>' : '') + '<tr><td rowspan="9"><h2 class="Title">' + (win.title || localization.text.title) + '</h2><div class="Map"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><img src="' + images.clientPath + images.colorMap.arrow.file + '" class="Arrow"/></div></td><td rowspan="9"><div class="Bar"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><span class="Map4">&nbsp;</span><span class="Map5">&nbsp;</span><span class="Map6">&nbsp;</span><img src="' + images.clientPath + images.colorBar.arrow.file + '" class="Arrow"/></div></td><td colspan="2" class="Preview"><div class="prev_div">' + localization.text.newColor + '<div class="color_preview"><span class="Active" title="' + localization.tooltips.colors.newColor + '">&nbsp;</span><span class="Current" title="' + localization.tooltips.colors.currentColor + '">&nbsp;</span></div></div>' + localization.text.currentColor + '</td><td rowspan="9" class="Button"><input type="button" class="Ok" value="' + localization.text.ok + '" title="' + localization.tooltips.buttons.ok + '"/><input type="button" class="Cancel" value="' + localization.text.cancel + '" title="' + localization.tooltips.buttons.cancel + '"/><div class="Grid">&nbsp;</div></td></tr><tr class="Hue"><td class="Radio"><label title="' + localization.tooltips.hue.radio + '"><input type="radio" value="h"' + (settings.color.mode == 'h' ? ' checked="checked"' : '') + '/>H:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.h : '') + '" title="' + localization.tooltips.hue.textbox + '"/>&nbsp;º</td></tr><tr class="Saturation"><td class="Radio"><label title="' + localization.tooltips.saturation.radio + '"><input type="radio" value="s"' + (settings.color.mode == 's' ? ' checked="checked"' : '') + '/>S:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.s : '') + '" title="' + localization.tooltips.saturation.textbox + '"/>&nbsp;%</td></tr><tr class="Value"><td class="Radio"><label title="' + localization.tooltips.value.radio + '"><input type="radio" value="v"' + (settings.color.mode == 'v' ? ' checked="checked"' : '') + '/>V:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.v : '') + '" title="' + localization.tooltips.value.textbox + '"/>&nbsp;%<br/><br/></td></tr><tr class="Red"><td class="Radio"><label title="' + localization.tooltips.red.radio + '"><input type="radio" value="r"' + (settings.color.mode == 'r' ? ' checked="checked"' : '') + '/>R:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.r : '') + '" title="' + localization.tooltips.red.textbox + '"/></td></tr><tr class="Green"><td class="Radio"><label title="' + localization.tooltips.green.radio + '"><input type="radio" value="g"' + (settings.color.mode == 'g' ? ' checked="checked"' : '') + '/>G:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.g : '') + '" title="' + localization.tooltips.green.textbox + '"/></td></tr><tr class="Blue"><td class="Radio"><label title="' + localization.tooltips.blue.radio + '"><input type="radio" value="b"' + (settings.color.mode == 'b' ? ' checked="checked"' : '') + '/>B:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.b : '') + '" title="' + localization.tooltips.blue.textbox + '"/></td></tr><tr class="Alpha"><td class="Radio">' + (win.alphaSupport ? '<label title="' + localization.tooltips.alpha.radio + '"><input type="radio" value="a"' + (settings.color.mode == 'a' ? ' checked="checked"' : '') + '/>A:</label>' : '&nbsp;') + '</td><td class="Text">' + (win.alphaSupport ? '<input type="text" maxlength="' + (3 + win.alphaPrecision) + '" value="' + (all != null ? Math.precision((all.a * 100) / 255, win.alphaPrecision) : '') + '" title="' + localization.tooltips.alpha.textbox + '"/>&nbsp;%' : '&nbsp;') + '</td></tr><tr class="Hex"><td colspan="2" class="Text"><label title="' + localization.tooltips.hex.textbox + '">#:<input type="text" maxlength="6" class="Hex" value="' + (all != null ? all.hex : '') + '"/></label>' + (win.alphaSupport ? '<input type="text" maxlength="2" class="AHex" value="' + (all != null ? all.ahex.substring(6) : '') + '" title="' + localization.tooltips.hex.alpha + '"/></td>' : '&nbsp;') + '</tr></tbody></table>';
                if (win.expandable)
                {
                  container.html(controlHtml);
                  if($(document.body).children('div.jPicker.Container').length==0)$(document.body).prepend(container);
                  else $(document.body).children('div.jPicker.Container:last').after(container);
                  container.mousedown(
                    function()
                    {
                      $(document.body).children('div.jPicker.Container').css({zIndex:10});
                      container.css({zIndex:20});
                    });
                  container.css( // positions must be set and display set to absolute before source code injection or IE will size the container to fit the window
                    {
                      left:
                        win.position.x == 'left' ? (popup.offset().left - 530 - (win.position.y == 'center' ? 25 : 0)) + 'px' :
                        win.position.x == 'center' ? (popup.offset().left - 260) + 'px' :
                        win.position.x == 'right' ? (popup.offset().left - 10 + (win.position.y == 'center' ? 25 : 0)) + 'px' :
                        win.position.x == 'screenCenter' ? (($(document).width() >> 1) - 260) + 'px' : (popup.offset().left + parseInt(win.position.x)) + 'px',
                      position: 'absolute',
                      top: win.position.y == 'top' ? (popup.offset().top - 312) + 'px' :
                           win.position.y == 'center' ? (popup.offset().top - 156) + 'px' :
                           win.position.y == 'bottom' ? (popup.offset().top + 25) + 'px' : (popup.offset().top + parseInt(win.position.y)) + 'px'
                    });
                }
                else
                {
                  container = $($this);
                  container.html(controlHtml);
                }
                // initialize the objects to the source code just injected
                var tbody = container.find('tbody:first');
                colorMapDiv = tbody.find('div.Map:first');
                colorBarDiv = tbody.find('div.Bar:first');
                var MapMaps = colorMapDiv.find('span'),
                    BarMaps = colorBarDiv.find('span');
                colorMapL1 = MapMaps.filter('.Map1:first');
                colorMapL2 = MapMaps.filter('.Map2:first');
                colorMapL3 = MapMaps.filter('.Map3:first');
                colorBarL1 = BarMaps.filter('.Map1:first');
                colorBarL2 = BarMaps.filter('.Map2:first');
                colorBarL3 = BarMaps.filter('.Map3:first');
                colorBarL4 = BarMaps.filter('.Map4:first');
                colorBarL5 = BarMaps.filter('.Map5:first');
                colorBarL6 = BarMaps.filter('.Map6:first');
                // create color pickers and maps
                colorMap = new Slider(colorMapDiv,
                  {
                    map:
                    {
                      width: images.colorMap.width,
                      height: images.colorMap.height
                    },
                    arrow:
                    {
                      image: images.clientPath + images.colorMap.arrow.file,
                      width: images.colorMap.arrow.width,
                      height: images.colorMap.arrow.height
                    }
                  });
                colorMap.bind(mapValueChanged);
                colorBar = new Slider(colorBarDiv,
                  {
                    map:
                    {
                      width: images.colorBar.width,
                      height: images.colorBar.height
                    },
                    arrow:
                    {
                      image: images.clientPath + images.colorBar.arrow.file,
                      width: images.colorBar.arrow.width,
                      height: images.colorBar.arrow.height
                    }
                  });
                colorBar.bind(colorBarValueChanged);
                colorPicker = new ColorValuePicker(tbody, color.active, win.expandable && win.bindToInput ? win.input : null, win.alphaPrecision);
                var hex = all != null ? all.hex : null,
                    preview = tbody.find('.Preview'),
                    button = tbody.find('.Button');
                activePreview = preview.find('.Active:first').css({ backgroundColor: hex && '#' + hex || 'transparent' });
                currentPreview = preview.find('.Current:first').css({ backgroundColor: hex && '#' + hex || 'transparent' }).bind('click', currentClicked);
                setAlpha.call($this, currentPreview, Math.precision(color.current.val('a') * 100) / 255, 4);
                okButton = button.find('.Ok:first').bind('click touchstart', okClicked);
                cancelButton = button.find('.Cancel:first').bind('click touchstart', cancelClicked);
                grid = button.find('.Grid:first');
                setTimeout(
                  function()
                  {
                    setImg.call($this, colorMapL1, images.clientPath + 'Maps.png');
                    setImg.call($this, colorMapL2, images.clientPath + 'Maps.png');
                    setImg.call($this, colorMapL3, images.clientPath + 'map-opacity.png');
                    setImg.call($this, colorBarL1, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL2, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL3, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL4, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL5, images.clientPath + 'bar-opacity.png');
                    setImg.call($this, colorBarL6, images.clientPath + 'AlphaBar.png');
                    setImg.call($this, preview.find('div:last'), images.clientPath + 'preview-opacity.png');
                  }, 0);
                tbody.find('td.Radio input').bind('click  touchstart', radioClicked);
                // initialize quick list
                if (color.quickList && color.quickList.length > 0)
                {
                  var html = '';
                  for (i = 0; i < color.quickList.length; i++)
                  {
                    /* if default colors are hex strings, change them to color objects */
                    if ((typeof (color.quickList[i])).toString().toLowerCase() == 'string') color.quickList[i] = new Color({ hex: color.quickList[i] });
                    var alpha = color.quickList[i].val('a');
                    var ahex = color.quickList[i].val('ahex');
                    if (!win.alphaSupport && ahex) ahex = ahex.substring(0, 6) + 'ff';
                    var quickHex = color.quickList[i].val('hex');
                    html+='<span class="QuickColor"' + (ahex && ' title="#' + ahex + '"' || '') + ' style="background-color:' + (quickHex && '#' + quickHex || '') + ';' + (quickHex ? '' : 'background-image:url(' + images.clientPath + 'NoColor.svg)') + (win.alphaSupport && alpha && alpha < 255 ? ';opacity:' + Math.precision(alpha / 255, 4) + ';filter:Alpha(opacity=' + Math.precision(alpha / 2.55, 4) + ')' : '') + '">&nbsp;</span>';
                  }
                  setImg.call($this, grid, images.clientPath + 'bar-opacity.png');
                  grid.html(html);
                  grid.find('.QuickColor').click(quickPickClicked);
                }
                setColorMode.call($this, settings.color.mode);
                color.active.bind(activeColorChanged);
                $.isFunction(liveCallback) && color.active.bind(liveCallback);
                color.current.bind(currentColorChanged);
                // bind to input
                if (win.expandable)
                {
                  $this.icon = popup.parents('.Icon:first');
                  iconColor = $this.icon.find('.Color:first').css({ backgroundColor: hex && '#' + hex || 'transparent' });
                  iconAlpha = $this.icon.find('.Alpha:first');
                  setImg.call($this, iconAlpha, images.clientPath + 'bar-opacity.png');
                  setAlpha.call($this, iconAlpha, Math.precision(((255 - (all != null ? all.a : 0)) * 100) / 255, 4));
                  iconImage = $this.icon.find('.Image:first').css(
                    {
                      backgroundImage: 'url(\'' + images.clientPath + images.picker.file + '\')'
                    }).bind('click', iconImageClicked);
                  if (win.bindToInput&&win.updateInputColor)
                    win.input.css(
                      {
                        backgroundColor: hex && '#' + hex || 'transparent',
                        color: all == null || all.v > 75 ? '#000000' : '#ffffff'
                      });
                  moveBar = tbody.find('.Move:first').bind('mousedown', moveBarMouseDown);
                  color.active.bind(expandableColorChanged);
                }
                else show.call($this);
              },
            destroy =
              function()
              {
                container.find('td.Radio input  touchstart').unbind('click', radioClicked);
                currentPreview.unbind('click  touchstart', currentClicked);
                cancelButton.unbind('click  touchstart', cancelClicked);
                okButton.unbind('click  touchstart', okClicked);
                if (settings.window.expandable)
                {
                  iconImage.unbind('click', iconImageClicked);
                  moveBar.unbind('mousedown', moveBarMouseDown);
                  $this.icon = null;
                }
                container.find('.QuickColor').unbind('click', quickPickClicked);
                colorMapDiv = null;
                colorBarDiv = null;
                colorMapL1 = null;
                colorMapL2 = null;
                colorMapL3 = null;
                colorBarL1 = null;
                colorBarL2 = null;
                colorBarL3 = null;
                colorBarL4 = null;
                colorBarL5 = null;
                colorBarL6 = null;
                colorMap.destroy();
                colorMap = null;
                colorBar.destroy();
                colorBar = null;
                colorPicker.destroy();
                colorPicker = null;
                activePreview = null;
                currentPreview = null;
                okButton = null;
                cancelButton = null;
                grid = null;
                commitCallback = null;
                cancelCallback = null;
                liveCallback = null;
                container.html('');
                for (i = 0; i < List.length; i++) if (List[i] == $this) List.splice(i, 1);
              },
            images = settings.images, // local copies for YUI compressor
            localization = settings.localization,
            color =
              {
                active: (typeof(settings.color.active)).toString().toLowerCase() == 'string' ? new Color({ ahex: !settings.window.alphaSupport && settings.color.active ? settings.color.active.substring(0, 6) + 'ff' : settings.color.active }) : new Color({ ahex: !settings.window.alphaSupport && settings.color.active.val('ahex') ? settings.color.active.val('ahex').substring(0, 6) + 'ff' : settings.color.active.val('ahex') }),
                current: (typeof(settings.color.active)).toString().toLowerCase() == 'string' ? new Color({ ahex: !settings.window.alphaSupport && settings.color.active ? settings.color.active.substring(0, 6) + 'ff' : settings.color.active }) : new Color({ ahex: !settings.window.alphaSupport && settings.color.active.val('ahex') ? settings.color.active.val('ahex').substring(0, 6) + 'ff' : settings.color.active.val('ahex') }),
                quickList: settings.color.quickList
              };
          $.extend(true, $this, // public properties, methods, and callbacks
            {
              commitCallback: commitCallback, // commitCallback function can be overridden to return the selected color to a method you specify when the user clicks "OK"
              liveCallback: liveCallback, // liveCallback function can be overridden to return the selected color to a method you specify in live mode (continuous update)
              cancelCallback: cancelCallback, // cancelCallback function can be overridden to a method you specify when the user clicks "Cancel"
              color: color,
              show: show,
              hide: hide,
              destroy: destroy // destroys this control entirely, removing all events and objects, and removing itself from the List
            });
          List.push($this);
          setTimeout(
            function()
            {
              initialize.call($this);
            }, 0);
        });
    };
  $.fn.jPicker.defaults = /* jPicker defaults - you can change anything in this section (such as the clientPath to your images) without fear of breaking the program */
      {
      window:
        {
          title: null, /* any title for the jPicker window itself - displays "Drag Markers To Pick A Color" if left null */
          effects:
          {
            type: 'slide', /* effect used to show/hide an expandable picker. Acceptable values "slide", "show", "fade" */
            speed:
            {
              show: 'slow', /* duration of "show" effect. Acceptable values are "fast", "slow", or time in ms */
              hide: 'fast' /* duration of "hide" effect. Acceptable values are "fast", "slow", or time in ms */
            }
          },
          position:
          {
            x: 'screenCenter', /* acceptable values "left", "center", "right", "screenCenter", or relative px value */
            y: 'top' /* acceptable values "top", "bottom", "center", or relative px value */
          },
          expandable: false, /* default to large static picker - set to true to make an expandable picker (small icon with popup) - set automatically when binded to input element */
          liveUpdate: true, /* set false if you want the user to have to click "OK" before the binded input box updates values (always "true" for expandable picker) */
          alphaSupport: false, /* set to true to enable alpha picking */
          alphaPrecision: 0, /* set decimal precision for alpha percentage display - hex codes do not map directly to percentage integers - range 0-2 */
          updateInputColor: true /* set to false to prevent binded input colors from changing */
        },
      color:
        {
          mode: 'h', /* acceptabled values "h" (hue), "s" (saturation), "v" (value), "r" (red), "g" (green), "b" (blue), "a" (alpha) */
          active: new Color({ ahex: '#ffcc00ff' }), /* acceptable values are any declared $.jPicker.Color object or string HEX value (e.g. #ffc000) WITH OR WITHOUT the "#" prefix */
          quickList: /* the quick pick color list */
            [
              new Color({ h: 360, s: 33, v: 100 }), /* acceptable values are any declared $.jPicker.Color object or string HEX value (e.g. #ffc000) WITH OR WITHOUT the "#" prefix */
              new Color({ h: 360, s: 66, v: 100 }),
              new Color({ h: 360, s: 100, v: 100 }),
              new Color({ h: 360, s: 100, v: 75 }),
              new Color({ h: 360, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 100 }),
              new Color({ h: 30, s: 33, v: 100 }),
              new Color({ h: 30, s: 66, v: 100 }),
              new Color({ h: 30, s: 100, v: 100 }),
              new Color({ h: 30, s: 100, v: 75 }),
              new Color({ h: 30, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 90 }),
              new Color({ h: 60, s: 33, v: 100 }),
              new Color({ h: 60, s: 66, v: 100 }),
              new Color({ h: 60, s: 100, v: 100 }),
              new Color({ h: 60, s: 100, v: 75 }),
              new Color({ h: 60, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 80 }),
              new Color({ h: 90, s: 33, v: 100 }),
              new Color({ h: 90, s: 66, v: 100 }),
              new Color({ h: 90, s: 100, v: 100 }),
              new Color({ h: 90, s: 100, v: 75 }),
              new Color({ h: 90, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 70 }),
              new Color({ h: 120, s: 33, v: 100 }),
              new Color({ h: 120, s: 66, v: 100 }),
              new Color({ h: 120, s: 100, v: 100 }),
              new Color({ h: 120, s: 100, v: 75 }),
              new Color({ h: 120, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 60 }),
              new Color({ h: 150, s: 33, v: 100 }),
              new Color({ h: 150, s: 66, v: 100 }),
              new Color({ h: 150, s: 100, v: 100 }),
              new Color({ h: 150, s: 100, v: 75 }),
              new Color({ h: 150, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 50 }),
              new Color({ h: 180, s: 33, v: 100 }),
              new Color({ h: 180, s: 66, v: 100 }),
              new Color({ h: 180, s: 100, v: 100 }),
              new Color({ h: 180, s: 100, v: 75 }),
              new Color({ h: 180, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 40 }),
              new Color({ h: 210, s: 33, v: 100 }),
              new Color({ h: 210, s: 66, v: 100 }),
              new Color({ h: 210, s: 100, v: 100 }),
              new Color({ h: 210, s: 100, v: 75 }),
              new Color({ h: 210, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 30 }),
              new Color({ h: 240, s: 33, v: 100 }),
              new Color({ h: 240, s: 66, v: 100 }),
              new Color({ h: 240, s: 100, v: 100 }),
              new Color({ h: 240, s: 100, v: 75 }),
              new Color({ h: 240, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 20 }),
              new Color({ h: 270, s: 33, v: 100 }),
              new Color({ h: 270, s: 66, v: 100 }),
              new Color({ h: 270, s: 100, v: 100 }),
              new Color({ h: 270, s: 100, v: 75 }),
              new Color({ h: 270, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 10 }),
              new Color({ h: 300, s: 33, v: 100 }),
              new Color({ h: 300, s: 66, v: 100 }),
              new Color({ h: 300, s: 100, v: 100 }),
              new Color({ h: 300, s: 100, v: 75 }),
              new Color({ h: 300, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 0 }),
              new Color({ h: 330, s: 33, v: 100 }),
              new Color({ h: 330, s: 66, v: 100 }),
              new Color({ h: 330, s: 100, v: 100 }),
              new Color({ h: 330, s: 100, v: 75 }),
              new Color({ h: 330, s: 100, v: 50 }),
              new Color()
            ]
        },
      images:
        {
          clientPath: '/jPicker/images/', /* Path to image files */
          colorMap:
          {
            width: 256,
            height: 256,
            arrow:
            {
              file: 'mappoint.gif', /* ColorMap arrow icon */
              width: 15,
              height: 15
            }
          },
          colorBar:
          {
            width: 20,
            height: 256,
            arrow:
            {
              file: 'rangearrows.svg', /* ColorBar arrow icon */
              width: 20,
              height: 7
            }
          },
          picker:
          {
            file: 'picker.gif', /* Color Picker icon */
            width: 25,
            height: 24
          }
        },
      localization: /* alter these to change the text presented by the picker (e.g. different language) */
        {
          text:
          {
            title: 'Drag Markers To Pick A Color',
            newColor: 'new',
            currentColor: 'current',
            ok: 'OK',
            cancel: 'Cancel'
          },
          tooltips:
          {
            colors:
            {
              newColor: 'New Color - Press &ldquo;OK&rdquo; To Commit',
              currentColor: 'Click To Revert To Original Color'
            },
            buttons:
            {
              ok: 'Commit To This Color Selection',
              cancel: 'Cancel And Revert To Original Color'
            },
            hue:
            {
              radio: 'Set To &ldquo;Hue&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Hue&rdquo; Value (0-360&deg;)'
            },
            saturation:
            {
              radio: 'Set To &ldquo;Saturation&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Saturation&rdquo; Value (0-100%)'
            },
            value:
            {
              radio: 'Set To &ldquo;Value&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Value&rdquo; Value (0-100%)'
            },
            red:
            {
              radio: 'Set To &ldquo;Red&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Red&rdquo; Value (0-255)'
            },
            green:
            {
              radio: 'Set To &ldquo;Green&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Green&rdquo; Value (0-255)'
            },
            blue:
            {
              radio: 'Set To &ldquo;Blue&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Blue&rdquo; Value (0-255)'
            },
            alpha:
            {
              radio: 'Set To &ldquo;Alpha&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Alpha&rdquo; Value (0-100)'
            },
            hex:
            {
              textbox: 'Enter A &ldquo;Hex&rdquo; Color Value (#000000-#ffffff)',
              alpha: 'Enter A &ldquo;Alpha&rdquo; Value (#00-#ff)'
            }
          }
        }
    };
})(jQuery, '1.1.6');
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);
/*
 * ext-eyedropper.js
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Jeff Schiller
 *
 */

// Dependencies:
// 1) jQuery
// 2) history.js
// 3) svg_editor.js
// 4) svgcanvas.js

methodDraw.addExtension("eyedropper", function(S) {
    var svgcontent = S.svgcontent,
      svgns = "http://www.w3.org/2000/svg",
      svgdoc = S.svgroot.parentNode.ownerDocument,
      svgCanvas = methodDraw.canvas,
      ChangeElementCommand = svgedit.history.ChangeElementCommand,
      addToHistory = function(cmd) { svgCanvas.undoMgr.addCommandToHistory(cmd); },
      currentStyle = {fillPaint: "red", fillOpacity: 1.0,
              strokePaint: "black", strokeOpacity: 1.0, 
              strokeWidth: 5, strokeDashArray: null,
              opacity: 1.0,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter'
              };
    function getStyle(opts) {
      // if we are in eyedropper mode, we don't want to disable the eye-dropper tool
      var mode = svgCanvas.getMode();
      if (mode == "eyedropper") return;
      var tool = $('#tool_eyedropper');

    }
    
    var getPaint = function(color, opac, type) {
      // update the editor's fill paint
      var opts = null;
      if (color.indexOf("url(#") === 0) {
        var refElem = svgCanvas.getRefElem(color);
        if(refElem) {
          refElem = refElem.cloneNode(true);
        } else {
          refElem =  $("#" + type + "_color defs *")[0];
        }

        opts = { alpha: opac };
        opts[refElem.tagName] = refElem;
      } 
      else if (color.indexOf("#") === 0) {
        opts = {
          alpha: opac,
          solidColor: color.substr(1)
        };
      }
      else {
        opts = {
          alpha: opac,
          solidColor: 'none'
        };
      }
      return new $.jGraduate.Paint(opts);
    };
    
    return {
      name: "eyedropper",
      svgicons: "extensions/eyedropper-icon.xml",
      buttons: [{
        id: "tool_eyedropper",
        type: "mode",
        title: "Eye Dropper Tool",
        position: 8,
        key: "I",
        icon: "extensions/eyedropper.png",
        events: {
          "click": function() {
            svgCanvas.setMode("eyedropper");
          }
        }
      }],
      
      mouseDown: function(opts) {
        var mode = svgCanvas.getMode();
        var e = opts.event;
        var target = (e.target.id === "svgroot") ? document.getElementById('canvas_background') : e.target;
        if (mode == "eyedropper" && target) {
          currentStyle.fillPaint = target.getAttribute("fill") || "white";
          currentStyle.fillOpacity = target.getAttribute("fill-opacity") || 1.0;
          currentStyle.strokePaint = target.getAttribute("stroke") || 'none';
          currentStyle.strokeOpacity = target.getAttribute("stroke-opacity") || 1.0;
          currentStyle.strokeWidth = target.getAttribute("stroke-width");
          currentStyle.strokeDashArray = target.getAttribute("stroke-dasharray");
          currentStyle.strokeLinecap = target.getAttribute("stroke-linecap");
          currentStyle.strokeLinejoin = target.getAttribute("stroke-linejoin");
          currentStyle.opacity = target.getAttribute("opacity") || 1.0;
          opts.selectedElements = opts.selectedElements.filter(Boolean)
          if (!opts.selectedElements.length) { //nothing selected, just update colors
            var fill = getPaint(currentStyle.fillPaint, currentStyle.fillOpacity*100, "fill");
            var stroke = getPaint(currentStyle.strokePaint, currentStyle.strokeOpacity*100, "stroke");
            methodDraw.paintBox.fill.setPaint(fill)
            methodDraw.paintBox.stroke.setPaint(stroke)
            return;
          }
          if ($.inArray(opts.selectedElements.nodeName, ['g', 'use']) == -1) {
            var changes = {};
            var change = function(elem, attrname, newvalue) {
              changes[attrname] = elem.getAttribute(attrname);
              elem.setAttribute(attrname, newvalue);
            };
            var batchCmd = new S.BatchCommand();
            opts.selectedElements.forEach(function(element){
              if (currentStyle.fillPaint)       change(element, "fill", currentStyle.fillPaint);
              if (currentStyle.fillOpacity)     change(element, "fill-opacity", currentStyle.fillOpacity);
              if (currentStyle.strokePaint)     change(element, "stroke", currentStyle.strokePaint);
              if (currentStyle.strokeOpacity)   change(element, "stroke-opacity", currentStyle.strokeOpacity);
              if (currentStyle.strokeWidth)     change(element, "stroke-width", currentStyle.strokeWidth);
              if (currentStyle.strokeDashArray) change(element, "stroke-dasharray", currentStyle.strokeDashArray);
              if (currentStyle.opacity)         change(element, "opacity", currentStyle.opacity);
              if (currentStyle.strokeLinecap)   change(element, "stroke-linecap", currentStyle.strokeLinecap);
              if (currentStyle.strokeLinejoin)  change(element, "stroke-linejoin", currentStyle.strokeLinejoin);
              batchCmd.addSubCommand(new ChangeElementCommand(element, changes));
              changes = {};
            });
            var fill = getPaint(currentStyle.fillPaint, currentStyle.fillOpacity*100, "fill")
            var stroke = getPaint(currentStyle.strokePaint, currentStyle.strokeOpacity*100, "stroke")
            methodDraw.paintBox.fill.update(true)
            methodDraw.paintBox.stroke.update(true)
            addToHistory(batchCmd);
          }
        }
      }
    };
});
/*
 * ext-shapes.js
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Christian Tzurcanu
 * Copyright(c) 2010 Alexis Deveria
 *
 */

methodDraw.addExtension("shapes", function() {

  var current_d, cur_shape_id;
  var canv = methodDraw.canvas;
  var cur_shape;
  var start_x, start_y;
  var svgroot = canv.getRootElem();
  var lastBBox = {};
  
  // This populates the category list
  var categories = {
    basic: 'Basic',
    object: 'Objects',
    symbol: 'Symbols',
    arrow: 'Arrows',
    flowchart: 'Flowchart',
    nature: 'Nature',
    game: 'Cards & Chess',
    dialog_balloon: 'Dialog baloons',
    music: 'Music',
    weather: 'Weather &amp; Time',
    ui: 'User Interface',
    social: 'Social Web'
  };
  
  var library = {
    'basic': {
      data: {
        "star_points_5": "m1,116.58409l113.82668,0l35.17332,-108.13487l35.17334,108.13487l113.82666,0l-92.08755,66.83026l35.17514,108.13487l-92.08759,-66.83208l-92.08757,66.83208l35.17515,-108.13487l-92.08758,-66.83026z",
        'donut': 'm1,150l0,0c0,-82.29042 66.70958,-149 149,-149l0,0c39.51724,0 77.41599,15.69816 105.35889,43.64108c27.94293,27.94293 43.64111,65.84165 43.64111,105.35892l0,0c0,82.29041 -66.70958,149 -149,149l0,0c-82.29041,0 -149,-66.70959 -149,-149zm74.5,0l0,0c0,41.1452 33.35481,74.5 74.5,74.5c41.14522,0 74.5,-33.3548 74.5,-74.5c0,-41.1452 -33.3548,-74.5 -74.5,-74.5l0,0c-41.14519,0 -74.5,33.35481 -74.5,74.5z',
        "triangle": "m1,280.375l149,-260.75l149,260.75z",
        "right_triangle": "m1,299l0,-298l298,298z",
        "diamond": "m1,150l149,-149l149,149l-149,149l-149,-149z",
        "pentagon": "m1.00035,116.97758l148.99963,-108.4053l148.99998,108.4053l-56.91267,175.4042l-184.1741,0l-56.91284,-175.4042z",
        "hexagon": "m1,149.99944l63.85715,-127.71428l170.28572,0l63.85713,127.71428l-63.85713,127.71428l-170.28572,0l-63.85715,-127.71428z",
        "septagon1": "m0.99917,191.06511l29.51249,-127.7108l119.48833,-56.83673l119.48836,56.83673l29.51303,127.7108l-82.69087,102.41679l-132.62103,0l-82.69031,-102.41679z",
        "heptagon": "m1,88.28171l87.28172,-87.28171l123.43653,0l87.28172,87.28171l0,123.43654l-87.28172,87.28172l-123.43653,0l-87.28172,-87.28172l0,-123.43654z",
        "decagon": "m1,150.00093l28.45646,-88.40318l74.49956,-54.63682l92.08794,0l74.50002,54.63682l28.45599,88.40318l-28.45599,88.40318l-74.50002,54.63681l-92.08794,0l-74.49956,-54.63681l-28.45646,-88.40318z",
        "dodecagon": "m1,110.07421l39.92579,-69.14842l69.14842,-39.92579l79.85159,0l69.14842,39.92579l39.92578,69.14842l0,79.85159l-39.92578,69.14842l-69.14842,39.92578l-79.85159,0l-69.14842,-39.92578l-39.92579,-69.14842l0,-79.85159z",
        "trapezoid": "m1,299l55.875,-298l186.25001,0l55.87498,298z",
        "dialog_balloon_1": "m0.99786,35.96579l0,0c0,-19.31077 15.28761,-34.96524 34.14583,-34.96524l15.52084,0l0,0l74.50001,0l139.68748,0c9.05606,0 17.74118,3.68382 24.14478,10.24108c6.40356,6.55726 10.00107,15.45081 10.00107,24.72416l0,87.41311l0,0l0,52.44785l0,0c0,19.31078 -15.2876,34.96524 -34.14584,34.96524l-139.68748,0l-97.32507,88.90848l22.82506,-88.90848l-15.52084,0c-18.85822,0 -34.14583,-15.65446 -34.14583,-34.96524l0,0l0,-52.44785l0,0z",
        'heart': 'm150,73c61,-175 300,0 0,225c-300,-225 -61,-400 0,-225z',
        "cylinder": "m299.0007,83.77844c0,18.28676 -66.70958,33.11111 -149.00002,33.11111m149.00002,-33.11111l0,0c0,18.28676 -66.70958,33.11111 -149.00002,33.11111c-82.29041,0 -148.99997,-14.82432 -148.99997,-33.11111m0,0l0,0c0,-18.28674 66.70956,-33.1111 148.99997,-33.1111c82.29044,0 149.00002,14.82436 149.00002,33.1111l0,132.44449c0,18.28674 -66.70958,33.11105 -149.00002,33.11105c-82.29041,0 -148.99997,-14.82431 -148.99997,-33.11105z",
        "arrow_up": "m1.49805,149.64304l148.50121,-148.00241l148.50121,148.00241l-74.25061,0l0,148.71457l-148.5012,0l0,-148.71457z",
        "arrow_u_turn": "m1.00059,299.00055l0,-167.62497l0,0c0,-72.00411 58.37087,-130.37499 130.375,-130.37499l0,0l0,0c34.57759,0 67.73898,13.7359 92.18906,38.18595c24.45006,24.45005 38.18593,57.61144 38.18593,92.18904l0,18.625l37.24997,0l-74.49995,74.50002l-74.50002,-74.50002l37.25,0l0,-18.625c0,-30.8589 -25.0161,-55.87498 -55.87498,-55.87498l0,0l0,0c-30.85892,0 -55.875,25.01608 -55.875,55.87498l0,167.62497z",
        "arrow_left_up": "m0.99865,224.5l74.50004,-74.5l0,37.25l111.74991,0l0,-111.75l-37.25,0l74.5,-74.5l74.5,74.5l-37.25,0l0,186.25l-186.24989,0l0,37.25l-74.50005,-74.5z",
        "plaque": "m-0.00197,49.94376l0,0c27.5829,0 49.94327,-22.36036 49.94327,-49.94327l199.76709,0l0,0c0,27.5829 22.36037,49.94327 49.94325,49.94327l0,199.7671l0,0c-27.58289,0 -49.94325,22.36034 -49.94325,49.94325l-199.76709,0c0,-27.58292 -22.36037,-49.94325 -49.94327,-49.94325z",
        "page": "m249.3298,298.99744l9.9335,-39.73413l39.73413,-9.93355l-49.66763,49.66768l-248.33237,0l0,-298.00001l298.00001,0l0,248.33234",
        "cross": "m0.99844,99.71339l98.71494,0l0,-98.71495l101.26279,0l0,98.71495l98.71495,0l0,101.2628l-98.71495,0l0,98.71494l-101.26279,0l0,-98.71494l-98.71494,0z",
        "divide": "m150,0.99785l0,0c25.17819,0 45.58916,20.41097 45.58916,45.58916c0,25.17821 -20.41096,45.58916 -45.58916,45.58916c-25.17822,0 -45.58916,-20.41093 -45.58916,-45.58916c0,-25.1782 20.41093,-45.58916 45.58916,-45.58916zm0,296.25203c-25.17822,0 -45.58916,-20.41095 -45.58916,-45.58917c0,-25.17819 20.41093,-45.58916 45.58916,-45.58916c25.17819,0 45.58916,20.41096 45.58916,45.58916c0,25.17822 -20.41096,45.58917 -45.58916,45.58917zm-134.06754,-193.71518l268.13507,0l0,91.17833l-268.13507,0z",
        "minus": "m0.99887,102.39503l297.49445,0l0,95.2112l-297.49445,0z",
        "times": "m1.00089,73.36786l72.36697,-72.36697l76.87431,76.87368l76.87431,-76.87368l72.36765,72.36697l-76.87433,76.87431l76.87433,76.87431l-72.36765,72.36765l-76.87431,-76.87433l-76.87431,76.87433l-72.36697,-72.36765l76.87368,-76.87431l-76.87368,-76.87431z"
      },
      buttons: []
    }
  };
  
  var cur_lib = library.basic;
  
  var mode_id = 'shapelib';
  
  function loadIcons() {
    $('#shape_buttons').empty();
    
    // Show lib ones
    $('#shape_buttons').append(cur_lib.buttons);
  }
  
  function loadLibrary(cat_id) {
  
    var lib = library[cat_id];
    
    if(!lib) {
      $('#shape_buttons').html('Loading...');
      $.getJSON('shapelib/' + cat_id + '.json', function(result, textStatus) {
        cur_lib = library[cat_id] = {
          data: result.data,
          size: result.size,
          fill: result.fill
        }
        makeButtons(cat_id, result);
        loadIcons();
      });
      return;
    }
    
    cur_lib = lib;
    if(!lib.buttons.length) makeButtons(cat_id, lib);
    loadIcons();
  }
  
  function makeButtons(cat, shapes) {
    var size = cur_lib.size || 300;
    var fill = cur_lib.fill || false;
    var off = size * .05;
    var vb = [-off, -off, size + off*2, size + off*2].join(' ');
    var stroke = fill ? 0: (size/30);
    
    var shape_icon = new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg"><svg viewBox="' + vb + '"><path /><\/svg><\/svg>',
      'text/xml');

    var width = 40;
    var height = 40;
    shape_icon.documentElement.setAttribute('width', width);
    shape_icon.documentElement.setAttribute('height', height);
    var svg_elem = $(document.importNode(shape_icon.documentElement,true));
  
    var data = shapes.data;
    
    cur_lib.buttons = [];
  
    for(var id in data) {
      var path_d = data[id];
      var icon = svg_elem.clone();
      icon.find('path').attr('d', path_d);
      
      var icon_btn = icon.wrap('<div class="tool_button">').parent().attr({
        id: mode_id + '_' + id,
        title: id
      });
      
      
      // Store for later use
      cur_lib.buttons.push(icon_btn[0]);
    }
    
  }
  
  return {
    svgicons: "extensions/ext-shapes.xml",
    buttons: [{
      id: "tool_shapelib",
      type: "mode_flyout", // _flyout
      position: 6,
      title: "Shape library",
      icon: "extensions/ext-shapes.png",
      events: {
        "click": function() {
          canv.setMode(mode_id);
        }
      }
    }],
    callback: function() {
    
      var btn_div = $('<div id="shape_buttons">');
      $('#tools_shapelib > *').wrapAll(btn_div);
      
      var shower = $('#tool_shapelib');

      loadLibrary('basic');
      
      // Do mouseup on parent element rather than each button
      $('#shape_buttons').mouseup(function(evt) {
        var btn = $(evt.target).closest('div.tool_button');
        
        if(!btn.length) return;
        
        var copy = btn.children().clone().attr({width: 24, height: 24});
        shower.children(':not(.flyout_arrow_horiz)').remove();
        shower
          .append(copy)
          .attr('data-curopt', '#' + btn[0].id) // This sets the current mode
          .mouseup();
        canv.setMode(mode_id);
        
        cur_shape_id = btn[0].id.substr((mode_id+'_').length);
        current_d = cur_lib.data[cur_shape_id];
        
        $('.tools_flyout').fadeOut();

      });

      var shape_cats = $('<div id="shape_cats">');
      var cat_str = '';
      
      $.each(categories, function(id, label) {
        cat_str += '<div data-cat=' + id + '>' + label + '</div>';
      });
      
      shape_cats.html(cat_str).children().bind('mouseup', function() {
        var catlink = $(this);
        catlink.siblings().removeClass('current');
        catlink.addClass('current');
        
        loadLibrary(catlink.attr('data-cat'));
        // Get stuff
        
        return false;
      });
      
      shape_cats.children().eq(0).addClass('current');
      
      $('#tools_shapelib').prepend(shape_cats);

      shower.mouseup(function() {
        canv.setMode(current_d ? mode_id : 'select');
      });

  
    },
    mouseDown: function(opts) {
      var mode = canv.getMode();
      if(mode !== mode_id) return;
      
      var e = opts.event;
      var x = start_x = opts.start_x;
      var y = start_y = opts.start_y;
      var cur_style = canv.getStyle();
      cur_shape = canv.addSvgElementFromJson({
        "element": "path",
        "curStyles": true,
        "attr": {
          "d": current_d,
          "id": canv.getNextId(),
          "opacity": cur_style.opacity / 2,
          "style": "pointer-events:none"
        }
      });
      cur_shape.setAttribute("d", current_d);
      // Make sure shape uses absolute values
      if(/[a-z]/.test(current_d)) {
        current_d = cur_lib.data[cur_shape_id] = canv.pathActions.convertPath(cur_shape);
        cur_shape.setAttribute('d', current_d);
        canv.pathActions.fixEnd(cur_shape);
      }
      
      cur_shape.setAttribute('transform', "translate(" + x + "," + y + ") scale(0.005) translate(" + -x + "," + -y + ")");      
//      console.time('b');
      canv.recalculateDimensions(cur_shape);
      var tlist = canv.getTransformList(cur_shape);
      lastBBox = cur_shape.getBBox();
      totalScale = {
        sx: 1,
        sy: 1
      };
      return {
        started: true
      }
      // current_d
    },
    mouseMove: function(opts) {
      var mode = canv.getMode();
      if(mode !== mode_id) return;
      
      var zoom = canv.getZoom();
      var evt = opts.event
      
      var x = opts.mouse_x/zoom;
      var y = opts.mouse_y/zoom;
      
      var tlist = canv.getTransformList(cur_shape),
        box = cur_shape.getBBox(), 
        left = box.x, top = box.y, width = box.width,
        height = box.height;
      var dx = (x-start_x), dy = (y-start_y);

      var newbox = {
        'x': Math.min(start_x,x),
        'y': Math.min(start_y,y),
        'width': Math.abs(x-start_x),
        'height': Math.abs(y-start_y)
      };

      var ts = null,
        tx = 0, ty = 0,
        sy = height ? (height+dy)/height : 1, 
        sx = width ? (width+dx)/width : 1;

      var sx = newbox.width / lastBBox.width;
      var sy = newbox.height / lastBBox.height;
      
      sx = sx || 1;
      sy = sy || 1;
      
      // Not perfect, but mostly works...
      
      if(x < start_x) {
        tx = lastBBox.width;
      }
      if(y < start_y) ty = lastBBox.height;
      
      // update the transform list with translate,scale,translate
      var translateOrigin = svgroot.createSVGTransform(),
        scale = svgroot.createSVGTransform(),
        translateBack = svgroot.createSVGTransform();
        
      translateOrigin.setTranslate(-(left+tx), -(top+ty));
      if(evt.shiftKey) {
        replaced = true
        var max = Math.min(Math.abs(sx), Math.abs(sy));
        sx = max * (sx < 0 ? -1 : 1);
        sy = max * (sy < 0 ? -1 : 1);
        if (totalScale.sx != totalScale.sy) {
          var multiplierX = (totalScale.sx > totalScale.sy) ? 1 : totalScale.sx/totalScale.sy;
          var multiplierY = (totalScale.sy > totalScale.sx) ? 1 : totalScale.sy/totalScale.sx;
          sx *= multiplierY
          sy *= multiplierX
        }
      }
      totalScale.sx *= sx;
      totalScale.sy *= sy;
      scale.setScale(sx,sy);
      translateBack.setTranslate(left+tx, top+ty);
      var N = tlist.numberOfItems;
      tlist.appendItem(translateBack);
      tlist.appendItem(scale);
      tlist.appendItem(translateOrigin);

      canv.recalculateDimensions(cur_shape);
      lastBBox = cur_shape.getBBox();
    },
    mouseUp: function(opts) {
      var mode = canv.getMode();
      if(mode !== mode_id) return;
      
      if(opts.mouse_x == start_x && opts.mouse_y == start_y) {
        return {
          keep: false,
          element: cur_shape,
          started: false
        }
      }

      return {
        keep: true,
        element: cur_shape,
        started: false
      }
    }   
  }
});

/*
 * ext-grid.js
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Redou Mine
 * Copyright(c) 2010 Alexis Deveria
 *
 */

// Dependencies:
// 1) units.js
// 2) everything else

methodDraw.addExtension("view_grid", function(s) {
    if (!document.getElementById("canvasGrid")){
    var svgdoc = document.getElementById("svgcanvas").ownerDocument,
            svgns = "http://www.w3.org/2000/svg",
            dims = methodDraw.curConfig.dimensions,
            svgroot = s.svgroot;
    var svgCanvas = methodDraw.canvas;
    var showGrid = false;
    var assignAttributes = s.assignAttributes;
    
    var hcanvas = document.createElement('canvas');
    $(hcanvas).hide().appendTo('body');

    var canvasgrid = svgdoc.createElementNS(svgns, "g");
    assignAttributes(canvasgrid, {
        'id': 'canvasGrid',
        'width': '100%',
        'height': '100%',
        'x': 0,
        'y': 0,
        'overflow': 'visible',
        'display': 'none'
    });
    
    var canvBG = $('#canvas_background');
    canvBG.after(canvasgrid);
    
    

        // grid-pattern
        var gridPattern = svgdoc.createElementNS(svgns, "pattern");
        assignAttributes(gridPattern, {
            'id': 'gridpattern',
            'patternUnits': 'userSpaceOnUse',
            'x': 0, //-(value.strokeWidth / 2), // position for strokewidth
            'y': 0, //-(value.strokeWidth / 2), // position for strokewidth
            'width': 100,
            'height': 100
        });
        
        var gridimg = svgdoc.createElementNS(svgns, "image");
        assignAttributes(gridimg, {
            'x': 0,
            'y': 0,
            'width': 100,
            'height': 100
        });
        
        gridPattern.appendChild(gridimg);
        $('#svgroot defs').append(gridPattern);

        // grid-box
        var gridBox = svgdoc.createElementNS(svgns, "rect");
        assignAttributes(gridBox, {
            'width': '100%',
            'height': '100%',
            'x': 0,
            'y': 0,
            'stroke-width': 0,
            'stroke': 'none',
            'fill': 'url(#gridpattern)',
            'style': 'pointer-events: none; display:visible;'
        });
        $('#canvasGrid').append(gridBox);
        }
//     });

    function updateGrid(zoom) {
        // TODO: Try this with <line> elements, then compare performance difference
    
        var bgwidth = +canvBG.attr('width');
        var bgheight = +canvBG.attr('height');
        
        var units = svgedit.units.getTypeMap();
        var unit = units[methodDraw.curConfig.baseUnit]; // 1 = 1px
        var r_intervals = [.01, .1, 1, 10, 100, 1000];
    
        var d = 0;
        var is_x = (d === 0);
        var dim = is_x ? 'x' : 'y';
        var lentype = is_x?'width':'height';
        var c_elem = svgCanvas.getContentElem();
        var content_d = c_elem.getAttribute(dim)-0;
        
        var hcanv = hcanvas;
        
        var u_multi = unit * zoom;
        
        // Calculate the main number interval
        var raw_m = 100 / u_multi;
        var multi = 1;
        for(var i = 0; i < r_intervals.length; i++) {
            var num = r_intervals[i];
            multi = num;
            if(raw_m <= num) {
                break;
            }
        }
        
        var big_int = multi * u_multi;

        // Set the canvas size to the width of the container
        hcanv.width = big_int;
        hcanv.height = big_int;
        var ctx = hcanv.getContext("2d");

        var ruler_d = 0; 
        var cur_d = .5;
        
        var part = big_int / 10;

        ctx.globalAlpha = 0.2;
        ctx.strokeStyle = "#000";
        for(var i = 1; i < 10; i++) {
            var sub_d = Math.round(part * i) + .5;
//                  var line_num = (i % 2)?12:10;
            var line_num = 0;
            ctx.moveTo(sub_d, big_int);
            ctx.lineTo(sub_d, line_num);
            ctx.moveTo(big_int, sub_d);
            ctx.lineTo(line_num ,sub_d);
        }
        ctx.stroke();
        ctx.beginPath();  
        ctx.globalAlpha = 0.5;
        ctx.moveTo(cur_d, big_int);
        ctx.lineTo(cur_d, 0);

        ctx.moveTo(big_int, cur_d);
        ctx.lineTo(0, cur_d);
        ctx.stroke();

        var datauri = hcanv.toDataURL('image/png');
        gridimg.setAttribute('width', big_int);
        gridimg.setAttribute('height', big_int);
        gridimg.parentNode.setAttribute('width', big_int);
        gridimg.parentNode.setAttribute('height', big_int);
        svgCanvas.setHref(gridimg, datauri);
    }

    return {
        name: "view_grid",
        zoomChanged: function(zoom) {
            // update size
            if(showGrid) updateGrid(zoom);
        },

        buttons: [{
            id: "view_grid",
            type: "menu",
            after: "tool_wireframe",
            panel: "view_menu",
            title: "View Grid",
            events: {
                'click': function() {
                    var gr = !$('#view_grid').hasClass('push_button_pressed');
                    if (gr) {
                        methodDraw.curConfig.showGrid = showGrid = true;
                        $('#view_grid').addClass('push_button_pressed');
                        $('#canvasGrid').attr('display', 'inline');
                        updateGrid(svgCanvas.getZoom());
                    }
                    else {
                        methodDraw.curConfig.showGrid = showGrid = false;
                        $('#view_grid').removeClass('push_button_pressed');
                        $('#canvasGrid').attr('display', 'none');
                    }
                }
            }
}]
        };
    });

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = 
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

/**
 *  Copyright (c) 2011 Zauber S.A. <http://www.zaubersoftware.com/>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 * 
 *  @author Guido Marucci Blas - guido@zaubersoftware.com
 *  @description Adds a handler for a custom event 'taphold' that handles a
 *  tap and hold on touch interfaces.
 */
(function($) {
    var TAP_AND_HOLD_TRIGGER_TIMER = 1000;
    var MAX_DISTANCE_ALLOWED_IN_TAP_AND_HOLD_EVENT = 5;
    var TOUCHSTART = "touchstart";
    var TOUCHEND = "touchend";
    var TOUCHMOVE = "touchmove";

    // For debugging only
    // var TOUCHSTART = "mousedown";
    // var TOUCHEND = "mouseup";
    // var TOUCHMOVE = "mousemove";

    var tapAndHoldTimer = null;

    function calculateEuclideanDistance(x1, y1, x2, y2) {
        var diffX = (x2 - x1);
        var diffY = (y2 - y1);
        return Math.sqrt((diffX * diffX) + (diffY * diffY));
    };

    function onTouchStart(event) {
        var e = event.originalEvent;

        // Only start detector if and only if one finger is over the widget
        if (!e.touches || (e.targetTouches.length === 1 && e.touches.length === 1)) {
            startTapAndHoldDetector.call(this, event)
            var element = $(this);
            element.bind(TOUCHMOVE, onTouchMove);
            element.bind(TOUCHEND, onTouchEnd); 
        } else {
            stopTapAndHoldDetector.call(this);
        }   
    };

    function onTouchMove(event) {
        if (tapAndHoldTimer == null) {
            return;
        }

        var e = event.originalEvent;
        var x = (e.changedTouches) ? e.changedTouches[0].pageX: e.pageX;
        var y = (e.changedTouches) ? e.changedTouches[0].pageY: e.pageY;
        
        var tapAndHoldPoint = $(this).data("taphold.point");
        var euclideanDistance = calculateEuclideanDistance(tapAndHoldPoint.x, tapAndHoldPoint.y, x, y);
                
        if (euclideanDistance > MAX_DISTANCE_ALLOWED_IN_TAP_AND_HOLD_EVENT) {
            stopTapAndHoldDetector.call(this);
        }
    };

    function onTouchEnd(event) {
        stopTapAndHoldDetector.call(this);
    };

    function onTapAndHold(event) {
        clear.call(this);
        $(this).data("taphold.handler").call(this, event);
    };

    function clear() {
        tapAndHoldTimer = null;
        $(this).unbind(TOUCHMOVE, onTouchMove);
        $(this).unbind(TOUCHEND, onTouchEnd);   
    };

    function startTapAndHoldDetector(event) {
        if (tapAndHoldTimer != null) {
            return;
        }
        var self = this;
        tapAndHoldTimer = setTimeout(function(){
            onTapAndHold.call(self, event)
        }, TAP_AND_HOLD_TRIGGER_TIMER);

        // Stores tap x & y
        var e = event.originalEvent;
        var tapAndHoldPoint = {};
        tapAndHoldPoint.x = (e.changedTouches) ? e.changedTouches[0].pageX: e.pageX;
        tapAndHoldPoint.y = (e.changedTouches) ? e.changedTouches[0].pageY: e.pageY;
        $(this).data("taphold.point", tapAndHoldPoint);
    };

    function stopTapAndHoldDetector() {
        clearTimeout(tapAndHoldTimer);
        clear.call(this);   
    };

    $.event.special["taphold"] = {
        setup: function() {
            
        },

        add: function(handleObj) {
            $(this).data("taphold.handler", handleObj.handler);
            if (handleObj.data) {
                $(this).bind(TOUCHSTART, handleObj.data, onTouchStart);
            } else {
                $(this).bind(TOUCHSTART, onTouchStart);
            }
        },

        remove: function(handleObj) {
            stopTapAndHoldDetector.call(this);
            if (handleObj.data) {
                $(this).unbind(TOUCHSTART, handleObj.data, onTouchStart);
            } else {
                $(this).unbind(TOUCHSTART, onTouchStart);
            }
        },

        teardown: function() {
            
        }
    };

})(jQuery);
/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.1.20151003
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
  "use strict";
  // IE <10 is explicitly unsupported
  if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
    return;
  }
  var
      doc = view.document
      // only get URL when necessary in case Blob.js hasn't overridden it yet
    , get_URL = function() {
      return view.URL || view.webkitURL || view;
    }
    , save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
    , can_use_save_link = "download" in save_link
    , click = function(node) {
      var event = new MouseEvent("click");
      node.dispatchEvent(event);
    }
    , is_safari = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent)
    , webkit_req_fs = view.webkitRequestFileSystem
    , req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
    , throw_outside = function(ex) {
      (view.setImmediate || view.setTimeout)(function() {
        throw ex;
      }, 0);
    }
    , force_saveable_type = "application/octet-stream"
    , fs_min_size = 0
    // See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
    // https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
    // for the reasoning behind the timeout and revocation flow
    , arbitrary_revoke_timeout = 500 // in ms
    , revoke = function(file) {
      var revoker = function() {
        if (typeof file === "string") { // file is an object URL
          get_URL().revokeObjectURL(file);
        } else { // file is a File
          file.remove();
        }
      };
      if (view.chrome) {
        revoker();
      } else {
        setTimeout(revoker, arbitrary_revoke_timeout);
      }
    }
    , dispatch = function(filesaver, event_types, event) {
      event_types = [].concat(event_types);
      var i = event_types.length;
      while (i--) {
        var listener = filesaver["on" + event_types[i]];
        if (typeof listener === "function") {
          try {
            listener.call(filesaver, event || filesaver);
          } catch (ex) {
            throw_outside(ex);
          }
        }
      }
    }
    , auto_bom = function(blob) {
      // prepend BOM for UTF-8 XML and text/* types (including HTML)
      if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
        return new Blob(["\ufeff", blob], {type: blob.type});
      }
      return blob;
    }
    , FileSaver = function(blob, name, no_auto_bom) {
      if (!no_auto_bom) {
        blob = auto_bom(blob);
      }
      // First try a.download, then web filesystem, then object URLs
      var
          filesaver = this
        , type = blob.type
        , blob_changed = false
        , object_url
        , target_view
        , dispatch_all = function() {
          dispatch(filesaver, "writestart progress write writeend".split(" "));
        }
        // on any filesys errors revert to saving with object URLs
        , fs_error = function() {
          if (target_view && is_safari && typeof FileReader !== "undefined") {
            // Safari doesn't allow downloading of blob urls
            var reader = new FileReader();
            reader.onloadend = function() {
              var base64Data = reader.result;
              target_view.location.href = "data:attachment/file" + base64Data.slice(base64Data.search(/[,;]/));
              filesaver.readyState = filesaver.DONE;
              dispatch_all();
            };
            reader.readAsDataURL(blob);
            filesaver.readyState = filesaver.INIT;
            return;
          }
          // don't create more object URLs than needed
          if (blob_changed || !object_url) {
            object_url = get_URL().createObjectURL(blob);
          }
          if (target_view) {
            target_view.location.href = object_url;
          } else {
            var new_tab = view.open(object_url, "_blank");
            if (new_tab == undefined && is_safari) {
              //Apple do not allow window.open, see http://bit.ly/1kZffRI
              view.location.href = object_url
            }
          }
          filesaver.readyState = filesaver.DONE;
          dispatch_all();
          revoke(object_url);
        }
        , abortable = function(func) {
          return function() {
            if (filesaver.readyState !== filesaver.DONE) {
              return func.apply(this, arguments);
            }
          };
        }
        , create_if_not_found = {create: true, exclusive: false}
        , slice
      ;
      filesaver.readyState = filesaver.INIT;
      if (!name) {
        name = "download";
      }
      if (can_use_save_link) {
        object_url = get_URL().createObjectURL(blob);
        setTimeout(function() {
          save_link.href = object_url;
          save_link.download = name;
          click(save_link);
          dispatch_all();
          revoke(object_url);
          filesaver.readyState = filesaver.DONE;
        });
        return;
      }
      // Object and web filesystem URLs have a problem saving in Google Chrome when
      // viewed in a tab, so I force save with application/octet-stream
      // http://code.google.com/p/chromium/issues/detail?id=91158
      // Update: Google errantly closed 91158, I submitted it again:
      // https://code.google.com/p/chromium/issues/detail?id=389642
      if (view.chrome && type && type !== force_saveable_type) {
        slice = blob.slice || blob.webkitSlice;
        blob = slice.call(blob, 0, blob.size, force_saveable_type);
        blob_changed = true;
      }
      // Since I can't be sure that the guessed media type will trigger a download
      // in WebKit, I append .download to the filename.
      // https://bugs.webkit.org/show_bug.cgi?id=65440
      if (webkit_req_fs && name !== "download") {
        name += ".download";
      }
      if (type === force_saveable_type || webkit_req_fs) {
        target_view = view;
      }
      if (!req_fs) {
        fs_error();
        return;
      }
      fs_min_size += blob.size;
      req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
        fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
          var save = function() {
            dir.getFile(name, create_if_not_found, abortable(function(file) {
              file.createWriter(abortable(function(writer) {
                writer.onwriteend = function(event) {
                  target_view.location.href = file.toURL();
                  filesaver.readyState = filesaver.DONE;
                  dispatch(filesaver, "writeend", event);
                  revoke(file);
                };
                writer.onerror = function() {
                  var error = writer.error;
                  if (error.code !== error.ABORT_ERR) {
                    fs_error();
                  }
                };
                "writestart progress write abort".split(" ").forEach(function(event) {
                  writer["on" + event] = filesaver["on" + event];
                });
                writer.write(blob);
                filesaver.abort = function() {
                  writer.abort();
                  filesaver.readyState = filesaver.DONE;
                };
                filesaver.readyState = filesaver.WRITING;
              }), fs_error);
            }), fs_error);
          };
          dir.getFile(name, {create: false}, abortable(function(file) {
            // delete file if it already exists
            file.remove();
            save();
          }), abortable(function(ex) {
            if (ex.code === ex.NOT_FOUND_ERR) {
              save();
            } else {
              fs_error();
            }
          }));
        }), fs_error);
      }), fs_error);
    }
    , FS_proto = FileSaver.prototype
    , saveAs = function(blob, name, no_auto_bom) {
      return new FileSaver(blob, name, no_auto_bom);
    }
  ;
  // IE 10+ (native saveAs)
  if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
    return function(blob, name, no_auto_bom) {
      if (!no_auto_bom) {
        blob = auto_bom(blob);
      }
      return navigator.msSaveOrOpenBlob(blob, name || "download");
    };
  }

  FS_proto.abort = function() {
    var filesaver = this;
    filesaver.readyState = filesaver.DONE;
    dispatch(filesaver, "abort");
  };
  FS_proto.readyState = FS_proto.INIT = 0;
  FS_proto.WRITING = 1;
  FS_proto.DONE = 2;

  FS_proto.error =
  FS_proto.onwritestart =
  FS_proto.onprogress =
  FS_proto.onwrite =
  FS_proto.onabort =
  FS_proto.onerror =
  FS_proto.onwriteend =
    null;

  return saveAs;
}(
     typeof self !== "undefined" && self
  || typeof window !== "undefined" && window
  || this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {
  define([], function() {
    return saveAs;
  });
}