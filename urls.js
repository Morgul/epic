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
        url: '/client/*',
        path: path.join(__dirname, 'client')
    },
    {
        url: '/partials/epic*',
        path: path.join(__dirname, 'client/epic/partials')
    },
    {
        url: '/partials/projects*',
        path: path.join(__dirname, 'client/projects/partials')
    },
    {
        url: '/partials/*',
        path: path.join(__dirname, 'client/partials')
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