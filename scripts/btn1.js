const boton = document.getElementById("btn34");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;

  // Detecta si estás en el final de la página
  if (scrollY + windowHeight >= bodyHeight - 10) {
    boton.classList.add("final");
  } else {
    boton.classList.remove("final");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

scrollToTop();

const bt = document.querySelector(".btn34");
const menu = document.querySelector(".seccion3");

bt.addEventListener("click", () => {
  // menu.classList.toggle("activa");
  window.open("https://x.com/Rick_Sn0w?");
});
