'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destinataire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Destinataire.hasMany(models.colis);
    }
  }
  Destinataire.init({
    nom_destinataire: DataTypes.STRING,
    prenom_destinataire: DataTypes.STRING,
    tel_destinataire: DataTypes.STRING,
    addresse_destinataire: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Destinataire',
  });
  return Destinataire;
};