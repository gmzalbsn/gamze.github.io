function openModal(projectId) {
    document.getElementById(projectId).style.display = 'flex';
}

function closeModal(projectId) {
    document.getElementById(projectId).style.display = 'none';
}

window.addEventListener('scroll', function() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
});
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".carousel-item");
    if (n >= slides.length) {
        slideIndex = 0;
    } 
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.style.display = "none";  // Hide all slides
    });
    
    slides[slideIndex].style.display = "block";  // Show the current slide
}
