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
    slideIndex += n;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;  // Loop back to the first slide
    } 
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;  // Loop back to the last slide
    }

    showSlides(slideIndex);
}

function showSlides(n) {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${-n * 100}%)`;  // Move to the correct slide
}
