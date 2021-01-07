from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register("accounts", views.AccountViewSet, "accounts")
router.register("groups", views.AccountGroupViewSet, "groups")


urlpatterns = [
    path("", include(router.urls)),
]
