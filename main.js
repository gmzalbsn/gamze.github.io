document.addEventListener("DOMContentLoaded", function() {
    // Proje 2 için kaydırma kontrolü - Başlangıçta sadece 1. resim görünür
    let slideIndex2 = 0;
    showSlides2(slideIndex2);

    function plusSlides2(n) {
        slideIndex2 += n;
        if (slideIndex2 >= document.querySelectorAll("#project2 .carousel-item").length) {
            slideIndex2 = 0;
        } else if (slideIndex2 < 0) {
            slideIndex2 = document.querySelectorAll("#project2 .carousel-item").length - 1;
        }
        showSlides2(slideIndex2);
    }

    function showSlides2(n) {
        const slides = document.querySelectorAll("#project2 .carousel-item");

        slides.forEach((slide, index) => {
            if (index === n) {
                slide.style.transform = "translateX(0)";  // Aktif resim görünür
            } else if (index === n + 1 || (n === slides.length - 1 && index === 0)) {
                slide.style.transform = "translateX(750px)";  // Bir sonraki resim sağda bekler
            } else if (index === n - 1 || (n === 0 && index === slides.length - 1)) {
                slide.style.transform = "translateX(-750px)";  // Önceki resim solda gizlenmiş olur
            } else {
                slide.style.transform = "translateX(-750px)";  // Diğer tüm resimler dışarıda kalır
            }
        });
    }

    document.querySelector("#project2 .prev").addEventListener("click", function() {
        plusSlides2(-1);
    });

    document.querySelector("#project2 .next").addEventListener("click", function() {
        plusSlides2(1);
    });

    // Proje 3 için aynı kaydırma kontrolü
    let slideIndex3 = 0;
    showSlides3(slideIndex3);

    function plusSlides3(n) {
        slideIndex3 += n;
        if (slideIndex3 >= document.querySelectorAll("#project3 .carousel-item").length) {
            slideIndex3 = 0;
        } else if (slideIndex3 < 0) {
            slideIndex3 = document.querySelectorAll("#project3 .carousel-item").length - 1;
        }
        showSlides3(slideIndex3);
    }

    function showSlides3(n) {
        const slides = document.querySelectorAll("#project3 .carousel-item");

        slides.forEach((slide, index) => {
            if (index === n) {
                slide.style.transform = "translateX(0)";  // Aktif resim görünür
            } else if (index === n + 1 || (n === slides.length - 1 && index === 0)) {
                slide.style.transform = "translateX(750px)";  // Bir sonraki resim sağda bekler
            } else if (index === n - 1 || (n === 0 && index === slides.length - 1)) {
                slide.style.transform = "translateX(-750px)";  // Önceki resim solda gizlenmiş olur
            } else {
                slide.style.transform = "translateX(750px)";  // Diğer tüm resimler dışarıda kalır
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
