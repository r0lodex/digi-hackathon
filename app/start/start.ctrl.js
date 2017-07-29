(function() {
    'use strict';

    var rr = angular.module('raidrescue');
    rr.requires.push('raidrescue.start');

    angular
        .module('raidrescue.start', ['ui.router'])
        .controller('startCtrl', start);

    start.$inject = ['$timeout', '$state'];

    function start($timeout, $state) {
        var start = this;

        if (!localStorage.profile) {
            $('.modal#getting-started').modal('show');
        } else {
            $state.go('home');
        }
    }
})();