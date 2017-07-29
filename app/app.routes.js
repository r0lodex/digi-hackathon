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
            .state('report', {
                url: '/report',
                templateUrl: '/app/report/report.html',
                controller: 'reportCtrl',
                controllerAs: 'report'
            })
            .state('shop', {
                url: '/shop',
                templateUrl: '/app/shop/shop.html',
                controller: 'shopCtrl',
                controllerAs: 'shop'
            })
            .state('stats', {
                url: '/stats',
                templateUrl: '/app/stats/stats.html',
                controller: 'statsCtrl',
                controllerAs: 'stats'
            });

        $urlRouterProvider.otherwise('/');
    }

})();