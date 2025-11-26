// Gestione pulsante lingua
const languageBtn = document.querySelector('.header__language button');

if (languageBtn) {
    languageBtn.addEventListener('click', () => {
        alert('Cambio lingua cliccato!');
    });
}

// Seleziona tutti i container con freccia
const arrowContainers = document.querySelectorAll('.has-arrow');

arrowContainers.forEach(container => {
    const arrow = container.querySelector('.arrow-icon');
    if (!arrow) return;

    // ==========================
    // Desktop: hover con mouse
    // ==========================
    container.addEventListener('mouseenter', () => {
        // Solo desktop (mouse)
        if (window.matchMedia("(pointer: fine)").matches) {
            arrow.classList.add('is-rotated');
        }
    });

    container.addEventListener('mouseleave', () => {
        if (window.matchMedia("(pointer: fine)").matches) {
            arrow.classList.remove('is-rotated');
        }
    });

    // ==========================
    // Mobile / tablet: toggle al tap
    // ==========================
    container.addEventListener('click', (e) => {
        if (window.matchMedia("(pointer: coarse)").matches) {
            arrow.classList.toggle('is-rotated');
        }
    });
});