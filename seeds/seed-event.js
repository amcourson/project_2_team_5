const { Event } = require('../models');

const eventData = [
  {
    Title: 'Birthday party',
    description: 'Its Sara Birthday',
    startdate: '09-01-2021 09:30:00 AM',
    enddate: '01-04-2019 10:30:00 AM',
    type_id: 1,
    category_id: 1,
    user_id: 1,
    virtuallink: "google.com",
    status: 'ACTIVE'
  },
  {
    Title: 'Wedding party',
    description: 'Its test weds super-test Wedding',
    address: '1234 Lincoln blvd, #345',
    city: 'Austin, TX',
    state: 'California',
    startdate: '09-01-2021 02:15:00 PM',
    enddate: '01-04-2019 06:30:00 PM',
    type_id: 2,
    category_id: 1,
    user_id: 1,
    status: 'ACTIVE'
  },
  {
    Title: 'Farewell party',
    description: 'John Farewell',
    address: 'Austin, TX',
    startdate: '09-01-2021 02:15:00 PM',
    enddate: '01-04-2019 06:30:00 PM',
    type_id: 2,
    category_id: 1,
    user_id: 1,
    status: 'ACTIVE'
  },
  {
    Title: '5th Birthday celebrarionn',
    description: 'Vardhan turns 5',
    address: 'Austin, TX',
    startdate: '09-01-2021 02:15:00 PM',
    enddate: '01-04-2019 06:30:00 PM',
    type_id: 2,
    category_id: 1,
    user_id: 1,
    status: 'ACTIVE'
  },
  {
    Title: 'Society meeting ',
    description: 'discuss about society probles ',
    address: 'Austin, TX',
    startdate: '09-01-2021 02:15:00 PM',
    enddate: '01-04-2019 06:30:00 PM',
    type_id: 2,
    category_id: 1,
    user_id: 1,
    status: 'ACTIVE'
  },
  {
    Title: 'Engadgement party',
    description: 'Its test weds super-test Wedding',
    address: 'Austin, TX',
    startdate: '09-01-2021 02:15:00 PM',
    enddate: '01-04-2019 06:30:00 PM',
    type_id: 2,
    category_id: 1,
    user_id: 1,
    status: 'ACTIVE'
  },
  {
    Title: 'Anniverdayr party',
    description: 'Its test weds super-test Wedding',
    address: 'Austin, TX',
    startdate: '09-01-2021 02:15:00 PM',
    enddate: '01-04-2019 06:30:00 PM',
    type_id: 2,
    category_id: 1,
    user_id: 1,
    status: 'ACTIVE'
  },
  {
    Title: 'Graduation event ',
    description: 'Its test weds super-test Wedding',
    address: 'Austin, TX',
    startdate: '09-01-2021 02:15:00 PM',
    enddate: '01-04-2019 06:30:00 PM',
    type_id: 2,
    category_id: 1,
    user_id: 1,
    status: 'ACTIVE'
  },
  {
    Title: 'pre-wedding  party',
    description: 'Its test weds super-test Wedding',
    address: 'Austin, TX',
    startdate: '09-01-2021 02:15:00 PM',
    enddate: '01-04-2019 06:30:00 PM',
    type_id: 2,
    category_id: 1,
    user_id: 1,
    status: 'ACTIVE'
  },
  {
    Title: 'Prootion partt ',
    description: 'Its test weds super-test Wedding',
    address: 'Austin, TX',
    startdate: '09-01-2021 02:15:00 PM',
    enddate: '01-04-2019 06:30:00 PM',
    type_id: 2,
    category_id: 1,
    user_id: 1,
    status: 'ACTIVE',
    virtuallink: "www.google.com"
  },
  {
    Title: 'House  warming party',
    description: 'Its test weds super-test Wedding',
    address: '1234 Lincoln blvd, #345',
    city: 'Austin, TX',
    state: 'California',
    startdate: '09-01-2021 02:15:00 PM',
    enddate: '01-04-2019 06:30:00 PM',
    type_id: 2,
    category_id: 1,
    user_id: 1,
    status: 'ACTIVE'
  },
];

const seedUser = () => Event.bulkCreate(eventData);

module.exports = seedUser;
