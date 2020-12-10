import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneUserPage } from './one-user.page';

const routes: Routes = [
  {
    path: '',
    component: OneUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneUserPageRoutingModule {}
