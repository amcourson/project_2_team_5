const { User } = require('../models');

const userdata = [
  {
    userName: 'arti21',
    firstName: 'Arti',
    lastName: 'karnik',
    Address: 'Los Angels, CA',
    PhoneNo: '123-456-789',
    email: 'arti@gmail.com',
    password: 'password1234',
  },
  {
    userName: 'Michael',
    firstName: 'Michale',
    lastName: 'Ja',
    Address: 'Beverly Hills, CA',
    PhoneNo: '555-4533-789',
    email: 'michael@gmail.com',
    password: 'password1234',
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
