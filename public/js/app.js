/**
 * Created by guillermo on 22/04/2014.
 */
var app = angular.module('FoursquareApp', ['ngRoute', 'ngResource'/*, 'ui.bootstrap'*/]);
app.config(function ($routeProvider) {

    $routeProvider.when("/explore", {
        controller: "placesExplorerController",
        templateUrl: "views/placesResult.html"
    });

    $routeProvider.otherwise({ redirectTo: "/explore" });
});