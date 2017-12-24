$(document).ready(function(){
	$('.works-button').on('click', function(e){
		e.preventDefault();
	
		$('.works-portfolio-more').toggleClass('show');

		if (($(this).text()) === "Show more")
			$(this).text('Show less');
		else 
			$(this).text('Show more');
	});

	// popup menu
	// $('.hamburger').on('click', function(e){
		// e.preventDefault();
		
		// $('.overlay').addClass('active');
		// click on overlay
		// $('.overlay').on('click', function() {
		// 	$(this).removeClass('active');
		// }).find('.popup-menu').click(function(e) {
		// 	e.stopPropagation();
		// })
		// $('.menu-close').on('click', function(e) {
		// 	e.preventDefault();
		// 	$(this).closest('.overlay').removeClass('active');
		// });
	// });
});