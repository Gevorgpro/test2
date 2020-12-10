import { Component, ViewChild, OnInit, NgZone  } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { IonSlides, Events, ModalController } from '@ionic/angular';
import { LocationService } from '../../services/location/location.service';
import { MessagesService } from '../../services/messages/messages.service';
import { Router } from '@angular/router';
import * as ImagePreloader from 'image-preloader'
import { SendMessagePage } from '../send-message/send-message.page';
import { UpgradePage } from '../upgrade/upgrade.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    @ViewChild('slider', { static: false }) slider: IonSlides;
    lastDate: any = new Date();
    currentIndex: any = 0;
    currentUser: any = {};
    user: any = {};
    slideOpts = {
        initialSlide: 0,
        speed: 400,
        // direction: 'vertical',
        // spaceBetween: 20,
        // slidesPerView: 1.2,
        // centeredSlides: true
    };
    slideOpts2 = {
        initialSlide: 0,
        speed: 400,
        direction: 'vertical',
        // spaceBetween: 20,
        // slidesPerView: 1.2,
        // centeredSlides: true
    };
    liked: boolean = false;
    disliked: boolean = false;
    crossPressed: boolean = false;
    nearbyUsers:any = [];
    nearbyUsersEnd:boolean = false;
    drag: boolean = false;
    isBeginning: boolean = true;
    isEnd: boolean = false;
    data: any = ["assets/imgs/1.jpeg", "assets/imgs/2.jpeg", "assets/imgs/3.jpeg", "assets/imgs/4.jpeg", "assets/imgs/2.jpeg", "assets/imgs/3.jpeg", "assets/imgs/4.jpeg"]

    data2: any = ["assets/imgs/1.jpeg", "assets/imgs/2.jpeg", "assets/imgs/3.jpeg", "assets/imgs/4.jpeg", "assets/imgs/2.jpeg", "assets/imgs/3.jpeg", "assets/imgs/4.jpeg"]


    constructor(
        public userService: UserService,
        public messagesService: MessagesService,
        public events: Events,
        public ngZone: NgZone,
        public modalController: ModalController,
        public locationService: LocationService,
        private router: Router
        ) {

    }

  ngOnInit() {
        this.userService.currentUser
            .subscribe((user: any) => {
                this.user = user;
            })


            this.events.subscribe("getNearByUsers", () => {
                 // this.getNearbyUsers();
            });
            this.events.subscribe("preferences:updated", () => {
                  this.nearbyUsers = [];
                //  this.getNearbyUsers();
            });
  }

  getNearbyUsers(){
        this.userService.getNearbyUsers(this.lastDate).then((data:any) => {

                if (data.length > 0)
                {
                    this.lastDate = data[data.length - 1].createdAt

                // this.nearbyUsers = data;

                // console.log(" nearbyUsers ",data)
                // this.nearbyUsers.forEach(function(user){

                //     user.photos.forEach(function(photo){
                //         ImagePreloader.simplePreload(photo)
                //             .then(function(status){
                //             }).catch(function() {
                         
                //             });
                //     })
                // })

                // this.currentIndex = 0;
                this.nearbyUsers = this.nearbyUsers.concat(data);
                if(this.isBeginning)
                this.currentUser = this.nearbyUsers[0]
                // this.slider.lockSwipes(true)
                }
                else
                {
                    this.nearbyUsersEnd = true
                }
        })
  }

    calculateAge(dob) { // birthday is a date
        dob = new Date(dob);
        var ageDifMs = Date.now() - dob.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }    

    slideChange() {
        this.slider.getActiveIndex()
            .then(index => {
                this.currentIndex = index;
                this.currentUser = this.nearbyUsers[this.currentIndex]

                this.slider.isBeginning().then(resp => {
                    this.isBeginning = resp
                })
                this.slider.isEnd().then(resp => {
                    this.isEnd = resp
                })
                //if(index == (this.nearbyUsers.length -5) && !this.nearbyUsersEnd)
                  //  this.getNearbyUsers();
            });

        // this.slider.isEnd()
        //     .then(data => {
        //         this.slideEnd = data;
        //     });
    }

    ionSlideTransitionEnd(){
                // console.log(" ionSlideTransitionEnd ")
                if(this.crossPressed)
                {
                //     this.slider.getPreviousIndex().then(index => {
                // console.log(" this.slider.getPreviousIndex() ",index )
                // this.nearbyUsers.splice(index, 1)
                // this.slider.slideTo(this.currentIndex)
                //     })
                }
    }

    back() {
        this.data.splice(0, 1)
    }

cross(){
        let that = this;
        // this.currentIndex++;
                // this.slider.lockSwipes(false)
                this.disliked = true
                this.crossPressed = true
                console.log(" currentIndex ",this.currentIndex)
                // this.nearbyUsers.splice(this.currentIndex, 1)
            setTimeout(function() {
                // that.slider.slideNext().then(resp => {
                that.disliked = false
                that.nearbyUsers.splice(that.currentIndex, 1)
            //    if(that.nearbyUsers.length == 5)
                 //   that.getNearbyUsers();
                // that.currentUser = that.nearbyUsers[that.currentIndex]
                // // that.slider.lockSwipes(true)
                // })
                // that.nearbyUsers.splice(that.currentIndex, 1)
                // that.slider.update();

             that.userService.updateUserStatus(that.currentUser.uid, 'disliked')

    
            // setTimeout(function() {
            //     that.crossPressed = false
            //     // that.nearbyUsers.splice(this.currentIndex - 1, 1)
            //     // that.currentIndex = that.currentIndex -1;
            // }, 2000);
                    
             // let callback = that.navParams.get("callback")

             // that.userProvider.updateUserStatus(that.user.uid, 'disliked')
             // if(that.navParams.data.source == 'postchat')
             // {
             //     that.navCtrl.popToRoot();
             // }
             // else
             // {
             // callback({id: that.navParams.get("id"), action: 'cross'}).then(()=>{
             //    that.navCtrl.pop(animationsOptions)
             // });
             // }
            }, 1000);
}

    like() {
        let that = this;
        this.liked = true

        this.presentModal();

            setTimeout(function() {
                // that.nearbyUsers.splice(0, 1)
                that.liked = false

    
                    
             // let callback = that.navParams.get("callback")

             // that.userProvider.updateUserStatus(that.user.uid, 'disliked')
             // if(that.navParams.data.source == 'postchat')
             // {
             //     that.navCtrl.popToRoot();
             // }
             // else
             // {
             // callback({id: that.navParams.get("id"), action: 'cross'}).then(()=>{
             //    that.navCtrl.pop(animationsOptions)
             // });
             // }
            }, 500);
        // this.liked = false

    }

    previous(){
                this.slider.slidePrev().then(resp => {

                // this.currentUser = this.nearbyUsers[this.currentIndex]
                // that.slider.lockSwipes(true)
                })
    }

    next(){
                this.slider.slideNext().then(resp => {

                // this.currentUser = this.nearbyUsers[this.currentIndex]
                // that.slider.lockSwipes(true)
                })
    }

    getLikedClass() {
        if (this.liked)
            return 'likeUser'
        else
            return 'null'
    }

    getDisLikedClass(){
        if(this.disliked)
            return 'dislikeUser'
        else 
            return 'notDislikeUser'
    }

    dragging(ev) {
        let that = this;
        this.ngZone.run(() => that.drag = true)
        setTimeout(function() {
        that.ngZone.run(() => that.drag = false)
        }, 500);
    }

    getClass(){
    	if(this.drag == false)
    		return "opacityvisible"
    	else
    		return 'opacity'
    }

    openUser(user){
        console.log("user ", user)
      this.router.navigateByUrl('one-user/' + '?id='+user.uid + '&uid='+user.uid+"asdasdasd");
    }

    getDistance(geopoint) {
        let currentLocation = this.locationService.currentPosition;
        // console.log("geopoint ",geopoint)
        // console.log("currentLocation ",currentLocation)
        if(currentLocation)
        {
        let lat1 = currentLocation.latitude;
        let lon1 = currentLocation.longitude;
        let lat2 = geopoint[1];
        let lon2 = geopoint[0];
        var R = 6371; // km (change this constant to get miles)
        var dLat = (lat2 - lat1) * Math.PI / 180;
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        if (d > 1) return Math.round(d) + " km";
        else if (d <= 1) return Math.round(d * 1000) + " m";
        return d;
        }
    }

    async presentModal() {
        if(this.user.starPoints > 0)
        {
            const modal = await this.modalController.create({
                component: SendMessagePage,
                animated: true,
                cssClass: 'my-custom-modal-css'
            });

            modal.present();

            const { data } = await modal.onWillDismiss();
            if(data.status)
            {
                this.messagesService.sendMsg(data.message, this.currentUser.uid)
                this.userService.updateUserStatus(this.currentUser.uid, 'liked')
            }
        }
        else
        {
            const modal = await this.modalController.create({
                component: UpgradePage,
                animated: true,
                cssClass: 'my-custom-modal-css'
            });

            modal.present();
        }
    }

}