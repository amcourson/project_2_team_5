const router = require('express').Router();

// const { eventNames } = require('node:process');
const { User, Event, Comment, Category, Type, Guest } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homePage');
});

router.get('/index', (req, res) => {
    res.render('homePage');
});
// OPEN SIGN-UP PAGE
router.get('/signUp', (req, res) => {
    res.render('signUpPage');
});

// OPEN LOGIN PAGE
router.get('/login', (req, res) => {
    res.render('loginPage');
});


// OPEN DASHBOARD PAGE
router.get('/dashboard', (req, res) => {
    Event.findAll({
            where: { user_id: 1 },
            attributes: [ 'id', 'title', 'description', 'address', 'city', 'state', 'startdate', 'enddate', 'category_id', 'virtual_link'  ],
        })
        .then(response => {
            const events = response.map(blog => blog.get({ plain: true }));
            res.render('dashboard', { events, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});




// ADD NEW BLOG
router.get('/addNewEvent', (req, res) => {
    Category.findAll({
        attributes: [ 'id', 'categoryname' ],
    })
    .then(categroyData => {
       const categories = categroyData.map(category => category.get({ plain: true }));
       res.render('AddNewEvent', {categories});
    })
    .catch(err => {
        res.status(500).json(err);
    });
});


// OPEN OTHER USER'S BLOG BY ID
router.get('/lastAdded',  (req, res) => {
    console.log("in last ");
    Event.findAll({
        attributes: ['id'],
        limit: 1,
        order: [['id', 'DESC']]
        })
    .then(dbPostData => res.json(dbPostData.reverse()))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.post('/guest', (req, res) => {
    console.log("IN GUEST POST HTMl routes");
    console.log(req.body.guest);

    Guest.bulkCreate(req.body.guest)
    .then(function() {
         return Guest.findAll()
       })
       .then(function(response){
           console.log(response);
           res.json(response);
       })
       .catch(function(error){
           console.log(error);
           res.json(error);
       })
});


module.exports = router;