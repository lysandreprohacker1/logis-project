'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addresse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Addresse.hasMany(models.colis);
    }
  }
  Addresse.init({
    region: DataTypes.STRING,
    ville: DataTypes.STRING,
    boite_postal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Addresse',
  });
  return Addresse;
};