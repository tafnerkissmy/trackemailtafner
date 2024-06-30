// Armazenar email aberto em um arquivo txt
fetch('log.txt', {
  method: 'POST',
  body: new URLSearchParams(window.location.search).get('email') + '\n',
  headers: {
    'Content-Type': 'text/plain'
  }
});
