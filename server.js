var mongoose = require('mongoose'),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000,
    router = express.Router(),
    djRoutes = require('./routes/dj.js'),
    trackRoutes = require('./routes/track.js');

mongoose.connect('mongodb://localhost/scratch');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Server connected to MongoDB');
});

app.use(bodyParser.json());

router.get('/', function(req, res) {
    res.json({ message : 'Welcome to Scratch API!' });
});

// DJ routes
router.route('/dj')
    .post(djRoutes.createDj)
    .delete(djRoutes.deleteDj);

router.route('/dj/:dj_id')
    .get(djRoutes.retrieveDj);

router.route('/dj/:track_id')
    .delete(djRoutes.deleteTrack);

// Track routes
router.route('/track')
    .post(trackRoutes.createTrack)
    .put(trackRoutes.updateTracks);

router.route('/track/:dj_id')
    .get(trackRoutes.retrieveTracks);

app.use('/', router);

app.listen(port);
console.log('Server listening on port: %s', port);
