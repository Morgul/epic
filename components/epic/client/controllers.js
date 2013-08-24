//----------------------------------------------------------------------------------------------------------------------
// Controllers for the main EPIC app.
//
// @module controllers.js
//----------------------------------------------------------------------------------------------------------------------

var Controllers = angular.module('epic.controllers', []);

//----------------------------------------------------------------------------------------------------------------------

Controllers.controller('HeaderCtrl', function($scope)
{
    $scope.$on('owner', function(evt, owner)
    {
        $scope.owner = owner;
    });

    $scope.$on('project', function(evt, project)
    {
        $scope.project = project;
    });
});

Controllers.controller('WelcomeCtrl', function($scope)
{
    $scope.$root.$broadcast('owner');
    $scope.$root.$broadcast('project');
});

//----------------------------------------------------------------------------------------------------------------------