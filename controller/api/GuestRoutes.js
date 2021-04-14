const router = require('express').Router();
const { Guest } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE NEW GUEST
/*
router.post('/', (req, res) => {
    Guest.create({
        name: req.body.text,
        email: req.body.event_id,
        user_id: 2,
        event_id: req.body.currentdate
    })
    .then(response => res.json(response))
    .catch(err => {
        res.status(400).json(err);
    })
});*/


router.post('/', (req, res) => {
    console.log("IN GUEST POST");
    console.log(req.body);

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