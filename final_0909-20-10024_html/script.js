document.addEventListener("DOMContentLoaded", function () {

    const precio = document.getElementById("precio");
    const porcentaje = document.getElementById("porcentaje");
    const boton = document.getElementById("apDesc");
    const resultado = document.getElementById("resultado");

    boton.addEventListener("click", function () {

        let precioOriginal = precio.value;
        let porc = porcentaje.value;

        // Validación
        if (precioOriginal === "" || porc === "" || isNaN(precioOriginal) || isNaN(porc)) {
            alert("Debe ingresar precio y porcentaje válidos.");
            return;
        }

        // Convertir números
        precioOriginal = parseFloat(precioOriginal);
        porc = parseFloat(porc);

        // Cálculo
        let descuento = precioOriginal * (porc / 100);
        let precioFinal = precioOriginal - descuento;

        // Mostrar resultado
        resultado.innerText = "Nuevo Precio Q " + precioFinal.toFixed(2);
    });

});
