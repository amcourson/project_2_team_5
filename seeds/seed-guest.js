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
  {
    name: 'Guest 4',
    RSVP: 'YES',
    adultCount: 1,
    kidsCount: 2,
    user_id: 2,
    event_id: 2,
  },
  {
    name: 'Guest 5',
    RSVP: '',
    adultCount: 1,
    kidsCount: 2,
    user_id: 2,
    event_id: 2,
  },
  {
    name: 'Guest 6',
    RSVP: '',
    adultCount: 1,
    kidsCount: 2,
    user_id: 3,
    event_id: 5,
  },
  {
    name: 'Guest 7',
    RSVP: '',
    adultCount: 1,
    kidsCount: 2,
    user_id: 3,
    event_id: 7,
  },
  {
    name: 'Guest 8',
    RSVP: 'NO',
    adultCount: 1,
    kidsCount: 2,
    user_id: 3,
    event_id: 4,
  },
  {
    name: 'Guest 9',
    RSVP: 'NO',
    adultCount: 1,
    kidsCount: 2,
    user_id: 3,
    event_id: 2,
  },
  {
    name: 'Guest 10',
    RSVP: 'NO',
    adultCount: 1,
    kidsCount: 2,
    user_id: 5,
    event_id: 2,
  },

  {
    name: 'Guest 3',
    RSVP: 'NO',
    adultCount: 1,
    kidsCount: 2,
    user_id: 4,
    event_id: 2,
  },
];

const seedUser = () => Guest.bulkCreate(guestData);

module.exports = seedUser;
