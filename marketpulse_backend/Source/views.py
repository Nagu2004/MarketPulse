from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def Source(request):
    return HttpResponse("this is view logic")
