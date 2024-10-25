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
            console.error("No carousel items found for Project 1.");
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

        if (slides2.length === 0) {
            console.error("No carousel items found for Project 2.");
            return;
        }

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

    // Repeat slide control functions for projects 3 to 7 in a similar manner...

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

    // Updated Modal open and close functions with video pause and all-modals-close
    function openModal(projectId) {
        // Close all open modals
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });

        // Open the requested modal
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
