import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { IonSlides, Events, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UpgradePage } from '../upgrade/upgrade.page';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
    user: any = {};
    pic: any;

    constructor(
        public userService: UserService,
        public modalController: ModalController,
        private router: Router
        ) {}

  ngOnInit() {
  	this.userService.currentUser.subscribe((user:any) => {
  		this.user = user;
  		if(Object.keys(this.user).length > 0)
  		{
  		console.log("this.user  ", this.user)
			this.pic = this.user.photos[0]
  		console.log("this.pic ", this.user.photos[0])
  		}
  	})
  }

  openProfile() {
    this.router.navigateByUrl('/profile');
  }

  upgrade() {
    this.presentModal();
  }

    async presentModal() {
        const modal = await this.modalController.create({
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

  openPreferences() {
  	this.router.navigateByUrl('/preferences');
  }

  openSettings() {
  	this.router.navigateByUrl('/settings');
  }

    calculateAge(dob) { // birthday is a date
        dob = new Date(dob);
        var ageDifMs = Date.now() - dob.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }  

}
