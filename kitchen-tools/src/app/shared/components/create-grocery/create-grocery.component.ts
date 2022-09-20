import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Grocery } from '../../models/Grocery';
import { GroceryService } from '../../services/grocery.service';

@Component({
  selector: 'app-create-grocery',
  templateUrl: './create-grocery.component.html',
  styleUrls: ['./create-grocery.component.scss'],
})
export class CreateGroceryComponent {
  @ViewChild(IonModal) modal: IonModal;

  // needs to be initialized
  newGrocery = <Grocery> {
    name: '',
    needed: false,
  }
  
  constructor(
    private GroceryService: GroceryService, // inject the leftover post service
  ) {

  }

  /**
   * closes the modal
   *
   */
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  /**
   * if user presses confirm add the new leftover post
   *
   */
  confirm() {
    this.GroceryService.addGrocery(this.newGrocery)

    this.modal.dismiss('confirm');
  }
}
