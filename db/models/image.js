'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Image.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Image.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    title: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    image_blob: {
      allowNull: true,
      type: DataTypes.BLOB,
    },
    image_url: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};