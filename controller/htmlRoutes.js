const router = require('express').Router();
const { response } = require('express');
const { User, Event, Comment } = require('../models');
const withAuth = require('../utils/auth');

// OPEN HOME PAGE
router.get('/', async (req, res) => {
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

router.get('/viewevents', (req, res) => {
    res.render('viewevents');
});


// ADD NEW BLOG
router.get('/addNewEvent', (req, res) => {
    res.render('AddNewEvent');
});


module.exports = router;