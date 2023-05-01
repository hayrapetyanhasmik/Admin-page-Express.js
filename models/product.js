
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
  
    static associate(models) {
     Product.belongsTo(models.Category)
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    img: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};


// Product.sync()
// .then(() => console.log('Table created successfully'))
// .catch((err) => console.log('Error creating table:', err));