document.addEventListener("DOMContentLoaded", function() {
   let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".carousel-item");

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Apply the correct transform to position the active slide
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });
}
