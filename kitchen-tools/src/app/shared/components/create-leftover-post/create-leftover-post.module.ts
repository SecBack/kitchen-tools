import { NgModule } from "@angular/core";
import { CreateLeftoverPostComponent } from "./create-leftover-post.component";
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateLeftoverPostComponent],
  exports: [CreateLeftoverPostComponent],
  imports: [IonicModule.forRoot(), FormsModule]
})

export class CreateLeftoverPostComponentModule{}