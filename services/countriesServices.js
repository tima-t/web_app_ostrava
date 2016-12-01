worldApp.service('SrvCountry', function($http,$q) {
    this.getCountryInfo = function (name) {
        var def = $q.defer();
        console.log(" country name" + name);
        $http({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v1/name/' + name + '?fullText=true'
        })
        .then(
        function successCallback(response) {
             console.log("I am here loaded");
             console.log(response);
             def.resolve(response);            
         },
         function errorCallback(response) {
             def.reject(response);
         });

          return def.promise;
         
    }
});