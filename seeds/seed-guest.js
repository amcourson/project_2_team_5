const { Guest } = require('../models');

const guestData = [
  {
    name: 'Guest 1',
    RSVP: 'YES',
    adultCount: 2,
    kidsCount: 1,
    potluck_id: 1,
    gift_id: 0,
    user_id: 1,
    event_id: 1,
  },
  {
    name: 'Guest 2',
    RSVP: 'NO',
    adultCount: 1,
    kidsCount: 2,
    user_id: 1,
    event_id: 1,
  },
  {
    name: 'Guest 3',
    RSVP: 'NO',
    adultCount: 1,
    kidsCount: 2,
    user_id: 1,
    event_id: 2,
  },
];

const seedUser = () => Guest.bulkCreate(guestData);

module.exports = seedUser;
