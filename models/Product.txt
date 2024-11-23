import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

// Định nghĩa model Product
const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

export default Product;
