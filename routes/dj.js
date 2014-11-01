var mongoose = require('mongoose');
var Dj = require('../models/dj.js');
var Track = require('../models/track.js');

//POST /api/dj
//body: { dj_id : <> }
//response: { message : success }
module.exports.createDj = function(req, res) {
    Dj.find({ dj_id : req.body.dj_id }, function(err, dj){
        if(err)
            res.send(err)
        else if(dj.length != 0)
            res.send({ message : 'failure' });
        else{
            var dj = new Dj;

            dj.dj_id = req.body.dj_id;

            dj.save(function(err) {
                if(err)
                   res.send(err);

                res.json({ message : 'success' });
            });
        }
    });
};

//GET /api/dj
//body: {}
//response: { tracks : tracks }
module.exports.retrieveDj = function(req, res) {
    Dj.find({ dj_id : req.params.dj_id }, function(err, tracks){
        if(err)
            res.send(err);

        res.json({ dj : tracks });
    });
};

//DELETE /api/dj
//body: { dj_id : <>, track_id : <> }
//response: { message : success }
module.exports.deleteTrack = function(req, res) {
    Track.remove({ dj_id : req.body.dj_id, track_id : req.params.track_id }, function(err){
        if(err)
            res.send(err);

        res.json({ message : 'success' });
    });
};

//DELETE /api/dj
//body: { dj_id : <> }
//response: { message : success }
module.exports.deleteDj = function(req, res) {
    // delete tracks
    Track.find({ dj_id: req.body.dj_id }, function(err, tracks){
        for(var track in tracks) {
            Track.remove({ _id : track[tracks]._id }, function(err){
                if(err)
                    res.send(err);
            });
        }
    });

    // delete Dj
    Dj.remove({ dj_id : req.body.dj_id }, function(err){
        if(err)
            res.send(err);

        res.json({ message : success });
    })
};
