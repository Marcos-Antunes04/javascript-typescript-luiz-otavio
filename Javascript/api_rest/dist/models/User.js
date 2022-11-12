"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({ // creating a model (must have the same migration properties that created the table in the database)
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'The field must be between 3 and 255 characters long.',
          },
        },
      },

      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },

      password: { // "password" will take care of the field validation process
        type: _sequelize2.default.VIRTUAL, // virtual field, will not be displayed in the database
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
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
