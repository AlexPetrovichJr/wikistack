const Sequelize = require('sequelize');
const db = require('./index');

const Page = db.define('page', {

   title: {
    type: Sequelize.STRING,
    allowNull: false
   },
   slug: {
    type: Sequelize.TEXT,
    allowNull: false,
   },
   content: {
    type: Sequelize.TEXT
   },
   status: {
    type:  Sequelize.ENUM('OPEN', 'CLOSED'),
    defaultValue: 'OPEN'
   }
})

module.exports = Page;
