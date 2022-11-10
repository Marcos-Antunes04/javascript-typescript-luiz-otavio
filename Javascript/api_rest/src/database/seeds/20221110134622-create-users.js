const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        name: 'Luizito',
        email: 'luiz1@gmail.com',
        password_hash: await bcryptjs.hash('123123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Luiz 2',
        email: 'luiz2@gmail.com',
        password_hash: await bcryptjs.hash('234234', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Luiz 3',
        email: 'luiz3@gmail.com',
        password_hash: await bcryptjs.hash('456456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
