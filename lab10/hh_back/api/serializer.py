from rest_framework import serializers

from .models import Company, Vacancy

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'salary', 'description', 'company']

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100, required=False)
    description = serializers.CharField(max_length=255, required=False)
    city = serializers.CharField(max_length=255, required=False)
    address = serializers.CharField(max_length=255, required=False)
    vacancies = VacancySerializer(source='vacancy_set', many=True)

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance
