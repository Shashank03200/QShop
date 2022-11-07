"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cart, Order }) {
      this.hasMany(Order, { foreignKey: "order_id" });
      this.hasOne(Cart, { foreignKey: "cart_id" });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING(200),
        isEmail: true,
        unique: true,
      },
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      contact: DataTypes.NUMBER,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
