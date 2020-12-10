import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPreferencesPageRoutingModule } from './register-preferences-routing.module';
import { RegisterPreferencesPage } from './register-preferences.page';
import { SortablejsModule } from 'ngx-sortablejs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SortablejsModule,
    IonicModule,
    RegisterPreferencesPageRoutingModule
  ],
  declarations: [RegisterPreferencesPage]
})
export class RegisterPreferencesPageModule {}
