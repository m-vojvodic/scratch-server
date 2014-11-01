var mongoose = require('mongoose');
var Dj = require('../models/dj.js');
var Track = require('../models/track.js');

//POST /api/tracks
//body: { dj_id : <>, track : {} }
//response: { message : success }
module.exports.createTrack = function(req, res) {
    var track = new Track;

    // essential soundcloud items
    track.dj_id = req.body.dj_id;
    track.uri = req.body.uri;
    track.title = req.body.title;
    track.username = req.body.username;
    track.artwork_url = req.body.artwork_url;
    track.avatar_url = req.body.avatar_url;
    track.skip_count = 0;

    track.save(function(err){
        if(err)
            res.send(err);

        res.json({ message : 'success', track_id : track._id });
    });
};

//GET /api/tracks
//body: {}
//response: { tracks : tracks }
module.exports.retrieveTracks = function(req, res) {
    Track.find({ dj_id : req.params.dj_id }, function(err, tracks){
        if(err)
            res.send(err);

        res.json({ tracks : tracks });
    });
};

//PUT /api/tracks
//body: { dj_id : <>, track_id : <>, vote: int }
//response: { message : success }
module.exports.updateTracks = function(req, res) {
    Track.update({ dj_id : req.body.dj_id, _id : req.body.track_id },
                 { skip_count : skip_count+1 }, function(err){
        if(err)
            res.send(err);

        if(skip_count > 5){
            // delete from queue
            Track.remove({ dj_id : req.body.dj_id, track_id : req.body.track_id },
                function(err){
                if(err)
                    res.send(err);

                res.json({ message : 'deleted' });
            });
        }
        else{
            res.json({ message : 'success' });
        }
    });
};
