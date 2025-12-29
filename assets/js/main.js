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