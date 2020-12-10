function asyncGeneratorStep(i,n,e,t,o,a,s){try{var r=i[a](s),c=r.value}catch(d){return void e(d)}r.done?n(c):Promise.resolve(c).then(t,o)}function _asyncToGenerator(i){return function(){var n=this,e=arguments;return new Promise((function(t,o){var a=i.apply(n,e);function s(i){asyncGeneratorStep(a,t,o,s,r,"next",i)}function r(i){asyncGeneratorStep(a,t,o,s,r,"throw",i)}s(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{J3Yu:function(i,n,e){"use strict";e.r(n),e.d(n,"ion_loading",(function(){return m}));var t=e("dSyh"),o=e("AfW+"),a=(e("aiEM"),e("+4pY")),s=e("pori"),r=e("Dl6n"),c=e("YtD4");const d=i=>{const n=Object(a.a)(),e=Object(a.a)(),t=Object(a.a)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.3),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,t])},l=i=>{const n=Object(a.a)(),e=Object(a.a)(),t=Object(a.a)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.3,0),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,t])},p=i=>{const n=Object(a.a)(),e=Object(a.a)(),t=Object(a.a)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,t])},g=i=>{const n=Object(a.a)(),e=Object(a.a)(),t=Object(a.a)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.32,0),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),n.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,t])},m=class{constructor(i){Object(t.l)(this,i),this.presented=!1,this.mode=Object(t.e)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,s.a)},Object(s.e)(this.el),this.didPresent=Object(t.d)(this,"ionLoadingDidPresent",7),this.willPresent=Object(t.d)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(t.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(t.d)(this,"ionLoadingDidDismiss",7)}componentWillLoad(){if(void 0===this.spinner){const i=Object(t.e)(this);this.spinner=o.b.get("loadingSpinner",o.b.get("spinner","ios"===i?"lines":"crescent"))}}present(){var i=this;return _asyncToGenerator(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(s.f)(i,"loadingEnter",d,p,void 0);case 2:i.duration>0&&(i.durationTimeout=setTimeout(()=>i.dismiss(),i.duration+10));case 3:case"end":return n.stop()}}),n)})))()}dismiss(i,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(s.g)(this,i,n,"loadingLeave",l,g)}onDidDismiss(){return Object(s.h)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return Object(s.h)(this.el,"ionLoadingWillDismiss")}render(){const i=this.message,n=this.spinner,e=Object(t.e)(this);return Object(t.i)(t.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:"".concat(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(r.b)(this.cssClass)),{[e]:!0,"loading-translucent":this.translucent})},Object(t.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(t.i)("div",{class:"loading-wrapper",role:"dialog"},n&&Object(t.i)("div",{class:"loading-spinner"},Object(t.i)("ion-spinner",{name:n})),i&&Object(t.i)("div",{class:"loading-content",innerHTML:Object(c.a)(i)})))}get el(){return Object(t.f)(this)}static get style(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}}}]);