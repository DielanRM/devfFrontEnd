/*Desestructuracion de objetos como parametros de funciones*/

function imprimirInfo ({nombre, edad}) {
    console.log(`nombre ${nombre}, edad: ${edad}`);
}

const persona = {
    nombre: "Enrique",
    edad: 20,
    ciudad: "Ragnarok"
}

imprimirInfo(persona)