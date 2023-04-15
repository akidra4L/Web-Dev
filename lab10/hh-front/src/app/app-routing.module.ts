import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyComponent } from './pages/company/company.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VacancyListComponent } from './pages/vacancy-list/vacancy-list.component';
import { VacancyComponent } from './pages/vacancy/vacancy.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id', component: CompanyComponent },
  { path: 'companies/:id/vacancies', component: VacancyListComponent },
  { path: 'vacancies', component: VacancyListComponent },
  { path: 'vacancies/:id', component: VacancyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
