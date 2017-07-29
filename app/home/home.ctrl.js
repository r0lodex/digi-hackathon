(function() {
    'use strict';

    var rr = angular.module('raidrescue');
    rr.requires.push('raidrescue.home');

    angular
        .module('raidrescue.home', [])
        .controller('homeCtrl', home);

    home.$inject = [];

    function home() {
        var home = this;
    }
})();