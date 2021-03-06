//----------------------------------------------------------------------------------------------------------------------
// Controllers for EPIC projects
//
// @module controllers.js
//----------------------------------------------------------------------------------------------------------------------

var Controllers = angular.module('projects.controllers', []);

//----------------------------------------------------------------------------------------------------------------------

Controllers.controller('ProjectCtrl', function($scope, $routeParams)
{
    $scope.owner = $routeParams.owner;
    $scope.$root.$broadcast('owner', $routeParams.owner);

    $scope.project = $routeParams.project;
    $scope.$root.$broadcast('project', $routeParams.project);
});

//----------------------------------------------------------------------------------------------------------------------
