const persona = {
    nombre: "pepe",
    edad: 20,
    ciudad: "la mejor ciudad",
    diereccion: {
        calle: "123 principal",
        colonia: "bonita"
    }
}
//Desestructuracion Anidada

const { nombre, direccion: {calle, colonia}} = persona
console.log(calle);