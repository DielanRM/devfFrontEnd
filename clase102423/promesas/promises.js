/*En Js las promesas son objetos que representan un valor que puede estar disponible en un tiempo indefinido
por naturaleza son estructuras asincronas*/

/*Un objeto es la instancia de una clase
 */ 

//Crear la estructura de una promesa
const promesa = new Promise(function (resolve, reject) {
    //Las promesas contiene 2 metodos
    resolve()
    reject()
})

//Consumir la promesa
promesa.then(function(response){
        //Codigo
    console.log(response);
}).catch(function (error){
    console.error(error);
})