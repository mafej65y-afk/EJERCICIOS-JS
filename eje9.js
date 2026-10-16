// Escribe un programa que intercambie los valores de dos variables numéricas sin usar 
// una variable auxiliar. Muestra los valores antes y después del intercambio.

let a = 10;
let b = 20;

console.log("Antes del intercambio: a = " + a + ", b = " + b);

a = a + b;
b = a - b;
a = a - b;

console.log("Después del intercambio: a = " + a + ", b = " + b);
