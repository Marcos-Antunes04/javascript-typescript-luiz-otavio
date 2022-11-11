// CREATE TABLE IN DATABASE
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('photos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      student_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { // referencia a tabela "students" pela chave/campo "id"
          model: 'students',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE', // se por um acaso o id de um estudante mudar, as fotos que relacionadas com esse id vai mudar junto automaticamente
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('photos');
  },
};
