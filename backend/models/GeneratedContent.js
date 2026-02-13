import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { User } from "./User.js";

const GeneratedContent = sequelize.define("GeneratedContent", {
  topic: { type: DataTypes.STRING, allowNull: false },
  platform: { type: DataTypes.STRING, allowNull: false },
  tone: { type: DataTypes.STRING, allowNull: false },
  ai_text: { type: DataTypes.TEXT, allowNull: false },
  status: {
    type: DataTypes.ENUM("pending", "completed"),
    allowNull: false,
    defaultValue: "pending",
  },
});
GeneratedContent.belongsTo(User);
User.hasMany(GeneratedContent);

export { GeneratedContent };

// const mongoose = require('mongoose');

// const GeneratedSchema = new mongoose.Schema({

//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },

//   topic: {
//     type: String,
//     required: true
//   },

//   platform: {
//     type: String,
//     required: true
//   },

//   tone: {
//     type: String,
//     required: true
//   },

//   AI_text: {
//     type: String,
//     required: true
//   },

//   status: {
//     type: String,
//     default: "draft"
//   }

// }, { timestamps: true });

// module.exports = mongoose.model("GeneratedContent", GeneratedSchema);
