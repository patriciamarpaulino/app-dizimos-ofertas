document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cadastroForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obter os valores digitados pelo usuário
        var valor = document.getElementById('valor').value;
        var data = document.getElementById('data').value;
        var ofertas = document.getElementById('ofertas').value;
        var igreja = document.getElementById('igreja').value;
        var nome = document.getElementById('nome').value;

        // Limpar os campos do formulário após o cadastro
        this.reset();

        // Exibir a mensagem de cadastro efetuado com sucesso
        exibirMensagem('Seu cadastro foi efetuado com sucesso!');
    });

  


    function exibirMensagem(mensagem) {
        var mensagemElement = document.getElementById('mensagem');
        mensagemElement.textContent = mensagem;
        mensagemElement.style.display = 'block';
    }
});