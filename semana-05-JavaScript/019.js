/*
    Ejericio
*/

var pabloA = 14;
var pabloB = 8;
var pabloC = 16;

var mariaA = 12;
var mariaB = 18;
var mariaC = 10;

var promedioPablo = (pabloA + pabloB + pabloC) / 3;
var promedioMaria = (mariaA + mariaB + mariaC) / 3;

if (promedioPablo > promedioMaria) {
    console.log("El promedio de Pablo es mayor");
}
else if (promedioMaria > promedioPablo) {
    console.log("El promedio de María es mayor");
}
else {
    console.log("Los promedios son iguales");
}

console.log("Promedio de Pablo: " + promedioPablo);
if (promedioPablo > 13) {
    console.log("Pablo ha aprobado");
}
else {
    console.log("Pablo ha reprobado");
}

console.log("Promedio de María: " + promedioMaria);
if (promedioMaria > 13) {
    console.log("Maria ha aprobado");
}
else {
    console.log("Maria ha reprobado");
}