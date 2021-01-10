const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');

const DataSchena = new mongoose.Schema({
    nome_produto:String,
    descrcao_produto:String,
    preco_produto:Number,
    qtd_produto: {type:Number, default: 0},
    
},{
    timestamps:true
});

const produto = mongoose.model('Produtos',DataSchena);
module.exports = produto;

