import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Vacancy } from 'src/app/models/models';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent {
  vacancies: Vacancy[] = []
  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVacancies();
    console.log(this.vacancies)
  }

  getVacancies(){
    this.route.paramMap.subscribe((params) => {
      const id : number = Number(params.get('id'));
      if(id){
        this.vacancyService.getCompanyVacancies(id).subscribe((data) => {
          this.vacancies = data
        })
      }else{
        this.vacancyService.getVacancies().subscribe((data) => {
          this.vacancies = data
        })
      }
    })
  }
}
