import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AddRolesToUserComponent } from './components/add-roles-to-user/add-roles-to-user.component';
import { AllusersComponent } from './components/allusers/allusers.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    AddRolesToUserComponent,
    AllusersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
 
})
export class AuthModule { }
