/*el operador ternario es una forma concisa de escribri una declaracion condicional*/

const edad = 14
// que se confirme si se es mayor de edad
//si eres mayor de 18, entonces eres mayor de edad

//============Opcion 1, metiendolo en una constante======================================
const mensaje = edad >= 18? "eres mayor de edad" : "Lo siento no eres mayor"
console.log(mensaje);

//============Opcion 2, solo imprimiendo=================================================
console.log(edad >= 18? "eres mayor de edad" : "Lo siento no eres mayor");


const esDiaLaborable = false
const actividad = esDiaLaborable? "trabajar":"descansar"
console.log(actividad);//INVESTIGAR VALORES TRUTHY Y FALSY


//===================Opcion 3, retornar el valor en una funcion===========
function esPar(numero){
    return numero %2 ==0? "es par": "es impar"
}
console.log(esPar(5));