import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GroceryService } from '../shared/services/grocery.service';
import { Grocery } from '../shared/models/Grocery';
import { Observable, of } from 'rxjs';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-grocery',
  templateUrl: 'grocery.page.html',
  styleUrls: ['grocery.page.scss']
})
export class GroceryPage implements OnInit {

  @ViewChild('items') items: HTMLIonItemSlidingElement
  @ViewChildren('sliding') itemList: QueryList<IonItemSliding>;

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
  ngOnInit() : void {
    // via the leftover post service get all posts from the api
    this.groceryService.getGroceries()
    // assign the local observable to the service observable. and just like that data updates are taken care of
    this.groceries = this.groceryService.groceries

    this.showSwipeTip()
  }

  /**
   * Change the needed property of a given grocery, both on visually on frontend but also in the db. then
   * close slider, for a more intutive user expirence
   *
   * @param   {Grocery}  grocery  the given grocery
   * @param   {string}   change   added or removed
   *
   * @return  {void}
   */
  changeGrocery(grocery: Grocery, change: string) : void {
    if (change == 'added')
      this.groceryService.changeGrocery(grocery, true)
    if (change == 'removed')
      this.groceryService.changeGrocery(grocery, false)

    this.items.closeOpened()
  }

  
  /**
   * This method shows the user a tip about how to use the grocery list. first waits a bit then it
   * swipes first grocery element right then left to reveal the options. Teaching the user how to
   * use the grocery list
   *
   * @return  {void}
   */
  async showSwipeTip() {
    await this.timeout(1500)
    this.items.open('start')
    
    await this.timeout(800)
    this.items.closeOpened()
    
    await this.timeout(100)
    this.items.open('end')
    
    await this.timeout(800)
    this.items.closeOpened()
  }

  /**
   * Make the setTimeout function return a promise so i can use the much more beautiful async await
   * keywords. Lets the real here, the setTimeout should really just do that by default
   *
   * @param   {int}  ms  amount of miliseconds to timeout
   *
   * @return  {Promise<unknown>}      return a promise
   */
  timeout(ms) {
    // turn the setTimeout into a promise, pass setTimeout as a callback function that resolves 
    // after setTimeout is finished
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
