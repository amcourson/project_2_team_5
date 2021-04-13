
const router = require('express').Router();
const { Event, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { response } = require('express');
const { google, outlook, office365, yahoo, ics } = require ("calendar-link");


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
    

// Set event as an object, dynamically insert personalize data
const event = {
  title: "My birthday party",
  description: "Be there!",
  start: "2019-12-29 18:00:00 +0100",
  duration: [3, "hour"],
};


google(event); 
outlook(event);
office365(event); 
yahoo(event); 
ics(event); 
});

// GET BLOG BY ID: 
router.get('/:id', (req, res) => {
    Event.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'title', 'description', 'startDate', 'endDate', 'address', 'city', 'state', 'virtualLink', 'category_id' ],
        })
        .then(response => {
            if (!response) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            const events = response.get({ plain: true });
            console.log(events);

            res.render('EditEvent', { events, loggedIn: true });
            //res.json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


//  EDIT EVENT BY ID 
router.put('/edit/:id', withAuth, (req, res) => {
    Event.update({
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
    }, 
    {  where: { id: req.params.id }
    })
    .then(response => {
        if (!response) {
            res.status(404).json({ message: 'No EVENT found with this id' });
            return;
        }
        res.json(response);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});


module.exports = router;