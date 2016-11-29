// script.js

    // create the module and name it scotchApp
    var worldApp = angular.module('worldApp', ['ngRoute']);

    worldApp.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);



    worldApp.config(function($routeProvider) {

       $routeProvider

           // route for the home page
           .when('/', {
               templateUrl : 'pages/home.html',
               controller  : 'mainController'
           })

           // route for the about page
           .when('/about', {
               templateUrl : 'pages/about.html',
               controller  : 'aboutController'
           })

           // route for the contact page
           .when('/contact', {
               templateUrl : 'pages/contact.html',
               controller  : 'contactController'
           })
           .when('/editor', {
               templateUrl : 'pages/editor.html',
               controller  : 'contactController'
           });
   });