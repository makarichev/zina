require('bootstrap/dist/css/bootstrap.min.css');
require('font-awesome/css/font-awesome.min.css');

var angular = require('angular')

require('@uirouter/angularjs')
require('angular-ui-bootstrap')
require('./common/common.module.js')
require('./root/root.module.js')
require('./plan/plan.module.js')



var app = angular.module('appModule', ['ui.router', 'ui.bootstrap', 'commonModule', 'rootModule', 'planModule']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/root');
}])

   
app.component('appComponent', {
    bindings:{data:"<", title: "@"},
    template: require('./app.component.html'),
    controller: ['$http', function($http) {
        this.$onInit = function() {
            
        }

        this.log = function(str) {
            console.log(str);
        }
    }]
})




