(function() {
    'use strict';

    angular
        .module('raidrescue', [])
        .controller('rootCtrl', rootCtrl)
        .directive('slider', slider);

    rootCtrl.$inject = ['$rootScope'];
    slider.$inject = ['$timeout'];

    function rootCtrl($rootScope) {
        var root = this;

        root.rootscope = $rootScope;

        root.promptMsg = '';
    }

    function slider($timeout) {
        return {
            restrict: 'A',
            scope: { options: '=', current: '=' },
            link: function(scope, element, attrs) {
                $timeout(function() {
                    var options = scope.options;
                    options.onDragged = draggedCallback;
                    $(element).owlCarousel(options);
                    $('.owl-carousel').show();
                }, 500);

                function draggedCallback(event) {
                    // some handling because of center mode
                    if (event.item.index == 1) {
                        scope.current = event.item.count - 1;
                    } else if (event.item.index == event.item.count + 2) {
                        scope.current = 0;
                    } else {
                        scope.current = event.item.index - 2;
                    }
                    scope.$emit('sliderChanged', scope.current);
                }
            },
            controller: ['$scope',function($scope) {
                $timeout(function() {
                    $scope.$emit('sliderChanged', $scope.current);
                });
            }]
        }
    }
})();