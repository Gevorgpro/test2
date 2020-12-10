import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from '../../services/user/user.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { UpgradePage } from '../upgrade/upgrade.page';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    user: any = {}
    urls: any = {
        privacy: '',
        terms: '',
    }

    constructor(
        private socialSharing: SocialSharing,
        private appRate: AppRate,
        public modalController: ModalController,
        private router: Router,
        private statusBar: StatusBar,
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.userService.currentUser.subscribe((user: any) => {
            if (Object.keys(user).length > 0)
                this.user = user;
        })
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

    promptForRating() {
        this.appRate.preferences.storeAppURL = {
            android: 'market://details?id=com.malecon.findmatch',
        }

        this.appRate.promptForRating(true);
    }

    shareApp() {
        var options = {
            message: 'Take a look at Find Match, the app that lets you find nearby people and make new encounters! 😉 https://play.google.com/store/apps/details?id=com.malecon.findmatch', // not supported on some apps (Facebook, Instagram)
            subject: 'Share', // fi. for email
            url: 'https://play.google.com/store/apps/details?id=com.malecon.findmatch',
            chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
            appPackageName: 'com.malecon.findmatch', // Android only, you can provide id of the App you want to share with
            iPadCoordinates: '0,0,0,0' //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
        };

        this.socialSharing.share(options.message, 'Share');
    }

    openUrl(url) {

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

    pushChange($event) {

    }

    logout() {
        this.authenticationService.logout().then(resp => {
            this.router.navigate(['login']);
        })
    }
}