// chamando o módulo express
const express = require('express');
// chamando o módulo path que serve para trabalhar com caminhos de arquivos e diretórios no Node.js1
const path = require('node:path');
// chamando o modulo router que é o arquivo que contém as rotas da aplicação express 
const router = require('./router');
// instanciando o express
app = express();

// setando o view engine como ejs
app.set("view engine", "ejs");
// setando o caminho das views da aplicação express
app.set("views", path.join(__dirname, "views"));

// usando o ulrencoded para permitir que o express possa entender os dados enviados pelo formulário no body da requisição
app.use(express.urlencoded({extended: true}));

// usando o router como middleware de rotas da aplicação express 
app.use(router);

// definindo a porta do servidor e permitindo que ele seja acessado externamente um arquivo de configuração .env ou variável de ambiente PORT
const PORT = process.env.PORT || 3000;

// iniciando o servidor com express ouvindo a porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

//Analise detalhadamente o seguinte trecho de código,  Apresente o trecho de código a ser analisado de forma clara e formatada. O que significa cada parte do código

/*

1. **Definição da Função `index`**:
   ```javascript
   index: (req, res) => {
   ```
   - **`index`**: Nome da função.
   - **`(req, res)`**: Parâmetros da função, onde `req` representa o objeto de requisição e `res` representa o objeto de resposta.

2. **Obtendo Listas de Tarefas**:
   ```javascript
   const taskLists = taskLists.getAllTaskLists();
   ```
   - **`const taskLists`**: Declaração de uma constante chamada `taskLists`.
   - **`taskLists.getAllTaskLists()`**: Chamada de um método `getAllTaskLists` no objeto `taskLists`, que provavelmente retorna todas as listas de tarefas.

3. **Renderizando a Resposta**:
   ```javascript
   res.render("taskLists", {taskListModel});
   ```
   - **`res.render`**: Método usado para renderizar uma visualização.
   - **`"taskLists"`**: Nome da visualização a ser renderizada.
   - **`{taskListModel}`**: Objeto passado para a visualização, que provavelmente contém dados necessários para renderizar a página.
*/