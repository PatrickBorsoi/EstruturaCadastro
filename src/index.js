// receber os pacotes
const express = require('express');
const bodyParser = require('body-parser');

// criando aplicação
const app = express();

//entender quando enviar requisição en json
app.use(bodyParser.json());
// entender quando enviar uma URL
app.use(bodyParser.urlencoded({ extended: false }));

//rota
//req = dados da requisição(parametros, token de auth)
//res = objeto q utilizo para enviar alguma reposta para o usuario
// coloca app do express porque e um objeto ele e definido 1 vez e vamos precisar usar essa classe mais de 1 vez nao pode usar esse app em nenhum outro lugar porque se nao ffica como se fosse 2 aplicações na mesma plataforma do node
require('./Controlles/authController')(app);



// porta q quer ouvir
app.listen(4000)

