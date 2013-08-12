//----------------------------------------------------------------------------------------------------------------------
// Main EPIC angular application
//
// @module app.js
//----------------------------------------------------------------------------------------------------------------------

window.app = angular.module("epic", ['ngResource', 'epic.controllers', 'projects.controllers', 'ui.bootstrap'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {templateUrl: '/epic/partials/welcome.html',   controller: 'WelcomeCtrl'})
            .when('/:user/:project', {templateUrl: '/projects/partials/project.html',   controller: 'ProjectCtrl'})
            .otherwise({redirectTo: '/'});
    }]);
//----------------------------------------------------------------------------------------------------------------------