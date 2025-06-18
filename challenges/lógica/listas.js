// 🧪 Ejercicios: Métodos de arrays en JavaScript


let playlist = ["Canción 1", "Canción 2", "Canción 3"];

let frutas = ["banano", "manzana","pera","coco","uva"]
// 🔹 Ejercicio 1

// Quita el primer elemento de un array de frutas.

frutas.shift()
console.log(frutas)

// 🔹 Ejercicio 2
// Agrega un número al final de un array de números.

let numeros = [1,2,3,4,5,6,7,8,9,10]

numeros.unshift(15);

console.log(numeros)

// 🔹 Ejercicio 3

// Agrega un elemento al principio de un array de palabras.

let palabras = ["casa","perro","asado","nieve"];

palabras.unshift("amigos")

console.log(palabras)

// 🔹 Ejercicio 4

// Elimina el último elemento de un array de colores.
let colores = ["rojo", "blue","verde","blue","gold","gray","micelido"]

colores.pop()

console.log(colores)

// 🔹 Ejercicio 5

// Extrae una porción de un array sin modificar el original.
let newcolores = colores.slice(0,3);


// 🔹 Ejercicio 6

// Reemplaza un elemento en una posición específica del array.
newcolores[1] = 2
console.log(newcolores)
// 🔹 Ejercicio 7

// Une los elementos de un array de palabras en un solo string separado por espacios.


let camaleon = ["el","camaleón","entro en la piscina","y se tornó del color del agua"]
let frase = camaleon.join(" ")
console.log(frase)
// 🔹 Ejercicio 8

// Ordena alfabéticamente un array de nombres.

let listaAsistencia = ["Pedro","Andrea","Sebastián", "antony", "Jesús", "pablo"];
console.log(listaAsistencia.sort())


// 🔹 Ejercicio 9

// Invierte el orden de los elementos de un array.
let pensamiento = ["usted","tan","misteriosa","y", "yo", "tan","curioso"];
let reverse = pensamiento.reverse().join(" ");
console.log(`al revés: ${reverse}`)


// 🔹 Ejercicio 10
// Verifica si un valor específico existe dentro del array.

let search = ["bed","windows","pool","mountain"]


let dormir = search.includes("bed")

console.log(`Vas a tomar una siesta, hay cama ${dormir}`);
