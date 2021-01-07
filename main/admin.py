from django.contrib import admin
from main.models import AccountGroup, Account


@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ("username", "created", "group")
    search_fields = ("username",)

@admin.register(AccountGroup)
class AccountGroupAdmin(admin.ModelAdmin):
    list_display = ("name", "description")
    search_fields = ("name",)

