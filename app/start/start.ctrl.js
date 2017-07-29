(function() {
    'use strict';

    var rr = angular.module('raidrescue');
    rr.requires.push('raidrescue.start');

    angular
        .module('raidrescue.start', [])
        .controller('startCtrl', start);

    start.$inject = ['$timeout'];

    function start($timeout) {
        var start = this;
    }
})();