import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingBarPage } from './loading-bar.page';

const routes: Routes = [
  {
    path: '',
    component: LoadingBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingBarPageRoutingModule {}
