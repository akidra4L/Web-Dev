from django.urls import path

from .views import ProductsView, CategoryView, get_product_view, get_category_view, get_category_products_view

urlpatterns = [
    path('products/', ProductsView.as_view()),
    path('category/', CategoryView.as_view()),
    path('products/<int:id>', get_product_view),
    path('category/<int:id>', get_category_view),
    path('category/<int:id>/products', get_category_products_view),
]