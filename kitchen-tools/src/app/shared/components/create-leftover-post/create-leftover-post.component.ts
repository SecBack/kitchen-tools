import { Component, ViewChild} from '@angular/core';
import { IonModal } from '@ionic/angular';
import { LeftoverPost } from '../../models/LeftoverPost';
import { LeftoverPostService } from '../../services/leftover-post.service';

@Component({
  selector: 'app-create-leftover-post',
  templateUrl: './create-leftover-post.component.html',
  styleUrls: ['./create-leftover-post.component.scss'],
})
export class CreateLeftoverPostComponent {
  @ViewChild(IonModal) modal: IonModal;

  newLeftoverPost = <LeftoverPost> {
    who: '',
    where: '',
    description: ''
  }

  constructor(
    private leftoverPostService: LeftoverPostService
  ) {

  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.leftoverPostService.addLeftoverPost(this.newLeftoverPost).subscribe()

    this.modal.dismiss('confirm');
  }

  testfunc(newLeftoverPost: LeftoverPost) {
    console.log(newLeftoverPost)
  }
}
