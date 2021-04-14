const router = require('express').Router();
const { Guest } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE NEW GUEST
router.post('/', (req, res) => {
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

module.exports = router;