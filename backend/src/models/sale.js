// backend/src/models/sale.js
module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
      clientId: DataTypes.INTEGER,
      total: DataTypes.DECIMAL(10, 2),
    }, {});
    Sale.associate = function(models) {
      Sale.belongsTo(models.Client, { foreignKey: 'clientId' });
      Sale.belongsToMany(models.Product, { through: 'ProductSales', foreignKey: 'saleId' });
    };
    return Sale;
  };