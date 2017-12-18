$(document).ready(function(){
	$('.works-button').on('click', function(e){
		e.preventDefault();
	
		$('.works-portfolio-more').toggleClass('show');

		if (($(this).text()) === "Show more")
			$(this).text('Show less');
		else 
			$(this).text('Show more');
	});

	$('.hamburger').on('click', function(e){
		e.preventDefault();
	
		$('.popup-menu').toggleClass('show');
		$('header').toggleClass('bg-dark');
	});
});