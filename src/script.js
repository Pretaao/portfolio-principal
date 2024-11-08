document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)'; // Aumenta o tamanho do card ao passar o mouse
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)'; // Retorna ao tamanho original ao retirar o mouse
    });
});


function baixarCurriculo() {
    const link = document.createElement('a');  // Cria um elemento <a> dinamicamente
    link.href = 'assets/curriculo novo.pdf';  // Caminho do arquivo que será baixado
    link.download = 'Curriculo-Samuel';  // Nome do arquivo ao ser baixado
    link.click();  // Simula o clique no link para iniciar o download
}
