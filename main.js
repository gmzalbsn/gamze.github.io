document.addEventListener("DOMContentLoaded", function() {
    // Carousel control for Project 1
    let slideIndex1 = 0;
    showSlides1(slideIndex1);

    function plusSlides1(n) {
        showSlides1(slideIndex1 += n);
    }

    function showSlides1(n) {
        const slides = document.querySelectorAll("#project1 .carousel-item");

        if (slides.length === 0) {
            console.error("No carousel items found in Project 1.");
            return;
        }

        if (n >= slides.length) {
            slideIndex1 = 0;
        }
        if (n < 0) {
            slideIndex1 = slides.length - 1;
        }

        slides.forEach((slide, index) => {
            if (index === slideIndex1) {
                slide.style.transform = "translateX(0)";  // Show current slide
            } else if (index < slideIndex1) {
                slide.style.transform = `translateX(-${(slideIndex1 - index) * 100}%)`;  // Previous slides
            } else {
                slide.style.transform = `translateX(${(index - slideIndex1) * 100}%)`;  // Next slides
            }
        });
    }

    document.querySelector("#project1 .prev").addEventListener("click", function() {
        plusSlides1(-1);
    });
    document.querySelector("#project1 .next").addEventListener("click", function() {
        plusSlides1(1);
    });

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
                slide.style.transform = `translateX(-${(slideIndex2 - index) * 100}%)`;  // Previous slides
            } else {
                slide.style.transform = `translateX(${(index - slideIndex2) * 100}%)`;  // Next slides
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
                slide.style.transform = `translateX(-${(slideIndex3 - index) * 100}%)`;  // Previous slides
            } else {
                slide.style.transform = `translateX(${(index - slideIndex3) * 100}%)`;  // Next slides
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
