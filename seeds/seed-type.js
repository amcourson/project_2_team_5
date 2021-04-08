const { Type } = require('../models');

const typeData = [
  {
    TypeName: 'Potluck',
  },
  {
    TypeName: 'Gift Registry',
  },
  {
    TypeName: 'None',
  },
];

const seedUser = () => Type.bulkCreate(typeData);

module.exports = seedUser;
