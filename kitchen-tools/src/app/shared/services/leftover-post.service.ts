import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs'
import { LeftoverPost } from '../models/LeftoverPost'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
/**
 * The core of the app so far. Here we have a service which implements a reactive pattern
 */
export class LeftoverPostService {

  private leftoverPosts$ = new BehaviorSubject<LeftoverPost[]>([])
  private dataStore: { leftoverPosts: LeftoverPost[] } = { leftoverPosts: [] }
  readonly leftoverPosts = this.leftoverPosts$.asObservable()

  constructor(
    private httpClient: HttpClient
    ) {

    }

  getAllLeftoverPosts() : void {
    this.httpClient.get<LeftoverPost[]>(environment.apiUrl + '/leftoverpost/list').subscribe(data => {
      this.dataStore.leftoverPosts = data
      this.leftoverPosts$.next(Object.assign({}, this.dataStore).leftoverPosts)
    })
  }

  addLeftoverPost(newLeftoverPost: LeftoverPost) : void {
    this.httpClient.post<LeftoverPost>(environment.apiUrl + '/leftoverpost/add', {
      description: newLeftoverPost.description,
      who: newLeftoverPost.who,
      where: newLeftoverPost.where
    }).subscribe(data => {
      this.dataStore.leftoverPosts.push(data)
      this.leftoverPosts$.next(Object.assign({}, this.dataStore).leftoverPosts)
    })
  }
}
