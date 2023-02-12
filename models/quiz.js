'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quiz.init({
    soal: DataTypes.STRING,
    a: {
      type: DataTypes.STRING,
      allowNull: false
    },
    b: {
      type: DataTypes.STRING,
      allowNull: false
    },
    c: {
      type: DataTypes.STRING,
      allowNull: false
    },
    d: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jawab: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kategoriId: {
      type: DataTypes.STRING,
      allowNull: false
    },

  },
    {
      sequelize,
      modelName: 'Quiz',
      tableName: 'quizzes'
    });
  return Quiz;
};