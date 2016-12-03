    worldApp.controller('infoController', function($scope,SharedResource,$timeout) {
            $scope.country = SharedResource.getElement("country");
             if($scope.country){
                $scope.message = "This is info about " + $scope.country.name;
            }
            else{
             $scope.message = "Please go to Map or Countries and select one!";
            }
            console.log(SharedResource.getElement("country"));
            $('#map').hide();    
    });
