(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+kZL":function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t("ZZ/e"),t("CFL1");class e{constructor(n,l){this.userService=n,this.modalController=l,this.editorMsg="",this.user={}}ngOnInit(){this.userService.currentUser.subscribe(n=>{this.user=n});let n=this;setTimeout(()=>{n.myInput.setFocus()},1e3)}textChange(){console.log("ionViewDidLoad IceBreakerPage")}send(){this.userService.updateCurrentUser({starPoints:this.user.starPoints-1}),this.modalController.dismiss({status:!0,message:this.editorMsg})}close(){this.modalController.dismiss({status:!1})}}},"+veT":function(n,l,t){"use strict";t.d(l,"a",(function(){return C})),t.d(l,"b",(function(){return M})),t.d(l,"c",(function(){return m})),t.d(l,"d",(function(){return v})),t.d(l,"e",(function(){return i}));var e=t("dSyh"),o=t("kBU6");const i=n=>new Promise((l,t)=>{Object(e.m)(()=>{r(n),u(n).then(t=>{t.animation&&t.animation.destroy(),a(n),l(t)},l=>{a(n),t(l)})})}),r=n=>{const l=n.enteringEl,t=n.leavingEl;w(l,t,n.direction),n.showGoBack?l.classList.add("can-go-back"):l.classList.remove("can-go-back"),v(l,!1),t&&v(t,!1)},u=async n=>{const l=await c(n);return l?s(l,n):d(n)},a=n=>{const l=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==l&&l.classList.remove("ion-page-invisible")},c=async n=>{if(n.leavingEl&&n.animated&&0!==n.duration)return n.animationBuilder?n.animationBuilder:"ios"===n.mode?(await t.e(111).then(t.bind(null,"Lu00"))).iosTransitionAnimation:(await t.e(112).then(t.bind(null,"wxTh"))).mdTransitionAnimation},s=async(n,l)=>{let e;await p(l,!0);try{const o=await t.e(10).then(t.bind(null,"gHMO"));e=await o.create(n,l.baseEl,l)}catch(i){e=n(l.baseEl,l)}h(l.enteringEl,l.leavingEl);const o=await b(e,l);return l.progressCallback&&l.progressCallback(void 0),o&&f(l.enteringEl,l.leavingEl),{hasCompleted:o,animation:e}},d=async n=>{const l=n.enteringEl,t=n.leavingEl;return await p(n,!1),h(l,t),f(l,t),{hasCompleted:!0}},p=async(n,l)=>{const t=(void 0!==n.deepWait?n.deepWait:l)?[C(n.enteringEl),C(n.leavingEl)]:[x(n.enteringEl),x(n.leavingEl)];await Promise.all(t),await g(n.viewIsReady,n.enteringEl)},g=async(n,l)=>{n&&await n(l)},b=(n,l)=>{const t=l.progressCallback,e=new Promise(l=>{n.onFinish(t=>{"number"==typeof t?l(1===t):void 0!==n.hasCompleted&&l(n.hasCompleted)})});return t?(n.progressStart(!0),t(n)):n.play(),e},h=(n,l)=>{m(l,o.c),m(n,o.a)},f=(n,l)=>{m(n,o.b),m(l,o.d)},m=(n,l)=>{if(n){const t=new CustomEvent(l,{bubbles:!1,cancelable:!1});n.dispatchEvent(t)}},x=n=>n&&n.componentOnReady?n.componentOnReady():Promise.resolve(),C=async n=>{const l=n;if(l){if(null!=l.componentOnReady&&null!=await l.componentOnReady())return;await Promise.all(Array.from(l.children).map(C))}},v=(n,l)=>{l?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},w=(n,l,t)=>{void 0!==n&&(n.style.zIndex="back"===t?"99":"101"),void 0!==l&&(l.style.zIndex="100")},M=n=>n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n},"64jI":function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t("ZwNh");class e{}},B9Uo:function(n,l,t){"use strict";var e=t("8Y7J"),o=t("oBZk"),i=t("ZZ/e"),r=t("s7LF"),u=t("+kZL"),a=t("CFL1");t.d(l,"a",(function(){return p}));var c=e.Ab({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:transparent!important;--ion-background-color:transparent!important}.mymodal[_ngcontent-%COMP%]{width:80%;height:50%;margin:40% auto auto;border-radius:10px;background-color:#fff}.checkBox[_ngcontent-%COMP%]{font-size:80px;text-align:center;padding:30px 30px 0}.amount[_ngcontent-%COMP%]{text-align:center;font-size:20px;font-weight:700}.total[_ngcontent-%COMP%]{text-align:center;font-size:30px;font-weight:700;color:#000}.payment[_ngcontent-%COMP%]{text-align:center;font-size:15px;font-weight:700;padding-top:10px}.mode[_ngcontent-%COMP%]{font-weight:700;color:#000}.newSale[_ngcontent-%COMP%]{width:100px;background:#00f;margin:20px auto 0;padding:10px;text-align:center;color:#fff;border-radius:5px}.modalShown[_ngcontent-%COMP%]{background:#fff;border-radius:5px;margin:50px 20px 20px;height:80%}.pointsBox[_ngcontent-%COMP%]{background:var(--ion-color-red);color:#fff}.starPoints[_ngcontent-%COMP%]{padding:17px;font-size:17px}.images[_ngcontent-%COMP%]{position:absolute;top:10px;width:60px;background:rgba(255,255,255,.75);right:10px}.iceClose[_ngcontent-%COMP%]{width:30px;height:40px;float:left;padding:20px 25px 20px 20px}.sendButton[_ngcontent-%COMP%]{width:100%;height:100%;background:0 0;text-align:right;color:#00a8ff;font-weight:500;font-size:17px}"]],data:{}});function s(n){return e.Xb(0,[e.Tb(671088640,1,{myInput:0}),(n()(),e.Cb(1,0,null,null,34,"ion-content",[],null,null,null,o.U,o.h)),e.Bb(2,49152,null,0,i.w,[e.j,e.p,e.F],null,null),(n()(),e.Cb(3,0,null,0,32,"div",[["class","modalShown"]],null,null,null,null,null)),(n()(),e.Cb(4,0,null,null,12,"ion-item",[["class","pointsBox"],["lines","none"]],null,null,null,o.fb,o.q)),e.Bb(5,49152,null,0,i.J,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(n()(),e.Cb(6,0,null,0,1,"ion-icon",[["color","light"],["name","md-close"],["slot","start"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.close()&&e),e}),o.bb,o.o)),e.Bb(7,49152,null,0,i.E,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null),(n()(),e.Cb(8,0,null,0,1,"div",[["class","starPoints"]],null,null,null,null,null)),(n()(),e.Vb(-1,null,[" Break The Ice!"])),(n()(),e.Cb(10,0,null,0,6,"ion-chip",[["slot","end"]],null,null,null,o.S,o.f)),e.Bb(11,49152,null,0,i.u,[e.j,e.p,e.F],null,null),(n()(),e.Cb(12,0,null,0,1,"ion-icon",[["color","white"],["name","star"]],null,null,null,o.bb,o.o)),e.Bb(13,49152,null,0,i.E,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null),(n()(),e.Cb(14,0,null,0,2,"ion-label",[],null,null,null,o.gb,o.t)),e.Bb(15,49152,null,0,i.P,[e.j,e.p,e.F],null,null),(n()(),e.Vb(16,0,["",""])),(n()(),e.Cb(17,0,null,null,10,"div",[["style","background: #fff;border-bottom: 1px solid #ccc;"]],null,null,null,null,null)),(n()(),e.Cb(18,0,null,null,9,"ion-row",[],null,null,null,o.kb,o.x)),e.Bb(19,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(n()(),e.Cb(20,0,null,0,3,"ion-col",[["col",""],["col-8",""]],null,null,null,o.T,o.g)),e.Bb(21,49152,null,0,i.v,[e.j,e.p,e.F],null,null),(n()(),e.Cb(22,0,null,0,1,"div",[["style","line-height: 35px;text-align: left;padding-left: 10px;"]],null,null,null,null,null)),(n()(),e.Vb(23,null,[" ","/250 characters "])),(n()(),e.Cb(24,0,null,0,3,"ion-col",[["col",""],["col-4",""]],null,null,null,o.T,o.g)),e.Bb(25,49152,null,0,i.v,[e.j,e.p,e.F],null,null),(n()(),e.Cb(26,0,null,0,1,"button",[["class","sendButton"]],[[8,"disabled",0]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.send()&&e),e}),null,null)),(n()(),e.Vb(-1,null,["Send"])),(n()(),e.Cb(28,0,null,null,7,"div",[["style","margin-top: 10px;text-align: center;"]],null,null,null,null,null)),(n()(),e.Cb(29,0,null,null,6,"ion-textarea",[["maxLength","250"],["placeholder","Write something nice.."],["rows","10"],["style","color: #797b7e;text-align: left !important;padding: 10px;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Ob(n,30)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Ob(n,30)._handleInputEvent(t.target)&&o),"ngModelChange"===l&&(o=!1!==(i.editorMsg=t)&&o),"ngModelChange"===l&&(o=!1!==i.textChange()&&o),o}),o.wb,o.J)),e.Bb(30,16384,null,0,i.Pb,[e.p],null,null),e.Sb(1024,null,r.g,(function(n){return[n]}),[i.Pb]),e.Bb(32,671744,null,0,r.k,[[8,null],[8,null],[8,null],[6,r.g]],{model:[0,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,r.h,null,[r.k]),e.Bb(34,16384,null,0,r.i,[[4,r.h]],null,null),e.Bb(35,49152,[[1,4],["myInput",4]],0,i.Ab,[e.j,e.p,e.F],{placeholder:[0,"placeholder"],rows:[1,"rows"]},null)],(function(n,l){var t=l.component;n(l,5,0,"none"),n(l,7,0,"light","md-close"),n(l,13,0,"white","star"),n(l,32,0,t.editorMsg),n(l,35,0,"Write something nice..","10")}),(function(n,l){var t=l.component;n(l,16,0,t.user.starPoints),n(l,23,0,t.editorMsg.length),n(l,26,0,0==t.editorMsg.length),n(l,29,0,e.Ob(l,34).ngClassUntouched,e.Ob(l,34).ngClassTouched,e.Ob(l,34).ngClassPristine,e.Ob(l,34).ngClassDirty,e.Ob(l,34).ngClassValid,e.Ob(l,34).ngClassInvalid,e.Ob(l,34).ngClassPending)}))}function d(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,1,"app-send-message",[],null,null,null,s,c)),e.Bb(1,114688,null,0,u.a,[a.a,i.Jb],null,null)],(function(n,l){n(l,1,0)}),null)}var p=e.yb("app-send-message",u.a,d,{},{},[])},BwRh:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));class e{}},Dl6n:function(n,l,t){"use strict";t.d(l,"a",(function(){return o})),t.d(l,"b",(function(){return i})),t.d(l,"c",(function(){return e})),t.d(l,"d",(function(){return u}));const e=(n,l)=>null!==l.closest(n),o=n=>"string"==typeof n&&n.length>0?{"ion-color":!0,[`ion-color-${n}`]:!0}:void 0,i=n=>{const l={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(n).forEach(n=>l[n]=!0),l},r=/^[a-z][a-z0-9+\-.]*:/,u=async(n,l,t)=>{if(null!=n&&"#"!==n[0]&&!r.test(n)){const e=document.querySelector("ion-router");if(e)return null!=l&&l.preventDefault(),e.push(n,t)}return!1}},UUjY:function(n,l,t){"use strict";var e=t("8Y7J"),o=t("oBZk"),i=t("ZZ/e"),r=t("SVse"),u=t("ZwNh"),a=t("CFL1"),c=t("TONy");t.d(l,"a",(function(){return f}));var s=e.Ab({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:transparent!important;--ion-background-color:transparent!important}.mymodal[_ngcontent-%COMP%]{width:80%;height:50%;margin:40% auto auto;border-radius:10px;background-color:#fff}.checkBox[_ngcontent-%COMP%]{font-size:80px;text-align:center;padding:30px 30px 0}.amount[_ngcontent-%COMP%]{text-align:center;font-size:20px;font-weight:700}.total[_ngcontent-%COMP%]{text-align:center;font-size:30px;font-weight:700;color:#000}.payment[_ngcontent-%COMP%]{text-align:center;font-size:15px;font-weight:700;padding-top:10px}.mode[_ngcontent-%COMP%]{font-weight:700;color:#000}.newSale[_ngcontent-%COMP%]{width:100px;background:#00f;margin:20px auto 0;padding:10px;text-align:center;color:#fff;border-radius:5px}.modalShown[_ngcontent-%COMP%]{background:#fff;margin:10px 20px 20px;height:400px;border-radius:10px}.upgradeSlider[_ngcontent-%COMP%]{overflow:hidden;border-top-left-radius:10px;border-top-right-radius:10px}.swiper-container[_ngcontent-%COMP%]{border-top-left-radius:10px!important;border-top-right-radius:10px!important}ion-modal[_ngcontent-%COMP%]{background:rgba(0,0,0,.8)!important;padding:20% 10%!important}.subText[_ngcontent-%COMP%]{padding:30px 10px;color:#fff;font-size:12px}.splPp[_ngcontent-%COMP%]{width:40%;margin-top:-4em;border-radius:50%;background:#fff;border:2px solid}.splpptext[_ngcontent-%COMP%]{font-size:21px;line-height:1;background:var(--ion-color-red);width:70%;padding:10px;color:#ccc;border-radius:10px;margin-top:10px;border:2px solid #ccc}.plan[_ngcontent-%COMP%]{text-align:center;background:#f2f2f2;color:#000;border:4px solid #f2f2f2}.activeHighlight[_ngcontent-%COMP%]{border-radius:none;color:var(--ion-color-red);background:#fff;border:4px solid var(--ion-color-red)}.activeHighlight[_ngcontent-%COMP%]   .pMonth[_ngcontent-%COMP%]{font-size:10px;color:#000!important;font-weight:700}.swiper-pagination-bullet-active[_ngcontent-%COMP%]{background:var(--ion-color-red);opacity:1}.mTitle[_ngcontent-%COMP%]{font-size:22px;font-weight:700}.pMonth[_ngcontent-%COMP%]{font-size:10px;padding:5px 0}"]],data:{}});function d(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["months"]))],null,null)}function p(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["month"]))],null,null)}function g(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,12,"ion-col",[["class","plan"]],[[2,"activeHighlight",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.selectPlan(n.context.$implicit.productId)&&e),e}),o.T,o.g)),e.Bb(1,49152,null,0,i.v,[e.j,e.p,e.F],null,null),(n()(),e.Cb(2,0,null,0,1,"div",[["class","mTitle"]],null,null,null,null,null)),(n()(),e.Vb(3,null,["",""])),(n()(),e.Cb(4,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),e.rb(16777216,null,null,1,null,d)),e.Bb(6,16384,null,0,r.k,[e.X,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(16777216,null,null,1,null,p)),e.Bb(8,16384,null,0,r.k,[e.X,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.Cb(9,0,null,0,1,"div",[["class","pMonth"]],null,null,null,null,null)),(n()(),e.Vb(10,null,["$ ","/month"])),(n()(),e.Cb(11,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),e.Vb(12,null,["",""]))],(function(n,l){var t=l.component;n(l,6,0,1!=t.plans[l.context.index]),n(l,8,0,1==t.plans[l.context.index])}),(function(n,l){var t=l.component;n(l,0,0,t.checkActive(l.context.$implicit.productId)),n(l,3,0,t.plans[l.context.index]),n(l,10,0,(l.context.$implicit.priceAsDecimal/t.plans[l.context.index]).toFixed(2)),n(l,12,0,l.context.$implicit.price)}))}function b(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,25,"ion-content",[],null,null,null,o.U,o.h)),e.Bb(1,49152,null,0,i.w,[e.j,e.p,e.F],null,null),(n()(),e.Cb(2,0,null,0,3,"div",[["style","margin-top:40px;"],["text-center",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.close()&&e),e}),null,null)),e.Bb(3,16384,null,0,i.e,[e.p],null,null),(n()(),e.Cb(4,0,null,null,1,"ion-icon",[["color","light"],["name","md-close"],["style","font-size: 30px"]],null,null,null,o.bb,o.o)),e.Bb(5,49152,null,0,i.E,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null),(n()(),e.Cb(6,0,null,0,19,"div",[["class","modalShown"]],null,null,null,null,null)),(n()(),e.Cb(7,0,null,null,10,"div",[["class","upgradeSlider"]],null,null,null,null,null)),(n()(),e.Cb(8,0,null,null,9,"div",[["style",""]],null,null,null,null,null)),(n()(),e.Cb(9,0,null,null,2,"div",[["style","    color: var(--ion-color-red);\n    font-size: 50px;\n    text-align: center;\n    padding: 30px 0px 0px 0px;"]],null,null,null,null,null)),(n()(),e.Cb(10,0,null,null,1,"ion-icon",[["name","md-star"]],null,null,null,o.bb,o.o)),e.Bb(11,49152,null,0,i.E,[e.j,e.p,e.F],{name:[0,"name"]},null),(n()(),e.Cb(12,0,null,null,5,"div",[["style","margin-bottom: 20px;padding:0px 20px;"],["text-center",""]],null,null,null,null,null)),e.Bb(13,16384,null,0,i.e,[e.p],null,null),(n()(),e.Cb(14,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["More star points"])),(n()(),e.Cb(16,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["Get 10 star points everyday to send more messages and create posts."])),(n()(),e.Cb(18,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.Cb(19,0,null,null,3,"ion-row",[],null,null,null,o.kb,o.x)),e.Bb(20,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(n()(),e.rb(16777216,null,0,1,null,g)),e.Bb(22,278528,null,0,r.j,[e.X,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Cb(23,0,null,null,2,"div",[["align","center"],["style","padding-top:10px;"]],null,null,null,null,null)),(n()(),e.Cb(24,0,null,null,1,"div",[["class","splpptext"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.upgrade()&&e),e}),null,null)),(n()(),e.Vb(-1,null,["Upgrade to Pro"]))],(function(n,l){var t=l.component;n(l,5,0,"light","md-close"),n(l,11,0,"md-star"),n(l,22,0,t.products)}),null)}function h(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,1,"app-upgrade",[],null,null,null,b,s)),e.Bb(1,114688,null,0,u.a,[a.a,c.a,i.Jb],null,null)],(function(n,l){n(l,1,0)}),null)}var f=e.yb("app-upgrade",u.a,h,{},{},[])},YtD4:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));const e=n=>{try{if("string"!=typeof n||""===n)return n;const l=document.createDocumentFragment(),t=document.createElement("div");l.appendChild(t),t.innerHTML=n,u.forEach(n=>{const t=l.querySelectorAll(n);for(let e=t.length-1;e>=0;e--){const n=t[e];n.parentNode?n.parentNode.removeChild(n):l.removeChild(n);const r=i(n);for(let l=0;l<r.length;l++)o(r[l])}});const e=i(l);for(let n=0;n<e.length;n++)o(e[n]);const r=document.createElement("div");r.appendChild(l);const a=r.querySelector("div");return null!==a?a.innerHTML:r.innerHTML}catch(l){return console.error(l),""}},o=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let t=n.attributes.length-1;t>=0;t--){const l=n.attributes.item(t),e=l.name;if(!r.includes(e.toLowerCase())){n.removeAttribute(e);continue}const o=l.value;null!=o&&o.toLowerCase().includes("javascript:")&&n.removeAttribute(e)}const l=i(n);for(let t=0;t<l.length;t++)o(l[t])},i=n=>null!=n.children?n.children:n.childNodes,r=["class","id","href","src","name","slot"],u=["script","style","iframe","meta","link","object","embed"]},ZwNh:function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t("CFL1"),t("TONy"),t("ZZ/e");class e{constructor(n,l,t){this.userService=n,this.purchaseService=l,this.modalController=t,this.productId="basic_plan",this.products=[{currency:"USD",description:"Find Date Pro 12 months plan",price:"$89.00",priceAsDecimal:89,productId:"plan18_23_12m",title:"Find Date Pro 12 months plan (Find Date - Dating app)"},{currency:"USD",description:"Find Date Pro 3 months plan",price:"$24.00",priceAsDecimal:25,productId:"plan18_23_3m",title:"Find Date Pro 3 months plan (Find Date - Dating app)"},{currency:"USD",description:"Find Date Pro 1 month plan",price:"$9.00",priceAsDecimal:9,productId:"plan18_23_1m",title:"Find Date Pro 1 month plan (Find Date - Dating app)"}],this.product={},this.activePlan="plan18_23_3m",this.plans=[12,3,1]}ngOnInit(){}getPlanPrice(){return this.products.filter(n=>n.productId==this.activePlan)[0].price}onClickOutside(n){n&&!0===n.value&&"ion-page show-page"==n.target.className&&this.modalController.dismiss()}close(){this.modalController.dismiss()}upgrade(){this.purchaseService.subscribeMembership(this.activePlan)}selectPlan(n){console.log(n),this.activePlan=n}checkActive(n){return n==this.activePlan}}},hcCF:function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t("+kZL");class e{}},m9yc:function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t.d(l,"b",(function(){return o}));const e=async(n,l,t,e,o)=>{if(n)return n.attachViewToDom(l,t,o,e);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof t?l.ownerDocument&&l.ownerDocument.createElement(t):t;return e&&e.forEach(n=>i.classList.add(n)),o&&Object.assign(i,o),l.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},o=(n,l)=>{if(l){if(n)return n.removeViewFromDom(l.parentElement,l);l.remove()}return Promise.resolve()}},"nN+u":function(n,l,t){"use strict";t.d(l,"a",(function(){return i})),t.d(l,"b",(function(){return e}));const e=(n,l,t)=>{const e=new MutationObserver(n=>{t(o(n,l))});return e.observe(n,{childList:!0,subtree:!0}),e},o=(n,l)=>{let t;return n.forEach(n=>{for(let e=0;e<n.addedNodes.length;e++)t=i(n.addedNodes[e],l)||t}),t},i=(n,l)=>{if(1===n.nodeType)return(n.tagName===l.toUpperCase()?[n]:Array.from(n.querySelectorAll(l))).find(n=>!0===n.checked)}},opz7:function(n,l,t){"use strict";t.d(l,"a",(function(){return o})),t.d(l,"b",(function(){return i})),t.d(l,"c",(function(){return r})),t.d(l,"d",(function(){return e}));const e=()=>{const n=window.TapticEngine;n&&n.selection()},o=()=>{const n=window.TapticEngine;n&&n.gestureSelectionStart()},i=()=>{const n=window.TapticEngine;n&&n.gestureSelectionChanged()},r=()=>{const n=window.TapticEngine;n&&n.gestureSelectionEnd()}},qaSm:function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t.d(l,"b",(function(){return o}));class e{constructor(n,l){this.x=n,this.y=l}}const o=(n,l,t,e,o)=>{const u=r(n.y,l.y,t.y,e.y,o);return i(n.x,l.x,t.x,e.x,u[0])},i=(n,l,t,e,o)=>o*(3*l*Math.pow(o-1,2)+o*(-3*t*o+3*t+e*o))-n*Math.pow(o-1,3),r=(n,l,t,e,o)=>u((e-=o)-3*(t-=o)+3*(l-=o)-(n-=o),3*t-6*l+3*n,3*l-3*n,n).filter(n=>n>=0&&n<=1),u=(n,l,t,e)=>{if(0===n)return((n,l,t)=>{const e=l*l-4*n*t;return e<0?[]:[(-l+Math.sqrt(e))/(2*n),(-l-Math.sqrt(e))/(2*n)]})(l,t,e);const o=(3*(t/=n)-(l/=n)*l)/3,i=(2*l*l*l-9*l*t+27*(e/=n))/27;if(0===o)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-o),-Math.sqrt(-o)];const r=Math.pow(i/2,2)+Math.pow(o/3,3);if(0===r)return[Math.pow(i/2,.5)-l/3];if(r>0)return[Math.pow(-i/2+Math.sqrt(r),1/3)-Math.pow(i/2+Math.sqrt(r),1/3)-l/3];const u=Math.sqrt(Math.pow(-o/3,3)),a=Math.acos(-i/(2*Math.sqrt(Math.pow(-o/3,3)))),c=2*Math.pow(u,1/3);return[c*Math.cos(a/3)-l/3,c*Math.cos((a+2*Math.PI)/3)-l/3,c*Math.cos((a+4*Math.PI)/3)-l/3]}},zg5m:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));class e{}}}]);