//convertir un arreglo de nombres en un arreglo de saludos

const nombres = ["Juan", "Maria", "Lucia"]

let saludos = nombres.map(nombre => {
    return `hola ${nombre}!`
});

console.log("Arreglo de nombres", nombres);
console.log("Arreglo de saludos", saludos);