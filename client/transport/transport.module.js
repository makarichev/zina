var angular = require('angular')

angular.module('transportModule', [])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {


        $stateProvider.state({
            name: 'transport',
            url: '/transport',
            resolve: {
                nearest: ['$http', function($http) { return $http.get('/api/nearest').then(function(res) {return res.data;})}]
            },
            component: 'transportComponent'
        });



    }])




    .component('transportComponent', {
        bindings: { nearest: '<'  },
        require: { app: '^appComponent' },
        template: require('./transport.component.html'),
        controller: ['$http', function ($http) {
            var $ctrl = this;

            this.$onInit = function () {
            }

            this.getShedule = function(code) {
                $http.get('/api/shedule', {params: {code: code}}).then(function(res) {
                    $ctrl.shedule = res.data;
                })
            }
        }]
    });

