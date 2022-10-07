import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fieldHasErr, showFieldErrs } from '../../utils/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  fieldHasErr = fieldHasErr;
  showFieldErrs = showFieldErrs;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    // send form
  }

}
