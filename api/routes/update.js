var express = require('express');
var router = express.Router();
const oktaClient = require('../lib/oktaClient');

/* GET home page. */
router.post('/', function(req, res, next) {
  // Update User
    user.profile.firstName = req.body.firstName;
    user.profile.lastName = req.body.lastName;
    user.profile.email = req.body.email;
    user.profile.login = req.body.email;
    user.credentials.password.value = req.body.password;
    user.update()
    .then(() => console.log('User data has been changed'));
});

module.exports = router;