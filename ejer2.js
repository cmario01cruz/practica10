
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function sumatoria(numero) {

    // Caso base
    if (numero === 1) {
        return 1;
    }

    
    return numero + sumatoria(numero - 1);
}


rl.question("Ingrese un numero entero positivo: ", (respuesta) => {

    let numero = Number(respuesta);

    // Validar entrada
    if (isNaN(numero) || !Number.isInteger(numero) || numero <= 0) {
        console.log("Error: Debe ingresar un numero entero positivo.");
        rl.close();
        return;
    }

    
    let resultado = sumatoria(numero);

    console.log("\nLa sumatoria desde 1 hasta " + numero + " es: " + resultado);

    rl.close();
});
