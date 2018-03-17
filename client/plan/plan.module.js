var angular = require('angular')

angular.module('planModule', [])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {


        $stateProvider.state({
            name: 'plan',
            url: '/plan',
            resolve: {
            },
            component: 'planComponent'
        });



    }])




    .component('planComponent', {
        bindings: {  },
        require: { app: '^appComponent' },
        template: require('./plan.component.html'),
        controller: ['$http', function ($http) {
            this.$onInit = function () {
            }
        }]
    });

