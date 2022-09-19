import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeftoverPage } from './leftover.page';
import { CreateLeftoverPostComponentModule } from '../shared/components/create-leftover-post/create-leftover-post.module';

import { LeftoverPageRoutingModule } from './leftover-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LeftoverPageRoutingModule,

    CreateLeftoverPostComponentModule
  ],
  declarations: [LeftoverPage]
})
export class LeftoverPageModule {}
