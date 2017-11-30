
(function() {

'use strict';

angular.module('myApp')
.controller('ThreeController', ['$scope','$http',ThreeController]);

function ThreeController($scope, $http) {
  
  $scope.message = 'Three Controller';
  
  
};

})();