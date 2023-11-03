const { Sequelize, Datatypes } = require("sequelize");
const path = require("path");

const db = new Sequelize({
  dialect: "sqlite",
  logging: false,
  storage: path.join(__dirname, "db.sqlite"),
});

module.exports = {
  db,
  Datatypes,
};
