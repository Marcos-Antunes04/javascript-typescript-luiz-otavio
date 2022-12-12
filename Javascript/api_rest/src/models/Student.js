// CRIAÇÃO DE MODEL

import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) { // "sequelize" é a conexão que o model vai ter
    super.init({ // "super" se refere ao model, chama o .init() do pai
    // os campos abaixo devem estar de acordo com aqueles criados na base de dados (arquivo src -> database -> migrations)
      firstname: Sequelize.STRING,
      lastname: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER,
      height: Sequelize.FLOAT,
      weight: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
