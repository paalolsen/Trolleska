var sekoApp = angular.module('sekoApp', ['ngRoute']);

    sekoApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/Hjem.html'
        })
        /*###################*/
        /*      Fane Hjem    */
        /*###################*/
        .when('/hjem', {
            templateUrl: 'views/Hjem.html'
        })
        /*###################*/
        /*      Fane Privat  */
        /*###################*/
       .when('/byggebolig', {
            templateUrl: 'views/privat/ByggeBolig.html'
        })
       .when('/enoktips', {
            templateUrl: 'views/privat/EnokTips.html'
        })
        /*###################*/
        /*      Fane Bedrift */
        /*###################*/
       .when('/serviceavtaler', {
            templateUrl: 'views/bedrift/ServiceAvtaler.html'
        })
        /*###################*/
        /*      Fane Skjemaer*/
        /*###################*/
       .when('/skjemaer', {
            templateUrl: 'views/skjemaer/skjemaer.html'
        })
        /*###################*/
        /*      Fane Om Oss  */
        /*###################*/
       .when('/ansatte', {
            templateUrl: 'views/OmOss/Ansatte.html'
        })
        .when('/referanser', {
            templateUrl: 'views/OmOss/Referanser.html'
        })
        .when('/autorisasjoner', {
            templateUrl: 'views/OmOss/Autorisasjoner.html'
        })
        .when('/aapningstider', {
            templateUrl: 'views/OmOss/Aapningstider.html'
        })
        .when('/omseko', {
            templateUrl: 'views/OmOss/OmSeko.html'
        })
        .when('/kontaktoss', {
            templateUrl: 'views/OmOss/KontaktOss.html'
        })
        /*###################*/
        /*      Default      */
        /*###################*/
        .otherwise({
            redirectTo: '/'
        });
}]);


