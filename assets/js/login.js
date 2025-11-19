// modal function
const modalBox = document.getElementById('modal-box');
const mainModal = document.getElementById('modal');

function openModal() {
    modalBox.style.display = 'block';
    mainModal.style.display = 'block';
}

function closeModal() {
    modalBox.style.display = 'none';
    mainModal.style.display = 'none';
}

// login function