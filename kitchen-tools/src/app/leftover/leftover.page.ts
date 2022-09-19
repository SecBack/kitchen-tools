import { Component, OnInit } from '@angular/core';
import { LeftoverPostService } from '../shared/services/leftover-post.service';
import { LeftoverPost } from '../shared/models/LeftoverPost';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-leftover',
  templateUrl: 'leftover.page.html',
  styleUrls: ['leftover.page.scss']
})
/**
 * The main page where you can see all the posts, plus a button for adding a new one. this is where
 * the leftover post service really shines and makes everything so simple.
 */
export class LeftoverPage implements OnInit {

  /**
   * local observable which the html will subscribe to
   */
  leftoverPosts: Observable<LeftoverPost[]>

  constructor(

    private leftoverPostService: LeftoverPostService
    ) {

    }

  /**
   * ngOnInit is executed before the html is rendered, which we need because visuals are ofcourse depended
   * on the data from our api
   *
   */
  ngOnInit() {
    // via the leftover post service get all posts from the api
    this.leftoverPostService.getAllLeftoverPosts()
    // assign the local observable to the service observable. and just like that data updates are taken care of
    this.leftoverPosts = this.leftoverPostService.leftoverPosts
  }

}
