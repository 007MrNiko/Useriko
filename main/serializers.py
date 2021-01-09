from rest_framework import serializers
from .models import Account, AccountGroup


class AccountSerializer(serializers.ModelSerializer):
    group_name = serializers.CharField(source='group.name', read_only=True)

    class Meta:
        model = Account
        extra_kwargs = {
            "username": {
                "error_messages": {
                    "blank": "Please specify username",
                    "required": "Please specify group name"
                }
            },
            "group": {
                "error_messages": {
                    "null": "Please select user group"
                }
            }
        }
        fields = ["id", "username", "created", "group", "group_name"]

class AccountGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountGroup
        extra_kwargs = {
            "name": {
                "error_messages": {
                    "blank": "Please specify group name",
                    "required": "Please specify group name"
                }
            },
            "group": {
                "error_messages": {
                    "null": "Please select user group"
                }
            }
        }
        fields = ["id", "name", "description"]


