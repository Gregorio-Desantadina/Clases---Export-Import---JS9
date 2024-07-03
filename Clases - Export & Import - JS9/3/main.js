import Calculadora from './calculadora.js';
const calcula = new Calculadora();
const numero1 = 6;
const numero2 = 3;
console.log(`${numero1} * ${numero2}: ${calcula.multiplicar(numero1, numero2)}`);
console.log(`${numero1} / ${numero2}: ${calcula.dividir(numero1, numero2)}`);