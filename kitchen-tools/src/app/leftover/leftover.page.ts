import { Component, OnInit } from '@angular/core';
import { LeftoverPostService } from '../shared/services/leftover-post.service';
import { LeftoverPost } from '../shared/models/LeftoverPost';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-leftover',
  templateUrl: 'leftover.page.html',
  styleUrls: ['leftover.page.scss']
})
export class LeftoverPage implements OnInit {

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
