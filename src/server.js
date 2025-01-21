// chamando o módulo express
const express = require('express');
// chamando o módulo path que serve para trabalhar com caminhos de arquivos e diretórios no Node.js1
const path = require('node:path');
// chamando o modulo router que é o arquivo que contém as rotas da aplicação express 
const router = require('./router');
// instanciando o express
app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// definindo a pasta public como estática
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