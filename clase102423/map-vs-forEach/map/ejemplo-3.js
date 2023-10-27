//Crear un arreglo de las longitudes de las palabras de otro arreglo (resolverlo con map)

const palabras = ["linterna", "llanta"]

//SALIDA ESPERADA/ EXPECTED OUTPUT

const longitudes = palabras.map(palabra => {
    return palabra.length
})

console.log("palabras:",palabras);
console.log("Longitudes",longitudes);
