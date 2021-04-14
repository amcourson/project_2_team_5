const router = require('express').Router();
const { Gift } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE NEW GIFt
router.post('/', (req, res) => {
    console.log("IN GIFT POST route");

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

module.exports = router;