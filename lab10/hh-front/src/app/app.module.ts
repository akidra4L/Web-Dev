import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VacancyComponent } from './pages/vacancy/vacancy.component';
import { VacancyListComponent } from './pages/vacancy-list/vacancy-list.component';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyComponent } from './pages/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    VacancyComponent,
    VacancyListComponent,
    CompanyListComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
