import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Facebook } from '@ionic-native/facebook/ngx';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import * as Rx from "rxjs";
import { auth } from 'firebase/app';
import { UserService } from '../user/user.service';
import { LocationService } from '../location/location.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    authenticationState = new Rx.BehaviorSubject(false);
    loginMethod: any;

    constructor(
        private platform: Platform,
        public fb: Facebook,
        public firestore: AngularFirestore,
        private splashScreen: SplashScreen,
        public http: HttpClient,
        public router: Router,
        public userService: UserService,
        private afAuth: AngularFireAuth,
        public locationService: LocationService
    ) {
        this.platform.ready().then(() => {
            this.checkToken();
        });
    }

    initialize() {
        let that = this;
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged(function(user) {
                // if (user.providerData[0].providerId == 'facebook') {
                //     if (user) {
                //         console.log("onAuthStateChanged ", user.uid)

                //         that.firestore.collection('users').doc(user.uid).ref.get().then((userData: any) => {
                //             let data = userData.data();
                //             console.log("user data ", data)
                //             that.userService.currentUser.next(data);
                //             resolve({ status: true, setUp: data.setUp })
                //         })
                //     } else {
                //         resolve({ status: false })
                //     }
                // }
                // if (user.providerData[0].providerId == 'phone') {

                // }

                if (user) {
                    console.log("onAuthStateChanged ", user.uid)

                    that.firestore.collection('users').doc(user.uid).ref.get().then((userData: any) => {
                        let data = userData.data();
                        console.log("user data ", data)
                        if(data){
                        that.userService.currentUser.next(data);
                        that.userService.initialize(user.uid)
                        that.router.navigate(['tabs']);
                        resolve({ status: true, setUp: data.setUp })
                        }
                        else
                        {
                            let userData = {
                                name: '',
                                email: '',
                                uid: user['uid'],
                                subscription: false,
                                distance: 50,
                                starPoints: 10,
                                bonusReceived: false,
                                pushNotifications: true,
                                show: true,
                                setUp: false,
                                age: { lower: 18, upper: 38 }
                            };

                            that.firestore.collection('users').doc(user.uid).set(userData).then((d: any) => {
                                that.userService.initialize(user.uid)
                                that.router.navigateByUrl('/register-preferences');
                        })
                        reject({ status: false, providerId: user.providerData[0].providerId })
                        }
                    }, error => {
                        console.log("user error ", error)
                    })
                } else {
                    that.router.navigate(['login']);
                    resolve({ status: false })
                }
            });
        })
    }

    login() {
        this.loginMethod = 'facebook';
        return new Promise((resolve, reject) => {
            if (this.platform.is('cordova')) {
                this.deviceLogin(resolve, reject)
            } else {
                this.browserLogin(resolve, reject)
            }
        })
    }


    browserLogin(resolve, reject) {
        // this.loading.present();
        let that = this;
        var provider = new auth.FacebookAuthProvider();
        provider.addScope('email');
        provider.addScope('public_profile');
        that.afAuth.auth.signInWithPopup(provider)
            .then((data) => {
                console.log("browserLogin ", data);
                that.userAuth(data, resolve, reject)
            }, err => {
                // that.loading.dismiss();
            })
    }

    deviceLogin(resolve, reject) {
        // this.loading.present();
        let that = this;
        this.fb.login(['public_profile', 'email'])
            .then(response => {
                console.log("response", response);
                const facebookCredential = firebase.auth.FacebookAuthProvider
                    .credential(response.authResponse.accessToken);
                firebase.auth().signInAndRetrieveDataWithCredential(facebookCredential)
                    .then(data => {
                        console.log("signInAndRetrieveDataWithCredential", data);
                        that.userAuth(data, resolve, reject)
                    });
            }, error => {
                // that.loading.dismiss();
            })
    }

    userAuth(data, resolve, reject) {
        let that = this;
        let userRef = this.firestore.collection('users');
        let additionalUserInfo = data.additionalUserInfo;
        let user = data.user;
        // localStorage.setItem('userID', user['uid']);

        let userData = {
            name: additionalUserInfo.profile['name'],
            email: additionalUserInfo.profile['email'],
            uid: user['uid'],
            subscription: false,
            distance: 50,
            starPoints: 10,
            bonusReceived: false,
            pushNotifications: true,
            show: true,
            setUp: false,
            age: { lower: 18, upper: 38 }
        };

        this.locationService.getCurrentPosition().then((location: any) => {

            let loc = {
                type: "Point",
                coordinates: [location.longitude, location.latitude]
            }

            that.http.get("https://api.ipify.org/?format=json")
                .subscribe((resp: any) => {
                    // console.log(resp)
                    // resp => resp.json();
                    that.http.get("https://ipfind.co/?ip=" + resp.ip)
                        .subscribe((data: any) => {
                            this.userService.updateCurrentUser({ loc: loc, city: data.city, country: data.country });
                        })
                })


            // this.http.get('https://geocode.xyz/' + location.latitude + ',' + location.longitude + '?geoit=json').subscribe((response: any) => {
            //     let address = response.city + ', ' + response.country;
            //     console.log(address)
            // });

            // console.log(location)
        })

        if (additionalUserInfo.isNewUser) {
            userRef.doc(user.uid).set(userData).then(function() {
                that.firestore.collection('blocked').doc(user['uid']).set({ blocked: [], liked: [], hisent: [], disliked: [] })
                    .then(function() {})

                resolve({ status: true, isNewUser: true, userID: user['uid'], userData });
            })
        } else {
            resolve({ status: true, isNewUser: false, userID: user['uid'], userData });
        }
    }

    checkLocation() {
        // this.http.get('https://geocode.xyz/28.5933007,77.3191839?geoit=json').subscribe((response) => {
        //     // console.log(response)
        // });
    }

    checkToken() {
        // this.storage.get(TOKEN_KEY).then(res => {
        //   if (res) {
        //     this.authenticationState.next(true);
        //   }
        // })

        this.authenticationState.next(false);
    }

    FacebookAuth() {
        return this.AuthLogin(new auth.FacebookAuthProvider());
    }

    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .then((result) => {
                console.log('You have been successfully logged in!')
            }).catch((error) => {
                console.log(error)
            })
    }

    phoneAuth(phone, recaptchaVerifier) {
        console.log("phone ", phone)
        this.loginMethod = 'phone';
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithPhoneNumber(phone, recaptchaVerifier)
                .then((result) => {
                    resolve(result.verificationId)
                    console.log(result)
                }).catch((error) => {
                    console.log(error)
                    if (error.code == 'auth/invalid-phone-number')
                        reject('Invalid phone number!')
                })
        })
    }

    verifyPhoneAuth(verificationId, code) {
        return new Promise((resolve, reject) => {
            const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
            this.afAuth.auth.signInAndRetrieveDataWithCredential(credential).then(resp => {
                console.log("signInAndRetrieveDataWithCredential ", resp)
                resolve(resp)
            }, error => {
                console.log("signInAndRetrieveDataWithCredential error ", error)
                reject(error)
            })
        })
    }


    logout() {
        return this.afAuth.auth.signOut()
        // return this.storage.remove(TOKEN_KEY).then(() => {
        //   this.authenticationState.next(false);
        // });
    }

    isAuthenticated() {
        return this.authenticationState.value;
    }
}