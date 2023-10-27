/*Crear una promesa y consumirla paraa llevarle un helado a un amigo si la heladeria esta abierta*/

/*FORMAS DE USAR PROMESAS
    1.-Crear las reglas de la promesa, nos pueda tocar hacerlas o no*/

let heladeriaAbierta = false

const traerHelado = new Promise (function (resolve, reject){
    //LOGICA DE LA PROMESA
    if (heladeriaAbierta){
        resolve("Ten te traje un helado porque estaba abierta la heladeria")
    }else{
        reject("no te traje el helado porque estaba cerrada la heladeria")
    }
})

//2.- Recibir promesas como respuesta
traerHelado.then(function(response){
    console.log(response);
}).catch(function(error){
    console.error("Heladeria pipi: ", error)
})