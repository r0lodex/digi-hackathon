(function() {
    'use strict';

    var rr = angular.module('raidrescue');
    rr.requires.push('raidrescue.start');

    angular
        .module('raidrescue.start', ['ui.router'])
        .controller('startCtrl', start);

    start.$inject = ['$timeout', '$state', '$scope'];

    function start($timeout, $state, $scope) {
        var start = this;

        $scope.$on('sliderChanged', function(event, value) {
            console.log(value);
        });

        if (!localStorage.profile) {
            $('.modal#getting-started').modal({
                backdrop: 'static',
                keyboard: false
            });
        } else {
            $state.go('home');
        }

        start.starting = starting;

        function starting() {
            var profile = {
                name: start.username,
                hero: 1
            }
            localStorage.profile = localStorage.profile || JSON.stringify(profile);
            $('.modal#getting-started').modal('hide');
            $state.go('home');
        }
    }
})();