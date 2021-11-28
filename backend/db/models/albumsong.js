'use strict';
module.exports = (sequelize, DataTypes) => {
  const AlbumSong = sequelize.define('AlbumSong', {
    albumId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    songId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {});
  AlbumSong.associate = function(models) {
    AlbunSong.belongsTo(models.Album, {foreignKey: "albumId"})
  };
  return AlbumSong;
};
