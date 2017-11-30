// two.controller.js
// This file loads the 'myApp' module w/o having to inclue
// any dependencies. 
// This was really a test for Sonar scans.

(function() {
  'use strict';
  
  angular.module('myApp')
  .controller('TwoController', ['$scope',TwoController]);
  
  function TwoController($scope) {
    $scope.message = 'Hello from two controller.';
  }

})();
