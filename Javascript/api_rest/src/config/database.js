// Configuração da base de dados
require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true, // cria um campo para exibir as informações de quando um dado foi inserido/alterado na tabela
    underscored: true, // na tabela, caso tenha um campo chamado 'nomeAluno', transforma em: 'nome_aluno' (converte camel case  para snake case)
    underscoredAll: true,
    createdAt: 'created_at', // correção de bug do underscored, que não funciona da mesma forma em todos os casos
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
