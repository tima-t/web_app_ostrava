    worldApp.controller('infoController', function($scope,SharedResource,$timeout) {
         $timeout(function(){
            $scope.country = SharedResource.getElement("country");
             if($scope.country){
                $scope.message = "This is info about " + $scope.country.name;
            }
            else{
             $scope.message = "Please go to map tab or countries tab and selecta country";
            }
            console.log(SharedResource.getElement("country"));
            $('#map').hide();
         });      
    });
