const { Comment } = require('../models');

const commentData = [
  {
    commentText: 'Wonderful party!!',
    commentDate: '09-01-2021',
    Event_id: 1,
    user_id: 1,
  },
  {
    commentText: 'had lots of fun!!',
    commentDate: '01-01-2021',
    Event_id: 2,
    user_id: 1,
  },
  {
    commentText: 'Missed it!!',
    commentDate: '01-01-2021',
    Event_id: 1,
    user_id: 2,
  },
];

const seedUser = () => Comment.bulkCreate(commentData);

module.exports = seedUser;
