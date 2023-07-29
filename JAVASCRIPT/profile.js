document.addEventListener("DOMContentLoaded", function () {
  const imagen = document.getElementById("img");
  const contenido = document.getElementById("profile");

  imagen.addEventListener("click", function () {
    if (contenido.style.display === "none") {
      contenido.style.display = "block";
    } else {
      contenido.style.display = "none";
    }
  });
});

const botonesCategorias = document.querySelectorAll(".boton-categoria");
  