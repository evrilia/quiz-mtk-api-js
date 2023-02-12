const { BelongsTo, HasMany } = require('sequelize');
const Sequelize = require('sequelize');
const {development, test,production} = require('../config/config.json')

const conn = 
      production === 'production' ? production :
      test === 'test' ? test :
      development;


const sequelize = new Sequelize(
  conn.database,
  conn.username,
  conn.password,
  {
    host: conn.host,
    dialect: conn.dialect,
    pool:{
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  }
);

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.kategori = require('./kategori')(sequelize, Sequelize);
db.quiz = require('./quiz')(sequelize, Sequelize);

db.quiz = BelongsTo(db.kategori);
db.kategori = HasMany(db.quiz);

module.exports = db;