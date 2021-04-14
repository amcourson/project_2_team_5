const { Potluck } = require('../models');

const potluckData = [
  {
    name: 'Chicken curry',
    description: 'medium curry',
    headcount: 10,
    user_id: 1,
    event_id: 1,
  },
  {
    name: 'Roti',
    description: 'medium',
    headcount: 20,
    user_id: 2,
    event_id: 1,
  },
];

const seedUser = () => Potluck.bulkCreate(potluckData);

module.exports = seedUser;
