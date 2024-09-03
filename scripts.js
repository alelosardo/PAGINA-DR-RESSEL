document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Gracias por su mensaje. Nos pondremos en contacto con usted pronto.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
