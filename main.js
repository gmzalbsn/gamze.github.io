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

    // 2. Proje için slayt kontrolü - 1. resim: 0, 2. resim: -100%
    let slideIndex2 = 0;
    showSlides2(slideIndex2);

    function plusSlides2(n) {
        showSlides2(slideIndex2 += n);
    }

    function showSlides2(n) {
        const slides2 = document.querySelectorAll("#project2 .carousel-item");

        if (n >= slides2.length) {
            slideIndex2 = 0;
        }
        if (n < 0) {
            slideIndex2 = slides2.length - 1;
        }

        slides2.forEach((slide, index) => {
            if (index === slideIndex2) {
                slide.style.transform = "translateX(0)";  // 1. resim tam görünür
            } else if (index === slideIndex2 + 1) {
                slide.style.transform = "translateX(-100%)";  // 2. resim sola kaydırılmış
            } else {
                slide.style.transform = "translateX(100%)";  // Diğer resimler sağda gizlenmiş olur
            }
        });
    }

    document.querySelector("#project2 .prev").addEventListener("click", function() {
        plusSlides2(-1);
    });

    document.querySelector("#project2 .next").addEventListener("click", function() {
        plusSlides2(1);
    });

    // 3. Proje için slayt kontrolü - 1. resim: 0, 2. resim: -100%
    let slideIndex3 = 0;
    showSlides3(slideIndex3);

    function plusSlides3(n) {
        showSlides3(slideIndex3 += n);
    }

    function showSlides3(n) {
        const slides3 = document.querySelectorAll("#project3 .carousel-item");

        if (n >= slides3.length) {
            slideIndex3 = 0;
        }
        if (n < 0) {
            slideIndex3 = slides3.length - 1;
        }

        slides3.forEach((slide, index) => {
            if (index === slideIndex3) {
                slide.style.transform = "translateX(0)";  // 1. resim tam görünür
            } else if (index === slideIndex3 + 1) {
                slide.style.transform = "translateX(-100%)";  // 2. resim sola kaydırılmış
            } else {
                slide.style.transform = "translateX(100%)";  // Diğer resimler sağda gizlenmiş olur
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
