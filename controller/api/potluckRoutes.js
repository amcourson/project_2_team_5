const router = require('express').Router();
const { Event, Potluck, User } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// CREATE NEW POTLUCK ITEM
router.post('/', (req, res) => {
    Potluck.bulkCreate(req.body.potluckItems)
    .then(function() {
         return Potluck.findAll()
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

//  EDIT POTLUCK RSVP BY ID 
router.put('/:id', (req, res) => {
    Potluck.update({
        user_id: req.session.user_id,
    }, 
    {  where: { 
        id: req.body.id,
        event_id: req.params.id,
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

module.exports = router;