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

  // needs to be initialized
  newLeftoverPost = <LeftoverPost> {
    who: '',
    where: '',
    description: ''
  }
  
  constructor(
    // inject the leftover post service
    private leftoverPostService: LeftoverPostService
  ) {

  }

  /**
   * closes the modal
   *
   */
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  /**
   * if user presses confirm add the new leftover post
   *
   */
  confirm() {
    this.leftoverPostService.addLeftoverPost(this.newLeftoverPost)

    this.modal.dismiss('confirm');
  }
}
