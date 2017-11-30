// This file showcases how to do angular templates and components
// phone-list.component.js

// added data
// added images
// added filter

'use strict';

//var app = app || {};
//app.component('phoneList', {

angular.module('phoneList')
  .component('phoneList', {
    templateUrl: 'phone-list.template.html',
    /*
    template: 
      '<ul>' +
        '<li ng-repeat="phone in $ctrl.phones">' +
          '{{phone.name}} - {{phone.snippet}}' +
        '</li>' +
      '</ul>',
    */
    controller: ['$http', function PhoneListController($http) {
      // try with $scope
      
      var me = this;
      me.orderProp = 'age';
      
      $http.get('https://angular.github.io/angular-phonecat/step-8/app/phones/phones.json')
      .then(function(res) {
         me.phones = res.data; 
      })
      .catch(function(err) {
        console.error(err);
      });
      
      /*
      this.phones = [{
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.',
        age: 4
      }, {
        name: 'Galaxy S7 Edge',
        snippet: 'The best of the 7th gen phones.',
        age: 3
      }, {
        name: 'Galaxy S8 Plus',
        snippet: 'The best of the best from all generations.',
        age: 2
      }, {
        name: 'Pixel 2S',
        snippet: 'Fast just got faster with Nexus S.',
        age: 1
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.',
        age: 5
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.',
        age: 6
      }];

      this.orderProp = 'age';
      */
    }]
  });