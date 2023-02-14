'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Materi.init({
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
      message: 'Judul tidak boleh kosong'
    },
    materi: {
      type: DataTypes.TEXT,
      allowNull: false,
      message: 'Materi tidak boleh kosong',
      min: 10
    },
    kategoriId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Kategoris',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Materi',
    tableName: 'materis'
  });
  return Materi;
};