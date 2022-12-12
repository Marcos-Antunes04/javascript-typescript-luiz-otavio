// MIGRATIONS TEM RELAÇÃO COM AS ALTERAÇÕES FEITAS NA BASE DE DADOS (criação, edição, remoção)

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('students', {
    id: { // sempre selecionaremos um aluno pelo "id". É a sua forma de identificação para possíveis edições ou apagar da base de dados.
      type: Sequelize.INTEGER, // apontar que "id" é do tipo número inteiro
      allowNull: false, // não permite que o campo seja nulo
      autoIncrement: true, // não é necessário ficar enviando o ID, será feito automaticamente
      primaryKey: true, // indica que o "id" é a chave primária da tabela
    },

    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    height: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },

    weight: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('students'),
};
