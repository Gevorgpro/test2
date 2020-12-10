import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, Events, ModalController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { UserProvider } from "../../providers/user/user";
// import { LoadingProvider } from '../../providers/loading/loading';
// import { UpgradePage } from '../../pages/upgrade/upgrade';
import { UserService } from '../../services/user/user.service';
import { UpgradePage } from '../upgrade/upgrade.page';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})

export class PreferencesPage implements OnInit  {
user: any = {}
public form : FormGroup;

  constructor(
  	public events: Events, 
    public statusBar: StatusBar,
    public modalCtrl: ModalController, 
    public userService: UserService, 
  	// public loadingProvider: LoadingProvider, 
  	public navCtrl: NavController, 
  	// public userProvider: UserProvider, 
  	public fb: FormBuilder, 
  	// public navParams: NavParams, 
  	// public viewCtrl: ViewController
  	) {

  	// this.userProvider.getUser()
  	// .subscribe((user:any) => {
  	// 	console.log("user ",user)
  	// 	this.user = user;
    this.userService.currentUser.subscribe((user:any) => {
      this.user = user;
      if(Object.keys(this.user).length > 0)
      {
        this.form = this.fb.group({
          interested: [user.interested, Validators.required ],
          // distance: [user.distance, Validators.required ],
          age: [user.age, Validators.required ],
          show: [user.show, Validators.required ]
        });
      }
    })


  	// })
  }

    ionViewWillEnter() {
        // this.statusBar.backgroundColorByHexString('#888888');
        // this.statusBar.styleDefault();
        // this.statusBar.overlaysWebView(false);
    }

    ionViewWillLeave() {
        // this.statusBar.backgroundColorByHexString('#ffffff');
        // this.statusBar.overlaysWebView(true);
    }


  ngOnInit() {
  }

  update(){
    // this.loadingProvider.present();
    this.userService.updateCurrentUser(this.form.value).then(()=>{
    this.events.publish("preferences:updated")
    // this.loadingProvider.dismiss();
    // this.viewCtrl.dismiss();
     })
  }

  dismiss() {
    // this.viewCtrl.dismiss();
  }


    upgrade() {
        this.presentModal();
    }

    async presentModal() {
        const modal = await this.modalCtrl.create({
            component: UpgradePage,
            animated: true,
            cssClass: 'my-custom-modal-css'
        });

        modal.present();

        // const { data } = await modal.onWillDismiss();
        // if(data.status)
        // {
        //     // this.messagesService.sendMsg(data.message, this.currentUser.uid)
        //     // this.userService.updateUserStatus(this.currentUser.uid, 'liked')
        // }
    }

}
