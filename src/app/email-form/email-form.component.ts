import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent {
  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  handleSubmit() {
    if (!this.loginFormGroup.valid) {
      return;
    }

    alert(
      `Your Email: ${this.loginFormGroup.value.email} \n Your password: ${this.loginFormGroup.value.password}`
    );

    this.loginFormGroup.reset();
  }
}
