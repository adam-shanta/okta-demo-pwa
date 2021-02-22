var express = require('express');
var router = express.Router();
const oktaClient = require('../lib/oktaClient');

/* GET home page. */
router.post('/', function(req, res, next) {
    // Deleting User, must be deactivated first
    user.deactivate()
    .then(() => console.log('User has been deactivated'))
    .then(() => user.delete())
    .then(() => console.log('User has been deleted'));
});

module.exports = router;