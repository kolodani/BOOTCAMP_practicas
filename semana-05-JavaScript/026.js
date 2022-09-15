/*
    Objetos y Metodos
*/

var persona = {
    nombre: "Juan",
    apellido: "Perez",
    gustos: ["Futbol", "Peliculas", "Ingles"],
    trabajo: "Instrutor",
    esCasado: true,
    yearNacimiento: 1989,
    
    // Metodos
    calcularEdad: function(){
        this.edad = 2019 - this.yearNacimiento;
    }
};

persona.calcularEdad();
console.log(persona);
