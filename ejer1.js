
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function cuentaRegresiva(numero) {

    // Caso base
    if (numero === 1) {
        console.log(numero);
        console.log("¡El tiempo ha terminado!");
        rl.close();
        return;
    }

    console.log(numero);

    
    cuentaRegresiva(numero - 1);
}


rl.question("Ingrese un numero entero positivo: ", (respuesta) => {

    let numero = Number(respuesta);

    // Validar entrada
    if (isNaN(numero) || !Number.isInteger(numero) || numero <= 0) {
        console.log("Error: Debe ingresar un numero entero positivo.");
        rl.close();
        return;
    }

    console.log("\nIniciando cuenta regresiva:\n");

    cuentaRegresiva(numero);
});
