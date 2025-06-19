CondicionalEjercicio: Clasificador de TriángulosEscribe un programa que reciba tres números positivos que representan las longitudes de los lados de un triángulo. El programa debe determinar si los lados forman un triángulo válido y, si es válido, clasificarlo como:Equilátero: todos los lados son iguales.Isósceles: dos lados son iguales.Escaleno: todos los lados son diferentes.Si los lados no forman un triángulo válido, muestra un mensaje de error.Regla para validar un triángulo:La suma de las longitudes de dos lados siempre debe ser mayor que el tercer lado.// Declaración de variables globales para almacenar las longitudes de los lados del triángulo.
// Se inicializan a null para indicar que aún no tienen un valor.
let lado1 = null;
let lado2 = null;
let lado3 = null;

/**
 * Función para solicitar al usuario las longitudes de los tres lados del triángulo.
 * Utiliza la función 'prompt' para obtener la entrada y la convierte a tipo Number.
 */
function pedirdatos() {
  lado1 = Number(prompt("Ingrese la longitud del primer lado "));
  lado2 = Number(prompt("Ingrese la longitud del segundo lado "));
  lado3 = Number(prompt("Ingrese la longitud del tercer lado "));
}

/**
 * Función para verificar si los lados proporcionados pueden formar un triángulo válido.
 * @param {number} a - Longitud del primer lado.
 * @param {number} b - Longitud del segundo lado.
 * @param {number} c - Longitud del tercer lado.
 */
function verificar(a, b, c) {
  // Comprueba si todas las longitudes de los lados son números positivos.
  if (a > 0 && b > 0 && c > 0) {
    // Si los lados son positivos, verifica la regla del triángulo:
    // La suma de dos lados debe ser mayor que el tercer lado.
    if ((a + b) > c && (b + c) > a && (c + a) > b) {
      // Si los lados forman un triángulo válido, lo indica y procede a clasificarlo.
      console.log(`los valores ${a} ${b} ${c} son correctos`);
      clasificar(a, b, c); // Se pasan los parámetros a la función clasificar
    } else {
      // Si los lados no forman un triángulo válido (pero son positivos), informa el error
      // y solicita nuevamente los datos.
      console.info("hay un error en los datos ingresado, por favor intentelo de nuevo");
      pedirdatos();
      // Se debe volver a llamar a verificar con los nuevos lados
      verificar(lado1, lado2, lado3);
    }
  } else {
    // Si alguna longitud de lado no es positiva, informa el error
    // y solicita nuevamente los datos.
    console.info("hay un error en los datos ingresado, por favor intentelo de nuevo");
    pedirdatos();
    // Se debe volver a llamar a verificar con los nuevos lados
    verificar(lado1, lado2, lado3);
  }
}

/**
 * Función para clasificar el tipo de triángulo (Equilátero, Isósceles, Escaleno).
 * @param {number} a - Longitud del primer lado.
 * @param {number} b - Longitud del segundo lado.
 * @param {number} c - Longitud del tercer lado.
 */
function clasificar(a, b, c) {
  // Comprueba si todos los lados son iguales (Equilátero).
  if ((a == b) && (b == c)) {
    console.log("El triangulo es Equilatero");
  }
  // Comprueba si al menos dos lados son iguales (Isósceles).
  // Esta condición se evalúa si no es equilátero.
  else if (a == b || b == c || c == a) {
    console.log("El Triangulo es Isósceles ");
  }
  // Si no es equilátero ni isósceles, todos los lados son diferentes (Escaleno).
  else {
    console.log("El Triangulo es Escaleno");
  }
}

// Mensaje de bienvenida al usuario.
console.info("Hola bienvenido al sistema clasificador de triangulos");

// Inicia el proceso: solicita los datos al usuario.
pedirdatos();
// Llama a la función 'verificar' con los lados obtenidos para validar y clasificar.
verificar(lado1, lado2, lado3);
// Llama a la función 'clasificar' con los lados.
// Nota: La clasificación ya se llama dentro de 'verificar' si es un triángulo válido.
// Llamarla aquí de nuevo podría no ser necesaria dependiendo de la lógica deseada.
clasificar(lado1, lado2, lado3);
Métodos de las listas🧪 Ejercicios: Métodos de arrays en JavaScript// Declaración de un array de ejemplo llamado 'playlist'
let playlist = ["Canción 1", "Canción 2", "Canción 3"];

// Declaración de un array de strings llamado 'frutas'
let frutas = ["banano", "manzana", "pera", "coco", "uva"];

// 🔹 Ejercicio 1
// Quita el primer elemento de un array de frutas.
// Utiliza el método 'shift()' que elimina el primer elemento del array.
frutas.shift();
console.log(frutas); // Imprime el array 'frutas' después de la modificación.

// 🔹 Ejercicio 2
// Agrega un número al final de un array de números.
// Nota: La descripción del ejercicio dice "agrega un número al final",
// pero tu código usa 'unshift()', que agrega al principio.
// Si el objetivo es al final, se usaría 'push()'.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Utiliza el método 'unshift()' que agrega uno o más elementos al principio del array.
numeros.unshift(15);

console.log(numeros); // Imprime el array 'numeros' después de la modificación.

// 🔹 Ejercicio 3
// Agrega un elemento al principio de un array de palabras.
let palabras = ["casa", "perro", "asado", "nieve"];

// Utiliza el método 'unshift()' para agregar "amigos" al principio del array 'palabras'.
palabras.unshift("amigos");

console.log(palabras); // Imprime el array 'palabras' después de la modificación.

// 🔹 Ejercicio 4
// Elimina el último elemento de un array de colores.
let colores = ["rojo", "blue", "verde", "blue", "gold", "gray", "micelido"];

// Utiliza el método 'pop()' que elimina el último elemento del array.
colores.pop();

console.log(colores); // Imprime el array 'colores' después de la modificación.

// 🔹 Ejercicio 5
// Extrae una porción de un array sin modificar el original.
// Utiliza el método 'slice()' que devuelve una copia superficial de una parte de un array
// dentro de un nuevo array, sin modificar el array original.
let newcolores = colores.slice(0, 3);

// 🔹 Ejercicio 6
// Reemplaza un elemento en una posición específica del array.
// Modifica el elemento en el índice 1 del array 'newcolores' a 2.
// Nota: 'splice()' se usa para reemplazar, pero la asignación directa por índice también es válida
// si solo se reemplaza un elemento conocido.
newcolores[1] = 2;
console.log(newcolores); // Imprime el array 'newcolores' después de la modificación.

// 🔹 Ejercicio 7
// Une los elementos de un array de palabras en un solo string separado por espacios.
let camaleon = ["el", "camaleón", "entro en la piscina", "y se tornó del color del agua"];
// Utiliza el método 'join(" ")' para concatenar todos los elementos del array 'camaleon'
// en un solo string, usando un espacio como separador.
let frase = camaleon.join(" ");
console.log(frase); // Imprime el string resultante.

// 🔹 Ejercicio 8
// Ordena alfabéticamente un array de nombres.
let listaAsistencia = ["Pedro", "Andrea", "Sebastián", "antony", "Jesús", "pablo"];
// Utiliza el método 'sort()' para ordenar los elementos del array alfabéticamente.
// Nota: 'sort()' ordena basándose en la conversión a string y el ordenamiento UTF-16,
// lo que significa que las mayúsculas van antes que las minúsculas ("Andrea" antes de "antony").
console.log(listaAsistencia.sort()); // Imprime el array ordenado.

// 🔹 Ejercicio 9
// Invierte el orden de los elementos de un array.
let pensamiento = ["usted", "tan", "misteriosa", "y", "yo", "tan", "curioso"];
// Utiliza el método 'reverse()' para invertir el orden de los elementos del array.
// Luego, 'join(" ")' une los elementos invertidos en un string.
let reverse = pensamiento.reverse().join(" ");
console.log(`al revés: ${reverse}`); // Imprime el string con los elementos invertidos.

// 🔹 Ejercicio 10
// Verifica si un valor específico existe dentro del array.
let search = ["bed", "windows", "pool", "mountain"];

// Utiliza el método 'includes()' para verificar si "bed" existe en el array 'search'.
// Devuelve 'true' si lo encuentra, 'false' si no.
let dormir = search.includes("bed");

console.log(`Vas a tomar una siesta, hay cama ${dormir}`); // Imprime el resultado de la verificación.
Ejercicios de Bucles (for...of y for...in)🔹 Sin listas (solo números o strings)Imprimir los caracteres de una palabraUsa for...of para recorrer una palabra letra por letra e imprimir cada letra.// Declaración de una variable string llamada 'palabra'
let palabra = "kaleidoscopio";

// Bucle for...of para iterar sobre cada caracter (letra) del string 'palabra'
for (let letra of palabra) {
  // Imprime cada letra, interpolándola en una cadena de texto
  console.log(`las letras que tiene este texto son ${letra}`);

  // Bucle for...in anidado para iterar sobre los índices de la misma 'palabra'
  for (let puestos in palabra) {
    // Imprime el índice (posición) actual dentro del string
    console.log(`actualmente estás en el puesto ${puestos}`);
  }
}
Con Listas (Arrays)Recorrer una lista de nombres usando for...ofDado un array de nombres, imprime "Hola, [nombre]" usando for...of.// Declaración de un array de strings llamado 'contactos'
let contactos = ["pedro", "samuel", "ricardo", "jonathan", "maicol", "jeferson", "andrea"];

// Bucle for...of para iterar sobre cada elemento (nombre) del array 'contactos'
for (const nombre of contactos) {
  // Imprime un saludo personalizado para cada nombre
  console.log(`Bienvenid@ a Riwi ${nombre}`);
}
Imprimir índices de una lista usando for...inUsa for...in para imprimir los índices de un array de colores.// Declaración de un array de strings llamado 'colores'
let colores = ["verde", "Azul", "violeta", "zarco", "popper"];

// Bucle for...in para iterar sobre los índices de los elementos del array 'colores'
for (let indice in colores) {
  // Imprime el índice actual en cada iteración
  console.log(`El indice actual en tu lista de colores es: ${indice}`);
}
Imprimir índice y valor de cada número en un arrayUsa for...in para obtener el índice y luego acceder al valor en la misma línea.// Declaración de un array de strings llamado 'colores'
let colores = ["verde", "Azul", "violeta", "zarco", "popper"];

// Bucle for...in para iterar sobre los índices de los elementos del array 'colores'
for (let indice in colores) {
  // Imprime el índice actual y el valor asociado a ese índice en el array
  console.log(`El indice actual en tu lista de colores es: ${indice} y su contenido es: ${colores[indice]}`);
}
Ejercicios de ObjetosCrea un objeto persona con las propiedades: nombre, edad y ciudad.// Declaración de un objeto literal llamado 'estudiantes' con varias propiedades
let estudiantes = {
  nombre: "juan",  // Propiedad 'nombre' con valor de tipo string
  edad: 30,      // Propiedad 'edad' con valor de tipo number
  ciudad: "medellin" // Propiedad 'ciudad' con valor de tipo string
};
Muestra el valor de una propiedad específica del objeto persona.// Accede a la propiedad 'nombre' del objeto 'estudiantes' usando la notación de punto y la imprime
console.log(estudiantes.nombre);
Modifica el valor de una propiedad existente en un objeto libro.// Declaración de un objeto literal llamado 'biblioteca'
let biblioteca = {
  titulo: "La historia sin fin",
  edicion: 2018,
  genero: "ficción",
};

// Modifica el valor de la propiedad 'edicion' del objeto 'biblioteca'
biblioteca.edicion = 1999;

// Imprime el nuevo valor de la propiedad 'edicion'
console.log(biblioteca.edicion);
Agrega una nueva propiedad a un objeto auto.// Agrega una nueva propiedad 'existe' al objeto 'biblioteca' con un valor booleano
biblioteca.existe = true;

// Imprime un mensaje que incluye el título del libro y el nuevo valor de la propiedad 'existe'
console.log(`El libro ${biblioteca.titulo} existe en nuestra biblioteca? ${biblioteca.existe}`);
Recorre un objeto estudiante con un bucle y muestra todas sus claves y valores.// Declaración de un objeto literal llamado 'universidad'
let universidad = {
  estudiante: "Camilo Rojas Pulgarín",
  becado: true,
  semestre: 8,
  tipo_de_aprendizaje: "visual"
};

// Itera sobre los pares clave-valor del objeto 'universidad'
// Object.entries(universidad) devuelve un array de arrays [clave, valor]
// La desestructuración [clave, valor] asigna el nombre de la propiedad a 'clave' y su valor a 'valor'
for (let [clave, valor] of Object.entries(universidad)) {
  // Imprime la clave y el valor de cada propiedad
  console.log(`${clave} ${valor}`);
}
Ejercicios para practicar funcionesSaludo personalizadoCrea una función llamada saludar que reciba un nombre como parámetro y devuelva un saludo del tipo: "Hola, [nombre]!".// Definición de la función 'saludo' que recibe un parámetro 'nombre'
function saludo(nombre) {
  // Imprime un saludo personalizado usando el nombre proporcionado
  console.log(`Hola don ${nombre} bienvenido a su nuevo hogar`);
}

// Declaración de una variable 'nombre'
let nombre = "sergio";

// Llama a la función 'saludo' con la variable 'nombre' como argumento
// console.log() aquí imprime el valor de retorno de 'saludo', que es 'undefined'
// porque la función 'saludo' solo imprime y no retorna explícitamente un valor.
console.log(saludo(nombre));
Suma de dos númerosEscribe una función sumar que reciba dos números como parámetros y retorne su suma.// Solicita al usuario el primer número y lo convierte a tipo Number
let numero1 = Number(prompt("ingrese un número"));
// Solicita al usuario el segundo número y lo convierte a tipo Number
let numero2 = Number(prompt("ingrese otro número"));

// Definición de la función 'suma' que recibe dos parámetros 'a' y 'b'
function suma(a, b) {
  // Calcula la suma de 'a' y 'b'
  let suma = a + b;
  // Retorna el resultado de la suma
  return suma;
}

// Llama a la función 'suma' con los números ingresados por el usuario y imprime el resultado
console.log(suma(numero1, numero2));
Número par o imparCrea una función llamada esPar que reciba un número y devuelva true si es par, o false si es impar.// Definición de la función 'espar' que recibe un parámetro 'num'
function espar(num) {
  // Declara una variable 'resultado' inicializada a null
  let resultado = null;
  // Comprueba si el residuo de la división de 'num' por 2 es igual a 0
  if (num % 2 == 0) {
    // Si el residuo es 0, el número es par, establece 'resultado' a true
    resultado = true;
  } else {
    // Si el residuo no es 0, el número es impar, establece 'resultado' a false
    resultado = false;
  }
  // Retorna el valor de 'resultado'
  return resultado;
}

// Solicita al usuario un número y lo convierte a tipo Number
let num = Number(prompt("ingrese un número para ver si es par"));

// Llama a la función 'espar' con el número ingresado y imprime si es par o no
console.log(`el número ${num} es par? ${espar(num)}`);
Calcular el área de un rectánguloDefine una función areaRectangulo que reciba base y altura como argumentos y devuelva el área.// Definición de la función 'areaRectangulo' que recibe dos parámetros 'a' (altura) y 'b' (base)
function areaRectangulo(a, b) {
  // Retorna el producto de 'a' y 'b', que es el área del rectángulo
  return a * b;
}

// Solicita al usuario la altura del rectángulo y la convierte a tipo Number
let a1 = Number(prompt("ingrese altura del rectangulo"));
// Solicita al usuario el ancho (base) del rectángulo y la convierte a tipo Number
let a2 = Number(prompt("ingrese el ancho del rectangulo"));

// Llama a la función 'areaRectangulo' con los valores ingresados y imprime el área calculada
console.log(`El area de su rectangulo es: ${areaRectangulo(a1, a2)}`);
Convertir grados Celsius a FahrenheitEscribe una función celsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva el valor en Fahrenheit usando la fórmula:F = C * 1.8 + 32// Definición de la función 'celsiusAFahrenheit' que recibe un parámetro 'C' (temperatura en Celsius)
function celsiusAFahrenheit(C) {
  // Aplica la fórmula para convertir Celsius a Fahrenheit
  let F = C * 1.8 + 32;
  // Retorna el valor convertido a Fahrenheit
  return F;
}

// Solicita al usuario la temperatura en Celsius y la convierte a tipo Number
let C = Number(prompt("ingrese el la temperatura en celcius"));

// Llama a la función 'celsiusAFahrenheit' con el valor ingresado y imprime la temperatura en Fahrenheit
console.log(`La temperatura de ${C} celsius en Farenheit es de: ${celsiusAFahrenheit(C)}`);
