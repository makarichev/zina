var angular = require('angular')

angular.module('rootModule', [])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {


        $stateProvider.state({
            name: 'root',
            url: '/root',
            resolve: {
                settings: ['$http', function ($http) {
                    return $http.get('/api/settings').then(function (res) {
                        return res.data;
                    })
                }]
                ,
                commands: ['$http', function ($http) {
                    return $http.get('/api/commands').then(function (res) {
                        return res.data;
                    })
                }]
            },
            component: 'rootComponent'
        });


        $stateProvider.state({
            name: 'page1',
            url: '/page1',
            component: 'page1Component'
        });

        $stateProvider.state({
            name: 'page2',
            url: '/page2',
            component: 'page2Component'
        });


    }])




    .component('rootComponent', {
        bindings: { commands: "<", settings: '<' },
        require: { app: '^appComponent' },
        template: require('./root.component.html'),
        controller: ['$http', function ($http) {
            this.$onInit = function () {
            }
        }]
    })

    .component('page1Component', {
        template: "page1"
    })

    .component('page2Component', {
        template: "page2"
    })

