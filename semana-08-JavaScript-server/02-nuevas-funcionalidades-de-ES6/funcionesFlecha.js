const nombres = ['Grover', 'Gervacio', 'Gilberta', 'Gregorio'];

const numero_caracteres = nombres.map(function(nombre) {
    console.log(`${nombre} tiene ${nombre.length} caracteres`);
});

const numero_caracteres2 = nombres.map((nombre) => {
    console.log(`${nombre} tiene ${nombre.length} caracteres`);
});

const numero_caracteres3 = nombres.map(nombre => {
    return `${nombre} tiene ${nombre.length} caracteres`;
});

console.log(numero_caracteres3);

// la diferencia de 3 lineas de codigo contra 1
const numero_caracteres4 = nombres.map(nombre => `${nombre} tiene ${nombre.length} caracteres`);

console.log(numero_caracteres4);

const numero_caracteres5 = nombres.map(function(nombre) {
    return `${nombre} tiene ${nombre.length} caracteres`;
});

console.log(numero_caracteres5);
