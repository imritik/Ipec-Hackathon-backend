const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect("mongodb://ipec:ipec2018@ds249092.mlab.com:49092/ipec"
);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};