function asyncGeneratorStep(e,o,t,r,i,n,s){try{var a=e[n](s),p=a.value}catch(c){return void t(c)}a.done?o(p):Promise.resolve(p).then(r,i)}function _asyncToGenerator(e){return function(){var o=this,t=arguments;return new Promise((function(r,i){var n=e.apply(o,t);function s(e){asyncGeneratorStep(n,r,i,s,a,"next",e)}function a(e){asyncGeneratorStep(n,r,i,s,a,"throw",e)}s(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{Gdks:function(e,o,t){"use strict";t.r(o),t.d(o,"ion_popover",(function(){return v}));var r=t("dSyh"),i=(t("AfW+"),t("aiEM"),t("+4pY")),n=(t("kBU6"),t("pori")),s=t("Dl6n"),a=t("m9yc"),p=t("+veT");const c=(e,o)=>{let t="top",r="left";const n=e.querySelector(".popover-content"),s=n.getBoundingClientRect(),a=s.width,p=s.height,c=e.ownerDocument.defaultView.innerWidth,d=e.ownerDocument.defaultView.innerHeight,u=o&&o.target&&o.target.getBoundingClientRect(),h=null!=u&&"top"in u?u.top:d/2-p/2,v=null!=u&&"left"in u?u.left:c/2,b=u&&u.width||0,m=u&&u.height||0,f=e.querySelector(".popover-arrow"),w=f.getBoundingClientRect(),g=w.width,x=w.height;null==u&&(f.style.display="none");const y={top:h+m,left:v+b/2-g/2},j={top:h+m+(x-1),left:v+b/2-a/2};let O=!1,k=!1;j.left<l+25?(O=!0,j.left=l):a+l+j.left+25>c&&(k=!0,j.left=c-a-l,r="right"),h+m+p>d&&h-p>0?(y.top=h-(x+1),j.top=h-p-(x-1),e.className=e.className+" popover-bottom",t="bottom"):h+m+p>d&&(n.style.bottom=l+"%"),f.style.top=y.top+"px",f.style.left=y.left+"px",n.style.top=j.top+"px",n.style.left=j.left+"px",O&&(n.style.left="calc(".concat(j.left,"px + var(--ion-safe-area-left, 0px))")),k&&(n.style.left="calc(".concat(j.left,"px - var(--ion-safe-area-right, 0px))")),n.style.transformOrigin=t+" "+r;const D=Object(i.a)(),P=Object(i.a)(),E=Object(i.a)();return P.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(e).easing("ease").duration(100).addAnimation([P,E])},l=5,d=e=>{const o=Object(i.a)(),t=Object(i.a)(),r=Object(i.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,r])},u=(e,o)=>{const t=e.ownerDocument,r="rtl"===t.dir;let n="top",s=r?"right":"left";const a=e.querySelector(".popover-content"),p=a.getBoundingClientRect(),c=p.width,l=p.height,d=t.defaultView.innerWidth,u=t.defaultView.innerHeight,h=o&&o.target&&o.target.getBoundingClientRect(),v=null!=h&&"bottom"in h?h.bottom:u/2-l/2,b=h&&h.height||0,m={top:v,left:null!=h&&"left"in h?r?h.left-c+h.width:h.left:d/2-c/2};m.left<12?(m.left=12,s="left"):c+12+m.left>d&&(m.left=d-c-12,s="right"),v+b+l>u&&v-l>0?(m.top=v-l-b,e.className=e.className+" popover-bottom",n="bottom"):v+b+l>u&&(a.style.bottom="12px");const f=Object(i.a)(),w=Object(i.a)(),g=Object(i.a)(),x=Object(i.a)(),y=Object(i.a)();return w.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),g.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),x.addElement(a).beforeStyles({top:"".concat(m.top,"px"),left:"".concat(m.left,"px"),"transform-origin":"".concat(n," ").concat(s)}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),f.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,g,x,y])},h=e=>{const o=Object(i.a)(),t=Object(i.a)(),r=Object(i.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,r])},v=class{constructor(e){Object(r.l)(this,e),this.presented=!1,this.mode=Object(r.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,n.a)},this.onLifecycle=e=>{const o=this.usersElement,t=b[e.type];if(o&&t){const r=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(r)}},Object(n.e)(this.el),this.didPresent=Object(r.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionPopoverDidDismiss",7)}present(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function o(){var t,r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!e.presented){o.next=2;break}return o.abrupt("return");case 2:if(t=e.el.querySelector(".popover-content")){o.next=5;break}throw new Error("container is undefined");case 5:return r=Object.assign(Object.assign({},e.componentProps),{popover:e.el}),o.next=8,Object(a.a)(e.delegate,t,e.component,["popover-viewport",e.el["s-sc"]],r);case 8:return e.usersElement=o.sent,o.next=11,Object(p.a)(e.usersElement);case 11:return o.abrupt("return",Object(n.f)(e,"popoverEnter",c,u,e.event));case 12:case"end":return o.stop()}}),o)})))()}dismiss(e,o){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(n.g)(t,e,o,"popoverLeave",d,h,t.event);case 2:if(i=r.sent,r.t0=i,!r.t0){r.next=7;break}return r.next=7,Object(a.b)(t.delegate,t.usersElement);case 7:return r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}onDidDismiss(){return Object(n.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return Object(n.h)(this.el,"ionPopoverWillDismiss")}render(){const e=Object(r.e)(this),o=this.onLifecycle;return Object(r.i)(r.a,{"aria-modal":"true","no-router":!0,style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(s.b)(this.cssClass)),{[e]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:o,onIonPopoverWillPresent:o,onIonPopoverWillDismiss:o,onIonPopoverDidDismiss:o,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.i)("div",{class:"popover-wrapper"},Object(r.i)("div",{class:"popover-arrow"}),Object(r.i)("div",{class:"popover-content"})))}get el(){return Object(r.f)(this)}static get style(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}'}},b={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);