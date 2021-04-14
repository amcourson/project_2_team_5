
const router = require('express').Router();
const { Event, User, Comment, Guest, Gift, Potluck } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { response } = require('express');
const { google, outlook, office365, yahoo, ics } = require ("calendar-link");

router.get('/:id', (req, res) => {
    Event.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'title', 'description', 'startdate', 'enddate', 'address', 'city', 'state', 'virtualLink', 'category_id' ],
        include: [
            { 
                model: User, attributes: ['username']
            },            
            {   
                 model: Comment, attributes: ['id', 'commenttext', 'event_id', 'user_id', 'commentdate'],
                include: { model: User, attributes: ['username']}
            }, 
            {
                model: Gift, attributes: ['id', 'name', 'url']
            },
            {
                model: Guest, attributes: ['name', 'email', 'rsvp', 'adultcount', 'kidscount']
            },
            {
                model: Potluck, attributes: ['name', 'description', 'headcount']
            }
        ]
        })
        
        .then(response => {
            if (!response) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            const events = response.get({ plain: true });
            console.log(events);
            res.render('ViewEvent', { events, loggedIn: true, isGuest: true });
            //res.json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});



module.exports = router;