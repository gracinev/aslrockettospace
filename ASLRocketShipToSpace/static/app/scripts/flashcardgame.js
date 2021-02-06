$(document).ready(function() {
	var savedMatches = [];
	var clickedMatches = [];

	var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var randomAlphabetArray = alphabetArray.sort(() => 0.5 - Math.random());
	var slicedAlphabetArray = randomAlphabetArray.slice(0,10);
	var alphabetArrayWithPhotos = [];
	$.each(slicedAlphabetArray, function(index, item) {
		alphabetArrayWithPhotos.push(item);
		alphabetArrayWithPhotos.push("letter_" + item + ".png");
	});
	var finalRandomAlphabetArray = alphabetArrayWithPhotos.sort(() => 0.5 - Math.random());
	$.each(finalRandomAlphabetArray, function(index, item) {
		if (index % 4 == 0) {
			$('#cardContainer').append("<div class='row'></div>");
		}

		if (item.includes(".png")) {
			var splitUnderscore = item.split("_");
			var splitPNG = splitUnderscore[1].split(".png")[0];
			$('.row').last().append('<div id=' + splitPNG + ' class="aslCard col-sm-3"><img src="/static/app/signs/letter_' + splitPNG + '.png"/></div>');
		}
		else {
			$('.row').last().append('<div id=' + item + ' class="aslCard col-sm-3">' + item + '</div>');
		}
	});

	$('.aslCard').on('click', function() {
		if ($(this).hasClass('selected') == false) {
			$(this).addClass('selected');
			clickedMatches.push($(this).attr('id'));
			if (clickedMatches.length == 2) {
				if (clickedMatches[0] == clickedMatches[1]) {
					savedMatches.push(clickedMatches[0]);
					savedMatches.push(clickedMatches[1]);
					$('.selected').replaceWith("<div class='col-sm-3'></div>");
					clickedMatches = [];
				}
				else {
					clickedMatches = [];
					$('.selected').removeClass('selected');
				}
			}
			if (savedMatches.length == finalRandomAlphabetArray.length) {
				alert("you did it");
			}
		}
	});
});