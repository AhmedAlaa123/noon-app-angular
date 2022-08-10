import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidators } from 'src/CustomValidators/PasswordValidators/ConfirmPassword';
import { AuthService } from 'src/Services/AuthService/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFrom: FormGroup = {} as FormGroup;

  constructor(private authService: AuthService, private registerFormBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.registerFrom = this.registerFormBuilder.group({
      firstName: ['', Validators.minLength(3), Validators.maxLength(20)],
      lastName: ['', Validators.minLength(3), Validators.maxLength(20)],
      email: ['', [Validators.email, Validators.required]],
      userName: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]]
    }, { Validators: ConfirmPasswordValidators }
    );
  }

  get FirstName() { return this.registerFrom.get('firstName'); }
  get LastName() { return this.registerFrom.get('lastName'); }
  get Email() { return this.registerFrom.get('email') }
  get UserName() { return this.registerFrom.get('userName'); }
  get Password() { return this.registerFrom.get('password'); }
  get ConfirmPassowrd() { return this.registerFrom.get('confirmPassword'); }
  get Country() { return this.registerFrom.get('country') }
  get City() { return this.registerFrom.get('city') }
  get Street() { return this.registerFrom.get('street') }

}
