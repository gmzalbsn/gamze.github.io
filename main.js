document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        const slides = document.querySelectorAll("#project1 .carousel-item");
        
        if (slides.length === 0) {
            console.error("No carousel items found.");
            return;
        }

        // Adjust slideIndex to prevent going out of bounds
        if (n >= slides.length) {
            slideIndex = slides.length - 1;
        } else if (n < 0) {
            slideIndex = 0;
        }

        // Hide all slides
        slides.forEach((slide) => {
            slide.style.display = "none";
        });

        // Show the current slide
        slides[slideIndex].style.display = "block";
    }

    document.querySelector("#project1 .prev").addEventListener("click", function() {
        plusSlides(-1);
    });
    document.querySelector("#project1 .next").addEventListener("click", function() {
        plusSlides(1);
    });

    // Project 2 Slide Control
    let slideIndex2 = 0;
    showSlides2(slideIndex2);

    function plusSlides2(n) {
        showSlides2(slideIndex2 += n);
    }

    function showSlides2(n) {
        const slides2 = document.querySelectorAll("#project2 .carousel-item");

        // Adjust slideIndex2 to prevent going out of bounds
        if (n >= slides2.length) {
            slideIndex2 = slides2.length - 1;
        } else if (n < 0) {
            slideIndex2 = 0;
        }

        // Hide all slides for Project 2
        slides2.forEach((slide) => {
            slide.style.display = "none";
        });

        // Show the current slide for Project 2
        slides2[slideIndex2].style.display = "block";
    }

    document.querySelector("#project2 .prev").addEventListener("click", function() {
        plusSlides2(-1);
    });
    document.querySelector("#project2 .next").addEventListener("click", function() {
        plusSlides2(1);
    });

    // Project 3 Slide Control
    let slideIndex3 = 0;
    showSlides3(slideIndex3);

    function plusSlides3(n) {
        showSlides3(slideIndex3 += n);
    }

    function showSlides3(n) {
        const slides3 = document.querySelectorAll("#project3 .carousel-item");

        // Adjust slideIndex3 to prevent going out of bounds
        if (n >= slides3.length) {
            slideIndex3 = slides3.length - 1;
        } else if (n < 0) {
            slideIndex3 = 0;
        }

        // Hide all slides for Project 3
        slides3.forEach((slide) => {
            slide.style.display = "none";
        });

        // Show the current slide for Project 3
        slides3[slideIndex3].style.display = "block";
    }

    document.querySelector("#project3 .prev").addEventListener("click", function() {
        plusSlides3(-1);
    });
    document.querySelector("#project3 .next").addEventListener("click", function() {
        plusSlides3(1);
    });
});
