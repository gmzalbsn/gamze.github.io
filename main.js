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
    slideIndex = (n + slides.length) % slides.length;  // Ensure circular looping
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });
}
