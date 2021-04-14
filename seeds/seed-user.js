const { User } = require('../models');

const userdata = [
  {
    username: 'arti123456',
    firstname: 'Arti',
    lastname: 'karnik',
    address: 'Los Angels, CA',
    phoneno: '123-456-789',
    email: 'arti@gmail.com',
    password: '$2b$10$HEOb8So7MZMKJWysOyvDX.g5dUQ7LS3D/XfZIzBXH8hgSsdBxRz9K',
  },
  {
    username: 'Michael',
    firstname: 'Michale',
    lastname: 'Ja',
    address: 'Beverly Hills, CA',
    phoneno: '555-4533-789',
    email: 'michael1@gmail.com',
    password: 'password1234',
  },
  {
    username: 'user 3',
    firstname: 'Michale',
    lastname: 'Ja',
    address: 'Beverly Hills, CA',
    phoneno: '555-4533-789',
    email: 'michael2@gmail.com',
    password: 'password1234',
  },
  {
    username: 'user 4',
    firstname: 'Michale',
    lastname: 'Ja',
    address: 'Beverly Hills, CA',
    phoneno: '555-4533-789',
    email: 'michael3@gmail.com',
    password: 'password1234',
  },
  {
    username: 'user 4',
    firstname: 'Michale',
    lastname: 'Ja',
    address: 'Beverly Hills, CA',
    phoneno: '555-4533-789',
    email: 'michael4@gmail.com',
    password: 'password1234',
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
