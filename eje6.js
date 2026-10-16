// Escribe un programa que determine si un número es par o impar y muestre el resultado por pantalla.

let numero = 7;
let esPar = numero % 2 === 0;

if (esPar) {
    console.log("El número " + numero + " es par.");
}