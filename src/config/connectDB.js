const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fullstack_web', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('----------------------------------------------------');
    console.log(
      '|   ' + 'Connection has been established successfully.' + '  |'
    );
    console.log('----------------------------------------------------');
  } catch (error) {
    console.log('----------------------------------------------------');
    console.error('Unable to connect to the database:', error);
    console.log('----------------------------------------------------');
  }
};

module.exports = connectDB;
