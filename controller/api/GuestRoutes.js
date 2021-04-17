const router = require('express').Router();
const { Guest } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE NEW GUEST
router.post('/', (req, res) => {
    console.log("IN GUEST POST HTMl routes");

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


//  EDIT GUEST RSVP BY ID 
router.put('/:id', (req, res) => {
    console.log("in update guest" + req.params.id + req.session.user_id);
    Guest.update({
        rsvp: req.body.rsvp,
        adultcount: req.body.adultcount,
        kidscount: req.body.kidscount,
    }, 
    {  where: { 
        email: req.session.email,
        event_id: req.params.id,
    }
    })
    .then(response => {
        if (!response) {
            res.status(404).json({ message: 'No EVENT found with this id' });
            return;
        }
        console.log("in update guest");
        console.log(response);

        res.json(response);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;