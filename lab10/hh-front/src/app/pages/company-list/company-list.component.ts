import { Component } from '@angular/core';

import { Company } from 'src/app/models/models';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    console.log("here");
    
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
    })
  }
}
