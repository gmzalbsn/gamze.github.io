document.addEventListener("DOMContentLoaded", function() {
    // Carousel control for Project 2
    let slideIndex2 = 0;
    showSlides2(slideIndex2);

    function plusSlides2(n) {
        showSlides2(slideIndex2 += n);
    }

    function showSlides2(n) {
        const slides = document.querySelectorAll("#project2 .carousel-item");
        
        if (slides.length === 0) {
            console.error("No carousel items found in Project 2.");
            return;
        }

        if (n >= slides.length) {
            slideIndex2 = 0;
        }
        if (n < 0) {
            slideIndex2 = slides.length - 1;
        }

        slides.forEach((slide, index) => {
            if (index === slideIndex2) {
                slide.style.transform = "translateX(0)";  // Show current slide
            } else if (index < slideIndex2) {
                slide.style.transform = "translateX(-100%)";  // Previous slide to the left
            } else {
                slide.style.transform = "translateX(100%)";  // Next slides to the right
            }
        });
    }

    document.querySelector("#project2 .prev").addEventListener("click", function() {
        plusSlides2(-1);
    });
    document.querySelector("#project2 .next").addEventListener("click", function() {
        plusSlides2(1);
    });

    // Carousel control for Project 3
    let slideIndex3 = 0;
    showSlides3(slideIndex3);

    function plusSlides3(n) {
        showSlides3(slideIndex3 += n);
    }

    function showSlides3(n) {
        const slides = document.querySelectorAll("#project3 .carousel-item");
        
        if (slides.length === 0) {
            console.error("No carousel items found in Project 3.");
            return;
        }

        if (n >= slides.length) {
            slideIndex3 = 0;
        }
        if (n < 0) {
            slideIndex3 = slides.length - 1;
        }

        slides.forEach((slide, index) => {
            if (index === slideIndex3) {
                slide.style.transform = "translateX(0)";  // Show current slide
            } else if (index < slideIndex3) {
                slide.style.transform = "translateX(-100%)";  // Previous slide to the left
            } else {
                slide.style.transform = "translateX(100%)";  // Next slides to the right
            }
        });
    }

    document.querySelector("#project3 .prev").addEventListener("click", function() {
        plusSlides3(-1);
    });
    document.querySelector("#project3 .next").addEventListener("click", function() {
        plusSlides3(1);
    });
});
