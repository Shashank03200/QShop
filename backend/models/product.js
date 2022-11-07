"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      this.belongsTo(Category, { sourceKey: "cat_id", foreignKey: "id" });
    }
  }
  Product.init(
    {
      color: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      brand: DataTypes.STRING,
      cat_id: DataTypes.INTEGER,
      product_name: DataTypes.STRING,
      product_name: DataTypes.STRING,
      product_desc: DataTypes.STRING,
      image1: DataTypes.STRING,
      image2: DataTypes.STRING,
      image3: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
