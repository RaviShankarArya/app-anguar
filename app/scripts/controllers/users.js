'use strict';

var app = angular.module('myApp', []);
app.controller('validateCtrl', 'Userservice', function($scope, $http, Userservice) {
    $scope.frm = {}
    $scope.frm.first_name = 'Ravi';
    $scope.frm.last_name = 'Shankar';
    $scope.frm.email = 'ravishankararya89@gmail.com';
    $scope.frm.password = 'Password1';
    $scope.frm.password_confirmation = 'Password1';
    $scope.frm.phone = '990-191-6142';


    var payload = {
      "user": ""
    }

    payload.user = $scope.frm


    $scope.save = function (){
      Userservice.square(2);

    // $http.post("http://localhost:3000/api/v1/auth/users", payload)
    //.success(function(response) {
      //console.log(response);
    //});
    };
});
