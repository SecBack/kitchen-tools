import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LeftoverPost } from '../shared/models/LeftoverPost';
import { LeftoverPostService } from '../shared/services/leftover-post.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
/**
 * Made this page to show how easy it is to input data on one page and show it on another
 * using the leftover post service
 * 
 * if you came here first go to the leftover page since its pretty much the same, but there
 * is more documentation
 */
export class Tab3Page {

  leftoverPosts: Observable<LeftoverPost[]>

  constructor(
    private leftoverPostService: LeftoverPostService
    ) {

    }

  ngOnInit() {
    this.leftoverPostService.getAllLeftoverPosts()
    this.leftoverPosts = this.leftoverPostService.leftoverPosts
  }
}
