'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
    }
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.User, {foreignKey: "userId"})
    Album.hasMany(models.Song, {foreignKey: "albumId", onDelete: "CASCADE", hooks: true})
  };
  return Album;
};
