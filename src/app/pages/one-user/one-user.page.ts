import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ToastController, NavController, Platform, LoadingController } from '@ionic/angular';
import { LocationService } from '../../services/location/location.service';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.page.html',
  styleUrls: ['./one-user.page.scss'],
})
export class OneUserPage implements OnInit {
user: any = {photos:[]};
loading: any;
top: any = 0;
    slideOpts2 = {
        initialSlide: 0,
        speed: 400,
        direction: 'vertical',
        // spaceBetween: 20,
        // slidesPerView: 1.2,
        // centeredSlides: true
    };

  constructor(
        public userService: UserService,
        public platform: Platform,
        public locationService: LocationService,
        public loadingController: LoadingController,
        public navCtrl: NavController
        ) { }

  ngOnInit() {
  		this.presentLoading();
        let uid = this.platform.getQueryParam("id");
        // let id = this.platform.getQueryParam("uid");
            // console.log(uid)
            // console.log(id)
        this.userService.getOneUser(uid)
        .then(userData => {
        	this.user = userData;
            console.log(userData)
        	// this.loading.dismiss();
        })
  }

  logScrolling(ev){
    // console.log(ev.detail.scrollTop)
    this.top = ev.detail.scrollTop;
  }

  async presentLoading() {
    // this.loading = await this.loadingController.create({
    //   message: 'Please wait...'
    // });
    // await this.loading.present();
  }

  back(){
  	this.navCtrl.pop();
  }

    calculateAge(dob) { // birthday is a date
        dob = new Date(dob);
        var ageDifMs = Date.now() - dob.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
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

}
