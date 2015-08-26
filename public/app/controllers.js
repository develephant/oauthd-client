
var app = angular.module('app',
[
  'ngMaterial',
  'ngStorage',
  'ngAnimate',
  'ngAria',
  'ui.router'
])

.config(['$stateProvider',
function( $stateProvider ) {
  $stateProvider
  .state("dashboard", function( req, res ) {
    url = "/client",
    templateUrl = "tpl/dashboard_tpl.html",
    controller = "DashboardController";
  });
}])

.controller("DashboardController", ['$scope',
function( $scope ) {

}])

.controller('MainController', ['$scope',
function( $scope ) {
    $scope.title = "Happy";
}])

.run(['$state', function( $state ) {
  $state.go('dashboard');
}]);

return app;
