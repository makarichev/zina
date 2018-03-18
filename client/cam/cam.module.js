var angular = require('angular')
var io = require('socket.io-client')

angular.module('camModule', [])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {


        $stateProvider.state({
            name: 'cam',
            url: '/cam',
            resolve: {
            },
            component: 'camComponent'
        });



    }])




    .component('camComponent', {
        bindings: { },
        require: { app: '^appComponent' },
        template: require('./cam.component.html'),
        controller: ['$http', function ($http) {
            var $ctrl = this;

            this.$onInit = function () {
                var socket = io('http://server:3000');
                console.log('emit')
                socket.emit('client', { my: 'data' });
         


            }

        }]
    });

