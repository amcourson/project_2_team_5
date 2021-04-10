const { Event } = require('../models');

const eventData = [
  {
    Title: 'Birthday party',
    description: 'Its Sara Birthday',
    address: 'Los Angels, CA',
    date: '09-01-2021',
    type_id: 1,
    category_id: 1,
    user_id: 1
  },
  {
    Title: 'Wedding party',
    description: 'Its test weds super-test Wedding',
    address: 'Austin, TX',
    date: '09-01-2021',
    type_id: 2,
    category_id: 1,
    user_id: 1
  },
];

const seedUser = () => Event.bulkCreate(eventData);

module.exports = seedUser;
