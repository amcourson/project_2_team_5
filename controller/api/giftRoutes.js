const router = require('express').Router();
const { Gift } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE NEW GIFT
router.post('/', (req, res) => {
    Gift.bulkCreate(req.body.giftItems)
    .then(function() {
         return Gift.findAll()
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

//  EDIT GIFT RSVP BY ID 
router.put('/:id', (req, res) => {
    console.log("in update guest");
    Gift.update({
       user_id: req.session.user_id
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
        console.log("in update guest");
        console.log(response);

        res.json(response);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;