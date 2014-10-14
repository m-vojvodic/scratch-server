var mongoose = require('mongoose');

var trackSchema = mongoose.Schema({
    dj_id : { Type: Number, required: true },
    track : { Type: Array, default: [] },
    skip_count : { Type: Number, default: 0 })
}),
    Track = mongoose.model(Track, 'trackSchema');

module.exports(Track);
