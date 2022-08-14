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
import { NavCategoriesComponent } from './components/nav-categories/nav-categories.component';
import { HomeSubcateroriesContainerComponent } from '../home/components/home-subcaterories-container/home-subcaterories-container.component';
import { HomeSubcategoryItemComponent } from '../home/components/home-subcategory-item/home-subcategory-item.component';
import { HomeModule } from '../home/home.module';

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
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule, 
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
