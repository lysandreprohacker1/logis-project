'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('colis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom_colis: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_colis: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      longueur: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      largeur: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      hauteur: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      poids: {
        type: Sequelize.DOUBLE,
        allowNull: false,

      },
      quantité: {
        type: Sequelize.INTEGER,
        
      },
      id_addresse: {
        type: Sequelize.INTEGER
      },
      localisation_actuel: {
        type: Sequelize.STRING
      },
      id_destinataire: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('colis');
  }
};