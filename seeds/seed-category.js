const { Category } = require('../models');

const eventData = [
  {
    categoryname: 'Pool party',
 },
 {
    categoryname: 'Occasion',
 },
 {
    categoryname: 'Celebration',
 },
 {
    categoryname: 'Farewell',
 }
];

const seedUser = () => Category.bulkCreate(eventData);

module.exports = seedUser;
