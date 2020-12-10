import { Component, OnInit, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonSlides, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { UserService } from '../../services/user/user.service';
import { LocationService } from '../../services/location/location.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    slides: any = []
    @ViewChild('slider', { static: false }) slider: IonSlides;
    welcomeText: any = [
    {title: 'Discover', subtitle: 'Find new and interesting people around you'},
    {title: 'Connect', subtitle: 'Visit their profile to dislike or send a messsage'},
    {title: 'Fall in Love', subtitle: 'Make plans about your future through chat'}
    ];
    currentIndex: any = 0;
    slideEnd: boolean = false;
    loading: any;

    constructor(
        private statusBar: StatusBar,
        public loadingController: LoadingController,
        private userService: UserService,
        private locationService: LocationService,
    	private authService: AuthenticationService,
        private router: Router
        ) {}

    ionViewWillEnter() {
        // this.statusBar.backgroundColorByHexString('#fdc324');
    }

    ionViewWillLeave() {
        // this.statusBar.backgroundColorByHexString('#ffffff');
    }

    ngOnInit() {
        this.userService.getCallingCode()
        this.locationService.getCurrentPosition();
        this.slides = [
            { imagePath: 'assets/imgs/1.png' },
            { imagePath: 'assets/imgs/2.png' },
            { imagePath: 'assets/imgs/3.png' }
        ];

    }

      async presentLoading() {
        this.loading = await this.loadingController.create({
          message: 'Please wait...'
        });
        return await this.loading.present();
      }

    slideChange() {
        this.slider.getActiveIndex()
            .then(data => {
                this.currentIndex = data;
            });

        this.slider.isEnd()
            .then(data => {
                this.slideEnd = data;
            });
    }

    next() {
        this.slider.slideNext()
    }

    phoneAuth(){
        this.router.navigateByUrl('/phone-auth');
    }

    continue () {
        this.presentLoading();
    	this.authService.login().then((resp:any) => {
            console.log("continue resp ", resp)
            this.loading.dismiss();
            if(resp.status && !resp.isNewUser){
            console.log("continue1 ")

                // this.userService.initialize(resp.userID);
                // this.router.navigateByUrl('/tabs/home');
            }
            if(resp.status && resp.isNewUser){
            console.log("continue2 ")

                // this.userService.initialize(resp.userID);
                // this.router.navigateByUrl('/register-preferences');
            }
        })
    }

}