	
	
	var slides = document.querySelectorAll('#slides .slide');
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide,6000);

	function nextSlide(){
		goToSlide(currentSlide+1);
	}

	function previousSlide(){
		goToSlide(currentSlide-1);
	}

	function goToSlide(n){
		slides[currentSlide].className = 'slide';
		currentSlide = (n+slides.length)%slides.length;
		slides[currentSlide].className = 'slide showing';
	}

		function scrollto(div)
			{
			 $('html,body').animate(
			 {
			  scrollTop: $("#"+div).offset().top
			 },'slow');
			}	