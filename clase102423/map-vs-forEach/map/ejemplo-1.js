/*Se utiliza para crear un nuevo arreglo a partir de otro, aplicando una funcion a cada elemento 
del arreglo original*/

const numeros = [1, 2, 3, 4, 5]

const numerosDuplicados = numeros.map(numero =>{
    return numero * 2
})

console.log("Arreglo original", numeros);
console.log("copia del rreglo original", numerosDuplicados);
