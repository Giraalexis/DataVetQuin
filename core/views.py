from django.shortcuts import render

# Create your views here.
def home(request):

    return render(request,'index.html')

def empresa(request):

    return render(request,'empresa.html')