const { Event } = require('../models');

const eventData = [
  {
    Title: 'Birthday party',
    description: 'Its Sara Birthday',
    address: 'Los Angels, CA',
    startDate: '09-01-2021',
    endDate: '01-04-2019',
    type_id: 1,
    category_id: 1,
    user_id: 1,
    virtualLink: "google.com"
  },
  {
    Title: 'Wedding party',
    description: 'Its test weds super-test Wedding',
    address: 'Austin, TX',
    startDate: '09-01-2021',
    endDate: '01-04-2019',
    type_id: 2,
    category_id: 1,
    user_id: 1
  },
];

const seedUser = () => Event.bulkCreate(eventData);

module.exports = seedUser;
