'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commandes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Commandes.belongsTo(models.Client,{
        foreignKey:{
          allowNull:false
        }
      });
      models.Commandes.hasMany(models.Colis);

    }
  }
  Commandes.init({
    idClient: DataTypes.INTEGER,
    libelle: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commandes',
  });
  return Commandes;
};