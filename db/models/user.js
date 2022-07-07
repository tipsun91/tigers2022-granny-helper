'use strict';
const { userInfo } = require('os');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static get GRANDMOTHER() { return 'gm'; }
    static get GRANDSON() { return 'gs'; }

    static async isExists(name) {
      return await this.findOne({ where: { name } });
    }

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Image }) {
      User.hasMany(Image, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
      validate: {
        is: /^[a-zA-Zа-яА-ЯёЁ]{3,20}$/
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    role: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        isIn: [
          [User.GRANDMOTHER, User.GRANDSON]
        ],
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
