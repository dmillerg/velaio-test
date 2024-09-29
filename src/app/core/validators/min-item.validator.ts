
import { AbstractControl, FormArray, ValidationErrors } from '@angular/forms';

export function minItemsValidator(min: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control instanceof FormArray) {
      return control.length >= min ? null : { minItems: { requiredLength: min, actualLength: control.length } };
    }
    return null;
  };
}