import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ImageService } from '../../services/image/image.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import Sortable from 'sortablejs';
// import { LoadingProvider } from '../../providers/loading/loading';
// import { ImagehandlerProvider } from '../../providers/imagehandler/imagehandler';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    user: any = {};
    form: FormGroup;
    segment: any = 'person';
    photos: any = []
    photosLoad: any = {}

    constructor(
        public actionSheetController: ActionSheetController,
        public imageService: ImageService,
        public ngZone: NgZone,
        public userService: UserService,
        public navCtrl: NavController,
        public camera: Camera,
        public fb: FormBuilder
    ) {

        this.userService.currentUser
            .subscribe((user: any) => {
                this.user = user;
                this.photos = Array.from(user.photos || []);

                console.log(this.photos)

                this.form = this.fb.group({
                    name: [this.user.name, Validators.required],
                    gender: [this.user.gender, [Validators.required]],
                    dob: [this.user.dob, [Validators.required]],
                    work: [this.user.work, Validators.required],
                    education: [this.user.education, Validators.required],
                    about: [this.user.about, Validators.required]
                });
            })
    }

    ngOnInit() {}

    segmentChanged(ev) {
        console.log(ev.target.value)
        this.ngZone.run(()=> this.segment = ev.target.value)
    }

    update() {
        let user = JSON.parse(JSON.stringify(this.form.value));
        user.photos = this.photos
        this.userService.updateCurrentUser(user).then(() => {
            console.log("updated")
            this.navCtrl.pop();
            // this.events.publish("preferences:updated")
        })

        // let that = this;
        // // this.loadingProvider.present();
        // that.userService.update(that.form.value).then(() => {
        //     let photos = Array.from(that.photos)
        //     that.userService.updatePhotos(photos).then(() => {
        //         // that.loadingProvider.dismiss();
        //         // that.viewCtrl.dismiss();
        //     })
        // })
    }


    async presentActionSheet() {

        const actionSheet = await this.actionSheetController.create({
            header: 'Select Image From',
            buttons: [{
                text: 'Load from Gallary',
                handler: () => {
                    this.imageService.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY).then((data: any) => {
                        console.log("image data ", data)
                        this.photos.push(data);
                        this.userService.updateCurrentUser({ photos: this.photos }).then(() => {
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
                    this.imageService.takePicture(this.camera.PictureSourceType.CAMERA).then((data: any) => {
                        console.log("image data ", data)
                        this.photos.push(data);
                        this.userService.updateCurrentUser({ photos: this.photos }).then(() => {
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

        // const actionSheet = await this.actionSheetController.create({
        //   header: 'Select Image From',
        //   buttons: [{
        //     text: 'Load from Gallary',
        //     handler: () => {
        //      this.imageService.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY).then((data:any) => {
        //                      console.log("image data ", data)
        //                      this.photos.push(data);
        //        this.userService.updateCurrentUser({photos: this.photos}).then(()=>{
        //          // this.navCtrl.pop();
        //        // this.events.publish("preferences:updated")
        //      })                          
        //                         // resolve(data)
        //                     }).catch((err) => {
        //                         // reject(err)
        //                     })

        //   }, {
        //     text: 'Take Picture',
        //     handler: () => {

        //     }
        //   }, {
        //     text: 'Cancel',
        //     handler: () => {
        //       console.log('Share clicked');
        //     }
        //   }]
        // });
        // await actionSheet.present();
    }


    addPhoto() {
        // this.imageService.presentActionSheet().then(userImage => {


        // })
        // this.Imagehandler.uploadimage()
        //     .then(resp => {
        //         this.photos.push(resp)
        //         let photos = Array.from(this.photos)
        //         this.userService.updatePhotos(photos);
        //     })
    }

    removePhoto(i) {
        this.photos.splice(i, 1);
        console.log(this.photos)
        // this.userService.updatePhotos(this.photos);
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

    dismiss() {
        // this.viewCtrl.dismiss();
    }

}