import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
// an interface like the server-side model for type safety
import { LeftoverPost } from '../models/LeftoverPost'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
/**
 * The core of the app so far. Here we have a service which implements a reactive pattern.
 * This service can be injected into any componet where it's needed, here it can provide
 * any data needed while also reacting to changes to the data.
 * 
 * In general this requires quite a bit of knowledge of rxjs. https://rxjs.dev/guide/overview
 * 
 * I learnt this from a coworker btw, he is a total js wizard
 */
export class LeftoverPostService {

  /**
   * A behaviour subject is a fancy subject that stores it currently stores and emmits to subscribers.
   * We use a subject so we can have multiple subscribers and behavioural to store the values
   *
   * @return  {[]}      A behavior subject needs to be initialized with a value, in this case an empty array
   */
  private leftoverPosts$ = new BehaviorSubject<LeftoverPost[]>([])
  /**
   * Intermiate variable used between leftoverPosts$ and lefterPosts so we don't have to subscribe twice
   * which would be a mess, if even possible
   */
  private dataStore: LeftoverPost[]
  /**
   * The actual observable that we end up subscribing to in our components. This is so we can have observer-side
   * code keeping the logic in this service while just using this variable in our components
   */
  readonly leftoverPosts = this.leftoverPosts$.asObservable()

  constructor(
    /**
     * In the constructor we inject the http client so we can communicate with our api
     */
    private httpClient: HttpClient
    ) {

  }

  /**
   * Gets all leftover posts and casts the updated value of our observable (leftoverPosts$) to all it's observers
   * (any componets this services is used)
   *
   * @return  {void}    returns a void since we just need the observable leftoverPosts$ from this service
   */
  getAllLeftoverPosts() : void {
    // get leftover posts from api and subscribe
    this.httpClient.get<LeftoverPost[]>(environment.apiUrl + '/leftoverpost/list').subscribe(response => {
      // assign the response to our intermediate variable
      this.dataStore = response
      // finally update the observable with the new value, which is then casted (emitted) to our observers
      this.leftoverPosts$.next(response)
    })
  }

  /**
   * Takes user input and create a new leftover post, if succesful casts (emmits) the leftover post to our observable
   * (leftoverPost$)
   *
   * @param   {LeftoverPost}  newLeftoverPost  our leftover post model
   *
   * @return  {void}                           returns a void since we just need the observable leftoverPosts$ form this service
   */
  addLeftoverPost(newLeftoverPost: LeftoverPost) : void {
    // post the given leftover post to our api
    this.httpClient.post<LeftoverPost>(environment.apiUrl + '/leftoverpost/add', {
      image: newLeftoverPost.image,
      description: newLeftoverPost.description,
      who: newLeftoverPost.who,
      where: newLeftoverPost.where
      // subscribe to the response
    }).subscribe(response => {
      this.dataStore.push(response) // push the response to our intermediate variable
      this.leftoverPosts$.next(this.dataStore) // again update the observable, cast the new data to the observable
    })
  }
}
