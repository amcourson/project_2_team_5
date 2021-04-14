const router = require('express').Router();
const { Event, Potluck, User } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');


router.post('/', (req, res) => {
    console.log("IN POTLUCK POST HTMl routes");
    console.log(req.body.potluckItems);

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

module.exports = router;