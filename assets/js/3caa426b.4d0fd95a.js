/*! For license information please see 3caa426b.4d0fd95a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[318214],{73778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(824246),o=n(511151);const i={id:"plugin-notifications-node.notificationprocessor",title:"NotificationProcessor",description:"API reference for NotificationProcessor"},s=void 0,c={id:"reference/plugin-notifications-node.notificationprocessor",title:"NotificationProcessor",description:"API reference for NotificationProcessor",source:"@site/../docs/reference/plugin-notifications-node.notificationprocessor.md",sourceDirName:"reference",slug:"/reference/plugin-notifications-node.notificationprocessor",permalink:"/docs/reference/plugin-notifications-node.notificationprocessor",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-notifications-node.notificationprocessor.md",tags:[],version:"current",frontMatter:{id:"plugin-notifications-node.notificationprocessor",title:"NotificationProcessor",description:"API reference for NotificationProcessor"}},a={},u=[{value:"Methods",id:"methods",level:2}];function f(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-notifications-node",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-notifications-node"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-notifications-node.notificationprocessor",children:(0,r.jsx)(t.code,{children:"NotificationProcessor"})})]}),"\n",(0,r.jsx)(t.p,{children:"Notification processors are used to modify the notification parameters or sending the notifications to external systems."}),"\n",(0,r.jsxs)(t.p,{children:["Notification modules should utilize the ",(0,r.jsx)(t.code,{children:"notificationsProcessingExtensionPoint"})," to add new processors to the system."]}),"\n",(0,r.jsx)(t.p,{children:"Notification processing flow:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"New notification send request is received 2. For all notification processors registered, processOptions function is called to process the notification options 3. Notification recipients are resolved from the options 4. For each recipient, preProcess function is called to pre-process the notification 5. Notification is saved to the database and sent to the Backstage UI 6. For each recipient, postProcess function is called to post-process the notification"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface NotificationProcessor \n"})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-notifications-node.notificationprocessor.getname",children:"getName()"})}),(0,r.jsx)(t.td,{children:"Human-readable name of this processor like Email, Slack, etc."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-notifications-node.notificationprocessor.postprocess",children:"postProcess(notification, options)?"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Post process notification after sending it to Backstage UI."]}),(0,r.jsx)(t.p,{children:"Can be used to send the notification to external services."}),(0,r.jsx)(t.p,{children:"postProcess functions are called for each notification recipient individually or once for broadcast notification AFTER the notification has been sent to the Backstage UI."})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-notifications-node.notificationprocessor.preprocess",children:"preProcess(notification, options)?"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Pre-process notification before sending it to Backstage UI."]}),(0,r.jsx)(t.p,{children:"Can be used to send the notification to external services or to decorate the notification with additional information. The notification is saved to database and sent to Backstage UI after all pre-process functions have run. The notification options passed here are already processed by processOptions functionality."}),(0,r.jsx)(t.p,{children:"preProcess functions are called for each notification recipient individually or once for broadcast notification BEFORE the notification has been sent to the Backstage UI."})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-notifications-node.notificationprocessor.processoptions",children:"processOptions(options)?"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Process the notification options."]}),(0,r.jsx)(t.p,{children:"Can be used to override the default recipient resolving, sending the notification to an external service or modify other notification options necessary."}),(0,r.jsx)(t.p,{children:"processOptions functions are called only once for each notification before the recipient resolving, pre-process, sending and post-process of the notification."})]})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,f=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(f=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:f,props:i,_owner:c.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function x(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function j(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=x.prototype;var v=b.prototype=new j;v.constructor=b,y(v,x.prototype),v.isPureReactComponent=!0;var _=Array.isArray,g=Object.prototype.hasOwnProperty,k={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,i={},s=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)g.call(t,o)&&!P.hasOwnProperty(o)&&(i[o]=t[o]);var a=arguments.length-2;if(1===a)i.children=r;else if(1<a){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===i[o]&&(i[o]=a[o]);return{$$typeof:n,type:e,key:s,ref:c,props:i,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,i,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case n:case r:a=!0}}if(a)return s=s(a=e),e=""===i?"."+C(a,0):i,_(s)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),O(s,t,o,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),t.push(s)),1;if(a=0,i=""===i?".":i+":",_(e))for(var u=0;u<e.length;u++){var f=i+C(c=e[u],u);a+=O(c,t,o,f,s)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(c=e.next()).done;)a+=O(c=c.value,t,o,f=i+C(c,u++),s);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function R(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},I={transition:null},U={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=o,t.Profiler=s,t.PureComponent=b,t.StrictMode=i,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)g.call(t,u)&&!P.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==a?a[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){a=Array(u);for(var f=0;f<u;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(667294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);