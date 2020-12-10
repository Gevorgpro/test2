import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneUserPageRoutingModule } from './one-user-routing.module';

import { OneUserPage } from './one-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneUserPageRoutingModule
  ],
  declarations: [OneUserPage]
})
export class OneUserPageModule {}
