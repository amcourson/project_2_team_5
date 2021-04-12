const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const eventRoutes = require('./EventRoutes');
const category = require('./categoryRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/events', eventRoutes);
router.use('/category', category);

module.exports = router;