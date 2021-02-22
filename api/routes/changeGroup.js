var express = require('express');
var router = express.Router();
const oktaClient = require('../lib/oktaClient');

router.post('/', function(req, res, next) {
    oktaClient.addUserToGroup(req.body.groupId, req.body.userId);
});

module.exports = router;