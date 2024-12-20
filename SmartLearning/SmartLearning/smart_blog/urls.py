from django.urls import path

from . import views

app_name = 'smart_blog'

urlpatterns = [
    # post views
    path('list/', views.post_list, name='post_list'),
    path('<int:id>/', views.post_detail, name='post_detail'),
]