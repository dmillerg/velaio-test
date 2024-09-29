import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidation } from 'src/app/shared/utils/form-validations';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.scss']
})
export class PeopleFormComponent extends FormValidation implements OnInit {

  @Input({ required: true }) form!: FormGroup;
  @Output() formDataOuput = new EventEmitter<FormData>();
  private fb = inject(FormBuilder);

  constructor() {
    super();
  }

  ngOnInit(): void {
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
      const formData = new FormData();
      formData.append('fullname', data.fullname);
      formData.append('age', data.age);
      formData.append('skill', JSON.stringify(data.skill));
      this.formDataOuput.emit(formData)
    } else this.form.markAllAsTouched()
  }
}
