import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryPage } from './grocery.page';
import { GroceryPageRoutingModule } from './grocery-routing.module';
import { CreateGroceryComponentModule } from '../shared/components/create-grocery/create-grocery.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    GroceryPageRoutingModule,

    CreateGroceryComponentModule
  ],
  declarations: [GroceryPage]
})
export class GroceryPageModule {}
