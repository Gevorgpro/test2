function asyncGeneratorStep(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){asyncGeneratorStep(s,r,i,o,a,"next",e)}function a(e){asyncGeneratorStep(s,r,i,o,a,"throw",e)}o(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"qF1+":function(e,t,n){"use strict";n.r(t),n.d(t,"ion_nav",(function(){return d})),n.d(t,"ion_nav_link",(function(){return m})),n.d(t,"ion_nav_pop",(function(){return g})),n.d(t,"ion_nav_push",(function(){return w})),n.d(t,"ion_nav_set_root",(function(){return b}));var r=n("dSyh"),i=n("AfW+"),s=n("aiEM"),o=n("kBU6"),a=n("m9yc"),c=n("+veT"),u=n("qaSm");class l{constructor(e,t){this.component=e,this.params=t,this.state=1}init(e){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.state=2,t.element){n.next=5;break}return r=t.component,n.next=4,Object(a.a)(t.delegate,e,r,["ion-page","ion-page-invisible"],t.params);case 4:t.element=n.sent;case 5:case"end":return n.stop()}}),n)})))()}_destroy(){Object(s.b)(3!==this.state,"view state must be ATTACHED");const e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}const h=(e,t,n)=>{if(!e)return!1;if(e.component!==t)return!1;const r=e.params;if(r===n)return!0;if(!r&&!n)return!0;if(!r||!n)return!1;const i=Object.keys(r),s=Object.keys(n);if(i.length!==s.length)return!1;for(var o=0,a=i;o<a.length;o++){const e=a[o];if(r[e]!==n[e])return!1}return!0},v=(e,t)=>e?e instanceof l?e:new l(e,t):null,d=class{constructor(e){Object(r.l)(this,e),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=Object(r.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(r.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(r.d)(this,"ionNavDidChange",3)}swipeGestureChanged(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=Object(r.e)(this);this.swipeGesture=i.b.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}componentDidLoad(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.rootChanged(),t.next=3,n.e(3).then(n.bind(null,"0yHn"));case 3:t.t0=e.el,t.t1=e.canStart.bind(e),t.t2=e.onStart.bind(e),t.t3=e.onMove.bind(e),t.t4=e.onEnd.bind(e),e.gesture=t.sent.createSwipeBackGesture(t.t0,t.t1,t.t2,t.t3,t.t4),e.swipeGestureChanged();case 10:case"end":return t.stop()}}),t)})))()}componentDidUnload(){var e=!0,t=!1,n=void 0;try{for(var r,i=this.views[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){const e=r.value;Object(c.c)(e.element,o.e),e._destroy()}}catch(s){t=!0,n=s}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(e,t,n,r){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},r)}insert(e,t,n,r,i){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:r},i)}insertPages(e,t,n,r){return this.queueTrns({insertStart:e,insertViews:t,opts:n},r)}pop(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}popTo(e,t,n){const r={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(r.removeView=e,r.removeStart=1):"number"==typeof e&&(r.removeStart=e+1),this.queueTrns(r,n)}popToRoot(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}removeIndex(e,t=1,n,r){return this.queueTrns({removeStart:e,removeCount:t,opts:n},r)}setRoot(e,t,n,r){return this.setPages([{page:e,params:t}],n,r)}setPages(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}setRouteId(e,t,n){const r=this.getActiveSync();if(h(r,e,t))return Promise.resolve({changed:!1,element:r.element});let i;const s=new Promise(e=>i=e);let o;const a={updateURL:!1,viewIsReady:e=>{let t;const n=new Promise(e=>t=e);return i({changed:!0,element:e,markVisible:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,o;case 3:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})}),n;var r}};if("root"===n)o=this.setRoot(e,t,a);else{const r=this.views.find(n=>h(n,e,t));r?o=this.popTo(r,Object.assign(Object.assign({},a),{direction:"back"})):"forward"===n?o=this.push(e,t,a):"back"===n&&(o=this.setRoot(e,t,Object.assign(Object.assign({},a),{direction:"back",animated:!0})))}return s}getRouteId(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.getActiveSync(),t.abrupt("return",n?{id:n.element.tagName,params:n.params,element:n.element}:void 0);case 2:case"end":return t.stop()}}),t)})))()}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(e){return Promise.resolve(this.views[e])}canGoBack(e){return Promise.resolve(this.canGoBackSync(e))}getPrevious(e){return Promise.resolve(this.getPreviousSync(e))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}queueTrns(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);const n=new Promise((t,n)=>{e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");t&&t.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}runTransition(e){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function n(){var r,i,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t.ionNavWillChange.emit(),t.isTransitioning=!0,t.prepareTI(e),r=t.getActiveSync(),i=t.getEnteringView(e,r),r||i){n.next=5;break}throw new Error("no views in the stack to be removed");case 5:if(n.t0=i&&1===i.state,!n.t0){n.next=9;break}return n.next=9,i.init(t.el);case 9:if(t.postViewInit(i,r,e),!e.enteringRequiresTransition&&!e.leavingRequiresTransition||i===r){n.next=16;break}return n.next=13,t.transition(i,r,e);case 13:n.t1=n.sent,n.next=17;break;case 16:n.t1={hasCompleted:!0,requiresTransition:!1};case 17:s=n.t1,t.success(s,e),t.ionNavDidChange.emit(),n.next=24;break;case 21:n.prev=21,n.t2=n.catch(0),t.failed(n.t2,e);case 24:t.isTransitioning=!1,t.nextTrns();case 25:case"end":return n.stop()}}),n,null,[[0,21]])})))()}prepareTI(e){const t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(s.b)(void 0!==e.removeStart,"removeView needs removeStart"),Object(s.b)(void 0!==e.removeCount,"removeView needs removeCount");const t=this.views.indexOf(e.removeView);if(t<0)throw new Error("removeView was not found");e.removeStart+=t}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);const n=e.insertViews;if(!n)return;Object(s.b)(n.length>0,"length can not be zero");const r=n.map(e=>e instanceof l?e:"page"in e?v(e.page,e.params):v(e,void 0)).filter(e=>null!==e);if(0===r.length)throw new Error("invalid views to insert");var i=!0,o=!1,a=void 0;try{for(var c,u=r[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){const t=c.value;t.delegate=e.opts.delegate;const n=t.nav;if(n&&n!==this)throw new Error("inserted view was already inserted");if(3===t.state)throw new Error("inserted view was already destroyed")}}catch(h){o=!0,a=h}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}e.insertViews=r}getEnteringView(e,t){const n=e.insertViews;if(void 0!==n)return n[n.length-1];const r=e.removeStart;if(void 0!==r){const n=this.views,i=r+e.removeCount;for(let e=n.length-1;e>=0;e--){const s=n[e];if((e<r||e>=i)&&s!==t)return s}}}postViewInit(e,t,n){Object(s.b)(t||e,"Both leavingView and enteringView are null"),Object(s.b)(n.resolve,"resolve must be valid"),Object(s.b)(n.reject,"reject must be valid");const r=n.opts,i=n.insertViews,a=n.removeStart,u=n.removeCount;let l;if(void 0!==a&&void 0!==u){Object(s.b)(a>=0,"removeStart can not be negative"),Object(s.b)(u>=0,"removeCount can not be negative"),l=[];for(let n=0;n<u;n++){const r=this.views[n+a];r&&r!==e&&r!==t&&l.push(r)}r.direction=r.direction||"back"}const h=this.views.length+(void 0!==i?i.length:0)-(void 0!==u?u:0);if(Object(s.b)(h>=0,"final balance can not be negative"),0===h)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(i){let e=n.insertStart;var v=!0,d=!1,p=void 0;try{for(var m,g=i[Symbol.iterator]();!(v=(m=g.next()).done);v=!0){const t=m.value;this.insertViewAt(t,e),e++}}catch(R){d=!0,p=R}finally{try{v||null==g.return||g.return()}finally{if(d)throw p}}n.enteringRequiresTransition&&(r.direction=r.direction||"forward")}if(l&&l.length>0){var w=!0,b=!1,f=void 0;try{for(var y,S=l[Symbol.iterator]();!(w=(y=S.next()).done);w=!0){const e=y.value;Object(c.c)(e.element,o.c),Object(c.c)(e.element,o.d),Object(c.c)(e.element,o.e)}}catch(R){b=!0,f=R}finally{try{w||null==S.return||S.return()}finally{if(b)throw f}}var j=!0,k=!1,O=void 0;try{for(var C,T=l[Symbol.iterator]();!(j=(C=T.next()).done);j=!0){const e=C.value;this.destroyView(e)}}catch(R){k=!0,O=R}finally{try{j||null==T.return||T.return()}finally{if(k)throw O}}}}transition(e,t,n){var s=this;return _asyncToGenerator(regeneratorRuntime.mark((function o(){var a,u,l,h,v,d,p,m;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return a=n.opts,u=a.progressAnimation?e=>s.sbAni=e:void 0,l=Object(r.e)(s),h=e.element,v=t&&t.element,d=Object.assign({mode:l,showGoBack:s.canGoBackSync(e),baseEl:s.el,animationBuilder:s.animation||a.animationBuilder||i.b.get("navAnimation"),progressCallback:u,animated:s.animated&&i.b.getBoolean("animated",!0),enteringEl:h,leavingEl:v},a),o.next=8,Object(c.e)(d);case 8:return p=o.sent,m=p.hasCompleted,o.abrupt("return",s.transitionFinish(m,e,t,a));case 11:case"end":return o.stop()}}),o)})))()}transitionFinish(e,t,n,r){const i=e?t:n;return i&&this.cleanup(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:r.direction}}insertViewAt(e,t){const n=this.views,r=n.indexOf(e);r>-1?(Object(s.b)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(r,1)[0])):(Object(s.b)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}removeView(e){Object(s.b)(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,n=t.indexOf(e);Object(s.b)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}destroyView(e){e._destroy(),this.removeView(e)}cleanup(e){if(this.destroyed)return;const t=this.views,n=t.indexOf(e);for(let r=t.length-1;r>=0;r--){const e=t[r],i=e.element;r>n?(Object(c.c)(i,o.e),this.destroyView(e)):r<n&&Object(c.d)(i,!0)}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,n){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let r=e?-.001:.001;e?r+=Object(u.b)(new u.a(0,0),new u.a(.32,.72),new u.a(0,1),new u.a(1,1),t):(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=Object(u.b)(new u.a(0,0),new u.a(1,0),new u.a(.68,.28),new u.a(1,1),t)),this.sbAni.progressEnd(e?1:0,r,n)}}render(){return Object(r.i)("slot",null)}get el(){return Object(r.f)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}},p=(e,t,n,r)=>{const i=e.closest("ion-nav");if(i)if("forward"===t){if(void 0!==n)return i.push(n,r,{skipIfBusy:!0})}else if("root"===t){if(void 0!==n)return i.setRoot(n,r,{skipIfBusy:!0})}else if("back"===t)return i.pop({skipIfBusy:!0});return Promise.resolve(!1)},m=class{constructor(e){Object(r.l)(this,e),this.routerDirection="forward",this.onClick=()=>p(this.el,this.routerDirection,this.component,this.componentProps)}render(){return Object(r.i)(r.a,{onClick:this.onClick})}get el(){return Object(r.f)(this)}},g=class{constructor(e){Object(r.l)(this,e),this.pop=()=>p(this.el,"back")}componentDidLoad(){console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.')}render(){return Object(r.i)(r.a,{onClick:this.pop})}get el(){return Object(r.f)(this)}},w=class{constructor(e){Object(r.l)(this,e),this.push=()=>p(this.el,"forward",this.component,this.componentProps)}componentDidLoad(){console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.')}render(){return Object(r.i)(r.a,{onClick:this.push})}get el(){return Object(r.f)(this)}},b=class{constructor(e){Object(r.l)(this,e),this.setRoot=()=>p(this.el,"root",this.component,this.componentProps)}componentDidLoad(){console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.')}render(){return Object(r.i)(r.a,{onClick:this.setRoot})}get el(){return Object(r.f)(this)}}}}]);