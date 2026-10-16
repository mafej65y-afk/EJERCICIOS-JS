// Escribe un programa que determine si un número dado es primo. Un número primo es 
// aquel que solo es divisible por 1 y por sí mismo. Muestra el resultado por pantalla.

let numero = 17;
let esPrimo = true;

if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}
