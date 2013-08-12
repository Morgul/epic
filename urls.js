//----------------------------------------------------------------------------------------------------------------------
// URL Routing for EPIC.
//
// @module urls.js
//----------------------------------------------------------------------------------------------------------------------

var path = require('path');
var app = require('omega-wf').app;
var auth = require('omega-wf').auth;
var views = require('./lib/views');

//----------------------------------------------------------------------------------------------------------------------

app.router.add(
    // Static Files
    {
        url: '/static/*',
        path: path.join(__dirname, 'static')
    },
    {
        url: '/vendor/*',
        path: path.join(__dirname, 'vendor')
    },

    // Authentication

    /*
    {
        url:'/auth/login-persona',
        post: function(req, resp)
        {
            auth.authenticate('persona', {
                successRedirect: '/',
                failureRedirect: '/'
            })(req, resp, function(error)
            {
                console.log("Auth Error!", error);
            });
        }
    },
    {
        url: '/auth/logout-persona',
        post: function(request, response)
        {
            request.logout();
            response.redirect('/');
        } // end post
    },
    */
    {
        url: /^\/(?!admin\/|omega\/|system\/)/,
        get: views.index
    }
);

//----------------------------------------------------------------------------------------------------------------------