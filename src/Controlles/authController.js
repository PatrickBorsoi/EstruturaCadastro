// chama o express porque vamos mexer com rotas
const express = require('express');

const User = require('../models/User')
// definição de rota
const router = express.Router();
router.post('/register', async (req, res) => {
    const {email} = req.body;
    try{
        if(await User.findOne({email}))
        return res.status(400).send({error: 'Usuario já existe'});

        //todos os parametros vao estar dentro de req.body
        //await para esperar receber as informações
        const user = await User.create(req.body);

        User.senha = undefined;

        return res.send({ user });

    }catch (err) {
        return res.status(400).send({error: 'falha no registro'});
    }
});
//todas as rotar q definir aqui vai ter o /auth
module.exports = app => app.use('/auth', router);