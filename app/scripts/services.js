'use strict';

angular.module('confusionApp')
    .constant('baseURL', "https://confusion-dsabalete.c9users.io:8081/")
    .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        
        this.getDishes = function() {
        
            return $resource(baseURL+"dishes/:id", null, {'update':{method:'PUT'}});
            
        };

        // implement a function named getPromotion
        // that returns a selected promotion.  
        this.getPromotions = function() {
            
            return $resource(baseURL+"promotions/:id", null, {'update':{method:'PUT'}});
            
        };
        
    }])
    
    .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        
        var corpfac = {};
        
        corpfac.getLeaders = function() {
            return $resource(baseURL+"leadership/:id", null, {'update':{method:'PUT'}});
        };
        
        return corpfac;
        
    }])
    
    .factory('feedbackFactory ', ['$resource', 'baseURL', function($resource, baseURL) {
        
        var fbfac = {};
        
        fbfac.getFeedback = function() {
            return $resource(baseURL+"feedback/:id", {id: '@_id'}, {'update':{method:'PUT'}});    
        };
        
        return fbfac;
        
    }])

;