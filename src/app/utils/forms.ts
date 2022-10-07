import { FormGroup } from '@angular/forms';

export function showFieldErrs(form: FormGroup, fieldName: string) {
  const field = form.get(fieldName);
  return field && field.invalid && field.errors && (field.dirty || field.touched);
}

export function showFormErrs(form: FormGroup) {
  return form.invalid && form.errors && (form.dirty || form.touched);
}

export function formHasErr(form: FormGroup, key: string) {
  return form.errors && form.errors[key];
}

export function fieldHasErr(form: FormGroup, fieldName: string, errKey: string) {
  const field = form.get(fieldName);
  return field && field.hasError(errKey);
}
