import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LeftoverPost } from '../models/LeftoverPost';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeftoverPostService {

  constructor(private httpClient: HttpClient) { }

  getAllLeftoverPosts() : Observable<LeftoverPost[]> {
    return this.httpClient.get<LeftoverPost[]>(environment.apiUrl + '/leftoverpost/list')
  }

  addLeftoverPost(newLeftoverPost: LeftoverPost) : Observable<LeftoverPost> {
    console.log(newLeftoverPost)
    return this.httpClient.post<LeftoverPost>(environment.apiUrl + '/leftoverpost/add', {
      description: newLeftoverPost.description,
      who: newLeftoverPost.who,
      where: newLeftoverPost.where
    })
  }
}
