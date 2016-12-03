// create the controller and inject Angular's $scope
worldApp.controller('mainController', function($scope,SrvCountry,SharedResource) {
	// create a message to display in our view
	$scope.message = "How to use ?";
	$scope.rule1 = '1 Think about  a country';
	$scope.rule2 = "2 Find it on the Map";
	$scope.rule3 = "3 Click on it";
	$scope.rule4 = "4 Just enjoy it";
	$('#map').show();
	$scope.countryInfo = function(){
		var country = $("#hidCountry").text().trim();
		console.log(country);
		SrvCountry.getCountryInfo(country).then(
		function(val){
				 SharedResource.setElement('country',val.data[0]);
				 $('#myModal').modal('hide');
				 $('body').removeClass('modal-open');
				 $('.modal-backdrop').remove();
				 window.location.href = "#info";
		},
		function(error){
				 alert("You need internet acces");
		})
	}

});
