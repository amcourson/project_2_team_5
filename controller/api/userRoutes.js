const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Guest, Event } = require('../../models');
const { response } = require('express');

// CREATE NEW USER
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      phoneno: req.body.phone,
      address: req.body.addresss
    });
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json(dbUserData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });    
    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
    }
    const validPassword = await dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password. Please try again!' });
    }
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;
      req.session.isLogin = true;
      req.session.isDashboard = false;
      req.session.isHome = false;

      res.status(200).json({ user: dbUserData, message: `You are now logged in! ${dbUserData.id}`, isLogin: req.session.isLogin, isDashboard:req.session.isDashboard, isHome: req.session.isHome  });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/invitations', (req, res) => {
  Event.findAll({
    attributes: ['id', 'title', 'description', 'startdate', 'enddate', 'address', 'city', 'state', 'virtualLink', 'category_id' ],
    include: [{
      model: Guest,
      where: {user_id: 3}
     }]
  })
  .then(response => {
    const events = response.map(event => event.get({ plain: true }));
    res.render('invitation', { events })
   })
  .catch(err => {
      res.status(500).json(err);
  });
});




module.exports = router;
