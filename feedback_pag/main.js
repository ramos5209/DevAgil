document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById('name').value;
    const satisfaction = parseInt(document.getElementById('satisfaction').value);
    const comments = document.getElementById('comments').value;

    let feedbackMessage = '';

    if (satisfaction <= 2) {
        feedbackMessage = `Olá ${name}, sentimos muito que você não esteja satisfeito. Seus comentários são importantes e iremos trabalhar para melhorar.`;
    } else if (satisfaction <= 4) {
        feedbackMessage = `Obrigado, ${name}! Ficamos felizes que você esteja razoavelmente satisfeito.`;
    } else {
        feedbackMessage = `Ótimo, ${name}! Agradecemos seu feedback positivo!`;
    }

    feedbackMessage += comments ? `<br><strong>Comentário:</strong> ${comments}` : '';

    const messageDiv = document.getElementById('feedbackMessage');
    messageDiv.innerHTML = feedbackMessage;
    messageDiv.classList.remove('hidden');
});
