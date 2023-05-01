'use strict';

module.exports = {
   up:async (queryInterface, Sequelize)=> {
    await queryInterface.bulkInsert('Users', [
      {
        role: 1,
        username: 'Admin',
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        password: '111',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: 0,
        username: 'User',
        firstName: 'Bob',
        lastName: 'Jackson',
        email: 'bobjackson@gmail.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

   down:async (queryInterface, Sequelize)=> {
    
  }
};
