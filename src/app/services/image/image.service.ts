import { Injectable } from '@angular/core';
import { LoadingController, ActionSheetController} from '@ionic/angular';
// import { File } from '@ionic-native/file';
// import { FilePath } from '@ionic-native/file-path';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { UserService } from '../user/user.service';
// import { Crop } from '@ionic-native/crop';
import { Camera } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
// import { LoadingProvider } from '../../providers/loading/loading';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
	user: any = {};
	userId: any;
    nativepath: any;
    firestore = firebase.storage();
    task: AngularFireUploadTask;
    loading: any;

  constructor(
	    public userService: UserService,
	    public actionSheetController: ActionSheetController,
        public fileChooser: FileChooser,
        private camera: Camera,
        public fireStorage: AngularFireStorage,
        public loadingController: LoadingController
    ) { 

    	this.userService.currentUser.subscribe(user => {
    		this.user = user;
        	this.userId = this.user.uid;
    	})
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image From',
      buttons: [{
        text: 'Load from Gallary',
        handler: () => {
        	// let that = this;
         //                that.takePicture(that.camera.PictureSourceType.PHOTOLIBRARY).then((data:any) => {
         //                	console.log("image data ", data)
         //                    resolve(data)
         //                }).catch((err) => {
         //                    reject(err)
         //                })
        }
      }, {
        text: 'Take Picture',
        handler: () => {
          console.log('Share clicked');
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

    takePicture(sourceType) {
		console.log("take picture")
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };

        let that = this;
        return new Promise((resolve, reject) => {
            this.camera.getPicture(options).then((imagePath) => {
    			this.presentLoading();
                let image = 'data:image/jpeg;base64,' + imagePath;
                // this.loadingProvider.present();
                let t = new Date().getTime();
                const path = 'userphotos/' + t + '.jpg';
                this.task = that.fireStorage.ref(path).putString(image.toString(), 'data_url')

    const fileRef = this.fireStorage.ref(path);


    this.task.snapshotChanges().pipe(
        finalize(() => {
        	fileRef.getDownloadURL().subscribe(resp => {
    			that.loading.dismiss();
        		resolve(resp)
        	});
            // this.loadingProvider.dismiss();
        })
     )
    .subscribe()
}, (err) => {});
        })
    }

    uploadimage() {

                
        // return new Promise((resolve, reject) => {
        //     let actionSheet = this.actionSheetCtrl.create({
        //         title: 'Select Image From',
        //         buttons: [{
        //             text: 'Load from Gallary',
        //             handler: () => {
        //                 this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY).then((data) => {
        //                     resolve(data)
        //                 }).catch((err) => {
        //                     reject(err)
        //                 })
        //             }
        //         }, {
        //             text: 'Camera',
        //             handler: () => {
        //                 this.takePicture(this.camera.PictureSourceType.CAMERA).then((data) => {
        //                     resolve(data)
        //                 }).catch((err) => {
        //                     reject(err)
        //                 })
        //             }
        //         }, {
        //             text: 'Cancel',
        //             role: 'cancel'
        //         }]
        //     });
        //     actionSheet.present();
        // })
    }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'uploading...'
    });
    await this.loading.present();
  }

}
