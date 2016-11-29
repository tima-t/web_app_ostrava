// create the controller and inject Angular's $scope
worldApp.controller('mainController', function($scope) {

    // create a message to display in our view
    $scope.message = 'World App!';
    $('#map').show();
});
