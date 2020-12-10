import { Component, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import { NavController, IonSlides, Platform, LoadingController, ActionSheetController , Events} from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { LocationService } from '../../services/location/location.service';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
// import { Diagnostic } from '@ionic-native/diagnostic';
// import { AndroidPermissions } from '@ionic-native/android-permissions';
// import { Storage } from '@ionic/storage';
// import { Geolocation } from '@ionic-native/geolocation';
// import { TabsPage } from '../../pages/tabs/tabs';
import { UserService } from '../../services/user/user.service';
import { ImageService } from '../../services/image/image.service';
import Sortable from 'sortablejs';

@Component({
    selector: 'app-register-preferences',
    templateUrl: './register-preferences.page.html',
    styleUrls: ['./register-preferences.page.scss'],
})
export class RegisterPreferencesPage implements OnInit {
    // @ViewChild('input') input;
    public form: FormGroup;
    index: any = 0;
    photos: any = []
    photosLoad: any = []
    showNext = true;
    showClose = true;
    currentIndex: any = 1;
    slideEnd: boolean = false;
    slideBeginning: boolean = true;
    user: any = {};
    year: any;
    showBack = false;
    // @ViewChild('slides', { static: false }) slider: IonSlides;
    @ViewChild('myInput', { static: false }) myInput: ElementRef;
    isLocationEnabled: boolean = false;
    slideOpts = {
        initialSlide: 0,
        // speed: 1000,
        direction: 'vertical',
        // spaceBetween: 20,
        // slidesPerView: 1.2,
        // centeredSlides: true
    };

    constructor(
	    public actionSheetController: ActionSheetController,
        public userService: UserService,
    	public imageService: ImageService, 
    	public diagnostic: Diagnostic, 
    	public events: Events, 
    	public locationService: LocationService, 
    	public androidPermissions: AndroidPermissions, 
        public fb: FormBuilder,
        public ngZone: NgZone,
        public router: Router,
        public camera: Camera,
        // public geolocation: Geolocation, 
        // public storage: Storage, 
        // public androidPermissions: AndroidPermissions, 
        // public diagnostic: Diagnostic, 
        public platform: Platform,
        public navCtrl: NavController) {

        let date = new Date();
        this.year = date.getFullYear() - 18

        if (this.platform.is('cordova')) {
            // this.diagnostic.isLocationEnabled().then(resp => {
            //  this.isLocationEnabled = resp;
            // })
        }

        this.form = this.fb.group({
            name: ['', Validators.required],
            gender: ['', Validators.required],
            interested: ['', Validators.required],
            dob: [new Date().toISOString(), Validators.required],
            // distance: [user.distance, Validators.required ],
            age: [{ lower: 18, upper: 40 }, Validators.required]
        });

    }


    ngOnInit() {

        // this.slider.lockSwipes(true);
        this.userService.currentUser.subscribe((user: any) => {
            this.user = user;
            console.log("user ", user)
            if (Object.keys(this.user).length > 0) {
                this.photos = Array.from(user.photos || []);
                this.form = this.fb.group({
                    name: [user.name, Validators.required],
                    gender: ['Male', Validators.required],
                    interested: ['Female', Validators.required],
                    dob: [new Date().toISOString(), Validators.required],
                    // distance: [user.distance, Validators.required ],
                    age: [user.age, Validators.required]
                });
            }
        })

    }


  async presentActionSheet() {

    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image From',
      buttons: [{
        text: 'Load from Gallary',
        handler: () => {
        	this.imageService.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY).then((data:any) => {
                        	console.log("image data ", data)
                        	this.photos.push(data);
						    this.userService.updateCurrentUser({photos: this.photos}).then(()=>{
						    	// this.navCtrl.pop();
						    // this.events.publish("preferences:updated")
							})                        	
                            // resolve(data)
                        }).catch((err) => {
                            // reject(err)
                        })
        }
      }, {
        text: 'Take Picture',
        handler: () => {
        	this.imageService.takePicture(this.camera.PictureSourceType.CAMERA).then((data:any) => {
                        	console.log("image data ", data)
                        	this.photos.push(data);
						    this.userService.updateCurrentUser({photos: this.photos}).then(()=>{
						    	// this.navCtrl.pop();
						    // this.events.publish("preferences:updated")
							})                        	
                            // resolve(data)
                        }).catch((err) => {
                            // reject(err)
                        })
        }
      }, {
        text: 'Cancel',
        handler: () => {
          console.log('Share clicked');
        }
      }]
    });
    await actionSheet.present();
  }


    submit() {

          console.log('submit clicked');

        //  let that = this;
        //  this.update();
        //  // this.loading.present();
         if(this.platform.is('cordova'))
         {
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION, this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION]).then(()=>{

        	let userObj = Object.assign(this.form.value)
        	userObj.setUp = true;

        	this.locationService.getCurrentPosition().then((location) => {
        		userObj.location = location;
		        this.userService.updateCurrentUser(userObj).then(() => {
		            this.router.navigateByUrl('/tabs/home').then(()=> {
              		  this.events.publish("getNearByUsers");
		            })
		            //this.events.publish("preferences:updated")
		            // this.loadingProvider.dismiss();
		            // this.viewCtrl.dismiss();
		        })
        	})


           //this.slider.lockSwipeToPrev(false);
           //this.slider.slideNext();
           //  this.geolocation.getCurrentPosition().then((resp) => {
           //      let lat = resp.coords.latitude;
           //      let long = resp.coords.longitude;
           //      let currentPosition = {lat: lat, long: long}
           //      that.storage.set('location', currentPosition);
           //  })

           // that.savePreferences();
             //this.navCtrl.setRoot(TabsPage)
        })
         }
        //  else
        //  {
        //       this.diagnostic.requestLocationAuthorization()
        //       .then(function(){

        //       })
        //    // this.geolocation.getCurrentPosition().then((resp) => {
        //    //     let lat = resp.coords.latitude;
        //    //     let long = resp.coords.longitude;
        //    //     let currentPosition = {lat: lat, long: long}
        //    //     that.storage.set('location', currentPosition);
        //    // })

        // // this.navCtrl.insert(0,TabsPage);
        // // this.navCtrl.popToRoot().then(function(){
        // //         that.userService.initialize(that.params.data.userID)
        // //       })
        //    // that.savePreferences();
        //      //this.navCtrl.setRoot(TabsPage)
        //  }
    }

    savePreferences() {
        let that = this;
        this.userService.updateCurrentUser(this.form.value)
            .then(function() {
                // that.navCtrl.setRoot(TabsPage).then(function(){
                // localStorage.setItem('setUp', 'true');
                //  that.userService.initialize(that.params.data.userID)
                // })
            })
    }


    slideChange() {
        // this.slider.getActiveIndex()
        //     .then(data => {
        //         this.currentIndex = data;
        //     });

        let that = this;
        // this.slider.isEnd()
        //     .then(data => {
        //         this.slideEnd = data;
        //     });
        // this.slider.isBeginning()
        //     .then(data => {
        //         that.slideBeginning = data;
        //     });
    }

    onSlideChangeStart(slider: IonSlides) {
        // this.showNext = !slider.isEnd();
        // this.showClose = slider.isBeginning();
        // this.showBack = !slider.isBeginning();
    }

    ionViewDidEnter() {
        // this.slider.update();
        // let that = this;
        // this.slider.lockSwipes(true);
        setTimeout(() => {
            // that.slider.lockSwipes(true);
            // this.input.setFocus();
        }, 500);
    }

    next() {
    	this.ngZone.run(() => ++this.currentIndex)

		        this.userService.updateCurrentUser(this.form.value).then(() => {
		            // this.router.navigateByUrl('/tabs/home');
		            // //this.events.publish("preferences:updated")
		            // // this.loadingProvider.dismiss();
		            // // this.viewCtrl.dismiss();
		        })

    	// console.log("this.currentIndex ", this.currentIndex)
        // this.slider.lockSwipes(false);
        // this.slider.slideNext();
        // this.slider.lockSwipes(true);
    }

    back() {
    	// console.log("this.currentIndex ", this.currentIndex)
    	this.ngZone.run(() => --this.currentIndex)
        // this.slider.lockSwipes(false);
        // this.slider.slidePrev();
        // this.slider.lockSwipes(true);
    }

    addPhoto() {
        // this.Imagehandler.uploadimage()
        // .then(resp => {
        //  // this.photo = resp;
        //  this.photos.push(resp)
        //  let photos = Array.from(this.photos)
        //  this.userService.updatePreferencesPhotos(photos, this.params.data.userID);
        // })
    }

    removePhoto(i) {
        // this.photos.splice(i,1);
        // console.log(this.photos)
        // this.userService.updatePreferencesPhotos(this.photos, this.params.data.userID);
    }

    update() {
        // // this.loading.present();
        // let photos = Array.from(this.photos)
        // this.userService.updatePreferencesPhotos(photos, this.params.data.userID).then(()=>{
        // // this.loading.dismiss();
        // })
    }

    resize() {
        var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    }


    imageload(item) {
        this.photosLoad[item] = true;
    }

    placeholder(item) {
        if (this.photosLoad[item])
            return false
        else
            return true;
    }

}