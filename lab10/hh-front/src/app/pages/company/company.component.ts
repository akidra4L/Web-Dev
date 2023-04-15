import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Company } from 'src/app/models/models';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  company!: Company
  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCompany()
  }
  
  getCompany(){
    this.route.paramMap.subscribe((params) => {
      const id : number = Number(params.get('id'));
      this.companyService.getCompany(id).subscribe((company) => {
        this.company = company;
      })
    })
  }
}
