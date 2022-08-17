import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule}  from '@angular/common/http';
import { SupcategoriesComponent } from '../SupCategory/supcategories/supcategories.component';
import { SupcategorydetailComponent } from '../SupCategory/supcategorydetail/supcategorydetail.component';
import { HeaderComponent } from 'src/Components/header/header.component';
import { CreateSupcategoriesComponent } from '../SupCategory/create-supcategories/create-supcategories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from '../SupCategory/update/update.component';
import { DashboardComponent } from 'src/Components/dashboard/dashboard.component';
import { DelivercompanyComponent } from '../delivercompany/delivercompany.component';
import { DelivercompanycreateComponent } from '../delivercompany/delivercompanycreate/delivercompanycreate.component';
import { DelivercompanyupdateComponent } from '../delivercompany/delivercompanyupdate/delivercompanyupdate.component';
import { DelivercompanydetailsComponent } from '../delivercompany/delivercompanydetails/delivercompanydetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SupcategoriesComponent,
    SupcategorydetailComponent,
    HeaderComponent,
    CreateSupcategoriesComponent,
    UpdateComponent,
    DashboardComponent,
    DelivercompanyComponent,
    DelivercompanycreateComponent,
    DelivercompanyupdateComponent,
    DelivercompanydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
