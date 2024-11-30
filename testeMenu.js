// testeMenu.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript está funcionando!");

    const navMenu = document.getElementById("navMenu");
    const navItems = document.querySelectorAll(".nav");

    // Oculta os itens de navegação inicialmente
    navItems.forEach(item => {
        item.classList.remove("visible");
    });

    // Exibe ou oculta os itens de navegação ao clicar no navMenu
    navMenu.addEventListener("click", function() {
        navItems.forEach(item => {
            if (item.classList.contains("visible")) {
                item.classList.remove("visible");
                setTimeout(() => item.style.display = 'none', 500); // Aguarda o fim da transição antes de ocultar
            } else {
                item.style.display = 'block'; // Garante que os itens sejam visíveis
                setTimeout(() => item.classList.add("visible"), 10); // Adiciona um pequeno atraso para permitir a transição
            }
        });
    });
});
