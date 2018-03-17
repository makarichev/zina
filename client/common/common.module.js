var angular = require('angular');

angular.module("commonModule", [])
    .factory("$test", function() {
        return {a:'a', b:'b'}
    })