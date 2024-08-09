// backend/src/models/client.js
module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
    }, {});
    Client.associate = function(models) {
      Client.hasMany(models.Sale, { foreignKey: 'clientId' });
    };
    return Client;
  };