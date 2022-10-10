import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRAccountPageRoutingModule } from './qr-account-routing.module';

import { QRAccountPage } from './qr-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRAccountPageRoutingModule
  ],
  declarations: [QRAccountPage]
})
export class QRAccountPageModule {}
