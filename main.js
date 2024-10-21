
function openModal(projectId) {
    document.getElementById(projectId).style.display = 'flex';
}

function closeModal(projectId) {
    document.getElementById(projectId).style.display = 'none';
}

window.addEventListener('scroll', function() {
    closeModal('project1');
    closeModal('project2');
    closeModal('project3');
    closeModal('project4');
    closeModal('project5');
    closeModal('project6');
});
