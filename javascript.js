let slideIndex = 1;
let timer; // Global variable to hold the timer
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    clearTimeout(timer); // clear any existing timer before changing slides
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    clearTimeout(timer); // clear timer on manual slide change
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Remove the active class from all dots
    for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Display the current slide and add active class to corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    // Set up the timer to auto-advance the slide after 5 seconds
    timer = setTimeout(() => { plusSlides(1); }, 5000);
}