import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyVouchersPageRoutingModule } from './apply-vouchers-routing.module';

import { ApplyVouchersPage } from './apply-vouchers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyVouchersPageRoutingModule
  ],
  declarations: [ApplyVouchersPage]
})
export class ApplyVouchersPageModule {}
