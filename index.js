
function logSubmit(event) {
    event.preventDefault();

}

const form = document.getElementById('contact_form');
form.addEventListener('submit', logSubmit);