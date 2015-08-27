angular.module 'oauthd' ['$stateProvider',
( $stateProvider ) ->
  $stateProvider.state 'dashboard' {
    templateUrl: 'templates/dashboard.html',
    controller: 'MainController'
  }
]
