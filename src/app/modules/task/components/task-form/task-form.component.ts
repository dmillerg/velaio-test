import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormValidation } from 'src/app/shared/utils/form-validations';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent extends FormValidation {

  today = new Date().toISOString().split('T')[0];
  fb = inject(FormBuilder);
  form = this.fb.group({
    title: ['', Validators.required],
    expirationDate: [this.today, Validators.required],
    people: this.fb.array([], Validators.required)
  });

  constructor() {
    super();
  }

  onSubmit() {
    if (this.form.valid) { } else this.form.markAllAsTouched()
  }

}
