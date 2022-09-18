import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LeftoverPost } from '../shared/models/LeftoverPost';
import { LeftoverPostService } from '../shared/services/leftover-post.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
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
