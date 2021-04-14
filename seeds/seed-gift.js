const { Gift } = require('../models');

const giftData = [
  {
    name: 'Hot wheel car',
    url: 'amazon.com',
    user_id: 1,
    event_id: 1,
  },
  {
    name: 'Dol house',
    url: 'walmart.com',
    user_id: 2,
    event_id: 1,
  },
];

const seedUser = () => Gift.bulkCreate(giftData);

module.exports = seedUser;
