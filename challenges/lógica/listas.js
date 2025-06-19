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



Ejercicios de Bucles (for...of y for...in)
let palabra = "kaleidoscopio";

for (let letra of palabra) {
  console.log(`las letras que tiene este texto son ${letra}`);
  for (let puestos in palabra) {
    console.log(`actualmente estás en el puesto ${puestos}`);
  }
}

Con Listas (Arrays)
Recorrer una lista de nombres usando for...of
Dado un array de nombres, imprime "Hola, [nombre]" usando for...of.

let contactos = ["pedro", "samuel", "ricardo", "jonathan", "maicol", "jeferson", "andrea"];

for (const nombre of contactos) {
  console.log(`Bienvenid@ a Riwi ${nombre}`);
}

Imprimir índices de una lista usando for...in
Usa for...in para imprimir los índices de un array de colores.

let colores = ["verde", "Azul", "violeta", "zarco", "popper"];

for (let indice in colores) {
  console.log(`El indice actual en tu lista de colores es: ${indice}`);
}

Imprimir índice y valor de cada número en un array
Usa for...in para obtener el índice y luego acceder al valor en la misma línea.

let colores = ["verde", "Azul", "violeta", "zarco", "popper"];

for (let indice in colores) {
  console.log(`El indice actual en tu lista de colores es: ${indice} y su contenido es: ${colores[indice]}`);
}

Ejercicios de Objetos
1. Crea un objeto persona con las propiedades: nombre, edad y ciudad.
let estudiantes = {
  nombre: "juan",
  edad: 30,
  ciudad: "medellin"
};

2. Muestra el valor de una propiedad específica del objeto persona.
console.log(estudiantes.nombre);

3. Modifica el valor de una propiedad existente en un objeto libro.
let biblioteca = {
  titulo: "La historia sin fin",
  edicion: 2018,
  genero: "ficción",
};

biblioteca.edicion = 1999;

console.log(biblioteca.edicion);

4. Agrega una nueva propiedad a un objeto auto.
biblioteca.existe = true;

console.log(`El libro ${biblioteca.titulo} existe en nuestra biblioteca? ${biblioteca.existe}`);

5. Recorre un objeto estudiante con un bucle y muestra todas sus claves y valores.
let universidad = {
  estudiante: "Camilo Rojas Pulgarín",
  becado: true,
  semestre: 8,
  tipo_de_aprendizaje: "visual"
};

for (let [clave, valor] of Object.entries(universidad)) {
  console.log(`${clave} ${valor}`);
}

Ejercicios para practicar funciones
1. Saludo personalizado
Crea una función llamada saludar que reciba un nombre como parámetro y devuelva un saludo del tipo: "Hola, [nombre]!".

function saludo(nombre) {
  console.log(`Hola don ${nombre} bienvenido a su nuevo hogar`);
}

let nombre = "sergio";

console.log(saludo(nombre));

2. Suma de dos números
Escribe una función sumar que reciba dos números como parámetros y retorne su suma.

let numero1 = Number(prompt("ingrese un número"));
let numero2 = Number(prompt("ingrese otro número"));

function suma(a, b) {
  let suma = a + b;
  return suma;
}

console.log(suma(numero1, numero2));

3. Número par o impar
Crea una función llamada esPar que reciba un número y devuelva true si es par, o false si es impar.

function espar(num) {
  let resultado = null;
  if (num % 2 == 0) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

let num = Number(prompt("ingrese un número para ver si es par"));

console.log(`el número ${num} es par? ${espar(num)}`);

4. Calcular el área de un rectángulo
Define una función areaRectangulo que reciba base y altura como argumentos y devuelva el área.

function areaRectangulo(a, b) {
  return a * b;
}

let a1 = Number(prompt("ingrese altura del rectangulo"));
let a2 = Number(prompt("ingrese el ancho del rectangulo"));

console.log(`El area de su rectangulo es: ${areaRectangulo(a1, a2)}`);

5. Convertir grados Celsius a Fahrenheit
Escribe una función celsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva el valor en Fahrenheit usando la fórmula: F = C * 1.8 + 32

function celsiusAFahrenheit(C) {
  let F = C * 1.8 + 32;
  return F;
}

let C = Number(prompt("ingrese el la temperatura en celcius"));

console.log(`La temperatura de ${C} celsius en Farenheit es de: ${celsiusAFahrenh}`}
