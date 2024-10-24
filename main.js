document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        const slides = document.querySelectorAll(".carousel-item");
        
        // Check if slides are found
        if (slides.length === 0) {
            console.error("No carousel items found.");
            return;
        }

        if (n >= slides.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }

        // Hide all slides
        slides.forEach((slide) => {
            slide.style.display = "none";  // Ensure slide exists before trying to access style
        });

        // Show the current slide
        slides[slideIndex].style.display = "block";
    }

    // Event listeners for next/previous controls (if you have buttons)
    document.querySelector(".prev").addEventListener("click", function() {
        plusSlides(-1);
    });
    document.querySelector(".next").addEventListener("click", function() {
        plusSlides(1);
    });
});
