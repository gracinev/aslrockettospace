"""
Definition of views.
"""

from datetime import datetime
from django.shortcuts import render
from django.http import HttpRequest

def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/index.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def flashcardmemorygame(request):
    """Renders the flash memory game page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/flashcardmemorygame.html',
        {
            'title':'Flash Card Memory Game',
            'year':datetime.now().year,
        }
    )
