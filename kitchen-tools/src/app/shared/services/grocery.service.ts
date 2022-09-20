import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grocery } from '../models/Grocery'
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
/**
* Grocery service, concept is much the same as leftover service, so i wont comment on
* concepts that have already been explained again
*/
export class GroceryService {

  /**
   * this is a reactive pattern, which makes the grocery list dynamic, this has been
   * described in detail in leftover post service
   *
   */
  private groceries$ = new BehaviorSubject<Grocery[]>([])
  private dataStore: Grocery[]
  readonly groceries = this.groceries$.asObservable()

  constructor(
    private httpClient: HttpClient
  ) {

  }

  /**
   * Gets all groceries, described in leftover post service
   *
   */
  getGroceries() : void {
    this.httpClient.get<Grocery[]>(environment.apiUrl + '/grocery/list').subscribe(response => {
      this.dataStore = response
      this.groceries$.next(response)
    })
  }

  /**
   * Given a new grocery post it, described in leftover post serivce
   *
   */
  addGrocery(newGrocery: Grocery) : void {
    this.httpClient.post<Grocery>(environment.apiUrl + '/grocery/add', {
      name: newGrocery.name,
      needed: newGrocery.needed,
    }).subscribe(response => {
      this.dataStore.push(response)
      this.groceries$.next(this.dataStore)
    })
  }
}
