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
                templateUrl: '/app/start.html',
                controller: '',
                controllerAs: ''
            })
    }

})();