

const btn = document.getElementById('submit-button');
btn.addEventListener('click', logSubmit);

function logSubmit(event) {
    event.preventDefault();
}