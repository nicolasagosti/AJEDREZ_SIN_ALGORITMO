document.addEventListener("DOMContentLoaded", function () {
    // Agrega un event listener al documento para esperar a que se cargue completamente
    var miDiv = document.getElementById("miDiv");

    miDiv.addEventListener("click", function () {
        // Al hacer clic en el div, remueve la imagen
        var imagen = miDiv.querySelector("img");
        if (imagen) {
            // Verifica si hay una imagen presente antes de intentar removerla
            miDiv.removeChild(imagen);
        }else{
            imagen = document.createElement("img");
            imagen.src = "nuevo_piezas/peonblancas.png";
            miDiv.appendChild(imagen);
        }
    });
});