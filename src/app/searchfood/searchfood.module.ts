import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchfoodPageRoutingModule } from './searchfood-routing.module';

import { SearchfoodPage } from './searchfood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchfoodPageRoutingModule
  ],
  declarations: [SearchfoodPage]
})
export class SearchfoodPageModule {}
