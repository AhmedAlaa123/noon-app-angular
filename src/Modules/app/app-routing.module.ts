import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/Gaurds/auth.guard';
import { AuthComponent } from '../auth/auth.component';
import { AddRolesToUserComponent } from '../auth/components/add-roles-to-user/add-roles-to-user.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    {
      path:'',component:HomeComponent
    },
    {
      path:'home',component:HomeComponent
    }
    ,
    {
          path: 'account', component: AuthComponent, children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          {path:'addRoleToUser',component:AddRolesToUserComponent,canActivate:[AuthGuard]}
      ]
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
