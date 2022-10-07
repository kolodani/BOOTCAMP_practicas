const persona = ['Grover Gervacio', 25, 'México'];

//const nombre = persona[0];
//const edad = persona[1];

const [nombre, edad, pais, profesion = 'No especificado'] = persona;

//console.log(nombre);
//console.log(edad);
//console.log(pais);
//console.log(profesion);

const mostrarInfo = ([nombre, , pais, profesion = 'No especificado' ] = persona) => console.log(nombre, profesion);

mostrarInfo(persona);

