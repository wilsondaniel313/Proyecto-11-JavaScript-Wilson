// Selecciona el cuerpo y el interruptor del documento.
const body = document.querySelector("body");
const toggle = document.getElementById("toggle");

// Agrega un event listener para cambiar entre temas al hacer clic en el interruptor.
toggle.addEventListener('click', () => {
    toggle.classList.toggle("toggleBlanco");
    body.classList.toggle("toggleBlanco");
});
