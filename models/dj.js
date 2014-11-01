var mongoose = require('mongoose');

var djSchema = mongoose.Schema({
    dj_id : { type: Number }
}),
    Dj = mongoose.model('Dj', djSchema);

module.exports = Dj;
