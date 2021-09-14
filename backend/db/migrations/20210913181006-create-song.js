'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Users"}
      },
      albumId: {
        type: Sequelize.INTEGER,
        references: {model: "Albums"}
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs');
  }
};
