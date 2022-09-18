import { Component, OnInit } from '@angular/core';
import { LeftoverPostService } from '../shared/services/leftover-post.service';
import { LeftoverPost } from '../shared/models/LeftoverPost';

@Component({
  selector: 'app-leftover',
  templateUrl: 'leftover.page.html',
  styleUrls: ['leftover.page.scss']
})
export class LeftoverPage implements OnInit {

  leftoverPostList: LeftoverPost[] | undefined

  constructor(private leftoverPostService: LeftoverPostService) {}

  ngOnInit() {
    this.leftoverPostService.getAllLeftoverPosts().subscribe(data => {
      this.leftoverPostList = data
      console.log(data)
    })
  }

}
