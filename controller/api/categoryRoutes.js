
const router = require('express').Router();
const { Category } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { response } = require('express');

router.get('/:categoryName',async (req, res) => {

    Category.findOne({ 
        where: { category_name: req.params.categoryName },
        attributes: ['id'],
        })
        .then(response => {
            if (!response) {
                res.status(404).json({ message: 'No Category found with this id' });
                return;
            }
            return response.get({plain:true});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  })

module.exports = router;