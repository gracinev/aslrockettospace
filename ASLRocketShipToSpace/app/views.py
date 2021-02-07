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
            'title': 'Home Page',
            'year': datetime.now().year,
        }
    )


def flashcardmemorygame(request):
    """Renders the flash memory game page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/flashcardmemorygame.html',
        {
            'title': 'Flash Card Memory Game',
            'year': datetime.now().year,
        }
    )


def mcqgame(request):
    """Renders the mcq game page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/mcqgame.html',
        {
            'title': 'MCQ Game',
            'year': datetime.now().year,
        }
    )


def draganddropgame(request):
    """Renders the drag and drop game page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/draganddropgame.html',
        {
            'title': 'Drag and Drop Game',
            'year': datetime.now().year,
        }
    )


def journey(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/journey.html',
        {
            'title': 'Journey',
            'year': datetime.now().year,
        }
    )
