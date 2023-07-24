const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('titulo-texto');
numeroTitulo.innerHTML = numero;


texto.innerHTML += `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong></p>`;
texto.innerHTML += `<p>${numero} É inteiro: <strong>${Number.isInteger(numero)}</strong> </p>`;
texto.innerHTML += `<p>É Nan: <strong>${Number.isNaN(numero * 5)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;
