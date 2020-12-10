import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication/authentication.service';
import { UserService } from './services/user/user.service';
import { PurchaseService } from './services/purchase/purchase.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';




@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    initialized: boolean = false;
    keyboardHeight = 0;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private userService: UserService,
        private oneSignal: OneSignal,
        private purchaseService: PurchaseService,
        private events: Events,
        private ngZone: NgZone,
        private router: Router,
        private authService: AuthenticationService,
        private statusBar: StatusBar,
        private keyboard: Keyboard,

    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#ffffff');
            this.statusBar.overlaysWebView(true);


            let that = this;

            this.events.subscribe('setup:notifications', (uid) => {
                console.log("setup notifications ")
                that.setupNotifications(uid)
            })

            console.clear();

            if (this.platform.is('cordova'))
                this.purchaseService.getProducts();
            // .then( products => {
            //   console.log(products)
            //   // that.products = products;
            //   // that.product = products[0];
            // })
            // .catch( err => {
            //   console.log(err)
            // })


            window.addEventListener('keyboardDidShow', (e: any) => {
                console.log('this is Brazil keyboardDidShow');

                that.ngZone.run(() => that.keyboardHeight = e.keyboardHeight)

                const activeEle: any = document.activeElement;
                if (activeEle.type === 'textarea') {
                    activeEle.scrollIntoView();
                }
            });
            window.addEventListener('keyboardDidHide', () => {
                console.log('this is Brazil keyboardDidHide');
                that.ngZone.run(() => that.keyboardHeight = 0)
                // that.keyboardHeight = 0;
            });
            window.addEventListener('keyboardWillHide', () => {
                console.log('this is Brazil keyboardWillHide');
                that.ngZone.run(() => that.keyboardHeight = 0)
                // that.keyboardHeight = 0;
            });
            this.keyboard.hideFormAccessoryBar(false);

            // this.statusBar.backgroundColorByHexString('#30cfd0');

            this.authService.initialize().then((state: any) => {
                console.log("state authservice ", state)
                if (!state.status) {
                    this.splashScreen.hide();
                    this.router.navigate(['login']);
                }
            })

            this.userService.currentUser.subscribe((user: any) => {
                this.splashScreen.hide();
                if (Object.keys(user).length > 0) {
                    if (!this.initialized) {
                        console.log("userService currentUser ", user)
                        this.initialized = true;
                        this.userService.initialize(user.uid);

                        if (this.platform.is('cordova'))
                            this.purchaseService.initialize();

                        if (user.setUp) {
                            this.router.navigate(['tabs']);
                        } else {

                            this.router.navigate(['register-preferences']);
                        }
                    }
                }
                // else
                // {
                //       this.router.navigate(['login']);
                // }
            });


            // this.authService.authenticationState.subscribe(state => {
            //   if (state) {
            //     this.router.navigate(['tabs']);
            //   } else {
            //     this.router.navigate(['login']);
            //   }
            // });

        });
    }




    setupNotifications(userID) {
      // if (isCordovaAvailable()) {
            let that = this;
            this.oneSignal.startInit('49dfcb39-6976-4a0a-bbab-07920bb645a0', '133084582554');
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
            this.oneSignal.sendTag('userID', userID)

            // console.log("sendTag setupNotifications ",userID)
            this.oneSignal.handleNotificationReceived().subscribe((data) => {
                 console.log(" do something when notification is received ",data)

                // let toast = that.toastController.create({
                //      message: '<b>'+data.payload.additionalData.name + ':</b><br>' + data.payload.body,
                //      duration: 3000,
                //      position: 'top',
                //      cssClass: "className",
                //    });

                // if(that.nav.getActive().name != "ChatPage")
                // toast.present();

            });

            this.events.subscribe('onesignal:setSubscription', res => {
                 console.log("onesignal setSubscription ", res)
                that.oneSignal.setSubscription(res);
            })

            this.oneSignal.handleNotificationOpened().subscribe((data) => {
                console.log("onesignal setSubscription ", data)
            });

            this.oneSignal.endInit();
            this.oneSignal.getIds().then((id) => {
                //console.log("player id ", id);
                // id.userId 
            });
        // }
    }
};
