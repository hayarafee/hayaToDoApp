import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDosPageRoutingModule } from './to-dos-routing.module';

import { ToDosPage } from './to-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDosPageRoutingModule
  ],
  declarations: [ToDosPage]
})
export class ToDosPageModule {}
