(function() {
    'use strict';

    var rr = angular.module('raidrescue');
    rr.requires.push('raidrescue.shop');

    angular
        .module('raidrescue.shop', ['ui.router'])
        .controller('shopCtrl', shop);

    shop.$inject = ['$state', '$rootScope'];

    function shop($state, $rootScope) {
        var shop = this;
    }
})();