worldApp.service('SrvCountry', function($http,$q) {
    this.getCountryInfo = function (name) {
        var def = $q.defer();
        $http({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v1/name/' + name + '?fullText=true'
        })
        .then(
        function successCallback(response) {
             def.resolve(response);            
         },
         function errorCallback(response) {
             def.reject(response);
         });
         return def.promise;
         
    }

    this.getAllCountries= function () {
        var def = $q.defer();
        $http({
            method: 'GET',
            url: "https://restcountries.eu/rest/v1/all"
        })
        .then(
        function successCallback(response) {
             def.resolve(response);            
         },
         function errorCallback(response) {
             def.reject(response);
         });
         return def.promise;
         
    }
});