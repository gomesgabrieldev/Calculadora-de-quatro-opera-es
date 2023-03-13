const primeiroNumero = prompt("Informe o primeiro numero:");
const segundoNumero = prompt("Informe o segundo numero:");

const x = parseFloat(primeiroNumero);
const y = parseFloat(segundoNumero);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Resultados \n" +
    "\n soma: " +
    soma +
    "\n subtração " +
    subtracao +
    "\n mutliplicação " +
    multiplicacao +
    "\n divisão " +
    divisao
);
