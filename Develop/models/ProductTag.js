const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Defined columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product', // This references the Product model
        key: 'id' // This references the id column in the Product model
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag', // This references the Tag model
        key: 'id' // This references the id column in the Tag model
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
