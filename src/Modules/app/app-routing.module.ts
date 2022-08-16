import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/Components/dashboard/dashboard.component';
import { HeaderComponent } from 'src/Components/header/header.component';
import { AuthGuard } from 'src/Gaurds/auth.guard';
import { AuthComponent } from '../auth/auth.component';
import { AddRolesToUserComponent } from '../auth/components/add-roles-to-user/add-roles-to-user.component';
import { AllusersComponent } from '../auth/components/allusers/allusers.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { CategoryPageComponent } from '../category-page/category-page.component';

import { HomeComponent } from '../home/home.component';
import { SubCategoryPageComponent } from '../sub-category-page/sub-category-page.component';
import { CreateSupcategoriesComponent } from '../SupCategory/create-supcategories/create-supcategories.component';
import { SupcategoriesComponent } from '../SupCategory/supcategories/supcategories.component';
import { SupcategorydetailComponent } from '../SupCategory/supcategorydetail/supcategorydetail.component';
import { UpdateComponent } from '../SupCategory/update/update.component';

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
        {path:'Getallusers', component:AllusersComponent},
        {path:'addRoleToUser',component:AddRolesToUserComponent,canActivate:[AuthGuard]}
    ]
  },
  { path:'category/:id',component:CategoryPageComponent},
  {
    path:'subcategory/:id',component:SubCategoryPageComponent
  },
    {path:'header',component:HeaderComponent},
    {path:'sup/:id',component:SupcategorydetailComponent},
    
    {path:'update/:id',component:UpdateComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],
      children:[ 
        {path:'allsup',component:SupcategoriesComponent},
        {path:'create',component:CreateSupcategoriesComponent}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
