import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const formGroup = control.parent;
    if (formGroup) {
      const startDate = formGroup.get('startDate')?.value;
      const dueDate = formGroup.get('dueDate')?.value;

      if (startDate && dueDate && new Date(dueDate) <= new Date(startDate)) {
        return { 'dateInvalid': true };
      }
    }
    return null;
  };
}

export function dateValidatorCalender(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const formGroup = control.parent;
    if (formGroup) {
      const startDate = formGroup.get('startDateTask')?.value;
      const dueDate = formGroup.get('dueDateTask')?.value;

      if (startDate && dueDate && new Date(dueDate) <= new Date(startDate)) {
        return { 'dateInvalid': true };
      }
    }
    return null;
  };
}
export function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  };
}
