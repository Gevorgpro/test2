import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';


@Injectable()
export class LoadingService {

	loading:any;

	constructor(public toastCtrl: ToastController,
				public loadingCtrl: LoadingController) {

	//	console.log('Hello LoadingProvider Provider');

	}

	// For present loading
	// presentLoading() {
	// 	this.loading = this.loadingCtrl.create({
	// 		content: 'Please wait...'
	// 	});
	// 	this.loading.present();
	// }
	
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  dismiss(){
    this.loading.dismiss();
  }
	// Toast message
	// presentToast(text) {
	// 	let toast = this.toastCtrl.create({
	// 		message: text,
	// 		duration: 3000,
	// 		position: 'top'
	// 	});
	// 	toast.present();
	// }

}
