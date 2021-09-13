'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: {
      type: DataTypes.STRING
    },
    imageUrl: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,

    }
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.User, {foreignKey: "userId"})
    Album.hasMany(models.Song, {foreignKey: "albumId"})
  };
  return Album;
};
