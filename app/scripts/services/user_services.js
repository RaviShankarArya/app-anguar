'use strict';

/* Services */

var userServices = angular.module('myApp', []);

userServices.factory('Userservice', ['$http',
  function($http){
    this.square = function (a) { return a*a};
    }
  }]);