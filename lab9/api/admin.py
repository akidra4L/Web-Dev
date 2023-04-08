from django.contrib import admin

from .models import Company, Vacancy

# Register your models here.
admin.site.register(Company)
admin.site.register(Vacancy)