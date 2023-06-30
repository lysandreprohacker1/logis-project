'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class colis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here,

      models.colis.belongsTo(models.Commandes,{
        foreignKey:{
          allowNull:false
        }
      })

      models.colis.belongsTo(models.Destinataire);
      models.colis.has(models.Addresse);
      
    }
  }
  colis.init({
    nom_colis: DataTypes.STRING,
    type_colis: DataTypes.STRING,
    longueur: DataTypes.DOUBLE,
    largeur: DataTypes.DOUBLE,
    hauteur: DataTypes.DOUBLE,
    poids: DataTypes.DOUBLE,
    quantité: DataTypes.INTEGER,
    id_addresse: DataTypes.INTEGER,
    localisation_actuel: DataTypes.STRING,
    id_destinataire: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'colis',
  });
  return colis;
};