(function() {
    'use strict';

    angular
        .module('raidrescue', [])
        .controller('rrController', rrController)
        .directive('slider', slider);

    slider.$inject = ['$timeout'];

    function rrController() {
        var rrCtrl = this;
    }

    function slider($timeout) {
        return {
            restrict: 'A',
            scope: { options: '=' },
            link: function(scope, element, attrs) {
                $timeout(function() {
                    $(element).owlCarousel(scope.options)
                });
            }
        }
    }
})();