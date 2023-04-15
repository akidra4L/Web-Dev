import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Company } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/companies/`)
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/companies/${id}`)
  }
}
