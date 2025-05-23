
function getElement(selector) {
  return document.querySelector(selector);
}

function setupMenuEvents(btnSelector, menuSelector, eventType = "click") {
  const btn = getElement(btnSelector);
  const menu = getElement(menuSelector);

  if (!btn || !menu) return;

  btn.addEventListener(eventType, () => {
    menu.classList.toggle("show");
    menu.classList.toggle("show1");
  });

  document.addEventListener(eventType, (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("show");
      menu.classList.remove("show1"); // ← corregido
    }
  });
}

// Puedes agregar tantos pares como necesites
setupMenuEvents("#menu-btn", "#menu");
setupMenuEvents("#menu-btn1", "#menu1");
setupMenuEvents("#menu-btn2", "#menu2"); // ejemplo adicional

