const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE NEW COMMENT
router.post('/', (req, res) => {
    
    Comment.create({
        commenttext: req.body.commenttext,
        event_id: req.body.event_id,
        user_id: req.session.user_id,
        commentdate: req.body.commentdate
    })
    .then(response => res.json(response))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

module.exports = router;