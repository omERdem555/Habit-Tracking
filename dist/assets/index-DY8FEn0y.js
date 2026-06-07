(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Qv={exports:{}},ku={},Yv={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),U0=Symbol.for("react.portal"),j0=Symbol.for("react.fragment"),$0=Symbol.for("react.strict_mode"),z0=Symbol.for("react.profiler"),B0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),W0=Symbol.for("react.forward_ref"),K0=Symbol.for("react.suspense"),q0=Symbol.for("react.memo"),G0=Symbol.for("react.lazy"),Vg=Symbol.iterator;function Q0(t){return t===null||typeof t!="object"?null:(t=Vg&&t[Vg]||t["@@iterator"],typeof t=="function"?t:null)}var Jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xv=Object.assign,Zv={};function gs(t,e,n){this.props=t,this.context=e,this.refs=Zv,this.updater=n||Jv}gs.prototype.isReactComponent={};gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function e_(){}e_.prototype=gs.prototype;function Gd(t,e,n){this.props=t,this.context=e,this.refs=Zv,this.updater=n||Jv}var Qd=Gd.prototype=new e_;Qd.constructor=Gd;Xv(Qd,gs.prototype);Qd.isPureReactComponent=!0;var Mg=Array.isArray,t_=Object.prototype.hasOwnProperty,Yd={current:null},n_={key:!0,ref:!0,__self:!0,__source:!0};function r_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)t_.call(e,r)&&!n_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ua,type:t,key:s,ref:o,props:i,_owner:Yd.current}}function Y0(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function J0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fg=/\/+/g;function Cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J0(""+t.key):e.toString(36)}function cl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case U0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cc(o,0):r,Mg(i)?(n="",t!=null&&(n=t.replace(Fg,"$&/")+"/"),cl(i,e,n,"",function(c){return c})):i!=null&&(Jd(i)&&(i=Y0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Cc(s,l);o+=cl(s,e,n,u,i)}else if(u=Q0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Cc(s,l++),o+=cl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ja(t,e,n){if(t==null)return t;var r=[],i=0;return cl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function X0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},hl={transition:null},Z0={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:hl,ReactCurrentOwner:Yd};function i_(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:ja,forEach:function(t,e,n){ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ja(t,function(){e++}),e},toArray:function(t){return ja(t,function(e){return e})||[]},only:function(t){if(!Jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=gs;ae.Fragment=j0;ae.Profiler=z0;ae.PureComponent=Gd;ae.StrictMode=$0;ae.Suspense=K0;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0;ae.act=i_;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)t_.call(e,u)&&!n_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ua,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:H0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B0,_context:t},t.Consumer=t};ae.createElement=r_;ae.createFactory=function(t){var e=r_.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:W0,render:t}};ae.isValidElement=Jd;ae.lazy=function(t){return{$$typeof:G0,_payload:{_status:-1,_result:t},_init:X0}};ae.memo=function(t,e){return{$$typeof:q0,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};ae.unstable_act=i_;ae.useCallback=function(t,e){return mt.current.useCallback(t,e)};ae.useContext=function(t){return mt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return mt.current.useEffect(t,e)};ae.useId=function(){return mt.current.useId()};ae.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return mt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};ae.useRef=function(t){return mt.current.useRef(t)};ae.useState=function(t){return mt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return mt.current.useTransition()};ae.version="18.3.1";Yv.exports=ae;var B=Yv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eI=B,tI=Symbol.for("react.element"),nI=Symbol.for("react.fragment"),rI=Object.prototype.hasOwnProperty,iI=eI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sI={key:!0,ref:!0,__self:!0,__source:!0};function s_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rI.call(e,r)&&!sI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tI,type:t,key:s,ref:o,props:i,_owner:iI.current}}ku.Fragment=nI;ku.jsx=s_;ku.jsxs=s_;Qv.exports=ku;var P=Qv.exports,Th={},o_={exports:{}},xt={},a_={exports:{}},l_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,W){var Z=$.length;$.push(W);e:for(;0<Z;){var ne=Z-1>>>1,de=$[ne];if(0<i(de,W))$[ne]=W,$[Z]=de,Z=ne;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var W=$[0],Z=$.pop();if(Z!==W){$[0]=Z;e:for(var ne=0,de=$.length,ct=de>>>1;ne<ct;){var Qe=2*(ne+1)-1,Dt=$[Qe],kt=Qe+1,nn=$[kt];if(0>i(Dt,Z))kt<de&&0>i(nn,Dt)?($[ne]=nn,$[kt]=Z,ne=kt):($[ne]=Dt,$[Qe]=Z,ne=Qe);else if(kt<de&&0>i(nn,Z))$[ne]=nn,$[kt]=Z,ne=kt;else break e}}return W}function i($,W){var Z=$.sortIndex-W.sortIndex;return Z!==0?Z:$.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,d=null,g=3,_=!1,A=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k($){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=$)r(c),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(c)}}function D($){if(N=!1,k($),!A)if(n(u)!==null)A=!0,fe(M);else{var W=n(c);W!==null&&_e(D,W.startTime-$)}}function M($,W){A=!1,N&&(N=!1,I(y),y=-1),_=!0;var Z=g;try{for(k(W),d=n(u);d!==null&&(!(d.expirationTime>W)||$&&!C());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,g=d.priorityLevel;var de=ne(d.expirationTime<=W);W=t.unstable_now(),typeof de=="function"?d.callback=de:d===n(u)&&r(u),k(W)}else r(u);d=n(u)}if(d!==null)var ct=!0;else{var Qe=n(c);Qe!==null&&_e(D,Qe.startTime-W),ct=!1}return ct}finally{d=null,g=Z,_=!1}}var U=!1,E=null,y=-1,T=5,S=-1;function C(){return!(t.unstable_now()-S<T)}function R(){if(E!==null){var $=t.unstable_now();S=$;var W=!0;try{W=E(!0,$)}finally{W?v():(U=!1,E=null)}}else U=!1}var v;if(typeof w=="function")v=function(){w(R)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ue=q.port2;q.port1.onmessage=R,v=function(){ue.postMessage(null)}}else v=function(){O(R,0)};function fe($){E=$,U||(U=!0,v())}function _e($,W){y=O(function(){$(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){A||_||(A=!0,fe(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var W=3;break;default:W=g}var Z=g;g=W;try{return $()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,W){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=g;g=$;try{return W()}finally{g=Z}},t.unstable_scheduleCallback=function($,W,Z){var ne=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ne+Z:ne):Z=ne,$){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Z+de,$={id:f++,callback:W,priorityLevel:$,startTime:Z,expirationTime:de,sortIndex:-1},Z>ne?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(N?(I(y),y=-1):N=!0,_e(D,Z-ne))):($.sortIndex=de,e(u,$),A||_||(A=!0,fe(M))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var W=g;return function(){var Z=g;g=W;try{return $.apply(this,arguments)}finally{g=Z}}}})(l_);a_.exports=l_;var oI=a_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aI=B,Nt=oI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u_=new Set,xo={};function fi(t,e){ns(t,e),ns(t+"Capture",e)}function ns(t,e){for(xo[t]=e,t=0;t<e.length;t++)u_.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sh=Object.prototype.hasOwnProperty,lI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ug={},jg={};function uI(t){return Sh.call(jg,t)?!0:Sh.call(Ug,t)?!1:lI.test(t)?jg[t]=!0:(Ug[t]=!0,!1)}function cI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hI(t,e,n,r){if(e===null||typeof e>"u"||cI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,Zd);et[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,Zd);et[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,Zd);et[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hI(e,n,i,r)&&(n=null),r||i===null?uI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=aI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),xi=Symbol.for("react.portal"),bi=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),Ih=Symbol.for("react.profiler"),c_=Symbol.for("react.provider"),h_=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),kh=Symbol.for("react.suspense"),Ah=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),d_=Symbol.for("react.offscreen"),$g=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=$g&&t[$g]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Rc;function to(t){if(Rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var Pc=!1;function Nc(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function dI(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=Nc(t.type,!1),t;case 11:return t=Nc(t.type.render,!1),t;case 1:return t=Nc(t.type,!0),t;default:return""}}function Ch(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bi:return"Fragment";case xi:return"Portal";case Ih:return"Profiler";case tf:return"StrictMode";case kh:return"Suspense";case Ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case h_:return(t.displayName||"Context")+".Consumer";case c_:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:Ch(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Ch(t(e))}catch{}}return null}function fI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ch(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function f_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pI(t){var e=f_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=pI(t))}function p_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=f_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rh(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g_(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function Ph(t,e){g_(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nh(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nh(t,e,n){(e!=="number"||bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function Hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(no(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function m_(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function y_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?y_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,v_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gI=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){gI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function __(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function w_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=__(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var mI=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dh(t,e){if(e){if(mI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Oh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lh=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vh=null,Wi=null,Ki=null;function Kg(t){if(t=da(t)){if(typeof Vh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Nu(e),Vh(t.stateNode,t.type,e))}}function E_(t){Wi?Ki?Ki.push(t):Ki=[t]:Wi=t}function T_(){if(Wi){var t=Wi,e=Ki;if(Ki=Wi=null,Kg(t),e)for(t=0;t<e.length;t++)Kg(e[t])}}function S_(t,e){return t(e)}function I_(){}var xc=!1;function k_(t,e,n){if(xc)return t(e,n);xc=!0;try{return S_(t,e,n)}finally{xc=!1,(Wi!==null||Ki!==null)&&(I_(),T_())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var r=Nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Mh=!1;if(Mn)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){Mh=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{Mh=!1}function yI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var fo=!1,Dl=null,Ol=!1,Fh=null,vI={onError:function(t){fo=!0,Dl=t}};function _I(t,e,n,r,i,s,o,l,u){fo=!1,Dl=null,yI.apply(vI,arguments)}function wI(t,e,n,r,i,s,o,l,u){if(_I.apply(this,arguments),fo){if(fo){var c=Dl;fo=!1,Dl=null}else throw Error(F(198));Ol||(Ol=!0,Fh=c)}}function pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function A_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qg(t){if(pi(t)!==t)throw Error(F(188))}function EI(t){var e=t.alternate;if(!e){if(e=pi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qg(i),t;if(s===r)return qg(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function C_(t){return t=EI(t),t!==null?R_(t):null}function R_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=R_(t);if(e!==null)return e;t=t.sibling}return null}var P_=Nt.unstable_scheduleCallback,Gg=Nt.unstable_cancelCallback,TI=Nt.unstable_shouldYield,SI=Nt.unstable_requestPaint,Oe=Nt.unstable_now,II=Nt.unstable_getCurrentPriorityLevel,of=Nt.unstable_ImmediatePriority,N_=Nt.unstable_UserBlockingPriority,Ll=Nt.unstable_NormalPriority,kI=Nt.unstable_LowPriority,x_=Nt.unstable_IdlePriority,Au=null,hn=null;function AI(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Au,t,void 0,(t.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:PI,CI=Math.log,RI=Math.LN2;function PI(t){return t>>>=0,t===0?32:31-(CI(t)/RI|0)|0}var Ha=64,Wa=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ro(l):(s&=o,s!==0&&(r=ro(s)))}else o=n&~i,o!==0?r=ro(o):s!==0&&(r=ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yt(e),i=1<<n,r|=t[n],e&=~i;return r}function NI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=NI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Uh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function b_(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yt(e),t[e]=n}function bI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function D_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var O_,lf,L_,V_,M_,jh=!1,Ka=[],cr=null,hr=null,dr=null,Oo=new Map,Lo=new Map,nr=[],DI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qg(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(e.pointerId)}}function qs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=da(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function OI(t,e,n,r,i){switch(e){case"focusin":return cr=qs(cr,t,e,n,r,i),!0;case"dragenter":return hr=qs(hr,t,e,n,r,i),!0;case"mouseover":return dr=qs(dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oo.set(s,qs(Oo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Lo.set(s,qs(Lo.get(s)||null,t,e,n,r,i)),!0}return!1}function F_(t){var e=Kr(t.target);if(e!==null){var n=pi(e);if(n!==null){if(e=n.tag,e===13){if(e=A_(n),e!==null){t.blockedOn=e,M_(t.priority,function(){L_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$h(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lh=r,n.target.dispatchEvent(r),Lh=null}else return e=da(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function Yg(t,e,n){dl(t)&&n.delete(e)}function LI(){jh=!1,cr!==null&&dl(cr)&&(cr=null),hr!==null&&dl(hr)&&(hr=null),dr!==null&&dl(dr)&&(dr=null),Oo.forEach(Yg),Lo.forEach(Yg)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,jh||(jh=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,LI)))}function Vo(t){function e(i){return Gs(i,t)}if(0<Ka.length){Gs(Ka[0],t);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cr!==null&&Gs(cr,t),hr!==null&&Gs(hr,t),dr!==null&&Gs(dr,t),Oo.forEach(e),Lo.forEach(e),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)F_(n),n.blockedOn===null&&nr.shift()}var qi=Wn.ReactCurrentBatchConfig,Ml=!0;function VI(t,e,n,r){var i=ge,s=qi.transition;qi.transition=null;try{ge=1,uf(t,e,n,r)}finally{ge=i,qi.transition=s}}function MI(t,e,n,r){var i=ge,s=qi.transition;qi.transition=null;try{ge=4,uf(t,e,n,r)}finally{ge=i,qi.transition=s}}function uf(t,e,n,r){if(Ml){var i=$h(t,e,n,r);if(i===null)zc(t,e,r,Fl,n),Qg(t,r);else if(OI(i,t,e,n,r))r.stopPropagation();else if(Qg(t,r),e&4&&-1<DI.indexOf(t)){for(;i!==null;){var s=da(i);if(s!==null&&O_(s),s=$h(t,e,n,r),s===null&&zc(t,e,r,Fl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zc(t,e,r,null,n)}}var Fl=null;function $h(t,e,n,r){if(Fl=null,t=sf(r),t=Kr(t),t!==null)if(e=pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=A_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function U_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(II()){case of:return 1;case N_:return 4;case Ll:case kI:return 16;case x_:return 536870912;default:return 16}default:return 16}}var lr=null,cf=null,fl=null;function j_(){if(fl)return fl;var t,e=cf,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fl=i.slice(t,1<r?1-r:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Jg(){return!1}function bt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Jg,this.isPropagationStopped=Jg,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=bt(ms),ha=Ne({},ms,{view:0,detail:0}),FI=bt(ha),Dc,Oc,Qs,Cu=Ne({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(Dc=t.screenX-Qs.screenX,Oc=t.screenY-Qs.screenY):Oc=Dc=0,Qs=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),Xg=bt(Cu),UI=Ne({},Cu,{dataTransfer:0}),jI=bt(UI),$I=Ne({},ha,{relatedTarget:0}),Lc=bt($I),zI=Ne({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),BI=bt(zI),HI=Ne({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WI=bt(HI),KI=Ne({},ms,{data:0}),Zg=bt(KI),qI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QI[t])?!!e[t]:!1}function df(){return YI}var JI=Ne({},ha,{key:function(t){if(t.key){var e=qI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XI=bt(JI),ZI=Ne({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=bt(ZI),ek=Ne({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),tk=bt(ek),nk=Ne({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),rk=bt(nk),ik=Ne({},Cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sk=bt(ik),ok=[9,13,27,32],ff=Mn&&"CompositionEvent"in window,po=null;Mn&&"documentMode"in document&&(po=document.documentMode);var ak=Mn&&"TextEvent"in window&&!po,$_=Mn&&(!ff||po&&8<po&&11>=po),tm=" ",nm=!1;function z_(t,e){switch(t){case"keyup":return ok.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Di=!1;function lk(t,e){switch(t){case"compositionend":return B_(e);case"keypress":return e.which!==32?null:(nm=!0,tm);case"textInput":return t=e.data,t===tm&&nm?null:t;default:return null}}function uk(t,e){if(Di)return t==="compositionend"||!ff&&z_(t,e)?(t=j_(),fl=cf=lr=null,Di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $_&&e.locale!=="ko"?null:e.data;default:return null}}var ck={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ck[t.type]:e==="textarea"}function H_(t,e,n,r){E_(r),e=Ul(e,"onChange"),0<e.length&&(n=new hf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var go=null,Mo=null;function hk(t){tw(t,0)}function Ru(t){var e=Vi(t);if(p_(e))return t}function dk(t,e){if(t==="change")return e}var W_=!1;if(Mn){var Vc;if(Mn){var Mc="oninput"in document;if(!Mc){var im=document.createElement("div");im.setAttribute("oninput","return;"),Mc=typeof im.oninput=="function"}Vc=Mc}else Vc=!1;W_=Vc&&(!document.documentMode||9<document.documentMode)}function sm(){go&&(go.detachEvent("onpropertychange",K_),Mo=go=null)}function K_(t){if(t.propertyName==="value"&&Ru(Mo)){var e=[];H_(e,Mo,t,sf(t)),k_(hk,e)}}function fk(t,e,n){t==="focusin"?(sm(),go=e,Mo=n,go.attachEvent("onpropertychange",K_)):t==="focusout"&&sm()}function pk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ru(Mo)}function gk(t,e){if(t==="click")return Ru(e)}function mk(t,e){if(t==="input"||t==="change")return Ru(e)}function yk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:yk;function Fo(t,e){if(Zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sh.call(e,i)||!Zt(t[i],e[i]))return!1}return!0}function om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function am(t,e){var n=om(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=om(n)}}function q_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?q_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function G_(){for(var t=window,e=bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bl(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vk(t){var e=G_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&q_(n.ownerDocument.documentElement,n)){if(r!==null&&pf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=am(n,s);var o=am(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _k=Mn&&"documentMode"in document&&11>=document.documentMode,Oi=null,zh=null,mo=null,Bh=!1;function lm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bh||Oi==null||Oi!==bl(r)||(r=Oi,"selectionStart"in r&&pf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Fo(mo,r)||(mo=r,r=Ul(zh,"onSelect"),0<r.length&&(e=new hf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Oi)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Li={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Fc={},Q_={};Mn&&(Q_=document.createElement("div").style,"AnimationEvent"in window||(delete Li.animationend.animation,delete Li.animationiteration.animation,delete Li.animationstart.animation),"TransitionEvent"in window||delete Li.transitionend.transition);function Pu(t){if(Fc[t])return Fc[t];if(!Li[t])return t;var e=Li[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Q_)return Fc[t]=e[n];return t}var Y_=Pu("animationend"),J_=Pu("animationiteration"),X_=Pu("animationstart"),Z_=Pu("transitionend"),ew=new Map,um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){ew.set(t,e),fi(e,[t])}for(var Uc=0;Uc<um.length;Uc++){var jc=um[Uc],wk=jc.toLowerCase(),Ek=jc[0].toUpperCase()+jc.slice(1);Nr(wk,"on"+Ek)}Nr(Y_,"onAnimationEnd");Nr(J_,"onAnimationIteration");Nr(X_,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(Z_,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tk=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function cm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wI(r,e,void 0,t),t.currentTarget=null}function tw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;cm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;cm(i,l,c),s=u}}}if(Ol)throw t=Fh,Ol=!1,Fh=null,t}function Ee(t,e){var n=e[Gh];n===void 0&&(n=e[Gh]=new Set);var r=t+"__bubble";n.has(r)||(nw(e,t,2,!1),n.add(r))}function $c(t,e,n){var r=0;e&&(r|=4),nw(n,t,r,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[Qa]){t[Qa]=!0,u_.forEach(function(n){n!=="selectionchange"&&(Tk.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,$c("selectionchange",!1,e))}}function nw(t,e,n,r){switch(U_(e)){case 1:var i=VI;break;case 4:i=MI;break;default:i=uf}n=i.bind(null,e,n,t),i=void 0,!Mh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}k_(function(){var c=s,f=sf(n),d=[];e:{var g=ew.get(t);if(g!==void 0){var _=hf,A=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":_=XI;break;case"focusin":A="focus",_=Lc;break;case"focusout":A="blur",_=Lc;break;case"beforeblur":case"afterblur":_=Lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Xg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=jI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=tk;break;case Y_:case J_:case X_:_=BI;break;case Z_:_=rk;break;case"scroll":_=FI;break;case"wheel":_=sk;break;case"copy":case"cut":case"paste":_=WI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=em}var N=(e&4)!==0,O=!N&&t==="scroll",I=N?g!==null?g+"Capture":null:g;N=[];for(var w=c,k;w!==null;){k=w;var D=k.stateNode;if(k.tag===5&&D!==null&&(k=D,I!==null&&(D=Do(w,I),D!=null&&N.push(jo(w,D,k)))),O)break;w=w.return}0<N.length&&(g=new _(g,A,null,n,f),d.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==Lh&&(A=n.relatedTarget||n.fromElement)&&(Kr(A)||A[Fn]))break e;if((_||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,_?(A=n.relatedTarget||n.toElement,_=c,A=A?Kr(A):null,A!==null&&(O=pi(A),A!==O||A.tag!==5&&A.tag!==6)&&(A=null)):(_=null,A=c),_!==A)){if(N=Xg,D="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(N=em,D="onPointerLeave",I="onPointerEnter",w="pointer"),O=_==null?g:Vi(_),k=A==null?g:Vi(A),g=new N(D,w+"leave",_,n,f),g.target=O,g.relatedTarget=k,D=null,Kr(f)===c&&(N=new N(I,w+"enter",A,n,f),N.target=k,N.relatedTarget=O,D=N),O=D,_&&A)t:{for(N=_,I=A,w=0,k=N;k;k=Ii(k))w++;for(k=0,D=I;D;D=Ii(D))k++;for(;0<w-k;)N=Ii(N),w--;for(;0<k-w;)I=Ii(I),k--;for(;w--;){if(N===I||I!==null&&N===I.alternate)break t;N=Ii(N),I=Ii(I)}N=null}else N=null;_!==null&&hm(d,g,_,N,!1),A!==null&&O!==null&&hm(d,O,A,N,!0)}}e:{if(g=c?Vi(c):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var M=dk;else if(rm(g))if(W_)M=mk;else{M=pk;var U=fk}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=gk);if(M&&(M=M(t,c))){H_(d,M,n,f);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Nh(g,"number",g.value)}switch(U=c?Vi(c):window,t){case"focusin":(rm(U)||U.contentEditable==="true")&&(Oi=U,zh=c,mo=null);break;case"focusout":mo=zh=Oi=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,lm(d,n,f);break;case"selectionchange":if(_k)break;case"keydown":case"keyup":lm(d,n,f)}var E;if(ff)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Di?z_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&($_&&n.locale!=="ko"&&(Di||y!=="onCompositionStart"?y==="onCompositionEnd"&&Di&&(E=j_()):(lr=f,cf="value"in lr?lr.value:lr.textContent,Di=!0)),U=Ul(c,y),0<U.length&&(y=new Zg(y,t,null,n,f),d.push({event:y,listeners:U}),E?y.data=E:(E=B_(n),E!==null&&(y.data=E)))),(E=ak?lk(t,n):uk(t,n))&&(c=Ul(c,"onBeforeInput"),0<c.length&&(f=new Zg("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=E))}tw(d,e)})}function jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Do(t,n),s!=null&&r.unshift(jo(t,s,i)),s=Do(t,e),s!=null&&r.push(jo(t,s,i))),t=t.return}return r}function Ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Do(n,s),u!=null&&o.unshift(jo(n,u,l))):i||(u=Do(n,s),u!=null&&o.push(jo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Sk=/\r\n?/g,Ik=/\u0000|\uFFFD/g;function dm(t){return(typeof t=="string"?t:""+t).replace(Sk,`
`).replace(Ik,"")}function Ya(t,e,n){if(e=dm(e),dm(t)!==e&&n)throw Error(F(425))}function jl(){}var Hh=null,Wh=null;function Kh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,kk=typeof clearTimeout=="function"?clearTimeout:void 0,fm=typeof Promise=="function"?Promise:void 0,Ak=typeof queueMicrotask=="function"?queueMicrotask:typeof fm<"u"?function(t){return fm.resolve(null).then(t).catch(Ck)}:qh;function Ck(t){setTimeout(function(){throw t})}function Bc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vo(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ys=Math.random().toString(36).slice(2),un="__reactFiber$"+ys,$o="__reactProps$"+ys,Fn="__reactContainer$"+ys,Gh="__reactEvents$"+ys,Rk="__reactListeners$"+ys,Pk="__reactHandles$"+ys;function Kr(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pm(t);t!==null;){if(n=t[un])return n;t=pm(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[un]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Nu(t){return t[$o]||null}var Qh=[],Mi=-1;function xr(t){return{current:t}}function Se(t){0>Mi||(t.current=Qh[Mi],Qh[Mi]=null,Mi--)}function ve(t,e){Mi++,Qh[Mi]=t.current,t.current=e}var Tr={},lt=xr(Tr),Tt=xr(!1),ei=Tr;function rs(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function $l(){Se(Tt),Se(lt)}function gm(t,e,n){if(lt.current!==Tr)throw Error(F(168));ve(lt,e),ve(Tt,n)}function rw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,fI(t)||"Unknown",i));return Ne({},n,r)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,ei=lt.current,ve(lt,t),ve(Tt,Tt.current),!0}function mm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=rw(t,e,ei),r.__reactInternalMemoizedMergedChildContext=t,Se(Tt),Se(lt),ve(lt,t)):Se(Tt),ve(Tt,n)}var kn=null,xu=!1,Hc=!1;function iw(t){kn===null?kn=[t]:kn.push(t)}function Nk(t){xu=!0,iw(t)}function br(){if(!Hc&&kn!==null){Hc=!0;var t=0,e=ge;try{var n=kn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,xu=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),P_(of,br),i}finally{ge=e,Hc=!1}}return null}var Fi=[],Ui=0,Bl=null,Hl=0,Ot=[],Lt=0,ti=null,Cn=1,Rn="";function Br(t,e){Fi[Ui++]=Hl,Fi[Ui++]=Bl,Bl=t,Hl=e}function sw(t,e,n){Ot[Lt++]=Cn,Ot[Lt++]=Rn,Ot[Lt++]=ti,ti=t;var r=Cn;t=Rn;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var s=32-Yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cn=1<<32-Yt(e)+i|n<<i|r,Rn=s+t}else Cn=1<<s|n<<i|r,Rn=t}function gf(t){t.return!==null&&(Br(t,1),sw(t,1,0))}function mf(t){for(;t===Bl;)Bl=Fi[--Ui],Fi[Ui]=null,Hl=Fi[--Ui],Fi[Ui]=null;for(;t===ti;)ti=Ot[--Lt],Ot[Lt]=null,Rn=Ot[--Lt],Ot[Lt]=null,Cn=Ot[--Lt],Ot[Lt]=null}var Pt=null,Rt=null,ke=!1,qt=null;function ow(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ym(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ti!==null?{id:Cn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Rt=null,!0):!1;default:return!1}}function Yh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jh(t){if(ke){var e=Rt;if(e){var n=e;if(!ym(t,e)){if(Yh(t))throw Error(F(418));e=fr(n.nextSibling);var r=Pt;e&&ym(t,e)?ow(r,n):(t.flags=t.flags&-4097|2,ke=!1,Pt=t)}}else{if(Yh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ke=!1,Pt=t}}}function vm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Ja(t){if(t!==Pt)return!1;if(!ke)return vm(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kh(t.type,t.memoizedProps)),e&&(e=Rt)){if(Yh(t))throw aw(),Error(F(418));for(;e;)ow(t,e),e=fr(e.nextSibling)}if(vm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=Pt?fr(t.stateNode.nextSibling):null;return!0}function aw(){for(var t=Rt;t;)t=fr(t.nextSibling)}function is(){Rt=Pt=null,ke=!1}function yf(t){qt===null?qt=[t]:qt.push(t)}var xk=Wn.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Xa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _m(t){var e=t._init;return e(t._payload)}function lw(t){function e(I,w){if(t){var k=I.deletions;k===null?(I.deletions=[w],I.flags|=16):k.push(w)}}function n(I,w){if(!t)return null;for(;w!==null;)e(I,w),w=w.sibling;return null}function r(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function i(I,w){return I=yr(I,w),I.index=0,I.sibling=null,I}function s(I,w,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<w?(I.flags|=2,w):k):(I.flags|=2,w)):(I.flags|=1048576,w)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,w,k,D){return w===null||w.tag!==6?(w=Jc(k,I.mode,D),w.return=I,w):(w=i(w,k),w.return=I,w)}function u(I,w,k,D){var M=k.type;return M===bi?f(I,w,k.props.children,D,k.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===er&&_m(M)===w.type)?(D=i(w,k.props),D.ref=Ys(I,w,k),D.return=I,D):(D=El(k.type,k.key,k.props,null,I.mode,D),D.ref=Ys(I,w,k),D.return=I,D)}function c(I,w,k,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=Xc(k,I.mode,D),w.return=I,w):(w=i(w,k.children||[]),w.return=I,w)}function f(I,w,k,D,M){return w===null||w.tag!==7?(w=Xr(k,I.mode,D,M),w.return=I,w):(w=i(w,k),w.return=I,w)}function d(I,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Jc(""+w,I.mode,k),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $a:return k=El(w.type,w.key,w.props,null,I.mode,k),k.ref=Ys(I,null,w),k.return=I,k;case xi:return w=Xc(w,I.mode,k),w.return=I,w;case er:var D=w._init;return d(I,D(w._payload),k)}if(no(w)||Ws(w))return w=Xr(w,I.mode,k,null),w.return=I,w;Xa(I,w)}return null}function g(I,w,k,D){var M=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return M!==null?null:l(I,w,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case $a:return k.key===M?u(I,w,k,D):null;case xi:return k.key===M?c(I,w,k,D):null;case er:return M=k._init,g(I,w,M(k._payload),D)}if(no(k)||Ws(k))return M!==null?null:f(I,w,k,D,null);Xa(I,k)}return null}function _(I,w,k,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(k)||null,l(w,I,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case $a:return I=I.get(D.key===null?k:D.key)||null,u(w,I,D,M);case xi:return I=I.get(D.key===null?k:D.key)||null,c(w,I,D,M);case er:var U=D._init;return _(I,w,k,U(D._payload),M)}if(no(D)||Ws(D))return I=I.get(k)||null,f(w,I,D,M,null);Xa(w,D)}return null}function A(I,w,k,D){for(var M=null,U=null,E=w,y=w=0,T=null;E!==null&&y<k.length;y++){E.index>y?(T=E,E=null):T=E.sibling;var S=g(I,E,k[y],D);if(S===null){E===null&&(E=T);break}t&&E&&S.alternate===null&&e(I,E),w=s(S,w,y),U===null?M=S:U.sibling=S,U=S,E=T}if(y===k.length)return n(I,E),ke&&Br(I,y),M;if(E===null){for(;y<k.length;y++)E=d(I,k[y],D),E!==null&&(w=s(E,w,y),U===null?M=E:U.sibling=E,U=E);return ke&&Br(I,y),M}for(E=r(I,E);y<k.length;y++)T=_(E,I,y,k[y],D),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),w=s(T,w,y),U===null?M=T:U.sibling=T,U=T);return t&&E.forEach(function(C){return e(I,C)}),ke&&Br(I,y),M}function N(I,w,k,D){var M=Ws(k);if(typeof M!="function")throw Error(F(150));if(k=M.call(k),k==null)throw Error(F(151));for(var U=M=null,E=w,y=w=0,T=null,S=k.next();E!==null&&!S.done;y++,S=k.next()){E.index>y?(T=E,E=null):T=E.sibling;var C=g(I,E,S.value,D);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(I,E),w=s(C,w,y),U===null?M=C:U.sibling=C,U=C,E=T}if(S.done)return n(I,E),ke&&Br(I,y),M;if(E===null){for(;!S.done;y++,S=k.next())S=d(I,S.value,D),S!==null&&(w=s(S,w,y),U===null?M=S:U.sibling=S,U=S);return ke&&Br(I,y),M}for(E=r(I,E);!S.done;y++,S=k.next())S=_(E,I,y,S.value,D),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?y:S.key),w=s(S,w,y),U===null?M=S:U.sibling=S,U=S);return t&&E.forEach(function(R){return e(I,R)}),ke&&Br(I,y),M}function O(I,w,k,D){if(typeof k=="object"&&k!==null&&k.type===bi&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case $a:e:{for(var M=k.key,U=w;U!==null;){if(U.key===M){if(M=k.type,M===bi){if(U.tag===7){n(I,U.sibling),w=i(U,k.props.children),w.return=I,I=w;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===er&&_m(M)===U.type){n(I,U.sibling),w=i(U,k.props),w.ref=Ys(I,U,k),w.return=I,I=w;break e}n(I,U);break}else e(I,U);U=U.sibling}k.type===bi?(w=Xr(k.props.children,I.mode,D,k.key),w.return=I,I=w):(D=El(k.type,k.key,k.props,null,I.mode,D),D.ref=Ys(I,w,k),D.return=I,I=D)}return o(I);case xi:e:{for(U=k.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(I,w.sibling),w=i(w,k.children||[]),w.return=I,I=w;break e}else{n(I,w);break}else e(I,w);w=w.sibling}w=Xc(k,I.mode,D),w.return=I,I=w}return o(I);case er:return U=k._init,O(I,w,U(k._payload),D)}if(no(k))return A(I,w,k,D);if(Ws(k))return N(I,w,k,D);Xa(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(I,w.sibling),w=i(w,k),w.return=I,I=w):(n(I,w),w=Jc(k,I.mode,D),w.return=I,I=w),o(I)):n(I,w)}return O}var ss=lw(!0),uw=lw(!1),Wl=xr(null),Kl=null,ji=null,vf=null;function _f(){vf=ji=Kl=null}function wf(t){var e=Wl.current;Se(Wl),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gi(t,e){Kl=t,vf=ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(vf!==t)if(t={context:t,memoizedValue:e,next:null},ji===null){if(Kl===null)throw Error(F(308));ji=t,Kl.dependencies={lanes:0,firstContext:t}}else ji=ji.next=t;return e}var qr=null;function Ef(t){qr===null?qr=[t]:qr.push(t)}function cw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ef(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,Ef(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,af(t,n)}}function wm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ql(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var d=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,_=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,N=l;switch(g=e,_=n,N.tag){case 1:if(A=N.payload,typeof A=="function"){d=A.call(_,d,g);break e}d=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=N.payload,g=typeof A=="function"?A.call(_,d,g):A,g==null)break e;d=Ne({},d,g);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else _={eventTime:_,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=_,u=d):f=f.next=_,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ri|=o,t.lanes=o,t.memoizedState=d}}function Em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var fa={},dn=xr(fa),zo=xr(fa),Bo=xr(fa);function Gr(t){if(t===fa)throw Error(F(174));return t}function Sf(t,e){switch(ve(Bo,e),ve(zo,t),ve(dn,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bh(e,t)}Se(dn),ve(dn,e)}function os(){Se(dn),Se(zo),Se(Bo)}function dw(t){Gr(Bo.current);var e=Gr(dn.current),n=bh(e,t.type);e!==n&&(ve(zo,t),ve(dn,n))}function If(t){zo.current===t&&(Se(dn),Se(zo))}var Ce=xr(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function kf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var ml=Wn.ReactCurrentDispatcher,Kc=Wn.ReactCurrentBatchConfig,ni=0,Pe=null,Ue=null,Ke=null,Ql=!1,yo=!1,Ho=0,bk=0;function nt(){throw Error(F(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zt(t[n],e[n]))return!1;return!0}function Cf(t,e,n,r,i,s){if(ni=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?Vk:Mk,t=n(r,i),yo){s=0;do{if(yo=!1,Ho=0,25<=s)throw Error(F(301));s+=1,Ke=Ue=null,e.updateQueue=null,ml.current=Fk,t=n(r,i)}while(yo)}if(ml.current=Yl,e=Ue!==null&&Ue.next!==null,ni=0,Ke=Ue=Pe=null,Ql=!1,e)throw Error(F(300));return t}function Rf(){var t=Ho!==0;return Ho=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Pe.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Bt(){if(Ue===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=Ke===null?Pe.memoizedState:Ke.next;if(e!==null)Ke=e,Ue=t;else{if(t===null)throw Error(F(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ke===null?Pe.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function Wo(t,e){return typeof e=="function"?e(t):e}function qc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((ni&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=d,o=r):u=u.next=d,Pe.lanes|=f,ri|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Zt(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,ri|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Zt(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function fw(){}function pw(t,e){var n=Pe,r=Bt(),i=e(),s=!Zt(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,Pf(yw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,Ko(9,mw.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(F(349));ni&30||gw(n,e,i)}return i}function gw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mw(t,e,n,r){e.value=n,e.getSnapshot=r,vw(e)&&_w(t)}function yw(t,e,n){return n(function(){vw(e)&&_w(t)})}function vw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function _w(t){var e=Un(t,1);e!==null&&Jt(e,t,1,-1)}function Tm(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},e.queue=t,t=t.dispatch=Lk.bind(null,Pe,t),[e.memoizedState,t]}function Ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ww(){return Bt().memoizedState}function yl(t,e,n,r){var i=an();Pe.flags|=t,i.memoizedState=Ko(1|e,n,void 0,r===void 0?null:r)}function bu(t,e,n,r){var i=Bt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&Af(r,o.deps)){i.memoizedState=Ko(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Ko(1|e,n,s,r)}function Sm(t,e){return yl(8390656,8,t,e)}function Pf(t,e){return bu(2048,8,t,e)}function Ew(t,e){return bu(4,2,t,e)}function Tw(t,e){return bu(4,4,t,e)}function Sw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Iw(t,e,n){return n=n!=null?n.concat([t]):null,bu(4,4,Sw.bind(null,e,t),n)}function Nf(){}function kw(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Af(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Aw(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Af(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Cw(t,e,n){return ni&21?(Zt(n,e)||(n=b_(),Pe.lanes|=n,ri|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function Dk(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=Kc.transition;Kc.transition={};try{t(!1),e()}finally{ge=n,Kc.transition=r}}function Rw(){return Bt().memoizedState}function Ok(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pw(t))Nw(e,n);else if(n=cw(t,e,n,r),n!==null){var i=ft();Jt(n,t,r,i),xw(n,e,r)}}function Lk(t,e,n){var r=mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pw(t))Nw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Zt(l,o)){var u=e.interleaved;u===null?(i.next=i,Ef(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=cw(t,e,i,r),n!==null&&(i=ft(),Jt(n,t,r,i),xw(n,e,r))}}function Pw(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function Nw(t,e){yo=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,af(t,n)}}var Yl={readContext:zt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},Vk={readContext:zt,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:Sm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,Sw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ok.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:Tm,useDebugValue:Nf,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=Tm(!1),e=t[0];return t=Dk.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=an();if(ke){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ge===null)throw Error(F(349));ni&30||gw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sm(yw.bind(null,r,s,t),[t]),r.flags|=2048,Ko(9,mw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=Ge.identifierPrefix;if(ke){var n=Rn,r=Cn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mk={readContext:zt,useCallback:kw,useContext:zt,useEffect:Pf,useImperativeHandle:Iw,useInsertionEffect:Ew,useLayoutEffect:Tw,useMemo:Aw,useReducer:qc,useRef:ww,useState:function(){return qc(Wo)},useDebugValue:Nf,useDeferredValue:function(t){var e=Bt();return Cw(e,Ue.memoizedState,t)},useTransition:function(){var t=qc(Wo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:fw,useSyncExternalStore:pw,useId:Rw,unstable_isNewReconciler:!1},Fk={readContext:zt,useCallback:kw,useContext:zt,useEffect:Pf,useImperativeHandle:Iw,useInsertionEffect:Ew,useLayoutEffect:Tw,useMemo:Aw,useReducer:Gc,useRef:ww,useState:function(){return Gc(Wo)},useDebugValue:Nf,useDeferredValue:function(t){var e=Bt();return Ue===null?e.memoizedState=t:Cw(e,Ue.memoizedState,t)},useTransition:function(){var t=Gc(Wo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:fw,useSyncExternalStore:pw,useId:Rw,unstable_isNewReconciler:!1};function Wt(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Du={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=mr(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(Jt(e,t,i,r),gl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=mr(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(Jt(e,t,i,r),gl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=mr(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=pr(t,i,r),e!==null&&(Jt(e,t,r,n),gl(e,t,r))}};function Im(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,r)||!Fo(i,s):!0}function bw(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=zt(s):(i=St(e)?ei:lt.current,r=e.contextTypes,s=(r=r!=null)?rs(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function km(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Du.enqueueReplaceState(e,e.state,null)}function ed(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Tf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zt(s):(s=St(e)?ei:lt.current,i.context=rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Du.enqueueReplaceState(i,i.state,null),ql(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function as(t,e){try{var n="",r=e;do n+=dI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Uk=typeof WeakMap=="function"?WeakMap:Map;function Dw(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xl||(Xl=!0,hd=r),td(t,e)},n}function Ow(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){td(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){td(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Am(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Uk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Zk.bind(null,t,e,n),e.then(t,t))}function Cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t)}var jk=Wn.ReactCurrentOwner,Et=!1;function dt(t,e,n,r){e.child=t===null?uw(e,null,n,r):ss(e,t.child,n,r)}function Pm(t,e,n,r,i){n=n.render;var s=e.ref;return Gi(e,i),r=Cf(t,e,n,r,s,i),n=Rf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(ke&&n&&gf(e),e.flags|=1,dt(t,e,r,i),e.child)}function Nm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Lw(t,e,s,r,i)):(t=El(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Lw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fo(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,jn(t,e,i)}return nd(t,e,n,r,i)}function Vw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(zi,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(zi,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(zi,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(zi,Ct),Ct|=r;return dt(t,e,i,n),e.child}function Mw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nd(t,e,n,r,i){var s=St(n)?ei:lt.current;return s=rs(e,s),Gi(e,i),n=Cf(t,e,n,r,s,i),r=Rf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(ke&&r&&gf(e),e.flags|=1,dt(t,e,n,i),e.child)}function xm(t,e,n,r,i){if(St(n)){var s=!0;zl(e)}else s=!1;if(Gi(e,i),e.stateNode===null)vl(t,e),bw(e,n,r),ed(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zt(c):(c=St(n)?ei:lt.current,c=rs(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&km(e,o,r,c),tr=!1;var g=e.memoizedState;o.state=g,ql(e,r,o,i),u=e.memoizedState,l!==r||g!==u||Tt.current||tr?(typeof f=="function"&&(Zh(e,n,f,r),u=e.memoizedState),(l=tr||Im(e,n,l,r,g,u,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,hw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Wt(e.type,l),o.props=c,d=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=zt(u):(u=St(n)?ei:lt.current,u=rs(e,u));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||g!==u)&&km(e,o,r,u),tr=!1,g=e.memoizedState,o.state=g,ql(e,r,o,i);var A=e.memoizedState;l!==d||g!==A||Tt.current||tr?(typeof _=="function"&&(Zh(e,n,_,r),A=e.memoizedState),(c=tr||Im(e,n,c,r,g,A,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return rd(t,e,n,r,s,i)}function rd(t,e,n,r,i,s){Mw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mm(e,n,!1),jn(t,e,s);r=e.stateNode,jk.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ss(e,t.child,null,s),e.child=ss(e,null,l,s)):dt(t,e,l,s),e.memoizedState=r.state,i&&mm(e,n,!0),e.child}function Fw(t){var e=t.stateNode;e.pendingContext?gm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gm(t,e.context,!1),Sf(t,e.containerInfo)}function bm(t,e,n,r,i){return is(),yf(i),e.flags|=256,dt(t,e,n,r),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uw(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Ce,i&1),t===null)return Jh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vu(o,r,0,null),t=Xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sd(n),e.memoizedState=id,t):xf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $k(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=yr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=yr(l,s):(s=Xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=id,r}return s=t.child,t=s.sibling,r=yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xf(t,e){return e=Vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,r){return r!==null&&yf(r),ss(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $k(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qc(Error(F(422))),Za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Vu({mode:"visible",children:r.children},i,0,null),s=Xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ss(e,t.child,null,o),e.child.memoizedState=sd(o),e.memoizedState=id,s);if(!(e.mode&1))return Za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Qc(s,r,void 0),Za(t,e,o,r)}if(l=(o&t.childLanes)!==0,Et||l){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),Jt(r,t,i,-1))}return Mf(),r=Qc(Error(F(421))),Za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rt=fr(i.nextSibling),Pt=e,ke=!0,qt=null,t!==null&&(Ot[Lt++]=Cn,Ot[Lt++]=Rn,Ot[Lt++]=ti,Cn=t.id,Rn=t.overflow,ti=e),e=xf(e,r.children),e.flags|=4096,e)}function Dm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xh(t.return,e,n)}function Yc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dm(t,n,e);else if(t.tag===19)Dm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Gl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yc(e,!0,n,null,s);break;case"together":Yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ri|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zk(t,e,n){switch(e.tag){case 3:Fw(e),is();break;case 5:dw(e);break;case 1:St(e.type)&&zl(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(Wl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?Uw(t,e,n):(ve(Ce,Ce.current&1),t=jn(t,e,n),t!==null?t.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,Vw(t,e,n)}return jn(t,e,n)}var $w,od,zw,Bw;$w=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};od=function(){};zw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gr(dn.current);var s=null;switch(n){case"input":i=Rh(t,i),r=Rh(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=xh(t,i),r=xh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=jl)}Dh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ee("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Bw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Js(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Bk(t,e,n){var r=e.pendingProps;switch(mf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return St(e.type)&&$l(),rt(e),null;case 3:return r=e.stateNode,os(),Se(Tt),Se(lt),kf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(pd(qt),qt=null))),od(t,e),rt(e),null;case 5:If(e);var i=Gr(Bo.current);if(n=e.type,t!==null&&e.stateNode!=null)zw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return rt(e),null}if(t=Gr(dn.current),Ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[un]=e,r[$o]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<io.length;i++)Ee(io[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":zg(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":Hg(r,s),Ee("invalid",r)}Dh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,l,t),i=["children",""+l]):xo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":za(r),Bg(r,s,!0);break;case"textarea":za(r),Wg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=jl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=y_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[$o]=r,$w(t,e,!1,!1),e.stateNode=t;e:{switch(o=Oh(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<io.length;i++)Ee(io[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":zg(t,r),i=Rh(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":Hg(t,r),i=xh(t,r),Ee("invalid",t);break;default:i=r}Dh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?w_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&v_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bo(t,u):typeof u=="number"&&bo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ee("scroll",t):u!=null&&ef(t,s,u,o))}switch(n){case"input":za(t),Bg(t,r,!1);break;case"textarea":za(t),Wg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)Bw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Gr(Bo.current),Gr(dn.current),Ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:Ya(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return rt(e),null;case 13:if(Se(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&Rt!==null&&e.mode&1&&!(e.flags&128))aw(),is(),e.flags|=98560,s=!1;else if(s=Ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[un]=e}else is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),s=!1}else qt!==null&&(pd(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?$e===0&&($e=3):Mf())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return os(),od(t,e),t===null&&Uo(e.stateNode.containerInfo),rt(e),null;case 10:return wf(e.type._context),rt(e),null;case 17:return St(e.type)&&$l(),rt(e),null;case 19:if(Se(Ce),s=e.memoizedState,s===null)return rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Js(s,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gl(t),o!==null){for(e.flags|=128,Js(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>ls&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return rt(e),null}else 2*Oe()-s.renderingStartTime>ls&&n!==1073741824&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Ce.current,ve(Ce,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return Vf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function Hk(t,e){switch(mf(e),e.tag){case 1:return St(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return os(),Se(Tt),Se(lt),kf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return If(e),null;case 13:if(Se(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Ce),null;case 4:return os(),null;case 10:return wf(e.type._context),null;case 22:case 23:return Vf(),null;case 24:return null;default:return null}}var el=!1,ot=!1,Wk=typeof WeakSet=="function"?WeakSet:Set,H=null;function $i(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function ad(t,e,n){try{n()}catch(r){be(t,e,r)}}var Om=!1;function Kk(t,e){if(Hh=Ml,t=G_(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,d=t,g=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(u=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)g=d,d=_;for(;;){if(d===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(_=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wh={focusedElem:t,selectionRange:n},Ml=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var N=A.memoizedProps,O=A.memoizedState,I=e.stateNode,w=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:Wt(e.type,N),O);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){be(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return A=Om,Om=!1,A}function vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ad(e,n,s)}i=i.next}while(i!==r)}}function Ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Hw(t){var e=t.alternate;e!==null&&(t.alternate=null,Hw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[$o],delete e[Gh],delete e[Rk],delete e[Pk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ww(t){return t.tag===5||t.tag===3||t.tag===4}function Lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ww(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jl));else if(r!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}function cd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}var Ye=null,Kt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)Kw(t,e,n),n=n.sibling}function Kw(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Au,n)}catch{}switch(n.tag){case 5:ot||$i(n,e);case 6:var r=Ye,i=Kt;Ye=null,Xn(t,e,n),Ye=r,Kt=i,Ye!==null&&(Kt?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Kt?(t=Ye,n=n.stateNode,t.nodeType===8?Bc(t.parentNode,n):t.nodeType===1&&Bc(t,n),Vo(t)):Bc(Ye,n.stateNode));break;case 4:r=Ye,i=Kt,Ye=n.stateNode.containerInfo,Kt=!0,Xn(t,e,n),Ye=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ad(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!ot&&($i(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){be(n,e,l)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Xn(t,e,n),ot=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function Vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wk),e.forEach(function(r){var i=tA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,Kt=!1;break e;case 3:Ye=l.stateNode.containerInfo,Kt=!0;break e;case 4:Ye=l.stateNode.containerInfo,Kt=!0;break e}l=l.return}if(Ye===null)throw Error(F(160));Kw(s,o,i),Ye=null,Kt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qw(e,t),e=e.sibling}function qw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),on(t),r&4){try{vo(3,t,t.return),Ou(3,t)}catch(N){be(t,t.return,N)}try{vo(5,t,t.return)}catch(N){be(t,t.return,N)}}break;case 1:Ht(e,t),on(t),r&512&&n!==null&&$i(n,n.return);break;case 5:if(Ht(e,t),on(t),r&512&&n!==null&&$i(n,n.return),t.flags&32){var i=t.stateNode;try{bo(i,"")}catch(N){be(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&g_(i,s),Oh(l,o);var c=Oh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],d=u[o+1];f==="style"?w_(i,d):f==="dangerouslySetInnerHTML"?v_(i,d):f==="children"?bo(i,d):ef(i,f,d,c)}switch(l){case"input":Ph(i,s);break;case"textarea":m_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Hi(i,!!s.multiple,_,!1):g!==!!s.multiple&&(s.defaultValue!=null?Hi(i,!!s.multiple,s.defaultValue,!0):Hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[$o]=s}catch(N){be(t,t.return,N)}}break;case 6:if(Ht(e,t),on(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){be(t,t.return,N)}}break;case 3:if(Ht(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(N){be(t,t.return,N)}break;case 4:Ht(e,t),on(t);break;case 13:Ht(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Of=Oe())),r&4&&Vm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(c=ot)||f,Ht(e,t),ot=c):Ht(e,t),on(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(d=H=f;H!==null;){switch(g=H,_=g.child,g.tag){case 0:case 11:case 14:case 15:vo(4,g,g.return);break;case 1:$i(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(N){be(r,n,N)}}break;case 5:$i(g,g.return);break;case 22:if(g.memoizedState!==null){Fm(d);continue}}_!==null?(_.return=g,H=_):Fm(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=__("display",o))}catch(N){be(t,t.return,N)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(N){be(t,t.return,N)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ht(e,t),on(t),r&4&&Vm(t);break;case 21:break;default:Ht(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ww(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bo(i,""),r.flags&=-33);var s=Lm(t);cd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Lm(t);ud(t,l,o);break;default:throw Error(F(161))}}catch(u){be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qk(t,e,n){H=t,Gw(t)}function Gw(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||el;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ot;l=el;var c=ot;if(el=o,(ot=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Um(i):u!==null?(u.return=o,H=u):Um(i);for(;s!==null;)H=s,Gw(s),s=s.sibling;H=i,el=l,ot=c}Mm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Mm(t)}}function Mm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||Ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Em(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Em(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Vo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ot||e.flags&512&&ld(e)}catch(g){be(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Fm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Um(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ou(4,e)}catch(u){be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){be(e,i,u)}}var s=e.return;try{ld(e)}catch(u){be(e,s,u)}break;case 5:var o=e.return;try{ld(e)}catch(u){be(e,o,u)}}}catch(u){be(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var Gk=Math.ceil,Jl=Wn.ReactCurrentDispatcher,bf=Wn.ReactCurrentOwner,jt=Wn.ReactCurrentBatchConfig,he=0,Ge=null,Ve=null,Ze=0,Ct=0,zi=xr(0),$e=0,qo=null,ri=0,Lu=0,Df=0,_o=null,wt=null,Of=0,ls=1/0,Sn=null,Xl=!1,hd=null,gr=null,tl=!1,ur=null,Zl=0,wo=0,dd=null,_l=-1,wl=0;function ft(){return he&6?Oe():_l!==-1?_l:_l=Oe()}function mr(t){return t.mode&1?he&2&&Ze!==0?Ze&-Ze:xk.transition!==null?(wl===0&&(wl=b_()),wl):(t=ge,t!==0||(t=window.event,t=t===void 0?16:U_(t.type)),t):1}function Jt(t,e,n,r){if(50<wo)throw wo=0,dd=null,Error(F(185));ca(t,n,r),(!(he&2)||t!==Ge)&&(t===Ge&&(!(he&2)&&(Lu|=n),$e===4&&rr(t,Ze)),It(t,r),n===1&&he===0&&!(e.mode&1)&&(ls=Oe()+500,xu&&br()))}function It(t,e){var n=t.callbackNode;xI(t,e);var r=Vl(t,t===Ge?Ze:0);if(r===0)n!==null&&Gg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gg(n),e===1)t.tag===0?Nk(jm.bind(null,t)):iw(jm.bind(null,t)),Ak(function(){!(he&6)&&br()}),n=null;else{switch(D_(r)){case 1:n=of;break;case 4:n=N_;break;case 16:n=Ll;break;case 536870912:n=x_;break;default:n=Ll}n=nE(n,Qw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qw(t,e){if(_l=-1,wl=0,he&6)throw Error(F(327));var n=t.callbackNode;if(Qi()&&t.callbackNode!==n)return null;var r=Vl(t,t===Ge?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=eu(t,r);else{e=r;var i=he;he|=2;var s=Jw();(Ge!==t||Ze!==e)&&(Sn=null,ls=Oe()+500,Jr(t,e));do try{Jk();break}catch(l){Yw(t,l)}while(!0);_f(),Jl.current=s,he=i,Ve!==null?e=0:(Ge=null,Ze=0,e=$e)}if(e!==0){if(e===2&&(i=Uh(t),i!==0&&(r=i,e=fd(t,i))),e===1)throw n=qo,Jr(t,0),rr(t,r),It(t,Oe()),n;if(e===6)rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Qk(i)&&(e=eu(t,r),e===2&&(s=Uh(t),s!==0&&(r=s,e=fd(t,s))),e===1))throw n=qo,Jr(t,0),rr(t,r),It(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Hr(t,wt,Sn);break;case 3:if(rr(t,r),(r&130023424)===r&&(e=Of+500-Oe(),10<e)){if(Vl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qh(Hr.bind(null,t,wt,Sn),e);break}Hr(t,wt,Sn);break;case 4:if(rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gk(r/1960))-r,10<r){t.timeoutHandle=qh(Hr.bind(null,t,wt,Sn),r);break}Hr(t,wt,Sn);break;case 5:Hr(t,wt,Sn);break;default:throw Error(F(329))}}}return It(t,Oe()),t.callbackNode===n?Qw.bind(null,t):null}function fd(t,e){var n=_o;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=eu(t,e),t!==2&&(e=wt,wt=n,e!==null&&pd(e)),t}function pd(t){wt===null?wt=t:wt.push.apply(wt,t)}function Qk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~Df,e&=~Lu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yt(e),r=1<<n;t[n]=-1,e&=~r}}function jm(t){if(he&6)throw Error(F(327));Qi();var e=Vl(t,0);if(!(e&1))return It(t,Oe()),null;var n=eu(t,e);if(t.tag!==0&&n===2){var r=Uh(t);r!==0&&(e=r,n=fd(t,r))}if(n===1)throw n=qo,Jr(t,0),rr(t,e),It(t,Oe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,wt,Sn),It(t,Oe()),null}function Lf(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(ls=Oe()+500,xu&&br())}}function ii(t){ur!==null&&ur.tag===0&&!(he&6)&&Qi();var e=he;he|=1;var n=jt.transition,r=ge;try{if(jt.transition=null,ge=1,t)return t()}finally{ge=r,jt.transition=n,he=e,!(he&6)&&br()}}function Vf(){Ct=zi.current,Se(zi)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kk(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(mf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:os(),Se(Tt),Se(lt),kf();break;case 5:If(r);break;case 4:os();break;case 13:Se(Ce);break;case 19:Se(Ce);break;case 10:wf(r.type._context);break;case 22:case 23:Vf()}n=n.return}if(Ge=t,Ve=t=yr(t.current,null),Ze=Ct=e,$e=0,qo=null,Df=Lu=ri=0,wt=_o=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qr=null}return t}function Yw(t,e){do{var n=Ve;try{if(_f(),ml.current=Yl,Ql){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ql=!1}if(ni=0,Ke=Ue=Pe=null,yo=!1,Ho=0,bf.current=null,n===null||n.return===null){$e=1,qo=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=Cm(o);if(_!==null){_.flags&=-257,Rm(_,o,l,s,e),_.mode&1&&Am(s,c,e),e=_,u=c;var A=e.updateQueue;if(A===null){var N=new Set;N.add(u),e.updateQueue=N}else A.add(u);break e}else{if(!(e&1)){Am(s,c,e),Mf();break e}u=Error(F(426))}}else if(ke&&l.mode&1){var O=Cm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Rm(O,o,l,s,e),yf(as(u,l));break e}}s=u=as(u,l),$e!==4&&($e=2),_o===null?_o=[s]:_o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Dw(s,u,e);wm(s,I);break e;case 1:l=u;var w=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(gr===null||!gr.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=Ow(s,l,e);wm(s,D);break e}}s=s.return}while(s!==null)}Zw(n)}catch(M){e=M,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Jw(){var t=Jl.current;return Jl.current=Yl,t===null?Yl:t}function Mf(){($e===0||$e===3||$e===2)&&($e=4),Ge===null||!(ri&268435455)&&!(Lu&268435455)||rr(Ge,Ze)}function eu(t,e){var n=he;he|=2;var r=Jw();(Ge!==t||Ze!==e)&&(Sn=null,Jr(t,e));do try{Yk();break}catch(i){Yw(t,i)}while(!0);if(_f(),he=n,Jl.current=r,Ve!==null)throw Error(F(261));return Ge=null,Ze=0,$e}function Yk(){for(;Ve!==null;)Xw(Ve)}function Jk(){for(;Ve!==null&&!TI();)Xw(Ve)}function Xw(t){var e=tE(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?Zw(t):Ve=e,bf.current=null}function Zw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Hk(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Ve=null;return}}else if(n=Bk(n,e,Ct),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);$e===0&&($e=5)}function Hr(t,e,n){var r=ge,i=jt.transition;try{jt.transition=null,ge=1,Xk(t,e,n,r)}finally{jt.transition=i,ge=r}return null}function Xk(t,e,n,r){do Qi();while(ur!==null);if(he&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bI(t,s),t===Ge&&(Ve=Ge=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,nE(Ll,function(){return Qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=ge;ge=1;var l=he;he|=4,bf.current=null,Kk(t,n),qw(n,t),vk(Wh),Ml=!!Hh,Wh=Hh=null,t.current=n,qk(n),SI(),he=l,ge=o,jt.transition=s}else t.current=n;if(tl&&(tl=!1,ur=t,Zl=i),s=t.pendingLanes,s===0&&(gr=null),AI(n.stateNode),It(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xl)throw Xl=!1,t=hd,hd=null,t;return Zl&1&&t.tag!==0&&Qi(),s=t.pendingLanes,s&1?t===dd?wo++:(wo=0,dd=t):wo=0,br(),null}function Qi(){if(ur!==null){var t=D_(Zl),e=jt.transition,n=ge;try{if(jt.transition=null,ge=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,Zl=0,he&6)throw Error(F(331));var i=he;for(he|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:vo(8,f,s)}var d=f.child;if(d!==null)d.return=f,H=d;else for(;H!==null;){f=H;var g=f.sibling,_=f.return;if(Hw(f),f===c){H=null;break}if(g!==null){g.return=_,H=g;break}H=_}}}var A=s.alternate;if(A!==null){var N=A.child;if(N!==null){A.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var w=t.current;for(H=w;H!==null;){o=H;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,H=k;else e:for(o=w;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ou(9,l)}}catch(M){be(l,l.return,M)}if(l===o){H=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,H=D;break e}H=l.return}}if(he=i,br(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Au,t)}catch{}r=!0}return r}finally{ge=n,jt.transition=e}}return!1}function $m(t,e,n){e=as(n,e),e=Dw(t,e,1),t=pr(t,e,1),e=ft(),t!==null&&(ca(t,1,e),It(t,e))}function be(t,e,n){if(t.tag===3)$m(t,t,n);else for(;e!==null;){if(e.tag===3){$m(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=as(n,t),t=Ow(e,t,1),e=pr(e,t,1),t=ft(),e!==null&&(ca(e,1,t),It(e,t));break}}e=e.return}}function Zk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Ze&n)===n&&($e===4||$e===3&&(Ze&130023424)===Ze&&500>Oe()-Of?Jr(t,0):Df|=n),It(t,e)}function eE(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=ft();t=Un(t,e),t!==null&&(ca(t,e,n),It(t,n))}function eA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),eE(t,n)}function tA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),eE(t,n)}var tE;tE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,zk(t,e,n);Et=!!(t.flags&131072)}else Et=!1,ke&&e.flags&1048576&&sw(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vl(t,e),t=e.pendingProps;var i=rs(e,lt.current);Gi(e,n),i=Cf(null,e,r,t,i,n);var s=Rf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tf(e),i.updater=Du,e.stateNode=i,i._reactInternals=e,ed(e,r,t,n),e=rd(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&gf(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rA(r),t=Wt(r,t),i){case 0:e=nd(null,e,r,t,n);break e;case 1:e=xm(null,e,r,t,n);break e;case 11:e=Pm(null,e,r,t,n);break e;case 14:e=Nm(null,e,r,Wt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),nd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),xm(t,e,r,i,n);case 3:e:{if(Fw(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,hw(t,e),ql(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=as(Error(F(423)),e),e=bm(t,e,r,n,i);break e}else if(r!==i){i=as(Error(F(424)),e),e=bm(t,e,r,n,i);break e}else for(Rt=fr(e.stateNode.containerInfo.firstChild),Pt=e,ke=!0,qt=null,n=uw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(is(),r===i){e=jn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return dw(e),t===null&&Jh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Kh(r,i)?o=null:s!==null&&Kh(r,s)&&(e.flags|=32),Mw(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&Jh(e),null;case 13:return Uw(t,e,n);case 4:return Sf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ss(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Pm(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(Wl,r._currentValue),r._currentValue=o,s!==null)if(Zt(s.value,o)){if(s.children===i.children&&!Tt.current){e=jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=bn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Xh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gi(e,n),i=zt(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),Nm(t,e,r,i,n);case 15:return Lw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),vl(t,e),e.tag=1,St(r)?(t=!0,zl(e)):t=!1,Gi(e,n),bw(e,r,i),ed(e,r,i,n),rd(null,e,r,!0,t,n);case 19:return jw(t,e,n);case 22:return Vw(t,e,n)}throw Error(F(156,e.tag))};function nE(t,e){return P_(t,e)}function nA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new nA(t,e,n,r)}function Ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rA(t){if(typeof t=="function")return Ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function El(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bi:return Xr(n.children,i,s,e);case tf:o=8,i|=8;break;case Ih:return t=Ut(12,n,e,i|2),t.elementType=Ih,t.lanes=s,t;case kh:return t=Ut(13,n,e,i),t.elementType=kh,t.lanes=s,t;case Ah:return t=Ut(19,n,e,i),t.elementType=Ah,t.lanes=s,t;case d_:return Vu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c_:o=10;break e;case h_:o=9;break e;case nf:o=11;break e;case rf:o=14;break e;case er:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xr(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function Vu(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=d_,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function Xc(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uf(t,e,n,r,i,s,o,l,u){return t=new iA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tf(s),t}function sA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function rE(t){if(!t)return Tr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(St(n))return rw(t,n,e)}return e}function iE(t,e,n,r,i,s,o,l,u){return t=Uf(n,r,!0,t,i,s,o,l,u),t.context=rE(null),n=t.current,r=ft(),i=mr(n),s=bn(r,i),s.callback=e??null,pr(n,s,i),t.current.lanes=i,ca(t,i,r),It(t,r),t}function Mu(t,e,n,r){var i=e.current,s=ft(),o=mr(i);return n=rE(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pr(i,e,o),t!==null&&(Jt(t,i,o,s),gl(t,i,o)),o}function tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jf(t,e){zm(t,e),(t=t.alternate)&&zm(t,e)}function oA(){return null}var sE=typeof reportError=="function"?reportError:function(t){console.error(t)};function $f(t){this._internalRoot=t}Fu.prototype.render=$f.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Mu(t,e,null,null)};Fu.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ii(function(){Mu(null,t,null,null)}),e[Fn]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=V_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&F_(t)}};function zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bm(){}function aA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=tu(o);s.call(c)}}var o=iE(e,r,t,0,null,!1,!1,"",Bm);return t._reactRootContainer=o,t[Fn]=o.current,Uo(t.nodeType===8?t.parentNode:t),ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=tu(u);l.call(c)}}var u=Uf(t,0,!1,null,null,!1,!1,"",Bm);return t._reactRootContainer=u,t[Fn]=u.current,Uo(t.nodeType===8?t.parentNode:t),ii(function(){Mu(e,u,n,r)}),u}function ju(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=tu(o);l.call(u)}}Mu(e,o,t,i)}else o=aA(n,e,t,i,r);return tu(o)}O_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(af(e,n|1),It(e,Oe()),!(he&6)&&(ls=Oe()+500,br()))}break;case 13:ii(function(){var r=Un(t,1);if(r!==null){var i=ft();Jt(r,t,1,i)}}),jf(t,1)}};lf=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=ft();Jt(e,t,134217728,n)}jf(t,134217728)}};L_=function(t){if(t.tag===13){var e=mr(t),n=Un(t,e);if(n!==null){var r=ft();Jt(n,t,e,r)}jf(t,e)}};V_=function(){return ge};M_=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Vh=function(t,e,n){switch(e){case"input":if(Ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nu(r);if(!i)throw Error(F(90));p_(r),Ph(r,i)}}}break;case"textarea":m_(t,n);break;case"select":e=n.value,e!=null&&Hi(t,!!n.multiple,e,!1)}};S_=Lf;I_=ii;var lA={usingClientEntryPoint:!1,Events:[da,Vi,Nu,E_,T_,Lf]},Xs={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uA={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C_(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||oA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Au=nl.inject(uA),hn=nl}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lA;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(e))throw Error(F(200));return sA(t,e,null,n)};xt.createRoot=function(t,e){if(!zf(t))throw Error(F(299));var n=!1,r="",i=sE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Uf(t,1,!1,null,null,n,!1,r,i),t[Fn]=e.current,Uo(t.nodeType===8?t.parentNode:t),new $f(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=C_(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return ii(t)};xt.hydrate=function(t,e,n){if(!Uu(e))throw Error(F(200));return ju(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!zf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iE(e,null,t,1,n??null,i,!1,s,o),t[Fn]=e.current,Uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fu(e)};xt.render=function(t,e,n){if(!Uu(e))throw Error(F(200));return ju(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!Uu(t))throw Error(F(40));return t._reactRootContainer?(ii(function(){ju(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};xt.unstable_batchedUpdates=Lf;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Uu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return ju(t,e,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function oE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oE)}catch(t){console.error(t)}}oE(),o_.exports=xt;var cA=o_.exports,Hm=cA;Th.createRoot=Hm.createRoot,Th.hydrateRoot=Hm.hydrateRoot;const hA=()=>{};var Wm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},lE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,d=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,_=c&63;u||(_=64,o||(g=64)),r.push(n[f],n[d],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(aE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||d==null)throw new fA;const g=s<<2|l>>4;if(r.push(g),c!==64){const _=l<<4&240|c>>2;if(r.push(_),d!==64){const A=c<<6&192|d;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pA=function(t){const e=aE(t);return lE.encodeByteArray(e,!0)},nu=function(t){return pA(t).replace(/\./g,"")},uE=function(t){try{return lE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=()=>gA().__FIREBASE_DEFAULTS__,yA=()=>{if(typeof process>"u"||typeof Wm>"u")return;const t=Wm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uE(t[1]);return e&&JSON.parse(e)},$u=()=>{try{return hA()||mA()||yA()||vA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cE=t=>{var e,n;return(n=(e=$u())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},_A=t=>{const e=cE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hE=()=>{var t;return(t=$u())==null?void 0:t.config},dE=t=>{var e;return(e=$u())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[nu(JSON.stringify(n)),nu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function SA(){var e;const t=(e=$u())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CA(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RA(){return!SA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fE(){try{return typeof indexedDB=="object"}catch{return!1}}function pE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function PA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NA,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,l,r)}}function xA(t,e){return t.replace(bA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bA=/\{\$([^}]+)}/g;function DA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function si(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Km(s)&&Km(o)){if(!si(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Km(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function so(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function OA(t,e){const n=new LA(t,e);return n.subscribe.bind(n)}class LA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zc),i.error===void 0&&(i.error=Zc),i.complete===void 0&&(i.complete=Zc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gE(t){return(await fetch(t,{credentials:"include"})).ok}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UA(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FA(t){return t===Wr?void 0:t}function UA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const $A={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},zA=le.INFO,BA={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},HA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=BA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Bf=class{constructor(e){this.name=e,this._logLevel=zA,this._logHandler=HA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$A[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}};const WA=(t,e)=>e.some(n=>t instanceof n);let qm,Gm;function KA(){return qm||(qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qA(){return Gm||(Gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mE=new WeakMap,gd=new WeakMap,yE=new WeakMap,eh=new WeakMap,Hf=new WeakMap;function GA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mE.set(n,t)}).catch(()=>{}),Hf.set(e,t),e}function QA(t){if(gd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gd.set(t,e)}let md={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YA(t){md=t(md)}function JA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(th(this),e,...n);return yE.set(r,e.sort?e.sort():[e]),Dn(r)}:qA().includes(t)?function(...e){return t.apply(th(this),e),Dn(mE.get(this))}:function(...e){return Dn(t.apply(th(this),e))}}function XA(t){return typeof t=="function"?JA(t):(t instanceof IDBTransaction&&QA(t),WA(t,KA())?new Proxy(t,md):t)}function Dn(t){if(t instanceof IDBRequest)return GA(t);if(eh.has(t))return eh.get(t);const e=XA(t);return e!==t&&(eh.set(t,e),Hf.set(e,t)),e}const th=t=>Hf.get(t);function zu(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Dn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Dn(o.result),u.oldVersion,u.newVersion,Dn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function nh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Dn(n).then(()=>{})}const ZA=["get","getKey","getAll","getAllKeys","count"],eC=["put","add","delete","clear"],rh=new Map;function Qm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rh.get(e))return rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return rh.set(e,s),s}YA(t=>({...t,get:(e,n,r)=>Qm(e,n)||t.get(e,n,r),has:(e,n)=>!!Qm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yd="@firebase/app",Ym="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Bf("@firebase/app"),rC="@firebase/app-compat",iC="@firebase/analytics-compat",sC="@firebase/analytics",oC="@firebase/app-check-compat",aC="@firebase/app-check",lC="@firebase/auth",uC="@firebase/auth-compat",cC="@firebase/database",hC="@firebase/data-connect",dC="@firebase/database-compat",fC="@firebase/functions",pC="@firebase/functions-compat",gC="@firebase/installations",mC="@firebase/installations-compat",yC="@firebase/messaging",vC="@firebase/messaging-compat",_C="@firebase/performance",wC="@firebase/performance-compat",EC="@firebase/remote-config",TC="@firebase/remote-config-compat",SC="@firebase/storage",IC="@firebase/storage-compat",kC="@firebase/firestore",AC="@firebase/ai",CC="@firebase/firestore-compat",RC="firebase",PC="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="[DEFAULT]",NC={[yd]:"fire-core",[rC]:"fire-core-compat",[sC]:"fire-analytics",[iC]:"fire-analytics-compat",[aC]:"fire-app-check",[oC]:"fire-app-check-compat",[lC]:"fire-auth",[uC]:"fire-auth-compat",[cC]:"fire-rtdb",[hC]:"fire-data-connect",[dC]:"fire-rtdb-compat",[fC]:"fire-fn",[pC]:"fire-fn-compat",[gC]:"fire-iid",[mC]:"fire-iid-compat",[yC]:"fire-fcm",[vC]:"fire-fcm-compat",[_C]:"fire-perf",[wC]:"fire-perf-compat",[EC]:"fire-rc",[TC]:"fire-rc-compat",[SC]:"fire-gcs",[IC]:"fire-gcs-compat",[kC]:"fire-fst",[CC]:"fire-fst-compat",[AC]:"fire-vertex","fire-js":"fire-js",[RC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=new Map,xC=new Map,_d=new Map;function Jm(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(_d.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;_d.set(e,t);for(const n of ru.values())Jm(n,t);for(const n of xC.values())Jm(n,t);return!0}function vs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new gi("app","Firebase",bC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=PC;function vE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:vd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=hE()),!n)throw vr.create("no-options");const s=ru.get(i);if(s){if(si(n,s.options)&&si(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new jA(i);for(const u of _d.values())o.addComponent(u);const l=new DC(n,r,o);return ru.set(i,l),l}function Wf(t=vd){const e=ru.get(t);if(!e&&t===vd&&hE())return vE();if(!e)throw vr.create("no-app",{appName:t});return e}function $t(t,e,n){let r=NC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(o.join(" "));return}vn(new en(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC="firebase-heartbeat-database",LC=1,Go="firebase-heartbeat-store";let ih=null;function _E(){return ih||(ih=zu(OC,LC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Go)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),ih}async function VC(t){try{const n=(await _E()).transaction(Go),r=await n.objectStore(Go).get(wE(t));return await n.done,r}catch(e){if(e instanceof Tn)$n.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function Xm(t,e){try{const r=(await _E()).transaction(Go,"readwrite");await r.objectStore(Go).put(e,wE(t)),await r.done}catch(n){if(n instanceof Tn)$n.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function wE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=1024,FC=30;class UC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $C(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>FC){const o=zC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zm(),{heartbeatsToSend:r,unsentEntries:i}=jC(this._heartbeatsCache.heartbeats),s=nu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return $n.warn(n),""}}}function Zm(){return new Date().toISOString().substring(0,10)}function jC(t,e=MC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ey(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ey(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $C{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fE()?pE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ey(t){return nu(JSON.stringify({version:2,heartbeats:t})).length}function zC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){vn(new en("platform-logger",e=>new tC(e),"PRIVATE")),vn(new en("heartbeat",e=>new UC(e),"PRIVATE")),$t(yd,Ym,t),$t(yd,Ym,"esm2020"),$t("fire-js","")}BC("");function EE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HC=EE,TE=new gi("auth","Firebase",EE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Bf("@firebase/auth");function WC(t,...e){iu.logLevel<=le.WARN&&iu.warn(`Auth (${_s}): ${t}`,...e)}function Tl(t,...e){iu.logLevel<=le.ERROR&&iu.error(`Auth (${_s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw Kf(t,...e)}function fn(t,...e){return Kf(t,...e)}function SE(t,e,n){const r={...HC(),[e]:n};return new gi("auth","Firebase",r).create(e,{appName:t.name})}function On(t){return SE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return TE.create(t,...e)}function Y(t,e,...n){if(!t)throw Kf(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tl(e),new Error(e)}function zn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function KC(){return ty()==="http:"||ty()==="https:"}function ty(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KC()||kA()||"connection"in navigator)?navigator.onLine:!0}function GC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=TA()||AA()}get(){return qC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JC=new ma(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Or(t,e,n,r,i={}){return kE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=pa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return IA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ga(t.emulatorConfig.host)&&(c.credentials="include"),IE.fetch()(await AE(t,t.config.apiHost,n,l),c)})}async function kE(t,e,n){t._canInitEmulator=!1;const r={...QC,...e};try{const i=new ZC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw rl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw rl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw SE(t,f,c);tn(t,f)}}catch(i){if(i instanceof Tn)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function ya(t,e,n,r,i={}){const s=await Or(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function AE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?qf(t.config,i):`${t.config.apiScheme}://${i}`;return YC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function XC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),JC.get())})}}function rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fn(t,e,r);return i.customData._tokenResponse=n,i}function ny(t){return t!==void 0&&t.enterprise!==void 0}class eR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return XC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tR(t,e){return Or(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function su(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rR(t,e=!1){const n=gt(t),r=await n.getIdToken(e),i=Gf(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Eo(sh(i.auth_time)),issuedAtTime:Eo(sh(i.iat)),expirationTime:Eo(sh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sh(t){return Number(t)*1e3}function Gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tl("JWT malformed, contained fewer than 3 sections"),null;try{const i=uE(n);return i?JSON.parse(i):(Tl("Failed to decode base64 JWT payload"),null)}catch(i){return Tl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ry(t){const e=Gf(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&iR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ou(t){var d;const e=t.auth,n=await t.getIdToken(),r=await Qo(t,su(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?CE(i.providerUserInfo):[],o=aR(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ed(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function oR(t){const e=gt(t);await ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function CE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(t,e){const n=await kE(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await AE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ga(t.emulatorConfig.host)&&(u.credentials="include"),IE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uR(t,e){return Or(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ry(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=ry(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Yi;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yi,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new sR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ed(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qo(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rR(this,e)}reload(){return oR(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(On(this.auth));const e=await this.getIdToken();return await Qo(this,nR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:d,emailVerified:g,isAnonymous:_,providerData:A,stsTokenManager:N}=n;Y(d&&N,e,"internal-error");const O=Yi.fromJSON(this.name,N);Y(typeof d=="string",e,"internal-error"),Zn(r,e.name),Zn(i,e.name),Y(typeof g=="boolean",e,"internal-error"),Y(typeof _=="boolean",e,"internal-error"),Zn(s,e.name),Zn(o,e.name),Zn(l,e.name),Zn(u,e.name),Zn(c,e.name),Zn(f,e.name);const I=new Gt({uid:d,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:O,createdAt:c,lastLoginAt:f});return A&&Array.isArray(A)&&(I.providerData=A.map(w=>({...w}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Yi;i.updateFromServerResponse(n);const s=new Gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ou(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?CE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Yi;l.updateFromIdToken(r);const u=new Gt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ed(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new Map;function Nn(t){zn(t instanceof Function,"Expected a class definition");let e=iy.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}RE.type="NONE";const sy=RE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Sl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Sl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await su(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ji(Nn(sy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nn(sy);const o=Sl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let d;if(typeof f=="string"){const g=await su(e,{idToken:f}).catch(()=>{});if(!g)break;d=await Gt._fromGetAccountInfoResponse(e,g,f)}else d=Gt._fromJSON(e,f);c!==s&&(l=d),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ji(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ji(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(PE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OE(e))return"Blackberry";if(LE(e))return"Webos";if(NE(e))return"Safari";if((e.includes("chrome/")||xE(e))&&!e.includes("edge/"))return"Chrome";if(DE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function PE(t=ut()){return/firefox\//i.test(t)}function NE(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xE(t=ut()){return/crios\//i.test(t)}function bE(t=ut()){return/iemobile/i.test(t)}function DE(t=ut()){return/android/i.test(t)}function OE(t=ut()){return/blackberry/i.test(t)}function LE(t=ut()){return/webos/i.test(t)}function Qf(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cR(t=ut()){var e;return Qf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function hR(){return CA()&&document.documentMode===10}function VE(t=ut()){return Qf(t)||DE(t)||LE(t)||OE(t)||/windows phone/i.test(t)||bE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t,e=[]){let n;switch(t){case"Browser":n=oy(ut());break;case"Worker":n=`${oy(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_s}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(t,e={}){return Or(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=6;class gR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??pR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ay(this),this.idTokenSubscription=new ay(this),this.beforeStateQueue=new dR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ji.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await su(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ou(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(On(this));const n=e?gt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(On(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(On(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fR(this),n=new gR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Ji.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ME(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&WC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Lr(t){return gt(t)}class ay{constructor(e){this.auth=e,this.observer=null,this.addObserver=OA(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yR(t){Bu=t}function FE(t){return Bu.loadJS(t)}function vR(){return Bu.recaptchaEnterpriseScript}function _R(){return Bu.gapiScript}function wR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ER{constructor(){this.enterprise=new TR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class TR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const SR="recaptcha-enterprise",UE="NO_RECAPTCHA";class IR{constructor(e){this.type=SR,this.auth=Lr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{tR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new eR(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;ny(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(UE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ER().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&ny(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=vR();u.length!==0&&(u+=l),FE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function ly(t,e,n,r=!1,i=!1){const s=new IR(t);let o;if(i)o=UE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Td(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ly(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ly(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t,e){const n=vs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(si(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function AR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CR(t,e,n){const r=Lr(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=jE(e),{host:o,port:l}=RR(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(si(c,r.config.emulator)&&si(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ga(o)?gE(`${s}//${o}${u}`):PR()}function jE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RR(t){const e=jE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:uy(o)}}}function uy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function NR(t,e){return Or(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(t,e){return ya(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(t,e){return ya(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function DR(t,e){return ya(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Yf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Td(e,n,"signInWithPassword",xR);case"emailLink":return bR(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Td(e,r,"signUpPassword",NR);case"emailLink":return DR(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e){return ya(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="http://localhost";class oi extends Yf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xi(e,n)}buildRequest(){const e={requestUri:OR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VR(t){const e=so(oo(t)).link,n=e?so(oo(e)).deep_link_id:null,r=so(oo(t)).deep_link_id;return(r?so(oo(r)).link:null)||r||n||e||t}class Jf{constructor(e){const n=so(oo(e)),r=n.apiKey??null,i=n.oobCode??null,s=LR(n.mode??null);Y(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=VR(e);try{return new Jf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.providerId=ws.PROVIDER_ID}static credential(e,n){return Yo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jf.parseLink(n);return Y(r,"argument-error"),Yo._fromEmailAndCode(e,r.code,r.tenantId)}}ws.PROVIDER_ID="password";ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends $E{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends va{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends va{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends va{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MR(t,e){return ya(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gt._fromIdTokenResponse(e,r,i),o=cy(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cy(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends Tn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,au.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new au(e,n,r,i)}}function zE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?au._fromErrorAndOperation(t,s,e,r):s})}async function FR(t,e,n=!1){const r=await Qo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t,e,n=!1){const{auth:r}=t;if(Vt(r.app))return Promise.reject(On(r));const i="reauthenticate";try{const s=await Qo(t,zE(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Gf(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(t,e,n=!1){if(Vt(t.app))return Promise.reject(On(t));const r="signIn",i=await zE(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jR(t,e){return BE(Lr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(t){const e=Lr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $R(t,e,n){if(Vt(t.app))return Promise.reject(On(t));const r=Lr(t),o=await Td(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&HE(t),u}),l=await ai._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function zR(t,e,n){return Vt(t.app)?Promise.reject(On(t)):jR(gt(t),ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&HE(t),r})}function BR(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function HR(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function WR(t,e,n,r){return gt(t).onAuthStateChanged(e,n,r)}function KR(t){return gt(t).signOut()}const lu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lu,"1"),this.storage.removeItem(lu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=1e3,GR=10;class KE extends WE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=VE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KE.type="LOCAL";const QR=KE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE extends WE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qE.type="SESSION";const GE=qE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Hu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await YR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Xf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const g=d;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function XR(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function ZR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function e1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function t1(){return QE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="firebaseLocalStorageDb",n1=1,uu="firebaseLocalStorage",JE="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wu(t,e){return t.transaction([uu],e?"readwrite":"readonly").objectStore(uu)}function r1(){const t=indexedDB.deleteDatabase(YE);return new _a(t).toPromise()}function Sd(){const t=indexedDB.open(YE,n1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uu,{keyPath:JE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uu)?e(r):(r.close(),await r1(),e(await Sd()))})})}async function hy(t,e,n){const r=Wu(t,!0).put({[JE]:e,value:n});return new _a(r).toPromise()}async function i1(t,e){const n=Wu(t,!1).get(e),r=await new _a(n).toPromise();return r===void 0?null:r.value}function dy(t,e){const n=Wu(t,!0).delete(e);return new _a(n).toPromise()}const s1=800,o1=3;class XE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>o1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hu._getInstance(t1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await ZR(),!this.activeServiceWorker)return;this.sender=new JR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||e1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sd();return await hy(e,lu,"1"),await dy(e,lu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>i1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wu(i,!1).getAll();return new _a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),s1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XE.type="LOCAL";const a1=XE;new ma(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t,e){return e?Nn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends Yf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function u1(t){return BE(t.auth,new Zf(t),t.bypassAuthState)}function c1(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),UR(n,new Zf(t),t.bypassAuthState)}async function h1(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),FR(n,new Zf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return u1;case"linkViaPopup":case"linkViaRedirect":return h1;case"reauthViaPopup":case"reauthViaRedirect":return c1;default:tn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=new ma(2e3,1e4);class Bi extends ZE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=Xf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,d1.get())};e()}}Bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="pendingRedirect",Il=new Map;class p1 extends ZE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Il.get(this.auth._key());if(!e){try{const r=await g1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Il.set(this.auth._key(),e)}return this.bypassAuthState||Il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function g1(t,e){const n=v1(e),r=y1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function m1(t,e){Il.set(t._key(),e)}function y1(t){return Nn(t._redirectPersistence)}function v1(t){return Sl(f1,t.config.apiKey,t.name)}async function _1(t,e){return await Lr(t)._initializationPromise,eT(t,e,!1)}async function eT(t,e,n=!1){if(Vt(t.app))return Promise.reject(On(t));const r=Lr(t),i=l1(r,e),o=await new p1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=10*60*1e3;class E1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!T1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tT(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=w1&&this.cachedEventUids.clear(),this.cachedEventUids.has(fy(e))}saveEventToCache(e){this.cachedEventUids.add(fy(e)),this.lastProcessedEventTime=Date.now()}}function fy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function T1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k1=/^https?/;async function A1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await S1(t);for(const n of e)try{if(C1(n))return}catch{}tn(t,"unauthorized-domain")}function C1(t){const e=wd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!k1.test(n))return!1;if(I1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=new ma(3e4,6e4);function py(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function P1(t){return new Promise((e,n)=>{var i,s,o;function r(){py(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{py(),n(fn(t,"network-request-failed"))},timeout:R1.get()})}if((s=(i=pn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=pn().gapi)!=null&&o.load)r();else{const l=wR("iframefcb");return pn()[l]=()=>{gapi.load?r():n(fn(t,"network-request-failed"))},FE(`${_R()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw kl=null,e})}let kl=null;function N1(t){return kl=kl||P1(t),kl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new ma(5e3,15e3),b1="__/auth/iframe",D1="emulator/auth/iframe",O1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},L1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function V1(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qf(e,D1):`https://${t.config.authDomain}/${b1}`,r={apiKey:e.apiKey,appName:t.name,v:_s},i=L1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pa(r).slice(1)}`}async function M1(t){const e=await N1(t),n=pn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:V1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:O1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),l=pn().setTimeout(()=>{s(o)},x1.get());function u(){pn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},U1=500,j1=600,$1="_blank",z1="http://localhost";class gy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function B1(t,e,n,r=U1,i=j1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...F1,width:r.toString(),height:i.toString(),top:s,left:o},c=ut().toLowerCase();n&&(l=xE(c)?$1:n),PE(c)&&(e=e||z1,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[_,A])=>`${g}${_}=${A},`,"");if(cR(c)&&l!=="_self")return H1(e||"",l),new gy(null);const d=window.open(e||"",l,f);Y(d,t,"popup-blocked");try{d.focus()}catch{}return new gy(d)}function H1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="__/auth/handler",K1="emulator/auth/handler",q1=encodeURIComponent("fac");async function my(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_s,eventId:i};if(e instanceof $E){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",DA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof va){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${q1}=${encodeURIComponent(u)}`:"";return`${G1(t)}?${pa(l).slice(1)}${c}`}function G1({config:t}){return t.emulator?qf(t,K1):`https://${t.authDomain}/${W1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="webStorageSupport";class Q1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=GE,this._completeRedirectFn=eT,this._overrideRedirectResult=m1}async _openPopup(e,n,r,i){var o;zn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await my(e,n,r,wd(),i);return B1(e,s,Xf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await my(e,n,r,wd(),i);return XR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await M1(e),r=new E1(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oh,{type:oh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[oh];s!==void 0&&n(!!s),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return VE()||NE()||Qf()}}const Y1=Q1;var yy="@firebase/auth",vy="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Z1(t){vn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ME(t)},c=new mR(r,i,s,u);return AR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vn(new en("auth-internal",e=>{const n=Lr(e.getProvider("auth").getImmediate());return(r=>new J1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(yy,vy,X1(t)),$t(yy,vy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=5*60,tP=dE("authIdTokenMaxAge")||eP;let _y=null;const nP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tP)return;const i=n==null?void 0:n.token;_y!==i&&(_y=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rP(t=Wf()){const e=vs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kR(t,{popupRedirectResolver:Y1,persistence:[a1,QR,GE]}),r=dE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=nP(s.toString());HR(n,o,()=>o(n.currentUser)),BR(n,l=>o(l))}}const i=cE("auth");return i&&CR(n,`http://${i}`),n}function iP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}yR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Z1("Browser");var sP="firebase",oP="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(sP,oP,"app");var wy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,nT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function T(){}T.prototype=y.prototype,E.F=y.prototype,E.prototype=new T,E.prototype.constructor=E,E.D=function(S,C,R){for(var v=Array(arguments.length-2),q=2;q<arguments.length;q++)v[q-2]=arguments[q];return y.prototype[C].apply(S,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,T){T||(T=0);const S=Array(16);if(typeof y=="string")for(var C=0;C<16;++C)S[C]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(C=0;C<16;++C)S[C]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=E.g[0],T=E.g[1],C=E.g[2];let R=E.g[3],v;v=y+(R^T&(C^R))+S[0]+3614090360&4294967295,y=T+(v<<7&4294967295|v>>>25),v=R+(C^y&(T^C))+S[1]+3905402710&4294967295,R=y+(v<<12&4294967295|v>>>20),v=C+(T^R&(y^T))+S[2]+606105819&4294967295,C=R+(v<<17&4294967295|v>>>15),v=T+(y^C&(R^y))+S[3]+3250441966&4294967295,T=C+(v<<22&4294967295|v>>>10),v=y+(R^T&(C^R))+S[4]+4118548399&4294967295,y=T+(v<<7&4294967295|v>>>25),v=R+(C^y&(T^C))+S[5]+1200080426&4294967295,R=y+(v<<12&4294967295|v>>>20),v=C+(T^R&(y^T))+S[6]+2821735955&4294967295,C=R+(v<<17&4294967295|v>>>15),v=T+(y^C&(R^y))+S[7]+4249261313&4294967295,T=C+(v<<22&4294967295|v>>>10),v=y+(R^T&(C^R))+S[8]+1770035416&4294967295,y=T+(v<<7&4294967295|v>>>25),v=R+(C^y&(T^C))+S[9]+2336552879&4294967295,R=y+(v<<12&4294967295|v>>>20),v=C+(T^R&(y^T))+S[10]+4294925233&4294967295,C=R+(v<<17&4294967295|v>>>15),v=T+(y^C&(R^y))+S[11]+2304563134&4294967295,T=C+(v<<22&4294967295|v>>>10),v=y+(R^T&(C^R))+S[12]+1804603682&4294967295,y=T+(v<<7&4294967295|v>>>25),v=R+(C^y&(T^C))+S[13]+4254626195&4294967295,R=y+(v<<12&4294967295|v>>>20),v=C+(T^R&(y^T))+S[14]+2792965006&4294967295,C=R+(v<<17&4294967295|v>>>15),v=T+(y^C&(R^y))+S[15]+1236535329&4294967295,T=C+(v<<22&4294967295|v>>>10),v=y+(C^R&(T^C))+S[1]+4129170786&4294967295,y=T+(v<<5&4294967295|v>>>27),v=R+(T^C&(y^T))+S[6]+3225465664&4294967295,R=y+(v<<9&4294967295|v>>>23),v=C+(y^T&(R^y))+S[11]+643717713&4294967295,C=R+(v<<14&4294967295|v>>>18),v=T+(R^y&(C^R))+S[0]+3921069994&4294967295,T=C+(v<<20&4294967295|v>>>12),v=y+(C^R&(T^C))+S[5]+3593408605&4294967295,y=T+(v<<5&4294967295|v>>>27),v=R+(T^C&(y^T))+S[10]+38016083&4294967295,R=y+(v<<9&4294967295|v>>>23),v=C+(y^T&(R^y))+S[15]+3634488961&4294967295,C=R+(v<<14&4294967295|v>>>18),v=T+(R^y&(C^R))+S[4]+3889429448&4294967295,T=C+(v<<20&4294967295|v>>>12),v=y+(C^R&(T^C))+S[9]+568446438&4294967295,y=T+(v<<5&4294967295|v>>>27),v=R+(T^C&(y^T))+S[14]+3275163606&4294967295,R=y+(v<<9&4294967295|v>>>23),v=C+(y^T&(R^y))+S[3]+4107603335&4294967295,C=R+(v<<14&4294967295|v>>>18),v=T+(R^y&(C^R))+S[8]+1163531501&4294967295,T=C+(v<<20&4294967295|v>>>12),v=y+(C^R&(T^C))+S[13]+2850285829&4294967295,y=T+(v<<5&4294967295|v>>>27),v=R+(T^C&(y^T))+S[2]+4243563512&4294967295,R=y+(v<<9&4294967295|v>>>23),v=C+(y^T&(R^y))+S[7]+1735328473&4294967295,C=R+(v<<14&4294967295|v>>>18),v=T+(R^y&(C^R))+S[12]+2368359562&4294967295,T=C+(v<<20&4294967295|v>>>12),v=y+(T^C^R)+S[5]+4294588738&4294967295,y=T+(v<<4&4294967295|v>>>28),v=R+(y^T^C)+S[8]+2272392833&4294967295,R=y+(v<<11&4294967295|v>>>21),v=C+(R^y^T)+S[11]+1839030562&4294967295,C=R+(v<<16&4294967295|v>>>16),v=T+(C^R^y)+S[14]+4259657740&4294967295,T=C+(v<<23&4294967295|v>>>9),v=y+(T^C^R)+S[1]+2763975236&4294967295,y=T+(v<<4&4294967295|v>>>28),v=R+(y^T^C)+S[4]+1272893353&4294967295,R=y+(v<<11&4294967295|v>>>21),v=C+(R^y^T)+S[7]+4139469664&4294967295,C=R+(v<<16&4294967295|v>>>16),v=T+(C^R^y)+S[10]+3200236656&4294967295,T=C+(v<<23&4294967295|v>>>9),v=y+(T^C^R)+S[13]+681279174&4294967295,y=T+(v<<4&4294967295|v>>>28),v=R+(y^T^C)+S[0]+3936430074&4294967295,R=y+(v<<11&4294967295|v>>>21),v=C+(R^y^T)+S[3]+3572445317&4294967295,C=R+(v<<16&4294967295|v>>>16),v=T+(C^R^y)+S[6]+76029189&4294967295,T=C+(v<<23&4294967295|v>>>9),v=y+(T^C^R)+S[9]+3654602809&4294967295,y=T+(v<<4&4294967295|v>>>28),v=R+(y^T^C)+S[12]+3873151461&4294967295,R=y+(v<<11&4294967295|v>>>21),v=C+(R^y^T)+S[15]+530742520&4294967295,C=R+(v<<16&4294967295|v>>>16),v=T+(C^R^y)+S[2]+3299628645&4294967295,T=C+(v<<23&4294967295|v>>>9),v=y+(C^(T|~R))+S[0]+4096336452&4294967295,y=T+(v<<6&4294967295|v>>>26),v=R+(T^(y|~C))+S[7]+1126891415&4294967295,R=y+(v<<10&4294967295|v>>>22),v=C+(y^(R|~T))+S[14]+2878612391&4294967295,C=R+(v<<15&4294967295|v>>>17),v=T+(R^(C|~y))+S[5]+4237533241&4294967295,T=C+(v<<21&4294967295|v>>>11),v=y+(C^(T|~R))+S[12]+1700485571&4294967295,y=T+(v<<6&4294967295|v>>>26),v=R+(T^(y|~C))+S[3]+2399980690&4294967295,R=y+(v<<10&4294967295|v>>>22),v=C+(y^(R|~T))+S[10]+4293915773&4294967295,C=R+(v<<15&4294967295|v>>>17),v=T+(R^(C|~y))+S[1]+2240044497&4294967295,T=C+(v<<21&4294967295|v>>>11),v=y+(C^(T|~R))+S[8]+1873313359&4294967295,y=T+(v<<6&4294967295|v>>>26),v=R+(T^(y|~C))+S[15]+4264355552&4294967295,R=y+(v<<10&4294967295|v>>>22),v=C+(y^(R|~T))+S[6]+2734768916&4294967295,C=R+(v<<15&4294967295|v>>>17),v=T+(R^(C|~y))+S[13]+1309151649&4294967295,T=C+(v<<21&4294967295|v>>>11),v=y+(C^(T|~R))+S[4]+4149444226&4294967295,y=T+(v<<6&4294967295|v>>>26),v=R+(T^(y|~C))+S[11]+3174756917&4294967295,R=y+(v<<10&4294967295|v>>>22),v=C+(y^(R|~T))+S[2]+718787259&4294967295,C=R+(v<<15&4294967295|v>>>17),v=T+(R^(C|~y))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(C+(v<<21&4294967295|v>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const T=y-this.blockSize,S=this.C;let C=this.h,R=0;for(;R<y;){if(C==0)for(;R<=T;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<y;)if(S[C++]=E.charCodeAt(R++),C==this.blockSize){i(this,S),C=0;break}}else for(;R<y;)if(S[C++]=E[R++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var T=E.length-8;T<E.length;++T)E[T]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,T=0;T<4;++T)for(let S=0;S<32;S+=8)E[y++]=this.g[T]>>>S&255;return E};function s(E,y){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=y(E)}function o(E,y){this.h=y;const T=[];let S=!0;for(let C=E.length-1;C>=0;C--){const R=E[C]|0;S&&R==y||(T[C]=R,S=!1)}this.g=T}var l={};function u(E){return-128<=E&&E<128?s(E,function(y){return new o([y|0],y<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return d;if(E<0)return O(c(-E));const y=[];let T=1;for(let S=0;E>=T;S++)y[S]=E/T|0,T*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return O(f(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(y,8));let S=d;for(let R=0;R<E.length;R+=8){var C=Math.min(8,E.length-R);const v=parseInt(E.substring(R,R+C),y);C<8?(C=c(Math.pow(y,C)),S=S.j(C).add(c(v))):(S=S.j(T),S=S.add(c(v)))}return S}var d=u(0),g=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();let E=0,y=1;for(let T=0;T<this.g.length;T++){const S=this.i(T);E+=(S>=0?S:4294967296+S)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(N(this))return"-"+O(this).toString(E);const y=c(Math.pow(E,6));var T=this;let S="";for(;;){const C=D(T,y).g;T=I(T,C.j(y));let R=((T.g.length>0?T.g[0]:T.h)>>>0).toString(E);if(T=C,A(T))return R+S;for(;R.length<6;)R="0"+R;S=R+S}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=I(this,E),N(E)?-1:A(E)?0:1};function O(E){const y=E.g.length,T=[];for(let S=0;S<y;S++)T[S]=~E.g[S];return new o(T,~E.h).add(g)}t.abs=function(){return N(this)?O(this):this},t.add=function(E){const y=Math.max(this.g.length,E.g.length),T=[];let S=0;for(let C=0;C<=y;C++){let R=S+(this.i(C)&65535)+(E.i(C)&65535),v=(R>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);S=v>>>16,R&=65535,v&=65535,T[C]=v<<16|R}return new o(T,T[T.length-1]&-2147483648?-1:0)};function I(E,y){return E.add(O(y))}t.j=function(E){if(A(this)||A(E))return d;if(N(this))return N(E)?O(this).j(O(E)):O(O(this).j(E));if(N(E))return O(this.j(O(E)));if(this.l(_)<0&&E.l(_)<0)return c(this.m()*E.m());const y=this.g.length+E.g.length,T=[];for(var S=0;S<2*y;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(let C=0;C<E.g.length;C++){const R=this.i(S)>>>16,v=this.i(S)&65535,q=E.i(C)>>>16,ue=E.i(C)&65535;T[2*S+2*C]+=v*ue,w(T,2*S+2*C),T[2*S+2*C+1]+=R*ue,w(T,2*S+2*C+1),T[2*S+2*C+1]+=v*q,w(T,2*S+2*C+1),T[2*S+2*C+2]+=R*q,w(T,2*S+2*C+2)}for(E=0;E<y;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=y;E<2*y;E++)T[E]=0;return new o(T,0)};function w(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function k(E,y){this.g=E,this.h=y}function D(E,y){if(A(y))throw Error("division by zero");if(A(E))return new k(d,d);if(N(E))return y=D(O(E),y),new k(O(y.g),O(y.h));if(N(y))return y=D(E,O(y)),new k(O(y.g),y.h);if(E.g.length>30){if(N(E)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,S=y;S.l(E)<=0;)T=M(T),S=M(S);var C=U(T,1),R=U(S,1);for(S=U(S,2),T=U(T,2);!A(S);){var v=R.add(S);v.l(E)<=0&&(C=C.add(T),R=v),S=U(S,1),T=U(T,1)}return y=I(E,C.j(y)),new k(C,y)}for(C=d;E.l(y)>=0;){for(T=Math.max(1,Math.floor(E.m()/y.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),R=c(T),v=R.j(y);N(v)||v.l(E)>0;)T-=S,R=c(T),v=R.j(y);A(R)&&(R=g),C=C.add(R),E=I(E,v)}return new k(C,E)}t.B=function(E){return D(this,E).h},t.and=function(E){const y=Math.max(this.g.length,E.g.length),T=[];for(let S=0;S<y;S++)T[S]=this.i(S)&E.i(S);return new o(T,this.h&E.h)},t.or=function(E){const y=Math.max(this.g.length,E.g.length),T=[];for(let S=0;S<y;S++)T[S]=this.i(S)|E.i(S);return new o(T,this.h|E.h)},t.xor=function(E){const y=Math.max(this.g.length,E.g.length),T=[];for(let S=0;S<y;S++)T[S]=this.i(S)^E.i(S);return new o(T,this.h^E.h)};function M(E){const y=E.g.length+1,T=[];for(let S=0;S<y;S++)T[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(T,E.h)}function U(E,y){const T=y>>5;y%=32;const S=E.g.length-T,C=[];for(let R=0;R<S;R++)C[R]=y>0?E.i(R+T)>>>y|E.i(R+T+1)<<32-y:E.i(R+T);return new o(C,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,nT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,_r=o}).apply(typeof wy<"u"?wy:typeof self<"u"?self:typeof window<"u"?window:{});var il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rT,ao,iT,Al,Id,sT,oT,aT;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof il=="object"&&il];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var x=a[m];if(!(x in p))break e;p=p[x]}a=a[a.length-1],m=p[a],h=h(m),h!=m&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&p.push([m,h[m]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function d(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(m,x,b){for(var j=Array(arguments.length-2),re=2;re<arguments.length;re++)j[re-2]=arguments[re];return h.prototype[x].apply(m,j)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const p=Array(h);for(let m=0;m<h;m++)p[m]=a[m];return p}return[]}function A(a,h){for(let m=1;m<arguments.length;m++){const x=arguments[m];var p=typeof x;if(p=p!="object"?p:x?Array.isArray(x)?"array":p:"null",p=="array"||p=="object"&&typeof x.length=="number"){p=a.length||0;const b=x.length||0;a.length=p+b;for(let j=0;j<b;j++)a[p+j]=x[j]}else a.push(x)}}class N{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){o.setTimeout(()=>{throw a},0)}function I(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class w{constructor(){this.h=this.g=null}add(h,p){const m=k.get();m.set(h,p),this.h?this.h.next=m:this.g=m,this.h=m}}var k=new N(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,E=new w,y=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(T)}};function T(){for(var a;a=I();){try{a.h.call(a.g)}catch(p){O(p)}var h=k;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function v(a){return/^[\s\xa0]*$/.test(a)}function q(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}d(q,C),q.prototype.init=function(a,h){const p=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&q.Z.h.call(this)},q.prototype.h=function(){q.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ue="closure_listenable_"+(Math.random()*1e6|0),fe=0;function _e(a,h,p,m,x){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!m,this.ha=x,this.key=++fe,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function W(a,h,p){for(const m in a)h.call(p,a[m],m,a)}function Z(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function ne(a){const h={};for(const p in a)h[p]=a[p];return h}const de="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ct(a,h){let p,m;for(let x=1;x<arguments.length;x++){m=arguments[x];for(p in m)a[p]=m[p];for(let b=0;b<de.length;b++)p=de[b],Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}}function Qe(a){this.src=a,this.g={},this.h=0}Qe.prototype.add=function(a,h,p,m,x){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const j=kt(a,h,m,x);return j>-1?(h=a[j],p||(h.fa=!1)):(h=new _e(h,this.src,b,!!m,x),h.fa=p,a.push(h)),h};function Dt(a,h){const p=h.type;if(p in a.g){var m=a.g[p],x=Array.prototype.indexOf.call(m,h,void 0),b;(b=x>=0)&&Array.prototype.splice.call(m,x,1),b&&($(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function kt(a,h,p,m){for(let x=0;x<a.length;++x){const b=a[x];if(!b.da&&b.listener==h&&b.capture==!!p&&b.ha==m)return x}return-1}var nn="closure_lm_"+(Math.random()*1e6|0),ks={};function Aa(a,h,p,m,x){if(Array.isArray(h)){for(let b=0;b<h.length;b++)Aa(a,h[b],p,m,x);return null}return p=Ie(p),a&&a[ue]?a.J(h,p,l(m)?!!m.capture:!1,x):ac(a,h,p,!1,m,x)}function ac(a,h,p,m,x,b){if(!h)throw Error("Invalid event type");const j=l(x)?!!x.capture:!!x;let re=Cs(a);if(re||(a[nn]=re=new Qe(a)),p=re.add(h,p,m,j,b),p.proxy)return p;if(m=lc(),p.proxy=m,m.src=a,m.listener=p,a.addEventListener)R||(x=j),x===void 0&&(x=!1),a.addEventListener(h.toString(),m,x);else if(a.attachEvent)a.attachEvent(Ra(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function lc(){function a(p){return h.call(a.src,a.listener,p)}const h=uc;return a}function Ca(a,h,p,m,x){if(Array.isArray(h))for(var b=0;b<h.length;b++)Ca(a,h[b],p,m,x);else m=l(m)?!!m.capture:!!m,p=Ie(p),a&&a[ue]?(a=a.i,b=String(h).toString(),b in a.g&&(h=a.g[b],p=kt(h,p,m,x),p>-1&&($(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[b],a.h--)))):a&&(a=Cs(a))&&(h=a.g[h.toString()],a=-1,h&&(a=kt(h,p,m,x)),(p=a>-1?h[a]:null)&&As(p))}function As(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ue])Dt(h.i,a);else{var p=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(p,m,a.capture):h.detachEvent?h.detachEvent(Ra(p),m):h.addListener&&h.removeListener&&h.removeListener(m),(p=Cs(h))?(Dt(p,a),p.h==0&&(p.src=null,h[nn]=null)):$(a)}}}function Ra(a){return a in ks?ks[a]:ks[a]="on"+a}function uc(a,h){if(a.da)a=!0;else{h=new q(h,this);const p=a.listener,m=a.ha||a.src;a.fa&&As(a),a=p.call(m,h)}return a}function Cs(a){return a=a[nn],a instanceof Qe?a:null}var Q="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ie(a){return typeof a=="function"?a:(a[Q]||(a[Q]=function(h){return a.handleEvent(h)}),a[Q])}function ie(){S.call(this),this.i=new Qe(this),this.M=this,this.G=null}d(ie,S),ie.prototype[ue]=!0,ie.prototype.removeEventListener=function(a,h,p,m){Ca(this,a,h,p,m)};function me(a,h){var p,m=a.G;if(m)for(p=[];m;m=m.G)p.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var x=h;h=new C(m,a),ct(h,x)}x=!0;let b,j;if(p)for(j=p.length-1;j>=0;j--)b=h.g=p[j],x=Be(b,m,!0,h)&&x;if(b=h.g=a,x=Be(b,m,!0,h)&&x,x=Be(b,m,!1,h)&&x,p)for(j=0;j<p.length;j++)b=h.g=p[j],x=Be(b,m,!1,h)&&x}ie.prototype.N=function(){if(ie.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let m=0;m<p.length;m++)$(p[m]);delete a.g[h],a.h--}}this.G=null},ie.prototype.J=function(a,h,p,m){return this.i.add(String(a),h,!1,p,m)},ie.prototype.K=function(a,h,p,m){return this.i.add(String(a),h,!0,p,m)};function Be(a,h,p,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let x=!0;for(let b=0;b<h.length;++b){const j=h[b];if(j&&!j.da&&j.capture==p){const re=j.listener,Fe=j.ha||j.src;j.fa&&Dt(a.i,j),x=re.call(Fe,m)!==!1&&x}}return x&&!m.defaultPrevented}function wi(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Rs(a){a.g=wi(()=>{a.g=null,a.i&&(a.i=!1,Rs(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class p0 extends S{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Rs(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ps(a){S.call(this),this.h=a,this.g={}}d(Ps,S);var Bp=[];function Hp(a){W(a.g,function(h,p){this.g.hasOwnProperty(p)&&As(h)},a),a.g={}}Ps.prototype.N=function(){Ps.Z.N.call(this),Hp(this)},Ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cc=o.JSON.stringify,g0=o.JSON.parse,m0=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Wp(){}function Kp(){}var Ns={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function hc(){C.call(this,"d")}d(hc,C);function dc(){C.call(this,"c")}d(dc,C);var Mr={},qp=null;function Pa(){return qp=qp||new ie}Mr.Ia="serverreachability";function Gp(a){C.call(this,Mr.Ia,a)}d(Gp,C);function xs(a){const h=Pa();me(h,new Gp(h))}Mr.STAT_EVENT="statevent";function Qp(a,h){C.call(this,Mr.STAT_EVENT,a),this.stat=h}d(Qp,C);function ht(a){const h=Pa();me(h,new Qp(h,a))}Mr.Ja="timingevent";function Yp(a,h){C.call(this,Mr.Ja,a),this.size=h}d(Yp,C);function bs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ds(){this.g=!0}Ds.prototype.ua=function(){this.g=!1};function y0(a,h,p,m,x,b){a.info(function(){if(a.g)if(b){var j="",re=b.split("&");for(let ye=0;ye<re.length;ye++){var Fe=re[ye].split("=");if(Fe.length>1){const He=Fe[0];Fe=Fe[1];const sn=He.split("_");j=sn.length>=2&&sn[1]=="type"?j+(He+"="+Fe+"&"):j+(He+"=redacted&")}}}else j=null;else j=b;return"XMLHTTP REQ ("+m+") [attempt "+x+"]: "+h+`
`+p+`
`+j})}function v0(a,h,p,m,x,b,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+x+"]: "+h+`
`+p+`
`+b+" "+j})}function Ei(a,h,p,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+w0(a,p)+(m?" "+m:"")})}function _0(a,h){a.info(function(){return"TIMEOUT: "+h})}Ds.prototype.info=function(){};function w0(a,h){if(!a.g)return h;if(!h)return null;try{const b=JSON.parse(h);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var p=b[a];if(!(p.length<2)){var m=p[1];if(Array.isArray(m)&&!(m.length<1)){var x=m[0];if(x!="noop"&&x!="stop"&&x!="close")for(let j=1;j<m.length;j++)m[j]=""}}}}return cc(b)}catch{return h}}var Na={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Jp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Xp;function fc(){}d(fc,Wp),fc.prototype.g=function(){return new XMLHttpRequest},Xp=new fc;function Os(a){return encodeURIComponent(String(a))}function E0(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function Kn(a,h,p,m){this.j=a,this.i=h,this.l=p,this.S=m||1,this.V=new Ps(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zp}function Zp(){this.i=null,this.g="",this.h=!1}var eg={},pc={};function gc(a,h,p){a.M=1,a.A=ba(rn(h)),a.u=p,a.R=!0,tg(a,null)}function tg(a,h){a.F=Date.now(),xa(a),a.B=rn(a.A);var p=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),pg(p.i,"t",m),a.C=0,p=a.j.L,a.h=new Zp,a.g=bg(a.j,p?h:null,!a.u),a.P>0&&(a.O=new p0(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,m=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(Bp[0]=x.toString()),x=Bp);for(let b=0;b<x.length;b++){const j=Aa(p,x[b],m||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.J?ne(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),xs(),y0(a.i,a.v,a.B,a.l,a.S,a.u)}Kn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Qn(a)==3?h.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const re=Qn(this.g),Fe=this.g.ya(),ye=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||Eg(this.g)))){this.K||re!=4||Fe==7||(Fe==8||ye<=0?xs(3):xs(2)),mc(this);var h=this.g.ca();this.X=h;var p=T0(this);if(this.o=h==200,v0(this.i,this.v,this.B,this.l,this.S,re,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,x=this.g;if((m=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(m)){var b=m;break t}}b=null}if(a=b)Ei(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,yc(this,a);else{this.o=!1,this.m=3,ht(12),Fr(this),Ls(this);break e}}if(this.R){a=!0;let He;for(;!this.K&&this.C<p.length;)if(He=S0(this,p),He==pc){re==4&&(this.m=4,ht(14),a=!1),Ei(this.i,this.l,null,"[Incomplete Response]");break}else if(He==eg){this.m=4,ht(15),Ei(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Ei(this.i,this.l,He,null),yc(this,He);if(ng(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||p.length!=0||this.h.h||(this.m=1,ht(16),a=!1),this.o=this.o&&a,!a)Ei(this.i,this.l,p,"[Invalid Chunked Response]"),Fr(this),Ls(this);else if(p.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),kc(j),j.P=!0,ht(11))}}else Ei(this.i,this.l,p,null),yc(this,p);re==4&&Fr(this),this.o&&!this.K&&(re==4?Rg(this.j,this):(this.o=!1,xa(this)))}else M0(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,ht(12)):(this.m=0,ht(13)),Fr(this),Ls(this)}}}catch{}finally{}};function T0(a){if(!ng(a))return a.g.la();const h=Eg(a.g);if(h==="")return"";let p="";const m=h.length,x=Qn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Fr(a),Ls(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<m;b++)a.h.h=!0,p+=a.h.i.decode(h[b],{stream:!(x&&b==m-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function ng(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function S0(a,h){var p=a.C,m=h.indexOf(`
`,p);return m==-1?pc:(p=Number(h.substring(p,m)),isNaN(p)?eg:(m+=1,m+p>h.length?pc:(h=h.slice(m,m+p),a.C=m+p,h)))}Kn.prototype.cancel=function(){this.K=!0,Fr(this)};function xa(a){a.T=Date.now()+a.H,rg(a,a.H)}function rg(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=bs(c(a.aa,a),h)}function mc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Kn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(_0(this.i,this.B),this.M!=2&&(xs(),ht(17)),Fr(this),this.m=2,Ls(this)):rg(this,this.T-a)};function Ls(a){a.j.I==0||a.K||Rg(a.j,a)}function Fr(a){mc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Hp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function yc(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||vc(p.h,a))){if(!a.L&&vc(p.h,a)&&p.I==3){try{var m=p.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var x=m;if(x[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Ma(p),La(p);else break e;Ic(p),ht(18)}}else p.xa=x[1],0<p.xa-p.K&&x[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=bs(c(p.Va,p),6e3));og(p.h)<=1&&p.ta&&(p.ta=void 0)}else jr(p,11)}else if((a.L||p.g==a)&&Ma(p),!v(h))for(x=p.Ba.g.parse(h),h=0;h<x.length;h++){let ye=x[h];const He=ye[0];if(!(He<=p.K))if(p.K=He,ye=ye[1],p.I==2)if(ye[0]=="c"){p.M=ye[1],p.ba=ye[2];const sn=ye[3];sn!=null&&(p.ka=sn,p.j.info("VER="+p.ka));const $r=ye[4];$r!=null&&(p.za=$r,p.j.info("SVER="+p.za));const Yn=ye[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(m=1.5*Yn,p.O=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const Jn=a.g;if(Jn){const Ua=Jn.g?Jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ua){var b=m.h;b.g||Ua.indexOf("spdy")==-1&&Ua.indexOf("quic")==-1&&Ua.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(_c(b,b.h),b.h=null))}if(m.G){const Ac=Jn.g?Jn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ac&&(m.wa=Ac,we(m.J,m.G,Ac))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),m=p;var j=a;if(m.na=xg(m,m.L?m.ba:null,m.W),j.L){ag(m.h,j);var re=j,Fe=m.O;Fe&&(re.H=Fe),re.D&&(mc(re),xa(re)),m.g=j}else Ag(m);p.i.length>0&&Va(p)}else ye[0]!="stop"&&ye[0]!="close"||jr(p,7);else p.I==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?jr(p,7):Sc(p):ye[0]!="noop"&&p.l&&p.l.qa(ye),p.A=0)}}xs(4)}catch{}}var I0=class{constructor(a,h){this.g=a,this.map=h}};function ig(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function sg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function og(a){return a.h?1:a.g?a.g.size:0}function vc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function _c(a,h){a.g?a.g.add(h):a.h=h}function ag(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ig.prototype.cancel=function(){if(this.i=lg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lg(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return _(a.i)}var ug=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function k0(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const m=a[p].indexOf("=");let x,b=null;m>=0?(x=a[p].substring(0,m),b=a[p].substring(m+1)):x=a[p],h(x,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function qn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof qn?(this.l=a.l,Vs(this,a.j),this.o=a.o,this.g=a.g,Ms(this,a.u),this.h=a.h,wc(this,gg(a.i)),this.m=a.m):a&&(h=String(a).match(ug))?(this.l=!1,Vs(this,h[1]||"",!0),this.o=Fs(h[2]||""),this.g=Fs(h[3]||"",!0),Ms(this,h[4]),this.h=Fs(h[5]||"",!0),wc(this,h[6]||"",!0),this.m=Fs(h[7]||"")):(this.l=!1,this.i=new js(null,this.l))}qn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Us(h,cg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Us(h,cg,!0),"@"),a.push(Os(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Us(p,p.charAt(0)=="/"?R0:C0,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Us(p,N0)),a.join("")},qn.prototype.resolve=function(a){const h=rn(this);let p=!!a.j;p?Vs(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var m=a.h;if(p)Ms(h,a.u);else if(p=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var x=h.h.lastIndexOf("/");x!=-1&&(m=h.h.slice(0,x+1)+m)}if(x=m,x==".."||x==".")m="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){m=x.lastIndexOf("/",0)==0,x=x.split("/");const b=[];for(let j=0;j<x.length;){const re=x[j++];re=="."?m&&j==x.length&&b.push(""):re==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),m&&j==x.length&&b.push("")):(b.push(re),m=!0)}m=b.join("/")}else m=x}return p?h.h=m:p=a.i.toString()!=="",p?wc(h,gg(a.i)):p=!!a.m,p&&(h.m=a.m),h};function rn(a){return new qn(a)}function Vs(a,h,p){a.j=p?Fs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ms(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function wc(a,h,p){h instanceof js?(a.i=h,x0(a.i,a.l)):(p||(h=Us(h,P0)),a.i=new js(h,a.l))}function we(a,h,p){a.i.set(h,p)}function ba(a){return we(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Fs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Us(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,A0),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function A0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cg=/[#\/\?@]/g,C0=/[#\?:]/g,R0=/[#\?]/g,P0=/[#\?@]/g,N0=/#/g;function js(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ur(a){a.g||(a.g=new Map,a.h=0,a.i&&k0(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=js.prototype,t.add=function(a,h){Ur(this),this.i=null,a=Ti(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function hg(a,h){Ur(a),h=Ti(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function dg(a,h){return Ur(a),h=Ti(a,h),a.g.has(h)}t.forEach=function(a,h){Ur(this),this.g.forEach(function(p,m){p.forEach(function(x){a.call(h,x,m,this)},this)},this)};function fg(a,h){Ur(a);let p=[];if(typeof h=="string")dg(a,h)&&(p=p.concat(a.g.get(Ti(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Ur(this),this.i=null,a=Ti(this,a),dg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=fg(this,a),a.length>0?String(a[0]):h):h};function pg(a,h,p){hg(a,h),p.length>0&&(a.i=null,a.g.set(Ti(a,h),_(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var p=h[m];const x=Os(p);p=fg(this,p);for(let b=0;b<p.length;b++){let j=x;p[b]!==""&&(j+="="+Os(p[b])),a.push(j)}}return this.i=a.join("&")};function gg(a){const h=new js;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ti(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function x0(a,h){h&&!a.j&&(Ur(a),a.i=null,a.g.forEach(function(p,m){const x=m.toLowerCase();m!=x&&(hg(this,m),pg(this,x,p))},a)),a.j=h}function b0(a,h){const p=new Ds;if(o.Image){const m=new Image;m.onload=f(Gn,p,"TestLoadImage: loaded",!0,h,m),m.onerror=f(Gn,p,"TestLoadImage: error",!1,h,m),m.onabort=f(Gn,p,"TestLoadImage: abort",!1,h,m),m.ontimeout=f(Gn,p,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function D0(a,h){const p=new Ds,m=new AbortController,x=setTimeout(()=>{m.abort(),Gn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(b=>{clearTimeout(x),b.ok?Gn(p,"TestPingServer: ok",!0,h):Gn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Gn(p,"TestPingServer: error",!1,h)})}function Gn(a,h,p,m,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),m(p)}catch{}}function O0(){this.g=new m0}function Ec(a){this.i=a.Sb||null,this.h=a.ab||!1}d(Ec,Wp),Ec.prototype.g=function(){return new Da(this.i,this.h)};function Da(a,h){ie.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Da,ie),t=Da.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;mg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function mg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?$s(this):zs(this),this.readyState==3&&mg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,$s(this))},t.Na=function(a){this.g&&(this.response=a,$s(this))},t.ga=function(){this.g&&$s(this)};function $s(a){a.readyState=4,a.l=null,a.j=null,a.B=null,zs(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function yg(a){let h="";return W(a,function(p,m){h+=m,h+=":",h+=p,h+=`\r
`}),h}function Tc(a,h,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=yg(p),typeof a=="string"?p!=null&&Os(p):we(a,h,p))}function xe(a){ie.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(xe,ie);var L0=/^https?$/i,V0=["POST","PUT"];t=xe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Xp.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){vg(this,b);return}if(a=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var x in m)p.set(x,m[x]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())p.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(b=>b.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(V0,h,void 0)>=0)||m||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,j]of p)this.g.setRequestHeader(b,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){vg(this,b)}};function vg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,_g(a),Oa(a)}function _g(a){a.A||(a.A=!0,me(a,"complete"),me(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,me(this,"complete"),me(this,"abort"),Oa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oa(this,!0)),xe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?wg(this):this.Xa())},t.Xa=function(){wg(this)};function wg(a){if(a.h&&typeof s<"u"){if(a.v&&Qn(a)==4)setTimeout(a.Ca.bind(a),0);else if(me(a,"readystatechange"),Qn(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var m;if(m=b===0){let j=String(a.D).match(ug)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),m=!L0.test(j?j.toLowerCase():"")}p=m}if(p)me(a,"complete"),me(a,"success");else{a.o=6;try{var x=Qn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",_g(a)}}finally{Oa(a)}}}}function Oa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||me(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Qn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),g0(h)}};function Eg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function M0(a){const h={};a=(a.g&&Qn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(v(a[m]))continue;var p=E0(a[m]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const b=h[x]||[];h[x]=b,b.push(p)}Z(h,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bs(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Tg(a){this.za=0,this.i=[],this.j=new Ds,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Bs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Bs("baseRetryDelayMs",5e3,a),this.Za=Bs("retryDelaySeedMs",1e4,a),this.Ta=Bs("forwardChannelMaxRetries",2,a),this.va=Bs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ig(a&&a.concurrentRequestLimit),this.Ba=new O0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Tg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,m){ht(0),this.W=a,this.H=h||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.J=xg(this,null,this.W),Va(this)};function Sc(a){if(Sg(a),a.I==3){var h=a.V++,p=rn(a.J);if(we(p,"SID",a.M),we(p,"RID",h),we(p,"TYPE","terminate"),Hs(a,p),h=new Kn(a,a.j,h),h.M=2,h.A=ba(rn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=bg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),xa(h)}Ng(a)}function La(a){a.g&&(kc(a),a.g.cancel(),a.g=null)}function Sg(a){La(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ma(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Va(a){if(!sg(a.h)&&!a.m){a.m=!0;var h=a.Ea;M||y(),U||(M(),U=!0),E.add(h,a),a.D=0}}function F0(a,h){return og(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=bs(c(a.Ea,a,h),Pg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new Kn(this,this.j,a);let b=this.o;if(this.U&&(b?(b=ne(b),ct(b,this.U)):b=this.U),this.u!==null||this.R||(x.J=b,b=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=kg(this,x,h),p=rn(this.J),we(p,"RID",a),we(p,"CVER",22),this.G&&we(p,"X-HTTP-Session-Id",this.G),Hs(this,p),b&&(this.R?h="headers="+Os(yg(b))+"&"+h:this.u&&Tc(p,this.u,b)),_c(this.h,x),this.Ra&&we(p,"TYPE","init"),this.S?(we(p,"$req",h),we(p,"SID","null"),x.U=!0,gc(x,p,null)):gc(x,p,h),this.I=2}}else this.I==3&&(a?Ig(this,a):this.i.length==0||sg(this.h)||Ig(this))};function Ig(a,h){var p;h?p=h.l:p=a.V++;const m=rn(a.J);we(m,"SID",a.M),we(m,"RID",p),we(m,"AID",a.K),Hs(a,m),a.u&&a.o&&Tc(m,a.u,a.o),p=new Kn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=kg(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),_c(a.h,p),gc(p,m,h)}function Hs(a,h){a.H&&W(a.H,function(p,m){we(h,m,p)}),a.l&&W({},function(p,m){we(h,m,p)})}function kg(a,h,p){p=Math.min(a.i.length,p);const m=a.l?c(a.l.Ka,a.l,a):null;e:{var x=a.i;let re=-1;for(;;){const Fe=["count="+p];re==-1?p>0?(re=x[0].g,Fe.push("ofs="+re)):re=0:Fe.push("ofs="+re);let ye=!0;for(let He=0;He<p;He++){var b=x[He].g;const sn=x[He].map;if(b-=re,b<0)re=Math.max(0,x[He].g-100),ye=!1;else try{b="req"+b+"_"||"";try{var j=sn instanceof Map?sn:Object.entries(sn);for(const[$r,Yn]of j){let Jn=Yn;l(Yn)&&(Jn=cc(Yn)),Fe.push(b+$r+"="+encodeURIComponent(Jn))}}catch($r){throw Fe.push(b+"type="+encodeURIComponent("_badmap")),$r}}catch{m&&m(sn)}}if(ye){j=Fe.join("&");break e}}j=void 0}return a=a.i.splice(0,p),h.G=a,j}function Ag(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;M||y(),U||(M(),U=!0),E.add(h,a),a.A=0}}function Ic(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=bs(c(a.Da,a),Pg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Cg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=bs(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ht(10),La(this),Cg(this))};function kc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Cg(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=rn(a.na);we(h,"RID","rpc"),we(h,"SID",a.M),we(h,"AID",a.K),we(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&we(h,"TO",a.ia),we(h,"TYPE","xmlhttp"),Hs(a,h),a.u&&a.o&&Tc(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=ba(rn(h)),p.u=null,p.R=!0,tg(p,a)}t.Va=function(){this.C!=null&&(this.C=null,La(this),Ic(this),ht(19))};function Ma(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Rg(a,h){var p=null;if(a.g==h){Ma(a),kc(a),a.g=null;var m=2}else if(vc(a.h,h))p=h.G,ag(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var x=a.D;m=Pa(),me(m,new Yp(m,p)),Va(a)}else Ag(a);else if(x=h.m,x==3||x==0&&h.X>0||!(m==1&&F0(a,h)||m==2&&Ic(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),x){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function Pg(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function jr(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),m=a.Ua;const x=!m;m=new qn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Vs(m,"https"),ba(m),x?b0(m.toString(),p):D0(m.toString(),p)}else ht(2);a.I=0,a.l&&a.l.pa(h),Ng(a),Sg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Ng(a){if(a.I=0,a.ja=[],a.l){const h=lg(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ja,h),A(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function xg(a,h,p){var m=p instanceof qn?rn(p):new qn(p);if(m.g!="")h&&(m.g=h+"."+m.g),Ms(m,m.u);else{var x=o.location;m=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;const b=new qn(null);m&&Vs(b,m),h&&(b.g=h),x&&Ms(b,x),p&&(b.h=p),m=b}return p=a.G,h=a.wa,p&&h&&we(m,p,h),we(m,"VER",a.ka),Hs(a,m),m}function bg(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new xe(new Ec({ab:p})):new xe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dg(){}t=Dg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Fa(){}Fa.prototype.g=function(a,h){return new At(a,h)};function At(a,h){ie.call(this),this.g=new Tg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!v(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Si(this)}d(At,ie),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Sc(this.g)},At.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=cc(a),a=p);h.i.push(new I0(h.Ya++,a)),h.I==3&&Va(h)},At.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,At.Z.N.call(this)};function Og(a){hc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}d(Og,hc);function Lg(){dc.call(this),this.status=1}d(Lg,dc);function Si(a){this.g=a}d(Si,Dg),Si.prototype.ra=function(){me(this.g,"a")},Si.prototype.qa=function(a){me(this.g,new Og(a))},Si.prototype.pa=function(a){me(this.g,new Lg)},Si.prototype.oa=function(){me(this.g,"b")},Fa.prototype.createWebChannel=Fa.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,aT=function(){return new Fa},oT=function(){return Pa()},sT=Mr,Id={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Na.NO_ERROR=0,Na.TIMEOUT=8,Na.HTTP_ERROR=6,Al=Na,Jp.COMPLETE="complete",iT=Jp,Kp.EventType=Ns,Ns.OPEN="a",Ns.CLOSE="b",Ns.ERROR="c",Ns.MESSAGE="d",ie.prototype.listen=ie.prototype.J,ao=Kp,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,rT=xe}).apply(typeof il<"u"?il:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es="12.13.0";function aP(t){Es=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Bf("@firebase/firestore");function Ci(){return li.logLevel}function z(t,...e){if(li.logLevel<=le.DEBUG){const n=e.map(ep);li.debug(`Firestore (${Es}): ${t}`,...n)}}function Bn(t,...e){if(li.logLevel<=le.ERROR){const n=e.map(ep);li.error(`Firestore (${Es}): ${t}`,...n)}}function ui(t,...e){if(li.logLevel<=le.WARN){const n=e.map(ep);li.warn(`Firestore (${Es}): ${t}`,...n)}}function ep(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,lT(t,r,n)}function lT(t,e,n){let r=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Bn(r),new Error(r)}function pe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||lT(e,i,r)}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class uP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cP{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string",31837,{l:r}),new uT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class hP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class dP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ey{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){pe(this.o===void 0,3512);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ey(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ey(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=pP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function kd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return ah(i)===ah(s)?se(i,s):ah(i)?1:-1}return se(t.length,e.length)}const gP=55296,mP=57343;function ah(t){const e=t.charCodeAt(0);return e>=gP&&e<=mP}function us(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="__name__";class ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=ln.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return se(e.length,n.length)}static compareSegments(e,n){const r=ln.isNumericId(e),i=ln.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?ln.extractNumericId(e).compare(ln.extractNumericId(n)):kd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _r.fromString(e.substring(4,e.length-2))}}class Re extends ln{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const yP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends ln{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return yP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ty}static keyField(){return new Xe([Ty])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Re.fromString(e))}static fromName(e){return new G(Re.fromString(e).popFirst(5))}static empty(){return new G(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t,e,n){if(!n)throw new K(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _P(t,e,n,r){if(e===!0&&r===!0)throw new K(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sy(t){if(!G.isDocumentKey(t))throw new K(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function np(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function Jo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=np(t);throw new K(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,e){const n={typeString:t};return e&&(n.value=e),n}function wa(t,e){if(!cT(t))throw new K(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new K(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=-62135596800,ky=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ky);return new Te(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Iy)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ky}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wa(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Iy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:Me("string",Te._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Te(0,0))}static max(){return new ee(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=-1;function wP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new Sr(i,G.empty(),e)}function EP(t){return new Sr(t.readTime,t.key,Xo)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(ee.min(),G.empty(),Xo)}static max(){return new Sr(ee.max(),G.empty(),Xo)}}function TP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==SP)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function kP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ss(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ku.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=-1;function qu(t){return t==null}function cu(t){return t===0&&1/t==-1/0}function AP(t){return typeof t=="number"&&Number.isInteger(t)&&!cu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="";function CP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ay(e)),e=RP(t.get(n),e);return Ay(e)}function RP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case hT:n+="";break;default:n+=s}}return n}function Ay(t){return t+hT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sl(this.root,e,this.comparator,!0)}}class sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ry(this.data.getIterator())}getIteratorFrom(e){return new Ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new fT("Invalid base64 string: "+s):s}}(e);return new tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const PP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(pe(!!t,39018),typeof t=="string"){let e=0;const n=PP.exec(t);if(pe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function kr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="server_timestamp",gT="__type__",mT="__previous_value__",yT="__local_write_time__";function ip(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[gT])==null?void 0:r.stringValue)===pT}function Gu(t){const e=t.mapValue.fields[mT];return ip(e)?Gu(e):e}function Zo(t){const e=Ir(t.mapValue.fields[yT].timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n,r,i,s,o,l,u,c,f,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=d}}const hu="(default)";class ea{constructor(e,n){this.projectId=e,this.database=n||hu}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database===hu}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}function xP(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new K(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="__type__",bP="__max__",ol={mapValue:{}},_T="__vector__",du="value";function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ip(t)?4:OP(t)?9007199254740991:DP(t)?10:11:J(28295,{value:t})}function _n(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zo(t).isEqual(Zo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ir(i.timestampValue),l=Ir(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return kr(i.bytesValue).isEqual(kr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=De(i.doubleValue),l=De(s.doubleValue);return o===l?cu(o)===cu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return us(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Cy(o)!==Cy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!_n(o[u],l[u])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function ta(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function cs(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=De(s.integerValue||s.doubleValue),u=De(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Py(t.timestampValue,e.timestampValue);case 4:return Py(Zo(t),Zo(e));case 5:return kd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=kr(s),u=kr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=se(l[c],u[c]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(De(s.latitude),De(o.latitude));return l!==0?l:se(De(s.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ny(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,_,A,N;const l=s.fields||{},u=o.fields||{},c=(g=l[du])==null?void 0:g.arrayValue,f=(_=u[du])==null?void 0:_.arrayValue,d=se(((A=c==null?void 0:c.values)==null?void 0:A.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return d!==0?d:Ny(c,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ol.mapValue&&o===ol.mapValue)return 0;if(s===ol.mapValue)return 1;if(o===ol.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let d=0;d<u.length&&d<f.length;++d){const g=kd(u[d],f[d]);if(g!==0)return g;const _=cs(l[u[d]],c[f[d]]);if(_!==0)return _}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J(23264,{he:n})}}function Py(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Ir(t),r=Ir(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Ny(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=cs(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function hs(t){return Ad(t)}function Ad(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ad(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ad(n.fields[o])}`;return i+"}"}(t.mapValue):J(61005,{value:t})}function Cl(t){switch(Ar(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gu(t);return e?16+Cl(e):16;case 5:return 2*t.stringValue.length;case 6:return kr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Cl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return mi(r.fields,(s,o)=>{i+=s.length+Cl(o)}),i}(t.mapValue);default:throw J(13486,{value:t})}}function Cd(t){return!!t&&"integerValue"in t}function sp(t){return!!t&&"arrayValue"in t}function xy(t){return!!t&&"nullValue"in t}function by(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rl(t){return!!t&&"mapValue"in t}function DP(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[vT])==null?void 0:r.stringValue)===_T}function To(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return mi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=To(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=To(t.arrayValue.values[n]);return e}return{...t}}function OP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===bP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=To(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=To(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){mi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(To(this.value))}}function wT(t){const e=[];return mi(t.fields,(n,r)=>{const i=new Xe([n]);if(Rl(r)){const s=wT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,ee.min(),ee.min(),ee.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new at(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new at(e,2,n,ee.min(),ee.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,ee.min(),ee.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){this.position=e,this.inclusive=n}}function Dy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Oy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n="asc"){this.field=e,this.dir=n}}function LP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{}class je extends ET{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MP(e,n,r):n==="array-contains"?new jP(e,r):n==="in"?new $P(e,r):n==="not-in"?new zP(e,r):n==="array-contains-any"?new BP(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FP(e,r):new UP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(cs(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wn extends ET{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new wn(e,n)}matches(e){return TT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function TT(t){return t.op==="and"}function ST(t){return VP(t)&&TT(t)}function VP(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function Rd(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(ST(t))return t.filters.map(e=>Rd(e)).join(",");{const e=t.filters.map(n=>Rd(n)).join(",");return`${t.op}(${e})`}}function IT(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&_n(r.value,i.value)}(t,e):t instanceof wn?function(r,i){return i instanceof wn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&IT(o,i.filters[l]),!0):!1}(t,e):void J(19439)}function kT(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${hs(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(kT).join(" ,")+"}"}(t):"Filter"}class MP extends je{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class FP extends je{constructor(e,n){super(e,"in",n),this.keys=AT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UP extends je{constructor(e,n){super(e,"not-in",n),this.keys=AT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class jP extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sp(n)&&ta(n.arrayValue,this.value)}}class $P extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ta(this.value.arrayValue,n)}}class zP extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ta(this.value.arrayValue,n)}}class BP extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ta(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Ly(t,e=null,n=[],r=[],i=null,s=null,o=null){return new HP(t,e,n,r,i,s,o)}function op(t){const e=te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),qu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>hs(r)).join(",")),e.Te=n}return e.Te}function ap(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!IT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Oy(t.startAt,e.startAt)&&Oy(t.endAt,e.endAt)}function Pd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function WP(t,e,n,r,i,s,o,l){return new Qu(t,e,n,r,i,s,o,l)}function lp(t){return new Qu(t)}function Vy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function KP(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function qP(t){return t.collectionGroup!==null}function So(t){const e=te(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new pu(s,r))}),n.has(Xe.keyField().canonicalString())||e.Ie.push(new pu(Xe.keyField(),r))}return e.Ie}function gn(t){const e=te(t);return e.Ee||(e.Ee=GP(e,So(t))),e.Ee}function GP(t,e){if(t.limitType==="F")return Ly(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new pu(i.field,s)});const n=t.endAt?new fu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fu(t.startAt.position,t.startAt.inclusive):null;return Ly(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nd(t,e,n){return new Qu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yu(t,e){return ap(gn(t),gn(e))&&t.limitType===e.limitType}function CT(t){return`${op(gn(t))}|lt:${t.limitType}`}function Ri(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>kT(i)).join(", ")}]`),qu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>hs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>hs(i)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function Ju(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of So(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Dy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,So(r),i)||r.endAt&&!function(o,l,u){const c=Dy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,So(r),i))}(t,e)}function QP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RT(t){return(e,n)=>{let r=!1;for(const i of So(t)){const s=YP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function YP(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?cs(u,c):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return dT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new Ae(G.comparator);function Hn(){return JP}const PT=new Ae(G.comparator);function lo(...t){let e=PT;for(const n of t)e=e.insert(n.key,n);return e}function NT(t){let e=PT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return Io()}function xT(){return Io()}function Io(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const XP=new Ae(G.comparator),ZP=new ze(G.comparator);function oe(...t){let e=ZP;for(const n of t)e=e.add(n);return e}const eN=new ze(se);function tN(){return eN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cu(e)?"-0":e}}function bT(t){return{integerValue:""+t}}function nN(t,e){return AP(e)?bT(e):up(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this._=void 0}}function rN(t,e,n){return t instanceof na?function(i,s){const o={fields:{[gT]:{stringValue:pT},[yT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ip(s)&&(s=Gu(s)),s&&(o.fields[mT]=s),{mapValue:o}}(n,e):t instanceof ra?OT(t,e):t instanceof ia?LT(t,e):function(i,s){const o=DT(i,s),l=My(o)+My(i.Ae);return Cd(o)&&Cd(i.Ae)?bT(l):up(i.serializer,l)}(t,e)}function iN(t,e,n){return t instanceof ra?OT(t,e):t instanceof ia?LT(t,e):n}function DT(t,e){return t instanceof gu?function(r){return Cd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class na extends Xu{}class ra extends Xu{constructor(e){super(),this.elements=e}}function OT(t,e){const n=VT(e);for(const r of t.elements)n.some(i=>_n(i,r))||n.push(r);return{arrayValue:{values:n}}}class ia extends Xu{constructor(e){super(),this.elements=e}}function LT(t,e){let n=VT(e);for(const r of t.elements)n=n.filter(i=>!_n(i,r));return{arrayValue:{values:n}}}class gu extends Xu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function My(t){return De(t.integerValue||t.doubleValue)}function VT(t){return sp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.field=e,this.transform=n}}function oN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ra&&i instanceof ra||r instanceof ia&&i instanceof ia?us(r.elements,i.elements,_n):r instanceof gu&&i instanceof gu?_n(r.Ae,i.Ae):r instanceof na&&i instanceof na}(t.transform,e.transform)}class aN{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zu{}function MT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new UT(t.key,Ln.none()):new Ea(t.key,t.data,Ln.none());{const n=t.data,r=Mt.empty();let i=new ze(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vi(t.key,r,new Qt(i.toArray()),Ln.none())}}function lN(t,e,n){t instanceof Ea?function(i,s,o){const l=i.value.clone(),u=Uy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof vi?function(i,s,o){if(!Pl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Uy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(FT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ko(t,e,n,r){return t instanceof Ea?function(s,o,l,u){if(!Pl(s.precondition,o))return l;const c=s.value.clone(),f=jy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof vi?function(s,o,l,u){if(!Pl(s.precondition,o))return l;const c=jy(s.fieldTransforms,u,o),f=o.data;return f.setAll(FT(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,l){return Pl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function uN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DT(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function Fy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&us(r,i,(s,o)=>oN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ea extends Zu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vi extends Zu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function FT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Uy(t,e,n){const r=new Map;pe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,iN(o,l,n[i]))}return r}function jy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rN(s,o,e))}return r}class UT extends Zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cN extends Zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=MT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&us(this.mutations,e.mutations,(n,r)=>Fy(n,r))&&us(this.baseMutations,e.baseMutations,(n,r)=>Fy(n,r))}}class cp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return XP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new cp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,ce;function pN(t){switch(t){case V.OK:return J(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function jT(t){if(t===void 0)return Bn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Le.OK:return V.OK;case Le.CANCELLED:return V.CANCELLED;case Le.UNKNOWN:return V.UNKNOWN;case Le.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Le.INTERNAL:return V.INTERNAL;case Le.UNAVAILABLE:return V.UNAVAILABLE;case Le.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Le.NOT_FOUND:return V.NOT_FOUND;case Le.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Le.ABORTED:return V.ABORTED;case Le.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Le.DATA_LOSS:return V.DATA_LOSS;default:return J(39323,{code:t})}}(ce=Le||(Le={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=new _r([4294967295,4294967295],0);function $y(t){const e=gN().encode(t),n=new nT;return n.update(e),new Uint8Array(n.digest())}function zy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _r([n,r],0),new _r([i,s],0)]}class hp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new uo(`Invalid padding: ${n}`);if(r<0)throw new uo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new uo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=_r.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(_r.fromNumber(r)));return i.compare(mN)===1&&(i=new _r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=$y(e),[r,i]=zy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new hp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=$y(e),[r,i]=zy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Sa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ta(ee.min(),i,new Ae(se),Hn(),oe())}}class Sa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Sa(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class $T{constructor(e,n){this.targetId=e,this.Ce=n}}class zT{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class By{constructor(){this.ve=0,this.Fe=Hy(),this.Me=tt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=oe(),n=oe(),r=oe();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J(38017,{changeType:s})}}),new Sa(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Hy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class yN{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hn(),this.Je=al(),this.He=al(),this.Ze=new Ae(se)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Pd(s))if(r===0){const o=new G(s.path);this.et(n,o,at.newNoDocument(o,ee.min()))}else pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=kr(r).toUint8Array()}catch(u){if(u instanceof fT)return ui("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new hp(o,i,s)}catch(u){return ui(u instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Pd(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,at.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=oe();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ta(e,n,this.Ze,this.je,r);return this.je=Hn(),this.Je=al(),this.He=al(),this.Ze=new Ae(se),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new By,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new ze(se),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ze(se),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new By),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function al(){return new Ae(G.comparator)}function Hy(){return new Ae(G.comparator)}const vN={asc:"ASCENDING",desc:"DESCENDING"},_N={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wN={and:"AND",or:"OR"};class EN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xd(t,e){return t.useProto3Json||qu(e)?e:{value:e}}function mu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TN(t,e){return mu(t,e.toTimestamp())}function mn(t){return pe(!!t,49232),ee.fromTimestamp(function(n){const r=Ir(n);return new Te(r.seconds,r.nanos)}(t))}function dp(t,e){return bd(t,e).canonicalString()}function bd(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function HT(t){const e=Re.fromString(t);return pe(QT(e),10190,{key:e.toString()}),e}function Dd(t,e){return dp(t.databaseId,e.path)}function lh(t,e){const n=HT(e);if(n.get(1)!==t.databaseId.projectId)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(KT(n))}function WT(t,e){return dp(t.databaseId,e)}function SN(t){const e=HT(t);return e.length===4?Re.emptyPath():KT(e)}function Od(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KT(t){return pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Wy(t,e,n){return{name:Dd(t,e),fields:n.value.mapValue.fields}}function IN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(pe(f===void 0||typeof f=="string",58123),tt.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),tt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?V.UNKNOWN:jT(c.code);return new K(f,c.message||"")}(o);n=new zT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lh(t,r.document.name),s=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):ee.min(),l=new Mt({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Nl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lh(t,r.document),s=r.readTime?mn(r.readTime):ee.min(),o=at.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Nl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lh(t,r.document),s=r.removedTargetIds||[];n=new Nl([],s,i,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new fN(i,s),l=r.targetId;n=new $T(l,o)}}return n}function kN(t,e){let n;if(e instanceof Ea)n={update:Wy(t,e.key,e.value)};else if(e instanceof UT)n={delete:Dd(t,e.key)};else if(e instanceof vi)n={update:Wy(t,e.key,e.data),updateMask:ON(e.fieldMask)};else{if(!(e instanceof cN))return J(16599,{dt:e.type});n={verify:Dd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof na)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ia)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof gu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:TN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J(27497)}(t,e.precondition)),n}function AN(t,e){return t&&t.length>0?(pe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?mn(i.updateTime):mn(s);return o.isEqual(ee.min())&&(o=mn(s)),new aN(o,i.transformResults||[])}(n,e))):[]}function CN(t,e){return{documents:[WT(t,e.path)]}}function RN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=WT(t,i);const s=function(c){if(c.length!==0)return GT(wn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Pi(g.field),direction:xN(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=xd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function PN(t){let e=SN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(d){const g=qT(d);return g instanceof wn&&ST(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(g=>function(A){return new pu(Ni(A.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(d){let g;return g=typeof d=="object"?d.value:d,qu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(d){const g=!!d.before,_=d.values||[];return new fu(_,g)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const g=!d.before,_=d.values||[];return new fu(_,g)}(n.endAt)),WP(e,i,o,s,l,"F",u,c)}function NN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ni(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ni(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ni(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ni(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return je.create(Ni(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>qT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function xN(t){return vN[t]}function bN(t){return _N[t]}function DN(t){return wN[t]}function Pi(t){return{fieldPath:t.canonicalString()}}function Ni(t){return Xe.fromServerFormat(t.fieldPath)}function GT(t){return t instanceof je?function(n){if(n.op==="=="){if(by(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NAN"}};if(xy(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(by(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NAN"}};if(xy(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pi(n.field),op:bN(n.op),value:n.value}}}(t):t instanceof wn?function(n){const r=n.getFilters().map(i=>GT(i));return r.length===1?r[0]:{compositeFilter:{op:DN(n.op),filters:r}}}(t):J(54877,{filter:t})}function ON(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function QT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function YT(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.yt=e}}function VN(t){const e=PN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this.bn=new FN}addToCollectionParentIndex(e,n){return this.bn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Sr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class FN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},JT=41943040;class _t{static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(JT,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Cr(0)}static ar(){return new Cr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="LruGarbageCollector",UN=1048576;function Gy([t,e],[n,r]){const i=se(t,n);return i===0?se(e,r):i}class jN{constructor(e){this.Pr=e,this.buffer=new ze(Gy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Gy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $N{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){z(qy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ss(n)?z(qy,"Ignoring IndexedDB error during garbage collection: ",n):await Ts(n)}await this.Ar(3e5)})}}class zN{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Ku.ce);const r=new jN(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Ky)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ky):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,l=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(c=Date.now(),Ci()<=le.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${d} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function BN(t,e){return new zN(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ko(r.mutation,i,Qt.empty(),Te.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=Qr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=lo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Hn();const o=Io(),l=function(){return Io()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof vi)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),ko(f.mutation,c,f.mutation.getFieldMask(),Te.now())):o.set(c.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new WN(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Io();let i=new Ae((o,l)=>o-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Qt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const d=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,d)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,d=xT();f.forEach(g=>{if(!s.has(g)){const _=MT(n.get(g),r.get(g));_!==null&&d.set(g,_),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return KP(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Qr());let l=Xo,u=s;return o.next(c=>L.forEach(c,(f,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(f=>({batchId:l,changes:NT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=lo();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(d,g){return new Qu(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((d,g)=>{o=o.insert(d,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,at.newInvalidDocument(f)))});let l=lo();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&ko(f.mutation,c,Qt.empty(),Te.now()),Ju(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:VN(i.bundledQuery),readTime:mn(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(){this.overlays=new Ae(G.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Qr(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Qr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Qr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return L.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dN(n,r));let s=this.Lr.get(n);s===void 0&&(s=oe(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(){this.kr=new ze(We.Kr),this.qr=new ze(We.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new We(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new We(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new Re([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new Re([])),r=new We(n,e),i=new We(n,e+1);let s=oe();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return G.comparator(e.key,n.key)||se(e.Jr,n.Jr)}static Ur(e,n){return se(e.Jr,n.Jr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new ze(We.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new We(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?rp:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(se);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new We(new G(s),0);let l=new ze(se);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){pe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return L.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new We(n,0),i=this.Hr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.ti=e,this.docs=function(){return new Ae(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=Hn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():at.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Hn();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||TP(EP(f),r)<=0||(i.has(f.key)||Ju(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new XN(this)}getSize(e){return L.resolve(this.size)}}class XN extends HN{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.persistence=e,this.ri=new yi(n=>op(n),ap),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.ii=0,this.si=new fp,this.targetCount=0,this.oi=Cr._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Cr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n){this._i={},this.overlays={},this.ai=new Ku(0),this.ui=!1,this.ui=!0,this.ci=new QN,this.referenceDelegate=e(this),this.li=new ZN(this),this.indexManager=new MN,this.remoteDocumentCache=function(i){return new JN(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new LN(n),this.Pi=new qN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new YN(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new ex(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class ex extends IP{constructor(e){super(),this.currentSequenceNumber=e}}class pp{constructor(e){this.persistence=e,this.Ri=new fp,this.Ai=null}static Vi(e){return new pp(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const i=G.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class yu{constructor(e,n){this.persistence=e,this.fi=new yi(r=>CP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=BN(this,n)}static Vi(e,n){return new yu(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Cl(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return RA()?8:kP(ut())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new tx;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Ci()<=le.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ri(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Ci()<=le.DEBUG&&z("QueryEngine","Query:",Ri(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Ci()<=le.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ri(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):L.resolve())}gs(e,n){if(Vy(n))return L.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nd(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,Nd(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return Vy(n)||i.isEqual(ee.min())?L.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?L.resolve(null):(Ci()<=le.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ri(n)),this.Ds(e,o,n,wP(i,Xo)).next(l=>l))})}Ss(e,n){let r=new ze(RT(e));return n.forEach((i,s)=>{Ju(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Ci()<=le.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ri(n)),this.fs.getDocumentsMatchingQuery(e,n,Sr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="LocalStore",rx=3e8;class ix{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Ae(se),this.Fs=new yi(s=>op(s),ap),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KN(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function sx(t,e,n,r){return new ix(t,e,n,r)}async function ZT(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=oe();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function ox(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const d=c.batch,g=d.keys();let _=L.resolve();return g.forEach(A=>{_=_.next(()=>f.getEntry(u,A)).next(N=>{const O=c.docVersions.get(A);pe(O!==null,48541),N.version.compareTo(O)<0&&(d.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function eS(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function ax(t,e){const n=te(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,d)=>{const g=i.get(d);if(!g)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,d).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,d)));let _=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(tt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),i=i.insert(d,_),function(N,O,I){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=rx?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,_,f)&&l.push(n.li.updateTargetData(s,_))});let u=Hn(),c=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(lx(s,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(ee.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(d=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function lx(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Hn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):z(mp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function ux(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=rp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function cx(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Ld(t,e,n){const r=te(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ss(o))throw o;z(mp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Qy(t,e,n){const r=te(t);let i=ee.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const d=te(u),g=d.Fs.get(f);return g!==void 0?L.resolve(d.vs.get(g)):d.li.getTargetData(c,f)}(r,o,gn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:oe())).next(l=>(hx(r,QP(e),l),{documents:l,ks:s})))}function hx(t,e,n){let r=t.Ms.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Yy{constructor(){this.activeTargetIds=tN()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dx{constructor(){this.vo=new Yy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Yy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="ConnectivityMonitor";class Xy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){z(Jy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){z(Jy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll=null;function Vd(){return ll===null?ll=function(){return 268435456+Math.round(2147483648*Math.random())}():ll++,"0x"+ll.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="RestConnection",px={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class gx{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===hu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Vd(),l=this.Qo(e,n.toUriEncodedString());z(uh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),f=ga(c);return this.zo(e,l,u,r,f).then(d=>(z(uh,`Received RPC '${e}' ${o}: `,d),d),d=>{throw ui(uh,`RPC '${e}' ${o} failed with error: `,d,"url: ",l,"request:",r),d})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Es}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=px[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection",Zs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Zi extends gx{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Zi.c_){const e=oT();Zs(e,sT.STAT_EVENT,n=>{n.stat===Id.PROXY?z(it,"STAT_EVENT: detected buffering proxy"):n.stat===Id.NOPROXY&&z(it,"STAT_EVENT: detected no buffering proxy")}),Zi.c_=!0}}zo(e,n,r,i,s){const o=Vd();return new Promise((l,u)=>{const c=new rT;c.setWithCredentials(!0),c.listenOnce(iT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Al.NO_ERROR:const d=c.getResponseJson();z(it,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),l(d);break;case Al.TIMEOUT:z(it,`RPC '${e}' ${o} timed out`),u(new K(V.DEADLINE_EXCEEDED,"Request time out"));break;case Al.HTTP_ERROR:const g=c.getStatus();if(z(it,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const N=function(I){const w=I.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(w)>=0?w:V.UNKNOWN}(A.status);u(new K(N,A.message))}else u(new K(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new K(V.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{z(it,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);z(it,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Vd(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");z(it,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let d=!1,g=!1;const _=new mx({Jo:A=>{g?z(it,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(d||(z(it,`Opening RPC '${e}' stream ${i} transport.`),f.open(),d=!0),z(it,`RPC '${e}' stream ${i} sending:`,A),f.send(A))},Ho:()=>f.close()});return Zs(f,ao.EventType.OPEN,()=>{g||(z(it,`RPC '${e}' stream ${i} transport opened.`),_.i_())}),Zs(f,ao.EventType.CLOSE,()=>{g||(g=!0,z(it,`RPC '${e}' stream ${i} transport closed`),_.o_(),this.E_(f))}),Zs(f,ao.EventType.ERROR,A=>{g||(g=!0,ui(it,`RPC '${e}' stream ${i} transport errored. Name:`,A.name,"Message:",A.message),_.o_(new K(V.UNAVAILABLE,"The operation could not be completed")))}),Zs(f,ao.EventType.MESSAGE,A=>{var N;if(!g){const O=A.data[0];pe(!!O,16349);const I=O,w=(I==null?void 0:I.error)||((N=I[0])==null?void 0:N.error);if(w){z(it,`RPC '${e}' stream ${i} received error:`,w);const k=w.status;let D=function(E){const y=Le[E];if(y!==void 0)return jT(y)}(k),M=w.message;k==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&ui(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=V.INTERNAL,M="Unknown error status: "+k+" with message "+w.message),g=!0,_.o_(new K(D,M)),f.close()}else z(it,`RPC '${e}' stream ${i} received:`,O),_.__(O)}}),Zi.u_(),setTimeout(()=>{_.s_()},0),_}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return aT()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t){return new Zi(t)}function ch(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){return new EN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zi.c_=!1;class tS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="PersistentStream";class nS{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new tS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new K(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return z(Zy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(z(Zy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vx extends nS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=IN(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?mn(o.readTime):ee.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Od(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Pd(u)?{documents:CN(s,u)}:{query:RN(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=BT(s,o.resumeToken);const c=xd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=mu(s,o.snapshotVersion.toTimestamp());const c=xd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=NN(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Od(this.serializer),n.removeTarget=e,this.K_(n)}}class _x extends nS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=AN(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Od(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kN(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{}class Ex extends wx{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,bd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,bd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Tx(t,e,n,r){return new Ex(t,e,n,r)}class Sx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Bn(n),this.aa=!1):z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="RemoteStore";class Ix{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Cr(1e3),this.Va=new Cr(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{_i(this)&&(z(En,"Restarting streams for network reachability change."),await async function(u){const c=te(u);c.da.add(4),await Ia(c),c.ga.set("Unknown"),c.da.delete(4),await tc(c)}(this))})}),this.ga=new Sx(r,i)}}async function tc(t){if(_i(t))for(const e of t.ma)await e(!0)}async function Ia(t){for(const e of t.ma)await e(!1)}function Md(t,e){return t.Ea.get(e)||void 0}function rS(t,e){const n=te(t),r=Md(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(l,u){const c=Md(l,u);c!==void 0&&l.Ra.delete(c);const f=function(g,_){return _%2!=0?g.Va.next():g.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);z(En,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new xn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),wp(n)?_p(n):Is(n).O_()&&vp(n,s)}function yp(t,e){const n=te(t),r=Is(n),i=Md(n,e);z(En,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&iS(n,i),n.Ia.size===0&&(r.O_()?r.L_():_i(n)&&n.ga.set("Unknown"))}function vp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void z(En,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}Is(t).Z_(e)}function iS(t,e){t.pa.$e(e),Is(t).X_(e)}function _p(t){t.pa=new yN({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):oe()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.ga.ua()}function wp(t){return _i(t)&&!Is(t).x_()&&t.Ia.size>0}function _i(t){return te(t).da.size===0}function sS(t){t.pa=void 0}async function kx(t){t.ga.set("Online")}async function Ax(t){t.Ia.forEach((e,n)=>{vp(t,e)})}async function Cx(t,e){sS(t),wp(t)?(t.ga.ha(e),_p(t)):t.ga.set("Unknown")}async function Rx(t,e,n){if(t.ga.set("Online"),e instanceof zT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ia.has(l)){const u=i.Ra.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ea.delete(u),i.Ra.delete(l)),i.Ia.delete(l)}i.pa.removeTarget(l)}}(t,e)}catch(r){z(En,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vu(t,r)}else if(e instanceof Nl?t.pa.Xe(e):e instanceof $T?t.pa.st(e):t.pa.tt(e),!n.isEqual(ee.min()))try{const r=await eS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.pa.Tt(o);l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.Ia.get(f);d&&s.Ia.set(f,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,f)=>{const d=s.Ia.get(c);if(!d)return;s.Ia.set(c,d.withResumeToken(tt.EMPTY_BYTE_STRING,d.snapshotVersion)),iS(s,c);const g=new xn(d.target,c,f,d.sequenceNumber);vp(s,g)});const u=function(f,d){const g=new Map;d.targetChanges.forEach((A,N)=>{const O=f.Ra.get(N);O!==void 0&&g.set(O,A)});let _=new Ae(se);return d.targetMismatches.forEach((A,N)=>{const O=f.Ra.get(A);O!==void 0&&(_=_.insert(O,N))}),new Ta(d.snapshotVersion,g,_,d.documentUpdates,d.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){z(En,"Failed to raise snapshot:",r),await vu(t,r)}}async function vu(t,e,n){if(!Ss(e))throw e;t.da.add(1),await Ia(t),t.ga.set("Offline"),n||(n=()=>eS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z(En,"Retrying IndexedDB access"),await n(),t.da.delete(1),await tc(t)})}function oS(t,e){return e().catch(n=>vu(t,n,e))}async function nc(t){const e=te(t),n=Rr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:rp;for(;Px(e);)try{const i=await ux(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,Nx(e,i)}catch(i){await vu(e,i)}aS(e)&&lS(e)}function Px(t){return _i(t)&&t.Ta.length<10}function Nx(t,e){t.Ta.push(e);const n=Rr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function aS(t){return _i(t)&&!Rr(t).x_()&&t.Ta.length>0}function lS(t){Rr(t).start()}async function xx(t){Rr(t).ra()}async function bx(t){const e=Rr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Dx(t,e,n){const r=t.Ta.shift(),i=cp.from(r,e,n);await oS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nc(t)}async function Ox(t,e){e&&Rr(t).Y_&&await async function(r,i){if(function(o){return pN(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();Rr(r).B_(),await oS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await nc(r)}}(t,e),aS(t)&&lS(t)}async function ev(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),z(En,"RemoteStore received new credentials");const r=_i(n);n.da.add(3),await Ia(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await tc(n)}async function Lx(t,e){const n=te(t);e?(n.da.delete(2),await tc(n)):e||(n.da.add(2),await Ia(n),n.ga.set("Unknown"))}function Is(t){return t.ya||(t.ya=function(n,r,i){const s=te(n);return s.sa(),new vx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:kx.bind(null,t),Yo:Ax.bind(null,t),t_:Cx.bind(null,t),H_:Rx.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),wp(t)?_p(t):t.ga.set("Unknown")):(await t.ya.stop(),sS(t))})),t.ya}function Rr(t){return t.wa||(t.wa=function(n,r,i){const s=te(n);return s.sa(),new _x(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:xx.bind(null,t),t_:Ox.bind(null,t),ta:bx.bind(null,t),na:Dx.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await nc(t)):(await t.wa.stop(),t.Ta.length>0&&(z(En,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ep(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),Ss(t))return new K(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{static emptySet(e){return new es(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=lo(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.Sa=new Ae(G.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):J(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class ds{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ds(e,n,es.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class Mx{constructor(){this.queries=nv(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=nv(),s.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new K(V.ABORTED,"Firestore shutting down"))}}function nv(){return new yi(t=>CT(t),Yu)}async function Fx(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new Vx,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Tp(o,`Initialization of query '${Ri(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&Sp(n)}async function Ux(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.va.indexOf(e);o>=0&&(s.va.splice(o,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jx(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.va)l.Na(i)&&(r=!0);o.Ca=i}}r&&Sp(n)}function $x(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function Sp(t){t.xa.forEach(e=>{e.next()})}var Fd,rv;(rv=Fd||(Fd={})).Ba="default",rv.Cache="cache";class zx{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Fd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.key=e}}class cS{constructor(e){this.key=e}}class Bx{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=oe(),this.mutatedKeys=oe(),this.iu=RT(e),this.su=new es(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new tv,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,d)=>{const g=i.get(f),_=Ju(this.query,d)?d:null,A=!!g&&this.mutatedKeys.has(g.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;g&&_?g.data.isEqual(_.data)?A!==N&&(r.track({type:3,doc:_}),O=!0):this.uu(g,_)||(r.track({type:2,doc:_}),O=!0,(u&&this.iu(_,u)>0||c&&this.iu(_,c)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),O=!0):g&&!_&&(r.track({type:1,doc:g}),O=!0,(u||c)&&(l=!0)),O&&(_?(o=o.add(_),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,d)=>function(_,A){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:O})}};return N(_)-N(A)}(f.type,d.type)||this.iu(f.doc,d.doc)),this.cu(r),i=i??!1;const l=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new ds(this.query,e.su,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new tv,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=oe(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new cS(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new uS(r))}),n}Tu(e){this.tu=e.ks,this.ru=oe();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return ds.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Ip="SyncEngine";class Hx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Wx{constructor(e){this.key=e,this.Eu=!1}}class Kx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new yi(l=>CT(l),Yu),this.Vu=new Map,this.du=new Set,this.mu=new Ae(G.comparator),this.fu=new Map,this.gu=new fp,this.pu={},this.yu=new Map,this.wu=Cr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function qx(t,e,n=!0){const r=mS(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await hS(r,e,n,!0),i}async function Gx(t,e){const n=mS(t);await hS(n,e,!0,!1)}async function hS(t,e,n,r){const i=await cx(t.localStore,gn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Qx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&rS(t.remoteStore,i),l}async function Qx(t,e,n,r,i){t.bu=(d,g,_)=>async function(N,O,I,w){let k=O.view._u(I);k.bs&&(k=await Qy(N.localStore,O.query,!1).then(({documents:E})=>O.view._u(E,k)));const D=w&&w.targetChanges.get(O.targetId),M=w&&w.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(k,N.isPrimaryClient,D,M);return sv(N,O.targetId,U.hu),U.snapshot}(t,d,g,_);const s=await Qy(t.localStore,e,!0),o=new Bx(e,s.ks),l=o._u(s.documents),u=Sa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);sv(t,n,c.hu);const f=new Hx(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function Yx(t,e,n){const r=te(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(o=>!Yu(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ld(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&yp(r.remoteStore,i.targetId),Ud(r,i.targetId)}).catch(Ts)):(Ud(r,i.targetId),await Ld(r.localStore,i.targetId,!0))}async function Jx(t,e){const n=te(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yp(n.remoteStore,r.targetId))}async function Xx(t,e,n){const r=sb(t);try{const i=await function(o,l){const u=te(o),c=Te.now(),f=l.reduce((_,A)=>_.add(A.key),oe());let d,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let A=Hn(),N=oe();return u.xs.getEntries(_,f).next(O=>{A=O,A.forEach((I,w)=>{w.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,A)).next(O=>{d=O;const I=[];for(const w of l){const k=uN(w,d.get(w.key).overlayedDocument);k!=null&&I.push(new vi(w.key,k,wT(k.value.mapValue),Ln.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,I,l)}).next(O=>{g=O;const I=O.applyToLocalDocumentSet(d,N);return u.documentOverlayCache.saveOverlays(_,O.batchId,I)})}).then(()=>({batchId:g.batchId,changes:NT(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new Ae(se)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,i.batchId,n),await ka(r,i.changes),await nc(r.remoteStore)}catch(i){const s=Tp(i,"Failed to persist write");n.reject(s)}}async function dS(t,e){const n=te(t);try{const r=await ax(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fu.get(s);o&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Eu=!0:i.modifiedDocuments.size>0?pe(o.Eu,14607):i.removedDocuments.size>0&&(pe(o.Eu,42227),o.Eu=!1))}),await ka(n,r,e)}catch(r){await Ts(r)}}function iv(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,o)=>{const l=o.view.Oa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let c=!1;u.queries.forEach((f,d)=>{for(const g of d.va)g.Oa(l)&&(c=!0)}),c&&Sp(u)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zx(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let o=new Ae(G.comparator);o=o.insert(s,at.newNoDocument(s,ee.min()));const l=oe().add(s),u=new Ta(ee.min(),new Map,new Ae(se),o,l);await dS(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),kp(r)}else await Ld(r.localStore,e,!1).then(()=>Ud(r,e,n)).catch(Ts)}async function eb(t,e){const n=te(t),r=e.batch.batchId;try{const i=await ox(n.localStore,e);pS(n,r,null),fS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ka(n,i)}catch(i){await Ts(i)}}async function tb(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(d=>(pe(d!==null,37113),f=d.keys(),u.mutationQueue.removeMutationBatch(c,d))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);pS(r,e,n),fS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ka(r,i)}catch(i){await Ts(i)}}function fS(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function pS(t,e,n){const r=te(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function Ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||gS(t,r)})}function gS(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(yp(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),kp(t))}function sv(t,e,n){for(const r of n)r instanceof uS?(t.gu.addReference(r.key,e),nb(t,r)):r instanceof cS?(z(Ip,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||gS(t,r.key)):J(19791,{Cu:r})}function nb(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(z(Ip,"New document in limbo: "+n),t.du.add(r),kp(t))}function kp(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new G(Re.fromString(e)),r=t.wu.next();t.fu.set(r,new Wx(n)),t.mu=t.mu.insert(n,r),rS(t.remoteStore,new xn(gn(lp(n.path)),r,"TargetPurposeLimboResolution",Ku.ce))}}async function ka(t,e,n){const r=te(t),i=[],s=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const d=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=gp.Es(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Ru.H_(i),await async function(u,c){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>L.forEach(c,g=>L.forEach(g.Ts,_=>f.persistence.referenceDelegate.addReference(d,g.targetId,_)).next(()=>L.forEach(g.Is,_=>f.persistence.referenceDelegate.removeReference(d,g.targetId,_)))))}catch(d){if(!Ss(d))throw d;z(mp,"Failed to update sequence numbers: "+d)}for(const d of c){const g=d.targetId;if(!d.fromCache){const _=f.vs.get(g),A=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(A);f.vs=f.vs.insert(g,N)}}}(r.localStore,s))}async function rb(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){z(Ip,"User change. New user:",e.toKey());const r=await ZT(n.localStore,e);n.currentUser=e,function(s,o){s.yu.forEach(l=>{l.forEach(u=>{u.reject(new K(V.CANCELLED,o))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(n,r.Ns)}}function ib(t,e){const n=te(t),r=n.fu.get(e);if(r&&r.Eu)return oe().add(r.key);{let i=oe();const s=n.Vu.get(e);if(!s)return i;for(const o of s){const l=n.Au.get(o);i=i.unionWith(l.view.ou)}return i}}function mS(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ib.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zx.bind(null,e),e.Ru.H_=jx.bind(null,e.eventManager),e.Ru.Du=$x.bind(null,e.eventManager),e}function sb(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tb.bind(null,e),e}class _u{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ec(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return sx(this.persistence,new nx,e.initialUser,this.serializer)}xu(e){return new XT(pp.Vi,this.serializer)}Mu(e){return new dx}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_u.provider={build:()=>new _u};class ob extends _u{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){pe(this.persistence.referenceDelegate instanceof yu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $N(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new XT(r=>yu.Vi(r,n),this.serializer)}}class jd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>iv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rb.bind(null,this.syncEngine),await Lx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Mx}()}createDatastore(e){const n=ec(e.databaseInfo.databaseId),r=yx(e.databaseInfo);return Tx(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Ix(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>iv(this.syncEngine,n,0),function(){return Xy.v()?new Xy:new fx}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const d=new Kx(i,s,o,l,u,c);return f&&(d.Su=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);z(En,"RemoteStore shutting down."),s.da.add(5),await Ia(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}jd.provider={build:()=>new jd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="FirestoreClient";class lb{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=tp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{z(Pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z(Pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hh(t,e){t.asyncQueue.verifyOperationInProgress(),z(Pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ZT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ov(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ub(t);z(Pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ev(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ev(e.remoteStore,i)),t._onlineComponents=e}async function ub(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z(Pr,"Using user provided OfflineComponentProvider");try{await hh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ui("Error using user provided cache. Falling back to memory cache: "+n),await hh(t,new _u)}}else z(Pr,"Using default OfflineComponentProvider"),await hh(t,new ob(void 0));return t._offlineComponents}async function yS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z(Pr,"Using user provided OnlineComponentProvider"),await ov(t,t._uninitializedComponentsProvider._online)):(z(Pr,"Using default OnlineComponentProvider"),await ov(t,new jd))),t._onlineComponents}function cb(t){return yS(t).then(e=>e.syncEngine)}async function hb(t){const e=await yS(t),n=e.eventManager;return n.onListen=qx.bind(null,e.syncEngine),n.onUnlisten=Yx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Gx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Jx.bind(null,e.syncEngine),n}function db(t,e,n={}){const r=new wr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new ab({next:g=>{f.Ku(),o.enqueueAndForget(()=>Ux(s,d));const _=g.docs.has(l);!_&&g.fromCache?c.reject(new K(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&u&&u.source==="server"?c.reject(new K(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),d=new zx(lp(l.path),f,{includeMetadataChanges:!0,Wa:!0});return Fx(s,d)}(await hb(t),t.asyncQueue,e,n,r)),r.promise}function fb(t,e){const n=new wr;return t.asyncQueue.enqueueAndForget(async()=>Xx(await cb(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="ComponentProvider",av=new Map;function gb(t,e,n,r,i){return new NP(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,vS(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="firestore.googleapis.com",lv=!0;class uv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_S,this.ssl=lv}else this.host=e.host,this.ssl=e.ssl??lv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=JT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<UN)throw new K(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_P("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ap{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lP;switch(r.type){case"firstParty":return new dP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=av.get(n);r&&(z(pb,"Removing Datastore"),av.delete(n),r.terminate())}(this),Promise.resolve()}}function mb(t,e,n,r={}){var c;t=Jo(t,Ap);const i=ga(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&gE(`https://${l}`),s.host!==_S&&s.host!==l&&ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!si(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=st.MOCK_USER;else{f=EA(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new K(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new st(g)}t._authCredentials=new uP(new uT(f,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cp(this.firestore,e,this._query)}}class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(wa(n,qe._jsonSchema))return new qe(e,r||null,new G(Re.fromString(n.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:Me("string",qe._jsonSchemaVersion),referencePath:Me("string")};class sa extends Cp{constructor(e,n,r){super(e,n,lp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new G(e))}withConverter(e){return new sa(this.firestore,e,this._path)}}function cv(t,e,...n){if(t=gt(t),arguments.length===1&&(e=tp.newId()),vP("doc","path",e),t instanceof Ap){const r=Re.fromString(e,...n);return Sy(r),new qe(t,null,new G(r))}{if(!(t instanceof qe||t instanceof sa))throw new K(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Sy(r),new qe(t.firestore,t instanceof sa?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="AsyncQueue";class dv{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new tS(this,"async_queue_retry"),this.lc=()=>{const r=ch();r&&z(hv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=ch();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new wr;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Ss(e))throw e;z(hv,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Bn("INTERNAL UNHANDLED ERROR: ",fv(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=Ep.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&J(47125,{Rc:fv(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function fv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Rp extends Ap{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new dv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dv(e),this._firestoreClient=void 0,await e}}}function yb(t,e){const n=typeof t=="object"?t:Wf(),r=typeof t=="string"?t:hu,i=vs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_A("firestore");s&&mb(i,...s)}return i}function wS(t){if(t._terminated)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||vb(t),t._firestoreClient}function vb(t){var r,i,s,o;const e=t._freezeSettings(),n=gb(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new lb(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(tt.fromBase64String(e))}catch(n){throw new K(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ft(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wa(e,Ft._jsonSchema))return Ft.fromBase64String(e.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:Me("string",Ft._jsonSchemaVersion),bytes:Me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yn._jsonSchemaVersion}}static fromJSON(e){if(wa(e,yn._jsonSchema))return new yn(e.latitude,e.longitude)}}yn._jsonSchemaVersion="firestore/geoPoint/1.0",yn._jsonSchema={type:Me("string",yn._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wa(e,Xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Xt(e.vectorValues);throw new K(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xt._jsonSchemaVersion="firestore/vectorValue/1.0",Xt._jsonSchema={type:Me("string",Xt._jsonSchemaVersion),vectorValues:Me("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=/^__.*__$/;class wb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ea(e,this.data,n,this.fieldTransforms)}}function TS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{dataSource:t})}}class Np{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Np({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return wu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(TS(this.dataSource)&&_b.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class Eb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ec(e)}V(e,n,r,i=!1){return new Np({dataSource:e,methodName:n,targetDoc:r,path:Xe.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tb(t){const e=t._freezeSettings(),n=ec(t._databaseId);return new Eb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sb(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);AS("Data must be an object, but it was:",o,r);const l=IS(r,o);let u,c;if(s.merge)u=new Qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const d of s.mergeFields){const g=bp(e,d,n);if(!o.contains(g))throw new K(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ab(f,g)||f.push(g)}u=new Qt(f),c=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,c=o.fieldTransforms;return new wb(new Mt(l),u,c)}class xp extends Pp{_toFieldTransform(e){return new sN(e.path,new na)}isEqual(e){return e instanceof xp}}function SS(t,e){if(kS(t=gt(t)))return AS("Unsupported field value:",e,t),IS(t,e);if(t instanceof Pp)return function(r,i){if(!TS(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=SS(l,i.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=gt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Te.fromDate(r);return{timestampValue:mu(i.serializer,s)}}if(r instanceof Te){const s=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mu(i.serializer,s)}}if(r instanceof yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:BT(i.serializer,r._byteString)};if(r instanceof qe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:dp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Xt)return function(o,l){const u=o instanceof Xt?o.toArray():o;return{mapValue:{fields:{[vT]:{stringValue:_T},[du]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return up(l.serializer,f)})}}}}}}(r,i);if(YT(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${np(r)}`)}(t,e)}function IS(t,e){const n={};return dT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mi(t,(r,i)=>{const s=SS(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function kS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof yn||t instanceof Ft||t instanceof qe||t instanceof Pp||t instanceof Xt||YT(t))}function AS(t,e,n){if(!kS(n)||!cT(n)){const r=np(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function bp(t,e,n){if((e=gt(e))instanceof ES)return e._internalPath;if(typeof e=="string")return kb(t,e);throw wu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ib=new RegExp("[~\\*/\\[\\]]");function kb(t,e,n){if(e.search(Ib)>=0)throw wu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ES(...e.split("."))._internalPath}catch{throw wu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(V.INVALID_ARGUMENT,l+t+u)}function Ab(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return mi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[du].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>De(o.doubleValue));return new Xt(n)}convertGeoPoint(e){return new yn(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);pe(QT(r),9688,{name:e});const i=new ea(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb extends Cb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function Pb(){return new xp("serverTimestamp")}const pv="@firebase/firestore",gv="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(bp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Nb extends CS{data(){return super.data()}}function xb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zr extends CS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Zr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Zr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zr._jsonSchema={type:Me("string",Zr._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class xl extends Zr{data(e={}){return super.data(e)}}class Ao{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new co(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xl(this._firestore,this._userDataWriter,r.key,r,new co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new co(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new co(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:bb(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ao._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ao._jsonSchemaVersion="firestore/querySnapshot/1.0",Ao._jsonSchema={type:Me("string",Ao._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t){t=Jo(t,qe);const e=Jo(t.firestore,Rp),n=wS(e);return db(n,t._key).then(r=>Vb(e,t,r))}function Ob(t,e,n){t=Jo(t,qe);const r=Jo(t.firestore,Rp),i=xb(t.converter,e,n),s=Tb(r);return Lb(r,[Sb(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ln.none())])}function Lb(t,e){const n=wS(t);return fb(n,e)}function Vb(t,e,n){const r=n.docs.get(e._key),i=new Rb(t);return new Zr(t,i,e._key,r,new co(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){aP(_s),vn(new en("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Rp(new cP(r.getProvider("auth-internal")),new fP(o,r.getProvider("app-check-internal")),xP(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),$t(pv,gv,e),$t(pv,gv,"esm2020")})();const RS="@firebase/installations",Dp="0.6.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=1e4,NS=`w:${Dp}`,xS="FIS_v2",Mb="https://firebaseinstallations.googleapis.com/v1",Fb=60*60*1e3,Ub="installations",jb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ci=new gi(Ub,jb,$b);function bS(t){return t instanceof Tn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS({projectId:t}){return`${Mb}/projects/${t}/installations`}function OS(t){return{token:t.token,requestStatus:2,expiresIn:Bb(t.expiresIn),creationTime:Date.now()}}async function LS(t,e){const r=(await e.json()).error;return ci.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function VS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zb(t,{refreshToken:e}){const n=VS(t);return n.append("Authorization",Hb(e)),n}async function MS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Bb(t){return Number(t.replace("s","000"))}function Hb(t){return`${xS} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=DS(t),i=VS(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:xS,appId:t.appId,sdkVersion:NS},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await MS(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:OS(c.authToken)}}else throw await LS("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=/^[cdef][\w-]{21}$/,$d="";function Gb(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Qb(t);return qb.test(n)?n:$d}catch{return $d}}function Qb(t){return Kb(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new Map;function jS(t,e){const n=rc(t);$S(n,e),Yb(n,e)}function $S(t,e){const n=US.get(t);if(n)for(const r of n)r(e)}function Yb(t,e){const n=Jb();n&&n.postMessage({key:t,fid:e}),Xb()}let Yr=null;function Jb(){return!Yr&&"BroadcastChannel"in self&&(Yr=new BroadcastChannel("[Firebase] FID Change"),Yr.onmessage=t=>{$S(t.data.key,t.data.fid)}),Yr}function Xb(){US.size===0&&Yr&&(Yr.close(),Yr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="firebase-installations-database",eD=1,hi="firebase-installations-store";let dh=null;function Op(){return dh||(dh=zu(Zb,eD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hi)}}})),dh}async function Eu(t,e){const n=rc(t),i=(await Op()).transaction(hi,"readwrite"),s=i.objectStore(hi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&jS(t,e.fid),e}async function zS(t){const e=rc(t),r=(await Op()).transaction(hi,"readwrite");await r.objectStore(hi).delete(e),await r.done}async function ic(t,e){const n=rc(t),i=(await Op()).transaction(hi,"readwrite"),s=i.objectStore(hi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&jS(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lp(t){let e;const n=await ic(t.appConfig,r=>{const i=tD(r),s=nD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===$d?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tD(t){const e=t||{fid:Gb(),registrationStatus:0};return BS(e)}function nD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ci.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:iD(t)}:{installationEntry:e}}async function rD(t,e){try{const n=await Wb(t,e);return Eu(t.appConfig,n)}catch(n){throw bS(n)&&n.customData.serverCode===409?await zS(t.appConfig):await Eu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function iD(t){let e=await mv(t.appConfig);for(;e.registrationStatus===1;)await FS(100),e=await mv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Lp(t);return r||n}return e}function mv(t){return ic(t,e=>{if(!e)throw ci.create("installation-not-found");return BS(e)})}function BS(t){return sD(t)?{fid:t.fid,registrationStatus:0}:t}function sD(t){return t.registrationStatus===1&&t.registrationTime+PS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oD({appConfig:t,heartbeatServiceProvider:e},n){const r=aD(t,n),i=zb(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:NS,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await MS(()=>fetch(r,l));if(u.ok){const c=await u.json();return OS(c)}else throw await LS("Generate Auth Token",u)}function aD(t,{fid:e}){return`${DS(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(t,e=!1){let n;const r=await ic(t.appConfig,s=>{if(!HS(s))throw ci.create("not-registered");const o=s.authToken;if(!e&&cD(o))return s;if(o.requestStatus===1)return n=lD(t,e),s;{if(!navigator.onLine)throw ci.create("app-offline");const l=dD(s);return n=uD(t,l),l}});return n?await n:r.authToken}async function lD(t,e){let n=await yv(t.appConfig);for(;n.authToken.requestStatus===1;)await FS(100),n=await yv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Vp(t,e):r}function yv(t){return ic(t,e=>{if(!HS(e))throw ci.create("not-registered");const n=e.authToken;return fD(n)?{...e,authToken:{requestStatus:0}}:e})}async function uD(t,e){try{const n=await oD(t,e),r={...e,authToken:n};return await Eu(t.appConfig,r),n}catch(n){if(bS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await zS(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Eu(t.appConfig,r)}throw n}}function HS(t){return t!==void 0&&t.registrationStatus===2}function cD(t){return t.requestStatus===2&&!hD(t)}function hD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Fb}function dD(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function fD(t){return t.requestStatus===1&&t.requestTime+PS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Lp(e);return r?r.catch(console.error):Vp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(t,e=!1){const n=t;return await mD(n),(await Vp(n,e)).token}async function mD(t){const{registrationPromise:e}=await Lp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){if(!t||!t.options)throw fh("App Configuration");if(!t.name)throw fh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw fh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function fh(t){return ci.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS="installations",vD="installations-internal",_D=t=>{const e=t.getProvider("app").getImmediate(),n=yD(e),r=vs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wD=t=>{const e=t.getProvider("app").getImmediate(),n=vs(e,WS).getImmediate();return{getId:()=>pD(n),getToken:i=>gD(n,i)}};function ED(){vn(new en(WS,_D,"PUBLIC")),vn(new en(vD,wD,"PRIVATE"))}ED();$t(RS,Dp);$t(RS,Dp,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD="/firebase-messaging-sw.js",SD="/firebase-cloud-messaging-push-scope",KS="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ID="https://fcmregistrations.googleapis.com/v1",qS="google.c.a.c_id",kD="google.c.a.c_l",AD="google.c.a.ts",CD="google.c.a.e",vv=1e4;var _v;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(_v||(_v={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var oa;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(oa||(oa={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function RD(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="fcm_token_details_db",PD=5,wv="fcm_token_object_Store";async function ND(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(ph))return null;let e=null;return(await zu(ph,PD,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(wv))return;const l=o.objectStore(wv),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:c.createTime??Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:In(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:In(c.auth),p256dh:In(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:In(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:In(c.auth),p256dh:In(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:In(c.vapidKey)}}}}}})).close(),await nh(ph),await nh("fcm_vapid_details_db"),await nh("undefined"),xD(e)?e:null}function xD(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD="firebase-messaging-database",DD=1,aa="firebase-messaging-store";let gh=null;function GS(){return gh||(gh=zu(bD,DD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(aa)}}})),gh}async function OD(t){const e=QS(t),r=await(await GS()).transaction(aa).objectStore(aa).get(e);if(r)return r;{const i=await ND(t.appConfig.senderId);if(i)return await Mp(t,i),i}}async function Mp(t,e){const n=QS(t),i=(await GS()).transaction(aa,"readwrite");return await i.objectStore(aa).put(e,n),await i.done,e}function QS({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},pt=new gi("messaging","Messaging",LD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(t,e){const n=await Up(t),r=YS(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Fp(t.appConfig),i)).json()}catch(o){throw pt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw pt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw pt.create("token-subscribe-no-token");return s.token}async function MD(t,e){const n=await Up(t),r=YS(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Fp(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw pt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw pt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw pt.create("token-update-no-token");return s.token}async function FD(t,e){const r={method:"DELETE",headers:await Up(t)};try{const s=await(await fetch(`${Fp(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw pt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw pt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Fp({projectId:t}){return`${ID}/projects/${t}/registrations`}async function Up({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function YS({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==KS&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=7*24*60*60*1e3;async function jD(t){const e=await zD(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:In(e.getKey("auth")),p256dh:In(e.getKey("p256dh"))},r=await OD(t.firebaseDependencies);if(r){if(BD(r.subscriptionOptions,n))return Date.now()>=r.createTime+UD?$D(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await FD(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Ev(t.firebaseDependencies,n)}else return Ev(t.firebaseDependencies,n)}async function $D(t,e){try{const n=await MD(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await Mp(t.firebaseDependencies,r),n}catch(n){throw n}}async function Ev(t,e){const r={token:await VD(t,e),createTime:Date.now(),subscriptionOptions:e};return await Mp(t,r),r.token}async function zD(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:RD(e)})}function BD(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return HD(e,t),WD(e,t),KD(e,t),e}function HD(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function WD(t,e){e.data&&(t.data=e.data)}function KD(t,e){var i,s,o,l;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((s=e.fcmOptions)==null?void 0:s.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(t){return typeof t=="object"&&!!t&&qS in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t){if(!t||!t.options)throw mh("App Configuration Object");if(!t.name)throw mh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw mh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function mh(t){return pt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=GD(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YD(t){try{t.swRegistration=await navigator.serviceWorker.register(TD,{scope:SD}),t.swRegistration.update().catch(()=>{}),await JD(t.swRegistration)}catch(e){throw pt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function JD(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${vv} ms`)),vv),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XD(t,e){if(!e&&!t.swRegistration&&await YD(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw pt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZD(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=KS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(t,e){if(!navigator)throw pt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw pt.create("permission-blocked");return await ZD(t,e==null?void 0:e.vapidKey),await XD(t,e==null?void 0:e.serviceWorkerRegistration),jD(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(t,e,n){const r=tO(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[qS],message_name:n[kD],message_time:n[AD],message_device_time:Math.floor(Date.now()/1e3)})}function tO(t){switch(t){case oa.NOTIFICATION_CLICKED:return"notification_open";case oa.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===oa.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Tv(n)):t.onMessageHandler.next(Tv(n)));const r=n.data;qD(r)&&r[CD]==="1"&&await eO(t,n.messageType,r)}const Sv="@firebase/messaging",Iv="0.12.26";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=t=>{const e=new QD(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>nO(e,n)),e},iO=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>JS(e,r)}};function sO(){vn(new en("messaging",rO,"PUBLIC")),vn(new en("messaging-internal",iO,"PRIVATE")),$t(Sv,Iv),$t(Sv,Iv,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oO(){try{await pE()}catch{return!1}return typeof window<"u"&&fE()&&PA()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(t=Wf()){return oO().then(e=>{if(!e)throw pt.create("unsupported-browser")},e=>{throw pt.create("indexed-db-unsupported")}),vs(gt(t),"messaging").getImmediate()}async function lO(t,e){return t=gt(t),JS(t,e)}sO();const uO={apiKey:"AIzaSyCwQ6ilSsHfgJfyooDuJhcI4SCrSmwe7YY",authDomain:"habit-tracker-e4d82.firebaseapp.com",projectId:"habit-tracker-e4d82",storageBucket:"habit-tracker-e4d82.firebasestorage.app",messagingSenderId:"41819438398",appId:"1:41819438398:web:e059660ac9f485dfb4806f",measurementId:"G-P4K2NR598B"},jp=vE(uO),fs=rP(jp);new An;const cO=(t,e)=>zR(fs,t,e),hO=(t,e)=>$R(fs,t,e),kv=yb(jp),dO=aO(jp),XS=B.createContext({user:null,loading:!0}),fO=({children:t})=>{const[e,n]=B.useState(null),[r,i]=B.useState(!0);return B.useEffect(()=>{const s=WR(fs,o=>{n(o),i(!1)});return _1(fs).catch(o=>{console.warn("getRedirectResult error:",o)}),()=>s()},[]),P.jsx(XS.Provider,{value:{user:e,loading:r},children:t})},ZS=()=>B.useContext(XS),X=t=>typeof t=="string",eo=()=>{let t,e;const n=new Promise((r,i)=>{t=r,e=i});return n.resolve=t,n.reject=e,n},Av=t=>t==null?"":String(t),pO=(t,e,n)=>{t.forEach(r=>{e[r]&&(n[r]=e[r])})},gO=/###/g,Cv=t=>t&&t.includes("###")?t.replace(gO,"."):t,Rv=t=>!t||X(t),Co=(t,e,n)=>{const r=X(e)?e.split("."):e;let i=0;for(;i<r.length-1;){if(Rv(t))return{};const s=Cv(r[i]);!t[s]&&n&&(t[s]=new n),Object.prototype.hasOwnProperty.call(t,s)?t=t[s]:t={},++i}return Rv(t)?{}:{obj:t,k:Cv(r[i])}},Pv=(t,e,n)=>{const{obj:r,k:i}=Co(t,e,Object);if(r!==void 0||e.length===1){r[i]=n;return}let s=e[e.length-1],o=e.slice(0,e.length-1),l=Co(t,o,Object);for(;l.obj===void 0&&o.length;)s=`${o[o.length-1]}.${s}`,o=o.slice(0,o.length-1),l=Co(t,o,Object),l!=null&&l.obj&&typeof l.obj[`${l.k}.${s}`]<"u"&&(l.obj=void 0);l.obj[`${l.k}.${s}`]=n},mO=(t,e,n,r)=>{const{obj:i,k:s}=Co(t,e,Object);i[s]=i[s]||[],i[s].push(n)},Tu=(t,e)=>{const{obj:n,k:r}=Co(t,e);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},yO=(t,e,n)=>{const r=Tu(t,n);return r!==void 0?r:Tu(e,n)},e0=(t,e,n)=>{for(const r in e)r!=="__proto__"&&r!=="constructor"&&(r in t?X(t[r])||t[r]instanceof String||X(e[r])||e[r]instanceof String?n&&(t[r]=e[r]):e0(t[r],e[r],n):t[r]=e[r]);return t},zr=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),vO={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},_O=t=>X(t)?t.replace(/[&<>"'\/]/g,e=>vO[e]):t;class wO{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}const EO=[" ",",","?","!",";"],TO=new wO(20),SO=(t,e,n)=>{e=e||"",n=n||"";const r=EO.filter(o=>!e.includes(o)&&!n.includes(o));if(r.length===0)return!0;const i=TO.getRegExp(`(${r.map(o=>o==="?"?"\\?":o).join("|")})`);let s=!i.test(t);if(!s){const o=t.indexOf(n);o>0&&!i.test(t.substring(0,o))&&(s=!0)}return s},zd=(t,e,n=".")=>{if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const r=e.split(n);let i=t;for(let s=0;s<r.length;){if(!i||typeof i!="object")return;let o,l="";for(let u=s;u<r.length;++u)if(u!==s&&(l+=n),l+=r[u],o=i[l],o!==void 0){if(["string","number","boolean"].includes(typeof o)&&u<r.length-1)continue;s+=u-s+1;break}i=o}return i},la=t=>t==null?void 0:t.replace(/_/g,"-"),IO={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){var n,r;(r=(n=console==null?void 0:console[t])==null?void 0:n.apply)==null||r.call(n,console,e)}};class Su{constructor(e,n={}){this.init(e,n)}init(e,n={}){this.prefix=n.prefix||"i18next:",this.logger=e||IO,this.options=n,this.debug=n.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,r,i){return i&&!this.debug?null:(X(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new Su(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Su(this.logger,e)}}var cn=new Su;class sc{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const i=this.observers[r].get(n)||0;this.observers[r].set(n,i+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}once(e,n){const r=(...i)=>{n(...i),this.off(e,r)};return this.on(e,r),this}emit(e,...n){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([i,s])=>{for(let o=0;o<s;o++)i(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([i,s])=>{for(let o=0;o<s;o++)i(e,...n)})}}class Nv extends sc{constructor(e,n={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,r,i={}){var c,f;const s=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,o=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let l;e.includes(".")?l=e.split("."):(l=[e,n],r&&(Array.isArray(r)?l.push(...r):X(r)&&s?l.push(...r.split(s)):l.push(r)));const u=Tu(this.data,l);return!u&&!n&&!r&&e.includes(".")&&(e=l[0],n=l[1],r=l.slice(2).join(".")),u||!o||!X(r)?u:zd((f=(c=this.data)==null?void 0:c[e])==null?void 0:f[n],r,s)}addResource(e,n,r,i,s={silent:!1}){const o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let l=[e,n];r&&(l=l.concat(o?r.split(o):r)),e.includes(".")&&(l=e.split("."),i=n,n=l[1]),this.addNamespaces(n),Pv(this.data,l,i),s.silent||this.emit("added",e,n,r,i)}addResources(e,n,r,i={silent:!1}){for(const s in r)(X(r[s])||Array.isArray(r[s]))&&this.addResource(e,n,s,r[s],{silent:!0});i.silent||this.emit("added",e,n,r)}addResourceBundle(e,n,r,i,s,o={silent:!1,skipCopy:!1}){let l=[e,n];e.includes(".")&&(l=e.split("."),i=r,r=n,n=l[1]),this.addNamespaces(n);let u=Tu(this.data,l)||{};o.skipCopy||(r=JSON.parse(JSON.stringify(r))),i?e0(u,r,s):u={...u,...r},Pv(this.data,l,u),o.silent||this.emit("added",e,n,r)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(i=>n[i]&&Object.keys(n[i]).length>0)}toJSON(){return this.data}}var t0={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,r,i){return t.forEach(s=>{var o;e=((o=this.processors[s])==null?void 0:o.process(e,n,r,i))??e}),e}};const n0=Symbol("i18next/PATH_KEY");function kO(){const t=[],e=Object.create(null);let n;return e.get=(r,i)=>{var s;return(s=n==null?void 0:n.revoke)==null||s.call(n),i===n0?t:(t.push(i),n=Proxy.revocable(r,e),n.proxy)},Proxy.revocable(Object.create(null),e).proxy}function ts(t,e){const{[n0]:n}=t(kO()),r=(e==null?void 0:e.keySeparator)??".",i=(e==null?void 0:e.nsSeparator)??":";if(n.length>1&&i){const s=e==null?void 0:e.ns,o=Array.isArray(s)?s:null;if(o&&o.length>1&&o.slice(1).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}const yh=t=>!X(t)&&typeof t!="boolean"&&typeof t!="number";class Iu extends sc{constructor(e,n={}){super(),pO(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=cn.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,n={interpolation:{}}){const r={...n};if(e==null)return!1;const i=this.resolve(e,r);if((i==null?void 0:i.res)===void 0)return!1;const s=yh(i.res);return!(r.returnObjects===!1&&s)}extractFromKey(e,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let s=n.ns||this.options.defaultNS||[];const o=r&&e.includes(r),l=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!SO(e,r,i);if(o&&!l){const u=e.match(this.interpolator.nestingRegexp);if(u&&u.length>0)return{key:e,namespaces:X(s)?[s]:s};const c=e.split(r);(r!==i||r===i&&this.options.ns.includes(c[0]))&&(s=c.shift()),e=c.join(i)}return{key:e,namespaces:X(s)?[s]:s}}translate(e,n,r){let i=typeof n=="object"?{...n}:n;if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),e==null)return"";typeof e=="function"&&(e=ts(e,{...this.options,...i})),Array.isArray(e)||(e=[String(e)]),e=e.map(v=>typeof v=="function"?ts(v,{...this.options,...i}):String(v));const s=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:l,namespaces:u}=this.extractFromKey(e[e.length-1],i),c=u[u.length-1];let f=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;f===void 0&&(f=":");const d=i.lng||this.language,g=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((d==null?void 0:d.toLowerCase())==="cimode")return g?s?{res:`${c}${f}${l}`,usedKey:l,exactUsedKey:l,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(i)}:`${c}${f}${l}`:s?{res:l,usedKey:l,exactUsedKey:l,usedLng:d,usedNS:c,usedParams:this.getUsedParamsDetails(i)}:l;const _=this.resolve(e,i);let A=_==null?void 0:_.res;const N=(_==null?void 0:_.usedKey)||l,O=(_==null?void 0:_.exactUsedKey)||l,I=["[object Number]","[object Function]","[object RegExp]"],w=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,D=i.count!==void 0&&!X(i.count),M=Iu.hasDefaultValue(i),U=D?this.pluralResolver.getSuffix(d,i.count,i):"",E=i.ordinal&&D?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):"",y=D&&!i.ordinal&&i.count===0,T=y&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${U}`]||i[`defaultValue${E}`]||i.defaultValue;let S=A;k&&!A&&M&&(S=T);const C=yh(S),R=Object.prototype.toString.apply(S);if(k&&S&&C&&!I.includes(R)&&!(X(w)&&Array.isArray(S))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const v=this.options.returnedObjectHandler?this.options.returnedObjectHandler(N,S,{...i,ns:u}):`key '${l} (${this.language})' returned an object instead of string.`;return s?(_.res=v,_.usedParams=this.getUsedParamsDetails(i),_):v}if(o){const v=Array.isArray(S),q=v?[]:{},ue=v?O:N;for(const fe in S)if(Object.prototype.hasOwnProperty.call(S,fe)){const _e=`${ue}${o}${fe}`;M&&!A?q[fe]=this.translate(_e,{...i,defaultValue:yh(T)?T[fe]:void 0,joinArrays:!1,ns:u}):q[fe]=this.translate(_e,{...i,joinArrays:!1,ns:u}),q[fe]===_e&&(q[fe]=S[fe])}A=q}}else if(k&&X(w)&&Array.isArray(A))A=A.join(w),A&&(A=this.extendTranslation(A,e,i,r));else{let v=!1,q=!1;!this.isValidLookup(A)&&M&&(v=!0,A=T),this.isValidLookup(A)||(q=!0,A=l);const fe=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&q?void 0:A,_e=M&&T!==A&&this.options.updateMissing;if(q||v||_e){if(this.logger.log(_e?"updateKey":"missingKey",d,c,l,_e?T:A),o){const ne=this.resolve(l,{...i,keySeparator:!1});ne&&ne.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let $=[];const W=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&W&&W[0])for(let ne=0;ne<W.length;ne++)$.push(W[ne]);else this.options.saveMissingTo==="all"?$=this.languageUtils.toResolveHierarchy(i.lng||this.language):$.push(i.lng||this.language);const Z=(ne,de,ct)=>{var Dt;const Qe=M&&ct!==A?ct:fe;this.options.missingKeyHandler?this.options.missingKeyHandler(ne,c,de,Qe,_e,i):(Dt=this.backendConnector)!=null&&Dt.saveMissing&&this.backendConnector.saveMissing(ne,c,de,Qe,_e,i),this.emit("missingKey",ne,c,de,A)};this.options.saveMissing&&(this.options.saveMissingPlurals&&D?$.forEach(ne=>{const de=this.pluralResolver.getSuffixes(ne,i);y&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!de.includes(`${this.options.pluralSeparator}zero`)&&de.push(`${this.options.pluralSeparator}zero`),de.forEach(ct=>{Z([ne],l+ct,i[`defaultValue${ct}`]||T)})}):Z($,l,T))}A=this.extendTranslation(A,e,i,_,r),q&&A===l&&this.options.appendNamespaceToMissingKey&&(A=`${c}${f}${l}`),(q||v)&&this.options.parseMissingKeyHandler&&(A=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${f}${l}`:l,v?A:void 0,i))}return s?(_.res=A,_.usedParams=this.getUsedParamsDetails(i),_):A}extendTranslation(e,n,r,i,s){var u,c;if((u=this.i18nFormat)!=null&&u.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const f=X(e)&&(((c=r==null?void 0:r.interpolation)==null?void 0:c.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(f){const _=e.match(this.interpolator.nestingRegexp);d=_&&_.length}let g=r.replace&&!X(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(g={...this.options.interpolation.defaultVariables,...g}),e=this.interpolator.interpolate(e,g,r.lng||this.language||i.usedLng,r),f){const _=e.match(this.interpolator.nestingRegexp),A=_&&_.length;d<A&&(r.nest=!1)}!r.lng&&i&&i.res&&(r.lng=this.language||i.usedLng),r.nest!==!1&&(e=this.interpolator.nest(e,(..._)=>(s==null?void 0:s[0])===_[0]&&!r.context?(this.logger.warn(`It seems you are nesting recursively key: ${_[0]} in key: ${n[0]}`),null):this.translate(..._,n),r)),r.interpolation&&this.interpolator.reset()}const o=r.postProcess||this.options.postProcess,l=X(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&r.applyPostProcessor!==!1&&(e=t0.handle(l,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e,n={}){let r,i,s,o,l;return X(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(u=>typeof u=="function"?ts(u,{...this.options,...n}):u)),e.forEach(u=>{if(this.isValidLookup(r))return;const c=this.extractFromKey(u,n),f=c.key;i=f;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const g=n.count!==void 0&&!X(n.count),_=g&&!n.ordinal&&n.count===0,A=n.context!==void 0&&(X(n.context)||typeof n.context=="number")&&n.context!=="",N=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);d.forEach(O=>{var I,w;this.isValidLookup(r)||(l=O,!this.checkedLoadedFor[`${N[0]}-${O}`]&&((I=this.utils)!=null&&I.hasLoadedNamespace)&&!((w=this.utils)!=null&&w.hasLoadedNamespace(l))&&(this.checkedLoadedFor[`${N[0]}-${O}`]=!0,this.logger.warn(`key "${i}" for languages "${N.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),N.forEach(k=>{var U;if(this.isValidLookup(r))return;o=k;const D=[f];if((U=this.i18nFormat)!=null&&U.addLookupKeys)this.i18nFormat.addLookupKeys(D,f,k,O,n);else{let E;g&&(E=this.pluralResolver.getSuffix(k,n.count,n));const y=`${this.options.pluralSeparator}zero`,T=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(g&&(n.ordinal&&E.startsWith(T)&&D.push(f+E.replace(T,this.options.pluralSeparator)),D.push(f+E),_&&D.push(f+y)),A){const S=`${f}${this.options.contextSeparator||"_"}${n.context}`;D.push(S),g&&(n.ordinal&&E.startsWith(T)&&D.push(S+E.replace(T,this.options.pluralSeparator)),D.push(S+E),_&&D.push(S+y))}}let M;for(;M=D.pop();)this.isValidLookup(r)||(s=M,r=this.getResource(k,O,M,n))}))})}),{res:r,usedKey:i,exactUsedKey:s,usedLng:o,usedNS:l}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,r,i={}){var s;return(s=this.i18nFormat)!=null&&s.getResource?this.i18nFormat.getResource(e,n,r,i):this.resourceStore.getResource(e,n,r,i)}getUsedParamsDetails(e={}){const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!X(e.replace);let i=r?e.replace:e;if(r&&typeof e.count<"u"&&(i.count=e.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!r){i={...i};for(const s of n)delete i[s]}return i}static hasDefaultValue(e){const n="defaultValue";for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&r.startsWith(n)&&e[r]!==void 0)return!0;return!1}}class xv{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=cn.create("languageUtils")}getScriptPartFromCode(e){if(e=la(e),!e||!e.includes("-"))return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=la(e),!e||!e.includes("-"))return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(X(e)&&e.includes("-")){let n;try{n=Intl.getCanonicalLocales(e)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(r=>{if(n)return;const i=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(i))&&(n=i)}),!n&&this.options.supportedLngs&&e.forEach(r=>{if(n)return;const i=this.getScriptPartFromCode(r);if(this.isSupportedCode(i))return n=i;const s=this.getLanguagePartFromCode(r);if(this.isSupportedCode(s))return n=s;n=this.options.supportedLngs.find(o=>o===s?!0:!o.includes("-")&&!s.includes("-")?!1:!!(o.includes("-")&&!s.includes("-")&&o.slice(0,o.indexOf("-"))===s||o.startsWith(s)&&s.length>1))}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),X(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let r=e[n];return r||(r=e[this.getScriptPartFromCode(n)]),r||(r=e[this.formatLanguageCode(n)]),r||(r=e[this.getLanguagePartFromCode(n)]),r||(r=e.default),r||[]}toResolveHierarchy(e,n){const r=this.getFallbackCodes((n===!1?[]:n)||this.options.fallbackLng||[],e),i=[],s=o=>{o&&(this.isSupportedCode(o)?i.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return X(e)&&(e.includes("-")||e.includes("_"))?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):X(e)&&s(this.formatLanguageCode(e)),r.forEach(o=>{i.includes(o)||s(this.formatLanguageCode(o))}),i}}const bv={zero:0,one:1,two:2,few:3,many:4,other:5},Dv={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class AO{constructor(e,n={}){this.languageUtils=e,this.options=n,this.logger=cn.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,n={}){const r=la(e==="dev"?"en":e),i=n.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:r,type:i});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let o;try{o=new Intl.PluralRules(r,{type:i})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Dv;if(!e.match(/-|_/))return Dv;const u=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(u,n)}return this.pluralRulesCache[s]=o,o}needsPlural(e,n={}){let r=this.getRule(e,n);return r||(r=this.getRule("dev",n)),(r==null?void 0:r.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,n,r={}){return this.getSuffixes(e,r).map(i=>`${n}${i}`)}getSuffixes(e,n={}){let r=this.getRule(e,n);return r||(r=this.getRule("dev",n)),r?r.resolvedOptions().pluralCategories.sort((i,s)=>bv[i]-bv[s]).map(i=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i}`):[]}getSuffix(e,n,r={}){const i=this.getRule(e,r);return i?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${i.select(n)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",n,r))}}const Ov=(t,e,n,r=".",i=!0)=>{let s=yO(t,e,n);return!s&&i&&X(n)&&(s=zd(t,n,r),s===void 0&&(s=zd(e,n,r))),s},vh=t=>t.replace(/\$/g,"$$$$");class Lv{constructor(e={}){var n;this.logger=cn.create("interpolator"),this.options=e,this.format=((n=e==null?void 0:e.interpolation)==null?void 0:n.format)||(r=>r),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:i,prefix:s,prefixEscaped:o,suffix:l,suffixEscaped:u,formatSeparator:c,unescapeSuffix:f,unescapePrefix:d,nestingPrefix:g,nestingPrefixEscaped:_,nestingSuffix:A,nestingSuffixEscaped:N,nestingOptionsSeparator:O,maxReplaces:I,alwaysFormat:w}=e.interpolation;this.escape=n!==void 0?n:_O,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=s?zr(s):o||"{{",this.suffix=l?zr(l):u||"}}",this.formatSeparator=c||",",this.unescapePrefix=f?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":f||"",this.nestingPrefix=g?zr(g):_||zr("$t("),this.nestingSuffix=A?zr(A):N||zr(")"),this.nestingOptionsSeparator=O||",",this.maxReplaces=I||1e3,this.alwaysFormat=w!==void 0?w:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,r)=>(n==null?void 0:n.source)===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,n,r,i){var _;let s,o,l;const u=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=A=>{if(!A.includes(this.formatSeparator)){const w=Ov(n,u,A,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(w,void 0,r,{...i,...n,interpolationkey:A}):w}const N=A.split(this.formatSeparator),O=N.shift().trim(),I=N.join(this.formatSeparator).trim();return this.format(Ov(n,u,O,this.options.keySeparator,this.options.ignoreJSONStructure),I,r,{...i,...n,interpolationkey:O})};this.resetRegExp();const f=(i==null?void 0:i.missingInterpolationHandler)||this.options.missingInterpolationHandler,d=((_=i==null?void 0:i.interpolation)==null?void 0:_.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:A=>vh(A)},{regex:this.regexp,safeValue:A=>this.escapeValue?vh(this.escape(A)):vh(A)}].forEach(A=>{for(l=0;s=A.regex.exec(e);){const N=s[1].trim();if(o=c(N),o===void 0)if(typeof f=="function"){const I=f(e,s,i);o=X(I)?I:""}else if(i&&Object.prototype.hasOwnProperty.call(i,N))o="";else if(d){o=s[0];continue}else this.logger.warn(`missed to pass in variable ${N} for interpolating ${e}`),o="";else!X(o)&&!this.useRawValueToEscape&&(o=Av(o));const O=A.safeValue(o);if(e=e.replace(s[0],O),d?(A.regex.lastIndex+=o.length,A.regex.lastIndex-=s[0].length):A.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),e}nest(e,n,r={}){let i,s,o;const l=(u,c)=>{const f=this.nestingOptionsSeparator;if(!u.includes(f))return u;const d=u.split(new RegExp(`${zr(f)}[ ]*{`));let g=`{${d[1]}`;u=d[0],g=this.interpolate(g,o);const _=g.match(/'/g),A=g.match(/"/g);(((_==null?void 0:_.length)??0)%2===0&&!A||((A==null?void 0:A.length)??0)%2!==0)&&(g=g.replace(/'/g,'"'));try{o=JSON.parse(g),c&&(o={...c,...o})}catch(N){return this.logger.warn(`failed parsing options string in nesting for key ${u}`,N),`${u}${f}${g}`}return o.defaultValue&&o.defaultValue.includes(this.prefix)&&delete o.defaultValue,u};for(;i=this.nestingRegexp.exec(e);){let u=[];o={...r},o=o.replace&&!X(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;const c=/{.*}/.test(i[1])?i[1].lastIndexOf("}")+1:i[1].indexOf(this.formatSeparator);if(c!==-1&&(u=i[1].slice(c).split(this.formatSeparator).map(f=>f.trim()).filter(Boolean),i[1]=i[1].slice(0,c)),s=n(l.call(this,i[1].trim(),o),o),s&&i[0]===e&&!X(s))return s;X(s)||(s=Av(s)),s||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),s=""),u.length&&(s=u.reduce((f,d)=>this.format(f,d,r.lng,{...r,interpolationkey:i[1].trim()}),s.trim())),e=e.replace(i[0],s),this.regexp.lastIndex=0}return e}}const CO=t=>{let e=t.toLowerCase().trim();const n={};if(t.includes("(")){const r=t.split("(");e=r[0].toLowerCase().trim();const i=r[1].slice(0,-1);e==="currency"&&!i.includes(":")?n.currency||(n.currency=i.trim()):e==="relativetime"&&!i.includes(":")?n.range||(n.range=i.trim()):i.split(";").forEach(o=>{if(o){const[l,...u]=o.split(":"),c=u.join(":").trim().replace(/^'+|'+$/g,""),f=l.trim();n[f]||(n[f]=c),c==="false"&&(n[f]=!1),c==="true"&&(n[f]=!0),isNaN(c)||(n[f]=parseInt(c,10))}})}return{formatName:e,formatOptions:n}},Vv=t=>{const e={};return(n,r,i)=>{let s=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(s={...s,[i.interpolationkey]:void 0});const o=r+JSON.stringify(s);let l=e[o];return l||(l=t(la(r),i),e[o]=l),l(n)}},RO=t=>(e,n,r)=>t(la(n),r)(e);class PO{constructor(e={}){this.logger=cn.create("formatter"),this.options=e,this.init(e)}init(e,n={interpolation:{}}){this.formatSeparator=n.interpolation.formatSeparator||",";const r=n.cacheInBuiltFormats?Vv:RO;this.formats={number:r((i,s)=>{const o=new Intl.NumberFormat(i,{...s});return l=>o.format(l)}),currency:r((i,s)=>{const o=new Intl.NumberFormat(i,{...s,style:"currency"});return l=>o.format(l)}),datetime:r((i,s)=>{const o=new Intl.DateTimeFormat(i,{...s});return l=>o.format(l)}),relativetime:r((i,s)=>{const o=new Intl.RelativeTimeFormat(i,{...s});return l=>o.format(l,s.range||"day")}),list:r((i,s)=>{const o=new Intl.ListFormat(i,{...s});return l=>o.format(l)})}}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=Vv(n)}format(e,n,r,i={}){if(!n||e==null)return e;const s=n.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&!s[0].includes(")")&&s.find(l=>l.includes(")"))){const l=s.findIndex(u=>u.includes(")"));s[0]=[s[0],...s.splice(1,l)].join(this.formatSeparator)}return s.reduce((l,u)=>{var d;const{formatName:c,formatOptions:f}=CO(u);if(this.formats[c]){let g=l;try{const _=((d=i==null?void 0:i.formatParams)==null?void 0:d[i.interpolationkey])||{},A=_.locale||_.lng||i.locale||i.lng||r;g=this.formats[c](l,A,{...f,...i,..._})}catch(_){this.logger.warn(_)}return g}else this.logger.warn(`there was no format function for ${c}`);return l},e)}}const NO=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class xO extends sc{constructor(e,n,r,i={}){var s,o;super(),this.backend=e,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=i,this.logger=cn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],(o=(s=this.backend)==null?void 0:s.init)==null||o.call(s,r,i.backend,i)}queueLoad(e,n,r,i){const s={},o={},l={},u={};return e.forEach(c=>{let f=!0;n.forEach(d=>{const g=`${c}|${d}`;!r.reload&&this.store.hasResourceBundle(c,d)?this.state[g]=2:this.state[g]<0||(this.state[g]===1?o[g]===void 0&&(o[g]=!0):(this.state[g]=1,f=!1,o[g]===void 0&&(o[g]=!0),s[g]===void 0&&(s[g]=!0),u[d]===void 0&&(u[d]=!0)))}),f||(l[c]=!0)}),(Object.keys(s).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(s),pending:Object.keys(o),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(u)}}loaded(e,n,r){const i=e.split("|"),s=i[0],o=i[1];n&&this.emit("failedLoading",s,o,n),!n&&r&&this.store.addResourceBundle(s,o,r,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&r&&(this.state[e]=0);const l={};this.queue.forEach(u=>{mO(u.loaded,[s],o),NO(u,e),n&&u.errors.push(n),u.pendingCount===0&&!u.done&&(Object.keys(u.loaded).forEach(c=>{l[c]||(l[c]={});const f=u.loaded[c];f.length&&f.forEach(d=>{l[c][d]===void 0&&(l[c][d]=!0)})}),u.done=!0,u.errors.length?u.callback(u.errors):u.callback())}),this.emit("loaded",l),this.queue=this.queue.filter(u=>!u.done)}read(e,n,r,i=0,s=this.retryTimeout,o){if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:r,tried:i,wait:s,callback:o});return}this.readingCalls++;const l=(c,f)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&f&&i<this.maxRetries){setTimeout(()=>{this.read(e,n,r,i+1,s*2,o)},s);return}o(c,f)},u=this.backend[r].bind(this.backend);if(u.length===2){try{const c=u(e,n);c&&typeof c.then=="function"?c.then(f=>l(null,f)).catch(l):l(null,c)}catch(c){l(c)}return}return u(e,n,l)}prepareLoading(e,n,r={},i){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();X(e)&&(e=this.languageUtils.toResolveHierarchy(e)),X(n)&&(n=[n]);const s=this.queueLoad(e,n,r,i);if(!s.toLoad.length)return s.pending.length||i(),null;s.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,r){this.prepareLoading(e,n,{},r)}reload(e,n,r){this.prepareLoading(e,n,{reload:!0},r)}loadOne(e,n=""){const r=e.split("|"),i=r[0],s=r[1];this.read(i,s,"read",void 0,void 0,(o,l)=>{o&&this.logger.warn(`${n}loading namespace ${s} for language ${i} failed`,o),!o&&l&&this.logger.log(`${n}loaded namespace ${s} for language ${i}`,l),this.loaded(e,o,l)})}saveMissing(e,n,r,i,s,o={},l=()=>{}){var u,c,f,d,g;if((c=(u=this.services)==null?void 0:u.utils)!=null&&c.hasLoadedNamespace&&!((d=(f=this.services)==null?void 0:f.utils)!=null&&d.hasLoadedNamespace(n))){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if((g=this.backend)!=null&&g.create){const _={...o,isUpdate:s},A=this.backend.create.bind(this.backend);if(A.length<6)try{let N;A.length===5?N=A(e,n,r,i,_):N=A(e,n,r,i),N&&typeof N.then=="function"?N.then(O=>l(null,O)).catch(l):l(null,N)}catch(N){l(N)}else A(e,n,r,i,l,_)}!e||!e[0]||this.store.addResource(e[0],n,r,i)}}}const _h=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),X(t[1])&&(e.defaultValue=t[1]),X(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(r=>{e[r]=n[r]})}return e},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Mv=t=>(X(t.ns)&&(t.ns=[t.ns]),X(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),X(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&!t.supportedLngs.includes("cimode")&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),ul=()=>{},bO=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class Ro extends sc{constructor(e={},n){if(super(),this.options=Mv(e),this.services={},this.logger=cn,this.modules={external:[]},bO(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(e={},n){this.isInitializing=!0,typeof e=="function"&&(n=e,e={}),e.defaultNS==null&&e.ns&&(X(e.ns)?e.defaultNS=e.ns:e.ns.includes("translation")||(e.defaultNS=e.ns[0]));const r=_h();this.options={...r,...this.options,...Mv(e)},this.options.interpolation={...r.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=r.overloadTranslationOptionHandler);const i=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?cn.init(i(this.modules.logger),this.options):cn.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=PO;const f=new xv(this.options);this.store=new Nv(this.options.resources,this.options);const d=this.services;d.logger=cn,d.resourceStore=this.store,d.languageUtils=f,d.pluralResolver=new AO(f,{prepend:this.options.pluralSeparator}),c&&(d.formatter=i(c),d.formatter.init&&d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new Lv(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new xO(i(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",(g,..._)=>{this.emit(g,..._)}),this.modules.languageDetector&&(d.languageDetector=i(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=i(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new Iu(this.services,this.options),this.translator.on("*",(g,..._)=>{this.emit(g,..._)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,n||(n=ul),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=(...f)=>this.store[c](...f)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=(...f)=>(this.store[c](...f),this)});const l=eo(),u=()=>{const c=(f,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),n(f,d)};if(this.languages&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?u():setTimeout(u,0),l}loadResources(e,n=ul){var s,o;let r=n;const i=X(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if((i==null?void 0:i.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const l=[],u=c=>{if(!c||c==="cimode")return;this.services.languageUtils.toResolveHierarchy(c).forEach(d=>{d!=="cimode"&&(l.includes(d)||l.push(d))})};i?u(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(f=>u(f)),(o=(s=this.options.preload)==null?void 0:s.forEach)==null||o.call(s,c=>u(c)),this.services.backendConnector.load(l,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(c)})}else r(null)}reloadResources(e,n,r){const i=eo();return typeof e=="function"&&(r=e,e=void 0),typeof n=="function"&&(r=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),r||(r=ul),this.services.backendConnector.reload(e,n,s=>{i.resolve(),r(s)}),i}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&t0.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!["cimode","dev"].includes(e)){for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!["cimode","dev"].includes(r)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,n){this.isLanguageChangingTo=e;const r=eo();this.emit("languageChanging",e);const i=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},s=(l,u)=>{u?this.isLanguageChangingTo===e&&(i(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,r.resolve((...c)=>this.t(...c)),n&&n(l,(...c)=>this.t(...c))},o=l=>{var f,d;!e&&!l&&this.services.languageDetector&&(l=[]);const u=X(l)?l:l&&l[0],c=this.store.hasLanguageSomeTranslations(u)?u:this.services.languageUtils.getBestMatchFromCodes(X(l)?[l]:l);c&&(this.language||i(c),this.translator.language||this.translator.changeLanguage(c),(d=(f=this.services.languageDetector)==null?void 0:f.cacheUserLanguage)==null||d.call(f,c)),this.loadResources(c,g=>{s(g,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),r}getFixedT(e,n,r){const i=(s,o,...l)=>{let u;typeof o!="object"?u=this.options.overloadTranslationOptionHandler([s,o].concat(l)):u={...o},u.lng=u.lng||i.lng,u.lngs=u.lngs||i.lngs,u.ns=u.ns||i.ns,u.keyPrefix!==""&&(u.keyPrefix=u.keyPrefix||r||i.keyPrefix);const c={...this.options,...u};typeof u.keyPrefix=="function"&&(u.keyPrefix=ts(u.keyPrefix,c));const f=this.options.keySeparator||".";let d;return u.keyPrefix&&Array.isArray(s)?d=s.map(g=>(typeof g=="function"&&(g=ts(g,c)),`${u.keyPrefix}${f}${g}`)):(typeof s=="function"&&(s=ts(s,c)),d=u.keyPrefix?`${u.keyPrefix}${f}${s}`:s),this.t(d,u)};return X(e)?i.lng=e:i.lngs=e,i.ns=n,i.keyPrefix=r,i}t(...e){var n;return(n=this.translator)==null?void 0:n.translate(...e)}exists(...e){var n;return(n=this.translator)==null?void 0:n.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,n={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const o=(l,u)=>{const c=this.services.backendConnector.state[`${l}|${u}`];return c===-1||c===0||c===2};if(n.precheck){const l=n.precheck(this,o);if(l!==void 0)return l}return!!(this.hasResourceBundle(r,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(r,e)&&(!i||o(s,e)))}loadNamespaces(e,n){const r=eo();return this.options.ns?(X(e)&&(e=[e]),e.forEach(i=>{this.options.ns.includes(i)||this.options.ns.push(i)}),this.loadResources(i=>{r.resolve(),n&&n(i)}),r):(n&&n(),Promise.resolve())}loadLanguages(e,n){const r=eo();X(e)&&(e=[e]);const i=this.options.preload||[],s=e.filter(o=>!i.includes(o)&&this.services.languageUtils.isSupportedCode(o));return s.length?(this.options.preload=i.concat(s),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}dir(e){var i,s;if(e||(e=this.resolvedLanguage||(((i=this.languages)==null?void 0:i.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const o=new Intl.Locale(e);if(o&&o.getTextInfo){const l=o.getTextInfo();if(l&&l.direction)return l.direction}}catch{}const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=((s=this.services)==null?void 0:s.languageUtils)||new xv(_h());return e.toLowerCase().indexOf("-latn")>1?"ltr":n.includes(r.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},n){const r=new Ro(e,n);return r.createInstance=Ro.createInstance,r}cloneInstance(e={},n=ul){const r=e.forkResourceStore;r&&delete e.forkResourceStore;const i={...this.options,...e,isClone:!0},s=new Ro(i);if((e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(l=>{s[l]=this[l]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},r){const l=Object.keys(this.store.data).reduce((u,c)=>(u[c]={...this.store.data[c]},u[c]=Object.keys(u[c]).reduce((f,d)=>(f[d]={...u[c][d]},f),u[c]),u),{});s.store=new Nv(l,i),s.services.resourceStore=s.store}if(e.interpolation){const u={..._h().interpolation,...this.options.interpolation,...e.interpolation},c={...i,interpolation:u};s.services.interpolator=new Lv(c)}return s.translator=new Iu(s.services,i),s.translator.on("*",(l,...u)=>{s.emit(l,...u)}),s.init(i,n),s.translator.options=i,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const vt=Ro.createInstance();vt.createInstance;vt.dir;vt.init;vt.loadResources;vt.reloadResources;vt.use;vt.changeLanguage;vt.getFixedT;vt.t;vt.exists;vt.setDefaultNamespace;vt.hasLoadedNamespace;vt.loadNamespaces;vt.loadLanguages;const DO=(t,e,n,r)=>{var s,o,l,u;const i=[n,{code:e,...r||{}}];if((o=(s=t==null?void 0:t.services)==null?void 0:s.logger)!=null&&o.forward)return t.services.logger.forward(i,"warn","react-i18next::",!0);di(i[0])&&(i[0]=`react-i18next:: ${i[0]}`),(u=(l=t==null?void 0:t.services)==null?void 0:l.logger)!=null&&u.warn?t.services.logger.warn(...i):console!=null&&console.warn&&console.warn(...i)},Fv={},Bd=(t,e,n,r)=>{di(n)&&Fv[n]||(di(n)&&(Fv[n]=new Date),DO(t,e,n,r))},r0=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},Hd=(t,e,n)=>{t.loadNamespaces(e,r0(t,n))},Uv=(t,e,n,r)=>{if(di(n)&&(n=[n]),t.options.preload&&t.options.preload.indexOf(e)>-1)return Hd(t,n,r);n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,r0(t,r))},OO=(t,e,n={})=>!e.languages||!e.languages.length?(Bd(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(t,{lng:n.lng,precheck:(r,i)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!i(r.isLanguageChangingTo,t))return!1}}),di=t=>typeof t=="string",LO=t=>typeof t=="object"&&t!==null,VO=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,MO={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},FO=t=>MO[t],UO=t=>t.replace(VO,FO);let Wd={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:UO,transDefaultProps:void 0};const jO=(t={})=>{Wd={...Wd,...t}},$O=()=>Wd;let i0;const zO=t=>{i0=t},BO=()=>i0,HO={type:"3rdParty",init(t){jO(t.options.react),zO(t)}},WO=B.createContext();class KO{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var s0={exports:{}},o0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=B;function qO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var GO=typeof Object.is=="function"?Object.is:qO,QO=ps.useState,YO=ps.useEffect,JO=ps.useLayoutEffect,XO=ps.useDebugValue;function ZO(t,e){var n=e(),r=QO({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return JO(function(){i.value=n,i.getSnapshot=e,wh(i)&&s({inst:i})},[t,n,e]),YO(function(){return wh(i)&&s({inst:i}),t(function(){wh(i)&&s({inst:i})})},[t]),XO(n),n}function wh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!GO(t,n)}catch{return!0}}function eL(t,e){return e()}var tL=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?eL:ZO;o0.useSyncExternalStore=ps.useSyncExternalStore!==void 0?ps.useSyncExternalStore:tL;s0.exports=o0;var nL=s0.exports;const rL=(t,e)=>{if(di(e))return e;if(LO(e)&&di(e.defaultValue))return e.defaultValue;if(typeof t=="function")return"";if(Array.isArray(t)){const n=t[t.length-1];return typeof n=="function"?"":n}return t},iL={t:rL,ready:!1},sL=()=>()=>{},Vr=(t,e={})=>{var T,S,C;const{i18n:n}=e,{i18n:r,defaultNS:i}=B.useContext(WO)||{},s=n||r||BO();s&&!s.reportNamespaces&&(s.reportNamespaces=new KO),s||Bd(s,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const o=B.useMemo(()=>{var R;return{...$O(),...(R=s==null?void 0:s.options)==null?void 0:R.react,...e}},[s,e]),{useSuspense:l,keyPrefix:u}=o,c=i||((T=s==null?void 0:s.options)==null?void 0:T.defaultNS),f=di(c)?[c]:c||["translation"],d=B.useMemo(()=>f,f);(C=(S=s==null?void 0:s.reportNamespaces)==null?void 0:S.addUsedNamespaces)==null||C.call(S,d);const g=B.useRef(0),_=B.useCallback(R=>{if(!s)return sL;const{bindI18n:v,bindI18nStore:q}=o,ue=()=>{g.current+=1,R()};return v&&s.on(v,ue),q&&s.store.on(q,ue),()=>{v&&v.split(" ").forEach(fe=>s.off(fe,ue)),q&&q.split(" ").forEach(fe=>s.store.off(fe,ue))}},[s,o]),A=B.useRef(),N=B.useCallback(()=>{if(!s)return iL;const R=!!(s.isInitialized||s.initializedStoreOnce)&&d.every($=>OO($,s,o)),v=e.lng||s.language,q=g.current,ue=A.current;if(ue&&ue.ready===R&&ue.lng===v&&ue.keyPrefix===u&&ue.revision===q)return ue;const _e={t:s.getFixedT(v,o.nsMode==="fallback"?d:d[0],u),ready:R,lng:v,keyPrefix:u,revision:q};return A.current=_e,_e},[s,d,u,o,e.lng]),[O,I]=B.useState(0),{t:w,ready:k}=nL.useSyncExternalStore(_,N,N);B.useEffect(()=>{if(s&&!k&&!l){const R=()=>I(v=>v+1);e.lng?Uv(s,e.lng,d,R):Hd(s,d,R)}},[s,e.lng,d,k,l,O]);const D=s||{},M=B.useRef(null),U=B.useRef(),E=R=>{const v=Object.getOwnPropertyDescriptors(R);v.__original&&delete v.__original;const q=Object.create(Object.getPrototypeOf(R),v);if(!Object.prototype.hasOwnProperty.call(q,"__original"))try{Object.defineProperty(q,"__original",{value:R,writable:!1,enumerable:!1,configurable:!1})}catch{}return q},y=B.useMemo(()=>{const R=D,v=R==null?void 0:R.language;let q=R;R&&(M.current&&M.current.__original===R?U.current!==v?(q=E(R),M.current=q,U.current=v):q=M.current:(q=E(R),M.current=q,U.current=v));const ue=!k&&!l?(..._e)=>(Bd(s,"USE_T_BEFORE_READY","useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."),w(..._e)):w,fe=[ue,q,k];return fe.t=ue,fe.i18n=q,fe.ready=k,fe},[w,D,k,D.resolvedLanguage,D.language,D.languages]);if(s&&l&&!k)throw new Promise(R=>{const v=()=>R();e.lng?Uv(s,e.lng,d,v):Hd(s,d,v)});return y},jv=(t,e="en")=>{let n=(t==null?void 0:t.code)||"",r=(t==null?void 0:t.message)||"";if(!n){const s=r.match(/\(auth\/([^)]+)\)/);s&&(n=s[1])}const i={"weak-password":{en:"Password should be at least 6 characters.",tr:"Şifre en az 6 karakter olmalıdır."},"invalid-email":{en:"The email address is invalid.",tr:"E-posta adresi geçersiz."},"user-not-found":{en:"No account found with this email.",tr:"Bu e-posta ile kayıtlı hesap bulunamadı."},"wrong-password":{en:"The password is incorrect.",tr:"Şifre yanlış."},"email-already-in-use":{en:"An account with this email already exists.",tr:"Bu e-posta ile zaten bir hesap kayıtlı."},"too-many-requests":{en:"Too many failed login attempts. Please try again later.",tr:"Çok fazla başarısız giriş denemesi. Lütfen daha sonra tekrar deneyin."},"operation-not-allowed":{en:"This operation is not allowed.",tr:"Bu işleme izin verilmiyor."},"invalid-credential":{en:"The email or password is incorrect.",tr:"E-posta veya şifre yanlış."},"user-disabled":{en:"This account has been disabled.",tr:"Bu hesap devre dışı bırakılmıştır."},"network-request-failed":{en:"A network error occurred. Please check your connection.",tr:"Ağ hatası oluştu. Lütfen bağlantınızı kontrol edin."},"unauthorized-domain":{en:"This domain is not authorized for Google sign-in. Add localhost or your current domain in Firebase Authentication settings.",tr:"Bu alan adı Google ile giriş için yetkili değil. Firebase Authentication ayarlarından localhost veya mevcut domaini ekleyin."},"popup-blocked":{en:"The popup was blocked by your browser. Please allow popups and try again.",tr:"Açılır pencere tarayıcınız tarafından engellendi. Lütfen açılır pencerelere izin verip tekrar deneyin."},"popup-closed-by-user":{en:"The popup was closed before completing sign-in. Please try again.",tr:"Giriş tamamlanmadan önce pencere kapatıldı. Lütfen tekrar deneyin."}};return n&&i[n]?i[n][e]:e==="tr"?r.includes("register")?"Kayıt başarısız. Lütfen tekrar deneyin.":r.includes("sign in")||r.includes("login")?"Giriş başarısız. Lütfen tekrar deneyin.":"Bir hata oluştu. Lütfen tekrar deneyin.":r||"An error occurred. Please try again."},oL=()=>{const{i18n:t}=Vr(),[e,n]=B.useState(""),[r,i]=B.useState(""),[s,o]=B.useState(""),l=async()=>{if(o(""),!e||!r){o(t.language==="tr"?"Email ve şifre giriniz.":"Enter email and password.");return}try{await cO(e,r)}catch(c){const f=jv(c,t.language==="tr"?"tr":"en");o(f)}},u=async()=>{if(o(""),!e||!r){o(t.language==="tr"?"Email ve şifre giriniz.":"Enter email and password.");return}try{await hO(e,r)}catch(c){const f=jv(c,t.language==="tr"?"tr":"en");o(f)}};return P.jsx("div",{className:"login-page",children:P.jsxs("div",{className:"card login-card",children:[P.jsxs("div",{className:"login-header",children:[P.jsx("h1",{children:"Habit Tracker"}),P.jsx("p",{children:"Track habits, get reminders, and stay consistent."})]}),P.jsxs("div",{className:"login-form",children:[P.jsxs("label",{children:["Email",P.jsx("input",{className:"login-input",placeholder:"Email",type:"email",value:e,onChange:c=>n(c.target.value)})]}),P.jsxs("label",{children:["Password",P.jsx("input",{className:"login-input",placeholder:"Password",type:"password",value:r,onChange:c=>i(c.target.value)})]}),s?P.jsx("div",{className:"login-error",children:s}):null,P.jsxs("div",{className:"login-actions",children:[P.jsx("button",{type:"button",className:"login-button primary",onClick:l,children:"Login"}),P.jsx("button",{type:"button",className:"login-button secondary",onClick:u,children:"Register"})]})]})]})})},aL=({children:t})=>{const{user:e,loading:n}=ZS();return n?P.jsx("div",{style:{padding:20},children:"Loading..."}):e?P.jsx(P.Fragment,{children:t}):P.jsx(oL,{})},a0="habit-tracker-v1",Kd=1,ar={schemaVersion:Kd,habits:[],completions:[],notificationSettings:{enabled:!1,intervalHours:2,startHour:9,endHour:21,permissionStatus:"default"}},lL=t=>{const[e,n,r]=t.split("-").map(Number);return`${e.toString().padStart(4,"0")}-${n.toString().padStart(2,"0")}-${r.toString().padStart(2,"0")}`},uL=t=>{const e=[];let n=0;return t.forEach(r=>{if(typeof r!="object"||r===null)return;const i=r;if(typeof i.habitId!="string"||typeof i.date!="string")return;const s=lL(i.date),o=typeof i.id=="string"&&i.id.trim().length>0?i.id:`legacy-${i.habitId}-${s}-${n++}`;e.push({id:o,habitId:i.habitId,date:s,hours:typeof i.hours=="number"&&!Number.isNaN(i.hours)?i.hours:void 0,note:typeof i.note=="string"&&i.note.trim().length>0?i.note:void 0})}),e};function cL(){if(typeof window>"u")return ar;try{const t=window.localStorage.getItem(a0);if(!t)return ar;const e=JSON.parse(t);return!e||e.schemaVersion!==Kd?{...ar,habits:(e==null?void 0:e.habits)??[],completions:[]}:{schemaVersion:Kd,habits:Array.isArray(e.habits)?e.habits:[],completions:Array.isArray(e.completions)?uL(e.completions):[],notificationSettings:e.notificationSettings??ar.notificationSettings}}catch{return ar}}function hL(t){if(!(typeof window>"u"))try{window.localStorage.setItem(a0,JSON.stringify(t))}catch{}}const $p=(t=new Date)=>{const e=t.getTimezoneOffset()*6e4;return new Date(t.getTime()-e).toISOString().slice(0,10)},oc=t=>{const[e,n,r]=t.split("-").map(Number);return`${e.toString().padStart(4,"0")}-${n.toString().padStart(2,"0")}-${r.toString().padStart(2,"0")}`},l0=t=>{const e=new Date(`${t}T00:00:00`);return e.setDate(e.getDate()-1),$p(e)},dL=t=>{const e=[],n=new Date(`${t}-01-01T00:00:00`),r=new Date(`${t}-12-31T00:00:00`);for(let i=new Date(n);i<=r;i.setDate(i.getDate()+1))e.push(oc(i.toISOString().slice(0,10)));return e},fL=(t,e)=>{let n=0,r=oc(new Date().toISOString().slice(0,10));for(;e.has(`${t}|${r}`);)n+=1,r=l0(r);return n},pL=(t,e)=>t.reduce((n,r)=>{const i=e.filter(c=>c.habitId===r.id).map(c=>oc(c.date)),s=new Set(i);let o=0,l=0;const u=Array.from(s).sort();for(let c=0;c<u.length;c+=1){if(c===0)l=1;else{const f=l0(u[c]);l=u[c-1]===f?l+1:1}o=Math.max(o,l)}return Math.max(n,o)},0),gL=t=>t.length,mL=(t,e)=>{const n=new Date,r=n.getFullYear(),i=n.getMonth(),s=Math.floor((n.getDate()-n.getDay()+1)/7)+1;return t.map(o=>{const l=e.filter(f=>f.habitId===o.id),u=l.filter(f=>{const d=new Date(f.date);return d.getFullYear()===r&&d.getMonth()===i}).reduce((f,d)=>f+(d.hours||0),0),c=l.filter(f=>{const d=new Date(f.date),g=Math.floor((d.getDate()-d.getDay()+1)/7)+1;return d.getFullYear()===r&&d.getMonth()===i&&g===s}).reduce((f,d)=>f+(d.hours||0),0);return{habitId:o.id,monthlyHours:u,weeklyHours:c}})},Eh=t=>t.map(e=>({...e,date:oc(e.date)})),yL=t=>t.reduce((e,n)=>{const r=n.date;return e[r]=e[r]?[...e[r],n]:[n],e},{}),vL=(t,e)=>t===0?"rgba(226, 232, 255, 0.18)":`rgba(96, 165, 250, ${(.25+Math.min(t/Math.max(e,1),1)*.55).toFixed(2)})`,_L=(t,e,n,r)=>t.map(i=>{const s=dL(i);return{year:i,days:s.map(o=>{const l=e[o]??[],u=Array.from(new Set(l.map(d=>d.habitId))),c=new Set(l.filter(d=>{var g;return(g=n[d.habitId])==null?void 0:g.active}).map(d=>d.habitId)).size,f=r>0&&c>=r;return{day:o,count:u.length,allComplete:f}})}}),$v=(t=new Date)=>{const e=t.getTimezoneOffset()*6e4;return new Date(t.getTime()-e).toISOString().slice(0,10)},wL=t=>{const[e,n,r]=t.split("-").map(Number);return`${e.toString().padStart(4,"0")}-${n.toString().padStart(2,"0")}-${r.toString().padStart(2,"0")}`},EL=(t,e)=>{switch(e.type){case"load":return e.payload;case"addHabit":{const n=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}-${Math.random()}`;return{...t,habits:[{id:n,name:e.payload.name.trim(),color:e.payload.color,active:!0,createdAt:$v()},...t.habits]}}case"editHabit":return{...t,habits:t.habits.map(n=>n.id===e.payload.id?{...n,name:e.payload.name.trim()}:n)};case"toggleHabitActive":return{...t,habits:t.habits.map(n=>n.id===e.payload.id?{...n,active:!n.active,archivedAt:n.active?$v():void 0}:n)};case"addCompletion":{const n=wL(e.payload.date),r=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}-${Math.random()}`;return{...t,completions:[...t.completions,{id:r,habitId:e.payload.habitId,date:n,hours:e.payload.hours,note:e.payload.note}]}}case"removeCompletion":return{...t,completions:t.completions.filter(n=>n.id!==e.payload.completionId)};case"updateNotificationSettings":return{...t,notificationSettings:e.payload};default:return t}};function TL({completionModal:t,setCompletionModal:e,completionHours:n,setCompletionHours:r,completionNote:i,setCompletionNote:s,completionFieldStyle:o,handleSaveCompletion:l,habits:u,t:c}){var f;return t?P.jsx("div",{className:"modal-backdrop",onClick:()=>e(null),children:P.jsxs("div",{className:"modal",onClick:d=>d.stopPropagation(),children:[P.jsxs("div",{className:"modal-header",children:[P.jsxs("h3",{style:{opacity:.9},children:[c("mark")," ",(f=u.find(d=>d.id===t.habitId))==null?void 0:f.name]}),P.jsx("button",{type:"button",onClick:()=>e(null),children:c("close")})]}),P.jsxs("div",{style:{marginTop:"1rem"},children:[P.jsx("input",{type:"number",min:0,max:24,step:.1,value:n,onChange:d=>{const g=d.target.value;if(g===""){r("");return}const _=Number(g);Number.isNaN(_)||(_<0?r("0"):_>24?r("24"):r(g))},style:{...o,marginBottom:"1rem",color:"var(--text-primary)"},placeholder:c("hoursSpent")}),P.jsx("textarea",{value:i,onChange:d=>s(d.target.value),style:{...o,marginBottom:"1rem",resize:"vertical",minHeight:"96px",color:"var(--text-primary)"},placeholder:c("noteOptional"),rows:3}),P.jsx("button",{type:"button",style:{width:"100%",padding:"0.95rem 1rem",borderRadius:"14px",border:"1px solid var(--button-border)",background:"var(--button-bg)",color:"var(--button-text)"},onClick:l,children:c("save")})]})]})}):null}function SL({selectedDay:t,setSelectedDay:e,selectedDayItems:n,habits:r,expandedCompletions:i,toggleCompletionDetails:s,theme:o,t:l}){return t?P.jsx("div",{className:"modal-backdrop",onClick:()=>e(null),children:P.jsxs("div",{className:"modal",onClick:u=>u.stopPropagation(),children:[P.jsx("div",{className:"modal-header",children:P.jsxs("h3",{style:{opacity:.9},children:[t," ",l("summary")]})}),P.jsx("p",{style:{opacity:.78,marginTop:"0.75rem"},children:n.length>0?`${n.length} ${n.length!==1?l("habitsCompleted"):l("habitCompleted")}`:l("noCompletedHabitsOnDay")}),P.jsx("ul",{className:"modal-list",children:n.length>0?n.map(u=>{const c=r.find(d=>d.id===u.habitId),f=i.has(`${u.habitId}-${t}`);return P.jsxs("li",{children:[P.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[P.jsx("span",{children:P.jsx("strong",{children:(c==null?void 0:c.name)??l("unknownHabit")})}),P.jsx("button",{type:"button",onClick:()=>s(u.habitId,t),style:{background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer",fontSize:"1.2rem"},children:f?"−":"+"})]}),f&&P.jsx("div",{style:{marginTop:"0.5rem",padding:"0.75rem",background:o==="dark"?"rgba(255,255,255,0.06)":"rgba(15,23,42,0.04)",borderRadius:"12px"},children:u.entries.map(d=>P.jsxs("div",{style:{marginBottom:"0.75rem"},children:[d.hours!==void 0&&P.jsxs("p",{children:[P.jsxs("strong",{children:[l("hoursSpent"),":"]})," ",d.hours,"h"]}),d.note&&P.jsxs("p",{children:[P.jsxs("strong",{children:[l("noteOptional"),":"]})," ",d.note]}),d.hours===void 0&&!d.note&&P.jsx("p",{children:l("markedEntry")})]},d.id))})]},`${u.habitId}-${t}`)}):P.jsx("li",{style:{opacity:.75},children:l("noCompletedHabits")})})]})}):null}function IL({habit:t,completions:e,completionSet:n,today:r,streak:i,stats:s,t:o,handleMarkToday:l,handleOpenUndo:u,setEditingId:c,setEditingName:f,dispatch:d}){var I,w;const g=n.has(`${t.id}|${r}`),_=e.filter(k=>k.habitId===t.id).length,A=e.filter(k=>k.habitId===t.id).map(k=>k.date).sort().pop()??"—",N=((I=s.habitStats.find(k=>k.habitId===t.id))==null?void 0:I.monthlyHours)||0,O=((w=s.habitStats.find(k=>k.habitId===t.id))==null?void 0:w.weeklyHours)||0;return P.jsxs("div",{className:"habit-row",children:[P.jsxs("div",{className:"habit-details",children:[P.jsxs("div",{className:"habit-label",children:[P.jsx("span",{className:"habit-color",style:{background:t.color}}),P.jsx("strong",{children:t.name}),!t.active&&P.jsx("span",{style:{opacity:.6},children:o("archived")})]}),P.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[P.jsxs("span",{style:{opacity:.8},children:[o("streak"),": ",i]}),P.jsxs("span",{style:{opacity:.8},children:[o("total"),": ",_]}),P.jsxs("span",{style:{opacity:.8},children:[o("last"),": ",A]}),P.jsxs("span",{style:{opacity:.8},children:[o("month"),": ",N,"h"]}),P.jsxs("span",{style:{opacity:.8},children:[o("week"),": ",O,"h"]})]})]}),P.jsxs("div",{className:"habit-actions",children:[P.jsx("button",{type:"button",className:`marker-button ${g?"completed":""} ${t.active?"":"inactive"}`,disabled:!t.active,onClick:()=>l(t),children:o("mark")}),P.jsx("button",{type:"button",className:`marker-button ${g?"":"inactive"}`,disabled:!t.active||!g,onClick:()=>u(t),children:o("undo")}),P.jsx("button",{type:"button",onClick:()=>{c(t.id),f(t.name)},children:o("rename")}),P.jsx("button",{type:"button",onClick:()=>d({type:"toggleHabitActive",payload:{id:t.id}}),children:t.active?o("archive"):o("activate")})]})]})}function kL({editingId:t,editingName:e,setEditingId:n,setEditingName:r,t:i,onSave:s}){return t?P.jsx("div",{className:"modal-backdrop",onClick:()=>n(null),children:P.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),children:[P.jsxs("div",{className:"modal-header",children:[P.jsx("h3",{style:{opacity:.9},children:i("renameHabit")}),P.jsx("button",{type:"button",onClick:()=>n(null),children:i("close")})]}),P.jsxs("div",{style:{marginTop:"1rem"},children:[P.jsx("input",{value:e,onChange:o=>r(o.target.value),style:{width:"100%",padding:"0.95rem 1rem",borderRadius:"14px",border:"1px solid rgba(148, 163, 184, 0.4)",background:"var(--input-bg)",color:"var(--text-primary)"},placeholder:i("habitNamePlaceholder")}),P.jsx("button",{type:"button",style:{marginTop:"1rem",width:"100%",padding:"0.95rem 1rem",borderRadius:"14px",border:"1px solid var(--button-border)",background:"var(--button-bg)",color:"var(--button-text)"},onClick:s,children:i("save")})]})]})}):null}function AL({showInstallPrompt:t,handleInstallApp:e,onDismiss:n}){const{i18n:r}=Vr();return t?P.jsx("section",{className:"card",style:{marginBottom:"1rem"},children:P.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%"},children:[P.jsxs("div",{style:{width:"100%"},children:[P.jsx("strong",{style:{display:"block",marginBottom:"0.35rem",lineHeight:"1.5",color:"var(--text-primary)"},children:r.language==="tr"?"Uygulamayı yüklemek ister misiniz?":"Would you like to install the app?"}),P.jsx("span",{style:{display:"block",fontSize:"0.9rem",opacity:.8,lineHeight:1.5},children:r.language==="tr"?"Bildirimler ve çevrimdışı kullanım için önerilir.":"Recommended for reminders and offline use."})]}),P.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem",width:"100%"},children:[P.jsx("button",{type:"button",onClick:e,style:{width:"100%",padding:"0.95rem 1rem",borderRadius:"14px",border:"1px solid var(--button-border)",background:"var(--button-bg)",color:"var(--button-text)"},children:r.language==="tr"?"Yükle":"Install"}),P.jsx("button",{type:"button",onClick:n,style:{width:"100%",padding:"0.95rem 1rem",borderRadius:"14px",border:"1px solid var(--button-border)",background:"var(--button-bg)",color:"var(--button-text)"},children:r.language==="tr"?"Hayır":"Not now"})]})]})}):null}function Po(){return"Notification"in window?Notification.permission:"denied"}function zv(){return"Notification"in window?Notification.permission==="granted"?Promise.resolve("granted"):Notification.permission==="denied"?Promise.resolve("denied"):Notification.requestPermission():Promise.resolve("denied")}function No(){return Po()==="granted"}function CL(){return"./service-worker.js"}async function zp(){if(!("serviceWorker"in navigator))return null;const t=CL();let e=await navigator.serviceWorker.getRegistration();return e||(e=await navigator.serviceWorker.register(t)),e.active||await new Promise(n=>{const r=e.installing||e.waiting;if(!r){n();return}if(r.state==="activated"){n();return}r.addEventListener("statechange",()=>{r.state==="activated"&&n()})}),navigator.serviceWorker.ready}function RL(){return"serviceWorker"in navigator?zp().catch(t=>(console.error("SW registration failed",t),null)):Promise.resolve(null)}function PL({settingsOpen:t,setSettingsOpen:e,state:n,dispatch:r,handleSaveSettings:i,onNotificationsEnabled:s}){const{t:o,i18n:l}=Vr();if(!t)return null;const u=n.notificationSettings.enabled&&No(),c=()=>{if(u){r({type:"updateNotificationSettings",payload:{...n.notificationSettings,enabled:!1,permissionStatus:Po()}});return}"Notification"in window&&zv().then(async d=>{const g=d==="granted";r({type:"updateNotificationSettings",payload:{...n.notificationSettings,enabled:g,permissionStatus:d}}),g&&await s()})},f=()=>{"Notification"in window&&zv().then(async d=>{const g=d==="granted";if(r({type:"updateNotificationSettings",payload:{...n.notificationSettings,permissionStatus:d,enabled:g&&n.notificationSettings.enabled}}),!g)return;const _=l.language==="tr"?"Test Bildirimi":"Test Notification",A=l.language==="tr"?"Bildirim sistemi doğru çalışıyor.":"Your notification system is working correctly.";try{const N=await zp();N!=null&&N.showNotification?await N.showNotification(_,{body:A,icon:"/icon192.png",badge:"/icon192.png"}):new Notification(_,{body:A,icon:"/icon192.png"})}catch(N){console.error("Test notification failed",N)}})};return P.jsx("div",{className:"modal-backdrop",onClick:()=>e(!1),children:P.jsxs("div",{className:"modal settings-modal",onClick:d=>d.stopPropagation(),children:[P.jsxs("div",{className:"modal-header",children:[P.jsx("h3",{children:l.language==="tr"?"Bildirim Ayarları":"Notification Settings"}),P.jsx("button",{type:"button",className:"modal-close-btn",onClick:()=>e(!1),children:o("close")})]}),P.jsxs("div",{className:"settings-grid",children:[P.jsxs("label",{className:"settings-toggle",children:[P.jsx("input",{type:"checkbox",checked:u,onClick:d=>{d.preventDefault(),c()},readOnly:!0}),P.jsx("span",{children:l.language==="tr"?"Bildirimleri Etkinleştir":"Enable Notifications"})]}),P.jsxs("div",{className:"settings-field",children:[P.jsx("span",{className:"settings-label",children:l.language==="tr"?"Hatırlatma Aralığı (Saat)":"Reminder Interval (Hours)"}),P.jsx("select",{value:n.notificationSettings.intervalHours,onChange:d=>r({type:"updateNotificationSettings",payload:{...n.notificationSettings,intervalHours:Number(d.target.value)}}),children:[1,2,3,4,6,8,12].map(d=>P.jsx("option",{value:d,children:d},d))})]}),P.jsxs("div",{className:"settings-field",children:[P.jsx("span",{className:"settings-label",children:l.language==="tr"?"Başlangıç Saati":"Start Hour"}),P.jsx("input",{type:"number",min:0,max:23,value:n.notificationSettings.startHour,onChange:d=>r({type:"updateNotificationSettings",payload:{...n.notificationSettings,startHour:Number(d.target.value)}})})]}),P.jsxs("div",{className:"settings-field",children:[P.jsx("span",{className:"settings-label",children:l.language==="tr"?"Bitiş Saati":"End Hour"}),P.jsx("input",{type:"number",min:0,max:23,value:n.notificationSettings.endHour,onChange:d=>r({type:"updateNotificationSettings",payload:{...n.notificationSettings,endHour:Number(d.target.value)}})})]}),P.jsxs("div",{style:{display:"grid",gap:"0.75rem"},children:[P.jsx("button",{type:"button",className:"settings-save-btn",onClick:i,children:o("save")}),P.jsx("button",{type:"button",className:"settings-save-btn",onClick:f,children:l.language==="tr"?"Test Bildirimi Gönder":"Send Test Notification"}),P.jsx("button",{type:"button",className:"settings-logout-btn",onClick:async()=>{try{await KR(fs),e(!1)}catch(d){console.error("Logout failed",d),alert(l.language==="tr"?"Çıkış yapılamadı. Lütfen tekrar deneyin.":"Logout failed. Please try again.")}},children:o("logout")})]})]})]})})}function NL({activeHabitsLength:t,totalCompletedToday:e,longestStreak:n,totalCompletions:r}){const{t:i}=Vr();return P.jsxs("section",{className:"card habit-summary",children:[P.jsxs("div",{className:"summary-card",children:[P.jsx("h3",{children:i("activeHabits")}),P.jsx("p",{children:t})]}),P.jsxs("div",{className:"summary-card",children:[P.jsx("h3",{children:i("completedToday")}),P.jsx("p",{children:e})]}),P.jsxs("div",{className:"summary-card",children:[P.jsx("h3",{children:i("longestStreak")}),P.jsx("p",{children:n})]}),P.jsxs("div",{className:"summary-card",children:[P.jsx("h3",{children:i("totalCompletions")}),P.jsx("p",{children:r})]})]})}function xL({undoModal:t,setUndoModal:e,state:n,undoCompletions:r,handleRemoveCompletion:i}){var l;const{t:s}=Vr();if(!t)return null;const o=(l=n.habits.find(u=>u.id===t.habitId))==null?void 0:l.name;return P.jsx("div",{className:"modal-backdrop",onClick:()=>e(null),children:P.jsxs("div",{className:"modal",onClick:u=>u.stopPropagation(),children:[P.jsxs("div",{className:"modal-header",children:[P.jsxs("h3",{style:{opacity:.9},children:[s("undo")," ",o]}),P.jsx("button",{type:"button",onClick:()=>e(null),children:s("close")})]}),P.jsx("p",{style:{opacity:.78,marginTop:"0.75rem"},children:s("undoSelect")}),P.jsx("ul",{className:"modal-list",children:r.length>0?r.map(u=>P.jsx("li",{children:P.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem"},children:[P.jsxs("div",{children:[u.hours!==void 0&&P.jsxs("p",{children:[P.jsxs("strong",{children:[s("hoursSpent"),":"]})," ",u.hours,"h"]}),u.note&&P.jsxs("p",{children:[P.jsxs("strong",{children:[s("noteOptional"),":"]})," ",u.note]}),u.hours===void 0&&!u.note&&P.jsx("p",{children:s("markedEntry")})]}),P.jsx("button",{type:"button",onClick:()=>i(u.id),children:s("removeEntry")})]})},u.id)):P.jsx("li",{style:{opacity:.75},children:s("noCompletionsToUndo")})})]})})}function bL({yearSummary:t,activeHabitsLength:e,today:n,setSelectedDay:r,getDayBackground:i}){const{t:s}=Vr();return t.length?P.jsxs("section",{className:"card calendar-grid",children:[P.jsx("h2",{style:{opacity:.85},children:s("calendarPerformance")}),t.map(o=>P.jsxs("div",{className:"year-row",children:[P.jsx("div",{className:"day-label",children:o.year}),P.jsx("div",{className:"week-grid",children:o.days.map(l=>P.jsx("button",{type:"button",className:"day-cell",style:{background:i(l.count,e),boxShadow:l.allComplete?`0 0 0 2px rgba(96, 165, 250, 0.4),
                       0 0 15px rgba(96, 165, 250, 0.22)`:l.day===n?"0 0 0 0.5px rgba(14, 165, 233, 0.55), 0 0 12px rgba(14, 165, 233, 0.16)":void 0,borderColor:l.day===n?"#0ea5e9":"rgba(148, 163, 184, 0.24)"},onClick:()=>r(l.day),"aria-label":`${l.day}, ${l.count} completed habit${l.count!==1?"s":""}`,title:`${l.day} — ${l.count} completed habit${l.count!==1?"s":""}`,children:P.jsx("span",{})},l.day))})]},o.year))]}):null}function DL({theme:t,toggleTheme:e,i18n:n,openSettings:r}){const{t:i}=Vr();return P.jsx("nav",{className:"navbar",children:P.jsxs("div",{className:"navbar-content",children:[P.jsx("h1",{style:{opacity:.9},children:i("title")}),P.jsxs("div",{className:"navbar-buttons",children:[P.jsx("button",{type:"button",className:"theme-button",onClick:e,children:i(t==="light"?"dark":"light")}),P.jsx("button",{type:"button",className:"lang-button",onClick:()=>n.changeLanguage(n.language==="en"?"tr":"en"),children:n.language==="en"?"TR":"ENG"}),P.jsx("button",{type:"button",className:"theme-button",onClick:r,children:"⚙️"})]})]})})}function OL({value:t,onChange:e,onClose:n}){const r=B.useRef(null),[i,s]=B.useState(210),o=(c,f,d)=>{c.fillStyle=`hsl(${i}, 100%, 50%)`,c.fillRect(0,0,f,d);const g=c.createLinearGradient(0,0,f,0);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=g,c.fillRect(0,0,f,d);const _=c.createLinearGradient(0,0,0,d);_.addColorStop(0,"rgba(0,0,0,0)"),_.addColorStop(1,"rgba(0,0,0,1)"),c.fillStyle=_,c.fillRect(0,0,f,d)},l=()=>{const c=r.current;if(!c)return;const f=c.getContext("2d");if(!f)return;const d=window.devicePixelRatio||1,g=260,_=150;c.width=g*d,c.height=_*d,c.style.width=`${g}px`,c.style.height=`${_}px`,f.setTransform(d,0,0,d,0,0),o(f,g,_)};B.useEffect(()=>{l()},[i]),B.useEffect(()=>{const c=f=>{f.key==="Escape"&&n()};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[n]);const u=c=>{const f=r.current;if(!f)return;const d=f.getContext("2d");if(!d)return;const g=f.getBoundingClientRect(),_=f.width/g.width,A=f.height/g.height,N=(c.clientX-g.left)*_,O=(c.clientY-g.top)*A,I=d.getImageData(N,O,1,1).data,w="#"+[I[0],I[1],I[2]].map(k=>k.toString(16).padStart(2,"0")).join("");e(w)};return P.jsx("div",{onClick:n,style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,backdropFilter:"blur(3px)"},children:P.jsxs("div",{onClick:c=>c.stopPropagation(),style:{background:"var(--card-bg)",padding:16,borderRadius:18,boxShadow:"0 20px 60px rgba(0,0,0,0.25)",width:"fit-content",maxWidth:"90vw",border:"1px solid rgba(148,163,184,0.2)"},children:[P.jsx("div",{style:{width:"100%",height:32,borderRadius:10,background:t,marginBottom:14,border:"1px solid rgba(255,255,255,0.08)"}}),P.jsx("input",{type:"range",min:0,max:360,value:i,onChange:c=>s(Number(c.target.value)),style:{width:"100%",marginBottom:12}}),P.jsx("canvas",{ref:r,onClick:u,style:{borderRadius:12,cursor:"crosshair",display:"block"}})]})})}function LL({onAdd:t,t:e}){const[n,r]=B.useState(""),[i,s]=B.useState("#60a5fa"),[o,l]=B.useState(!1),u=c=>{c.preventDefault();const f=n.trim();f&&(t(f,i),r(""),s("#60a5fa"),l(!1))};return P.jsx("section",{style:{padding:"1rem",borderRadius:"16px",background:"var(--card-bg)",border:"1px solid rgba(148,163,184,0.2)",marginBottom:"1rem",position:"relative"},children:P.jsxs("form",{onSubmit:u,style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",alignItems:"center"},children:[P.jsx("input",{value:n,onChange:c=>r(c.target.value),placeholder:e("addHabitPlaceholder"),style:{flex:1,minWidth:"200px",padding:"0.85rem 1rem",borderRadius:"12px",border:"1px solid rgba(148,163,184,0.35)",background:"var(--input-bg)",color:"var(--text-primary)"}}),P.jsxs("div",{style:{position:"relative"},children:[P.jsx("div",{onClick:()=>l(c=>!c),style:{width:34,height:34,borderRadius:10,background:i,cursor:"pointer",border:"1px solid rgba(148,163,184,0.4)",boxShadow:"0 2px 10px rgba(0,0,0,0.08)"}}),o&&P.jsx("div",{style:{position:"absolute",top:"45px",zIndex:50,background:"var(--card-bg)",border:"1px solid rgba(148,163,184,0.25)",borderRadius:"12px",padding:"10px",boxShadow:"0 10px 25px rgba(0,0,0,0.15)"},children:P.jsx(OL,{value:i,onChange:s,onClose:()=>l(!1)})})]}),P.jsx("button",{type:"submit",style:{padding:"0.85rem 1.2rem",borderRadius:"12px",border:"none",background:i,color:"#fff",fontWeight:500,cursor:"pointer"},children:"+"})]})})}const VL=(t,e,n)=>{const r=i=>i.slice(0,3).map(s=>s.name).join(", ");return n.length>0?t==="tr"?`Dün dünde kaldı. Bugün yeniden başla: ${r(n)}`:`Yesterday is gone. Restart today: ${r(n)}`:t==="tr"?`Bugün şunları tamamlamak ister misin: ${r(e)}`:`Do you want to complete: ${r(e)}?`},u0="habit-tracker-meta",ML=()=>{try{const t=localStorage.getItem(u0);return t?JSON.parse(t):{lastNotified:0}}catch{return{lastNotified:0}}},FL=t=>{try{localStorage.setItem(u0,JSON.stringify(t))}catch{}};function UL({enabled:t,settings:e,habits:n,completions:r,language:i}){const s=B.useRef(null);B.useEffect(()=>{if(!("Notification"in window)||!t||Notification.permission!=="granted")return;const o=()=>{const c=$p(),f=new Set(r.filter(d=>d.date.slice(0,10)===c).map(d=>d.habitId));return n.filter(d=>d.active&&!f.has(d.id))},l=()=>{const c=new Date;c.setDate(c.getDate()-1);const f=c.toISOString().slice(0,10),d=new Set(r.filter(g=>g.date.slice(0,10)===f).map(g=>g.habitId));return n.filter(g=>g.active&&!d.has(g.id))},u=async()=>{const c=new Date().getHours();if(c<e.startHour||c>e.endHour)return;const f=ML(),d=Date.now(),g=e.intervalHours*60*60*1e3;if(d-f.lastNotified<g)return;const _=o();if(_.length===0)return;const A=l(),N=i==="tr"?"Hatırlatma":"Reminder",O=VL(i,_,A);try{const I=await navigator.serviceWorker.getRegistration(),w={body:O,icon:"/icon512.png",badge:"/icon192.png",data:{type:"reminder",habitIds:_.map(k=>k.id)}};I!=null&&I.showNotification?I.showNotification(N,w):new Notification(N,{body:O}),FL({lastNotified:d})}catch{}};return s.current&&clearInterval(s.current),s.current=window.setInterval(u,15*60*1e3),u(),()=>{s.current&&clearInterval(s.current)}},[t,e,n,r,i])}const c0="theme",jL=()=>{var e;const t=localStorage.getItem(c0);return t==="dark"||t==="light"?t:(e=window.matchMedia)!=null&&e.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"};function $L(){const[t,e]=B.useState(jL),n=B.useCallback(()=>{e(s=>s==="light"?"dark":"light")},[]),r=B.useCallback(()=>e("light"),[]),i=B.useCallback(()=>e("dark"),[]);return B.useEffect(()=>{localStorage.setItem(c0,t),document.body.setAttribute("data-theme",t)},[t]),{theme:t,setTheme:e,toggleTheme:n,setLight:r,setDark:i,isDark:t==="dark",isLight:t==="light"}}const Bv=async(t,e,n)=>{var o,l;if(!("serviceWorker"in navigator)||!No())return null;const r="".trim();if(!r||r===window.location.origin||r==="http://localhost:5173")return console.warn("FCM backend URL not configured or invalid for local dev. Skipping device registration."),null;const i=await zp();if(!i)return null;const s=await lO(dO,{vapidKey:"BH99-wn5eppcOSLuhoff9TsPkptMh9eq2pFDXTI9DUqjwv4Yj9RA8kOI2LsJJKSMIrhnKi9PL75RtRJLylZk0ek",serviceWorkerRegistration:i});try{const u=await((l=(o=fs.currentUser)==null?void 0:o.getIdToken)==null?void 0:l.call(o));await fetch(`${r}/registerDevice`,{method:"POST",headers:{"Content-Type":"application/json",...u?{Authorization:`Bearer ${u}`}:{}},body:JSON.stringify({token:s,userId:t,platform:"web",timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,language:e.language,notificationSettings:n})})}catch(u){console.error("Failed to register device for FCM",u)}return s};let Vn=null;const qd=new Set;typeof window<"u"&&window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),Vn=t,qd.forEach(e=>e(Vn))});function zL(t){return Vn&&t(Vn),qd.add(t),()=>qd.delete(t)}function BL(t=5e3){return Vn?Promise.resolve(Vn):new Promise(e=>{let n=!1;const r=o=>{n||(n=!0,window.clearTimeout(i),s(),e(o))},i=window.setTimeout(()=>r(Vn),t),s=zL(o=>{r(o)})})}function Hv(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}async function HL(){const t=Vn??await BL(5e3);if(!t)return"unavailable";await t.prompt();const e=await t.userChoice;return Vn=null,e.outcome}function WL(){const{t,i18n:e}=Vr(),[n,r]=B.useReducer(EL,ar),{theme:i,toggleTheme:s}=$L(),[o,l]=B.useState(null),[u,c]=B.useState(null),[f,d]=B.useState(""),[g,_]=B.useState(null),[A,N]=B.useState(""),[O,I]=B.useState(""),[w,k]=B.useState(null),[D,M]=B.useState(new Set),[U,E]=B.useState(!1),[y,T]=B.useState(()=>!Hv()),[S,C]=B.useState(!1),{user:R,loading:v}=ZS(),q=Hv();B.useEffect(()=>{if(!v){if(R){try{window.localStorage.removeItem("habit-tracker-v1")}catch{}return}r({type:"load",payload:cL()})}},[v,R]),B.useEffect(()=>{R||hL(n)},[n,R]),B.useEffect(()=>{T(!q);try{localStorage.removeItem("habit-tracker-pwa-install-dismissed")}catch{}},[q]),B.useEffect(()=>{if(!U||!("Notification"in window))return;const Q=Po();r({type:"updateNotificationSettings",payload:{...n.notificationSettings,permissionStatus:Q,enabled:n.notificationSettings.enabled&&Q==="granted"}})},[U]),B.useEffect(()=>{let Q=!1;if(!R){C(!1);return}return(async()=>{try{const ie=cv(kv,"users",R.uid),me=await Db(ie);if(!me.exists()){C(!0);return}const Be=me.data();if(Be!=null&&Be.state&&typeof Be.state=="object"){const wi={...ar,...Be.state};if("Notification"in window){const Rs=Po();wi.notificationSettings={...wi.notificationSettings,permissionStatus:Rs,enabled:wi.notificationSettings.enabled&&Rs==="granted"}}r({type:"load",payload:wi})}}catch(ie){console.error("Failed to load user state:",ie)}finally{Q||C(!0)}})(),()=>{Q=!0}},[R]),B.useEffect(()=>{if(!R||!n.notificationSettings.enabled||!No())return;(async()=>{try{const Ie=await Bv(R.uid,e,n.notificationSettings);if(!Ie||localStorage.getItem("fcm_token")===Ie)return;localStorage.setItem("fcm_token",Ie)}catch(Ie){console.error("FCM init failed:",Ie)}})()},[R,e,n.notificationSettings]),B.useEffect(()=>{if(!R||!S)return;(async()=>{try{const Ie=cv(kv,"users",R.uid),ie=JSON.parse(JSON.stringify({...n,schemaVersion:ar.schemaVersion}));await Ob(Ie,{state:ie,updatedAt:Pb()},{merge:!0})}catch(Ie){console.error("Failed to save user state:",Ie)}})()},[R,n,S]);const ue=$p(),fe=B.useMemo(()=>new Set(Eh(n.completions).map(Q=>`${Q.habitId}|${Q.date}`)),[n.completions]),_e=B.useMemo(()=>yL(Eh(n.completions)),[n.completions]),$=B.useMemo(()=>Object.fromEntries(n.habits.map(Q=>[Q.id,Q])),[n.habits]),W=B.useMemo(()=>n.habits.filter(Q=>Q.active),[n.habits]),Z=B.useMemo(()=>W.filter(Q=>fe.has(`${Q.id}|${ue}`)).length,[W,fe,ue]),ne=B.useMemo(()=>({longestStreak:pL(n.habits,n.completions),totalCompletions:gL(n.completions),habitStats:mL(n.habits,n.completions)}),[n.habits,n.completions]),de=B.useMemo(()=>{const Q=new Set,Ie=new Date;return Q.add(Ie.getFullYear()),n.completions.forEach(ie=>{Q.add(new Date(`${ie.date}T00:00:00`).getFullYear())}),Array.from(Q).sort((ie,me)=>me-ie)},[n.completions]),ct=B.useMemo(()=>_L(de,_e,$,W.length),[de,_e,$,W.length]),Qe=B.useMemo(()=>{if(!o)return[];const Ie=(_e[o]??[]).reduce((ie,me)=>{var Be;return(ie[Be=me.habitId]??(ie[Be]=[])).push(me),ie},{});return Object.entries(Ie).map(([ie,me])=>({habitId:ie,entries:me}))},[o,_e]),Dt=B.useMemo(()=>{if(!w)return[];const Q=w.date;return Eh(n.completions).filter(Ie=>Ie.habitId===w.habitId&&Ie.date===Q)},[w,n.completions]);UL({enabled:n.notificationSettings.enabled&&No(),settings:n.notificationSettings,habits:n.habits,completions:n.completions,language:e.language});const kt=Q=>_({habitId:Q.id,date:ue}),nn=Q=>k({habitId:Q.id,date:ue}),ks=()=>{g&&(r({type:"addCompletion",payload:{habitId:g.habitId,date:g.date,hours:A?Number(A):void 0,note:O||void 0}}),_(null))},Aa=Q=>r({type:"removeCompletion",payload:{completionId:Q}}),ac=(Q,Ie)=>{const ie=`${Q}-${Ie}`;M(me=>{const Be=new Set(me);return Be.has(ie)?Be.delete(ie):Be.add(ie),Be})},lc=()=>{T(!1)},Ca=async()=>{await HL()==="accepted"&&T(!1)},As=async()=>{if(!(!R||!No()))try{const Q=await Bv(R.uid,e,{...n.notificationSettings,enabled:!0,permissionStatus:"granted"});if(!Q)return;localStorage.setItem("fcm_token",Q)}catch(Q){console.error("FCM init failed:",Q)}},Ra=()=>{if("Notification"in window){const Q=Po();r({type:"updateNotificationSettings",payload:{...n.notificationSettings,permissionStatus:Q,enabled:n.notificationSettings.enabled&&Q==="granted"}})}E(!1)},uc={width:"100%",padding:"0.95rem 1rem",borderRadius:"14px",border:"1px solid rgba(148, 163, 184, 0.4)",background:"var(--input-bg)",color:"var(--text-primary)"},Cs=(Q,Ie)=>{r({type:"addHabit",payload:{name:Q,color:Ie}})};return P.jsxs("div",{className:"app-shell",children:[P.jsx(DL,{theme:i,toggleTheme:s,i18n:e,openSettings:()=>E(!0)}),P.jsx("header",{children:P.jsx("p",{children:t("subtitle")})}),P.jsx(LL,{onAdd:Cs,t}),P.jsx(AL,{showInstallPrompt:y,handleInstallApp:Ca,onDismiss:lc}),P.jsx(NL,{activeHabitsLength:W.length,totalCompletedToday:Z,longestStreak:ne.longestStreak,totalCompletions:ne.totalCompletions}),P.jsx(bL,{yearSummary:ct,activeHabitsLength:W.length,today:ue,setSelectedDay:l,getDayBackground:vL}),P.jsx("section",{className:"card",children:n.habits.map(Q=>P.jsx(IL,{habit:Q,completions:n.completions,completionSet:fe,today:ue,streak:fL(Q.id,fe),stats:ne,t,handleMarkToday:kt,handleOpenUndo:nn,setEditingId:c,setEditingName:d,dispatch:r},Q.id))}),P.jsx(PL,{settingsOpen:U,setSettingsOpen:E,state:n,dispatch:r,handleSaveSettings:Ra,onNotificationsEnabled:As}),P.jsx(SL,{selectedDay:o,setSelectedDay:l,selectedDayItems:Qe,habits:n.habits,expandedCompletions:D,toggleCompletionDetails:ac,theme:i,t}),P.jsx(xL,{undoModal:w,setUndoModal:k,state:n,undoCompletions:Dt,handleRemoveCompletion:Aa}),P.jsx(kL,{editingId:u,editingName:f,setEditingId:c,setEditingName:d,t,onSave:()=>{u&&(r({type:"editHabit",payload:{id:u,name:f}}),c(null))}}),P.jsx(TL,{completionModal:g,setCompletionModal:_,completionHours:A,setCompletionHours:N,completionNote:O,setCompletionNote:I,completionFieldStyle:uc,handleSaveCompletion:ks,habits:n.habits,t})]})}function KL(){return P.jsx(fO,{children:P.jsx(aL,{children:P.jsx(WL,{})})})}const{slice:qL,forEach:GL}=[];function QL(t){return GL.call(qL.call(arguments,1),e=>{if(e)for(const n in e)t[n]===void 0&&(t[n]=e[n])}),t}function YL(t){return typeof t!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(n=>n.test(t))}const Wv=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,JL=function(t,e){const r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},i=encodeURIComponent(e);let s=`${t}=${i}`;if(r.maxAge>0){const o=r.maxAge-0;if(Number.isNaN(o))throw new Error("maxAge should be a Number");s+=`; Max-Age=${Math.floor(o)}`}if(r.domain){if(!Wv.test(r.domain))throw new TypeError("option domain is invalid");s+=`; Domain=${r.domain}`}if(r.path){if(!Wv.test(r.path))throw new TypeError("option path is invalid");s+=`; Path=${r.path}`}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(s+="; HttpOnly"),r.secure&&(s+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r.partitioned&&(s+="; Partitioned"),s},Kv={create(t,e,n,r){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+n*60*1e3)),r&&(i.domain=r),document.cookie=JL(t,e,i)},read(t){const e=`${t}=`,n=document.cookie.split(";");for(let r=0;r<n.length;r++){let i=n[r];for(;i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(e)===0)return i.substring(e.length,i.length)}return null},remove(t,e){this.create(t,"",-1,e)}};var XL={name:"cookie",lookup(t){let{lookupCookie:e}=t;if(e&&typeof document<"u")return Kv.read(e)||void 0},cacheUserLanguage(t,e){let{lookupCookie:n,cookieMinutes:r,cookieDomain:i,cookieOptions:s}=e;n&&typeof document<"u"&&Kv.create(n,t,r,i,s)}},ZL={name:"querystring",lookup(t){var r;let{lookupQuerystring:e}=t,n;if(typeof window<"u"){let{search:i}=window.location;!window.location.search&&((r=window.location.hash)==null?void 0:r.indexOf("?"))>-1&&(i=window.location.hash.substring(window.location.hash.indexOf("?")));const o=i.substring(1).split("&");for(let l=0;l<o.length;l++){const u=o[l].indexOf("=");u>0&&o[l].substring(0,u)===e&&(n=o[l].substring(u+1))}}return n}},e2={name:"hash",lookup(t){var i;let{lookupHash:e,lookupFromHashIndex:n}=t,r;if(typeof window<"u"){const{hash:s}=window.location;if(s&&s.length>2){const o=s.substring(1);if(e){const l=o.split("&");for(let u=0;u<l.length;u++){const c=l[u].indexOf("=");c>0&&l[u].substring(0,c)===e&&(r=l[u].substring(c+1))}}if(r)return r;if(!r&&n>-1){const l=s.match(/\/([a-zA-Z-]*)/g);return Array.isArray(l)?(i=l[typeof n=="number"?n:0])==null?void 0:i.replace("/",""):void 0}}}return r}};let ki=null;const qv=()=>{if(ki!==null)return ki;try{if(ki=typeof window<"u"&&window.localStorage!==null,!ki)return!1;const t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{ki=!1}return ki};var t2={name:"localStorage",lookup(t){let{lookupLocalStorage:e}=t;if(e&&qv())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupLocalStorage:n}=e;n&&qv()&&window.localStorage.setItem(n,t)}};let Ai=null;const Gv=()=>{if(Ai!==null)return Ai;try{if(Ai=typeof window<"u"&&window.sessionStorage!==null,!Ai)return!1;const t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{Ai=!1}return Ai};var n2={name:"sessionStorage",lookup(t){let{lookupSessionStorage:e}=t;if(e&&Gv())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupSessionStorage:n}=e;n&&Gv()&&window.sessionStorage.setItem(n,t)}},r2={name:"navigator",lookup(t){const e=[];if(typeof navigator<"u"){const{languages:n,userLanguage:r,language:i}=navigator;if(n)for(let s=0;s<n.length;s++)e.push(n[s]);r&&e.push(r),i&&e.push(i)}return e.length>0?e:void 0}},i2={name:"htmlTag",lookup(t){let{htmlTag:e}=t,n;const r=e||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(n=r.getAttribute("lang")),n}},s2={name:"path",lookup(t){var i;let{lookupFromPathIndex:e}=t;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(i=n[typeof e=="number"?e:0])==null?void 0:i.replace("/",""):void 0}},o2={name:"subdomain",lookup(t){var i,s;let{lookupFromSubdomainIndex:e}=t;const n=typeof e=="number"?e+1:1,r=typeof window<"u"&&((s=(i=window.location)==null?void 0:i.hostname)==null?void 0:s.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(r)return r[n]}};let h0=!1;try{document.cookie,h0=!0}catch{}const d0=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];h0||d0.splice(1,1);const a2=()=>({order:d0,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:t=>t});class f0{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,n)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=QL(n,this.options||{},a2()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=i=>i.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(XL),this.addDetector(ZL),this.addDetector(t2),this.addDetector(n2),this.addDetector(r2),this.addDetector(i2),this.addDetector(s2),this.addDetector(o2),this.addDetector(e2)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,n=[];return e.forEach(r=>{if(this.detectors[r]){let i=this.detectors[r].lookup(this.options);i&&typeof i=="string"&&(i=[i]),i&&(n=n.concat(i))}}),n=n.filter(r=>r!=null&&!YL(r)).map(r=>this.options.convertDetectedLanguage(r)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||n.forEach(r=>{this.detectors[r]&&this.detectors[r].cacheUserLanguage(e,this.options)}))}}f0.type="languageDetector";const l2={title:"Habit Tracker",subtitle:"Add daily habits, mark your day done, track streaks, and review yearly performance.",addHabitPlaceholder:"Add a new habit",addButton:"Add",activeHabits:"Active habits",completedToday:"Completed today",longestStreak:"Longest streak",totalCompletions:"Total completions",calendarPerformance:"Calendar performance",habits:"Habits",noHabits:"No habits yet. Add one to begin tracking.",streak:"Streak",total:"Total",last:"Last",undo:"Undo",mark:"Mark",rename:"Rename",archive:"Archive",activate:"Activate",summary:"summary",close:"Close",habitCompleted:"habit completed.",habitsCompleted:"habits completed.",noCompletedHabitsOnDay:"No completed habits on this day.",unknownHabit:"Unknown habit",noCompletedHabits:"No completed habits.",renameHabit:"Rename habit",habitNamePlaceholder:"Habit name",save:"Save",logout:"Logout",light:"Light",dark:"Dark",hoursSpent:"Hours spent (optional)",noteOptional:"Note (optional)",markedEntry:"Marked",undoSelect:"Select the entry you want to undo.",removeEntry:"Remove",noCompletionsToUndo:"No entries to undo.",month:"Month",week:"Week",details:"Details"},u2={app:l2},c2={title:"Alışkanlık Takip",subtitle:"Günlük alışkanlıklarınızı ekleyin, gününüzü tamamladığınız yerleri işaretleyin, başarı serilerinizi takip edin ve yıllık performansınızı değerlendirin.",addHabitPlaceholder:"Yeni bir alışkanlık ekle",addButton:"Ekle",activeHabits:"Mevcut Alışkanlıklar",completedToday:"Bugün Tamamlanan",longestStreak:"En Uzun Seri",totalCompletions:"Toplam Yapılan Alışkanlık",calendarPerformance:"Takvim",habits:"Alışkanlıklar",noHabits:"Henüz alışkanlık yok. Takip etmeye başlamak için bir tane ekleyin.",streak:"Seri",total:"Toplam",last:"Son",undo:"Geri Al",mark:"İşaretle",rename:"Yeniden Adlandır",archive:"Arşivle",activate:"Etkinleştir",summary:"özet",close:"Kapat",habitCompleted:"alışkanlık tamamlandı.",habitsCompleted:"alışkanlıklar tamamlandı.",noCompletedHabitsOnDay:"Bu günde tamamlanan alışkanlık yok.",unknownHabit:"Bilinmeyen alışkanlık",noCompletedHabits:"Tamamlanan alışkanlık yok.",renameHabit:"Alışkanlığı yeniden adlandır",habitNamePlaceholder:"Alışkanlık adı",save:"Kaydet",logout:"Çıkış Yap",archived:"Arşivlendi",light:"Aydınlık",dark:"Karanlık",hoursSpent:"Geçirilen saat (isteğe bağlı)",noteOptional:"Not (isteğe bağlı)",markedEntry:"İşaretlendi",undoSelect:"Geri almak istediğiniz kaydı seçin.",removeEntry:"Kaldır",noCompletionsToUndo:"Geri alınacak kayıt yok.",month:"Ay",week:"Hafta",details:"Detaylar"},h2={app:c2},d2={en:{translation:u2.app},tr:{translation:h2.app}};vt.use(f0).use(HO).init({resources:d2,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}});RL();Th.createRoot(document.getElementById("root")).render(P.jsx(KL,{}));
