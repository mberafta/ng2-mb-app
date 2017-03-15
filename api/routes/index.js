var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.get('/users', userController.getUsers);
router.post('/users', userController.addUser);

module.exports = router;