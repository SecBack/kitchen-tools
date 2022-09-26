import { Component, importProvidersFrom, ViewChild, OnInit } from '@angular/core';
import { Photo } from '@capacitor/camera';
import { IonModal } from '@ionic/angular';
import { LeftoverPost } from '../../models/LeftoverPost';
import { LeftoverPostService } from '../../services/leftover-post.service';
import { PhotoService } from '../../services/photo.service';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

@Component({
  selector: 'app-create-leftover-post',
  templateUrl: './create-leftover-post.component.html',
  styleUrls: ['./create-leftover-post.component.scss']
})
export class CreateLeftoverPostComponent {
  @ViewChild(IonModal) modal: IonModal;

  // needs to be initialized
  newLeftoverPost = <LeftoverPost> {
    image: undefined,
    who: 'Name...',
    where: 'Fridge nr, table etc..."',
    description: 'Ocasion...'
  }
  capturedPhoto: Photo
  
  constructor(
    private leftoverPostService: LeftoverPostService, // inject the leftover post service
    private photoService: PhotoService // inject the photo service
  ) {
    defineCustomElements(window);
  }

  async capturePhoto() : Promise<void> {    
    await this.photoService.takePhoto()
    this.capturedPhoto = this.photoService.capturedPhoto
  }

  /**
   * closes the modal
   *
   */
  cancel() {
    this.modal.dismiss(null, 'cancel')
  }

  /**
   * if user presses confirm add the new leftover post
   *
   */
  confirm() {
    this.leftoverPostService.addLeftoverPost(this.newLeftoverPost)

    this.modal.dismiss('confirm')
  }
}
