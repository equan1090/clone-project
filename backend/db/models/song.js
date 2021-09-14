'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    albumId: {
      type: DataTypes.INTEGER
    }
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.hasMany(models.Comment, {foreignKey: "songId"})
    Song.belongsTo(models.Album, {foreignKey: "albumId"})
    Song.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Song;
};
