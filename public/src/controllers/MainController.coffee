async = require 'async'

module.exports = (app) ->
  app.controller('MainController', ['$scope',
    ($scope) ->
      $scope.title = "MoooShoo"
  ])
