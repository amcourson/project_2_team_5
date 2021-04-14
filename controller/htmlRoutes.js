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
router.get('/myinvitations', (req, res) => {
   
    Event.findAll({
        include: [{
          model: Guest,
          where: {email : req.session.email}
         }]
      })
    .then(response => {
        const events = response.map(blog => blog.get({ plain: true }));
        console.log("events " + events);
        res.render('invitation', {events});
    })
    .catch(err => {
        res.status(500).json(err);
    });
});
// OPEN SIGN-UP PAGE
router.get('/signUp', (req, res) => {
    res.render('signUpPage');
});

// OPEN LOGIN PAGE
router.get('/login', (req, res) => {
    res.render('loginPage');
});

router.get('/EventDetails/:id', (req, res) => {
    res.render('EventDetails');
});

// OPEN DASHBOARD PAGE
router.get('/dashboard', withAuth, (req, res) => {
    Event.findAll({
            where: { user_id: req.session.user_id },
            attributes: [ 'id', 'title', 'description', 'address', 'city', 'state', 'startdate', 'enddate', 'category_id', 'virtuallink'  ],
        })
        .then(response => {
            const events = response.map(blog => blog.get({ plain: true }));
            res.render('dashboard', { events, loggedIn: req.session.loggedIn, firstname: req.session.firstname });
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
   // console.log("in last ");
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

/*
// GET BLOG BY ID: 
router.get('/invitations', (req, res) => {
    console.log("in incitation");

    Event.findAll({
        attributes: ['id', 'title', 'description', 'startdate', 'enddate', 'address', 'city', 'state', 'virtualLink', 'category_id' ],
        /*include: [{
          model: Guest,
          where: { email: 'arti@gmail.com'}
         }]
      })
    .then(response => {

            if (!response) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const events = response.get({ plain: true });
            res.render('AddNewEvent', { events, loggedIn: true });

           // res.render('ViewEvent', { events, loggedIn: true });
            //res.json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

*/

module.exports = router;