import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({ // creating a model (must have the same migration properties that created the table in the database)
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'The field must be between 3 and 255 characters long.',
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail already exists.',
        },
        validate: {
          len: {
            isEmail: {
              msg: 'Invalid e-mail.',
            },
          },
        },
      },

      password_hash: { // the password_has will encode the password
        type: Sequelize.STRING,
        defaultValue: '',
      },

      password: { // "password" will take care of the field validation process
        type: Sequelize.VIRTUAL, // virtual field, will not be displayed in the database
        defaultValue: '',
        validate: {
          len: {
            args: [6, 15],
            msg: 'The field must be between 6 and 15 characters long.',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }
}
