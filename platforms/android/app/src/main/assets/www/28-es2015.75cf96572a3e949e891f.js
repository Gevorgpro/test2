(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{zDS7:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var t=u("pMnS"),r=u("oBZk"),a=u("ZZ/e"),i=u("s7LF"),s=u("mrSG"),b=u("p74H"),c=u("CFL1"),p=u("ri4K"),d=u("D2Vb"),g=u("CjQN"),h=u("ZwNh");class m{constructor(l,n,u,o,e,t,r){this.socialSharing=l,this.appRate=n,this.modalController=u,this.router=o,this.statusBar=e,this.authenticationService=t,this.userService=r,this.user={},this.urls={privacy:"",terms:""}}ngOnInit(){this.userService.currentUser.subscribe(l=>{Object.keys(l).length>0&&(this.user=l)})}ionViewWillEnter(){}ionViewWillLeave(){}promptForRating(){this.appRate.preferences.storeAppURL={android:"market://details?id=com.malecon.findmatch"},this.appRate.promptForRating(!0)}shareApp(){this.socialSharing.share("Take a look at Find Match, the app that lets you find nearby people and make new encounters! \u{1f609} https://play.google.com/store/apps/details?id=com.malecon.findmatch","Share")}openUrl(l){}upgrade(){this.presentModal()}presentModal(){return s.__awaiter(this,void 0,void 0,(function*(){(yield this.modalController.create({component:h.a,animated:!0,cssClass:"my-custom-modal-css"})).present()}))}pushChange(l){}logout(){this.authenticationService.logout().then(l=>{this.router.navigate(["login"])})}}var f=u("iInd"),C=o.Ab({encapsulation:0,styles:[[".upgradeBox[_ngcontent-%COMP%]{margin:10px;height:200px;border-radius:10px;overflow:hidden}.upgradeImage[_ngcontent-%COMP%]{margin-top:0;-o-object-fit:cover;object-fit:cover}.upgradeOverlay[_ngcontent-%COMP%]{height:200px;margin-top:10px;border-radius:10px;position:absolute;width:calc(100% - 20px);top:0}.uButton[_ngcontent-%COMP%]{text-align:center;background:#03a9f4;padding:5px 40px;color:#fff;width:220px;border-radius:20px;position:absolute;border:1px solid #fff;bottom:20px;left:calc(50% - 110px)}.uStars[_ngcontent-%COMP%]{text-align:center;padding:5px 40px;color:#fff;width:100%;font-size:28px;font-weight:700;position:absolute;top:30%}ion-list[_ngcontent-%COMP%]{background:0 0}ion-item[_ngcontent-%COMP%]{--background:transparent}.my-custom-modal-css[_ngcontent-%COMP%]{--background:transparent!important;--ion-background-color:transparent!important}"]],data:{}});function v(l){return o.Xb(0,[(l()(),o.Cb(0,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,r.ab,r.n)),o.Bb(1,49152,null,0,a.D,[o.j,o.p,o.F],null,null),(l()(),o.Cb(2,0,null,0,9,"ion-toolbar",[["color","red"],["style","padding-top:20px !important;"]],null,null,null,r.zb,r.M)),o.Bb(3,49152,null,0,a.Eb,[o.j,o.p,o.F],{color:[0,"color"]},null),(l()(),o.Cb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.R,r.e)),o.Bb(5,49152,null,0,a.n,[o.j,o.p,o.F],null,null),(l()(),o.Cb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.Ob(l,8).onClick(u)&&e),e}),r.P,r.c)),o.Bb(7,49152,null,0,a.i,[o.j,o.p,o.F],null,null),o.Bb(8,16384,null,0,a.j,[[2,a.kb],a.Kb],null,null),(l()(),o.Cb(9,0,null,0,2,"ion-title",[],null,null,null,r.xb,r.K)),o.Bb(10,49152,null,0,a.Cb,[o.j,o.p,o.F],null,null),(l()(),o.Vb(-1,0,["My Settings"])),(l()(),o.Cb(12,0,null,null,45,"ion-content",[],null,null,null,r.U,r.h)),o.Bb(13,49152,null,0,a.w,[o.j,o.p,o.F],null,null),(l()(),o.Cb(14,0,null,0,6,"div",[["class","upgradeBox"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.upgrade()&&o),o}),null,null)),(l()(),o.Cb(15,0,null,null,0,"img",[["class","upgradeImage"],["src","assets/imgs/upgrade.jpg"]],null,null,null,null,null)),(l()(),o.Cb(16,0,null,null,4,"div",[["class","upgradeOverlay"]],null,null,null,null,null)),(l()(),o.Cb(17,0,null,null,1,"div",[["class","uStars"]],null,null,null,null,null)),(l()(),o.Vb(-1,null,["Get 10 Stars Everyday"])),(l()(),o.Cb(19,0,null,null,1,"div",[["class","uButton"]],null,null,null,null,null)),(l()(),o.Vb(-1,null,["Upgrade to PRO"])),(l()(),o.Cb(21,0,null,0,36,"ion-list",[["lines","none"]],null,null,null,r.hb,r.u)),o.Bb(22,49152,null,0,a.Q,[o.j,o.p,o.F],{lines:[0,"lines"]},null),(l()(),o.Cb(23,0,null,0,4,"ion-item",[["style","background: transparent;border: none;"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.promptForRating()&&o),o}),r.fb,r.q)),o.Bb(24,49152,null,0,a.J,[o.j,o.p,o.F],null,null),(l()(),o.Vb(-1,0,["Rate Us "])),(l()(),o.Cb(26,0,null,0,1,"ion-icon",[["name","ios-arrow-forward"],["slot","end"],["style","font-size: 20px;line-height: 28px;"]],null,null,null,r.bb,r.o)),o.Bb(27,49152,null,0,a.E,[o.j,o.p,o.F],{name:[0,"name"]},null),(l()(),o.Cb(28,0,null,0,4,"ion-item",[["style","background: transparent;border: none;"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.shareApp()&&o),o}),r.fb,r.q)),o.Bb(29,49152,null,0,a.J,[o.j,o.p,o.F],null,null),(l()(),o.Vb(-1,0,["Share App "])),(l()(),o.Cb(31,0,null,0,1,"ion-icon",[["name","ios-arrow-forward"],["slot","end"],["style","font-size: 20px;line-height: 28px;"]],null,null,null,r.bb,r.o)),o.Bb(32,49152,null,0,a.E,[o.j,o.p,o.F],{name:[0,"name"]},null),(l()(),o.Cb(33,0,null,0,11,"ion-item",[["style","background: #ececec;"]],null,null,null,r.fb,r.q)),o.Bb(34,49152,null,0,a.J,[o.j,o.p,o.F],null,null),(l()(),o.Cb(35,0,null,0,2,"ion-label",[],null,null,null,r.gb,r.t)),o.Bb(36,49152,null,0,a.P,[o.j,o.p,o.F],null,null),(l()(),o.Vb(-1,0,["Push Notifications"])),(l()(),o.Cb(38,0,null,0,6,"ion-toggle",[["color","red"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,t=l.component;return"ionBlur"===n&&(e=!1!==o.Ob(l,39)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Ob(l,39)._handleIonChange(u.target)&&e),"ngModelChange"===n&&(e=!1!==(t.user.pushNotifications=u)&&e),"ngModelChange"===n&&(e=!1!==t.pushChange(u)&&e),e}),r.yb,r.L)),o.Bb(39,16384,null,0,a.c,[o.p],null,null),o.Sb(1024,null,i.g,(function(l){return[l]}),[a.c]),o.Bb(41,671744,null,0,i.k,[[8,null],[8,null],[8,null],[6,i.g]],{model:[0,"model"]},{update:"ngModelChange"}),o.Sb(2048,null,i.h,null,[i.k]),o.Bb(43,16384,null,0,i.i,[[4,i.h]],null,null),o.Bb(44,49152,null,0,a.Db,[o.j,o.p,o.F],{color:[0,"color"]},null),(l()(),o.Cb(45,0,null,0,4,"ion-item",[["style","background: transparent;border: none;"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.openUrl("privacy")&&o),o}),r.fb,r.q)),o.Bb(46,49152,null,0,a.J,[o.j,o.p,o.F],null,null),(l()(),o.Vb(-1,0,["Privacy Policy "])),(l()(),o.Cb(48,0,null,0,1,"ion-icon",[["name","ios-arrow-forward"],["slot","end"],["style","font-size: 20px;line-height: 28px;"]],null,null,null,r.bb,r.o)),o.Bb(49,49152,null,0,a.E,[o.j,o.p,o.F],{name:[0,"name"]},null),(l()(),o.Cb(50,0,null,0,4,"ion-item",[["style","background: transparent;border: none;"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.openUrl("terms")&&o),o}),r.fb,r.q)),o.Bb(51,49152,null,0,a.J,[o.j,o.p,o.F],null,null),(l()(),o.Vb(-1,0,["Terms of Service "])),(l()(),o.Cb(53,0,null,0,1,"ion-icon",[["name","ios-arrow-forward"],["slot","end"],["style","font-size: 20px;line-height: 28px;"]],null,null,null,r.bb,r.o)),o.Bb(54,49152,null,0,a.E,[o.j,o.p,o.F],{name:[0,"name"]},null),(l()(),o.Cb(55,0,null,0,2,"ion-item",[["style","background: transparent;padding-top:10px;border: none;color:red;"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.logout()&&o),o}),r.fb,r.q)),o.Bb(56,49152,null,0,a.J,[o.j,o.p,o.F],null,null),(l()(),o.Vb(-1,0,["LOGOUT "]))],(function(l,n){var u=n.component;l(n,3,0,"red"),l(n,22,0,"none"),l(n,27,0,"ios-arrow-forward"),l(n,32,0,"ios-arrow-forward"),l(n,41,0,u.user.pushNotifications),l(n,44,0,"red"),l(n,49,0,"ios-arrow-forward"),l(n,54,0,"ios-arrow-forward")}),(function(l,n){l(n,38,0,o.Ob(n,43).ngClassUntouched,o.Ob(n,43).ngClassTouched,o.Ob(n,43).ngClassPristine,o.Ob(n,43).ngClassDirty,o.Ob(n,43).ngClassValid,o.Ob(n,43).ngClassInvalid,o.Ob(n,43).ngClassPending)}))}function k(l){return o.Xb(0,[(l()(),o.Cb(0,0,null,null,1,"app-settings",[],null,null,null,v,C)),o.Bb(1,114688,null,0,m,[g.a,d.a,a.Jb,f.m,b.a,p.a,c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=o.yb("app-settings",m,k,{},{},[]),M=u("UUjY"),B=u("SVse");class y{}var x=u("64jI"),j=u("BwRh");u.d(n,"SettingsPageModuleNgFactory",(function(){return F}));var F=o.zb(e,[],(function(l){return o.Lb([o.Mb(512,o.m,o.kb,[[8,[t.a,w,M.a]],[3,o.m],o.D]),o.Mb(4608,B.m,B.l,[o.z,[2,B.z]]),o.Mb(4608,i.p,i.p,[]),o.Mb(4608,a.b,a.b,[o.F,o.g]),o.Mb(4608,a.Jb,a.Jb,[a.b,o.m,o.w]),o.Mb(4608,a.Nb,a.Nb,[a.b,o.m,o.w]),o.Mb(1073742336,B.b,B.b,[]),o.Mb(1073742336,i.o,i.o,[]),o.Mb(1073742336,i.e,i.e,[]),o.Mb(1073742336,a.Gb,a.Gb,[]),o.Mb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),o.Mb(1073742336,y,y,[]),o.Mb(1073742336,x.a,x.a,[]),o.Mb(1073742336,j.a,j.a,[]),o.Mb(1073742336,e,e,[]),o.Mb(1024,f.k,(function(){return[[{path:"",component:m}],[{path:"",component:h.a}]]}),[])])}))}}]);