webpackJsonp([0,3],{127:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(3),l=o(f),p=n(33),d=n(17),h=n(129),m=n(299),y=o(m),b=n(300),v=o(b),g=n(301),w=r(g),E=function(e){function t(){var e,n,r,o;s(this,t);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={charCount:140,tweet:"",regExMatches:[],usersSelected:{}},o=n,i(r,o)}return a(t,e),c(t,[{key:"onLeave",value:function(){h.hashHistory.push("/")}},{key:"onChangeTweet",value:function(e){var t=this.props.actions.clearPossibleUsers,n=this.state.regExMatches,r=e.target.value,o=140-r.length;this.setState({tweet:r,charCount:o}),this.checkTweet(r),""!==r&&n.length||t()}},{key:"onSelectUser",value:function(e){var t=this.props.actions.clearPossibleUsers,n=this.state,r=n.usersSelected,o=n.tweet,s=n.regExMatches,i=u({},r),a=o.replace(s[0],"@"+e.screen_name);this.setState({usersSelected:i,tweet:a}),t()}},{key:"checkTweet",value:function(e){var t=this.props.actions.fetchPossibleUsers,n=/\B@\w{2,}/gi,r=e.match(n);r&&1===r.length?(this.setState({regExMatches:r}),t(r[0])):this.setState({regExMatches:[]})}},{key:"renderTweetFooter",value:function(){var e=this.state.charCount;return l.default.createElement("div",{className:"pull-right tweetFooter"},l.default.createElement("p",null,e),l.default.createElement("button",{className:"btn btn-primary"},"Tweet"))}},{key:"renderCloseIcon",value:function(){return l.default.createElement("div",{className:"row closeIconWrapper"},l.default.createElement("div",{className:"col-xs-12"},l.default.createElement("i",{className:"material-icons",onClick:this.onLeave.bind(this)},"close")))}},{key:"render",value:function(){var e=this.props.possibleUsers,t=this.state,n=t.userSelected,r=t.tweet;return l.default.createElement("div",{className:"content"},this.renderCloseIcon(),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-xs-8 col-xs-offset-2"},l.default.createElement(y.default,{onChange:this.onChangeTweet.bind(this),list:e,value:r,model:n,onSelect:this.onSelectUser.bind(this),component:v.default}),this.renderTweetFooter())))}}]),t}(f.Component),x=function(e,t){var n={possibleUsers:e.twitter.possibleUsers};return n},S=function(e){return{actions:u({},(0,d.bindActionCreators)({fetchPossibleUsers:w.fetchPossibleUsers,clearPossibleUsers:w.clearPossibleUsers},e))}};t.default=(0,p.connect)(x,S)(E)},272:function(e,t,n){"use strict";function r(e){return"[object Array]"===S.call(e)}function o(e){return"[object ArrayBuffer]"===S.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===S.call(e)}function p(e){return"[object File]"===S.call(e)}function d(e){return"[object Blob]"===S.call(e)}function h(e){return"[object Function]"===S.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function b(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function g(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)g(arguments[n],e);return t}function E(e,t,n){return g(t,function(t,r){n&&"function"==typeof t?e[r]=x(t,n):e[r]=t}),e}var x=n(278),S=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isFormData:s,isArrayBufferView:i,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:v,forEach:g,merge:w,extend:E,trim:b}},273:function(e,t,n){"use strict";(function(t){function r(e,t){!s.isUndefined(e)&&s.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(274):"undefined"!=typeof t&&(e=n(274)),e}var s=n(272),i=n(294),a=/^\)\]\}',?\n/,u={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:o(),transformRequest:[function(e,t){return i(t,"Content-Type"),s.isFormData(e)||s.isArrayBuffer(e)||s.isStream(e)||s.isFile(e)||s.isBlob(e)?e:s.isArrayBufferView(e)?e.buffer:s.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):s.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(a,"");try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},s.forEach(["delete","get","head"],function(e){c.headers[e]={}}),s.forEach(["post","put","patch"],function(e){c.headers[e]=s.merge(u)}),e.exports=c}).call(t,n(72))},274:function(e,t,n){"use strict";var r=n(272),o=n(286),s=n(289),i=n(295),a=n(293),u=n(277),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(288);e.exports=function(e){return new Promise(function(t,f){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var y=e.auth.username||"",b=e.auth.password||"";p.Authorization="Basic "+c(y+":"+b)}if(d.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,s={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,f,s),d=null}},d.onerror=function(){f(u("Network Error",e)),d=null},d.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),d=null},r.isStandardBrowserEnv()){var v=n(291),g=(e.withCredentials||a(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){"undefined"==typeof l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(e){if("json"!==d.responseType)throw e}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===l&&(l=null),d.send(l)})}},275:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},276:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},277:function(e,t,n){"use strict";var r=n(285);e.exports=function(e,t,n,o){var s=new Error(e);return r(s,t,n,o)}},278:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},279:function(e,t,n){e.exports=n(280)},280:function(e,t,n){"use strict";function r(e){var t=new i(e),n=s(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(272),s=n(278),i=n(282),a=n(273),u=r(a);u.Axios=i,u.create=function(e){return r(o.merge(a,e))},u.Cancel=n(275),u.CancelToken=n(281),u.isCancel=n(276),u.all=function(e){return Promise.all(e)},u.spread=n(296),e.exports=u,e.exports.default=u},281:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(275);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},282:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(273),s=n(272),i=n(283),a=n(284),u=n(292),c=n(290);r.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),e=s.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},s.forEach(["delete","get","head"],function(e){r.prototype[e]=function(t,n){return this.request(s.merge(n||{},{method:e,url:t}))}}),s.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(s.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},283:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(272);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},284:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(272),s=n(287),i=n(276),a=n(273);e.exports=function(e){r(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return r(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},285:function(e,t,n){"use strict";e.exports=function(e,t,n,r){return e.config=t,n&&(e.code=n),e.response=r,e}},286:function(e,t,n){"use strict";var r=n(277);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n)):e(n)}},287:function(e,t,n){"use strict";var r=n(272);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},288:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),i="",a=0,u=s;o.charAt(0|a)||(u="=",a%1);i+=u.charAt(63&t>>8-a%1*8)){if(n=o.charCodeAt(a+=.75),n>255)throw new r;t=t<<8|n}return i}var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},289:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(272);e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),s=i.join("&")}return s&&(e+=(e.indexOf("?")===-1?"?":"&")+s),e}},290:function(e,t,n){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},291:function(e,t,n){"use strict";var r=n(272);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},292:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},293:function(e,t,n){"use strict";var r=n(272);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},294:function(e,t,n){"use strict";var r=n(272);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},295:function(e,t,n){"use strict";var r=n(272);e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(s[t]=s[t]?s[t]+", "+n:n)}),s):s}},296:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},297:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(){return{type:c.FETCH_USERS_REQUEST}}function s(e){return{type:c.FETCH_USERS_SUCCESS,payload:e}}function i(e){return{type:c.FETCH_USERS_ERROR,error:e}}function a(){return{type:c.CLEAR_USERS}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchUsers=o,t.fetchUsersSuccess=s,t.fetchUsersError=i,t.clearUsers=a;var u=n(126),c=r(u)},298:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(3),f=r(c),l=function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"onClick",value:function(){this.props.onClick(this.props.model)}},{key:"renderItem",value:function e(){var t=this.props,n=t.model,r=t.component,e=void 0;return e=r?f.default.createElement(this.props.component,{model:n}):"object"!==("undefined"==typeof n?"undefined":a(n))?n:Object.keys(n).map(function(e){return f.default.createElement("p",{key:"item-"+e},f.default.createElement("strong",null,e)," : ",n[e])})}},{key:"render",value:function(){return f.default.createElement("div",{onClick:this.onClick.bind(this),className:this.props.className},this.renderItem())}}]),t}(c.Component);l.propTypes={model:c.PropTypes.any,onClick:c.PropTypes.func,component:c.PropTypes.func,className:c.PropTypes.string},t.default=l},299:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(3),c=r(u),f=n(128),l=r(f),p=n(298),d=r(p);n(304);var h=function(e){function t(){var e,n,r,i;o(this,t);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={show:!1,number:-1},i=n,s(r,i)}return i(t,e),a(t,[{key:"onChange",value:function(e){this.props.onChange(e),this.setState({show:!0})}},{key:"onSelect",value:function(e){this.hideList(),this.props.onSelect(e)}},{key:"onKeyDown",value:function(e){var t=this.state,n=t.number,r=t.show,o=this.props.list,s=o.length&&r,i=40===e.keyCode&&n<o.length-1,a=38===e.keyCode&&n>-1,u=13===e.keyCode;s&&i&&(e.preventDefault(),this.setState({number:n+1})),s&&a&&(e.preventDefault(),this.setState({number:n-1})),s&&u&&(e.preventDefault(),this.onSelect(o[n]),this.setState({number:-1}))}},{key:"hideList",value:function(){this.setState({show:!1})}},{key:"renderList",value:function(e){var t=this,n=e.map(function(e,n){return c.default.createElement(d.default,{key:n,model:e,onClick:t.onSelect.bind(t),component:t.props.component,className:(0,l.default)({keySelect:n===t.state.number})})});return c.default.createElement("div",{className:"selectionList"},n)}},{key:"renderInput",value:function(){var e=this.props.value;return c.default.createElement("textarea",{className:"form-control",onChange:this.onChange.bind(this),value:e,onKeyDown:this.onKeyDown.bind(this),placeholder:"Whatup doe?"})}},{key:"render",value:function(){var e=this.props,t=e.label,n=e.list,r=this.state.show;return c.default.createElement("div",null,t,this.renderInput(),r&&n.length?this.renderList(n):"")}}]),t}(u.Component);h.propTypes={label:u.PropTypes.string,onChange:u.PropTypes.func,value:u.PropTypes.any,list:u.PropTypes.array,onSelect:u.PropTypes.func,component:u.PropTypes.func},t.default=h},300:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(3),c=r(u);n(305);var f=function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props.model;if(e)return c.default.createElement("p",{className:"singleUserSelection"},c.default.createElement("img",{src:e.profile_image_url,alt:e.name}),c.default.createElement("strong",null,"@",e.screen_name),c.default.createElement("span",null,e.name))}}]),t}(u.Component);f.propTypes={model:u.PropTypes.object},t.default=f},301:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return function(t){var n="https://alt-tweet-be.herokuapp.com/user/search?username="+e;t(f.fetchUsers()),u.default.get(n).then(function(e){t(f.fetchUsersSuccess(e.data.users))}).catch(function(e){t(f.fetchUsersError(e.data))})}}function i(){return function(e){e(f.clearUsers())}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPossibleUsers=s,t.clearPossibleUsers=i;var a=n(279),u=o(a),c=n(297),f=r(c)},302:function(e,t,n){t=e.exports=n(124)(),t.push([e.i,"body,html{width:100%;height:100%;margin:0;padding:0}body{font-family:Josefin Sans,Helvetica,sans-serif}i{-webkit-transition:-webkit-transform .8s ease-in-out;transition:transform .8s ease-in-out;font-size:30px!important}i:hover{cursor:pointer;-webkit-transform:rotate(1turn);transform:rotate(1turn)}.form-control{font-size:24px;height:48px;border-radius:0;box-shadow:none;border:3px solid #08ffde}.btn{border-radius:0;padding:8px 20px;font-size:16px;font-family:Helvetica}.btn-primary{background-color:transparent;border-color:#12b8ff;color:#12b8ff}.btn-primary:hover{background-color:#12b8ff;border-color:#12b8ff}.selectionList{max-height:30rem;overflow:auto;border:3px solid #08ffde;padding:.2rem .5rem}.keySelect{background-color:#efffa1}",""])},303:function(e,t,n){t=e.exports=n(124)(),t.push([e.i,"body,html{width:100%;height:100%;margin:0;padding:0}body{font-family:Josefin Sans,Helvetica,sans-serif}i{-webkit-transition:-webkit-transform .8s ease-in-out;transition:transform .8s ease-in-out;font-size:30px!important}i:hover{cursor:pointer;-webkit-transform:rotate(1turn);transform:rotate(1turn)}.form-control{font-size:24px;height:48px;border-radius:0;box-shadow:none;border:3px solid #08ffde}.btn{border-radius:0;padding:8px 20px;font-size:16px;font-family:Helvetica}.btn-primary{background-color:transparent;border-color:#12b8ff;color:#12b8ff}.btn-primary:hover{background-color:#12b8ff;border-color:#12b8ff}.container{color:#122038}.closeIconWrapper{margin-bottom:10rem}.closeIconWrapper i{color:#c5ee00;float:right}.singleUserSelection{font-family:Helvetica;padding:.5rem 0}.singleUserSelection img,.singleUserSelection strong{margin-right:1.5rem}.singleUserSelection:hover{background-color:#efffa1}.tweetFooter{margin-top:4rem}.tweetFooter p{display:inline-block;margin:0 3rem;font-size:18px}",""])},304:function(e,t,n){var r=n(302);"string"==typeof r&&(r=[[e.i,r,""]]);n(125)(r,{});r.locals&&(e.exports=r.locals)},305:function(e,t,n){var r=n(303);"string"==typeof r&&(r=[[e.i,r,""]]);n(125)(r,{});r.locals&&(e.exports=r.locals)}});