const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE NEW COMMENT
router.post('/', (req, res) => {
    Comment.create({
        commenttext: req.body.text,
        event_id: req.body.event_id,
        user_id: 2,
        commentdate: req.body.currentdate
    })
    .then(response => res.json(response))
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;