import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private splashScreen: SplashScreen) {
  	let that = this;
    setTimeout(function(){ that.splashScreen.hide(); }, 2000);
           }

  ngOnInit() {
  }

}
