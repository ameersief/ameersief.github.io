(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function tb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ym={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function nb(){if(jv)return Ll;jv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Ll.Fragment=e,Ll.jsx=n,Ll.jsxs=n,Ll}var Gv;function ib(){return Gv||(Gv=1,ym.exports=nb()),ym.exports}var M2=ib(),_m={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function rb(){if(Yv)return _e;Yv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),V=Symbol.iterator;function G(O){return O===null||typeof O!="object"?null:(O=V&&O[V]||O["@@iterator"],typeof O=="function"?O:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ie=Object.assign,ne={};function ye(O,Q,ee){this.props=O,this.context=Q,this.refs=ne,this.updater=ee||$}ye.prototype.isReactComponent={},ye.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},ye.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function be(){}be.prototype=ye.prototype;function Ie(O,Q,ee){this.props=O,this.context=Q,this.refs=ne,this.updater=ee||$}var et=Ie.prototype=new be;et.constructor=Ie,ie(et,ye.prototype),et.isPureReactComponent=!0;var $e=Array.isArray;function ze(){}var C={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function R(O,Q,ee){var se=ee.ref;return{$$typeof:r,type:O,key:Q,ref:se!==void 0?se:null,props:ee}}function M(O,Q){return R(O.type,Q,O.props)}function N(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function k(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ee){return Q[ee]})}var b=/\/+/g;function at(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):Q.toString(36)}function Lt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(ze,ze):(O.status="pending",O.then(function(Q){O.status==="pending"&&(O.status="fulfilled",O.value=Q)},function(Q){O.status==="pending"&&(O.status="rejected",O.reason=Q)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,Q,ee,se,pe){var Ae=typeof O;(Ae==="undefined"||Ae==="boolean")&&(O=null);var Pe=!1;if(O===null)Pe=!0;else switch(Ae){case"bigint":case"string":case"number":Pe=!0;break;case"object":switch(O.$$typeof){case r:case e:Pe=!0;break;case T:return Pe=O._init,F(Pe(O._payload),Q,ee,se,pe)}}if(Pe)return pe=pe(O),Pe=se===""?"."+at(O,0):se,$e(pe)?(ee="",Pe!=null&&(ee=Pe.replace(b,"$&/")+"/"),F(pe,Q,ee,"",function(_s){return _s})):pe!=null&&(N(pe)&&(pe=M(pe,ee+(pe.key==null||O&&O.key===pe.key?"":(""+pe.key).replace(b,"$&/")+"/")+Pe)),Q.push(pe)),1;Pe=0;var Ut=se===""?".":se+":";if($e(O))for(var ot=0;ot<O.length;ot++)se=O[ot],Ae=Ut+at(se,ot),Pe+=F(se,Q,ee,Ae,pe);else if(ot=G(O),typeof ot=="function")for(O=ot.call(O),ot=0;!(se=O.next()).done;)se=se.value,Ae=Ut+at(se,ot++),Pe+=F(se,Q,ee,Ae,pe);else if(Ae==="object"){if(typeof O.then=="function")return F(Lt(O),Q,ee,se,pe);throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Pe}function Z(O,Q,ee){if(O==null)return O;var se=[],pe=0;return F(O,se,"","",function(Ae){return Q.call(ee,Ae,pe++)}),se}function ce(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(ee){(O._status===0||O._status===-1)&&(O._status=1,O._result=ee)},function(ee){(O._status===0||O._status===-1)&&(O._status=2,O._result=ee)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var Le=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Fe={map:Z,forEach:function(O,Q,ee){Z(O,function(){Q.apply(this,arguments)},ee)},count:function(O){var Q=0;return Z(O,function(){Q++}),Q},toArray:function(O){return Z(O,function(Q){return Q})||[]},only:function(O){if(!N(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return _e.Activity=S,_e.Children=Fe,_e.Component=ye,_e.Fragment=n,_e.Profiler=o,_e.PureComponent=Ie,_e.StrictMode=s,_e.Suspense=y,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,_e.__COMPILER_RUNTIME={__proto__:null,c:function(O){return C.H.useMemoCache(O)}},_e.cache=function(O){return function(){return O.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(O,Q,ee){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=ie({},O.props),pe=O.key;if(Q!=null)for(Ae in Q.key!==void 0&&(pe=""+Q.key),Q)!I.call(Q,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&Q.ref===void 0||(se[Ae]=Q[Ae]);var Ae=arguments.length-2;if(Ae===1)se.children=ee;else if(1<Ae){for(var Pe=Array(Ae),Ut=0;Ut<Ae;Ut++)Pe[Ut]=arguments[Ut+2];se.children=Pe}return R(O.type,pe,se)},_e.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},_e.createElement=function(O,Q,ee){var se,pe={},Ae=null;if(Q!=null)for(se in Q.key!==void 0&&(Ae=""+Q.key),Q)I.call(Q,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(pe[se]=Q[se]);var Pe=arguments.length-2;if(Pe===1)pe.children=ee;else if(1<Pe){for(var Ut=Array(Pe),ot=0;ot<Pe;ot++)Ut[ot]=arguments[ot+2];pe.children=Ut}if(O&&O.defaultProps)for(se in Pe=O.defaultProps,Pe)pe[se]===void 0&&(pe[se]=Pe[se]);return R(O,Ae,pe)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(O){return{$$typeof:p,render:O}},_e.isValidElement=N,_e.lazy=function(O){return{$$typeof:T,_payload:{_status:-1,_result:O},_init:ce}},_e.memo=function(O,Q){return{$$typeof:_,type:O,compare:Q===void 0?null:Q}},_e.startTransition=function(O){var Q=C.T,ee={};C.T=ee;try{var se=O(),pe=C.S;pe!==null&&pe(ee,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(ze,Le)}catch(Ae){Le(Ae)}finally{Q!==null&&ee.types!==null&&(Q.types=ee.types),C.T=Q}},_e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},_e.use=function(O){return C.H.use(O)},_e.useActionState=function(O,Q,ee){return C.H.useActionState(O,Q,ee)},_e.useCallback=function(O,Q){return C.H.useCallback(O,Q)},_e.useContext=function(O){return C.H.useContext(O)},_e.useDebugValue=function(){},_e.useDeferredValue=function(O,Q){return C.H.useDeferredValue(O,Q)},_e.useEffect=function(O,Q){return C.H.useEffect(O,Q)},_e.useEffectEvent=function(O){return C.H.useEffectEvent(O)},_e.useId=function(){return C.H.useId()},_e.useImperativeHandle=function(O,Q,ee){return C.H.useImperativeHandle(O,Q,ee)},_e.useInsertionEffect=function(O,Q){return C.H.useInsertionEffect(O,Q)},_e.useLayoutEffect=function(O,Q){return C.H.useLayoutEffect(O,Q)},_e.useMemo=function(O,Q){return C.H.useMemo(O,Q)},_e.useOptimistic=function(O,Q){return C.H.useOptimistic(O,Q)},_e.useReducer=function(O,Q,ee){return C.H.useReducer(O,Q,ee)},_e.useRef=function(O){return C.H.useRef(O)},_e.useState=function(O){return C.H.useState(O)},_e.useSyncExternalStore=function(O,Q,ee){return C.H.useSyncExternalStore(O,Q,ee)},_e.useTransition=function(){return C.H.useTransition()},_e.version="19.2.5",_e}var Kv;function fp(){return Kv||(Kv=1,_m.exports=rb()),_m.exports}var so=fp();const P2=tb(so);var vm={exports:{}},Ul={},Em={exports:{}},Tm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function sb(){return Qv||(Qv=1,(function(r){function e(F,Z){var ce=F.length;F.push(Z);e:for(;0<ce;){var Le=ce-1>>>1,Fe=F[Le];if(0<o(Fe,Z))F[Le]=Z,F[ce]=Fe,ce=Le;else break e}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var Z=F[0],ce=F.pop();if(ce!==Z){F[0]=ce;e:for(var Le=0,Fe=F.length,O=Fe>>>1;Le<O;){var Q=2*(Le+1)-1,ee=F[Q],se=Q+1,pe=F[se];if(0>o(ee,ce))se<Fe&&0>o(pe,ee)?(F[Le]=pe,F[se]=ce,Le=se):(F[Le]=ee,F[Q]=ce,Le=Q);else if(se<Fe&&0>o(pe,ce))F[Le]=pe,F[se]=ce,Le=se;else break e}}return Z}function o(F,Z){var ce=F.sortIndex-Z.sortIndex;return ce!==0?ce:F.id-Z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var y=[],_=[],T=1,S=null,V=3,G=!1,$=!1,ie=!1,ne=!1,ye=typeof setTimeout=="function"?setTimeout:null,be=typeof clearTimeout=="function"?clearTimeout:null,Ie=typeof setImmediate<"u"?setImmediate:null;function et(F){for(var Z=n(_);Z!==null;){if(Z.callback===null)s(_);else if(Z.startTime<=F)s(_),Z.sortIndex=Z.expirationTime,e(y,Z);else break;Z=n(_)}}function $e(F){if(ie=!1,et(F),!$)if(n(y)!==null)$=!0,ze||(ze=!0,k());else{var Z=n(_);Z!==null&&Lt($e,Z.startTime-F)}}var ze=!1,C=-1,I=5,R=-1;function M(){return ne?!0:!(r.unstable_now()-R<I)}function N(){if(ne=!1,ze){var F=r.unstable_now();R=F;var Z=!0;try{e:{$=!1,ie&&(ie=!1,be(C),C=-1),G=!0;var ce=V;try{t:{for(et(F),S=n(y);S!==null&&!(S.expirationTime>F&&M());){var Le=S.callback;if(typeof Le=="function"){S.callback=null,V=S.priorityLevel;var Fe=Le(S.expirationTime<=F);if(F=r.unstable_now(),typeof Fe=="function"){S.callback=Fe,et(F),Z=!0;break t}S===n(y)&&s(y),et(F)}else s(y);S=n(y)}if(S!==null)Z=!0;else{var O=n(_);O!==null&&Lt($e,O.startTime-F),Z=!1}}break e}finally{S=null,V=ce,G=!1}Z=void 0}}finally{Z?k():ze=!1}}}var k;if(typeof Ie=="function")k=function(){Ie(N)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,at=b.port2;b.port1.onmessage=N,k=function(){at.postMessage(null)}}else k=function(){ye(N,0)};function Lt(F,Z){C=ye(function(){F(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return V},r.unstable_next=function(F){switch(V){case 1:case 2:case 3:var Z=3;break;default:Z=V}var ce=V;V=Z;try{return F()}finally{V=ce}},r.unstable_requestPaint=function(){ne=!0},r.unstable_runWithPriority=function(F,Z){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ce=V;V=F;try{return Z()}finally{V=ce}},r.unstable_scheduleCallback=function(F,Z,ce){var Le=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?Le+ce:Le):ce=Le,F){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=ce+Fe,F={id:T++,callback:Z,priorityLevel:F,startTime:ce,expirationTime:Fe,sortIndex:-1},ce>Le?(F.sortIndex=ce,e(_,F),n(y)===null&&F===n(_)&&(ie?(be(C),C=-1):ie=!0,Lt($e,ce-Le))):(F.sortIndex=Fe,e(y,F),$||G||($=!0,ze||(ze=!0,k()))),F},r.unstable_shouldYield=M,r.unstable_wrapCallback=function(F){var Z=V;return function(){var ce=V;V=Z;try{return F.apply(this,arguments)}finally{V=ce}}}})(Tm)),Tm}var Xv;function ab(){return Xv||(Xv=1,Em.exports=sb()),Em.exports}var Am={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function ob(){if(Wv)return nn;Wv=1;var r=fp();function e(y){var _="https://react.dev/errors/"+y;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)_+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+y+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(y,_,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:y,containerInfo:_,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,_){if(y==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,nn.createPortal=function(y,_){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return u(y,_,null,T)},nn.flushSync=function(y){var _=f.T,T=s.p;try{if(f.T=null,s.p=2,y)return y()}finally{f.T=_,s.p=T,s.d.f()}},nn.preconnect=function(y,_){typeof y=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(y,_))},nn.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},nn.preinit=function(y,_){if(typeof y=="string"&&_&&typeof _.as=="string"){var T=_.as,S=p(T,_.crossOrigin),V=typeof _.integrity=="string"?_.integrity:void 0,G=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;T==="style"?s.d.S(y,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:S,integrity:V,fetchPriority:G}):T==="script"&&s.d.X(y,{crossOrigin:S,integrity:V,fetchPriority:G,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},nn.preinitModule=function(y,_){if(typeof y=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var T=p(_.as,_.crossOrigin);s.d.M(y,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&s.d.M(y)},nn.preload=function(y,_){if(typeof y=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var T=_.as,S=p(T,_.crossOrigin);s.d.L(y,T,{crossOrigin:S,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},nn.preloadModule=function(y,_){if(typeof y=="string")if(_){var T=p(_.as,_.crossOrigin);s.d.m(y,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else s.d.m(y)},nn.requestFormReset=function(y){s.d.r(y)},nn.unstable_batchedUpdates=function(y,_){return y(_)},nn.useFormState=function(y,_,T){return f.H.useFormState(y,_,T)},nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},nn.version="19.2.5",nn}var $v;function lb(){if($v)return Am.exports;$v=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Am.exports=ob(),Am.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function ub(){if(Jv)return Ul;Jv=1;var r=ab(),e=fp(),n=lb();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function y(t){if(u(t)!==t)throw Error(s(188))}function _(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return y(h),t;if(d===l)return y(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var g=!1,E=h.child;E;){if(E===a){g=!0,a=h,l=d;break}if(E===l){g=!0,l=h,a=d;break}E=E.sibling}if(!g){for(E=d.child;E;){if(E===a){g=!0,a=d,l=h;break}if(E===l){g=!0,l=d,a=h;break}E=E.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function T(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=T(t),i!==null)return i;t=t.sibling}return null}var S=Object.assign,V=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),be=Symbol.for("react.consumer"),Ie=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var b=Symbol.for("react.client.reference");function at(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===b?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ie:return"Fragment";case ye:return"Profiler";case ne:return"StrictMode";case $e:return"Suspense";case ze:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case $:return"Portal";case Ie:return t.displayName||"Context";case be:return(t._context.displayName||"Context")+".Consumer";case et:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case C:return i=t.displayName||null,i!==null?i:at(t.type)||"Memo";case I:i=t._payload,t=t._init;try{return at(t(i))}catch{}}return null}var Lt=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Le=[],Fe=-1;function O(t){return{current:t}}function Q(t){0>Fe||(t.current=Le[Fe],Le[Fe]=null,Fe--)}function ee(t,i){Fe++,Le[Fe]=t.current,t.current=i}var se=O(null),pe=O(null),Ae=O(null),Pe=O(null);function Ut(t,i){switch(ee(Ae,i),ee(pe,t),ee(se,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?dv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=dv(i),t=mv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(se),ee(se,t)}function ot(){Q(se),Q(pe),Q(Ae)}function _s(t){t.memoizedState!==null&&ee(Pe,t);var i=se.current,a=mv(i,t.type);i!==a&&(ee(pe,t),ee(se,a))}function ha(t){pe.current===t&&(Q(se),Q(pe)),Pe.current===t&&(Q(Pe),Vl._currentValue=ce)}var fa,da;function hi(t){if(fa===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);fa=i&&i[1]||"",da=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fa+t+da}var Vo=!1;function vs(t,i){if(!t||Vo)return"";Vo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(q){var z=q}Reflect.construct(t,[],K)}else{try{K.call()}catch(q){z=q}t.call(K.prototype)}}else{try{throw Error()}catch(q){z=q}(K=t())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(q){if(q&&z&&typeof q.stack=="string")return[q.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),g=d[0],E=d[1];if(g&&E){var w=g.split(`
`),x=E.split(`
`);for(h=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;h<x.length&&!x[h].includes("DetermineComponentFrameRoot");)h++;if(l===w.length||h===x.length)for(l=w.length-1,h=x.length-1;1<=l&&0<=h&&w[l]!==x[h];)h--;for(;1<=l&&0<=h;l--,h--)if(w[l]!==x[h]){if(l!==1||h!==1)do if(l--,h--,0>h||w[l]!==x[h]){var H=`
`+w[l].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=l&&0<=h);break}}}finally{Vo=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?hi(a):""}function Mo(t,i){switch(t.tag){case 26:case 27:case 5:return hi(t.type);case 16:return hi("Lazy");case 13:return t.child!==i&&i!==null?hi("Suspense Fallback"):hi("Suspense");case 19:return hi("SuspenseList");case 0:case 15:return vs(t.type,!1);case 11:return vs(t.type.render,!1);case 1:return vs(t.type,!0);case 31:return hi("Activity");default:return""}}function Po(t){try{var i="",a=null;do i+=Mo(t,a),a=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var St=Object.prototype.hasOwnProperty,xt=r.unstable_scheduleCallback,vr=r.unstable_cancelCallback,vf=r.unstable_shouldYield,Nu=r.unstable_requestPaint,ln=r.unstable_now,Es=r.unstable_getCurrentPriorityLevel,ko=r.unstable_ImmediatePriority,Lo=r.unstable_UserBlockingPriority,Er=r.unstable_NormalPriority,Ef=r.unstable_LowPriority,Ou=r.unstable_IdlePriority,Vu=r.log,Mu=r.unstable_setDisableYieldValue,Qn=null,Yt=null;function Mn(t){if(typeof Vu=="function"&&Mu(t),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(Qn,t)}catch{}}var yt=Math.clz32?Math.clz32:ku,Pu=Math.log,ma=Math.LN2;function ku(t){return t>>>=0,t===0?32:31-(Pu(t)/ma|0)|0}var fi=256,Ts=262144,It=4194304;function di(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mi(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=di(l):(g&=E,g!==0?h=di(g):a||(a=E&~t,a!==0&&(h=di(a))))):(E=l&~d,E!==0?h=di(E):g!==0?h=di(g):a||(a=l&~t,a!==0&&(h=di(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Xn(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Tf(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lu(){var t=It;return It<<=1,(It&62914560)===0&&(It=4194304),t}function pi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function As(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Af(t,i,a,l,h,d){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,w=t.expirationTimes,x=t.hiddenUpdates;for(a=g&~a;0<a;){var H=31-yt(a),K=1<<H;E[H]=0,w[H]=-1;var z=x[H];if(z!==null)for(x[H]=null,H=0;H<z.length;H++){var q=z[H];q!==null&&(q.lane&=-536870913)}a&=~K}l!==0&&Ss(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(g&~i))}function Ss(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-yt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Uo(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-yt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function xo(t,i){var a=i&-i;return a=(a&42)!==0?1:Is(a),(a&(t.suspendedLanes|i))!==0?0:a}function Is(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Bi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Uu(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Uv(t.type))}function Wn(t,i){var a=Z.p;try{return Z.p=t,i()}finally{Z.p=a}}var $n=Math.random().toString(36).slice(2),bt="__reactFiber$"+$n,qt="__reactProps$"+$n,gi="__reactContainer$"+$n,pa="__reactEvents$"+$n,Sf="__reactListeners$"+$n,xu="__reactHandles$"+$n,zu="__reactResources$"+$n,yi="__reactMarker$"+$n;function ga(t){delete t[bt],delete t[qt],delete t[pa],delete t[Sf],delete t[xu]}function _i(t){var i=t[bt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[gi]||a[bt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Tv(t);t!==null;){if(a=t[bt])return a;t=Tv(t)}return i}t=a,a=t.parentNode}return null}function Pn(t){if(t=t[bt]||t[gi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Sn(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function vi(t){var i=t[zu];return i||(i=t[zu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function wt(t){t[yi]=!0}var zo=new Set,Bo={};function Ei(t,i){Ti(t,i),Ti(t+"Capture",i)}function Ti(t,i){for(Bo[t]=i,t=0;t<i.length;t++)zo.add(i[t])}var qo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ho={},Fo={};function Bu(t){return St.call(Fo,t)?!0:St.call(Ho,t)?!1:qo.test(t)?Fo[t]=!0:(Ho[t]=!0,!1)}function ya(t,i,a){if(Bu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function In(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Rt(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}function Ht(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tr(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function jo(t,i,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(g){a=""+g,d.call(this,g)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function je(t){if(!t._valueTracker){var i=Tr(t)?"checked":"value";t._valueTracker=jo(t,i,""+t[i])}}function bs(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Tr(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Ai(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ws=/[\n"\\]/g;function fn(t){return t.replace(ws,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function _a(t,i,a,l,h,d,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),i!=null?g==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Ht(i)):t.value!==""+Ht(i)&&(t.value=""+Ht(i)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),i!=null?Go(t,g,Ht(i)):a!=null?Go(t,g,Ht(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Ht(E):t.removeAttribute("name")}function qu(t,i,a,l,h,d,g,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){je(t);return}a=a!=null?""+Ht(a):"",i=i!=null?""+Ht(i):a,E||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=E?t.checked:!!l,t.defaultChecked=!!l,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),je(t)}function Go(t,i,a){i==="number"&&Ai(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ar(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ht(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Hu(t,i,a){if(i!=null&&(i=""+Ht(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+Ht(a):""}function Sr(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Lt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Ht(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),je(t)}function dn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Fu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yo(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Fu.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Ko(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Yo(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Yo(t,d,i[d])}function va(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ir=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ea(t){return Ir.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Jn(){}var Qo=null;function kn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Si=null;function Rs(t){var i=Pn(t);if(i&&(t=i.stateNode)){var a=t[qt]||null;e:switch(t=i.stateNode,i.type){case"input":if(_a(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fn(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[qt]||null;if(!h)throw Error(s(90));_a(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&bs(l)}break e;case"textarea":Hu(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Ar(t,!!a.multiple,i,!1)}}}var Ta=!1;function wr(t,i,a){if(Ta)return t(i,a);Ta=!0;try{var l=t(i);return l}finally{if(Ta=!1,(br!==null||Si!==null)&&(Uc(),br&&(i=br,t=Si,Si=br=null,Rs(i),t)))for(i=0;i<t.length;i++)Rs(t[i])}}function Zn(t,i){var a=t.stateNode;if(a===null)return null;var l=a[qt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cs=!1;if(Ln)try{var Ke={};Object.defineProperty(Ke,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",Ke,Ke),window.removeEventListener("test",Ke,Ke)}catch{Cs=!1}var Ii=null,Xo=null,Ds=null;function Wo(){if(Ds)return Ds;var t,i=Xo,a=i.length,l,h="value"in Ii?Ii.value:Ii.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var g=a-t;for(l=1;l<=g&&i[a-l]===h[d-l];l++);return Ds=h.slice(t,1<l?1-l:void 0)}function Ns(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function qi(){return!0}function ei(){return!1}function Kt(t){function i(a,l,h,d,g){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?qi:ei,this.isPropagationStopped=ei,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),i}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=Kt(Hi),Rr=S({},Hi,{view:0,detail:0}),$o=Kt(Rr),Cr,Aa,wi,Sa=S({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wi&&(wi&&t.type==="mousemove"?(Cr=t.screenX-wi.screenX,Aa=t.screenY-wi.screenY):Aa=Cr=0,wi=t),Cr)},movementY:function(t){return"movementY"in t?t.movementY:Aa}}),Jo=Kt(Sa),Os=S({},Sa,{dataTransfer:0}),Gu=Kt(Os),Yu=S({},Rr,{relatedTarget:0}),Vs=Kt(Yu),Zo=S({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ku=Kt(Zo),Ia=S({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qu=Kt(Ia),Xu=S({},Hi,{data:0}),Ri=Kt(Xu),Wu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$u={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ju={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zu(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ju[t])?!!i[t]:!1}function Dr(){return Zu}var un=S({},Rr,{key:function(t){if(t.key){var i=Wu[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ns(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$u[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dr,charCode:function(t){return t.type==="keypress"?Ns(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ns(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ec=Kt(un),tc=S({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fi=Kt(tc),c=S({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dr}),m=Kt(c),v=S({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=Kt(v),L=S({},Sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B=Kt(L),J=S({},Hi,{newState:0,oldState:0}),Ee=Kt(J),_t=[9,13,27,32],Be=Ln&&"CompositionEvent"in window,lt=null;Ln&&"documentMode"in document&&(lt=document.documentMode);var Un=Ln&&"TextEvent"in window&&!lt,Ci=Ln&&(!Be||lt&&8<lt&&11>=lt),ti=" ",ni=!1;function Ms(t,i){switch(t){case"keyup":return _t.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ba(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wa=!1;function bI(t,i){switch(t){case"compositionend":return ba(i);case"keypress":return i.which!==32?null:(ni=!0,ti);case"textInput":return t=i.data,t===ti&&ni?null:t;default:return null}}function wI(t,i){if(wa)return t==="compositionend"||!Be&&Ms(t,i)?(t=Wo(),Ds=Xo=Ii=null,wa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ci&&i.locale!=="ko"?null:i.data;default:return null}}var RI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ig(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!RI[t.type]:i==="textarea"}function bg(t,i,a,l){br?Si?Si.push(l):Si=[l]:br=l,i=jc(i,"onChange"),0<i.length&&(a=new bi("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var el=null,tl=null;function CI(t){ov(t,0)}function nc(t){var i=Sn(t);if(bs(i))return t}function wg(t,i){if(t==="change")return i}var Rg=!1;if(Ln){var If;if(Ln){var bf="oninput"in document;if(!bf){var Cg=document.createElement("div");Cg.setAttribute("oninput","return;"),bf=typeof Cg.oninput=="function"}If=bf}else If=!1;Rg=If&&(!document.documentMode||9<document.documentMode)}function Dg(){el&&(el.detachEvent("onpropertychange",Ng),tl=el=null)}function Ng(t){if(t.propertyName==="value"&&nc(tl)){var i=[];bg(i,tl,t,kn(t)),wr(CI,i)}}function DI(t,i,a){t==="focusin"?(Dg(),el=i,tl=a,el.attachEvent("onpropertychange",Ng)):t==="focusout"&&Dg()}function NI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nc(tl)}function OI(t,i){if(t==="click")return nc(i)}function VI(t,i){if(t==="input"||t==="change")return nc(i)}function MI(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var bn=typeof Object.is=="function"?Object.is:MI;function nl(t,i){if(bn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!St.call(i,h)||!bn(t[h],i[h]))return!1}return!0}function Og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vg(t,i){var a=Og(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Og(a)}}function Mg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Mg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Pg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Ai(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Ai(t.document)}return i}function wf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var PI=Ln&&"documentMode"in document&&11>=document.documentMode,Ra=null,Rf=null,il=null,Cf=!1;function kg(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cf||Ra==null||Ra!==Ai(l)||(l=Ra,"selectionStart"in l&&wf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),il&&nl(il,l)||(il=l,l=jc(Rf,"onSelect"),0<l.length&&(i=new bi("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Ra)))}function Ps(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Ca={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},Df={},Lg={};Ln&&(Lg=document.createElement("div").style,"AnimationEvent"in window||(delete Ca.animationend.animation,delete Ca.animationiteration.animation,delete Ca.animationstart.animation),"TransitionEvent"in window||delete Ca.transitionend.transition);function ks(t){if(Df[t])return Df[t];if(!Ca[t])return t;var i=Ca[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Lg)return Df[t]=i[a];return t}var Ug=ks("animationend"),xg=ks("animationiteration"),zg=ks("animationstart"),kI=ks("transitionrun"),LI=ks("transitionstart"),UI=ks("transitioncancel"),Bg=ks("transitionend"),qg=new Map,Nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nf.push("scrollEnd");function ii(t,i){qg.set(t,i),Ei(i,[t])}var ic=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xn=[],Da=0,Of=0;function rc(){for(var t=Da,i=Of=Da=0;i<t;){var a=xn[i];xn[i++]=null;var l=xn[i];xn[i++]=null;var h=xn[i];xn[i++]=null;var d=xn[i];if(xn[i++]=null,l!==null&&h!==null){var g=l.pending;g===null?h.next=h:(h.next=g.next,g.next=h),l.pending=h}d!==0&&Hg(a,h,d)}}function sc(t,i,a,l){xn[Da++]=t,xn[Da++]=i,xn[Da++]=a,xn[Da++]=l,Of|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Vf(t,i,a,l){return sc(t,i,a,l),ac(t)}function Ls(t,i){return sc(t,null,null,i),ac(t)}function Hg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-yt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function ac(t){if(50<bl)throw bl=0,qd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Na={};function xI(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,i,a,l){return new xI(t,i,a,l)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,i){var a=t.alternate;return a===null?(a=wn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fg(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function oc(t,i,a,l,h,d){var g=0;if(l=t,typeof t=="function")Mf(t)&&(g=1);else if(typeof t=="string")g=F0(t,a,se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=wn(31,a,i,h),t.elementType=R,t.lanes=d,t;case ie:return Us(a.children,h,d,i);case ne:g=8,h|=24;break;case ye:return t=wn(12,a,i,h|2),t.elementType=ye,t.lanes=d,t;case $e:return t=wn(13,a,i,h),t.elementType=$e,t.lanes=d,t;case ze:return t=wn(19,a,i,h),t.elementType=ze,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ie:g=10;break e;case be:g=9;break e;case et:g=11;break e;case C:g=14;break e;case I:g=16,l=null;break e}g=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=wn(g,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Us(t,i,a,l){return t=wn(7,t,l,i),t.lanes=a,t}function Pf(t,i,a){return t=wn(6,t,null,i),t.lanes=a,t}function jg(t){var i=wn(18,null,null,0);return i.stateNode=t,i}function kf(t,i,a){return i=wn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Gg=new WeakMap;function zn(t,i){if(typeof t=="object"&&t!==null){var a=Gg.get(t);return a!==void 0?a:(i={value:t,source:i,stack:Po(i)},Gg.set(t,i),i)}return{value:t,source:i,stack:Po(i)}}var Oa=[],Va=0,lc=null,rl=0,Bn=[],qn=0,Nr=null,Di=1,Ni="";function Gi(t,i){Oa[Va++]=rl,Oa[Va++]=lc,lc=t,rl=i}function Yg(t,i,a){Bn[qn++]=Di,Bn[qn++]=Ni,Bn[qn++]=Nr,Nr=t;var l=Di;t=Ni;var h=32-yt(l)-1;l&=~(1<<h),a+=1;var d=32-yt(i)+h;if(30<d){var g=h-h%5;d=(l&(1<<g)-1).toString(32),l>>=g,h-=g,Di=1<<32-yt(i)+h|a<<h|l,Ni=d+t}else Di=1<<d|a<<h|l,Ni=t}function Lf(t){t.return!==null&&(Gi(t,1),Yg(t,1,0))}function Uf(t){for(;t===lc;)lc=Oa[--Va],Oa[Va]=null,rl=Oa[--Va],Oa[Va]=null;for(;t===Nr;)Nr=Bn[--qn],Bn[qn]=null,Ni=Bn[--qn],Bn[qn]=null,Di=Bn[--qn],Bn[qn]=null}function Kg(t,i){Bn[qn++]=Di,Bn[qn++]=Ni,Bn[qn++]=Nr,Di=i.id,Ni=i.overflow,Nr=t}var Qt=null,tt=null,Me=!1,Or=null,Hn=!1,xf=Error(s(519));function Vr(t){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sl(zn(i,t)),xf}function Qg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[bt]=t,i[qt]=l,a){case"dialog":Re("cancel",i),Re("close",i);break;case"iframe":case"object":case"embed":Re("load",i);break;case"video":case"audio":for(a=0;a<Rl.length;a++)Re(Rl[a],i);break;case"source":Re("error",i);break;case"img":case"image":case"link":Re("error",i),Re("load",i);break;case"details":Re("toggle",i);break;case"input":Re("invalid",i),qu(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Re("invalid",i);break;case"textarea":Re("invalid",i),Sr(i,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||hv(i.textContent,a)?(l.popover!=null&&(Re("beforetoggle",i),Re("toggle",i)),l.onScroll!=null&&Re("scroll",i),l.onScrollEnd!=null&&Re("scrollend",i),l.onClick!=null&&(i.onclick=Jn),i=!0):i=!1,i||Vr(t,!0)}function Xg(t){for(Qt=t.return;Qt;)switch(Qt.tag){case 5:case 31:case 13:Hn=!1;return;case 27:case 3:Hn=!0;return;default:Qt=Qt.return}}function Ma(t){if(t!==Qt)return!1;if(!Me)return Xg(t),Me=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||nm(t.type,t.memoizedProps)),a=!a),a&&tt&&Vr(t),Xg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tt=Ev(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tt=Ev(t)}else i===27?(i=tt,Yr(t.type)?(t=om,om=null,tt=t):tt=i):tt=Qt?jn(t.stateNode.nextSibling):null;return!0}function xs(){tt=Qt=null,Me=!1}function zf(){var t=Or;return t!==null&&(yn===null?yn=t:yn.push.apply(yn,t),Or=null),t}function sl(t){Or===null?Or=[t]:Or.push(t)}var Bf=O(null),zs=null,Yi=null;function Mr(t,i,a){ee(Bf,i._currentValue),i._currentValue=a}function Ki(t){t._currentValue=Bf.current,Q(Bf)}function qf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Hf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var g=h.child;d=d.firstContext;e:for(;d!==null;){var E=d;d=h;for(var w=0;w<i.length;w++)if(E.context===i[w]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),qf(d.return,a,t),l||(g=null);break e}d=E.next}}else if(h.tag===18){if(g=h.return,g===null)throw Error(s(341));g.lanes|=a,d=g.alternate,d!==null&&(d.lanes|=a),qf(g,a,t),g=null}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===t){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}}function Pa(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var g=h.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=h.type;bn(h.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(h===Pe.current){if(g=h.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Vl):t=[Vl])}h=h.return}t!==null&&Hf(i,t,a,l),i.flags|=262144}function uc(t){for(t=t.firstContext;t!==null;){if(!bn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Bs(t){zs=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Xt(t){return Wg(zs,t)}function cc(t,i){return zs===null&&Bs(t),Wg(t,i)}function Wg(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Yi===null){if(t===null)throw Error(s(308));Yi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Yi=Yi.next=i;return a}var zI=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},BI=r.unstable_scheduleCallback,qI=r.unstable_NormalPriority,Ct={$$typeof:Ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ff(){return{controller:new zI,data:new Map,refCount:0}}function al(t){t.refCount--,t.refCount===0&&BI(qI,function(){t.controller.abort()})}var ol=null,jf=0,ka=0,La=null;function HI(t,i){if(ol===null){var a=ol=[];jf=0,ka=Kd(),La={status:"pending",value:void 0,then:function(l){a.push(l)}}}return jf++,i.then($g,$g),i}function $g(){if(--jf===0&&ol!==null){La!==null&&(La.status="fulfilled");var t=ol;ol=null,ka=0,La=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function FI(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Jg=F.S;F.S=function(t,i){k_=ln(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&HI(t,i),Jg!==null&&Jg(t,i)};var qs=O(null);function Gf(){var t=qs.current;return t!==null?t:Je.pooledCache}function hc(t,i){i===null?ee(qs,qs.current):ee(qs,i.pool)}function Zg(){var t=Gf();return t===null?null:{parent:Ct._currentValue,pool:t}}var Ua=Error(s(460)),Yf=Error(s(474)),fc=Error(s(542)),dc={then:function(){}};function ey(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ty(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Jn,Jn),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,iy(t),t;default:if(typeof i.status=="string")i.then(Jn,Jn);else{if(t=Je,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,iy(t),t}throw Fs=i,Ua}}function Hs(t){try{var i=t._init;return i(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fs=a,Ua):a}}var Fs=null;function ny(){if(Fs===null)throw Error(s(459));var t=Fs;return Fs=null,t}function iy(t){if(t===Ua||t===fc)throw Error(s(483))}var xa=null,ll=0;function mc(t){var i=ll;return ll+=1,xa===null&&(xa=[]),ty(xa,t,i)}function ul(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function pc(t,i){throw i.$$typeof===V?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function ry(t){function i(P,D){if(t){var U=P.deletions;U===null?(P.deletions=[D],P.flags|=16):U.push(D)}}function a(P,D){if(!t)return null;for(;D!==null;)i(P,D),D=D.sibling;return null}function l(P){for(var D=new Map;P!==null;)P.key!==null?D.set(P.key,P):D.set(P.index,P),P=P.sibling;return D}function h(P,D){return P=ji(P,D),P.index=0,P.sibling=null,P}function d(P,D,U){return P.index=U,t?(U=P.alternate,U!==null?(U=U.index,U<D?(P.flags|=67108866,D):U):(P.flags|=67108866,D)):(P.flags|=1048576,D)}function g(P){return t&&P.alternate===null&&(P.flags|=67108866),P}function E(P,D,U,Y){return D===null||D.tag!==6?(D=Pf(U,P.mode,Y),D.return=P,D):(D=h(D,U),D.return=P,D)}function w(P,D,U,Y){var le=U.type;return le===ie?H(P,D,U.props.children,Y,U.key):D!==null&&(D.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===I&&Hs(le)===D.type)?(D=h(D,U.props),ul(D,U),D.return=P,D):(D=oc(U.type,U.key,U.props,null,P.mode,Y),ul(D,U),D.return=P,D)}function x(P,D,U,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=kf(U,P.mode,Y),D.return=P,D):(D=h(D,U.children||[]),D.return=P,D)}function H(P,D,U,Y,le){return D===null||D.tag!==7?(D=Us(U,P.mode,Y,le),D.return=P,D):(D=h(D,U),D.return=P,D)}function K(P,D,U){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Pf(""+D,P.mode,U),D.return=P,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case G:return U=oc(D.type,D.key,D.props,null,P.mode,U),ul(U,D),U.return=P,U;case $:return D=kf(D,P.mode,U),D.return=P,D;case I:return D=Hs(D),K(P,D,U)}if(Lt(D)||k(D))return D=Us(D,P.mode,U,null),D.return=P,D;if(typeof D.then=="function")return K(P,mc(D),U);if(D.$$typeof===Ie)return K(P,cc(P,D),U);pc(P,D)}return null}function z(P,D,U,Y){var le=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return le!==null?null:E(P,D,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case G:return U.key===le?w(P,D,U,Y):null;case $:return U.key===le?x(P,D,U,Y):null;case I:return U=Hs(U),z(P,D,U,Y)}if(Lt(U)||k(U))return le!==null?null:H(P,D,U,Y,null);if(typeof U.then=="function")return z(P,D,mc(U),Y);if(U.$$typeof===Ie)return z(P,D,cc(P,U),Y);pc(P,U)}return null}function q(P,D,U,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return P=P.get(U)||null,E(D,P,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case G:return P=P.get(Y.key===null?U:Y.key)||null,w(D,P,Y,le);case $:return P=P.get(Y.key===null?U:Y.key)||null,x(D,P,Y,le);case I:return Y=Hs(Y),q(P,D,U,Y,le)}if(Lt(Y)||k(Y))return P=P.get(U)||null,H(D,P,Y,le,null);if(typeof Y.then=="function")return q(P,D,U,mc(Y),le);if(Y.$$typeof===Ie)return q(P,D,U,cc(D,Y),le);pc(D,Y)}return null}function ae(P,D,U,Y){for(var le=null,Ue=null,oe=D,Se=D=0,De=null;oe!==null&&Se<U.length;Se++){oe.index>Se?(De=oe,oe=null):De=oe.sibling;var xe=z(P,oe,U[Se],Y);if(xe===null){oe===null&&(oe=De);break}t&&oe&&xe.alternate===null&&i(P,oe),D=d(xe,D,Se),Ue===null?le=xe:Ue.sibling=xe,Ue=xe,oe=De}if(Se===U.length)return a(P,oe),Me&&Gi(P,Se),le;if(oe===null){for(;Se<U.length;Se++)oe=K(P,U[Se],Y),oe!==null&&(D=d(oe,D,Se),Ue===null?le=oe:Ue.sibling=oe,Ue=oe);return Me&&Gi(P,Se),le}for(oe=l(oe);Se<U.length;Se++)De=q(oe,P,Se,U[Se],Y),De!==null&&(t&&De.alternate!==null&&oe.delete(De.key===null?Se:De.key),D=d(De,D,Se),Ue===null?le=De:Ue.sibling=De,Ue=De);return t&&oe.forEach(function($r){return i(P,$r)}),Me&&Gi(P,Se),le}function fe(P,D,U,Y){if(U==null)throw Error(s(151));for(var le=null,Ue=null,oe=D,Se=D=0,De=null,xe=U.next();oe!==null&&!xe.done;Se++,xe=U.next()){oe.index>Se?(De=oe,oe=null):De=oe.sibling;var $r=z(P,oe,xe.value,Y);if($r===null){oe===null&&(oe=De);break}t&&oe&&$r.alternate===null&&i(P,oe),D=d($r,D,Se),Ue===null?le=$r:Ue.sibling=$r,Ue=$r,oe=De}if(xe.done)return a(P,oe),Me&&Gi(P,Se),le;if(oe===null){for(;!xe.done;Se++,xe=U.next())xe=K(P,xe.value,Y),xe!==null&&(D=d(xe,D,Se),Ue===null?le=xe:Ue.sibling=xe,Ue=xe);return Me&&Gi(P,Se),le}for(oe=l(oe);!xe.done;Se++,xe=U.next())xe=q(oe,P,Se,xe.value,Y),xe!==null&&(t&&xe.alternate!==null&&oe.delete(xe.key===null?Se:xe.key),D=d(xe,D,Se),Ue===null?le=xe:Ue.sibling=xe,Ue=xe);return t&&oe.forEach(function(eb){return i(P,eb)}),Me&&Gi(P,Se),le}function We(P,D,U,Y){if(typeof U=="object"&&U!==null&&U.type===ie&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case G:e:{for(var le=U.key;D!==null;){if(D.key===le){if(le=U.type,le===ie){if(D.tag===7){a(P,D.sibling),Y=h(D,U.props.children),Y.return=P,P=Y;break e}}else if(D.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===I&&Hs(le)===D.type){a(P,D.sibling),Y=h(D,U.props),ul(Y,U),Y.return=P,P=Y;break e}a(P,D);break}else i(P,D);D=D.sibling}U.type===ie?(Y=Us(U.props.children,P.mode,Y,U.key),Y.return=P,P=Y):(Y=oc(U.type,U.key,U.props,null,P.mode,Y),ul(Y,U),Y.return=P,P=Y)}return g(P);case $:e:{for(le=U.key;D!==null;){if(D.key===le)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(P,D.sibling),Y=h(D,U.children||[]),Y.return=P,P=Y;break e}else{a(P,D);break}else i(P,D);D=D.sibling}Y=kf(U,P.mode,Y),Y.return=P,P=Y}return g(P);case I:return U=Hs(U),We(P,D,U,Y)}if(Lt(U))return ae(P,D,U,Y);if(k(U)){if(le=k(U),typeof le!="function")throw Error(s(150));return U=le.call(U),fe(P,D,U,Y)}if(typeof U.then=="function")return We(P,D,mc(U),Y);if(U.$$typeof===Ie)return We(P,D,cc(P,U),Y);pc(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,D!==null&&D.tag===6?(a(P,D.sibling),Y=h(D,U),Y.return=P,P=Y):(a(P,D),Y=Pf(U,P.mode,Y),Y.return=P,P=Y),g(P)):a(P,D)}return function(P,D,U,Y){try{ll=0;var le=We(P,D,U,Y);return xa=null,le}catch(oe){if(oe===Ua||oe===fc)throw oe;var Ue=wn(29,oe,null,P.mode);return Ue.lanes=Y,Ue.return=P,Ue}finally{}}}var js=ry(!0),sy=ry(!1),Pr=!1;function Kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function kr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Lr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(qe&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=ac(t),Hg(t,null,a),i}return sc(t,l,i,a),ac(t)}function cl(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Uo(t,a)}}function Xf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=g:d=d.next=g,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Wf=!1;function hl(){if(Wf){var t=La;if(t!==null)throw t}}function fl(t,i,a,l){Wf=!1;var h=t.updateQueue;Pr=!1;var d=h.firstBaseUpdate,g=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,x=w.next;w.next=null,g===null?d=x:g.next=x,g=w;var H=t.alternate;H!==null&&(H=H.updateQueue,E=H.lastBaseUpdate,E!==g&&(E===null?H.firstBaseUpdate=x:E.next=x,H.lastBaseUpdate=w))}if(d!==null){var K=h.baseState;g=0,H=x=w=null,E=d;do{var z=E.lane&-536870913,q=z!==E.lane;if(q?(Ce&z)===z:(l&z)===z){z!==0&&z===ka&&(Wf=!0),H!==null&&(H=H.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ae=t,fe=E;z=i;var We=a;switch(fe.tag){case 1:if(ae=fe.payload,typeof ae=="function"){K=ae.call(We,K,z);break e}K=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=fe.payload,z=typeof ae=="function"?ae.call(We,K,z):ae,z==null)break e;K=S({},K,z);break e;case 2:Pr=!0}}z=E.callback,z!==null&&(t.flags|=64,q&&(t.flags|=8192),q=h.callbacks,q===null?h.callbacks=[z]:q.push(z))}else q={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},H===null?(x=H=q,w=K):H=H.next=q,g|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;q=E,E=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);H===null&&(w=K),h.baseState=w,h.firstBaseUpdate=x,h.lastBaseUpdate=H,d===null&&(h.shared.lanes=0),qr|=g,t.lanes=g,t.memoizedState=K}}function ay(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function oy(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ay(a[t],i)}var za=O(null),gc=O(0);function ly(t,i){t=nr,ee(gc,t),ee(za,i),nr=t|i.baseLanes}function $f(){ee(gc,nr),ee(za,za.current)}function Jf(){nr=gc.current,Q(za),Q(gc)}var Rn=O(null),Fn=null;function Ur(t){var i=t.alternate;ee(vt,vt.current&1),ee(Rn,t),Fn===null&&(i===null||za.current!==null||i.memoizedState!==null)&&(Fn=t)}function Zf(t){ee(vt,vt.current),ee(Rn,t),Fn===null&&(Fn=t)}function uy(t){t.tag===22?(ee(vt,vt.current),ee(Rn,t),Fn===null&&(Fn=t)):xr()}function xr(){ee(vt,vt.current),ee(Rn,Rn.current)}function Cn(t){Q(Rn),Fn===t&&(Fn=null),Q(vt)}var vt=O(0);function yc(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sm(a)||am(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Qi=0,Te=null,Qe=null,Dt=null,_c=!1,Ba=!1,Gs=!1,vc=0,dl=0,qa=null,jI=0;function dt(){throw Error(s(321))}function ed(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!bn(t[a],i[a]))return!1;return!0}function td(t,i,a,l,h,d){return Qi=d,Te=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=t===null||t.memoizedState===null?Yy:gd,Gs=!1,d=a(l,h),Gs=!1,Ba&&(d=hy(i,a,l,h)),cy(t),d}function cy(t){F.H=gl;var i=Qe!==null&&Qe.next!==null;if(Qi=0,Dt=Qe=Te=null,_c=!1,dl=0,qa=null,i)throw Error(s(300));t===null||Nt||(t=t.dependencies,t!==null&&uc(t)&&(Nt=!0))}function hy(t,i,a,l){Te=t;var h=0;do{if(Ba&&(qa=null),dl=0,Ba=!1,25<=h)throw Error(s(301));if(h+=1,Dt=Qe=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=Ky,d=i(a,l)}while(Ba);return d}function GI(){var t=F.H,i=t.useState()[0];return i=typeof i.then=="function"?ml(i):i,t=t.useState()[0],(Qe!==null?Qe.memoizedState:null)!==t&&(Te.flags|=1024),i}function nd(){var t=vc!==0;return vc=0,t}function id(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function rd(t){if(_c){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}_c=!1}Qi=0,Dt=Qe=Te=null,Ba=!1,dl=vc=0,qa=null}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?Te.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Et(){if(Qe===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var i=Dt===null?Te.memoizedState:Dt.next;if(i!==null)Dt=i,Qe=t;else{if(t===null)throw Te.alternate===null?Error(s(467)):Error(s(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Dt===null?Te.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ml(t){var i=dl;return dl+=1,qa===null&&(qa=[]),t=ty(qa,t,i),i=Te,(Dt===null?i.memoizedState:Dt.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Yy:gd),t}function Tc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ml(t);if(t.$$typeof===Ie)return Xt(t)}throw Error(s(438,String(t)))}function sd(t){var i=null,a=Te.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Ec(),Te.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=M;return i.index++,a}function Xi(t,i){return typeof i=="function"?i(t):i}function Ac(t){var i=Et();return ad(i,Qe,t)}function ad(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var g=h.next;h.next=d.next,d.next=g}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var E=g=null,w=null,x=i,H=!1;do{var K=x.lane&-536870913;if(K!==x.lane?(Ce&K)===K:(Qi&K)===K){var z=x.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),K===ka&&(H=!0);else if((Qi&z)===z){x=x.next,z===ka&&(H=!0);continue}else K={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},w===null?(E=w=K,g=d):w=w.next=K,Te.lanes|=z,qr|=z;K=x.action,Gs&&a(d,K),d=x.hasEagerState?x.eagerState:a(d,K)}else z={lane:K,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},w===null?(E=w=z,g=d):w=w.next=z,Te.lanes|=K,qr|=K;x=x.next}while(x!==null&&x!==i);if(w===null?g=d:w.next=E,!bn(d,t.memoizedState)&&(Nt=!0,H&&(a=La,a!==null)))throw a;t.memoizedState=d,t.baseState=g,t.baseQueue=w,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function od(t){var i=Et(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var g=h=h.next;do d=t(d,g.action),g=g.next;while(g!==h);bn(d,i.memoizedState)||(Nt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function fy(t,i,a){var l=Te,h=Et(),d=Me;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var g=!bn((Qe||h).memoizedState,a);if(g&&(h.memoizedState=a,Nt=!0),h=h.queue,cd(py.bind(null,l,h,t),[t]),h.getSnapshot!==i||g||Dt!==null&&Dt.memoizedState.tag&1){if(l.flags|=2048,Ha(9,{destroy:void 0},my.bind(null,l,h,a,i),null),Je===null)throw Error(s(349));d||(Qi&127)!==0||dy(l,i,a)}return a}function dy(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Te.updateQueue,i===null?(i=Ec(),Te.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function my(t,i,a,l){i.value=a,i.getSnapshot=l,gy(i)&&yy(t)}function py(t,i,a){return a(function(){gy(i)&&yy(t)})}function gy(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!bn(t,a)}catch{return!0}}function yy(t){var i=Ls(t,2);i!==null&&_n(i,t,2)}function ld(t){var i=cn();if(typeof t=="function"){var a=t;if(t=a(),Gs){Mn(!0);try{a()}finally{Mn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},i}function _y(t,i,a,l){return t.baseState=a,ad(t,Qe,typeof l=="function"?l:Xi)}function YI(t,i,a,l,h){if(bc(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){d.listeners.push(g)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,vy(i,d)):(d.next=a.next,i.pending=a.next=d)}}function vy(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=F.T,g={};F.T=g;try{var E=a(h,l),w=F.S;w!==null&&w(g,E),Ey(t,i,E)}catch(x){ud(t,i,x)}finally{d!==null&&g.types!==null&&(d.types=g.types),F.T=d}}else try{d=a(h,l),Ey(t,i,d)}catch(x){ud(t,i,x)}}function Ey(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ty(t,i,l)},function(l){return ud(t,i,l)}):Ty(t,i,a)}function Ty(t,i,a){i.status="fulfilled",i.value=a,Ay(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,vy(t,a)))}function ud(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Ay(i),i=i.next;while(i!==l)}t.action=null}function Ay(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Sy(t,i){return i}function Iy(t,i){if(Me){var a=Je.formState;if(a!==null){e:{var l=Te;if(Me){if(tt){t:{for(var h=tt,d=Hn;h.nodeType!==8;){if(!d){h=null;break t}if(h=jn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){tt=jn(h.nextSibling),l=h.data==="F!";break e}}Vr(l)}l=!1}l&&(i=a[0])}}return a=cn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sy,lastRenderedState:i},a.queue=l,a=Fy.bind(null,Te,l),l.dispatch=a,l=ld(!1),d=pd.bind(null,Te,!1,l.queue),l=cn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=YI.bind(null,Te,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function by(t){var i=Et();return wy(i,Qe,t)}function wy(t,i,a){if(i=ad(t,i,Sy)[0],t=Ac(Xi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ml(i)}catch(g){throw g===Ua?fc:g}else l=i;i=Et();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Te.flags|=2048,Ha(9,{destroy:void 0},KI.bind(null,h,a),null)),[l,d,t]}function KI(t,i){t.action=i}function Ry(t){var i=Et(),a=Qe;if(a!==null)return wy(i,a,t);Et(),i=i.memoizedState,a=Et();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Ha(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Te.updateQueue,i===null&&(i=Ec(),Te.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function Cy(){return Et().memoizedState}function Sc(t,i,a,l){var h=cn();Te.flags|=t,h.memoizedState=Ha(1|i,{destroy:void 0},a,l===void 0?null:l)}function Ic(t,i,a,l){var h=Et();l=l===void 0?null:l;var d=h.memoizedState.inst;Qe!==null&&l!==null&&ed(l,Qe.memoizedState.deps)?h.memoizedState=Ha(i,d,a,l):(Te.flags|=t,h.memoizedState=Ha(1|i,d,a,l))}function Dy(t,i){Sc(8390656,8,t,i)}function cd(t,i){Ic(2048,8,t,i)}function QI(t){Te.flags|=4;var i=Te.updateQueue;if(i===null)i=Ec(),Te.updateQueue=i,i.events=[t];else{var a=i.events;a===null?i.events=[t]:a.push(t)}}function Ny(t){var i=Et().memoizedState;return QI({ref:i,nextImpl:t}),function(){if((qe&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function Oy(t,i){return Ic(4,2,t,i)}function Vy(t,i){return Ic(4,4,t,i)}function My(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Py(t,i,a){a=a!=null?a.concat([t]):null,Ic(4,4,My.bind(null,i,t),a)}function hd(){}function ky(t,i){var a=Et();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&ed(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Ly(t,i){var a=Et();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&ed(i,l[1]))return l[0];if(l=t(),Gs){Mn(!0);try{t()}finally{Mn(!1)}}return a.memoizedState=[l,i],l}function fd(t,i,a){return a===void 0||(Qi&1073741824)!==0&&(Ce&261930)===0?t.memoizedState=i:(t.memoizedState=a,t=U_(),Te.lanes|=t,qr|=t,a)}function Uy(t,i,a,l){return bn(a,i)?a:za.current!==null?(t=fd(t,a,l),bn(t,i)||(Nt=!0),t):(Qi&42)===0||(Qi&1073741824)!==0&&(Ce&261930)===0?(Nt=!0,t.memoizedState=a):(t=U_(),Te.lanes|=t,qr|=t,i)}function xy(t,i,a,l,h){var d=Z.p;Z.p=d!==0&&8>d?d:8;var g=F.T,E={};F.T=E,pd(t,!1,i,a);try{var w=h(),x=F.S;if(x!==null&&x(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var H=FI(w,l);pl(t,i,H,On(t))}else pl(t,i,l,On(t))}catch(K){pl(t,i,{then:function(){},status:"rejected",reason:K},On())}finally{Z.p=d,g!==null&&E.types!==null&&(g.types=E.types),F.T=g}}function XI(){}function dd(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=zy(t).queue;xy(t,h,i,ce,a===null?XI:function(){return By(t),a(l)})}function zy(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:ce},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function By(t){var i=zy(t);i.next===null&&(i=t.alternate.memoizedState),pl(t,i.next.queue,{},On())}function md(){return Xt(Vl)}function qy(){return Et().memoizedState}function Hy(){return Et().memoizedState}function WI(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=On();t=kr(a);var l=Lr(i,t,a);l!==null&&(_n(l,i,a),cl(l,i,a)),i={cache:Ff()},t.payload=i;return}i=i.return}}function $I(t,i,a){var l=On();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bc(t)?jy(i,a):(a=Vf(t,i,a,l),a!==null&&(_n(a,t,l),Gy(a,i,l)))}function Fy(t,i,a){var l=On();pl(t,i,a,l)}function pl(t,i,a,l){var h={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bc(t))jy(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var g=i.lastRenderedState,E=d(g,a);if(h.hasEagerState=!0,h.eagerState=E,bn(E,g))return sc(t,i,h,0),Je===null&&rc(),!1}catch{}finally{}if(a=Vf(t,i,h,l),a!==null)return _n(a,t,l),Gy(a,i,l),!0}return!1}function pd(t,i,a,l){if(l={lane:2,revertLane:Kd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},bc(t)){if(i)throw Error(s(479))}else i=Vf(t,a,l,2),i!==null&&_n(i,t,2)}function bc(t){var i=t.alternate;return t===Te||i!==null&&i===Te}function jy(t,i){Ba=_c=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Gy(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Uo(t,a)}}var gl={readContext:Xt,use:Tc,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useLayoutEffect:dt,useInsertionEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useSyncExternalStore:dt,useId:dt,useHostTransitionStatus:dt,useFormState:dt,useActionState:dt,useOptimistic:dt,useMemoCache:dt,useCacheRefresh:dt};gl.useEffectEvent=dt;var Yy={readContext:Xt,use:Tc,useCallback:function(t,i){return cn().memoizedState=[t,i===void 0?null:i],t},useContext:Xt,useEffect:Dy,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Sc(4194308,4,My.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Sc(4194308,4,t,i)},useInsertionEffect:function(t,i){Sc(4,2,t,i)},useMemo:function(t,i){var a=cn();i=i===void 0?null:i;var l=t();if(Gs){Mn(!0);try{t()}finally{Mn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=cn();if(a!==void 0){var h=a(i);if(Gs){Mn(!0);try{a(i)}finally{Mn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=$I.bind(null,Te,t),[l.memoizedState,t]},useRef:function(t){var i=cn();return t={current:t},i.memoizedState=t},useState:function(t){t=ld(t);var i=t.queue,a=Fy.bind(null,Te,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:hd,useDeferredValue:function(t,i){var a=cn();return fd(a,t,i)},useTransition:function(){var t=ld(!1);return t=xy.bind(null,Te,t.queue,!0,!1),cn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Te,h=cn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Je===null)throw Error(s(349));(Ce&127)!==0||dy(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Dy(py.bind(null,l,d,t),[t]),l.flags|=2048,Ha(9,{destroy:void 0},my.bind(null,l,d,a,i),null),a},useId:function(){var t=cn(),i=Je.identifierPrefix;if(Me){var a=Ni,l=Di;a=(l&~(1<<32-yt(l)-1)).toString(32)+a,i="_"+i+"R_"+a,a=vc++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=jI++,i="_"+i+"r_"+a.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:md,useFormState:Iy,useActionState:Iy,useOptimistic:function(t){var i=cn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=pd.bind(null,Te,!0,a),a.dispatch=i,[t,i]},useMemoCache:sd,useCacheRefresh:function(){return cn().memoizedState=WI.bind(null,Te)},useEffectEvent:function(t){var i=cn(),a={impl:t};return i.memoizedState=a,function(){if((qe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},gd={readContext:Xt,use:Tc,useCallback:ky,useContext:Xt,useEffect:cd,useImperativeHandle:Py,useInsertionEffect:Oy,useLayoutEffect:Vy,useMemo:Ly,useReducer:Ac,useRef:Cy,useState:function(){return Ac(Xi)},useDebugValue:hd,useDeferredValue:function(t,i){var a=Et();return Uy(a,Qe.memoizedState,t,i)},useTransition:function(){var t=Ac(Xi)[0],i=Et().memoizedState;return[typeof t=="boolean"?t:ml(t),i]},useSyncExternalStore:fy,useId:qy,useHostTransitionStatus:md,useFormState:by,useActionState:by,useOptimistic:function(t,i){var a=Et();return _y(a,Qe,t,i)},useMemoCache:sd,useCacheRefresh:Hy};gd.useEffectEvent=Ny;var Ky={readContext:Xt,use:Tc,useCallback:ky,useContext:Xt,useEffect:cd,useImperativeHandle:Py,useInsertionEffect:Oy,useLayoutEffect:Vy,useMemo:Ly,useReducer:od,useRef:Cy,useState:function(){return od(Xi)},useDebugValue:hd,useDeferredValue:function(t,i){var a=Et();return Qe===null?fd(a,t,i):Uy(a,Qe.memoizedState,t,i)},useTransition:function(){var t=od(Xi)[0],i=Et().memoizedState;return[typeof t=="boolean"?t:ml(t),i]},useSyncExternalStore:fy,useId:qy,useHostTransitionStatus:md,useFormState:Ry,useActionState:Ry,useOptimistic:function(t,i){var a=Et();return Qe!==null?_y(a,Qe,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:sd,useCacheRefresh:Hy};Ky.useEffectEvent=Ny;function yd(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:S({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var _d={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=On(),h=kr(l);h.payload=i,a!=null&&(h.callback=a),i=Lr(t,h,l),i!==null&&(_n(i,t,l),cl(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=On(),h=kr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Lr(t,h,l),i!==null&&(_n(i,t,l),cl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=On(),l=kr(a);l.tag=2,i!=null&&(l.callback=i),i=Lr(t,l,a),i!==null&&(_n(i,t,a),cl(i,t,a))}};function Qy(t,i,a,l,h,d,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,g):i.prototype&&i.prototype.isPureReactComponent?!nl(a,l)||!nl(h,d):!0}function Xy(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&_d.enqueueReplaceState(i,i.state,null)}function Ys(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=S({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}function Wy(t){ic(t)}function $y(t){console.error(t)}function Jy(t){ic(t)}function wc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Zy(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function vd(t,i,a){return a=kr(a),a.tag=3,a.payload={element:null},a.callback=function(){wc(t,i)},a}function e_(t){return t=kr(t),t.tag=3,t}function t_(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Zy(i,a,l)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Zy(i,a,l),typeof h!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function JI(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Pa(i,a,h,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:return Fn===null?xc():a.alternate===null&&mt===0&&(mt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===dc?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),jd(t,l,h)),!1;case 22:return a.flags|=65536,l===dc?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),jd(t,l,h)),!1}throw Error(s(435,a.tag))}return jd(t,l,h),xc(),!1}if(Me)return i=Rn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==xf&&(t=Error(s(422),{cause:l}),sl(zn(t,a)))):(l!==xf&&(i=Error(s(423),{cause:l}),sl(zn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=zn(l,a),h=vd(t.stateNode,l,h),Xf(t,h),mt!==4&&(mt=2)),!1;var d=Error(s(520),{cause:l});if(d=zn(d,a),Il===null?Il=[d]:Il.push(d),mt!==4&&(mt=2),i===null)return!0;l=zn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=vd(a.stateNode,l,t),Xf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Hr===null||!Hr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=e_(h),t_(h,t,a,l),Xf(a,h),!1}a=a.return}while(a!==null);return!1}var Ed=Error(s(461)),Nt=!1;function Wt(t,i,a,l){i.child=t===null?sy(i,null,a,l):js(i,t.child,a,l)}function n_(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var g={};for(var E in l)E!=="ref"&&(g[E]=l[E])}else g=l;return Bs(i),l=td(t,i,a,g,d,h),E=nd(),t!==null&&!Nt?(id(t,i,h),Wi(t,i,h)):(Me&&E&&Lf(i),i.flags|=1,Wt(t,i,l,h),i.child)}function i_(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!Mf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,r_(t,i,d,l,h)):(t=oc(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Cd(t,h)){var g=d.memoizedProps;if(a=a.compare,a=a!==null?a:nl,a(g,l)&&t.ref===i.ref)return Wi(t,i,h)}return i.flags|=1,t=ji(d,l),t.ref=i.ref,t.return=i,i.child=t}function r_(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(nl(d,l)&&t.ref===i.ref)if(Nt=!1,i.pendingProps=l=d,Cd(t,h))(t.flags&131072)!==0&&(Nt=!0);else return i.lanes=t.lanes,Wi(t,i,h)}return Td(t,i,a,l,h)}function s_(t,i,a,l){var h=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(l=i.child=t.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~d}else l=0,i.child=null;return a_(t,i,d,a,l)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&hc(i,d!==null?d.cachePool:null),d!==null?ly(i,d):$f(),uy(i);else return l=i.lanes=536870912,a_(t,i,d!==null?d.baseLanes|a:a,a,l)}else d!==null?(hc(i,d.cachePool),ly(i,d),xr(),i.memoizedState=null):(t!==null&&hc(i,null),$f(),xr());return Wt(t,i,h,a),i.child}function yl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function a_(t,i,a,l,h){var d=Gf();return d=d===null?null:{parent:Ct._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},t!==null&&hc(i,null),$f(),uy(i),t!==null&&Pa(t,i,l,!0),i.childLanes=h,null}function Rc(t,i){return i=Dc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function o_(t,i,a){return js(i,t.child,null,a),t=Rc(i,i.pendingProps),t.flags|=2,Cn(i),i.memoizedState=null,t}function ZI(t,i,a){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Me){if(l.mode==="hidden")return t=Rc(i,l),i.lanes=536870912,yl(null,t);if(Zf(i),(t=tt)?(t=vv(t,Hn),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Nr!==null?{id:Di,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=jg(t),a.return=i,i.child=a,Qt=i,tt=null)):t=null,t===null)throw Vr(i);return i.lanes=536870912,null}return Rc(i,l)}var d=t.memoizedState;if(d!==null){var g=d.dehydrated;if(Zf(i),h)if(i.flags&256)i.flags&=-257,i=o_(t,i,a);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(s(558));else if(Nt||Pa(t,i,a,!1),h=(a&t.childLanes)!==0,Nt||h){if(l=Je,l!==null&&(g=xo(l,a),g!==0&&g!==d.retryLane))throw d.retryLane=g,Ls(t,g),_n(l,t,g),Ed;xc(),i=o_(t,i,a)}else t=d.treeContext,tt=jn(g.nextSibling),Qt=i,Me=!0,Or=null,Hn=!1,t!==null&&Kg(i,t),i=Rc(i,l),i.flags|=4096;return i}return t=ji(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Cc(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function Td(t,i,a,l,h){return Bs(i),a=td(t,i,a,l,void 0,h),l=nd(),t!==null&&!Nt?(id(t,i,h),Wi(t,i,h)):(Me&&l&&Lf(i),i.flags|=1,Wt(t,i,a,h),i.child)}function l_(t,i,a,l,h,d){return Bs(i),i.updateQueue=null,a=hy(i,l,a,h),cy(t),l=nd(),t!==null&&!Nt?(id(t,i,d),Wi(t,i,d)):(Me&&l&&Lf(i),i.flags|=1,Wt(t,i,a,d),i.child)}function u_(t,i,a,l,h){if(Bs(i),i.stateNode===null){var d=Na,g=a.contextType;typeof g=="object"&&g!==null&&(d=Xt(g)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=_d,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Kf(i),g=a.contextType,d.context=typeof g=="object"&&g!==null?Xt(g):Na,d.state=i.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(yd(i,a,g,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(g=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),g!==d.state&&_d.enqueueReplaceState(d,d.state,null),fl(i,l,d,h),hl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var E=i.memoizedProps,w=Ys(a,E);d.props=w;var x=d.context,H=a.contextType;g=Na,typeof H=="object"&&H!==null&&(g=Xt(H));var K=a.getDerivedStateFromProps;H=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,H||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||x!==g)&&Xy(i,d,l,g),Pr=!1;var z=i.memoizedState;d.state=z,fl(i,l,d,h),hl(),x=i.memoizedState,E||z!==x||Pr?(typeof K=="function"&&(yd(i,a,K,l),x=i.memoizedState),(w=Pr||Qy(i,a,w,l,z,x,g))?(H||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=x),d.props=l,d.state=x,d.context=g,l=w):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Qf(t,i),g=i.memoizedProps,H=Ys(a,g),d.props=H,K=i.pendingProps,z=d.context,x=a.contextType,w=Na,typeof x=="object"&&x!==null&&(w=Xt(x)),E=a.getDerivedStateFromProps,(x=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==K||z!==w)&&Xy(i,d,l,w),Pr=!1,z=i.memoizedState,d.state=z,fl(i,l,d,h),hl();var q=i.memoizedState;g!==K||z!==q||Pr||t!==null&&t.dependencies!==null&&uc(t.dependencies)?(typeof E=="function"&&(yd(i,a,E,l),q=i.memoizedState),(H=Pr||Qy(i,a,H,l,z,q,w)||t!==null&&t.dependencies!==null&&uc(t.dependencies))?(x||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,q,w),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,q,w)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=w,l=H):(typeof d.componentDidUpdate!="function"||g===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Cc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=js(i,t.child,null,h),i.child=js(i,null,a,h)):Wt(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Wi(t,i,h),t}function c_(t,i,a,l){return xs(),i.flags|=256,Wt(t,i,a,l),i.child}var Ad={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sd(t){return{baseLanes:t,cachePool:Zg()}}function Id(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Nn),t}function h_(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,g;if((g=d)||(g=t!==null&&t.memoizedState===null?!1:(vt.current&2)!==0),g&&(h=!0,i.flags&=-129),g=(i.flags&32)!==0,i.flags&=-33,t===null){if(Me){if(h?Ur(i):xr(),(t=tt)?(t=vv(t,Hn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Nr!==null?{id:Di,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=jg(t),a.return=i,i.child=a,Qt=i,tt=null)):t=null,t===null)throw Vr(i);return am(t)?i.lanes=32:i.lanes=536870912,null}var E=l.children;return l=l.fallback,h?(xr(),h=i.mode,E=Dc({mode:"hidden",children:E},h),l=Us(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,l=i.child,l.memoizedState=Sd(a),l.childLanes=Id(t,g,a),i.memoizedState=Ad,yl(null,l)):(Ur(i),bd(i,E))}var w=t.memoizedState;if(w!==null&&(E=w.dehydrated,E!==null)){if(d)i.flags&256?(Ur(i),i.flags&=-257,i=wd(t,i,a)):i.memoizedState!==null?(xr(),i.child=t.child,i.flags|=128,i=null):(xr(),E=l.fallback,h=i.mode,l=Dc({mode:"visible",children:l.children},h),E=Us(E,h,a,null),E.flags|=2,l.return=i,E.return=i,l.sibling=E,i.child=l,js(i,t.child,null,a),l=i.child,l.memoizedState=Sd(a),l.childLanes=Id(t,g,a),i.memoizedState=Ad,i=yl(null,l));else if(Ur(i),am(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var x=g.dgst;g=x,l=Error(s(419)),l.stack="",l.digest=g,sl({value:l,source:null,stack:null}),i=wd(t,i,a)}else if(Nt||Pa(t,i,a,!1),g=(a&t.childLanes)!==0,Nt||g){if(g=Je,g!==null&&(l=xo(g,a),l!==0&&l!==w.retryLane))throw w.retryLane=l,Ls(t,l),_n(g,t,l),Ed;sm(E)||xc(),i=wd(t,i,a)}else sm(E)?(i.flags|=192,i.child=t.child,i=null):(t=w.treeContext,tt=jn(E.nextSibling),Qt=i,Me=!0,Or=null,Hn=!1,t!==null&&Kg(i,t),i=bd(i,l.children),i.flags|=4096);return i}return h?(xr(),E=l.fallback,h=i.mode,w=t.child,x=w.sibling,l=ji(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,x!==null?E=ji(x,E):(E=Us(E,h,a,null),E.flags|=2),E.return=i,l.return=i,l.sibling=E,i.child=l,yl(null,l),l=i.child,E=t.child.memoizedState,E===null?E=Sd(a):(h=E.cachePool,h!==null?(w=Ct._currentValue,h=h.parent!==w?{parent:w,pool:w}:h):h=Zg(),E={baseLanes:E.baseLanes|a,cachePool:h}),l.memoizedState=E,l.childLanes=Id(t,g,a),i.memoizedState=Ad,yl(t.child,l)):(Ur(i),a=t.child,t=a.sibling,a=ji(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(g=i.deletions,g===null?(i.deletions=[t],i.flags|=16):g.push(t)),i.child=a,i.memoizedState=null,a)}function bd(t,i){return i=Dc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Dc(t,i){return t=wn(22,t,null,i),t.lanes=0,t}function wd(t,i,a){return js(i,t.child,null,a),t=bd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function f_(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),qf(t.return,i,a)}function Rd(t,i,a,l,h,d){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h,treeForkCount:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=a,g.tailMode=h,g.treeForkCount=d)}function d_(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;l=l.children;var g=vt.current,E=(g&2)!==0;if(E?(g=g&1|2,i.flags|=128):g&=1,ee(vt,g),Wt(t,i,l,a),l=Me?rl:0,!E&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&f_(t,a,i);else if(t.tag===19)f_(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&yc(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Rd(i,!1,h,a,d,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&yc(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Rd(i,!0,a,null,d,l);break;case"together":Rd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Wi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),qr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(Pa(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=ji(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=ji(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Cd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&uc(t)))}function e0(t,i,a){switch(i.tag){case 3:Ut(i,i.stateNode.containerInfo),Mr(i,Ct,t.memoizedState.cache),xs();break;case 27:case 5:_s(i);break;case 4:Ut(i,i.stateNode.containerInfo);break;case 10:Mr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Zf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ur(i),i.flags|=128,null):(a&i.child.childLanes)!==0?h_(t,i,a):(Ur(i),t=Wi(t,i,a),t!==null?t.sibling:null);Ur(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Pa(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return d_(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ee(vt,vt.current),l)break;return null;case 22:return i.lanes=0,s_(t,i,a,i.pendingProps);case 24:Mr(i,Ct,t.memoizedState.cache)}return Wi(t,i,a)}function m_(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Nt=!0;else{if(!Cd(t,a)&&(i.flags&128)===0)return Nt=!1,e0(t,i,a);Nt=(t.flags&131072)!==0}else Nt=!1,Me&&(i.flags&1048576)!==0&&Yg(i,rl,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Hs(i.elementType),i.type=t,typeof t=="function")Mf(t)?(l=Ys(t,l),i.tag=1,i=u_(null,i,t,l,a)):(i.tag=0,i=Td(null,i,t,l,a));else{if(t!=null){var h=t.$$typeof;if(h===et){i.tag=11,i=n_(null,i,t,l,a);break e}else if(h===C){i.tag=14,i=i_(null,i,t,l,a);break e}}throw i=at(t)||t,Error(s(306,i,""))}}return i;case 0:return Td(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ys(l,i.pendingProps),u_(t,i,l,h,a);case 3:e:{if(Ut(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Qf(t,i),fl(i,l,null,a);var g=i.memoizedState;if(l=g.cache,Mr(i,Ct,l),l!==d.cache&&Hf(i,[Ct],a,!0),hl(),l=g.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:g.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=c_(t,i,l,a);break e}else if(l!==h){h=zn(Error(s(424)),i),sl(h),i=c_(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tt=jn(t.firstChild),Qt=i,Me=!0,Or=null,Hn=!0,a=sy(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xs(),l===h){i=Wi(t,i,a);break e}Wt(t,i,l,a)}i=i.child}return i;case 26:return Cc(t,i),t===null?(a=bv(i.type,null,i.pendingProps,null))?i.memoizedState=a:Me||(a=i.type,t=i.pendingProps,l=Gc(Ae.current).createElement(a),l[bt]=i,l[qt]=t,$t(l,a,t),wt(l),i.stateNode=l):i.memoizedState=bv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return _s(i),t===null&&Me&&(l=i.stateNode=Av(i.type,i.pendingProps,Ae.current),Qt=i,Hn=!0,h=tt,Yr(i.type)?(om=h,tt=jn(l.firstChild)):tt=h),Wt(t,i,i.pendingProps.children,a),Cc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Me&&((h=l=tt)&&(l=N0(l,i.type,i.pendingProps,Hn),l!==null?(i.stateNode=l,Qt=i,tt=jn(l.firstChild),Hn=!1,h=!0):h=!1),h||Vr(i)),_s(i),h=i.type,d=i.pendingProps,g=t!==null?t.memoizedProps:null,l=d.children,nm(h,d)?l=null:g!==null&&nm(h,g)&&(i.flags|=32),i.memoizedState!==null&&(h=td(t,i,GI,null,null,a),Vl._currentValue=h),Cc(t,i),Wt(t,i,l,a),i.child;case 6:return t===null&&Me&&((t=a=tt)&&(a=O0(a,i.pendingProps,Hn),a!==null?(i.stateNode=a,Qt=i,tt=null,t=!0):t=!1),t||Vr(i)),null;case 13:return h_(t,i,a);case 4:return Ut(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=js(i,null,l,a):Wt(t,i,l,a),i.child;case 11:return n_(t,i,i.type,i.pendingProps,a);case 7:return Wt(t,i,i.pendingProps,a),i.child;case 8:return Wt(t,i,i.pendingProps.children,a),i.child;case 12:return Wt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Mr(i,i.type,l.value),Wt(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Bs(i),h=Xt(h),l=l(h),i.flags|=1,Wt(t,i,l,a),i.child;case 14:return i_(t,i,i.type,i.pendingProps,a);case 15:return r_(t,i,i.type,i.pendingProps,a);case 19:return d_(t,i,a);case 31:return ZI(t,i,a);case 22:return s_(t,i,a,i.pendingProps);case 24:return Bs(i),l=Xt(Ct),t===null?(h=Gf(),h===null&&(h=Je,d=Ff(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Kf(i),Mr(i,Ct,h)):((t.lanes&a)!==0&&(Qf(t,i),fl(i,null,null,a),hl()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Mr(i,Ct,l)):(l=d.cache,Mr(i,Ct,l),l!==h.cache&&Hf(i,[Ct],a,!0))),Wt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function $i(t){t.flags|=4}function Dd(t,i,a,l,h){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(q_())t.flags|=8192;else throw Fs=dc,Yf}else t.flags&=-16777217}function p_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Nv(i))if(q_())t.flags|=8192;else throw Fs=dc,Yf}function Nc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Lu():536870912,t.lanes|=i,Ya|=i)}function _l(t,i){if(!Me)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function nt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function t0(t,i,a){var l=i.pendingProps;switch(Uf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return nt(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ki(Ct),ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ma(i)?$i(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,zf())),nt(i),null;case 26:var h=i.type,d=i.memoizedState;return t===null?($i(i),d!==null?(nt(i),p_(i,d)):(nt(i),Dd(i,h,null,l,a))):d?d!==t.memoizedState?($i(i),nt(i),p_(i,d)):(nt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&$i(i),nt(i),Dd(i,h,t,l,a)),null;case 27:if(ha(i),a=Ae.current,h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&$i(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return nt(i),null}t=se.current,Ma(i)?Qg(i):(t=Av(h,l,a),i.stateNode=t,$i(i))}return nt(i),null;case 5:if(ha(i),h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&$i(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return nt(i),null}if(d=se.current,Ma(i))Qg(i);else{var g=Gc(Ae.current);switch(d){case 1:d=g.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=g.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=g.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=g.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=g.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?g.createElement("select",{is:l.is}):g.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?g.createElement(h,{is:l.is}):g.createElement(h)}}d[bt]=i,d[qt]=l;e:for(g=i.child;g!==null;){if(g.tag===5||g.tag===6)d.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===i)break e;for(;g.sibling===null;){if(g.return===null||g.return===i)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}i.stateNode=d;e:switch($t(d,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&$i(i)}}return nt(i),Dd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,a),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&$i(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=Ae.current,Ma(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=Qt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[bt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||hv(t.nodeValue,a)),t||Vr(i,!0)}else t=Gc(t).createTextNode(l),t[bt]=i,i.stateNode=t}return nt(i),null;case 31:if(a=i.memoizedState,t===null||t.memoizedState!==null){if(l=Ma(i),a!==null){if(t===null){if(!l)throw Error(s(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[bt]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),t=!1}else a=zf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return i.flags&256?(Cn(i),i):(Cn(i),null);if((i.flags&128)!==0)throw Error(s(558))}return nt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Ma(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[bt]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),h=!1}else h=zf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Cn(i),i):(Cn(i),null)}return Cn(i),(i.flags&128)!==0?(i.lanes=a,i):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)),a!==t&&a&&(i.child.flags|=8192),Nc(i,i.updateQueue),nt(i),null);case 4:return ot(),t===null&&$d(i.stateNode.containerInfo),nt(i),null;case 10:return Ki(i.type),nt(i),null;case 19:if(Q(vt),l=i.memoizedState,l===null)return nt(i),null;if(h=(i.flags&128)!==0,d=l.rendering,d===null)if(h)_l(l,!1);else{if(mt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=yc(t),d!==null){for(i.flags|=128,_l(l,!1),t=d.updateQueue,i.updateQueue=t,Nc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Fg(a,t),a=a.sibling;return ee(vt,vt.current&1|2),Me&&Gi(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&ln()>kc&&(i.flags|=128,h=!0,_l(l,!1),i.lanes=4194304)}else{if(!h)if(t=yc(d),t!==null){if(i.flags|=128,h=!0,t=t.updateQueue,i.updateQueue=t,Nc(i,t),_l(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Me)return nt(i),null}else 2*ln()-l.renderingStartTime>kc&&a!==536870912&&(i.flags|=128,h=!0,_l(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ln(),t.sibling=null,a=vt.current,ee(vt,h?a&1|2:a&1),Me&&Gi(i,l.treeForkCount),t):(nt(i),null);case 22:case 23:return Cn(i),Jf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),a=i.updateQueue,a!==null&&Nc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&Q(qs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ki(Ct),nt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function n0(t,i){switch(Uf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ki(Ct),ot(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ha(i),null;case 31:if(i.memoizedState!==null){if(Cn(i),i.alternate===null)throw Error(s(340));xs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Cn(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));xs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Q(vt),null;case 4:return ot(),null;case 10:return Ki(i.type),null;case 22:case 23:return Cn(i),Jf(),t!==null&&Q(qs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ki(Ct),null;case 25:return null;default:return null}}function g_(t,i){switch(Uf(i),i.tag){case 3:Ki(Ct),ot();break;case 26:case 27:case 5:ha(i);break;case 4:ot();break;case 31:i.memoizedState!==null&&Cn(i);break;case 13:Cn(i);break;case 19:Q(vt);break;case 10:Ki(i.type);break;case 22:case 23:Cn(i),Jf(),t!==null&&Q(qs);break;case 24:Ki(Ct)}}function vl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,g=a.inst;l=d(),g.destroy=l}a=a.next}while(a!==h)}}catch(E){Ye(i,i.return,E)}}function zr(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var g=l.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,h=i;var w=a,x=E;try{x()}catch(H){Ye(h,w,H)}}}l=l.next}while(l!==d)}}catch(H){Ye(i,i.return,H)}}function y_(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{oy(i,a)}catch(l){Ye(t,t.return,l)}}}function __(t,i,a){a.props=Ys(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ye(t,i,l)}}function El(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){Ye(t,i,h)}}function Oi(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Ye(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ye(t,i,h)}else a.current=null}function v_(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Ye(t,t.return,h)}}function Nd(t,i,a){try{var l=t.stateNode;I0(l,t.type,a,i),l[qt]=i}catch(h){Ye(t,t.return,h)}}function E_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Yr(t.type)||t.tag===4}function Od(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Yr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vd(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Jn));else if(l!==4&&(l===27&&Yr(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(Vd(t,i,a),t=t.sibling;t!==null;)Vd(t,i,a),t=t.sibling}function Oc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&Yr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Oc(t,i,a),t=t.sibling;t!==null;)Oc(t,i,a),t=t.sibling}function T_(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);$t(i,l,a),i[bt]=t,i[qt]=a}catch(d){Ye(t,t.return,d)}}var Ji=!1,Ot=!1,Md=!1,A_=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function i0(t,i){if(t=t.containerInfo,em=Jc,t=Pg(t),wf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var g=0,E=-1,w=-1,x=0,H=0,K=t,z=null;t:for(;;){for(var q;K!==a||h!==0&&K.nodeType!==3||(E=g+h),K!==d||l!==0&&K.nodeType!==3||(w=g+l),K.nodeType===3&&(g+=K.nodeValue.length),(q=K.firstChild)!==null;)z=K,K=q;for(;;){if(K===t)break t;if(z===a&&++x===h&&(E=g),z===d&&++H===l&&(w=g),(q=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=q}a=E===-1||w===-1?null:{start:E,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(tm={focusedElem:t,selectionRange:a},Jc=!1,Ft=i;Ft!==null;)if(i=Ft,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ft=t;else for(;Ft!==null;){switch(i=Ft,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)h=t[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var ae=Ys(a.type,h);t=l.getSnapshotBeforeUpdate(ae,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(fe){Ye(a,a.return,fe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)rm(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rm(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Ft=t;break}Ft=i.return}}function S_(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:er(t,a),l&4&&vl(5,a);break;case 1:if(er(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(g){Ye(a,a.return,g)}else{var h=Ys(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ye(a,a.return,g)}}l&64&&y_(a),l&512&&El(a,a.return);break;case 3:if(er(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{oy(t,i)}catch(g){Ye(a,a.return,g)}}break;case 27:i===null&&l&4&&T_(a);case 26:case 5:er(t,a),i===null&&l&4&&v_(a),l&512&&El(a,a.return);break;case 12:er(t,a);break;case 31:er(t,a),l&4&&w_(t,a);break;case 13:er(t,a),l&4&&R_(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=f0.bind(null,a),V0(t,a))));break;case 22:if(l=a.memoizedState!==null||Ji,!l){i=i!==null&&i.memoizedState!==null||Ot,h=Ji;var d=Ot;Ji=l,(Ot=i)&&!d?tr(t,a,(a.subtreeFlags&8772)!==0):er(t,a),Ji=h,Ot=d}break;case 30:break;default:er(t,a)}}function I_(t){var i=t.alternate;i!==null&&(t.alternate=null,I_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ga(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ut=null,mn=!1;function Zi(t,i,a){for(a=a.child;a!==null;)b_(t,i,a),a=a.sibling}function b_(t,i,a){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Qn,a)}catch{}switch(a.tag){case 26:Ot||Oi(a,i),Zi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ot||Oi(a,i);var l=ut,h=mn;Yr(a.type)&&(ut=a.stateNode,mn=!1),Zi(t,i,a),Dl(a.stateNode),ut=l,mn=h;break;case 5:Ot||Oi(a,i);case 6:if(l=ut,h=mn,ut=null,Zi(t,i,a),ut=l,mn=h,ut!==null)if(mn)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(a.stateNode)}catch(d){Ye(a,i,d)}else try{ut.removeChild(a.stateNode)}catch(d){Ye(a,i,d)}break;case 18:ut!==null&&(mn?(t=ut,yv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),eo(t)):yv(ut,a.stateNode));break;case 4:l=ut,h=mn,ut=a.stateNode.containerInfo,mn=!0,Zi(t,i,a),ut=l,mn=h;break;case 0:case 11:case 14:case 15:zr(2,a,i),Ot||zr(4,a,i),Zi(t,i,a);break;case 1:Ot||(Oi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&__(a,i,l)),Zi(t,i,a);break;case 21:Zi(t,i,a);break;case 22:Ot=(l=Ot)||a.memoizedState!==null,Zi(t,i,a),Ot=l;break;default:Zi(t,i,a)}}function w_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{eo(t)}catch(a){Ye(i,i.return,a)}}}function R_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{eo(t)}catch(a){Ye(i,i.return,a)}}function r0(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new A_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new A_),i;default:throw Error(s(435,t.tag))}}function Vc(t,i){var a=r0(t);i.forEach(function(l){if(!a.has(l)){a.add(l);var h=d0.bind(null,t,l);l.then(h,h)}})}function pn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,g=i,E=g;e:for(;E!==null;){switch(E.tag){case 27:if(Yr(E.type)){ut=E.stateNode,mn=!1;break e}break;case 5:ut=E.stateNode,mn=!1;break e;case 3:case 4:ut=E.stateNode.containerInfo,mn=!0;break e}E=E.return}if(ut===null)throw Error(s(160));b_(d,g,h),ut=null,mn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)C_(i,t),i=i.sibling}var ri=null;function C_(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pn(i,t),gn(t),l&4&&(zr(3,t,t.return),vl(3,t),zr(5,t,t.return));break;case 1:pn(i,t),gn(t),l&512&&(Ot||a===null||Oi(a,a.return)),l&64&&Ji&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=ri;if(pn(i,t),gn(t),l&512&&(Ot||a===null||Oi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[yi]||d[bt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),$t(d,l,a),d[bt]=t,wt(d),l=d;break e;case"link":var g=Cv("link","href",h).get(l+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(d=g[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break t}}d=h.createElement(l),$t(d,l,a),h.head.appendChild(d);break;case"meta":if(g=Cv("meta","content",h).get(l+(a.content||""))){for(E=0;E<g.length;E++)if(d=g[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break t}}d=h.createElement(l),$t(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[bt]=t,wt(d),l=d}t.stateNode=l}else Dv(h,t.type,t.stateNode);else t.stateNode=Rv(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Dv(h,t.type,t.stateNode):Rv(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Nd(t,t.memoizedProps,a.memoizedProps)}break;case 27:pn(i,t),gn(t),l&512&&(Ot||a===null||Oi(a,a.return)),a!==null&&l&4&&Nd(t,t.memoizedProps,a.memoizedProps);break;case 5:if(pn(i,t),gn(t),l&512&&(Ot||a===null||Oi(a,a.return)),t.flags&32){h=t.stateNode;try{dn(h,"")}catch(ae){Ye(t,t.return,ae)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Nd(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Md=!0);break;case 6:if(pn(i,t),gn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(ae){Ye(t,t.return,ae)}}break;case 3:if(Qc=null,h=ri,ri=Yc(i.containerInfo),pn(i,t),ri=h,gn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{eo(i.containerInfo)}catch(ae){Ye(t,t.return,ae)}Md&&(Md=!1,D_(t));break;case 4:l=ri,ri=Yc(t.stateNode.containerInfo),pn(i,t),gn(t),ri=l;break;case 12:pn(i,t),gn(t);break;case 31:pn(i,t),gn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 13:pn(i,t),gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pc=ln()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 22:h=t.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,x=Ji,H=Ot;if(Ji=x||h,Ot=H||w,pn(i,t),Ot=H,Ji=x,gn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||Ji||Ot||Ks(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(d=w.stateNode,h)g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=w.stateNode;var K=w.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(ae){Ye(w,w.return,ae)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(ae){Ye(w,w.return,ae)}}}else if(i.tag===18){if(a===null){w=i;try{var q=w.stateNode;h?_v(q,!0):_v(w.stateNode,!1)}catch(ae){Ye(w,w.return,ae)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Vc(t,a))));break;case 19:pn(i,t),gn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 30:break;case 21:break;default:pn(i,t),gn(t)}}function gn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(E_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Od(t);Oc(t,d,h);break;case 5:var g=a.stateNode;a.flags&32&&(dn(g,""),a.flags&=-33);var E=Od(t);Oc(t,E,g);break;case 3:case 4:var w=a.stateNode.containerInfo,x=Od(t);Vd(t,x,w);break;default:throw Error(s(161))}}catch(H){Ye(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function D_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;D_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function er(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)S_(t,i.alternate,i),i=i.sibling}function Ks(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:zr(4,i,i.return),Ks(i);break;case 1:Oi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&__(i,i.return,a),Ks(i);break;case 27:Dl(i.stateNode);case 26:case 5:Oi(i,i.return),Ks(i);break;case 22:i.memoizedState===null&&Ks(i);break;case 30:Ks(i);break;default:Ks(i)}t=t.sibling}}function tr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,g=d.flags;switch(d.tag){case 0:case 11:case 15:tr(h,d,a),vl(4,d);break;case 1:if(tr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(x){Ye(l,l.return,x)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)ay(w[h],E)}catch(x){Ye(l,l.return,x)}}a&&g&64&&y_(d),El(d,d.return);break;case 27:T_(d);case 26:case 5:tr(h,d,a),a&&l===null&&g&4&&v_(d),El(d,d.return);break;case 12:tr(h,d,a);break;case 31:tr(h,d,a),a&&g&4&&w_(h,d);break;case 13:tr(h,d,a),a&&g&4&&R_(h,d);break;case 22:d.memoizedState===null&&tr(h,d,a),El(d,d.return);break;case 30:break;default:tr(h,d,a)}i=i.sibling}}function Pd(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&al(a))}function kd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&al(t))}function si(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)N_(t,i,a,l),i=i.sibling}function N_(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:si(t,i,a,l),h&2048&&vl(9,i);break;case 1:si(t,i,a,l);break;case 3:si(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&al(t)));break;case 12:if(h&2048){si(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,g=d.id,E=d.onPostCommit;typeof E=="function"&&E(g,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){Ye(i,i.return,w)}}else si(t,i,a,l);break;case 31:si(t,i,a,l);break;case 13:si(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,g=i.alternate,i.memoizedState!==null?d._visibility&2?si(t,i,a,l):Tl(t,i):d._visibility&2?si(t,i,a,l):(d._visibility|=2,Fa(t,i,a,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Pd(g,i);break;case 24:si(t,i,a,l),h&2048&&kd(i.alternate,i);break;default:si(t,i,a,l)}}function Fa(t,i,a,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,g=i,E=a,w=l,x=g.flags;switch(g.tag){case 0:case 11:case 15:Fa(d,g,E,w,h),vl(8,g);break;case 23:break;case 22:var H=g.stateNode;g.memoizedState!==null?H._visibility&2?Fa(d,g,E,w,h):Tl(d,g):(H._visibility|=2,Fa(d,g,E,w,h)),h&&x&2048&&Pd(g.alternate,g);break;case 24:Fa(d,g,E,w,h),h&&x&2048&&kd(g.alternate,g);break;default:Fa(d,g,E,w,h)}i=i.sibling}}function Tl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:Tl(a,l),h&2048&&Pd(l.alternate,l);break;case 24:Tl(a,l),h&2048&&kd(l.alternate,l);break;default:Tl(a,l)}i=i.sibling}}var Al=8192;function ja(t,i,a){if(t.subtreeFlags&Al)for(t=t.child;t!==null;)O_(t,i,a),t=t.sibling}function O_(t,i,a){switch(t.tag){case 26:ja(t,i,a),t.flags&Al&&t.memoizedState!==null&&j0(a,ri,t.memoizedState,t.memoizedProps);break;case 5:ja(t,i,a);break;case 3:case 4:var l=ri;ri=Yc(t.stateNode.containerInfo),ja(t,i,a),ri=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Al,Al=16777216,ja(t,i,a),Al=l):ja(t,i,a));break;default:ja(t,i,a)}}function V_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Sl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ft=l,P_(l,t)}V_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)M_(t),t=t.sibling}function M_(t){switch(t.tag){case 0:case 11:case 15:Sl(t),t.flags&2048&&zr(9,t,t.return);break;case 3:Sl(t);break;case 12:Sl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Mc(t)):Sl(t);break;default:Sl(t)}}function Mc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ft=l,P_(l,t)}V_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:zr(8,i,i.return),Mc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Mc(i));break;default:Mc(i)}t=t.sibling}}function P_(t,i){for(;Ft!==null;){var a=Ft;switch(a.tag){case 0:case 11:case 15:zr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:al(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ft=l;else e:for(a=t;Ft!==null;){l=Ft;var h=l.sibling,d=l.return;if(I_(l),l===a){Ft=null;break e}if(h!==null){h.return=d,Ft=h;break e}Ft=d}}}var s0={getCacheForType:function(t){var i=Xt(Ct),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a},cacheSignal:function(){return Xt(Ct).controller.signal}},a0=typeof WeakMap=="function"?WeakMap:Map,qe=0,Je=null,we=null,Ce=0,Ge=0,Dn=null,Br=!1,Ga=!1,Ld=!1,nr=0,mt=0,qr=0,Qs=0,Ud=0,Nn=0,Ya=0,Il=null,yn=null,xd=!1,Pc=0,k_=0,kc=1/0,Lc=null,Hr=null,zt=0,Fr=null,Ka=null,ir=0,zd=0,Bd=null,L_=null,bl=0,qd=null;function On(){return(qe&2)!==0&&Ce!==0?Ce&-Ce:F.T!==null?Kd():Uu()}function U_(){if(Nn===0)if((Ce&536870912)===0||Me){var t=Ts;Ts<<=1,(Ts&3932160)===0&&(Ts=262144),Nn=t}else Nn=536870912;return t=Rn.current,t!==null&&(t.flags|=32),Nn}function _n(t,i,a){(t===Je&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)&&(Qa(t,0),jr(t,Ce,Nn,!1)),As(t,a),((qe&2)===0||t!==Je)&&(t===Je&&((qe&2)===0&&(Qs|=a),mt===4&&jr(t,Ce,Nn,!1)),Vi(t))}function x_(t,i,a){if((qe&6)!==0)throw Error(s(327));var l=!a&&(i&127)===0&&(i&t.expiredLanes)===0||Xn(t,i),h=l?u0(t,i):Fd(t,i,!0),d=l;do{if(h===0){Ga&&!l&&jr(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!o0(a)){h=Fd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){i=g;e:{var E=t;h=Il;var w=E.current.memoizedState.isDehydrated;if(w&&(Qa(E,g).flags|=256),g=Fd(E,g,!1),g!==2){if(Ld&&!w){E.errorRecoveryDisabledLanes|=d,Qs|=d,h=4;break e}d=yn,yn=h,d!==null&&(yn===null?yn=d:yn.push.apply(yn,d))}h=g}if(d=!1,h!==2)continue}}if(h===1){Qa(t,0),jr(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:jr(l,i,Nn,!Br);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Pc+300-ln(),10<h)){if(jr(l,i,Nn,!Br),mi(l,0,!0)!==0)break e;ir=i,l.timeoutHandle=pv(z_.bind(null,l,a,yn,Lc,xd,i,Nn,Qs,Ya,Br,d,"Throttled",-0,0),h);break e}z_(l,a,yn,Lc,xd,i,Nn,Qs,Ya,Br,d,null,-0,0)}}break}while(!0);Vi(t)}function z_(t,i,a,l,h,d,g,E,w,x,H,K,z,q){if(t.timeoutHandle=-1,K=i.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jn},O_(i,d,K);var ae=(d&62914560)===d?Pc-ln():(d&4194048)===d?k_-ln():0;if(ae=G0(K,ae),ae!==null){ir=d,t.cancelPendingCommit=ae(K_.bind(null,t,i,d,a,l,h,g,E,w,H,K,null,z,q)),jr(t,d,g,!x);return}}K_(t,i,d,a,l,h,g,E,w)}function o0(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!bn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function jr(t,i,a,l){i&=~Ud,i&=~Qs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-yt(h),g=1<<d;l[d]=-1,h&=~g}a!==0&&Ss(t,a,i)}function Uc(){return(qe&6)===0?(wl(0),!1):!0}function Hd(){if(we!==null){if(Ge===0)var t=we.return;else t=we,Yi=zs=null,rd(t),xa=null,ll=0,t=we;for(;t!==null;)g_(t.alternate,t),t=t.return;we=null}}function Qa(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,R0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ir=0,Hd(),Je=t,we=a=ji(t.current,null),Ce=i,Ge=0,Dn=null,Br=!1,Ga=Xn(t,i),Ld=!1,Ya=Nn=Ud=Qs=qr=mt=0,yn=Il=null,xd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-yt(l),d=1<<h;i|=t[h],l&=~d}return nr=i,rc(),a}function B_(t,i){Te=null,F.H=gl,i===Ua||i===fc?(i=ny(),Ge=3):i===Yf?(i=ny(),Ge=4):Ge=i===Ed?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Dn=i,we===null&&(mt=1,wc(t,zn(i,t.current)))}function q_(){var t=Rn.current;return t===null?!0:(Ce&4194048)===Ce?Fn===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?t===Fn:!1}function H_(){var t=F.H;return F.H=gl,t===null?gl:t}function F_(){var t=F.A;return F.A=s0,t}function xc(){mt=4,Br||(Ce&4194048)!==Ce&&Rn.current!==null||(Ga=!0),(qr&134217727)===0&&(Qs&134217727)===0||Je===null||jr(Je,Ce,Nn,!1)}function Fd(t,i,a){var l=qe;qe|=2;var h=H_(),d=F_();(Je!==t||Ce!==i)&&(Lc=null,Qa(t,i)),i=!1;var g=mt;e:do try{if(Ge!==0&&we!==null){var E=we,w=Dn;switch(Ge){case 8:Hd(),g=6;break e;case 3:case 2:case 9:case 6:Rn.current===null&&(i=!0);var x=Ge;if(Ge=0,Dn=null,Xa(t,E,w,x),a&&Ga){g=0;break e}break;default:x=Ge,Ge=0,Dn=null,Xa(t,E,w,x)}}l0(),g=mt;break}catch(H){B_(t,H)}while(!0);return i&&t.shellSuspendCounter++,Yi=zs=null,qe=l,F.H=h,F.A=d,we===null&&(Je=null,Ce=0,rc()),g}function l0(){for(;we!==null;)j_(we)}function u0(t,i){var a=qe;qe|=2;var l=H_(),h=F_();Je!==t||Ce!==i?(Lc=null,kc=ln()+500,Qa(t,i)):Ga=Xn(t,i);e:do try{if(Ge!==0&&we!==null){i=we;var d=Dn;t:switch(Ge){case 1:Ge=0,Dn=null,Xa(t,i,d,1);break;case 2:case 9:if(ey(d)){Ge=0,Dn=null,G_(i);break}i=function(){Ge!==2&&Ge!==9||Je!==t||(Ge=7),Vi(t)},d.then(i,i);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:ey(d)?(Ge=0,Dn=null,G_(i)):(Ge=0,Dn=null,Xa(t,i,d,7));break;case 5:var g=null;switch(we.tag){case 26:g=we.memoizedState;case 5:case 27:var E=we;if(g?Nv(g):E.stateNode.complete){Ge=0,Dn=null;var w=E.sibling;if(w!==null)we=w;else{var x=E.return;x!==null?(we=x,zc(x)):we=null}break t}}Ge=0,Dn=null,Xa(t,i,d,5);break;case 6:Ge=0,Dn=null,Xa(t,i,d,6);break;case 8:Hd(),mt=6;break e;default:throw Error(s(462))}}c0();break}catch(H){B_(t,H)}while(!0);return Yi=zs=null,F.H=l,F.A=h,qe=a,we!==null?0:(Je=null,Ce=0,rc(),mt)}function c0(){for(;we!==null&&!vf();)j_(we)}function j_(t){var i=m_(t.alternate,t,nr);t.memoizedProps=t.pendingProps,i===null?zc(t):we=i}function G_(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=l_(a,i,i.pendingProps,i.type,void 0,Ce);break;case 11:i=l_(a,i,i.pendingProps,i.type.render,i.ref,Ce);break;case 5:rd(i);default:g_(a,i),i=we=Fg(i,nr),i=m_(a,i,nr)}t.memoizedProps=t.pendingProps,i===null?zc(t):we=i}function Xa(t,i,a,l){Yi=zs=null,rd(i),xa=null,ll=0;var h=i.return;try{if(JI(t,h,i,a,Ce)){mt=1,wc(t,zn(a,t.current)),we=null;return}}catch(d){if(h!==null)throw we=h,d;mt=1,wc(t,zn(a,t.current)),we=null;return}i.flags&32768?(Me||l===1?t=!0:Ga||(Ce&536870912)!==0?t=!1:(Br=t=!0,(l===2||l===9||l===3||l===6)&&(l=Rn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Y_(i,t)):zc(i)}function zc(t){var i=t;do{if((i.flags&32768)!==0){Y_(i,Br);return}t=i.return;var a=t0(i.alternate,i,nr);if(a!==null){we=a;return}if(i=i.sibling,i!==null){we=i;return}we=i=t}while(i!==null);mt===0&&(mt=5)}function Y_(t,i){do{var a=n0(t.alternate,t);if(a!==null){a.flags&=32767,we=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){we=t;return}we=t=a}while(t!==null);mt=6,we=null}function K_(t,i,a,l,h,d,g,E,w){t.cancelPendingCommit=null;do Bc();while(zt!==0);if((qe&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Of,Af(t,a,d,g,E,w),t===Je&&(we=Je=null,Ce=0),Ka=i,Fr=t,ir=a,zd=d,Bd=h,L_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,m0(Er,function(){return J_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=Z.p,Z.p=2,g=qe,qe|=4;try{i0(t,i,a)}finally{qe=g,Z.p=h,F.T=l}}zt=1,Q_(),X_(),W_()}}function Q_(){if(zt===1){zt=0;var t=Fr,i=Ka,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=Z.p;Z.p=2;var h=qe;qe|=4;try{C_(i,t);var d=tm,g=Pg(t.containerInfo),E=d.focusedElem,w=d.selectionRange;if(g!==E&&E&&E.ownerDocument&&Mg(E.ownerDocument.documentElement,E)){if(w!==null&&wf(E)){var x=w.start,H=w.end;if(H===void 0&&(H=x),"selectionStart"in E)E.selectionStart=x,E.selectionEnd=Math.min(H,E.value.length);else{var K=E.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var q=z.getSelection(),ae=E.textContent.length,fe=Math.min(w.start,ae),We=w.end===void 0?fe:Math.min(w.end,ae);!q.extend&&fe>We&&(g=We,We=fe,fe=g);var P=Vg(E,fe),D=Vg(E,We);if(P&&D&&(q.rangeCount!==1||q.anchorNode!==P.node||q.anchorOffset!==P.offset||q.focusNode!==D.node||q.focusOffset!==D.offset)){var U=K.createRange();U.setStart(P.node,P.offset),q.removeAllRanges(),fe>We?(q.addRange(U),q.extend(D.node,D.offset)):(U.setEnd(D.node,D.offset),q.addRange(U))}}}}for(K=[],q=E;q=q.parentNode;)q.nodeType===1&&K.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<K.length;E++){var Y=K[E];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Jc=!!em,tm=em=null}finally{qe=h,Z.p=l,F.T=a}}t.current=i,zt=2}}function X_(){if(zt===2){zt=0;var t=Fr,i=Ka,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=Z.p;Z.p=2;var h=qe;qe|=4;try{S_(t,i.alternate,i)}finally{qe=h,Z.p=l,F.T=a}}zt=3}}function W_(){if(zt===4||zt===3){zt=0,Nu();var t=Fr,i=Ka,a=ir,l=L_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?zt=5:(zt=0,Ka=Fr=null,$_(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Hr=null),Bi(a),i=i.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Qn,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=Z.p,Z.p=2,F.T=null;try{for(var d=t.onRecoverableError,g=0;g<l.length;g++){var E=l[g];d(E.value,{componentStack:E.stack})}}finally{F.T=i,Z.p=h}}(ir&3)!==0&&Bc(),Vi(t),h=t.pendingLanes,(a&261930)!==0&&(h&42)!==0?t===qd?bl++:(bl=0,qd=t):bl=0,wl(0)}}function $_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,al(i)))}function Bc(){return Q_(),X_(),W_(),J_()}function J_(){if(zt!==5)return!1;var t=Fr,i=zd;zd=0;var a=Bi(ir),l=F.T,h=Z.p;try{Z.p=32>a?32:a,F.T=null,a=Bd,Bd=null;var d=Fr,g=ir;if(zt=0,Ka=Fr=null,ir=0,(qe&6)!==0)throw Error(s(331));var E=qe;if(qe|=4,M_(d.current),N_(d,d.current,g,a),qe=E,wl(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Qn,d)}catch{}return!0}finally{Z.p=h,F.T=l,$_(t,i)}}function Z_(t,i,a){i=zn(a,i),i=vd(t.stateNode,i,2),t=Lr(t,i,2),t!==null&&(As(t,2),Vi(t))}function Ye(t,i,a){if(t.tag===3)Z_(t,t,a);else for(;i!==null;){if(i.tag===3){Z_(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Hr===null||!Hr.has(l))){t=zn(a,t),a=e_(2),l=Lr(i,a,2),l!==null&&(t_(a,l,i,t),As(l,2),Vi(l));break}}i=i.return}}function jd(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new a0;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Ld=!0,h.add(a),t=h0.bind(null,t,i,a),i.then(t,t))}function h0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Je===t&&(Ce&a)===a&&(mt===4||mt===3&&(Ce&62914560)===Ce&&300>ln()-Pc?(qe&2)===0&&Qa(t,0):Ud|=a,Ya===Ce&&(Ya=0)),Vi(t)}function ev(t,i){i===0&&(i=Lu()),t=Ls(t,i),t!==null&&(As(t,i),Vi(t))}function f0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),ev(t,a)}function d0(t,i){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),ev(t,a)}function m0(t,i){return xt(t,i)}var qc=null,Wa=null,Gd=!1,Hc=!1,Yd=!1,Gr=0;function Vi(t){t!==Wa&&t.next===null&&(Wa===null?qc=Wa=t:Wa=Wa.next=t),Hc=!0,Gd||(Gd=!0,g0())}function wl(t,i){if(!Yd&&Hc){Yd=!0;do for(var a=!1,l=qc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var g=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-yt(42|t)+1)-1,d&=h&~(g&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,rv(l,d))}else d=Ce,d=mi(l,l===Je?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Xn(l,d)||(a=!0,rv(l,d));l=l.next}while(a);Yd=!1}}function p0(){tv()}function tv(){Hc=Gd=!1;var t=0;Gr!==0&&w0()&&(t=Gr);for(var i=ln(),a=null,l=qc;l!==null;){var h=l.next,d=nv(l,i);d===0?(l.next=null,a===null?qc=h:a.next=h,h===null&&(Wa=a)):(a=l,(t!==0||(d&3)!==0)&&(Hc=!0)),l=h}zt!==0&&zt!==5||wl(t),Gr!==0&&(Gr=0)}function nv(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var g=31-yt(d),E=1<<g,w=h[g];w===-1?((E&a)===0||(E&l)!==0)&&(h[g]=Tf(E,i)):w<=i&&(t.expiredLanes|=E),d&=~E}if(i=Je,a=Ce,a=mi(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&vr(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Xn(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&vr(l),Bi(a)){case 2:case 8:a=Lo;break;case 32:a=Er;break;case 268435456:a=Ou;break;default:a=Er}return l=iv.bind(null,t),a=xt(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&vr(l),t.callbackPriority=2,t.callbackNode=null,2}function iv(t,i){if(zt!==0&&zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Bc()&&t.callbackNode!==a)return null;var l=Ce;return l=mi(t,t===Je?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(x_(t,l,i),nv(t,ln()),t.callbackNode!=null&&t.callbackNode===a?iv.bind(null,t):null)}function rv(t,i){if(Bc())return null;x_(t,i,!0)}function g0(){C0(function(){(qe&6)!==0?xt(ko,p0):tv()})}function Kd(){if(Gr===0){var t=ka;t===0&&(t=fi,fi<<=1,(fi&261888)===0&&(fi=256)),Gr=t}return Gr}function sv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ea(""+t)}function av(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function y0(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=sv((h[qt]||null).action),g=l.submitter;g&&(i=(i=g[qt]||null)?sv(i.formAction):g.getAttribute("formAction"),i!==null&&(d=i,g=null));var E=new bi("action","action",null,l,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Gr!==0){var w=g?av(h,g):new FormData(h);dd(a,{pending:!0,data:w,method:h.method,action:d},null,w)}}else typeof d=="function"&&(E.preventDefault(),w=g?av(h,g):new FormData(h),dd(a,{pending:!0,data:w,method:h.method,action:d},d,w))},currentTarget:h}]})}}for(var Qd=0;Qd<Nf.length;Qd++){var Xd=Nf[Qd],_0=Xd.toLowerCase(),v0=Xd[0].toUpperCase()+Xd.slice(1);ii(_0,"on"+v0)}ii(Ug,"onAnimationEnd"),ii(xg,"onAnimationIteration"),ii(zg,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(kI,"onTransitionRun"),ii(LI,"onTransitionStart"),ii(UI,"onTransitionCancel"),ii(Bg,"onTransitionEnd"),Ti("onMouseEnter",["mouseout","mouseover"]),Ti("onMouseLeave",["mouseout","mouseover"]),Ti("onPointerEnter",["pointerout","pointerover"]),Ti("onPointerLeave",["pointerout","pointerover"]),Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function ov(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var g=l.length-1;0<=g;g--){var E=l[g],w=E.instance,x=E.currentTarget;if(E=E.listener,w!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=x;try{d(h)}catch(H){ic(H)}h.currentTarget=null,d=w}else for(g=0;g<l.length;g++){if(E=l[g],w=E.instance,x=E.currentTarget,E=E.listener,w!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=x;try{d(h)}catch(H){ic(H)}h.currentTarget=null,d=w}}}}function Re(t,i){var a=i[pa];a===void 0&&(a=i[pa]=new Set);var l=t+"__bubble";a.has(l)||(lv(i,t,2,!1),a.add(l))}function Wd(t,i,a){var l=0;i&&(l|=4),lv(a,t,l,i)}var Fc="_reactListening"+Math.random().toString(36).slice(2);function $d(t){if(!t[Fc]){t[Fc]=!0,zo.forEach(function(a){a!=="selectionchange"&&(E0.has(a)||Wd(a,!1,t),Wd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Fc]||(i[Fc]=!0,Wd("selectionchange",!1,i))}}function lv(t,i,a,l){switch(Uv(i)){case 2:var h=Q0;break;case 8:h=X0;break;default:h=fm}a=h.bind(null,i,a,t),h=void 0,!Cs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Jd(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var E=l.stateNode.containerInfo;if(E===h)break;if(g===4)for(g=l.return;g!==null;){var w=g.tag;if((w===3||w===4)&&g.stateNode.containerInfo===h)return;g=g.return}for(;E!==null;){if(g=_i(E),g===null)return;if(w=g.tag,w===5||w===6||w===26||w===27){l=d=g;continue e}E=E.parentNode}}l=l.return}wr(function(){var x=d,H=kn(a),K=[];e:{var z=qg.get(t);if(z!==void 0){var q=bi,ae=t;switch(t){case"keypress":if(Ns(a)===0)break e;case"keydown":case"keyup":q=ec;break;case"focusin":ae="focus",q=Vs;break;case"focusout":ae="blur",q=Vs;break;case"beforeblur":case"afterblur":q=Vs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Gu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=m;break;case Ug:case xg:case zg:q=Ku;break;case Bg:q=A;break;case"scroll":case"scrollend":q=$o;break;case"wheel":q=B;break;case"copy":case"cut":case"paste":q=Qu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Fi;break;case"toggle":case"beforetoggle":q=Ee}var fe=(i&4)!==0,We=!fe&&(t==="scroll"||t==="scrollend"),P=fe?z!==null?z+"Capture":null:z;fe=[];for(var D=x,U;D!==null;){var Y=D;if(U=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||U===null||P===null||(Y=Zn(D,P),Y!=null&&fe.push(Cl(D,Y,U))),We)break;D=D.return}0<fe.length&&(z=new q(z,ae,null,a,H),K.push({event:z,listeners:fe}))}}if((i&7)===0){e:{if(z=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",z&&a!==Qo&&(ae=a.relatedTarget||a.fromElement)&&(_i(ae)||ae[gi]))break e;if((q||z)&&(z=H.window===H?H:(z=H.ownerDocument)?z.defaultView||z.parentWindow:window,q?(ae=a.relatedTarget||a.toElement,q=x,ae=ae?_i(ae):null,ae!==null&&(We=u(ae),fe=ae.tag,ae!==We||fe!==5&&fe!==27&&fe!==6)&&(ae=null)):(q=null,ae=x),q!==ae)){if(fe=Jo,Y="onMouseLeave",P="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(fe=Fi,Y="onPointerLeave",P="onPointerEnter",D="pointer"),We=q==null?z:Sn(q),U=ae==null?z:Sn(ae),z=new fe(Y,D+"leave",q,a,H),z.target=We,z.relatedTarget=U,Y=null,_i(H)===x&&(fe=new fe(P,D+"enter",ae,a,H),fe.target=U,fe.relatedTarget=We,Y=fe),We=Y,q&&ae)t:{for(fe=T0,P=q,D=ae,U=0,Y=P;Y;Y=fe(Y))U++;Y=0;for(var le=D;le;le=fe(le))Y++;for(;0<U-Y;)P=fe(P),U--;for(;0<Y-U;)D=fe(D),Y--;for(;U--;){if(P===D||D!==null&&P===D.alternate){fe=P;break t}P=fe(P),D=fe(D)}fe=null}else fe=null;q!==null&&uv(K,z,q,fe,!1),ae!==null&&We!==null&&uv(K,We,ae,fe,!0)}}e:{if(z=x?Sn(x):window,q=z.nodeName&&z.nodeName.toLowerCase(),q==="select"||q==="input"&&z.type==="file")var Ue=wg;else if(Ig(z))if(Rg)Ue=VI;else{Ue=NI;var oe=DI}else q=z.nodeName,!q||q.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?x&&va(x.elementType)&&(Ue=wg):Ue=OI;if(Ue&&(Ue=Ue(t,x))){bg(K,Ue,a,H);break e}oe&&oe(t,z,x),t==="focusout"&&x&&z.type==="number"&&x.memoizedProps.value!=null&&Go(z,"number",z.value)}switch(oe=x?Sn(x):window,t){case"focusin":(Ig(oe)||oe.contentEditable==="true")&&(Ra=oe,Rf=x,il=null);break;case"focusout":il=Rf=Ra=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,kg(K,a,H);break;case"selectionchange":if(PI)break;case"keydown":case"keyup":kg(K,a,H)}var Se;if(Be)e:{switch(t){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else wa?Ms(t,a)&&(De="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(De="onCompositionStart");De&&(Ci&&a.locale!=="ko"&&(wa||De!=="onCompositionStart"?De==="onCompositionEnd"&&wa&&(Se=Wo()):(Ii=H,Xo="value"in Ii?Ii.value:Ii.textContent,wa=!0)),oe=jc(x,De),0<oe.length&&(De=new Ri(De,t,null,a,H),K.push({event:De,listeners:oe}),Se?De.data=Se:(Se=ba(a),Se!==null&&(De.data=Se)))),(Se=Un?bI(t,a):wI(t,a))&&(De=jc(x,"onBeforeInput"),0<De.length&&(oe=new Ri("onBeforeInput","beforeinput",null,a,H),K.push({event:oe,listeners:De}),oe.data=Se)),y0(K,t,x,a,H)}ov(K,i)})}function Cl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function jc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Zn(t,a),h!=null&&l.unshift(Cl(t,h,d)),h=Zn(t,i),h!=null&&l.push(Cl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function T0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function uv(t,i,a,l,h){for(var d=i._reactName,g=[];a!==null&&a!==l;){var E=a,w=E.alternate,x=E.stateNode;if(E=E.tag,w!==null&&w===l)break;E!==5&&E!==26&&E!==27||x===null||(w=x,h?(x=Zn(a,d),x!=null&&g.unshift(Cl(a,x,w))):h||(x=Zn(a,d),x!=null&&g.push(Cl(a,x,w)))),a=a.return}g.length!==0&&t.push({event:i,listeners:g})}var A0=/\r\n?/g,S0=/\u0000|\uFFFD/g;function cv(t){return(typeof t=="string"?t:""+t).replace(A0,`
`).replace(S0,"")}function hv(t,i){return i=cv(i),cv(t)===i}function Xe(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||dn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&dn(t,""+l);break;case"className":In(t,"class",l);break;case"tabIndex":In(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":In(t,a,l);break;case"style":Ko(t,l,d);break;case"data":if(i!=="object"){In(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ea(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xe(t,i,"name",h.name,h,null),Xe(t,i,"formEncType",h.formEncType,h,null),Xe(t,i,"formMethod",h.formMethod,h,null),Xe(t,i,"formTarget",h.formTarget,h,null)):(Xe(t,i,"encType",h.encType,h,null),Xe(t,i,"method",h.method,h,null),Xe(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ea(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Jn);break;case"onScroll":l!=null&&Re("scroll",t);break;case"onScrollEnd":l!=null&&Re("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Ea(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Re("beforetoggle",t),Re("toggle",t),ya(t,"popover",l);break;case"xlinkActuate":Rt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Rt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Rt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Rt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Rt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Rt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Rt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Rt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Rt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ya(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ju.get(a)||a,ya(t,a,l))}}function Zd(t,i,a,l,h,d){switch(a){case"style":Ko(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?dn(t,l):(typeof l=="number"||typeof l=="bigint")&&dn(t,""+l);break;case"onScroll":l!=null&&Re("scroll",t);break;case"onScrollEnd":l!=null&&Re("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Jn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[qt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):ya(t,a,l)}}}function $t(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",t),Re("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var g=a[d];if(g!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,d,g,a,null)}}h&&Xe(t,i,"srcSet",a.srcSet,a,null),l&&Xe(t,i,"src",a.src,a,null);return;case"input":Re("invalid",t);var E=d=g=h=null,w=null,x=null;for(l in a)if(a.hasOwnProperty(l)){var H=a[l];if(H!=null)switch(l){case"name":h=H;break;case"type":g=H;break;case"checked":w=H;break;case"defaultChecked":x=H;break;case"value":d=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:Xe(t,i,l,H,a,null)}}qu(t,d,E,w,x,g,h,!1);return;case"select":Re("invalid",t),l=g=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":g=E;break;case"multiple":l=E;default:Xe(t,i,h,E,a,null)}i=d,a=g,t.multiple=!!l,i!=null?Ar(t,!!l,i,!1):a!=null&&Ar(t,!!l,a,!0);return;case"textarea":Re("invalid",t),d=h=l=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Xe(t,i,g,E,a,null)}Sr(t,l,h,d);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xe(t,i,w,l,a,null)}return;case"dialog":Re("beforetoggle",t),Re("toggle",t),Re("cancel",t),Re("close",t);break;case"iframe":case"object":Re("load",t);break;case"video":case"audio":for(l=0;l<Rl.length;l++)Re(Rl[l],t);break;case"image":Re("error",t),Re("load",t);break;case"details":Re("toggle",t);break;case"embed":case"source":case"link":Re("error",t),Re("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in a)if(a.hasOwnProperty(x)&&(l=a[x],l!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,x,l,a,null)}return;default:if(va(i)){for(H in a)a.hasOwnProperty(H)&&(l=a[H],l!==void 0&&Zd(t,i,H,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&Xe(t,i,E,l,a,null))}function I0(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,g=null,E=null,w=null,x=null,H=null;for(q in a){var K=a[q];if(a.hasOwnProperty(q)&&K!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":w=K;default:l.hasOwnProperty(q)||Xe(t,i,q,null,l,K)}}for(var z in l){var q=l[z];if(K=a[z],l.hasOwnProperty(z)&&(q!=null||K!=null))switch(z){case"type":d=q;break;case"name":h=q;break;case"checked":x=q;break;case"defaultChecked":H=q;break;case"value":g=q;break;case"defaultValue":E=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:q!==K&&Xe(t,i,z,q,l,K)}}_a(t,g,E,w,x,H,d,h);return;case"select":q=g=E=z=null;for(d in a)if(w=a[d],a.hasOwnProperty(d)&&w!=null)switch(d){case"value":break;case"multiple":q=w;default:l.hasOwnProperty(d)||Xe(t,i,d,null,l,w)}for(h in l)if(d=l[h],w=a[h],l.hasOwnProperty(h)&&(d!=null||w!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":g=d;default:d!==w&&Xe(t,i,h,d,l,w)}i=E,a=g,l=q,z!=null?Ar(t,!!a,z,!1):!!l!=!!a&&(i!=null?Ar(t,!!a,i,!0):Ar(t,!!a,a?[]:"",!1));return;case"textarea":q=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Xe(t,i,E,null,l,h)}for(g in l)if(h=l[g],d=a[g],l.hasOwnProperty(g)&&(h!=null||d!=null))switch(g){case"value":z=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xe(t,i,g,h,l,d)}Hu(t,z,q);return;case"option":for(var ae in a)if(z=a[ae],a.hasOwnProperty(ae)&&z!=null&&!l.hasOwnProperty(ae))switch(ae){case"selected":t.selected=!1;break;default:Xe(t,i,ae,null,l,z)}for(w in l)if(z=l[w],q=a[w],l.hasOwnProperty(w)&&z!==q&&(z!=null||q!=null))switch(w){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Xe(t,i,w,z,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in a)z=a[fe],a.hasOwnProperty(fe)&&z!=null&&!l.hasOwnProperty(fe)&&Xe(t,i,fe,null,l,z);for(x in l)if(z=l[x],q=a[x],l.hasOwnProperty(x)&&z!==q&&(z!=null||q!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Xe(t,i,x,z,l,q)}return;default:if(va(i)){for(var We in a)z=a[We],a.hasOwnProperty(We)&&z!==void 0&&!l.hasOwnProperty(We)&&Zd(t,i,We,void 0,l,z);for(H in l)z=l[H],q=a[H],!l.hasOwnProperty(H)||z===q||z===void 0&&q===void 0||Zd(t,i,H,z,l,q);return}}for(var P in a)z=a[P],a.hasOwnProperty(P)&&z!=null&&!l.hasOwnProperty(P)&&Xe(t,i,P,null,l,z);for(K in l)z=l[K],q=a[K],!l.hasOwnProperty(K)||z===q||z==null&&q==null||Xe(t,i,K,z,l,q)}function fv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function b0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var h=a[l],d=h.transferSize,g=h.initiatorType,E=h.duration;if(d&&E&&fv(g)){for(g=0,E=h.responseEnd,l+=1;l<a.length;l++){var w=a[l],x=w.startTime;if(x>E)break;var H=w.transferSize,K=w.initiatorType;H&&fv(K)&&(w=w.responseEnd,g+=H*(w<E?1:(E-x)/(w-x)))}if(--l,i+=8*(d+g)/(h.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var em=null,tm=null;function Gc(t){return t.nodeType===9?t:t.ownerDocument}function dv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function nm(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var im=null;function w0(){var t=window.event;return t&&t.type==="popstate"?t===im?!1:(im=t,!0):(im=null,!1)}var pv=typeof setTimeout=="function"?setTimeout:void 0,R0=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,C0=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(t){return gv.resolve(null).then(t).catch(D0)}:pv;function D0(t){setTimeout(function(){throw t})}function Yr(t){return t==="head"}function yv(t,i){var a=i,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(h),eo(i);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Dl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Dl(a);for(var d=a.firstChild;d;){var g=d.nextSibling,E=d.nodeName;d[yi]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=g}}else a==="body"&&Dl(t.ownerDocument.body);a=h}while(a);eo(i)}function _v(t,i){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function rm(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rm(a),ga(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function N0(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[yi])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=jn(t.nextSibling),t===null)break}return null}function O0(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=jn(t.nextSibling),t===null))return null;return t}function vv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=jn(t.nextSibling),t===null))return null;return t}function sm(t){return t.data==="$?"||t.data==="$~"}function am(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function V0(t,i){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||a.readyState!=="loading")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function jn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var om=null;function Ev(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(i===0)return jn(t.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}t=t.nextSibling}return null}function Tv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return t;i--}else a!=="/$"&&a!=="/&"||i++}t=t.previousSibling}return null}function Av(t,i,a){switch(i=Gc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Dl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ga(t)}var Gn=new Map,Sv=new Set;function Yc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var rr=Z.d;Z.d={f:M0,r:P0,D:k0,C:L0,L:U0,m:x0,X:B0,S:z0,M:q0};function M0(){var t=rr.f(),i=Uc();return t||i}function P0(t){var i=Pn(t);i!==null&&i.tag===5&&i.type==="form"?By(i):rr.r(t)}var $a=typeof document>"u"?null:document;function Iv(t,i,a){var l=$a;if(l&&typeof i=="string"&&i){var h=fn(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Sv.has(h)||(Sv.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),$t(i,"link",t),wt(i),l.head.appendChild(i)))}}function k0(t){rr.D(t),Iv("dns-prefetch",t,null)}function L0(t,i){rr.C(t,i),Iv("preconnect",t,i)}function U0(t,i,a){rr.L(t,i,a);var l=$a;if(l&&t&&i){var h='link[rel="preload"][as="'+fn(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+fn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+fn(a.imageSizes)+'"]')):h+='[href="'+fn(t)+'"]';var d=h;switch(i){case"style":d=Ja(t);break;case"script":d=Za(t)}Gn.has(d)||(t=S({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Gn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(Nl(d))||i==="script"&&l.querySelector(Ol(d))||(i=l.createElement("link"),$t(i,"link",t),wt(i),l.head.appendChild(i)))}}function x0(t,i){rr.m(t,i);var a=$a;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+fn(l)+'"][href="'+fn(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Za(t)}if(!Gn.has(d)&&(t=S({rel:"modulepreload",href:t},i),Gn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ol(d)))return}l=a.createElement("link"),$t(l,"link",t),wt(l),a.head.appendChild(l)}}}function z0(t,i,a){rr.S(t,i,a);var l=$a;if(l&&t){var h=vi(l).hoistableStyles,d=Ja(t);i=i||"default";var g=h.get(d);if(!g){var E={loading:0,preload:null};if(g=l.querySelector(Nl(d)))E.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Gn.get(d))&&lm(t,a);var w=g=l.createElement("link");wt(w),$t(w,"link",t),w._p=new Promise(function(x,H){w.onload=x,w.onerror=H}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Kc(g,i,l)}g={type:"stylesheet",instance:g,count:1,state:E},h.set(d,g)}}}function B0(t,i){rr.X(t,i);var a=$a;if(a&&t){var l=vi(a).hoistableScripts,h=Za(t),d=l.get(h);d||(d=a.querySelector(Ol(h)),d||(t=S({src:t,async:!0},i),(i=Gn.get(h))&&um(t,i),d=a.createElement("script"),wt(d),$t(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function q0(t,i){rr.M(t,i);var a=$a;if(a&&t){var l=vi(a).hoistableScripts,h=Za(t),d=l.get(h);d||(d=a.querySelector(Ol(h)),d||(t=S({src:t,async:!0,type:"module"},i),(i=Gn.get(h))&&um(t,i),d=a.createElement("script"),wt(d),$t(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function bv(t,i,a,l){var h=(h=Ae.current)?Yc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ja(a.href),a=vi(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ja(a.href);var d=vi(h).hoistableStyles,g=d.get(t);if(g||(h=h.ownerDocument||h,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,g),(d=h.querySelector(Nl(t)))&&!d._p&&(g.instance=d,g.state.loading=5),Gn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gn.set(t,a),d||H0(h,t,a,g.state))),i&&l===null)throw Error(s(528,""));return g}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Za(a),a=vi(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ja(t){return'href="'+fn(t)+'"'}function Nl(t){return'link[rel="stylesheet"]['+t+"]"}function wv(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function H0(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),$t(i,"link",a),wt(i),t.head.appendChild(i))}function Za(t){return'[src="'+fn(t)+'"]'}function Ol(t){return"script[async]"+t}function Rv(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+fn(a.href)+'"]');if(l)return i.instance=l,wt(l),l;var h=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),wt(l),$t(l,"style",h),Kc(l,a.precedence,t),i.instance=l;case"stylesheet":h=Ja(a.href);var d=t.querySelector(Nl(h));if(d)return i.state.loading|=4,i.instance=d,wt(d),d;l=wv(a),(h=Gn.get(h))&&lm(l,h),d=(t.ownerDocument||t).createElement("link"),wt(d);var g=d;return g._p=new Promise(function(E,w){g.onload=E,g.onerror=w}),$t(d,"link",l),i.state.loading|=4,Kc(d,a.precedence,t),i.instance=d;case"script":return d=Za(a.src),(h=t.querySelector(Ol(d)))?(i.instance=h,wt(h),h):(l=a,(h=Gn.get(d))&&(l=S({},a),um(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),wt(h),$t(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Kc(l,a.precedence,t));return i.instance}function Kc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,g=0;g<l.length;g++){var E=l[g];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function lm(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function um(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Qc=null;function Cv(t,i,a){if(Qc===null){var l=new Map,h=Qc=new Map;h.set(a,l)}else h=Qc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[yi]||d[bt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var g=d.getAttribute(i)||"";g=t+g;var E=l.get(g);E?E.push(d):l.set(g,[d])}}return l}function Dv(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function F0(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Nv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function j0(t,i,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Ja(l.href),d=i.querySelector(Nl(h));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Xc.bind(t),i.then(t,t)),a.state.loading|=4,a.instance=d,wt(d);return}d=i.ownerDocument||i,l=wv(l),(h=Gn.get(h))&&lm(l,h),d=d.createElement("link"),wt(d);var g=d;g._p=new Promise(function(E,w){g.onload=E,g.onerror=w}),$t(d,"link",l),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Xc.bind(t),i.addEventListener("load",a),i.addEventListener("error",a))}}var cm=0;function G0(t,i){return t.stylesheets&&t.count===0&&$c(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&$c(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&cm===0&&(cm=62500*b0());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$c(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>cm?50:800)+i);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$c(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Wc=null;function $c(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wc=new Map,i.forEach(Y0,t),Wc=null,Xc.call(t))}function Y0(t,i){if(!(i.state.loading&4)){var a=Wc.get(t);if(a)var l=a.get(null);else{a=new Map,Wc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var g=h[d];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),l=g)}l&&a.set(null,l)}h=i.instance,g=h.getAttribute("data-precedence"),d=a.get(g)||l,d===l&&a.set(null,h),a.set(g,h),this.count++,l=Xc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Vl={$$typeof:Ie,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function K0(t,i,a,l,h,d,g,E,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.hiddenUpdates=pi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Ov(t,i,a,l,h,d,g,E,w,x,H,K){return t=new K0(t,i,a,g,w,x,H,K,E),i=1,d===!0&&(i|=24),d=wn(3,null,null,i),t.current=d,d.stateNode=t,i=Ff(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Kf(d),t}function Vv(t){return t?(t=Na,t):Na}function Mv(t,i,a,l,h,d){h=Vv(h),l.context===null?l.context=h:l.pendingContext=h,l=kr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Lr(t,l,i),a!==null&&(_n(a,t,i),cl(a,t,i))}function Pv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function hm(t,i){Pv(t,i),(t=t.alternate)&&Pv(t,i)}function kv(t){if(t.tag===13||t.tag===31){var i=Ls(t,67108864);i!==null&&_n(i,t,67108864),hm(t,67108864)}}function Lv(t){if(t.tag===13||t.tag===31){var i=On();i=Is(i);var a=Ls(t,i);a!==null&&_n(a,t,i),hm(t,i)}}var Jc=!0;function Q0(t,i,a,l){var h=F.T;F.T=null;var d=Z.p;try{Z.p=2,fm(t,i,a,l)}finally{Z.p=d,F.T=h}}function X0(t,i,a,l){var h=F.T;F.T=null;var d=Z.p;try{Z.p=8,fm(t,i,a,l)}finally{Z.p=d,F.T=h}}function fm(t,i,a,l){if(Jc){var h=dm(l);if(h===null)Jd(t,i,l,Zc,a),xv(t,l);else if($0(h,t,i,a,l))l.stopPropagation();else if(xv(t,l),i&4&&-1<W0.indexOf(t)){for(;h!==null;){var d=Pn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var g=di(d.pendingLanes);if(g!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var w=1<<31-yt(g);E.entanglements[1]|=w,g&=~w}Vi(d),(qe&6)===0&&(kc=ln()+500,wl(0))}}break;case 31:case 13:E=Ls(d,2),E!==null&&_n(E,d,2),Uc(),hm(d,2)}if(d=dm(l),d===null&&Jd(t,i,l,Zc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Jd(t,i,l,null,a)}}function dm(t){return t=kn(t),mm(t)}var Zc=null;function mm(t){if(Zc=null,t=_i(t),t!==null){var i=u(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===31){if(t=p(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Zc=t,null}function Uv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Es()){case ko:return 2;case Lo:return 8;case Er:case Ef:return 32;case Ou:return 268435456;default:return 32}default:return 32}}var pm=!1,Kr=null,Qr=null,Xr=null,Ml=new Map,Pl=new Map,Wr=[],W0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xv(t,i){switch(t){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Qr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":Ml.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(i.pointerId)}}function kl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Pn(i),i!==null&&kv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function $0(t,i,a,l,h){switch(i){case"focusin":return Kr=kl(Kr,t,i,a,l,h),!0;case"dragenter":return Qr=kl(Qr,t,i,a,l,h),!0;case"mouseover":return Xr=kl(Xr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Ml.set(d,kl(Ml.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Pl.set(d,kl(Pl.get(d)||null,t,i,a,l,h)),!0}return!1}function zv(t){var i=_i(t.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,Wn(t.priority,function(){Lv(a)});return}}else if(i===31){if(i=p(a),i!==null){t.blockedOn=i,Wn(t.priority,function(){Lv(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eh(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=dm(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Qo=l,a.target.dispatchEvent(l),Qo=null}else return i=Pn(a),i!==null&&kv(i),t.blockedOn=a,!1;i.shift()}return!0}function Bv(t,i,a){eh(t)&&a.delete(i)}function J0(){pm=!1,Kr!==null&&eh(Kr)&&(Kr=null),Qr!==null&&eh(Qr)&&(Qr=null),Xr!==null&&eh(Xr)&&(Xr=null),Ml.forEach(Bv),Pl.forEach(Bv)}function th(t,i){t.blockedOn===i&&(t.blockedOn=null,pm||(pm=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,J0)))}var nh=null;function qv(t){nh!==t&&(nh=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){nh===t&&(nh=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(mm(l||a)===null)continue;break}var d=Pn(a);d!==null&&(t.splice(i,3),i-=3,dd(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function eo(t){function i(w){return th(w,t)}Kr!==null&&th(Kr,t),Qr!==null&&th(Qr,t),Xr!==null&&th(Xr,t),Ml.forEach(i),Pl.forEach(i);for(var a=0;a<Wr.length;a++){var l=Wr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Wr.length&&(a=Wr[0],a.blockedOn===null);)zv(a),a.blockedOn===null&&Wr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],g=h[qt]||null;if(typeof d=="function")g||qv(a);else if(g){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,g=d[qt]||null)E=g.formAction;else if(mm(h)!==null)continue}else E=g.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),qv(a)}}}function Hv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(g){return h=g})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function gm(t){this._internalRoot=t}ih.prototype.render=gm.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=On();Mv(a,l,t,i,null,null)},ih.prototype.unmount=gm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Mv(t.current,2,null,t,null,null),Uc(),i[gi]=null}};function ih(t){this._internalRoot=t}ih.prototype.unstable_scheduleHydration=function(t){if(t){var i=Uu();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Wr.length&&i!==0&&i<Wr[a].priority;a++);Wr.splice(a,0,t),a===0&&zv(t)}};var Fv=e.version;if(Fv!=="19.2.5")throw Error(s(527,Fv,"19.2.5"));Z.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=_(i),t=t!==null?T(t):null,t=t===null?null:t.stateNode,t};var Z0={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rh.isDisabled&&rh.supportsFiber)try{Qn=rh.inject(Z0),Yt=rh}catch{}}return Ul.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Wy,d=$y,g=Jy;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(g=i.onRecoverableError)),i=Ov(t,1,!1,null,null,a,l,null,h,d,g,Hv),t[gi]=i.current,$d(t),new gm(i)},Ul.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Wy,g=$y,E=Jy,w=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(w=a.formState)),i=Ov(t,1,!0,i,a??null,l,h,w,d,g,E,Hv),i.context=Vv(null),a=i.current,l=On(),l=Is(l),h=kr(l),h.callback=null,Lr(a,h,l),a=l,i.current.lanes=a,As(i,a),Vi(i),t[gi]=i.current,$d(t),new ih(i)},Ul.version="19.2.5",Ul}var Zv;function cb(){if(Zv)return vm.exports;Zv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vm.exports=ub(),vm.exports}var k2=cb();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fb=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),eE=r=>{const e=fb(r);return e.charAt(0).toUpperCase()+e.slice(1)},PT=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim(),db=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=so.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:f,...p},y)=>so.createElement("svg",{ref:y,...mb,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:PT("lucide",o),...!u&&!db(p)&&{"aria-hidden":"true"},...p},[...f.map(([_,T])=>so.createElement(_,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=(r,e)=>{const n=so.forwardRef(({className:s,...o},u)=>so.createElement(pb,{ref:u,iconNode:e,className:PT(`lucide-${hb(eE(r))}`,`lucide-${r}`,s),...o}));return n.displayName=eE(r),n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],L2=pu("arrow-right",gb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],U2=pu("download",yb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],x2=pu("mail",_b);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],z2=pu("message-circle",vb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],B2=pu("shield",Eb),Tb=()=>{};var tE={};/**
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
 */const kT=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Ab=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],p=r[n++],y=((o&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},LT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,p=f?r[o+1]:0,y=o+2<r.length,_=y?r[o+2]:0,T=u>>2,S=(u&3)<<4|p>>4;let V=(p&15)<<2|_>>6,G=_&63;y||(G=64,f||(V=64)),s.push(n[T],n[S],n[V],n[G])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(kT(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ab(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],p=o<r.length?n[r.charAt(o)]:0;++o;const _=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||p==null||_==null||S==null)throw new Sb;const V=u<<2|p>>4;if(s.push(V),_!==64){const G=p<<4&240|_>>2;if(s.push(G),S!==64){const $=_<<6&192|S;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Sb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ib=function(r){const e=kT(r);return LT.encodeByteArray(e,!0)},bh=function(r){return Ib(r).replace(/\./g,"")},UT=function(r){try{return LT.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wb=()=>bb().__FIREBASE_DEFAULTS__,Rb=()=>{if(typeof process>"u"||typeof tE>"u")return;const r=tE.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Cb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&UT(r[1]);return e&&JSON.parse(e)},Fh=()=>{try{return Tb()||wb()||Rb()||Cb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},xT=r=>{var e,n;return(n=(e=Fh())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},Db=r=>{const e=xT(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},zT=()=>{var r;return(r=Fh())==null?void 0:r.config},BT=r=>{var e;return(e=Fh())==null?void 0:e[`_${r}`]};/**
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
 */class Nb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ob(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[bh(JSON.stringify(n)),bh(JSON.stringify(f)),""].join(".")}/**
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
 */function on(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(on())}function Mb(){var e;const r=(e=Fh())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kb(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Lb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ub(){const r=on();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function xb(){return!Mb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zb(){try{return typeof indexedDB=="object"}catch{return!1}}function Bb(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}/**
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
 */const qb="FirebaseError";class gr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qb,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gu.prototype.create)}}class gu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?Hb(u,s):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new gr(o,p,s)}}function Hb(r,e){return r.replace(Fb,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Fb=/\{\$([^}]+)}/g;function jb(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ea(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(nE(u)&&nE(f)){if(!ea(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function nE(r){return r!==null&&typeof r=="object"}/**
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
 */function To(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Bl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function ql(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function Gb(r,e){const n=new Yb(r,e);return n.subscribe.bind(n)}class Yb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Kb(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Sm),o.error===void 0&&(o.error=Sm),o.complete===void 0&&(o.complete=Sm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kb(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Sm(){}/**
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
 */function he(r){return r&&r._delegate?r._delegate:r}/**
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
 */function yu(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qT(r){return(await fetch(r,{credentials:"include"})).ok}class ta{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xs="[DEFAULT]";/**
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
 */class Qb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Nb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wb(e))try{this.getOrInitializeService({instanceIdentifier:Xs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Xs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xs){return this.instances.has(e)}getOptions(e=Xs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xs){return this.component?this.component.multipleInstances?e:Xs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xb(r){return r===Xs?void 0:r}function Wb(r){return r.instantiationMode==="EAGER"}/**
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
 */class $b{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ne||(Ne={}));const Jb={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},Zb=Ne.INFO,ew={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},tw=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=ew[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dp{constructor(e){this.name=e,this._logLevel=Zb,this._logHandler=tw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const nw=(r,e)=>e.some(n=>r instanceof n);let iE,rE;function iw(){return iE||(iE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rw(){return rE||(rE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HT=new WeakMap,qm=new WeakMap,FT=new WeakMap,Im=new WeakMap,mp=new WeakMap;function sw(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(is(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&HT.set(n,r)}).catch(()=>{}),mp.set(e,r),e}function aw(r){if(qm.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});qm.set(r,e)}let Hm={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return qm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||FT.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return is(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ow(r){Hm=r(Hm)}function lw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(bm(this),e,...n);return FT.set(s,e.sort?e.sort():[e]),is(s)}:rw().includes(r)?function(...e){return r.apply(bm(this),e),is(HT.get(this))}:function(...e){return is(r.apply(bm(this),e))}}function uw(r){return typeof r=="function"?lw(r):(r instanceof IDBTransaction&&aw(r),nw(r,iw())?new Proxy(r,Hm):r)}function is(r){if(r instanceof IDBRequest)return sw(r);if(Im.has(r))return Im.get(r);const e=uw(r);return e!==r&&(Im.set(r,e),mp.set(e,r)),e}const bm=r=>mp.get(r);function cw(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),p=is(f);return s&&f.addEventListener("upgradeneeded",y=>{s(is(f.result),y.oldVersion,y.newVersion,is(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),p.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const hw=["get","getKey","getAll","getAllKeys","count"],fw=["put","add","delete","clear"],wm=new Map;function sE(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(wm.get(e))return wm.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=fw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||hw.includes(n)))return;const u=async function(f,...p){const y=this.transaction(f,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(p.shift())),(await Promise.all([_[n](...p),o&&y.done]))[0]};return wm.set(e,u),u}ow(r=>({...r,get:(e,n,s)=>sE(e,n)||r.get(e,n,s),has:(e,n)=>!!sE(e,n)||r.has(e,n)}));/**
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
 */class dw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function mw(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fm="@firebase/app",aE="0.14.11";/**
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
 */const cr=new dp("@firebase/app"),pw="@firebase/app-compat",gw="@firebase/analytics-compat",yw="@firebase/analytics",_w="@firebase/app-check-compat",vw="@firebase/app-check",Ew="@firebase/auth",Tw="@firebase/auth-compat",Aw="@firebase/database",Sw="@firebase/data-connect",Iw="@firebase/database-compat",bw="@firebase/functions",ww="@firebase/functions-compat",Rw="@firebase/installations",Cw="@firebase/installations-compat",Dw="@firebase/messaging",Nw="@firebase/messaging-compat",Ow="@firebase/performance",Vw="@firebase/performance-compat",Mw="@firebase/remote-config",Pw="@firebase/remote-config-compat",kw="@firebase/storage",Lw="@firebase/storage-compat",Uw="@firebase/firestore",xw="@firebase/ai",zw="@firebase/firestore-compat",Bw="firebase",qw="12.12.0";/**
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
 */const jm="[DEFAULT]",Hw={[Fm]:"fire-core",[pw]:"fire-core-compat",[yw]:"fire-analytics",[gw]:"fire-analytics-compat",[vw]:"fire-app-check",[_w]:"fire-app-check-compat",[Ew]:"fire-auth",[Tw]:"fire-auth-compat",[Aw]:"fire-rtdb",[Sw]:"fire-data-connect",[Iw]:"fire-rtdb-compat",[bw]:"fire-fn",[ww]:"fire-fn-compat",[Rw]:"fire-iid",[Cw]:"fire-iid-compat",[Dw]:"fire-fcm",[Nw]:"fire-fcm-compat",[Ow]:"fire-perf",[Vw]:"fire-perf-compat",[Mw]:"fire-rc",[Pw]:"fire-rc-compat",[kw]:"fire-gcs",[Lw]:"fire-gcs-compat",[Uw]:"fire-fst",[zw]:"fire-fst-compat",[xw]:"fire-vertex","fire-js":"fire-js",[Bw]:"fire-js-all"};/**
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
 */const fo=new Map,Gm=new Map,Ym=new Map;function oE(r,e){try{r.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function mo(r){const e=r.name;if(Ym.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;Ym.set(e,r);for(const n of fo.values())oE(n,r);for(const n of Gm.values())oE(n,r);return!0}function pp(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function ht(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Fw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rs=new gu("app","Firebase",Fw);/**
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
 */class jw{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ta("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rs.create("app-deleted",{appName:this._name})}}/**
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
 */const Ao=qw;function jT(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:jm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw rs.create("bad-app-name",{appName:String(o)});if(n||(n=zT()),!n)throw rs.create("no-options");const u=fo.get(o);if(u){if(ea(n,u.options)&&ea(s,u.config))return u;throw rs.create("duplicate-app",{appName:o})}const f=new $b(o);for(const y of Ym.values())f.addComponent(y);const p=new jw(n,s,f);return fo.set(o,p),p}function GT(r=jm){const e=fo.get(r);if(!e&&r===jm&&zT())return jT();if(!e)throw rs.create("no-app",{appName:r});return e}async function q2(r){let e=!1;const n=r.name;fo.has(n)?(e=!0,fo.delete(n)):Gm.has(n)&&r.decRefCount()<=0&&(Gm.delete(n),e=!0),e&&(await Promise.all(r.container.getProviders().map(s=>s.delete())),r.isDeleted=!0)}function ss(r,e,n){let s=Hw[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(f.join(" "));return}mo(new ta(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Gw="firebase-heartbeat-database",Yw=1,eu="firebase-heartbeat-store";let Rm=null;function YT(){return Rm||(Rm=cw(Gw,Yw,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(eu)}catch(n){console.warn(n)}}}}).catch(r=>{throw rs.create("idb-open",{originalErrorMessage:r.message})})),Rm}async function Kw(r){try{const n=(await YT()).transaction(eu),s=await n.objectStore(eu).get(KT(r));return await n.done,s}catch(e){if(e instanceof gr)cr.warn(e.message);else{const n=rs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function lE(r,e){try{const s=(await YT()).transaction(eu,"readwrite");await s.objectStore(eu).put(e,KT(r)),await s.done}catch(n){if(n instanceof gr)cr.warn(n.message);else{const s=rs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(s.message)}}}function KT(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Qw=1024,Xw=30;class Ww{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=uE();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Xw){const f=Zw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){cr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uE(),{heartbeatsToSend:s,unsentEntries:o}=$w(this._heartbeatsCache.heartbeats),u=bh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return cr.warn(n),""}}}function uE(){return new Date().toISOString().substring(0,10)}function $w(r,e=Qw){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),cE(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),cE(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Jw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zb()?Bb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Kw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return lE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return lE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cE(r){return bh(JSON.stringify({version:2,heartbeats:r})).length}function Zw(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function eR(r){mo(new ta("platform-logger",e=>new dw(e),"PRIVATE")),mo(new ta("heartbeat",e=>new Ww(e),"PRIVATE")),ss(Fm,aE,r),ss(Fm,aE,"esm2020"),ss("fire-js","")}eR("");var hE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as,QT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,I){function R(){}R.prototype=I.prototype,C.F=I.prototype,C.prototype=new R,C.prototype.constructor=C,C.D=function(M,N,k){for(var b=Array(arguments.length-2),at=2;at<arguments.length;at++)b[at-2]=arguments[at];return I.prototype[N].apply(M,b)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,I,R){R||(R=0);const M=Array(16);if(typeof I=="string")for(var N=0;N<16;++N)M[N]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(N=0;N<16;++N)M[N]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=C.g[0],R=C.g[1],N=C.g[2];let k=C.g[3],b;b=I+(k^R&(N^k))+M[0]+3614090360&4294967295,I=R+(b<<7&4294967295|b>>>25),b=k+(N^I&(R^N))+M[1]+3905402710&4294967295,k=I+(b<<12&4294967295|b>>>20),b=N+(R^k&(I^R))+M[2]+606105819&4294967295,N=k+(b<<17&4294967295|b>>>15),b=R+(I^N&(k^I))+M[3]+3250441966&4294967295,R=N+(b<<22&4294967295|b>>>10),b=I+(k^R&(N^k))+M[4]+4118548399&4294967295,I=R+(b<<7&4294967295|b>>>25),b=k+(N^I&(R^N))+M[5]+1200080426&4294967295,k=I+(b<<12&4294967295|b>>>20),b=N+(R^k&(I^R))+M[6]+2821735955&4294967295,N=k+(b<<17&4294967295|b>>>15),b=R+(I^N&(k^I))+M[7]+4249261313&4294967295,R=N+(b<<22&4294967295|b>>>10),b=I+(k^R&(N^k))+M[8]+1770035416&4294967295,I=R+(b<<7&4294967295|b>>>25),b=k+(N^I&(R^N))+M[9]+2336552879&4294967295,k=I+(b<<12&4294967295|b>>>20),b=N+(R^k&(I^R))+M[10]+4294925233&4294967295,N=k+(b<<17&4294967295|b>>>15),b=R+(I^N&(k^I))+M[11]+2304563134&4294967295,R=N+(b<<22&4294967295|b>>>10),b=I+(k^R&(N^k))+M[12]+1804603682&4294967295,I=R+(b<<7&4294967295|b>>>25),b=k+(N^I&(R^N))+M[13]+4254626195&4294967295,k=I+(b<<12&4294967295|b>>>20),b=N+(R^k&(I^R))+M[14]+2792965006&4294967295,N=k+(b<<17&4294967295|b>>>15),b=R+(I^N&(k^I))+M[15]+1236535329&4294967295,R=N+(b<<22&4294967295|b>>>10),b=I+(N^k&(R^N))+M[1]+4129170786&4294967295,I=R+(b<<5&4294967295|b>>>27),b=k+(R^N&(I^R))+M[6]+3225465664&4294967295,k=I+(b<<9&4294967295|b>>>23),b=N+(I^R&(k^I))+M[11]+643717713&4294967295,N=k+(b<<14&4294967295|b>>>18),b=R+(k^I&(N^k))+M[0]+3921069994&4294967295,R=N+(b<<20&4294967295|b>>>12),b=I+(N^k&(R^N))+M[5]+3593408605&4294967295,I=R+(b<<5&4294967295|b>>>27),b=k+(R^N&(I^R))+M[10]+38016083&4294967295,k=I+(b<<9&4294967295|b>>>23),b=N+(I^R&(k^I))+M[15]+3634488961&4294967295,N=k+(b<<14&4294967295|b>>>18),b=R+(k^I&(N^k))+M[4]+3889429448&4294967295,R=N+(b<<20&4294967295|b>>>12),b=I+(N^k&(R^N))+M[9]+568446438&4294967295,I=R+(b<<5&4294967295|b>>>27),b=k+(R^N&(I^R))+M[14]+3275163606&4294967295,k=I+(b<<9&4294967295|b>>>23),b=N+(I^R&(k^I))+M[3]+4107603335&4294967295,N=k+(b<<14&4294967295|b>>>18),b=R+(k^I&(N^k))+M[8]+1163531501&4294967295,R=N+(b<<20&4294967295|b>>>12),b=I+(N^k&(R^N))+M[13]+2850285829&4294967295,I=R+(b<<5&4294967295|b>>>27),b=k+(R^N&(I^R))+M[2]+4243563512&4294967295,k=I+(b<<9&4294967295|b>>>23),b=N+(I^R&(k^I))+M[7]+1735328473&4294967295,N=k+(b<<14&4294967295|b>>>18),b=R+(k^I&(N^k))+M[12]+2368359562&4294967295,R=N+(b<<20&4294967295|b>>>12),b=I+(R^N^k)+M[5]+4294588738&4294967295,I=R+(b<<4&4294967295|b>>>28),b=k+(I^R^N)+M[8]+2272392833&4294967295,k=I+(b<<11&4294967295|b>>>21),b=N+(k^I^R)+M[11]+1839030562&4294967295,N=k+(b<<16&4294967295|b>>>16),b=R+(N^k^I)+M[14]+4259657740&4294967295,R=N+(b<<23&4294967295|b>>>9),b=I+(R^N^k)+M[1]+2763975236&4294967295,I=R+(b<<4&4294967295|b>>>28),b=k+(I^R^N)+M[4]+1272893353&4294967295,k=I+(b<<11&4294967295|b>>>21),b=N+(k^I^R)+M[7]+4139469664&4294967295,N=k+(b<<16&4294967295|b>>>16),b=R+(N^k^I)+M[10]+3200236656&4294967295,R=N+(b<<23&4294967295|b>>>9),b=I+(R^N^k)+M[13]+681279174&4294967295,I=R+(b<<4&4294967295|b>>>28),b=k+(I^R^N)+M[0]+3936430074&4294967295,k=I+(b<<11&4294967295|b>>>21),b=N+(k^I^R)+M[3]+3572445317&4294967295,N=k+(b<<16&4294967295|b>>>16),b=R+(N^k^I)+M[6]+76029189&4294967295,R=N+(b<<23&4294967295|b>>>9),b=I+(R^N^k)+M[9]+3654602809&4294967295,I=R+(b<<4&4294967295|b>>>28),b=k+(I^R^N)+M[12]+3873151461&4294967295,k=I+(b<<11&4294967295|b>>>21),b=N+(k^I^R)+M[15]+530742520&4294967295,N=k+(b<<16&4294967295|b>>>16),b=R+(N^k^I)+M[2]+3299628645&4294967295,R=N+(b<<23&4294967295|b>>>9),b=I+(N^(R|~k))+M[0]+4096336452&4294967295,I=R+(b<<6&4294967295|b>>>26),b=k+(R^(I|~N))+M[7]+1126891415&4294967295,k=I+(b<<10&4294967295|b>>>22),b=N+(I^(k|~R))+M[14]+2878612391&4294967295,N=k+(b<<15&4294967295|b>>>17),b=R+(k^(N|~I))+M[5]+4237533241&4294967295,R=N+(b<<21&4294967295|b>>>11),b=I+(N^(R|~k))+M[12]+1700485571&4294967295,I=R+(b<<6&4294967295|b>>>26),b=k+(R^(I|~N))+M[3]+2399980690&4294967295,k=I+(b<<10&4294967295|b>>>22),b=N+(I^(k|~R))+M[10]+4293915773&4294967295,N=k+(b<<15&4294967295|b>>>17),b=R+(k^(N|~I))+M[1]+2240044497&4294967295,R=N+(b<<21&4294967295|b>>>11),b=I+(N^(R|~k))+M[8]+1873313359&4294967295,I=R+(b<<6&4294967295|b>>>26),b=k+(R^(I|~N))+M[15]+4264355552&4294967295,k=I+(b<<10&4294967295|b>>>22),b=N+(I^(k|~R))+M[6]+2734768916&4294967295,N=k+(b<<15&4294967295|b>>>17),b=R+(k^(N|~I))+M[13]+1309151649&4294967295,R=N+(b<<21&4294967295|b>>>11),b=I+(N^(R|~k))+M[4]+4149444226&4294967295,I=R+(b<<6&4294967295|b>>>26),b=k+(R^(I|~N))+M[11]+3174756917&4294967295,k=I+(b<<10&4294967295|b>>>22),b=N+(I^(k|~R))+M[2]+718787259&4294967295,N=k+(b<<15&4294967295|b>>>17),b=R+(k^(N|~I))+M[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(N+(b<<21&4294967295|b>>>11))&4294967295,C.g[2]=C.g[2]+N&4294967295,C.g[3]=C.g[3]+k&4294967295}s.prototype.v=function(C,I){I===void 0&&(I=C.length);const R=I-this.blockSize,M=this.C;let N=this.h,k=0;for(;k<I;){if(N==0)for(;k<=R;)o(this,C,k),k+=this.blockSize;if(typeof C=="string"){for(;k<I;)if(M[N++]=C.charCodeAt(k++),N==this.blockSize){o(this,M),N=0;break}}else for(;k<I;)if(M[N++]=C[k++],N==this.blockSize){o(this,M),N=0;break}}this.h=N,this.o+=I},s.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;I=this.o*8;for(var R=C.length-8;R<C.length;++R)C[R]=I&255,I/=256;for(this.v(C),C=Array(16),I=0,R=0;R<4;++R)for(let M=0;M<32;M+=8)C[I++]=this.g[R]>>>M&255;return C};function u(C,I){var R=p;return Object.prototype.hasOwnProperty.call(R,C)?R[C]:R[C]=I(C)}function f(C,I){this.h=I;const R=[];let M=!0;for(let N=C.length-1;N>=0;N--){const k=C[N]|0;M&&k==I||(R[N]=k,M=!1)}this.g=R}var p={};function y(C){return-128<=C&&C<128?u(C,function(I){return new f([I|0],I<0?-1:0)}):new f([C|0],C<0?-1:0)}function _(C){if(isNaN(C)||!isFinite(C))return S;if(C<0)return ne(_(-C));const I=[];let R=1;for(let M=0;C>=R;M++)I[M]=C/R|0,R*=4294967296;return new f(I,0)}function T(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return ne(T(C.substring(1),I));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(I,8));let M=S;for(let k=0;k<C.length;k+=8){var N=Math.min(8,C.length-k);const b=parseInt(C.substring(k,k+N),I);N<8?(N=_(Math.pow(I,N)),M=M.j(N).add(_(b))):(M=M.j(R),M=M.add(_(b)))}return M}var S=y(0),V=y(1),G=y(16777216);r=f.prototype,r.m=function(){if(ie(this))return-ne(this).m();let C=0,I=1;for(let R=0;R<this.g.length;R++){const M=this.i(R);C+=(M>=0?M:4294967296+M)*I,I*=4294967296}return C},r.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if($(this))return"0";if(ie(this))return"-"+ne(this).toString(C);const I=_(Math.pow(C,6));var R=this;let M="";for(;;){const N=et(R,I).g;R=ye(R,N.j(I));let k=((R.g.length>0?R.g[0]:R.h)>>>0).toString(C);if(R=N,$(R))return k+M;for(;k.length<6;)k="0"+k;M=k+M}},r.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function $(C){if(C.h!=0)return!1;for(let I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function ie(C){return C.h==-1}r.l=function(C){return C=ye(this,C),ie(C)?-1:$(C)?0:1};function ne(C){const I=C.g.length,R=[];for(let M=0;M<I;M++)R[M]=~C.g[M];return new f(R,~C.h).add(V)}r.abs=function(){return ie(this)?ne(this):this},r.add=function(C){const I=Math.max(this.g.length,C.g.length),R=[];let M=0;for(let N=0;N<=I;N++){let k=M+(this.i(N)&65535)+(C.i(N)&65535),b=(k>>>16)+(this.i(N)>>>16)+(C.i(N)>>>16);M=b>>>16,k&=65535,b&=65535,R[N]=b<<16|k}return new f(R,R[R.length-1]&-2147483648?-1:0)};function ye(C,I){return C.add(ne(I))}r.j=function(C){if($(this)||$(C))return S;if(ie(this))return ie(C)?ne(this).j(ne(C)):ne(ne(this).j(C));if(ie(C))return ne(this.j(ne(C)));if(this.l(G)<0&&C.l(G)<0)return _(this.m()*C.m());const I=this.g.length+C.g.length,R=[];for(var M=0;M<2*I;M++)R[M]=0;for(M=0;M<this.g.length;M++)for(let N=0;N<C.g.length;N++){const k=this.i(M)>>>16,b=this.i(M)&65535,at=C.i(N)>>>16,Lt=C.i(N)&65535;R[2*M+2*N]+=b*Lt,be(R,2*M+2*N),R[2*M+2*N+1]+=k*Lt,be(R,2*M+2*N+1),R[2*M+2*N+1]+=b*at,be(R,2*M+2*N+1),R[2*M+2*N+2]+=k*at,be(R,2*M+2*N+2)}for(C=0;C<I;C++)R[C]=R[2*C+1]<<16|R[2*C];for(C=I;C<2*I;C++)R[C]=0;return new f(R,0)};function be(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function Ie(C,I){this.g=C,this.h=I}function et(C,I){if($(I))throw Error("division by zero");if($(C))return new Ie(S,S);if(ie(C))return I=et(ne(C),I),new Ie(ne(I.g),ne(I.h));if(ie(I))return I=et(C,ne(I)),new Ie(ne(I.g),I.h);if(C.g.length>30){if(ie(C)||ie(I))throw Error("slowDivide_ only works with positive integers.");for(var R=V,M=I;M.l(C)<=0;)R=$e(R),M=$e(M);var N=ze(R,1),k=ze(M,1);for(M=ze(M,2),R=ze(R,2);!$(M);){var b=k.add(M);b.l(C)<=0&&(N=N.add(R),k=b),M=ze(M,1),R=ze(R,1)}return I=ye(C,N.j(I)),new Ie(N,I)}for(N=S;C.l(I)>=0;){for(R=Math.max(1,Math.floor(C.m()/I.m())),M=Math.ceil(Math.log(R)/Math.LN2),M=M<=48?1:Math.pow(2,M-48),k=_(R),b=k.j(I);ie(b)||b.l(C)>0;)R-=M,k=_(R),b=k.j(I);$(k)&&(k=V),N=N.add(k),C=ye(C,b)}return new Ie(N,C)}r.B=function(C){return et(this,C).h},r.and=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let M=0;M<I;M++)R[M]=this.i(M)&C.i(M);return new f(R,this.h&C.h)},r.or=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let M=0;M<I;M++)R[M]=this.i(M)|C.i(M);return new f(R,this.h|C.h)},r.xor=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let M=0;M<I;M++)R[M]=this.i(M)^C.i(M);return new f(R,this.h^C.h)};function $e(C){const I=C.g.length+1,R=[];for(let M=0;M<I;M++)R[M]=C.i(M)<<1|C.i(M-1)>>>31;return new f(R,C.h)}function ze(C,I){const R=I>>5;I%=32;const M=C.g.length-R,N=[];for(let k=0;k<M;k++)N[k]=I>0?C.i(k+R)>>>I|C.i(k+R+1)<<32-I:C.i(k+R);return new f(N,C.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,QT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=_,f.fromString=T,as=f}).apply(typeof hE<"u"?hE:typeof self<"u"?self:typeof window<"u"?window:{});var sh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var XT,Hl,WT,dh,Km,$T,JT,ZT;(function(){var r,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof sh=="object"&&sh];for(var m=0;m<c.length;++m){var v=c[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function o(c,m){if(m)e:{var v=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var L=c[A];if(!(L in v))break e;v=v[L]}c=c[c.length-1],A=v[c],m=m(A),m!=A&&m!=null&&e(v,c,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(m){var v=[],A;for(A in m)Object.prototype.hasOwnProperty.call(m,A)&&v.push([A,m[A]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function p(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function y(c,m,v){return c.call.apply(c.bind,arguments)}function _(c,m,v){return _=y,_.apply(null,arguments)}function T(c,m){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function S(c,m){function v(){}v.prototype=m.prototype,c.Z=m.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(A,L,B){for(var J=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)J[Ee-2]=arguments[Ee];return m.prototype[L].apply(A,J)}}var V=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function G(c){const m=c.length;if(m>0){const v=Array(m);for(let A=0;A<m;A++)v[A]=c[A];return v}return[]}function $(c,m){for(let A=1;A<arguments.length;A++){const L=arguments[A];var v=typeof L;if(v=v!="object"?v:L?Array.isArray(L)?"array":v:"null",v=="array"||v=="object"&&typeof L.length=="number"){v=c.length||0;const B=L.length||0;c.length=v+B;for(let J=0;J<B;J++)c[v+J]=L[J]}else c.push(L)}}class ie{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ne(c){f.setTimeout(()=>{throw c},0)}function ye(){var c=C;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class be{constructor(){this.h=this.g=null}add(m,v){const A=Ie.get();A.set(m,v),this.h?this.h.next=A:this.g=A,this.h=A}}var Ie=new ie(()=>new et,c=>c.reset());class et{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,ze=!1,C=new be,I=()=>{const c=Promise.resolve(void 0);$e=()=>{c.then(R)}};function R(){for(var c;c=ye();){try{c.h.call(c.g)}catch(v){ne(v)}var m=Ie;m.j(c),m.h<100&&(m.h++,c.next=m.g,m.g=c)}ze=!1}function M(){this.u=this.u,this.C=this.C}M.prototype.u=!1,M.prototype.dispose=function(){this.u||(this.u=!0,this.N())},M.prototype[Symbol.dispose]=function(){this.dispose()},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var k=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return c})();function b(c){return/^[\s\xa0]*$/.test(c)}function at(c,m){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,m)}S(at,N),at.prototype.init=function(c,m){const v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget,m||(v=="mouseover"?m=c.fromElement:v=="mouseout"&&(m=c.toElement)),this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&at.Z.h.call(this)},at.prototype.h=function(){at.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Lt="closure_listenable_"+(Math.random()*1e6|0),F=0;function Z(c,m,v,A,L){this.listener=c,this.proxy=null,this.src=m,this.type=v,this.capture=!!A,this.ha=L,this.key=++F,this.da=this.fa=!1}function ce(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Le(c,m,v){for(const A in c)m.call(v,c[A],A,c)}function Fe(c,m){for(const v in c)m.call(void 0,c[v],v,c)}function O(c){const m={};for(const v in c)m[v]=c[v];return m}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ee(c,m){let v,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(v in A)c[v]=A[v];for(let B=0;B<Q.length;B++)v=Q[B],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function se(c){this.src=c,this.g={},this.h=0}se.prototype.add=function(c,m,v,A,L){const B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);const J=Ae(c,m,A,L);return J>-1?(m=c[J],v||(m.fa=!1)):(m=new Z(m,this.src,B,!!A,L),m.fa=v,c.push(m)),m};function pe(c,m){const v=m.type;if(v in c.g){var A=c.g[v],L=Array.prototype.indexOf.call(A,m,void 0),B;(B=L>=0)&&Array.prototype.splice.call(A,L,1),B&&(ce(m),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Ae(c,m,v,A){for(let L=0;L<c.length;++L){const B=c[L];if(!B.da&&B.listener==m&&B.capture==!!v&&B.ha==A)return L}return-1}var Pe="closure_lm_"+(Math.random()*1e6|0),Ut={};function ot(c,m,v,A,L){if(Array.isArray(m)){for(let B=0;B<m.length;B++)ot(c,m[B],v,A,L);return null}return v=Po(v),c&&c[Lt]?c.J(m,v,p(A)?!!A.capture:!1,L):_s(c,m,v,!1,A,L)}function _s(c,m,v,A,L,B){if(!m)throw Error("Invalid event type");const J=p(L)?!!L.capture:!!L;let Ee=vs(c);if(Ee||(c[Pe]=Ee=new se(c)),v=Ee.add(m,v,A,J,B),v.proxy)return v;if(A=ha(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)k||(L=J),L===void 0&&(L=!1),c.addEventListener(m.toString(),A,L);else if(c.attachEvent)c.attachEvent(hi(m.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ha(){function c(v){return m.call(c.src,c.listener,v)}const m=Vo;return c}function fa(c,m,v,A,L){if(Array.isArray(m))for(var B=0;B<m.length;B++)fa(c,m[B],v,A,L);else A=p(A)?!!A.capture:!!A,v=Po(v),c&&c[Lt]?(c=c.i,B=String(m).toString(),B in c.g&&(m=c.g[B],v=Ae(m,v,A,L),v>-1&&(ce(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete c.g[B],c.h--)))):c&&(c=vs(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Ae(m,v,A,L)),(v=c>-1?m[c]:null)&&da(v))}function da(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Lt])pe(m.i,c);else{var v=c.type,A=c.proxy;m.removeEventListener?m.removeEventListener(v,A,c.capture):m.detachEvent?m.detachEvent(hi(v),A):m.addListener&&m.removeListener&&m.removeListener(A),(v=vs(m))?(pe(v,c),v.h==0&&(v.src=null,m[Pe]=null)):ce(c)}}}function hi(c){return c in Ut?Ut[c]:Ut[c]="on"+c}function Vo(c,m){if(c.da)c=!0;else{m=new at(m,this);const v=c.listener,A=c.ha||c.src;c.fa&&da(c),c=v.call(A,m)}return c}function vs(c){return c=c[Pe],c instanceof se?c:null}var Mo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Po(c){return typeof c=="function"?c:(c[Mo]||(c[Mo]=function(m){return c.handleEvent(m)}),c[Mo])}function St(){M.call(this),this.i=new se(this),this.M=this,this.G=null}S(St,M),St.prototype[Lt]=!0,St.prototype.removeEventListener=function(c,m,v,A){fa(this,c,m,v,A)};function xt(c,m){var v,A=c.G;if(A)for(v=[];A;A=A.G)v.push(A);if(c=c.M,A=m.type||m,typeof m=="string")m=new N(m,c);else if(m instanceof N)m.target=m.target||c;else{var L=m;m=new N(A,c),ee(m,L)}L=!0;let B,J;if(v)for(J=v.length-1;J>=0;J--)B=m.g=v[J],L=vr(B,A,!0,m)&&L;if(B=m.g=c,L=vr(B,A,!0,m)&&L,L=vr(B,A,!1,m)&&L,v)for(J=0;J<v.length;J++)B=m.g=v[J],L=vr(B,A,!1,m)&&L}St.prototype.N=function(){if(St.Z.N.call(this),this.i){var c=this.i;for(const m in c.g){const v=c.g[m];for(let A=0;A<v.length;A++)ce(v[A]);delete c.g[m],c.h--}}this.G=null},St.prototype.J=function(c,m,v,A){return this.i.add(String(c),m,!1,v,A)},St.prototype.K=function(c,m,v,A){return this.i.add(String(c),m,!0,v,A)};function vr(c,m,v,A){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();let L=!0;for(let B=0;B<m.length;++B){const J=m[B];if(J&&!J.da&&J.capture==v){const Ee=J.listener,_t=J.ha||J.src;J.fa&&pe(c.i,J),L=Ee.call(_t,A)!==!1&&L}}return L&&!A.defaultPrevented}function vf(c,m){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:f.setTimeout(c,m||0)}function Nu(c){c.g=vf(()=>{c.g=null,c.i&&(c.i=!1,Nu(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class ln extends M{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Nu(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(c){M.call(this),this.h=c,this.g={}}S(Es,M);var ko=[];function Lo(c){Le(c.g,function(m,v){this.g.hasOwnProperty(v)&&da(m)},c),c.g={}}Es.prototype.N=function(){Es.Z.N.call(this),Lo(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Er=f.JSON.stringify,Ef=f.JSON.parse,Ou=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function Vu(){}function Mu(){}var Qn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Yt(){N.call(this,"d")}S(Yt,N);function Mn(){N.call(this,"c")}S(Mn,N);var yt={},Pu=null;function ma(){return Pu=Pu||new St}yt.Ia="serverreachability";function ku(c){N.call(this,yt.Ia,c)}S(ku,N);function fi(c){const m=ma();xt(m,new ku(m))}yt.STAT_EVENT="statevent";function Ts(c,m){N.call(this,yt.STAT_EVENT,c),this.stat=m}S(Ts,N);function It(c){const m=ma();xt(m,new Ts(m,c))}yt.Ja="timingevent";function di(c,m){N.call(this,yt.Ja,c),this.size=m}S(di,N);function mi(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},m)}function Xn(){this.g=!0}Xn.prototype.ua=function(){this.g=!1};function Tf(c,m,v,A,L,B){c.info(function(){if(c.g)if(B){var J="",Ee=B.split("&");for(let Be=0;Be<Ee.length;Be++){var _t=Ee[Be].split("=");if(_t.length>1){const lt=_t[0];_t=_t[1];const Un=lt.split("_");J=Un.length>=2&&Un[1]=="type"?J+(lt+"="+_t+"&"):J+(lt+"=redacted&")}}}else J=null;else J=B;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+m+`
`+v+`
`+J})}function Lu(c,m,v,A,L,B,J){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+m+`
`+v+`
`+B+" "+J})}function pi(c,m,v,A){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Af(c,v)+(A?" "+A:"")})}function As(c,m){c.info(function(){return"TIMEOUT: "+m})}Xn.prototype.info=function(){};function Af(c,m){if(!c.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(c=0;c<B.length;c++)if(Array.isArray(B[c])){var v=B[c];if(!(v.length<2)){var A=v[1];if(Array.isArray(A)&&!(A.length<1)){var L=A[0];if(L!="noop"&&L!="stop"&&L!="close")for(let J=1;J<A.length;J++)A[J]=""}}}}return Er(B)}catch{return m}}var Ss={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Uo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},xo;function Is(){}S(Is,Vu),Is.prototype.g=function(){return new XMLHttpRequest},xo=new Is;function Bi(c){return encodeURIComponent(String(c))}function Uu(c){var m=1;c=c.split(":");const v=[];for(;m>0&&c.length;)v.push(c.shift()),m--;return c.length&&v.push(c.join(":")),v}function Wn(c,m,v,A){this.j=c,this.i=m,this.l=v,this.S=A||1,this.V=new Es(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new $n}function $n(){this.i=null,this.g="",this.h=!1}var bt={},qt={};function gi(c,m,v){c.M=1,c.A=bs(Rt(m)),c.u=v,c.R=!0,pa(c,null)}function pa(c,m){c.F=Date.now(),yi(c),c.B=Rt(c.A);var v=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),va(v.i,"t",A),c.C=0,v=c.j.L,c.h=new $n,c.g=Ju(c.j,v?m:null,!c.u),c.P>0&&(c.O=new ln(_(c.Y,c,c.g),c.P)),m=c.V,v=c.g,A=c.ba;var L="readystatechange";Array.isArray(L)||(L&&(ko[0]=L.toString()),L=ko);for(let B=0;B<L.length;B++){const J=ot(v,L[B],A||m.handleEvent,!1,m.h||m);if(!J)break;m.g[J.key]=J}m=c.J?O(c.J):{},c.u?(c.v||(c.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,m)):(c.v="GET",c.g.ea(c.B,c.v,null,m)),fi(),Tf(c.i,c.v,c.B,c.l,c.S,c.u)}Wn.prototype.ba=function(c){c=c.target;const m=this.O;m&&ei(c)==3?m.j():this.Y(c)},Wn.prototype.Y=function(c){try{if(c==this.g)e:{const Ee=ei(this.g),_t=this.g.ya(),Be=this.g.ca();if(!(Ee<3)&&(Ee!=3||this.g&&(this.h.h||this.g.la()||Kt(this.g)))){this.K||Ee!=4||_t==7||(_t==8||Be<=0?fi(3):fi(2)),_i(this);var m=this.g.ca();this.X=m;var v=Sf(this);if(this.o=m==200,Lu(this.i,this.v,this.B,this.l,this.S,Ee,m),this.o){if(this.U&&!this.L){t:{if(this.g){var A,L=this.g;if((A=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(A)){var B=A;break t}}B=null}if(c=B)pi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vi(this,c);else{this.o=!1,this.m=3,It(12),Sn(this),Pn(this);break e}}if(this.R){c=!0;let lt;for(;!this.K&&this.C<v.length;)if(lt=zu(this,v),lt==qt){Ee==4&&(this.m=4,It(14),c=!1),pi(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==bt){this.m=4,It(15),pi(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else pi(this.i,this.l,lt,null),vi(this,lt);if(xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||v.length!=0||this.h.h||(this.m=1,It(16),c=!1),this.o=this.o&&c,!c)pi(this.i,this.l,v,"[Invalid Chunked Response]"),Sn(this),Pn(this);else if(v.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Zo(J),J.P=!0,It(11))}}else pi(this.i,this.l,v,null),vi(this,v);Ee==4&&Sn(this),this.o&&!this.K&&(Ee==4?Qu(this.j,this):(this.o=!1,yi(this)))}else Hi(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,It(12)):(this.m=0,It(13)),Sn(this),Pn(this)}}}catch{}finally{}};function Sf(c){if(!xu(c))return c.g.la();const m=Kt(c.g);if(m==="")return"";let v="";const A=m.length,L=ei(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Sn(c),Pn(c),"";c.h.i=new f.TextDecoder}for(let B=0;B<A;B++)c.h.h=!0,v+=c.h.i.decode(m[B],{stream:!(L&&B==A-1)});return m.length=0,c.h.g+=v,c.C=0,c.h.g}function xu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function zu(c,m){var v=c.C,A=m.indexOf(`
`,v);return A==-1?qt:(v=Number(m.substring(v,A)),isNaN(v)?bt:(A+=1,A+v>m.length?qt:(m=m.slice(A,A+v),c.C=A+v,m)))}Wn.prototype.cancel=function(){this.K=!0,Sn(this)};function yi(c){c.T=Date.now()+c.H,ga(c,c.H)}function ga(c,m){if(c.D!=null)throw Error("WatchDog timer not null");c.D=mi(_(c.aa,c),m)}function _i(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Wn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(As(this.i,this.B),this.M!=2&&(fi(),It(17)),Sn(this),this.m=2,Pn(this)):ga(this,this.T-c)};function Pn(c){c.j.I==0||c.K||Qu(c.j,c)}function Sn(c){_i(c);var m=c.O;m&&typeof m.dispose=="function"&&m.dispose(),c.O=null,Lo(c.V),c.g&&(m=c.g,c.g=null,m.abort(),m.dispose())}function vi(c,m){try{var v=c.j;if(v.I!=0&&(v.g==c||Ti(v.h,c))){if(!c.L&&Ti(v.h,c)&&v.I==3){try{var A=v.Ba.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)Ia(v),Cr(v);else break e;Vs(v),It(18)}}else v.xa=L[1],0<v.xa-v.K&&L[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=mi(_(v.Va,v),6e3));Ei(v.h)<=1&&v.ta&&(v.ta=void 0)}else Ri(v,11)}else if((c.L||v.g==c)&&Ia(v),!b(m))for(L=v.Ba.g.parse(m),m=0;m<L.length;m++){let Be=L[m];const lt=Be[0];if(!(lt<=v.K))if(v.K=lt,Be=Be[1],v.I==2)if(Be[0]=="c"){v.M=Be[1],v.ba=Be[2];const Un=Be[3];Un!=null&&(v.ka=Un,v.j.info("VER="+v.ka));const Ci=Be[4];Ci!=null&&(v.za=Ci,v.j.info("SVER="+v.za));const ti=Be[5];ti!=null&&typeof ti=="number"&&ti>0&&(A=1.5*ti,v.O=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const ni=c.g;if(ni){const Ms=ni.g?ni.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ms){var B=A.h;B.g||Ms.indexOf("spdy")==-1&&Ms.indexOf("quic")==-1&&Ms.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(qo(B,B.h),B.h=null))}if(A.G){const ba=ni.g?ni.g.getResponseHeader("X-HTTP-Session-Id"):null;ba&&(A.wa=ba,je(A.J,A.G,ba))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),A=v;var J=c;if(A.na=$u(A,A.L?A.ba:null,A.W),J.L){Ho(A.h,J);var Ee=J,_t=A.O;_t&&(Ee.H=_t),Ee.D&&(_i(Ee),yi(Ee)),A.g=J}else Yu(A);v.i.length>0&&wi(v)}else Be[0]!="stop"&&Be[0]!="close"||Ri(v,7);else v.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?Ri(v,7):$o(v):Be[0]!="noop"&&v.l&&v.l.qa(Be),v.A=0)}}fi(4)}catch{}}var wt=class{constructor(c,m){this.g=c,this.map=m}};function zo(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Bo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ei(c){return c.h?1:c.g?c.g.size:0}function Ti(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function qo(c,m){c.g?c.g.add(m):c.h=m}function Ho(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}zo.prototype.cancel=function(){if(this.i=Fo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Fo(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const v of c.g.values())m=m.concat(v.G);return m}return G(c.i)}var Bu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ya(c,m){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const A=c[v].indexOf("=");let L,B=null;A>=0?(L=c[v].substring(0,A),B=c[v].substring(A+1)):L=c[v],m(L,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function In(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;c instanceof In?(this.l=c.l,Ht(this,c.j),this.o=c.o,this.g=c.g,Tr(this,c.u),this.h=c.h,jo(this,ju(c.i)),this.m=c.m):c&&(m=String(c).match(Bu))?(this.l=!1,Ht(this,m[1]||"",!0),this.o=Ai(m[2]||""),this.g=Ai(m[3]||"",!0),Tr(this,m[4]),this.h=Ai(m[5]||"",!0),jo(this,m[6]||"",!0),this.m=Ai(m[7]||"")):(this.l=!1,this.i=new Sr(null,this.l))}In.prototype.toString=function(){const c=[];var m=this.j;m&&c.push(ws(m,_a,!0),":");var v=this.g;return(v||m=="file")&&(c.push("//"),(m=this.o)&&c.push(ws(m,_a,!0),"@"),c.push(Bi(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(ws(v,v.charAt(0)=="/"?Go:qu,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",ws(v,Hu)),c.join("")},In.prototype.resolve=function(c){const m=Rt(this);let v=!!c.j;v?Ht(m,c.j):v=!!c.o,v?m.o=c.o:v=!!c.g,v?m.g=c.g:v=c.u!=null;var A=c.h;if(v)Tr(m,c.u);else if(v=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var L=m.h.lastIndexOf("/");L!=-1&&(A=m.h.slice(0,L+1)+A)}if(L=A,L==".."||L==".")A="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){A=L.lastIndexOf("/",0)==0,L=L.split("/");const B=[];for(let J=0;J<L.length;){const Ee=L[J++];Ee=="."?A&&J==L.length&&B.push(""):Ee==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),A&&J==L.length&&B.push("")):(B.push(Ee),A=!0)}A=B.join("/")}else A=L}return v?m.h=A:v=c.i.toString()!=="",v?jo(m,ju(c.i)):v=!!c.m,v&&(m.m=c.m),m};function Rt(c){return new In(c)}function Ht(c,m,v){c.j=v?Ai(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function Tr(c,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);c.u=m}else c.u=null}function jo(c,m,v){m instanceof Sr?(c.i=m,Ea(c.i,c.l)):(v||(m=ws(m,Ar)),c.i=new Sr(m,c.l))}function je(c,m,v){c.i.set(m,v)}function bs(c){return je(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ai(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ws(c,m,v){return typeof c=="string"?(c=encodeURI(c).replace(m,fn),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function fn(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var _a=/[#\/\?@]/g,qu=/[#\?:]/g,Go=/[#\?]/g,Ar=/[#\?@]/g,Hu=/#/g;function Sr(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function dn(c){c.g||(c.g=new Map,c.h=0,c.i&&ya(c.i,function(m,v){c.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}r=Sr.prototype,r.add=function(c,m){dn(this),this.i=null,c=Ir(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(m),this.h+=1,this};function Fu(c,m){dn(c),m=Ir(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Yo(c,m){return dn(c),m=Ir(c,m),c.g.has(m)}r.forEach=function(c,m){dn(this),this.g.forEach(function(v,A){v.forEach(function(L){c.call(m,L,A,this)},this)},this)};function Ko(c,m){dn(c);let v=[];if(typeof m=="string")Yo(c,m)&&(v=v.concat(c.g.get(Ir(c,m))));else for(c=Array.from(c.g.values()),m=0;m<c.length;m++)v=v.concat(c[m]);return v}r.set=function(c,m){return dn(this),this.i=null,c=Ir(this,c),Yo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=Ko(this,c),c.length>0?String(c[0]):m):m};function va(c,m,v){Fu(c,m),v.length>0&&(c.i=null,c.g.set(Ir(c,m),G(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(let A=0;A<m.length;A++){var v=m[A];const L=Bi(v);v=Ko(this,v);for(let B=0;B<v.length;B++){let J=L;v[B]!==""&&(J+="="+Bi(v[B])),c.push(J)}}return this.i=c.join("&")};function ju(c){const m=new Sr;return m.i=c.i,c.g&&(m.g=new Map(c.g),m.h=c.h),m}function Ir(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function Ea(c,m){m&&!c.j&&(dn(c),c.i=null,c.g.forEach(function(v,A){const L=A.toLowerCase();A!=L&&(Fu(this,A),va(this,L,v))},c)),c.j=m}function Jn(c,m){const v=new Xn;if(f.Image){const A=new Image;A.onload=T(kn,v,"TestLoadImage: loaded",!0,m,A),A.onerror=T(kn,v,"TestLoadImage: error",!1,m,A),A.onabort=T(kn,v,"TestLoadImage: abort",!1,m,A),A.ontimeout=T(kn,v,"TestLoadImage: timeout",!1,m,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else m(!1)}function Qo(c,m){const v=new Xn,A=new AbortController,L=setTimeout(()=>{A.abort(),kn(v,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:A.signal}).then(B=>{clearTimeout(L),B.ok?kn(v,"TestPingServer: ok",!0,m):kn(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(L),kn(v,"TestPingServer: error",!1,m)})}function kn(c,m,v,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(v)}catch{}}function br(){this.g=new Ou}function Si(c){this.i=c.Sb||null,this.h=c.ab||!1}S(Si,Vu),Si.prototype.g=function(){return new Rs(this.i,this.h)};function Rs(c,m){St.call(this),this.H=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Rs,St),r=Rs.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=m,this.readyState=1,Zn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(m.body=c),(this.H||f).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ta(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ta(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?wr(this):Zn(this),this.readyState==3&&Ta(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,wr(this))},r.Na=function(c){this.g&&(this.response=c,wr(this))},r.ga=function(){this.g&&wr(this)};function wr(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Zn(c)}r.setRequestHeader=function(c,m){this.A.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=m.next();return c.join(`\r
`)};function Zn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ln(c){let m="";return Le(c,function(v,A){m+=A,m+=":",m+=v,m+=`\r
`}),m}function Cs(c,m,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Ln(v),typeof c=="string"?v!=null&&Bi(v):je(c,m,v))}function Ke(c){St.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(Ke,St);var Ii=/^https?$/i,Xo=["POST","PUT"];r=Ke.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,m,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():xo.g(),this.g.onreadystatechange=V(_(this.Ca,this));try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(B){Ds(this,B);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)v.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const B of A.keys())v.set(B,A.get(B));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(B=>B.toLowerCase()=="content-type"),L=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(Xo,m,void 0)>=0)||A||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,J]of v)this.g.setRequestHeader(B,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(B){Ds(this,B)}};function Ds(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.o=5,Wo(c),qi(c)}function Wo(c){c.A||(c.A=!0,xt(c,"complete"),xt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,xt(this,"complete"),xt(this,"abort"),qi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qi(this,!0)),Ke.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Ns(this):this.Xa())},r.Xa=function(){Ns(this)};function Ns(c){if(c.h&&typeof u<"u"){if(c.v&&ei(c)==4)setTimeout(c.Ca.bind(c),0);else if(xt(c,"readystatechange"),ei(c)==4){c.h=!1;try{const B=c.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var A;if(A=B===0){let J=String(c.D).match(Bu)[1]||null;!J&&f.self&&f.self.location&&(J=f.self.location.protocol.slice(0,-1)),A=!Ii.test(J?J.toLowerCase():"")}v=A}if(v)xt(c,"complete"),xt(c,"success");else{c.o=6;try{var L=ei(c)>2?c.g.statusText:""}catch{L=""}c.l=L+" ["+c.ca()+"]",Wo(c)}}finally{qi(c)}}}}function qi(c,m){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,m||xt(c,"ready");try{v.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function ei(c){return c.g?c.g.readyState:0}r.ca=function(){try{return ei(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Ef(m)}};function Kt(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Hi(c){const m={};c=(c.g&&ei(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(b(c[A]))continue;var v=Uu(c[A]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const B=m[L]||[];m[L]=B,B.push(v)}Fe(m,function(A){return A.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function bi(c,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||m}function Rr(c){this.za=0,this.i=[],this.j=new Xn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=bi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=bi("baseRetryDelayMs",5e3,c),this.Za=bi("retryDelaySeedMs",1e4,c),this.Ta=bi("forwardChannelMaxRetries",2,c),this.va=bi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new zo(c&&c.concurrentRequestLimit),this.Ba=new br,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Rr.prototype,r.ka=8,r.I=1,r.connect=function(c,m,v,A){It(0),this.W=c,this.H=m||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.J=$u(this,null,this.W),wi(this)};function $o(c){if(Aa(c),c.I==3){var m=c.V++,v=Rt(c.J);if(je(v,"SID",c.M),je(v,"RID",m),je(v,"TYPE","terminate"),Os(c,v),m=new Wn(c,c.j,m),m.M=2,m.A=bs(Rt(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.A,v=!0),v||(m.g=Ju(m.j,null),m.g.ea(m.A)),m.F=Date.now(),yi(m)}Wu(c)}function Cr(c){c.g&&(Zo(c),c.g.cancel(),c.g=null)}function Aa(c){Cr(c),c.v&&(f.clearTimeout(c.v),c.v=null),Ia(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function wi(c){if(!Bo(c.h)&&!c.m){c.m=!0;var m=c.Ea;$e||I(),ze||($e(),ze=!0),C.add(m,c),c.D=0}}function Sa(c,m){return Ei(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=m.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=mi(_(c.Ea,c,m),Xu(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const L=new Wn(this,this.j,c);let B=this.o;if(this.U&&(B?(B=O(B),ee(B,this.U)):B=this.U),this.u!==null||this.R||(L.J=B,B=null),this.S)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(m+=A,m>4096){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=Gu(this,L,m),v=Rt(this.J),je(v,"RID",c),je(v,"CVER",22),this.G&&je(v,"X-HTTP-Session-Id",this.G),Os(this,v),B&&(this.R?m="headers="+Bi(Ln(B))+"&"+m:this.u&&Cs(v,this.u,B)),qo(this.h,L),this.Ra&&je(v,"TYPE","init"),this.S?(je(v,"$req",m),je(v,"SID","null"),L.U=!0,gi(L,v,null)):gi(L,v,m),this.I=2}}else this.I==3&&(c?Jo(this,c):this.i.length==0||Bo(this.h)||Jo(this))};function Jo(c,m){var v;m?v=m.l:v=c.V++;const A=Rt(c.J);je(A,"SID",c.M),je(A,"RID",v),je(A,"AID",c.K),Os(c,A),c.u&&c.o&&Cs(A,c.u,c.o),v=new Wn(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),m&&(c.i=m.G.concat(c.i)),m=Gu(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),qo(c.h,v),gi(v,A,m)}function Os(c,m){c.H&&Le(c.H,function(v,A){je(m,A,v)}),c.l&&Le({},function(v,A){je(m,A,v)})}function Gu(c,m,v){v=Math.min(c.i.length,v);const A=c.l?_(c.l.Ka,c.l,c):null;e:{var L=c.i;let Ee=-1;for(;;){const _t=["count="+v];Ee==-1?v>0?(Ee=L[0].g,_t.push("ofs="+Ee)):Ee=0:_t.push("ofs="+Ee);let Be=!0;for(let lt=0;lt<v;lt++){var B=L[lt].g;const Un=L[lt].map;if(B-=Ee,B<0)Ee=Math.max(0,L[lt].g-100),Be=!1;else try{B="req"+B+"_"||"";try{var J=Un instanceof Map?Un:Object.entries(Un);for(const[Ci,ti]of J){let ni=ti;p(ti)&&(ni=Er(ti)),_t.push(B+Ci+"="+encodeURIComponent(ni))}}catch(Ci){throw _t.push(B+"type="+encodeURIComponent("_badmap")),Ci}}catch{A&&A(Un)}}if(Be){J=_t.join("&");break e}}J=void 0}return c=c.i.splice(0,v),m.G=c,J}function Yu(c){if(!c.g&&!c.v){c.Y=1;var m=c.Da;$e||I(),ze||($e(),ze=!0),C.add(m,c),c.A=0}}function Vs(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=mi(_(c.Da,c),Xu(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,Ku(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=mi(_(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,It(10),Cr(this),Ku(this))};function Zo(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Ku(c){c.g=new Wn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var m=Rt(c.na);je(m,"RID","rpc"),je(m,"SID",c.M),je(m,"AID",c.K),je(m,"CI",c.F?"0":"1"),!c.F&&c.ia&&je(m,"TO",c.ia),je(m,"TYPE","xmlhttp"),Os(c,m),c.u&&c.o&&Cs(m,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=bs(Rt(m)),v.u=null,v.R=!0,pa(v,c)}r.Va=function(){this.C!=null&&(this.C=null,Cr(this),Vs(this),It(19))};function Ia(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Qu(c,m){var v=null;if(c.g==m){Ia(c),Zo(c),c.g=null;var A=2}else if(Ti(c.h,m))v=m.G,Ho(c.h,m),A=1;else return;if(c.I!=0){if(m.o)if(A==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var L=c.D;A=ma(),xt(A,new di(A,v)),wi(c)}else Yu(c);else if(L=m.m,L==3||L==0&&m.X>0||!(A==1&&Sa(c,m)||A==2&&Vs(c)))switch(v&&v.length>0&&(m=c.h,m.i=m.i.concat(v)),L){case 1:Ri(c,5);break;case 4:Ri(c,10);break;case 3:Ri(c,6);break;default:Ri(c,2)}}}function Xu(c,m){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*m}function Ri(c,m){if(c.j.info("Error code "+m),m==2){var v=_(c.bb,c),A=c.Ua;const L=!A;A=new In(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ht(A,"https"),bs(A),L?Jn(A.toString(),v):Qo(A.toString(),v)}else It(2);c.I=0,c.l&&c.l.pa(m),Wu(c),Aa(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Wu(c){if(c.I=0,c.ja=[],c.l){const m=Fo(c.h);(m.length!=0||c.i.length!=0)&&($(c.ja,m),$(c.ja,c.i),c.h.i.length=0,G(c.i),c.i.length=0),c.l.oa()}}function $u(c,m,v){var A=v instanceof In?Rt(v):new In(v);if(A.g!="")m&&(A.g=m+"."+A.g),Tr(A,A.u);else{var L=f.location;A=L.protocol,m=m?m+"."+L.hostname:L.hostname,L=+L.port;const B=new In(null);A&&Ht(B,A),m&&(B.g=m),L&&Tr(B,L),v&&(B.h=v),A=B}return v=c.G,m=c.wa,v&&m&&je(A,v,m),je(A,"VER",c.ka),Os(c,A),A}function Ju(c,m,v){if(m&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Aa&&!c.ma?new Ke(new Si({ab:v})):new Ke(c.ma),m.Fa(c.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zu(){}r=Zu.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Dr(){}Dr.prototype.g=function(c,m){return new un(c,m)};function un(c,m){St.call(this),this.g=new Rr(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(c?c["X-WebChannel-Client-Profile"]=m.sa:c={"X-WebChannel-Client-Profile":m.sa}),this.g.U=c,(c=m&&m.Qb)&&!b(c)&&(this.g.u=c),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!b(m)&&(this.g.G=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new Fi(this)}S(un,St),un.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){$o(this.g)},un.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=Er(c),c=v);m.i.push(new wt(m.Ya++,c)),m.I==3&&wi(m)},un.prototype.N=function(){this.g.l=null,delete this.j,$o(this.g),delete this.g,un.Z.N.call(this)};function ec(c){Yt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const v in m){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}S(ec,Yt);function tc(){Mn.call(this),this.status=1}S(tc,Mn);function Fi(c){this.g=c}S(Fi,Zu),Fi.prototype.ra=function(){xt(this.g,"a")},Fi.prototype.qa=function(c){xt(this.g,new ec(c))},Fi.prototype.pa=function(c){xt(this.g,new tc)},Fi.prototype.oa=function(){xt(this.g,"b")},Dr.prototype.createWebChannel=Dr.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,ZT=function(){return new Dr},JT=function(){return ma()},$T=yt,Km={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ss.NO_ERROR=0,Ss.TIMEOUT=8,Ss.HTTP_ERROR=6,dh=Ss,Uo.COMPLETE="complete",WT=Uo,Mu.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",St.prototype.listen=St.prototype.J,Hl=Mu,Ke.prototype.listenOnce=Ke.prototype.K,Ke.prototype.getLastError=Ke.prototype.Ha,Ke.prototype.getLastErrorCode=Ke.prototype.ya,Ke.prototype.getStatus=Ke.prototype.ca,Ke.prototype.getResponseJson=Ke.prototype.La,Ke.prototype.getResponseText=Ke.prototype.la,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Fa,XT=Ke}).apply(typeof sh<"u"?sh:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class sn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
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
 */let So="12.12.0";function tR(r){So=r}/**
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
 */const na=new dp("@firebase/firestore");function to(){return na.logLevel}function re(r,...e){if(na.logLevel<=Ne.DEBUG){const n=e.map(gp);na.debug(`Firestore (${So}): ${r}`,...n)}}function hr(r,...e){if(na.logLevel<=Ne.ERROR){const n=e.map(gp);na.error(`Firestore (${So}): ${r}`,...n)}}function ia(r,...e){if(na.logLevel<=Ne.WARN){const n=e.map(gp);na.warn(`Firestore (${So}): ${r}`,...n)}}function gp(r){if(typeof r=="string")return r;try{return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
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
 */function me(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,eA(r,s,n)}function eA(r,e,n){let s=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw hr(s),new Error(s)}function He(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||eA(e,o,s)}function ve(r,e){return r}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends gr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class lr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class tA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(sn.UNAUTHENTICATED)))}shutdown(){}}class iR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class rR{constructor(e){this.t=e,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let u=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new lr,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},p=y=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((y=>p(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?p(y):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new lr)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(He(typeof s.accessToken=="string",31837,{l:s}),new tA(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new sn(e)}}class sR{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class aR{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new sR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(sn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ht(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,re("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new fE(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function lR(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class yp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=lR(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Oe(r,e){return r<e?-1:r>e?1:0}function Qm(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return Cm(o)===Cm(u)?Oe(o,u):Cm(o)?1:-1}return Oe(r.length,e.length)}const uR=55296,cR=57343;function Cm(r){const e=r.charCodeAt(0);return e>=uR&&e<=cR}function po(r,e,n){return r.length===e.length&&r.every(((s,o)=>n(s,e[o])))}/**
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
 */const dE="__name__";class Mi{constructor(e,n,s){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&me(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Mi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mi?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=Mi.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Oe(e.length,n.length)}static compareSegments(e,n){const s=Mi.isNumericId(e),o=Mi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Mi.extractNumericId(e).compare(Mi.extractNumericId(n)):Qm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return as.fromString(e.substring(4,e.length-2))}}class Ze extends Mi{construct(e,n,s){return new Ze(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new te(j.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new Ze(n)}static emptyPath(){return new Ze([])}}const hR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Zt extends Mi{construct(e,n,s){return new Zt(e,n,s)}static isValidIdentifier(e){return hR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dE}static keyField(){return new Zt([dE])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new te(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new te(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new te(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(s+=p,o++):(u(),o++)}if(u(),f)throw new te(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Zt(n)}static emptyPath(){return new Zt([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ze.fromString(e))}static fromName(e){return new ue(Ze.fromString(e).popFirst(5))}static empty(){return new ue(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ze(e.slice()))}}/**
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
 */function nA(r,e,n){if(!n)throw new te(j.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function fR(r,e,n,s){if(e===!0&&s===!0)throw new te(j.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function mE(r){if(!ue.isDocumentKey(r))throw new te(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function pE(r){if(ue.isDocumentKey(r))throw new te(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function iA(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function jh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":me(12329,{type:typeof r})}function en(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new te(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jh(r);throw new te(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}function dR(r,e){if(e<=0)throw new te(j.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */function kt(r,e){const n={typeString:r};return e&&(n.value=e),n}function _u(r,e){if(!iA(r))throw new te(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new te(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const gE=-62135596800,yE=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*yE);return new it(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<gE)throw new te(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yE}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:it._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_u(e,it._jsonSchema))return new it(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}it._jsonSchemaVersion="firestore/timestamp/1.0",it._jsonSchema={type:kt("string",it._jsonSchemaVersion),seconds:kt("number"),nanoseconds:kt("number")};/**
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
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new it(0,0))}static max(){return new ge(new it(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const tu=-1;function mR(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ge.fromTimestamp(s===1e9?new it(n+1,0):new it(n,s));return new cs(o,ue.empty(),e)}function pR(r){return new cs(r.readTime,r.key,tu)}class cs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new cs(ge.min(),ue.empty(),tu)}static max(){return new cs(ge.max(),ue.empty(),tu)}}function gR(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(r.documentKey,e.documentKey),n!==0?n:Oe(r.largestBatchId,e.largestBatchId))}/**
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
 */const yR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _R{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Io(r){if(r.code!==j.FAILED_PRECONDITION||r.message!==yR)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new X(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):X.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):X.reject(n)}static resolve(e){return new X(((n,s)=>{n(e)}))}static reject(e){return new X(((n,s)=>{s(e)}))}static waitFor(e){return new X(((n,s)=>{let o=0,u=0,f=!1;e.forEach((p=>{++o,p.next((()=>{++u,f&&u===o&&n()}),(y=>s(y)))})),f=!0,u===o&&n()}))}static or(e){let n=X.resolve(!1);for(const s of e)n=n.next((o=>o?X.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,u)=>{s.push(n.call(this,o,u))})),this.waitFor(s)}static mapArray(e,n){return new X(((s,o)=>{const u=e.length,f=new Array(u);let p=0;for(let y=0;y<u;y++){const _=y;n(e[_]).next((T=>{f[_]=T,++p,p===u&&s(f)}),(T=>o(T)))}}))}static doWhile(e,n){return new X(((s,o)=>{const u=()=>{e()===!0?n().next((()=>{u()}),o):s()};u()}))}}function vR(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Gh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Gh.ce=-1;/**
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
 */const _p=-1;function Yh(r){return r==null}function wh(r){return r===0&&1/r==-1/0}function ER(r){return typeof r=="number"&&Number.isInteger(r)&&!wh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const rA="";function TR(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=_E(e)),e=AR(r.get(n),e);return _E(e)}function AR(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case rA:n+="";break;default:n+=u}}return n}function _E(r){return r+rA+""}/**
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
 */function vE(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function gs(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function sA(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ft{constructor(e,n){this.comparator=e,this.root=n||Jt.EMPTY}insert(e,n){return new ft(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ah(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ah(this.root,e,this.comparator,!1)}getReverseIterator(){return new ah(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ah(this.root,e,this.comparator,!0)}}class ah{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Jt.RED,this.left=o??Jt.EMPTY,this.right=u??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Jt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Jt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new Jt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Bt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new EE(this.data.getIterator())}getIteratorFrom(e){return new EE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Bt(this.comparator);return n.data=e,n}}class EE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vn{constructor(e){this.fields=e,e.sort(Zt.comparator)}static empty(){return new Vn([])}unionWith(e){let n=new Bt(Zt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class aA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new aA("Invalid base64 string: "+u):u}})(e);return new tn(n)}static fromUint8Array(e){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(e);return new tn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tn.EMPTY_BYTE_STRING=new tn("");const SR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hs(r){if(He(!!r,39018),typeof r=="string"){let e=0;const n=SR.exec(r);if(He(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:At(r.seconds),nanos:At(r.nanos)}}function At(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function fs(r){return typeof r=="string"?tn.fromBase64String(r):tn.fromUint8Array(r)}/**
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
 */const oA="server_timestamp",lA="__type__",uA="__previous_value__",cA="__local_write_time__";function vp(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[lA])==null?void 0:s.stringValue)===oA}function Kh(r){const e=r.mapValue.fields[uA];return vp(e)?Kh(e):e}function nu(r){const e=hs(r.mapValue.fields[cA].timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class IR{constructor(e,n,s,o,u,f,p,y,_,T,S){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=T,this.apiKey=S}}const Rh="(default)";class iu{constructor(e,n){this.projectId=e,this.database=n||Rh}static empty(){return new iu("","")}get isDefaultDatabase(){return this.database===Rh}isEqual(e){return e instanceof iu&&e.projectId===this.projectId&&e.database===this.database}}function bR(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new te(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new iu(r.options.projectId,e)}/**
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
 */const hA="__type__",wR="__max__",oh={mapValue:{}},fA="__vector__",Ch="value";function ds(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?vp(r)?4:CR(r)?9007199254740991:RR(r)?10:11:me(28295,{value:r})}function xi(r,e){if(r===e)return!0;const n=ds(r);if(n!==ds(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return nu(r).isEqual(nu(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=hs(o.timestampValue),p=hs(u.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return fs(o.bytesValue).isEqual(fs(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return At(o.geoPointValue.latitude)===At(u.geoPointValue.latitude)&&At(o.geoPointValue.longitude)===At(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return At(o.integerValue)===At(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=At(o.doubleValue),p=At(u.doubleValue);return f===p?wh(f)===wh(p):isNaN(f)&&isNaN(p)}return!1})(r,e);case 9:return po(r.arrayValue.values||[],e.arrayValue.values||[],xi);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},p=u.mapValue.fields||{};if(vE(f)!==vE(p))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(p[y]===void 0||!xi(f[y],p[y])))return!1;return!0})(r,e);default:return me(52216,{left:r})}}function ru(r,e){return(r.values||[]).find((n=>xi(n,e)))!==void 0}function go(r,e){if(r===e)return 0;const n=ds(r),s=ds(e);if(n!==s)return Oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(r.booleanValue,e.booleanValue);case 2:return(function(u,f){const p=At(u.integerValue||u.doubleValue),y=At(f.integerValue||f.doubleValue);return p<y?-1:p>y?1:p===y?0:isNaN(p)?isNaN(y)?0:-1:1})(r,e);case 3:return TE(r.timestampValue,e.timestampValue);case 4:return TE(nu(r),nu(e));case 5:return Qm(r.stringValue,e.stringValue);case 6:return(function(u,f){const p=fs(u),y=fs(f);return p.compareTo(y)})(r.bytesValue,e.bytesValue);case 7:return(function(u,f){const p=u.split("/"),y=f.split("/");for(let _=0;_<p.length&&_<y.length;_++){const T=Oe(p[_],y[_]);if(T!==0)return T}return Oe(p.length,y.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,f){const p=Oe(At(u.latitude),At(f.latitude));return p!==0?p:Oe(At(u.longitude),At(f.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return AE(r.arrayValue,e.arrayValue);case 10:return(function(u,f){var V,G,$,ie;const p=u.fields||{},y=f.fields||{},_=(V=p[Ch])==null?void 0:V.arrayValue,T=(G=y[Ch])==null?void 0:G.arrayValue,S=Oe((($=_==null?void 0:_.values)==null?void 0:$.length)||0,((ie=T==null?void 0:T.values)==null?void 0:ie.length)||0);return S!==0?S:AE(_,T)})(r.mapValue,e.mapValue);case 11:return(function(u,f){if(u===oh.mapValue&&f===oh.mapValue)return 0;if(u===oh.mapValue)return 1;if(f===oh.mapValue)return-1;const p=u.fields||{},y=Object.keys(p),_=f.fields||{},T=Object.keys(_);y.sort(),T.sort();for(let S=0;S<y.length&&S<T.length;++S){const V=Qm(y[S],T[S]);if(V!==0)return V;const G=go(p[y[S]],_[T[S]]);if(G!==0)return G}return Oe(y.length,T.length)})(r.mapValue,e.mapValue);default:throw me(23264,{he:n})}}function TE(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Oe(r,e);const n=hs(r),s=hs(e),o=Oe(n.seconds,s.seconds);return o!==0?o:Oe(n.nanos,s.nanos)}function AE(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=go(n[o],s[o]);if(u)return u}return Oe(n.length,s.length)}function yo(r){return Xm(r)}function Xm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=hs(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return fs(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return ue.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Xm(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Xm(n.fields[f])}`;return o+"}"})(r.mapValue):me(61005,{value:r})}function mh(r){switch(ds(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kh(r);return e?16+mh(e):16;case 5:return 2*r.stringValue.length;case 6:return fs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+mh(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return gs(s.fields,((u,f)=>{o+=u.length+mh(f)})),o})(r.mapValue);default:throw me(13486,{value:r})}}function SE(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Wm(r){return!!r&&"integerValue"in r}function Ep(r){return!!r&&"arrayValue"in r}function IE(r){return!!r&&"nullValue"in r}function bE(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ph(r){return!!r&&"mapValue"in r}function RR(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[hA])==null?void 0:s.stringValue)===fA}function Kl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return gs(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Kl(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kl(r.arrayValue.values[n]);return e}return{...r}}function CR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===wR}/**
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
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ph(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kl(n)}setAll(e){let n=Zt.emptyPath(),s={},o=[];e.forEach(((f,p)=>{if(!n.isImmediateParentOf(p)){const y=this.getFieldsMap(n);this.applyChanges(y,s,o),s={},o=[],n=p.popLast()}f?s[p.lastSegment()]=Kl(f):o.push(p.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());ph(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];ph(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){gs(n,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new En(Kl(this.value))}}function dA(r){const e=[];return gs(r.fields,((n,s)=>{const o=new Zt([n]);if(ph(s)){const u=dA(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)})),new Vn(e)}/**
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
 */class an{constructor(e,n,s,o,u,f,p){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=p}static newInvalidDocument(e){return new an(e,0,ge.min(),ge.min(),ge.min(),En.empty(),0)}static newFoundDocument(e,n,s,o){return new an(e,1,n,ge.min(),s,o,0)}static newNoDocument(e,n){return new an(e,2,n,ge.min(),ge.min(),En.empty(),0)}static newUnknownDocument(e,n){return new an(e,3,n,ge.min(),ge.min(),En.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof an&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dh{constructor(e,n){this.position=e,this.inclusive=n}}function wE(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(f.referenceValue),n.key):s=go(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function RE(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!xi(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class su{constructor(e,n="asc"){this.field=e,this.dir=n}}function DR(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class mA{}class Pt extends mA{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new OR(e,n,s):n==="array-contains"?new PR(e,s):n==="in"?new kR(e,s):n==="not-in"?new LR(e,s):n==="array-contains-any"?new UR(e,s):new Pt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new VR(e,s):new MR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(go(n,this.value)):n!==null&&ds(this.value)===ds(n)&&this.matchesComparison(go(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ui extends mA{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ui(e,n)}matches(e){return pA(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function pA(r){return r.op==="and"}function gA(r){return NR(r)&&pA(r)}function NR(r){for(const e of r.filters)if(e instanceof ui)return!1;return!0}function $m(r){if(r instanceof Pt)return r.field.canonicalString()+r.op.toString()+yo(r.value);if(gA(r))return r.filters.map((e=>$m(e))).join(",");{const e=r.filters.map((n=>$m(n))).join(",");return`${r.op}(${e})`}}function yA(r,e){return r instanceof Pt?(function(s,o){return o instanceof Pt&&s.op===o.op&&s.field.isEqual(o.field)&&xi(s.value,o.value)})(r,e):r instanceof ui?(function(s,o){return o instanceof ui&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,p)=>u&&yA(f,o.filters[p])),!0):!1})(r,e):void me(19439)}function _A(r){return r instanceof Pt?(function(n){return`${n.field.canonicalString()} ${n.op} ${yo(n.value)}`})(r):r instanceof ui?(function(n){return n.op.toString()+" {"+n.getFilters().map(_A).join(" ,")+"}"})(r):"Filter"}class OR extends Pt{constructor(e,n,s){super(e,n,s),this.key=ue.fromName(s.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class VR extends Pt{constructor(e,n){super(e,"in",n),this.keys=vA("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class MR extends Pt{constructor(e,n){super(e,"not-in",n),this.keys=vA("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function vA(r,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((s=>ue.fromName(s.referenceValue)))}class PR extends Pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ep(n)&&ru(n.arrayValue,this.value)}}class kR extends Pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ru(this.value.arrayValue,n)}}class LR extends Pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ru(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ru(this.value.arrayValue,n)}}class UR extends Pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ep(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>ru(this.value.arrayValue,s)))}}/**
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
 */class xR{constructor(e,n=null,s=[],o=[],u=null,f=null,p=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=p,this.Te=null}}function CE(r,e=null,n=[],s=[],o=null,u=null,f=null){return new xR(r,e,n,s,o,u,f)}function Tp(r){const e=ve(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>$m(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Yh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>yo(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>yo(s))).join(",")),e.Te=n}return e.Te}function Ap(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!DR(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!yA(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!RE(r.startAt,e.startAt)&&RE(r.endAt,e.endAt)}function Jm(r){return ue.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class wo{constructor(e,n=null,s=[],o=[],u=null,f="F",p=null,y=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=p,this.endAt=y,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function zR(r,e,n,s,o,u,f,p){return new wo(r,e,n,s,o,u,f,p)}function Qh(r){return new wo(r)}function DE(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function BR(r){return ue.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function EA(r){return r.collectionGroup!==null}function Ql(r){const e=ve(r);if(e.Ee===null){e.Ee=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Bt(Zt.comparator);return f.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(p=p.add(_.field))}))})),p})(e).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new su(u,s))})),n.has(Zt.keyField().canonicalString())||e.Ee.push(new su(Zt.keyField(),s))}return e.Ee}function ki(r){const e=ve(r);return e.Ie||(e.Ie=qR(e,Ql(r))),e.Ie}function qR(r,e){if(r.limitType==="F")return CE(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new su(o.field,u)}));const n=r.endAt?new Dh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Dh(r.startAt.position,r.startAt.inclusive):null;return CE(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Zm(r,e){const n=r.filters.concat([e]);return new wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function HR(r,e){const n=r.explicitOrderBy.concat([e]);return new wo(r.path,r.collectionGroup,n,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function Nh(r,e,n){return new wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Xh(r,e){return Ap(ki(r),ki(e))&&r.limitType===e.limitType}function TA(r){return`${Tp(ki(r))}|lt:${r.limitType}`}function no(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>_A(o))).join(", ")}]`),Yh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>yo(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>yo(o))).join(",")),`Target(${s})`})(ki(r))}; limitType=${r.limitType})`}function Wh(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of Ql(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(f,p,y){const _=wE(f,p,y);return f.inclusive?_<=0:_<0})(s.startAt,Ql(s),o)||s.endAt&&!(function(f,p,y){const _=wE(f,p,y);return f.inclusive?_>=0:_>0})(s.endAt,Ql(s),o))})(r,e)}function FR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function AA(r){return(e,n)=>{let s=!1;for(const o of Ql(r)){const u=jR(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function jR(r,e,n){const s=r.field.isKeyField()?ue.comparator(e.key,n.key):(function(u,f,p){const y=f.data.field(u),_=p.data.field(u);return y!==null&&_!==null?go(y,_):me(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return me(19790,{direction:r.dir})}}/**
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
 */class aa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,((n,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return sA(this.inner)}size(){return this.innerSize}}/**
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
 */const GR=new ft(ue.comparator);function fr(){return GR}const SA=new ft(ue.comparator);function Fl(...r){let e=SA;for(const n of r)e=e.insert(n.key,n);return e}function IA(r){let e=SA;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Ws(){return Xl()}function bA(){return Xl()}function Xl(){return new aa((r=>r.toString()),((r,e)=>r.isEqual(e)))}const YR=new ft(ue.comparator),KR=new Bt(ue.comparator);function Ve(...r){let e=KR;for(const n of r)e=e.add(n);return e}const QR=new Bt(Oe);function XR(){return QR}/**
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
 */function Sp(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wh(e)?"-0":e}}function wA(r){return{integerValue:""+r}}function WR(r,e){return ER(e)?wA(e):Sp(r,e)}/**
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
 */class $h{constructor(){this._=void 0}}function $R(r,e,n){return r instanceof au?(function(o,u){const f={fields:{[lA]:{stringValue:oA},[cA]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&vp(u)&&(u=Kh(u)),u&&(f.fields[uA]=u),{mapValue:f}})(n,e):r instanceof ou?CA(r,e):r instanceof lu?DA(r,e):(function(o,u){const f=RA(o,u),p=NE(f)+NE(o.Ae);return Wm(f)&&Wm(o.Ae)?wA(p):Sp(o.serializer,p)})(r,e)}function JR(r,e,n){return r instanceof ou?CA(r,e):r instanceof lu?DA(r,e):n}function RA(r,e){return r instanceof Oh?(function(s){return Wm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class au extends $h{}class ou extends $h{constructor(e){super(),this.elements=e}}function CA(r,e){const n=NA(e);for(const s of r.elements)n.some((o=>xi(o,s)))||n.push(s);return{arrayValue:{values:n}}}class lu extends $h{constructor(e){super(),this.elements=e}}function DA(r,e){let n=NA(e);for(const s of r.elements)n=n.filter((o=>!xi(o,s)));return{arrayValue:{values:n}}}class Oh extends $h{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function NE(r){return At(r.integerValue||r.doubleValue)}function NA(r){return Ep(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class ZR{constructor(e,n){this.field=e,this.transform=n}}function eC(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof ou&&o instanceof ou||s instanceof lu&&o instanceof lu?po(s.elements,o.elements,xi):s instanceof Oh&&o instanceof Oh?xi(s.Ae,o.Ae):s instanceof au&&o instanceof au})(r.transform,e.transform)}class tC{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Jh{}function OA(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Zh(r.key,Tn.none()):new vu(r.key,r.data,Tn.none());{const n=r.data,s=En.empty();let o=new Bt(Zt.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new ys(r.key,s,new Vn(o.toArray()),Tn.none())}}function nC(r,e,n){r instanceof vu?(function(o,u,f){const p=o.value.clone(),y=VE(o.fieldTransforms,u,f.transformResults);p.setAll(y),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(r,e,n):r instanceof ys?(function(o,u,f){if(!gh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const p=VE(o.fieldTransforms,u,f.transformResults),y=u.data;y.setAll(VA(o)),y.setAll(p),u.convertToFoundDocument(f.version,y).setHasCommittedMutations()})(r,e,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function Wl(r,e,n,s){return r instanceof vu?(function(u,f,p,y){if(!gh(u.precondition,f))return p;const _=u.value.clone(),T=ME(u.fieldTransforms,y,f);return _.setAll(T),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),null})(r,e,n,s):r instanceof ys?(function(u,f,p,y){if(!gh(u.precondition,f))return p;const _=ME(u.fieldTransforms,y,f),T=f.data;return T.setAll(VA(u)),T.setAll(_),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(r,e,n,s):(function(u,f,p){return gh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p})(r,e,n)}function iC(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=RA(s.transform,o||null);u!=null&&(n===null&&(n=En.empty()),n.set(s.field,u))}return n||null}function OE(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&po(s,o,((u,f)=>eC(u,f)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class vu extends Jh{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ys extends Jh{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function VA(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function VE(r,e,n){const s=new Map;He(r.length===n.length,32656,{Ve:n.length,de:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,p=e.data.field(u.field);s.set(u.field,JR(f,p,n[o]))}return s}function ME(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,$R(u,f,e))}return s}class Zh extends Jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rC extends Jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sC{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&nC(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Wl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Wl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=bA();return this.mutations.forEach((o=>{const u=e.get(o.key),f=u.overlayedDocument;let p=this.applyToLocalView(f,u.mutatedFields);p=n.has(o.key)?null:p;const y=OA(f,p);y!==null&&s.set(o.key,y),f.isValidDocument()||f.convertToNoDocument(ge.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&po(this.mutations,e.mutations,((n,s)=>OE(n,s)))&&po(this.baseMutations,e.baseMutations,((n,s)=>OE(n,s)))}}class Ip{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){He(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return YR})();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Ip(e,n,s,o)}}/**
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
 */class aC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Vt,ke;function lC(r){switch(r){case j.OK:return me(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return me(15467,{code:r})}}function MA(r){if(r===void 0)return hr("GRPC error has no .code"),j.UNKNOWN;switch(r){case Vt.OK:return j.OK;case Vt.CANCELLED:return j.CANCELLED;case Vt.UNKNOWN:return j.UNKNOWN;case Vt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Vt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Vt.INTERNAL:return j.INTERNAL;case Vt.UNAVAILABLE:return j.UNAVAILABLE;case Vt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Vt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Vt.NOT_FOUND:return j.NOT_FOUND;case Vt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Vt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Vt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Vt.ABORTED:return j.ABORTED;case Vt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Vt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Vt.DATA_LOSS:return j.DATA_LOSS;default:return me(39323,{code:r})}}(ke=Vt||(Vt={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function uC(){return new TextEncoder}/**
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
 */const cC=new as([4294967295,4294967295],0);function PE(r){const e=uC().encode(r),n=new QT;return n.update(e),new Uint8Array(n.digest())}function kE(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new as([n,s],0),new as([o,u],0)]}class bp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new jl(`Invalid padding: ${n}`);if(s<0)throw new jl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new jl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new jl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=as.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(as.fromNumber(s)));return o.compare(cC)===1&&(o=new as([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=PE(e),[s,o]=kE(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new bp(u,o,n);return s.forEach((p=>f.insert(p))),f}insert(e){if(this.ge===0)return;const n=PE(e),[s,o]=kE(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class jl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ef{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,Eu.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ef(ge.min(),o,new ft(Oe),fr(),Ve())}}class Eu{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Eu(s,n,Ve(),Ve(),Ve())}}/**
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
 */class yh{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class PA{constructor(e,n){this.targetId=e,this.Ce=n}}class kA{constructor(e,n,s=tn.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class LE{constructor(){this.ve=0,this.Fe=UE(),this.Me=tn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ve(),n=Ve(),s=Ve();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:me(38017,{changeType:u})}})),new Eu(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=UE()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class hC{constructor(e){this.Ge=e,this.ze=new Map,this.je=fr(),this.Je=lh(),this.He=lh(),this.Ze=new ft(Oe)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:me(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(Jm(u))if(s===0){const f=new ue(u.path);this.et(n,f,an.newNoDocument(f,ge.min()))}else He(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const p=this.ut(e),y=p?this.ct(p,e,f):1;if(y!==0){this.it(n);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,_)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,p;try{f=fs(s).toUint8Array()}catch(y){if(y instanceof aA)return ia("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{p=new bp(f,o,u)}catch(y){return ia(y instanceof jl?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return p.ge===0?null:p}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(n,u,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((u,f)=>{const p=this.ot(f);if(p){if(u.current&&Jm(p.target)){const y=new ue(p.target.path);this.Et(y).has(f)||this.It(f,y)||this.et(f,y,an.newNoDocument(y,e))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=Ve();this.He.forEach(((u,f)=>{let p=!0;f.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(e)));const o=new ef(e,n,this.Ze,this.je,s);return this.je=fr(),this.Je=lh(),this.He=lh(),this.Ze=new ft(Oe),o}Ye(e,n){if(!this.rt(e))return;const s=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.It(e,n)?o.Ke(n,1):o.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new LE,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Bt(Oe),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Bt(Oe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new LE),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function lh(){return new ft(ue.comparator)}function UE(){return new ft(ue.comparator)}const fC={asc:"ASCENDING",desc:"DESCENDING"},dC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mC={and:"AND",or:"OR"};class pC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ep(r,e){return r.useProto3Json||Yh(e)?e:{value:e}}function Vh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LA(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function gC(r,e){return Vh(r,e.toTimestamp())}function Li(r){return He(!!r,49232),ge.fromTimestamp((function(n){const s=hs(n);return new it(s.seconds,s.nanos)})(r))}function wp(r,e){return tp(r,e).canonicalString()}function tp(r,e){const n=(function(o){return new Ze(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?n:n.child(e)}function UA(r){const e=Ze.fromString(r);return He(HA(e),10190,{key:e.toString()}),e}function np(r,e){return wp(r.databaseId,e.path)}function Dm(r,e){const n=UA(e);if(n.get(1)!==r.databaseId.projectId)throw new te(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new te(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ue(zA(n))}function xA(r,e){return wp(r.databaseId,e)}function yC(r){const e=UA(r);return e.length===4?Ze.emptyPath():zA(e)}function ip(r){return new Ze(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function zA(r){return He(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function xE(r,e,n){return{name:np(r,e),fields:n.value.mapValue.fields}}function _C(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:me(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,T){return _.useProto3Json?(He(T===void 0||typeof T=="string",58123),tn.fromBase64String(T||"")):(He(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),tn.fromUint8Array(T||new Uint8Array))})(r,e.targetChange.resumeToken),f=e.targetChange.cause,p=f&&(function(_){const T=_.code===void 0?j.UNKNOWN:MA(_.code);return new te(T,_.message||"")})(f);n=new kA(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Dm(r,s.document.name),u=Li(s.document.updateTime),f=s.document.createTime?Li(s.document.createTime):ge.min(),p=new En({mapValue:{fields:s.document.fields}}),y=an.newFoundDocument(o,u,f,p),_=s.targetIds||[],T=s.removedTargetIds||[];n=new yh(_,T,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Dm(r,s.document),u=s.readTime?Li(s.readTime):ge.min(),f=an.newNoDocument(o,u),p=s.removedTargetIds||[];n=new yh([],p,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Dm(r,s.document),u=s.removedTargetIds||[];n=new yh([],u,o,null)}else{if(!("filter"in e))return me(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new oC(o,u),p=s.targetId;n=new PA(p,f)}}return n}function vC(r,e){let n;if(e instanceof vu)n={update:xE(r,e.key,e.value)};else if(e instanceof Zh)n={delete:np(r,e.key)};else if(e instanceof ys)n={update:xE(r,e.key,e.data),updateMask:CC(e.fieldMask)};else{if(!(e instanceof rC))return me(16599,{dt:e.type});n={verify:np(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(u,f){const p=f.transform;if(p instanceof au)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof ou)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof lu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Oh)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw me(20930,{transform:f.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:gC(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:me(27497)})(r,e.precondition)),n}function EC(r,e){return r&&r.length>0?(He(e!==void 0,14353),r.map((n=>(function(o,u){let f=o.updateTime?Li(o.updateTime):Li(u);return f.isEqual(ge.min())&&(f=Li(u)),new tC(f,o.transformResults||[])})(n,e)))):[]}function TC(r,e){return{documents:[xA(r,e.path)]}}function AC(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=xA(r,o);const u=(function(_){if(_.length!==0)return qA(ui.create(_,"and"))})(e.filters);u&&(n.structuredQuery.where=u);const f=(function(_){if(_.length!==0)return _.map((T=>(function(V){return{field:io(V.field),direction:bC(V.dir)}})(T)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const p=ep(r,e.limit);return p!==null&&(n.structuredQuery.limit=p),e.startAt&&(n.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:n,parent:o}}function SC(r){let e=yC(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){He(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];n.where&&(u=(function(S){const V=BA(S);return V instanceof ui&&gA(V)?V.getFilters():[V]})(n.where));let f=[];n.orderBy&&(f=(function(S){return S.map((V=>(function($){return new su(ro($.field),(function(ne){switch(ne){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(V)))})(n.orderBy));let p=null;n.limit&&(p=(function(S){let V;return V=typeof S=="object"?S.value:S,Yh(V)?null:V})(n.limit));let y=null;n.startAt&&(y=(function(S){const V=!!S.before,G=S.values||[];return new Dh(G,V)})(n.startAt));let _=null;return n.endAt&&(_=(function(S){const V=!S.before,G=S.values||[];return new Dh(G,V)})(n.endAt)),zR(e,o,f,u,p,"F",y,_)}function IC(r,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BA(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=ro(n.unaryFilter.field);return Pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ro(n.unaryFilter.field);return Pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ro(n.unaryFilter.field);return Pt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=ro(n.unaryFilter.field);return Pt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Pt.create(ro(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return ui.create(n.compositeFilter.filters.map((s=>BA(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return me(1026)}})(n.compositeFilter.op))})(r):me(30097,{filter:r})}function bC(r){return fC[r]}function wC(r){return dC[r]}function RC(r){return mC[r]}function io(r){return{fieldPath:r.canonicalString()}}function ro(r){return Zt.fromServerFormat(r.fieldPath)}function qA(r){return r instanceof Pt?(function(n){if(n.op==="=="){if(bE(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NAN"}};if(IE(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bE(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NOT_NAN"}};if(IE(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:io(n.field),op:wC(n.op),value:n.value}}})(r):r instanceof ui?(function(n){const s=n.getFilters().map((o=>qA(o)));return s.length===1?s[0]:{compositeFilter:{op:RC(n.op),filters:s}}})(r):me(54877,{filter:r})}function CC(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function HA(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function FA(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class ns{constructor(e,n,s,o,u=ge.min(),f=ge.min(),p=tn.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=y}withSequenceNumber(e){return new ns(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DC{constructor(e){this.yt=e}}function NC(r){const e=SC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Nh(e,e.limit,"L"):e}/**
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
 */class OC{constructor(){this.bn=new VC}addToCollectionParentIndex(e,n){return this.bn.add(n),X.resolve()}getCollectionParents(e,n){return X.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return X.resolve()}deleteFieldIndex(e,n){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,n){return X.resolve()}getDocumentsMatchingTarget(e,n){return X.resolve(null)}getIndexType(e,n){return X.resolve(0)}getFieldIndexes(e,n){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,n){return X.resolve(cs.min())}getMinOffsetFromCollectionGroup(e,n){return X.resolve(cs.min())}updateCollectionGroup(e,n,s){return X.resolve()}updateIndexEntries(e,n){return X.resolve()}}class VC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Bt(Ze.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Bt(Ze.comparator)).toArray()}}/**
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
 */const zE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jA=41943040;class vn{static withCacheSize(e){return new vn(e,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */vn.DEFAULT_COLLECTION_PERCENTILE=10,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vn.DEFAULT=new vn(jA,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vn.DISABLED=new vn(-1,0,0);/**
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
 */class _o{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new _o(0)}static ar(){return new _o(-1)}}/**
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
 */const BE="LruGarbageCollector",MC=1048576;function qE([r,e],[n,s]){const o=Oe(r,n);return o===0?Oe(e,s):o}class PC{constructor(e){this.Pr=e,this.buffer=new Bt(qE),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();qE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kC{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){re(BE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bo(n)?re(BE,"Ignoring IndexedDB error during garbage collection: ",n):await Io(n)}await this.Ar(3e5)}))}}class LC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return X.resolve(Gh.ce);const s=new PC(n);return this.Vr.forEachTarget(e,(o=>s.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Ir(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(zE)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zE):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let s,o,u,f,p,y,_;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(e,o)))).next((S=>(s=S,p=Date.now(),this.removeTargets(e,s,n)))).next((S=>(u=S,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(_=Date.now(),to()<=Ne.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${u} targets in `+(y-p)+`ms
	Removed ${S} documents in `+(_-y)+`ms
Total Duration: ${_-T}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S}))))}}function UC(r,e){return new LC(r,e)}/**
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
 */class xC{constructor(){this.changes=new aa((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,an.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?X.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class BC{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&Wl(s.mutation,o,Vn.empty(),it.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Ve()){const o=Ws();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((u=>{let f=Fl();return u.forEach(((p,y)=>{f=f.insert(p,y.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const s=Ws();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Ve())))}populateOverlays(e,n,s){const o=[];return s.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((f,p)=>{n.set(f,p)}))}))}computeViews(e,n,s,o){let u=fr();const f=Xl(),p=(function(){return Xl()})();return n.forEach(((y,_)=>{const T=s.get(_.key);o.has(_.key)&&(T===void 0||T.mutation instanceof ys)?u=u.insert(_.key,_):T!==void 0?(f.set(_.key,T.mutation.getFieldMask()),Wl(T.mutation,_,T.mutation.getFieldMask(),it.now())):f.set(_.key,Vn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((_,T)=>f.set(_,T))),n.forEach(((_,T)=>p.set(_,new zC(T,f.get(_)??null)))),p)))}recalculateAndSaveOverlays(e,n){const s=Xl();let o=new ft(((f,p)=>f-p)),u=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const p of f)p.keys().forEach((y=>{const _=n.get(y);if(_===null)return;let T=s.get(y)||Vn.empty();T=p.applyToLocalView(_,T),s.set(y,T);const S=(o.get(p.batchId)||Ve()).add(y);o=o.insert(p.batchId,S)}))})).next((()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const y=p.getNext(),_=y.key,T=y.value,S=bA();T.forEach((V=>{if(!u.has(V)){const G=OA(n.get(V),s.get(V));G!==null&&S.set(V,G),u=u.add(V)}})),f.push(this.documentOverlayCache.saveOverlays(e,_,S))}return X.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return BR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):EA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):X.resolve(Ws());let p=tu,y=u;return f.next((_=>X.forEach(_,((T,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),u.get(T)?X.resolve():this.remoteDocumentCache.getEntry(e,T).next((V=>{y=y.insert(T,V)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,y,_,Ve()))).next((T=>({batchId:p,changes:IA(T)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next((s=>{let o=Fl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Fl();return this.indexManager.getCollectionParents(e,u).next((p=>X.forEach(p,(y=>{const _=(function(S,V){return new wo(V,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((T=>{T.forEach(((S,V)=>{f=f.insert(S,V)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o)))).next((f=>{u.forEach(((y,_)=>{const T=_.getKey();f.get(T)===null&&(f=f.insert(T,an.newInvalidDocument(T)))}));let p=Fl();return f.forEach(((y,_)=>{const T=u.get(y);T!==void 0&&Wl(T.mutation,_,Vn.empty(),it.now()),Wh(n,_)&&(p=p.insert(y,_))})),p}))}}/**
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
 */class qC{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return X.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:Li(o.createTime)}})(n)),X.resolve()}getNamedQuery(e,n){return X.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(o){return{name:o.name,query:NC(o.bundledQuery),readTime:Li(o.readTime)}})(n)),X.resolve()}}/**
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
 */class HC{constructor(){this.overlays=new ft(ue.comparator),this.Lr=new Map}getOverlay(e,n){return X.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ws();return X.forEach(n,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,u)=>{this.St(e,n,u)})),X.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),X.resolve()}getOverlaysForCollection(e,n,s){const o=Ws(),u=n.length+1,f=new ue(n.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const y=p.getNext().value,_=y.getKey();if(!n.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return X.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new ft(((_,T)=>_-T));const f=this.overlays.getIterator();for(;f.hasNext();){const _=f.getNext().value;if(_.getKey().getCollectionGroup()===n&&_.largestBatchId>s){let T=u.get(_.largestBatchId);T===null&&(T=Ws(),u=u.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const p=Ws(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,T)=>p.set(_,T))),!(p.size()>=o)););return X.resolve(p)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new aC(n,s));let u=this.Lr.get(n);u===void 0&&(u=Ve(),this.Lr.set(n,u)),this.Lr.set(n,u.add(s.key))}}/**
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
 */class FC{constructor(){this.sessionToken=tn.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,X.resolve()}}/**
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
 */class Rp{constructor(){this.kr=new Bt(jt.qr),this.Kr=new Bt(jt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const s=new jt(e,n);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Wr(new jt(e,n))}Qr(e,n){e.forEach((s=>this.removeReference(s,n)))}Gr(e){const n=new ue(new Ze([])),s=new jt(n,e),o=new jt(n,e+1),u=[];return this.Kr.forEachInRange([s,o],(f=>{this.Wr(f),u.push(f.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new ue(new Ze([])),s=new jt(n,e),o=new jt(n,e+1);let u=Ve();return this.Kr.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(e){const n=new jt(e,0),s=this.kr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class jt{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return ue.comparator(e.key,n.key)||Oe(e.Jr,n.Jr)}static Ur(e,n){return Oe(e.Jr,n.Jr)||ue.comparator(e.key,n.key)}}/**
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
 */class jC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Bt(jt.qr)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new sC(u,n,s,o);this.mutationQueue.push(f);for(const p of o)this.Hr=this.Hr.add(new jt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return X.resolve(f)}lookupMutationBatch(e,n){return X.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Xr(s),u=o<0?0:o;return X.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?_p:this.Yn-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new jt(n,0),o=new jt(n,Number.POSITIVE_INFINITY),u=[];return this.Hr.forEachInRange([s,o],(f=>{const p=this.Zr(f.Jr);u.push(p)})),X.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Bt(Oe);return n.forEach((o=>{const u=new jt(o,0),f=new jt(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([u,f],(p=>{s=s.add(p.Jr)}))})),X.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const f=new jt(new ue(u),0);let p=new Bt(Oe);return this.Hr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(p=p.add(y.Jr)),!0)}),f),X.resolve(this.Yr(p))}Yr(e){const n=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){He(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return X.forEach(n.mutations,(o=>{const u=new jt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,n){const s=new jt(n,0),o=this.Hr.firstAfterOrEqual(s);return X.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GC{constructor(e){this.ti=e,this.docs=(function(){return new ft(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ti(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return X.resolve(s?s.document.mutableCopy():an.newInvalidDocument(n))}getEntries(e,n){let s=fr();return n.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():an.newInvalidDocument(o))})),X.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=fr();const f=n.path,p=new ue(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(p);for(;y.hasNext();){const{key:_,value:{document:T}}=y.getNext();if(!f.isPrefixOf(_.path))break;_.path.length>f.length+1||gR(pR(T),s)<=0||(o.has(T.key)||Wh(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return X.resolve(u)}getAllFromCollectionGroup(e,n,s,o){me(9500)}ni(e,n){return X.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new YC(this)}getSize(e){return X.resolve(this.size)}}class YC extends xC{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),X.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class KC{constructor(e){this.persistence=e,this.ri=new aa((n=>Tp(n)),Ap),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.ii=0,this.si=new Rp,this.targetCount=0,this.oi=_o._r()}forEachTarget(e,n){return this.ri.forEach(((s,o)=>n(o))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ii&&(this.ii=n),X.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new _o(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,X.resolve()}updateTargetData(e,n){return this.lr(n),X.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.ri.forEach(((f,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.ri.delete(f),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),X.waitFor(u).next((()=>o))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,n){const s=this.ri.get(n)||null;return X.resolve(s)}addMatchingKeys(e,n,s){return this.si.$r(n,s),X.resolve()}removeMatchingKeys(e,n,s){this.si.Qr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(e,f))})),X.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),X.resolve()}getMatchingKeysForTargetId(e,n){const s=this.si.jr(n);return X.resolve(s)}containsKey(e,n){return X.resolve(this.si.containsKey(n))}}/**
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
 */class GA{constructor(e,n){this._i={},this.overlays={},this.ai=new Gh(0),this.ui=!1,this.ui=!0,this.ci=new FC,this.referenceDelegate=e(this),this.li=new KC(this),this.indexManager=new OC,this.remoteDocumentCache=(function(o){return new GC(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new DC(n),this.Pi=new qC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this._i[e.toKey()];return s||(s=new jC(n,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,s){re("MemoryPersistence","Starting transaction:",e);const o=new QC(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ei(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ii(e,n){return X.or(Object.values(this._i).map((s=>()=>s.containsKey(e,n))))}}class QC extends _R{constructor(e){super(),this.currentSequenceNumber=e}}class Cp{constructor(e){this.persistence=e,this.Ri=new Rp,this.Ai=null}static Vi(e){return new Cp(e)}get di(){if(this.Ai)return this.Ai;throw me(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.di.delete(s.toString()),X.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.di.add(s.toString()),X.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),X.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.di,(s=>{const o=ue.fromPath(s);return this.mi(e,o).next((u=>{u||n.removeEntry(o,ge.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return X.or([()=>X.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Mh{constructor(e,n){this.persistence=e,this.fi=new aa((s=>TR(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=UC(this,n)}static Vi(e,n){return new Mh(e,n)}Ti(){}Ei(e){return X.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}pr(e){let n=0;return this.mr(e,(s=>{n++})).next((()=>n))}mr(e,n){return X.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?X.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(f=>this.wr(e,f,n).next((p=>{p||(s++,u.removeEntry(f,ge.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),X.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),X.resolve()}removeReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),X.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=mh(e.data.value)),n}wr(e,n,s){return X.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.fi.get(n);return X.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Dp{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Ts=s,this.Es=o}static Is(e,n){let s=Ve(),o=Ve();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Dp(e,n.fromCache,s,o)}}/**
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
 */class XC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class WC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return xb()?8:vR(on())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.gs(e,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ps(e,n,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new XC;return this.ys(e,n,f).next((p=>{if(u.result=p,this.As)return this.ws(e,n,f,p.size)}))})).next((()=>u.result))}ws(e,n,s,o){return s.documentReadCount<this.Vs?(to()<=Ne.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",no(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),X.resolve()):(to()<=Ne.DEBUG&&re("QueryEngine","Query:",no(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(to()<=Ne.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",no(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ki(n))):X.resolve())}gs(e,n){if(DE(n))return X.resolve(null);let s=ki(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Nh(n,null,"F"),s=ki(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const f=Ve(...u);return this.fs.getDocuments(e,f).next((p=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.Ss(n,p);return this.bs(n,_,f,y.readTime)?this.gs(e,Nh(n,null,"F")):this.Ds(e,_,n,y)}))))})))))}ps(e,n,s,o){return DE(n)||o.isEqual(ge.min())?X.resolve(null):this.fs.getDocuments(e,s).next((u=>{const f=this.Ss(n,u);return this.bs(n,f,s,o)?X.resolve(null):(to()<=Ne.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),no(n)),this.Ds(e,f,n,mR(o,tu)).next((p=>p)))}))}Ss(e,n){let s=new Bt(AA(e));return n.forEach(((o,u)=>{Wh(e,u)&&(s=s.add(u))})),s}bs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,n,s){return to()<=Ne.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",no(n)),this.fs.getDocumentsMatchingQuery(e,n,cs.min(),s)}Ds(e,n,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const Np="LocalStore",$C=3e8;class JC{constructor(e,n,s,o){this.persistence=e,this.Cs=n,this.serializer=o,this.vs=new ft(Oe),this.Fs=new aa((u=>Tp(u)),Ap),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function ZC(r,e,n,s){return new JC(r,e,n,s)}async function YA(r,e){const n=ve(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,n.Os(e),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],p=[];let y=Ve();for(const _ of o){f.push(_.batchId);for(const T of _.mutations)y=y.add(T.key)}for(const _ of u){p.push(_.batchId);for(const T of _.mutations)y=y.add(T.key)}return n.localDocuments.getDocuments(s,y).next((_=>({Ns:_,removedBatchIds:f,addedBatchIds:p})))}))}))}function e1(r,e){const n=ve(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=n.xs.newChangeBuffer({trackRemovals:!0});return(function(p,y,_,T){const S=_.batch,V=S.keys();let G=X.resolve();return V.forEach(($=>{G=G.next((()=>T.getEntry(y,$))).next((ie=>{const ne=_.docVersions.get($);He(ne!==null,48541),ie.version.compareTo(ne)<0&&(S.applyToRemoteDocument(ie,_),ie.isValidDocument()&&(ie.setReadTime(_.commitVersion),T.addEntry(ie)))}))})),G.next((()=>p.mutationQueue.removeMutationBatch(y,S)))})(n,s,e,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let y=Ve();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(y=y.add(p.batch.mutations[_].key));return y})(e)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function KA(r){const e=ve(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function t1(r,e){const n=ve(r),s=e.snapshotVersion;let o=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.xs.newChangeBuffer({trackRemovals:!0});o=n.vs;const p=[];e.targetChanges.forEach(((T,S)=>{const V=o.get(S);if(!V)return;p.push(n.li.removeMatchingKeys(u,T.removedDocuments,S).next((()=>n.li.addMatchingKeys(u,T.addedDocuments,S))));let G=V.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?G=G.withResumeToken(tn.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):T.resumeToken.approximateByteSize()>0&&(G=G.withResumeToken(T.resumeToken,s)),o=o.insert(S,G),(function(ie,ne,ye){return ie.resumeToken.approximateByteSize()===0||ne.snapshotVersion.toMicroseconds()-ie.snapshotVersion.toMicroseconds()>=$C?!0:ye.addedDocuments.size+ye.modifiedDocuments.size+ye.removedDocuments.size>0})(V,G,T)&&p.push(n.li.updateTargetData(u,G))}));let y=fr(),_=Ve();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))})),p.push(n1(u,f,e.documentUpdates).next((T=>{y=T.Bs,_=T.Ls}))),!s.isEqual(ge.min())){const T=n.li.getLastRemoteSnapshotVersion(u).next((S=>n.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));p.push(T)}return X.waitFor(p).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(n.vs=o,u)))}function n1(r,e,n){let s=Ve(),o=Ve();return n.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let f=fr();return n.forEach(((p,y)=>{const _=u.get(p);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(p)),y.isNoDocument()&&y.version.isEqual(ge.min())?(e.removeEntry(p,y.readTime),f=f.insert(p,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),f=f.insert(p,y)):re(Np,"Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",y.version)})),{Bs:f,Ls:o}}))}function i1(r,e){const n=ve(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=_p),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function r1(r,e){const n=ve(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.li.getTargetData(s,e).next((u=>u?(o=u,X.resolve(o)):n.li.allocateTargetId(s).next((f=>(o=new ns(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.vs=n.vs.insert(s.targetId,s),n.Fs.set(e,s.targetId)),s}))}async function rp(r,e,n){const s=ve(r),o=s.vs.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!bo(f))throw f;re(Np,`Failed to update sequence numbers for target ${e}: ${f}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function HE(r,e,n){const s=ve(r);let o=ge.min(),u=Ve();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(y,_,T){const S=ve(y),V=S.Fs.get(T);return V!==void 0?X.resolve(S.vs.get(V)):S.li.getTargetData(_,T)})(s,f,ki(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(f,p.targetId).next((y=>{u=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(f,e,n?o:ge.min(),n?u:Ve()))).next((p=>(s1(s,FR(e),p),{documents:p,ks:u})))))}function s1(r,e,n){let s=r.Ms.get(e)||ge.min();n.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Ms.set(e,s)}class FE{constructor(){this.activeTargetIds=XR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a1{constructor(){this.vo=new FE,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,s){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new FE,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class o1{Mo(e){}shutdown(){}}/**
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
 */const jE="ConnectivityMonitor";class GE{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){re(jE,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){re(jE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uh=null;function sp(){return uh===null?uh=(function(){return 268435456+Math.round(2147483648*Math.random())})():uh++,"0x"+uh.toString(16)}/**
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
 */const Nm="RestConnection",l1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class u1{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===Rh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,n,s,o,u){const f=sp(),p=this.Qo(e,n.toUriEncodedString());re(Nm,`Sending RPC '${e}' ${f}:`,p,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(y,o,u);const{host:_}=new URL(p),T=yu(_);return this.zo(e,p,y,s,T).then((S=>(re(Nm,`Received RPC '${e}' ${f}: `,S),S)),(S=>{throw ia(Nm,`RPC '${e}' ${f} failed with error: `,S,"url: ",p,"request:",s),S}))}jo(e,n,s,o,u,f){return this.Wo(e,n,s,o,u)}Go(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+So})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,n){const s=l1[e];let o=`${this.Ko}/v1/${n}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class c1{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const rn="WebChannelConnection",xl=(r,e,n)=>{r.listen(e,(s=>{try{n(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class ao extends u1{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ao.c_){const e=JT();xl(e,$T.STAT_EVENT,(n=>{n.stat===Km.PROXY?re(rn,"STAT_EVENT: detected buffering proxy"):n.stat===Km.NOPROXY&&re(rn,"STAT_EVENT: detected no buffering proxy")})),ao.c_=!0}}zo(e,n,s,o,u){const f=sp();return new Promise(((p,y)=>{const _=new XT;_.setWithCredentials(!0),_.listenOnce(WT.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case dh.NO_ERROR:const S=_.getResponseJson();re(rn,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(S)),p(S);break;case dh.TIMEOUT:re(rn,`RPC '${e}' ${f} timed out`),y(new te(j.DEADLINE_EXCEEDED,"Request time out"));break;case dh.HTTP_ERROR:const V=_.getStatus();if(re(rn,`RPC '${e}' ${f} failed with status:`,V,"response text:",_.getResponseText()),V>0){let G=_.getResponseJson();Array.isArray(G)&&(G=G[0]);const $=G==null?void 0:G.error;if($&&$.status&&$.message){const ie=(function(ye){const be=ye.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(be)>=0?be:j.UNKNOWN})($.status);y(new te(ie,$.message))}else y(new te(j.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new te(j.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:f,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{re(rn,`RPC '${e}' ${f} completed.`)}}));const T=JSON.stringify(o);re(rn,`RPC '${e}' ${f} sending request:`,o),_.send(n,"POST",T,s,15)}))}T_(e,n,s){const o=sp(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=this.createWebChannelTransport(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Go(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const _=u.join("");re(rn,`Creating RPC '${e}' stream ${o}: ${_}`,p);const T=f.createWebChannel(_,p);this.E_(T);let S=!1,V=!1;const G=new c1({Jo:$=>{V?re(rn,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(S||(re(rn,`Opening RPC '${e}' stream ${o} transport.`),T.open(),S=!0),re(rn,`RPC '${e}' stream ${o} sending:`,$),T.send($))},Ho:()=>T.close()});return xl(T,Hl.EventType.OPEN,(()=>{V||(re(rn,`RPC '${e}' stream ${o} transport opened.`),G.i_())})),xl(T,Hl.EventType.CLOSE,(()=>{V||(V=!0,re(rn,`RPC '${e}' stream ${o} transport closed`),G.o_(),this.I_(T))})),xl(T,Hl.EventType.ERROR,($=>{V||(V=!0,ia(rn,`RPC '${e}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),G.o_(new te(j.UNAVAILABLE,"The operation could not be completed")))})),xl(T,Hl.EventType.MESSAGE,($=>{var ie;if(!V){const ne=$.data[0];He(!!ne,16349);const ye=ne,be=(ye==null?void 0:ye.error)||((ie=ye[0])==null?void 0:ie.error);if(be){re(rn,`RPC '${e}' stream ${o} received error:`,be);const Ie=be.status;let et=(function(C){const I=Vt[C];if(I!==void 0)return MA(I)})(Ie),$e=be.message;Ie==="NOT_FOUND"&&$e.includes("database")&&$e.includes("does not exist")&&$e.includes(this.databaseId.database)&&ia(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),et===void 0&&(et=j.INTERNAL,$e="Unknown error status: "+Ie+" with message "+be.message),V=!0,G.o_(new te(et,$e)),T.close()}else re(rn,`RPC '${e}' stream ${o} received:`,ne),G.__(ne)}})),ao.u_(),setTimeout((()=>{G.s_()}),0),G}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,s){super.Go(e,n,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ZT()}}/**
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
 */function h1(r){return new ao(r)}function Om(){return typeof document<"u"?document:null}/**
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
 */function tf(r){return new pC(r,!0)}/**
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
 */ao.c_=!1;class QA{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=n,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const YE="PersistentStream";class XA{constructor(e,n,s,o,u,f,p,y){this.Ci=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new QA(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{e((()=>{const o=new te(j.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,n){const s=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(YE,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(re(YE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class f1 extends XA{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=_C(this.serializer,e),s=(function(u){if(!("targetChange"in u))return ge.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?ge.min():f.readTime?Li(f.readTime):ge.min()})(e);return this.listener.H_(n,s)}Z_(e){const n={};n.database=ip(this.serializer),n.addTarget=(function(u,f){let p;const y=f.target;if(p=Jm(y)?{documents:TC(u,y)}:{query:AC(u,y).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=LA(u,f.resumeToken);const _=ep(u,f.expectedCount);_!==null&&(p.expectedCount=_)}else if(f.snapshotVersion.compareTo(ge.min())>0){p.readTime=Vh(u,f.snapshotVersion.toTimestamp());const _=ep(u,f.expectedCount);_!==null&&(p.expectedCount=_)}return p})(this.serializer,e);const s=IC(this.serializer,e);s&&(n.labels=s),this.q_(n)}X_(e){const n={};n.database=ip(this.serializer),n.removeTarget=e,this.q_(n)}}class d1 extends XA{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=EC(e.writeResults,e.commitTime),s=Li(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=ip(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>vC(this.serializer,s)))};this.q_(n)}}/**
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
 */class m1{}class p1 extends m1{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new te(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Wo(e,tp(n,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(j.UNKNOWN,u.toString())}))}jo(e,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,p])=>this.connection.jo(e,tp(n,s),o,f,p,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new te(j.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function g1(r,e,n,s){return new p1(r,e,n,s)}class y1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(hr(n),this.aa=!1):re("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ra="RemoteStore";class _1{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((f=>{s.enqueueAndForget((async()=>{oa(this)&&(re(ra,"Restarting streams for network reachability change."),await(async function(y){const _=ve(y);_.Ia.add(4),await Tu(_),_.Va.set("Unknown"),_.Ia.delete(4),await nf(_)})(this))}))})),this.Va=new y1(s,o)}}async function nf(r){if(oa(r))for(const e of r.Ra)await e(!0)}async function Tu(r){for(const e of r.Ra)await e(!1)}function WA(r,e){const n=ve(r);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Pp(n)?Mp(n):Ro(n).O_()&&Vp(n,e))}function Op(r,e){const n=ve(r),s=Ro(n);n.Ea.delete(e),s.O_()&&$A(n,e),n.Ea.size===0&&(s.O_()?s.L_():oa(n)&&n.Va.set("Unknown"))}function Vp(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ro(r).Z_(e)}function $A(r,e){r.da.$e(e),Ro(r).X_(e)}function Mp(r){r.da=new hC({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Ro(r).start(),r.Va.ua()}function Pp(r){return oa(r)&&!Ro(r).x_()&&r.Ea.size>0}function oa(r){return ve(r).Ia.size===0}function JA(r){r.da=void 0}async function v1(r){r.Va.set("Online")}async function E1(r){r.Ea.forEach(((e,n)=>{Vp(r,e)}))}async function T1(r,e){JA(r),Pp(r)?(r.Va.ha(e),Mp(r)):r.Va.set("Unknown")}async function A1(r,e,n){if(r.Va.set("Online"),e instanceof kA&&e.state===2&&e.cause)try{await(async function(o,u){const f=u.cause;for(const p of u.targetIds)o.Ea.has(p)&&(await o.remoteSyncer.rejectListen(p,f),o.Ea.delete(p),o.da.removeTarget(p))})(r,e)}catch(s){re(ra,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ph(r,s)}else if(e instanceof yh?r.da.Xe(e):e instanceof PA?r.da.st(e):r.da.tt(e),!n.isEqual(ge.min()))try{const s=await KA(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const p=u.da.Tt(f);return p.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const T=u.Ea.get(_);T&&u.Ea.set(_,T.withResumeToken(y.resumeToken,f))}})),p.targetMismatches.forEach(((y,_)=>{const T=u.Ea.get(y);if(!T)return;u.Ea.set(y,T.withResumeToken(tn.EMPTY_BYTE_STRING,T.snapshotVersion)),$A(u,y);const S=new ns(T.target,y,_,T.sequenceNumber);Vp(u,S)})),u.remoteSyncer.applyRemoteEvent(p)})(r,n)}catch(s){re(ra,"Failed to raise snapshot:",s),await Ph(r,s)}}async function Ph(r,e,n){if(!bo(e))throw e;r.Ia.add(1),await Tu(r),r.Va.set("Offline"),n||(n=()=>KA(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(ra,"Retrying IndexedDB access"),await n(),r.Ia.delete(1),await nf(r)}))}function ZA(r,e){return e().catch((n=>Ph(r,n,e)))}async function rf(r){const e=ve(r),n=ms(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:_p;for(;S1(e);)try{const o=await i1(e.localStore,s);if(o===null){e.Ta.length===0&&n.L_();break}s=o.batchId,I1(e,o)}catch(o){await Ph(e,o)}eS(e)&&tS(e)}function S1(r){return oa(r)&&r.Ta.length<10}function I1(r,e){r.Ta.push(e);const n=ms(r);n.O_()&&n.Y_&&n.ea(e.mutations)}function eS(r){return oa(r)&&!ms(r).x_()&&r.Ta.length>0}function tS(r){ms(r).start()}async function b1(r){ms(r).ra()}async function w1(r){const e=ms(r);for(const n of r.Ta)e.ea(n.mutations)}async function R1(r,e,n){const s=r.Ta.shift(),o=Ip.from(s,e,n);await ZA(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await rf(r)}async function C1(r,e){e&&ms(r).Y_&&await(async function(s,o){if((function(f){return lC(f)&&f!==j.ABORTED})(o.code)){const u=s.Ta.shift();ms(s).B_(),await ZA(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await rf(s)}})(r,e),eS(r)&&tS(r)}async function KE(r,e){const n=ve(r);n.asyncQueue.verifyOperationInProgress(),re(ra,"RemoteStore received new credentials");const s=oa(n);n.Ia.add(3),await Tu(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await nf(n)}async function D1(r,e){const n=ve(r);e?(n.Ia.delete(2),await nf(n)):e||(n.Ia.add(2),await Tu(n),n.Va.set("Unknown"))}function Ro(r){return r.ma||(r.ma=(function(n,s,o){const u=ve(n);return u.sa(),new f1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:v1.bind(null,r),Yo:E1.bind(null,r),t_:T1.bind(null,r),H_:A1.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),Pp(r)?Mp(r):r.Va.set("Unknown")):(await r.ma.stop(),JA(r))}))),r.ma}function ms(r){return r.fa||(r.fa=(function(n,s,o){const u=ve(n);return u.sa(),new d1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:b1.bind(null,r),t_:C1.bind(null,r),ta:w1.bind(null,r),na:R1.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await rf(r)):(await r.fa.stop(),r.Ta.length>0&&(re(ra,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class kp{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,p=new kp(e,n,f,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lp(r,e){if(hr("AsyncQueue",`${e}: ${r}`),bo(r))return new te(j.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class oo{static emptySet(e){return new oo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ue.comparator(n.key,s.key):(n,s)=>ue.comparator(n.key,s.key),this.keyedMap=Fl(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new oo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class QE{constructor(){this.ga=new ft(ue.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):me(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class vo{constructor(e,n,s,o,u,f,p,y,_){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach((p=>{f.push({type:0,doc:p})})),new vo(e,n,oo.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class N1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class O1{constructor(){this.queries=XE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=ve(n),u=o.queries;o.queries=XE(),u.forEach(((f,p)=>{for(const y of p.Sa)y.onError(s)}))})(this,new te(j.ABORTED,"Firestore shutting down"))}}function XE(){return new aa((r=>TA(r)),Xh)}async function Up(r,e){const n=ve(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new N1,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const p=Lp(f,`Initialization of query '${no(e.query)}' failed`);return void e.onError(p)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&zp(n)}async function xp(r,e){const n=ve(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function V1(r,e){const n=ve(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const p of f.Sa)p.Fa(o)&&(s=!0);f.wa=o}}s&&zp(n)}function M1(r,e,n){const s=ve(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(e)}function zp(r){r.Ca.forEach((e=>{e.next()}))}var ap,WE;(WE=ap||(ap={})).Ma="default",WE.Cache="cache";class Bp{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new vo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ap.Cache}}/**
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
 */class nS{constructor(e){this.key=e}}class iS{constructor(e){this.key=e}}class P1{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ve(),this.mutatedKeys=Ve(),this.eu=AA(e),this.tu=new oo(this.eu)}get nu(){return this.Za}ru(e,n){const s=n?n.iu:new QE,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,p=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,S)=>{const V=o.get(T),G=Wh(this.query,S)?S:null,$=!!V&&this.mutatedKeys.has(V.key),ie=!!G&&(G.hasLocalMutations||this.mutatedKeys.has(G.key)&&G.hasCommittedMutations);let ne=!1;V&&G?V.data.isEqual(G.data)?$!==ie&&(s.track({type:3,doc:G}),ne=!0):this.su(V,G)||(s.track({type:2,doc:G}),ne=!0,(y&&this.eu(G,y)>0||_&&this.eu(G,_)<0)&&(p=!0)):!V&&G?(s.track({type:0,doc:G}),ne=!0):V&&!G&&(s.track({type:1,doc:V}),ne=!0,(y||_)&&(p=!0)),ne&&(G?(f=f.add(G),u=ie?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:f,iu:s,bs:p,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((T,S)=>(function(G,$){const ie=ne=>{switch(ne){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Vt:ne})}};return ie(G)-ie($)})(T.type,S.type)||this.eu(T.doc,S.doc))),this.ou(s),o=o??!1;const p=n&&!o?this._u():[],y=this.Ya.size===0&&this.current&&!o?1:0,_=y!==this.Xa;return this.Xa=y,f.length!==0||_?{snapshot:new vo(this.query,e.tu,u,f,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new QE,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Ve(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const n=[];return e.forEach((s=>{this.Ya.has(s)||n.push(new iS(s))})),this.Ya.forEach((s=>{e.has(s)||n.push(new nS(s))})),n}cu(e){this.Za=e.ks,this.Ya=Ve();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return vo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const qp="SyncEngine";class k1{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class L1{constructor(e){this.key=e,this.hu=!1}}class U1{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new aa((p=>TA(p)),Xh),this.Eu=new Map,this.Iu=new Set,this.Ru=new ft(ue.comparator),this.Au=new Map,this.Vu=new Rp,this.du={},this.mu=new Map,this.fu=_o.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function x1(r,e,n=!0){const s=uS(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await rS(s,e,n,!0),o}async function z1(r,e){const n=uS(r);await rS(n,e,!0,!1)}async function rS(r,e,n,s){const o=await r1(r.localStore,ki(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let p;return s&&(p=await B1(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&WA(r.remoteStore,o),p}async function B1(r,e,n,s,o){r.pu=(S,V,G)=>(async function(ie,ne,ye,be){let Ie=ne.view.ru(ye);Ie.bs&&(Ie=await HE(ie.localStore,ne.query,!1).then((({documents:C})=>ne.view.ru(C,Ie))));const et=be&&be.targetChanges.get(ne.targetId),$e=be&&be.targetMismatches.get(ne.targetId)!=null,ze=ne.view.applyChanges(Ie,ie.isPrimaryClient,et,$e);return JE(ie,ne.targetId,ze.au),ze.snapshot})(r,S,V,G);const u=await HE(r.localStore,e,!0),f=new P1(e,u.ks),p=f.ru(u.documents),y=Eu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),_=f.applyChanges(p,r.isPrimaryClient,y);JE(r,n,_.au);const T=new k1(e,n,f);return r.Tu.set(e,T),r.Eu.has(n)?r.Eu.get(n).push(e):r.Eu.set(n,[e]),_.snapshot}async function q1(r,e,n){const s=ve(r),o=s.Tu.get(e),u=s.Eu.get(o.targetId);if(u.length>1)return s.Eu.set(o.targetId,u.filter((f=>!Xh(f,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await rp(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Op(s.remoteStore,o.targetId),op(s,o.targetId)})).catch(Io)):(op(s,o.targetId),await rp(s.localStore,o.targetId,!0))}async function H1(r,e){const n=ve(r),s=n.Tu.get(e),o=n.Eu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Op(n.remoteStore,s.targetId))}async function F1(r,e,n){const s=W1(r);try{const o=await(function(f,p){const y=ve(f),_=it.now(),T=p.reduce(((G,$)=>G.add($.key)),Ve());let S,V;return y.persistence.runTransaction("Locally write mutations","readwrite",(G=>{let $=fr(),ie=Ve();return y.xs.getEntries(G,T).next((ne=>{$=ne,$.forEach(((ye,be)=>{be.isValidDocument()||(ie=ie.add(ye))}))})).next((()=>y.localDocuments.getOverlayedDocuments(G,$))).next((ne=>{S=ne;const ye=[];for(const be of p){const Ie=iC(be,S.get(be.key).overlayedDocument);Ie!=null&&ye.push(new ys(be.key,Ie,dA(Ie.value.mapValue),Tn.exists(!0)))}return y.mutationQueue.addMutationBatch(G,_,ye,p)})).next((ne=>{V=ne;const ye=ne.applyToLocalDocumentSet(S,ie);return y.documentOverlayCache.saveOverlays(G,ne.batchId,ye)}))})).then((()=>({batchId:V.batchId,changes:IA(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(f,p,y){let _=f.du[f.currentUser.toKey()];_||(_=new ft(Oe)),_=_.insert(p,y),f.du[f.currentUser.toKey()]=_})(s,o.batchId,n),await Au(s,o.changes),await rf(s.remoteStore)}catch(o){const u=Lp(o,"Failed to persist write");n.reject(u)}}async function sS(r,e){const n=ve(r);try{const s=await t1(n.localStore,e);e.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(He(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?He(f.hu,14607):o.removedDocuments.size>0&&(He(f.hu,42227),f.hu=!1))})),await Au(n,s,e)}catch(s){await Io(s)}}function $E(r,e,n){const s=ve(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((u,f)=>{const p=f.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(f,p){const y=ve(f);y.onlineState=p;let _=!1;y.queries.forEach(((T,S)=>{for(const V of S.Sa)V.va(p)&&(_=!0)})),_&&zp(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function j1(r,e,n){const s=ve(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new ft(ue.comparator);f=f.insert(u,an.newNoDocument(u,ge.min()));const p=Ve().add(u),y=new ef(ge.min(),new Map,new ft(Oe),f,p);await sS(s,y),s.Ru=s.Ru.remove(u),s.Au.delete(e),Hp(s)}else await rp(s.localStore,e,!1).then((()=>op(s,e,n))).catch(Io)}async function G1(r,e){const n=ve(r),s=e.batch.batchId;try{const o=await e1(n.localStore,e);oS(n,s,null),aS(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Au(n,o)}catch(o){await Io(o)}}async function Y1(r,e,n){const s=ve(r);try{const o=await(function(f,p){const y=ve(f);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let T;return y.mutationQueue.lookupMutationBatch(_,p).next((S=>(He(S!==null,37113),T=S.keys(),y.mutationQueue.removeMutationBatch(_,S)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,T,p))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T))).next((()=>y.localDocuments.getDocuments(_,T)))}))})(s.localStore,e);oS(s,e,n),aS(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Au(s,o)}catch(o){await Io(o)}}function aS(r,e){(r.mu.get(e)||[]).forEach((n=>{n.resolve()})),r.mu.delete(e)}function oS(r,e,n){const s=ve(r);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function op(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Eu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((s=>{r.Vu.containsKey(s)||lS(r,s)}))}function lS(r,e){r.Iu.delete(e.path.canonicalString());const n=r.Ru.get(e);n!==null&&(Op(r.remoteStore,n),r.Ru=r.Ru.remove(e),r.Au.delete(n),Hp(r))}function JE(r,e,n){for(const s of n)s instanceof nS?(r.Vu.addReference(s.key,e),K1(r,s)):s instanceof iS?(re(qp,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,e),r.Vu.containsKey(s.key)||lS(r,s.key)):me(19791,{wu:s})}function K1(r,e){const n=e.key,s=n.path.canonicalString();r.Ru.get(n)||r.Iu.has(s)||(re(qp,"New document in limbo: "+n),r.Iu.add(s),Hp(r))}function Hp(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const n=new ue(Ze.fromString(e)),s=r.fu.next();r.Au.set(s,new L1(n)),r.Ru=r.Ru.insert(n,s),WA(r.remoteStore,new ns(ki(Qh(n.path)),s,"TargetPurposeLimboResolution",Gh.ce))}}async function Au(r,e,n){const s=ve(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((p,y)=>{f.push(s.pu(y,e,n).then((_=>{var T;if((_||n)&&s.isPrimaryClient){const S=_?!_.fromCache:(T=n==null?void 0:n.targetChanges.get(y.targetId))==null?void 0:T.current;s.sharedClientState.updateQueryState(y.targetId,S?"current":"not-current")}if(_){o.push(_);const S=Dp.Is(y.targetId,_);u.push(S)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(y,_){const T=ve(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>X.forEach(_,(V=>X.forEach(V.Ts,(G=>T.persistence.referenceDelegate.addReference(S,V.targetId,G))).next((()=>X.forEach(V.Es,(G=>T.persistence.referenceDelegate.removeReference(S,V.targetId,G)))))))))}catch(S){if(!bo(S))throw S;re(Np,"Failed to update sequence numbers: "+S)}for(const S of _){const V=S.targetId;if(!S.fromCache){const G=T.vs.get(V),$=G.snapshotVersion,ie=G.withLastLimboFreeSnapshotVersion($);T.vs=T.vs.insert(V,ie)}}})(s.localStore,u))}async function Q1(r,e){const n=ve(r);if(!n.currentUser.isEqual(e)){re(qp,"User change. New user:",e.toKey());const s=await YA(n.localStore,e);n.currentUser=e,(function(u,f){u.mu.forEach((p=>{p.forEach((y=>{y.reject(new te(j.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Au(n,s.Ns)}}function X1(r,e){const n=ve(r),s=n.Au.get(e);if(s&&s.hu)return Ve().add(s.key);{let o=Ve();const u=n.Eu.get(e);if(!u)return o;for(const f of u){const p=n.Tu.get(f);o=o.unionWith(p.view.nu)}return o}}function uS(r){const e=ve(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=sS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=X1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=j1.bind(null,e),e.Pu.H_=V1.bind(null,e.eventManager),e.Pu.yu=M1.bind(null,e.eventManager),e}function W1(r){const e=ve(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=G1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Y1.bind(null,e),e}class kh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return ZC(this.persistence,new WC,e.initialUser,this.serializer)}Cu(e){return new GA(Cp.Vi,this.serializer)}Du(e){return new a1}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kh.provider={build:()=>new kh};class $1 extends kh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){He(this.persistence.referenceDelegate instanceof Mh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new kC(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?vn.withCacheSize(this.cacheSizeBytes):vn.DEFAULT;return new GA((s=>Mh.Vi(s,n)),this.serializer)}}class lp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$E(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Q1.bind(null,this.syncEngine),await D1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new O1})()}createDatastore(e){const n=tf(e.databaseInfo.databaseId),s=h1(e.databaseInfo);return g1(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,u,f,p){return new _1(s,o,u,f,p)})(this.localStore,this.datastore,e.asyncQueue,(n=>$E(this.syncEngine,n,0)),(function(){return GE.v()?new GE:new o1})())}createSyncEngine(e,n){return(function(o,u,f,p,y,_,T){const S=new U1(o,u,f,p,y,_);return T&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(o){const u=ve(o);re(ra,"RemoteStore shutting down."),u.Ia.add(5),await Tu(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}lp.provider={build:()=>new lp};/**
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
 */class Fp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const ps="FirestoreClient";class J1{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this._databaseInfo=o,this.user=sn.UNAUTHENTICATED,this.clientId=yp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{re(ps,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(re(ps,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Lp(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Vm(r,e){r.asyncQueue.verifyOperationInProgress(),re(ps,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await YA(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function ZE(r,e){r.asyncQueue.verifyOperationInProgress();const n=await Z1(r);re(ps,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>KE(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>KE(e.remoteStore,o))),r._onlineComponents=e}async function Z1(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(ps,"Using user provided OfflineComponentProvider");try{await Vm(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===j.FAILED_PRECONDITION||o.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;ia("Error using user provided cache. Falling back to memory cache: "+n),await Vm(r,new kh)}}else re(ps,"Using default OfflineComponentProvider"),await Vm(r,new $1(void 0));return r._offlineComponents}async function cS(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(ps,"Using user provided OnlineComponentProvider"),await ZE(r,r._uninitializedComponentsProvider._online)):(re(ps,"Using default OnlineComponentProvider"),await ZE(r,new lp))),r._onlineComponents}function eD(r){return cS(r).then((e=>e.syncEngine))}async function Lh(r){const e=await cS(r),n=e.eventManager;return n.onListen=x1.bind(null,e.syncEngine),n.onUnlisten=q1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=z1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=H1.bind(null,e.syncEngine),n}function tD(r,e,n,s){const o=new Fp(s),u=new Bp(e,o,n);return r.asyncQueue.enqueueAndForget((async()=>Up(await Lh(r),u))),()=>{o.Nu(),r.asyncQueue.enqueueAndForget((async()=>xp(await Lh(r),u)))}}function hS(r,e,n={}){const s=new lr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,p,y,_){const T=new Fp({next:V=>{T.Nu(),f.enqueueAndForget((()=>xp(u,S)));const G=V.docs.has(p);!G&&V.fromCache?_.reject(new te(j.UNAVAILABLE,"Failed to get document because the client is offline.")):G&&V.fromCache&&y&&y.source==="server"?_.reject(new te(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(V)},error:V=>_.reject(V)}),S=new Bp(Qh(p.path),T,{includeMetadataChanges:!0,qa:!0});return Up(u,S)})(await Lh(r),r.asyncQueue,e,n,s))),s.promise}function fS(r,e,n={}){const s=new lr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,p,y,_){const T=new Fp({next:V=>{T.Nu(),f.enqueueAndForget((()=>xp(u,S))),V.fromCache&&y.source==="server"?_.reject(new te(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(V)},error:V=>_.reject(V)}),S=new Bp(p,T,{includeMetadataChanges:!0,qa:!0});return Up(u,S)})(await Lh(r),r.asyncQueue,e,n,s))),s.promise}function nD(r,e){const n=new lr;return r.asyncQueue.enqueueAndForget((async()=>F1(await eD(r),e,n))),n.promise}/**
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
 */function dS(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const iD="ComponentProvider",eT=new Map;function rD(r,e,n,s,o){return new IR(r,e,n,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,dS(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const mS="firestore.googleapis.com",tT=!0;class nT{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mS,this.ssl=tT}else this.host=e.host,this.ssl=e.ssl??tT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<MC)throw new te(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dS(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sf{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new nR;switch(s.type){case"firstParty":return new aR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new te(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=eT.get(n);s&&(re(iD,"Removing Datastore"),eT.delete(n),s.terminate())})(this),Promise.resolve()}}function sD(r,e,n,s={}){var _;r=en(r,sf);const o=yu(e),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${n}`;o&&qT(`https://${p}`),u.host!==mS&&u.host!==p&&ia("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:p,ssl:o,emulatorOptions:s};if(!ea(y,f)&&(r._setSettings(y),s.mockUserToken)){let T,S;if(typeof s.mockUserToken=="string")T=s.mockUserToken,S=sn.MOCK_USER;else{T=Ob(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const V=s.mockUserToken.sub||s.mockUserToken.user_id;if(!V)throw new te(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new sn(V)}r._authCredentials=new iR(new tA(T,S))}}/**
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
 */class zi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new zi(this.firestore,e,this._query)}}class pt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(_u(n,pt._jsonSchema))return new pt(e,s||null,new ue(Ze.fromString(n.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:kt("string",pt._jsonSchemaVersion),referencePath:kt("string")};class os extends zi{constructor(e,n,s){super(e,n,Qh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new ue(e))}withConverter(e){return new os(this.firestore,e,this._path)}}function F2(r,e,...n){if(r=he(r),nA("collection","path",e),r instanceof sf){const s=Ze.fromString(e,...n);return pE(s),new os(r,null,s)}{if(!(r instanceof pt||r instanceof os))throw new te(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ze.fromString(e,...n));return pE(s),new os(r.firestore,null,s)}}function aD(r,e,...n){if(r=he(r),arguments.length===1&&(e=yp.newId()),nA("doc","path",e),r instanceof sf){const s=Ze.fromString(e,...n);return mE(s),new pt(r,null,new ue(s))}{if(!(r instanceof pt||r instanceof os))throw new te(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ze.fromString(e,...n));return mE(s),new pt(r.firestore,r instanceof os?r.converter:null,new ue(s))}}/**
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
 */const iT="AsyncQueue";class rT{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new QA(this,"async_queue_retry"),this._c=()=>{const s=Om();s&&re(iT,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Om();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Om();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new lr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!bo(e))throw e;re(iT,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,hr("INTERNAL UNHANDLED ERROR: ",sT(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=kp.createAndSchedule(this,e,n,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&me(47125,{Pc:sT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function sT(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class ci extends sf{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new rT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rT(e),this._firestoreClient=void 0,await e}}}function oD(r,e){const n=typeof r=="object"?r:GT(),s=typeof r=="string"?r:e||Rh,o=pp(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Db("firestore");u&&sD(o,...u)}return o}function la(r){if(r._terminated)throw new te(j.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||lD(r),r._firestoreClient}function lD(r){var s,o,u,f;const e=r._freezeSettings(),n=rD(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(o=r._app)==null?void 0:o.options.apiKey,e);r._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((f=e.localCache)!=null&&f._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new J1(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(y){const _=y==null?void 0:y._online.build();return{_offline:y==null?void 0:y._offline.build(_),_online:_}})(r._componentsProvider))}/**
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
 */class Yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yn(tn.fromBase64String(e))}catch(n){throw new te(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yn(tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_u(e,Yn._jsonSchema))return Yn.fromBase64String(e.bytes)}}Yn._jsonSchemaVersion="firestore/bytes/1.0",Yn._jsonSchema={type:kt("string",Yn._jsonSchemaVersion),bytes:kt("string")};/**
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
 */class jp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class af{constructor(e){this._methodName=e}}/**
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
 */class Ui{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ui._jsonSchemaVersion}}static fromJSON(e){if(_u(e,Ui._jsonSchema))return new Ui(e.latitude,e.longitude)}}Ui._jsonSchemaVersion="firestore/geoPoint/1.0",Ui._jsonSchema={type:kt("string",Ui._jsonSchemaVersion),latitude:kt("number"),longitude:kt("number")};/**
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
 */class li{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:li._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_u(e,li._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new li(e.vectorValues);throw new te(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}li._jsonSchemaVersion="firestore/vectorValue/1.0",li._jsonSchema={type:kt("string",li._jsonSchemaVersion),vectorValues:kt("object")};/**
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
 */const uD=/^__.*__$/;class cD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,n,this.fieldTransforms):new vu(e,this.data,n,this.fieldTransforms)}}class pS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ys(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gS(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{dataSource:r})}}class Gp{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Gp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const n=(o=this.path)==null?void 0:o.child(e),s=this.i({path:n,arrayElement:!1});return s.mc(e),s}fc(e){var o;const n=(o=this.path)==null?void 0:o.child(e),s=this.i({path:n,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Uh(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(gS(this.dataSource)&&uD.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class hD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||tf(e)}I(e,n,s,o=!1){return new Gp({dataSource:e,methodName:n,targetDoc:s,path:Zt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function of(r){const e=r._freezeSettings(),n=tf(r._databaseId);return new hD(r._databaseId,!!e.ignoreUndefinedProperties,n)}function Yp(r,e,n,s,o,u={}){const f=r.I(u.merge||u.mergeFields?2:0,e,n,o);Qp("Data must be an object, but it was:",f,s);const p=yS(s,f);let y,_;if(u.merge)y=new Vn(f.fieldMask),_=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const S of u.mergeFields){const V=Eo(e,S,n);if(!f.contains(V))throw new te(j.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);ES(T,V)||T.push(V)}y=new Vn(T),_=f.fieldTransforms.filter((S=>y.covers(S.field)))}else y=null,_=f.fieldTransforms;return new cD(new En(p),y,_)}class lf extends af{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lf}}class Kp extends af{_toFieldTransform(e){return new ZR(e.path,new au)}isEqual(e){return e instanceof Kp}}function fD(r,e,n,s){const o=r.I(1,e,n);Qp("Data must be an object, but it was:",o,s);const u=[],f=En.empty();gs(s,((y,_)=>{const T=vS(e,y,n);_=he(_);const S=o.fc(T);if(_ instanceof lf)u.push(T);else{const V=Su(_,S);V!=null&&(u.push(T),f.set(T,V))}}));const p=new Vn(u);return new pS(f,p,o.fieldTransforms)}function dD(r,e,n,s,o,u){const f=r.I(1,e,n),p=[Eo(e,s,n)],y=[o];if(u.length%2!=0)throw new te(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let V=0;V<u.length;V+=2)p.push(Eo(e,u[V])),y.push(u[V+1]);const _=[],T=En.empty();for(let V=p.length-1;V>=0;--V)if(!ES(_,p[V])){const G=p[V];let $=y[V];$=he($);const ie=f.fc(G);if($ instanceof lf)_.push(G);else{const ne=Su($,ie);ne!=null&&(_.push(G),T.set(G,ne))}}const S=new Vn(_);return new pS(T,S,f.fieldTransforms)}function mD(r,e,n,s=!1){return Su(n,r.I(s?4:3,e))}function Su(r,e){if(_S(r=he(r)))return Qp("Unsupported field value:",e,r),yS(r,e);if(r instanceof af)return(function(s,o){if(!gS(o.dataSource))throw o.yc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(s,o){const u=[];let f=0;for(const p of s){let y=Su(p,o.gc(f));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),f++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=he(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return WR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=it.fromDate(s);return{timestampValue:Vh(o.serializer,u)}}if(s instanceof it){const u=new it(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Vh(o.serializer,u)}}if(s instanceof Ui)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Yn)return{bytesValue:LA(o.serializer,s._byteString)};if(s instanceof pt){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.yc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:wp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof li)return(function(f,p){const y=f instanceof li?f.toArray():f;return{mapValue:{fields:{[hA]:{stringValue:fA},[Ch]:{arrayValue:{values:y.map((T=>{if(typeof T!="number")throw p.yc("VectorValues must only contain numeric values.");return Sp(p.serializer,T)}))}}}}}})(s,o);if(FA(s))return s._toProto(o.serializer);throw o.yc(`Unsupported field value: ${jh(s)}`)})(r,e)}function yS(r,e){const n={};return sA(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(r,((s,o)=>{const u=Su(o,e.dc(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function _S(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof it||r instanceof Ui||r instanceof Yn||r instanceof pt||r instanceof af||r instanceof li||FA(r))}function Qp(r,e,n){if(!_S(n)||!iA(n)){const s=jh(n);throw s==="an object"?e.yc(r+" a custom object"):e.yc(r+" "+s)}}function Eo(r,e,n){if((e=he(e))instanceof jp)return e._internalPath;if(typeof e=="string")return vS(r,e);throw Uh("Field path arguments must be of type string or ",r,!1,void 0,n)}const pD=new RegExp("[~\\*/\\[\\]]");function vS(r,e,n){if(e.search(pD)>=0)throw Uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new jp(...e.split("."))._internalPath}catch{throw Uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Uh(r,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let p=`Function ${e}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let y="";return(u||f)&&(y+=" (found",u&&(y+=` in field ${s}`),f&&(y+=` in document ${o}`),y+=")"),new te(j.INVALID_ARGUMENT,p+r+y)}function ES(r,e){return r.some((n=>n.isEqual(e)))}/**
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
 */class gD{convertValue(e,n="none"){switch(ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return At(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return gs(e,((o,u)=>{s[o]=this.convertValue(u,n)})),s}convertVectorValue(e){var s,o,u;const n=(u=(o=(s=e.fields)==null?void 0:s[Ch].arrayValue)==null?void 0:o.values)==null?void 0:u.map((f=>At(f.doubleValue)));return new li(n)}convertGeoPoint(e){return new Ui(At(e.latitude),At(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Kh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(nu(e));default:return null}}convertTimestamp(e){const n=hs(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ze.fromString(e);He(HA(s),9688,{name:e});const o=new iu(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(n)||hr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */class uf extends gD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function j2(){return new Kp("serverTimestamp")}const aT="@firebase/firestore",oT="4.14.0";/**
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
 */function lT(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(r,["next","error","complete"])}/**
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
 */class TS{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Eo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yD extends TS{data(){return super.data()}}/**
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
 */function AS(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new te(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xp{}class Wp extends Xp{}function G2(r,e,...n){let s=[];e instanceof Xp&&s.push(e),s=s.concat(n),(function(u){const f=u.filter((y=>y instanceof Jp)).length,p=u.filter((y=>y instanceof $p)).length;if(f>1||f>0&&p>0)throw new te(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class $p extends Wp{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new $p(e,n,s)}_apply(e){const n=this._parse(e);return SS(e._query,n),new zi(e.firestore,e.converter,Zm(e._query,n))}_parse(e){const n=of(e.firestore);return(function(u,f,p,y,_,T,S){let V;if(_.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new te(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){cT(S,T);const $=[];for(const ie of S)$.push(uT(y,u,ie));V={arrayValue:{values:$}}}else V=uT(y,u,S)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||cT(S,T),V=mD(p,f,S,T==="in"||T==="not-in");return Pt.create(_,T,V)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Jp extends Xp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Jp(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:ui.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(o,u){let f=o;const p=u.getFlattenedFilters();for(const y of p)SS(f,y),f=Zm(f,y)})(e._query,n),new zi(e.firestore,e.converter,Zm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zp extends Wp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Zp(e,n)}_apply(e){const n=(function(o,u,f){if(o.startAt!==null)throw new te(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new te(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new su(u,f)})(e._query,this._field,this._direction);return new zi(e.firestore,e.converter,HR(e._query,n))}}function Y2(r,e="asc"){const n=e,s=Eo("orderBy",r);return Zp._create(s,n)}class eg extends Wp{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new eg(e,n,s)}_apply(e){return new zi(e.firestore,e.converter,Nh(e._query,this._limit,this._limitType))}}function K2(r){return dR("limit",r),eg._create("limit",r,"F")}function uT(r,e,n){if(typeof(n=he(n))=="string"){if(n==="")throw new te(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!EA(e)&&n.indexOf("/")!==-1)throw new te(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ze.fromString(n));if(!ue.isDocumentKey(s))throw new te(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return SE(r,new ue(s))}if(n instanceof pt)return SE(r,n._key);throw new te(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jh(n)}.`)}function cT(r,e){if(!Array.isArray(r)||r.length===0)throw new te(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function SS(r,e){const n=(function(o,u){for(const f of o)for(const p of f.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new te(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function tg(r,e,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(e,n):r.toFirestore(e):e,s}class Gl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Js extends TS{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _h(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Eo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Js._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Js._jsonSchemaVersion="firestore/documentSnapshot/1.0",Js._jsonSchema={type:kt("string",Js._jsonSchemaVersion),bundleSource:kt("string","DocumentSnapshot"),bundleName:kt("string"),bundle:kt("string")};class _h extends Js{data(e={}){return super.data(e)}}class ls{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Gl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new _h(this._firestore,this._userDataWriter,s.key,s,new Gl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((p=>{const y=new _h(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Gl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const y=new _h(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Gl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,T=-1;return p.type!==0&&(_=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),T=f.indexOf(p.doc.key)),{type:_D(p.type),doc:y,oldIndex:_,newIndex:T}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ls._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _D(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:r})}}/**
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
 */ls._jsonSchemaVersion="firestore/querySnapshot/1.0",ls._jsonSchema={type:kt("string",ls._jsonSchemaVersion),bundleSource:kt("string","QuerySnapshot"),bundleName:kt("string"),bundle:kt("string")};/**
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
 */class vD{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=of(e)}set(e,n,s){this._verifyNotCommitted();const o=Mm(e,this._firestore),u=tg(o.converter,n,s),f=Yp(this._dataReader,"WriteBatch.set",o._key,u,o.converter!==null,s);return this._mutations.push(f.toMutation(o._key,Tn.none())),this}update(e,n,s,...o){this._verifyNotCommitted();const u=Mm(e,this._firestore);let f;return f=typeof(n=he(n))=="string"||n instanceof jp?dD(this._dataReader,"WriteBatch.update",u._key,n,s,o):fD(this._dataReader,"WriteBatch.update",u._key,n),this._mutations.push(f.toMutation(u._key,Tn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Mm(e,this._firestore);return this._mutations=this._mutations.concat(new Zh(n._key,Tn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(j.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Mm(r,e){if((r=he(r)).firestore!==e)throw new te(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function Q2(r){r=en(r,pt);const e=en(r.firestore,ci),n=la(e);return hS(n,r._key).then((s=>ng(e,r,s)))}function X2(r){r=en(r,pt);const e=en(r.firestore,ci),n=la(e);return hS(n,r._key,{source:"server"}).then((s=>ng(e,r,s)))}function W2(r){r=en(r,zi);const e=en(r.firestore,ci),n=la(e),s=new uf(e);return AS(r._query),fS(n,r._query).then((o=>new ls(e,s,r,o)))}function $2(r){r=en(r,zi);const e=en(r.firestore,ci),n=la(e),s=new uf(e);return fS(n,r._query,{source:"server"}).then((o=>new ls(e,s,r,o)))}function J2(r,e,n){r=en(r,pt);const s=en(r.firestore,ci),o=tg(r.converter,e,n),u=of(s);return cf(s,[Yp(u,"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Tn.none())])}function Z2(r){return cf(en(r.firestore,ci),[new Zh(r._key,Tn.none())])}function eV(r,e){const n=en(r.firestore,ci),s=aD(r),o=tg(r.converter,e),u=of(r.firestore);return cf(n,[Yp(u,"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Tn.exists(!1))]).then((()=>s))}function tV(r,...e){var _,T,S;r=he(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||lT(e[s])||(n=e[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(lT(e[s])){const V=e[s];e[s]=(_=V.next)==null?void 0:_.bind(V),e[s+1]=(T=V.error)==null?void 0:T.bind(V),e[s+2]=(S=V.complete)==null?void 0:S.bind(V)}let u,f,p;if(r instanceof pt)f=en(r.firestore,ci),p=Qh(r._key.path),u={next:V=>{e[s]&&e[s](ng(f,r,V))},error:e[s+1],complete:e[s+2]};else{const V=en(r,zi);f=en(V.firestore,ci),p=V._query;const G=new uf(f);u={next:$=>{e[s]&&e[s](new ls(f,G,V,$))},error:e[s+1],complete:e[s+2]},AS(r._query)}const y=la(f);return tD(y,p,o,u)}function cf(r,e){const n=la(r);return nD(n,e)}function ng(r,e,n){const s=n.docs.get(e._key),o=new uf(r);return new Js(r,o,e._key,s,new Gl(n.hasPendingWrites,n.fromCache),e.converter)}function nV(r){return r=en(r,ci),la(r),new vD(r,(e=>cf(r,e)))}(function(e,n=!0){tR(Ao),mo(new ta("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),p=new ci(new rR(s.getProvider("auth-internal")),new oR(f,s.getProvider("app-check-internal")),bR(f,o),f);return u={useFetchStreams:n,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),ss(aT,oT,e),ss(aT,oT,"esm2020")})();var ED="firebase",TD="12.12.0";/**
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
 */ss(ED,TD,"app");/**
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
 */const iV={PHONE:"phone",TOTP:"totp"},rV={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},sV={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},aV={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},oV={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function AD(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function IS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lV=AD,SD=IS,bS=new gu("auth","Firebase",IS()),uV={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
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
 */const xh=new dp("@firebase/auth");function ID(r,...e){xh.logLevel<=Ne.WARN&&xh.warn(`Auth (${Ao}): ${r}`,...e)}function vh(r,...e){xh.logLevel<=Ne.ERROR&&xh.error(`Auth (${Ao}): ${r}`,...e)}/**
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
 */function An(r,...e){throw rg(r,...e)}function hn(r,...e){return rg(r,...e)}function ig(r,e,n){const s={...SD(),[e]:n};return new gu("auth","Firebase",s).create(e,{appName:r.name})}function Gt(r){return ig(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Co(r,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&An(r,"argument-error"),ig(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rg(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return bS.create(r,...e)}function W(r,e,...n){if(!r)throw rg(e,...n)}function Pi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw vh(e),new Error(e)}function dr(r,e){r||Pi(e)}/**
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
 */function uu(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function sg(){return hT()==="http:"||hT()==="https:"}function hT(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function bD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sg()||kb()||"connection"in navigator)?navigator.onLine:!0}function wD(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Iu{constructor(e,n){this.shortDelay=e,this.longDelay=n,dr(n>e,"Short delay should be less than long delay!"),this.isMobile=Vb()||Lb()}get(){return bD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ag(r,e){dr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wS{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const RD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const CD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],DD=new Iu(3e4,6e4);function rt(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function st(r,e,n,s,o={}){return RS(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const p=To({key:r.config.apiKey,...f}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:y,...u};return Pb()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&yu(r.emulatorConfig.host)&&(_.credentials="include"),wS.fetch()(await CS(r,r.config.apiHost,n,p),_)})}async function RS(r,e,n){r._canInitEmulator=!1;const s={...RD,...e};try{const o=new OD(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Yl(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[y,_]=p.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yl(r,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw Yl(r,"email-already-in-use",f);if(y==="USER_DISABLED")throw Yl(r,"user-disabled",f);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw ig(r,T,_);An(r,T)}}catch(o){if(o instanceof gr)throw o;An(r,"network-request-failed",{message:String(o)})}}async function yr(r,e,n,s,o={}){const u=await st(r,e,n,s,o);return"mfaPendingCredential"in u&&An(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function CS(r,e,n,s){const o=`${e}${n}?${s}`,u=r,f=u.config.emulator?ag(r.config,o):`${r.config.apiScheme}://${o}`;return CD.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function ND(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(hn(this.auth,"network-request-failed")),DD.get())})}}function Yl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=hn(r,e,s);return o.customData._tokenResponse=n,o}/**
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
 */function fT(r){return r!==void 0&&r.getResponse!==void 0}function dT(r){return r!==void 0&&r.enterprise!==void 0}class DS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ND(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function VD(r){return(await st(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function NS(r,e){return st(r,"GET","/v2/recaptchaConfig",rt(r,e))}/**
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
 */async function MD(r,e){return st(r,"POST","/v1/accounts:delete",e)}async function PD(r,e){return st(r,"POST","/v1/accounts:update",e)}async function zh(r,e){return st(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function $l(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function cV(r,e=!1){return he(r).getIdToken(e)}async function kD(r,e=!1){const n=he(r),s=await n.getIdToken(e),o=hf(s);W(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:$l(Pm(o.auth_time)),issuedAtTime:$l(Pm(o.iat)),expirationTime:$l(Pm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Pm(r){return Number(r)*1e3}function hf(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return vh("JWT malformed, contained fewer than 3 sections"),null;try{const o=UT(n);return o?JSON.parse(o):(vh("Failed to decode base64 JWT payload"),null)}catch(o){return vh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function mT(r){const e=hf(r);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mr(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof gr&&LD(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function LD({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class UD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class up{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$l(this.lastLoginAt),this.creationTime=$l(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cu(r){var S;const e=r.auth,n=await r.getIdToken(),s=await mr(r,zh(e,{idToken:n}));W(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(S=o.providerUserInfo)!=null&&S.length?OS(o.providerUserInfo):[],f=zD(r.providerData,u),p=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!(f!=null&&f.length),_=p?y:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new up(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,T)}async function xD(r){const e=he(r);await cu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zD(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function OS(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function BD(r,e){const n=await RS(r,{},async()=>{const s=To({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await CS(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:p,body:s};return r.emulatorConfig&&yu(r.emulatorConfig.host)&&(y.credentials="include"),wS.fetch()(f,y)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qD(r,e){return st(r,"POST","/v2/accounts:revokeToken",rt(r,e))}/**
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
 */class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=mT(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await BD(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new lo;return s&&(W(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(W(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(W(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return Pi("not implemented")}}/**
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
 */function Jr(r,e){W(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ai{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new UD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new up(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await mr(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kD(this,e)}reload(){return xD(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ai({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await cu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(Gt(this.auth));const e=await this.getIdToken();return await mr(this,MD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,p=n.tenantId??void 0,y=n._redirectEventId??void 0,_=n.createdAt??void 0,T=n.lastLoginAt??void 0,{uid:S,emailVerified:V,isAnonymous:G,providerData:$,stsTokenManager:ie}=n;W(S&&ie,e,"internal-error");const ne=lo.fromJSON(this.name,ie);W(typeof S=="string",e,"internal-error"),Jr(s,e.name),Jr(o,e.name),W(typeof V=="boolean",e,"internal-error"),W(typeof G=="boolean",e,"internal-error"),Jr(u,e.name),Jr(f,e.name),Jr(p,e.name),Jr(y,e.name),Jr(_,e.name),Jr(T,e.name);const ye=new ai({uid:S,auth:e,email:o,emailVerified:V,displayName:s,isAnonymous:G,photoURL:f,phoneNumber:u,tenantId:p,stsTokenManager:ne,createdAt:_,lastLoginAt:T});return $&&Array.isArray($)&&(ye.providerData=$.map(be=>({...be}))),y&&(ye._redirectEventId=y),ye}static async _fromIdTokenResponse(e,n,s=!1){const o=new lo;o.updateFromServerResponse(n);const u=new ai({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await cu(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];W(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?OS(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new lo;p.updateFromIdToken(s);const y=new ai({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:f}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new up(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
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
 */const pT=new Map;function ar(r){dr(r instanceof Function,"Expected a class definition");let e=pT.get(r);return e?(dr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,pT.set(r,e),e)}/**
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
 */class VS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}VS.type="NONE";const gT=VS;/**
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
 */function Eh(r,e,n){return`firebase:${r}:${e}:${n}`}class uo{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Eh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Eh("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await zh(this.auth,{idToken:e}).catch(()=>{});return n?ai._fromGetAccountInfoResponse(this.auth,n,e):null}return ai._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new uo(ar(gT),e,s);const o=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||ar(gT);const f=Eh(s,e.config.apiKey,e.name);let p=null;for(const _ of n)try{const T=await _._get(f);if(T){let S;if(typeof T=="string"){const V=await zh(e,{idToken:T}).catch(()=>{});if(!V)break;S=await ai._fromGetAccountInfoResponse(e,V,T)}else S=ai._fromJSON(e,T);_!==u&&(p=S),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new uo(u,e,s):(u=y[0],p&&await u._set(f,p.toJSON()),await Promise.all(n.map(async _=>{if(_!==u)try{await _._remove(f)}catch{}})),new uo(u,e,s))}}/**
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
 */function yT(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(MS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xS(e))return"Blackberry";if(zS(e))return"Webos";if(PS(e))return"Safari";if((e.includes("chrome/")||kS(e))&&!e.includes("edge/"))return"Chrome";if(US(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function MS(r=on()){return/firefox\//i.test(r)}function PS(r=on()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kS(r=on()){return/crios\//i.test(r)}function LS(r=on()){return/iemobile/i.test(r)}function US(r=on()){return/android/i.test(r)}function xS(r=on()){return/blackberry/i.test(r)}function zS(r=on()){return/webos/i.test(r)}function og(r=on()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function HD(r=on()){var e;return og(r)&&!!((e=window.navigator)!=null&&e.standalone)}function FD(){return Ub()&&document.documentMode===10}function BS(r=on()){return og(r)||US(r)||zS(r)||xS(r)||/windows phone/i.test(r)||LS(r)}/**
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
 */function qS(r,e=[]){let n;switch(r){case"Browser":n=yT(on());break;case"Worker":n=`${yT(on())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ao}/${s}`}/**
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
 */class jD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,p)=>{try{const y=e(u);f(y)}catch(y){p(y)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function GD(r,e={}){return st(r,"GET","/v2/passwordPolicy",rt(r,e))}/**
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
 */const YD=6;class KD{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??YD,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class QD{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _T(this),this.idTokenSubscription=new _T(this),this.beforeStateQueue=new jD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ar(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zh(this,{idToken:e}),s=await ai._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(ht(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!f||f===p)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ht(this.app))return Promise.reject(Gt(this));const n=e?he(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ht(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GD(this),n=new KD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gu("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await qD(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ar(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const y=e.addObserver(n,s,o);return()=>{f=!0,y()}}else{const y=e.addObserver(n);return()=>{f=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ID(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gt(r){return he(r)}class _T{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gb(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XD(r){bu=r}function lg(r){return bu.loadJS(r)}function WD(){return bu.recaptchaV2Script}function $D(){return bu.recaptchaEnterpriseScript}function JD(){return bu.gapiScript}function HS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */const ZD=500,eN=6e4,ch=1e12;class tN{constructor(e){this.auth=e,this.counter=ch,this._widgets=new Map}render(e,n){const s=this.counter;return this._widgets.set(s,new rN(e,this.auth.name,n||{})),this.counter++,s}reset(e){var s;const n=e||ch;(s=this._widgets.get(n))==null||s.delete(),this._widgets.delete(n)}getResponse(e){var s;const n=e||ch;return((s=this._widgets.get(n))==null?void 0:s.getResponse())||""}async execute(e){var s;const n=e||ch;return(s=this._widgets.get(n))==null||s.execute(),""}}class nN{constructor(){this.enterprise=new iN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class iN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class rN{constructor(e,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;W(o,"argument-error",{appName:n}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=sN(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},eN)},ZD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function sN(r){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<r;s++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const aN="recaptcha-enterprise",Jl="NO_RECAPTCHA";class FS{constructor(e){this.type=aN,this.auth=gt(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,p)=>{NS(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const _=new DS(y);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,f(_.siteKey)}}).catch(y=>{p(y)})})}function o(u,f,p){const y=window.grecaptcha;dT(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(_=>{f(_)}).catch(()=>{f(Jl)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nN().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(p=>{if(!n&&dT(window.grecaptcha))o(p,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let y=$D();y.length!==0&&(y+=p),lg(y).then(()=>{o(p,u,f)}).catch(_=>{f(_)})}}).catch(p=>{f(p)})})}}async function zl(r,e,n,s=!1,o=!1){const u=new FS(r);let f;if(o)f=Jl;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const p={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const y=p.phoneEnrollmentInfo.phoneNumber,_=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const y=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function us(r,e,n,s,o){var u,f;if(o==="EMAIL_PASSWORD_PROVIDER")if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const p=await zl(r,e,n,n==="getOobCode");return s(r,p)}else return s(r,e).catch(async p=>{if(p.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const y=await zl(r,e,n,n==="getOobCode");return s(r,y)}else return Promise.reject(p)});else if(o==="PHONE_PROVIDER")if((f=r._getRecaptchaConfig())!=null&&f.isProviderEnabled("PHONE_PROVIDER")){const p=await zl(r,e,n);return s(r,p).catch(async y=>{var _;if(((_=r._getRecaptchaConfig())==null?void 0:_.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(y.code==="auth/missing-recaptcha-token"||y.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const T=await zl(r,e,n,!1,!0);return s(r,T)}return Promise.reject(y)})}else{const p=await zl(r,e,n,!1,!0);return s(r,p)}else return Promise.reject(o+" provider is not supported.")}async function jS(r){const e=gt(r),n=await NS(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new DS(n);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isAnyProviderEnabled()&&new FS(e).verify()}/**
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
 */function oN(r,e){const n=pp(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ea(u,e??{}))return o;An(o,"already-initialized")}return n.initialize({options:e})}function lN(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ar);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function uN(r,e,n){const s=gt(r);W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!!(n!=null&&n.disableWarnings),u=GS(e),{host:f,port:p}=cN(e),y=p===null?"":`:${p}`,_={url:`${u}//${f}${y}/`},T=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){W(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),W(ea(_,s.config.emulator)&&ea(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,yu(f)?qT(`${u}//${f}${y}`):o||hN()}function GS(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function cN(r){const e=GS(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:vT(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:vT(f)}}}function vT(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function hN(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class wu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pi("not implemented")}_getIdTokenResponse(e){return Pi("not implemented")}_linkToIdToken(e,n){return Pi("not implemented")}_getReauthenticationResolver(e){return Pi("not implemented")}}/**
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
 */async function YS(r,e){return st(r,"POST","/v1/accounts:resetPassword",rt(r,e))}async function fN(r,e){return st(r,"POST","/v1/accounts:update",e)}async function dN(r,e){return st(r,"POST","/v1/accounts:signUp",e)}async function mN(r,e){return st(r,"POST","/v1/accounts:update",rt(r,e))}/**
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
 */async function pN(r,e){return yr(r,"POST","/v1/accounts:signInWithPassword",rt(r,e))}async function ff(r,e){return st(r,"POST","/v1/accounts:sendOobCode",rt(r,e))}async function gN(r,e){return ff(r,e)}async function yN(r,e){return ff(r,e)}async function _N(r,e){return ff(r,e)}async function vN(r,e){return ff(r,e)}/**
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
 */async function EN(r,e){return yr(r,"POST","/v1/accounts:signInWithEmailLink",rt(r,e))}async function TN(r,e){return yr(r,"POST","/v1/accounts:signInWithEmailLink",rt(r,e))}/**
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
 */class hu extends wu{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new hu(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new hu(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return us(e,n,"signInWithPassword",pN,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return EN(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return us(e,s,"signUpPassword",dN,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return TN(e,{idToken:n,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ur(r,e){return yr(r,"POST","/v1/accounts:signInWithIdp",rt(r,e))}/**
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
 */const AN="http://localhost";class pr extends wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new pr(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return ur(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ur(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ur(e,n)}buildRequest(){const e={requestUri:AN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=To(n)}return e}}/**
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
 */async function ET(r,e){return st(r,"POST","/v1/accounts:sendVerificationCode",rt(r,e))}async function SN(r,e){return yr(r,"POST","/v1/accounts:signInWithPhoneNumber",rt(r,e))}async function IN(r,e){const n=await yr(r,"POST","/v1/accounts:signInWithPhoneNumber",rt(r,e));if(n.temporaryProof)throw Yl(r,"account-exists-with-different-credential",n);return n}const bN={USER_NOT_FOUND:"user-not-found"};async function wN(r,e){const n={...e,operation:"REAUTH"};return yr(r,"POST","/v1/accounts:signInWithPhoneNumber",rt(r,n),bN)}/**
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
 */class Zs extends wu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Zs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Zs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return SN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return IN(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return wN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:s,verificationCode:o}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:s,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:s,phoneNumber:o,temporaryProof:u}=e;return!s&&!n&&!o&&!u?null:new Zs({verificationId:n,verificationCode:s,phoneNumber:o,temporaryProof:u})}}/**
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
 */function RN(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CN(r){const e=Bl(ql(r)).link,n=e?Bl(ql(e)).deep_link_id:null,s=Bl(ql(r)).deep_link_id;return(s?Bl(ql(s)).link:null)||s||n||e||r}class Ru{constructor(e){const n=Bl(ql(e)),s=n.apiKey??null,o=n.oobCode??null,u=RN(n.mode??null);W(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=CN(e);try{return new Ru(n)}catch{return null}}}function hV(r){return Ru.parseLink(r)}/**
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
 */class ua{constructor(){this.providerId=ua.PROVIDER_ID}static credential(e,n){return hu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ru.parseLink(n);return W(s,"argument-error"),hu._fromEmailAndCode(e,s.code,s.tenantId)}}ua.PROVIDER_ID="password";ua.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ua.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _r{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Do extends _r{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Th extends Do{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return W("providerId"in n&&"signInMethod"in n,"argument-error"),pr._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return W(e.idToken||e.accessToken,"argument-error"),pr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Th.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Th.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:u,nonce:f,providerId:p}=e;if(!s&&!o&&!n&&!u||!p)return null;try{return new Th(p)._credential({idToken:n,accessToken:s,nonce:f,pendingToken:u})}catch{return null}}}/**
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
 */class Zr extends Do{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
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
 */class sr extends Do{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return sr.credential(n,s)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
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
 */class es extends Do{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.GITHUB_SIGN_IN_METHOD="github.com";es.PROVIDER_ID="github.com";/**
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
 */const DN="http://localhost";class fu extends wu{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return ur(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ur(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ur(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,pendingToken:u}=n;return!s||!o||!u||s!==o?null:new fu(s,u)}static _create(e,n){return new fu(e,n)}buildRequest(){return{requestUri:DN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const NN="saml.";class cp extends _r{constructor(e){W(e.startsWith(NN),"argument-error"),super(e)}static credentialFromResult(e){return cp.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return cp.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=fu.fromJSON(e);return W(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:s}=e;if(!n||!s)return null;try{return fu._create(s,n)}catch{return null}}}/**
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
 */class ts extends Do{constructor(){super("twitter.com")}static credential(e,n){return pr._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ts.credential(n,s)}catch{return null}}}ts.TWITTER_SIGN_IN_METHOD="twitter.com";ts.PROVIDER_ID="twitter.com";/**
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
 */async function KS(r,e){return yr(r,"POST","/v1/accounts:signUp",rt(r,e))}/**
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
 */class Kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await ai._fromIdTokenResponse(e,s,o),f=TT(s);return new Kn({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=TT(s);return new Kn({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function TT(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function fV(r){var o;if(ht(r.app))return Promise.reject(Gt(r));const e=gt(r);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new Kn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await KS(e,{returnSecureToken:!0}),s=await Kn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class Bh extends gr{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Bh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Bh(e,n,s,o)}}function QS(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Bh._fromErrorAndOperation(r,u,e,s):u})}/**
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
 */function XS(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function dV(r,e){const n=he(r);await df(!0,n,e);const{providerUserInfo:s}=await PD(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),o=XS(s||[]);return n.providerData=n.providerData.filter(u=>o.has(u.providerId)),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function ug(r,e,n=!1){const s=await mr(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Kn._forOperation(r,"link",s)}async function df(r,e,n){await cu(e);const s=XS(e.providerData),o=r===!1?"provider-already-linked":"no-such-provider";W(s.has(n)===r,e.auth,o)}/**
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
 */async function WS(r,e,n=!1){const{auth:s}=r;if(ht(s.app))return Promise.reject(Gt(s));const o="reauthenticate";try{const u=await mr(r,QS(s,o,e,r),n);W(u.idToken,s,"internal-error");const f=hf(u.idToken);W(f,s,"internal-error");const{sub:p}=f;return W(r.uid===p,s,"user-mismatch"),Kn._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&An(s,"user-mismatch"),u}}/**
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
 */async function $S(r,e,n=!1){if(ht(r.app))return Promise.reject(Gt(r));const s="signIn",o=await QS(r,s,e),u=await Kn._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function cg(r,e){return $S(gt(r),e)}async function ON(r,e){const n=he(r);return await df(!1,n,e.providerId),ug(n,e)}async function VN(r,e){return WS(he(r),e)}/**
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
 */async function MN(r,e){return yr(r,"POST","/v1/accounts:signInWithCustomToken",rt(r,e))}/**
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
 */async function mV(r,e){if(ht(r.app))return Promise.reject(Gt(r));const n=gt(r),s=await MN(n,{token:e,returnSecureToken:!0}),o=await Kn._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(o.user),o}/**
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
 */class Cu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?hg._fromServerResponse(e,n):"totpInfo"in n?fg._fromServerResponse(e,n):An(e,"internal-error")}}class hg extends Cu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new hg(n)}}class fg extends Cu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new fg(n)}}/**
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
 */function mf(r,e,n){var s;W(((s=n.url)==null?void 0:s.length)>0,r,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),W(typeof n.linkDomain>"u"||n.linkDomain.length>0,r,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function dg(r){const e=gt(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pV(r,e,n){const s=gt(r),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&mf(s,o,n),await us(s,o,"getOobCode",yN,"EMAIL_PASSWORD_PROVIDER")}async function gV(r,e,n){await YS(he(r),{oobCode:e,newPassword:n}).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&dg(r),s})}async function yV(r,e){await mN(he(r),{oobCode:e})}async function PN(r,e){const n=he(r),s=await YS(n,{oobCode:e}),o=s.requestType;switch(W(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":W(s.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":W(s.mfaInfo,n,"internal-error");default:W(s.email,n,"internal-error")}let u=null;return s.mfaInfo&&(u=Cu._fromServerResponse(gt(n),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:u},operation:o}}async function _V(r,e){const{data:n}=await PN(he(r),e);return n.email}async function vV(r,e,n){if(ht(r.app))return Promise.reject(Gt(r));const s=gt(r),f=await us(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KS,"EMAIL_PASSWORD_PROVIDER").catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&dg(r),y}),p=await Kn._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(p.user),p}function EV(r,e,n){return ht(r.app)?Promise.reject(Gt(r)):cg(he(r),ua.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&dg(r),s})}/**
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
 */async function TV(r,e,n){const s=gt(r),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function u(f,p){W(p.handleCodeInApp,s,"argument-error"),p&&mf(s,f,p)}u(o,n),await us(s,o,"getOobCode",_N,"EMAIL_PASSWORD_PROVIDER")}function AV(r,e){const n=Ru.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function SV(r,e,n){if(ht(r.app))return Promise.reject(Gt(r));const s=he(r),o=ua.credentialWithLink(e,n||uu());return W(o._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),cg(s,o)}/**
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
 */async function kN(r,e){return st(r,"POST","/v1/accounts:createAuthUri",rt(r,e))}/**
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
 */async function IV(r,e){const n=sg()?uu():"http://localhost",s={identifier:e,continueUri:n},{signinMethods:o}=await kN(he(r),s);return o||[]}async function bV(r,e){const n=he(r),o={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&mf(n.auth,o,e);const{email:u}=await gN(n.auth,o);u!==r.email&&await r.reload()}async function wV(r,e,n){const s=he(r),u={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};n&&mf(s.auth,u,n);const{email:f}=await vN(s.auth,u);f!==r.email&&await r.reload()}/**
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
 */async function LN(r,e){return st(r,"POST","/v1/accounts:update",e)}/**
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
 */async function RV(r,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=he(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},f=await mr(s,LN(s.auth,u));s.displayName=f.displayName||null,s.photoURL=f.photoUrl||null;const p=s.providerData.find(({providerId:y})=>y==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(f)}function CV(r,e){const n=he(r);return ht(n.auth.app)?Promise.reject(Gt(n.auth)):JS(n,e,null)}function DV(r,e){return JS(he(r),null,e)}async function JS(r,e,n){const{auth:s}=r,u={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(u.email=e),n&&(u.password=n);const f=await mr(r,fN(s,u));await r._updateTokensIfNecessary(f,!0)}/**
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
 */function UN(r){var o,u;if(!r)return null;const{providerId:e}=r,n=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},s=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(r!=null&&r.idToken)){const f=(u=(o=hf(r.idToken))==null?void 0:o.firebase)==null?void 0:u.sign_in_provider;if(f){const p=f!=="anonymous"&&f!=="custom"?f:null;return new co(s,p)}}if(!e)return null;switch(e){case"facebook.com":return new xN(s,n);case"github.com":return new zN(s,n);case"google.com":return new BN(s,n);case"twitter.com":return new qN(s,n,r.screenName||null);case"custom":case"anonymous":return new co(s,null);default:return new co(s,e,n)}}class co{constructor(e,n,s={}){this.isNewUser=e,this.providerId=n,this.profile=s}}class ZS extends co{constructor(e,n,s,o){super(e,n,s),this.username=o}}class xN extends co{constructor(e,n){super(e,"facebook.com",n)}}class zN extends ZS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class BN extends co{constructor(e,n){super(e,"google.com",n)}}class qN extends ZS{constructor(e,n,s){super(e,"twitter.com",n,s)}}function NV(r){const{user:e,_tokenResponse:n}=r;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:UN(n)}/**
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
 */function OV(r,e){return he(r).setPersistence(e)}function VV(r){return jS(r)}async function MV(r,e){return gt(r).validatePassword(e)}function HN(r,e,n,s){return he(r).onIdTokenChanged(e,n,s)}function FN(r,e,n){return he(r).beforeAuthStateChanged(e,n)}function PV(r,e,n,s){return he(r).onAuthStateChanged(e,n,s)}function kV(r){he(r).useDeviceLanguage()}function LV(r,e){return he(r).updateCurrentUser(e)}function UV(r){return he(r).signOut()}function xV(r,e){return gt(r).revokeAccessToken(e)}async function zV(r){return he(r).delete()}/**
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
 */class $s{constructor(e,n,s){this.type=e,this.credential=n,this.user=s}static _fromIdtoken(e,n){return new $s("enroll",e,n)}static _fromMfaPendingCredential(e){return new $s("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,s;if(e!=null&&e.multiFactorSession){if((n=e.multiFactorSession)!=null&&n.pendingCredential)return $s._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((s=e.multiFactorSession)!=null&&s.idToken)return $s._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class mg{constructor(e,n,s){this.session=e,this.hints=n,this.signInResolver=s}static _fromError(e,n){const s=gt(e),o=n.customData._serverResponse,u=(o.mfaInfo||[]).map(p=>Cu._fromServerResponse(s,p));W(o.mfaPendingCredential,s,"internal-error");const f=$s._fromMfaPendingCredential(o.mfaPendingCredential);return new mg(f,u,async p=>{const y=await p._process(s,f);delete o.mfaInfo,delete o.mfaPendingCredential;const _={...o,idToken:y.idToken,refreshToken:y.refreshToken};switch(n.operationType){case"signIn":const T=await Kn._fromIdTokenResponse(s,n.operationType,_);return await s._updateCurrentUser(T.user),T;case"reauthenticate":return W(n.user,s,"internal-error"),Kn._forOperation(n.user,n.operationType,_);default:An(s,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function BV(r,e){var o;const n=he(r),s=e;return W(e.customData.operationType,n,"argument-error"),W((o=s.customData._serverResponse)==null?void 0:o.mfaPendingCredential,n,"argument-error"),mg._fromError(n,s)}/**
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
 */function AT(r,e){return st(r,"POST","/v2/accounts/mfaEnrollment:start",rt(r,e))}function jN(r,e){return st(r,"POST","/v2/accounts/mfaEnrollment:finalize",rt(r,e))}function GN(r,e){return st(r,"POST","/v2/accounts/mfaEnrollment:start",rt(r,e))}function YN(r,e){return st(r,"POST","/v2/accounts/mfaEnrollment:finalize",rt(r,e))}function KN(r,e){return st(r,"POST","/v2/accounts/mfaEnrollment:withdraw",rt(r,e))}class pg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(s=>Cu._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new pg(e)}async getSession(){return $s._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const s=e,o=await this.getSession(),u=await mr(this.user,s._process(this.user.auth,o,n));return await this.user._updateTokensIfNecessary(u),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const o=await mr(this.user,KN(this.user.auth,{idToken:s,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:u})=>u!==n),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const km=new WeakMap;function qV(r){const e=he(r);return km.has(e)||km.set(e,pg._fromUser(e)),km.get(e)}const qh="__sak";/**
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
 */class eI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qh,"1"),this.storage.removeItem(qh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const QN=1e3,XN=10;class tI extends eI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=BS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,p,y)=>{this.notifyListeners(f,y)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);FD()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,XN):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},QN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tI.type="LOCAL";const WN=tI;/**
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
 */const $N=1e3;function Lm(r){var s;const e=r.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${e}=([^;]+)`);return((s=document.cookie.match(n))==null?void 0:s[1])??null}function Um(r){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${r.split(":")[3]}`}class nI{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const n=new URL(`${window.location.origin}/__cookies__`);return n.searchParams.set("finalTarget",e),n}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,n){}async _get(e){if(!this._isAvailable())return null;const n=Um(e);if(window.cookieStore){const s=await window.cookieStore.get(n);return s==null?void 0:s.value}return Lm(n)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const s=Um(e);document.cookie=`${s}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,n){if(!this._isAvailable())return;const s=Um(e);if(window.cookieStore){const p=(_=>{const T=_.changed.find(V=>V.name===s);T&&n(T.value),_.deleted.find(V=>V.name===s)&&n(null)}),y=()=>window.cookieStore.removeEventListener("change",p);return this.listenerUnsubscribes.set(n,y),window.cookieStore.addEventListener("change",p)}let o=Lm(s);const u=setInterval(()=>{const p=Lm(s);p!==o&&(n(p),o=p)},$N),f=()=>clearInterval(u);this.listenerUnsubscribes.set(n,f)}_removeListener(e,n){const s=this.listenerUnsubscribes.get(n);s&&(s(),this.listenerUnsubscribes.delete(n))}}nI.type="COOKIE";const HV=nI;/**
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
 */class iI extends eI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iI.type="SESSION";const rI=iI;/**
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
 */function JN(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new pf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(f).map(async _=>_(n.origin,u)),y=await JN(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pf.receivers=[];/**
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
 */function gf(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class ZN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((p,y)=>{const _=gf("",20);o.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const V=S;if(V.data.eventId===_)switch(V.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(V.data.response);break;default:clearTimeout(T),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:_,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Mt(){return window}function eO(r){Mt().location.href=r}/**
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
 */function gg(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function tO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nO(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function iO(){return gg()?self:null}/**
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
 */const sI="firebaseLocalStorageDb",rO=1,Hh="firebaseLocalStorage",aI="fbase_key";class Du{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yf(r,e){return r.transaction([Hh],e?"readwrite":"readonly").objectStore(Hh)}function sO(){const r=indexedDB.deleteDatabase(sI);return new Du(r).toPromise()}function hp(){const r=indexedDB.open(sI,rO);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Hh,{keyPath:aI})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Hh)?e(s):(s.close(),await sO(),e(await hp()))})})}async function ST(r,e,n){const s=yf(r,!0).put({[aI]:e,value:n});return new Du(s).toPromise()}async function aO(r,e){const n=yf(r,!1).get(e),s=await new Du(n).toPromise();return s===void 0?null:s.value}function IT(r,e){const n=yf(r,!0).delete(e);return new Du(n).toPromise()}const oO=800,lO=3;class oI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>lO)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pf._getInstance(iO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await tO(),!this.activeServiceWorker)return;this.sender=new ZN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hp();return await ST(e,qh,"1"),await IT(e,qh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ST(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>aO(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>IT(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=yf(o,!1).getAll();return new Du(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oI.type="LOCAL";const uO=oI;/**
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
 */function bT(r,e){return st(r,"POST","/v2/accounts/mfaSignIn:start",rt(r,e))}function cO(r,e){return st(r,"POST","/v2/accounts/mfaSignIn:finalize",rt(r,e))}function hO(r,e){return st(r,"POST","/v2/accounts/mfaSignIn:finalize",rt(r,e))}/**
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
 */const xm=HS("rcb"),fO=new Iu(3e4,6e4);class dO{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Mt().grecaptcha)!=null&&e.render)}load(e,n=""){return W(mO(n),e,"argument-error"),this.shouldResolveImmediately(n)&&fT(Mt().grecaptcha)?Promise.resolve(Mt().grecaptcha):new Promise((s,o)=>{const u=Mt().setTimeout(()=>{o(hn(e,"network-request-failed"))},fO.get());Mt()[xm]=()=>{Mt().clearTimeout(u),delete Mt()[xm];const p=Mt().grecaptcha;if(!p||!fT(p)){o(hn(e,"internal-error"));return}const y=p.render;p.render=(_,T)=>{const S=y(_,T);return this.counter++,S},this.hostLanguage=n,s(p)};const f=`${WD()}?${To({onload:xm,render:"explicit",hl:n})}`;lg(f).catch(()=>{clearTimeout(u),o(hn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Mt().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function mO(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class pO{async load(e){return new tN(e)}clearedOneInstance(){}}/**
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
 */const Zl="recaptcha",gO={theme:"light",type:"image"};class FV{constructor(e,n,s={...gO}){this.parameters=s,this.type=Zl,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=gt(e),this.isInvisible=this.parameters.size==="invisible",W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof n=="string"?document.getElementById(n):n;W(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new pO:new dO,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(e);return s||new Promise(o=>{const u=f=>{f&&(this.tokenChangeListeners.delete(u),o(f))};this.tokenChangeListeners.add(u),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){W(!this.parameters.sitekey,this.auth,"argument-error"),W(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof e=="function")e(n);else if(typeof e=="string"){const s=Mt()[e];typeof s=="function"&&s(n)}}}assertNotDestroyed(){W(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){W(sg()&&!gg(),this.auth,"internal-error"),await yO(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await VD(this.auth);W(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return W(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function yO(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
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
 */class yg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Zs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function jV(r,e,n){if(ht(r.app))return Promise.reject(Gt(r));const s=gt(r),o=await _f(s,e,he(n));return new yg(o,u=>cg(s,u))}async function GV(r,e,n){const s=he(r);await df(!1,s,"phone");const o=await _f(s.auth,e,he(n));return new yg(o,u=>ON(s,u))}async function YV(r,e,n){const s=he(r);if(ht(s.auth.app))return Promise.reject(Gt(s.auth));const o=await _f(s.auth,e,he(n));return new yg(o,u=>VN(s,u))}async function _f(r,e,n){var s;if(!r._getRecaptchaConfig())try{await jS(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const u=o.session;if("phoneNumber"in o){W(u.type==="enroll",r,"internal-error");const f={idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await us(r,f,"mfaSmsEnrollment",async(T,S)=>{if(S.phoneEnrollmentInfo.captchaResponse===Jl){W((n==null?void 0:n.type)===Zl,T,"argument-error");const V=await zm(T,S,n);return AT(T,V)}return AT(T,S)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneSessionInfo.sessionInfo}else{W(u.type==="signin",r,"internal-error");const f=((s=o.multiFactorHint)==null?void 0:s.uid)||o.multiFactorUid;W(f,r,"missing-multi-factor-info");const p={mfaPendingCredential:u.credential,mfaEnrollmentId:f,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await us(r,p,"mfaSmsSignIn",async(S,V)=>{if(V.phoneSignInInfo.captchaResponse===Jl){W((n==null?void 0:n.type)===Zl,S,"argument-error");const G=await zm(S,V,n);return bT(S,G)}return bT(S,V)},"PHONE_PROVIDER").catch(S=>Promise.reject(S))).phoneResponseInfo.sessionInfo}}else{const u={phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await us(r,u,"sendVerificationCode",async(_,T)=>{if(T.captchaResponse===Jl){W((n==null?void 0:n.type)===Zl,_,"argument-error");const S=await zm(_,T,n);return ET(_,S)}return ET(_,T)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).sessionInfo}}finally{n==null||n._reset()}}async function KV(r,e){const n=he(r);if(ht(n.auth.app))return Promise.reject(Gt(n.auth));await ug(n,e)}async function zm(r,e,n){W(n.type===Zl,r,"argument-error");const s=await n.verify();W(typeof s=="string",r,"argument-error");const o={...e};if("phoneEnrollmentInfo"in o){const u=o.phoneEnrollmentInfo.phoneNumber,f=o.phoneEnrollmentInfo.captchaResponse,p=o.phoneEnrollmentInfo.clientType,y=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:s,captchaResponse:f,clientType:p,recaptchaVersion:y}}),o}else if("phoneSignInInfo"in o){const u=o.phoneSignInInfo.captchaResponse,f=o.phoneSignInInfo.clientType,p=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:u,clientType:f,recaptchaVersion:p}}),o}else return Object.assign(o,{recaptchaToken:s}),o}/**
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
 */class ho{constructor(e){this.providerId=ho.PROVIDER_ID,this.auth=gt(e)}verifyPhoneNumber(e,n){return _f(this.auth,e,he(n))}static credential(e,n){return Zs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return ho.credentialFromTaggedObject(n)}static credentialFromError(e){return ho.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:s}=e;return n&&s?Zs._fromTokenResponse(n,s):null}}ho.PROVIDER_ID="phone";ho.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ca(r,e){return e?ar(e):(W(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class _g extends wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ur(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ur(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _O(r){return $S(r.auth,new _g(r),r.bypassAuthState)}function vO(r){const{auth:e,user:n}=r;return W(n,e,"internal-error"),WS(n,new _g(r),r.bypassAuthState)}async function EO(r){const{auth:e,user:n}=r;return W(n,e,"internal-error"),ug(n,new _g(r),r.bypassAuthState)}/**
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
 */class lI{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:p}=e;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _O;case"linkViaPopup":case"linkViaRedirect":return EO;case"reauthViaPopup":case"reauthViaRedirect":return vO;default:An(this.auth,"internal-error")}}resolve(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TO=new Iu(2e3,1e4);async function QV(r,e,n){if(ht(r.app))return Promise.reject(hn(r,"operation-not-supported-in-this-environment"));const s=gt(r);Co(r,e,_r);const o=ca(s,n);return new or(s,"signInViaPopup",e,o).executeNotNull()}async function XV(r,e,n){const s=he(r);if(ht(s.auth.app))return Promise.reject(hn(s.auth,"operation-not-supported-in-this-environment"));Co(s.auth,e,_r);const o=ca(s.auth,n);return new or(s.auth,"reauthViaPopup",e,o,s).executeNotNull()}async function WV(r,e,n){const s=he(r);Co(s.auth,e,_r);const o=ca(s.auth,n);return new or(s.auth,"linkViaPopup",e,o,s).executeNotNull()}class or extends lI{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){dr(this.filter.length===1,"Popup operations only handle one event");const e=gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TO.get())};e()}}or.currentPopupAction=null;/**
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
 */const AO="pendingRedirect",Ah=new Map;class SO extends lI{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ah.get(this.auth._key());if(!e){try{const s=await IO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ah.set(this.auth._key(),e)}return this.bypassAuthState||Ah.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IO(r,e){const n=cI(e),s=uI(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}async function vg(r,e){return uI(r)._set(cI(e),"true")}function bO(r,e){Ah.set(r._key(),e)}function uI(r){return ar(r._redirectPersistence)}function cI(r){return Eh(AO,r.config.apiKey,r.name)}/**
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
 */function $V(r,e,n){return wO(r,e,n)}async function wO(r,e,n){if(ht(r.app))return Promise.reject(Gt(r));const s=gt(r);Co(r,e,_r),await s._initializationPromise;const o=ca(s,n);return await vg(o,s),o._openRedirect(s,e,"signInViaRedirect")}function JV(r,e,n){return RO(r,e,n)}async function RO(r,e,n){const s=he(r);if(Co(s.auth,e,_r),ht(s.auth.app))return Promise.reject(Gt(s.auth));await s.auth._initializationPromise;const o=ca(s.auth,n);await vg(o,s.auth);const u=await fI(s);return o._openRedirect(s.auth,e,"reauthViaRedirect",u)}function ZV(r,e,n){return CO(r,e,n)}async function CO(r,e,n){const s=he(r);Co(s.auth,e,_r),await s.auth._initializationPromise;const o=ca(s.auth,n);await df(!1,s,e.providerId),await vg(o,s.auth);const u=await fI(s);return o._openRedirect(s.auth,e,"linkViaRedirect",u)}async function eM(r,e){return await gt(r)._initializationPromise,hI(r,e,!1)}async function hI(r,e,n=!1){if(ht(r.app))return Promise.reject(Gt(r));const s=gt(r),o=ca(s,e),f=await new SO(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}async function fI(r){const e=gf(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
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
 */const DO=600*1e3;class NO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!dI(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DO&&this.cachedEventUids.clear(),this.cachedEventUids.has(wT(e))}saveEventToCache(e){this.cachedEventUids.add(wT(e)),this.lastProcessedEventTime=Date.now()}}function wT(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function dI({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OO(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dI(r);default:return!1}}/**
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
 */async function VO(r,e={}){return st(r,"GET","/v1/projects",e)}/**
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
 */const MO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PO=/^https?/;async function kO(r){if(r.config.emulator)return;const{authorizedDomains:e}=await VO(r);for(const n of e)try{if(LO(n))return}catch{}An(r,"unauthorized-domain")}function LO(r){const e=uu(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!PO.test(n))return!1;if(MO.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const UO=new Iu(3e4,6e4);function RT(){const r=Mt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function xO(r){return new Promise((e,n)=>{var o,u,f;function s(){RT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{RT(),n(hn(r,"network-request-failed"))},timeout:UO.get()})}if((u=(o=Mt().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=Mt().gapi)!=null&&f.load)s();else{const p=HS("iframefcb");return Mt()[p]=()=>{gapi.load?s():n(hn(r,"network-request-failed"))},lg(`${JD()}?onload=${p}`).catch(y=>n(y))}}).catch(e=>{throw Sh=null,e})}let Sh=null;function zO(r){return Sh=Sh||xO(r),Sh}/**
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
 */const BO=new Iu(5e3,15e3),qO="__/auth/iframe",HO="emulator/auth/iframe",FO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GO(r){const e=r.config;W(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?ag(e,HO):`https://${r.config.authDomain}/${qO}`,s={apiKey:e.apiKey,appName:r.name,v:Ao},o=jO.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${To(s).slice(1)}`}async function YO(r){const e=await zO(r),n=Mt().gapi;return W(n,r,"internal-error"),e.open({where:document.body,url:GO(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FO,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=hn(r,"network-request-failed"),p=Mt().setTimeout(()=>{u(f)},BO.get());function y(){Mt().clearTimeout(p),o(s)}s.ping(y).then(y,()=>{u(f)})}))}/**
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
 */const KO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QO=500,XO=600,WO="_blank",$O="http://localhost";class CT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JO(r,e,n,s=QO,o=XO){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const y={...KO,width:s.toString(),height:o.toString(),top:u,left:f},_=on().toLowerCase();n&&(p=kS(_)?WO:n),MS(_)&&(e=e||$O,y.scrollbars="yes");const T=Object.entries(y).reduce((V,[G,$])=>`${V}${G}=${$},`,"");if(HD(_)&&p!=="_self")return ZO(e||"",p),new CT(null);const S=window.open(e||"",p,T);W(S,r,"popup-blocked");try{S.focus()}catch{}return new CT(S)}function ZO(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const e2="__/auth/handler",t2="emulator/auth/handler",n2=encodeURIComponent("fac");async function DT(r,e,n,s,o,u){W(r.config.authDomain,r,"auth-domain-config-required"),W(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ao,eventId:o};if(e instanceof _r){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",jb(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,S]of Object.entries({}))f[T]=S}if(e instanceof Do){const T=e.getScopes().filter(S=>S!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const p=f;for(const T of Object.keys(p))p[T]===void 0&&delete p[T];const y=await r._getAppCheckToken(),_=y?`#${n2}=${encodeURIComponent(y)}`:"";return`${i2(r)}?${To(p).slice(1)}${_}`}function i2({config:r}){return r.emulator?ag(r,t2):`https://${r.authDomain}/${e2}`}/**
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
 */const Bm="webStorageSupport";class r2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rI,this._completeRedirectFn=hI,this._overrideRedirectResult=bO}async _openPopup(e,n,s,o){var f;dr((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await DT(e,n,s,uu(),o);return JO(e,u,gf())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await DT(e,n,s,uu(),o);return eO(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(dr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await YO(e),s=new NO(e);return n.register("authEvent",o=>(W(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bm,{type:Bm},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[Bm];u!==void 0&&n(!!u),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return BS()||PS()||og()}}const s2=r2;class mI{constructor(e){this.factorId=e}_process(e,n,s){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,s);case"signin":return this._finalizeSignIn(e,n.credential);default:return Pi("unexpected MultiFactorSessionType")}}}class Eg extends mI{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Eg(e)}_finalizeEnroll(e,n,s){return jN(e,{idToken:n,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return cO(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class a2{constructor(){}static assertion(e){return Eg._fromCredential(e)}}a2.FACTOR_ID="phone";class o2{static assertionForEnrollment(e,n){return du._fromSecret(e,n)}static assertionForSignIn(e,n){return du._fromEnrollmentId(e,n)}static async generateSecret(e){var o;const n=e;W(typeof((o=n.user)==null?void 0:o.auth)<"u","internal-error");const s=await GN(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Tg._fromStartTotpMfaEnrollmentResponse(s,n.user.auth)}}o2.FACTOR_ID="totp";class du extends mI{constructor(e,n,s){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=s}static _fromSecret(e,n){return new du(n,void 0,e)}static _fromEnrollmentId(e,n){return new du(n,e)}async _finalizeEnroll(e,n,s){return W(typeof this.secret<"u",e,"argument-error"),YN(e,{idToken:n,displayName:s,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){W(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const s={verificationCode:this.otp};return hO(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:s})}}class Tg{constructor(e,n,s,o,u,f,p){this.sessionInfo=f,this.auth=p,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=s,this.codeIntervalSeconds=o,this.enrollmentCompletionDeadline=u}static _fromStartTotpMfaEnrollmentResponse(e,n){return new Tg(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){var o;let s=!1;return(hh(e)||hh(n))&&(s=!0),s&&(hh(e)&&(e=((o=this.auth.currentUser)==null?void 0:o.email)||"unknownuser"),hh(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function hh(r){return typeof r>"u"||(r==null?void 0:r.length)===0}var NT="@firebase/auth",OT="1.13.0";/**
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
 */class l2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function u2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function c2(r){mo(new ta("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=s.options;W(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:f,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qS(r)},_=new QD(s,o,u,y);return lN(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),mo(new ta("auth-internal",e=>{const n=gt(e.getProvider("auth").getImmediate());return(s=>new l2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ss(NT,OT,u2(r)),ss(NT,OT,"esm2020")}/**
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
 */const h2=300,f2=BT("authIdTokenMaxAge")||h2;let VT=null;const d2=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>f2)return;const o=n==null?void 0:n.token;VT!==o&&(VT=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function m2(r=GT()){const e=pp(r,"auth");if(e.isInitialized())return e.getImmediate();const n=oN(r,{popupRedirectResolver:s2,persistence:[uO,WN,rI]}),s=BT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=d2(u.toString());FN(n,f,()=>f(n.currentUser)),HN(n,p=>f(p))}}const o=xT("auth");return o&&uN(n,`http://${o}`),n}function p2(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}XD({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=hn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",p2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});c2("Browser");const g2="gen-lang-client-0773294161",y2="1:957900254998:web:2abb29dbfd463ac3baea37",_2="AIzaSyDbKJl4dxax54eTwe0e5Fz2hjDMljzU0Jk",v2="gen-lang-client-0773294161.firebaseapp.com",E2="ai-studio-041a9f53-5219-4945-92ca-7a43b85b965b",T2="gen-lang-client-0773294161.firebasestorage.app",A2="957900254998",S2="",pI={projectId:g2,appId:y2,apiKey:_2,authDomain:v2,firestoreDatabaseId:E2,storageBucket:T2,messagingSenderId:A2,measurementId:S2},gI=jT(pI),tM=oD(gI,pI.firestoreDatabaseId),nM=m2(gI);new sr;const Ag="ameer-sief-site-bundle-v2",yI="ameer-sief-site-bundle-updated",_I={about:!0,trust:!0,proof:!0,concierge:!0,services:!0,ai:!0,work:!0,motion:!0,portfolio:!0,contact:!0,custom:!0},Ih=(r={})=>({fit:"cover",positionX:50,positionY:50,scale:1,brightness:1,...r}),oi=(r={})=>({desktop:Ih(r.desktop),tablet:Ih(r.tablet??r.desktop),mobile:Ih(r.mobile)}),Tt={heroTitle:"AMEER SIEF",heroSubtitle:"Photography, Videography, AI Video & Visual Storytelling | Dubai",heroSubtitleAr:"تصوير فوتوغرافي، فيديو، فيديو AI، وصناعة قصة بصرية | دبي",heroDescription:"High-end visual storytelling for government entities, cultural institutions, premium brands, and private clients across the UAE, delivered with strong AI-native video workflows and sharp execution.",heroDescriptionAr:"صناعة محتوى بصري فاخر للجهات الحكومية، والمؤسسات الثقافية، والبراندات الراقية، والعملاء الخاصين داخل الإمارات، مع قدرة قوية على الفيديو المدعوم بالذكاء الاصطناعي وسرعة تنفيذ مدروسة.",heroBgImage:"/portfolio/hero-bg.png",heroBgPositionX:50,heroBgPositionY:48,heroBgScale:1.08,heroBgBrightness:1.08,heroBgTabletPositionX:50,heroBgTabletPositionY:46,heroBgTabletScale:1.05,heroBgTabletBrightness:1.05,heroBgMobilePositionX:50,heroBgMobilePositionY:42,heroBgMobileScale:1.02,heroBgMobileBrightness:1.02,heroBgOverlayOpacity:.42,seoTitle:"Ameer Sief | AI Visual Storytelling, Photography, Videography, NFC & Social Workflow Systems Dubai",seoDescription:"Ameer Sief is a Dubai-based visual storyteller specializing in photography, videography, hyper-real AI images, AI video creation, NFC business cards, QR smart contact pages, and social workflow systems across the UAE.",seoKeywords:"Ameer Sief, Ameer Saif, Ameer Seif, أمير سيف, امير سيف, Ameer Sief Dubai, Dubai photographer, Dubai videographer, AI video creator UAE, AI image creator Dubai, NFC business card Dubai, QR smart contact page Dubai, luxury content creator Dubai, social media workflow UAE, WhatsApp automation Dubai, event coverage UAE, premium visual storytelling",canonicalUrl:"https://www.ameer-sief.com",googleSiteVerification:"",ogImage:"/portfolio/hero-bg.png",faviconImage:"/favicon.svg",aboutTitle:"Creative Direction Backed By Visual Taste, Precision, and Delivery",aboutTitleAr:"إخراج بصري قائم على الذوق، الدقة، وحسن التسليم",aboutTextAr:"أمير سيف صانع محتوى بصري ومصوّر فوتوغرافي وفيديو في دبي، يعمل مع جهات حكومية ومؤسسات ثقافية وعملاء خاصين داخل الإمارات. إلى جانب التصوير والإخراج البصري، يقدّم حلول فيديو مدعومة بالذكاء الاصطناعي ويبني workflows سريعة وفعالة لإنتاج محتوى قوي، من الفكرة وحتى التسليم.",aboutTextEn:"Ameer Sief is a Dubai-based visual storyteller working across photography, videography, and AI-supported content systems. His work spans government coverage, cultural documentation, private commissions, branded visuals, and production workflows designed to move fast without sacrificing polish.",aboutSecondaryTextAr:"ومن ضمن الخدمات أيضاً تصميم بزنس كارد ذكية وصفحات تواصل شخصية تعمل عبر NFC أو QR، سواء على بطاقة مطبوعة، شريحة NFC، أو حتى سوار NFC، بحيث يصل العميل مباشرة إلى صفحة ويب أنيقة فيها معلومات التواصل، زر حفظ جهة الاتصال، وأي ميزات إضافية مطلوبة.",aboutSecondaryTextEn:"Part of the work also includes smart NFC business cards, NFC bracelets, and QR-backed contact pages that open a polished mini web profile with contact details, save-contact actions, and any custom features the client needs.",aboutImage:"/portfolio/about-visual.png",aboutImageSettings:oi({desktop:{positionY:42,scale:1.05,brightness:1.02},mobile:{positionY:38,scale:1.02,brightness:1.02}}),trustTitle:"Trusted By Government, Media & Private Clients",trustTitleAr:"جهات حكومية وإعلامية وعملاء خاصون وثقوا بالعمل",trustDescription:"Selected collaborations shaped for institutions and clients who care about image, timing, discretion, and premium presentation.",trustDescriptionAr:"تعاونات مختارة مع جهات تهتم بالصورة، والسرعة، والخصوصية، وطريقة التقديم الراقية.",proofTitle:"Proof, Trust & Delivery Signals",proofTitleAr:"إشارات الثقة والإثبات",proofDescription:"Beyond aesthetics, the work is built for environments where discretion, speed, protocol, and polished execution actually matter.",proofDescriptionAr:"أبعد من الشكل الجميل، العمل مبني لبيئات يهم فيها البروتوكول، السرعة، الخصوصية، وحسن التنفيذ.",conciergeTitle:"AI Project Concierge",conciergeTitleAr:"المساعد الذكي للمشاريع",conciergeDescription:"A polished, AI-assisted intake flow that helps visitors describe the project clearly, receive a smart service direction, and send you a cleaner brief in minutes.",conciergeDescriptionAr:"مسار ذكي وأنيق يساعد الزائر على شرح المشروع بوضوح، أخذ اتجاه خدمة مناسب، ثم إرسال brief أنظف وأوضح خلال دقائق.",conciergeButtonLabel:"Start AI Brief",conciergeButtonLabelAr:"ابدأ الـ Brief الذكي",aiTitle:"AI Video Creation, Systems Thinking & Workflow Design",aiTitleAr:"إنشاء فيديوهات AI، تفكير سيستمي، وتصميم Workflow",aiDescription:"Alongside filming and photography, I build AI-led video concepts, visual development pipelines, and efficient production workflows that help brands and teams move from idea to polished output with clarity and speed.",aiDescriptionAr:"إلى جانب التصوير والفيديو، أعمل على مفاهيم فيديو بالذكاء الاصطناعي، تطوير بصري سريع، وأنظمة إنتاج ومتابعة تساعد البراندات والجهات على الوصول إلى نتيجة قوية بشكل أسرع.",aiBullets:["Hyper-real AI image creation built for campaigns, social media, product visuals, and concept execution.","AI-supported video ideation, visual direction, and production systems that accelerate delivery without losing quality.","Workflow design for social platforms including content planning, publishing rhythm, and high-speed creative operations.","Response systems for comments, WhatsApp conversations, client messages, and audience touchpoints with a premium brand tone.","Smart NFC business cards, QR handoff pages, and contact experiences that turn a simple tap or scan into a polished digital introduction."],aiBulletsAr:["إنشاء صور AI واقعية جداً للحملات، السوشال ميديا، المنتجات، وتنفيذ الأفكار البصرية.","تصميم فيديوهات ومفاهيم بصرية مدعومة بالذكاء الاصطناعي تسرّع الإنجاز بدون التضحية بالجودة.","بناء workflows للسوشال ميديا تشمل التخطيط، الإيقاع، وسرعة التشغيل الإبداعي.","أنظمة للرد على التعليقات، والواتساب، ورسائل العملاء، ونقاط التواصل بأسلوب احترافي.","بزنس كارد ذكية، صفحات QR، وتجارب تواصل مبنية على NFC تحوّل اللمسة أو المسح إلى تعريف رقمي أنيق وسريع."],workTitle:"Selected Work",workTitleAr:"أعمال مختارة",workDescription:"A focused look at public events, portraits, cultural moments, and branded visuals drawn from the portfolio.",workDescriptionAr:"نظرة مركزة على الفعاليات العامة، الجلسات الشخصية، اللحظات الثقافية، والمحتوى البصري المخصص للبراندات.",motionTitle:"Clickable Image Cards",motionTitleAr:"بطاقات صور قابلة للنقر",motionDescription:"This section is fully editable from the dashboard. Add any image, assign any direct link, or keep the card as a visual highlight without a destination.",motionDescriptionAr:"هذا القسم قابل للتعديل بالكامل من لوحة التحكم. أضف أي صورة، واربطها بأي وجهة مباشرة، أو اتركها كعنصر بصري فقط.",portfolioTitle:"Open The Full Portfolio",portfolioTitleAr:"افتح البورتفوليو الكامل",portfolioDescription:"A broader look at official coverage, graduation shoots, cultural documentation, city photography, product visuals, and featured media appearances.",portfolioDescriptionAr:"نظرة أوسع على التغطيات الرسمية، جلسات التخرج، التوثيق الثقافي، تصوير المدن، المنتجات، والظهور الإعلامي.",portfolioPreviewImage:"/portfolio/reel-03.png",portfolioPreviewImageSettings:oi({desktop:{scale:1.02,brightness:.94},mobile:{scale:1,brightness:.98}}),portfolioPreviewUrl:"https://canva.link/qwiyccmwovta6cf",portfolioPreviewButtonLabel:"Open Feature",portfolioPreviewButtonLabelAr:"فتح الميزة",portfolioViewUrl:"https://canva.link/qwiyccmwovta6cf",portfolioPdfUrl:"https://drive.google.com/file/d/1PpYactKGWwD_gVEXtEwRAWpYcPVJAhf2/view",portfolioPdfSize:"30MB",contactTitle:"Bookings, Collaborations & Enquiries",contactTitleAr:"الحجوزات، التعاونات، والاستفسارات",contactDescription:"Available for government coverage, cultural projects, private sessions, AI image creation, AI-led video development, social workflow systems, smart NFC cards, QR contact pages, and select premium visual storytelling work across Dubai and the UAE.",contactDescriptionAr:"متاح للتغطيات الحكومية، المشاريع الثقافية، الجلسات الخاصة، إنشاء صور AI، تطوير فيديوهات AI، أنظمة السوشال workflow، بطاقات NFC الذكية، صفحات QR التعريفية، وأعمال مختارة من السرد البصري الفاخر داخل دبي والإمارات.",contactEmail:"info@ameer-sief.com",contactPhone:"+971 50 231 7252",instagramUrl:"https://instagram.com/ameer_sief_",facebookUrl:"https://facebook.com/ameersiefphotography",sectionVisibility:_I},vI=[{id:"service-government",title:"Government, Cultural & Public Event Coverage",titleAr:"التغطية الحكومية والثقافية والفعاليات العامة",description:"Premium photo and video coverage for ministries, cultural institutions, official ceremonies, national moments, and public activations across the UAE.",descriptionAr:"تصوير فوتوغرافي وفيديو فاخر للوزارات، الجهات الثقافية، المناسبات الرسمية، اللحظات الوطنية، والفعاليات العامة داخل الإمارات.",iconName:"Video",order:0,visible:!0},{id:"service-portraits",title:"Portraits, Graduation & Private Sessions",titleAr:"الجلسات الشخصية، التخرج، والبورتريه",description:"Editorial-style portraits and personal sessions designed around presence, confidence, and polished visual direction.",descriptionAr:"جلسات بورتريه واتجاه بصري راقٍ مبني على الحضور والثقة والنتيجة المصقولة.",iconName:"Camera",order:1,visible:!0},{id:"service-ai",title:"AI Images, AI Video & Visual Concepts",titleAr:"صور AI، فيديو AI، ومفاهيم بصرية",description:"Hyper-real AI imagery, AI-supported video production, and premium visual concepts built to look cinematic, modern, and commercially usable.",descriptionAr:"صور AI واقعية جداً، فيديو مدعوم بالذكاء الاصطناعي، ومفاهيم بصرية حديثة بمظهر سينمائي وقيمة تجارية.",iconName:"Sparkles",order:2,visible:!0},{id:"service-social-workflow",title:"Social Media Workflow & Client Response Systems",titleAr:"أنظمة السوشال ميديا والرد على العملاء",description:"Creative and operational workflows for posting, engagement, WhatsApp leads, comment handling, and message-response systems that support growth.",descriptionAr:"تصميم workflows للنشر، التفاعل، واتساب العملاء، التعليقات، والرسائل بما يدعم النمو ويخفف الضغط التشغيلي.",iconName:"Video",order:3,visible:!0},{id:"service-nfc",title:"NFC Business Cards, QR Pages & Smart Contact Profiles",titleAr:"بطاقات NFC الذكية، صفحات QR، وبروفايلات تواصل ذكية",description:"I build smart contact experiences through NFC cards, NFC bracelets, and QR-ready profile pages with save-contact actions, social links, lead capture, and custom business features.",descriptionAr:"أصمم تجارب تواصل ذكية عبر بطاقات NFC، أساور NFC، وصفحات تعريفية تعمل عبر QR مع حفظ جهة الاتصال، روابط السوشال، جمع العملاء المحتملين، وميزات مخصصة حسب الطلب.",iconName:"UserPlus",order:4,visible:!0}],EI=[{id:"gallery-event",title:"Official Occasions",titleAr:"مناسبات رسمية",category:"Public Events",categoryAr:"فعاليات عامة",imageUrl:"/portfolio/gallery-event.png",imageSettings:oi(),linkUrl:"",order:0,visible:!0},{id:"gallery-portrait",title:"Personal Sessions",titleAr:"جلسات شخصية",category:"Portrait Photography",categoryAr:"تصوير بورتريه",imageUrl:"/portfolio/gallery-portrait.png",imageSettings:oi(),linkUrl:"",order:1,visible:!0},{id:"gallery-product",title:"Product Visuals",titleAr:"تصوير منتجات",category:"Commercial Content",categoryAr:"محتوى تجاري",imageUrl:"/portfolio/gallery-product.png",imageSettings:oi(),linkUrl:"",order:2,visible:!0},{id:"gallery-culture",title:"Cultural Moments",titleAr:"لحظات ثقافية",category:"Heritage & Community",categoryAr:"تراث ومجتمع",imageUrl:"/portfolio/gallery-culture.png",imageSettings:oi(),linkUrl:"",order:3,visible:!0}],TI=[{id:"motion-official",title:"Official Coverage",titleAr:"تغطية رسمية",label:"Government & Public Moments",labelAr:"حكومي وعام",thumbnail:"/portfolio/reel-01.png",imageSettings:oi(),url:"https://canva.link/qwiyccmwovta6cf",buttonLabel:"Open Portfolio",buttonLabelAr:"افتح البورتفوليو",order:0,visible:!0},{id:"motion-portrait",title:"Portrait Direction",titleAr:"اتجاه بورتريه",label:"Personal Sessions",labelAr:"جلسات شخصية",thumbnail:"/portfolio/reel-02.png",imageSettings:oi(),url:"",buttonLabel:"View Highlight",buttonLabelAr:"عرض",order:1,visible:!0},{id:"motion-brand",title:"Brand Visual Stories",titleAr:"قصص بصرية للبراند",label:"Commercial Visuals",labelAr:"محتوى تجاري",thumbnail:"/portfolio/reel-03.png",imageSettings:oi(),url:"",buttonLabel:"View Highlight",buttonLabelAr:"عرض",order:2,visible:!0},{id:"motion-ai",title:"AI Workflow Concepts",titleAr:"مفاهيم وورك فلو AI",label:"AI Video Direction",labelAr:"اتجاه فيديو AI",thumbnail:"/portfolio/reel-04.png",imageSettings:oi(),url:"",buttonLabel:"View Highlight",buttonLabelAr:"عرض",order:3,visible:!0}],AI=[{id:"client-ministry-sports",name:"UAE Ministry of Sports",category:"Government",nameAr:"",categoryAr:"حكومي",logoUrl:"",order:0,visible:!0},{id:"client-mbr-library",name:"Mohammed Bin Rashid Library",category:"Cultural Institution",nameAr:"",categoryAr:"جهة ثقافية",logoUrl:"",order:1,visible:!0},{id:"client-dubai-aviation",name:"Dubai Aviation Engineering Projects",category:"Government",nameAr:"",categoryAr:"حكومي",logoUrl:"",order:2,visible:!0},{id:"client-supreme-legislation",name:"Supreme Legislation Committee",category:"Government",nameAr:"",categoryAr:"حكومي",logoUrl:"",order:3,visible:!0},{id:"client-rak-police",name:"RAK Police",nameAr:"",category:"Government",categoryAr:"حكومي",logoUrl:"",order:4,visible:!0},{id:"client-alkhaleej",name:"Al Khaleej TV",nameAr:"",category:"Media",categoryAr:"إعلام",logoUrl:"",order:5,visible:!0},{id:"client-vip",name:"VIP Private Clients",nameAr:"",category:"Private",categoryAr:"خاص",logoUrl:"",order:6,visible:!0},{id:"client-hospitality",name:"Hospitality Brands",nameAr:"",category:"Brand",categoryAr:"براند",logoUrl:"",order:7,visible:!0}],SI=[],II=[{id:"proof-government",headline:"High-Trust Government Environments",headlineAr:"القدرة على العمل داخل بيئات حكومية موثوقة",text:"Official occasions, institutional coverage, and sensitive moments require calm execution, protocol awareness, and clean visual delivery without noise.",textAr:"التغطيات الرسمية والمؤسساتية تحتاج هدوءاً في التنفيذ، احتراماً للبروتوكول، وتسليماً نظيفاً بدون فوضى.",source:"Government & Public Sector",sourceAr:"القطاع الحكومي والعام",highlight:"Protocol-ready coverage",highlightAr:"جاهزية بروتوكولية",order:0,visible:!0},{id:"proof-turnaround",headline:"Fast Turnaround Without Looking Rushed",headlineAr:"سرعة تسليم بدون شكل مستعجل",text:"The workflow is built to move quickly from capture to polished output, whether the project is a public event, a private commission, or a branded visual sprint.",textAr:"النظام مبني لينتقل من التصوير إلى النتيجة المصقولة بسرعة، سواء كان المشروع فعالية، جلسة خاصة، أو محتوى براند.",source:"Production Workflow",sourceAr:"نظام الإنتاج",highlight:"Speed with polish",highlightAr:"سرعة مع جودة",order:1,visible:!0},{id:"proof-ai",headline:"AI-Native Visual Development",headlineAr:"تطوير بصري قائم على AI",text:"Alongside photography and videography, the system supports hyper-real AI imagery, AI-led concepts, and high-end visual directions that stay commercially usable.",textAr:"إلى جانب التصوير والفيديو، يوجد دعم فعلي لإنشاء صور AI واقعية، أفكار مرئية، واتجاهات قابلة للاستخدام التجاري.",source:"AI Image + Video Systems",sourceAr:"أنظمة صور وفيديو AI",highlight:"AI with premium taste",highlightAr:"AI بذوق بصري",order:2,visible:!0},{id:"proof-client",headline:"Private Clients Expect Discretion",headlineAr:"العميل الخاص يحتاج خصوصية وهدوء",text:"Luxury-facing and personal work needs presence, precision, and a controlled client experience from first message to final handoff.",textAr:"الأعمال الموجهة للعملاء الخاصين والقطاع الراقي تحتاج حضوراً منضبطاً وتجربة سلسة من أول رسالة حتى آخر تسليم.",source:"Private & Premium Clients",sourceAr:"عملاء خاصون وPremium",highlight:"Discreet delivery",highlightAr:"تسليم راقٍ وهادئ",order:3,visible:!0}],I2={config:Tt,services:vI,gallery:EI,motion:TI,clients:AI,proof:II,customSections:SI},de=(r,e="")=>typeof r=="string"?r:e,No=(r,e=!0)=>typeof r=="boolean"?r:e,ct=(r,e=0)=>typeof r=="number"&&Number.isFinite(r)?r:e,b2=(r,e)=>r==="contain"||r==="cover"?r:e,MT=(r,e)=>{if(Array.isArray(r)){const n=r.filter(s=>typeof s=="string"&&s.trim().length>0);return n.length>0?n:e}if(typeof r=="string"){const n=r.split(`
`).map(s=>s.trim()).filter(Boolean);return n.length>0?n:e}return e},Oo=r=>r.map((e,n)=>({...e,order:n})),sa=r=>`${r}-${Math.random().toString(36).slice(2,10)}`,fh=(r,e={})=>{const n=Ih(e),s=typeof r=="object"&&r!==null?r:{};return{fit:b2(s.fit,n.fit),positionX:ct(s.positionX,n.positionX),positionY:ct(s.positionY,n.positionY),scale:ct(s.scale,n.scale),brightness:ct(s.brightness,n.brightness)}},mu=(r,e={})=>{const n=oi(e),s=typeof r=="object"&&r!==null?r:{};if(!("desktop"in s||"tablet"in s||"mobile"in s)){const u=fh(s,n.desktop);return{desktop:u,tablet:u,mobile:u}}return{desktop:fh(s.desktop,n.desktop),tablet:fh(s.tablet,n.tablet),mobile:fh(s.mobile,n.mobile)}},w2=r=>{const e=r??{};return{...Tt,...e,faviconImage:de(e.faviconImage,Tt.faviconImage),googleSiteVerification:de(e.googleSiteVerification,Tt.googleSiteVerification),heroBgPositionX:ct(e.heroBgPositionX,Tt.heroBgPositionX),heroBgPositionY:ct(e.heroBgPositionY,Tt.heroBgPositionY),heroBgScale:ct(e.heroBgScale,Tt.heroBgScale),heroBgBrightness:ct(e.heroBgBrightness,Tt.heroBgBrightness),heroBgTabletPositionX:ct(e.heroBgTabletPositionX,Tt.heroBgTabletPositionX),heroBgTabletPositionY:ct(e.heroBgTabletPositionY,Tt.heroBgTabletPositionY),heroBgTabletScale:ct(e.heroBgTabletScale,Tt.heroBgTabletScale),heroBgTabletBrightness:ct(e.heroBgTabletBrightness,Tt.heroBgTabletBrightness),heroBgMobilePositionX:ct(e.heroBgMobilePositionX,Tt.heroBgMobilePositionX),heroBgMobilePositionY:ct(e.heroBgMobilePositionY,Tt.heroBgMobilePositionY),heroBgMobileScale:ct(e.heroBgMobileScale,Tt.heroBgMobileScale),heroBgMobileBrightness:ct(e.heroBgMobileBrightness,Tt.heroBgMobileBrightness),heroBgOverlayOpacity:ct(e.heroBgOverlayOpacity,Tt.heroBgOverlayOpacity),aboutImageSettings:mu(e.aboutImageSettings,Tt.aboutImageSettings),portfolioPreviewImageSettings:mu(e.portfolioPreviewImageSettings,Tt.portfolioPreviewImageSettings),aiBullets:MT(e.aiBullets,Tt.aiBullets),aiBulletsAr:MT(e.aiBulletsAr,Tt.aiBulletsAr),sectionVisibility:{..._I,...e.sectionVisibility??{}}}},R2=r=>!Array.isArray(r)||r.length===0?vI:Oo(r.map((e,n)=>{const s=e??{};return{id:de(s.id,sa("service")),title:de(s.title,`Service ${n+1}`),titleAr:de(s.titleAr,""),description:de(s.description,""),descriptionAr:de(s.descriptionAr,""),iconName:de(s.iconName,"Video"),visible:No(s.visible,!0),order:ct(s.order,n)}})),C2=r=>!Array.isArray(r)||r.length===0?EI:Oo(r.map((e,n)=>{const s=e??{};return{id:de(s.id,sa("gallery")),title:de(s.title,`Gallery Item ${n+1}`),titleAr:de(s.titleAr,""),category:de(s.category,""),categoryAr:de(s.categoryAr,""),imageUrl:de(s.imageUrl??s.img,""),imageSettings:mu(s.imageSettings),linkUrl:de(s.linkUrl,""),visible:No(s.visible,!0),order:ct(s.order,n)}})),D2=r=>!Array.isArray(r)||r.length===0?TI:Oo(r.map((e,n)=>{const s=e??{};return{id:de(s.id,sa("motion")),title:de(s.title,`Highlight ${n+1}`),titleAr:de(s.titleAr,""),label:de(s.label,"Highlight"),labelAr:de(s.labelAr,""),thumbnail:de(s.thumbnail,""),imageSettings:mu(s.imageSettings),url:de(s.url,""),buttonLabel:de(s.buttonLabel,"Open Link"),buttonLabelAr:de(s.buttonLabelAr,""),visible:No(s.visible,!0),order:ct(s.order,n)}})),N2=r=>!Array.isArray(r)||r.length===0?AI:Oo(r.map((e,n)=>{if(typeof e=="string")return{id:sa("client"),name:e,nameAr:"",category:"Trusted Partner",categoryAr:"جهة موثوقة",logoUrl:"",visible:!0,order:n};const s=e??{};return{id:de(s.id,sa("client")),name:de(s.name,`Client ${n+1}`),nameAr:de(s.nameAr,""),category:de(s.category,"Trusted Partner"),categoryAr:de(s.categoryAr,""),logoUrl:de(s.logoUrl??s.logo,""),visible:No(s.visible,!0),order:ct(s.order,n)}})),O2=r=>!Array.isArray(r)||r.length===0?II:Oo(r.map((e,n)=>{const s=e??{};return{id:de(s.id,sa("proof")),headline:de(s.headline,`Proof Item ${n+1}`),headlineAr:de(s.headlineAr,""),text:de(s.text,""),textAr:de(s.textAr,""),source:de(s.source,"Proof Signal"),sourceAr:de(s.sourceAr,""),highlight:de(s.highlight,"Delivery Signal"),highlightAr:de(s.highlightAr,""),visible:No(s.visible,!0),order:ct(s.order,n)}})),V2=r=>!Array.isArray(r)||r.length===0?SI:Oo(r.map((e,n)=>{const s=e??{};return{id:de(s.id,sa("section")),eyebrow:de(s.eyebrow,"Custom Section"),eyebrowAr:de(s.eyebrowAr,""),title:de(s.title,`Section ${n+1}`),titleAr:de(s.titleAr,""),text:de(s.text,""),textAr:de(s.textAr,""),imageUrl:de(s.imageUrl,""),imageSettings:mu(s.imageSettings),buttonLabel:de(s.buttonLabel,"Learn More"),buttonLabelAr:de(s.buttonLabelAr,""),buttonUrl:de(s.buttonUrl,""),visible:No(s.visible,!0),order:ct(s.order,n)}})),Sg=r=>({config:w2(r==null?void 0:r.config),services:R2(r==null?void 0:r.services),gallery:C2(r==null?void 0:r.gallery),motion:D2(r==null?void 0:r.motion),clients:N2(r==null?void 0:r.clients),proof:O2(r==null?void 0:r.proof),customSections:V2(r==null?void 0:r.customSections)}),iM=()=>{if(typeof window>"u")return null;const r=window.localStorage.getItem(Ag);if(!r)return null;try{return Sg(JSON.parse(r))}catch(e){return console.warn("Could not parse local site bundle.",e),null}},rM=r=>{if(typeof window>"u")return;const e=Sg(r);window.localStorage.setItem(Ag,JSON.stringify(e)),window.dispatchEvent(new CustomEvent(yI,{detail:e}))},sM=()=>{typeof window>"u"||(window.localStorage.removeItem(Ag),window.dispatchEvent(new CustomEvent(yI,{detail:Sg(I2)})))},aM=()=>{if(typeof window>"u")return!1;const r=window.location.hostname.toLowerCase();return r==="localhost"||r==="127.0.0.1"||r==="0.0.0.0"};export{Z2 as $,L2 as A,w2 as B,rM as C,U2 as D,sa as E,oi as F,Sg as G,sM as H,OV as I,nM as J,UV as K,yI as L,z2 as M,PV as N,Ih as O,pV as P,mu as Q,P2 as R,B2 as S,fh as T,EV as U,jT as V,pI as W,vV as X,J2 as Y,zV as Z,q2 as _,k2 as a,fV as a$,K2 as a0,nV as a1,rI as a2,oV as a3,Ru as a4,wu as a5,uV as a6,hu as a7,ua as a8,Zr as a9,NV as aA,m2 as aB,cV as aC,kD as aD,BV as aE,eM as aF,gT as aG,uO as aH,oN as aI,VV as aJ,AV as aK,ON as aL,GV as aM,WV as aN,ZV as aO,qV as aP,HN as aQ,hV as aR,SD as aS,VN as aT,YV as aU,XV as aV,JV as aW,xD as aX,xV as aY,bV as aZ,TV as a_,iV as aa,es as ab,sr as ac,pr as ad,Th as ae,aV as af,Zs as ag,ho as ah,a2 as ai,rV as aj,FV as ak,cp as al,sV as am,o2 as an,Tg as ao,ts as ap,yV as aq,FN as ar,HV as as,WN as at,s2 as au,PN as av,gV as aw,uN as ax,lV as ay,IV as az,x2 as b,cg as b0,mV as b1,SV as b2,jV as b3,QV as b4,$V as b5,dV as b6,LV as b7,CV as b8,DV as b9,KV as ba,RV as bb,kV as bc,MV as bd,wV as be,_V as bf,pu as c,I2 as d,eV as e,F2 as f,tM as g,iM as h,aM as i,M2 as j,aD as k,tV as l,$2 as m,W2 as n,Y2 as o,X2 as p,G2 as q,so as r,j2 as s,Q2 as t,V2 as u,O2 as v,N2 as w,D2 as x,C2 as y,R2 as z};
