
const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { response } = require('express');

// CREATE NEW EVENt
router.post('/', withAuth, (req, res) => {
    /*
    Blog.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
        create_date: req.body.create_date
    })
    .then(response => res.json(response))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });*/
});

// GET ALL EVENT
router.get('/', (req, res) => {
    /*
    Blog.findAll({
            attributes: ['id','title','content','created_at'],
            order: [['created_at', 'DESC']],
            include: 
            [{ model: User, attributes: ['username']},
            {  model: Comment, attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
             include: { model: User, attributes: ['username']}}]
            })
        .then(dbPostData => res.json(dbPostData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });*/

});


module.exports = router;