const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');
const Page = require('.Page')

module.exports = {
  db
}
