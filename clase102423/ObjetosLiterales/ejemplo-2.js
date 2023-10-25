//Darle un alias/Sobrenombre a las propiedades que se desestructuran

const persona = {
    nombre: "pepe",
    edad: 20,
    ciudad: "la mejor ciudad"
}

let {nombre: nombreCompleto} = persona

const nombre ="Laura"

console.log(nombre);
console.log(nombreCompleto);