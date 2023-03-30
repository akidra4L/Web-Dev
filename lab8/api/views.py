from django.http import JsonResponse
from django.views import View

from .models import Product, Category


class ProductsView(View):
    def get(self, request):
        products = [product.to_json() for product in Product.objects.all()]
        data = {
            'products': products
        }
        return JsonResponse(data, status=200)
    
def get_product_view(request, id):
    try:
        product = Product.objects.get(pk=id)
        return JsonResponse(product.to_json(), status=200)
    except Product.DoesNotExist as e:
        return JsonResponse(e, status=400)
    
class CategoryView(View):
    def get(self, request):
        categories = [category.to_json() for category in Category.objects.all()]
        data = {
            'categories': categories
        }
        return JsonResponse(data, status=200)

def get_category_view(request, id):
    try:
        category = Category.objects.get(pk=id)
        return JsonResponse(category.to_json(), status=200)
    except Category.DoesNotExist as e:
        return JsonResponse(e, status=400)

def get_category_products_view(request, id):
    products = [product.to_json() for product in Product.objects.filter(category_id = id)]
    data = {
        'products': products
    }
    return JsonResponse(data, status=200)
