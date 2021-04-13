const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const eventRoutes = require('./EventRoutes');
const category = require('./categoryRoutes');
const invitationRoutes = require('./invitationRoutes');


router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/events', eventRoutes);
router.use('/category', category);
router.use('/invitation', invitationRoutes);

module.exports = router;