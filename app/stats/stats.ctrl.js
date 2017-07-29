(function() {
    'use strict';

    var rr = angular.module('raidrescue');
    rr.requires.push('raidrescue.stats');

    angular
        .module('raidrescue.stats', ['ui.router'])
        .controller('statsCtrl', stats);

    stats.$inject = ['$state', '$rootScope'];

    function stats($state, $rootScope) {
        var stats = this;
    }
})();