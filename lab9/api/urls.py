from django.urls import path

from .views import get_all_companies, get_all_vacancies, get_company, get_vacancy, get_company_vacancies, get_vacancies_top

urlpatterns = [
    path('companies/', get_all_companies),
    path('companies/<int:id>', get_company),
    path('companies/<int:id>/vacancies', get_company_vacancies),
    path('vacancies/', get_all_vacancies),
    path('vacancies/<int:id>', get_vacancy),
    path('vacancies/top_ten', get_vacancies_top)
]