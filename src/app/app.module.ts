import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideDataService } from './slide-data.service'; 
import { CarouselComponent } from './common/carousel/carousel.component';
import { SliderButtonComponent } from './common/carousel/slider-button/slider-button.component';
import { SlideComponent } from './common/carousel/slide/slide.component';
import { SliderHeaderComponent } from './common/carousel/slider-header/slider-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './common/search/search.component';
import { NavbarComponent } from './common/navbar/navbar.component';
 

@NgModule({
  declarations: [
    AppComponent,
CarouselComponent,
    SliderButtonComponent,
    SlideComponent,
    SliderHeaderComponent,
    NavbarComponent,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SlideDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
