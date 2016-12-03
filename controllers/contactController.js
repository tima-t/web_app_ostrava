
    worldApp.controller('contactController', function($scope) {
        $scope.message = 'Feedback';
		$scope.fName ="";
		$scope.lName="";
		$scope.email="";
		$scope.description ="";
         $('#map').hide();
		$scope.send = function(){
			console.log($scope.fName," ",$scope.lName.length);
			if($scope.fName.length > 2 && $scope.lName.length > 2 && $scope.email.length >6 ){
				$("#success_message").show();
				$("#error_message").hide();
			}
			else{
				$("#error_message").show();
				$("#success_message").hide();
			}
		}
    });
