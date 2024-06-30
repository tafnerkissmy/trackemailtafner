const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

document.getElementById('email').innerHTML = email;

// Simulate email open event
setTimeout(() => {
  document.getElementById('status').innerHTML = 'Aberto';
  document.getElementById('opened').innerHTML = 'Sim';
}, 2000); // Simulate email open after 2 seconds
