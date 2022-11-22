const mongoose = require('mongoose'); // responsável por inserir os dados no banco de dados (base de dados, tabelas, dados)

// data configs
const HomeSchema = new mongoose.Schema({
    title: { type: String, required: true }, // tratamento e modelagem dos dados antes de salvá-lo no banco de dados (MongoDB)
    description: String,
});

const HomeModel = mongoose.model('Home', HomeSchema); // 1º parâmetro é o nome do model e o 2º o nome do Schema

module.exports = HomeModel;