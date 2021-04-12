
const router = require('express').Router();
const { Event, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { response } = require('express');


router.get('/addPotluck', (req, res) => {
    res.render('AddPotluck');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

// CREATE NEW EVENt
router.post('/', (req, res) => {
    console.log("CREATE NEW EVENT ");

    Event.create({
        Title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        address: req.body.address ,
        city: req.body.city ,
        state: req.body.state ,
        virtualLink: req.body.virtualLink,
        category_id: req.body.category,
        status: req.body.status,
        type_id: 1,
        user_id: 1
    })
    .then(response => res.json(response))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
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