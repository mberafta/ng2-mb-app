var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
var authController = require('../controllers/accountController');

router.get('/users', userController.getUsers);
router.post('/users', userController.addUser);
router.post('/authenticate', authController.authenticate);

module.exports = router;