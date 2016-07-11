'use strict';

angular.module('confusionApp',['ngRoute'])
    
    .config(function($routeProvider) {
        $routeProvider
            .when('/contactus', { // route for the contactus page
                templateUrl: 'contctus.html', controller: 'ContactController'
            })
            
            .when('/menu', { // route for the menu page
                templateUrl: 'menu.html', controller: 'MenuController'
            })
            
            .when('/menu/:id', { // route for the dish details page
                templateUrl: 'dishdetail.html', controller: 'DishDetailController'
            })
            
            .otherwise('/contactus');
    })
    
;