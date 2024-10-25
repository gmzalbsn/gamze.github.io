document.addEventListener("DOMContentLoaded", function() {
    // Sadece belirli bir videonun sesini kapat
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        if (video.querySelector("source").getAttribute("src") === "Assets/Portfolio/proje7_3_Video.mp4") {
            video.muted = true;  // Sadece proje7_3_Video.mp4 sesini kapatır
        }
    });

    // Project 1 Slide Control
    let slideIndex1 = 0;
    showSlides1(slideIndex1);

    function plusSlides1(n) {
        showSlides1(slideIndex1 += n);
    }

    function showSlides1(n) {
        const slides = document.querySelectorAll("#project1 .carousel-item");

        if (slides.length === 0) {
            console.error("No carousel items found for Project 1.");
            return;
        }

        slideIndex1 = (n + slides.length) % slides.length;

        slides.forEach((slide) => {
            slide.style.display = "none";
        });

        slides[slideIndex1].style.display = "block";
    }

    document.querySelector("#project1 .prev").addEventListener("click", function() {
        plusSlides1(-1);
    });
    document.querySelector("#project1 .next").addEventListener("click", function() {
        plusSlides1(1);
    });

    // Project 2 Slide Control
    let slideIndex2 = 0;
    showSlides2(slideIndex2);

    function plusSlides2(n) {
        showSlides2(slideIndex2 += n);
    }

    function showSlides2(n) {
        const slides2 = document.querySelectorAll("#project2 .carousel-item");

        if (slides2.length === 0) {
            console.error("No carousel items found for Project 2.");
            return;
        }

        slideIndex2 = (n + slides2.length) % slides2.length;

        slides2.forEach((slide) => {
            slide.style.display = "none";
        });

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

        if (slides3.length === 0) {
            console.error("No carousel items found for Project 3.");
            return;
        }

        slideIndex3 = (n + slides3.length) % slides3.length;

        slides3.forEach((slide) => {
            slide.style.display = "none";
        });

        slides3[slideIndex3].style.display = "block";
    }

    document.querySelector("#project3 .prev").addEventListener("click", function() {
        plusSlides3(-1);
    });
    document.querySelector("#project3 .next").addEventListener("click", function() {
        plusSlides3(1);
    });

    // Diğer projeler için benzer şekilde slide control fonksiyonlarını burada ekleyin...

    // Modal open and close functions with video pause on close
    function openModal(projectId) {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });

        document.getElementById(projectId).style.display = 'flex';
    }

    function closeModal(projectId) {
        const modal = document.getElementById(projectId);
        modal.style.display = 'none';

        // Modal içindeki tüm videoları duraklatır, sesi kapatır ve başa sarar
        const videos = modal.querySelectorAll("video");
        videos.forEach(video => {
            video.muted = true;         // Sesi kapat
            video.pause();               // Videoyu duraklat
            video.currentTime = 0;       // Videoyu başa sar
            setTimeout(() => {
                video.muted = false;     // Ses kapama etkisini kaldır (kapandığında sessiz olur, açıldığında sesi normal çalışır)
            }, 100);                     // Bir süre sonra ses ayarını eski haline getirir
        });
    }

    window.closeModal = closeModal;
});
