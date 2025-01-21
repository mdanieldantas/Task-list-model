// chamando o módulo express
const express = require('express');
// chamando o módulo path que serve para trabalhar com caminhos de arquivos e diretórios no Node.js
const path = require('path');
// chamando o modulo router que é o arquivo que contém as rotas da aplicação express 
const router = require('./router');
// instanciando o express
app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// definindo a pasta public como estática
app.use(express.urlencoded({extended: true}));



//Analise detalhadamente o seguinte trecho de código,  Apresente o trecho de código a ser analisado de forma clara e formatada. O que significa cada parte do código