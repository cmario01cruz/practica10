
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contadorProductos = 0;
let cantidadProductos = 0;
let acumuladorPrecios = 0;


function registrarPrecios() {

    
    if (contadorProductos === cantidadProductos) {

        let iva = acumuladorPrecios * 0.13;
        let total = acumuladorPrecios + iva;

        console.log("\n========== RESUMEN DE COMPRA ==========");
        console.log("Cantidad de productos: " + cantidadProductos);
        console.log("Subtotal: $" + acumuladorPrecios.toFixed(2));
        console.log("IVA (13%): $" + iva.toFixed(2));
        console.log("Total a pagar: $" + total.toFixed(2));
        console.log("=======================================");

        rl.close();
        return;
    }

    
    rl.question(
        `Ingrese el precio del producto ${contadorProductos + 1}: $`,
        (respuesta) => {

            let precio = Number(respuesta);

            // Validar precio
            if (
                respuesta.trim() === "" ||
                !Number.isFinite(precio) ||
                precio < 0
            ) {
                console.log("Error: Ingrese un precio valido mayor o igual a cero.");
                registrarPrecios();
                return;
            }

            // Acumular precio
            acumuladorPrecios += precio;

            // Incrementar contador
            contadorProductos++;

            // Llamada recursiva
            registrarPrecios();
        }
    );
}


rl.question("Ingrese la cantidad de productos: ", (respuesta) => {

    cantidadProductos = Number(respuesta);

    // Validar cantidad
    if (
        respuesta.trim() === "" ||
        !Number.isInteger(cantidadProductos) ||
        cantidadProductos <= 0
    ) {
        console.log("Error: Ingrese una cantidad entera positiva.");
        rl.close();
        return;
    }

    registrarPrecios();
});
