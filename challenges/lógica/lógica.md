```javascript
// -------------------------------------------
// 🧩 CLASIFICADOR DE TRIÁNGULOS
// -------------------------------------------

// Variables para guardar las longitudes de los lados
let lado1 = null;
let lado2 = null;
let lado3 = null;

// Función para pedir los datos al usuario
function pedirdatos() {
  lado1 = Number(prompt("Ingrese la longitud del primer lado "));
  lado2 = Number(prompt("Ingrese la longitud del segundo lado "));
  lado3 = Number(prompt("Ingrese la longitud del tercer lado "));
}

// Función para verificar si los datos forman un triángulo válido
function verificar(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    // Verifica la regla de existencia del triángulo
    if ((a + b) > c && (b + c) > a && (c + a) > b) {
      console.log(`los valores ${a} ${b} ${c} son correctos`);
      clasificar(a, b, c); // Llama a la función para clasificar el triángulo
    }
  } else {
    // Si algún valor es inválido, pide nuevamente los datos
    console.info("hay un error en los datos ingresado, por favor intentelo de nuevo");
    pedirdatos();
  }
}

// Función para clasificar el triángulo según sus lados
function clasificar(a, b, c) {
  if ((a == b) && (b == c)) {
    console.log("El triangulo es Equilatero");
  } else if (a == b || b == c || c == a) {
    console.log("El Triangulo es Isósceles ");
  } else {
    console.log("El Triangulo es Escaleno");
  }
}

// Mensaje de bienvenida al sistema
console.info("Hola  bienvenido al sistema clasificador de triangulos");

// Llamada a las funciones principales
pedirdatos();
verificar(lado1, lado2, lado3);
clasificar(lado1, lado2, lado3);


// -------------------------------------------
// 🧪 MÉTODOS DE ARRAYS EN JAVASCRIPT
// -------------------------------------------

let playlist = ["Canción 1", "Canción 2", "Canción 3"];

let frutas = ["banano", "manzana", "pera", "coco", "uva"];
frutas.shift(); // Elimina el primer elemento del array
console.log(frutas);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.unshift(15); // Agrega al principio
console.log(numeros);

let palabras = ["casa", "perro", "asado", "nieve"];
palabras.unshift("amigos"); // Agrega al principio
console.log(palabras);

let colores = ["rojo", "blue", "verde", "blue", "gold", "gray", "micelido"];
colores.pop(); // Elimina el último elemento
console.log(colores);

let newcolores = colores.slice(0, 3); // Extrae los primeros 3 elementos sin modificar original
newcolores[1] = 2; // Reemplaza un valor
console.log(newcolores);

let camaleon = ["el", "camaleón", "entro en la piscina", "y se tornó del color del agua"];
let frase = camaleon.join(" "); // Une en una sola frase
console.log(frase);

let listaAsistencia = ["Pedro", "Andrea", "Sebastián", "antony", "Jesús", "pablo"];
console.log(listaAsistencia.sort()); // Ordena alfabéticamente

let pensamiento = ["usted", "tan", "misteriosa", "y", "yo", "tan", "curioso"];
let reverse = pensamiento.reverse().join(" "); // Invierte el orden y une en frase
console.log(`al revés: ${reverse}`);

let search = ["bed", "windows", "pool", "mountain"];
let dormir = search.includes("bed"); // Verifica si contiene "bed"
console.log(`Vas a tomar una siesta, hay cama ${dormir}`);


// -------------------------------------------
// 🔁 BUCLES for...of y for...in
// -------------------------------------------

let palabra = "kaleidoscopio";

for (let letra of palabra) {
  console.log(`las letras que tiene este texto son ${letra}`);
  for (let puestos in palabra) {
    console.log(`actualmente estás en el puesto ${puestos}`);
  }
}

let contactos = ["pedro", "samuel", "ricardo", "jonathan", "maicol", "jeferson", "andrea"];
for (const nombre of contactos) {
  console.log(`Bienvenid@ a Riwi ${nombre}`);
}

let colores2 = ["verde", "Azul", "violeta", "zarco", "popper"];
for (let indice in colores2) {
  console.log(`El indice actual en tu lista de colores es: ${indice}`);
  console.log(`El indice actual en tu lista de colores es: ${indice} y su contenido es: ${colores2[indice]}`);
}


// -------------------------------------------
// 🧱 OBJETOS EN JAVASCRIPT
// -------------------------------------------

let estudiantes = {
  nombre: "juan",
  edad: 30,
  ciudad: "medellin"
};
console.log(estudiantes.nombre);

let biblioteca = {
  titulo: "La historia sin fin",
  edicion: 2018,
  genero: "ficción"
};
biblioteca.edicion = 1999;
console.log(biblioteca.edicion);

biblioteca.existe = true;
console.log(`El libro ${biblioteca.titulo} existe en nuestra biblioteca? ${biblioteca.existe}`);

let universidad = {
  estudiante: "Camilo Rojas Pulgarín",
  becado: true,
  semestre: 8,
  tipo_de_aprendizaje: "visual"
};
for (let [clave, valor] of Object.entries(universidad)) {
  console.log(`${clave} ${valor}`);
}


// -------------------------------------------
// 🔣 FUNCIONES EN JAVASCRIPT
// -------------------------------------------

function saludo(nombre) {
  console.log(`Hola don ${nombre} bienvenido a su nuevo hogar`);
}
let nombre = "sergio";
console.log(saludo(nombre));

let numero1 = Number(prompt("ingrese un número"));
let numero2 = Number(prompt("ingrese otro número"));
function suma(a, b) {
  let suma = a + b;
  return suma;
}
console.log(suma(numero1, numero2));

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

function areaRectangulo(a, b) {
  return a * b;
}
let a1 = Number(prompt("ingrese altura del rectangulo"));
let a2 = Number(prompt("ingrese el ancho del rectangulo"));
console.log(`El area de su rectangulo es: ${areaRectangulo(a1, a2)}`);

function celsiusAFahrenheit(C) {
  let F = C * 1.8 + 32;
  return F;
}
let C = Number(prompt("ingrese el la temperatura en celcius"));
console.log(`La temperatura de ${C} celsius en Farenheit es de: ${celsiusAFahrenheit(C)}`);
```
