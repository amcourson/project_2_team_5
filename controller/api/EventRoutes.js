
const router = require('express').Router();
const { Event, User, Comment, Gift, Potluck, Guest, Category } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { response } = require('express');
const { google, outlook, office365, yahoo, ics } = require ("calendar-link");

router.get('/addPotluck', (req, res) => {
    res.render('AddPotluck');
});

// SHOW DASHBOARD
router.get('/dashboard', (req, res) => {
    res.render('dashboard', {loggedIn: req.session.loggedIn});
});

// CREATE NEW EVENT
router.post('/', (req, res) => {
    Event.create({
        Title: req.body.title,
        description: req.body.description,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        address: req.body.address ,
        city: req.body.city ,
        state: req.body.state ,
        virtualLink: req.body.virtualLink,
        category_id: req.body.category,
        status: req.body.status,
        type_id: 1,
        user_id: req.session.user_id
    })
    .then(x => {
        res.json(x.get('id'));
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET BLOG BY ID: 
router.get('/:id', (req, res) => {
    Event.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'title', 'description', 'startdate', 'enddate', 'address', 'city', 'state', 'virtuallink', 'category_id' ],
        include: [
            { 
                model: User, attributes: ['username']
            },            
            {   
                 model: Comment, attributes: ['id', 'commenttext', 'event_id', 'user_id', 'commentdate'],
                include: { model: User, attributes: ['username']}
            }, 
            {
                model: Gift, attributes: ['id', 'name', 'url', 'user_id'],
                include: { model: User, attributes: ['username', 'firstname', 'lastname']}

            },
            {
                model: Guest, attributes: ['name', 'email', 'rsvp', 'adultcount', 'kidscount']
            },
            {
                model: Potluck, attributes: ['name', 'description', 'headcount', 'user_id'],
                include: { model: User, attributes: ['username', 'firstname', 'lastname']}
            }
        ]
        })
        .then(response => {

            if (!response) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            const events = response.get({ plain: true });
              console.log("response:" + events);
             // res.json(events);
            res.render('EditEvent', { events, loggedIn: req.session.loggedIn, firstname: req.session.firstname });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//  EDIT EVENT BY ID 
router.put('/:id', (req, res) => {
    Event.update({
        title: req.body.title,
        description: req.body.description,
        address: req.body.address ,
        city: req.body.city ,
        state: req.body.state ,
        virtualLink: req.body.virtualLink,
        category_id: req.body.category,
        status: req.body.status,
        type_id: 1,
        user_id: req.session.user_id
    }, 
    {  
        where: {
            id: req.params.id
        }    
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

//  DELETE EVENT BY ID 
router.delete('/:id', (req, res) => {
    Event.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(response => {
        console.log(response);
        
        if (!response) {
        res.status(404).json({ message: 'No Event found with this id' });
        return;
    }
    res.json(response);
    })
    .catch(err => {
    res.status(500).json(err);
    });
});

module.exports = router;