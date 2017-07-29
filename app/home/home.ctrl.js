(function() {
    'use strict';

    var rr = angular.module('raidrescue');
    rr.requires.push('raidrescue.home');

    angular
        .module('raidrescue.home', ['ui.router'])
        .controller('homeCtrl', home);

    home.$inject = ['$state', '$rootScope'];

    function home($state, $rootScope) {
        var home = this;

        home.changeUser = changeUser;
        home.showShop = showShop;
        home.showStat = showStat;
        home.profile = JSON.parse(localStorage.profile);

        if (!home.profile) {
            $state.go('start');
        } else {
            $rootScope.selectedHero = home.profile.hero;
        }

        function changeUser() {
            home.profile = localStorage.profile = '';
            $('.modal#modal-setting').modal('hide');
            $state.go('start');
        }
        function showShop() {
            $('.modal#modal-showShop').modal('show');
        }
        function showStat() {
            $('.modal#modal-showStat').modal('show');
        }
    }
})();