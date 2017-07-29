(function() {
    'use strict';

    angular
        .module('raidrescue', [])
        .directive('slider', slider);

    slider.$inject = ['$timeout'];

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