import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyVouchersPage } from './apply-vouchers.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyVouchersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyVouchersPageRoutingModule {}
