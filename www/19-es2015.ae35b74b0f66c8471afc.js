(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Wrxl:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class o{}var u=e("pMnS"),i=e("oBZk"),s=e("ZZ/e"),r=e("SVse");class a{constructor(n){this.events=n,this.message={},this.allMessage=[],this.image=!1}ngOnInit(){}scrollToBottom(){this.events.publish("scrollToBottom")}getClass(n,l){let e=this.allMessage.indexOf(n);return n.sender==l?this.allMessage[e+1]&&this.allMessage[e].sender==this.allMessage[e+1].sender?"rightb":"right":this.allMessage[e+1]&&this.allMessage[e].receiver==this.allMessage[e+1].receiver?"leftb":"left"}}var b=t.Ab({encapsulation:0,styles:[['@charset "UTF-8";img.profile-pic[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;position:absolute;bottom:15px}img.profile-pic.left[_ngcontent-%COMP%]{left:10px}img.profile-pic.right[_ngcontent-%COMP%]{right:10px}.message[_ngcontent-%COMP%]{word-wrap:break-word;white-space:pre-wrap;font-size:16px}.message-detail[_ngcontent-%COMP%]{white-space:nowrap;font-size:14px}.chat-bubble[_ngcontent-%COMP%]{border-radius:5px;display:inline-block;padding:6px 18px;position:relative;margin:7px 5px 10px;max-width:80%;font-size:14px}.chat-bubble[_ngcontent-%COMP%]:before{content:"\xa0";display:block;height:16px;width:9px;position:absolute;bottom:-7.5px}.chat-bubble.left[_ngcontent-%COMP%]{background-color:#f6f6f6;float:left;color:#2574a9;margin-bottom:35px}.chat-bubble.leftb[_ngcontent-%COMP%]{background-color:#f6f6f6;float:left;color:#2574a9}.chat-bubble.left[_ngcontent-%COMP%]:before{background-color:#f6f6f6;left:10px;-webkit-transform:rotate(65deg) skew(5deg)}.chat-bubble.right[_ngcontent-%COMP%]{background-color:#ccc;color:#000;float:right;margin-bottom:35px}.chat-bubble.rightb[_ngcontent-%COMP%]{background-color:#ccc;color:#000;float:right}.chat-bubble.right[_ngcontent-%COMP%]:before{background-color:#ccc;right:10px;-webkit-transform:rotate(115deg) skew(-5deg)}.chat-bubble.right[_ngcontent-%COMP%]   a.autolinker[_ngcontent-%COMP%]{color:#000;font-weight:700}.time[_ngcontent-%COMP%]{float:right;padding:5px;font-size:12px;color:#777}.label-md[_ngcontent-%COMP%]{margin:0!important}']],data:{}});function c(n){return t.Xb(0,[(n()(),t.Cb(0,0,null,null,4,"div",[["class","message"]],null,null,null,null,null)),(n()(),t.Vb(1,null,["",""])),(n()(),t.Cb(2,0,null,null,2,"div",[["class","time"]],null,null,null,null,null)),(n()(),t.Vb(3,null,["",""])),t.Rb(4,2)],null,(function(n,l){var e=l.component;n(l,1,0,e.message.body);var o=t.Wb(l,3,0,n(l,4,0,t.Ob(l.parent,0),e.message.createdAt.toDate()," hh:mm a"));n(l,3,0,o)}))}function g(n){return t.Xb(0,[(n()(),t.Cb(0,0,null,null,4,"div",[["class","message"]],null,null,null,null,null)),(n()(),t.Cb(1,0,null,null,0,"img",[["imageViewer",""]],[[8,"src",4]],[[null,"load"]],(function(n,l,e){var t=!0;return"load"===l&&(t=!1!==n.component.scrollToBottom()&&t),t}),null,null)),(n()(),t.Cb(2,0,null,null,2,"div",[["class","time"]],null,null,null,null,null)),(n()(),t.Vb(3,null,["",""])),t.Rb(4,2)],null,(function(n,l){var e=l.component;n(l,1,0,t.Gb(1,"",e.message.body,""));var o=t.Wb(l,3,0,n(l,4,0,t.Ob(l.parent,0),e.message.createdAt.toDate()," hh:mm a"));n(l,3,0,o)}))}function p(n){return t.Xb(0,[t.Pb(0,r.d,[t.z]),(n()(),t.Cb(1,0,null,null,5,"div",[["class","chatBubble"]],null,null,null,null,null)),(n()(),t.Cb(2,0,null,null,4,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),t.rb(16777216,null,null,1,null,c)),t.Bb(4,16384,null,0,r.k,[t.X,t.S],{ngIf:[0,"ngIf"]},null),(n()(),t.rb(16777216,null,null,1,null,g)),t.Bb(6,16384,null,0,r.k,[t.X,t.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,4,0,e.message.body.indexOf(".gif")<0),n(l,6,0,e.message.body.indexOf(".gif")>-1)}),(function(n,l){var e=l.component;n(l,2,0,t.Gb(1,"chat-bubble ",e.getClass(e.message,e.user),""))}))}function d(n){return t.Xb(0,[(n()(),t.Cb(0,0,null,null,1,"app-chat-bubble",[],null,null,null,p,b)),t.Bb(1,114688,null,0,a,[s.f],null,null)],(function(n,l){n(l,1,0)}),null)}var m=t.yb("app-chat-bubble",a,d,{message:"message",allMessage:"allMessage",user:"user"},{},[]),h=e("s7LF"),f=e("CFL1"),C=e("Gqy7"),M=e("Zr1d");class k{constructor(n,l,e,t,o){this.userService=n,this.platform=l,this.keyboard=e,this.ngZone=t,this.messagesService=o,this.messages=[],this.receiver={},this.sender={},this.editorMsg="",this.messagesFire=[],this.firstMessage=!1,this.messageFired=!1,this.keys=[],this.grouped={},this.chatBg="assets/imgs/chatbg.jpg",this.userService.currentUser.subscribe(n=>{this.user=n})}ngOnInit(){let n=this.platform.getQueryParam("cid");this.uid=this.platform.getQueryParam("uid"),this.name=this.platform.getQueryParam("name"),this.messagesService.getMessages(n),this.messagesService.messageSeen(n);let l=this;this.messagesService.messages.subscribe(n=>{this.grouped=n.messages,this.keys=n.keys,this.ngZone.run(()=>{setTimeout(()=>{l.ionContent.scrollToBottom(300)})})})}getDate(n){return new Date(n)}ionViewDidLoad(){}resize(){}sendMsg(){this.keyboard.show(),this.myInput.setFocus(),console.log("keyboard show"),0!=this.editorMsg.length&&(this.messagesService.sendMsg(this.editorMsg,this.uid),this.editorMsg="",this.myInput.setFocus(),this.ionContent.scrollToBottom(300))}sendNotification(n){}scrollToBottom(){}textChange(){}}var x=t.Ab({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%]{--ion-background-color:transparent}.chatPage[_ngcontent-%COMP%]{position:absolute;top:25px;left:140px;color:#ccc;font-size:18px;text-transform:capitalize}.chatBackground[_ngcontent-%COMP%]{background-size:cover}.text-input-ios[_ngcontent-%COMP%], .text-input-md[_ngcontent-%COMP%]{text-align:left!important;font-size:17px}.list-header-ios[_ngcontent-%COMP%], .list-header-md[_ngcontent-%COMP%]{padding-left:16px;margin-bottom:13px;min-height:4.5rem;border-top:1px solid #dedede;font-size:2.4rem;color:#fff;background:0 0}.label-ios[_ngcontent-%COMP%], .label-md[_ngcontent-%COMP%]{margin:0!important}.item-ios[_ngcontent-%COMP%], .item-md[_ngcontent-%COMP%]{margin-top:-13px!important}.item-ios.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%], .item-md.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border:none}ion-footer[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;bottom:0}button[_ngcontent-%COMP%]{background:0 0;font-size:33px}"]],data:{}});function O(n){return t.Xb(0,[(n()(),t.Cb(0,0,null,null,3,"ion-item",[["lines","none"],["style","background:transparent;"]],null,null,null,i.fb,i.q)),t.Bb(1,49152,null,0,s.J,[t.j,t.p,t.F],{lines:[0,"lines"]},null),(n()(),t.Cb(2,0,null,0,1,"app-chat-bubble",[["style","width: 100%;"]],null,null,null,p,b)),t.Bb(3,114688,null,0,a,[s.f],{message:[0,"message"],allMessage:[1,"allMessage"],user:[2,"user"]},null)],(function(n,l){var e=l.component;n(l,1,0,"none"),n(l,3,0,l.context.$implicit,e.grouped[l.parent.context.$implicit],e.user.uid)}),null)}function v(n){return t.Xb(0,[(n()(),t.Cb(0,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),t.Cb(1,0,null,null,3,"ion-item-divider",[["color","light"],["sticky",""],["style","margin-bottom:35px;text-align: center;opacity: 0.5;"]],null,null,null,i.db,i.r)),t.Bb(2,49152,null,0,s.K,[t.j,t.p,t.F],{color:[0,"color"],sticky:[1,"sticky"]},null),(n()(),t.Vb(3,0,["",""])),t.Rb(4,2),(n()(),t.rb(16777216,null,null,1,null,O)),t.Bb(6,278528,null,0,r.j,[t.X,t.S,t.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,2,0,"light",""),n(l,6,0,e.grouped[l.context.$implicit])}),(function(n,l){var e=l.component,o=t.Wb(l,3,0,n(l,4,0,t.Ob(l.parent,0),e.getDate(l.context.$implicit),"dd MMMM, yyyy"));n(l,3,0,o)}))}function y(n){return t.Xb(0,[t.Pb(0,r.d,[t.z]),t.Tb(671088640,1,{ionContent:0}),t.Tb(671088640,2,{myInput:0}),(n()(),t.Cb(3,0,null,null,11,"ion-header",[["no-border",""]],null,null,null,i.ab,i.n)),t.Bb(4,49152,null,0,s.D,[t.j,t.p,t.F],null,null),(n()(),t.Cb(5,0,null,0,9,"ion-toolbar",[["color","red"],["style","padding-top:20px !important;"]],null,null,null,i.zb,i.M)),t.Bb(6,49152,null,0,s.Eb,[t.j,t.p,t.F],{color:[0,"color"]},null),(n()(),t.Cb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.R,i.e)),t.Bb(8,49152,null,0,s.n,[t.j,t.p,t.F],null,null),(n()(),t.Cb(9,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t.Ob(n,11).onClick(e)&&o),o}),i.P,i.c)),t.Bb(10,49152,null,0,s.i,[t.j,t.p,t.F],null,null),t.Bb(11,16384,null,0,s.j,[[2,s.kb],s.Kb],null,null),(n()(),t.Cb(12,0,null,0,2,"ion-title",[],null,null,null,i.xb,i.K)),t.Bb(13,49152,null,0,s.Cb,[t.j,t.p,t.F],null,null),(n()(),t.Vb(14,0,["",""])),(n()(),t.Cb(15,0,null,null,5,"ion-content",[["style","background-image: url(assets/imgs/chatbg.jpg)"]],null,null,null,i.U,i.h)),t.Bb(16,49152,[[1,4]],0,s.w,[t.j,t.p,t.F],null,null),(n()(),t.Cb(17,0,null,0,3,"ion-item-group",[["no-lines",""]],null,null,null,i.eb,i.s)),t.Bb(18,49152,null,0,s.L,[t.j,t.p,t.F],null,null),(n()(),t.rb(16777216,null,0,1,null,v)),t.Bb(20,278528,null,0,r.j,[t.X,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),(n()(),t.Cb(21,0,null,null,17,"ion-footer",[["no-border",""],["style","border-top: 3px solid red;background: #ffffff;"]],null,null,null,i.Y,i.l)),t.Bb(22,49152,null,0,s.B,[t.j,t.p,t.F],null,null),(n()(),t.Cb(23,0,null,0,15,"ion-row",[],null,null,null,i.kb,i.x)),t.Bb(24,49152,null,0,s.lb,[t.j,t.p,t.F],null,null),(n()(),t.Cb(25,0,null,0,8,"ion-col",[["size","10"]],null,null,null,i.T,i.g)),t.Bb(26,49152,null,0,s.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Cb(27,0,null,0,6,"ion-textarea",[["placeholder","Write a message..."],["rows","1"],["style","color: #797b7e;text-align: left !important;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup"],[null,"ngModelChange"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==t.Ob(n,28)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.Ob(n,28)._handleInputEvent(e.target)&&o),"keyup"===l&&(o=!1!==u.resize()&&o),"ngModelChange"===l&&(o=!1!==(u.editorMsg=e)&&o),"keyup.enter"===l&&(o=!1!==u.sendMsg()&&o),"ngModelChange"===l&&(o=!1!==u.textChange()&&o),o}),i.wb,i.J)),t.Bb(28,16384,null,0,s.Pb,[t.p],null,null),t.Sb(1024,null,h.g,(function(n){return[n]}),[s.Pb]),t.Bb(30,671744,null,0,h.k,[[8,null],[8,null],[8,null],[6,h.g]],{model:[0,"model"]},{update:"ngModelChange"}),t.Sb(2048,null,h.h,null,[h.k]),t.Bb(32,16384,null,0,h.i,[[4,h.h]],null,null),t.Bb(33,49152,[[2,4],["myInput",4],["chat_input",4]],0,s.Ab,[t.j,t.p,t.F],{placeholder:[0,"placeholder"],rows:[1,"rows"]},null),(n()(),t.Cb(34,0,null,0,4,"ion-col",[["size","2"]],null,null,null,i.T,i.g)),t.Bb(35,49152,null,0,s.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Cb(36,0,null,0,2,"button",[["clear",""],["icon-only",""],["ion-button",""],["item-right",""]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.sendMsg()&&t),t}),null,null)),(n()(),t.Cb(37,0,null,null,1,"ion-icon",[["color","valencia"],["name","md-send"]],null,null,null,i.bb,i.o)),t.Bb(38,49152,null,0,s.E,[t.j,t.p,t.F],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){var e=l.component;n(l,6,0,"red"),n(l,20,0,e.keys),n(l,26,0,"10"),n(l,30,0,e.editorMsg),n(l,33,0,"Write a message...","1"),n(l,35,0,"2"),n(l,38,0,"valencia","md-send")}),(function(n,l){n(l,14,0,l.component.name),n(l,27,0,t.Ob(l,32).ngClassUntouched,t.Ob(l,32).ngClassTouched,t.Ob(l,32).ngClassPristine,t.Ob(l,32).ngClassDirty,t.Ob(l,32).ngClassValid,t.Ob(l,32).ngClassInvalid,t.Ob(l,32).ngClassPending)}))}function P(n){return t.Xb(0,[(n()(),t.Cb(0,0,null,null,1,"app-chat",[],null,null,null,y,x)),t.Bb(1,114688,null,0,k,[f.a,s.Mb,M.a,t.F,C.a],null,null)],(function(n,l){n(l,1,0)}),null)}var B=t.yb("app-chat",k,P,{},{},[]),_=e("iInd");class w{}e.d(l,"ChatPageModuleNgFactory",(function(){return F}));var F=t.zb(o,[],(function(n){return t.Lb([t.Mb(512,t.m,t.kb,[[8,[u.a,B,m]],[3,t.m],t.D]),t.Mb(4608,r.m,r.l,[t.z,[2,r.z]]),t.Mb(4608,h.p,h.p,[]),t.Mb(4608,s.b,s.b,[t.F,t.g]),t.Mb(4608,s.Jb,s.Jb,[s.b,t.m,t.w]),t.Mb(4608,s.Nb,s.Nb,[s.b,t.m,t.w]),t.Mb(1073742336,r.b,r.b,[]),t.Mb(1073742336,h.o,h.o,[]),t.Mb(1073742336,h.e,h.e,[]),t.Mb(1073742336,s.Gb,s.Gb,[]),t.Mb(1073742336,_.o,_.o,[[2,_.t],[2,_.m]]),t.Mb(1073742336,w,w,[]),t.Mb(1073742336,o,o,[]),t.Mb(1024,_.k,(function(){return[[{path:"",component:k}]]}),[])])}))}}]);