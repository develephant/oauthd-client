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
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'tpl/home.html',
    controller: "MainController"
  });
}])

.run(['$state', function( $state ) {
  $state.go('home');
}]);
