import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from 'src/app/models/models';
import { VacancyService } from 'src/app/services/vacancy.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent {
  vacancy!: Vacancy;
  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVacancy();
  }

  getVacancy(){
    this.route.paramMap.subscribe((params) => {
      const id : number = Number(params.get('id'));
      this.vacancyService.getVacancy(id).subscribe((vacancy) => {
        this.vacancy = vacancy;
      })
    })
  }
}
