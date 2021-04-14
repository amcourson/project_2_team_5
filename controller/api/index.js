const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const eventRoutes = require('./EventRoutes');
const category = require('./categoryRoutes');
const invitationRoutes = require('./invitationRoutes');
const guestRoutes = require('./GuestRoutes');
const potluckRoutes = require('./potluckRoutes');


router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/events', eventRoutes);
router.use('/category', category);
router.use('/invitation', invitationRoutes);
router.use('/guest', guestRoutes);
router.use('/potluck', potluckRoutes);

module.exports = router;