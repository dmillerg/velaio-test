import { FormGroup, Validators } from "@angular/forms";

export class FormValidation {
  isTouchedField = (form: FormGroup, field: string): boolean => {
    return form.get(field)!.touched === true && form.get(field)!.invalid;
  }

  isPristinedField = (form: FormGroup, field: string): boolean => {
    return form.get(field)!.touched === false
  }

  isValidField = (form: FormGroup, field: string): boolean => {
    return (
      form.get(field)!.touched && !form.get(field)!.invalid
    );
  }

  isRequiered = (form: FormGroup, field: string) => {
    return form.get(field)?.hasValidator(Validators.required) ? '*' : '';
  }

  isDropDownBad = (form: FormGroup, control: string) => {
    return form.get(control)?.touched && form.get(control)?.value == ''
  }

  isNotPristine = (form: FormGroup, control: string) => {
    return form.get(control)?.touched && form.get(control)?.value == ''
  }

  error(form: FormGroup, field: string, name: string): string {
    let error: string = '';

    if (form.get(field)!.touched) {
      if (form.get(field)!.hasError('minlength')) {
        error = `${name} must contain a minimun of ${form.get(field)!.errors!['minlength'].requiredLength} characters`

      } else if (form.get(field)!.hasError('maxlength')) {
        error = `${name} must contain a maximum of ${form.get(field)!.errors!['maxlength'].requiredLength} characters`
      } else if (
        form.get(field)!.hasValidator(Validators.required) &&
        form.get(field)!.hasError('required')
      ) {
        error = `${name} is required`
      }
    }
    return error
  }
}
