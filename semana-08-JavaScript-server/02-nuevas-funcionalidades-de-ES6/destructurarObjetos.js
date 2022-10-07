const usuario = {
    nombre: 'Grover',
    correo: 'grover@genio.com',
    edad: 25,
    pais: 'México'
    //profesion : 'Programador'
}

const {nombre, pais, profesion = 'No especificado'} = usuario;

//console.log(nombre, pais, profesion);

const mostrarInfo = ({nombre, profesion = 'Estudiante'}) => console.log(`El usuario ${nombre} es ${profesion}`);

mostrarInfo(usuario);