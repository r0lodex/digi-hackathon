(function() {
    'use strict';

    var rr = angular.module('raidrescue');
    rr.requires.push('raidrescue.controllers');

    angular
        .module('raidrescue.controllers', [])
        .controller('start', startCtrl);

    startCtrl.$inject = ['$timeout'];

    function startCtrl($timeout) {
        var start = this;
    }
})();