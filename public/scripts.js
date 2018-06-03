

   src='https://ajax.googleapis.com/ajax/libs/angularjs/1.6.2/angular.min.js'

var MeanApp = angular.module("MeanApp",[]);

   
    var objeto ={nombre:"corchi"};

 MeanApp.controller('MeanCtrl', function($http, $scope){
   $http.get("/users/all/json")
     .then( function (data){
      
       $scope.users = data;
       console.log(data);

     })
 
 });
  
  MeanApp.controller('MeanModel', function($scope){
     
    $scope.model = objeto;
      console.log(objeto);
    })

