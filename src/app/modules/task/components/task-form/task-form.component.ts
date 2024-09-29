import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PEOPLE } from 'src/app/core/models/people.model';
import { TASK } from 'src/app/core/models/task.model';
import { addTask } from 'src/app/shared/state/actions/create-task.action';
import { addSidebarView } from 'src/app/shared/state/actions/sidebar-view.action';
import { FormValidation } from 'src/app/shared/utils/form-validations';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent extends FormValidation implements OnChanges {

  @Input() people: PEOPLE[] = [];
  today = new Date().toISOString().split('T')[0];
  fb = inject(FormBuilder);
  form = this.fb.group({
    title: ['', Validators.required],
    expirationDate: [this.today, Validators.required],
    people: this.fb.array([], Validators.required)
  });

  constructor(private store: Store) {
    super();
  }

  get peopleArray(): FormArray {
    return this.form.get('people') as FormArray;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.peopleArray.controls = [];
    this.people.forEach(e => {
      const peopleGroup = this.fb.group({
        full_name: [e.full_name],
        age: [e.age],
        skill: [e.skill]
      });
      this.peopleArray.push(peopleGroup);
    })
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      const formData = new FormData();
      formData.append('title', data.title!)
      formData.append('expirationDate', data.expirationDate!)
      formData.append('people', JSON.stringify(data.people!))
      formData.append('completed', 'false')
      this.store.dispatch(addTask({task: data as any}))
    } else this.form.markAllAsTouched()
  }

  addPeople() {
    this.store.dispatch(addSidebarView({ sidebarView: { type: 'new people' } }))
  }

}
