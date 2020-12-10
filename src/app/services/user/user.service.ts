import { Injectable } from '@angular/core';
import { Platform, Events } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs";
import { map, filter } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as ImagePreloader from 'image-preloader'
import { LocationService } from '../location/location.service';
import * as countryInfo from 'country-code-info'


@Injectable({
    providedIn: 'root'
})
export class UserService {
    searchURL: any = 'https://us-central1-amoreblinddating.cloudfunctions.net/api/nearby';
    currentLocation: any = { lat: 28.72604813254923, long: 77.2196788349934 }
    database: string = "user";
    userDoc: AngularFirestoreDocument < any > ;
    user: any = {};
    currentPosition: any = {};
    // geo = geofirex.init(firebase);
    realMessagesDB: any = [];
    postsDB: any = [];
    blockedUsersDB: any = [];
    notificationsDB: any = [];
    firePassedUsers: any = [];
    urlUpdateUser: any = 'https://us-central1-amoreblinddating.cloudfunctions.net/api/updateuser';
    messages = new Rx.BehaviorSubject(this.realMessagesDB);
    posts = new Rx.BehaviorSubject(this.postsDB);
    currentUser = new Rx.BehaviorSubject({});
    blockedUsers = new Rx.BehaviorSubject({});
    notifications = new Rx.BehaviorSubject(this.notificationsDB);

    constructor(
        private platform: Platform,
        private events: Events,
        private http: HttpClient,
        public afs: AngularFirestore,
        public locationService: LocationService
    ) {


    }

    initialize(uid) {
        let that = this;

        this.userDoc = this.afs.collection('users').doc(uid)
        console.log("events setup:notifications ", uid)
        if(this.platform.is('cordova'))
        this.events.publish('setup:notifications', uid);

        // this.checkLocationAvailable(uid);

        this.platform.pause.subscribe(() => {
            // this.update({ online: false })
        });

        this.platform.resume.subscribe(() => {
            // this.update({ online: true })
        });

        this.locationService.getCurrentPosition().then(location => {
            console.log(location)
        })

        this.afs.collection('userLastMessages').doc(uid).collection('allchats', ref => ref.orderBy('order')).valueChanges().subscribe(resp => {
            that.realMessagesDB = Array.from(resp)
            that.messages.next(that.realMessagesDB)
            let arr = that.realMessagesDB.filter(res => res.read == false);
            let badge = arr.length;
            that.events.publish('message:count', badge);
        })

        let initialize = 0;
        this.afs.collection('users').doc(uid).valueChanges().subscribe((resp: any) => {
            that.user = resp;
            setTimeout(function(){ 
                if(that.user.photos)
                ImagePreloader.simplePreload(that.user.photos[0])
            }, 3000);

            if(!this.user.country)
            this.updateUserLocation();

            if(initialize == 0)
            {
                initialize++;
                this.events.publish("getNearByUsers");
            }
            // that.checkSubscription(that.user.subscription,that.user.lastPointsUpdated);
            if(this.platform.is('cordova'))
            {
            that.checkSubscription(that.user.subscription,that.user.lastPointsUpdated);
            that.events.publish('onesignal:setSubscription', resp['pushNotifications']);
            }
            that.currentUser.next(resp)
        })

        this.afs.collection('blocked').doc(uid).valueChanges().subscribe((resp: any) => {
            // console.log("blocked ", resp)
            that.firePassedUsers = resp
            //    if(resp.hasOwnProperty('blocked'))
            let b = { blocked: [], disliked: [], liked: [] }
            that.blockedUsers.next(resp || b)
        })

        this.afs.collection('notifications').doc(uid).collection('notifications', ref => ref.limit(50)).valueChanges().subscribe(resp => {

            let arr = resp.filter(res => res.read == false);
            let badge = arr.length;
            that.events.publish('notification:count', badge);

            that.notifications.next(resp)
        })
    }

    checkSubscription(subscription,lastPointsUpdated) {
      if(subscription == true)
      {
        let date = this.formatDate(new Date());
        if(lastPointsUpdated != date)
          this.updateCurrentUser({lastPointsUpdated: date, starPoints: 10})
      }
    }

    getNearbyUsers(lastDate) {
        return new Promise((resolve) => {
            let that = this;
            // this.fetchingData = true;

            // this.locationService.currentPosition.subscribe((cords:any) => {
            //     if(Object.keys(cords).length > 0)
            //     {
                let query = {
                    uid: this.user.uid,
                    lastDate: lastDate,
                    limit: 10,
                    longitude: this.locationService.currentPosition.longitude,
                    latitude: this.locationService.currentPosition.latitude,
                    gender: this.user.interested,
                    age: this.user.age,
                    // distance: this.currentUser.distance * 1000
                }

                // console.log(" query -------------- query ",query)

                this.http.post(this.searchURL, query)
                    .subscribe(resp => {

                        resolve(resp);
                        // that.fetchingData = false;
                        // that.userLength = resp.length
                        // that.page = that.page + 1;
                        // if (resp.length > 0)
                        //     that.lastDate = resp[resp.length - 1].createdAt

                        // that.nearByUsers = that.nearByUsers.concat(resp);

                    }, err => {
                        console.log(err)
                    })  
                // }
            // })

        });


    }

    getOneUser(uid) {
        return new Promise((resolve) => {
            this.afs.collection('users').doc(uid).ref.get().then((user: any) => {
                resolve(user.data())
            })
        })
    }

    updateUserLocation() {

        // let location = localStorage.getItem('location')
        // if(location != null){
        //     // this.events.publish("getNearByUsers");
        // }

        this.locationService.getCurrentPosition().then((location: any) => {
            let loc = {
                type: "Point",
                coordinates: [location.longitude, location.latitude]
            }
            this.http.get("https://api.ipify.org/?format=json")
                .subscribe((resp: any) => {
                    // console.log(resp)
                    // resp => resp.json();
                    this.http.get("https://ipfind.co/?ip=" + resp.ip)
                        .subscribe((data: any) => {


                    this.http.get("https://restcountries.eu/rest/v2/alpha/" + data.country_code)
                        .subscribe((d: any) => {
                            // this.updateCurrentUser({ loc: loc, city: data.city, country: data.country });
                        })


                            this.updateCurrentUser({ loc: loc, city: data.city, country: data.country });
                        })
                })
            // console.log(location)
        })
    }

    getCallingCode() {
        return new Promise((resolve) => {
            let callingCode = localStorage.getItem('callingCode');
            if(callingCode != null)
            {
                resolve(callingCode)
            }
            else
            {
            this.http.get("https://api.ipify.org/?format=json")
                .subscribe((resp: any) => {
                            console.log("ipify ",resp)
                    // resp => resp.json();
                    this.http.get("https://ipfind.co/?ip=" + resp.ip)
                        .subscribe((data: any) => {
                            console.log("ipfind ",data.country_code)

                    let country = countryInfo.findCountry({'gec': data.country_code});

                            console.log("country ",country)
                            
                            callingCode = country.dial;
                            localStorage.setItem('callingCode', callingCode)
                            resolve(callingCode)

                    // this.http.get("https://restcountries.eu/rest/v2/alpha/" + data.country_code)
                    //     .subscribe((d: any) => {
                    //         callingCode = d.callingCodes[0];
                    //         console.log("callingCode ",callingCode)
                    //         localStorage.setItem('callingCode', callingCode)
                    //         resolve(callingCode)
                    //         // this.updateCurrentUser({ loc: loc, city: data.city, country: data.country });
                    //     })
                        })
                })
            }
        })

    }


    updateCurrentUser(userData) {
        return new Promise((resolve) => {
            this.afs.collection('users').doc(this.user.uid).update(userData).then(() => {
                resolve(true)
            })
        })
    }

    updateUserStatus(userId, activity) {
        // return new Promise((resolve) => {
        let arry = Array.from(this.firePassedUsers[activity]);
        arry.push(userId)
        let obj = {}
        obj[activity] = arry
        this.afs.collection('blocked').doc(this.user.uid).update(obj)
        // })
    }

    updateAllUsers() {
        this.afs.collection('users').ref.get().then((users: any) => {
            // console.log(users.length);
            let i = 0;
            let that = this;
            users.forEach(data => {
                let user = data.data();
                // ++i;

               this.afs.collection('users').doc(user.uid).update({ age: { lower: 19, upper: 40 } });

                // if(user.point && !user.address)
                // {
                    // setTimeout(function(){ 
                    // that.http.get('https://geocode.xyz/' + user.point.geopoint._lat + ',' + user.point.geopoint._long + '?geoit=json').subscribe((response: any) => {
                    //     let address = response.city + ', ' + response.country;
                    //     console.log(address)
                    //    that.updateCurrentUser({ address: address });
                    // });  
                    // }, i*2000);
                  

                // }
            // this.http.get('https://geocode.xyz/' + user.point.geopoint.latitude + ',' + user.point.geopoint.longitude + '?geoit=json').subscribe((response: any) => {
            //     let address = response.city + ', ' + response.country;
            //     console.log(address)
            //    // this.updateCurrentUser({ address: address });
            // });

              //  this.afs.collection('users').doc(user.uid).update({ age: { lower: 18, upper: 40 } });
                // console.log(data.data());
            });
        })
    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    } 

}