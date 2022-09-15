/*
    operadores aritmeticos
    +   suma
    -   resta
    *   multiplicacion
    /   division
*/

var edadDaniel, edadPablo , diferenciaEdad, sumaEdad, yearActual, yearDaniel, yearPablo;

edadDaniel = 33;
edadPablo = 28;
yearActual = 2022;

diferenciaEdad = edadDaniel - edadPablo;
sumaEdad = edadDaniel + edadPablo;

yearDaniel = yearActual - edadDaniel;
yearPablo = yearActual - edadPablo;

console.log(diferenciaEdad);
console.log(sumaEdad);
console.log('El año en que nacio Daniel es: ' + yearDaniel);
console.log('El año en que nacio Pablo es: ' + yearPablo);
console.log(yearActual * 5);
console.log(yearActual / 2);