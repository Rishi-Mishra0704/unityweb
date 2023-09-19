from django.shortcuts import render
from django.http import HttpResponseRedirect
from .forms import SignUpForm

# Create your views here.

def signup(request):
    form = SignUpForm()
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            print("valid")
            form.save()
            return HttpResponseRedirect("http://localhost:5173/")
        else:
            form = SignUpForm()
            print("invalid")
            print(form.errors)
    context = {
        "form": form
    }
    return render(request, "core/signup.html", context)