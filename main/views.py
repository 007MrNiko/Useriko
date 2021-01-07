from django.shortcuts import render

from rest_framework import viewsets

from .serializers import AccountSerializer, AccountGroupSerializer
from .models import Account, AccountGroup


class AccountViewSet(viewsets.ModelViewSet):
    serializer_class = AccountSerializer
    queryset = Account.objects.all()


class AccountGroupViewSet(viewsets.ModelViewSet):
    serializer_class = AccountGroupSerializer
    queryset = AccountGroup.objects.all()
