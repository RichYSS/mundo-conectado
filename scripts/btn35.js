document.addEventListener("DOMContentLoaded", () => {
    const btn35 = document.getElementById("btn35");
    const menu = document.getElementById("animatedDiv3"); 

    function toggleMenu () {
        menu.classList.toggle("is-open");

        if (menu.classList.contains("is-open")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    btn35.addEventListener("click", toggleMenu);
});
