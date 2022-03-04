import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingBarPageRoutingModule } from './loading-bar-routing.module';

import { LoadingBarPage } from './loading-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingBarPageRoutingModule
  ],
  declarations: [LoadingBarPage]
})
export class LoadingBarPageModule {}
