import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
// import { SendMessagePage } from '../send-message/send-message.page';
import { SendMessagePageModule } from '../send-message/send-message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SendMessagePageModule
  ],
  // entryComponents: [SendMessagePage],
  declarations: [HomePage]
})
export class HomePageModule {}
