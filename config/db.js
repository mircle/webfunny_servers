const sequelizeTemp = require('./local_db')
const Sequelize = require('sequelize');
let db = null
if (sequelizeTemp && sequelizeTemp.sequelize) {
  db = sequelizeTemp.sequelize
} else {
  const sequelize = new Sequelize('monitor_db', 'root', '1111a2222b', {
    host: '10.155.10.9',
    port: '3307',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
      charset: "utf8mb4",
      collate: "utf8mb4_unicode_ci",
      supportBigNumbers: true,
      bigNumberStrings: true
    },

    pool: {
      max: 30,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    timezone: '+08:00' //东八时区
  });

  db = sequelize

}

module.exports = {
  sequelize: db
}