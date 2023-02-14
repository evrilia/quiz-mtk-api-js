'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('quizzes', [
      {
        id: 1,
        kategoriId: 1,
        soal: 'Siapa nama presiden pertama Indonesia?',
        a: 'Soekarno',
        b: 'Soeharto',
        c: 'B.J. Habibie',
        d: 'Megawati',
        jawab: 'a',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 2,
        kategoriId: 1,
        soal: 'Siapa nama presiden kedua Indonesia?',
        a: 'Soekarno',
        b: 'Soeharto',
        c: 'B.J. Habibie',
        d: 'Megawati',
        jawab: 'b',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        kategoriId: 3,
        soal: 'makanan apa yang paling enak?',
        a: 'sate',
        b: 'bakso',
        c: 'nasi goreng',
        d: 'semua enak',
        jawab: 'd',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        kategoriId: 2,
        soal: 'Siapa nama pemain bola terbaik di dunia?',
        a: 'Cristiano Ronaldo',
        b: 'Lionel Messi',
        c: 'Neymar',
        d: 'Zlatan Ibrahimovic',
        jawab: 'a',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // await queryInterface.bulkDelete('quiz', null, {
    //   truncate: true,
    //   cascade: true,
    //   restartIdentity: true
    // });
  }
};
