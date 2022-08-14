import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './components/slider/slider.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeSubcateroriesContainerComponent } from './components/home-subcaterories-container/home-subcaterories-container.component';
import { HomeSubcategoryItemComponent } from './components/home-subcategory-item/home-subcategory-item.component';
import { NoonGiftComponent } from './components/noon-gift/noon-gift.component';
import { HomeDiscountsContainerComponent } from './components/home-discounts-container/home-discounts-container.component';
import { HomeDiscountItemComponent } from './components/home-discount-item/home-discount-item.component';



@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    BannerComponent,
    HomeSubcateroriesContainerComponent,
    HomeSubcategoryItemComponent,
    NoonGiftComponent,
    HomeDiscountsContainerComponent,
    HomeDiscountItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
