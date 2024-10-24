document.addEventListener("DOMContentLoaded", function() {
    // Proje 2 için kaydırma kontrolü - Başlangıçta sadece 1. resim görünür
    let slideIndex2 = 0;
    showSlides2(slideIndex2);

    function plusSlides2(n) {
        showSlides2(slideIndex2 += n);
    }

    function showSlides2(n) {
        const slides = document.querySelectorAll("#project2 .carousel-item");

        if (slides.length === 0) {
            console.error("Proje 2'de slayt bulunamadı.");
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
                slide.style.transform = "translateX(0)";  // İlk resim ekranda görünür
            } else if (index === slideIndex2 + 1) {
                slide.style.transform = "translateX(750px)";  // İkinci resim sağa gizlenmiş
            } else if (index === slideIndex2 - 1) {
                slide.style.transform = "translateX(-750px)";  // Önceki resim sola dışarıda
            } else {
                slide.style.transform = "translateX(750px)";  // Diğer resimler dışarıda
            }
        });
    }

    document.querySelector("#project2 .prev").addEventListener("click", function() {
        plusSlides2(-1);
    });
    document.querySelector("#project2 .next").addEventListener("click", function() {
        // İleri butonuna tıklandığında ikinci resim -750px'e gider, birinci resim 750px'e kayar
        slides.forEach((slide, index) => {
            if (index === slideIndex2) {
                slide.style.transform = "translateX(750px)";  // İlk resim sağa dışarı çıkar
            } else if (index === slideIndex2 + 1) {
                slide.style.transform = "translateX(-750px)";  // İkinci resim sola kayar
            }
        });
        plusSlides2(1);
    });

    // Proje 3 için aynı mantık
    let slideIndex3 = 0;
    showSlides3(slideIndex3);

    function plusSlides3(n) {
        showSlides3(slideIndex3 += n);
    }

    function showSlides3(n) {
        const slides = document.querySelectorAll("#project3 .carousel-item");

        if (slides.length === 0) {
            console.error("Proje 3'te slayt bulunamadı.");
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
                slide.style.transform = "translateX(0)";  // İlk resim ekranda görünür
            } else if (index === slideIndex3 + 1) {
                slide.style.transform = "translateX(750px)";  // İkinci resim sağda gizlenmiş
            } else if (index === slideIndex3 - 1) {
                slide.style.transform = "translateX(-750px)";  // Önceki resim sola dışarıda
            } else {
                slide.style.transform = "translateX(750px)";  // Diğer resimler dışarıda
            }
        });
    }

    document.querySelector("#project3 .prev").addEventListener("click", function() {
        plusSlides3(-1);
    });

    document.querySelector("#project3 .next").addEventListener("click", function() {
        slides.forEach((slide, index) => {
            if (index === slideIndex3) {
                slide.style.transform = "translateX(750px)";  // İlk resim sağa dışarı çıkar
            } else if (index === slideIndex3 + 1) {
                slide.style.transform = "translateX(-750px)";  // İkinci resim sola kayar
            }
        });
        plusSlides3(1);
    });
});
