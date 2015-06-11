var sekoApp = angular.module('sekoApp', ['ngRoute']);
sekoApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .when('/ansatte', {
            templateUrl: 'views/ansatte.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);