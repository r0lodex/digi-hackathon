(function() {
    'use strict';

    var rr = angular.module('raidrescue');
    rr.requires.push('raidrescue.report');

    angular
        .module('raidrescue.report', ['ui.router'])
        .controller('reportCtrl', report);

    report.$inject = ['$state', '$rootScope'];

    function report($state, $rootScope) {
        var report = this;

        report.mapData = ['[3.065111,101.5673372]',
                        '[3.0681898,101.5682709]',
                        '[3.0689631,101.569723]',
                        '[3.0682088,101.5644919]',
                        '[3.0682088,101.5644919]'];

        report.generateLocation = generateLocation;
        report.publish = publish;
        report.closeModal = closeModal;
        report.form = {
            location: '',
            case: 2,
        }
        report.locationMap = '../images/map/empty.jpg';

        function generateLocation() {
            var random = Math.floor((Math.random() * report.mapData.length));
            report.form.location = report.mapData[random];
            report.locationMap = '../images/map/map-' + random + '.jpg';
        }

        function publish(root) {
            var report = this;
            if (!report.form.location) {
                console.log('location not detected');
                return;
            }

            var callback = function(status, response) {
                $('.modal#prompt').modal('show');
            }

            root.rootscope.publish(JSON.stringify(report.form.location), callback);

            report.generateLocation();
        }

        function closeModal() {
            $('.modal#prompt').modal('hide');
            $state.go('home');
        }
    }
})();