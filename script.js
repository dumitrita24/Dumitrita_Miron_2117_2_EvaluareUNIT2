let slideIndex = 0;
let slideshowRunning = false;

function startSlideshow() {
	if (!slideshowRunning) {
                slideshowRunning = true;
                showSlides();
            }
        }

function showSlides() {
	let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
        	slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000);
        }
        function plusSlides(n) {
            	showSlides(slideIndex += n);
        }