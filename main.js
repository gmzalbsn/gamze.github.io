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

    // Function to open modal
    function openModal(projectId) {
        document.getElementById(projectId).style.display = 'flex';
    }

    // Function to close modal and pause videos
    function closeModal(projectId) {
        const modal = document.getElementById(projectId);
        modal.style.display = 'none';

        // Pause all videos inside the closed modal
        const videos = modal.querySelectorAll("video");
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0; // Reset video to the start
        });
    }

    // Make closeModal function accessible in the HTML button
    window.closeModal = closeModal;
});
