from rest_framework import serializers
from.models import StockDecision

class stockserializer(serializers.Serializer):
    class Meta:
        model = StockDecision
        fields = "__all__"

class StockDecisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockDecision
        fields = '__all__'