var mongoose = require('mongoose');
var user = require('../models/user');
var regexp = require('node-regexp');
var sha1 = require('sha1');

/** Méthode perméttant de traiter les résultats des reqûetes api. */
var sendResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

/** Méthode perméttant d'obtenir tous les utilisateurs ou une portion déterminée par des query parameters. */
module.exports.getUsers = function (req, res) {
    if (req.query && req.query.name) {
        var name = req.query.name.toString();
        console.log(name);
        user.find({'name':new RegExp('^.*'+name+'.*$', "i")}, function (err, data) {
            if (err)
                sendResponse(res, 400, err);
            else
                sendResponse(res, 200, data);
        });
    }
    else {
        user.find(function (err, data) {
            if (err)
                sendResponse(res, 401, err);
            else
                sendResponse(res, 201, data);
        });
    }
}

/** Méthode utilisée pour ajouter un nouvel utilisateur à la base de données. */
module.exports.addUser = function (req, res) {
    if (req.body) {
        user.create({ name: req.body.name, password: sha1(req.body.password) }, function (err, data) {
            if (err)
                sendResponse(res, 401, err);
            else
                sendResponse(res, 201, data);
        })
    }
}
