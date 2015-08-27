angular.module('oauthd',
[
  'ui.router',
  'ngMaterial',
  'ngMdIcons',
  'ngStorage',
  'ngAnimate',
  'ngAria',
  'oauthd.controllers'
])

.config(['$stateProvider', function( $stateProvider ) {
  $stateProvider.state('client', {
    url: '/client',
    templateUrl: 'tpl/client.html',
    controller: "MainController"
  });
}])

.run(['$state', function( $state ) {
  $state.go('client');
}]);
