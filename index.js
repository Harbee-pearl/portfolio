
function logSubmit(event) {
    event.preventDefault();

}

const form = document.getElementById('submit-button');
form.addEventListener('submit', logSubmit);