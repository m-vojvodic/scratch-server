var mongoose = require('mongoose'),
	restify = require('restify'),
	restify.createServer();

mongoose.connect('mongodb://localhost/scratch');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('yay!');
});

connectToDB();
server.use(restify.bodyParser());

// This runs before anything:
server.pre(function(req, res, next) {
    res.setHeader('content-type', 'application/json');
    return next();
});

// routes
var Dj = require('./routes/dj.js');
var Track = require('./routes/track.js');

// DJ routes
server.post('/dj', Dj.createDj);
server.get('/dj', Dj.retrieveDj);
server.delete('/dj:track_id', Dj.deleteTrack);
server.delete('/dj', Dj.deleteDj);

// Track routes
server.post('/track', Track.createTrack);
server.get('/track', Track.retrieveTracks);
server.put('/track', Track.updateTracks);

server.listen(3000, 'localhost', function() {
	console.log('%s is listening at %s on port %d', server.name, server.url, server.port);
});
