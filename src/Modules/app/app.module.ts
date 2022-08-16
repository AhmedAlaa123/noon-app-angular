import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '../auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/Modules/app/components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterCayegoriesComponent } from './components/footer-cayegories/footer-cayegories.component';
import { FooterCategoriesAppAndSocialComponent } from './components/footer-categories-app-and-social/footer-categories-app-and-social.component';
import { FooterCopRightsComponent } from './components/footer-cop-rights/footer-cop-rights.component';
import { NavCategoriesComponent } from './components/nav-categories/nav-categories.component'
import { HomeModule } from '../home/home.module';
import { SupcategoriesComponent } from '../SupCategory/supcategories/supcategories.component';
import { SupcategorydetailComponent } from '../SupCategory/supcategorydetail/supcategorydetail.component';
import { CreateSupcategoriesComponent } from '../SupCategory/create-supcategories/create-supcategories.component';
import { UpdateComponent } from '../SupCategory/update/update.component';
import { DashboardComponent } from 'src/Components/dashboard/dashboard.component';
import { CategoryPageModule } from '../category-page/category-page.module';
import { SubCategoryPageModule } from '../sub-category-page/sub-category-page.module';
import { ProductCardComponent } from '../category-page/components/product-card/product-card.component';
import { ProductsContanerComponent } from '../category-page/components/products-contaner/products-contaner.component';
import { SliderComponent } from './components/slider/slider.component';
import { BannerComponent } from '../home/components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    FooterCayegoriesComponent,
    FooterCategoriesAppAndSocialComponent,
    FooterCopRightsComponent,
    NavCategoriesComponent,
    SupcategoriesComponent,
    SupcategorydetailComponent,
    HeaderComponent,
    CreateSupcategoriesComponent,
    UpdateComponent,
    DashboardComponent,
   SliderComponent,
   BannerComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule, 
    HomeModule,
    SubCategoryPageModule,
    CategoryPageModule

  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
