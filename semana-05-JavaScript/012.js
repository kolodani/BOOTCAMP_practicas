/*
    Sentencias condicionales
    NOT (!)
    AND (&&)
    OR (||)
*/

var nombre = "Pablo";
var edad = 9;

// edad < 12 es un niño
// edad >= 12, edad < 18 es un adolescente
// edad >= 18, edad < 60 es un adulto
// edad >= 60 es un anciano

if (edad < 12) {
    console.log(nombre + " es un niño");
}else if (edad >= 12 && edad < 18) {
    console.log(nombre + " es un adolescente");
}else if (edad >= 18 && edad < 60) {
    console.log(nombre + " es un adulto");
}else {
    console.log(nombre + " es un anciano");
}