import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('adminjs_test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
