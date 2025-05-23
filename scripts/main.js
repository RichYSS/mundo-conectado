document.addEventListener("DOMContentLoaded", function () {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    let index = 0;
    const total = images.length;

    // Clonamos la primera imagen y la añadimos al final
    const firstClone = images[0].cloneNode(true);
    slide.appendChild(firstClone);

    let interval = setInterval(() => {
        index++;
        slide.style.transition = 'transform 1s ease-in-out';
        slide.style.transform = `translateX(-${index * 100}vw)`;

        // Si llegó al clon (última imagen), volver al inicio sin transición
        if (index === total) {
            setTimeout(() => {
                slide.style.transition = 'none';
                slide.style.transform = 'translateX(0)';
                index = 0;
            }, 1000); // espera que termine la transición
        }
    }, 4000); // cada 4 segundos
});
