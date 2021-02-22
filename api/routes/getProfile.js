var express = require('express');
var router = express.Router();
const oktaClient = require('../lib/oktaClient');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Get Users by ID or username
    oktaClient.getUser(req.body.email)
    .then(user => { 
        console.log(user);
});
});

module.exports = router;