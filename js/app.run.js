(function () {
    'use strict';
    angular.module('app').run(function name($rootScope) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) { 
            $rootScope.spinner.removeClass('ng-hide');

        });

        $rootScope.$on('$stateContentLoaded', function (event) {  
            $rootScope.spinner.addClass('ng-hide');
            
        });
    });
    
}());
