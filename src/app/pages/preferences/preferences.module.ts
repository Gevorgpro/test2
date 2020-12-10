import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferencesPageRoutingModule } from './preferences-routing.module';
import { UpgradePageModule } from '../upgrade/upgrade.module';

import { PreferencesPage } from './preferences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PreferencesPageRoutingModule,
    UpgradePageModule,
  ],
  declarations: [PreferencesPage]
})
export class PreferencesPageModule {}
