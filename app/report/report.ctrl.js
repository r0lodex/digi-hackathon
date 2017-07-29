(function() {
    'use strict';

    var rr = angular.module('raidrescue');
    rr.requires.push('raidrescue.report');

    angular
        .module('raidrescue.report', ['ui.router'])
        .controller('reportCtrl', report);

    report.$inject = ['$state', '$rootScope'];

    function report($state, $rootScope) {
        var report = this;
    }
})();