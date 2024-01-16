// Initial slide index
let slideIndex = 1;

// Call the showSlides function with the initial slide index
showSlides(slideIndex);

// Function to navigate to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to navigate to a specific slide using the dot navigation
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to display the slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // If the index is greater than the number of slides, reset to the first slide
    if (n > slides.length) {
        slideIndex = 1;
    }

    // If the index is less than 1, set it to the last slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides initially
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("fadeIn"); // Remove fadeIn class
    }

    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide with a fadeIn effect
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fadeIn");

    // Add the "active" class to the dot corresponding to the current slide
    dots[slideIndex - 1].className += " active";

	// Set a timer for the automatic slide transition
	let autoSlideTimer = setTimeout(function() {
		plusSlides(1);
	}, 5000);

    // Reset the timer and start automatic slide transition every 5 seconds
    clearTimeout(autoSlideTimer);
    autoSlideTimer = setTimeout(function() {
        plusSlides(1);
    }, 5000);
}
