// esto es un alert
//alert("Hola Mundo")

/*
todo esto es un comentario 
*/
let alumno = "" //creo la variable
let nota = 9

const entidad = "Gobierno ciudad" //definiendo con const la var no cambia



alumno = "Karina" //le cambio el contenido

console.log("El nombre del alumno es:" + alumno + "y su nota es: " + nota) //la imprimo
//todas estas var van
let nombreApellido = "Karina Alvarez"
let User = "Juan Carlos"
let _usuario
let $user
let nombre_apellido = "Snake case"
let NombreApellido

// no van!!!! 
//las var que empicen con numeros por ej 1ernombre
// poner nombre-apellido (esto es una resta a nombre se le resta apellido)
// las palabras reservadas como: var, super, break, this...

// Tipos de datos: String
/*let str1 = "String con comillas dobles"
let str2 = 'String con comillas simples'
let str3 = `String con backticks`*/

let str1 = "Juan"
let str2 = 'Pedro'
let str3 = `Ramiro` 
let str4 = str1 + "y" + str2
//console.log(str1 + " y " + str2)
console.log(str4)
let str5 = `${str1} y ${str2}` //usando backticks
console.log(str5)


// Tipos de datos: Number
// mezcla int, float, cualquier número
//let num1 = 2
//let num2 = 3

let num1 = parseFloat (prompt("mete el primer nemero"))
let num2 = parseInt (prompt("mete el segundo numero"))



//operaciones basicas
//console.log(num1 + num2)

let suma = num1 + num2
let resta = num1 - num2
let mult = num1 * num2
let div = num1/num2

console.log("la suma es: " + suma)
console.log("la resta es: " + resta)
console.log("la multiplicación es: " + mult) 
console.log("la división es: " + div)

document.write("<h1> Javascript <h1>"  +  mult)








