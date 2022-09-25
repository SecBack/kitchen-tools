import { NgModule } from "@angular/core";
import { CreateLeftoverPostComponent } from "./create-leftover-post.component";
import { IonicModule } from '@ionic/angular';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [CreateLeftoverPostComponent],
  exports: [CreateLeftoverPostComponent],
  imports: [IonicModule.forRoot(), FormsModule, CommonModule]
})

export class CreateLeftoverPostComponentModule{}