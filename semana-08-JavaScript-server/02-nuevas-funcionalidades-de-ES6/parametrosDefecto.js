function registrarUsuario(nombre, pais = 'No especificado', correo, telefono = 'No registrado') {
    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono}`;
}

console.log(registrarUsuario('Grover', undefined, 'correo@correo.com'));





