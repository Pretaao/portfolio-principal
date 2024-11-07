document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)'; // Aumenta o tamanho do card ao passar o mouse
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)'; // Retorna ao tamanho original ao retirar o mouse
    });
});
