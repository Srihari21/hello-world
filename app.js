var app = angular.module("myApp",['reviewApp']);

app.factory('Data', function(){
	return {message:'this is a message'}
})

app.controller('FirstCtrl',['$scope','Data', function($scope, Data){
	$scope.data = Data;
}])


app.controller('SecondCtrl',['$scope','Data', function($scope, Data){
	$scope.data = Data;
}])