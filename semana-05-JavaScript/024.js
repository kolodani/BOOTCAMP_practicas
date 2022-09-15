/*
    Objetos Literales
*/

var persona = {
    nombre: "Juan",
    apellido: "Perez",
    gustos: ["Futbol", "Peliculas", "Ingles"],
    trabajo: "Instrutor",
    esCasado: true
};

console.log(persona);

console.log(persona.nombre);
console.log(persona.apellido);

console.log(persona["trabajo"]);

persona.esCasado = false;
console.log(persona.esCasado);