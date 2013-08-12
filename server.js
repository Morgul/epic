// ---------------------------------------------------------------------------------------------------------------------
// Main epic module.
//
// @module server.js
// ---------------------------------------------------------------------------------------------------------------------

var fs = require('fs');
var path = require('path');

var app = require('omega-wf').app;

// ---------------------------------------------------------------------------------------------------------------------

// Automatically load all components
var dirs = fs.readdirSync('./components');
dirs.forEach(function(cmp)
{
    cmp = './' + path.join('components', cmp);

    var stat = fs.statSync(cmp);
    if(stat.isDirectory())
    {
        require(cmp);
    } // end if
});

// ---------------------------------------------------------------------------------------------------------------------

// Require the rest of our urls after loading components
require('./urls');

// Set the application's name
app.setName('EPIC');

// Start the omega-wf app.
app.listen();

// ---------------------------------------------------------------------------------------------------------------------
