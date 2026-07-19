// Generated application bundle. Formatted with conservative line breaks for repository readability.
function vx(s,c){for(var r=0;r<c.length;r++){const o=c[r];if(typeof o!="string"&&!Array.isArray(o)){for(const d in o)if(d!=="default"&&!(d in s)){const m=Object.getOwnPropertyDescriptor(o,d);m&&Object.defineProperty(s,d,m.get?m:{enumerable:!0,get:()=>o[d]})}}}
return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const x of m.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&o(x)}).observe(document,{childList:!0,subtree:!0 });

function r(d){const m={ };
return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}
function o(d){if(d.ep)return;d.ep=!0;
const m=r(d);fetch(d.href,m)}})();
function I0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}
var Ur={exports:{}},ks={ };

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d0;
function bx(){if(d0)return ks;d0=1;
var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");
function r(o,d,m){var x=null;if(m!==void 0&&(x=""+m),d.key!==void 0&&(x=""+d.key),"key"in d){m={ };
for(var S in d)S!=="key"&&(m[S]=d[S])}
else m=d;return d=m.ref,{$$typeof:s,type:o,key:x,ref:d!==void 0?d:null,props:m}}
return ks.Fragment=c,ks.jsx=r,ks.jsxs=r,ks}
var m0;
function Sx(){return m0||(m0=1,Ur.exports=bx()),Ur.exports}
var f=Sx(),Br={exports:{}},Us={},Lr={exports:{}},Vr={ };

/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g0;
function Nx(){return g0||(g0=1,(function(s){function c(w,B){var M=w.length;w.push(B);t:for(;0<M;){var st=M-1>>>1,ot=w[st];if(0<d(ot,B))w[st]=B,w[M]=ot,M=st;else break t}}
function r(w){return w.length===0?null:w[0]}
function o(w){if(w.length===0)return null;
var B=w[0],M=w.pop();if(M!==B){w[0]=M;t:for(var st=0,ot=w.length,N=ot>>>1;st<N;){var U=2*(st+1)-1,k=w[U],X=U+1,W=w[X];if(0>d(k,M))X<ot&&0>d(W,k)?(w[st]=W,w[X]=M,st=X):(w[st]=k,w[U]=M,st=U);else if(X<ot&&0>d(W,M))w[st]=W,w[X]=M,st=X;else break t}}
return B}
function d(w,B){var M=w.sortIndex-B.sortIndex;return M!==0?M:w.id-B.id}
if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}
else{var x=Date,S=x.now();s.unstable_now=function(){return x.now()-S}}
var y=[],p=[],v=1,h=null,H=3,_=!1,O=!1,V=!1,Y=!1,G=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;
function F(w){for(var B=r(p);B!==null;){if(B.callback===null)o(p);else if(B.startTime<=w)o(p),B.sortIndex=B.expirationTime,c(y,B);else break;B=r(p)}}
function I(w){if(V=!1,F(w),!O)if(r(y)!==null)O=!0,nt||(nt=!0,pt());else{var B=r(p);B!==null&&St(I,B.startTime-w)}}
var nt=!1,Z=-1,Q=5,mt=-1;
function Nt(){return Y?!0:!(s.unstable_now()-mt<Q)}
function zt(){if(Y=!1,nt){var w=s.unstable_now();mt=w;
var B=!0;try{t:{O=!1,V&&(V=!1,P(Z),Z=-1),_=!0;
var M=H;try{e:{for(F(w),h=r(y);h!==null&&!(h.expirationTime>w&&Nt());){var st=h.callback;if(typeof st=="function"){h.callback=null,H=h.priorityLevel;
var ot=st(h.expirationTime<=w);if(w=s.unstable_now(),typeof ot=="function"){h.callback=ot,F(w),B=!0;break e}h===r(y)&&o(y),F(w)}
else o(y);h=r(y)}
if(h!==null)B=!0;else{var N=r(p);N!==null&&St(I,N.startTime-w),B=!1}}break t}
finally{h=null,H=M,_=!1}B=void 0}}
finally{B?pt():nt=!1}}}
var pt;if(typeof J=="function")pt=function(){J(zt) };
else if(typeof MessageChannel<"u"){var ht=new MessageChannel,vt=ht.port2;ht.port1.onmessage=zt,pt=function(){vt.postMessage(null)}}
else pt=function(){G(zt,0) };

function St(w,B){Z=G(function(){w(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(w){w.callback=null},s.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<w?Math.floor(1e3/w):5},s.unstable_getCurrentPriorityLevel=function(){return H},s.unstable_next=function(w){switch(H){case 1:case 2:case 3:var B=3;break;default:B=H}
var M=H;H=B;try{return w()}
finally{H=M}},s.unstable_requestPaint=function(){Y=!0},s.unstable_runWithPriority=function(w,B){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}
var M=H;H=w;try{return B()}
finally{H=M}},s.unstable_scheduleCallback=function(w,B,M){var st=s.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?st+M:st):M=st,w){case 1:var ot=-1;break;case 2:ot=250;break;case 5:ot=1073741823;break;case 4:ot=1e4;break;default:ot=5e3}
return ot=M+ot,w={id:v++,callback:B,priorityLevel:w,startTime:M,expirationTime:ot,sortIndex:-1},M>st?(w.sortIndex=M,c(p,w),r(y)===null&&w===r(p)&&(V?(P(Z),Z=-1):V=!0,St(I,M-st))):(w.sortIndex=ot,c(y,w),O||_||(O=!0,nt||(nt=!0,pt()))),w},s.unstable_shouldYield=Nt,s.unstable_wrapCallback=function(w){var B=H;return function(){var M=H;H=B;try{return w.apply(this,arguments)}
finally{H=M}}}})(Vr)),Vr}
var p0;
function Ex(){return p0||(p0=1,Lr.exports=Nx()),Lr.exports}
var qr={exports:{}},dt={ };

/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h0;
function wx(){if(h0)return dt;h0=1;
var s=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),x=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),H=Symbol.iterator;
function _(N){return N===null||typeof N!="object"?null:(N=H&&N[H]||N["@@iterator"],typeof N=="function"?N:null)}
var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,Y={ };

function G(N,U,k){this.props=N,this.context=U,this.refs=Y,this.updater=k||O}G.prototype.isReactComponent={},G.prototype.setState=function(N,U){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,U,"setState")},G.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate") };

function P(){}P.prototype=G.prototype;
function J(N,U,k){this.props=N,this.context=U,this.refs=Y,this.updater=k||O}
var F=J.prototype=new P;F.constructor=J,V(F,G.prototype),F.isPureReactComponent=!0;
var I=Array.isArray;
function nt(){}
var Z={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;
function mt(N,U,k){var X=k.ref;return{$$typeof:s,type:N,key:U,ref:X!==void 0?X:null,props:k}}
function Nt(N,U){return mt(N.type,U,N.props)}
function zt(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}
function pt(N){var U={"=":"=0",":":"=2" };
return"$"+N.replace(/[=:]/g,function(k){return U[k]})}
var ht=/\/+/g;
function vt(N,U){return typeof N=="object"&&N!==null&&N.key!=null?pt(""+N.key):U.toString(36)}
function St(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(nt,nt):(N.status="pending",N.then(function(U){N.status==="pending"&&(N.status="fulfilled",N.value=U)},function(U){N.status==="pending"&&(N.status="rejected",N.reason=U)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}
function w(N,U,k,X,W){var it=typeof N;(it==="undefined"||it==="boolean")&&(N=null);
var at=!1;if(N===null)at=!0;else switch(it){case"bigint":case"string":case"number":at=!0;break;case"object":switch(N.$$typeof){case s:case c:at=!0;break;case v:return at=N._init,w(at(N._payload),U,k,X,W)}}
if(at)return W=W(N),at=X===""?"."+vt(N,0):X,I(W)?(k="",at!=null&&(k=at.replace(ht,"$&/")+"/"),w(W,U,k,"",function(le){return le})):W!=null&&(zt(W)&&(W=Nt(W,k+(W.key==null||N&&N.key===W.key?"":(""+W.key).replace(ht,"$&/")+"/")+at)),U.push(W)),1;at=0;
var ut=X===""?".":X+":";if(I(N))for(var At=0;At<N.length;At++)X=N[At],it=ut+vt(X,At),at+=w(X,U,k,it,W);else if(At=_(N),typeof At=="function")for(N=At.call(N),At=0;!(X=N.next()).done;)X=X.value,it=ut+vt(X,At++),at+=w(X,U,k,it,W);else if(it==="object"){if(typeof N.then=="function")return w(St(N),U,k,X,W);throw U=String(N),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}
return at}
function B(N,U,k){if(N==null)return N;
var X=[],W=0;return w(N,X,"","",function(it){return U.call(k,it,W++) }),
X}
function M(N){if(N._status===-1){var U=N._result;U=U(),U.then(function(k){(N._status===0||N._status===-1)&&(N._status=1,N._result=k)},function(k){(N._status===0||N._status===-1)&&(N._status=2,N._result=k) }),
N._status===-1&&(N._status=0,N._result=U)}
if(N._status===1)return N._result.default;throw N._result}
var st=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N });
if(!window.dispatchEvent(U))return}
else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ot={map:B,forEach:function(N,U,k){B(N,function(){U.apply(this,arguments)},k)},count:function(N){var U=0;return B(N,function(){U++ }),
U},toArray:function(N){return B(N,function(U){return U})||[]},only:function(N){if(!zt(N))throw Error("React.Children.only expected to receive a single React element child.");return N} };
return dt.Activity=h,dt.Children=ot,dt.Component=G,dt.Fragment=r,dt.Profiler=d,dt.PureComponent=J,dt.StrictMode=o,dt.Suspense=y,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,dt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return Z.H.useMemoCache(N)}},dt.cache=function(N){return function(){return N.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(N,U,k){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");
var X=V({},N.props),W=N.key;if(U!=null)for(it in U.key!==void 0&&(W=""+U.key),U)!Q.call(U,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&U.ref===void 0||(X[it]=U[it]);
var it=arguments.length-2;if(it===1)X.children=k;else if(1<it){for(var at=Array(it),ut=0;ut<it;ut++)at[ut]=arguments[ut+2];X.children=at}
return mt(N.type,W,X)},dt.createContext=function(N){return N={$$typeof:x,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:m,_context:N},N},dt.createElement=function(N,U,k){var X,W={},it=null;if(U!=null)for(X in U.key!==void 0&&(it=""+U.key),U)Q.call(U,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(W[X]=U[X]);
var at=arguments.length-2;if(at===1)W.children=k;else if(1<at){for(var ut=Array(at),At=0;At<at;At++)ut[At]=arguments[At+2];W.children=ut}
if(N&&N.defaultProps)for(X in at=N.defaultProps,at)W[X]===void 0&&(W[X]=at[X]);return mt(N,it,W)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(N){return{$$typeof:S,render:N}},dt.isValidElement=zt,dt.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:M}},dt.memo=function(N,U){return{$$typeof:p,type:N,compare:U===void 0?null:U}},dt.startTransition=function(N){var U=Z.T,k={ };
Z.T=k;try{var X=N(),W=Z.S;W!==null&&W(k,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(nt,st)}
catch(it){st(it)}
finally{U!==null&&k.types!==null&&(U.types=k.types),Z.T=U}},dt.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},dt.use=function(N){return Z.H.use(N)},dt.useActionState=function(N,U,k){return Z.H.useActionState(N,U,k)},dt.useCallback=function(N,U){return Z.H.useCallback(N,U)},dt.useContext=function(N){return Z.H.useContext(N)},dt.useDebugValue=function(){},dt.useDeferredValue=function(N,U){return Z.H.useDeferredValue(N,U)},dt.useEffect=function(N,U){return Z.H.useEffect(N,U)},dt.useEffectEvent=function(N){return Z.H.useEffectEvent(N)},dt.useId=function(){return Z.H.useId()},dt.useImperativeHandle=function(N,U,k){return Z.H.useImperativeHandle(N,U,k)},dt.useInsertionEffect=function(N,U){return Z.H.useInsertionEffect(N,U)},dt.useLayoutEffect=function(N,U){return Z.H.useLayoutEffect(N,U)},dt.useMemo=function(N,U){return Z.H.useMemo(N,U)},dt.useOptimistic=function(N,U){return Z.H.useOptimistic(N,U)},dt.useReducer=function(N,U,k){return Z.H.useReducer(N,U,k)},dt.useRef=function(N){return Z.H.useRef(N)},dt.useState=function(N){return Z.H.useState(N)},dt.useSyncExternalStore=function(N,U,k){return Z.H.useSyncExternalStore(N,U,k)},dt.useTransition=function(){return Z.H.useTransition()},dt.version="19.2.1",dt}
var x0;
function gc(){return x0||(x0=1,qr.exports=wx()),qr.exports}
var Gr={exports:{}},de={ };

/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y0;
function jx(){if(y0)return de;y0=1;
var s=gc();
function c(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function r(){}
var o={d:{f:r,r:function(){throw Error(c(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},d=Symbol.for("react.portal");
function m(y,p,v){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:h==null?null:""+h,children:y,containerInfo:p,implementation:v}}
var x=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function S(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}
return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,de.createPortal=function(y,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(c(299));return m(y,p,null,v)},de.flushSync=function(y){var p=x.T,v=o.p;try{if(x.T=null,o.p=2,y)return y()}
finally{x.T=p,o.p=v,o.d.f()}},de.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(y,p))},de.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},de.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var v=p.as,h=S(v,p.crossOrigin),H=typeof p.integrity=="string"?p.integrity:void 0,_=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?o.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:h,integrity:H,fetchPriority:_ }):v==="script"&&o.d.X(y,{crossOrigin:h,integrity:H,fetchPriority:_,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},de.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=S(p.as,p.crossOrigin);o.d.M(y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}
else p==null&&o.d.M(y)},de.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,h=S(v,p.crossOrigin);o.d.L(y,v,{crossOrigin:h,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},de.preloadModule=function(y,p){if(typeof y=="string")if(p){var v=S(p.as,p.crossOrigin);o.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}
else o.d.m(y)},de.requestFormReset=function(y){o.d.r(y)},de.unstable_batchedUpdates=function(y,p){return y(p)},de.useFormState=function(y,p,v){return x.H.useFormState(y,p,v)},de.useFormStatus=function(){return x.H.useHostTransitionStatus()},de.version="19.2.1",de}
var v0;
function tg(){if(v0)return Gr.exports;v0=1;
function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}
catch(c){console.error(c)}}
return s(),Gr.exports=jx(),Gr.exports}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b0;
function Hx(){if(b0)return Us;b0=1;
var s=Ex(),c=gc(),r=tg();
function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}
function m(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}
return e.tag===3?a:null}
function x(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}
return null}
function S(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}
return null}
function y(t){if(m(t)!==t)throw Error(o(188))}
function p(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(o(188));return e!==t?null:t}
for(var a=t,l=e;;){var n=a.return;if(n===null)break;
var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}
if(n.child===i.child){for(i=n.child;i;){if(i===a)return y(n),t;if(i===l)return y(n),e;i=i.sibling}throw Error(o(188))}
if(a.return!==l.return)a=n,l=i;else{for(var u=!1,g=n.child;g;){if(g===a){u=!0,a=n,l=i;break}
if(g===l){u=!0,l=n,a=i;break}g=g.sibling}
if(!u){for(g=i.child;g;){if(g===a){u=!0,a=i,l=n;break}
if(g===l){u=!0,l=i,a=n;break}g=g.sibling}
if(!u)throw Error(o(189))}}
if(a.alternate!==l)throw Error(o(190))}
if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:e}
function v(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=v(t),e!==null)return e;t=t.sibling}
return null}
var h=Object.assign,H=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),J=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),mt=Symbol.for("react.activity"),Nt=Symbol.for("react.memo_cache_sentinel"),zt=Symbol.iterator;
function pt(t){return t===null||typeof t!="object"?null:(t=zt&&t[zt]||t["@@iterator"],typeof t=="function"?t:null)}
var ht=Symbol.for("react.client.reference");
function vt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ht?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case G:return"Profiler";case Y:return"StrictMode";case I:return"Suspense";case nt:return"SuspenseList";case mt:return"Activity"}
if(typeof t=="object")switch(t.$$typeof){case O:return"Portal";case J:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case F:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Z:return e=t.displayName||null,e!==null?e:vt(t.type)||"Memo";case Q:e=t._payload,t=t._init;try{return vt(t(e))}
catch{}}
return null}
var St=Array.isArray,w=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M={pending:!1,data:null,method:null,action:null},st=[],ot=-1;
function N(t){return{current:t}}
function U(t){0>ot||(t.current=st[ot],st[ot]=null,ot--)}
function k(t,e){ot++,st[ot]=t.current,t.current=e}
var X=N(null),W=N(null),it=N(null),at=N(null);
function ut(t,e){switch(k(it,e),k(W,t),k(X,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Dm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Dm(e),t=km(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}U(X),k(X,t)}
function At(){U(X),U(W),U(it)}
function le(t){t.memoizedState!==null&&k(at,t);
var e=X.current,a=km(e,t.type);e!==a&&(k(W,t),k(X,a))}
function me(t){W.current===t&&(U(X),U(W)),at.current===t&&(U(at),Os._currentValue=M)}
var ne,pa;
function Fe(t){if(ne===void 0)try{throw Error()}
catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);ne=e&&e[1]||"",pa=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ne+t+pa}
var qn=!1;
function Xl(t,e){if(!t||qn)return"";qn=!0;
var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var q=function(){throw Error() };
if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()} }),
typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}
catch(C){var R=C}Reflect.construct(t,[],q)}
else{try{q.call()}
catch(C){R=C}t.call(q.prototype)}}
else{try{throw Error()}
catch(C){R=C}(q=t())&&typeof q.catch=="function"&&q.catch(function(){})}}
catch(C){if(C&&R&&typeof C.stack=="string")return[C.stack,R.stack]}return[null,null]} };
l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";
var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot" });

var i=l.DetermineComponentFrameRoot(),u=i[0],g=i[1];if(u&&g){var b=u.split(`
`),T=g.split(`
`);for(n=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;n<T.length&&!T[n].includes("DetermineComponentFrameRoot");)n++;if(l===b.length||n===T.length)for(l=b.length-1,n=T.length-1;1<=l&&0<=n&&b[l]!==T[n];)n--;for(;1<=l&&0<=n;l--,n--)if(b[l]!==T[n]){if(l!==1||n!==1)do if(l--,n--,0>n||b[l]!==T[n]){var D=`
`+b[l].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=l&&0<=n);break}}}
finally{qn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Fe(a):""}
function hl(t,e){switch(t.tag){case 26:case 27:case 5:return Fe(t.type);case 16:return Fe("Lazy");case 13:return t.child!==e&&e!==null?Fe("Suspense Fallback"):Fe("Suspense");case 19:return Fe("SuspenseList");case 0:case 15:return Xl(t.type,!1);case 11:return Xl(t.type.render,!1);case 1:return Xl(t.type,!0);case 31:return Fe("Activity");default:return""}}
function Gn(t){try{var e="",a=null;do e+=hl(t,a),a=t,t=t.return;while(t);return e}
catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}
var ze=Object.prototype.hasOwnProperty,Yn=s.unstable_scheduleCallback,Xn=s.unstable_cancelCallback,ge=s.unstable_shouldYield,La=s.unstable_requestPaint,pe=s.unstable_now,wc=s.unstable_getCurrentPriorityLevel,xl=s.unstable_ImmediatePriority,Xs=s.unstable_UserBlockingPriority,yl=s.unstable_NormalPriority,Zn=s.unstable_LowPriority,ha=s.unstable_IdlePriority,Zs=s.log,Va=s.unstable_setDisableYieldValue,vl=null,he=null;
function $e(t){if(typeof Zs=="function"&&Va(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(vl,t)}
catch{}}
var ue=Math.clz32?Math.clz32:na,jc=Math.log,Qn=Math.LN2;
function na(t){return t>>>=0,t===0?32:31-(jc(t)/Qn|0)|0}
var Zl=256,Ql=262144,bl=4194304;
function sa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}
function ft(t,e,a){var l=t.pendingLanes;if(l===0)return 0;
var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;
var g=l&134217727;return g!==0?(l=g&~i,l!==0?n=sa(l):(u&=g,u!==0?n=sa(u):a||(a=g&~t,a!==0&&(n=sa(a))))):(g=l&~i,g!==0?n=sa(g):u!==0?n=sa(u):a||(a=l&~t,a!==0&&(n=sa(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}
function qt(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}
function te(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function fe(){var t=bl;return bl<<=1,(bl&62914560)===0&&(bl=4194304),t}
function qa(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}
function Yt(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}
function ye(t,e,a,l,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;
var g=t.entanglements,b=t.expirationTimes,T=t.hiddenUpdates;for(a=u&~a;0<a;){var D=31-ue(a),q=1<<D;g[D]=0,b[D]=-1;
var R=T[D];if(R!==null)for(T[D]=null,D=0;D<R.length;D++){var C=R[D];C!==null&&(C.lane&=-536870913)}a&=~q}l!==0&&Sl(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}
function Sl(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;
var l=31-ue(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}
function ve(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-ue(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}
function be(t,e){var a=e&-e;return a=(a&42)!==0?1:Kl(a),(a&(t.suspendedLanes|e))!==0?0:a}
function Kl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}
return t}
function Pe(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}
function Hc(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:s0(t.type))}
function bu(t,e){var a=B.p;try{return B.p=t,e()}
finally{B.p=a}}
var Ga=Math.random().toString(36).slice(2),se="__reactFiber$"+Ga,Se="__reactProps$"+Ga,Jl="__reactContainer$"+Ga,Ac="__reactEvents$"+Ga,op="__reactListeners$"+Ga,rp="__reactHandles$"+Ga,Su="__reactResources$"+Ga,Kn="__reactMarker$"+Ga;
function Tc(t){delete t[se],delete t[Se],delete t[Ac],delete t[op],delete t[rp]}
function Wl(t){var e=t[se];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Jl]||a[se]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Ym(t);t!==null;){if(a=t[se])return a;t=Ym(t)}
return e}t=a,a=t.parentNode}
return null}
function Fl(t){if(t=t[se]||t[Jl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}
return null}
function Jn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}
function $l(t){var e=t[Su];return e||(e=t[Su]={hoistableStyles:new Map,hoistableScripts:new Map }),
e}
function ee(t){t[Kn]=!0}
var Nu=new Set,Eu={ };

function Nl(t,e){Pl(t,e),Pl(t+"Capture",e)}
function Pl(t,e){for(Eu[t]=e,t=0;t<e.length;t++)Nu.add(e[t])}
var up=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wu={},ju={ };

function fp(t){return ze.call(ju,t)?!0:ze.call(wu,t)?!1:up.test(t)?ju[t]=!0:(wu[t]=!0,!1)}
function Qs(t,e,a){if(fp(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}
function Ks(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}
function xa(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}
function Ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}
function Hu(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}
function dp(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)} }),
Object.defineProperty(t,e,{enumerable:l.enumerable }),
{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}
function zc(t){if(!t._valueTracker){var e=Hu(t)?"checked":"value";t._valueTracker=dp(t,e,""+t[e])}}
function Au(t){if(!t)return!1;
var e=t._valueTracker;if(!e)return!0;
var a=e.getValue(),l="";return t&&(l=Hu(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}
function Js(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}
catch{return t.body}}
var mp=/[\n"\\]/g;
function qe(t){return t.replace(mp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}
function Rc(t,e,a,l,n,i,u,g){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ve(e)):t.value!==""+Ve(e)&&(t.value=""+Ve(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?_c(t,u,Ve(e)):a!=null?_c(t,u,Ve(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.name=""+Ve(g):t.removeAttribute("name")}
function Tu(t,e,a,l,n,i,u,g){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){zc(t);return}a=a!=null?""+Ve(a):"",e=e!=null?""+Ve(e):a,g||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=g?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),zc(t)}
function _c(t,e,a){e==="number"&&Js(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}
function Il(t,e,a,l){if(t=t.options,e){e={ };
for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}
else{for(a=""+Ve(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}
function zu(t,e,a){if(e!=null&&(e=""+Ve(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Ve(a):""}
function Ru(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(o(92));if(St(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=Ve(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),zc(t)}
function tn(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}
var gp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
function _u(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||gp.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}
function Ou(t,e,a){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&_u(t,n,l)}
else for(var i in e)e.hasOwnProperty(i)&&_u(t,i,e[i])}
function Oc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}
var pp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Ws(t){return hp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}
function ya(){}
var Mc=null;
function Cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}
var en=null,an=null;
function Mu(t){var e=Fl(t);if(e&&(t=e.stateNode)){var a=t[Se]||null;t:switch(t=e.stateNode,e.type){case"input":if(Rc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qe(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[Se]||null;if(!n)throw Error(o(90));Rc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}
for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&Au(l)}break t;case"textarea":zu(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Il(t,!!a.multiple,e,!1)}}}
var Dc=!1;
function Cu(t,e,a){if(Dc)return t(e,a);Dc=!0;try{var l=t(e);return l}
finally{if(Dc=!1,(en!==null||an!==null)&&(ki(),en&&(e=en,t=an,an=en=null,Mu(e),t)))for(e=0;e<t.length;e++)Mu(t[e])}}
function Wn(t,e){var a=t.stateNode;if(a===null)return null;
var l=a[Se]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}
if(t)return null;if(a&&typeof a!="function")throw Error(o(231,e,typeof a));return a}
var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=!1;if(va)try{var Fn={ };
Object.defineProperty(Fn,"passive",{get:function(){kc=!0} }),
window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}
catch{kc=!1}
var Ya=null,Uc=null,Fs=null;
function Du(){if(Fs)return Fs;
var t,e=Uc,a=e.length,l,n="value"in Ya?Ya.value:Ya.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);
var u=a-t;for(l=1;l<=u&&e[a-l]===n[i-l];l++);return Fs=n.slice(t,1<l?1-l:void 0)}
function $s(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}
function Ps(){return!0}
function ku(){return!1}
function Ne(t){function e(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var g in t)t.hasOwnProperty(g)&&(a=t[g],this[g]=a?a(i):i[g]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ps:ku,this.isPropagationStopped=ku,this}
return h(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;
var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ps)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ps)},persist:function(){},isPersistent:Ps }),
e}
var El={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Is=Ne(El),$n=h({},El,{view:0,detail:0 }),
xp=Ne($n),Bc,Lc,Pn,ti=h({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pn&&(Pn&&t.type==="mousemove"?(Bc=t.screenX-Pn.screenX,Lc=t.screenY-Pn.screenY):Lc=Bc=0,Pn=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Lc} }),
Uu=Ne(ti),yp=h({},ti,{dataTransfer:0 }),
vp=Ne(yp),bp=h({},$n,{relatedTarget:0 }),
Vc=Ne(bp),Sp=h({},El,{animationName:0,elapsedTime:0,pseudoElement:0 }),
Np=Ne(Sp),Ep=h({},El,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData} }),
wp=Ne(Ep),jp=h({},El,{data:0 }),
Bu=Ne(jp),Hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ap={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey" };

function zp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tp[t])?!!e[t]:!1}
function qc(){return zp}
var Rp=h({},$n,{key:function(t){if(t.key){var e=Hp[t.key]||t.key;if(e!=="Unidentified")return e}
return t.type==="keypress"?(t=$s(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ap[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(t){return t.type==="keypress"?$s(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$s(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0} }),
_p=Ne(Rp),Op=h({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0 }),
Lu=Ne(Op),Mp=h({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc }),
Cp=Ne(Mp),Dp=h({},El,{propertyName:0,elapsedTime:0,pseudoElement:0 }),
kp=Ne(Dp),Up=h({},ti,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0 }),
Bp=Ne(Up),Lp=h({},El,{newState:0,oldState:0 }),
Vp=Ne(Lp),qp=[9,13,27,32],Gc=va&&"CompositionEvent"in window,In=null;va&&"documentMode"in document&&(In=document.documentMode);
var Gp=va&&"TextEvent"in window&&!In,Vu=va&&(!Gc||In&&8<In&&11>=In),qu=" ",Gu=!1;
function Yu(t,e){switch(t){case"keyup":return qp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}
function Xu(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}
var ln=!1;
function Yp(t,e){switch(t){case"compositionend":return Xu(e);case"keypress":return e.which!==32?null:(Gu=!0,qu);case"textInput":return t=e.data,t===qu&&Gu?null:t;default:return null}}
function Xp(t,e){if(ln)return t==="compositionend"||!Gc&&Yu(t,e)?(t=Du(),Fs=Uc=Ya=null,ln=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}
return null;case"compositionend":return Vu&&e.locale!=="ko"?null:e.data;default:return null}}
var Zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0 };

function Zu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zp[t.type]:e==="textarea"}
function Qu(t,e,a,l){en?an?an.push(l):an=[l]:en=l,e=Yi(e,"onChange"),0<e.length&&(a=new Is("onChange","change",null,a,l),t.push({event:a,listeners:e}))}
var ts=null,es=null;
function Qp(t){zm(t,0)}
function ei(t){var e=Jn(t);if(Au(e))return t}
function Ku(t,e){if(t==="change")return e}
var Ju=!1;if(va){var Yc;if(va){var Xc="oninput"in document;if(!Xc){var Wu=document.createElement("div");Wu.setAttribute("oninput","return;"),Xc=typeof Wu.oninput=="function"}Yc=Xc}
else Yc=!1;Ju=Yc&&(!document.documentMode||9<document.documentMode)}
function Fu(){ts&&(ts.detachEvent("onpropertychange",$u),es=ts=null)}
function $u(t){if(t.propertyName==="value"&&ei(es)){var e=[];Qu(e,es,t,Cc(t)),Cu(Qp,e)}}
function Kp(t,e,a){t==="focusin"?(Fu(),ts=e,es=a,ts.attachEvent("onpropertychange",$u)):t==="focusout"&&Fu()}
function Jp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ei(es)}
function Wp(t,e){if(t==="click")return ei(e)}
function Fp(t,e){if(t==="input"||t==="change")return ei(e)}
function $p(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}
var Re=typeof Object.is=="function"?Object.is:$p;
function as(t,e){if(Re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;
var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!ze.call(e,n)||!Re(t[n],e[n]))return!1}return!0}
function Pu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}
function Iu(t,e){var a=Pu(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t };
t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Pu(a)}}
function tf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}
function ef(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Js(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}
catch{a=!1}
if(a)t=e.contentWindow;else break;e=Js(t.document)}
return e}
function Zc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}
var Pp=va&&"documentMode"in document&&11>=document.documentMode,nn=null,Qc=null,ls=null,Kc=!1;
function af(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||nn==null||nn!==Js(l)||(l=nn,"selectionStart"in l&&Zc(l)?l={start:l.selectionStart,end:l.selectionEnd }:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset }),
ls&&as(ls,l)||(ls=l,l=Yi(Qc,"onSelect"),0<l.length&&(e=new Is("onSelect","select",null,e,a),t.push({event:e,listeners:l }),
e.target=nn)))}
function wl(t,e){var a={ };
return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}
var sn={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionrun:wl("Transition","TransitionRun"),transitionstart:wl("Transition","TransitionStart"),transitioncancel:wl("Transition","TransitionCancel"),transitionend:wl("Transition","TransitionEnd")},Jc={},lf={ };
va&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete sn.animationend.animation,delete sn.animationiteration.animation,delete sn.animationstart.animation),"TransitionEvent"in window||delete sn.transitionend.transition);
function jl(t){if(Jc[t])return Jc[t];if(!sn[t])return t;
var e=sn[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in lf)return Jc[t]=e[a];return t}
var nf=jl("animationend"),sf=jl("animationiteration"),cf=jl("animationstart"),Ip=jl("transitionrun"),th=jl("transitionstart"),eh=jl("transitioncancel"),of=jl("transitionend"),rf=new Map,Wc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wc.push("scrollEnd");
function Ie(t,e){rf.set(t,e),Nl(e,[t])}
var ai=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t });
if(!window.dispatchEvent(e))return}
else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ge=[],cn=0,Fc=0;
function li(){for(var t=cn,e=Fc=cn=0;e<t;){var a=Ge[e];Ge[e++]=null;
var l=Ge[e];Ge[e++]=null;
var n=Ge[e];Ge[e++]=null;
var i=Ge[e];if(Ge[e++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&uf(a,n,i)}}
function ni(t,e,a,l){Ge[cn++]=t,Ge[cn++]=e,Ge[cn++]=a,Ge[cn++]=l,Fc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}
function $c(t,e,a,l){return ni(t,e,a,l),si(t)}
function Hl(t,e){return ni(t,null,null,e),si(t)}
function uf(t,e,a){t.lanes|=a;
var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-ue(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}
function si(t){if(50<js)throw js=0,cr=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}
var on={ };

function ah(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}
function _e(t,e,a,l){return new ah(t,e,a,l)}
function Pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}
function ba(t,e){var a=t.alternate;return a===null?(a=_e(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}
function ff(t,e){t.flags&=65011714;
var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext }),
t}
function ii(t,e,a,l,n,i){var u=0;if(l=t,typeof t=="function")Pc(t)&&(u=1);else if(typeof t=="string")u=cx(t,a,X.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case mt:return t=_e(31,a,e,n),t.elementType=mt,t.lanes=i,t;case V:return Al(a.children,n,i,e);case Y:u=8,n|=24;break;case G:return t=_e(12,a,e,n|2),t.elementType=G,t.lanes=i,t;case I:return t=_e(13,a,e,n),t.elementType=I,t.lanes=i,t;case nt:return t=_e(19,a,e,n),t.elementType=nt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J:u=10;break t;case P:u=9;break t;case F:u=11;break t;case Z:u=14;break t;case Q:u=16,l=null;break t}u=29,a=Error(o(130,t===null?"null":typeof t,"")),l=null}
return e=_e(u,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}
function Al(t,e,a,l){return t=_e(7,t,l,e),t.lanes=a,t}
function Ic(t,e,a){return t=_e(6,t,null,e),t.lanes=a,t}
function df(t){var e=_e(18,null,null,0);return e.stateNode=t,e}
function to(t,e,a){return e=_e(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}
var mf=new WeakMap;
function Ye(t,e){if(typeof t=="object"&&t!==null){var a=mf.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Gn(e)},mf.set(t,e),e)}return{value:t,source:e,stack:Gn(e)}}
var rn=[],un=0,ci=null,ns=0,Xe=[],Ze=0,Xa=null,ia=1,ca="";
function Sa(t,e){rn[un++]=ns,rn[un++]=ci,ci=t,ns=e}
function gf(t,e,a){Xe[Ze++]=ia,Xe[Ze++]=ca,Xe[Ze++]=Xa,Xa=t;
var l=ia;t=ca;
var n=32-ue(l)-1;l&=~(1<<n),a+=1;
var i=32-ue(e)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,ia=1<<32-ue(e)+n|a<<n|l,ca=i+t}
else ia=1<<i|a<<n|l,ca=t}
function eo(t){t.return!==null&&(Sa(t,1),gf(t,1,0))}
function ao(t){for(;t===ci;)ci=rn[--un],rn[un]=null,ns=rn[--un],rn[un]=null;for(;t===Xa;)Xa=Xe[--Ze],Xe[Ze]=null,ca=Xe[--Ze],Xe[Ze]=null,ia=Xe[--Ze],Xe[Ze]=null}
function pf(t,e){Xe[Ze++]=ia,Xe[Ze++]=ca,Xe[Ze++]=Xa,ia=e.id,ca=e.overflow,Xa=t}
var ie=null,Lt=null,Tt=!1,Za=null,Qe=!1,lo=Error(o(519));
function Qa(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ss(Ye(e,t)),lo}
function hf(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[se]=t,e[Se]=l,a){case"dialog":wt("cancel",e),wt("close",e);break;case"iframe":case"object":case"embed":wt("load",e);break;case"video":case"audio":for(a=0;a<As.length;a++)wt(As[a],e);break;case"source":wt("error",e);break;case"img":case"image":case"link":wt("error",e),wt("load",e);break;case"details":wt("toggle",e);break;case"input":wt("invalid",e),Tu(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":wt("invalid",e);break;case"textarea":wt("invalid",e),Ru(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||Mm(e.textContent,a)?(l.popover!=null&&(wt("beforetoggle",e),wt("toggle",e)),l.onScroll!=null&&wt("scroll",e),l.onScrollEnd!=null&&wt("scrollend",e),l.onClick!=null&&(e.onclick=ya),e=!0):e=!1,e||Qa(t,!0)}
function xf(t){for(ie=t.return;ie;)switch(ie.tag){case 5:case 31:case 13:Qe=!1;return;case 27:case 3:Qe=!0;return;default:ie=ie.return}}
function fn(t){if(t!==ie)return!1;if(!Tt)return xf(t),Tt=!0,!1;
var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Nr(t.type,t.memoizedProps)),a=!a),a&&Lt&&Qa(t),xf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Lt=Gm(t)}
else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Lt=Gm(t)}
else e===27?(e=Lt,il(t.type)?(t=Ar,Ar=null,Lt=t):Lt=e):Lt=ie?Je(t.stateNode.nextSibling):null;return!0}
function Tl(){Lt=ie=null,Tt=!1}
function no(){var t=Za;return t!==null&&(He===null?He=t:He.push.apply(He,t),Za=null),t}
function ss(t){Za===null?Za=[t]:Za.push(t)}
var so=N(null),zl=null,Na=null;
function Ka(t,e,a){k(so,e._currentValue),e._currentValue=a}
function Ea(t){t._currentValue=so.current,U(so)}
function io(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}
function co(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var g=i;i=n;for(var b=0;b<e.length;b++)if(g.context===e[b]){i.lanes|=a,g=i.alternate,g!==null&&(g.lanes|=a),io(i.return,a,t),l||(u=null);break t}i=g.next}}
else if(n.tag===18){if(u=n.return,u===null)throw Error(o(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),io(u,a,t),u=null}
else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}
if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}
function dn(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}
if(n.tag===10){var u=n.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var g=n.type;Re(n.pendingProps.value,u.value)||(t!==null?t.push(g):t=[g])}}
else if(n===at.current){if(u=n.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Os):t=[Os])}n=n.return}t!==null&&co(e,t,a,l),e.flags|=262144}
function oi(t){for(t=t.firstContext;t!==null;){if(!Re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}
function Rl(t){zl=t,Na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}
function ce(t){return yf(zl,t)}
function ri(t,e){return zl===null&&Rl(t),yf(t,e)}
function yf(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Na===null){if(t===null)throw Error(o(308));Na=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}
else Na=Na.next=e;return a}
var lh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)} };
this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},nh=s.unstable_scheduleCallback,sh=s.unstable_NormalPriority,Jt={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0 };

function oo(){return{controller:new lh,data:new Map,refCount:0}}
function is(t){t.refCount--,t.refCount===0&&nh(sh,function(){t.controller.abort()})}
var cs=null,ro=0,mn=0,gn=null;
function ih(t,e){if(cs===null){var a=cs=[];ro=0,mn=mr(),gn={status:"pending",value:void 0,then:function(l){a.push(l)}}}
return ro++,e.then(vf,vf),e}
function vf(){if(--ro===0&&cs!==null){gn!==null&&(gn.status="fulfilled");
var t=cs;cs=null,mn=0,gn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}
function ch(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)} };
return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0) }),
l}
var bf=w.S;w.S=function(t,e){lm=pe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&ih(t,e),bf!==null&&bf(t,e) };

var _l=N(null);
function uo(){var t=_l.current;return t!==null?t:Bt.pooledCache}
function ui(t,e){e===null?k(_l,_l.current):k(_l,e.pool)}
function Sf(){var t=uo();return t===null?null:{parent:Jt._currentValue,pool:t}}
var pn=Error(o(460)),fo=Error(o(474)),fi=Error(o(542)),di={then:function(){} };

function Nf(t){return t=t.status,t==="fulfilled"||t==="rejected"}
function Ef(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ya,ya),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,jf(t),t;default:if(typeof e.status=="string")e.then(ya,ya);else{if(t=Bt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,jf(t),t}throw Ml=e,pn}}
function Ol(t){try{var e=t._init;return e(t._payload)}
catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ml=a,pn):a}}
var Ml=null;
function wf(){if(Ml===null)throw Error(o(459));
var t=Ml;return Ml=null,t}
function jf(t){if(t===pn||t===fi)throw Error(o(483))}
var hn=null,os=0;
function mi(t){var e=os;return os+=1,hn===null&&(hn=[]),Ef(hn,t,e)}
function rs(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}
function gi(t,e){throw e.$$typeof===H?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}
function Hf(t){function e(j,E){if(t){var A=j.deletions;A===null?(j.deletions=[E],j.flags|=16):A.push(E)}}
function a(j,E){if(!t)return null;for(;E!==null;)e(j,E),E=E.sibling;return null}
function l(j){for(var E=new Map;j!==null;)j.key!==null?E.set(j.key,j):E.set(j.index,j),j=j.sibling;return E}
function n(j,E){return j=ba(j,E),j.index=0,j.sibling=null,j}
function i(j,E,A){return j.index=A,t?(A=j.alternate,A!==null?(A=A.index,A<E?(j.flags|=67108866,E):A):(j.flags|=67108866,E)):(j.flags|=1048576,E)}
function u(j){return t&&j.alternate===null&&(j.flags|=67108866),j}
function g(j,E,A,L){return E===null||E.tag!==6?(E=Ic(A,j.mode,L),E.return=j,E):(E=n(E,A),E.return=j,E)}
function b(j,E,A,L){var ct=A.type;return ct===V?D(j,E,A.props.children,L,A.key):E!==null&&(E.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===Q&&Ol(ct)===E.type)?(E=n(E,A.props),rs(E,A),E.return=j,E):(E=ii(A.type,A.key,A.props,null,j.mode,L),rs(E,A),E.return=j,E)}
function T(j,E,A,L){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=to(A,j.mode,L),E.return=j,E):(E=n(E,A.children||[]),E.return=j,E)}
function D(j,E,A,L,ct){return E===null||E.tag!==7?(E=Al(A,j.mode,L,ct),E.return=j,E):(E=n(E,A),E.return=j,E)}
function q(j,E,A){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Ic(""+E,j.mode,A),E.return=j,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _:return A=ii(E.type,E.key,E.props,null,j.mode,A),rs(A,E),A.return=j,A;case O:return E=to(E,j.mode,A),E.return=j,E;case Q:return E=Ol(E),q(j,E,A)}
if(St(E)||pt(E))return E=Al(E,j.mode,A,null),E.return=j,E;if(typeof E.then=="function")return q(j,mi(E),A);if(E.$$typeof===J)return q(j,ri(j,E),A);gi(j,E)}
return null}
function R(j,E,A,L){var ct=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ct!==null?null:g(j,E,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case _:return A.key===ct?b(j,E,A,L):null;case O:return A.key===ct?T(j,E,A,L):null;case Q:return A=Ol(A),R(j,E,A,L)}
if(St(A)||pt(A))return ct!==null?null:D(j,E,A,L,null);if(typeof A.then=="function")return R(j,E,mi(A),L);if(A.$$typeof===J)return R(j,E,ri(j,A),L);gi(j,A)}
return null}
function C(j,E,A,L,ct){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return j=j.get(A)||null,g(E,j,""+L,ct);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case _:return j=j.get(L.key===null?A:L.key)||null,b(E,j,L,ct);case O:return j=j.get(L.key===null?A:L.key)||null,T(E,j,L,ct);case Q:return L=Ol(L),C(j,E,A,L,ct)}
if(St(L)||pt(L))return j=j.get(A)||null,D(E,j,L,ct,null);if(typeof L.then=="function")return C(j,E,A,mi(L),ct);if(L.$$typeof===J)return C(j,E,A,ri(E,L),ct);gi(E,L)}
return null}
function $(j,E,A,L){for(var ct=null,Rt=null,lt=E,xt=E=0,Ht=null;lt!==null&&xt<A.length;xt++){lt.index>xt?(Ht=lt,lt=null):Ht=lt.sibling;
var _t=R(j,lt,A[xt],L);if(_t===null){lt===null&&(lt=Ht);break}t&&lt&&_t.alternate===null&&e(j,lt),E=i(_t,E,xt),Rt===null?ct=_t:Rt.sibling=_t,Rt=_t,lt=Ht}
if(xt===A.length)return a(j,lt),Tt&&Sa(j,xt),ct;if(lt===null){for(;xt<A.length;xt++)lt=q(j,A[xt],L),lt!==null&&(E=i(lt,E,xt),Rt===null?ct=lt:Rt.sibling=lt,Rt=lt);return Tt&&Sa(j,xt),ct}
for(lt=l(lt);xt<A.length;xt++)Ht=C(lt,j,xt,A[xt],L),Ht!==null&&(t&&Ht.alternate!==null&&lt.delete(Ht.key===null?xt:Ht.key),E=i(Ht,E,xt),Rt===null?ct=Ht:Rt.sibling=Ht,Rt=Ht);return t&&lt.forEach(function(fl){return e(j,fl) }),
Tt&&Sa(j,xt),ct}
function rt(j,E,A,L){if(A==null)throw Error(o(151));for(var ct=null,Rt=null,lt=E,xt=E=0,Ht=null,_t=A.next();lt!==null&&!_t.done;xt++,_t=A.next()){lt.index>xt?(Ht=lt,lt=null):Ht=lt.sibling;
var fl=R(j,lt,_t.value,L);if(fl===null){lt===null&&(lt=Ht);break}t&&lt&&fl.alternate===null&&e(j,lt),E=i(fl,E,xt),Rt===null?ct=fl:Rt.sibling=fl,Rt=fl,lt=Ht}
if(_t.done)return a(j,lt),Tt&&Sa(j,xt),ct;if(lt===null){for(;!_t.done;xt++,_t=A.next())_t=q(j,_t.value,L),_t!==null&&(E=i(_t,E,xt),Rt===null?ct=_t:Rt.sibling=_t,Rt=_t);return Tt&&Sa(j,xt),ct}
for(lt=l(lt);!_t.done;xt++,_t=A.next())_t=C(lt,j,xt,_t.value,L),_t!==null&&(t&&_t.alternate!==null&&lt.delete(_t.key===null?xt:_t.key),E=i(_t,E,xt),Rt===null?ct=_t:Rt.sibling=_t,Rt=_t);return t&&lt.forEach(function(yx){return e(j,yx) }),
Tt&&Sa(j,xt),ct}
function Ut(j,E,A,L){if(typeof A=="object"&&A!==null&&A.type===V&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case _:t:{for(var ct=A.key;E!==null;){if(E.key===ct){if(ct=A.type,ct===V){if(E.tag===7){a(j,E.sibling),L=n(E,A.props.children),L.return=j,j=L;break t}}
else if(E.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===Q&&Ol(ct)===E.type){a(j,E.sibling),L=n(E,A.props),rs(L,A),L.return=j,j=L;break t}a(j,E);break}
else e(j,E);E=E.sibling}A.type===V?(L=Al(A.props.children,j.mode,L,A.key),L.return=j,j=L):(L=ii(A.type,A.key,A.props,null,j.mode,L),rs(L,A),L.return=j,j=L)}
return u(j);case O:t:{for(ct=A.key;E!==null;){if(E.key===ct)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){a(j,E.sibling),L=n(E,A.children||[]),L.return=j,j=L;break t}
else{a(j,E);break}
else e(j,E);E=E.sibling}L=to(A,j.mode,L),L.return=j,j=L}
return u(j);case Q:return A=Ol(A),Ut(j,E,A,L)}
if(St(A))return $(j,E,A,L);if(pt(A)){if(ct=pt(A),typeof ct!="function")throw Error(o(150));return A=ct.call(A),rt(j,E,A,L)}
if(typeof A.then=="function")return Ut(j,E,mi(A),L);if(A.$$typeof===J)return Ut(j,E,ri(j,A),L);gi(j,A)}
return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,E!==null&&E.tag===6?(a(j,E.sibling),L=n(E,A),L.return=j,j=L):(a(j,E),L=Ic(A,j.mode,L),L.return=j,j=L),u(j)):a(j,E)}
return function(j,E,A,L){try{os=0;
var ct=Ut(j,E,A,L);return hn=null,ct}
catch(lt){if(lt===pn||lt===fi)throw lt;
var Rt=_e(29,lt,null,j.mode);return Rt.lanes=L,Rt.return=j,Rt}
finally{}}}
var Cl=Hf(!0),Af=Hf(!1),Ja=!1;
function mo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}
function go(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}
function Wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}
function Fa(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ot&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=si(t),uf(t,null,a),e}
return ni(t,l,e,a),si(t)}
function us(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,ve(t,a)}}
function po(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null };
i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}
else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}
var ho=!1;
function fs(){if(ho){var t=gn;if(t!==null)throw t}}
function ds(t,e,a,l){ho=!1;
var n=t.updateQueue;Ja=!1;
var i=n.firstBaseUpdate,u=n.lastBaseUpdate,g=n.shared.pending;if(g!==null){n.shared.pending=null;
var b=g,T=b.next;b.next=null,u===null?i=T:u.next=T,u=b;
var D=t.alternate;D!==null&&(D=D.updateQueue,g=D.lastBaseUpdate,g!==u&&(g===null?D.firstBaseUpdate=T:g.next=T,D.lastBaseUpdate=b))}
if(i!==null){var q=n.baseState;u=0,D=T=b=null,g=i;do{var R=g.lane&-536870913,C=R!==g.lane;if(C?(jt&R)===R:(l&R)===R){R!==0&&R===mn&&(ho=!0),D!==null&&(D=D.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null });
t:{var $=t,rt=g;R=e;
var Ut=a;switch(rt.tag){case 1:if($=rt.payload,typeof $=="function"){q=$.call(Ut,q,R);break t}q=$;break t;case 3:$.flags=$.flags&-65537|128;case 0:if($=rt.payload,R=typeof $=="function"?$.call(Ut,q,R):$,R==null)break t;q=h({},q,R);break t;case 2:Ja=!0}}R=g.callback,R!==null&&(t.flags|=64,C&&(t.flags|=8192),C=n.callbacks,C===null?n.callbacks=[R]:C.push(R))}
else C={lane:R,tag:g.tag,payload:g.payload,callback:g.callback,next:null},D===null?(T=D=C,b=q):D=D.next=C,u|=R;if(g=g.next,g===null){if(g=n.shared.pending,g===null)break;C=g,g=C.next,C.next=null,n.lastBaseUpdate=C,n.shared.pending=null}}while(!0);D===null&&(b=q),n.baseState=b,n.firstBaseUpdate=T,n.lastBaseUpdate=D,i===null&&(n.shared.lanes=0),el|=u,t.lanes=u,t.memoizedState=q}}
function Tf(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}
function zf(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Tf(a[t],e)}
var xn=N(null),pi=N(0);
function Rf(t,e){t=Oa,k(pi,t),k(xn,e),Oa=t|e.baseLanes}
function xo(){k(pi,Oa),k(xn,xn.current)}
function yo(){Oa=pi.current,U(xn),U(pi)}
var Oe=N(null),Ke=null;
function $a(t){var e=t.alternate;k(Qt,Qt.current&1),k(Oe,t),Ke===null&&(e===null||xn.current!==null||e.memoizedState!==null)&&(Ke=t)}
function vo(t){k(Qt,Qt.current),k(Oe,t),Ke===null&&(Ke=t)}
function _f(t){t.tag===22?(k(Qt,Qt.current),k(Oe,t),Ke===null&&(Ke=t)):Pa()}
function Pa(){k(Qt,Qt.current),k(Oe,Oe.current)}
function Me(t){U(Oe),Ke===t&&(Ke=null),U(Qt)}
var Qt=N(0);
function hi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jr(a)||Hr(a)))return e}
else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}
else if(e.child!==null){e.child.return=e,e=e.child;continue}
if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}
return null}
var wa=0,gt=null,Dt=null,Wt=null,xi=!1,yn=!1,Dl=!1,yi=0,ms=0,vn=null,oh=0;
function Xt(){throw Error(o(321))}
function bo(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Re(t[a],e[a]))return!1;return!0}
function So(t,e,a,l,n,i){return wa=i,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,w.H=t===null||t.memoizedState===null?gd:ko,Dl=!1,i=a(l,n),Dl=!1,yn&&(i=Mf(e,a,l,n)),Of(t),i}
function Of(t){w.H=hs;
var e=Dt!==null&&Dt.next!==null;if(wa=0,Wt=Dt=gt=null,xi=!1,ms=0,vn=null,e)throw Error(o(300));t===null||Ft||(t=t.dependencies,t!==null&&oi(t)&&(Ft=!0))}
function Mf(t,e,a,l){gt=t;
var n=0;do{if(yn&&(vn=null),ms=0,yn=!1,25<=n)throw Error(o(301));if(n+=1,Wt=Dt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=pd,i=e(a,l)}while(yn);return i}
function rh(){var t=w.H,e=t.useState()[0];return e=typeof e.then=="function"?gs(e):e,t=t.useState()[0],(Dt!==null?Dt.memoizedState:null)!==t&&(gt.flags|=1024),e}
function No(){var t=yi!==0;return yi=0,t}
function Eo(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}
function wo(t){if(xi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}xi=!1}wa=0,Wt=Dt=gt=null,yn=!1,ms=yi=0,vn=null}
function xe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null };
return Wt===null?gt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}
function Kt(){if(Dt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}
else t=Dt.next;
var e=Wt===null?gt.memoizedState:Wt.next;if(e!==null)Wt=e,Dt=t;else{if(t===null)throw gt.alternate===null?Error(o(467)):Error(o(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Wt===null?gt.memoizedState=Wt=t:Wt=Wt.next=t}
return Wt}
function vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}
function gs(t){var e=ms;return ms+=1,vn===null&&(vn=[]),t=Ef(vn,t,e),e=gt,(Wt===null?e.memoizedState:Wt.next)===null&&(e=e.alternate,w.H=e===null||e.memoizedState===null?gd:ko),t}
function bi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return gs(t);if(t.$$typeof===J)return ce(t)}throw Error(o(438,String(t)))}
function jo(t){var e=null,a=gt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=gt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice() }),
index:0})))}
if(e==null&&(e={data:[],index:0 }),
a===null&&(a=vi(),gt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=Nt;return e.index++,a}
function ja(t,e){return typeof e=="function"?e(t):e}
function Si(t){var e=Kt();return Ho(e,Dt,t)}
function Ho(t,e,a){var l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;
var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,l.pending=null}
if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;
var g=u=null,b=null,T=e,D=!1;do{var q=T.lane&-536870913;if(q!==T.lane?(jt&q)===q:(wa&q)===q){var R=T.revertLane;if(R===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null }),
q===mn&&(D=!0);else if((wa&R)===R){T=T.next,R===mn&&(D=!0);continue}
else q={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},b===null?(g=b=q,u=i):b=b.next=q,gt.lanes|=R,el|=R;q=T.action,Dl&&a(i,q),i=T.hasEagerState?T.eagerState:a(i,q)}
else R={lane:q,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},b===null?(g=b=R,u=i):b=b.next=R,gt.lanes|=q,el|=q;T=T.next}while(T!==null&&T!==e);if(b===null?u=i:b.next=g,!Re(i,t.memoizedState)&&(Ft=!0,D&&(a=gn,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=b,l.lastRenderedState=i}
return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}
function Ao(t){var e=Kt(),a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;
var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;
var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Re(i,e.memoizedState)||(Ft=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}
function Cf(t,e,a){var l=gt,n=Kt(),i=Tt;if(i){if(a===void 0)throw Error(o(407));a=a()}
else a=e();
var u=!Re((Dt||n).memoizedState,a);if(u&&(n.memoizedState=a,Ft=!0),n=n.queue,Ro(Uf.bind(null,l,n,t),[t]),n.getSnapshot!==e||u||Wt!==null&&Wt.memoizedState.tag&1){if(l.flags|=2048,bn(9,{destroy:void 0},kf.bind(null,l,n,a,e),null),Bt===null)throw Error(o(349));i||(wa&127)!==0||Df(l,e,a)}
return a}
function Df(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=gt.updateQueue,e===null?(e=vi(),gt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}
function kf(t,e,a,l){e.value=a,e.getSnapshot=l,Bf(e)&&Lf(t)}
function Uf(t,e,a){return a(function(){Bf(e)&&Lf(t)})}
function Bf(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Re(t,a)}
catch{return!0}}
function Lf(t){var e=Hl(t,2);e!==null&&Ae(e,t,2)}
function To(t){var e=xe();if(typeof t=="function"){var a=t;if(t=a(),Dl){$e(!0);try{a()}
finally{$e(!1)}}}
return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},e}
function Vf(t,e,a,l){return t.baseState=a,Ho(t,Dt,typeof l=="function"?l:ja)}
function uh(t,e,a,l,n){if(wi(t))throw Error(o(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)} };
w.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,qf(e,i)):(i.next=a.next,e.pending=a.next=i)}}
function qf(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=w.T,u={ };
w.T=u;try{var g=a(n,l),b=w.S;b!==null&&b(u,g),Gf(t,e,g)}
catch(T){zo(t,e,T)}
finally{i!==null&&u.types!==null&&(i.types=u.types),w.T=i}}
else try{i=a(n,l),Gf(t,e,i)}
catch(T){zo(t,e,T)}}
function Gf(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Yf(t,e,l)},function(l){return zo(t,e,l) }):Yf(t,e,a)}
function Yf(t,e,a){e.status="fulfilled",e.value=a,Xf(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,qf(t,a)))}
function zo(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,Xf(e),e=e.next;while(e!==l)}t.action=null}
function Xf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}
function Zf(t,e){return e}
function Qf(t,e){if(Tt){var a=Bt.formState;if(a!==null){t:{var l=gt;if(Tt){if(Lt){e:{for(var n=Lt,i=Qe;n.nodeType!==8;){if(!i){n=null;break e}
if(n=Je(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}
if(n){Lt=Je(n.nextSibling),l=n.data==="F!";break t}}Qa(l)}l=!1}l&&(e=a[0])}}
return a=xe(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zf,lastRenderedState:e},a.queue=l,a=fd.bind(null,gt,l),l.dispatch=a,l=To(!1),i=Do.bind(null,gt,!1,l.queue),l=xe(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=uh.bind(null,gt,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}
function Kf(t){var e=Kt();return Jf(e,Dt,t)}
function Jf(t,e,a){if(e=Ho(t,e,Zf)[0],t=Si(ja)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=gs(e)}
catch(u){throw u===pn?fi:u}
else l=e;e=Kt();
var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(gt.flags|=2048,bn(9,{destroy:void 0},fh.bind(null,n,a),null)),[l,i,t]}
function fh(t,e){t.action=e}
function Wf(t){var e=Kt(),a=Dt;if(a!==null)return Jf(e,a,t);Kt(),e=e.memoizedState,a=Kt();
var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}
function bn(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=gt.updateQueue,e===null&&(e=vi(),gt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}
function Ff(){return Kt().memoizedState}
function Ni(t,e,a,l){var n=xe();gt.flags|=t,n.memoizedState=bn(1|e,{destroy:void 0},a,l===void 0?null:l)}
function Ei(t,e,a,l){var n=Kt();l=l===void 0?null:l;
var i=n.memoizedState.inst;Dt!==null&&l!==null&&bo(l,Dt.memoizedState.deps)?n.memoizedState=bn(e,i,a,l):(gt.flags|=t,n.memoizedState=bn(1|e,i,a,l))}
function $f(t,e){Ni(8390656,8,t,e)}
function Ro(t,e){Ei(2048,8,t,e)}
function dh(t){gt.flags|=4;
var e=gt.updateQueue;if(e===null)e=vi(),gt.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}
function Pf(t){var e=Kt().memoizedState;return dh({ref:e,nextImpl:t }),
function(){if((Ot&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}
function If(t,e){return Ei(4,2,t,e)}
function td(t,e){return Ei(4,4,t,e)}
function ed(t,e){if(typeof e=="function"){t=t();
var a=e(t);return function(){typeof a=="function"?a():e(null)}}
if(e!=null)return t=t(),e.current=t,function(){e.current=null}}
function ad(t,e,a){a=a!=null?a.concat([t]):null,Ei(4,4,ed.bind(null,e,t),a)}
function _o(){}
function ld(t,e){var a=Kt();e=e===void 0?null:e;
var l=a.memoizedState;return e!==null&&bo(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}
function nd(t,e){var a=Kt();e=e===void 0?null:e;
var l=a.memoizedState;if(e!==null&&bo(e,l[1]))return l[0];if(l=t(),Dl){$e(!0);try{t()}
finally{$e(!1)}}
return a.memoizedState=[l,e],l}
function Oo(t,e,a){return a===void 0||(wa&1073741824)!==0&&(jt&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=sm(),gt.lanes|=t,el|=t,a)}
function sd(t,e,a,l){return Re(a,e)?a:xn.current!==null?(t=Oo(t,a,l),Re(t,e)||(Ft=!0),t):(wa&42)===0||(wa&1073741824)!==0&&(jt&261930)===0?(Ft=!0,t.memoizedState=a):(t=sm(),gt.lanes|=t,el|=t,e)}
function id(t,e,a,l,n){var i=B.p;B.p=i!==0&&8>i?i:8;
var u=w.T,g={ };
w.T=g,Do(t,!1,e,a);try{var b=n(),T=w.S;if(T!==null&&T(g,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var D=ch(b,l);ps(t,e,D,ke(t))}
else ps(t,e,l,ke(t))}
catch(q){ps(t,e,{then:function(){},status:"rejected",reason:q},ke())}
finally{B.p=i,u!==null&&g.types!==null&&(u.types=g.types),w.T=u}}
function mh(){}
function Mo(t,e,a,l){if(t.tag!==5)throw Error(o(476));
var n=cd(t).queue;id(t,n,e,M,a===null?mh:function(){return od(t),a(l)})}
function cd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:M,baseState:M,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:M},next:null };

var a={ };
return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}
function od(t){var e=cd(t);e.next===null&&(e=t.alternate.memoizedState),ps(t,e.next.queue,{},ke())}
function Co(){return ce(Os)}
function rd(){return Kt().memoizedState}
function ud(){return Kt().memoizedState}
function gh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ke();t=Wa(a);
var l=Fa(e,t,a);l!==null&&(Ae(l,e,a),us(l,e,a)),e={cache:oo()},t.payload=e;return}e=e.return}}
function ph(t,e,a){var l=ke();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wi(t)?dd(e,a):(a=$c(t,e,a,l),a!==null&&(Ae(a,t,l),md(a,e,l)))}
function fd(t,e,a){var l=ke();ps(t,e,a,l)}
function ps(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null };
if(wi(t))dd(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,g=i(u,a);if(n.hasEagerState=!0,n.eagerState=g,Re(g,u))return ni(t,e,n,0),Bt===null&&li(),!1}
catch{}
finally{}
if(a=$c(t,e,n,l),a!==null)return Ae(a,t,l),md(a,e,l),!0}return!1}
function Do(t,e,a,l){if(l={lane:2,revertLane:mr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},wi(t)){if(e)throw Error(o(479))}
else e=$c(t,a,l,2),e!==null&&Ae(e,t,2)}
function wi(t){var e=t.alternate;return t===gt||e!==null&&e===gt}
function dd(t,e){yn=xi=!0;
var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}
function md(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,ve(t,a)}}
var hs={readContext:ce,use:bi,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useLayoutEffect:Xt,useInsertionEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useSyncExternalStore:Xt,useId:Xt,useHostTransitionStatus:Xt,useFormState:Xt,useActionState:Xt,useOptimistic:Xt,useMemoCache:Xt,useCacheRefresh:Xt };
hs.useEffectEvent=Xt;
var gd={readContext:ce,use:bi,useCallback:function(t,e){return xe().memoizedState=[t,e===void 0?null:e],t},useContext:ce,useEffect:$f,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Ni(4194308,4,ed.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Ni(4194308,4,t,e)},useInsertionEffect:function(t,e){Ni(4,2,t,e)},useMemo:function(t,e){var a=xe();e=e===void 0?null:e;
var l=t();if(Dl){$e(!0);try{t()}
finally{$e(!1)}}
return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=xe();if(a!==void 0){var n=a(e);if(Dl){$e(!0);try{a(e)}
finally{$e(!1)}}}
else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=ph.bind(null,gt,t),[l.memoizedState,t]},useRef:function(t){var e=xe();return t={current:t},e.memoizedState=t},useState:function(t){t=To(t);
var e=t.queue,a=fd.bind(null,gt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:_o,useDeferredValue:function(t,e){var a=xe();return Oo(a,t,e)},useTransition:function(){var t=To(!1);return t=id.bind(null,gt,t.queue,!0,!1),xe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=gt,n=xe();if(Tt){if(a===void 0)throw Error(o(407));a=a()}
else{if(a=e(),Bt===null)throw Error(o(349));(jt&127)!==0||Df(l,e,a)}n.memoizedState=a;
var i={value:a,getSnapshot:e };
return n.queue=i,$f(Uf.bind(null,l,i,t),[t]),l.flags|=2048,bn(9,{destroy:void 0},kf.bind(null,l,i,a,e),null),a},useId:function(){var t=xe(),e=Bt.identifierPrefix;if(Tt){var a=ca,l=ia;a=(l&~(1<<32-ue(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=yi++,0<a&&(e+="H"+a.toString(32)),e+="_"}
else a=oh++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Co,useFormState:Qf,useActionState:Qf,useOptimistic:function(t){var e=xe();e.memoizedState=e.baseState=t;
var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null };
return e.queue=a,e=Do.bind(null,gt,!0,a),a.dispatch=e,[t,e]},useMemoCache:jo,useCacheRefresh:function(){return xe().memoizedState=gh.bind(null,gt)},useEffectEvent:function(t){var e=xe(),a={impl:t };
return e.memoizedState=a,function(){if((Ot&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},ko={readContext:ce,use:bi,useCallback:ld,useContext:ce,useEffect:Ro,useImperativeHandle:ad,useInsertionEffect:If,useLayoutEffect:td,useMemo:nd,useReducer:Si,useRef:Ff,useState:function(){return Si(ja)},useDebugValue:_o,useDeferredValue:function(t,e){var a=Kt();return sd(a,Dt.memoizedState,t,e)},useTransition:function(){var t=Si(ja)[0],e=Kt().memoizedState;return[typeof t=="boolean"?t:gs(t),e]},useSyncExternalStore:Cf,useId:rd,useHostTransitionStatus:Co,useFormState:Kf,useActionState:Kf,useOptimistic:function(t,e){var a=Kt();return Vf(a,Dt,t,e)},useMemoCache:jo,useCacheRefresh:ud };
ko.useEffectEvent=Pf;
var pd={readContext:ce,use:bi,useCallback:ld,useContext:ce,useEffect:Ro,useImperativeHandle:ad,useInsertionEffect:If,useLayoutEffect:td,useMemo:nd,useReducer:Ao,useRef:Ff,useState:function(){return Ao(ja)},useDebugValue:_o,useDeferredValue:function(t,e){var a=Kt();return Dt===null?Oo(a,t,e):sd(a,Dt.memoizedState,t,e)},useTransition:function(){var t=Ao(ja)[0],e=Kt().memoizedState;return[typeof t=="boolean"?t:gs(t),e]},useSyncExternalStore:Cf,useId:rd,useHostTransitionStatus:Co,useFormState:Wf,useActionState:Wf,useOptimistic:function(t,e){var a=Kt();return Dt!==null?Vf(a,Dt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:jo,useCacheRefresh:ud };
pd.useEffectEvent=Pf;
function Uo(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:h({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}
var Bo={enqueueSetState:function(t,e,a){t=t._reactInternals;
var l=ke(),n=Wa(l);n.payload=e,a!=null&&(n.callback=a),e=Fa(t,n,l),e!==null&&(Ae(e,t,l),us(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;
var l=ke(),n=Wa(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=Fa(t,n,l),e!==null&&(Ae(e,t,l),us(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;
var a=ke(),l=Wa(a);l.tag=2,e!=null&&(l.callback=e),e=Fa(t,l,a),e!==null&&(Ae(e,t,a),us(e,t,a))} };

function hd(t,e,a,l,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!as(a,l)||!as(n,i):!0}
function xd(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&Bo.enqueueReplaceState(e,e.state,null)}
function kl(t,e){var a=e;if("ref"in e){a={ };
for(var l in e)l!=="ref"&&(a[l]=e[l])}
if(t=t.defaultProps){a===e&&(a=h({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}
return a}
function yd(t){ai(t)}
function vd(t){console.error(t)}
function bd(t){ai(t)}
function ji(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}
catch(l){setTimeout(function(){throw l})}}
function Sd(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}
catch(n){setTimeout(function(){throw n})}}
function Lo(t,e,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){ji(t,e)},a}
function Nd(t){return t=Wa(t),t.tag=3,t}
function Ed(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){Sd(e,a,l)}}
var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Sd(e,a,l),typeof n!="function"&&(al===null?al=new Set([this]):al.add(this));
var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}
function hh(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&dn(e,a,n,!0),a=Oe.current,a!==null){switch(a.tag){case 31:case 13:return Ke===null?Ui():a.alternate===null&&Zt===0&&(Zt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===di?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),ur(t,l,n)),!1;case 22:return a.flags|=65536,l===di?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),ur(t,l,n)),!1}throw Error(o(435,a.tag))}
return ur(t,l,n),Ui(),!1}
if(Tt)return e=Oe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==lo&&(t=Error(o(422),{cause:l }),
ss(Ye(t,a)))):(l!==lo&&(e=Error(o(423),{cause:l }),
ss(Ye(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=Ye(l,a),n=Lo(t.stateNode,l,n),po(t,n),Zt!==4&&(Zt=2)),!1;
var i=Error(o(520),{cause:l });
if(i=Ye(i,a),ws===null?ws=[i]:ws.push(i),Zt!==4&&(Zt=2),e===null)return!0;l=Ye(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=Lo(a.stateNode,l,t),po(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(al===null||!al.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Nd(n),Ed(n,t,a,l),po(a,n),!1}a=a.return}while(a!==null);return!1}
var Vo=Error(o(461)),Ft=!1;
function oe(t,e,a,l){e.child=t===null?Af(e,null,a,l):Cl(e,t.child,a,l)}
function wd(t,e,a,l,n){a=a.render;
var i=e.ref;if("ref"in l){var u={ };
for(var g in l)g!=="ref"&&(u[g]=l[g])}
else u=l;return Rl(e),l=So(t,e,a,u,i,n),g=No(),t!==null&&!Ft?(Eo(t,e,n),Ha(t,e,n)):(Tt&&g&&eo(e),e.flags|=1,oe(t,e,l,n),e.child)}
function jd(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Pc(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,Hd(t,e,i,l,n)):(t=ii(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}
if(i=t.child,!Jo(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:as,a(u,l)&&t.ref===e.ref)return Ha(t,e,n)}
return e.flags|=1,t=ba(i,l),t.ref=e.ref,t.return=e,e.child=t}
function Hd(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(as(i,l)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=l=i,Jo(t,n))(t.flags&131072)!==0&&(Ft=!0);else return e.lanes=t.lanes,Ha(t,e,n)}
return qo(t,e,a,l,n)}
function Ad(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null }),
l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}
else l=0,e.child=null;return Td(t,e,i,a,l)}
if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ui(e,i!==null?i.cachePool:null),i!==null?Rf(e,i):xo(),_f(e);else return l=e.lanes=536870912,Td(t,e,i!==null?i.baseLanes|a:a,a,l)}
else i!==null?(ui(e,i.cachePool),Rf(e,i),Pa(),e.memoizedState=null):(t!==null&&ui(e,null),xo(),Pa());return oe(t,e,n,a),e.child}
function xs(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null }),
e.sibling}
function Td(t,e,a,l,n){var i=uo();return i=i===null?null:{parent:Jt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&ui(e,null),xo(),_f(e),t!==null&&dn(t,e,l,!0),e.childLanes=n,null}
function Hi(t,e){return e=Ti({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}
function zd(t,e,a){return Cl(e,t.child,null,a),t=Hi(e,e.pendingProps),t.flags|=2,Me(e),e.memoizedState=null,t}
function xh(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Tt){if(l.mode==="hidden")return t=Hi(e,l),e.lanes=536870912,xs(null,t);if(vo(e),(t=Lt)?(t=qm(t,Qe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:ia,overflow:ca }:null,retryLane:536870912,hydrationErrors:null},a=df(t),a.return=e,e.child=a,ie=e,Lt=null)):t=null,t===null)throw Qa(e);return e.lanes=536870912,null}
return Hi(e,l)}
var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(vo(e),n)if(e.flags&256)e.flags&=-257,e=zd(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(Ft||dn(t,e,a,!1),n=(a&t.childLanes)!==0,Ft||n){if(l=Bt,l!==null&&(u=be(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Hl(t,u),Ae(l,t,u),Vo;Ui(),e=zd(t,e,a)}
else t=i.treeContext,Lt=Je(u.nextSibling),ie=e,Tt=!0,Za=null,Qe=!1,t!==null&&pf(e,t),e=Hi(e,l),e.flags|=4096;return e}
return t=ba(t.child,{mode:l.mode,children:l.children }),
t.ref=e.ref,e.child=t,t.return=e,t}
function Ai(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}
function qo(t,e,a,l,n){return Rl(e),a=So(t,e,a,l,void 0,n),l=No(),t!==null&&!Ft?(Eo(t,e,n),Ha(t,e,n)):(Tt&&l&&eo(e),e.flags|=1,oe(t,e,a,n),e.child)}
function Rd(t,e,a,l,n,i){return Rl(e),e.updateQueue=null,a=Mf(e,l,a,n),Of(t),l=No(),t!==null&&!Ft?(Eo(t,e,i),Ha(t,e,i)):(Tt&&l&&eo(e),e.flags|=1,oe(t,e,a,i),e.child)}
function _d(t,e,a,l,n){if(Rl(e),e.stateNode===null){var i=on,u=a.contextType;typeof u=="object"&&u!==null&&(i=ce(u)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bo,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},mo(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?ce(u):on,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Uo(e,a,u,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Bo.enqueueReplaceState(i,i.state,null),ds(e,l,i,n),fs(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}
else if(t===null){i=e.stateNode;
var g=e.memoizedProps,b=kl(a,g);i.props=b;
var T=i.context,D=a.contextType;u=on,typeof D=="object"&&D!==null&&(u=ce(D));
var q=a.getDerivedStateFromProps;D=typeof q=="function"||typeof i.getSnapshotBeforeUpdate=="function",g=e.pendingProps!==g,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(g||T!==u)&&xd(e,i,l,u),Ja=!1;
var R=e.memoizedState;i.state=R,ds(e,l,i,n),fs(),T=e.memoizedState,g||R!==T||Ja?(typeof q=="function"&&(Uo(e,a,q,l),T=e.memoizedState),(b=Ja||hd(e,a,b,l,R,T,u))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=T),i.props=l,i.state=T,i.context=u,l=b):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}
else{i=e.stateNode,go(t,e),u=e.memoizedProps,D=kl(a,u),i.props=D,q=e.pendingProps,R=i.context,T=a.contextType,b=on,typeof T=="object"&&T!==null&&(b=ce(T)),g=a.getDerivedStateFromProps,(T=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==q||R!==b)&&xd(e,i,l,b),Ja=!1,R=e.memoizedState,i.state=R,ds(e,l,i,n),fs();
var C=e.memoizedState;u!==q||R!==C||Ja||t!==null&&t.dependencies!==null&&oi(t.dependencies)?(typeof g=="function"&&(Uo(e,a,g,l),C=e.memoizedState),(D=Ja||hd(e,a,D,l,R,C,b)||t!==null&&t.dependencies!==null&&oi(t.dependencies))?(T||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,C,b),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,C,b)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=C),i.props=l,i.state=C,i.context=b,l=D):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),l=!1)}
return i=l,Ai(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=Cl(e,t.child,null,n),e.child=Cl(e,null,a,n)):oe(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Ha(t,e,n),t}
function Od(t,e,a,l){return Tl(),e.flags|=256,oe(t,e,a,l),e.child}
var Go={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null };

function Yo(t){return{baseLanes:t,cachePool:Sf()}}
function Xo(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=De),t}
function Md(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(Qt.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(Tt){if(n?$a(e):Pa(),(t=Lt)?(t=qm(t,Qe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:ia,overflow:ca }:null,retryLane:536870912,hydrationErrors:null},a=df(t),a.return=e,e.child=a,ie=e,Lt=null)):t=null,t===null)throw Qa(e);return Hr(t)?e.lanes=32:e.lanes=536870912,null}
var g=l.children;return l=l.fallback,n?(Pa(),n=e.mode,g=Ti({mode:"hidden",children:g},n),l=Al(l,n,a,null),g.return=e,l.return=e,g.sibling=l,e.child=g,l=e.child,l.memoizedState=Yo(a),l.childLanes=Xo(t,u,a),e.memoizedState=Go,xs(null,l)):($a(e),Zo(e,g))}
var b=t.memoizedState;if(b!==null&&(g=b.dehydrated,g!==null)){if(i)e.flags&256?($a(e),e.flags&=-257,e=Qo(t,e,a)):e.memoizedState!==null?(Pa(),e.child=t.child,e.flags|=128,e=null):(Pa(),g=l.fallback,n=e.mode,l=Ti({mode:"visible",children:l.children},n),g=Al(g,n,a,null),g.flags|=2,l.return=e,g.return=e,l.sibling=g,e.child=l,Cl(e,t.child,null,a),l=e.child,l.memoizedState=Yo(a),l.childLanes=Xo(t,u,a),e.memoizedState=Go,e=xs(null,l));else if($a(e),Hr(g)){if(u=g.nextSibling&&g.nextSibling.dataset,u)var T=u.dgst;u=T,l=Error(o(419)),l.stack="",l.digest=u,ss({value:l,source:null,stack:null }),
e=Qo(t,e,a)}
else if(Ft||dn(t,e,a,!1),u=(a&t.childLanes)!==0,Ft||u){if(u=Bt,u!==null&&(l=be(u,a),l!==0&&l!==b.retryLane))throw b.retryLane=l,Hl(t,l),Ae(u,t,l),Vo;jr(g)||Ui(),e=Qo(t,e,a)}
else jr(g)?(e.flags|=192,e.child=t.child,e=null):(t=b.treeContext,Lt=Je(g.nextSibling),ie=e,Tt=!0,Za=null,Qe=!1,t!==null&&pf(e,t),e=Zo(e,l.children),e.flags|=4096);return e}
return n?(Pa(),g=l.fallback,n=e.mode,b=t.child,T=b.sibling,l=ba(b,{mode:"hidden",children:l.children }),
l.subtreeFlags=b.subtreeFlags&65011712,T!==null?g=ba(T,g):(g=Al(g,n,a,null),g.flags|=2),g.return=e,l.return=e,l.sibling=g,e.child=l,xs(null,l),l=e.child,g=t.child.memoizedState,g===null?g=Yo(a):(n=g.cachePool,n!==null?(b=Jt._currentValue,n=n.parent!==b?{parent:b,pool:b }:n):n=Sf(),g={baseLanes:g.baseLanes|a,cachePool:n }),
l.memoizedState=g,l.childLanes=Xo(t,u,a),e.memoizedState=Go,xs(t.child,l)):($a(e),a=t.child,t=a.sibling,a=ba(a,{mode:"visible",children:l.children }),
a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}
function Zo(t,e){return e=Ti({mode:"visible",children:e},t.mode),e.return=t,t.child=e}
function Ti(t,e){return t=_e(22,t,null,e),t.lanes=0,t}
function Qo(t,e,a){return Cl(e,t.child,null,a),t=Zo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}
function Cd(t,e,a){t.lanes|=e;
var l=t.alternate;l!==null&&(l.lanes|=e),io(t.return,e,a)}
function Ko(t,e,a,l,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i }:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}
function Dd(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;
var u=Qt.current,g=(u&2)!==0;if(g?(u=u&1|2,e.flags|=128):u&=1,k(Qt,u),oe(t,e,l,a),l=Tt?ns:0,!g&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cd(t,a,e);else if(t.tag===19)Cd(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}
if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&hi(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),Ko(e,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&hi(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Ko(e,!0,a,null,i,l);break;case"together":Ko(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}
return e.child}
function Ha(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),el|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(dn(t,e,a,!1),(a&e.childLanes)===0)return null}
else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,a=ba(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=ba(t,t.pendingProps),a.return=e;a.sibling=null}
return e.child}
function Jo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&oi(t)))}
function yh(t,e,a){switch(e.tag){case 3:ut(e,e.stateNode.containerInfo),Ka(e,Jt,t.memoizedState.cache),Tl();break;case 27:case 5:le(e);break;case 4:ut(e,e.stateNode.containerInfo);break;case 10:Ka(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,vo(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?($a(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Md(t,e,a):($a(e),t=Ha(t,e,a),t!==null?t.sibling:null);$a(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(dn(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return Dd(t,e,a);e.flags|=128}
if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),k(Qt,Qt.current),l)break;return null;case 22:return e.lanes=0,Ad(t,e,a,e.pendingProps);case 24:Ka(e,Jt,t.memoizedState.cache)}
return Ha(t,e,a)}
function kd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ft=!0;else{if(!Jo(t,a)&&(e.flags&128)===0)return Ft=!1,yh(t,e,a);Ft=(t.flags&131072)!==0}
else Ft=!1,Tt&&(e.flags&1048576)!==0&&gf(e,ns,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=Ol(e.elementType),e.type=t,typeof t=="function")Pc(t)?(l=kl(t,l),e.tag=1,e=_d(null,e,t,l,a)):(e.tag=0,e=qo(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===F){e.tag=11,e=wd(null,e,t,l,a);break t}
else if(n===Z){e.tag=14,e=jd(null,e,t,l,a);break t}}throw e=vt(t)||t,Error(o(306,e,""))}}
return e;case 0:return qo(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=kl(l,e.pendingProps),_d(t,e,l,n,a);case 3:t:{if(ut(e,e.stateNode.containerInfo),t===null)throw Error(o(387));l=e.pendingProps;
var i=e.memoizedState;n=i.element,go(t,e),ds(e,l,null,a);
var u=e.memoizedState;if(l=u.cache,Ka(e,Jt,l),l!==i.cache&&co(e,[Jt],a,!0),fs(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Od(t,e,l,a);break t}
else if(l!==n){n=Ye(Error(o(424)),e),ss(n),e=Od(t,e,l,a);break t}
else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}
for(Lt=Je(t.firstChild),ie=e,Tt=!0,Za=null,Qe=!0,a=Af(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}
else{if(Tl(),l===n){e=Ha(t,e,a);break t}oe(t,e,l,a)}e=e.child}
return e;case 26:return Ai(t,e),t===null?(a=Km(e.type,null,e.pendingProps,null))?e.memoizedState=a:Tt||(a=e.type,t=e.pendingProps,l=Xi(it.current).createElement(a),l[se]=e,l[Se]=t,re(l,a,t),ee(l),e.stateNode=l):e.memoizedState=Km(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return le(e),t===null&&Tt&&(l=e.stateNode=Xm(e.type,e.pendingProps,it.current),ie=e,Qe=!0,n=Lt,il(e.type)?(Ar=n,Lt=Je(l.firstChild)):Lt=n),oe(t,e,e.pendingProps.children,a),Ai(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Tt&&((n=l=Lt)&&(l=Jh(l,e.type,e.pendingProps,Qe),l!==null?(e.stateNode=l,ie=e,Lt=Je(l.firstChild),Qe=!1,n=!0):n=!1),n||Qa(e)),le(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,Nr(n,i)?l=null:u!==null&&Nr(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=So(t,e,rh,null,null,a),Os._currentValue=n),Ai(t,e),oe(t,e,l,a),e.child;case 6:return t===null&&Tt&&((t=a=Lt)&&(a=Wh(a,e.pendingProps,Qe),a!==null?(e.stateNode=a,ie=e,Lt=null,t=!0):t=!1),t||Qa(e)),null;case 13:return Md(t,e,a);case 4:return ut(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Cl(e,null,l,a):oe(t,e,l,a),e.child;case 11:return wd(t,e,e.type,e.pendingProps,a);case 7:return oe(t,e,e.pendingProps,a),e.child;case 8:return oe(t,e,e.pendingProps.children,a),e.child;case 12:return oe(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,Ka(e,e.type,l.value),oe(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,Rl(e),n=ce(n),l=l(n),e.flags|=1,oe(t,e,l,a),e.child;case 14:return jd(t,e,e.type,e.pendingProps,a);case 15:return Hd(t,e,e.type,e.pendingProps,a);case 19:return Dd(t,e,a);case 31:return xh(t,e,a);case 22:return Ad(t,e,a,e.pendingProps);case 24:return Rl(e),l=ce(Jt),t===null?(n=uo(),n===null&&(n=Bt,i=oo(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},mo(e),Ka(e,Jt,n)):((t.lanes&a)!==0&&(go(t,e),ds(e,null,null,a),fs()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Ka(e,Jt,l)):(l=i.cache,Ka(e,Jt,l),l!==n.cache&&co(e,[Jt],a,!0))),oe(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}
function Aa(t){t.flags|=4}
function Wo(t,e,a,l,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(rm())t.flags|=8192;else throw Ml=di,fo}
else t.flags&=-16777217}
function Ud(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Pm(e))if(rm())t.flags|=8192;else throw Ml=di,fo}
function zi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?fe():536870912,t.lanes|=e,wn|=e)}
function ys(t,e){if(!Tt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}
function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}
function vh(t,e,a){var l=e.pendingProps;switch(ao(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return Vt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ea(Jt),At(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fn(e)?Aa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,no())),Vt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Aa(e),i!==null?(Vt(e),Ud(e,i)):(Vt(e),Wo(e,n,null,l,a))):i?i!==t.memoizedState?(Aa(e),Vt(e),Ud(e,i)):(Vt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Aa(e),Vt(e),Wo(e,n,t,l,a)),null;case 27:if(me(e),a=it.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Aa(e);else{if(!l){if(e.stateNode===null)throw Error(o(166));return Vt(e),null}t=X.current,fn(e)?hf(e):(t=Xm(n,l,a),e.stateNode=t,Aa(e))}
return Vt(e),null;case 5:if(me(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Aa(e);else{if(!l){if(e.stateNode===null)throw Error(o(166));return Vt(e),null}
if(i=X.current,fn(e))hf(e);else{var u=Xi(it.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is }):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is }):u.createElement(n)}}i[se]=e,i[Se]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}
if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(re(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Aa(e)}}
return Vt(e),Wo(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Aa(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(o(166));if(t=it.current,fn(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=ie,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[se]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Mm(t.nodeValue,a)),t||Qa(e,!0)}
else t=Xi(t).createTextNode(l),t[se]=e,e.stateNode=t}
return Vt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=fn(e),a!==null){if(t===null){if(!l)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[se]=e}
else Tl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Vt(e),t=!1}
else a=no(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Me(e),e):(Me(e),null);if((e.flags&128)!==0)throw Error(o(558))}
return Vt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=fn(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(o(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[se]=e}
else Tl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Vt(e),n=!1}
else n=no(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Me(e),e):(Me(e),null)}
return Me(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),zi(e,e.updateQueue),Vt(e),null);case 4:return At(),t===null&&xr(e.stateNode.containerInfo),Vt(e),null;case 10:return Ea(e.type),Vt(e),null;case 19:if(U(Qt),l=e.memoizedState,l===null)return Vt(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)ys(l,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=hi(t),i!==null){for(e.flags|=128,ys(l,!1),t=i.updateQueue,e.updateQueue=t,zi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)ff(a,t),a=a.sibling;return k(Qt,Qt.current&1|2),Tt&&Sa(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&pe()>Ci&&(e.flags|=128,n=!0,ys(l,!1),e.lanes=4194304)}
else{if(!n)if(t=hi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,zi(e,t),ys(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Tt)return Vt(e),null}
else 2*pe()-l.renderingStartTime>Ci&&a!==536870912&&(e.flags|=128,n=!0,ys(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}
return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=pe(),t.sibling=null,a=Qt.current,k(Qt,n?a&1|2:a&1),Tt&&Sa(e,l.treeForkCount),t):(Vt(e),null);case 22:case 23:return Me(e),yo(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),a=e.updateQueue,a!==null&&zi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&U(_l),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ea(Jt),Vt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}
function bh(t,e){switch(ao(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ea(Jt),At(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return me(e),null;case 31:if(e.memoizedState!==null){if(Me(e),e.alternate===null)throw Error(o(340));Tl()}
return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Me(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Tl()}
return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return U(Qt),null;case 4:return At(),null;case 10:return Ea(e.type),null;case 22:case 23:return Me(e),yo(),t!==null&&U(_l),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ea(Jt),null;case 25:return null;default:return null}}
function Bd(t,e){switch(ao(e),e.tag){case 3:Ea(Jt),At();break;case 26:case 27:case 5:me(e);break;case 4:At();break;case 31:e.memoizedState!==null&&Me(e);break;case 13:Me(e);break;case 19:U(Qt);break;case 10:Ea(e.type);break;case 22:case 23:Me(e),yo(),t!==null&&U(_l);break;case 24:Ea(Jt)}}
function vs(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;
var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}
catch(g){Ct(e,e.return,g)}}
function Ia(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var u=l.inst,g=u.destroy;if(g!==void 0){u.destroy=void 0,n=e;
var b=a,T=g;try{T()}
catch(D){Ct(n,b,D)}}}l=l.next}while(l!==i)}}
catch(D){Ct(e,e.return,D)}}
function Ld(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{zf(e,a)}
catch(l){Ct(t,t.return,l)}}}
function Vd(t,e,a){a.props=kl(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}
catch(l){Ct(t,e,l)}}
function bs(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}
catch(n){Ct(t,e,n)}}
function oa(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}
catch(n){Ct(t,e,n)}
finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}
else if(typeof a=="function")try{a(null)}
catch(n){Ct(t,e,n)}
else a.current=null}
function qd(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}
catch(n){Ct(t,t.return,n)}}
function Fo(t,e,a){try{var l=t.stateNode;Gh(l,t.type,a,e),l[Se]=e}
catch(n){Ct(t,t.return,n)}}
function Gd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&il(t.type)||t.tag===4}
function $o(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Gd(t.return))return null;t=t.return}
for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&il(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}
if(!(t.flags&2))return t.stateNode}}
function Po(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ya));else if(l!==4&&(l===27&&il(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Po(t,e,a),t=t.sibling;t!==null;)Po(t,e,a),t=t.sibling}
function Ri(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&il(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ri(t,e,a),t=t.sibling;t!==null;)Ri(t,e,a),t=t.sibling}
function Yd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);re(e,l,a),e[se]=t,e[Se]=a}
catch(i){Ct(t,t.return,i)}}
var Ta=!1,$t=!1,Io=!1,Xd=typeof WeakSet=="function"?WeakSet:Set,ae=null;
function Sh(t,e){if(t=t.containerInfo,br=$i,t=ef(t),Zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd };
else t:{a=(a=t.ownerDocument)&&a.defaultView||window;
var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;
var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}
catch{a=null;break t}
var u=0,g=-1,b=-1,T=0,D=0,q=t,R=null;e:for(;;){for(var C;q!==a||n!==0&&q.nodeType!==3||(g=u+n),q!==i||l!==0&&q.nodeType!==3||(b=u+l),q.nodeType===3&&(u+=q.nodeValue.length),(C=q.firstChild)!==null;)R=q,q=C;for(;;){if(q===t)break e;if(R===a&&++T===n&&(g=u),R===i&&++D===l&&(b=u),(C=q.nextSibling)!==null)break;q=R,R=q.parentNode}q=C}a=g===-1||b===-1?null:{start:g,end:b}}
else a=null}a=a||{start:0,end:0}}
else a=null;for(Sr={focusedElem:t,selectionRange:a},$i=!1,ae=e;ae!==null;)if(e=ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ae=t;else for(;ae!==null;){switch(e=ae,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var $=kl(a.type,n);t=l.getSnapshotBeforeUpdate($,i),l.__reactInternalSnapshotBeforeUpdate=t}
catch(rt){Ct(a,a.return,rt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)wr(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wr(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}
if(t=e.sibling,t!==null){t.return=e.return,ae=t;break}ae=e.return}}
function Zd(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(t,a),l&4&&vs(5,a);break;case 1:if(Ra(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}
catch(u){Ct(a,a.return,u)}
else{var n=kl(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}
catch(u){Ct(a,a.return,u)}}l&64&&Ld(a),l&512&&bs(a,a.return);break;case 3:if(Ra(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{zf(t,e)}
catch(u){Ct(a,a.return,u)}}break;case 27:e===null&&l&4&&Yd(a);case 26:case 5:Ra(t,a),e===null&&l&4&&qd(a),l&512&&bs(a,a.return);break;case 12:Ra(t,a);break;case 31:Ra(t,a),l&4&&Jd(t,a);break;case 13:Ra(t,a),l&4&&Wd(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Rh.bind(null,a),Fh(t,a))));break;case 22:if(l=a.memoizedState!==null||Ta,!l){e=e!==null&&e.memoizedState!==null||$t,n=Ta;
var i=$t;Ta=l,($t=e)&&!i?_a(t,a,(a.subtreeFlags&8772)!==0):Ra(t,a),Ta=n,$t=i}break;case 30:break;default:Ra(t,a)}}
function Qd(t){var e=t.alternate;e!==null&&(t.alternate=null,Qd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Tc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}
var Gt=null,Ee=!1;
function za(t,e,a){for(a=a.child;a!==null;)Kd(t,e,a),a=a.sibling}
function Kd(t,e,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(vl,a)}
catch{}switch(a.tag){case 26:$t||oa(a,e),za(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$t||oa(a,e);
var l=Gt,n=Ee;il(a.type)&&(Gt=a.stateNode,Ee=!1),za(t,e,a),zs(a.stateNode),Gt=l,Ee=n;break;case 5:$t||oa(a,e);case 6:if(l=Gt,n=Ee,Gt=null,za(t,e,a),Gt=l,Ee=n,Gt!==null)if(Ee)try{(Gt.nodeType===9?Gt.body:Gt.nodeName==="HTML"?Gt.ownerDocument.body:Gt).removeChild(a.stateNode)}
catch(i){Ct(a,e,i)}
else try{Gt.removeChild(a.stateNode)}
catch(i){Ct(a,e,i)}break;case 18:Gt!==null&&(Ee?(t=Gt,Lm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),On(t)):Lm(Gt,a.stateNode));break;case 4:l=Gt,n=Ee,Gt=a.stateNode.containerInfo,Ee=!0,za(t,e,a),Gt=l,Ee=n;break;case 0:case 11:case 14:case 15:Ia(2,a,e),$t||Ia(4,a,e),za(t,e,a);break;case 1:$t||(oa(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Vd(a,e,l)),za(t,e,a);break;case 21:za(t,e,a);break;case 22:$t=(l=$t)||a.memoizedState!==null,za(t,e,a),$t=l;break;default:za(t,e,a)}}
function Jd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{On(t)}
catch(a){Ct(e,e.return,a)}}}
function Wd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{On(t)}
catch(a){Ct(e,e.return,a)}}
function Nh(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Xd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Xd),e;default:throw Error(o(435,t.tag))}}
function _i(t,e){var a=Nh(t);e.forEach(function(l){if(!a.has(l)){a.add(l);
var n=_h.bind(null,t,l);l.then(n,n)}})}
function we(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,u=e,g=u;t:for(;g!==null;){switch(g.tag){case 27:if(il(g.type)){Gt=g.stateNode,Ee=!1;break t}break;case 5:Gt=g.stateNode,Ee=!1;break t;case 3:case 4:Gt=g.stateNode.containerInfo,Ee=!0;break t}g=g.return}
if(Gt===null)throw Error(o(160));Kd(i,u,n),Gt=null,Ee=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}
if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Fd(e,t),e=e.sibling}
var ta=null;
function Fd(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:we(e,t),je(t),l&4&&(Ia(3,t,t.return),vs(3,t),Ia(5,t,t.return));break;case 1:we(e,t),je(t),l&512&&($t||a===null||oa(a,a.return)),l&64&&Ta&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=ta;if(we(e,t),je(t),l&512&&($t||a===null||oa(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Kn]||i[se]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),re(i,l,a),i[se]=t,ee(i),l=i;break t;case"link":var u=Fm("link","href",n).get(l+(a.href||""));if(u){for(var g=0;g<u.length;g++)if(i=u[g],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(g,1);break e}}i=n.createElement(l),re(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Fm("meta","content",n).get(l+(a.content||""))){for(g=0;g<u.length;g++)if(i=u[g],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(g,1);break e}}i=n.createElement(l),re(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[se]=t,ee(i),l=i}t.stateNode=l}
else $m(n,t.type,t.stateNode);else t.stateNode=Wm(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?$m(n,t.type,t.stateNode):Wm(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Fo(t,t.memoizedProps,a.memoizedProps)}break;case 27:we(e,t),je(t),l&512&&($t||a===null||oa(a,a.return)),a!==null&&l&4&&Fo(t,t.memoizedProps,a.memoizedProps);break;case 5:if(we(e,t),je(t),l&512&&($t||a===null||oa(a,a.return)),t.flags&32){n=t.stateNode;try{tn(n,"")}
catch($){Ct(t,t.return,$)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Fo(t,n,a!==null?a.memoizedProps:n)),l&1024&&(Io=!0);break;case 6:if(we(e,t),je(t),l&4){if(t.stateNode===null)throw Error(o(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}
catch($){Ct(t,t.return,$)}}break;case 3:if(Ki=null,n=ta,ta=Zi(e.containerInfo),we(e,t),ta=n,je(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{On(e.containerInfo)}
catch($){Ct(t,t.return,$)}Io&&(Io=!1,$d(t));break;case 4:l=ta,ta=Zi(t.stateNode.containerInfo),we(e,t),je(t),ta=l;break;case 12:we(e,t),je(t);break;case 31:we(e,t),je(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_i(t,l)));break;case 13:we(e,t),je(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mi=pe()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_i(t,l)));break;case 22:n=t.memoizedState!==null;
var b=a!==null&&a.memoizedState!==null,T=Ta,D=$t;if(Ta=T||n,$t=D||b,we(e,t),$t=D,Ta=T,je(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||b||Ta||$t||Ul(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){b=a=e;try{if(i=b.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{g=b.stateNode;
var q=b.memoizedProps.style,R=q!=null&&q.hasOwnProperty("display")?q.display:null;g.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}
catch($){Ct(b,b.return,$)}}}
else if(e.tag===6){if(a===null){b=e;try{b.stateNode.nodeValue=n?"":b.memoizedProps}
catch($){Ct(b,b.return,$)}}}
else if(e.tag===18){if(a===null){b=e;try{var C=b.stateNode;n?Vm(C,!0):Vm(b.stateNode,!1)}
catch($){Ct(b,b.return,$)}}}
else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}
if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,_i(t,a))));break;case 19:we(e,t),je(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_i(t,l)));break;case 30:break;case 21:break;default:we(e,t),je(t)}}
function je(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Gd(l)){a=l;break}l=l.return}
if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=$o(t);Ri(t,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(tn(u,""),a.flags&=-33);
var g=$o(t);Ri(t,g,u);break;case 3:case 4:var b=a.stateNode.containerInfo,T=$o(t);Po(t,T,b);break;default:throw Error(o(161))}}
catch(D){Ct(t,t.return,D)}t.flags&=-3}e&4096&&(t.flags&=-4097)}
function $d(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;$d(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}
function Ra(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Zd(t,e.alternate,e),e=e.sibling}
function Ul(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ia(4,e,e.return),Ul(e);break;case 1:oa(e,e.return);
var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Vd(e,e.return,a),Ul(e);break;case 27:zs(e.stateNode);case 26:case 5:oa(e,e.return),Ul(e);break;case 22:e.memoizedState===null&&Ul(e);break;case 30:Ul(e);break;default:Ul(e)}t=t.sibling}}
function _a(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:_a(n,i,a),vs(4,i);break;case 1:if(_a(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}
catch(T){Ct(l,l.return,T)}
if(l=i,n=l.updateQueue,n!==null){var g=l.stateNode;try{var b=n.shared.hiddenCallbacks;if(b!==null)for(n.shared.hiddenCallbacks=null,n=0;n<b.length;n++)Tf(b[n],g)}
catch(T){Ct(l,l.return,T)}}a&&u&64&&Ld(i),bs(i,i.return);break;case 27:Yd(i);case 26:case 5:_a(n,i,a),a&&l===null&&u&4&&qd(i),bs(i,i.return);break;case 12:_a(n,i,a);break;case 31:_a(n,i,a),a&&u&4&&Jd(n,i);break;case 13:_a(n,i,a),a&&u&4&&Wd(n,i);break;case 22:i.memoizedState===null&&_a(n,i,a),bs(i,i.return);break;case 30:break;default:_a(n,i,a)}e=e.sibling}}
function tr(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&is(a))}
function er(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&is(t))}
function ea(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pd(t,e,a,l),e=e.sibling}
function Pd(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:ea(t,e,a,l),n&2048&&vs(9,e);break;case 1:ea(t,e,a,l);break;case 3:ea(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&is(t)));break;case 12:if(n&2048){ea(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,g=i.onPostCommit;typeof g=="function"&&g(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}
catch(b){Ct(e,e.return,b)}}
else ea(t,e,a,l);break;case 31:ea(t,e,a,l);break;case 13:ea(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?ea(t,e,a,l):Ss(t,e):i._visibility&2?ea(t,e,a,l):(i._visibility|=2,Sn(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),n&2048&&tr(u,e);break;case 24:ea(t,e,a,l),n&2048&&er(e.alternate,e);break;default:ea(t,e,a,l)}}
function Sn(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,g=a,b=l,T=u.flags;switch(u.tag){case 0:case 11:case 15:Sn(i,u,g,b,n),vs(8,u);break;case 23:break;case 22:var D=u.stateNode;u.memoizedState!==null?D._visibility&2?Sn(i,u,g,b,n):Ss(i,u):(D._visibility|=2,Sn(i,u,g,b,n)),n&&T&2048&&tr(u.alternate,u);break;case 24:Sn(i,u,g,b,n),n&&T&2048&&er(u.alternate,u);break;default:Sn(i,u,g,b,n)}e=e.sibling}}
function Ss(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:Ss(a,l),n&2048&&tr(l.alternate,l);break;case 24:Ss(a,l),n&2048&&er(l.alternate,l);break;default:Ss(a,l)}e=e.sibling}}
var Ns=8192;
function Nn(t,e,a){if(t.subtreeFlags&Ns)for(t=t.child;t!==null;)Id(t,e,a),t=t.sibling}
function Id(t,e,a){switch(t.tag){case 26:Nn(t,e,a),t.flags&Ns&&t.memoizedState!==null&&ox(a,ta,t.memoizedState,t.memoizedProps);break;case 5:Nn(t,e,a);break;case 3:case 4:var l=ta;ta=Zi(t.stateNode.containerInfo),Nn(t,e,a),ta=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Ns,Ns=16777216,Nn(t,e,a),Ns=l):Nn(t,e,a));break;default:Nn(t,e,a)}}
function tm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}
function Es(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];ae=l,am(l,t)}tm(t)}
if(t.subtreeFlags&10256)for(t=t.child;t!==null;)em(t),t=t.sibling}
function em(t){switch(t.tag){case 0:case 11:case 15:Es(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:Es(t);break;case 12:Es(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Oi(t)):Es(t);break;default:Es(t)}}
function Oi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];ae=l,am(l,t)}tm(t)}
for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ia(8,e,e.return),Oi(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Oi(e));break;default:Oi(e)}t=t.sibling}}
function am(t,e){for(;ae!==null;){var a=ae;switch(a.tag){case 0:case 11:case 15:Ia(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:is(a.memoizedState.cache)}
if(l=a.child,l!==null)l.return=a,ae=l;else t:for(a=t;ae!==null;){l=ae;
var n=l.sibling,i=l.return;if(Qd(l),l===a){ae=null;break t}
if(n!==null){n.return=i,ae=n;break t}ae=i}}}
var Eh={getCacheForType:function(t){var e=ce(Jt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return ce(Jt).controller.signal}},wh=typeof WeakMap=="function"?WeakMap:Map,Ot=0,Bt=null,Et=null,jt=0,Mt=0,Ce=null,tl=!1,En=!1,ar=!1,Oa=0,Zt=0,el=0,Bl=0,lr=0,De=0,wn=0,ws=null,He=null,nr=!1,Mi=0,lm=0,Ci=1/0,Di=null,al=null,Pt=0,ll=null,jn=null,Ma=0,sr=0,ir=null,nm=null,js=0,cr=null;
function ke(){return(Ot&2)!==0&&jt!==0?jt&-jt:w.T!==null?mr():Hc()}
function sm(){if(De===0)if((jt&536870912)===0||Tt){var t=Ql;Ql<<=1,(Ql&3932160)===0&&(Ql=262144),De=t}
else De=536870912;return t=Oe.current,t!==null&&(t.flags|=32),De}
function Ae(t,e,a){(t===Bt&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(Hn(t,0),nl(t,jt,De,!1)),Yt(t,a),((Ot&2)===0||t!==Bt)&&(t===Bt&&((Ot&2)===0&&(Bl|=a),Zt===4&&nl(t,jt,De,!1)),ra(t))}
function im(t,e,a){if((Ot&6)!==0)throw Error(o(327));
var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||qt(t,e),n=l?Ah(t,e):rr(t,e,!0),i=l;do{if(n===0){En&&!l&&nl(t,e,0,!1);break}
else{if(a=t.current.alternate,i&&!jh(a)){n=rr(t,e,!1),i=!1;continue}
if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var g=t;n=ws;
var b=g.current.memoizedState.isDehydrated;if(b&&(Hn(g,u).flags|=256),u=rr(g,u,!1),u!==2){if(ar&&!b){g.errorRecoveryDisabledLanes|=i,Bl|=i,n=4;break t}i=He,He=n,i!==null&&(He===null?He=i:He.push.apply(He,i))}n=u}
if(i=!1,n!==2)continue}}
if(n===1){Hn(t,0),nl(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:nl(l,e,De,!tl);break t;case 2:He=null;break;case 3:case 5:break;default:throw Error(o(329))}
if((e&62914560)===e&&(n=Mi+300-pe(),10<n)){if(nl(l,e,De,!tl),ft(l,0,!0)!==0)break t;Ma=e,l.timeoutHandle=Um(cm.bind(null,l,a,He,Di,nr,e,De,Bl,wn,tl,i,"Throttled",-0,0),n);break t}cm(l,a,He,Di,nr,e,De,Bl,wn,tl,i,null,-0,0)}}break}while(!0);ra(t)}
function cm(t,e,a,l,n,i,u,g,b,T,D,q,R,C){if(t.timeoutHandle=-1,q=e.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ya},Id(e,i,q);
var $=(i&62914560)===i?Mi-pe():(i&4194048)===i?lm-pe():0;if($=rx(q,$),$!==null){Ma=i,t.cancelPendingCommit=$(pm.bind(null,t,e,i,a,l,n,u,g,b,D,q,null,R,C)),nl(t,i,u,!T);return}}pm(t,e,i,a,l,n,u,g,b)}
function jh(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Re(i(),n))return!1}
catch{return!1}}
if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}
function nl(t,e,a,l){e&=~lr,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-ue(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Sl(t,a,e)}
function ki(){return(Ot&6)===0?(Hs(0),!1):!0}
function or(){if(Et!==null){if(Mt===0)var t=Et.return;else t=Et,Na=zl=null,wo(t),hn=null,os=0,t=Et;for(;t!==null;)Bd(t.alternate,t),t=t.return;Et=null}}
function Hn(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Zh(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ma=0,or(),Bt=t,Et=a=ba(t.current,null),jt=e,Mt=0,Ce=null,tl=!1,En=qt(t,e),ar=!1,wn=De=lr=Bl=el=Zt=0,He=ws=null,nr=!1,(e&8)!==0&&(e|=e&32);
var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-ue(l),i=1<<n;e|=t[n],l&=~i}
return Oa=e,li(),a}
function om(t,e){gt=null,w.H=hs,e===pn||e===fi?(e=wf(),Mt=3):e===fo?(e=wf(),Mt=4):Mt=e===Vo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ce=e,Et===null&&(Zt=1,ji(t,Ye(e,t.current)))}
function rm(){var t=Oe.current;return t===null?!0:(jt&4194048)===jt?Ke===null:(jt&62914560)===jt||(jt&536870912)!==0?t===Ke:!1}
function um(){var t=w.H;return w.H=hs,t===null?hs:t}
function fm(){var t=w.A;return w.A=Eh,t}
function Ui(){Zt=4,tl||(jt&4194048)!==jt&&Oe.current!==null||(En=!0),(el&134217727)===0&&(Bl&134217727)===0||Bt===null||nl(Bt,jt,De,!1)}
function rr(t,e,a){var l=Ot;Ot|=2;
var n=um(),i=fm();(Bt!==t||jt!==e)&&(Di=null,Hn(t,e)),e=!1;
var u=Zt;t:do try{if(Mt!==0&&Et!==null){var g=Et,b=Ce;switch(Mt){case 8:or(),u=6;break t;case 3:case 2:case 9:case 6:Oe.current===null&&(e=!0);
var T=Mt;if(Mt=0,Ce=null,An(t,g,b,T),a&&En){u=0;break t}break;default:T=Mt,Mt=0,Ce=null,An(t,g,b,T)}}Hh(),u=Zt;break}
catch(D){om(t,D)}while(!0);return e&&t.shellSuspendCounter++,Na=zl=null,Ot=l,w.H=n,w.A=i,Et===null&&(Bt=null,jt=0,li()),u}
function Hh(){for(;Et!==null;)dm(Et)}
function Ah(t,e){var a=Ot;Ot|=2;
var l=um(),n=fm();Bt!==t||jt!==e?(Di=null,Ci=pe()+500,Hn(t,e)):En=qt(t,e);t:do try{if(Mt!==0&&Et!==null){e=Et;
var i=Ce;e:switch(Mt){case 1:Mt=0,Ce=null,An(t,e,i,1);break;case 2:case 9:if(Nf(i)){Mt=0,Ce=null,mm(e);break}e=function(){Mt!==2&&Mt!==9||Bt!==t||(Mt=7),ra(t)},i.then(e,e);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:Nf(i)?(Mt=0,Ce=null,mm(e)):(Mt=0,Ce=null,An(t,e,i,7));break;case 5:var u=null;switch(Et.tag){case 26:u=Et.memoizedState;case 5:case 27:var g=Et;if(u?Pm(u):g.stateNode.complete){Mt=0,Ce=null;
var b=g.sibling;if(b!==null)Et=b;else{var T=g.return;T!==null?(Et=T,Bi(T)):Et=null}break e}}Mt=0,Ce=null,An(t,e,i,5);break;case 6:Mt=0,Ce=null,An(t,e,i,6);break;case 8:or(),Zt=6;break t;default:throw Error(o(462))}}Th();break}
catch(D){om(t,D)}while(!0);return Na=zl=null,w.H=l,w.A=n,Ot=a,Et!==null?0:(Bt=null,jt=0,li(),Zt)}
function Th(){for(;Et!==null&&!ge();)dm(Et)}
function dm(t){var e=kd(t.alternate,t,Oa);t.memoizedProps=t.pendingProps,e===null?Bi(t):Et=e}
function mm(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Rd(a,e,e.pendingProps,e.type,void 0,jt);break;case 11:e=Rd(a,e,e.pendingProps,e.type.render,e.ref,jt);break;case 5:wo(e);default:Bd(a,e),e=Et=ff(e,Oa),e=kd(a,e,Oa)}t.memoizedProps=t.pendingProps,e===null?Bi(t):Et=e}
function An(t,e,a,l){Na=zl=null,wo(e),hn=null,os=0;
var n=e.return;try{if(hh(t,n,e,a,jt)){Zt=1,ji(t,Ye(a,t.current)),Et=null;return}}
catch(i){if(n!==null)throw Et=n,i;Zt=1,ji(t,Ye(a,t.current)),Et=null;return}e.flags&32768?(Tt||l===1?t=!0:En||(jt&536870912)!==0?t=!1:(tl=t=!0,(l===2||l===9||l===3||l===6)&&(l=Oe.current,l!==null&&l.tag===13&&(l.flags|=16384))),gm(e,t)):Bi(e)}
function Bi(t){var e=t;do{if((e.flags&32768)!==0){gm(e,tl);return}t=e.return;
var a=vh(e.alternate,e,Oa);if(a!==null){Et=a;return}
if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Zt===0&&(Zt=5)}
function gm(t,e){do{var a=bh(t.alternate,t);if(a!==null){a.flags&=32767,Et=a;return}
if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Et=t;return}Et=t=a}while(t!==null);Zt=6,Et=null}
function pm(t,e,a,l,n,i,u,g,b){t.cancelPendingCommit=null;do Li();while(Pt!==0);if((Ot&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(i=e.lanes|e.childLanes,i|=Fc,ye(t,a,i,u,g,b),t===Bt&&(Et=Bt=null,jt=0),jn=e,ll=t,Ma=a,sr=i,ir=n,nm=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Oh(yl,function(){return bm(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=w.T,w.T=null,n=B.p,B.p=2,u=Ot,Ot|=4;try{Sh(t,e,a)}
finally{Ot=u,B.p=n,w.T=l}}Pt=1,hm(),xm(),ym()}}
function hm(){if(Pt===1){Pt=0;
var t=ll,e=jn,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;
var l=B.p;B.p=2;
var n=Ot;Ot|=4;try{Fd(e,t);
var i=Sr,u=ef(t.containerInfo),g=i.focusedElem,b=i.selectionRange;if(u!==g&&g&&g.ownerDocument&&tf(g.ownerDocument.documentElement,g)){if(b!==null&&Zc(g)){var T=b.start,D=b.end;if(D===void 0&&(D=T),"selectionStart"in g)g.selectionStart=T,g.selectionEnd=Math.min(D,g.value.length);else{var q=g.ownerDocument||document,R=q&&q.defaultView||window;if(R.getSelection){var C=R.getSelection(),$=g.textContent.length,rt=Math.min(b.start,$),Ut=b.end===void 0?rt:Math.min(b.end,$);!C.extend&&rt>Ut&&(u=Ut,Ut=rt,rt=u);
var j=Iu(g,rt),E=Iu(g,Ut);if(j&&E&&(C.rangeCount!==1||C.anchorNode!==j.node||C.anchorOffset!==j.offset||C.focusNode!==E.node||C.focusOffset!==E.offset)){var A=q.createRange();A.setStart(j.node,j.offset),C.removeAllRanges(),rt>Ut?(C.addRange(A),C.extend(E.node,E.offset)):(A.setEnd(E.node,E.offset),C.addRange(A))}}}}
for(q=[],C=g;C=C.parentNode;)C.nodeType===1&&q.push({element:C,left:C.scrollLeft,top:C.scrollTop });
for(typeof g.focus=="function"&&g.focus(),g=0;g<q.length;g++){var L=q[g];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}$i=!!br,Sr=br=null}
finally{Ot=n,B.p=l,w.T=a}}t.current=e,Pt=2}}
function xm(){if(Pt===2){Pt=0;
var t=ll,e=jn,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;
var l=B.p;B.p=2;
var n=Ot;Ot|=4;try{Zd(t,e.alternate,e)}
finally{Ot=n,B.p=l,w.T=a}}Pt=3}}
function ym(){if(Pt===4||Pt===3){Pt=0,La();
var t=ll,e=jn,a=Ma,l=nm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Pt=5:(Pt=0,jn=ll=null,vm(t,t.pendingLanes));
var n=t.pendingLanes;if(n===0&&(al=null),Pe(a),e=e.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(vl,e,void 0,(e.current.flags&128)===128)}
catch{}
if(l!==null){e=w.T,n=B.p,B.p=2,w.T=null;try{for(var i=t.onRecoverableError,u=0;u<l.length;u++){var g=l[u];i(g.value,{componentStack:g.stack})}}
finally{w.T=e,B.p=n}}(Ma&3)!==0&&Li(),ra(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===cr?js++:(js=0,cr=t):js=0,Hs(0)}}
function vm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,is(e)))}
function Li(){return hm(),xm(),ym(),bm()}
function bm(){if(Pt!==5)return!1;
var t=ll,e=sr;sr=0;
var a=Pe(Ma),l=w.T,n=B.p;try{B.p=32>a?32:a,w.T=null,a=ir,ir=null;
var i=ll,u=Ma;if(Pt=0,jn=ll=null,Ma=0,(Ot&6)!==0)throw Error(o(331));
var g=Ot;if(Ot|=4,em(i.current),Pd(i,i.current,u,a),Ot=g,Hs(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(vl,i)}
catch{}return!0}
finally{B.p=n,w.T=l,vm(t,e)}}
function Sm(t,e,a){e=Ye(a,e),e=Lo(t.stateNode,e,2),t=Fa(t,e,2),t!==null&&(Yt(t,2),ra(t))}
function Ct(t,e,a){if(t.tag===3)Sm(t,t,a);else for(;e!==null;){if(e.tag===3){Sm(e,t,a);break}
else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(al===null||!al.has(l))){t=Ye(a,t),a=Nd(2),l=Fa(e,a,2),l!==null&&(Ed(a,l,e,t),Yt(l,2),ra(l));break}}e=e.return}}
function ur(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new wh;
var n=new Set;l.set(e,n)}
else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(ar=!0,n.add(a),t=zh.bind(null,t,e,a),e.then(t,t))}
function zh(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Bt===t&&(jt&a)===a&&(Zt===4||Zt===3&&(jt&62914560)===jt&&300>pe()-Mi?(Ot&2)===0&&Hn(t,0):lr|=a,wn===jt&&(wn=0)),ra(t)}
function Nm(t,e){e===0&&(e=fe()),t=Hl(t,e),t!==null&&(Yt(t,e),ra(t))}
function Rh(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Nm(t,a)}
function _h(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(e),Nm(t,a)}
function Oh(t,e){return Yn(t,e)}
var Vi=null,Tn=null,fr=!1,qi=!1,dr=!1,sl=0;
function ra(t){t!==Tn&&t.next===null&&(Tn===null?Vi=Tn=t:Tn=Tn.next=t),qi=!0,fr||(fr=!0,Ch())}
function Hs(t,e){if(!dr&&qi){dr=!0;do for(var a=!1,l=Vi;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,g=l.pingedLanes;i=(1<<31-ue(42|t)+1)-1,i&=n&~(u&~g),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Hm(l,i))}
else i=jt,i=ft(l,l===Bt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||qt(l,i)||(a=!0,Hm(l,i));l=l.next}while(a);dr=!1}}
function Mh(){Em()}
function Em(){qi=fr=!1;
var t=0;sl!==0&&Xh()&&(t=sl);for(var e=pe(),a=null,l=Vi;l!==null;){var n=l.next,i=wm(l,e);i===0?(l.next=null,a===null?Vi=n:a.next=n,n===null&&(Tn=a)):(a=l,(t!==0||(i&3)!==0)&&(qi=!0)),l=n}Pt!==0&&Pt!==5||Hs(t),sl!==0&&(sl=0)}
function wm(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-ue(i),g=1<<u,b=n[u];b===-1?((g&a)===0||(g&l)!==0)&&(n[u]=te(g,e)):b<=e&&(t.expiredLanes|=g),i&=~g}
if(e=Bt,a=jt,a=ft(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Xn(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||qt(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Xn(l),Pe(a)){case 2:case 8:a=Xs;break;case 32:a=yl;break;case 268435456:a=ha;break;default:a=yl}
return l=jm.bind(null,t),a=Yn(a,l),t.callbackPriority=e,t.callbackNode=a,e}
return l!==null&&l!==null&&Xn(l),t.callbackPriority=2,t.callbackNode=null,2}
function jm(t,e){if(Pt!==0&&Pt!==5)return t.callbackNode=null,t.callbackPriority=0,null;
var a=t.callbackNode;if(Li()&&t.callbackNode!==a)return null;
var l=jt;return l=ft(t,t===Bt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(im(t,l,e),wm(t,pe()),t.callbackNode!=null&&t.callbackNode===a?jm.bind(null,t):null)}
function Hm(t,e){if(Li())return null;im(t,e,!0)}
function Ch(){Qh(function(){(Ot&6)!==0?Yn(xl,Mh):Em()})}
function mr(){if(sl===0){var t=mn;t===0&&(t=Zl,Zl<<=1,(Zl&261888)===0&&(Zl=256)),sl=t}
return sl}
function Am(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ws(""+t)}
function Tm(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}
function Dh(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=Am((n[Se]||null).action),u=l.submitter;u&&(e=(e=u[Se]||null)?Am(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));
var g=new Is("action","action",null,l,n);t.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(sl!==0){var b=u?Tm(n,u):new FormData(n);Mo(a,{pending:!0,data:b,method:n.method,action:i},null,b)}}
else typeof i=="function"&&(g.preventDefault(),b=u?Tm(n,u):new FormData(n),Mo(a,{pending:!0,data:b,method:n.method,action:i},i,b))},currentTarget:n}]})}}
for(var gr=0;gr<Wc.length;gr++){var pr=Wc[gr],kh=pr.toLowerCase(),Uh=pr[0].toUpperCase()+pr.slice(1);Ie(kh,"on"+Uh)}Ie(nf,"onAnimationEnd"),Ie(sf,"onAnimationIteration"),Ie(cf,"onAnimationStart"),Ie("dblclick","onDoubleClick"),Ie("focusin","onFocus"),Ie("focusout","onBlur"),Ie(Ip,"onTransitionRun"),Ie(th,"onTransitionStart"),Ie(eh,"onTransitionCancel"),Ie(of,"onTransitionEnd"),Pl("onMouseEnter",["mouseout","mouseover"]),Pl("onMouseLeave",["mouseout","mouseover"]),Pl("onPointerEnter",["pointerout","pointerover"]),Pl("onPointerLeave",["pointerout","pointerover"]),Nl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(As));
function zm(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var g=l[u],b=g.instance,T=g.currentTarget;if(g=g.listener,b!==i&&n.isPropagationStopped())break t;i=g,n.currentTarget=T;try{i(n)}
catch(D){ai(D)}n.currentTarget=null,i=b}
else for(u=0;u<l.length;u++){if(g=l[u],b=g.instance,T=g.currentTarget,g=g.listener,b!==i&&n.isPropagationStopped())break t;i=g,n.currentTarget=T;try{i(n)}
catch(D){ai(D)}n.currentTarget=null,i=b}}}}
function wt(t,e){var a=e[Ac];a===void 0&&(a=e[Ac]=new Set);
var l=t+"__bubble";a.has(l)||(Rm(e,t,2,!1),a.add(l))}
function hr(t,e,a){var l=0;e&&(l|=4),Rm(a,t,l,e)}
var Gi="_reactListening"+Math.random().toString(36).slice(2);
function xr(t){if(!t[Gi]){t[Gi]=!0,Nu.forEach(function(a){a!=="selectionchange"&&(Bh.has(a)||hr(a,!1,t),hr(a,!0,t)) });

var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gi]||(e[Gi]=!0,hr("selectionchange",!1,e))}}
function Rm(t,e,a,l){switch(s0(e)){case 2:var n=dx;break;case 8:n=mx;break;default:n=Or}a=n.bind(null,e,a,t),n=void 0,!kc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n }):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n }):t.addEventListener(e,a,!1)}
function yr(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;
var u=l.tag;if(u===3||u===4){var g=l.stateNode.containerInfo;if(g===n)break;if(u===4)for(u=l.return;u!==null;){var b=u.tag;if((b===3||b===4)&&u.stateNode.containerInfo===n)return;u=u.return}
for(;g!==null;){if(u=Wl(g),u===null)return;if(b=u.tag,b===5||b===6||b===26||b===27){l=i=u;continue t}g=g.parentNode}}l=l.return}Cu(function(){var T=i,D=Cc(a),q=[];t:{var R=rf.get(t);if(R!==void 0){var C=Is,$=t;switch(t){case"keypress":if($s(a)===0)break t;case"keydown":case"keyup":C=_p;break;case"focusin":$="focus",C=Vc;break;case"focusout":$="blur",C=Vc;break;case"beforeblur":case"afterblur":C=Vc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Cp;break;case nf:case sf:case cf:C=Np;break;case of:C=kp;break;case"scroll":case"scrollend":C=xp;break;case"wheel":C=Bp;break;case"copy":case"cut":case"paste":C=wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Lu;break;case"toggle":case"beforetoggle":C=Vp}
var rt=(e&4)!==0,Ut=!rt&&(t==="scroll"||t==="scrollend"),j=rt?R!==null?R+"Capture":null:R;rt=[];for(var E=T,A;E!==null;){var L=E;if(A=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||A===null||j===null||(L=Wn(E,j),L!=null&&rt.push(Ts(E,L,A))),Ut)break;E=E.return}0<rt.length&&(R=new C(R,$,null,a,D),q.push({event:R,listeners:rt}))}}
if((e&7)===0){t:{if(R=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",R&&a!==Mc&&($=a.relatedTarget||a.fromElement)&&(Wl($)||$[Jl]))break t;if((C||R)&&(R=D.window===D?D:(R=D.ownerDocument)?R.defaultView||R.parentWindow:window,C?($=a.relatedTarget||a.toElement,C=T,$=$?Wl($):null,$!==null&&(Ut=m($),rt=$.tag,$!==Ut||rt!==5&&rt!==27&&rt!==6)&&($=null)):(C=null,$=T),C!==$)){if(rt=Uu,L="onMouseLeave",j="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(rt=Lu,L="onPointerLeave",j="onPointerEnter",E="pointer"),Ut=C==null?R:Jn(C),A=$==null?R:Jn($),R=new rt(L,E+"leave",C,a,D),R.target=Ut,R.relatedTarget=A,L=null,Wl(D)===T&&(rt=new rt(j,E+"enter",$,a,D),rt.target=A,rt.relatedTarget=Ut,L=rt),Ut=L,C&&$)e:{for(rt=Lh,j=C,E=$,A=0,L=j;L;L=rt(L))A++;L=0;for(var ct=E;ct;ct=rt(ct))L++;for(;0<A-L;)j=rt(j),A--;for(;0<L-A;)E=rt(E),L--;for(;A--;){if(j===E||E!==null&&j===E.alternate){rt=j;break e}j=rt(j),E=rt(E)}rt=null}
else rt=null;C!==null&&_m(q,R,C,rt,!1),$!==null&&Ut!==null&&_m(q,Ut,$,rt,!0)}}t:{if(R=T?Jn(T):window,C=R.nodeName&&R.nodeName.toLowerCase(),C==="select"||C==="input"&&R.type==="file")var Rt=Ku;else if(Zu(R))if(Ju)Rt=Fp;else{Rt=Jp;
var lt=Kp}
else C=R.nodeName,!C||C.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?T&&Oc(T.elementType)&&(Rt=Ku):Rt=Wp;if(Rt&&(Rt=Rt(t,T))){Qu(q,Rt,a,D);break t}lt&&lt(t,R,T),t==="focusout"&&T&&R.type==="number"&&T.memoizedProps.value!=null&&_c(R,"number",R.value)}switch(lt=T?Jn(T):window,t){case"focusin":(Zu(lt)||lt.contentEditable==="true")&&(nn=lt,Qc=T,ls=null);break;case"focusout":ls=Qc=nn=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,af(q,a,D);break;case"selectionchange":if(Pp)break;case"keydown":case"keyup":af(q,a,D)}
var xt;if(Gc)t:{switch(t){case"compositionstart":var Ht="onCompositionStart";break t;case"compositionend":Ht="onCompositionEnd";break t;case"compositionupdate":Ht="onCompositionUpdate";break t}Ht=void 0}
else ln?Yu(t,a)&&(Ht="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ht="onCompositionStart");Ht&&(Vu&&a.locale!=="ko"&&(ln||Ht!=="onCompositionStart"?Ht==="onCompositionEnd"&&ln&&(xt=Du()):(Ya=D,Uc="value"in Ya?Ya.value:Ya.textContent,ln=!0)),lt=Yi(T,Ht),0<lt.length&&(Ht=new Bu(Ht,t,null,a,D),q.push({event:Ht,listeners:lt }),
xt?Ht.data=xt:(xt=Xu(a),xt!==null&&(Ht.data=xt)))),(xt=Gp?Yp(t,a):Xp(t,a))&&(Ht=Yi(T,"onBeforeInput"),0<Ht.length&&(lt=new Bu("onBeforeInput","beforeinput",null,a,D),q.push({event:lt,listeners:Ht }),
lt.data=xt)),Dh(q,t,T,a,D)}zm(q,e)})}
function Ts(t,e,a){return{instance:t,listener:e,currentTarget:a}}
function Yi(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Wn(t,a),n!=null&&l.unshift(Ts(t,n,i)),n=Wn(t,e),n!=null&&l.push(Ts(t,n,i))),t.tag===3)return l;t=t.return}return[]}
function Lh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}
function _m(t,e,a,l,n){for(var i=e._reactName,u=[];a!==null&&a!==l;){var g=a,b=g.alternate,T=g.stateNode;if(g=g.tag,b!==null&&b===l)break;g!==5&&g!==26&&g!==27||T===null||(b=T,n?(T=Wn(a,i),T!=null&&u.unshift(Ts(a,T,b))):n||(T=Wn(a,i),T!=null&&u.push(Ts(a,T,b)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}
var Vh=/\r\n?/g,qh=/\u0000|\uFFFD/g;
function Om(t){return(typeof t=="string"?t:""+t).replace(Vh,`
`).replace(qh,"")}
function Mm(t,e){return e=Om(e),Om(t)===e}
function kt(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||tn(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&tn(t,""+l);break;case"className":Ks(t,"class",l);break;case"tabIndex":Ks(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ks(t,a,l);break;case"style":Ou(t,l,i);break;case"data":if(e!=="object"){Ks(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}
if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ws(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}
else typeof i=="function"&&(a==="formAction"?(e!=="input"&&kt(t,e,"name",n.name,n,null),kt(t,e,"formEncType",n.formEncType,n,null),kt(t,e,"formMethod",n.formMethod,n,null),kt(t,e,"formTarget",n.formTarget,n,null)):(kt(t,e,"encType",n.encType,n,null),kt(t,e,"method",n.method,n,null),kt(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ws(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=ya);break;case"onScroll":l!=null&&wt("scroll",t);break;case"onScrollEnd":l!=null&&wt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Ws(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":wt("beforetoggle",t),wt("toggle",t),Qs(t,"popover",l);break;case"xlinkActuate":xa(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":xa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":xa(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":xa(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":xa(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":xa(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":xa(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":xa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":xa(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Qs(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=pp.get(a)||a,Qs(t,a,l))}}
function vr(t,e,a,l,n,i){switch(a){case"style":Ou(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof l=="string"?tn(t,l):(typeof l=="number"||typeof l=="bigint")&&tn(t,""+l);break;case"onScroll":l!=null&&wt("scroll",t);break;case"onScrollEnd":l!=null&&wt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Eu.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[Se]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Qs(t,a,l)}}}
function re(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wt("error",t),wt("load",t);
var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:kt(t,e,i,u,a,null)}}n&&kt(t,e,"srcSet",a.srcSet,a,null),l&&kt(t,e,"src",a.src,a,null);return;case"input":wt("invalid",t);
var g=i=u=n=null,b=null,T=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":n=D;break;case"type":u=D;break;case"checked":b=D;break;case"defaultChecked":T=D;break;case"value":i=D;break;case"defaultValue":g=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,e));break;default:kt(t,e,l,D,a,null)}}Tu(t,i,g,b,T,u,n,!1);return;case"select":wt("invalid",t),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(g=a[n],g!=null))switch(n){case"value":i=g;break;case"defaultValue":u=g;break;case"multiple":l=g;default:kt(t,e,n,g,a,null)}e=i,a=u,t.multiple=!!l,e!=null?Il(t,!!l,e,!1):a!=null&&Il(t,!!l,a,!0);return;case"textarea":wt("invalid",t),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(g=a[u],g!=null))switch(u){case"value":l=g;break;case"defaultValue":n=g;break;case"children":i=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));break;default:kt(t,e,u,g,a,null)}Ru(t,l,n,i);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:kt(t,e,b,l,a,null)}return;case"dialog":wt("beforetoggle",t),wt("toggle",t),wt("cancel",t),wt("close",t);break;case"iframe":case"object":wt("load",t);break;case"video":case"audio":for(l=0;l<As.length;l++)wt(As[l],t);break;case"image":wt("error",t),wt("load",t);break;case"details":wt("toggle",t);break;case"embed":case"source":case"link":wt("error",t),wt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(l=a[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:kt(t,e,T,l,a,null)}return;default:if(Oc(e)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&vr(t,e,D,l,a,void 0));return}}
for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!=null&&kt(t,e,g,l,a,null))}
function Gh(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,g=null,b=null,T=null,D=null;for(C in a){var q=a[C];if(a.hasOwnProperty(C)&&q!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":b=q;default:l.hasOwnProperty(C)||kt(t,e,C,null,l,q)}}
for(var R in l){var C=l[R];if(q=a[R],l.hasOwnProperty(R)&&(C!=null||q!=null))switch(R){case"type":i=C;break;case"name":n=C;break;case"checked":T=C;break;case"defaultChecked":D=C;break;case"value":u=C;break;case"defaultValue":g=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(137,e));break;default:C!==q&&kt(t,e,R,C,l,q)}}Rc(t,u,g,b,T,D,i,n);return;case"select":C=u=g=R=null;for(i in a)if(b=a[i],a.hasOwnProperty(i)&&b!=null)switch(i){case"value":break;case"multiple":C=b;default:l.hasOwnProperty(i)||kt(t,e,i,null,l,b)}
for(n in l)if(i=l[n],b=a[n],l.hasOwnProperty(n)&&(i!=null||b!=null))switch(n){case"value":R=i;break;case"defaultValue":g=i;break;case"multiple":u=i;default:i!==b&&kt(t,e,n,i,l,b)}e=g,a=u,l=C,R!=null?Il(t,!!a,R,!1):!!l!=!!a&&(e!=null?Il(t,!!a,e,!0):Il(t,!!a,a?[]:"",!1));return;case"textarea":C=R=null;for(g in a)if(n=a[g],a.hasOwnProperty(g)&&n!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:kt(t,e,g,null,l,n)}
for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":R=n;break;case"defaultValue":C=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&kt(t,e,u,n,l,i)}zu(t,R,C);return;case"option":for(var $ in a)if(R=a[$],a.hasOwnProperty($)&&R!=null&&!l.hasOwnProperty($))switch($){case"selected":t.selected=!1;break;default:kt(t,e,$,null,l,R)}
for(b in l)if(R=l[b],C=a[b],l.hasOwnProperty(b)&&R!==C&&(R!=null||C!=null))switch(b){case"selected":t.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:kt(t,e,b,R,l,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)R=a[rt],a.hasOwnProperty(rt)&&R!=null&&!l.hasOwnProperty(rt)&&kt(t,e,rt,null,l,R);for(T in l)if(R=l[T],C=a[T],l.hasOwnProperty(T)&&R!==C&&(R!=null||C!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,e));break;default:kt(t,e,T,R,l,C)}return;default:if(Oc(e)){for(var Ut in a)R=a[Ut],a.hasOwnProperty(Ut)&&R!==void 0&&!l.hasOwnProperty(Ut)&&vr(t,e,Ut,void 0,l,R);for(D in l)R=l[D],C=a[D],!l.hasOwnProperty(D)||R===C||R===void 0&&C===void 0||vr(t,e,D,R,l,C);return}}
for(var j in a)R=a[j],a.hasOwnProperty(j)&&R!=null&&!l.hasOwnProperty(j)&&kt(t,e,j,null,l,R);for(q in l)R=l[q],C=a[q],!l.hasOwnProperty(q)||R===C||R==null&&C==null||kt(t,e,q,R,l,C)}
function Cm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}
function Yh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,g=n.duration;if(i&&g&&Cm(u)){for(u=0,g=n.responseEnd,l+=1;l<a.length;l++){var b=a[l],T=b.startTime;if(T>g)break;
var D=b.transferSize,q=b.initiatorType;D&&Cm(q)&&(b=b.responseEnd,u+=D*(b<g?1:(g-T)/(b-T)))}
if(--l,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}
if(0<t)return e/t/1e6}
return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}
var br=null,Sr=null;
function Xi(t){return t.nodeType===9?t:t.ownerDocument}
function Dm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}
function km(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}
return t===1&&e==="foreignObject"?0:t}
function Nr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}
var Er=null;
function Xh(){var t=window.event;return t&&t.type==="popstate"?t===Er?!1:(Er=t,!0):(Er=null,!1)}
var Um=typeof setTimeout=="function"?setTimeout:void 0,Zh=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,Qh=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(t){return Bm.resolve(null).then(t).catch(Kh) }:Um;
function Kh(t){setTimeout(function(){throw t})}
function il(t){return t==="head"}
function Lm(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),On(e);return}l--}
else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")zs(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,zs(a);for(var i=a.firstChild;i;){var u=i.nextSibling,g=i.nodeName;i[Kn]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}
else a==="body"&&zs(t.ownerDocument.body);a=n}while(a);On(e)}
function Vm(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}
else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}
function wr(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wr(a),Tc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}
function Jh(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}
else if(l){if(!t[Kn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}
else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}
else return t;if(t=Je(t.nextSibling),t===null)break}
return null}
function Wh(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Je(t.nextSibling),t===null))return null;return t}
function qm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Je(t.nextSibling),t===null))return null;return t}
function jr(t){return t.data==="$?"||t.data==="$~"}
function Hr(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}
function Fh(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l) };
a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}
function Je(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}
return t}
var Ar=null;
function Gm(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Je(t.nextSibling);e--}
else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}
return null}
function Ym(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}
else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}
return null}
function Xm(t,e,a){switch(e=Xi(a),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}
function zs(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Tc(t)}
var We=new Map,Zm=new Set;
function Zi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}
var Ca=B.d;B.d={f:$h,r:Ph,D:Ih,C:tx,L:ex,m:ax,X:nx,S:lx,M:sx };

function $h(){var t=Ca.f(),e=ki();return t||e}
function Ph(t){var e=Fl(t);e!==null&&e.tag===5&&e.type==="form"?od(e):Ca.r(t)}
var zn=typeof document>"u"?null:document;
function Qm(t,e,a){var l=zn;if(l&&typeof e=="string"&&e){var n=qe(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Zm.has(n)||(Zm.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),re(e,"link",t),ee(e),l.head.appendChild(e)))}}
function Ih(t){Ca.D(t),Qm("dns-prefetch",t,null)}
function tx(t,e){Ca.C(t,e),Qm("preconnect",t,e)}
function ex(t,e,a){Ca.L(t,e,a);
var l=zn;if(l&&t&&e){var n='link[rel="preload"][as="'+qe(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+qe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+qe(a.imageSizes)+'"]')):n+='[href="'+qe(t)+'"]';
var i=n;switch(e){case"style":i=Rn(t);break;case"script":i=_n(t)}We.has(i)||(t=h({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),We.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(Rs(i))||e==="script"&&l.querySelector(_s(i))||(e=l.createElement("link"),re(e,"link",t),ee(e),l.head.appendChild(e)))}}
function ax(t,e){Ca.m(t,e);
var a=zn;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+qe(l)+'"][href="'+qe(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=_n(t)}
if(!We.has(i)&&(t=h({rel:"modulepreload",href:t},e),We.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_s(i)))return}l=a.createElement("link"),re(l,"link",t),ee(l),a.head.appendChild(l)}}}
function lx(t,e,a){Ca.S(t,e,a);
var l=zn;if(l&&t){var n=$l(l).hoistableStyles,i=Rn(t);e=e||"default";
var u=n.get(i);if(!u){var g={loading:0,preload:null };
if(u=l.querySelector(Rs(i)))g.loading=5;else{t=h({rel:"stylesheet",href:t,"data-precedence":e},a),(a=We.get(i))&&Tr(t,a);
var b=u=l.createElement("link");ee(b),re(b,"link",t),b._p=new Promise(function(T,D){b.onload=T,b.onerror=D }),
b.addEventListener("load",function(){g.loading|=1 }),
b.addEventListener("error",function(){g.loading|=2 }),
g.loading|=4,Qi(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:g},n.set(i,u)}}}
function nx(t,e){Ca.X(t,e);
var a=zn;if(a&&t){var l=$l(a).hoistableScripts,n=_n(t),i=l.get(n);i||(i=a.querySelector(_s(n)),i||(t=h({src:t,async:!0},e),(e=We.get(n))&&zr(t,e),i=a.createElement("script"),ee(i),re(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}
function sx(t,e){Ca.M(t,e);
var a=zn;if(a&&t){var l=$l(a).hoistableScripts,n=_n(t),i=l.get(n);i||(i=a.querySelector(_s(n)),i||(t=h({src:t,async:!0,type:"module"},e),(e=We.get(n))&&zr(t,e),i=a.createElement("script"),ee(i),re(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}
function Km(t,e,a,l){var n=(n=it.current)?Zi(n):null;if(!n)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Rn(a.href),a=$l(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null };
case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Rn(a.href);
var i=$l(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(Rs(t)))&&!i._p&&(u.instance=i,u.state.loading=5),We.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},We.set(t,a),i||ix(n,t,a,u.state))),e&&l===null)throw Error(o(528,""));return u}
if(e&&l!==null)throw Error(o(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=_n(a),a=$l(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null };
default:throw Error(o(444,t))}}
function Rn(t){return'href="'+qe(t)+'"'}
function Rs(t){return'link[rel="stylesheet"]['+t+"]"}
function Jm(t){return h({},t,{"data-precedence":t.precedence,precedence:null})}
function ix(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1 }),
e.addEventListener("error",function(){return l.loading|=2 }),
re(e,"link",a),ee(e),t.head.appendChild(e))}
function _n(t){return'[src="'+qe(t)+'"]'}
function _s(t){return"script[async]"+t}
function Wm(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+qe(a.href)+'"]');if(l)return e.instance=l,ee(l),l;
var n=h({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null });
return l=(t.ownerDocument||t).createElement("style"),ee(l),re(l,"style",n),Qi(l,a.precedence,t),e.instance=l;case"stylesheet":n=Rn(a.href);
var i=t.querySelector(Rs(n));if(i)return e.state.loading|=4,e.instance=i,ee(i),i;l=Jm(a),(n=We.get(n))&&Tr(l,n),i=(t.ownerDocument||t).createElement("link"),ee(i);
var u=i;return u._p=new Promise(function(g,b){u.onload=g,u.onerror=b }),
re(i,"link",l),e.state.loading|=4,Qi(i,a.precedence,t),e.instance=i;case"script":return i=_n(a.src),(n=t.querySelector(_s(i)))?(e.instance=n,ee(n),n):(l=a,(n=We.get(i))&&(l=h({},a),zr(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),ee(n),re(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(o(443,e.type))}
else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Qi(l,a.precedence,t));return e.instance}
function Qi(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var g=l[u];if(g.dataset.precedence===e)i=g;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}
function Tr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}
function zr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}
var Ki=null;
function Fm(t,e,a){if(Ki===null){var l=new Map,n=Ki=new Map;n.set(a,l)}
else n=Ki,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Kn]||i[se]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;
var g=l.get(u);g?g.push(i):l.set(u,[i])}}
return l}
function $m(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}
function cx(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}
function Pm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}
function ox(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Rn(l.href),i=e.querySelector(Rs(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ji.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,ee(i);return}i=e.ownerDocument||e,l=Jm(l),(n=We.get(n))&&Tr(l,n),i=i.createElement("link"),ee(i);
var u=i;u._p=new Promise(function(g,b){u.onload=g,u.onerror=b }),
re(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ji.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}
var Rr=0;
function rx(t,e){return t.stylesheets&&t.count===0&&Fi(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Fi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Rr===0&&(Rr=62500*Yh());
var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Rr?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)} }:null}
function Ji(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}
var Wi=null;
function Fi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wi=new Map,e.forEach(ux,t),Wi=null,Ji.call(t))}
function ux(t,e){if(!(e.state.loading&4)){var a=Wi.get(t);if(a)var l=a.get(null);else{a=new Map,Wi.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=e.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Ji.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}
var Os={$$typeof:J,Provider:null,Consumer:null,_currentValue:M,_currentValue2:M,_threadCount:0 };

function fx(t,e,a,l,n,i,u,g,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qa(0),this.hiddenUpdates=qa(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}
function Im(t,e,a,l,n,i,u,g,b,T,D,q){return t=new fx(t,e,a,u,b,T,D,q,g),e=1,i===!0&&(e|=24),i=_e(3,null,null,e),t.current=i,i.stateNode=t,e=oo(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},mo(i),t}
function t0(t){return t?(t=on,t):on}
function e0(t,e,a,l,n,i){n=t0(n),l.context===null?l.context=n:l.pendingContext=n,l=Wa(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Fa(t,l,e),a!==null&&(Ae(a,t,e),us(a,t,e))}
function a0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}
function _r(t,e){a0(t,e),(t=t.alternate)&&a0(t,e)}
function l0(t){if(t.tag===13||t.tag===31){var e=Hl(t,67108864);e!==null&&Ae(e,t,67108864),_r(t,67108864)}}
function n0(t){if(t.tag===13||t.tag===31){var e=ke();e=Kl(e);
var a=Hl(t,e);a!==null&&Ae(a,t,e),_r(t,e)}}
var $i=!0;
function dx(t,e,a,l){var n=w.T;w.T=null;
var i=B.p;try{B.p=2,Or(t,e,a,l)}
finally{B.p=i,w.T=n}}
function mx(t,e,a,l){var n=w.T;w.T=null;
var i=B.p;try{B.p=8,Or(t,e,a,l)}
finally{B.p=i,w.T=n}}
function Or(t,e,a,l){if($i){var n=Mr(l);if(n===null)yr(t,e,l,Pi,a),i0(t,l);else if(px(n,t,e,a,l))l.stopPropagation();else if(i0(t,l),e&4&&-1<gx.indexOf(t)){for(;n!==null;){var i=Fl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=sa(i.pendingLanes);if(u!==0){var g=i;for(g.pendingLanes|=2,g.entangledLanes|=2;u;){var b=1<<31-ue(u);g.entanglements[1]|=b,u&=~b}ra(i),(Ot&6)===0&&(Ci=pe()+500,Hs(0))}}break;case 31:case 13:g=Hl(i,2),g!==null&&Ae(g,i,2),ki(),_r(i,2)}
if(i=Mr(l),i===null&&yr(t,e,l,Pi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}
else yr(t,e,l,null,a)}}
function Mr(t){return t=Cc(t),Cr(t)}
var Pi=null;
function Cr(t){if(Pi=null,t=Wl(t),t!==null){var e=m(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=x(e),t!==null)return t;t=null}
else if(a===31){if(t=S(e),t!==null)return t;t=null}
else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}
else e!==t&&(t=null)}}
return Pi=t,null}
function s0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wc()){case xl:return 2;case Xs:return 8;case yl:case Zn:return 32;case ha:return 268435456;default:return 32}default:return 32}}
var Dr=!1,cl=null,ol=null,rl=null,Ms=new Map,Cs=new Map,ul=[],gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
function i0(t,e){switch(t){case"focusin":case"focusout":cl=null;break;case"dragenter":case"dragleave":ol=null;break;case"mouseover":case"mouseout":rl=null;break;case"pointerover":case"pointerout":Ms.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cs.delete(e.pointerId)}}
function Ds(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Fl(e),e!==null&&l0(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}
function px(t,e,a,l,n){switch(e){case"focusin":return cl=Ds(cl,t,e,a,l,n),!0;case"dragenter":return ol=Ds(ol,t,e,a,l,n),!0;case"mouseover":return rl=Ds(rl,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return Ms.set(i,Ds(Ms.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Cs.set(i,Ds(Cs.get(i)||null,t,e,a,l,n)),!0}return!1}
function c0(t){var e=Wl(t.target);if(e!==null){var a=m(e);if(a!==null){if(e=a.tag,e===13){if(e=x(a),e!==null){t.blockedOn=e,bu(t.priority,function(){n0(a) });
return}}
else if(e===31){if(e=S(a),e!==null){t.blockedOn=e,bu(t.priority,function(){n0(a) });
return}}
else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}
function Ii(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Mr(t.nativeEvent);if(a===null){a=t.nativeEvent;
var l=new a.constructor(a.type,a);Mc=l,a.target.dispatchEvent(l),Mc=null}
else return e=Fl(a),e!==null&&l0(e),t.blockedOn=a,!1;e.shift()}return!0}
function o0(t,e,a){Ii(t)&&a.delete(e)}
function hx(){Dr=!1,cl!==null&&Ii(cl)&&(cl=null),ol!==null&&Ii(ol)&&(ol=null),rl!==null&&Ii(rl)&&(rl=null),Ms.forEach(o0),Cs.forEach(o0)}
function tc(t,e){t.blockedOn===e&&(t.blockedOn=null,Dr||(Dr=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,hx)))}
var ec=null;
function r0(t){ec!==t&&(ec=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ec===t&&(ec=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(Cr(l||a)===null)continue;break}
var i=Fl(a);i!==null&&(t.splice(e,3),e-=3,Mo(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}
function On(t){function e(b){return tc(b,t)}cl!==null&&tc(cl,t),ol!==null&&tc(ol,t),rl!==null&&tc(rl,t),Ms.forEach(e),Cs.forEach(e);for(var a=0;a<ul.length;a++){var l=ul[a];l.blockedOn===t&&(l.blockedOn=null)}
for(;0<ul.length&&(a=ul[0],a.blockedOn===null);)c0(a),a.blockedOn===null&&ul.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Se]||null;if(typeof i=="function")u||r0(a);else if(u){var g=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Se]||null)g=u.formAction;else if(Cr(n)!==null)continue}
else g=u.action;typeof g=="function"?a[l+1]=g:(a.splice(l,3),l-=3),r0(a)}}}
function u0(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}
function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}
function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}
if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}
function kr(t){this._internalRoot=t}ac.prototype.render=kr.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));
var a=e.current,l=ke();e0(a,l,t,e,null,null)},ac.prototype.unmount=kr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;
var e=t.containerInfo;e0(t.current,2,null,t,null,null),ki(),e[Jl]=null} };

function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hc();t={blockedOn:null,target:t,priority:e };
for(var a=0;a<ul.length&&e!==0&&e<ul[a].priority;a++);ul.splice(a,0,t),a===0&&c0(t)} };

var f0=c.version;if(f0!=="19.2.1")throw Error(o(527,f0,"19.2.1"));B.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=p(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t };

var xx={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.1" };
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{vl=lc.inject(xx),he=lc}
catch{}}
return Us.createRoot=function(t,e){if(!d(t))throw Error(o(299));
var a=!1,l="",n=yd,i=vd,u=bd;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=Im(t,1,!1,null,null,a,l,null,n,i,u,u0),t[Jl]=e.current,xr(t),new kr(e)},Us.hydrateRoot=function(t,e,a){if(!d(t))throw Error(o(299));
var l=!1,n="",i=yd,u=vd,g=bd,b=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&(b=a.formState)),e=Im(t,1,!0,e,a??null,l,n,b,i,u,g,u0),e.context=t0(null),a=e.current,l=ke(),l=Kl(l),n=Wa(l),n.callback=null,Fa(a,n,l),a=l,e.current.lanes=a,Yt(e,a),ra(e),t[Jl]=e.current,xr(t),new ac(e)},Us.version="19.2.1",Us}
var S0;
function Ax(){if(S0)return Br.exports;S0=1;
function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}
catch(c){console.error(c)}}
return s(),Br.exports=Hx(),Br.exports}
var Tx=Ax(),z=gc();
const K=I0(z),zx=vx({__proto__:null,default:K},[z]);
var Rx=(s,c,r,o,d,m,x,S)=>{let y=document.documentElement,p=["light","dark"];
function v(_){(Array.isArray(s)?s:[s]).forEach(O=>{let V=O==="class",Y=V&&m?d.map(G=>m[G]||G):d;V?(y.classList.remove(...Y),y.classList.add(m&&m[_]?m[_]:_)):y.setAttribute(O,_) }),
h(_)}
function h(_){S&&p.includes(_)&&(y.style.colorScheme=_)}
function H(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}
if(o)v(o);else try{let _=localStorage.getItem(c)||r,O=x&&_==="system"?H():_;v(O)}
catch{}},_x=z.createContext(void 0),Ox={setTheme:s=>{},themes:[]},Mx=()=>{var s;return(s=z.useContext(_x))!=null?s:Ox };
z.memo(({forcedTheme:s,storageKey:c,attribute:r,enableSystem:o,enableColorScheme:d,defaultTheme:m,value:x,themes:S,nonce:y,scriptProps:p})=>{let v=JSON.stringify([r,c,m,s,S,x,o,d]).slice(1,-1);return z.createElement("script",{...p,suppressHydrationWarning:!0,nonce:typeof window>"u"?y:"",dangerouslySetInnerHTML:{__html:`(${Rx.toString()})(${v})`}}) });

var cu=tg();
const Cx=I0(cu);
function Dx(s){if(typeof document>"u")return;
let c=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",c.appendChild(r),r.styleSheet?r.styleSheet.cssText=s:r.appendChild(document.createTextNode(s))}
const kx=s=>{switch(s){case"success":return Lx;case"info":return qx;case"warning":return Vx;case"error":return Gx;default:return null}},Ux=Array(12).fill(0),Bx=({visible:s,className:c})=>K.createElement("div",{className:["sonner-loading-wrapper",c].filter(Boolean).join(" "),"data-visible":s},K.createElement("div",{className:"sonner-spinner"},Ux.map((r,o)=>K.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${o}`})))),Lx=K.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},K.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),Vx=K.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},K.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),qx=K.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},K.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),Gx=K.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},K.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Yx=K.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},K.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18" }),
K.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Xx=()=>{const[s,c]=K.useState(document.hidden);return K.useEffect(()=>{const r=()=>{c(document.hidden) };
return document.addEventListener("visibilitychange",r),()=>window.removeEventListener("visibilitychange",r)},[]),s };

let Fr=1;class Zx{constructor(){this.subscribe=c=>(this.subscribers.push(c),()=>{const r=this.subscribers.indexOf(c);this.subscribers.splice(r,1) }),
this.publish=c=>{this.subscribers.forEach(r=>r(c))},this.addToast=c=>{this.publish(c),this.toasts=[...this.toasts,c]},this.create=c=>{var r;const{message:o,...d}=c,m=typeof c?.id=="number"||((r=c.id)==null?void 0:r.length)>0?c.id:Fr++,x=this.toasts.find(y=>y.id===m),S=c.dismissible===void 0?!0:c.dismissible;return this.dismissedToasts.has(m)&&this.dismissedToasts.delete(m),x?this.toasts=this.toasts.map(y=>y.id===m?(this.publish({...y,...c,id:m,title:o }),
{...y,...c,id:m,dismissible:S,title:o }):y):this.addToast({title:o,...d,dismissible:S,id:m }),
m},this.dismiss=c=>(c?(this.dismissedToasts.add(c),requestAnimationFrame(()=>this.subscribers.forEach(r=>r({id:c,dismiss:!0})))):this.toasts.forEach(r=>{this.subscribers.forEach(o=>o({id:r.id,dismiss:!0})) }),
c),this.message=(c,r)=>this.create({...r,message:c }),
this.error=(c,r)=>this.create({...r,message:c,type:"error" }),
this.success=(c,r)=>this.create({...r,type:"success",message:c }),
this.info=(c,r)=>this.create({...r,type:"info",message:c }),
this.warning=(c,r)=>this.create({...r,type:"warning",message:c }),
this.loading=(c,r)=>this.create({...r,type:"loading",message:c }),
this.promise=(c,r)=>{if(!r)return;
let o;r.loading!==void 0&&(o=this.create({...r,promise:c,type:"loading",message:r.loading,description:typeof r.description!="function"?r.description:void 0}));
const d=Promise.resolve(c instanceof Function?c():c);
let m=o!==void 0,x;
const S=d.then(async p=>{if(x=["resolve",p],K.isValidElement(p))m=!1,this.create({id:o,type:"default",message:p });
else if(Kx(p)&&!p.ok){m=!1;
const h=typeof r.error=="function"?await r.error(`HTTP error! status: ${p.status}`):r.error,H=typeof r.description=="function"?await r.description(`HTTP error! status: ${p.status}`):r.description,O=typeof h=="object"&&!K.isValidElement(h)?h:{message:h };
this.create({id:o,type:"error",description:H,...O})}
else if(p instanceof Error){m=!1;
const h=typeof r.error=="function"?await r.error(p):r.error,H=typeof r.description=="function"?await r.description(p):r.description,O=typeof h=="object"&&!K.isValidElement(h)?h:{message:h };
this.create({id:o,type:"error",description:H,...O})}
else if(r.success!==void 0){m=!1;
const h=typeof r.success=="function"?await r.success(p):r.success,H=typeof r.description=="function"?await r.description(p):r.description,O=typeof h=="object"&&!K.isValidElement(h)?h:{message:h };
this.create({id:o,type:"success",description:H,...O})}}).catch(async p=>{if(x=["reject",p],r.error!==void 0){m=!1;
const v=typeof r.error=="function"?await r.error(p):r.error,h=typeof r.description=="function"?await r.description(p):r.description,_=typeof v=="object"&&!K.isValidElement(v)?v:{message:v };
this.create({id:o,type:"error",description:h,..._})}}).finally(()=>{m&&(this.dismiss(o),o=void 0),r.finally==null||r.finally.call(r) }),
y=()=>new Promise((p,v)=>S.then(()=>x[0]==="reject"?v(x[1]):p(x[1])).catch(v));return typeof o!="string"&&typeof o!="number"?{unwrap:y }:Object.assign(o,{unwrap:y})},this.custom=(c,r)=>{const o=r?.id||Fr++;return this.create({jsx:c(o),id:o,...r }),
o},this.getActiveToasts=()=>this.toasts.filter(c=>!this.dismissedToasts.has(c.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}
const Te=new Zx,Qx=(s,c)=>{const r=c?.id||Fr++;return Te.addToast({title:s,...c,id:r }),
r},Kx=s=>s&&typeof s=="object"&&"ok"in s&&typeof s.ok=="boolean"&&"status"in s&&typeof s.status=="number",Jx=Qx,Wx=()=>Te.toasts,Fx=()=>Te.getActiveToasts();Object.assign(Jx,{success:Te.success,info:Te.info,warning:Te.warning,error:Te.error,custom:Te.custom,message:Te.message,promise:Te.promise,dismiss:Te.dismiss,loading:Te.loading},{getHistory:Wx,getToasts:Fx });
Dx("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function nc(s){return s.label!==void 0}
const $x=3,Px="24px",Ix="16px",N0=4e3,ty=356,ey=14,ay=45,ly=200;
function ua(...s){return s.filter(Boolean).join(" ")}
function ny(s){const[c,r]=s.split("-"),o=[];return c&&o.push(c),r&&o.push(r),o}
const sy=s=>{var c,r,o,d,m,x,S,y,p;const{invert:v,toast:h,unstyled:H,interacting:_,setHeights:O,visibleToasts:V,heights:Y,index:G,toasts:P,expanded:J,removeToast:F,defaultRichColors:I,closeButton:nt,style:Z,cancelButtonStyle:Q,actionButtonStyle:mt,className:Nt="",descriptionClassName:zt="",duration:pt,position:ht,gap:vt,expandByDefault:St,classNames:w,icons:B,closeButtonAriaLabel:M="Close toast"}=s,[st,ot]=K.useState(null),[N,U]=K.useState(null),[k,X]=K.useState(!1),[W,it]=K.useState(!1),[at,ut]=K.useState(!1),[At,le]=K.useState(!1),[me,ne]=K.useState(!1),[pa,Fe]=K.useState(0),[qn,Xl]=K.useState(0),hl=K.useRef(h.duration||pt||N0),Gn=K.useRef(null),ze=K.useRef(null),Yn=G===0,Xn=G+1<=V,ge=h.type,La=h.dismissible!==!1,pe=h.className||"",wc=h.descriptionClassName||"",xl=K.useMemo(()=>Y.findIndex(ft=>ft.toastId===h.id)||0,[Y,h.id]),Xs=K.useMemo(()=>{var ft;return(ft=h.closeButton)!=null?ft:nt},[h.closeButton,nt]),yl=K.useMemo(()=>h.duration||pt||N0,[h.duration,pt]),Zn=K.useRef(0),ha=K.useRef(0),Zs=K.useRef(0),Va=K.useRef(null),[vl,he]=ht.split("-"),$e=K.useMemo(()=>Y.reduce((ft,qt,te)=>te>=xl?ft:ft+qt.height,0),[Y,xl]),ue=Xx(),jc=h.invert||v,Qn=ge==="loading";ha.current=K.useMemo(()=>xl*vt+$e,[xl,$e]),K.useEffect(()=>{hl.current=yl},[yl]),K.useEffect(()=>{X(!0)},[]),K.useEffect(()=>{const ft=ze.current;if(ft){const qt=ft.getBoundingClientRect().height;return Xl(qt),O(te=>[{toastId:h.id,height:qt,position:h.position},...te]),()=>O(te=>te.filter(fe=>fe.toastId!==h.id))}},[O,h.id]),K.useLayoutEffect(()=>{if(!k)return;
const ft=ze.current,qt=ft.style.height;ft.style.height="auto";
const te=ft.getBoundingClientRect().height;ft.style.height=qt,Xl(te),O(fe=>fe.find(Yt=>Yt.toastId===h.id)?fe.map(Yt=>Yt.toastId===h.id?{...Yt,height:te }:Yt):[{toastId:h.id,height:te,position:h.position},...fe])},[k,h.title,h.description,O,h.id,h.jsx,h.action,h.cancel]);
const na=K.useCallback(()=>{it(!0),Fe(ha.current),O(ft=>ft.filter(qt=>qt.toastId!==h.id)),setTimeout(()=>{F(h)},ly)},[h,F,O,ha]);K.useEffect(()=>{if(h.promise&&ge==="loading"||h.duration===1/0||h.type==="loading")return;
let ft;return J||_||ue?(()=>{if(Zs.current<Zn.current){const fe=new Date().getTime()-Zn.current;hl.current=hl.current-fe}Zs.current=new Date().getTime()})():(()=>{hl.current!==1/0&&(Zn.current=new Date().getTime(),ft=setTimeout(()=>{h.onAutoClose==null||h.onAutoClose.call(h,h),na()},hl.current))})(),()=>clearTimeout(ft)},[J,_,h,ge,ue,na]),K.useEffect(()=>{h.delete&&(na(),h.onDismiss==null||h.onDismiss.call(h,h))},[na,h.delete]);
function Zl(){var ft;if(B?.loading){var qt;return K.createElement("div",{className:ua(w?.loader,h==null||(qt=h.classNames)==null?void 0:qt.loader,"sonner-loader"),"data-visible":ge==="loading"},B.loading)}
return K.createElement(Bx,{className:ua(w?.loader,h==null||(ft=h.classNames)==null?void 0:ft.loader),visible:ge==="loading"})}
const Ql=h.icon||B?.[ge]||kx(ge);
var bl,sa;return K.createElement("li",{tabIndex:0,ref:ze,className:ua(Nt,pe,w?.toast,h==null||(c=h.classNames)==null?void 0:c.toast,w?.default,w?.[ge],h==null||(r=h.classNames)==null?void 0:r[ge]),"data-sonner-toast":"","data-rich-colors":(bl=h.richColors)!=null?bl:I,"data-styled":!(h.jsx||h.unstyled||H),"data-mounted":k,"data-promise":!!h.promise,"data-swiped":me,"data-removed":W,"data-visible":Xn,"data-y-position":vl,"data-x-position":he,"data-index":G,"data-front":Yn,"data-swiping":at,"data-dismissible":La,"data-type":ge,"data-invert":jc,"data-swipe-out":At,"data-swipe-direction":N,"data-expanded":!!(J||St&&k),"data-testid":h.testId,style:{"--index":G,"--toasts-before":G,"--z-index":P.length-G,"--offset":`${W?pa:ha.current}px`,"--initial-height":St?"auto":`${qn}px`,...Z,...h.style},onDragEnd:()=>{ut(!1),ot(null),Va.current=null},onPointerDown:ft=>{ft.button!==2&&(Qn||!La||(Gn.current=new Date,Fe(ha.current),ft.target.setPointerCapture(ft.pointerId),ft.target.tagName!=="BUTTON"&&(ut(!0),Va.current={x:ft.clientX,y:ft.clientY})))},onPointerUp:()=>{var ft,qt,te;if(At||!La)return;Va.current=null;
const fe=Number(((ft=ze.current)==null?void 0:ft.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),qa=Number(((qt=ze.current)==null?void 0:qt.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Yt=new Date().getTime()-((te=Gn.current)==null?void 0:te.getTime()),ye=st==="x"?fe:qa,Sl=Math.abs(ye)/Yt;if(Math.abs(ye)>=ay||Sl>.11){Fe(ha.current),h.onDismiss==null||h.onDismiss.call(h,h),U(st==="x"?fe>0?"right":"left":qa>0?"down":"up"),na(),le(!0);return}
else{var ve,be;(ve=ze.current)==null||ve.style.setProperty("--swipe-amount-x","0px"),(be=ze.current)==null||be.style.setProperty("--swipe-amount-y","0px")}ne(!1),ut(!1),ot(null)},onPointerMove:ft=>{var qt,te,fe;if(!Va.current||!La||((qt=window.getSelection())==null?void 0:qt.toString().length)>0)return;
const Yt=ft.clientY-Va.current.y,ye=ft.clientX-Va.current.x;
var Sl;
const ve=(Sl=s.swipeDirections)!=null?Sl:ny(ht);!st&&(Math.abs(ye)>1||Math.abs(Yt)>1)&&ot(Math.abs(ye)>Math.abs(Yt)?"x":"y");
let be={x:0,y:0 };

const Kl=Pe=>1/(1.5+Math.abs(Pe)/20);if(st==="y"){if(ve.includes("top")||ve.includes("bottom"))if(ve.includes("top")&&Yt<0||ve.includes("bottom")&&Yt>0)be.y=Yt;else{const Pe=Yt*Kl(Yt);be.y=Math.abs(Pe)<Math.abs(Yt)?Pe:Yt}}
else if(st==="x"&&(ve.includes("left")||ve.includes("right")))if(ve.includes("left")&&ye<0||ve.includes("right")&&ye>0)be.x=ye;else{const Pe=ye*Kl(ye);be.x=Math.abs(Pe)<Math.abs(ye)?Pe:ye}(Math.abs(be.x)>0||Math.abs(be.y)>0)&&ne(!0),(te=ze.current)==null||te.style.setProperty("--swipe-amount-x",`${be.x}px`),(fe=ze.current)==null||fe.style.setProperty("--swipe-amount-y",`${be.y}px`)}},Xs&&!h.jsx&&ge!=="loading"?K.createElement("button",{"aria-label":M,"data-disabled":Qn,"data-close-button":!0,onClick:Qn||!La?()=>{ }:()=>{na(),h.onDismiss==null||h.onDismiss.call(h,h)},className:ua(w?.closeButton,h==null||(o=h.classNames)==null?void 0:o.closeButton)},(sa=B?.close)!=null?sa:Yx):null,(ge||h.icon||h.promise)&&h.icon!==null&&(B?.[ge]!==null||h.icon)?K.createElement("div",{"data-icon":"",className:ua(w?.icon,h==null||(d=h.classNames)==null?void 0:d.icon)},h.promise||h.type==="loading"&&!h.icon?h.icon||Zl():null,h.type!=="loading"?Ql:null):null,K.createElement("div",{"data-content":"",className:ua(w?.content,h==null||(m=h.classNames)==null?void 0:m.content)},K.createElement("div",{"data-title":"",className:ua(w?.title,h==null||(x=h.classNames)==null?void 0:x.title)},h.jsx?h.jsx:typeof h.title=="function"?h.title():h.title),h.description?K.createElement("div",{"data-description":"",className:ua(zt,wc,w?.description,h==null||(S=h.classNames)==null?void 0:S.description)},typeof h.description=="function"?h.description():h.description):null),K.isValidElement(h.cancel)?h.cancel:h.cancel&&nc(h.cancel)?K.createElement("button",{"data-button":!0,"data-cancel":!0,style:h.cancelButtonStyle||Q,onClick:ft=>{nc(h.cancel)&&La&&(h.cancel.onClick==null||h.cancel.onClick.call(h.cancel,ft),na())},className:ua(w?.cancelButton,h==null||(y=h.classNames)==null?void 0:y.cancelButton)},h.cancel.label):null,K.isValidElement(h.action)?h.action:h.action&&nc(h.action)?K.createElement("button",{"data-button":!0,"data-action":!0,style:h.actionButtonStyle||mt,onClick:ft=>{nc(h.action)&&(h.action.onClick==null||h.action.onClick.call(h.action,ft),!ft.defaultPrevented&&na())},className:ua(w?.actionButton,h==null||(p=h.classNames)==null?void 0:p.actionButton)},h.action.label):null) };

function E0(){if(typeof window>"u"||typeof document>"u")return"ltr";
const s=document.documentElement.getAttribute("dir");return s==="auto"||!s?window.getComputedStyle(document.documentElement).direction:s}
function iy(s,c){const r={ };
return[s,c].forEach((o,d)=>{const m=d===1,x=m?"--mobile-offset":"--offset",S=m?Ix:Px;
function y(p){["top","right","bottom","left"].forEach(v=>{r[`${x}-${v}`]=typeof p=="number"?`${p}px`:p})}typeof o=="number"||typeof o=="string"?y(o):typeof o=="object"?["top","right","bottom","left"].forEach(p=>{o[p]===void 0?r[`${x}-${p}`]=S:r[`${x}-${p}`]=typeof o[p]=="number"?`${o[p]}px`:o[p] }):y(S) }),
r}
const cy=K.forwardRef(function(c,r){const{id:o,invert:d,position:m="bottom-right",hotkey:x=["altKey","KeyT"],expand:S,closeButton:y,className:p,offset:v,mobileOffset:h,theme:H="light",richColors:_,duration:O,style:V,visibleToasts:Y=$x,toastOptions:G,dir:P=E0(),gap:J=ey,icons:F,containerAriaLabel:I="Notifications"}=c,[nt,Z]=K.useState([]),Q=K.useMemo(()=>o?nt.filter(k=>k.toasterId===o):nt.filter(k=>!k.toasterId),[nt,o]),mt=K.useMemo(()=>Array.from(new Set([m].concat(Q.filter(k=>k.position).map(k=>k.position)))),[Q,m]),[Nt,zt]=K.useState([]),[pt,ht]=K.useState(!1),[vt,St]=K.useState(!1),[w,B]=K.useState(H!=="system"?H:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),M=K.useRef(null),st=x.join("+").replace(/Key/g,"").replace(/Digit/g,""),ot=K.useRef(null),N=K.useRef(!1),U=K.useCallback(k=>{Z(X=>{var W;return(W=X.find(it=>it.id===k.id))!=null&&W.delete||Te.dismiss(k.id),X.filter(({id:it})=>it!==k.id)})},[]);return K.useEffect(()=>Te.subscribe(k=>{if(k.dismiss){requestAnimationFrame(()=>{Z(X=>X.map(W=>W.id===k.id?{...W,delete:!0 }:W)) });
return}setTimeout(()=>{Cx.flushSync(()=>{Z(X=>{const W=X.findIndex(it=>it.id===k.id);return W!==-1?[...X.slice(0,W),{...X[W],...k},...X.slice(W+1)]:[k,...X]})})}) }),
[nt]),K.useEffect(()=>{if(H!=="system"){B(H);return}
if(H==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?B("dark"):B("light")),typeof window>"u")return;
const k=window.matchMedia("(prefers-color-scheme: dark)");try{k.addEventListener("change",({matches:X})=>{B(X?"dark":"light")})}
catch{k.addListener(({matches:W})=>{try{B(W?"dark":"light")}
catch(it){console.error(it)}})}},[H]),K.useEffect(()=>{nt.length<=1&&ht(!1)},[nt]),K.useEffect(()=>{const k=X=>{var W;if(x.every(ut=>X[ut]||X.code===ut)){var at;ht(!0),(at=M.current)==null||at.focus()}X.code==="Escape"&&(document.activeElement===M.current||(W=M.current)!=null&&W.contains(document.activeElement))&&ht(!1) };
return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[x]),K.useEffect(()=>{if(M.current)return()=>{ot.current&&(ot.current.focus({preventScroll:!0 }),
ot.current=null,N.current=!1)}},[M.current]),K.createElement("section",{ref:r,"aria-label":`${I} ${st}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},mt.map((k,X)=>{var W;const[it,at]=k.split("-");return Q.length?K.createElement("ol",{key:k,dir:P==="auto"?E0():P,tabIndex:-1,ref:M,className:p,"data-sonner-toaster":!0,"data-sonner-theme":w,"data-y-position":it,"data-x-position":at,style:{"--front-toast-height":`${((W=Nt[0])==null?void 0:W.height)||0}px`,"--width":`${ty}px`,"--gap":`${J}px`,...V,...iy(v,h)},onBlur:ut=>{N.current&&!ut.currentTarget.contains(ut.relatedTarget)&&(N.current=!1,ot.current&&(ot.current.focus({preventScroll:!0 }),
ot.current=null))},onFocus:ut=>{ut.target instanceof HTMLElement&&ut.target.dataset.dismissible==="false"||N.current||(N.current=!0,ot.current=ut.relatedTarget)},onMouseEnter:()=>ht(!0),onMouseMove:()=>ht(!0),onMouseLeave:()=>{vt||ht(!1)},onDragEnd:()=>ht(!1),onPointerDown:ut=>{ut.target instanceof HTMLElement&&ut.target.dataset.dismissible==="false"||St(!0)},onPointerUp:()=>St(!1)},Q.filter(ut=>!ut.position&&X===0||ut.position===k).map((ut,At)=>{var le,me;return K.createElement(sy,{key:ut.id,icons:F,index:At,toast:ut,defaultRichColors:_,duration:(le=G?.duration)!=null?le:O,className:G?.className,descriptionClassName:G?.descriptionClassName,invert:d,visibleToasts:Y,closeButton:(me=G?.closeButton)!=null?me:y,interacting:vt,position:k,style:G?.style,unstyled:G?.unstyled,classNames:G?.classNames,cancelButtonStyle:G?.cancelButtonStyle,actionButtonStyle:G?.actionButtonStyle,closeButtonAriaLabel:G?.closeButtonAriaLabel,removeToast:U,toasts:Q.filter(ne=>ne.position==ut.position),heights:Nt.filter(ne=>ne.position==ut.position),setHeights:zt,expandByDefault:S,gap:J,expanded:pt,swipeDirections:c.swipeDirections})})):null})) }),
oy=({...s})=>{const{theme:c="system"}=Mx();return f.jsx(cy,{"data-loc":"client/src/components/ui/sonner.tsx:8",theme:c,className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...s}) };

function ka(s,c,{checkForDefaultPrevented:r=!0}={}){return function(d){if(s?.(d),r===!1||!d.defaultPrevented)return c?.(d)}}
function w0(s,c){if(typeof s=="function")return s(c);s!=null&&(s.current=c)}
function eg(...s){return c=>{let r=!1;
const o=s.map(d=>{const m=w0(d,c);return!r&&typeof m=="function"&&(r=!0),m });
if(r)return()=>{for(let d=0;d<o.length;d++){const m=o[d];typeof m=="function"?m():w0(s[d],null)}}}}
function Gl(...s){return z.useCallback(eg(...s),s)}
function ag(s,c=[]){let r=[];
function o(m,x){const S=z.createContext(x),y=r.length;r=[...r,x];
const p=h=>{const{scope:H,children:_,...O}=h,V=H?.[s]?.[y]||S,Y=z.useMemo(()=>O,Object.values(O));return f.jsx(V.Provider,{value:Y,children:_}) };
p.displayName=m+"Provider";
function v(h,H){const _=H?.[s]?.[y]||S,O=z.useContext(_);if(O)return O;if(x!==void 0)return x;throw new Error(`\`${h}\` must be used within \`${m}\``)}return[p,v]}
const d=()=>{const m=r.map(x=>z.createContext(x));return function(S){const y=S?.[s]||m;return z.useMemo(()=>({[`__scope${s}`]:{...S,[s]:y} }),
[S,y])} };
return d.scopeName=s,[o,ry(d,...c)]}
function ry(...s){const c=s[0];if(s.length===1)return c;
const r=()=>{const o=s.map(d=>({useScope:d(),scopeName:d.scopeName}));return function(m){const x=o.reduce((S,{useScope:y,scopeName:p})=>{const h=y(m)[`__scope${p}`];return{...S,...h}},
{ });
return z.useMemo(()=>({[`__scope${c.scopeName}`]:x }),
[x])} };
return r.scopeName=c.scopeName,r}
function lg(s){const c=fy(s),r=z.forwardRef((o,d)=>{const{children:m,...x}=o,S=z.Children.toArray(m),y=S.find(my);if(y){const p=y.props.children,v=S.map(h=>h===y?z.Children.count(p)>1?z.Children.only(null):z.isValidElement(p)?p.props.children:null:h);return f.jsx(c,{...x,ref:d,children:z.isValidElement(p)?z.cloneElement(p,void 0,v):null})}
return f.jsx(c,{...x,ref:d,children:m}) });
return r.displayName=`${s}.Slot`,r}
var uy=lg("Slot");
function fy(s){const c=z.forwardRef((r,o)=>{const{children:d,...m}=r;if(z.isValidElement(d)){const x=py(d),S=gy(m,d.props);return d.type!==z.Fragment&&(S.ref=o?eg(o,x):x),z.cloneElement(d,S)}
return z.Children.count(d)>1?z.Children.only(null):null });
return c.displayName=`${s}.SlotClone`,c}
var ng=Symbol("radix.slottable");
function dy(s){const c=({children:r})=>f.jsx(f.Fragment,{children:r });
return c.displayName=`${s}.Slottable`,c.__radixId=ng,c}
function my(s){return z.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===ng}
function gy(s,c){const r={...c };
for(const o in c){const d=s[o],m=c[o];/^on[A-Z]/.test(o)?d&&m?r[o]=(...S)=>{const y=m(...S);return d(...S),y }:d&&(r[o]=d):o==="style"?r[o]={...d,...m }:o==="className"&&(r[o]=[d,m].filter(Boolean).join(" "))}return{...s,...r}}
function py(s){let c=Object.getOwnPropertyDescriptor(s.props,"ref")?.get,r=c&&"isReactWarning"in c&&c.isReactWarning;return r?s.ref:(c=Object.getOwnPropertyDescriptor(s,"ref")?.get,r=c&&"isReactWarning"in c&&c.isReactWarning,r?s.props.ref:s.props.ref||s.ref)}
var hy=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Yl=hy.reduce((s,c)=>{const r=lg(`Primitive.${c}`),o=z.forwardRef((d,m)=>{const{asChild:x,...S}=d,y=x?r:c;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),f.jsx(y,{...S,ref:m}) });
return o.displayName=`Primitive.${c}`,{...s,[c]:o}},
{ });

function xy(s,c){s&&cu.flushSync(()=>s.dispatchEvent(c))}
function pc(s){const c=z.useRef(s);return z.useEffect(()=>{c.current=s }),
z.useMemo(()=>(...r)=>c.current?.(...r),[])}
function yy(s,c=globalThis?.document){const r=pc(s);z.useEffect(()=>{const o=d=>{d.key==="Escape"&&r(d) };
return c.addEventListener("keydown",o,{capture:!0 }),
()=>c.removeEventListener("keydown",o,{capture:!0})},[r,c])}
var vy="DismissableLayer",$r="dismissableLayer.update",by="dismissableLayer.pointerDownOutside",Sy="dismissableLayer.focusOutside",j0,sg=z.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set }),
ig=z.forwardRef((s,c)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:d,onFocusOutside:m,onInteractOutside:x,onDismiss:S,...y}=s,p=z.useContext(sg),[v,h]=z.useState(null),H=v?.ownerDocument??globalThis?.document,[,_]=z.useState({ }),
O=Gl(c,Z=>h(Z)),V=Array.from(p.layers),[Y]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),G=V.indexOf(Y),P=v?V.indexOf(v):-1,J=p.layersWithOutsidePointerEventsDisabled.size>0,F=P>=G,I=wy(Z=>{const Q=Z.target,mt=[...p.branches].some(Nt=>Nt.contains(Q));!F||mt||(d?.(Z),x?.(Z),Z.defaultPrevented||S?.())},H),nt=jy(Z=>{const Q=Z.target;[...p.branches].some(Nt=>Nt.contains(Q))||(m?.(Z),x?.(Z),Z.defaultPrevented||S?.())},H);return yy(Z=>{P===p.layers.size-1&&(o?.(Z),!Z.defaultPrevented&&S&&(Z.preventDefault(),S()))},H),z.useEffect(()=>{if(v)return r&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(j0=H.body.style.pointerEvents,H.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(v)),p.layers.add(v),H0(),()=>{r&&p.layersWithOutsidePointerEventsDisabled.size===1&&(H.body.style.pointerEvents=j0)}},[v,H,r,p]),z.useEffect(()=>()=>{v&&(p.layers.delete(v),p.layersWithOutsidePointerEventsDisabled.delete(v),H0())},[v,p]),z.useEffect(()=>{const Z=()=>_({ });
return document.addEventListener($r,Z),()=>document.removeEventListener($r,Z)},[]),f.jsx(Yl.div,{...y,ref:O,style:{pointerEvents:J?F?"auto":"none":void 0,...s.style},onFocusCapture:ka(s.onFocusCapture,nt.onFocusCapture),onBlurCapture:ka(s.onBlurCapture,nt.onBlurCapture),onPointerDownCapture:ka(s.onPointerDownCapture,I.onPointerDownCapture)}) });
ig.displayName=vy;
var Ny="DismissableLayerBranch",Ey=z.forwardRef((s,c)=>{const r=z.useContext(sg),o=z.useRef(null),d=Gl(c,o);return z.useEffect(()=>{const m=o.current;if(m)return r.branches.add(m),()=>{r.branches.delete(m)}},[r.branches]),f.jsx(Yl.div,{...s,ref:d}) });
Ey.displayName=Ny;
function wy(s,c=globalThis?.document){const r=pc(s),o=z.useRef(!1),d=z.useRef(()=>{ });
return z.useEffect(()=>{const m=S=>{if(S.target&&!o.current){let y=function(){cg(by,r,p,{discrete:!0}) };

const p={originalEvent:S };
S.pointerType==="touch"?(c.removeEventListener("click",d.current),d.current=y,c.addEventListener("click",d.current,{once:!0})):y()}
else c.removeEventListener("click",d.current);o.current=!1},x=window.setTimeout(()=>{c.addEventListener("pointerdown",m)},0);return()=>{window.clearTimeout(x),c.removeEventListener("pointerdown",m),c.removeEventListener("click",d.current)}},[c,r]),{onPointerDownCapture:()=>o.current=!0}}
function jy(s,c=globalThis?.document){const r=pc(s),o=z.useRef(!1);return z.useEffect(()=>{const d=m=>{m.target&&!o.current&&cg(Sy,r,{originalEvent:m},{discrete:!1}) };
return c.addEventListener("focusin",d),()=>c.removeEventListener("focusin",d)},[c,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}
function H0(){const s=new CustomEvent($r);document.dispatchEvent(s)}
function cg(s,c,r,{discrete:o}){const d=r.originalEvent.target,m=new CustomEvent(s,{bubbles:!1,cancelable:!0,detail:r });
c&&d.addEventListener(s,c,{once:!0 }),
o?xy(d,m):d.dispatchEvent(m)}
var Ls=globalThis?.document?z.useLayoutEffect:()=>{ };

const Hy=["top","right","bottom","left"],ml=Math.min,Ue=Math.max,uc=Math.round,sc=Math.floor,da=s=>({x:s,y:s }),
Ay={left:"right",right:"left",bottom:"top",top:"bottom"},Ty={start:"end",end:"start" };

function Pr(s,c,r){return Ue(s,ml(c,r))}
function Ua(s,c){return typeof s=="function"?s(c):s}
function Ba(s){return s.split("-")[0]}
function Un(s){return s.split("-")[1]}
function ou(s){return s==="x"?"y":"x"}
function ru(s){return s==="y"?"height":"width"}
const zy=new Set(["top","bottom"]);
function fa(s){return zy.has(Ba(s))?"y":"x"}
function uu(s){return ou(fa(s))}
function Ry(s,c,r){r===void 0&&(r=!1);
const o=Un(s),d=uu(s),m=ru(d);
let x=d==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return c.reference[m]>c.floating[m]&&(x=fc(x)),[x,fc(x)]}
function _y(s){const c=fc(s);return[Ir(s),c,Ir(c)]}
function Ir(s){return s.replace(/start|end/g,c=>Ty[c])}
const A0=["left","right"],T0=["right","left"],Oy=["top","bottom"],My=["bottom","top"];
function Cy(s,c,r){switch(s){case"top":case"bottom":return r?c?T0:A0:c?A0:T0;case"left":case"right":return c?Oy:My;default:return[]}}
function Dy(s,c,r,o){const d=Un(s);
let m=Cy(Ba(s),r==="start",o);return d&&(m=m.map(x=>x+"-"+d),c&&(m=m.concat(m.map(Ir)))),m}
function fc(s){return s.replace(/left|right|bottom|top/g,c=>Ay[c])}
function ky(s){return{top:0,right:0,bottom:0,left:0,...s}}
function og(s){return typeof s!="number"?ky(s):{top:s,right:s,bottom:s,left:s}}
function dc(s){const{x:c,y:r,width:o,height:d}=s;return{width:o,height:d,top:r,left:c,right:c+o,bottom:r+d,x:c,y:r}}
function z0(s,c,r){let{reference:o,floating:d}=s;
const m=fa(c),x=uu(c),S=ru(x),y=Ba(c),p=m==="y",v=o.x+o.width/2-d.width/2,h=o.y+o.height/2-d.height/2,H=o[S]/2-d[S]/2;
let _;switch(y){case"top":_={x:v,y:o.y-d.height };
break;case"bottom":_={x:v,y:o.y+o.height };
break;case"right":_={x:o.x+o.width,y:h };
break;case"left":_={x:o.x-d.width,y:h };
break;default:_={x:o.x,y:o.y}}switch(Un(c)){case"start":_[x]-=H*(r&&p?-1:1);break;case"end":_[x]+=H*(r&&p?-1:1);break}
return _}
const Uy=async(s,c,r)=>{const{placement:o="bottom",strategy:d="absolute",middleware:m=[],platform:x}=r,S=m.filter(Boolean),y=await(x.isRTL==null?void 0:x.isRTL(c));
let p=await x.getElementRects({reference:s,floating:c,strategy:d }),
{x:v,y:h}=z0(p,o,y),H=o,_={},O=0;for(let V=0;V<S.length;V++){const{name:Y,fn:G}=S[V],{x:P,y:J,data:F,reset:I}=await G({x:v,y:h,initialPlacement:o,placement:H,strategy:d,middlewareData:_,rects:p,platform:x,elements:{reference:s,floating:c} });
v=P??v,h=J??h,_={..._,[Y]:{..._[Y],...F}},I&&O<=50&&(O++,typeof I=="object"&&(I.placement&&(H=I.placement),I.rects&&(p=I.rects===!0?await x.getElementRects({reference:s,floating:c,strategy:d }):I.rects),{x:v,y:h}=z0(p,H,y)),V=-1)}return{x:v,y:h,placement:H,strategy:d,middlewareData:_} };
async function Vs(s,c){var r;c===void 0&&(c={ });
const{x:o,y:d,platform:m,rects:x,elements:S,strategy:y}=s,{boundary:p="clippingAncestors",rootBoundary:v="viewport",elementContext:h="floating",altBoundary:H=!1,padding:_=0}=Ua(c,s),O=og(_),Y=S[H?h==="floating"?"reference":"floating":h],G=dc(await m.getClippingRect({element:(r=await(m.isElement==null?void 0:m.isElement(Y)))==null||r?Y:Y.contextElement||await(m.getDocumentElement==null?void 0:m.getDocumentElement(S.floating)),boundary:p,rootBoundary:v,strategy:y})),P=h==="floating"?{x:o,y:d,width:x.floating.width,height:x.floating.height }:x.reference,J=await(m.getOffsetParent==null?void 0:m.getOffsetParent(S.floating)),F=await(m.isElement==null?void 0:m.isElement(J))?await(m.getScale==null?void 0:m.getScale(J))||{x:1,y:1 }:{x:1,y:1},I=dc(m.convertOffsetParentRelativeRectToViewportRelativeRect?await m.convertOffsetParentRelativeRectToViewportRelativeRect({elements:S,rect:P,offsetParent:J,strategy:y }):P);return{top:(G.top-I.top+O.top)/F.y,bottom:(I.bottom-G.bottom+O.bottom)/F.y,left:(G.left-I.left+O.left)/F.x,right:(I.right-G.right+O.right)/F.x}}
const By=s=>({name:"arrow",options:s,async fn(c){const{x:r,y:o,placement:d,rects:m,platform:x,elements:S,middlewareData:y}=c,{element:p,padding:v=0}=Ua(s,c)||{ };
if(p==null)return{ };

const h=og(v),H={x:r,y:o},_=uu(d),O=ru(_),V=await x.getDimensions(p),Y=_==="y",G=Y?"top":"left",P=Y?"bottom":"right",J=Y?"clientHeight":"clientWidth",F=m.reference[O]+m.reference[_]-H[_]-m.floating[O],I=H[_]-m.reference[_],nt=await(x.getOffsetParent==null?void 0:x.getOffsetParent(p));
let Z=nt?nt[J]:0;(!Z||!await(x.isElement==null?void 0:x.isElement(nt)))&&(Z=S.floating[J]||m.floating[O]);
const Q=F/2-I/2,mt=Z/2-V[O]/2-1,Nt=ml(h[G],mt),zt=ml(h[P],mt),pt=Nt,ht=Z-V[O]-zt,vt=Z/2-V[O]/2+Q,St=Pr(pt,vt,ht),w=!y.arrow&&Un(d)!=null&&vt!==St&&m.reference[O]/2-(vt<pt?Nt:zt)-V[O]/2<0,B=w?vt<pt?vt-pt:vt-ht:0;return{[_]:H[_]+B,data:{[_]:St,centerOffset:vt-St-B,...w&&{alignmentOffset:B}},reset:w}} }),
Ly=function(s){return s===void 0&&(s={ }),
{name:"flip",options:s,async fn(c){var r,o;const{placement:d,middlewareData:m,rects:x,initialPlacement:S,platform:y,elements:p}=c,{mainAxis:v=!0,crossAxis:h=!0,fallbackPlacements:H,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:V=!0,...Y}=Ua(s,c);if((r=m.arrow)!=null&&r.alignmentOffset)return{ };

const G=Ba(d),P=fa(S),J=Ba(S)===S,F=await(y.isRTL==null?void 0:y.isRTL(p.floating)),I=H||(J||!V?[fc(S)]:_y(S)),nt=O!=="none";!H&&nt&&I.push(...Dy(S,V,O,F));
const Z=[S,...I],Q=await Vs(c,Y),mt=[];
let Nt=((o=m.flip)==null?void 0:o.overflows)||[];if(v&&mt.push(Q[G]),h){const vt=Ry(d,x,F);mt.push(Q[vt[0]],Q[vt[1]])}
if(Nt=[...Nt,{placement:d,overflows:mt}],
!mt.every(vt=>vt<=0)){var zt,pt;
const vt=(((zt=m.flip)==null?void 0:zt.index)||0)+1,St=Z[vt];if(St&&(!(h==="alignment"?P!==fa(St):!1)||Nt.every(M=>fa(M.placement)===P?M.overflows[0]>0:!0)))return{data:{index:vt,overflows:Nt},reset:{placement:St} };

let w=(pt=Nt.filter(B=>B.overflows[0]<=0).sort((B,M)=>B.overflows[1]-M.overflows[1])[0])==null?void 0:pt.placement;if(!w)switch(_){case"bestFit":{var ht;
const B=(ht=Nt.filter(M=>{if(nt){const st=fa(M.placement);return st===P||st==="y"}return!0}).map(M=>[M.placement,M.overflows.filter(st=>st>0).reduce((st,ot)=>st+ot,0)]).sort((M,st)=>M[1]-st[1])[0])==null?void 0:ht[0];B&&(w=B);break}case"initialPlacement":w=S;break}
if(d!==w)return{reset:{placement:w}}}return{}}} };

function R0(s,c){return{top:s.top-c.height,right:s.right-c.width,bottom:s.bottom-c.height,left:s.left-c.width}}
function _0(s){return Hy.some(c=>s[c]>=0)}
const Vy=function(s){return s===void 0&&(s={ }),
{name:"hide",options:s,async fn(c){const{rects:r}=c,{strategy:o="referenceHidden",...d}=Ua(s,c);switch(o){case"referenceHidden":{const m=await Vs(c,{...d,elementContext:"reference" }),
x=R0(m,r.reference);return{data:{referenceHiddenOffsets:x,referenceHidden:_0(x)}}}case"escaped":{const m=await Vs(c,{...d,altBoundary:!0 }),
x=R0(m,r.floating);return{data:{escapedOffsets:x,escaped:_0(x)}}}default:return{}}}}},rg=new Set(["left","top"]);async function qy(s,c){const{placement:r,platform:o,elements:d}=s,m=await(o.isRTL==null?void 0:o.isRTL(d.floating)),x=Ba(r),S=Un(r),y=fa(r)==="y",p=rg.has(x)?-1:1,v=m&&y?-1:1,h=Ua(c,s);let{mainAxis:H,crossAxis:_,alignmentAxis:O}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null }:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis };
return S&&typeof O=="number"&&(_=S==="end"?O*-1:O),y?{x:_*v,y:H*p }:{x:H*p,y:_*v}}
const Gy=function(s){return s===void 0&&(s=0),{name:"offset",options:s,async fn(c){var r,o;const{x:d,y:m,placement:x,middlewareData:S}=c,y=await qy(c,s);return x===((r=S.offset)==null?void 0:r.placement)&&(o=S.arrow)!=null&&o.alignmentOffset?{ }:{x:d+y.x,y:m+y.y,data:{...y,placement:x}}}}},Yy=function(s){return s===void 0&&(s={ }),
{name:"shift",options:s,async fn(c){const{x:r,y:o,placement:d}=c,{mainAxis:m=!0,crossAxis:x=!1,limiter:S={fn:Y=>{let{x:G,y:P}=Y;return{x:G,y:P}}},...y}=Ua(s,c),p={x:r,y:o},v=await Vs(c,y),h=fa(Ba(d)),H=ou(h);
let _=p[H],O=p[h];if(m){const Y=H==="y"?"top":"left",G=H==="y"?"bottom":"right",P=_+v[Y],J=_-v[G];_=Pr(P,_,J)}
if(x){const Y=h==="y"?"top":"left",G=h==="y"?"bottom":"right",P=O+v[Y],J=O-v[G];O=Pr(P,O,J)}
const V=S.fn({...c,[H]:_,[h]:O });
return{...V,data:{x:V.x-r,y:V.y-o,enabled:{[H]:m,[h]:x}}}}}},Xy=function(s){return s===void 0&&(s={ }),
{options:s,fn(c){const{x:r,y:o,placement:d,rects:m,middlewareData:x}=c,{offset:S=0,mainAxis:y=!0,crossAxis:p=!0}=Ua(s,c),v={x:r,y:o},h=fa(d),H=ou(h);
let _=v[H],O=v[h];
const V=Ua(S,c),Y=typeof V=="number"?{mainAxis:V,crossAxis:0 }:{mainAxis:0,crossAxis:0,...V };
if(y){const J=H==="y"?"height":"width",F=m.reference[H]-m.floating[J]+Y.mainAxis,I=m.reference[H]+m.reference[J]-Y.mainAxis;_<F?_=F:_>I&&(_=I)}
if(p){var G,P;
const J=H==="y"?"width":"height",F=rg.has(Ba(d)),I=m.reference[h]-m.floating[J]+(F&&((G=x.offset)==null?void 0:G[h])||0)+(F?0:Y.crossAxis),nt=m.reference[h]+m.reference[J]+(F?0:((P=x.offset)==null?void 0:P[h])||0)-(F?Y.crossAxis:0);O<I?O=I:O>nt&&(O=nt)}return{[H]:_,[h]:O}}}},Zy=function(s){return s===void 0&&(s={ }),
{name:"size",options:s,async fn(c){var r,o;const{placement:d,rects:m,platform:x,elements:S}=c,{apply:y=()=>{},...p}=Ua(s,c),v=await Vs(c,p),h=Ba(d),H=Un(d),_=fa(d)==="y",{width:O,height:V}=m.floating;
let Y,G;h==="top"||h==="bottom"?(Y=h,G=H===(await(x.isRTL==null?void 0:x.isRTL(S.floating))?"start":"end")?"left":"right"):(G=h,Y=H==="end"?"top":"bottom");
const P=V-v.top-v.bottom,J=O-v.left-v.right,F=ml(V-v[Y],P),I=ml(O-v[G],J),nt=!c.middlewareData.shift;
let Z=F,Q=I;if((r=c.middlewareData.shift)!=null&&r.enabled.x&&(Q=J),(o=c.middlewareData.shift)!=null&&o.enabled.y&&(Z=P),nt&&!H){const Nt=Ue(v.left,0),zt=Ue(v.right,0),pt=Ue(v.top,0),ht=Ue(v.bottom,0);_?Q=O-2*(Nt!==0||zt!==0?Nt+zt:Ue(v.left,v.right)):Z=V-2*(pt!==0||ht!==0?pt+ht:Ue(v.top,v.bottom))}await y({...c,availableWidth:Q,availableHeight:Z });

const mt=await x.getDimensions(S.floating);return O!==mt.width||V!==mt.height?{reset:{rects:!0} }:{}}} };

function hc(){return typeof window<"u"}
function Bn(s){return ug(s)?(s.nodeName||"").toLowerCase():"#document"}
function Be(s){var c;return(s==null||(c=s.ownerDocument)==null?void 0:c.defaultView)||window}
function ga(s){var c;return(c=(ug(s)?s.ownerDocument:s.document)||window.document)==null?void 0:c.documentElement}
function ug(s){return hc()?s instanceof Node||s instanceof Be(s).Node:!1}
function aa(s){return hc()?s instanceof Element||s instanceof Be(s).Element:!1}
function ma(s){return hc()?s instanceof HTMLElement||s instanceof Be(s).HTMLElement:!1}
function O0(s){return!hc()||typeof ShadowRoot>"u"?!1:s instanceof ShadowRoot||s instanceof Be(s).ShadowRoot}
const Qy=new Set(["inline","contents"]);
function Gs(s){const{overflow:c,overflowX:r,overflowY:o,display:d}=la(s);return/auto|scroll|overlay|hidden|clip/.test(c+o+r)&&!Qy.has(d)}
const Ky=new Set(["table","td","th"]);
function Jy(s){return Ky.has(Bn(s))}
const Wy=[":popover-open",":modal"];
function xc(s){return Wy.some(c=>{try{return s.matches(c)}
catch{return!1}})}
const Fy=["transform","translate","scale","rotate","perspective"],$y=["transform","translate","scale","rotate","perspective","filter"],Py=["paint","layout","strict","content"];
function fu(s){const c=du(),r=aa(s)?la(s):s;return Fy.some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!c&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!c&&(r.filter?r.filter!=="none":!1)||$y.some(o=>(r.willChange||"").includes(o))||Py.some(o=>(r.contain||"").includes(o))}
function Iy(s){let c=gl(s);for(;ma(c)&&!Dn(c);){if(fu(c))return c;if(xc(c))return null;c=gl(c)}
return null}
function du(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}
const t1=new Set(["html","body","#document"]);
function Dn(s){return t1.has(Bn(s))}
function la(s){return Be(s).getComputedStyle(s)}
function yc(s){return aa(s)?{scrollLeft:s.scrollLeft,scrollTop:s.scrollTop }:{scrollLeft:s.scrollX,scrollTop:s.scrollY}}
function gl(s){if(Bn(s)==="html")return s;
const c=s.assignedSlot||s.parentNode||O0(s)&&s.host||ga(s);return O0(c)?c.host:c}
function fg(s){const c=gl(s);return Dn(c)?s.ownerDocument?s.ownerDocument.body:s.body:ma(c)&&Gs(c)?c:fg(c)}
function qs(s,c,r){var o;c===void 0&&(c=[]),r===void 0&&(r=!0);
const d=fg(s),m=d===((o=s.ownerDocument)==null?void 0:o.body),x=Be(d);if(m){const S=tu(x);return c.concat(x,x.visualViewport||[],Gs(d)?d:[],S&&r?qs(S):[])}
return c.concat(d,qs(d,[],r))}
function tu(s){return s.parent&&Object.getPrototypeOf(s.parent)?s.frameElement:null}
function dg(s){const c=la(s);
let r=parseFloat(c.width)||0,o=parseFloat(c.height)||0;
const d=ma(s),m=d?s.offsetWidth:r,x=d?s.offsetHeight:o,S=uc(r)!==m||uc(o)!==x;return S&&(r=m,o=x),{width:r,height:o,$:S}}
function mu(s){return aa(s)?s:s.contextElement}
function Cn(s){const c=mu(s);if(!ma(c))return da(1);
const r=c.getBoundingClientRect(),{width:o,height:d,$:m}=dg(c);
let x=(m?uc(r.width):r.width)/o,S=(m?uc(r.height):r.height)/d;return(!x||!Number.isFinite(x))&&(x=1),(!S||!Number.isFinite(S))&&(S=1),{x,y:S}}
const e1=da(0);
function mg(s){const c=Be(s);return!du()||!c.visualViewport?e1:{x:c.visualViewport.offsetLeft,y:c.visualViewport.offsetTop}}
function a1(s,c,r){return c===void 0&&(c=!1),!r||c&&r!==Be(s)?!1:c}
function Vl(s,c,r,o){c===void 0&&(c=!1),r===void 0&&(r=!1);
const d=s.getBoundingClientRect(),m=mu(s);
let x=da(1);c&&(o?aa(o)&&(x=Cn(o)):x=Cn(s));
const S=a1(m,r,o)?mg(m):da(0);
let y=(d.left+S.x)/x.x,p=(d.top+S.y)/x.y,v=d.width/x.x,h=d.height/x.y;if(m){const H=Be(m),_=o&&aa(o)?Be(o):o;
let O=H,V=tu(O);for(;V&&o&&_!==O;){const Y=Cn(V),G=V.getBoundingClientRect(),P=la(V),J=G.left+(V.clientLeft+parseFloat(P.paddingLeft))*Y.x,F=G.top+(V.clientTop+parseFloat(P.paddingTop))*Y.y;y*=Y.x,p*=Y.y,v*=Y.x,h*=Y.y,y+=J,p+=F,O=Be(V),V=tu(O)}}
return dc({width:v,height:h,x:y,y:p})}
function vc(s,c){const r=yc(s).scrollLeft;return c?c.left+r:Vl(ga(s)).left+r}
function gg(s,c){const r=s.getBoundingClientRect(),o=r.left+c.scrollLeft-vc(s,r),d=r.top+c.scrollTop;return{x:o,y:d}}
function l1(s){let{elements:c,rect:r,offsetParent:o,strategy:d}=s;
const m=d==="fixed",x=ga(o),S=c?xc(c.floating):!1;if(o===x||S&&m)return r;
let y={scrollLeft:0,scrollTop:0},p=da(1);
const v=da(0),h=ma(o);if((h||!h&&!m)&&((Bn(o)!=="body"||Gs(x))&&(y=yc(o)),ma(o))){const _=Vl(o);p=Cn(o),v.x=_.x+o.clientLeft,v.y=_.y+o.clientTop}
const H=x&&!h&&!m?gg(x,y):da(0);return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-y.scrollLeft*p.x+v.x+H.x,y:r.y*p.y-y.scrollTop*p.y+v.y+H.y}}
function n1(s){return Array.from(s.getClientRects())}
function s1(s){const c=ga(s),r=yc(s),o=s.ownerDocument.body,d=Ue(c.scrollWidth,c.clientWidth,o.scrollWidth,o.clientWidth),m=Ue(c.scrollHeight,c.clientHeight,o.scrollHeight,o.clientHeight);
let x=-r.scrollLeft+vc(s);
const S=-r.scrollTop;return la(o).direction==="rtl"&&(x+=Ue(c.clientWidth,o.clientWidth)-d),{width:d,height:m,x,y:S}}
const M0=25;
function i1(s,c){const r=Be(s),o=ga(s),d=r.visualViewport;
let m=o.clientWidth,x=o.clientHeight,S=0,y=0;if(d){m=d.width,x=d.height;
const v=du();(!v||v&&c==="fixed")&&(S=d.offsetLeft,y=d.offsetTop)}
const p=vc(o);if(p<=0){const v=o.ownerDocument,h=v.body,H=getComputedStyle(h),_=v.compatMode==="CSS1Compat"&&parseFloat(H.marginLeft)+parseFloat(H.marginRight)||0,O=Math.abs(o.clientWidth-h.clientWidth-_);O<=M0&&(m-=O)}
else p<=M0&&(m+=p);return{width:m,height:x,x:S,y}}
const c1=new Set(["absolute","fixed"]);
function o1(s,c){const r=Vl(s,!0,c==="fixed"),o=r.top+s.clientTop,d=r.left+s.clientLeft,m=ma(s)?Cn(s):da(1),x=s.clientWidth*m.x,S=s.clientHeight*m.y,y=d*m.x,p=o*m.y;return{width:x,height:S,x:y,y:p}}
function C0(s,c,r){let o;if(c==="viewport")o=i1(s,r);else if(c==="document")o=s1(ga(s));else if(aa(c))o=o1(c,r);else{const d=mg(s);o={x:c.x-d.x,y:c.y-d.y,width:c.width,height:c.height}}
return dc(o)}
function pg(s,c){const r=gl(s);return r===c||!aa(r)||Dn(r)?!1:la(r).position==="fixed"||pg(r,c)}
function r1(s,c){const r=c.get(s);if(r)return r;
let o=qs(s,[],!1).filter(S=>aa(S)&&Bn(S)!=="body"),d=null;
const m=la(s).position==="fixed";
let x=m?gl(s):s;for(;aa(x)&&!Dn(x);){const S=la(x),y=fu(x);!y&&S.position==="fixed"&&(d=null),(m?!y&&!d:!y&&S.position==="static"&&!!d&&c1.has(d.position)||Gs(x)&&!y&&pg(s,x))?o=o.filter(v=>v!==x):d=S,x=gl(x)}
return c.set(s,o),o}
function u1(s){let{element:c,boundary:r,rootBoundary:o,strategy:d}=s;
const x=[...r==="clippingAncestors"?xc(c)?[]:r1(c,this._c):[].concat(r),o],S=x[0],y=x.reduce((p,v)=>{const h=C0(c,v,d);return p.top=Ue(h.top,p.top),p.right=ml(h.right,p.right),p.bottom=ml(h.bottom,p.bottom),p.left=Ue(h.left,p.left),p},C0(c,S,d));return{width:y.right-y.left,height:y.bottom-y.top,x:y.left,y:y.top}}
function f1(s){const{width:c,height:r}=dg(s);return{width:c,height:r}}
function d1(s,c,r){const o=ma(c),d=ga(c),m=r==="fixed",x=Vl(s,!0,m,c);
let S={scrollLeft:0,scrollTop:0 };

const y=da(0);
function p(){y.x=vc(d)}
if(o||!o&&!m)if((Bn(c)!=="body"||Gs(d))&&(S=yc(c)),o){const _=Vl(c,!0,m,c);y.x=_.x+c.clientLeft,y.y=_.y+c.clientTop}
else d&&p();m&&!o&&d&&p();
const v=d&&!o&&!m?gg(d,S):da(0),h=x.left+S.scrollLeft-y.x-v.x,H=x.top+S.scrollTop-y.y-v.y;return{x:h,y:H,width:x.width,height:x.height}}
function Yr(s){return la(s).position==="static"}
function D0(s,c){if(!ma(s)||la(s).position==="fixed")return null;if(c)return c(s);
let r=s.offsetParent;return ga(s)===r&&(r=r.ownerDocument.body),r}
function hg(s,c){const r=Be(s);if(xc(s))return r;if(!ma(s)){let d=gl(s);for(;d&&!Dn(d);){if(aa(d)&&!Yr(d))return d;d=gl(d)}
return r}
let o=D0(s,c);for(;o&&Jy(o)&&Yr(o);)o=D0(o,c);return o&&Dn(o)&&Yr(o)&&!fu(o)?r:o||Iy(s)||r}
const m1=async function(s){const c=this.getOffsetParent||hg,r=this.getDimensions,o=await r(s.floating);return{reference:d1(s.reference,await c(s.floating),s.strategy),floating:{x:0,y:0,width:o.width,height:o.height}} };

function g1(s){return la(s).direction==="rtl"}
const p1={convertOffsetParentRelativeRectToViewportRelativeRect:l1,getDocumentElement:ga,getClippingRect:u1,getOffsetParent:hg,getElementRects:m1,getClientRects:n1,getDimensions:f1,getScale:Cn,isElement:aa,isRTL:g1 };

function xg(s,c){return s.x===c.x&&s.y===c.y&&s.width===c.width&&s.height===c.height}
function h1(s,c){let r=null,o;
const d=ga(s);
function m(){var S;clearTimeout(o),(S=r)==null||S.disconnect(),r=null}
function x(S,y){S===void 0&&(S=!1),y===void 0&&(y=1),m();
const p=s.getBoundingClientRect(),{left:v,top:h,width:H,height:_}=p;if(S||c(),!H||!_)return;
const O=sc(h),V=sc(d.clientWidth-(v+H)),Y=sc(d.clientHeight-(h+_)),G=sc(v),J={rootMargin:-O+"px "+-V+"px "+-Y+"px "+-G+"px",threshold:Ue(0,ml(1,y))||1 };

let F=!0;
function I(nt){const Z=nt[0].intersectionRatio;if(Z!==y){if(!F)return x();Z?x(!1,Z):o=setTimeout(()=>{x(!1,1e-7)},1e3)}Z===1&&!xg(p,s.getBoundingClientRect())&&x(),F=!1}try{r=new IntersectionObserver(I,{...J,root:d.ownerDocument})}
catch{r=new IntersectionObserver(I,J)}r.observe(s)}
return x(!0),m}
function x1(s,c,r,o){o===void 0&&(o={ });
const{ancestorScroll:d=!0,ancestorResize:m=!0,elementResize:x=typeof ResizeObserver=="function",layoutShift:S=typeof IntersectionObserver=="function",animationFrame:y=!1}=o,p=mu(s),v=d||m?[...p?qs(p):[],...qs(c)]:[];v.forEach(G=>{d&&G.addEventListener("scroll",r,{passive:!0 }),
m&&G.addEventListener("resize",r) });

const h=p&&S?h1(p,r):null;
let H=-1,_=null;x&&(_=new ResizeObserver(G=>{let[P]=G;P&&P.target===p&&_&&(_.unobserve(c),cancelAnimationFrame(H),H=requestAnimationFrame(()=>{var J;(J=_)==null||J.observe(c)})),r() }),
p&&!y&&_.observe(p),_.observe(c));
let O,V=y?Vl(s):null;y&&Y();
function Y(){const G=Vl(s);V&&!xg(V,G)&&r(),V=G,O=requestAnimationFrame(Y)}
return r(),()=>{var G;v.forEach(P=>{d&&P.removeEventListener("scroll",r),m&&P.removeEventListener("resize",r) }),
h?.(),(G=_)==null||G.disconnect(),_=null,y&&cancelAnimationFrame(O)}}
const y1=Gy,v1=Yy,b1=Ly,S1=Zy,N1=Vy,k0=By,E1=Xy,w1=(s,c,r)=>{const o=new Map,d={platform:p1,...r},m={...d.platform,_c:o };
return Uy(s,c,{...d,platform:m}) };

var j1=typeof document<"u",H1=function(){},rc=j1?z.useLayoutEffect:H1;
function mc(s,c){if(s===c)return!0;if(typeof s!=typeof c)return!1;if(typeof s=="function"&&s.toString()===c.toString())return!0;
let r,o,d;if(s&&c&&typeof s=="object"){if(Array.isArray(s)){if(r=s.length,r!==c.length)return!1;for(o=r;o--!==0;)if(!mc(s[o],c[o]))return!1;return!0}
if(d=Object.keys(s),r=d.length,r!==Object.keys(c).length)return!1;for(o=r;o--!==0;)if(!{}.hasOwnProperty.call(c,d[o]))return!1;for(o=r;o--!==0;){const m=d[o];if(!(m==="_owner"&&s.$$typeof)&&!mc(s[m],c[m]))return!1}return!0}
return s!==s&&c!==c}
function yg(s){return typeof window>"u"?1:(s.ownerDocument.defaultView||window).devicePixelRatio||1}
function U0(s,c){const r=yg(s);return Math.round(c*r)/r}
function Xr(s){const c=z.useRef(s);return rc(()=>{c.current=s }),
c}
function A1(s){s===void 0&&(s={ });
const{placement:c="bottom",strategy:r="absolute",middleware:o=[],platform:d,elements:{reference:m,floating:x}={},transform:S=!0,whileElementsMounted:y,open:p}=s,[v,h]=z.useState({x:0,y:0,strategy:r,placement:c,middlewareData:{},isPositioned:!1 }),
[H,_]=z.useState(o);mc(H,o)||_(o);const[O,V]=z.useState(null),[Y,G]=z.useState(null),P=z.useCallback(M=>{M!==nt.current&&(nt.current=M,V(M))},[]),J=z.useCallback(M=>{M!==Z.current&&(Z.current=M,G(M))},[]),F=m||O,I=x||Y,nt=z.useRef(null),Z=z.useRef(null),Q=z.useRef(v),mt=y!=null,Nt=Xr(y),zt=Xr(d),pt=Xr(p),ht=z.useCallback(()=>{if(!nt.current||!Z.current)return;
const M={placement:c,strategy:r,middleware:H };
zt.current&&(M.platform=zt.current),w1(nt.current,Z.current,M).then(st=>{const ot={...st,isPositioned:pt.current!==!1 };
vt.current&&!mc(Q.current,ot)&&(Q.current=ot,cu.flushSync(()=>{h(ot)}))})},[H,c,r,zt,pt]);rc(()=>{p===!1&&Q.current.isPositioned&&(Q.current.isPositioned=!1,h(M=>({...M,isPositioned:!1})))},[p]);
const vt=z.useRef(!1);rc(()=>(vt.current=!0,()=>{vt.current=!1 }),
[]),rc(()=>{if(F&&(nt.current=F),I&&(Z.current=I),F&&I){if(Nt.current)return Nt.current(F,I,ht);ht()}},[F,I,ht,Nt,mt]);
const St=z.useMemo(()=>({reference:nt,floating:Z,setReference:P,setFloating:J }),
[P,J]),w=z.useMemo(()=>({reference:F,floating:I }),
[F,I]),B=z.useMemo(()=>{const M={position:r,left:0,top:0 };
if(!w.floating)return M;
const st=U0(w.floating,v.x),ot=U0(w.floating,v.y);return S?{...M,transform:"translate("+st+"px, "+ot+"px)",...yg(w.floating)>=1.5&&{willChange:"transform"} }:{position:r,left:st,top:ot}},[r,S,w.floating,v.x,v.y]);return z.useMemo(()=>({...v,update:ht,refs:St,elements:w,floatingStyles:B }),
[v,ht,St,w,B])}
const T1=s=>{function c(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:s,fn(r){const{element:o,padding:d}=typeof s=="function"?s(r):s;return o&&c(o)?o.current!=null?k0({element:o.current,padding:d}).fn(r):{ }:o?k0({element:o,padding:d}).fn(r):{}}}},z1=(s,c)=>({...y1(s),options:[s,c] }),
R1=(s,c)=>({...v1(s),options:[s,c] }),
_1=(s,c)=>({...E1(s),options:[s,c] }),
O1=(s,c)=>({...b1(s),options:[s,c] }),
M1=(s,c)=>({...S1(s),options:[s,c] }),
C1=(s,c)=>({...N1(s),options:[s,c] }),
D1=(s,c)=>({...T1(s),options:[s,c] });

var k1="Arrow",vg=z.forwardRef((s,c)=>{const{children:r,width:o=10,height:d=5,...m}=s;return f.jsx(Yl.svg,{...m,ref:c,width:o,height:d,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:s.asChild?r:f.jsx("polygon",{points:"0,0 30,0 15,10"})}) });
vg.displayName=k1;
var U1=vg;
function B1(s){const[c,r]=z.useState(void 0);return Ls(()=>{if(s){r({width:s.offsetWidth,height:s.offsetHeight });

const o=new ResizeObserver(d=>{if(!Array.isArray(d)||!d.length)return;
const m=d[0];
let x,S;if("borderBoxSize"in m){const y=m.borderBoxSize,p=Array.isArray(y)?y[0]:y;x=p.inlineSize,S=p.blockSize}
else x=s.offsetWidth,S=s.offsetHeight;r({width:x,height:S}) });
return o.observe(s,{box:"border-box" }),
()=>o.unobserve(s)}
else r(void 0)},[s]),c}
var bg="Popper",[Sg,Ng]=ag(bg),[d2,Eg]=Sg(bg),wg="PopperAnchor",jg=z.forwardRef((s,c)=>{const{__scopePopper:r,virtualRef:o,...d}=s,m=Eg(wg,r),x=z.useRef(null),S=Gl(c,x),y=z.useRef(null);return z.useEffect(()=>{const p=y.current;y.current=o?.current||x.current,p!==y.current&&m.onAnchorChange(y.current) }),
o?null:f.jsx(Yl.div,{...d,ref:S}) });
jg.displayName=wg;
var gu="PopperContent",[L1,V1]=Sg(gu),Hg=z.forwardRef((s,c)=>{const{__scopePopper:r,side:o="bottom",sideOffset:d=0,align:m="center",alignOffset:x=0,arrowPadding:S=0,avoidCollisions:y=!0,collisionBoundary:p=[],collisionPadding:v=0,sticky:h="partial",hideWhenDetached:H=!1,updatePositionStrategy:_="optimized",onPlaced:O,...V}=s,Y=Eg(gu,r),[G,P]=z.useState(null),J=Gl(c,at=>P(at)),[F,I]=z.useState(null),nt=B1(F),Z=nt?.width??0,Q=nt?.height??0,mt=o+(m!=="center"?"-"+m:""),Nt=typeof v=="number"?v:{top:0,right:0,bottom:0,left:0,...v},zt=Array.isArray(p)?p:[p],pt=zt.length>0,ht={padding:Nt,boundary:zt.filter(G1),altBoundary:pt},{refs:vt,floatingStyles:St,placement:w,isPositioned:B,middlewareData:M}=A1({strategy:"fixed",placement:mt,whileElementsMounted:(...at)=>x1(...at,{animationFrame:_==="always" }),
elements:{reference:Y.anchor},middleware:[z1({mainAxis:d+Q,alignmentAxis:x }),
y&&R1({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?_1():void 0,...ht }),
y&&O1({...ht }),
M1({...ht,apply:({elements:at,rects:ut,availableWidth:At,availableHeight:le})=>{const{width:me,height:ne}=ut.reference,pa=at.floating.style;pa.setProperty("--radix-popper-available-width",`${At}px`),pa.setProperty("--radix-popper-available-height",`${le}px`),pa.setProperty("--radix-popper-anchor-width",`${me}px`),pa.setProperty("--radix-popper-anchor-height",`${ne}px`)} }),
F&&D1({element:F,padding:S }),
Y1({arrowWidth:Z,arrowHeight:Q }),
H&&C1({strategy:"referenceHidden",...ht})] }),
[st,ot]=zg(w),N=pc(O);Ls(()=>{B&&N?.()},[B,N]);
const U=M.arrow?.x,k=M.arrow?.y,X=M.arrow?.centerOffset!==0,[W,it]=z.useState();return Ls(()=>{G&&it(window.getComputedStyle(G).zIndex)},[G]),f.jsx("div",{ref:vt.setFloating,"data-radix-popper-content-wrapper":"",style:{...St,transform:B?St.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:W,"--radix-popper-transform-origin":[M.transformOrigin?.x,M.transformOrigin?.y].join(" "),...M.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:s.dir,children:f.jsx(L1,{scope:r,placedSide:st,onArrowChange:I,arrowX:U,arrowY:k,shouldHideArrow:X,children:f.jsx(Yl.div,{"data-side":st,"data-align":ot,...V,ref:J,style:{...V.style,animation:B?void 0:"none"}})})}) });
Hg.displayName=gu;
var Ag="PopperArrow",q1={top:"bottom",right:"left",bottom:"top",left:"right"},Tg=z.forwardRef(function(c,r){const{__scopePopper:o,...d}=c,m=V1(Ag,o),x=q1[m.placedSide];return f.jsx("span",{ref:m.onArrowChange,style:{position:"absolute",left:m.arrowX,top:m.arrowY,[x]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[m.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[m.placedSide],visibility:m.shouldHideArrow?"hidden":void 0},children:f.jsx(U1,{...d,ref:r,style:{...d.style,display:"block"}})}) });
Tg.displayName=Ag;
function G1(s){return s!==null}
var Y1=s=>({name:"transformOrigin",options:s,fn(c){const{placement:r,rects:o,middlewareData:d}=c,x=d.arrow?.centerOffset!==0,S=x?0:s.arrowWidth,y=x?0:s.arrowHeight,[p,v]=zg(r),h={start:"0%",center:"50%",end:"100%"}[v],H=(d.arrow?.x??0)+S/2,_=(d.arrow?.y??0)+y/2;
let O="",V="";return p==="bottom"?(O=x?h:`${H}px`,V=`${-y}px`):p==="top"?(O=x?h:`${H}px`,V=`${o.floating.height+y}px`):p==="right"?(O=`${-y}px`,V=x?h:`${_}px`):p==="left"&&(O=`${o.floating.width+y}px`,V=x?h:`${_}px`),{data:{x:O,y:V}}} });

function zg(s){const[c,r="center"]=s.split("-");return[c,r]}
var X1=jg,Z1=Hg,Q1=Tg;
function K1(s,c){return z.useReducer((r,o)=>c[r][o]??r,s)}
var Rg=s=>{const{present:c,children:r}=s,o=J1(c),d=typeof r=="function"?r({present:o.isPresent }):z.Children.only(r),m=Gl(o.ref,W1(d));return typeof r=="function"||o.isPresent?z.cloneElement(d,{ref:m }):null };
Rg.displayName="Presence";
function J1(s){const[c,r]=z.useState(),o=z.useRef(null),d=z.useRef(s),m=z.useRef("none"),x=s?"mounted":"unmounted",[S,y]=K1(x,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"} });
return z.useEffect(()=>{const p=ic(o.current);m.current=S==="mounted"?p:"none"},[S]),Ls(()=>{const p=o.current,v=d.current;if(v!==s){const H=m.current,_=ic(p);s?y("MOUNT"):_==="none"||p?.display==="none"?y("UNMOUNT"):y(v&&H!==_?"ANIMATION_OUT":"UNMOUNT"),d.current=s}},[s,y]),Ls(()=>{if(c){let p;
const v=c.ownerDocument.defaultView??window,h=_=>{const V=ic(o.current).includes(CSS.escape(_.animationName));if(_.target===c&&V&&(y("ANIMATION_END"),!d.current)){const Y=c.style.animationFillMode;c.style.animationFillMode="forwards",p=v.setTimeout(()=>{c.style.animationFillMode==="forwards"&&(c.style.animationFillMode=Y)})}},H=_=>{_.target===c&&(m.current=ic(o.current)) };
return c.addEventListener("animationstart",H),c.addEventListener("animationcancel",h),c.addEventListener("animationend",h),()=>{v.clearTimeout(p),c.removeEventListener("animationstart",H),c.removeEventListener("animationcancel",h),c.removeEventListener("animationend",h)}}
else y("ANIMATION_END")},[c,y]),{isPresent:["mounted","unmountSuspended"].includes(S),ref:z.useCallback(p=>{o.current=p?getComputedStyle(p):null,r(p)},[])}}
function ic(s){return s?.animationName||"none"}
function W1(s){let c=Object.getOwnPropertyDescriptor(s.props,"ref")?.get,r=c&&"isReactWarning"in c&&c.isReactWarning;return r?s.ref:(c=Object.getOwnPropertyDescriptor(s,"ref")?.get,r=c&&"isReactWarning"in c&&c.isReactWarning,r?s.props.ref:s.props.ref||s.ref)}
var F1=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal" }),
$1="VisuallyHidden",_g=z.forwardRef((s,c)=>f.jsx(Yl.span,{...s,ref:c,style:{...F1,...s.style}}));_g.displayName=$1;
var P1=_g,[bc]=ag("Tooltip",[Ng]),pu=Ng(),Og="TooltipProvider",I1=700,B0="tooltip.open",[tv,Mg]=bc(Og),Cg=s=>{const{__scopeTooltip:c,delayDuration:r=I1,skipDelayDuration:o=300,disableHoverableContent:d=!1,children:m}=s,x=z.useRef(!0),S=z.useRef(!1),y=z.useRef(0);return z.useEffect(()=>{const p=y.current;return()=>window.clearTimeout(p)},[]),f.jsx(tv,{scope:c,isOpenDelayedRef:x,delayDuration:r,onOpen:z.useCallback(()=>{window.clearTimeout(y.current),x.current=!1},[]),onClose:z.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>x.current=!0,o)},[o]),isPointerInTransitRef:S,onPointerInTransitChange:z.useCallback(p=>{S.current=p},[]),disableHoverableContent:d,children:m}) };
Cg.displayName=Og;
var Dg="Tooltip",[m2,Sc]=bc(Dg),eu="TooltipTrigger",ev=z.forwardRef((s,c)=>{const{__scopeTooltip:r,...o}=s,d=Sc(eu,r),m=Mg(eu,r),x=pu(r),S=z.useRef(null),y=Gl(c,S,d.onTriggerChange),p=z.useRef(!1),v=z.useRef(!1),h=z.useCallback(()=>p.current=!1,[]);return z.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),f.jsx(X1,{asChild:!0,...x,children:f.jsx(Yl.button,{"aria-describedby":d.open?d.contentId:void 0,"data-state":d.stateAttribute,...o,ref:y,onPointerMove:ka(s.onPointerMove,H=>{H.pointerType!=="touch"&&!v.current&&!m.isPointerInTransitRef.current&&(d.onTriggerEnter(),v.current=!0) }),
onPointerLeave:ka(s.onPointerLeave,()=>{d.onTriggerLeave(),v.current=!1 }),
onPointerDown:ka(s.onPointerDown,()=>{d.open&&d.onClose(),p.current=!0,document.addEventListener("pointerup",h,{once:!0}) }),
onFocus:ka(s.onFocus,()=>{p.current||d.onOpen() }),
onBlur:ka(s.onBlur,d.onClose),onClick:ka(s.onClick,d.onClose)})}) });
ev.displayName=eu;
var av="TooltipPortal",[g2,lv]=bc(av,{forceMount:void 0 }),
kn="TooltipContent",nv=z.forwardRef((s,c)=>{const r=lv(kn,s.__scopeTooltip),{forceMount:o=r.forceMount,side:d="top",...m}=s,x=Sc(kn,s.__scopeTooltip);return f.jsx(Rg,{present:o||x.open,children:x.disableHoverableContent?f.jsx(kg,{side:d,...m,ref:c }):f.jsx(sv,{side:d,...m,ref:c})}) }),
sv=z.forwardRef((s,c)=>{const r=Sc(kn,s.__scopeTooltip),o=Mg(kn,s.__scopeTooltip),d=z.useRef(null),m=Gl(c,d),[x,S]=z.useState(null),{trigger:y,onClose:p}=r,v=d.current,{onPointerInTransitChange:h}=o,H=z.useCallback(()=>{S(null),h(!1)},[h]),_=z.useCallback((O,V)=>{const Y=O.currentTarget,G={x:O.clientX,y:O.clientY},P=uv(G,Y.getBoundingClientRect()),J=fv(G,P),F=dv(V.getBoundingClientRect()),I=gv([...J,...F]);S(I),h(!0)},[h]);return z.useEffect(()=>()=>H(),[H]),z.useEffect(()=>{if(y&&v){const O=Y=>_(Y,v),V=Y=>_(Y,y);return y.addEventListener("pointerleave",O),v.addEventListener("pointerleave",V),()=>{y.removeEventListener("pointerleave",O),v.removeEventListener("pointerleave",V)}}},[y,v,_,H]),z.useEffect(()=>{if(x){const O=V=>{const Y=V.target,G={x:V.clientX,y:V.clientY},P=y?.contains(Y)||v?.contains(Y),J=!mv(G,x);P?H():J&&(H(),p()) };
return document.addEventListener("pointermove",O),()=>document.removeEventListener("pointermove",O)}},[y,v,x,p,H]),f.jsx(kg,{...s,ref:m}) }),
[iv,cv]=bc(Dg,{isInside:!1 }),
ov=dy("TooltipContent"),kg=z.forwardRef((s,c)=>{const{__scopeTooltip:r,children:o,"aria-label":d,onEscapeKeyDown:m,onPointerDownOutside:x,...S}=s,y=Sc(kn,r),p=pu(r),{onClose:v}=y;return z.useEffect(()=>(document.addEventListener(B0,v),()=>document.removeEventListener(B0,v)),[v]),z.useEffect(()=>{if(y.trigger){const h=H=>{H.target?.contains(y.trigger)&&v() };
return window.addEventListener("scroll",h,{capture:!0 }),
()=>window.removeEventListener("scroll",h,{capture:!0})}},[y.trigger,v]),f.jsx(ig,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:m,onPointerDownOutside:x,onFocusOutside:h=>h.preventDefault(),onDismiss:v,children:f.jsxs(Z1,{"data-state":y.stateAttribute,...p,...S,ref:c,style:{...S.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[f.jsx(ov,{children:o }),
f.jsx(iv,{scope:r,isInside:!0,children:f.jsx(P1,{id:y.contentId,role:"tooltip",children:d||o})})]})}) });
nv.displayName=kn;
var Ug="TooltipArrow",rv=z.forwardRef((s,c)=>{const{__scopeTooltip:r,...o}=s,d=pu(r);return cv(Ug,r).isInside?null:f.jsx(Q1,{...d,...o,ref:c}) });
rv.displayName=Ug;
function uv(s,c){const r=Math.abs(c.top-s.y),o=Math.abs(c.bottom-s.y),d=Math.abs(c.right-s.x),m=Math.abs(c.left-s.x);switch(Math.min(r,o,d,m)){case m:return"left";case d:return"right";case r:return"top";case o:return"bottom";default:throw new Error("unreachable")}}
function fv(s,c,r=5){const o=[];switch(c){case"top":o.push({x:s.x-r,y:s.y+r},{x:s.x+r,y:s.y+r });
break;case"bottom":o.push({x:s.x-r,y:s.y-r},{x:s.x+r,y:s.y-r });
break;case"left":o.push({x:s.x+r,y:s.y-r},{x:s.x+r,y:s.y+r });
break;case"right":o.push({x:s.x-r,y:s.y-r},{x:s.x-r,y:s.y+r });
break}
return o}
function dv(s){const{top:c,right:r,bottom:o,left:d}=s;return[{x:d,y:c},{x:r,y:c},{x:r,y:o},{x:d,y:o}]}
function mv(s,c){const{x:r,y:o}=s;
let d=!1;for(let m=0,x=c.length-1;m<c.length;x=m++){const S=c[m],y=c[x],p=S.x,v=S.y,h=y.x,H=y.y;v>o!=H>o&&r<(h-p)*(o-v)/(H-v)+p&&(d=!d)}
return d}
function gv(s){const c=s.slice();return c.sort((r,o)=>r.x<o.x?-1:r.x>o.x?1:r.y<o.y?-1:r.y>o.y?1:0),pv(c)}
function pv(s){if(s.length<=1)return s.slice();
const c=[];for(let o=0;o<s.length;o++){const d=s[o];for(;c.length>=2;){const m=c[c.length-1],x=c[c.length-2];if((m.x-x.x)*(d.y-x.y)>=(m.y-x.y)*(d.x-x.x))c.pop();else break}c.push(d)}c.pop();
const r=[];for(let o=s.length-1;o>=0;o--){const d=s[o];for(;r.length>=2;){const m=r[r.length-1],x=r[r.length-2];if((m.x-x.x)*(d.y-x.y)>=(m.y-x.y)*(d.x-x.x))r.pop();else break}r.push(d)}
return r.pop(),c.length===1&&r.length===1&&c[0].x===r[0].x&&c[0].y===r[0].y?c:c.concat(r)}
var hv=Cg;
function Bg(s){var c,r,o="";if(typeof s=="string"||typeof s=="number")o+=s;else if(typeof s=="object")if(Array.isArray(s)){var d=s.length;for(c=0;c<d;c++)s[c]&&(r=Bg(s[c]))&&(o&&(o+=" "),o+=r)}
else for(r in s)s[r]&&(o&&(o+=" "),o+=r);return o}
function Lg(){for(var s,c,r=0,o="",d=arguments.length;r<d;r++)(s=arguments[r])&&(c=Bg(s))&&(o&&(o+=" "),o+=c);return o}
const hu="-",xv=s=>{const c=vv(s),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=s;return{getClassGroupId:x=>{const S=x.split(hu);return S[0]===""&&S.length!==1&&S.shift(),Vg(S,c)||yv(x)},getConflictingClassGroupIds:(x,S)=>{const y=r[x]||[];return S&&o[x]?[...y,...o[x]]:y}}},Vg=(s,c)=>{if(s.length===0)return c.classGroupId;
const r=s[0],o=c.nextPart.get(r),d=o?Vg(s.slice(1),o):void 0;if(d)return d;if(c.validators.length===0)return;
const m=s.join(hu);return c.validators.find(({validator:x})=>x(m))?.classGroupId},L0=/^\[(.+)\]$/,yv=s=>{if(L0.test(s)){const c=L0.exec(s)[1],r=c?.substring(0,c.indexOf(":"));if(r)return"arbitrary.."+r}},vv=s=>{const{theme:c,classGroups:r}=s,o={nextPart:new Map,validators:[] };
for(const d in r)au(r[d],o,d,c);return o},au=(s,c,r,o)=>{s.forEach(d=>{if(typeof d=="string"){const m=d===""?c:V0(c,d);m.classGroupId=r;return}
if(typeof d=="function"){if(bv(d)){au(d(o),c,r,o);return}c.validators.push({validator:d,classGroupId:r });
return}Object.entries(d).forEach(([m,x])=>{au(x,V0(c,m),r,o)})})},V0=(s,c)=>{let r=s;return c.split(hu).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[] }),
r=r.nextPart.get(o) }),
r},bv=s=>s.isThemeGetter,Sv=s=>{if(s<1)return{get:()=>{},set:()=>{} };

let c=0,r=new Map,o=new Map;
const d=(m,x)=>{r.set(m,x),c++,c>s&&(c=0,o=r,r=new Map) };
return{get(m){let x=r.get(m);if(x!==void 0)return x;if((x=o.get(m))!==void 0)return d(m,x),x},set(m,x){r.has(m)?r.set(m,x):d(m,x)}}},lu="!",nu=":",Nv=nu.length,Ev=s=>{const{prefix:c,experimentalParseClassName:r}=s;
let o=d=>{const m=[];
let x=0,S=0,y=0,p;for(let O=0;O<d.length;O++){let V=d[O];if(x===0&&S===0){if(V===nu){m.push(d.slice(y,O)),y=O+Nv;continue}
if(V==="/"){p=O;continue}}V==="["?x++:V==="]"?x--:V==="("?S++:V===")"&&S--}
const v=m.length===0?d:d.substring(y),h=wv(v),H=h!==v,_=p&&p>y?p-y:void 0;return{modifiers:m,hasImportantModifier:H,baseClassName:h,maybePostfixModifierPosition:_} };
if(c){const d=c+nu,m=o;o=x=>x.startsWith(d)?m(x.substring(d.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:x,maybePostfixModifierPosition:void 0}}
if(r){const d=o;o=m=>r({className:m,parseClassName:d})}
return o},wv=s=>s.endsWith(lu)?s.substring(0,s.length-1):s.startsWith(lu)?s.substring(1):s,jv=s=>{const c=Object.fromEntries(s.orderSensitiveModifiers.map(o=>[o,!0]));return o=>{if(o.length<=1)return o;
const d=[];
let m=[];return o.forEach(x=>{x[0]==="["||c[x]?(d.push(...m.sort(),x),m=[]):m.push(x) }),
d.push(...m.sort()),d}},Hv=s=>({cache:Sv(s.cacheSize),parseClassName:Ev(s),sortModifiers:jv(s),...xv(s) }),
Av=/\s+/,Tv=(s,c)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:d,sortModifiers:m}=c,x=[],S=s.trim().split(Av);
let y="";for(let p=S.length-1;p>=0;p-=1){const v=S[p],{isExternal:h,modifiers:H,hasImportantModifier:_,baseClassName:O,maybePostfixModifierPosition:V}=r(v);if(h){y=v+(y.length>0?" "+y:y);continue}
let Y=!!V,G=o(Y?O.substring(0,V):O);if(!G){if(!Y){y=v+(y.length>0?" "+y:y);continue}
if(G=o(O),!G){y=v+(y.length>0?" "+y:y);continue}Y=!1}
const P=m(H).join(":"),J=_?P+lu:P,F=J+G;if(x.includes(F))continue;x.push(F);
const I=d(G,Y);for(let nt=0;nt<I.length;++nt){const Z=I[nt];x.push(J+Z)}y=v+(y.length>0?" "+y:y)}
return y };

function zv(){let s=0,c,r,o="";for(;s<arguments.length;)(c=arguments[s++])&&(r=qg(c))&&(o&&(o+=" "),o+=r);return o}
const qg=s=>{if(typeof s=="string")return s;
let c,r="";for(let o=0;o<s.length;o++)s[o]&&(c=qg(s[o]))&&(r&&(r+=" "),r+=c);return r };

function Rv(s,...c){let r,o,d,m=x;
function x(y){const p=c.reduce((v,h)=>h(v),s());return r=Hv(p),o=r.cache.get,d=r.cache.set,m=S,S(y)}
function S(y){const p=o(y);if(p)return p;
const v=Tv(y,r);return d(y,v),v}
return function(){return m(zv.apply(null,arguments))}}
const It=s=>{const c=r=>r[s]||[];return c.isThemeGetter=!0,c},Gg=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Yg=/^\((?:(\w[\w-]*):)?(.+)\)$/i,_v=/^\d+\/\d+$/,Ov=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Mv=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Cv=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Dv=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,kv=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Mn=s=>_v.test(s),bt=s=>!!s&&!Number.isNaN(Number(s)),dl=s=>!!s&&Number.isInteger(Number(s)),Zr=s=>s.endsWith("%")&&bt(s.slice(0,-1)),Da=s=>Ov.test(s),Uv=()=>!0,Bv=s=>Mv.test(s)&&!Cv.test(s),Xg=()=>!1,Lv=s=>Dv.test(s),Vv=s=>kv.test(s),qv=s=>!tt(s)&&!et(s),Gv=s=>Ln(s,Kg,Xg),tt=s=>Gg.test(s),Ll=s=>Ln(s,Jg,Bv),Qr=s=>Ln(s,Kv,bt),q0=s=>Ln(s,Zg,Xg),Yv=s=>Ln(s,Qg,Vv),cc=s=>Ln(s,Wg,Lv),et=s=>Yg.test(s),Bs=s=>Vn(s,Jg),Xv=s=>Vn(s,Jv),G0=s=>Vn(s,Zg),Zv=s=>Vn(s,Kg),Qv=s=>Vn(s,Qg),oc=s=>Vn(s,Wg,!0),Ln=(s,c,r)=>{const o=Gg.exec(s);return o?o[1]?c(o[1]):r(o[2]):!1},Vn=(s,c,r=!1)=>{const o=Yg.exec(s);return o?o[1]?c(o[1]):r:!1},Zg=s=>s==="position"||s==="percentage",Qg=s=>s==="image"||s==="url",Kg=s=>s==="length"||s==="size"||s==="bg-size",Jg=s=>s==="length",Kv=s=>s==="number",Jv=s=>s==="family-name",Wg=s=>s==="shadow",Wv=()=>{const s=It("color"),c=It("font"),r=It("text"),o=It("font-weight"),d=It("tracking"),m=It("leading"),x=It("breakpoint"),S=It("container"),y=It("spacing"),p=It("radius"),v=It("shadow"),h=It("inset-shadow"),H=It("text-shadow"),_=It("drop-shadow"),O=It("blur"),V=It("perspective"),Y=It("aspect"),G=It("ease"),P=It("animate"),J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],F=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],I=()=>[...F(),et,tt],nt=()=>["auto","hidden","clip","visible","scroll"],Z=()=>["auto","contain","none"],Q=()=>[et,tt,y],mt=()=>[Mn,"full","auto",...Q()],Nt=()=>[dl,"none","subgrid",et,tt],zt=()=>["auto",{span:["full",dl,et,tt]},dl,et,tt],pt=()=>[dl,"auto",et,tt],ht=()=>["auto","min","max","fr",et,tt],vt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],St=()=>["start","end","center","stretch","center-safe","end-safe"],w=()=>["auto",...Q()],B=()=>[Mn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...Q()],M=()=>[s,et,tt],st=()=>[...F(),G0,q0,{position:[et,tt]}],
ot=()=>["no-repeat",{repeat:["","x","y","space","round"]}],
N=()=>["auto","cover","contain",Zv,Gv,{size:[et,tt]}],
U=()=>[Zr,Bs,Ll],k=()=>["","none","full",p,et,tt],X=()=>["",bt,Bs,Ll],W=()=>["solid","dashed","dotted","double"],it=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],at=()=>[bt,Zr,G0,q0],ut=()=>["","none",O,et,tt],At=()=>["none",bt,et,tt],le=()=>["none",bt,et,tt],me=()=>[bt,et,tt],ne=()=>[Mn,"full",...Q()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Da],breakpoint:[Da],color:[Uv],container:[Da],"drop-shadow":[Da],ease:["in","out","in-out"],font:[qv],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Da],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Da],shadow:[Da],spacing:["px",bt],text:[Da],"text-shadow":[Da],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Mn,tt,et,Y]}],
container:["container"],columns:[{columns:[bt,tt,et,S]}],
"break-after":[{"break-after":J()}],
"break-before":[{"break-before":J()}],
"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],
"box-decoration":[{"box-decoration":["slice","clone"]}],
box:[{box:["border","content"]}],
display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],
clear:[{clear:["left","right","both","none","start","end"]}],
isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],
"object-position":[{object:I()}],
overflow:[{overflow:nt()}],
"overflow-x":[{"overflow-x":nt()}],
"overflow-y":[{"overflow-y":nt()}],
overscroll:[{overscroll:Z()}],
"overscroll-x":[{"overscroll-x":Z()}],
"overscroll-y":[{"overscroll-y":Z()}],
position:["static","fixed","absolute","relative","sticky"],inset:[{inset:mt()}],
"inset-x":[{"inset-x":mt()}],
"inset-y":[{"inset-y":mt()}],
start:[{start:mt()}],
end:[{end:mt()}],
top:[{top:mt()}],
right:[{right:mt()}],
bottom:[{bottom:mt()}],
left:[{left:mt()}],
visibility:["visible","invisible","collapse"],z:[{z:[dl,"auto",et,tt]}],
basis:[{basis:[Mn,"full","auto",S,...Q()]}],
"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],
"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],
flex:[{flex:[bt,Mn,"auto","initial","none",tt]}],
grow:[{grow:["",bt,et,tt]}],
shrink:[{shrink:["",bt,et,tt]}],
order:[{order:[dl,"first","last","none",et,tt]}],
"grid-cols":[{"grid-cols":Nt()}],
"col-start-end":[{col:zt()}],
"col-start":[{"col-start":pt()}],
"col-end":[{"col-end":pt()}],
"grid-rows":[{"grid-rows":Nt()}],
"row-start-end":[{row:zt()}],
"row-start":[{"row-start":pt()}],
"row-end":[{"row-end":pt()}],
"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],
"auto-cols":[{"auto-cols":ht()}],
"auto-rows":[{"auto-rows":ht()}],
gap:[{gap:Q()}],
"gap-x":[{"gap-x":Q()}],
"gap-y":[{"gap-y":Q()}],
"justify-content":[{justify:[...vt(),"normal"]}],
"justify-items":[{"justify-items":[...St(),"normal"]}],
"justify-self":[{"justify-self":["auto",...St()]}],
"align-content":[{content:["normal",...vt()]}],
"align-items":[{items:[...St(),{baseline:["","last"]}]}],
"align-self":[{self:["auto",...St(),{baseline:["","last"]}]}],
"place-content":[{"place-content":vt()}],
"place-items":[{"place-items":[...St(),"baseline"]}],
"place-self":[{"place-self":["auto",...St()]}],
p:[{p:Q()}],
px:[{px:Q()}],
py:[{py:Q()}],
ps:[{ps:Q()}],
pe:[{pe:Q()}],
pt:[{pt:Q()}],
pr:[{pr:Q()}],
pb:[{pb:Q()}],
pl:[{pl:Q()}],
m:[{m:w()}],
mx:[{mx:w()}],
my:[{my:w()}],
ms:[{ms:w()}],
me:[{me:w()}],
mt:[{mt:w()}],
mr:[{mr:w()}],
mb:[{mb:w()}],
ml:[{ml:w()}],
"space-x":[{"space-x":Q()}],
"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":Q()}],
"space-y-reverse":["space-y-reverse"],size:[{size:B()}],
w:[{w:[S,"screen",...B()]}],
"min-w":[{"min-w":[S,"screen","none",...B()]}],
"max-w":[{"max-w":[S,"screen","none","prose",{screen:[x]},...B()]}],
h:[{h:["screen","lh",...B()]}],
"min-h":[{"min-h":["screen","lh","none",...B()]}],
"max-h":[{"max-h":["screen","lh",...B()]}],
"font-size":[{text:["base",r,Bs,Ll]}],
"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,et,Qr]}],
"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Zr,tt]}],
"font-family":[{font:[Xv,tt,c]}],
"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[d,et,tt]}],
"line-clamp":[{"line-clamp":[bt,"none",et,Qr]}],
leading:[{leading:[m,...Q()]}],
"list-image":[{"list-image":["none",et,tt]}],
"list-style-position":[{list:["inside","outside"]}],
"list-style-type":[{list:["disc","decimal","none",et,tt]}],
"text-alignment":[{text:["left","center","right","justify","start","end"]}],
"placeholder-color":[{placeholder:M()}],
"text-color":[{text:M()}],
"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],
"text-decoration-thickness":[{decoration:[bt,"from-font","auto",et,Ll]}],
"text-decoration-color":[{decoration:M()}],
"underline-offset":[{"underline-offset":[bt,"auto",et,tt]}],
"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],
indent:[{indent:Q()}],
"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",et,tt]}],
whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],
break:[{break:["normal","words","all","keep"]}],
wrap:[{wrap:["break-word","anywhere","normal"]}],
hyphens:[{hyphens:["none","manual","auto"]}],
content:[{content:["none",et,tt]}],
"bg-attachment":[{bg:["fixed","local","scroll"]}],
"bg-clip":[{"bg-clip":["border","padding","content","text"]}],
"bg-origin":[{"bg-origin":["border","padding","content"]}],
"bg-position":[{bg:st()}],
"bg-repeat":[{bg:ot()}],
"bg-size":[{bg:N()}],
"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},dl,et,tt],radial:["",et,tt],conic:[dl,et,tt]},Qv,Yv]}],
"bg-color":[{bg:M()}],
"gradient-from-pos":[{from:U()}],
"gradient-via-pos":[{via:U()}],
"gradient-to-pos":[{to:U()}],
"gradient-from":[{from:M()}],
"gradient-via":[{via:M()}],
"gradient-to":[{to:M()}],
rounded:[{rounded:k()}],
"rounded-s":[{"rounded-s":k()}],
"rounded-e":[{"rounded-e":k()}],
"rounded-t":[{"rounded-t":k()}],
"rounded-r":[{"rounded-r":k()}],
"rounded-b":[{"rounded-b":k()}],
"rounded-l":[{"rounded-l":k()}],
"rounded-ss":[{"rounded-ss":k()}],
"rounded-se":[{"rounded-se":k()}],
"rounded-ee":[{"rounded-ee":k()}],
"rounded-es":[{"rounded-es":k()}],
"rounded-tl":[{"rounded-tl":k()}],
"rounded-tr":[{"rounded-tr":k()}],
"rounded-br":[{"rounded-br":k()}],
"rounded-bl":[{"rounded-bl":k()}],
"border-w":[{border:X()}],
"border-w-x":[{"border-x":X()}],
"border-w-y":[{"border-y":X()}],
"border-w-s":[{"border-s":X()}],
"border-w-e":[{"border-e":X()}],
"border-w-t":[{"border-t":X()}],
"border-w-r":[{"border-r":X()}],
"border-w-b":[{"border-b":X()}],
"border-w-l":[{"border-l":X()}],
"divide-x":[{"divide-x":X()}],
"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":X()}],
"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...W(),"hidden","none"]}],
"divide-style":[{divide:[...W(),"hidden","none"]}],
"border-color":[{border:M()}],
"border-color-x":[{"border-x":M()}],
"border-color-y":[{"border-y":M()}],
"border-color-s":[{"border-s":M()}],
"border-color-e":[{"border-e":M()}],
"border-color-t":[{"border-t":M()}],
"border-color-r":[{"border-r":M()}],
"border-color-b":[{"border-b":M()}],
"border-color-l":[{"border-l":M()}],
"divide-color":[{divide:M()}],
"outline-style":[{outline:[...W(),"none","hidden"]}],
"outline-offset":[{"outline-offset":[bt,et,tt]}],
"outline-w":[{outline:["",bt,Bs,Ll]}],
"outline-color":[{outline:M()}],
shadow:[{shadow:["","none",v,oc,cc]}],
"shadow-color":[{shadow:M()}],
"inset-shadow":[{"inset-shadow":["none",h,oc,cc]}],
"inset-shadow-color":[{"inset-shadow":M()}],
"ring-w":[{ring:X()}],
"ring-w-inset":["ring-inset"],"ring-color":[{ring:M()}],
"ring-offset-w":[{"ring-offset":[bt,Ll]}],
"ring-offset-color":[{"ring-offset":M()}],
"inset-ring-w":[{"inset-ring":X()}],
"inset-ring-color":[{"inset-ring":M()}],
"text-shadow":[{"text-shadow":["none",H,oc,cc]}],
"text-shadow-color":[{"text-shadow":M()}],
opacity:[{opacity:[bt,et,tt]}],
"mix-blend":[{"mix-blend":[...it(),"plus-darker","plus-lighter"]}],
"bg-blend":[{"bg-blend":it()}],
"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],
"mask-image-linear-pos":[{"mask-linear":[bt]}],
"mask-image-linear-from-pos":[{"mask-linear-from":at()}],
"mask-image-linear-to-pos":[{"mask-linear-to":at()}],
"mask-image-linear-from-color":[{"mask-linear-from":M()}],
"mask-image-linear-to-color":[{"mask-linear-to":M()}],
"mask-image-t-from-pos":[{"mask-t-from":at()}],
"mask-image-t-to-pos":[{"mask-t-to":at()}],
"mask-image-t-from-color":[{"mask-t-from":M()}],
"mask-image-t-to-color":[{"mask-t-to":M()}],
"mask-image-r-from-pos":[{"mask-r-from":at()}],
"mask-image-r-to-pos":[{"mask-r-to":at()}],
"mask-image-r-from-color":[{"mask-r-from":M()}],
"mask-image-r-to-color":[{"mask-r-to":M()}],
"mask-image-b-from-pos":[{"mask-b-from":at()}],
"mask-image-b-to-pos":[{"mask-b-to":at()}],
"mask-image-b-from-color":[{"mask-b-from":M()}],
"mask-image-b-to-color":[{"mask-b-to":M()}],
"mask-image-l-from-pos":[{"mask-l-from":at()}],
"mask-image-l-to-pos":[{"mask-l-to":at()}],
"mask-image-l-from-color":[{"mask-l-from":M()}],
"mask-image-l-to-color":[{"mask-l-to":M()}],
"mask-image-x-from-pos":[{"mask-x-from":at()}],
"mask-image-x-to-pos":[{"mask-x-to":at()}],
"mask-image-x-from-color":[{"mask-x-from":M()}],
"mask-image-x-to-color":[{"mask-x-to":M()}],
"mask-image-y-from-pos":[{"mask-y-from":at()}],
"mask-image-y-to-pos":[{"mask-y-to":at()}],
"mask-image-y-from-color":[{"mask-y-from":M()}],
"mask-image-y-to-color":[{"mask-y-to":M()}],
"mask-image-radial":[{"mask-radial":[et,tt]}],
"mask-image-radial-from-pos":[{"mask-radial-from":at()}],
"mask-image-radial-to-pos":[{"mask-radial-to":at()}],
"mask-image-radial-from-color":[{"mask-radial-from":M()}],
"mask-image-radial-to-color":[{"mask-radial-to":M()}],
"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],
"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],
"mask-image-radial-pos":[{"mask-radial-at":F()}],
"mask-image-conic-pos":[{"mask-conic":[bt]}],
"mask-image-conic-from-pos":[{"mask-conic-from":at()}],
"mask-image-conic-to-pos":[{"mask-conic-to":at()}],
"mask-image-conic-from-color":[{"mask-conic-from":M()}],
"mask-image-conic-to-color":[{"mask-conic-to":M()}],
"mask-mode":[{mask:["alpha","luminance","match"]}],
"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],
"mask-position":[{mask:st()}],
"mask-repeat":[{mask:ot()}],
"mask-size":[{mask:N()}],
"mask-type":[{"mask-type":["alpha","luminance"]}],
"mask-image":[{mask:["none",et,tt]}],
filter:[{filter:["","none",et,tt]}],
blur:[{blur:ut()}],
brightness:[{brightness:[bt,et,tt]}],
contrast:[{contrast:[bt,et,tt]}],
"drop-shadow":[{"drop-shadow":["","none",_,oc,cc]}],
"drop-shadow-color":[{"drop-shadow":M()}],
grayscale:[{grayscale:["",bt,et,tt]}],
"hue-rotate":[{"hue-rotate":[bt,et,tt]}],
invert:[{invert:["",bt,et,tt]}],
saturate:[{saturate:[bt,et,tt]}],
sepia:[{sepia:["",bt,et,tt]}],
"backdrop-filter":[{"backdrop-filter":["","none",et,tt]}],
"backdrop-blur":[{"backdrop-blur":ut()}],
"backdrop-brightness":[{"backdrop-brightness":[bt,et,tt]}],
"backdrop-contrast":[{"backdrop-contrast":[bt,et,tt]}],
"backdrop-grayscale":[{"backdrop-grayscale":["",bt,et,tt]}],
"backdrop-hue-rotate":[{"backdrop-hue-rotate":[bt,et,tt]}],
"backdrop-invert":[{"backdrop-invert":["",bt,et,tt]}],
"backdrop-opacity":[{"backdrop-opacity":[bt,et,tt]}],
"backdrop-saturate":[{"backdrop-saturate":[bt,et,tt]}],
"backdrop-sepia":[{"backdrop-sepia":["",bt,et,tt]}],
"border-collapse":[{border:["collapse","separate"]}],
"border-spacing":[{"border-spacing":Q()}],
"border-spacing-x":[{"border-spacing-x":Q()}],
"border-spacing-y":[{"border-spacing-y":Q()}],
"table-layout":[{table:["auto","fixed"]}],
caption:[{caption:["top","bottom"]}],
transition:[{transition:["","all","colors","opacity","shadow","transform","none",et,tt]}],
"transition-behavior":[{transition:["normal","discrete"]}],
duration:[{duration:[bt,"initial",et,tt]}],
ease:[{ease:["linear","initial",G,et,tt]}],
delay:[{delay:[bt,et,tt]}],
animate:[{animate:["none",P,et,tt]}],
backface:[{backface:["hidden","visible"]}],
perspective:[{perspective:[V,et,tt]}],
"perspective-origin":[{"perspective-origin":I()}],
rotate:[{rotate:At()}],
"rotate-x":[{"rotate-x":At()}],
"rotate-y":[{"rotate-y":At()}],
"rotate-z":[{"rotate-z":At()}],
scale:[{scale:le()}],
"scale-x":[{"scale-x":le()}],
"scale-y":[{"scale-y":le()}],
"scale-z":[{"scale-z":le()}],
"scale-3d":["scale-3d"],skew:[{skew:me()}],
"skew-x":[{"skew-x":me()}],
"skew-y":[{"skew-y":me()}],
transform:[{transform:[et,tt,"","none","gpu","cpu"]}],
"transform-origin":[{origin:I()}],
"transform-style":[{transform:["3d","flat"]}],
translate:[{translate:ne()}],
"translate-x":[{"translate-x":ne()}],
"translate-y":[{"translate-y":ne()}],
"translate-z":[{"translate-z":ne()}],
"translate-none":["translate-none"],accent:[{accent:M()}],
appearance:[{appearance:["none","auto"]}],
"caret-color":[{caret:M()}],
"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],
cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",et,tt]}],
"field-sizing":[{"field-sizing":["fixed","content"]}],
"pointer-events":[{"pointer-events":["auto","none"]}],
resize:[{resize:["none","","y","x"]}],
"scroll-behavior":[{scroll:["auto","smooth"]}],
"scroll-m":[{"scroll-m":Q()}],
"scroll-mx":[{"scroll-mx":Q()}],
"scroll-my":[{"scroll-my":Q()}],
"scroll-ms":[{"scroll-ms":Q()}],
"scroll-me":[{"scroll-me":Q()}],
"scroll-mt":[{"scroll-mt":Q()}],
"scroll-mr":[{"scroll-mr":Q()}],
"scroll-mb":[{"scroll-mb":Q()}],
"scroll-ml":[{"scroll-ml":Q()}],
"scroll-p":[{"scroll-p":Q()}],
"scroll-px":[{"scroll-px":Q()}],
"scroll-py":[{"scroll-py":Q()}],
"scroll-ps":[{"scroll-ps":Q()}],
"scroll-pe":[{"scroll-pe":Q()}],
"scroll-pt":[{"scroll-pt":Q()}],
"scroll-pr":[{"scroll-pr":Q()}],
"scroll-pb":[{"scroll-pb":Q()}],
"scroll-pl":[{"scroll-pl":Q()}],
"snap-align":[{snap:["start","end","center","align-none"]}],
"snap-stop":[{snap:["normal","always"]}],
"snap-type":[{snap:["none","x","y","both"]}],
"snap-strictness":[{snap:["mandatory","proximity"]}],
touch:[{touch:["auto","none","manipulation"]}],
"touch-x":[{"touch-pan":["x","left","right"]}],
"touch-y":[{"touch-pan":["y","up","down"]}],
"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],
"will-change":[{"will-change":["auto","scroll","contents","transform",et,tt]}],
fill:[{fill:["none",...M()]}],
"stroke-w":[{stroke:[bt,Bs,Ll,Qr]}],
stroke:[{stroke:["none",...M()]}],
"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Fv=Rv(Wv);
function Nc(...s){return Fv(Lg(s))}
function $v({delayDuration:s=0,...c}){return f.jsx(hv,{"data-loc":"client/src/components/ui/tooltip.tsx:11","data-slot":"tooltip-provider",delayDuration:s,...c})}
const Y0=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,X0=Lg,Pv=(s,c)=>r=>{var o;if(c?.variants==null)return X0(s,r?.class,r?.className);const{variants:d,defaultVariants:m}=c,x=Object.keys(d).map(p=>{const v=r?.[p],h=m?.[p];if(v===null)return null;
const H=Y0(v)||Y0(h);return d[p][H] }),
S=r&&Object.entries(r).reduce((p,v)=>{let[h,H]=v;return H===void 0||(p[h]=H),p},{ }),
y=c==null||(o=c.compoundVariants)===null||o===void 0?void 0:o.reduce((p,v)=>{let{class:h,className:H,..._}=v;return Object.entries(_).every(O=>{let[V,Y]=O;return Array.isArray(Y)?Y.includes({...m,...S}[V]):{...m,...S}[V]===Y})?[...p,h,H]:p},[]);return X0(s,x,y,r?.class,r?.className)},Iv=Pv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"} });

function tb({className:s,variant:c,size:r,asChild:o=!1,...d}){const m=o?uy:"button";return f.jsx(m,{"data-loc":"client/src/components/ui/button.tsx:52","data-slot":"button",className:Nc(Iv({variant:c,size:r,className:s})),...d})}
function eb({className:s,...c}){return f.jsx("div",{"data-loc":"client/src/components/ui/card.tsx:7","data-slot":"card",className:Nc("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",s),...c})}
function ab({className:s,...c}){return f.jsx("div",{"data-loc":"client/src/components/ui/card.tsx:66","data-slot":"card-content",className:Nc("px-6",s),...c})}
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lb=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fg=(...s)=>s.filter((c,r,o)=>!!c&&o.indexOf(c)===r).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round" };

/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sb=z.forwardRef(({color:s="currentColor",size:c=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:d="",children:m,iconNode:x,...S},y)=>z.createElement("svg",{ref:y,...nb,width:c,height:c,stroke:s,strokeWidth:o?Number(r)*24/Number(c):r,className:Fg("lucide",d),...S},[...x.map(([p,v])=>z.createElement(p,v)),...Array.isArray(m)?m:[m]]));
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le=(s,c)=>{const r=z.forwardRef(({className:o,...d},m)=>z.createElement(sb,{ref:m,iconNode:c,className:Fg(`lucide-${lb(s)}`,o),...d}));return r.displayName=`${s}`,r };

/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $g=Le("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ib=Le("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],
["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],
["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xu=Le("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],
["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cb=Le("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],
["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pg=Le("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],
["path",{d:"M10 14 21 3",key:"gplh6r"}],
["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ob=Le("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],
["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig=Le("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],
["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rb=Le("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],
["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],
["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl=Le("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ub=Le("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],
["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fb=Le("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const db=Le("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],
["path",{d:"M12 9v4",key:"juzpu7"}],
["path",{d:"M12 17h.01",key:"p32p05"}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mb=Le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],
["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);
function gb(s,c){if(s instanceof RegExp)return{keys:!1,pattern:s };

var r,o,d,m,x=[],S="",y=s.split("/");for(y[0]||y.shift();d=y.shift();)r=d[0],r==="*"?(x.push(r),S+=d[1]==="?"?"(?:/(.*))?":"/(.*)"):r===":"?(o=d.indexOf("?",1),m=d.indexOf(".",1),x.push(d.substring(1,~o?o:~m?m:d.length)),S+=~o&&!~m?"(?:/([^/]+?))?":"/([^/]+?)",~m&&(S+=(~o?"?":"")+"\\"+d.substring(m))):S+="/"+d;return{keys:x,pattern:new RegExp("^"+S+(c?"(?=$|/)":"/?$"),"i")}}
var Kr={exports:{}},Jr={ };

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z0;
function pb(){if(Z0)return Jr;Z0=1;
var s=gc();
function c(h,H){return h===H&&(h!==0||1/h===1/H)||h!==h&&H!==H}
var r=typeof Object.is=="function"?Object.is:c,o=s.useState,d=s.useEffect,m=s.useLayoutEffect,x=s.useDebugValue;
function S(h,H){var _=H(),O=o({inst:{value:_,getSnapshot:H} }),
V=O[0].inst,Y=O[1];return m(function(){V.value=_,V.getSnapshot=H,y(V)&&Y({inst:V})},[h,_,H]),d(function(){return y(V)&&Y({inst:V }),
h(function(){y(V)&&Y({inst:V})})},[h]),x(_),_}
function y(h){var H=h.getSnapshot;h=h.value;try{var _=H();return!r(h,_)}
catch{return!0}}
function p(h,H){return H()}
var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:S;return Jr.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:v,Jr}
var Q0;
function hb(){return Q0||(Q0=1,Kr.exports=pb()),Kr.exports}
var xb=hb();
const yb=zx.useInsertionEffect,vb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bb=vb?z.useLayoutEffect:z.useEffect,Sb=yb||bb,tp=s=>{const c=z.useRef([s,(...r)=>c[0](...r)]).current;return Sb(()=>{c[0]=s }),
c[1]},Nb="popstate",yu="pushState",vu="replaceState",Eb="hashchange",K0=[Nb,yu,vu,Eb],wb=s=>{for(const c of K0)addEventListener(c,s);return()=>{for(const c of K0)removeEventListener(c,s)}},ep=(s,c)=>xb.useSyncExternalStore(wb,s,c),jb=()=>location.search,Hb=({ssrSearch:s=""}={})=>ep(jb,()=>s),J0=()=>location.pathname,Ab=({ssrPath:s}={})=>ep(J0,s?()=>s:J0),Tb=(s,{replace:c=!1,state:r=null}={})=>history[c?vu:yu](r,"",s),zb=(s={})=>[Ab(s),Tb],W0=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[W0]>"u"){for(const s of[yu,vu]){const c=history[s];history[s]=function(){const r=c.apply(this,arguments),o=new Event(s);return o.arguments=arguments,dispatchEvent(o),r}}Object.defineProperty(window,W0,{value:!0})}
const Rb=(s,c)=>c.toLowerCase().indexOf(s.toLowerCase())?"~"+c:c.slice(s.length)||"/",ap=(s="")=>s==="/"?"":s,_b=(s,c)=>s[0]==="~"?s.slice(1):ap(c)+s,Ob=(s="",c)=>Rb(F0(ap(s)),F0(c)),F0=s=>{try{return decodeURI(s)}
catch{return s}},lp={hook:zb,searchHook:Hb,parser:gb,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:s=>s},np=z.createContext(lp),Ys=()=>z.useContext(np),sp={},ip=z.createContext(sp),Mb=()=>z.useContext(ip),Ec=s=>{const[c,r]=s.hook(s);return[Ob(s.base,c),tp((o,d)=>r(_b(o,s.base),d))]},Cb=()=>Ec(Ys()),cp=(s,c,r,o)=>{const{pattern:d,keys:m}=c instanceof RegExp?{keys:!1,pattern:c }:s(c||"*",o),x=d.exec(r)||[],[S,...y]=x;return S!==void 0?[!0,(()=>{const p=m!==!1?Object.fromEntries(m.map((h,H)=>[h,y[H]])):x.groups;
let v={...y };
return p&&Object.assign(v,p),v})(),...o?[S]:[]]:[!1,null]},Db=({children:s,...c})=>{const r=Ys(),o=c.hook?lp:r;
let d=o;const[m,x]=c.ssrPath?.split("?")??[];x&&(c.ssrSearch=x,c.ssrPath=m),c.hrefs=c.hrefs??c.hook?.hrefs;
let S=z.useRef({ }),
y=S.current,p=y;for(let v in o){const h=v==="base"?o[v]+(c[v]||""):c[v]||o[v];y===p&&h!==p[v]&&(S.current=p={...p }),
p[v]=h,(h!==o[v]||h!==d[v])&&(d=p)}
return z.createElement(np.Provider,{value:d,children:s})},$0=({children:s,component:c},r)=>c?z.createElement(c,{params:r }):typeof s=="function"?s(r):s,kb=s=>{let c=z.useRef(sp);
const r=c.current;return c.current=Object.keys(s).length!==Object.keys(r).length||Object.entries(s).some(([o,d])=>d!==r[o])?s:r},Wr=({path:s,nest:c,match:r,...o})=>{const d=Ys(),[m]=Ec(d),[x,S,y]=r??cp(d.parser,s,m,c),p=kb({...Mb(),...S });
if(!x)return null;
const v=y?z.createElement(Db,{base:y},$0(o,p)):$0(o,p);return z.createElement(ip.Provider,{value:p,children:v}) };
z.forwardRef((s,c)=>{const r=Ys(),[o,d]=Ec(r),{to:m="",href:x=m,onClick:S,asChild:y,children:p,className:v,replace:h,state:H,..._}=s,O=tp(Y=>{Y.ctrlKey||Y.metaKey||Y.altKey||Y.shiftKey||Y.button!==0||(S?.(Y),Y.defaultPrevented||(Y.preventDefault(),d(x,s))) }),
V=r.hrefs(x[0]==="~"?x.slice(1):r.base+x,r);return y&&z.isValidElement(p)?z.cloneElement(p,{onClick:O,href:V }):z.createElement("a",{..._,onClick:O,href:V,className:v?.call?v(o===x):v,children:p,ref:c}) });

const su=s=>Array.isArray(s)?s.flatMap(c=>su(c&&c.type===z.Fragment?c.props.children:c)):[s],Ub=({children:s,location:c})=>{const r=Ys(),[o]=Ec(r);typeof window<"u"&&(window.__WOUTER_ROUTES__||(window.__WOUTER_ROUTES__=[]),su(s).forEach(m=>{if(z.isValidElement(m)&&m.props.path){const x=m.props.path;window.__WOUTER_ROUTES__.includes(x)||window.__WOUTER_ROUTES__.push(x)}}));for(const d of su(s)){let m=0;if(z.isValidElement(d)&&(m=cp(r.parser,d.props.path,c||o,d.props.nest))[0])return z.cloneElement(d,{match:m})}
return null };

function P0(){const[,s]=Cb(),c=()=>{s("/") };
return f.jsx("div",{"data-loc":"client/src/pages/NotFound.tsx:14",className:"min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",children:f.jsx(eb,{"data-loc":"client/src/pages/NotFound.tsx:15",className:"w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",children:f.jsxs(ab,{"data-loc":"client/src/pages/NotFound.tsx:16",className:"pt-8 pb-8 text-center",children:[f.jsx("div",{"data-loc":"client/src/pages/NotFound.tsx:17",className:"flex justify-center mb-6",children:f.jsxs("div",{"data-loc":"client/src/pages/NotFound.tsx:18",className:"relative",children:[f.jsx("div",{"data-loc":"client/src/pages/NotFound.tsx:19",className:"absolute inset-0 bg-red-100 rounded-full animate-pulse" }),
f.jsx(ib,{"data-loc":"client/src/pages/NotFound.tsx:20",className:"relative h-16 w-16 text-red-500"})]}) }),
f.jsx("h1",{"data-loc":"client/src/pages/NotFound.tsx:24",className:"text-4xl font-bold text-slate-900 mb-2",children:"404" }),
f.jsx("h2",{"data-loc":"client/src/pages/NotFound.tsx:26",className:"text-xl font-semibold text-slate-700 mb-4",children:"Page Not Found" }),
f.jsxs("p",{"data-loc":"client/src/pages/NotFound.tsx:30",className:"text-slate-600 mb-8 leading-relaxed",children:["Sorry, the page you are looking for doesn't exist.",f.jsx("br",{"data-loc":"client/src/pages/NotFound.tsx:32" }),
"It may have been moved or deleted."] }),
f.jsx("div",{"data-loc":"client/src/pages/NotFound.tsx:36",className:"flex flex-col sm:flex-row gap-3 justify-center",children:f.jsxs(tb,{"data-loc":"client/src/pages/NotFound.tsx:37",onClick:c,className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",children:[f.jsx(ob,{"data-loc":"client/src/pages/NotFound.tsx:41",className:"w-4 h-4 mr-2" }),
"Go Home"]})})]})})})}
class Bb extends z.Component{constructor(c){super(c),this.state={hasError:!1,error:null}}static getDerivedStateFromError(c){return{hasError:!0,error:c}}render(){return this.state.hasError?f.jsx("div",{"data-loc":"client/src/components/ErrorBoundary.tsx:27",className:"flex items-center justify-center min-h-screen p-8 bg-background",children:f.jsxs("div",{"data-loc":"client/src/components/ErrorBoundary.tsx:28",className:"flex flex-col items-center w-full max-w-2xl p-8",children:[f.jsx(db,{"data-loc":"client/src/components/ErrorBoundary.tsx:29",size:48,className:"text-destructive mb-6 flex-shrink-0" }),
f.jsx("h2",{"data-loc":"client/src/components/ErrorBoundary.tsx:34",className:"text-xl mb-4",children:"An unexpected error occurred." }),
f.jsx("div",{"data-loc":"client/src/components/ErrorBoundary.tsx:36",className:"p-4 w-full rounded bg-muted overflow-auto mb-6",children:f.jsx("pre",{"data-loc":"client/src/components/ErrorBoundary.tsx:37",className:"text-sm text-muted-foreground whitespace-break-spaces",children:this.state.error?.stack}) }),
f.jsxs("button",{"data-loc":"client/src/components/ErrorBoundary.tsx:42",onClick:()=>window.location.reload(),className:Nc("flex items-center gap-2 px-4 py-2 rounded-lg","bg-primary text-primary-foreground","hover:opacity-90 cursor-pointer"),children:[f.jsx(ub,{"data-loc":"client/src/components/ErrorBoundary.tsx:50",size:16 }),
"Reload Page"]})]}) }):this.props.children}}
const Lb=z.createContext(void 0);
function Vb({children:s,defaultTheme:c="light",switchable:r=!1}){const[o,d]=z.useState(()=>r&&localStorage.getItem("theme")||c);z.useEffect(()=>{const x=document.documentElement;o==="dark"?x.classList.add("dark"):x.classList.remove("dark"),r&&localStorage.setItem("theme",o)},[o,r]);
const m=r?()=>{d(x=>x==="light"?"dark":"light") }:void 0;return f.jsx(Lb.Provider,{"data-loc":"client/src/contexts/ThemeContext.tsx:52",value:{theme:o,toggleTheme:m,switchable:r},children:s})}
const qb="https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/bg_about_new-UCmGG2hbvRBkP4ZPbwhTJV.webp",Gb="https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/bg_room_new-8s2UaFCenwJc3BxQwe2HJu.webp",Yb="https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/bg_promo_new-Vvt3AZ7UhayYoohfMgDbhb.webp",ql="010-6647-2175",iu="서울특별시 서초구 잠원동 18-8 지하 1,2층";
function Xb(){const s=z.useRef(null),[c,r]=z.useState(!1);return z.useEffect(()=>{const o=new IntersectionObserver(([d])=>{d.isIntersecting&&r(!0)},{threshold:.15 });
return s.current&&o.observe(s.current),()=>o.disconnect()},[]),{ref:s,visible:c}}
function yt({children:s,className:c="",delay:r=0}){const{ref:o,visible:d}=Xb();return f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:39",ref:o,className:c,style:{opacity:d?1:0,transform:d?"translateY(0)":"translateY(40px)",transition:`opacity 0.8s ease ${r}ms, transform 0.8s ease ${r}ms`},children:s})}
function Zb(){const[s,c]=z.useState(!1),[r,o]=z.useState(!1),[d,m]=z.useState(0),x=["강남룸","강남가라오케","강남하이퍼블릭","강남하퍼","강남쩜오"];z.useEffect(()=>{const p=()=>c(window.scrollY>50);return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]),z.useEffect(()=>{const p=setInterval(()=>{m(v=>(v+1)%x.length)},2500);return()=>clearInterval(p)},[]);
const S=[{label:"홈",href:"#home"},{label:"소개",href:"#about"},{label:"가격",href:"#price"},{label:"매니저",href:"#managers"},{label:"메뉴",href:"#menu"},{label:"가이드",href:"#guide"},{label:"오시는 길",href:"#location"}],
y=p=>{const v=document.querySelector(p);v&&v.scrollIntoView({behavior:"smooth" }),
o(!1) };
return f.jsxs("nav",{"data-loc":"client/src/pages/Home.tsx:90",className:"fixed top-0 left-0 right-0 z-50 transition-all duration-500",style:{background:s?"rgba(2, 10, 5, 0.97)":"transparent",backdropFilter:s?"blur(20px)":"none",borderBottom:s?"1px solid rgba(201,168,76,0.25)":"none"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:98",className:"container mx-auto px-4 lg:px-8",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:99",className:"flex items-center justify-between h-16 lg:h-20",children:[f.jsxs("button",{"data-loc":"client/src/pages/Home.tsx:101",onClick:()=>y("#home"),className:"flex items-center gap-3",children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:102",className:"w-9 h-9 rounded-full flex items-center justify-center text-sm font-black",style:{background:"linear-gradient(135deg, #8b6914, #c9a84c, #f5e27a)",color:"#050a18"},children:"Y" }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:108",className:"block",children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:109",className:"text-xs",style:{color:"#c9a84c",letterSpacing:"0.15em",fontFamily:"Playfair Display, serif"},children:"유앤미" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:112",className:"text-[10px] text-gray-400",style:{letterSpacing:"0.1em",animation:"navSubFade 0.5s ease"},children:x[d]},d)]})] }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:123",className:"hidden lg:flex items-center gap-8",children:S.map(p=>f.jsx("button",{"data-loc":"client/src/pages/Home.tsx:125",onClick:()=>y(p.href),className:"text-sm font-medium transition-all duration-300 hover:opacity-100",style:{color:"rgba(245,226,122,0.75)",letterSpacing:"0.05em"},onMouseEnter:v=>v.currentTarget.style.color="#f5e27a",onMouseLeave:v=>v.currentTarget.style.color="rgba(245,226,122,0.75)",children:p.label},p.label)) }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:139",className:"flex items-center gap-3",children:[f.jsxs("a",{"data-loc":"client/src/pages/Home.tsx:140",href:`tel:${ql}`,className:"hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-bold rounded transition-all duration-300",style:{background:"linear-gradient(135deg, #8b6914, #c9a84c, #f5e27a)",color:"#050a18",letterSpacing:"0.03em"},children:[f.jsx(pl,{"data-loc":"client/src/pages/Home.tsx:149",size:14 }),
"예약 전화"] }),
f.jsx("button",{"data-loc":"client/src/pages/Home.tsx:152",className:"lg:hidden p-2",style:{color:"#c9a84c"},onClick:()=>o(!r),children:r?f.jsx(mb,{"data-loc":"client/src/pages/Home.tsx:157",size:22 }):f.jsx(rb,{"data-loc":"client/src/pages/Home.tsx:157",size:22})})]})]}) }),
r&&f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:165",className:"lg:hidden border-t",style:{background:"rgba(3,12,7,0.98)",borderColor:"rgba(201,168,76,0.2)"},children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:169",className:"container mx-auto px-4 py-4 flex flex-col gap-1",children:[S.map(p=>f.jsx("button",{"data-loc":"client/src/pages/Home.tsx:171",onClick:()=>y(p.href),className:"text-left py-3 px-4 text-sm rounded transition-all",style:{color:"#c9a84c",letterSpacing:"0.05em"},children:p.label},p.label)),f.jsxs("a",{"data-loc":"client/src/pages/Home.tsx:180",href:`tel:${ql}`,className:"mt-2 flex items-center justify-center gap-2 py-3 rounded font-bold text-sm",style:{background:"linear-gradient(135deg, #8b6914, #c9a84c, #f5e27a)",color:"#050a18"},children:[f.jsx(pl,{"data-loc":"client/src/pages/Home.tsx:185",size:14 }),
"예약 전화"]})]})})]})}
function Qb(){return f.jsxs("section",{"data-loc":"client/src/pages/Home.tsx:207",id:"home",className:"relative min-h-screen flex items-center overflow-hidden",style:{background:"#030f0a"},children:[f.jsx("video",{"data-loc":"client/src/pages/Home.tsx:213",className:"absolute inset-0 w-full h-full object-cover",style:{zIndex:1},src:"/manus-storage/hero_combined_c7275073.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0 }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:224",className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(to top, rgba(2,8,4,0.97) 0%, rgba(2,8,4,0.5) 38%, rgba(2,8,4,0.05) 65%, rgba(2,8,4,0.0) 100%)",zIndex:2} }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:232",className:"absolute bottom-0 left-0 right-0 px-6 sm:px-12 lg:px-20 pb-10",style:{zIndex:3},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:237",className:"inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs rounded-full border w-fit",style:{borderColor:"rgba(201,168,76,0.4)",color:"#c9a84c",background:"rgba(2,8,4,0.55)",letterSpacing:"0.15em"},children:"✦ GANGNAM PREMIUM YOU&ME" }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:244",className:"flex items-end gap-4 mb-2",children:[f.jsx("h1",{"data-loc":"client/src/pages/Home.tsx:245",className:"font-black leading-none animate-glitter",style:{fontFamily:"Playfair Display, serif",fontSize:"clamp(2.5rem, 7vw, 6.5rem)"},children:"YOU&ME" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:254",className:"text-lg font-black mb-1 animate-glitter",style:{fontFamily:"Noto Serif KR, serif",letterSpacing:"0.2em"},children:"김태희 대표"})] }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:265",className:"text-xs mb-0.5",style:{color:"#c9a84c",letterSpacing:"0.06em",fontFamily:"Noto Serif KR, serif"},children:"강남 유앤미 — 강남룸 · 강남가라오케 · 강남하이퍼블릭 · 강남하퍼 · 강남쩜오 · 강남 1위" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:268",className:"text-xs mb-4 text-gray-400",style:{letterSpacing:"0.04em"},children:"강남룸 · 강남가라오케 · 강남하이퍼블릭 · 강남하퍼 · 강남쩜오 · 강남노래방" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:270",className:"flex flex-wrap items-center gap-4",children:f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:285",className:"flex items-center gap-4",children:[{icon:f.jsx(xu,{"data-loc":"client/src/pages/Home.tsx:287",size:12 }),
text:"24시간 연중무휴"},{icon:f.jsx(Ig,{"data-loc":"client/src/pages/Home.tsx:288",size:12 }),
text:"강남 유앤미"}].map((s,c)=>f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:290",className:"flex items-center gap-1.5 text-xs",style:{color:"rgba(245,226,122,0.55)"},children:[s.icon,s.text]},c))})})] }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:299",className:"absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",style:{zIndex:3},children:f.jsx($g,{"data-loc":"client/src/pages/Home.tsx:300",size:24,style:{color:"rgba(201,168,76,0.6)"}})})]})}
function Kb(){const s=[{title:"강남 No.1",desc:"지역 최대 규모 프리미엄 노래방"},{title:"프리미엄 룸",desc:"최신 인테리어 독립 VIP 룸"},{title:"엄선된 매니저",desc:"전문 교육 이수 매니저 상시 대기"},{title:"최고급 음향",desc:"프리미엄 노래방 시스템"},{title:"연중무휴 운영",desc:"매일 24시간 연중무휴"},{title:"무제한 서비스",desc:"소주·맥주·과일안주 무제한 제공"}];return f.jsxs("section",{"data-loc":"client/src/pages/Home.tsx:318",id:"about",className:"relative py-24 overflow-hidden",style:{background:"#030f0a02"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:324",className:"absolute inset-0",style:{backgroundImage:`url(${qb})`,backgroundSize:"cover",backgroundPosition:"center right",opacity:.15} }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:333",className:"absolute inset-0",style:{background:"linear-gradient(to right, rgba(3,12,7,1) 0%, rgba(3,12,7,0.85) 50%, rgba(3,12,7,0.7) 100%)"} }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:340",className:"container mx-auto px-4 lg:px-8 relative z-10",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:341",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:342",className:"text-center mb-16",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:343",className:"section-label mb-3",children:"ABOUT 유앤미" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:344",className:"divider-gold" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:345",className:"text-3xl lg:text-5xl font-black mt-4 mb-6",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:"강남에서 가장 특별한" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:351",className:"text-lg mb-4",style:{color:"#c9a84c",fontFamily:"Noto Serif KR, serif"},children:"강남룸 · 강남가라오케 · 강남하이퍼블릭 · 강남하퍼 · 강남쩜오 · 강남 유앤미" }),
f.jsxs("p",{"data-loc":"client/src/pages/Home.tsx:354",className:"text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed",children:[f.jsx("strong",{"data-loc":"client/src/pages/Home.tsx:355",style:{color:"#c9a84c"},children:"강남룸 유앤미" }),
"는 잠원동 중심에 자리한 ",f.jsx("strong",{"data-loc":"client/src/pages/Home.tsx:355",style:{color:"#c9a84c"},children:"강남룸" }),
" 전문 업소로, 고객 한 분 한 분의 소중한 시간을 최우선으로 생각합니다.",f.jsx("br",{"data-loc":"client/src/pages/Home.tsx:356" }),
f.jsx("br",{"data-loc":"client/src/pages/Home.tsx:356" }),
f.jsx("strong",{"data-loc":"client/src/pages/Home.tsx:357",style:{color:"#c9a84c"},children:"강남룸" }),
" · ",f.jsx("strong",{"data-loc":"client/src/pages/Home.tsx:357",style:{color:"#c9a84c"},children:"강남가라오케" }),
" · ",f.jsx("strong",{"data-loc":"client/src/pages/Home.tsx:357",style:{color:"#c9a84c"},children:"강남하이퍼블릭" }),
" · ",f.jsx("strong",{"data-loc":"client/src/pages/Home.tsx:357",style:{color:"#c9a84c"},children:"강남하퍼" }),
" · ",f.jsx("strong",{"data-loc":"client/src/pages/Home.tsx:357",style:{color:"#c9a84c"},children:"강남쩜오" }),
" 1위 유앤미는 최신 트렌드를 반영한 인테리어와 최고급 음향 시스템이 완비된 독립 룸에서 특별한 시간을 제공합니다."]})]}) }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:363",className:"grid grid-cols-2 lg:grid-cols-3 gap-4",children:s.map((c,r)=>f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:365",delay:r*80,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:366",className:"p-5 rounded border transition-all duration-300 group",style:{background:"rgba(3,18,10,0.85)",borderColor:"rgba(201,168,76,0.25)",backdropFilter:"blur(10px)"},onMouseEnter:o=>{o.currentTarget.style.borderColor="rgba(201,168,76,0.7)",o.currentTarget.style.boxShadow="0 0 25px rgba(201,168,76,0.15)"},onMouseLeave:o=>{o.currentTarget.style.borderColor="rgba(201,168,76,0.25)",o.currentTarget.style.boxShadow="none"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:382",className:"text-xs font-black mb-1",style:{color:"#f5e27a",letterSpacing:"0.05em",fontFamily:"Noto Serif KR, serif"},children:c.title }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:388",className:"text-xs text-gray-400",children:c.desc})]})},r))})]})]})}
function Jb(){return f.jsx("section",{"data-loc":"client/src/pages/Home.tsx:401",id:"price",className:"py-24",style:{background:"linear-gradient(180deg, #020c05 0%, #030f07 100%)"},children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:402",className:"container mx-auto px-4 lg:px-8",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:403",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:404",className:"text-center mb-14",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:405",className:"section-label mb-3",children:"PRICE" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:406",className:"divider-gold" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:407",className:"text-4xl lg:text-5xl font-black mt-8 mb-4",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a",letterSpacing:"0.05em"},children:"주대 안내" })]}) }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:418",className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:420",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:421",className:"rounded-2xl p-8",style:{background:"linear-gradient(145deg, #051a0a, #071f0d)",border:"1px solid rgba(201,168,76,0.3)",boxShadow:"0 4px 32px rgba(0,0,0,0.5)"},children:[f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:429",className:"flex items-center gap-3 mb-6",children:[f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:430",className:"text-2xl",children:"✦" }),
f.jsxs("h3",{"data-loc":"client/src/pages/Home.tsx:431",className:"text-2xl font-black",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:"9시 이전 방문"})] }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:435",className:"rounded-xl p-6 space-y-4",style:{background:"rgba(0,0,0,0.3)",border:"1px solid rgba(201,168,76,0.15)"},children:[f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:439",className:"flex items-center justify-between",children:[f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:440",className:"text-gray-300 font-semibold text-lg",children:"▶ 양주" }),
f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:441",className:"text-3xl font-black",style:{color:"#c9a84c"},children:"10만원"})] }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:443",className:"flex items-center justify-between",children:[f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:444",className:"text-gray-300 font-semibold text-lg",children:"▶ TC" }),
f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:445",className:"text-3xl font-black",style:{color:"#c9a84c"},children:"12만원"})] }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:447",className:"text-sm text-gray-500 text-center pt-2",style:{borderTop:"1px solid rgba(201,168,76,0.1)"},children:"맥주+과일 포함"})]})]}) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:455",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:456",className:"rounded-2xl p-8",style:{background:"linear-gradient(145deg, #071f0d, #0a2810)",border:"1px solid rgba(201,168,76,0.5)",boxShadow:"0 4px 32px rgba(201,168,76,0.1)"},children:[f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:464",className:"flex items-center gap-3 mb-6",children:[f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:465",className:"text-2xl",children:"✦" }),
f.jsxs("h3",{"data-loc":"client/src/pages/Home.tsx:466",className:"text-2xl font-black",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:"9시 이후 방문"})] }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:470",className:"rounded-xl p-6 space-y-4",style:{background:"rgba(0,0,0,0.3)",border:"1px solid rgba(201,168,76,0.25)"},children:[f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:474",className:"flex items-center justify-between",children:[f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:475",className:"text-gray-300 font-semibold text-lg",children:"▶ 양주" }),
f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:476",className:"text-3xl font-black",style:{color:"#f5e27a"},children:"문의"})] }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:478",className:"flex items-center justify-between",children:[f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:479",className:"text-gray-300 font-semibold text-lg",children:"▶ 2인 이상" }),
f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:480",className:"text-3xl font-black",style:{color:"#f5e27a"},children:"인당 25만원"})] }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:482",className:"text-sm text-gray-500 text-center pt-2",style:{borderTop:"1px solid rgba(201,168,76,0.1)"},children:"맥주+소주+안주+TC 포함 가격"})]})]})})] }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:490",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:491",className:"text-center",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:501",className:"text-xs text-gray-500 mb-6",children:"※ 현금가 기준이며 카드수수료 별도입니다" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:502",className:"text-xs text-gray-500 mt-4",children:"※ 24시간 연중무휴 운영"})]})})]})})}
function Wb(){const s=[{name:"조니워커 블루",volume:"700ml",price:"1,000,000원",tier:"premium"},{name:"돔페리뇽 샴페인",volume:"750ml",price:"1,000,000원",tier:"premium"},{name:"로얄살루트 21년",volume:"700ml",price:"1,000,000원",tier:"premium"},{name:"발렌타인 21년",volume:"500ml",price:"700,000원",tier:"high"},{name:"글렌피딕 12년",volume:"700ml",price:"600,000원",tier:"high"},{name:"발베니 12년",volume:"700ml",price:"600,000원",tier:"high"},{name:"스카치 21년",volume:"500ml",price:"500,000원",tier:"mid"},{name:"발렌타인 17년",volume:"500ml",price:"500,000원",tier:"mid"},{name:"모엣상동 샴페인",volume:"750ml",price:"400,000원",tier:"mid"},{name:"골든블루 다이아몬드",volume:"450ml",price:"300,000원",tier:"standard"}],
c={premium:"#f5e27a",high:"#c9a84c",mid:"#a88830",standard:"#8b6914"},r={premium:"PREMIUM",high:"HIGH-END",mid:"STANDARD",standard:"ENTRY" };
return f.jsx("section",{"data-loc":"client/src/pages/Home.tsx:537",id:"liquor",className:"py-24",style:{background:"linear-gradient(180deg, #030f07 0%, #030f0a 100%)"},children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:538",className:"container mx-auto px-4 lg:px-8",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:539",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:540",className:"text-center mb-14",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:541",className:"section-label mb-3",children:"LIQUOR MENU" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:542",className:"divider-gold" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:543",className:"text-4xl lg:text-5xl font-black mt-8 mb-4",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a",letterSpacing:"0.05em"},children:"주류 메뉴판" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:549",className:"text-sm text-gray-400",children:"유앤미의 엄선된 프리미엄 주류 컬렉션"})]}) }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:553",className:"grid lg:grid-cols-2 gap-8 items-start",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:555",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:556",className:"relative rounded-xl overflow-hidden",style:{border:"1px solid rgba(201,168,76,0.3)"},children:[f.jsx("img",{"data-loc":"client/src/pages/Home.tsx:557",src:"https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/GbUhRrShA34VEU6kzSie6D/liquor_menu_hero-cVmw4cVogeKXf5E4M4wZxn.webp",alt:"유앤미 프리미엄 주류",className:"w-full object-cover",style:{aspectRatio:"16/9"} }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:563",className:"absolute inset-0",style:{background:"linear-gradient(to top, rgba(3,15,8,0.8) 0%, transparent 60%)"} }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:567",className:"absolute bottom-4 left-4",children:f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:568",className:"text-xs tracking-widest",style:{color:"#c9a84c"},children:"YOU&ME PREMIUM COLLECTION"})})]}) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:574",delay:150,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:575",className:"rounded-xl p-6",style:{background:"rgba(3,15,8,0.95)",border:"1px solid rgba(201,168,76,0.2)"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:579",className:"space-y-1",children:s.map((o,d)=>f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:581",className:"flex items-center justify-between py-3 transition-all duration-200 hover:bg-white/5 rounded px-2",style:{borderBottom:"1px solid rgba(201,168,76,0.08)"},children:[f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:586",className:"flex items-center gap-3",children:[f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:587",className:"text-xs px-2 py-0.5 rounded-sm font-bold tracking-wider flex-shrink-0",style:{background:"rgba(201,168,76,0.1)",color:c[o.tier],border:`1px solid ${c[o.tier]}40`,fontSize:"9px"},children:r[o.tier] }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:598",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:599",className:"text-sm font-semibold text-gray-100",children:o.name }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:600",className:"text-xs text-gray-500",children:o.volume})]})] }),
f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:603",className:"text-sm font-black flex-shrink-0",style:{background:`linear-gradient(135deg, ${c[o.tier]}, #f5e27a)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:o.price})]},d)) }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:617",className:"text-xs text-gray-600 mt-4 text-center",children:"※ 가격은 변동될 수 있으며, 자세한 사항은 전화 문의 바랍니다"})]})})]})]})})}
function Fb(){return f.jsxs("section",{"data-loc":"client/src/pages/Home.tsx:628",className:"relative py-32 flex items-center justify-center overflow-hidden",style:{backgroundImage:`url(${Gb})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:637",className:"absolute inset-0",style:{background:"rgba(2,12,5,0.72)"} }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:641",className:"absolute inset-0",style:{background:"radial-gradient(ellipse at center, rgba(10,80,30,0.18) 0%, transparent 70%)"} }),
f.jsxs(yt,{"data-loc":"client/src/pages/Home.tsx:647",className:"relative z-10 text-center px-4",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:648",className:"section-label mb-4",children:"PREMIUM EXPERIENCE" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:649",className:"divider-gold" }),
f.jsxs("h2",{"data-loc":"client/src/pages/Home.tsx:650",className:"text-3xl lg:text-5xl font-black mt-6 mb-4 leading-tight",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:["특별한 날, 특별한 공간에서",f.jsx("br",{"data-loc":"client/src/pages/Home.tsx:654" }),
f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:655",style:{color:"#c9a84c"},children:"강남 룸 유앤미" }),
"와 함께"] }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:657",className:"text-sm text-gray-300 mb-10 max-w-lg mx-auto leading-relaxed",children:"강남 최고의 프리미엄 노래방에서 잊지 못할 특별한 시간을 경험하세요."})]})]})}
function $b(){return f.jsx("section",{className:"youandme-signal-wrap live-info",id:"live-info","aria-labelledby":"live-info-h2",dangerouslySetInnerHTML:{__html:`<div class="signal-inner"><p class="section-label">Live Signal</p><h2 id="live-info-h2">유앤미 실시간 가게정보</h2><p class="section-desc">엔트리와 웨이팅, 룸 현황을 나이트맨즈 실시간 신호 기준으로 불러옵니다. 현장 상황은 변동될 수 있으니 예약 전 최종 확인해 주세요.</p><div class="live-info-status" id="live-info-status" role="status" aria-live="polite">실시간 정보를 불러오는 중입니다.</div><div class="live-info-cta"><a href="https://nightmens.com/community" class="live-info-link" target="_blank" rel="noopener noreferrer">엔트리·웨이팅 원문 보러가기</a></div><div class="live-info-grid" aria-label="유앤미 실시간 룸 및 엔트리 정보"><article class="live-card live-room-card"><div class="live-card-head"><div><p class="live-card-label">Room</p><h3>룸·웨이팅 현황</h3></div><span class="live-pill" id="live-room-updated">업데이트 확인 중</span></div><div class="live-metrics"><div class="live-metric"><span class="live-metric-value" id="live-room-count">-</span><span class="live-metric-label">이용 가능 룸</span></div><div class="live-metric"><span class="live-metric-value" id="live-wait-count">-</span><span class="live-metric-label">웨이팅</span></div></div><div class="room-detail-list" id="live-room-detail"><p class="live-empty">룸 상세 정보를 불러오는 중입니다.</p></div></article><article class="live-card live-entry-card"><div class="live-card-head"><div><p class="live-card-label">Entry</p><h3>오늘 엔트리</h3></div><span class="live-pill" id="live-entry-count">집계 중</span></div><div class="entry-list" id="live-entry-list"><p class="live-empty">엔트리 정보를 불러오는 중입니다.</p></div></article></div></div>`}})}
function Pb(){const s=[{name:"VIP 룸 A",desc:"크리스탈 샹들리에"},{name:"VIP 룸 B",desc:"프리미엄 인테리어"},{name:"VIP 룸 C",desc:"대리석 럭셔리"},{name:"VIP 룸 D",desc:"모던 스타일"},{name:"VIP 룸 E",desc:"클래식 디자인"},{name:"복도",desc:"대리석 갤러리"}];return f.jsxs(f.Fragment,{children:[f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:770",className:"relative w-full overflow-hidden",style:{height:"380px"},children:[f.jsx("video",{"data-loc":"client/src/pages/Home.tsx:771",className:"absolute inset-0 w-full h-full object-cover",src:"/manus-storage/facility_banner_277deb8c.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0 }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:780",className:"absolute inset-0",style:{background:"linear-gradient(to bottom, rgba(2,8,4,0.55) 0%, rgba(2,8,4,0.45) 60%, rgba(3,15,7,0.9) 100%)"} }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:785",className:"absolute inset-0 flex flex-col items-center justify-center",style:{zIndex:2},children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:786",className:"text-xs tracking-widest mb-4",style:{color:"#c9a84c",letterSpacing:"0.35em"},children:"PREMIUM VIP ROOM" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:792",className:"font-black text-center",style:{fontFamily:"Playfair Display, serif",fontSize:"clamp(1.8rem, 5vw, 4.5rem)",color:"#f5e27a",textShadow:"0 2px 30px rgba(201,168,76,0.4)",letterSpacing:"0.08em"},children:"GANGNAM KARAOKE YOU&ME" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:804",className:"mt-5 w-24 h-px",style:{background:"linear-gradient(to right, transparent, #c9a84c, transparent)"}})]})] }),
f.jsx("section",{"data-loc":"client/src/pages/Home.tsx:810",id:"facility",className:"py-24 relative overflow-hidden",style:{background:"linear-gradient(180deg, #030f0a 0%, #030e09 100%)"},children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:815",className:"container mx-auto px-4 lg:px-8",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:816",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:817",className:"text-center mb-16",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:818",className:"section-label mb-3",children:"FACILITY" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:819",className:"divider-gold" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:820",className:"text-3xl lg:text-5xl font-black mt-4 mb-4",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:"유앤미 시설 소개" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:826",className:"text-sm text-gray-400",children:"최고급 인테리어와 프리미엄 음향 시스템을 갖춘 유앤미의 공간"})]}) }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:830",className:"grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10",children:s.map((c,r)=>f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:832",delay:r*80,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:833",className:"relative rounded overflow-hidden group",style:{aspectRatio:"4/3"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:837",className:"absolute inset-0",style:{backgroundImage:`url(${["https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/fac_new_01-2HfuazbAFdBLrdsSvi2sDo.webp","https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/fac_new_02-QnrWbpDairspLDQNwwwTbG.webp","https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/fac_new_03-aW4uFkXxvgqYC5wHABYw8g.webp","https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/fac_new_04-7T8GicKKdiGWJv4TUuazSn.webp","https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/fac_new_05-mZWQVQgYBEgomMr6kWNXq7.webp","https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/fac_new_06-o9kdRpoKUjUvsDaSi53Exc.webp"][r]})`,backgroundSize:"cover",backgroundPosition:"center",transform:"scale(1)",transition:"transform 0.6s ease"},onMouseEnter:o=>o.currentTarget.style.transform="scale(1.05)",onMouseLeave:o=>o.currentTarget.style.transform="scale(1)" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:856",className:"absolute inset-0",style:{background:"linear-gradient(to top, rgba(3,12,6,0.95) 0%, rgba(3,12,6,0.3) 60%, transparent 100%)"} }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:860",className:"absolute bottom-0 left-0 right-0 p-4",children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:861",className:"text-sm font-bold",style:{color:"#f5e27a",fontFamily:"Noto Serif KR, serif"},children:c.name }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:867",className:"text-xs",style:{color:"#c9a84c"},children:c.desc})] }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:869",className:"absolute top-3 right-3 px-2 py-1 text-xs rounded",style:{background:"rgba(201,168,76,0.15)",color:"#c9a84c",border:"1px solid rgba(201,168,76,0.3)"},children:"VIP"})]})},r)) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:880",children:f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:881",className:"flex flex-col sm:flex-row items-center justify-between p-6 rounded border",style:{background:"rgba(3,18,10,0.8)",borderColor:"rgba(201,168,76,0.3)"},children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:885",className:"flex items-center gap-3 mb-4 sm:mb-0",children:[f.jsx(xu,{"data-loc":"client/src/pages/Home.tsx:886",size:18,style:{color:"#c9a84c"} }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:887",children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:888",className:"text-sm font-bold",style:{color:"#f5e27a"},children:"영업시간" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:889",className:"text-xs text-gray-400",children:"매일 24시간 연중무휴 · 연중무휴"})]})]})})})]})})]})}
function Ib(){const[s,c]=z.useState("프리미엄"),r=["프리미엄","시그니처","라이트","음료"],o={프리미엄:[{name:"왕갈비 & 버섯 모듬구이",price:"₩55,000"},{name:"랍스터 감바스 알 아히요",price:"₩55,000"},{name:"스테이크 슬라이스 플래터",price:"₩55,000"},{name:"프리미엄 해산물 모듬",price:"₩55,000"}],
시그니처:[{name:"트러플 크림 파스타",price:"₩45,000"},{name:"블랙 앵거스 스테이크",price:"₩65,000"},{name:"킹크랩 찜",price:"₩75,000"},{name:"전복 버터구이",price:"₩50,000"}],
라이트:[{name:"진안주 & 신선 과일 플래터",price:"₩35,000"},{name:"치즈 플래터",price:"₩30,000"},{name:"샐러드 모듬",price:"₩25,000"},{name:"나초 & 살사",price:"₩20,000"}],
음료:[{name:"프리미엄 위스키",price:"₩80,000"},{name:"샴페인 (750ml)",price:"₩120,000"},{name:"와인 셀렉션",price:"₩60,000"},{name:"소프트 드링크",price:"₩5,000"}]},d=["진안주 & 신선 과일 플래터","최신 인테리어 독립 룸","프리미엄 노래방 시스템","전담 매니저 1:1 서비스","고급 음향 스피커"];return f.jsx("section",{"data-loc":"client/src/pages/Home.tsx:942",id:"menu",className:"py-24",style:{background:"#030f07"},children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:943",className:"container mx-auto px-4 lg:px-8",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:944",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:945",className:"text-center mb-12",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:946",className:"section-label mb-3",children:"FOOD & DRINK" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:947",className:"divider-gold" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:948",className:"text-3xl lg:text-5xl font-black mt-4",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:"안주 & 음료 메뉴"})]}) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:958",children:f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:959",className:"flex justify-center gap-2 mb-8 flex-wrap",children:r.map(m=>f.jsx("button",{"data-loc":"client/src/pages/Home.tsx:961",onClick:()=>c(m),className:"px-5 py-2 text-sm rounded transition-all duration-300 font-medium",style:s===m?{background:"linear-gradient(135deg, #8b6914, #c9a84c, #f5e27a)",color:"#050a18",fontWeight:"700" }:{background:"rgba(3,18,10,0.8)",color:"#c9a84c",border:"1px solid rgba(201,168,76,0.3)"},children:m},m))}) }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:985",className:"grid lg:grid-cols-2 gap-6",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:987",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:988",className:"rounded p-6",style:{background:"rgba(3,18,10,0.9)",border:"1px solid rgba(201,168,76,0.2)"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:992",className:"space-y-3",children:o[s].map((m,x)=>f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:994",className:"flex items-center justify-between py-3 border-b",style:{borderColor:"rgba(201,168,76,0.1)"},children:[f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:999",className:"text-sm text-gray-200",children:m.name }),
f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:1000",className:"text-sm font-bold",style:{background:"linear-gradient(135deg, #c9a84c, #f5e27a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:m.price})]},x)) }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1014",className:"text-xs text-gray-500 mt-4",children:"※ 시간 연장 시 별도 룸 사용료(RT)가 발생할 수 있습니다."})]}) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1019",delay:150,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1020",className:"rounded p-6",style:{background:"linear-gradient(145deg, rgba(139,105,20,0.2), rgba(3,15,8,0.9))",border:"1px solid rgba(201,168,76,0.35)"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1027",className:"text-sm font-bold mb-4",style:{color:"#f5e27a",fontFamily:"Noto Serif KR, serif"},children:"기본 테이블 구성 안내" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1033",className:"space-y-3",children:d.map((m,x)=>f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1035",className:"flex items-center gap-3 text-sm text-gray-300",children:[f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:1036",className:"w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0",style:{background:"rgba(201,168,76,0.2)",color:"#c9a84c"},children:"✦" }),
m]},x))})]})})]})]})})}
function t2(){const s=[{badge:"이번 달 한정",title:"신규 고객 특별 할인",desc:"첫 방문 고객님께 음료 서비스 및 특별 할인 혜택을 드립니다. 전화 예약 시 '첫 방문'을 말씀해 주세요.",tag:"#강남룸 신규 이벤트"},{badge:"단체 예약",title:"4인 이상 단체 패키지",desc:"4인 이상 단체 예약 시 특별 패키지 가격으로 이용 가능합니다. 생일파티, 회식, 모임에 최적화된 공간을 제공합니다.",tag:"#강남룸 단체"},{badge:"평일 특가",title:"평일 얼리버드 혜택",desc:"평일 오전 입장 시 얼리버드 특가 혜택을 드립니다. 강남 최고의 프리미엄 공간을 합리적인 가격에 경험하세요.",tag:"#강남룸 평일 할인"}];return f.jsxs("section",{"data-loc":"client/src/pages/Home.tsx:1078",className:"relative py-24 overflow-hidden",style:{backgroundImage:`url(${Yb})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1087",className:"absolute inset-0",style:{background:"rgba(2,12,5,0.85)"} }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1091",className:"container mx-auto px-4 lg:px-8 relative z-10",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1092",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1093",className:"text-center mb-16",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1094",className:"section-label mb-3",children:"PROMOTION" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1095",className:"divider-gold" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:1096",className:"text-3xl lg:text-5xl font-black mt-4 mb-4",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:"이벤트 & 프로모션" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1102",className:"text-sm text-gray-400",children:"강남룸 유앤미의 특별한 혜택을 만나보세요"})]}) }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1106",className:"grid lg:grid-cols-3 gap-5",children:s.map((c,r)=>f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1108",delay:r*120,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1109",className:"rounded p-6 h-full transition-all duration-300",style:{background:"rgba(3, 15, 8, 0.95)",border:"1px solid rgba(201,168,76,0.25)",backdropFilter:"blur(15px)"},onMouseEnter:o=>{o.currentTarget.style.borderColor="rgba(201,168,76,0.6)",o.currentTarget.style.transform="translateY(-4px)",o.currentTarget.style.boxShadow="0 16px 50px rgba(201,168,76,0.15)"},onMouseLeave:o=>{o.currentTarget.style.borderColor="rgba(201,168,76,0.25)",o.currentTarget.style.transform="translateY(0)",o.currentTarget.style.boxShadow="none"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1127",className:"inline-block px-3 py-1 text-xs rounded-full mb-4",style:{background:"rgba(201,168,76,0.15)",color:"#c9a84c",border:"1px solid rgba(201,168,76,0.4)"},children:c.badge }),
f.jsx("h3",{"data-loc":"client/src/pages/Home.tsx:1133",className:"text-lg font-black mb-3",style:{color:"#f5e27a",fontFamily:"Noto Serif KR, serif"},children:c.title }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1139",className:"text-sm text-gray-300 leading-relaxed mb-4",children:c.desc }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1140",className:"text-xs",style:{color:"rgba(201,168,76,0.6)"},children:c.tag})]})},r))})]})]})}
function e2(){const s=[{initial:"김",name:"김*준",date:"2026.05",text:"잠원동 노래방 중에 유앤미가 진짜 넘사벽이에요. 처음 방문했는데 노래방 시설이 완전 럭셔리하고 매니저분들 서비스도 최상급! 강남 룸 찾으시면 무조건 유앤미 추천합니다.",tag:"#강남룸"},{initial:"이",name:"이*호",date:"2026.05",text:"강남 룸 여러 군데 다녀봤는데 유앤미가 압도적으로 좋아요. 노래방 공간이 넉넉하고 조명이랑 음향이 진짜 클럽급입니다. 회식으로 왔는데 팀원들 모두 대만족!",tag:"#강남룸추천"},{initial:"박",name:"박*민",date:"2026.04",text:"잠원동 노래방 많이 다녀봤지만 유앤미는 확실히 달라요. 양주 80분 타임에 이 가격이면 진짜 가성비 최고! 일반 노래방이랑은 비교 자체가 안 됩니다. 강남 룸 1위 인정.",tag:"#강남노래방"},{initial:"최",name:"최*석",date:"2026.04",text:"생일파티로 유앤미 예약했는데 김태희 대표님이 처음부터 끝까지 꼼꼼하게 챙겨주셨어요. 강남 룸 중에 이런 곳은 진짜 처음이에요. 음향 시설이 완전 프리미엄급!",tag:"#강남룸파티"},{initial:"정",name:"정*우",date:"2026.05",text:"김태희 대표님 소개받고 왔는데 기대 이상이었어요. 처음 방문인데도 VIP 대우 받는 느낌? 노래방 분위기가 화려하고 매니저분들도 싹싹해서 금방 편해졌습니다. 강남 룸 1위 인정!",tag:"#강남룸1위"},{initial:"강",name:"강*현",date:"2026.05",text:"지인 소개로 처음 왔는데 완전 대박이었어요. 강남 룸 중에 이 정도 시설이면 진짜 최고! 매니저분들 비주얼이랑 서비스 수준이 장난 아닙니다. 단골 확정!",tag:"#강남룸이벤트"},{initial:"윤",name:"윤*진",date:"2026.04",text:"강남 접대 자리는 이제 무조건 유앤미 노래방입니다. 프라이빗한 분위기에 서비스 퀄리티가 항상 일정하게 높아서 믿고 올 수 있어요. 잠원동 비즈니스 접대 최적 장소!",tag:"#강남룸접대"},{initial:"오",name:"오*태",date:"2026.05",text:"신사역에서 도보 3분이라 접근성도 좋고, 예약도 빠르게 잡아주셨어요. 노래방 인테리어가 고급 호텔 수준이고 매니저분들도 프로페셔널해서 분위기 최고입니다!",tag:"#강남역노래방"}];return f.jsx("section",{"data-loc":"client/src/pages/Home.tsx:1212",id:"reviews",className:"py-24",style:{background:"#030f0a"},children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1213",className:"container mx-auto px-4 lg:px-8",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1214",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1215",className:"text-center mb-16",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1216",className:"section-label mb-3",children:"REVIEWS" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1217",className:"divider-gold" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:1218",className:"text-3xl lg:text-5xl font-black mt-4 mb-4",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:"고객 후기" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1224",className:"text-sm text-gray-400",children:"강남 룸 유앤미를 방문하신 고객님들의 생생한 후기"})]}) }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1228",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:s.map((c,r)=>f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1230",delay:r*100,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1231",className:"rounded p-5 h-full transition-all duration-300",style:{background:"rgba(3,16,8,0.9)",border:"1px solid rgba(201,168,76,0.2)"},onMouseEnter:o=>{o.currentTarget.style.borderColor="rgba(201,168,76,0.5)",o.currentTarget.style.boxShadow="0 8px 30px rgba(201,168,76,0.12)"},onMouseLeave:o=>{o.currentTarget.style.borderColor="rgba(201,168,76,0.2)",o.currentTarget.style.boxShadow="none"},children:[f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1246",className:"flex items-center gap-3 mb-4",children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1247",className:"w-10 h-10 rounded-full flex items-center justify-center text-sm font-black",style:{background:"linear-gradient(135deg, #8b6914, #c9a84c)",color:"#050a18",fontFamily:"Noto Serif KR, serif"},children:c.initial }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1257",children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1258",className:"text-sm font-bold",style:{color:"#f5e27a"},children:c.name }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1259",className:"text-xs text-gray-500",children:c.date})]})] }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1262",className:"flex gap-0.5 mb-3",children:[...Array(5)].map((o,d)=>f.jsx(fb,{"data-loc":"client/src/pages/Home.tsx:1264",size:12,fill:"#c9a84c",style:{color:"#c9a84c"}},d)) }),
f.jsxs("p",{"data-loc":"client/src/pages/Home.tsx:1267",className:"text-xs text-gray-300 leading-relaxed mb-3",children:['"',c.text,'"'] }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1268",className:"text-xs",style:{color:"rgba(201,168,76,0.5)"},children:c.tag})]})},r))})]})})}
function a2(){const[s,c]=z.useState(null),r=[{q:"강남 룸 주대 가격이 얼마인가요?",a:"강남 룸 유앤미는 퍼블릭 코스(1인 25만원 / 2인 이상 인당 19만원)와 잠원동 코스(1인 32만원 / 2인 이상 인당 25만원) 두 가지로 운영됩니다. 맥주+소주+안주+TC가 모두 포함된 가격입니다."},{q:"강남 룸 예약은 어떻게 하나요?",a:"전화 또는 문자로 예약 가능합니다. 당일 예약도 가능하며, 사전 예약 시 원하시는 매니저를 지명하실 수 있습니다."},{q:"강남 룸 영업시간이 어떻게 되나요?",a:"24시간 연중무휴로 운영합니다. 낮이나 새벽, 주말이나 평일 관계없이 언제든지 이용 가능합니다."},{q:"강남 룸 위치가 어디인가요?",a:"서울특별시 서초구 잠원동 18-8 지하 1,2층에 위치해 있습니다. 신사역 도보 3분 거리로 대중교통 접근이 편리합니다."},{q:"주차가 가능한가요?",a:"네, 건물 내 주차 가능합니다. 주차 공간이 협소할 수 있으니 대중교통 이용을 권장드립니다."},{q:"몇 명부터 이용 가능한가요?",a:"1인부터 이용 가능합니다. 단체(4인 이상) 예약 시 특별 혜택을 드리며, 생일파티와 회식 등 단체 모임도 환영합니다."},{q:"강남 룸 언니 TC 서비스는 어떻게 되나요?",a:"주대 코스에 TC 서비스가 포함되어 있습니다. 매니저 지명은 사전 예약 시 가능하며, 당일 예약에도 가능한 범위 내에서 지명해 드립니다."},{q:"강남 룸 시설은 어떻게 되어 있나요?",a:"딥 에메랄드 인테리어에 크리스탈 샹델리에를 갖춘 프리미엄 VIP 노래방 공간입니다. 하이파이 음향 시스템과 고급 주류가 준비되어 있습니다."},{q:"강남 룸 지인 추천 혜택이 있나요?",a:"네, 지인 추천 시 특별 혜택을 드리고 있습니다. 자세한 내용은 전화로 문의해 주세요."},{q:"혼자서 방문해도 되나요?",a:"네, 가능합니다. 강남 룸 유앤미는 혼자 방문하시는 고객님도 편하게 이용하실 수 있도록 차분한 분위기와 안정적인 서비스를 제공합니다. 부담 없이 예약 후 방문해보세요."},{q:"분위기나 이미지가 부담스럽지 않나요?",a:"유앤미는 과한 분위기보다는 편안함과 매너를 우선합니다. 처음 오시는 분들도 부담 없이 즐기실 수 있도록, 대화 센스와 기본 매너를 갖춘 매니저들로 운영됩니다. 스타일과 분위기는 초이스 전 미리 안내받으실 수 있어 만족도가 높습니다."},{q:"그냥 술만 마시는 곳 아니나요?",a:"단순히 술만 마시는 공간이 아니라, 분위기 대화 음악이 함께하는 프리미엄 강남 룸 라운지입니다. 담당 매니저가 처음부터 끝까지 케어하며, 회식 친구모임 혼술까지 다양한 형태로 만족스러운 시간을 보낼 수 있습니다."}];return f.jsx("section",{"data-loc":"client/src/pages/Home.tsx:1334",id:"faq",className:"py-24",style:{background:"#030f0a"},children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1335",className:"container mx-auto px-4 lg:px-8 max-w-3xl",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1336",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1337",className:"text-center mb-16",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1338",className:"section-label mb-3",children:"FAQ" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1339",className:"divider-gold" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:1340",className:"text-3xl lg:text-5xl font-black mt-4 mb-4",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:"자주 묻는 질문" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1346",className:"text-sm text-gray-400",children:"강남룸 유앤미 이용 전 궁금한 점을 확인하세요"})]}) }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1350",className:"space-y-3",children:r.map((o,d)=>f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1352",delay:d*60,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1353",className:"rounded overflow-hidden transition-all duration-300",style:{background:"rgba(3,18,10,0.8)",border:s===d?"1px solid rgba(201,168,76,0.6)":"1px solid rgba(201,168,76,0.2)"},children:[f.jsxs("button",{"data-loc":"client/src/pages/Home.tsx:1360",className:"w-full flex items-center justify-between p-5 text-left",onClick:()=>c(s===d?null:d),children:[f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:1364",className:"text-sm font-medium",style:{color:"#f5e27a"},children:o.q }),
f.jsx($g,{"data-loc":"client/src/pages/Home.tsx:1365",size:16,style:{color:"#c9a84c",transform:s===d?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease",flexShrink:0}})] }),
s===d&&f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1376",className:"px-5 pb-5 text-sm text-gray-300 leading-relaxed border-t",style:{borderColor:"rgba(201,168,76,0.15)"},children:f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1380",className:"pt-4",children:o.a})})]})},d))})]})})}
function l2(){return f.jsxs("section",{"data-loc":"client/src/pages/Home.tsx:1395",id:"unlimited",className:"py-24 relative overflow-hidden",style:{background:"#020c06"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1401",className:"absolute inset-0",style:{backgroundImage:"url('https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/bg_unlimited-9DgyqFM8gE9jV3tQwAjKrS.webp')",backgroundSize:"cover",backgroundPosition:"center",opacity:.15} }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1410",className:"absolute inset-0",style:{background:"linear-gradient(180deg, rgba(2,12,6,0.88) 0%, rgba(3,15,8,0.94) 100%)"} }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1411",className:"container mx-auto px-4 lg:px-8 relative z-10",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1412",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1413",className:"text-center mb-12",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1414",className:"section-label mb-3",children:"UNLIMITED CHOICE" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1415",className:"divider-gold" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:1416",className:"text-3xl lg:text-5xl font-black mt-4 mb-4",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:"무제한 초이스" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1422",className:"text-base",style:{color:"#c9a84c"},children:"자연스러운 스타일 변경 가능"})]}) }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1425",className:"grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1427",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1428",className:"relative rounded-xl overflow-hidden",style:{minHeight:"340px"},children:[f.jsx("img",{"data-loc":"client/src/pages/Home.tsx:1429",src:"https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/bg_unlimited-9DgyqFM8gE9jV3tQwAjKrS.webp",alt:"무제한 초이스",className:"w-full h-full object-cover absolute inset-0" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1434",className:"absolute inset-0",style:{background:"linear-gradient(to top, rgba(2,12,6,0.75) 0%, transparent 55%)"} }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1435",className:"absolute bottom-5 left-5",children:f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:1436",className:"px-3 py-1.5 rounded text-xs font-bold",style:{background:"linear-gradient(135deg, #8b6914, #c9a84c)",color:"#050a18"},children:"✦ 스타일 변경 자유"})})]}) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1446",delay:150,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1447",className:"rounded-xl p-8 h-full flex flex-col justify-between",style:{background:"rgba(3,18,10,0.9)",border:"1px solid rgba(201,168,76,0.3)",boxShadow:"0 0 40px rgba(201,168,76,0.06)"},children:[f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1455",children:[f.jsxs("p",{"data-loc":"client/src/pages/Home.tsx:1456",className:"text-sm text-gray-300 leading-relaxed mb-6",children:["분위기가 맞지 않으면 편하게 말씀만 주세요.",f.jsx("br",{"data-loc":"client/src/pages/Home.tsx:1457" }),
f.jsx("br",{"data-loc":"client/src/pages/Home.tsx:1457" }),
"강남 룸 유앤미는 고객 만족을 최우선으로 생각합니다. 혹시 함께한 담당이 스타일이 맞지 않거나 불편하다고 느껴지신다면 언제든 자연스럽게 변경 요청이 가능합니다."] }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1462",className:"rounded-xl p-5 mb-6",style:{background:"rgba(201,168,76,0.07)",border:"1px solid rgba(201,168,76,0.2)"},children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1469",className:"text-xs font-bold mb-3",style:{color:"#c9a84c",letterSpacing:"0.1em"},children:"💬 소통 TIP" }),
f.jsxs("p",{"data-loc":"client/src/pages/Home.tsx:1470",className:"text-sm text-gray-300 leading-relaxed italic",children:['"오늘은 저랑 스타일이 조금 다른 것 같아요.',f.jsx("br",{"data-loc":"client/src/pages/Home.tsx:1471" }),
'다른 분으로 부탁드려도 될까요?"'] }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1474",className:"text-xs text-gray-400 mt-3 leading-relaxed",children:"부드럽게 말씀만 주셔도 분위기 흐트러짐 없이 자연스럽게 진행됩니다. 빠른 대응은 서로의 시간을 아끼고, 더 만족스러운 시간을 만들어드립니다."})]})] }),
f.jsxs("a",{"data-loc":"client/src/pages/Home.tsx:1480",href:`tel:${ql}`,className:"inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-sm transition-all duration-300",style:{background:"linear-gradient(135deg, #8b6914, #c9a84c, #f5e27a)",color:"#050a18",letterSpacing:"0.05em"},children:[f.jsx(pl,{"data-loc":"client/src/pages/Home.tsx:1489",size:16 }),
"지금 바로 문의하기"]})]})})]})]})]})}
function n2(){const s=[{icon:"🍽️",text:"기본 안주 및 스낵 구성 무료 제공"},{icon:"🎂",text:"생일 또는 기념일 이벤트 데코 서비스"},{icon:"🔊",text:"룸 내 전용 음향 세팅 및 조명 맞춤 조정"},{icon:"📶",text:"무료 와이파이 및 충전기 대여"}];return f.jsxs("section",{"data-loc":"client/src/pages/Home.tsx:1509",id:"system",className:"py-24 relative overflow-hidden",style:{background:"#030f0a"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1515",className:"absolute inset-0",style:{backgroundImage:"url('https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/bg_system-NNJBASm3tREBJmK9PpuiFj.webp')",backgroundSize:"cover",backgroundPosition:"center",opacity:.12} }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1524",className:"absolute inset-0",style:{background:"linear-gradient(180deg, rgba(3,15,8,0.9) 0%, rgba(2,12,6,0.95) 100%)"} }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1525",className:"container mx-auto px-4 lg:px-8 max-w-4xl",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1526",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1527",className:"text-center mb-12",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1528",className:"section-label mb-3",children:"SYSTEM" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1529",className:"divider-gold" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:1530",className:"text-3xl lg:text-5xl font-black mt-4 mb-6",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:"강남 룸 유앤미 시스템 소개"})]}) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1539",delay:100,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1540",className:"rounded-xl p-8 mb-8",style:{background:"rgba(3,18,10,0.85)",border:"1px solid rgba(201,168,76,0.25)"},children:[f.jsxs("p",{"data-loc":"client/src/pages/Home.tsx:1547",className:"text-sm text-gray-300 leading-relaxed mb-6",children:["강남 룸 유앤미의 운영 시스템은 룸 내부에서 편하게 스타일을 확인하는 ",f.jsx("strong",{"data-loc":"client/src/pages/Home.tsx:1548",style:{color:"#c9a84c"},children:"룸초이스(Room Choice)" }),
" 방식으로 진행됩니다. 선택이 완료되면 정해진 시간 동안 고객님과 편안한 시간을 함께하며, 그 중 일부 시간은 유앤미 전용 서비스로 더욱 특별한 경험을 제공합니다."] }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1550",className:"text-sm text-gray-300 leading-relaxed mb-6",children:"또한 정식 허가를 받은 합법적인 업장으로 안심하고 이용하실 수 있으며, 고객 편의를 위해 예약 시스템과 실시간 문의 대응이 모두 가능하도록 운영되고 있습니다." }),
f.jsxs("p",{"data-loc":"client/src/pages/Home.tsx:1553",className:"text-sm leading-relaxed",style:{color:"#c9a84c"},children:["저희는 ",f.jsx("strong",{"data-loc":"client/src/pages/Home.tsx:1554",children:'"부담되지 않는 가격이지만 만족도는 높은 공간"' }),
"을 목표로, 합리적인 가격과 완성도 높은 구성으로 가성비 최강의 강남 룸을 지향합니다."]})]}) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1559",delay:200,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1560",className:"rounded-xl p-8",style:{background:"rgba(3,18,10,0.85)",border:"1px solid rgba(201,168,76,0.25)"},children:[f.jsx("h3",{"data-loc":"client/src/pages/Home.tsx:1567",className:"text-lg font-black mb-6",style:{color:"#f5e27a",fontFamily:"Noto Serif KR, serif"},children:"무료로 제공되는 서비스" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1573",className:"text-xs text-gray-400 mb-6 leading-relaxed",children:"고객님의 편의를 위해 다양한 무료 서비스를 제공합니다. 이용 전에는 간단히 전화로 확인만 주시면 바로 안내 및 예약이 가능합니다." }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1576",className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:s.map((c,r)=>f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1578",delay:r*80,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1579",className:"flex items-center gap-4 p-4 rounded-xl",style:{background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.18)"},children:[f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:1583",className:"text-2xl flex-shrink-0",children:c.icon }),
f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:1584",className:"text-sm text-gray-300",children:c.text})]})},r)) }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1589",className:"mt-8 text-center",children:f.jsxs("a",{"data-loc":"client/src/pages/Home.tsx:1590",href:`tel:${ql}`,className:"inline-flex items-center gap-2 px-6 py-3 rounded font-bold text-sm transition-all duration-300",style:{background:"linear-gradient(135deg, #8b6914, #c9a84c, #f5e27a)",color:"#050a18",letterSpacing:"0.05em"},children:[f.jsx(pl,{"data-loc":"client/src/pages/Home.tsx:1599",size:14 }),
"지금 바로 문의하기"]})})]})})]})]})}
function s2(){const s=[{num:"1",title:"접근성 좋은 위치",desc:"신사역 도보 3분 거리인 서울특별시 서초구 잠원동 18-8 지하 1,2층에 위치해 강남·서초·잠원·신사 권역에서 이동이 편리합니다. 예약 시 현재 위치 기반으로 이동 안내 및 픽업 여부를 함께 상담해드립니다."},{num:"2",title:"프리미엄 인테리어와 룸 설계",desc:"딥 에메랄드 인테리어에 크리스탈 샹들리에를 갖춘 독립 룸 구조로 프라이버시가 보장됩니다. 비즈니스 미팅이나 조용한 모임에도 적합한 프리미엄 공간입니다."},{num:"3",title:"다양한 매니저 구성",desc:"상시 출근 인원이 많아 스타일·분위기에 맞춘 선택이 수월합니다. 사전 상담 시 선호 타입, 분위기 등에 맞춰 안내받으실 수 있습니다."},{num:"4",title:"예약 운영과 프라이버시 보장",desc:"사전 예약제로 운영되어 대기 시간을 줄이고, VIP 전용 룸으로 쾌적한 이용 환경을 제공합니다. 365일 24시간 상담 가능합니다."}],
c=["강남·강남권에서 가까운 프리미엄 노래방이 필요할 때","프라이버시가 보장되는 독립 룸이 필요한 비즈니스 모임","분위기·서비스 둘 다 잡은 강남 1위 노래방을 찾을 때","생일파티, 회식, 단체 모임 장소를 찾을 때","혼자서도 편하게 이용할 수 있는 프리미엄 공간을 원할 때"];return f.jsxs("section",{"data-loc":"client/src/pages/Home.tsx:1644",id:"guide",className:"py-24 relative overflow-hidden",style:{background:"#020c06"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1650",className:"absolute inset-0",style:{backgroundImage:"url('https://d2xsxph8kpxj0f.cloudfront.net/310519663410596025/ScGtRWABNVheRpPKZrdvVk/bg_guide-JJF5tSvkPFjNjgF4DKQM6r.webp')",backgroundSize:"cover",backgroundPosition:"center",opacity:.1} }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1659",className:"absolute inset-0",style:{background:"linear-gradient(180deg, rgba(2,12,6,0.92) 0%, rgba(3,15,8,0.96) 100%)"} }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1660",className:"container mx-auto px-4 lg:px-8 relative z-10",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1661",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1662",className:"text-center mb-16",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1663",className:"section-label mb-3",children:"PREMIUM GUIDE" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1664",className:"divider-gold" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:1665",className:"text-3xl lg:text-5xl font-black mt-4 mb-4",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:"강남 룸 유앤미 — 프리미엄 가이드"})]}) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1674",delay:100,children:f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1675",className:"text-sm text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto text-center",children:"서울 서초구 잠원동과 신사역 일대는 비즈니스와 여가가 공존하는 대표적인 상권입니다. 유앤미는 서울특별시 서초구 잠원동 18-8 지하 1,2층, 신사역 도보 3분 거리에 위치해 회식·단체·지인 모임의 2차 장소로 꾸준히 선택받고 있습니다."}) }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1680",className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12",children:s.map((r,o)=>f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1682",delay:o*100,children:f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1683",className:"rounded-xl p-6 h-full",style:{background:"rgba(3,18,10,0.85)",border:"1px solid rgba(201,168,76,0.25)"},children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1690",className:"flex items-start gap-4",children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1691",className:"w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0",style:{background:"linear-gradient(135deg, #8b6914, #c9a84c)",color:"#050a18"},children:r.num }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1697",children:[f.jsx("h3",{"data-loc":"client/src/pages/Home.tsx:1698",className:"text-sm font-black mb-2",style:{color:"#f5e27a",fontFamily:"Noto Serif KR, serif"},children:r.title }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1701",className:"text-xs text-gray-400 leading-relaxed",children:r.desc})]})]})})},o)) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1710",delay:200,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1711",className:"rounded-xl p-8 mb-12",style:{background:"rgba(3,18,10,0.85)",border:"1px solid rgba(201,168,76,0.25)"},children:[f.jsx("h3",{"data-loc":"client/src/pages/Home.tsx:1718",className:"text-lg font-black mb-6 text-center",style:{color:"#f5e27a",fontFamily:"Noto Serif KR, serif"},children:"강남 룸 유앤미 이용 안내" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1724",className:"space-y-4",children:[{label:"운영시간",value:"24시간 연중무휴 (365일 상담 가능)"},{label:"기본 구성",value:"위스키 1병 기준 + 안주 1세트, 맥주·소주·과일안주 무제한"},{label:"예약 팁",value:"원하는 시간·룸·분위기·주류를 미리 전달하면 대기 최소화 및 맞춤 배정 수월"},{label:"위치",value:"서울특별시 서초구 잠원동 18-8 지하 1,2층 (신사역 도보 3분)"},{label:"전화 예약",value:"24시간 상담 가능"}].map((r,o)=>f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1732",className:"flex flex-col sm:flex-row gap-2 sm:gap-4 py-3 border-b",style:{borderColor:"rgba(201,168,76,0.1)"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1733",className:"text-xs font-bold flex-shrink-0 sm:w-28",style:{color:"#c9a84c"},children:r.label }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1734",className:"text-xs text-gray-300",children:r.value})]},o))})]}) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1742",delay:300,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1743",className:"rounded-xl p-8 mb-12",style:{background:"rgba(3,18,10,0.85)",border:"1px solid rgba(201,168,76,0.25)"},children:[f.jsx("h3",{"data-loc":"client/src/pages/Home.tsx:1750",className:"text-lg font-black mb-6 text-center",style:{color:"#f5e27a",fontFamily:"Noto Serif KR, serif"},children:"이런 분들께 추천합니다" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1756",className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:c.map((r,o)=>f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1758",className:"flex items-start gap-3 p-4 rounded-xl",style:{background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.15)"},children:[f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:1763",className:"text-sm flex-shrink-0",style:{color:"#c9a84c"},children:"✦" }),
f.jsx("span",{"data-loc":"client/src/pages/Home.tsx:1764",className:"text-sm text-gray-300",children:r})]},o))})]}) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1772",delay:400,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1773",className:"rounded-xl p-8 text-center",style:{background:"rgba(3,18,10,0.85)",border:"1px solid rgba(201,168,76,0.35)",boxShadow:"0 0 40px rgba(201,168,76,0.06)"},children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1781",className:"text-lg font-black mb-4",style:{color:"#f5e27a",fontFamily:"Noto Serif KR, serif"},children:"강남 룸 유앤미 — 분위기·가격·서비스 모두 만족스러운 선택" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1787",className:"text-sm text-gray-300 leading-relaxed mb-6",children:"강남 룸 유앤미는 강남·강남권에서 꾸준히 사랑받는 프리미엄 노래방으로, 합리적인 가격과 세련된 분위기, 그리고 정성스러운 서비스가 어우러진 곳입니다. 단순히 노래를 부르는 장소가 아니라, 편안하게 대화하며 하루의 피로를 풀 수 있는 공간으로 자리 잡았습니다." }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1790",className:"text-sm text-gray-300 leading-relaxed mb-8",children:"룸 내부는 딥 에메랄드 인테리어와 크리스탈 샹들리에로 꾸며져 있으며, 넉넉한 인원 수용이 가능한 구조로 다양한 모임에 잘 어울립니다. 또한 픽업 서비스와 예약 전용 상담을 통해 처음 방문하는 고객도 부담 없이 이용할 수 있습니다." }),
f.jsxs("a",{"data-loc":"client/src/pages/Home.tsx:1793",href:`tel:${ql}`,className:"inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-sm transition-all duration-300",style:{background:"linear-gradient(135deg, #8b6914, #c9a84c, #f5e27a)",color:"#050a18",letterSpacing:"0.05em"},children:[f.jsx(pl,{"data-loc":"client/src/pages/Home.tsx:1802",size:16 }),
"지금 바로 전화예약"]})]})})]})]})}
function i2(){const[s,c]=z.useState(!1),r=()=>{navigator.clipboard.writeText(iu),c(!0),setTimeout(()=>c(!1),2e3) };
return f.jsx("section",{"data-loc":"client/src/pages/Home.tsx:1823",id:"location",className:"py-24",style:{background:"linear-gradient(180deg, #030f0a 0%, #030e09 100%)"},children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1824",className:"container mx-auto px-4 lg:px-8",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1825",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1826",className:"text-center mb-16",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:1827",className:"section-label mb-3",children:"LOCATION" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1828",className:"divider-gold" }),
f.jsx("h2",{"data-loc":"client/src/pages/Home.tsx:1829",className:"text-3xl lg:text-5xl font-black mt-4",style:{fontFamily:"Noto Serif KR, serif",color:"#f5e27a"},children:"오시는 길"})]}) }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1838",className:"grid lg:grid-cols-2 gap-8 items-start",children:[f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1840",children:f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1841",className:"rounded overflow-hidden",style:{border:"1px solid rgba(201,168,76,0.3)",aspectRatio:"4/3"},children:f.jsx("iframe",{"data-loc":"client/src/pages/Home.tsx:1845",src:"https://maps.google.com/maps?q=서울특별시+서초구+잠원동+18-8&t=&z=17&ie=UTF8&iwloc=&output=embed",width:"100%",height:"100%",style:{border:0,filter:"invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)"},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"유앤미 위치"})}) }),
f.jsx(yt,{"data-loc":"client/src/pages/Home.tsx:1859",delay:150,children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1860",className:"space-y-5",children:[[{icon:f.jsx(Ig,{"data-loc":"client/src/pages/Home.tsx:1863",size:18,style:{color:"#c9a84c"} }),
label:"주소",value:iu,action:f.jsxs("button",{"data-loc":"client/src/pages/Home.tsx:1867",onClick:r,className:"flex items-center gap-1 text-xs px-3 py-1 rounded mt-2 transition-all",style:{background:"rgba(201,168,76,0.1)",color:"#c9a84c",border:"1px solid rgba(201,168,76,0.3)"},children:[f.jsx(cb,{"data-loc":"client/src/pages/Home.tsx:1872",size:11 }),
s?"복사됨!":"주소 복사"]})},{icon:f.jsx(pl,{"data-loc":"client/src/pages/Home.tsx:1878",size:18,style:{color:"#c9a84c"} }),
label:"예약 전화",value:"",action:f.jsxs("a",{"data-loc":"client/src/pages/Home.tsx:1882",href:`tel:${ql}`,className:"flex items-center gap-1 text-xs px-3 py-1 rounded mt-2 transition-all",style:{background:"rgba(201,168,76,0.1)",color:"#c9a84c",border:"1px solid rgba(201,168,76,0.3)"},children:[f.jsx(pl,{"data-loc":"client/src/pages/Home.tsx:1887",size:11 }),
"전화 연결"]})},{icon:f.jsx(xu,{"data-loc":"client/src/pages/Home.tsx:1893",size:18,style:{color:"#c9a84c"} }),
label:"영업시간",value:"매일 24시간 연중무휴",sub:"365일 운영"}].map((o,d)=>f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1899",className:"flex gap-4 p-5 rounded",style:{background:"rgba(3, 18, 10, 0.85)",border:"1px solid rgba(201,168,76,0.2)"},children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1904",className:"flex-shrink-0 mt-0.5",children:o.icon }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1905",children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1906",className:"text-xs mb-1",style:{color:"rgba(201,168,76,0.7)",letterSpacing:"0.1em"},children:o.label }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1909",className:"text-sm text-gray-200",children:o.value }),
o.sub&&f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1910",className:"text-xs text-gray-500 mt-0.5",children:o.sub }),
o.action]})]},d)),f.jsxs("a",{"data-loc":"client/src/pages/Home.tsx:1916",href:"https://gangnamroomlist.com/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-4 rounded font-bold text-sm transition-all duration-300",style:{background:"linear-gradient(135deg, #8b6914 0%, #c9a84c 30%, #f5e27a 50%, #c9a84c 70%, #8b6914 100%)",color:"#050a18",letterSpacing:"0.05em",boxShadow:"0 4px 20px rgba(201,168,76,0.3)"},children:[f.jsx(Pg,{"data-loc":"client/src/pages/Home.tsx:1928",size:16 }),
"강남룸리스트 바로가기"]})]})})]})]})})}
function c2(){return f.jsx("footer",{"data-loc":"client/src/pages/Home.tsx:1942",className:"py-12 border-t",style:{background:"#030e09",borderColor:"rgba(201,168,76,0.2)"},children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1946",className:"container mx-auto px-4 lg:px-8",children:[f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1947",className:"flex flex-col lg:flex-row items-center justify-between gap-6",children:[f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1948",className:"flex items-center gap-4",children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1949",className:"w-10 h-10 rounded-full flex items-center justify-center text-sm font-black",style:{background:"linear-gradient(135deg, #8b6914, #c9a84c, #f5e27a)",color:"#050a18"},children:"Y" }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1955",children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1956",className:"text-sm font-black",style:{color:"#c9a84c",fontFamily:"Playfair Display, serif",letterSpacing:"0.15em"},children:"YouAndMe" }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1962",className:"text-xs text-gray-500",children:"강남룸 · 강남가라오케 · 강남하이퍼블릭 · 강남하퍼 · 강남쩜오 · 강남노래방"})]})] }),
f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1966",className:"text-center lg:text-right space-y-1",children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1967",className:"text-xs text-gray-400",children:iu }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1968",className:"text-xs text-gray-400",children:"영업시간: 매일 24시간 연중무휴 · 연중무휴"})]})] }),
f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1972",className:"mt-8 pt-6 text-center text-xs text-gray-600 border-t",style:{borderColor:"rgba(201,168,76,0.1)"},children:"© 2025 YouAndMe. All rights reserved."})]})})}
function o2(){return f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:1986",className:"fixed bottom-6 left-0 right-0 mx-4 sm:mx-auto sm:max-w-sm z-40 flex flex-col items-center gap-1",children:[f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:1987",className:"text-xs font-bold px-3 py-1 rounded-full",style:{background:"rgba(3, 15, 8, 0.95)",color:"#f5e27a",border:"1px solid rgba(201,168,76,0.5)",letterSpacing:"0.1em",fontFamily:"Noto Serif KR, serif"},children:"김태희 대표" }),
f.jsxs("a",{"data-loc":"client/src/pages/Home.tsx:1999",href:`tel:${ql}`,className:"w-full flex items-center justify-center gap-2 py-4 rounded font-bold text-sm transition-all duration-300",style:{background:"linear-gradient(135deg, #8b6914 0%, #c9a84c 30%, #f5e27a 50%, #c9a84c 70%, #8b6914 100%)",color:"#050a18",letterSpacing:"0.05em",boxShadow:"0 4px 30px rgba(201,168,76,0.5)"},children:[f.jsx(pl,{"data-loc":"client/src/pages/Home.tsx:2009",size:16 }),
"예약 전화"]})]})}
function r2(){return f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:2018",className:"min-h-screen",style:{background:"#030f0a"},children:[f.jsx(Zb,{"data-loc":"client/src/pages/Home.tsx:2019" }),
f.jsx(Qb,{"data-loc":"client/src/pages/Home.tsx:2020" }),
f.jsx(Kb,{"data-loc":"client/src/pages/Home.tsx:2021" }),
f.jsx(Jb,{"data-loc":"client/src/pages/Home.tsx:2022" }),
f.jsx(Wb,{"data-loc":"client/src/pages/Home.tsx:2023" }),
f.jsx(Fb,{"data-loc":"client/src/pages/Home.tsx:2024" }),
f.jsx($b,{"data-loc":"client/src/pages/Home.tsx:2025" }),
f.jsx(Pb,{"data-loc":"client/src/pages/Home.tsx:2026" }),
f.jsx(Ib,{"data-loc":"client/src/pages/Home.tsx:2027" }),
f.jsx(t2,{"data-loc":"client/src/pages/Home.tsx:2028" }),
f.jsx(e2,{"data-loc":"client/src/pages/Home.tsx:2029" }),
f.jsx(l2,{"data-loc":"client/src/pages/Home.tsx:2030" }),
f.jsx(n2,{"data-loc":"client/src/pages/Home.tsx:2031" }),
f.jsx(s2,{"data-loc":"client/src/pages/Home.tsx:2032" }),
f.jsx(a2,{"data-loc":"client/src/pages/Home.tsx:2033" }),
f.jsx(i2,{"data-loc":"client/src/pages/Home.tsx:2034" }),
f.jsx(c2,{"data-loc":"client/src/pages/Home.tsx:2035" }),
f.jsx("section",{"data-loc":"client/src/pages/Home.tsx:2037",className:"py-8 px-4",style:{background:"#020c05",borderTop:"1px solid rgba(201,168,76,0.08)"},children:f.jsx("div",{"data-loc":"client/src/pages/Home.tsx:2041",className:"max-w-4xl mx-auto",children:f.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:2042",className:"space-y-3 text-center",children:[f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:2043",className:"text-xs leading-relaxed",style:{color:"rgba(201,168,76,0.35)",letterSpacing:"0.03em"},children:"강남 룸·가라오케·노래방 프라이빗 가이드 · 강남 가라오케·노래방 정보 플랫폼 · 강남 엔터테인먼트·노래방 공간 안내 · 강남 프리미엄 노래방 아카이브" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:2046",className:"text-xs leading-relaxed",style:{color:"rgba(201,168,76,0.28)",letterSpacing:"0.03em"},children:"강남 라운지·가라오케·노래방 큐레이션 · 강남 프라이빗 공간 정보 서비스 · 강남 인기 노래방·노래방 안내" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:2049",className:"text-xs leading-relaxed",style:{color:"rgba(201,168,76,0.22)",letterSpacing:"0.03em"},children:"강남 룸·가라오케 정보 가이드 · 강남 프리미엄 엔터테인먼트 플랫폼 · 강남 실내 라운지·노래방 정보 가이드" }),
f.jsx("p",{"data-loc":"client/src/pages/Home.tsx:2052",className:"text-xs",style:{color:"rgba(201,168,76,0.18)",letterSpacing:"0.05em"},children:"강남룸 · 강남룸 · 강남가라오케 · 강남하이퍼블릭 · 강남하퍼 · 강남룸 · 강남 프라이빗 공간 정보 안내"})]})}) }),
f.jsx(o2,{"data-loc":"client/src/pages/Home.tsx:2058"})]})}
function u2(){return f.jsxs(Ub,{"data-loc":"client/src/App.tsx:11",children:[f.jsx(Wr,{"data-loc":"client/src/App.tsx:12",path:"/",component:r2 }),
f.jsx(Wr,{"data-loc":"client/src/App.tsx:13",path:"/404",component:P0 }),
f.jsx(Wr,{"data-loc":"client/src/App.tsx:14",component:P0})]})}
function f2(){return f.jsx(Bb,{"data-loc":"client/src/App.tsx:21",children:f.jsx(Vb,{"data-loc":"client/src/App.tsx:22",defaultTheme:"dark",children:f.jsxs($v,{"data-loc":"client/src/App.tsx:23",children:[f.jsx(oy,{"data-loc":"client/src/App.tsx:24" }),
f.jsx(u2,{"data-loc":"client/src/App.tsx:25"})]})})})}Tx.createRoot(document.getElementById("root")).render(f.jsx(f2,{"data-loc":"client/src/main.tsx:5"}));
