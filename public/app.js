
angular.module('app',
[
  'ngMaterial',
  'ngStorage',
  'ngAnimate',
  'ngAria',
  'ui.router',
  'app.controllers'
])

.config(['$stateProvider','$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider.state("dashboard", {
    templateUrl: "tpl/dashboard_tpl.html",
    controller: "DashboardController"
  });
}])

.run(['$state', function( $state ) {
  $state.go('dashboard');
}]);
