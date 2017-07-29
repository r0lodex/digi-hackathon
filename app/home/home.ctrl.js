(function() {
    'use strict';

    var rr = angular.module('raidrescue');
    rr.requires.push('raidrescue.home');

    angular
        .module('raidrescue.home', ['ui.router'])
        .controller('homeCtrl', home);

    home.$inject = ['$state'];

    function home($state) {
        var home = this;

        home.changeUser = changeUser;
        home.profile = JSON.parse(localStorage.profile);

        if (!home.profile) {
            $state.go('start');
        }

        function changeUser() {
            home.profile = localStorage.profile = '';
            $('.modal#modal-setting').modal('hide');
            $state.go('start');
        }
    }
})();