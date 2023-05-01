'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up:async (queryInterface, Sequelize)=> {
    //await queryInterface.bulkInsert('Users', [
    //   {
    //     role: 1,
    //     username: 'Admin',
    //     firstName: 'Hasmik',
    //     lastName: 'Hayrapetyan',
    //     email: 'hasmikhayrapetyan1988@gmail.com',
    //     password: '777',
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     role: 0,
    //     username: 'User',
    //     firstName: 'Bob',
    //     lastName: 'Jackson',
    //     email: 'bobjackson@gmail.com',
    //     password: '123',
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ], {});
  },

   down:async (queryInterface, Sequelize)=> {
    
  }
};
