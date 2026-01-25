/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

function hideShowCalendarFR() {
  var x = document.getElementById("calendarHS");
  var y = document.getElementById("showHideButton");
  var g = document.getElementById("gCalendarLogo");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.textContent="Cacher le calendrier";
    g.style.display = "none";
  } else {
    x.style.display = "none";
    y.textContent="Afficher le calendrier";
    g.style.display = "block";
  }
}

function hideShowCalendarEN() {
  var x = document.getElementById("calendarHS");
  var y = document.getElementById("showHideButton");
  var g = document.getElementById("gCalendarLogo");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.textContent="Hide the calendar";
    g.style.display = "none";
  } else {
    x.style.display = "none";
    y.textContent="Show the calendar";
    g.style.display = "block";
  }
}

/* the following javascript is from an Animated quotes carousel imported from codepen:
https://codepen.io/donovanh/pen/GWKNdz by Donovan Hutchinson
*/

$(function() {
  // Carousel logic
  $('#quotes-carousel').on('click', '.next', showNextQuoteClick);
  $('#quotes-carousel').on('click', '.previous', showPreviousQuoteClick);
  // Cycle automatically
  window.carouselRunning = true;
  window.restartingCarousel = null;
  var interval = setInterval(function() {
    if (window.carouselRunning) {
      showNextQuote();
    }
  }, 7000);
});

/* Carousel stuff */
function showNextQuoteClick() {
  window.carouselRunning = false;
  clearTimeout(window.restartingCarousel);
  showNextQuote();
  restartAutomatic();
}

function showPreviousQuoteClick() {
  window.carouselRunning = false;
  clearTimeout(window.restartingCarousel);
  showPreviousQuote();
  restartAutomatic();
}

function restartAutomatic() {
  clearTimeout(window.restartingCarousel);
  window.restartingCarousel = setTimeout(function() {
    window.carouselRunning = true;
  }, 10000);
}

function showNextQuote() {
  var allQuotes = $('#quotes-carousel').find('.quote'),
      current = $('#quotes-carousel').find('.current'),
      previous = $('#quotes-carousel').find('.previous'),
      next = $('#quotes-carousel').find('.next');
  $(current).removeClass('current').addClass('previous');
  $(next).removeClass('next').addClass('current');
  $(previous).removeClass('previous').addClass('remove-left');
  setTimeout(function() {
    $(previous).removeClass('remove-left');
  }, 1000);
  // Work out what should now be the "next" item
  $(allQuotes).each(function(index, item) {
    if ($(item).hasClass('current')) {
      if (allQuotes[index + 1]) {
        $(allQuotes[index + 1]).addClass('next').removeClass('remove-left');
      } else {
        $(allQuotes[0]).addClass('next').removeClass('remove-left');
      }
    }
  });
}

function showPreviousQuote() {
  var allQuotes = $('#quotes-carousel').find('.quote'),
      current = $('#quotes-carousel').find('.current'),
      previous = $('#quotes-carousel').find('.previous'),
      next = $('#quotes-carousel').find('.next');
  $(current).removeClass('current').addClass('next');
  $(previous).removeClass('previous').addClass('current');
  $(next).removeClass('next');
  // Work out what should now be the "next" item
  $(allQuotes).each(function(index, item) {
    if ($(item).hasClass('current')) {
      if (allQuotes[index - 1]) {
        $(allQuotes[index - 1]).addClass('place-left');
        setTimeout(function() {
          $(allQuotes[index - 1]).addClass('previous').removeClass('place-left');
        }, 10);
      } else {
        $(allQuotes[allQuotes.length - 1]).addClass('place-left');
        setTimeout(function() {
          $(allQuotes[allQuotes.length - 1]).addClass('previous').removeClass('place-left');
        }, 10);
      }
    }
  });
}