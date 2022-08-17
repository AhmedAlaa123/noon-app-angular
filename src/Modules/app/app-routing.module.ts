import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/Components/dashboard/dashboard.component';
import { HeaderComponent } from 'src/Components/header/header.component';
import { DelivercompanyComponent } from '../delivercompany/delivercompany.component';
import { DelivercompanycreateComponent } from '../delivercompany/delivercompanycreate/delivercompanycreate.component';
import { DelivercompanydetailsComponent } from '../delivercompany/delivercompanydetails/delivercompanydetails.component';
import { DelivercompanyupdateComponent } from '../delivercompany/delivercompanyupdate/delivercompanyupdate.component';
import { CreateSupcategoriesComponent } from '../SupCategory/create-supcategories/create-supcategories.component';
import { SupcategoriesComponent } from '../SupCategory/supcategories/supcategories.component';
import { SupcategorydetailComponent } from '../SupCategory/supcategorydetail/supcategorydetail.component';
import { UpdateComponent } from '../SupCategory/update/update.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
 
  {path:'sup/:id',component:SupcategorydetailComponent},
  {path:'create',component:CreateSupcategoriesComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'dashboard/allcompnies/create',component:DelivercompanycreateComponent},
  {path:'dashboard/allcompnies/update/:id',component:DelivercompanyupdateComponent},
  {path:'dashboard/allcompnies/details/:id',component:DelivercompanydetailsComponent},

{path:'dashboard',component:DashboardComponent,
children:[ {path:'allsup',component:SupcategoriesComponent},
 {path:'allcompnies',component:DelivercompanyComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
