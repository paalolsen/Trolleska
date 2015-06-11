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
            templateUrl: 'views/Privat/ByggeBolig.html'
        })
        .when('/skjemaerprivat', {
            templateUrl: 'views/Privat/SkjemaerPrivat.html'
        })    
       .when('/enoktips', {
            templateUrl: 'views/Privat/EnokTips.html'
        })
        /*###################*/
        /*      Fane Bedrift */
        /*###################*/
       .when('/serviceavtaler', {
            templateUrl: 'views/Bedrift/ServiceAvtaler.html'
        })
        .when('/skjemaerbedrift', {
            templateUrl: 'views/Bedrift/SkjemaerBedrift.html'
        })
    
        /*######################*/
        /*      Fane Referanser */
        /*######################*/  
        .when('/referanser', {
            templateUrl: 'views/Referanser.html'
        })
        /*######################*/
        /*      Fane Autorisasjoner */
        /*######################*/          
    
        .when('/autorisasjoner', {
            templateUrl: 'views/Autorisasjoner.html'
        })
        /*###################*/
        /*      Fane Om Oss  */
        /*###################*/
       .when('/ansatte', {
            templateUrl: 'views/OmOss/Ansatte.html'
        })
        .when('/kontaktoss', {
            templateUrl: 'views/OmOss/KontaktOss.html'
        })
        .when('/omseko', {
            templateUrl: 'views/OmOss/OmSeko.html'
        })    
        /*###################*/
        /*      Default      */
        /*###################*/
        .otherwise({
            redirectTo: '/'
        });
}]);

/*###################*/
/*   MOCKING JSON    */
/*###################*/

sekoApp.controller("AnsatteController", ['$scope','$http', function($scope, $http) { 
	$http.get('json/ansatte.json').success (function(data){ 
		$scope.ansatte = data;         
  
        $scope.currentRole = '0';
        $scope.CreateHeader = function(role) {
            showHeader = (role!=$scope.currentRole); 
            $scope.currentRole = role;
      
            return showHeader;
        }
        
             
        /*
        $scope.changedValue = "";

        $scope.isChanged = function (value) {           
            
            if(value == '1')
                alert('VALUE ER 1: ' + value);
            
            if (value == $scope.changedValue) {                
                return false;
            } else {
                $scope.changedValue = value;
                alert('NY: ' + value);
                return true;
            }
            
        };
        */
        
		}); 
	}] 
);

sekoApp.controller("KarusellController", ['$scope','$http', function($scope, $http) { 
	$http.get('json/karusell.json').success (function(data){ 
		$scope.karusell = data; 
		}); 
	}] 
);

sekoApp.controller("ReferanserController", ['$scope','$http', function($scope, $http) { 
	$http.get('json/referanser.json').success (function(data){ 
		$scope.referanser = data; 
		}); 
	}] 
);

/*EKS: <li ng-repeat="item in items | orderObjectBy:'fornavn':true">{{ item.color }}</li>*/
/*     fornavn = felt det skal sorteres på */
/*     true    = trigger for å reversere listen. Sett false for stigende*/

sekoApp.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});



