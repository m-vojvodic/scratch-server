var mongoose = require('mongoose');
var Dj = require('../models/dj.js');
var Track = require('../models/track.js');

//POST /api/dj
//body: { dj_id : <> }
//response: { message : success }
module.exports.createDj = function(req, res) {

}

//GET /api/dj
//body: { dj_id : <>, options : { potential dictionary } }
//response: { tracks : tracks }
module.exports.retrieveDj = function(req, res) {

}

//DELETE /api/dj
//body: { dj_id : <>, track_id : <> }
//response: { message : success }
module.exports.deleteTrack = function(req, res) {

}

//DELETE /api/dj
//body: { dj_id : <> }
//response: { message : success }
module.exports.deleteDj = function(req, res) {

}
