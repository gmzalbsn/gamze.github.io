document.addEventListener("DOMContentLoaded", function() {
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

    // Project 4 Slide Control
    let slideIndex4 = 0;
    showSlides4(slideIndex4);

    function plusSlides4(n) {
        showSlides4(slideIndex4 += n);
    }

    function showSlides4(n) {
        const slides4 = document.querySelectorAll("#project4 .carousel-item");

        if (slides4.length === 0) {
            console.error("No carousel items found for Project 4.");
            return;
        }

        slideIndex4 = (n + slides4.length) % slides4.length;

        slides4.forEach((slide) => {
            slide.style.display = "none";
        });

        slides4[slideIndex4].style.display = "block";
    }

    document.querySelector("#project4 .prev").addEventListener("click", function() {
        plusSlides4(-1);
    });
    document.querySelector("#project4 .next").addEventListener("click", function() {
        plusSlides4(1);
    });

    // Project 5 Slide Control
    let slideIndex5 = 0;
    showSlides5(slideIndex5);

    function plusSlides5(n) {
        showSlides5(slideIndex5 += n);
    }

    function showSlides5(n) {
        const slides5 = document.querySelectorAll("#project5 .carousel-item");

        if (slides5.length === 0) {
            console.error("No carousel items found for Project 5.");
            return;
        }

        slideIndex5 = (n + slides5.length) % slides5.length;

        slides5.forEach((slide) => {
            slide.style.display = "none";
        });

        slides5[slideIndex5].style.display = "block";
    }

    document.querySelector("#project5 .prev").addEventListener("click", function() {
        plusSlides5(-1);
    });
    document.querySelector("#project5 .next").addEventListener("click", function() {
        plusSlides5(1);
    });

    // Project 6 Slide Control
    let slideIndex6 = 0;
    showSlides6(slideIndex6);

    function plusSlides6(n) {
        showSlides6(slideIndex6 += n);
    }

    function showSlides6(n) {
        const slides6 = document.querySelectorAll("#project6 .carousel-item");

        if (slides6.length === 0) {
            console.error("No carousel items found for Project 6.");
            return;
        }

        slideIndex6 = (n + slides6.length) % slides6.length;

        slides6.forEach((slide) => {
            slide.style.display = "none";
        });

        slides6[slideIndex6].style.display = "block";
    }

    document.querySelector("#project6 .prev").addEventListener("click", function() {
        plusSlides6(-1);
    });
    document.querySelector("#project6 .next").addEventListener("click", function() {
        plusSlides6(1);
    });

    // Project 7 Slide Control
    let slideIndex7 = 0;
    showSlides7(slideIndex7);

    function plusSlides7(n) {
        showSlides7(slideIndex7 += n);
    }

    function showSlides7(n) {
        const slides7 = document.querySelectorAll("#project7 .carousel-item");

        if (slides7.length === 0) {
            console.error("No carousel items found for Project 7.");
            return;
        }

        slideIndex7 = (n + slides7.length) % slides7.length;

        slides7.forEach((slide) => {
            slide.style.display = "none";
        });

        slides7[slideIndex7].style.display = "block";
    }

    document.querySelector("#project7 .prev").addEventListener("click", function() {
        plusSlides7(-1);
    });
    document.querySelector("#project7 .next").addEventListener("click", function() {
        plusSlides7(1);
    });

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

        const videos = modal.querySelectorAll("video");
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }

    window.closeModal = closeModal;
});
