var mongoose = require('mongoose');
var user = require('../models/user');
var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
var app = require('../../index');

var sendResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

/**
 * Authentication d'un utilisateur avec injection de token.
 */
module.exports.authenticate = function (req, res) {

    if (req.body && (req.body.name && req.body.password)) {
        user.findOne({ 'name': req.body.name }, function(err, user){
            if(err)
                sendResponse(res, 404, err);
            else if(!user){
                sendResponse(res, 404, {message : 'Utilisateur inexistant'});
            }
            else{
                if(user.password != req.body.password){
                    sendResponse(res, 400, { message : 'Le mot de passe est incorrect'});
                }
                else{
                    var token = jwt.sign(user, app.get('secret'), {
                        expiresIn:1
                    });

                    var result = {
                        name:user.name,
                        token : token
                    };

                    sendResponse(res, 200, result);
                }
            }
                
        })
    }

};
