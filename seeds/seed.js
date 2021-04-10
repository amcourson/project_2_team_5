const sequelize = require('../config/connection');
const seedUser = require('../seeds/seed-user');
const seedEvent = require('../seeds/seed-event');
const seedGift = require('../seeds/seed-gift');
const seedPotluck = require('../seeds/seed-potluck');
const seedCategory = require('../seeds/seed-category');
const seedType = require('../seeds/seed-type');
const seedComment = require('../seeds/seed-comment');
const seedGuest = require('../seeds/seed-guest');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedType();
  await seedCategory();
  await seedEvent();
  await seedPotluck();
  await seedComment();
  await seedGuest();
  await seedGift();

  process.exit(0);
};

seedAll();
