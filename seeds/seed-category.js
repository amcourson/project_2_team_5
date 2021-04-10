const { Category } = require('../models');

const eventData = [
  {
    categoryName: 'Pool party',
 },
 {
    categoryName: 'Occasion',
 },
 {
    categoryName: 'Celebration',
 },
 {
    categoryName: 'Farewell',
 }
];

const seedUser = () => Category.bulkCreate(eventData);

module.exports = seedUser;
