const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = `Hoje é dia ${data.toLocaleDateString('pt-BR', {dateStyle: 'full'})} e a hora é ${data.toLocaleTimeString()}`;