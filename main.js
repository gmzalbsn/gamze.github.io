document.addEventListener("DOMContentLoaded", function() {
    // Carousel slide control for Project 1 - Değiştirilmeden kalıyor
    let slideIndex1 = 0;
    showSlides1(slideIndex1);

    function plusSlides1(n) {
        showSlides1(slideIndex1 += n);
    }

    function showSlides1(n) {
        let slides1 = document.querySelectorAll("#project1 .carousel-item");
        if (n >= slides1.length) {
            slideIndex1 = 0;
        }
        if (n < 0) {
            slideIndex1 = slides1.length - 1;
        }
        slides1.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - slideIndex1) * 100}%)`;
        });
    }

    // Carousel slide control for Project 2 - 1. resim: 0, 2. resim: -100%
    let slideIndex2 = 0;
    showSlides2(slideIndex2);

    function plusSlides2(n) {
        showSlides2(slideIndex2 += n);
    }

    function showSlides2(n) {
        let slides2 = document.querySelectorAll("#project2 .carousel-item");
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
            }
        });
    }

    // Carousel slide control for Project 3 - 1. resim: 0, 2. resim: -100%
    let slideIndex3 = 0;
    showSlides3(slideIndex3);

    function plusSlides3(n) {
        showSlides3(slideIndex3 += n);
    }

    function showSlides3(n) {
        let slides3 = document.querySelectorAll("#project3 .carousel-item");
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
            }
        });
    }
});
