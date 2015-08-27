


app = angular.module("oauthd", ["ui.router"]).config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
	($stateProvider, $urlRouterProvider, $locationProvider) ->

		$stateProvider.state 'dashboard',
			url: '/',
			templateUrl: '/templates/dashboard.html'
			controller: 'MainController'

		$urlRouterProvider.when "", "dashboard"

		$urlRouterProvider.otherwise '/login'

		$locationProvider.html5Mode(true)
])

app.run(["$rootScope",
	($rootScope) ->
		window.scope = $rootScope

])
