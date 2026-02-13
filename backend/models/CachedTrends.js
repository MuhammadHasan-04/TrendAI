import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const CachedTrends = sequelize.define("CachedTrend", {
  source: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING },
  summary: { type: DataTypes.STRING },
  url: { types: DataTypes.STRING },
  category: { type: DataTypes.STRING },
});

export { CachedTrends };
