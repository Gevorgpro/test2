(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{TbC0:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class i{}var o=t("pMnS"),s=t("oBZk"),r=t("ZZ/e"),a=t("SVse"),u=t("mrSG"),c=t("CFL1"),b=t("P12i"),d=t("Gqy7"),g=t("+kZL"),p=t("ZwNh");class h{constructor(n,l,t,e,i,o,s){this.userService=n,this.messagesService=l,this.events=t,this.ngZone=e,this.modalController=i,this.locationService=o,this.router=s,this.lastDate=new Date,this.currentIndex=0,this.currentUser={},this.user={},this.slideOpts={initialSlide:0,speed:400},this.slideOpts2={initialSlide:0,speed:400,direction:"vertical"},this.liked=!1,this.disliked=!1,this.crossPressed=!1,this.nearbyUsers=[],this.nearbyUsersEnd=!1,this.drag=!1,this.isBeginning=!0,this.isEnd=!1,this.data=["assets/imgs/1.jpeg","assets/imgs/2.jpeg","assets/imgs/3.jpeg","assets/imgs/4.jpeg","assets/imgs/2.jpeg","assets/imgs/3.jpeg","assets/imgs/4.jpeg"],this.data2=["assets/imgs/1.jpeg","assets/imgs/2.jpeg","assets/imgs/3.jpeg","assets/imgs/4.jpeg","assets/imgs/2.jpeg","assets/imgs/3.jpeg","assets/imgs/4.jpeg"]}ngOnInit(){this.userService.currentUser.subscribe(n=>{this.user=n}),this.events.subscribe("getNearByUsers",()=>{}),this.events.subscribe("preferences:updated",()=>{this.nearbyUsers=[]})}getNearbyUsers(){this.userService.getNearbyUsers(this.lastDate).then(n=>{n.length>0?(this.lastDate=n[n.length-1].createdAt,this.nearbyUsers=this.nearbyUsers.concat(n),this.isBeginning&&(this.currentUser=this.nearbyUsers[0])):this.nearbyUsersEnd=!0})}calculateAge(n){n=new Date(n);var l=Date.now()-n.getTime(),t=new Date(l);return Math.abs(t.getUTCFullYear()-1970)}slideChange(){this.slider.getActiveIndex().then(n=>{this.currentIndex=n,this.currentUser=this.nearbyUsers[this.currentIndex],this.slider.isBeginning().then(n=>{this.isBeginning=n}),this.slider.isEnd().then(n=>{this.isEnd=n})})}ionSlideTransitionEnd(){}back(){this.data.splice(0,1)}cross(){let n=this;this.disliked=!0,this.crossPressed=!0,console.log(" currentIndex ",this.currentIndex),setTimeout((function(){n.disliked=!1,n.nearbyUsers.splice(n.currentIndex,1),n.userService.updateUserStatus(n.currentUser.uid,"disliked")}),1e3)}like(){let n=this;this.liked=!0,this.presentModal(),setTimeout((function(){n.liked=!1}),500)}previous(){this.slider.slidePrev().then(n=>{})}next(){this.slider.slideNext().then(n=>{})}getLikedClass(){return this.liked?"likeUser":"null"}getDisLikedClass(){return this.disliked?"dislikeUser":"notDislikeUser"}dragging(n){let l=this;this.ngZone.run(()=>l.drag=!0),setTimeout((function(){l.ngZone.run(()=>l.drag=!1)}),500)}getClass(){return 0==this.drag?"opacityvisible":"opacity"}openUser(n){console.log("user ",n),this.router.navigateByUrl("one-user/?id="+n.uid+"&uid="+n.uid+"asdasdasd")}getDistance(n){let l=this.locationService.currentPosition;if(l){let s=l.latitude,r=n[1];var t=(r-s)*Math.PI/180,e=(n[0]-l.longitude)*Math.PI/180,i=Math.sin(t/2)*Math.sin(t/2)+Math.cos(s*Math.PI/180)*Math.cos(r*Math.PI/180)*Math.sin(e/2)*Math.sin(e/2),o=2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i))*6371;return o>1?Math.round(o)+" km":o<=1?Math.round(1e3*o)+" m":o}}presentModal(){return u.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,t,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(this.user.starPoints>0)){n.next=12;break}return n.next=3,this.modalController.create({component:g.a,animated:!0,cssClass:"my-custom-modal-css"});case 3:return(l=n.sent).present(),n.next=7,l.onWillDismiss();case 7:t=n.sent,(e=t.data).status&&(this.messagesService.sendMsg(e.message,this.currentUser.uid),this.userService.updateUserStatus(this.currentUser.uid,"liked")),n.next=15;break;case 12:return n.next=14,this.modalController.create({component:p.a,animated:!0,cssClass:"my-custom-modal-css"});case 14:n.sent.present();case 15:case"end":return n.stop()}}),n,this)})))}}var f=t("iInd"),m=e.Ab({encapsulation:0,styles:[["ion-slides[_ngcontent-%COMP%]{height:100%}.locationBox[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;height:50px;z-index:9999;font-weight:400;color:#fff;text-shadow:1px 1px 1px #969696;padding:40px 0 40px 20px;font-size:20px}.detailsBox[_ngcontent-%COMP%]{position:absolute;bottom:150px;width:100%;height:50px;z-index:9999;font-weight:400;text-align:center;color:#fff;text-shadow:1px 1px 1px #969696;padding:20px;font-size:25px}.userDistance[_ngcontent-%COMP%]{font-size:15px;font-weight:300;clear:both}.userAge[_ngcontent-%COMP%]{font-size:25px;font-weight:300}.transFab[_ngcontent-%COMP%]{border:3px solid #fff;border-radius:50%}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover!important;object-fit:cover!important;height:100%;width:100%}.opacityvisible[_ngcontent-%COMP%]{opacity:.8;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.opacity[_ngcontent-%COMP%]{opacity:.2;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}ion-back-button[_ngcontent-%COMP%]{--color:#ffffff}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important}ion-header[_ngcontent-%COMP%]{--ion-background-color:#fdc324}.slides-ios[_ngcontent-%COMP%]{--bullet-background:#000;--bullet-background-active:#000000;--progress-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);--progress-bar-background-active:var(--ion-color-primary-shade, #3171e0);--scroll-bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--scroll-bar-background-active:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5)}img[_ngcontent-%COMP%]{height:100%;-o-object-fit:cover;object-fit:cover}audio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], progress[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{vertical-align:baseline;-o-object-fit:cover;object-fit:cover}.activityBox[_ngcontent-%COMP%]{height:calc(100%);z-index:9999999999;position:absolute;top:0;right:0;border-radius:5px;overflow:hidden;left:0}.likeUser[_ngcontent-%COMP%]{z-index:999999;border-radius:50%;-webkit-transform:scale(500,500);transform:scale(500,500);-webkit-transition:-webkit-transform 2s ease-in-out;transition:-webkit-transform 2s ease-in-out;transition:transform 2s ease-in-out;transition:transform 2s ease-in-out,-webkit-transform 2s ease-in-out}.sendhiUser[_ngcontent-%COMP%]{background:#2196f380;height:10px;width:10px;z-index:9999999999;position:absolute;top:calc(50%);right:calc(50%);border-radius:50%;left:calc(50%)}.dislikeUser[_ngcontent-%COMP%]{position:absolute;z-index:99999;width:100%;opacity:.8;-webkit-transform:scale(2,2);transform:scale(2,2);-webkit-transition:-webkit-transform .5s ease-in-out;transition:-webkit-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out,-webkit-transform .5s ease-in-out}.starPoints[_ngcontent-%COMP%]{padding:10px;color:#fff;margin-top:-10px;float:right}.starPoints[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{background:#ffffffad}.notDislikeUser[_ngcontent-%COMP%]{position:absolute;z-index:99999;width:100%;opacity:0}.image-parallax[_ngcontent-%COMP%]{position:absolute}.image-parallax[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:200px;width:2000px;height:auto}.likeUserIcon[_ngcontent-%COMP%]{background:0 0;z-index:9999999999;position:absolute;width:10px;top:calc(50% - 25px);left:calc(50% - 25px);font-size:50px;color:#00808082;opacity:1;-webkit-transition:opacity .5s linear;transition:opacity .5s linear}.sendhiUserIcon[_ngcontent-%COMP%]{background:0 0;z-index:9999999999;position:absolute;width:100px;top:calc(50% - 25px);left:calc(50% - 25px);font-size:50px;color:#2196f3;opacity:1;-webkit-transition:opacity .5s linear;transition:opacity .5s linear}.dislikeUserIcon[_ngcontent-%COMP%]{background:0 0;z-index:9999999999;position:absolute;width:10px;top:calc(50% - 25px);left:calc(50% - 25px);font-size:50px;color:#ff0000a1;opacity:1;-webkit-transition:opacity .5s linear;transition:opacity .5s linear}.nullIcon[_ngcontent-%COMP%]{background:0 0;z-index:9999999999;position:absolute;width:10px;top:calc(50% - 25px);left:calc(50% - 25px);font-size:50px;opacity:0}.blurBack[_ngcontent-%COMP%]{position:absolute;filter:blur(10px);width:100%;z-index:2;-webkit-filter:blur(10px)}.circle[_ngcontent-%COMP%]{top:50%;left:50%;width:0;height:0;display:block;border-radius:50%;position:absolute;border:1px solid rgba(238,42,0,.7);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:rgba(238,42,0,.3);-webkit-animation:2s infinite ripple;animation:2s infinite ripple}.container[_ngcontent-%COMP%]{width:100%;margin:0 auto;margin-top:calc(100% - 200px);display:block;position:fixed;vertical-align:middle;text-align:center}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover}.containercircle[_ngcontent-%COMP%]{width:300px;height:300px;margin:0 auto;display:block;vertical-align:middle;text-align:center}.photo[_ngcontent-%COMP%]{width:10px;height:10px;background-size:cover;-webkit-animation:none;animation:none;border:none;z-index:100}@-webkit-keyframes ripple{from{opacity:.1;width:.1%;height:.1%}to{opacity:.6;width:100%;height:100%}}@keyframes ripple{from{opacity:.1;width:.1%;height:.1%}to{opacity:.6;width:100%;height:100%}}.my-custom-modal-css[_ngcontent-%COMP%]{--background:transparent!important;--ion-background-color:transparent!important}"]],data:{}});function x(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,1,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.Cb(1,0,null,null,0,"img",[["src","assets/imgs/ripple.gif"]],null,null,null,null,null))],null,null)}function k(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,13,"div",[["class","locationBox"]],null,null,null,null,null)),(n()(),e.Cb(1,0,null,null,4,"div",[["style","float: left;"]],null,null,null,null,null)),(n()(),e.Cb(2,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Vb(3,null,[" ",", "," "])),(n()(),e.Cb(4,0,null,null,1,"div",[["class","userDistance"]],null,null,null,null,null)),(n()(),e.Vb(5,null,[" "," away "])),(n()(),e.Cb(6,0,null,null,7,"div",[["class","starPoints"]],null,null,null,null,null)),(n()(),e.Cb(7,0,null,null,6,"ion-chip",[],null,null,null,s.S,s.f)),e.Bb(8,49152,null,0,r.u,[e.j,e.p,e.F],null,null),(n()(),e.Cb(9,0,null,0,1,"ion-icon",[["color","dark"],["name","star"]],null,null,null,s.bb,s.o)),e.Bb(10,49152,null,0,r.E,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null),(n()(),e.Cb(11,0,null,0,2,"ion-label",[["style","font-weight: bold;font-size: 16px;padding: 0 5px 0 0;color:#222222;"]],null,null,null,s.gb,s.t)),e.Bb(12,49152,null,0,r.P,[e.j,e.p,e.F],null,null),(n()(),e.Vb(13,0,[" "," "]))],(function(n,l){n(l,10,0,"dark","star")}),(function(n,l){var t=l.component;n(l,3,0,t.currentUser.city,t.currentUser.country),n(l,5,0,t.getDistance(t.currentUser.loc.coordinates)),n(l,13,0,t.user.starPoints)}))}function C(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,4,"div",[["class","detailsBox"]],null,null,null,null,null)),(n()(),e.Cb(1,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),e.Vb(2,null,[" ",", "])),(n()(),e.Cb(3,0,null,null,1,"span",[["class","userAge"]],null,null,null,null,null)),(n()(),e.Vb(4,null,[""," "]))],null,(function(n,l){var t=l.component;n(l,2,0,t.currentUser.name),n(l,4,0,t.calculateAge(t.currentUser.dob))}))}function v(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,7,"ion-fab",[["horizontal","center"],["slot","fixed"],["style","bottom:75px;margin-left:7px;"],["vertical","bottom"]],null,null,null,s.X,s.j)),e.Sb(512,null,a.u,a.v,[e.x,e.y,e.p,e.K]),e.Bb(2,278528,null,0,a.i,[a.u],{ngClass:[0,"ngClass"]},null),e.Bb(3,49152,null,0,r.y,[e.j,e.p,e.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.Cb(4,0,null,0,3,"ion-fab-button",[["class","transFab"],["color","teal"],["translucent","true"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.like()&&e),e}),s.W,s.k)),e.Bb(5,49152,null,0,r.z,[e.j,e.p,e.F],{color:[0,"color"],disabled:[1,"disabled"],translucent:[2,"translucent"]},null),(n()(),e.Cb(6,0,null,0,1,"ion-icon",[["name","mail"]],null,null,null,s.bb,s.o)),e.Bb(7,49152,null,0,r.E,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(n,l){var t=l.component;n(l,2,0,t.getClass()),n(l,3,0,"center","bottom"),n(l,5,0,"teal",t.disliked,"true"),n(l,7,0,"mail")}),null)}function y(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,7,"ion-fab",[["horizontal","center"],["slot","fixed"],["style","bottom:75px;margin-left: -65px;"],["vertical","bottom"]],null,null,null,s.X,s.j)),e.Sb(512,null,a.u,a.v,[e.x,e.y,e.p,e.K]),e.Bb(2,278528,null,0,a.i,[a.u],{ngClass:[0,"ngClass"]},null),e.Bb(3,49152,null,0,r.y,[e.j,e.p,e.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.Cb(4,0,null,0,3,"ion-fab-button",[["class","transFab"],["color","danger"],["translucent","true"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.cross()&&e),e}),s.W,s.k)),e.Bb(5,49152,null,0,r.z,[e.j,e.p,e.F],{color:[0,"color"],disabled:[1,"disabled"],translucent:[2,"translucent"]},null),(n()(),e.Cb(6,0,null,0,1,"ion-icon",[["name","close"],["style","font-size: 50px;"]],null,null,null,s.bb,s.o)),e.Bb(7,49152,null,0,r.E,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(n,l){var t=l.component;n(l,2,0,t.getClass()),n(l,3,0,"center","bottom"),n(l,5,0,"danger",t.disliked,"true"),n(l,7,0,"close")}),null)}function M(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,5,"ion-fab",[["horizontal","start"],["slot","fixed"],["style","bottom:75px;"],["vertical","bottom"]],null,null,null,s.X,s.j)),e.Bb(1,49152,null,0,r.y,[e.j,e.p,e.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.Cb(2,0,null,0,3,"ion-fab-button",[["class","transFab"],["color","light"],["size","small"],["translucent","true"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.previous()&&e),e}),s.W,s.k)),e.Bb(3,49152,null,0,r.z,[e.j,e.p,e.F],{color:[0,"color"],disabled:[1,"disabled"],size:[2,"size"],translucent:[3,"translucent"]},null),(n()(),e.Cb(4,0,null,0,1,"ion-icon",[["name","arrow-back"]],null,null,null,s.bb,s.o)),e.Bb(5,49152,null,0,r.E,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(n,l){var t=l.component;n(l,1,0,"start","bottom"),n(l,3,0,"light",t.disliked||t.isBeginning,"small","true"),n(l,5,0,"arrow-back")}),null)}function w(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["style","bottom:75px;"],["vertical","bottom"]],null,null,null,s.X,s.j)),e.Bb(1,49152,null,0,r.y,[e.j,e.p,e.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.Cb(2,0,null,0,3,"ion-fab-button",[["class","transFab"],["color","light"],["size","small"],["translucent","true"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.next()&&e),e}),s.W,s.k)),e.Bb(3,49152,null,0,r.z,[e.j,e.p,e.F],{color:[0,"color"],disabled:[1,"disabled"],size:[2,"size"],translucent:[3,"translucent"]},null),(n()(),e.Cb(4,0,null,0,1,"ion-icon",[["name","arrow-forward"]],null,null,null,s.bb,s.o)),e.Bb(5,49152,null,0,r.E,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(n,l){var t=l.component;n(l,1,0,"end","bottom"),n(l,3,0,"light",t.disliked||t.isEnd,"small","true"),n(l,5,0,"arrow-forward")}),null)}function P(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,7,"ion-slide",[["class","card"],["data-swiper-parallax","-200"]],null,null,null,s.qb,s.D)),e.Bb(1,49152,null,0,r.sb,[e.j,e.p,e.F],null,null),(n()(),e.Cb(2,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),e.Cb(3,0,null,0,4,"div",[],null,null,null,null,null)),e.Sb(512,null,a.u,a.v,[e.x,e.y,e.p,e.K]),e.Bb(5,278528,null,0,a.i,[a.u],{ngClass:[0,"ngClass"]},null),(n()(),e.Cb(6,0,null,null,1,"ion-icon",[["color","danger"],["name","close"],["style","font-size: 300px;"]],null,null,null,s.bb,s.o)),e.Bb(7,49152,null,0,r.E,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,5,0,l.component.getDisLikedClass()),n(l,7,0,"danger","close")}),(function(n,l){n(l,2,0,l.context.$implicit)}))}function z(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,5,"ion-slide",[["class","card"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openUser(n.context.$implicit)&&e),e}),s.qb,s.D)),e.Bb(1,49152,null,0,r.sb,[e.j,e.p,e.F],null,null),(n()(),e.Cb(2,0,null,0,3,"ion-slides",[["class","imageSlider"],["mode","ios"],["pager","true"]],null,null,null,s.rb,s.E)),e.Bb(3,49152,null,0,r.tb,[e.j,e.p,e.F],{mode:[0,"mode"],options:[1,"options"],pager:[2,"pager"]},null),(n()(),e.rb(16777216,null,0,1,null,P)),e.Bb(5,278528,null,0,a.j,[e.X,e.S,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,"ios",l.component.slideOpts2,"true"),n(l,5,0,l.context.$implicit.photos)}),null)}function O(n){return e.Xb(0,[e.Tb(671088640,1,{slider:0}),(n()(),e.Cb(1,0,null,null,19,"ion-content",[["fullscreen",""]],null,null,null,s.U,s.h)),e.Bb(2,49152,null,0,r.w,[e.j,e.p,e.F],{fullscreen:[0,"fullscreen"]},null),(n()(),e.rb(16777216,null,0,1,null,x)),e.Bb(4,16384,null,0,a.k,[e.X,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(16777216,null,0,1,null,k)),e.Bb(6,16384,null,0,a.k,[e.X,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(16777216,null,0,1,null,C)),e.Bb(8,16384,null,0,a.k,[e.X,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(16777216,null,0,1,null,v)),e.Bb(10,16384,null,0,a.k,[e.X,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(16777216,null,0,1,null,y)),e.Bb(12,16384,null,0,a.k,[e.X,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(16777216,null,0,1,null,M)),e.Bb(14,16384,null,0,a.k,[e.X,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(16777216,null,0,1,null,w)),e.Bb(16,16384,null,0,a.k,[e.X,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.Cb(17,0,null,0,3,"ion-slides",[["class","parallax-bg"],["mode","ios"]],null,[[null,"ionSlideTouchStart"],[null,"ionSlideDidChange"],[null,"ionSlideTransitionEnd"]],(function(n,l,t){var e=!0,i=n.component;return"ionSlideTouchStart"===l&&(e=!1!==i.dragging(t)&&e),"ionSlideDidChange"===l&&(e=!1!==i.slideChange()&&e),"ionSlideTransitionEnd"===l&&(e=!1!==i.ionSlideTransitionEnd()&&e),e}),s.rb,s.E)),e.Bb(18,49152,[[1,4],["slider",4]],0,r.tb,[e.j,e.p,e.F],{mode:[0,"mode"],options:[1,"options"]},null),(n()(),e.rb(16777216,null,0,1,null,z)),e.Bb(20,278528,null,0,a.j,[e.X,e.S,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,2,0,""),n(l,4,0,0==t.nearbyUsers.length),n(l,6,0,t.nearbyUsers.length>0),n(l,8,0,t.nearbyUsers.length>0),n(l,10,0,t.nearbyUsers.length>0),n(l,12,0,t.nearbyUsers.length>0),n(l,14,0,t.nearbyUsers.length>0),n(l,16,0,t.nearbyUsers.length>0),n(l,18,0,"ios",t.slideOpts),n(l,20,0,t.nearbyUsers)}),null)}var U=e.yb("app-home",h,(function(n){return e.Xb(0,[(n()(),e.Cb(0,0,null,null,1,"app-home",[],null,null,null,O,m)),e.Bb(1,114688,null,0,h,[c.a,d.a,r.f,e.F,r.Jb,b.a,f.m],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),j=t("B9Uo"),B=t("s7LF");class _{}var S=t("hcCF"),F=t("zg5m");t.d(l,"HomePageModuleNgFactory",(function(){return I}));var I=e.zb(i,[],(function(n){return e.Lb([e.Mb(512,e.m,e.kb,[[8,[o.a,U,j.a]],[3,e.m],e.D]),e.Mb(4608,a.m,a.l,[e.z,[2,a.z]]),e.Mb(4608,B.p,B.p,[]),e.Mb(4608,r.b,r.b,[e.F,e.g]),e.Mb(4608,r.Jb,r.Jb,[r.b,e.m,e.w]),e.Mb(4608,r.Nb,r.Nb,[r.b,e.m,e.w]),e.Mb(1073742336,a.b,a.b,[]),e.Mb(1073742336,B.o,B.o,[]),e.Mb(1073742336,B.e,B.e,[]),e.Mb(1073742336,r.Gb,r.Gb,[]),e.Mb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),e.Mb(1073742336,_,_,[]),e.Mb(1073742336,S.a,S.a,[]),e.Mb(1073742336,F.a,F.a,[]),e.Mb(1073742336,i,i,[]),e.Mb(1024,f.k,(function(){return[[{path:"",component:h}],[{path:"",component:g.a}]]}),[])])}))}}]);