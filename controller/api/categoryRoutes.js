
const router = require('express').Router();
const { Category } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { response } = require('express');

// GET ALL CATEGORIES
router.get('/', (req, res) => {
    Category.findAll({
            attributes: ['categoryname']
         })
        .then(dbPostData => res.json(dbPostData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET CATEGORY ID BY NAME
router.get('/:categoryName',async (req, res) => {

    Category.findOne({ 
        where: { categoryname: req.params.categoryName },
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