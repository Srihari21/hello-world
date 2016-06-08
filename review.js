var app = angular.module("reviewApp",[]);

app.controller('MyController', ['$scope', function($scope){
	
	$scope.form = {};

	$scope.name='sri hari';
	$scope.fnam='sri';
	$scope.lnam='hari';
	$scope.fullnam = function(){
		return $scope.fnam + $scope.lnam;
	};
	$scope.employees = [
		{
			empcode: 4878,
			salary: 38000
		},
		{
			empcode: 4879,
			salary: 35000
		},
		{
			empcode: 4880,
			salary: 30000
		}
	];

	$scope.count = 0;
	$scope.show = true;
	$scope.toggleShow = function(){
		$scope.show = !$scope.show;
	};

	$scope.reviews = [
		{
			comment: 'this is the second review',
			by: 'user1'
		},
		{
			comment: 'this is the second review',
			by: 'user2'
		}
	];

	$scope.addReview = function(){
		$scope.reviews.push($scope.form);
		$scope.form = {};
	};	

}]);

app.directive('userinformartion', function(){
	return {
		restrict: 'A',
		templateUrl: 'dummy.html'
	};
});