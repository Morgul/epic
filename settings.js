//----------------------------------------------------------------------------------------------------------------------
// Settings for the epic application.
//
// @module settings.js
//----------------------------------------------------------------------------------------------------------------------

var connect = require('connect');

//----------------------------------------------------------------------------------------------------------------------

// Enables omega-wf debugging helpers. Disable this for production!
DEBUG = true;

// Omega will send email to the following addresses whenever an error occurs.
admins = [
    //["Your Name", "your.name@example.com"]
];

// Server settings
listenAddress = "0.0.0.0";
listenPort = 9000;

// Used for secure sessions. This should be unique per omega-wf application.
secret = "b451f845b896d36bc1bbd277f9258fa7e6c95f4e52dd81ebe6b1b637ca780c8482ee9461f2d14998ded86109d71fe4ea";

// Connect Middleware
middleware = [
    // Standard connect middleware
    connect.query()
];

//----------------------------------------------------------------------------------------------------------------------
