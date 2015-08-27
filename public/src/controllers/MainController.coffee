async = require 'async'

module.exports = (app) ->
  app.controller('MainController', ['$state'
    ($state) ->
      $state.title = "MoooShoo"
  ])
