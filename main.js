document.addEventListener("DOMContentLoaded", function() {
    // Project 1 Slide Control
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

        if (n >= slides.length) {
            slideIndex = slides.length - 1;
        } else if (n < 0) {
            slideIndex = 0;
        }

        slides.forEach((slide) => {
            slide.style.display = "none";
        });

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

        if (n >= slides2.length) {
            slideIndex2 = slides2.length - 1;
        } else if (n < 0) {
            slideIndex2 = 0;
        }

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

        if (n >= slides3.length) {
            slideIndex3 = slides3.length - 1;
        } else if (n < 0) {
            slideIndex3 = 0;
        }

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

        if (n >= slides4.length) {
            slideIndex4 = slides4.length - 1;
        } else if (n < 0) {
            slideIndex4 = 0;
        }

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

        if (n >= slides5.length) {
            slideIndex5 = slides5.length - 1;
        } else if (n < 0) {
            slideIndex5 = 0;
        }

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

        if (n >= slides6.length) {
            slideIndex6 = slides6.length - 1;
        } else if (n < 0) {
            slideIndex6 = 0;
        }

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

        if (n >= slides7.length) {
            slideIndex7 = slides7.length - 1;
        } else if (n < 0) {
            slideIndex7 = 0;
        }

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

    // Modal open and close functions with video pause
    function openModal(projectId) {
        document.getElementById(projectId).style.display = 'flex';
    }

    function closeModal(projectId) {
    const modal = document.getElementById(projectId);
    modal.style.display = 'none';

    // Pause and reset videos (if any) inside the modal
    const videos = modal.querySelectorAll("video");
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
}

    // Expose closeModal function globally
    window.closeModal = closeModal;
});
