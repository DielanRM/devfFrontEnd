/*La desestructuracion de objetos literales te permite extraer propiedades de un objetosy asignarlas a una variable/constante individual*/

const persona = {
    nombre: "pepe",
    edad: 20,
    ciudad: "la mejor ciudad"
}

//Desestructuracion
let {nombre, edad} = persona

console.log(nombre);