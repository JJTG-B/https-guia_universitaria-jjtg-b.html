const buscador = document.getElementById("buscador");
const tarjetas = document.querySelectorAll(".universidad-card");

buscador.addEventListener("input", function () {
    const texto = buscador.value.toLowerCase().trim();

    tarjetas.forEach(function (tarjeta) {
        const nombre = tarjeta
            .getAttribute("data-nombre")
            .toLowerCase();

        if (nombre.includes(texto)) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
});
