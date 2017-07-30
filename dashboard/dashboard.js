(function() {
    'use strict';

    angular
        .module('dashboard', ['ngMap'])
        .controller('dashCtrl', dashCtrl);

    dashCtrl.$inject = ['NgMap'];

    function dashCtrl(NgMap) {
        var dash = this;
        dash.getMarkers = getMarkers;
        dash.positions = [
            { pos: [3.0682165,101.5676738] },
            { pos: [3.0655467,101.5724599] },
        ];
        dash.target = [];

        var pubnub = new PubNub({
            publishKey: 'pub-c-38ebf9a8-1a5a-4914-91fa-ae24e95a844e',
            subscribeKey: 'sub-c-5b21cd86-747c-11e7-8153-0619f8945a4f'
        });

        pubnub.addListener({
            status: function(statusEvent) {
                if (statusEvent.category === "PNConnectedCategory") {}
            },
            message: function(message) {
                dash.getMarkers(message.message)
            },
            presence: function(presenceEvent) {
                // handle presence
            }
        })      

        pubnub.subscribe({
            channels: ['dghcktn_channel']
        });


        NgMap.getMap().then(function(map) {
            dash.map = map;
        });

        function getMarkers(stream_data) {
            console.log(dash.positions.length);

            var raw = { pos: JSON.parse(stream_data) }
            dash.positions.push(raw);
            
            if (dash.positions.length == 10) {
                dash.target.push({ pos: [3.0656373,101.5694867] });
            }
            NgMap.getMap().then(function(map) {
                dash.map = map;
            });
        }
    }    
})();