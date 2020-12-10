import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPreferencesPage } from './register-preferences.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPreferencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPreferencesPageRoutingModule {}
