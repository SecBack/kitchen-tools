import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // the form group 
  form: FormGroup

  constructor(
    // build the form
    private fb: FormBuilder
  ) {
    // define the group
    this.form = this.fb.group({
      text: [null, [Validators.required, Validators.minLength(5)]],
    })
  }

}
