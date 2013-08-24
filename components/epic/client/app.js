//----------------------------------------------------------------------------------------------------------------------
// Main EPIC angular application
//
// @module app.js
//----------------------------------------------------------------------------------------------------------------------

window.app = angular.module("epic", ['ngResource', 'ngRoute', 'epic.controllers', 'projects.controllers', 'accounts.controllers', 'ui.bootstrap'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {templateUrl: '/epic/partials/welcome.html',   controller: 'WelcomeCtrl'})
            .when('/:owner', {templateUrl: '/account/partials/profile.html',   controller: 'ProfileCtrl'})
            .when('/:owner/:project', {templateUrl: '/projects/partials/project.html',   controller: 'ProjectCtrl'})
            .otherwise({redirectTo: '/'});
    }]);
//----------------------------------------------------------------------------------------------------------------------