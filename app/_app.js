(function() {
    'use strict';

    angular
        .module('raidrescue', [])
        .directive('slider', slider);

    slider.$inject = ['$timeout'];

    function slider($timeout) {
        return {
            restrict: 'A',
            scope: { options: '=', current: '=' },
            link: function(scope, element, attrs) {
                $timeout(function() {
                    var options = scope.options;
                    options.onDragged = draggedCallback;
                    $(element).owlCarousel(options);
                });

                function draggedCallback(event) {
                    scope.current = event.item.index - event.item.count;
                    scope.$emit('sliderChanged', scope.current);
                }
            },
            controller: ['$scope',function($scope) {
                $timeout(function() {
                    $scope.$emit('sliderChanged', $scope.current);
                    console.log($scope.current)
                });
            }]
        }
    }
})();