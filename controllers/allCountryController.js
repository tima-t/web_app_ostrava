	worldApp.controller('allCountryController', function($scope,SrvCountry,SharedResource) {
		$scope.message = 'Here are all our countries. Select one of them and Learn More info!';
		$scope.filterT ='';
		$('#map').hide();
		if(SharedResource.getElement('all_countries')){
			$scope.countries = SharedResource.getElement('all_countries');
			console.log("every time",$scope.countries);
		}
		else{
			SrvCountry.getAllCountries().then(
				function(data){
					SharedResource.setElement('all_countries',data.data);
					$scope.countries = data.data;
					console.log("once ",data);
				},
				function(error){
					alert("You dont have internet or server is down! Try later");
				}
			)
		}



		$scope.newFilter= function(){
			if($scope.filterT == ""){
				$scope.countries = SharedResource.getElement('all_countries');
				return; 
			}


			$scope.countries = [];
			$scope.filterT = $scope.filterT.toLowerCase();
			var countries  = SharedResource.getElement('all_countries');
			for(var country of countries ){
				if(country.name.toLowerCase() == $scope.filterT || country.region.toLowerCase() == $scope.filterT){
					$scope.countries.push({'name':country.name,'region':country.region});
				}				
			}
		}

		$scope.getInfo = function(name){
				SrvCountry.getCountryInfo(name).then(
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

		$(document).keypress(function(e) {
    		if(e.which == 13) {
        		if($scope && $scope.newFilter){
					$scope.newFilter();
					$scope.$apply();
				}
   			}
		});

	});