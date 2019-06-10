var express = require('express');
var router = express.Router();

const UsersControllers = require('../controllers/users');


/* GET users listing. */
router.get('/signup', UsersControllers.signup_get); {
  res.send('respond with a resource')
});

module.exports = router;