const { Guest } = require('../models');

const guestData = [
  {
    name: 'arti',
    email: 'arti@gmail.com',
    rsvp: 'YES',
    adultcount: 2,
    kidscount: 1,
    potluck_id: 1,
    gift_id: 0,
    event_id: 1,
  },
  {
    name: 'arti',
    email: 'arti@gmail.com',
    rsvp: 'NO',
    adultcount: 1,
    kidscount: 2,
    event_id: 2,
  },
  {
    name: 'arti',
    email: 'arti@gmail.com',
    rsvp: 'NO',
    adultcount: 1,
    kidscount: 2,
    event_id: 3,
  },
  {
    name: 'kedar',
    email: 'kedar@gmail.com',
    rsvp: 'YES',
    adultcount: 1,
    kidscount: 2,
    event_id: 2,
  },
  {
    name: 'Guest 5',
    email: 'Guest10@gmail.com',
    rsvp: '',
    adultcount: 1,
    kidscount: 2,
    event_id: 2,
  },
  {
    name: 'Guest 6',
    email: 'Guest10@gmail.com',
    rsvp: '',
    adultcount: 1,
    kidscount: 2,
    event_id: 5,
  },
  {
    name: 'Guest 7',
    email: 'Guest10@gmail.com',
    rsvp: '',
    adultcount: 1,
    kidscount: 2,
    event_id: 7,
  },
  {
    name: 'Guest 8',
    email: 'Guest10@gmail.com',
    rsvp: 'NO',
    adultcount: 1,
    kidscount: 2,
    event_id: 4,
  },
  {
    name: 'Guest 9',
    email: 'Guest10@gmail.com',
    rsvp: 'NO',
    adultcount: 1,
    kidscount: 2,
    event_id: 2,
  },
  {
    name: 'Guest 10',
    email: 'Guest10@gmail.com',
    rsvp: 'NO',
    adultcount: 1,
    kidscount: 2,
    event_id: 2,
  },

  {
    name: 'Guest 3',
    email: 'Guest10@gmail.com',
    rsvp: 'NO',
    adultcount: 1,
    kidscount: 2,
    event_id: 2,
  },
];

const seedUser = () => Guest.bulkCreate(guestData);
module.exports = seedUser;
