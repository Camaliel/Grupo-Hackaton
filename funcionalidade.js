// testeMenu.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript está funcionando!");

    const navMenu = document.getElementById("navMenu");
    const navItems = document.querySelectorAll(".nav");

    // Adicione o som de clique
    const clickSound = new Audio('click-sound.mp3');

    // Oculta os itens de navegação inicialmente
    navItems.forEach(item => {
        item.classList.remove("visible");
    });

    // Exibe ou oculta os itens de navegação ao clicar no navMenu
    navMenu.addEventListener("click", function() {
        const isVisible = navItems[0].classList.contains("visible");

        // Tocar o som de clique
        clickSound.play();

        navItems.forEach(item => {
            if (isVisible) {
                item.classList.remove("visible");
            } else {
                item.classList.add("visible");
            }
        });
    });
});
