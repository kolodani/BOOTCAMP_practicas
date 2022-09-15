/*
    Operaciones con arreglos
*/

var frutas = ["Manzana", "Pera", "Uva", "Sandía"];
console.log(frutas);

for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
});

frutas.push("Naranja"); // Agrega un elemento al final del arreglo
console.log(frutas);

frutas.unshift("Fresa"); // Agrega un elemento al inicio del arreglo
console.log(frutas);

frutas.pop(); // Elimina el último elemento del arreglo
console.log(frutas);

frutas.shift(); // Elimina el primer elemento del arreglo
console.log(frutas);

var pos = frutas.indexOf("Uva"); // Devuelve la posición del elemento
console.log(pos);

frutas.splice(1, 1); // Elimina un elemento en la posición 1
console.log(frutas);

frutas.splice(1,2);
console.log(frutas);