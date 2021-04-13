const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User } = require('../../models');

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

// LOGIN WITH USER
// LOGIN WITH USER
/*router.post('/login', async (req, res) => {
  User.findOne({
    where: { username: req.body.username },
    attributes: ['id' ],
    })
    .then(async dbUserData => { 
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
    })
    .catch(err => {
        res.status(500).json(err);
    });
   
});*/

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    console.log("IN login " + dbUserData);
    
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





module.exports = router;
