
function baixarCurriculo() {
    const link = document.createElement('a');  // Cria um elemento <a> dinamicamente
    link.href = 'assets/curriculo novo.pdf';  // Caminho do arquivo que será baixado
    link.download = 'Curriculo-Samuel';  // Nome do arquivo ao ser baixado
    link.click();  // Simula o clique no link para iniciar o download
}
