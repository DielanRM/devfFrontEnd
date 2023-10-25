//OMISION DE VALORES NO DESEADOS
const arreglo = [1,2,3,4,5]

// Desestructuracion con omision de valores no deseados

const [primer, segundo, , , quinto] = arreglo//-----al tercer y cuarto no se puede acceder porque no se desestructurando (no se les asigno una variable)

console.log(segundo);