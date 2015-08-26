
var app = angular.module('app',
[
  'ngMaterial',
  'ngStorage',
  'ngAnimate',
  'ngAria',
  'ui.router'
])

.controller('DashboardController', ['$scope',
function( $scope ) {

}])

.config(['$stateProvider',
function( $stateProvider ) {
  $stateProvider
  .state("dashboard", function( req, res ) {
    templateUrl = "tpl/dashboard_tpl.html",
    controller = "DashboardController"
  });
}])



.controller('MainController', ['$scope',
function( $scope ) {
    $scope.title = "Happy";
}])

.run(['$state', function( $state ) {
  $state.go('dashboard');
}]);

return app;
