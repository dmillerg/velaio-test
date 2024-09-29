import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PEOPLE } from 'src/app/core/models/people.model';
import { addSidebarView } from 'src/app/shared/state/actions/sidebar-view.action';
import { FormValidation } from 'src/app/shared/utils/form-validations';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.scss']
})
export class PeopleFormComponent extends FormValidation implements OnInit {

  @Input({ required: true }) form!: FormGroup;
  @Output() formDataOuput = new EventEmitter<PEOPLE>();
  private fb = inject(FormBuilder);

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.skill.controls =[];
    this.addSkill();
  }

  get skill(): FormArray {
    return this.form.get('skill') as FormArray;
  }

  addSkill() {
    const skillGroup = this.fb.group({
      name: ['', Validators.required],
    });
    this.skill.push(skillGroup);
  }

  deleteSkill(index: number) {
    if (this.skill.controls.length > 1) {
      this.skill.controls.splice(index, 1);
    }
  }

  getFormGroup(index: number) {
    const formArray: FormArray = this.form.get('skill') as FormArray;
    return formArray.at(index) as FormGroup
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      this.formDataOuput.emit(data);
      this.store.dispatch(addSidebarView({ sidebarView: { type: 'new task' } }));
      this.form.reset();
    } else this.form.markAllAsTouched()
  }
}
