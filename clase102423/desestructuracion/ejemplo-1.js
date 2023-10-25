/*La desestructuracion de arreglos en JSON, es una caracteridtica que te permite extraer
valores de un arreglo y asignarlos a variables/constantes individuales
de una manera mas conveniente*/

//ASIGNACION DE VALORES A VARIABLES INDIVIDUALES

const arreglo = [1, 2, 3]

//desestructuracion
let [primerValor, segundoValor, tercerValor] = arreglo

console.log(tercerValor);