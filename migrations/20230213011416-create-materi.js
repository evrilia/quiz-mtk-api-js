'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Materis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul: {
        type: Sequelize.STRING,
        allowNull: false,
        message: 'Judul tidak boleh kosong'
      },
      materi: {
        type: Sequelize.TEXT,
        allowNull: false,
        message: 'Materi tidak boleh kosong',
        min: 10
      },
      kategoriId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Kategoris',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Materis');
  }
};