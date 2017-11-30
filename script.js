// Code goes here

//======================================
// Templates - Phone-List
//======================================
var app = (function() {

  var myApp = angular.module('myApp', ['phoneList']);
  
  var MainController = function($scope, $http) {
      
    var onUserComplete = function(res) {
      $scope.user = res.data;
    };
      
    var onUserError = function(reason) {
      $scope.error = "Failed to get user";
    };
    
    $scope.searchUser = function() {
      var u = $scope.username;
      $http.get('https://api.github.com/users/' + u)
        .then(onUserComplete, onUserError);
    };
    
    $scope.username = 'angular';
    $scope.message = 'GitHub Viewer';
    
  };

  myApp.controller('MainController', ["$scope", "$http", MainController]);
  
  return myApp;
}(app || {}));


//======================================
// Modules
//======================================
/*
var app = (function() {

  var app = angular.module('myApp', []);
  
  var MainController = function($scope, $http) {
      
    var onUserComplete = function(res) {
      $scope.user = res.data;
    };
      
    var onUserError = function(reason) {
      $scope.error = "Failed to get user";
    };
    
    $scope.searchUser = function() {
      var u = $scope.username;
      $http.get('https://api.github.com/users/' + u)
        .then(onUserComplete, onUserError);
    };
    
    $scope.username = 'angular';
    $scope.message = 'GitHub Viewer';
    
  };

  app.controller('MainController', ["$scope", "$http", MainController]);
  
  return app;
}(app || {}));
*/

//======================================
// Main Controller with $http
//======================================
/*
var app = angular.module('myApp', []);

app.controller('MainController', function($scope, $http) {
    
  var onUserComplete = function(res) {
    $scope.user = res.data;
  };
    
  var onUserError = function(reason) {
    $scope.error = "Failed to get user";
  }
    
  $http.get('https://api.github.com/users/robconery')
    .then(onUserComplete, onUserError);
  
  //$scope.message = 'test message';
  //$scope.person = person;
});
*/  
  
//======================================
// Main Controller
//======================================
/*
var app = angular.module('myApp', []);
app.controller('MainController', function($scope) {
  
  var person = {
    fname: 'Bill',
    lname: 'Billy',
    //image: 'http://odetocode.com/Images/scott_allen_2.jpg'
  };
  
  $scope.message = 'test message';
  $scope.person = person;
});
*/

//======================================
// Functions to Avoid Global Variables
//======================================
/*
(function() {
  var createWorker = function() {
    
    // private functions
    var task1 = function() {
      console.log('task1');
    }
  
    var task2 = function() {
      console.log('task2');
    }
    
    return {
      job1: task1,
      job2: task2
    };
  };
  
  var worker = createWorker();
  worker.job1();
  worker.job2();
}());
*/

//=======================
// Function Modules
//=======================
/*
var createWorker = function() {
  
  // private functions
  var task1 = function() {
    console.log('task1');
  }

  var task2 = function() {
    console.log('task2');
  }
  
  return {
    job1: task1,
    job2: task2
  };
};

var worker = createWorker();
worker.job1();
worker.job2();
*/

//=======================
// Function Abstraction
//=======================
/*
var work = function() {
  console.log('some work!');
};

var doWork = function(f) {
  console.log('doing work!');
  try {
    f();
  }
  catch(ex) {
    console.log(ex);
  }
  console.log('did work!');
};

doWork(work);
*/