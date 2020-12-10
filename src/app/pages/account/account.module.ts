import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';
import { UpgradePageModule } from '../upgrade/upgrade.module';

import { AccountPage } from './account.page';
// import { UpgradePage } from '../upgrade/upgrade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    UpgradePageModule
  ],
  // entryComponents: [UpgradePage],
  declarations: [AccountPage]
})
export class AccountPageModule {}
