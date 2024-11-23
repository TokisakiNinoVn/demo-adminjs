import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

// Định nghĩa model Product
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  note: {
    type: DataTypes.TEXT,
  },
});

export default User;
