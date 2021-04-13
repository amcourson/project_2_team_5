const { Comment } = require('../models');

const commentData = [
  {
    commenttext: 'Wonderful party!!',
    commentdate: '09-01-2021',
    event_id: 1,
    user_id: 1,
  },
  {
    commenttext: 'had lots of fun!!',
    commentdate: '01-01-2021',
    event_id: 2,
    user_id: 1,
  },
  {
    commenttext: 'Missed it!!',
    commentdate: '01-01-2021',
    event_id: 1,
    user_id: 2,
  },
  {
    commenttext: 'Missed it!!',
    commentdate: '01-01-2021',
    event_id: 5,
    user_id: 2,
  },
  {
    commenttext: 'nice presentation',
    commentdate: '01-01-2021',
    event_id: 5,
    user_id: 2,
  },
  {
    commenttext: 'Great concept!!',
    commentdate: '01-01-2021',
    event_id: 5,
    user_id: 2,
  },
  {
    commenttext: 'Missed it!!',
    commentdate: '01-01-2021',
    event_id: 1,
    user_id: 2,
  },

];

const seedUser = () => Comment.bulkCreate(commentData);

module.exports = seedUser;
