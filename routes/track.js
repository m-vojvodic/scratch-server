var mongoose = require('mongoose');
var Dj = require('../models/dj.js');
var Track = require('../models/track.js');

//POST /api/tracks
//body: { dj_id : <>, track : {} }
//response: { message : success }
module.exports.createTrack = function(req, res) {

}

//GET /api/tracks
//body: { dj_id : <> }
//response: { tracks : tracks }
module.exports.retrieveTracks = function(req, res) {

}

//PUT /api/tracks
//body: { dj_id : <>, track_id : <>, vote: int }
//response: { message : success }
module.exports.updateTracks = function(req, res) {

}
