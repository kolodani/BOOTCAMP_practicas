let personas = [
    { nombre: "Juan", hobby: "Futbol", salario: 1000 },
    { nombre: "Pedro", hobby: "Tenis", salario: 800 },
    { nombre: "Maria", hobby: "Cocinar", salario: 700 },
    { nombre: "Luis", hobby: "Tenis", salario: 1200 },
    { nombre: "Ana", hobby: "Leer", salario: 1100 },
];

// forEach

personas.forEach((person, index) => {
    //console.log(person.nombre, index);
});

// map
let newList = personas.map((person) => {
    return "Hola " + person.nombre;
});

// console.log(newList);

// filter
let newList2 = personas.filter((person) => {
    return person.hobby === "Tenis";
});

//console.log(newList2);

let newList3 = personas.filter((person) => person.salario >= 1000);

//console.log(newList3);

// find
let x = personas.find(person => person.hobby === "Tenis");

console.log(x);