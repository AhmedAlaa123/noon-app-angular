import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/Components/dashboard/dashboard.component';
import { HeaderComponent } from 'src/Components/header/header.component';
import { CreateSupcategoriesComponent } from '../SupCategory/create-supcategories/create-supcategories.component';
import { SupcategoriesComponent } from '../SupCategory/supcategories/supcategories.component';
import { SupcategorydetailComponent } from '../SupCategory/supcategorydetail/supcategorydetail.component';
import { UpdateComponent } from '../SupCategory/update/update.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
 
  {path:'sup/:id',component:SupcategorydetailComponent},
  {path:'create',component:CreateSupcategoriesComponent},
  {path:'update/:id',component:UpdateComponent},

{path:'dashboard',component:DashboardComponent,
children:[ {path:'allsup',component:SupcategoriesComponent}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
