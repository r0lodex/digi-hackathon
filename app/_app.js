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
        root.stream = { channel: 'dghcktn_channel' };
        root.rootscope.publish = _publish;
        root.promptMsg = '';
        $rootScope.selectedHero = '';

        root.profile = localStorage.profile ? JSON.parse(localStorage.profile) : {};
        if (root.profile) {
            $rootScope.selectedHero = root.profile.hero;
        }

        var pubnub = new PubNub({
            publishKey: 'pub-c-38ebf9a8-1a5a-4914-91fa-ae24e95a844e',
            subscribeKey: 'sub-c-5b21cd86-747c-11e7-8153-0619f8945a4f'
        });

        function _publish(message, callback) {
            root.stream.message = message;
            pubnub.publish(root.stream, function(status, response) {
                // console.log(status, response);
                if (callback) {
                    callback(status, response);
                }
            });
        }
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
                    $(element).show();
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