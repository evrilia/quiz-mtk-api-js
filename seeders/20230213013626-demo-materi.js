'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Materis', [
      {
        judul: 'Materi 1',
        materi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nisl',
        kategoriId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        judul: 'Materi 2',
        materi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nisl',
        kategoriId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        judul: 'Materi 3',
        materi: 'artinya apaan bang messi, ente goalkeeper terbaik seduniawwww',
        kategoriId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
