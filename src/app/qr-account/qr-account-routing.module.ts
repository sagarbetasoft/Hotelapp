import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRAccountPage } from './qr-account.page';

const routes: Routes = [
  {
    path: '',
    component: QRAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRAccountPageRoutingModule {}
