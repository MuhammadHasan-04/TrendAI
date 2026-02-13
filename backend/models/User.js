// models/User.js - Sequelize example
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const User = sequelize.define(
  "User",
  {
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allownunll: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {},
);

export { User };
