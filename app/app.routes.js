(function() {
    'use strict';

    var rr = angular.module('raidrescue');
    rr.requires.push('raidrescue.routes');

    angular
        .module('raidrescue.routes', ['ui.router'])
        .config(Routes);

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('start', {
                url: '/',
                templateUrl: '/app/start/start.html',
                controller: 'startCtrl',
                controllerAs: 'start'
            })
            .state('home', {
                url: '/home',
                templateUrl: '/app/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            })

        $urlRouterProvider.otherwise('/');
    }

})();