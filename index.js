var config = require('./config');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var fs = require('fs');

var apiRoutes = require('./routes/api');

var app = express();

// REGISTER OUR ROUTES
app.use(express.static('build'));
app.use('/api', apiRoutes);

    // API Routes so far
    // '/api/staticdata/[host]/[region]/champion'
    // '/api/staticdata/[host]/[region]/item'
    //
    // where [host] can be 'na.api.pvp.net'
    // and [region] can be 'na'


app.use(favicon(__dirname + '/favicon.ico'));

// START THE SERVER
app.listen(config.port);
console.log('Magic happens on port ' + config.port);
