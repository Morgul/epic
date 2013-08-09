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
            .when('/', {templateUrl: '/partials/epic/welcome.html',   controller: 'WelcomeCtrl'})
            .when('/:user/:project', {templateUrl: '/partials/projects/project.html',   controller: 'ProjectCtrl'})
            .otherwise({redirectTo: '/'});
    }]);
//----------------------------------------------------------------------------------------------------------------------