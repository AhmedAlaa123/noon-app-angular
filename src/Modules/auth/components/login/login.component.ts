import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenEnum } from 'src/Enums/AuthEnums/AuthEnums';
import { ILoginUser } from 'src/interfaces/AuthInterfaces/ILoginUser';
import { AuthService } from 'src/Services/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = {} as FormGroup
  errorMessage: string = ''
  isvalidUser: boolean = true;
  isvalidPassword: boolean = true;
  islogined: boolean = false;
  constructor(private authService: AuthService, private loginFormBuilder: FormBuilder,private router:Router) {

  }


  ngOnInit(): void {
    this.loginForm = this.loginFormBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      error: ['']
    }
    );
  }

  get UserName() {
    return this.loginForm.get('userName');
  }

  get Password() {
    return this.loginForm?.get('password');
  }

  get Error() {
    return this.loginForm.get('error')
  }

  public HandelLogin(form: any) {
    if (this.UserName?.status == "INVALID") {
      this.isvalidUser = false;
      return;
    }
    this.isvalidUser = true
    if (this.Password?.status == "INVALID") {
      this.isvalidPassword = false;
      return;
    }
    else {
      this.isvalidPassword = true;
    }
    const loginUser: ILoginUser = {
      userName: this.loginForm.get('userName')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.authService.Login(loginUser).subscribe(data => {
      this.loginForm.get('error')?.setValue('')
      // console.log(data.token)
      localStorage.setItem(TokenEnum.Token, data.token);
      localStorage.setItem(TokenEnum.Expiration, data.expiration)
      this.authService.isLogged.next(true)
      // navigate to home page
      this.router.navigate(['/'])

    }, error => {
      if (error.error.errors) {
        var errorsMessage = ''
        for (var key in error.error.errors) {
          for (var val of error.error.errors[key]) {
            errorsMessage += val + '\n';
          }

        }
        this.loginForm.get('error')?.setValue(errorsMessage)
      } else {
        this.loginForm.get('error')?.setValue(error.error)
      }

    },()=>{
      // when request is completed
      this.islogined = true;
      setTimeout(() => {
        this.islogined = false
      }, 3000);
    })
  }

}

