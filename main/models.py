from django.db import models


class AccountGroup(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.TextField()

    def __str__(self):
        return self.name

class Account(models.Model):
    username = models.CharField(max_length=30, unique=True)
    created = models.DateTimeField(verbose_name="date created", auto_now_add=True)
    group = models.ForeignKey(AccountGroup, on_delete=models.PROTECT)

    def __str__(self):
        return self.username
