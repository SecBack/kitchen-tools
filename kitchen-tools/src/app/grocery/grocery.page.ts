import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../shared/services/grocery.service';
import { Grocery } from '../shared/models/Grocery';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grocery',
  templateUrl: 'grocery.page.html',
  styleUrls: ['grocery.page.scss']
})
export class GroceryPage implements OnInit{

  /**
   * local observable which the html will subscribe to
   */
  groceries: Observable<Grocery[]>

  constructor(
    private groceryService: GroceryService
  ) {

  }

  /**
   * ngOnInit is executed before the html is rendered, which we need because visuals are ofcourse depended
   * on the data from our api
   *
   */
  ngOnInit() {
    // via the leftover post service get all posts from the api
    this.groceryService.getGroceries()
    // assign the local observable to the service observable. and just like that data updates are taken care of
    this.groceries = this.groceryService.groceries
  }

}
