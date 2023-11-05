import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    NavBarComponent,
    ContactPageComponent,
    SearchInputComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavBarComponent,
    SearchInputComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }

