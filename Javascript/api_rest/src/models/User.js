// CRIAÇÃO DE MODEL

import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) { // "sequelize" é a conexão que o model vai ter
    super.init({ // "super" se refere ao model, chama o .init() do pai
    // os campos abaixo devem estar de acordo com aqueles criados na base de dados (arquivo src -> database -> migrations)
      firstname: {
        type: Sequelize.STRING,
        defaultValue: '', // caso o campo não seja enviado, então por padrão o valor será vazio (isso para fins de validação, já que podemos trabalhar que se o campo estiver vazio, então não será adicionado ao banco de dados)
        validate: { // validações do campo
          len: { // validação de tamanho (length)
            args: [3, 255], // nº de caracteres permitidos, min-max = 3 à 255
            msg: 'Firstname field must be between 3 and 255 characters long.', // msg de erro caso não passe pela validação
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail already registered.',
        },
        validate: {
          isEmail: {
            msg: 'Invalid e-mail.',
          },
        },
      },
      password_hash: { // receberá os dados validados de "password". A transferência dos dados é feito a partir do bcrypt e Hook
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: { // os dados recebidos pelo usuário chegarão aqui, onde faremos as validações, logo depois enviaremos esse campo validado p/ o "password_hash", que estará na base de dados.
        type: Sequelize.VIRTUAL, // iremos criar um hash a partir da senha digitada pelo usuário. O termo Sequelize.VIRTUAL refere-se à um campo que não vai existir na base de dados.
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Password must be between 6 and 50 characters long',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => { // utilização do bcrypt para "criptografar" a senha e uso do Hook para antes de salvar, passar os dados validados do campo de password para password_hash
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }
}
