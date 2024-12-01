// script.js

function incrementScore(team) {
    let scoreElement = document.getElementById('score' + team);
    let currentScore = parseInt(scoreElement.innerText);
    scoreElement.innerText = currentScore + 1;
    
    // Adiciona a classe de animação
    scoreElement.classList.add('increment');
    
    // Remove a classe de animação após 200ms
    setTimeout(() => {
        scoreElement.classList.remove('increment');
    }, 200);
}
let snd = new Audio('cheering-and-clapping-crowd-2-6029.mp3'); // Certifique-se de que o caminho para o arquivo de som esteja correto

document.querySelector('.casa').addEventListener('mouseover', function() {
    snd.play().catch(error => {
        console.error('Falha ao reproduzir o som:', error);
        snd.muted = false; // Tenta desmutar
        snd.play().catch(error => console.error('Erro ao tentar reproduzir novamente:', error));
    });
});
