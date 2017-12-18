$(document).ready(function(){
	$('.works-button').on('click', function(e){
		e.preventDefault();
	
		$('.works-portfolio-more').toggleClass('show');

		if (($(this).text()) === "Show more")
			$(this).text('Show less');
		else 
			$(this).text('Show more');
	});
});