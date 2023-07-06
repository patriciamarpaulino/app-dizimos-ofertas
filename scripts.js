document.addEventListener('DOMContentLoaded', function(){
    
})

document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    //Obter os valores digitados pelo usuário

    var valor = document.getElementById('valor').value;
    var data = document.getElementById('data').value;
    var ofertas = document.getElementById('ofertas').value;
    var igreja = document.getElementById('igreja').value;
    var nome = document.getElementById('.nome').value;

    this.reset();
});


    // criar um objeto com os dados do formulário

   

    //Enviar os dados para o servidor

    /* fetch('http://exemplo.com/api/cadastro', {
       method: 'POST',
       headers: {
           'Content-Type': 'apllication/json'
       },
       body: JSON.stringify(formData)
    })
     .then(function(data) {
   console.log(data); // Resposta do servidor
   // Faça algo com a resposta do servidor, se necessário
 })
 .catch(function(error) {
   console.error(error);
   // Lide com erros de requisição, se houver
 });

    */
    // Limpar os campos do formulário após o cadastro


    //Exibir os valores na console (posso enviar os dados para um servidor aqui)

    /*console.log('Valor:' + valor);
    console.log('Data:' + data);
    console.log('Ofertas:' + ofertas);
    console.log('Igreja:' + igreja);
    console.log('Nome do Dizimista:' + nome);*/

   



// Bloquear seleção de texto

window.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey) {
        return;
    }
    e.preventDefault();
});

//Bloquear clique direito do mouse

window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
/*
// Capturar envio do formulário*/

/*document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();*/

