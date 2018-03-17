var angular = require('angular')

angular.module('planModule', [])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {


        $stateProvider.state({
            name: 'plan',
            url: '/plan',
            resolve: {
                rooms: ['$http', function($http) { return $http.get('/api/rooms').then(function(res) {return res.data;})}]
            },
            component: 'planComponent'
        });



    }])




    .component('planComponent', {
        bindings: { rooms: '<'  },
        require: { app: '^appComponent' },
        template: require('./plan.component.html'),
        controller: ['$http', function ($http) {
            this.$onInit = function () {
            }
        }]
    });

