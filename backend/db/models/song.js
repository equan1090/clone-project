'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    userId: {
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
