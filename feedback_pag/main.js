// Adiciona um listener ao formulário para escutar o evento de envio
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário (para não recarregar a página)
    event.preventDefault();

    // Captura o valor do campo "Nome"
    const name = document.getElementById('name').value;

    // Captura e converte o valor do campo "Nível de Satisfação" para um número inteiro
    const satisfaction = parseInt(document.getElementById('Satisfacao').value);
    
    // Captura o valor do campo "Comentários"
    const comments = document.getElementById('comentario').value;

    // Inicializa uma variável para armazenar a mensagem de feedback
    let feedbackMessage = '';

    // Avalia o nível de satisfação e gera uma mensagem personalizada
    if (satisfaction <= 2) {
        feedbackMessage = `Olá ${name}, sentimos muito que você não esteja satisfeito. Seus comentários são importantes e iremos trabalhar para melhorar.`;
    } else if (satisfaction <= 4) {
        feedbackMessage = `Obrigado, ${name}! Ficamos felizes que você esteja razoavelmente satisfeito.`;
    } else {
        feedbackMessage = `Ótimo, ${name}! Agradecemos seu feedback positivo!`;
    }

    // Se houver comentários, adiciona à mensagem de feedback
    feedbackMessage += comments ? `<br><strong>Comentário:</strong> ${comments}` : '';

    // Seleciona a div onde a mensagem de feedback será exibida
    const messageDiv = document.getElementById('feedbackMessage');
    
    // Atualiza o conteúdo da div com a mensagem de feedback
    messageDiv.innerHTML = feedbackMessage;
    
    // Remove a classe "hidden" para mostrar a mensagem
    messageDiv.classList.remove('hidden');

    // Limpa os campos do formulário
    document.getElementById('feedbackForm').reset();
});
