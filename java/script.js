document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um evento de clique ao botão de envio do formulário
    document.getElementById("submitBtn").addEventListener("click", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtem os valores dos campos de entrada
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var mensagem = document.getElementById("mensagem").value;

        // Exibe uma mensagem simples no console (pode ser personalizado conforme necessário)
        console.log("Nome: " + nome + "\nEmail: " + email + "\nMensagem: " + mensagem);
        
        // Adicione aqui o código para enviar os dados para o servidor, se necessário
    });
});
