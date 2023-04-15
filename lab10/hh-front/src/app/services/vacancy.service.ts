import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Vacancy } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  
  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/companies/${id}/vacancies`)
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/vacancies/`)
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URL}/vacancies/${id}`)
  }
}