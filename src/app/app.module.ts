import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { config } from './credentials';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(config.firebaseConfig),
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        HttpClientModule,
        IonicModule.forRoot({ mode: 'ios' }),
        AppRoutingModule
    ],
    providers: [
        StatusBar,
        Geolocation,
        SafariViewController,
        FileChooser,
        SocialSharing,
        InAppBrowser,
        InAppPurchase,
        OneSignal,
        AppRate,
        InAppPurchase2,
        Camera,
        Keyboard,
        Diagnostic,
        AndroidPermissions,
        SplashScreen,
        Facebook,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}