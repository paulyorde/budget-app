angular.
  module('App').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/bank', {
          template: '<bank></bank>'
        }).
        when('/budget', {
          template: '<budget></budget>'
        }).
        otherwise('/');
    }
  ]);