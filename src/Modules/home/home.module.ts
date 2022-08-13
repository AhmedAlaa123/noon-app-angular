import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './components/slider/slider.component';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
