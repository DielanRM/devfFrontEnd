const numeros = [1, 2, 3, 4, 5]

/*Cada "forEach", en la funcion que pide como parametro, a su vez puede
esa funcion puede recicbir 3 argumentos ( elemento, indice y el arreglo commpleto)*/

/*
numeros.forEach(numero =>{
    console.log(numero);
})*/

console.log("original", numeros);

numeros.forEach((numeroActual, indice, arregloCompleto)=>{
    //console.log(`${indice}.- ${numeroActual} ========= ${arregloCompleto}`);
    arregloCompleto[indice] = numeroActual * 2
})

console.log("original modificado", numeros);