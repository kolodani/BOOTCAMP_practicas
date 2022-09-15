/*
    Calcular el IMC de dos personas
*/

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

var imcLuis = pesoLuis / (alturaLuis * alturaLuis);
var imcCarlos = pesoCarlos / (alturaCarlos * alturaCarlos);

console.log("IMC de Luis: " + imcLuis);
console.log("IMC de Carlos: " + imcCarlos);

var mayorIMC = imcLuis < imcCarlos;
console.log("¿Es el IMC de Carlos mayor que el de Luis? " + mayorIMC);