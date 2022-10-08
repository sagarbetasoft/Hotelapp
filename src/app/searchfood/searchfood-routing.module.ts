import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchfoodPage } from './searchfood.page';

const routes: Routes = [
  {
    path: '',
    component: SearchfoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchfoodPageRoutingModule {}
