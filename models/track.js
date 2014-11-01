var mongoose = require('mongoose');

var trackSchema = mongoose.Schema({
    dj_id : { Type: Number },
    skip_count : { Type: Number },
    // essential soundcloud items
    uri : { Type: String },
    title : { Type: String },
    username : { Type: String },
    artwork_url : { Type: String },
    avatar_url : { Type: String }
}),
    Track = mongoose.model('Track', trackSchema);

module.exports = Track;
