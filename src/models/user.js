const mongoose = require('../database');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        //obrigatorio
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require:true,
        upercase:true,
    },
    senha:{
        type: String,
        require: true,
        //quando for chamado no banco, nao vai aparecer a senha
        select:false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});
// pre = função do mongoose( antes de salvar faça algo )
UserSchema.pre('save', async function(next){
    // this = objeto q esta sendo salvo
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;