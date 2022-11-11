import Sequelize, { Model } from 'sequelize';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({ // creating a model (must have the same migration properties that created the table in the database)
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Field cannot be empty.',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Field cannot be empty.',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'photos',
    });
    return this;
  }

  static associate(models) { // estamos dizendo que este model "Photo" está associado a um outro model
    this.belongsTo(models.Student, { foreignKey: 'student_id' }); // este model pertence ao model "Student"
  }
}
