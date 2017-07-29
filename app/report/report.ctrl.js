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

        report.publish = publish;
        report.form = {
            location: '123.112,1231.111',
            case: 2,
        }

        function publish(root) {
            if (!report.form.location) {
                console.log('location not detected');
                return;
            }
            root.rootscope.publish(JSON.stringify(report.form));
        }
    }
})();