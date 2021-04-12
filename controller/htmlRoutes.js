const router = require('express').Router();

const { User, Event, Comment, Category, Type } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
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

<<<<<<< HEAD
// OPEN DASHBOARD PAGE
router.get('/dashboard', withAuth, (req, res) => {
    Event.findAll({
            where: { user_id: 1 },
            attributes: [ 'id', 'title', 'description', 'address', 'city', 'state', 'start_date', 'end_date', 'category_id', 'virtual_link'  ],
        })
        .then(response => {
            const events = response.map(blog => blog.get({ plain: true }));
            res.render('dashboard', { events, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            res.status(500).json(err);
        });
=======
router.get('/viewevents', (req, res) => {
    res.render('viewevents');
>>>>>>> f8fa34da052bf860a902c3197be05275a0f93c93
});


// ADD NEW BLOG
router.get('/addNewEvent', (req, res) => {
    Category.findAll({
        attributes: [ 'id', 'categoryName' ],
    })
    .then(categroyData => {
       const categories = categroyData.map(category => category.get({ plain: true }));
       res.render('AddNewEvent', { categories } );
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;