// backend/src/models/product.js
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      stock: DataTypes.INTEGER,
    }, {});
    Product.associate = function(models) {
      Product.belongsToMany(models.Sale, { through: 'ProductSales', foreignKey: 'productId' });
    };
    return Product;
  };