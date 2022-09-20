import { NgModule } from "@angular/core";
import { CreateGroceryComponent } from "./create-grocery.component";
import { IonicModule } from '@ionic/angular';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CreateGroceryComponent],
  exports: [CreateGroceryComponent],
  imports: [IonicModule.forRoot(), FormsModule]
})

export class CreateGroceryComponentModule{}