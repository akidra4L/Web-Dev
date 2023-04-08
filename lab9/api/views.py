from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import json

from .models import Company, Vacancy

# Create your views here.
# Company
@csrf_exempt
def get_all_companies(request):
    if request.method == "GET":
        companies = [company.to_json() for company in Company.objects.all()]
        data = {
            'companies': companies
        }
        return JsonResponse(data, status=200)
    elif request.method == "POST":
        data = json.loads(request.body)
        company = Company.objects.create(
            name = data['name'],
            description = data['description'],
            city = data['city'],
            address = data['address']
        )
        return JsonResponse(company.to_json(), status=200)
    
@csrf_exempt
def get_company(request, id):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist as e:
        return JsonResponse({ 'message': str(e) }, status=400)
    
    if request.method == "GET":
        return JsonResponse(company.to_json(), status=200)
    elif request.method == "PUT":
        data = json.loads(request.body)
        if 'name' in data.keys():
            company.name = data['name']
        if 'description' in data.keys():
            company.description = data['description']
        if 'city' in data.keys():
            company.city = data['city']
        if 'address' in data.keys():
            company.address = data['address']
        company.save()
        return JsonResponse(company.to_json(), status=200)
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({ 'message': 'Deleted successfully' }, status=200)
    
@csrf_exempt
def get_company_vacancies(request, id):
    try:
        vacancies = [vacancy.to_json() for vacancy in Vacancy.objects.filter(company_id = id)]
        data = {
            'vacancies': vacancies
        }
        return JsonResponse(data, status=200)
    except Vacancy.DoesNotExist as e:
        return JsonResponse(e, status=400)
    
# Vacancy
@csrf_exempt
def get_all_vacancies(request):
    if request.method == "GET":
        vacancies = [vacancy.to_json() for vacancy in Vacancy.objects.all()]
        data = {
            'vacancies': vacancies
        }
        return JsonResponse(data, status=200)
    elif request.method == "POST":
        data = json.loads(request.body)
        company_id = data['company_id']

        try:
            company = Company.objects.get(pk=company_id)
        except Company.DoesNotExist as e:
            return JsonResponse({ 'message': str(e) }, status=400)
        
        vacancy = Vacancy.objects.create(
            name = data['name'],
            description = data['description'],
            salary = data['salary'],
            company=company
        )
        return JsonResponse(vacancy.to_json(), status=200)

@csrf_exempt
def get_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(pk=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse(e, status=400)
    
    if request.method == "GET":
        return JsonResponse(vacancy.to_json(), status=200)
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({ 'message': 'Deleted Successfully' }, status=200)
    elif request.method == "PUT":
        data = json.loads(request.body)
        if 'name' in data.keys():
            vacancy.name = data['name']
        if 'description' in data.keys():
            vacancy.description = data['description']
        if 'salary' in data.keys():
            vacancy.salary = float(data['salary'])
        vacancy.save()
        return JsonResponse(vacancy.to_json(), status=200)

def get_vacancies_top(request):
    vacancies = [vacancy.to_json() for vacancy in Vacancy.objects.order_by('-salary')] 
    data = {
        'vacancies': vacancies[:10]
    }
    return JsonResponse(data, status=200)