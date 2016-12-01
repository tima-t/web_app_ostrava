// create the controller and inject Angular's $scope
worldApp.controller('mainController', function($scope,SrvCountry,SharedResource,$timeout) {
    // create a message to display in our view
    $scope.message = 'World App!';
    $('#map').show();
    $scope.countryInfo = function(){
        var country = $("#hidCountry").text().trim();
        console.log(country);
        SrvCountry.getCountryInfo(country).then(
        function(val){
                 //SharedResource.removeElement('country');
                  SharedResource.setElement('country',val.data[0]);
                //  console.log(SharedResource.getElement("country"));
                 $('#myModal').modal('hide');
                 $('body').removeClass('modal-open');
                 $('.modal-backdrop').remove();
                 window.location.href = "#info";
        },
        function(error){
                 //alert("You need internet acces");
                 console.log('error');
        })
    }

});
