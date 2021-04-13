const { User } = require('../models');

const userdata = [
  {
    username: 'arti21',
    firstname: 'Arti',
    lastname: 'karnik',
    address: 'Los Angels, CA',
    phoneno: '123-456-789',
    email: 'arti@gmail.com',
    password: 'password1234',
  },
  {
    username: 'Michael',
    firstname: 'Michale',
    lastname: 'Ja',
    address: 'Beverly Hills, CA',
    phoneno: '555-4533-789',
    email: 'michael@gmail.com',
    password: 'password1234',
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
