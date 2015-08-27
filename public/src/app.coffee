angular.module('oauthd',
[
  'ui.router',
  'ngMaterial',
  'ngAria',
  'ngAnimate',
  'ngStorage',
  'ngMdIcons',
  'oauthd.controllers'
])

.config(['$stateProvider', function( $stateProvider ) {
    $stateProvider.state('dashboard', {
      templateUrl: "templates/dashboard.html",
      controller: "MainController"
    });
}])

.run(['$state', function( $state ) {
  $state.go('dashboard');
}]);
