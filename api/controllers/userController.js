var mongoose = require('mongoose');
var user = require('../models/user');

var sendResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.getUsers = function (req, res) {
    user.find(function (err, data) {
        if (err)
            sendResponse(res, 401, err);
        else
            sendResponse(res, 201, data);
    });
}

module.exports.addUser = function (req, res) {
    if (req.body) {
        user.create({ name: req.body.name, password: req.body.password }, function (err, data) {
            if (err)
                sendResponse(res, 401, err);
            else
                sendResponse(res, 201, data);
        })
    }
}